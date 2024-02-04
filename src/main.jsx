import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <SkeletonTheme baseColor="#d9d9d9">
      <App />
    </SkeletonTheme>
    </Provider>
  </React.StrictMode>,
)
