import { Spinner, Container } from 'react-bootstrap'

// Spinner de carga 
const Loading = () => {
  return (
    <div className="mt-5 mb-5">
      <Container className="d-flex justify-content-center ">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="dark" />
      </Container>
    </div>
  )
}

export default Loading