`<ButtonDropdown />` component example:

```js
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '$PACKAGE_NAME';

initialState = {
  dropdownOpen: false,
};
<ButtonDropdown isOpen={state.dropdownOpen} toggle={() => setState({ dropdownOpen: !state.dropdownOpen })}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
```
