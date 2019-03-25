import Document, { Head, Main, NextScript } from 'next/document'
 
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {
          	process.env.NODE_ENV === 'production' ?
      		  <script>{'window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}'}</script>
      		:
      		  ''
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
