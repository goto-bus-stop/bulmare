import { bulmaComponent, withModifiers } from './internal'

export const Level = bulmaComponent('div', 'level', withModifiers({
  mobile: 'is-mobile'
}))
export const LevelLeft = bulmaComponent('div', 'level-left')
export const LevelRight = bulmaComponent('div', 'level-right')
export const LevelItem = bulmaComponent('div', 'level-item')
