import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
import Layout from "./js/components/layout/Layout"
import ComingSoon from "./js/components/layout/ComingSoon"
import registerServiceWorker from './js/registerServiceWorker'

const UNDER_CONSTRUCTION = true

function WeddingApp() {
  return (
    <Layout sideMenu={!UNDER_CONSTRUCTION}>
      {UNDER_CONSTRUCTION ? (
        <ComingSoon />
      ) : (
        <App />
      )}
    </Layout>
  )
}

ReactDOM.render(<WeddingApp />, document.getElementById('root'))
registerServiceWorker()
