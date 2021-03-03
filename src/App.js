import React from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './routes/index.js'

import { Provider } from 'react-redux'
import store from './store'

import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
}

export default App
