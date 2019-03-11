`<AccordionGroup />` component example:

```js
import { 
  A,
  Accordion,
  AccordionGroup,
  CardBlock,
  Strong,
} from '$PACKAGE_NAME';

initialState = {
  activeAccordionName: 'Accordion1',
};

<div>
  <AccordionGroup 
    activeAccordionName={state.activeAccordionName} 
    onChange={(activeAccordionName) => setState({ activeAccordionName })}
  >
    <Accordion heading="Collapsible Group Item #1" name="Accordion1">
     <CardBlock>
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </CardBlock>
    </Accordion>
    <Accordion heading={<A>Collapsible Group Item #2</A>} name="Accordion2">
     <CardBlock>
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </CardBlock>
    </Accordion>
    <Accordion heading={<Strong>Collapsible Group Item #3</Strong>} name="Accordion3">
     <CardBlock>
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </CardBlock>
    </Accordion>
  </AccordionGroup>
</div>
```
