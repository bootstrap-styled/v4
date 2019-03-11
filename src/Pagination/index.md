`<Pagination />` component example:

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
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="javascript:;">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="javascript:;">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next href="javascript:;" />
  </PaginationItem>
</Pagination>
```
