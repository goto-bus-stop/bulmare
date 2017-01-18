import nest from 'recompose/nest'
import { bulmaComponent } from './internal'

// http://bulma.io/documentation/layout/container/
export const Container = bulmaComponent('div', 'container')
export const Header = nest(bulmaComponent('div', 'header'), Container)
export const Hero = nest(bulmaComponent('div', 'hero'), Container)
export const Section = nest(bulmaComponent('div', 'section'), Container)
export const Footer = nest(bulmaComponent('div', 'footer'), Container)
