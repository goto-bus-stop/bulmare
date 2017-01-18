import Document, { Head, Main, NextScript } from 'next/document'
import { Container, Nav, NavMenu, NavRight, NavItem, NavTab } from 'bulmare'
import Link from '../components/Link'

export default class extends Document {
  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.min.css' />
        </Head>
        <body>
          <Nav>
            <Container>
              <NavMenu left>
                <NavTab component={Link} href='/'>Home</NavTab>
              </NavMenu>
              <NavRight>
                <NavItem href='http://bulma.io'>Bulma</NavItem>
              </NavRight>
            </Container>
          </Nav>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
