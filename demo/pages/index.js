import { Section } from 'bulmare'

import Card from '../examples/Card'
import Controls from '../examples/Controls'
import Form from '../examples/Form'
import Menu from '../examples/Menu'
import Message from '../examples/Message'
import Modal from '../examples/Modal'
import Tag from '../examples/Tag'

export default () => (
  <div>
    <Section>
      <Card />
    </Section>
    <Section>
      <Modal />
    </Section>
    <Section>
      <Controls />
    </Section>
    <Section>
      <Form />
    </Section>
    <Section>
      <Menu />
    </Section>
    <Section>
      <Message />
    </Section>
    <Section>
      <Tag />
    </Section>
  </div>
)
