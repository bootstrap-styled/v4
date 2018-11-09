`<A />` component example:

```js
<div>
  <A href="javascript:;">Visit Bootstrap Styled</A>!
  <P>
    <A color="success" href="javascript:;">Visit Bootstrap Styled! </A>
    (This link is colored with the props color.)
  </P>
</div>
```
Or as a `<Button />`:


```js
<Button tag={A} color="danger" href="javascript:;">Visit Bootstrap Styled !</Button>
```

### ComposeLink

This is an HoC that can wrap the css of the A component to any of your components.

```js static
import composeLink from '@bootystrap-styled/v4/lib/A/composeLink';

const Link = composeLink(MyRouteurLink);
```
