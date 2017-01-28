import {
  Label,
  Control,
  ControlGroup,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Button,
  Icon
} from 'bulmare'

export default () => (
  <form>
    <Label>Name</Label>
    <Control>
      <Input placeholder='Text input' />
    </Control>
    <Label>Username</Label>
    <Control iconRight={<Icon small name='check' />}>
      <Input success placeholder='Text input' value='bulma' />
      <span className='help is-success'>This username is available</span>
    </Control>
    <Label>Email</Label>
    <Control iconRight={<Icon small name='warning' />}>
      <Input danger placeholder='Email input' value='hello@' />
      <span className='help is-danger'>This email is invalid</span>
    </Control>
    <Label>Subject</Label>
    <Control>
      <span className='select'>
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </span>
    </Control>
    <Label>Message</Label>
    <Control>
      <Textarea placeholder='Textarea' />
    </Control>
    <Control>
      <label className='checkbox'>
        <Checkbox />
        Remember me
      </label>
    </Control>
    <Control>
      <label className='radio'>
        <Radio name='question' />
        Yes
      </label>
      <label className='radio'>
        <Radio name='question' />
        No
      </label>
    </Control>
    <ControlGroup>
      <Control>
        <Button primary>Submit</Button>
      </Control>
      <Control>
        <Button link>Cancel</Button>
      </Control>
    </ControlGroup>
  </form>
)
