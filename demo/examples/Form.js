import {
  HorizontalGroup,
  ControlGroup,
  ControlLabel,
  Control,
  Input,
  Textarea
} from 'bulmare'

export default () => (
  <form>
    <HorizontalGroup>
      <ControlLabel>From</ControlLabel>
      <ControlGroup>
        <Control expanded>
          <Input placeholder='Name' />
        </Control>
        <Control expanded>
          <Input type='email' placeholder='Email' />
        </Control>
      </ControlGroup>
    </HorizontalGroup>
    <HorizontalGroup>
      <ControlLabel>Subject</ControlLabel>
      <Control>
        <div className='select is-fullwidth'>
          <select>
            <option>General enquiry</option>
          </select>
        </div>
      </Control>
    </HorizontalGroup>
    <HorizontalGroup>
      <ControlLabel>Question</ControlLabel>
      <Control>
        <Textarea placeholder='Explain how we can help you' />
      </Control>
    </HorizontalGroup>
  </form>
)
