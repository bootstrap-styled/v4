`<Breadcrumb />` component example:

```js
import {
  A,
  Breadcrumb,
  BreadcrumbItem,
} from '$PACKAGE_NAME';

<div>
  <Breadcrumb>
    <BreadcrumbItem active>Home</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbItem><A href="javascript:;">Home</A></BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb tag="nav">
    <BreadcrumbItem tag={A} href="javascript:;">Home</BreadcrumbItem>
    <BreadcrumbItem tag={A} href="javascript:;">Library</BreadcrumbItem>
    <BreadcrumbItem active tag="span">Data</BreadcrumbItem>
  </Breadcrumb>
</div>
```
