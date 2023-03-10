import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import { Component } from 'react';

class MultipleChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      answer: ''
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAnswerChange(event) {
    this.setState({ answer: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // do something with the selected answer
    console.log(this.state.answer);
  }

  render() {
    return (
      <div>
       <button
          onClick={() => this.setState({ showPopUp: true })}
        >
          Take Survey
        </button>
        {this.state.showPopUp ? (
          <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicQuestion">
          <Form.Label>What is the capital of France?</Form.Label>
          <Form.Check
            type="radio"
            name="answer"
            label="Paris"
            value="Paris"
            checked={this.state.answer === "Paris"}
            onChange={this.handleAnswerChange}
          />
          <Form.Check
            type="radio"
            name="answer"
            label="Berlin"
            value="Berlin"
            checked={this.state.answer === "Berlin"}
            onChange={this.handleAnswerChange}
          />
          <Form.Check
            type="radio"
            name="answer"
            label="Madrid"
            value="Madrid"
            checked={this.state.answer === "Madrid"}
            onChange={this.handleAnswerChange}
          />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
      ) : null}
      </div>
    );
  }
}

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      answer: ''
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAnswerChange(event) {
    this.setState({ answer: event.target.value });
    console.log(this.state.answer+ "anni")
  }

  handleSubmit(event) {
    event.preventDefault();
    // do something with the selected answer
    console.log(this.state.answer);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ showPopUp: true })}
        >
          Take Survey
        </button>
        {this.state.showPopUp ? (
          <div className="survey-form-pop-up">
              <div
                className="d-flex justify-content-center "
                style={{ height: "200vh" }}
              >
                  <h3 className="d-flex justify-content-center">
                    Answer the most relevant one according to you
                  </h3>
                  <Form.Group>
                    <Form.Label id="1">
                      1. I learn better by reading what the teacher writes on
                      the chalkboard.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q1"
                        id="q1-a"
                        label="Strongly Disagree"
                        value="Paris"
                        checked={this.state.answer === "Paris"}
                        onChange={this.handleAnswerChange}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q1"
                        id="q1-b"
                        value="Paris"
            checked={this.state.answer === "Paris"}
            onChange={this.handleAnswerChange}
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q1"
                        id="q1-c"
                        value="Paris"
            checked={this.state.answer === "Paris"}
            onChange={this.handleAnswerChange}
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q1"
                        value="Paris"
                        checked={this.state.answer === "Paris"}
                        onChange={this.handleAnswerChange}
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q1"
                        value="Paris"
                        checked={this.state.answer === "Paris"}
                        onChange={this.handleAnswerChange}
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label id="2">
                      {" "}
                      2. When I read instructions, I remember them better.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q2"
                        id="q2-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q2"
                        id="q2-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q2"
                        id="q2-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q2"
                        id="q2-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q2"
                        id="q2-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      3. I understand better when I read instructions.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q3"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q3"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q3"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q3"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q3"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      4. I remember things I have heard in class better than things
                      I have read
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q4"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q4"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q4"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q4"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q4"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      5. I learn better in class when the teacher gives a lecture
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q5"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q5"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q5"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q5"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q5"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      {" "}
                      6. I learn better by reading than by listening to someone.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q6"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q6"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q6"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q6"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q6"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      7. I learn more by reading textbooks than by listening to
                      lectures.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q7"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q7"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q7"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q7"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q7"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      8. When the teacher tells me the instructions I understand
                      better
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q8"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q8"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q8"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q8"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q8"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      9. When someone tells me how to do something in class, I
                      learn it better.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q9"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q9"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q9"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q9"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q9"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      10. I learn better in class when I listen to someone.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q10"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q10"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q10"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q10"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q10"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      11. I learn better in class when I listen to someone.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q11"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q11"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q11"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q11"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q11"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      12. I prefer to learn by doing something in class.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q12"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q12"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q12"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q12"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q12"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      13. When I do things in class, I learn better.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q13"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q13"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q13"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q13"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q13"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      14. I enjoy learning in class by doing experiments.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q14"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q14"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q14"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q14"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q14"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      15. I understand things better in class when I participate in
                      role-playing.
                    </Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="q15"
                        id="q1-a"
                        label="Strongly Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q15"
                        id="q1-b"
                        label="Disagree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q15"
                        id="q1-c"
                        label="Neutral"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q15"
                        id="q1-d"
                        label="Agree"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="q15"
                        id="q1-d"
                        label="Strongly Agree"
                      />
                    </div>
                  </Form.Group>
                  <Button inline
                    className="d-flex justify-content-center"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button inline onClick={() => this.setState({ showPopUp: false })}>
                Close
                  </Button>
                  {/* Add the rest of the questions here */}
                {/* </Form> */}
              </div>
             
          </div>
        ) : null}
      </div>
    );
  }
}

export default MultipleChoiceQuestion;