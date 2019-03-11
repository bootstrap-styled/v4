`<Tooltip />` component example:

```js
import { Tooltip, A } from '$PACKAGE_NAME';

initialState = {
  isOpen: false,
};

<div>
  <p>Somewhere in here is a <A href="javascript:;" id="tooltip-example">tooltip</A>.</p>
  <Tooltip placement="right" isOpen={state.isOpen} target="tooltip-example" toggle={() => setState({ isOpen: !state.isOpen })}>
    Hello world!
  </Tooltip>
</div>
```
