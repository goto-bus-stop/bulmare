import { Section } from 'bulmare'

import Card from '../examples/Card'
import Menu from '../examples/Menu'
import Message from '../examples/Message'
import Tag from '../examples/Tag'

export default () => (
  <div>
    <Section>
      <Card />
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
