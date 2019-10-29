import React, {ComponentType, ReactElement} from 'react'

export function withWrapper<P>(wrapper: (element: ReactElement, props: P) => ReactElement) {
  type C = ComponentType<P>
  return function Wrapper(Component: C): C {
    return function(props: P) {
      return wrapper(<Component {...props}/>, props)
    }
  }
}
