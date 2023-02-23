import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [flashcardData, setFlashcardData] = useState(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("Loading...");

  const handleSearch = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
      setFlashcardData("Hello")
  };

  return (
    <div className="container mt-4">
      <Form
        onSubmit={handleSearch}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4"
      >
        <Row>
          <Col md={1}>
            <h4 className="mb-4">Topic: </h4>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="What do you want to learn...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
            Search
            </Button>
          </Col>
        </Row>
        {flashcardData ? (
            <Card className="mb-4">
            <Card.Body >
            <Card.Text>{response}</Card.Text>
          </Card.Body>
          </Card>
      ) : (
        <p></p>
      )}
      </Form>

    </div>
  );
}

export default Search;
