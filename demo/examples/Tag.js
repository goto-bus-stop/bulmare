import { Delete, Tag } from 'bulmare'

export default () => (
  <div>
    <p>
      <Tag>Tag label</Tag>
    </p>
    <p>
      <Tag black>Tag label</Tag>
      <Tag dark>Tag label</Tag>
      <Tag light>Tag label</Tag>
      <Tag white>Tag label</Tag>
      <Tag primary>Tag label</Tag>
      <Tag info>Tag label</Tag>
      <Tag success>Tag label</Tag>
      <Tag warning>Tag label</Tag>
      <Tag danger>Tag label</Tag>
    </p>
    <p>
      <Tag primary medium>Medium</Tag>
      <Tag info large>Large</Tag>
    </p>
    <p>
      <Tag success>
        Bar
        <Delete small />
      </Tag>
      <Tag warning medium>
        Hello
        <Delete small />
      </Tag>
      <Tag danger large>
        World
        <Delete  />
      </Tag>
    </p>
  </div>
)
