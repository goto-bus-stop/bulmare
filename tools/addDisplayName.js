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

  function wrapDeclaration (decl) {
    // Only wrap Component exports (i.e. starting with a capital letter)
    if (!/^[A-Z]/.test(decl.get('id').node.name)) {
      return
    }

    if (decl.node.init) {
      decl.get('init').replaceWith(
        setDisplayName(decl.node.id.name, decl.node.init)
      )
    }
  }

  function wrapDeclarations (declarations) {
    declarations.forEach(wrapDeclaration)
  }

  const importSetDisplayName =
    t.importDeclaration([
      t.importDefaultSpecifier(t.identifier('setDisplayName'))
    ], t.stringLiteral('recompose/setDisplayName'))

  return {
    visitor: {
      ExportNamedDeclaration (path, state) {
        state.file[needsSetDisplayNameImport] = true
        const declaration = path.get('declaration')
        if (declaration.node) {
          wrapDeclarations(declaration.get('declarations'))
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
