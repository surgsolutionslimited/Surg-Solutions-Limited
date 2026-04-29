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
