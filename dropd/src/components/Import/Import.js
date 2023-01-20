import { Form } from 'react-bootstrap';

function Import() {
  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Excel File</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </>
  );
}

export default Import;