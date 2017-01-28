import React from 'react'
import mapProps from 'recompose/mapProps'
import { bulmaComponent, withModifiers } from './internal'
import { Delete } from './misc'

export const Modal = bulmaComponent('div', 'modal',
  withModifiers({ open: 'is-active' })
)
export const ModalBackground = bulmaComponent('div', 'modal-background')
export const ModalClose = bulmaComponent('button', 'modal-close')
export const SimpleModal = ({ children, onClose, ...props }) => (
  <Modal {...props}>
    <ModalBackground onClick={onClose} />
    <ModalContent>
      {children}
    </ModalContent>
    <ModalClose onClick={onClose} />
  </Modal>
)

export const ModalContent = bulmaComponent('div', 'modal-content')
export const ModalCard = bulmaComponent('div', 'modal-card')
export const ModalCardTitle = bulmaComponent('p', 'modal-card-title')
export const ModalCardHeader = bulmaComponent('header', 'modal-card-head',
  // Add `onClose` handler and `title` shortcut props.
  mapProps(({ title, onClose, ...props }) => ({
    ...props,
    children: [
      title && <ModalCardTitle>{title}</ModalCardTitle>,
      onClose && <Delete onClick={onClose} />
    ].concat(props.children).filter(Boolean)
  }))
)
export const ModalCardBody = bulmaComponent('section', 'modal-card-body')
export const ModalCardFooter = bulmaComponent('footer', 'modal-card-foot')
