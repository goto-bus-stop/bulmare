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

  function wrapDeclaration (decl, state) {
    // Only wrap Component exports (i.e. starting with a capital letter)
    if (!/^[A-Z]/.test(decl.get('id').node.name)) {
      return
    }

    if (decl.node.init) {
      state.file[needsSetDisplayNameImport] = true

      const initNode = decl.node.init
      const exportName = decl.node.id
      decl.get('init').replaceWith(setDisplayName(exportName.name, initNode))
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
