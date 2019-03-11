`<BreadcrumbItem/>` component example:

```js
import { Breadcrumb, BreadcrumbItem } from '$PACKAGE_NAME';

<Breadcrumb>
  <BreadcrumbItem>Breadcrum item</BreadcrumbItem>
</Breadcrumb>
```

**Active** `<BreadcrumbItem/>` component example:

```js
import { Breadcrumb, BreadcrumbItem } from '$PACKAGE_NAME';

<Breadcrumb>
  <BreadcrumbItem active>Active breadcrumb item</BreadcrumbItem>
</Breadcrumb>
```

`<BreadcrumbItem/>` component  with specific tag example:

```js
import { A, Breadcrumb, BreadcrumbItem } from '$PACKAGE_NAME';

<Breadcrumb>
  <BreadcrumbItem tag={A} href="javascript:;">Breadcrumb item with 'A' tag</BreadcrumbItem>
  <BreadcrumbItem active tag="span">Breadcrumb item with 'span' tag</BreadcrumbItem>
</Breadcrumb>
```
