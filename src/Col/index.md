`<Col />` component example:

```js
import { Col, Row } from '$PACKAGE_NAME';

<Row>
  <Col lg="2">
    1 of 3
  </Col>
  <Col xs="12" md="auto">
    Variable width content
  </Col>
  <Col lg="2">
    3 of 3
  </Col>
</Row>
```

You can use `offset`, `order`, `size`, `push`, `pull` modifier on any `Col` component:

```js
import { Col, Row } from '$PACKAGE_NAME';

<Row>
  <Col lg={2} md={{ offset: 4 }}>Hello</Col>
  <Col lg={10} md={2}>World</Col>
</Row>
```

Left empty to have automatic columns:

```js
import { Col, Row } from '$PACKAGE_NAME';

<Row>
  <Col>Hello</Col>
  <Col>World</Col>
</Row>
```
