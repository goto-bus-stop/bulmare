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
    if (decl.node.init) {
      decl.get('init').replaceWith(
        setDisplayName(decl.node.id.name, decl.node.init)
      )
    }
  }

  function wrapDeclarations (declarations) {
    declarations.forEach(wrapDeclaration)
  }

  return {
    visitor: {
      ExportNamedDeclaration (path) {
        const declaration = path.get('declaration')
        if (declaration.node) {
          wrapDeclarations(declaration.get('declarations'))
        }
      }
    }
  }
}
