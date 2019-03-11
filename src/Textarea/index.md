The `<Textarea />` component defines a multi-line text input control.
This component has no props.

`<Textarea />` component example:

```js
import { Form, Textarea } from '$PACKAGE_NAME';

<Form>
  <Textarea className="w-100" name="text" id="example-text-area" />
</Form>
```

You can also use `<Input />` component of type `textarea` as below:

```js
import { Form, Input } from '$PACKAGE_NAME';

<Form>
  <Input type="textarea" name="text" id="example-text-area-input" />
</Form>
```
