import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Layout from "./components/layout/Layout"
import ComingSoon from "./components/layout/ComingSoon"
import registerServiceWorker from './registerServiceWorker'

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
