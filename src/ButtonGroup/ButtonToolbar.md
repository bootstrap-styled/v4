`<ButtonToolbar />` component example:

```js
import { Button, ButtonToolbar, ButtonGroup } from '$PACKAGE_NAME';

<ButtonToolbar>
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
```

`<ButtonToolbar />` component example with `<InputGroup />`:

```js
import { Button, ButtonToolbar, ButtonGroup, Input, InputGroup, InputGroupAddon } from '$PACKAGE_NAME';

<ButtonToolbar>
  <ButtonGroup className="mr-2">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <InputGroup>
    <InputGroupAddon>@</InputGroupAddon>
    <Input placeholder="username" />
  </InputGroup>
</ButtonToolbar>
```

`<ButtonToolbar />` component example with **justified displayed** `<InputGroup />`:

```js
import { Button, ButtonToolbar, ButtonGroup, Input, InputGroup, InputGroupAddon } from '$PACKAGE_NAME';

<ButtonToolbar className="justify-content-between">
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <InputGroup>
    <InputGroupAddon>@</InputGroupAddon>
    <Input placeholder="username" />
  </InputGroup>
</ButtonToolbar>
```
