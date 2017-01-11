import { Section } from 'bulmare'

import Menu from '../examples/Menu'
import Message from '../examples/Message'
import Tag from '../examples/Tag'

export default () => (
  <div>
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
