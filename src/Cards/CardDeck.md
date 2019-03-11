`<CardDeck />` component example:

```js
import {
  CardDeck,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  CardBlockquote,
  Small,
} from '$PACKAGE_NAME';

<CardDeck>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card decks</CardTitle>
      <CardText>Is also responsive with auto padding for separate cards</CardText>
    </CardBlock>
    <CardFooter>
      <Small className="text-muted">automatically</Small>
    </CardFooter>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card decks</CardTitle>
      <CardText>Can contain any amount of cars inside it too.</CardText>
    </CardBlock>
    <CardFooter>
      <Small className="text-muted">It adapt to screen size!</Small>
    </CardFooter>
  </Card>
</CardDeck>
```
