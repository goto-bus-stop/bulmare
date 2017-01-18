import { bulmaComponent, withColorModifiers } from './internal'

// http://bulma.io/documentation/components/message/
export const Message = bulmaComponent('article', 'message', withColorModifiers)
export const MessageHeader = bulmaComponent('div', 'message-header')
export const MessageBody = bulmaComponent('div', 'message-body')
