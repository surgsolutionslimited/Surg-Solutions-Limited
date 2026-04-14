import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import App from './App'

interface RenderContext {
  helmet?: HelmetServerState
}

export function render(url: string, context: RenderContext) {
  const helmetContext: any = {}
  
  const appHtml = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )

  context.helmet = helmetContext.helmet

  return appHtml
}
