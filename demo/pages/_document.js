import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render () {
    return (
     <html>
       <Head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.min.css" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}