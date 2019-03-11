`<CardText />` component example:

```js
import {
  Card,
  CardTitle,
  CardText,
} from '$PACKAGE_NAME';


<Card width="50%" block>
  <CardTitle>Special Title Treatment</CardTitle>
  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
</Card>
```

`<CardText />` component example with **inverted text**:

```js
import {
  Card,
  CardBlock,
  CardTitle,
  CardText,
  Button,
} from '$PACKAGE_NAME';

<Card inverse backgroundColor="orange" borderColor="green">
  <CardBlock>
    <CardTitle>Special Title Treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBlock>
</Card>
```
