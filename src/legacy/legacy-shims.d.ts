declare module '*.css'
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}

declare module 'react-router' {
  import type * as React from 'react'

  export const StaticRouter: React.ComponentType<Record<string, unknown> & { children?: React.ReactNode }>
}

declare module 'react-helmet-async' {
  import type * as React from 'react'

  export interface HelmetServerState {
    title?: { toString(): string }
    meta?: { toString(): string }
    link?: { toString(): string }
    script?: { toString(): string }
  }

  export const HelmetProvider: React.ComponentType<Record<string, unknown> & { children?: React.ReactNode }>
  export const Helmet: React.ComponentType<Record<string, unknown> & { children?: React.ReactNode }>
}

declare module 'react-router-dom' {
  import type * as React from 'react'

  type RouterProps = Record<string, unknown> & { children?: React.ReactNode }

  export const BrowserRouter: React.ComponentType<{ children?: React.ReactNode }>
  export const Routes: React.ComponentType<{ children?: React.ReactNode }>
  export const Route: React.ComponentType<RouterProps>
  export const Outlet: React.ComponentType
  export const Link: React.ComponentType<RouterProps>
  export const Navigate: React.ComponentType<RouterProps>
  export function useLocation(): { pathname: string }
  export function useNavigate(): (to: string, options?: Record<string, unknown>) => void
  export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T
}
