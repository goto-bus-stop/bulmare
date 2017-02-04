import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import {
  Box,
  Button,
  Content,
  Modal,
  SimpleModal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter
} from 'bulmare'

const enhance = compose(
  withState('modal1IsOpen', 'setModal1Open', false),
  withState('modal2IsOpen', 'setModal2Open', false),
  withHandlers({
    openModal1: ({ setModal1Open }) => () => setModal1Open(true),
    openModal2: ({ setModal2Open }) => () => setModal2Open(true),
    closeModal1: ({ setModal1Open }) => () => setModal1Open(false),
    closeModal2: ({ setModal2Open }) => () => setModal2Open(false)
  })
)

export default enhance(({
  openModal1,
  openModal2,
  closeModal1,
  closeModal2,
  modal1IsOpen,
  modal2IsOpen
}) => (
  <div>
    <Button onClick={openModal1}>
      Open basic modal
    </Button>
    <SimpleModal open={modal1IsOpen} onClose={closeModal1}>
      <Box>
        <Content>
          Hello World!
        </Content>
      </Box>
    </SimpleModal>
    <Button onClick={openModal2}>
      Open modal card
    </Button>
    <Modal open={modal2IsOpen}>
      <ModalBackground onClick={closeModal2} />
      <ModalCard>
        <ModalCardHeader title='Modal title' onClose={closeModal2} />
        <ModalCardBody>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
            Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
            efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
            Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
            ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
            sem eget, facilisis sodales sem.
          </Content>
        </ModalCardBody>
        <ModalCardFooter>
          <Button primary onClick={closeModal2}>OK</Button>
          <Button onClick={closeModal2}>Cancel</Button>
        </ModalCardFooter>
      </ModalCard>
    </Modal>
  </div>
))
