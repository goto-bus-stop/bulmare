import { Card, CardHeader, CardContent, Content, Icon } from 'bulmare'

export default () => (
  <div>
    <Card>
      <CardHeader
        title='Component'
        icon={<Icon name='angle-down' />}
      />
      <CardContent>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a><br />
          <small>11:09 PM - 1 Jan 2016</small>
        </Content>
      </CardContent>
    </Card>
  </div>
)
