`<Badge />` component example:

Badges scale to match the size of the immediate parent element by using relative font sizing and em units:

```js
import { H4, H5, H6, Badge } from '$PACKAGE_NAME';

<div>
  <H4>Heading <Badge>New</Badge></H4>
  <H5>Heading <Badge>New</Badge></H5>
  <H6>Heading <Badge>New</Badge></H6>
</div>
```

It could also be used in order to provide a counter:

```js
import { P, Badge, Button } from '$PACKAGE_NAME';

<div>
  <P>Messages <Badge color="primary">33</Badge></P>
  <Button>Messages <Badge color="danger">33</Badge></Button>
  <P>Updates <Badge color="warning" pill tag={A} href="https://bootstrap-styled.github.io" target="_blank">1</Badge></P>
</div>

```
