import {
    bulmaComponent,
    withColorModifiers,
    withSizeModifiers
} from './internal'

// http://bulma.io/documentation/elements/box/
export const Box = bulmaComponent('div', 'box')

// http://bulma.io/documentation/elements/content/
export const Content = bulmaComponent('div', 'content', withSizeModifiers)

// http://bulma.io/documentation/elements/delete/
export const Delete = bulmaComponent('button', 'delete', withSizeModifiers)

// http://bulma.io/documentation/elements/notification/
export const Notification = bulmaComponent('div', 'notification', withColorModifiers)

// http://bulma.io/documentation/elements/tag/
export const Tag = bulmaComponent('span', 'tag', withColorModifiers, withSizeModifiers)

// http://bulma.io/documentation/elements/progress/
export const Progress = bulmaComponent('progress', 'progress', withSizeModifiers)
