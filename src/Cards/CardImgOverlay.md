`<CardImgOverlay />` component example:

```js
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  CardText,
  Small,
} from '$PACKAGE_NAME';

<Card inverse width="50%">
  <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
  <CardImgOverlay>
    <CardTitle>Card Title</CardTitle>
    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
    <CardText>
      <Small className="text-muted">Last updated 3 mins ago</Small>
    </CardText>
  </CardImgOverlay>
</Card>
```
