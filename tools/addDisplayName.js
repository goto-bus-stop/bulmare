const needsSetDisplayNameImport = Symbol('needs setDisplayName import')

module.exports = ({ types: t }) => {
  function setDisplayName (name, original) {
    return t.callExpression(
      t.callExpression(
        t.identifier('setDisplayName'),
        [t.stringLiteral(name)]
      ),
      [original]
    )
  }

  function declareTempVariable (name, value) {
    return t.variableDeclaration('let', [
      t.variableDeclarator(name, value)
    ])
  }

  const isProduction = t.binaryExpression(
    '!==',
    t.memberExpression(
      t.memberExpression(t.identifier('process'), t.identifier('env')),
      t.identifier('NODE_ENV')
    ),
    t.stringLiteral('production')
  )

  function setDisplayNameIfProduction (exportName, tempName, initNode) {
    return [
      declareTempVariable(tempName, initNode),
      t.ifStatement(isProduction, t.expressionStatement(
        t.assignmentExpression(
          '=',
          tempName,
          setDisplayName(exportName.name, tempName)
        )
      ))
    ]
  }

  function wrapDeclaration (decl, state) {
    // Only wrap Component exports (i.e. starting with a capital letter)
    if (!/^[A-Z]/.test(decl.get('id').node.name)) {
      return
    }

    if (decl.node.init) {
      state.file[needsSetDisplayNameImport] = true

      const initNode = decl.node.init
      const exportName = decl.node.id

      const tempName = decl.parentPath.scope.generateUidIdentifier(exportName.name)
      decl.parentPath.parentPath.insertBefore(
        setDisplayNameIfProduction(exportName, tempName, initNode)
      )
      decl.get('init').replaceWith(tempName)
    }
  }

  function wrapDeclarations (declarations, state) {
    declarations.forEach((decl) => wrapDeclaration(decl, state))
  }

  const importSetDisplayName =
    t.importDeclaration([
      t.importDefaultSpecifier(t.identifier('setDisplayName'))
    ], t.stringLiteral('recompose/setDisplayName'))

  return {
    visitor: {
      ExportNamedDeclaration (path, state) {
        const declaration = path.get('declaration')
        if (declaration.node) {
          wrapDeclarations(declaration.get('declarations'), state)
        }
      },

      Program: {
        exit (path, state) {
          if (state.file[needsSetDisplayNameImport]) {
            path.unshiftContainer('body', importSetDisplayName)
          }
        }
      }
    }
  }
}
