# with-wrapper

[![GitHub](https://img.shields.io/github/license/awmleer/with-wrapper.svg?logo=github)](https://github.com/awmleer/with-wrapper)
[![npm version](https://img.shields.io/npm/v/with-wrapper.svg?logo=npm)](https://www.npmjs.com/package/with-wrapper)
[![npm downloads](https://img.shields.io/npm/dw/with-wrapper.svg?logo=npm)](https://www.npmjs.com/package/with-wrapper)
![React](https://img.shields.io/npm/dependency-version/with-wrapper/peer/react?logo=react)

React HOC for wrapper components.

## Usage

```jsx
import {withWrapper} from 'with-wrapper'

export const App = withWrapper((element, props) => (
  <div className="wrapper">
    {element}
  </div>
))((props) => {
  return (
    <p>
      This is App.
    </p>
  )
})
```

The above component will be rendered as:

```html
<div class="wrapper">
  <p>
    This is App.
  </p>
</div>
```
