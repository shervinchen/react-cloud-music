import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './routes/index.js'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

export default App
