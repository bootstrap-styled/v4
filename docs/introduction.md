<div align="center">
  <a href="https://bootstrap-styled.github.io">
    <img alt="bootstrap-styled" src="https://user-images.githubusercontent.com/1866564/50375497-cda74880-0630-11e9-9f1e-e8d798dff47b.png" />
  </a>
  <br/>
  <br/>
</div>

**If you don't know Bootstrap Styled, we suggest you to read [their documentation](https://bootstrap-styled.github.io) first.**

[![Build Status](https://travis-ci.org/bootstrap-styled/v4.svg?branch=master)](https://travis-ci.org/bootstrap-styled/v4)
[![npm Version](https://img.shields.io/npm/v/@bootstrap-styled/v4.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4)
[![License](https://img.shields.io/npm/l/@bootstrap-styled/v4.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4)
[![npm Version](https://img.shields.io/node/v/@bootstrap-styled/v4.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4)
[![Module formats](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4)
[![gitter](https://badges.gitter.im/bootstrap-styled/bootstrap-styled.svg)](https://gitter.im/bootstrap-styled)

[twbs/bootstrap](https://github.com/twbs/bootstrap) **V4** UI Components made with [bootstrap-styled](https://bootstrap-styled.github.io). Work with css-in-js, [react](https://github.com/facebook/react), [styled-components](https://github.com/styled-components/styled-components), and Bootstrap Styled utilities.

## In practice

This is example is a counter made with React and Bootstrap Styled with a custom theme, we:

- Use `<App />` as application wrapper for our example.
- Customize it's `theme` props .
- Use a `<BootstrapProvider />` to modify the theme and inject bootstrap classes utilities in the scope such as `.d-inline`, `.mt-2` ...
- Use a few bootstrap components such `<Alert />`, `<Code />`, `<A />`, `<Strong />`, `<Small />`

```js
initialState = {
  counter: 1336
};


/**
* @public
* @description The <BootstrapProvider> inject bootstrap class utilities and a theme that can be customized.
* @param {string} title - Your title, you can edit it through <BootstrapHello />
* @param {string} name - Your name, you can edit it through <BootstrapHello />
* @param {object} theme - A theme object, see https://bootstrap-styled.github.io for more details
* @returns {component} - The Hello example
*/
const App = ({ title, name, theme }) => (
  <BootstrapProvider theme={theme}>
    <Card>
      <CardBlock>
        <H3 className="d-inline">
          Hello <Small>{title}</Small> <Strong>{name}</Strong>, <A>you</A>, can add <Code>1</Code> to
        </H3>
        {' '}
        <Badge color="danger" pill>
          <H3>${state.counter}</H3>
        </Badge>{' '}
        <Strong>by</Strong> pressing,
        <Button onClick={() => setState({ counter: state.counter + 1 })}>here</Button>. This
        <Code><Strong>module</Strong></Code> is a basic example with a custom Bootstrap Styled theme.

        {state.counter >= 1337 && (
          <Alert color="success"className="mt-2" uncontrolled>
            {state.counter === 1337 ? 'Congrats' : 'We won\'t tell anyone'}, now click on
            <Code><Strong>VIEW CODE</Strong></Code> button to learn how it work
          </Alert>
        )}

        {state.counter > 1500 && (
          <Alert color="warning"className="mt-2">Do you know the <Code><Strong>Code snippet</Strong></Code> can be edited in live?</Alert>
        )}
      </CardBlock>
    </Card>
  </BootstrapProvider>
);

// Create the example
<App title="young" name="padawan" theme={{
  '$font-family-base': 'Helvetica',
  '$body-color': '#EA638C',
  '$btn-primary-bg': '#190E4F',
  '$btn-border-radius': '.035rem',
  '$brand-danger': '#002A22',
  '$badge-color': '#2ed167',
  '$badge-pill-border-radius': '.5rem',
  '$alert-border-radius': '.35rem',
  '$alert-success-text': '#EA638C',
  '$alert-success-bg': '#03012C',
  '$link-color': '#CCC',
}} />
```

> Example can be edited. You can try to remove the theme props for `<App />`, the module will automatically adapt to the documentation theme without the need to refresh!
