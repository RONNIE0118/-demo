declare module 'react' {
  export function useEffect(effect: () => void | (() => void), dependencies?: unknown[]): void
  export function useState<T>(initialValue: T): [T, (value: T | ((previous: T) => T)) => void]

  export const StrictMode: (props: { children?: unknown }) => unknown
}

declare module 'react-dom/client' {
  export function createRoot(container: Element): {
    render(children: unknown): void
  }
}

declare module 'react/jsx-runtime' {
  export const Fragment: unknown
  export function jsx(type: unknown, props: unknown, key?: unknown): unknown
  export function jsxs(type: unknown, props: unknown, key?: unknown): unknown
}

declare module '*.css'

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: unknown
  }
}
