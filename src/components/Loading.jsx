import { Spinner, Button } from "react-bootstrap";

const Loading = () => {
  return (
    <Button variant="Secundary" disabled>
    <Spinner
      animation="grow"
      size="sm"
    />
    Loading...
  </Button>
  )
}

export default Loading