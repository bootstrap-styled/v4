`<ButtonGroup />` component example:

```js
import { Button, ButtonGroup } from '$PACKAGE_NAME';

<ButtonGroup>
  <Button color="primary">Left</Button>
  <Button color="primary">Middle</Button>
  <Button color="primary">Right</Button>
</ButtonGroup>
```

`<ButtonGroup />` component example with specific sizes:

```js
import { Button, ButtonGroup } from '$PACKAGE_NAME';

<div>
  <div>
    <ButtonGroup size="lg">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </div>
  <div>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </div>
  <div>
    <ButtonGroup size="sm">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </div>
</div>
```

Nested `<ButtonGroup />` component example:

```js
import { 
  Button, 
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from '$PACKAGE_NAME';

initialState = {
  dropdownOpen: false,
};

<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={state.dropdownOpen} toggle={() => setState({ dropdownOpen: !state.dropdownOpen})}>
    <DropdownToggle caret>Dropdown</DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>
```

Vertical nested `<ButtonGroup />` component example:

```js
import { 
  Button, 
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from '$PACKAGE_NAME';

initialState = {
  dropdownOpen: false,
};

<ButtonGroup vertical>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={state.dropdownOpen} toggle={() => setState({ dropdownOpen: !state.dropdownOpen})}>
  <DropdownToggle caret>Dropdown</DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>
```
