`<A />` component example:

```js
import { A, P } from '$PACKAGE_NAME';
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
import { Button } from '$PACKAGE_NAME';
<Button tag={A} color="danger" href="javascript:;">Visit Bootstrap Styled !</Button>
```

### React Router

We recommend you to use package [@yeutech-lab/react-router-dom-utils](https://github.com/yeutech-lab/react-router-dom-utils):

```js static
import { Link } from '@yeutech-lab/react-router-dom-utils';

export default (
  <Link
   tag={A}
   waitChunk={true}
   // You can pass routes as props
   routes={[{ name: 'Home', component: Home, path: '/' }]}
   // OR a ContextConsumer that own it
   ContextConsumer={AppContextConsumer}
   onClick={actionStartLoadingIndicator}
   onPreload={() => console.log(`
     chunk load in the background on mouseover or
     when user click if waitChunk is true
   `)}
   onLoaded={actionStopLoadingIndicator}
  />
);
```

This component support preloading `onMouseOver` and add lifeCycle event hooks.

Read [`<Link />` documentation](https://yeutech-lab.github.io/react-router-dom-utils/#link) for more.

### ComposeLink

This is an HoC that can wrap the css of the A component to any of your components.

```js static
import composeLink from '@bootystrap-styled/v4/lib/A/composeLink';

const Link = composeLink(MyRouteurLink);
```

This was created not to create any dependencies between this package and [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) or sub parties librarise that provide your application routing.


