`<PaginationLink />` component example:

```js
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from '$PACKAGE_NAME';

<Pagination>
  <PaginationItem>
    <PaginationLink previous href="javascript:;" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="javascript:;">
      Link to somewhere
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next href="javascript:;" />
  </PaginationItem>
</Pagination>
```
