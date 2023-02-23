import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function Popup() {
  const [show, setShow] = useState(false);
  const [buttonContent, setbuttonContent] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const [answer15, setAnswer15] = useState("");

  const handleAnswerChange1 = (event) => {
    setAnswer1(event.target.value);
    console.log(answer1)
  };
  const handleAnswerChange2 = (event) => {
    setAnswer2(event.target.value);
    console.log(answer2);
  };

  const handleAnswerChange3 = (event) => {
    setAnswer3(event.target.value);
    console.log(answer3);
  };

  const handleAnswerChange4 = (event) => {
    setAnswer4(event.target.value);
    console.log(answer4);
  };

  const handleAnswerChange5 = (event) => {
    setAnswer5(event.target.value);
    console.log(answer5);
  };

  const handleAnswerChange6 = (event) => {
    setAnswer6(event.target.value);
    console.log(answer6);
  };

  const handleAnswerChange7 = (event) => {
    setAnswer7(event.target.value);
    console.log(answer7);
  };

  const handleAnswerChange8 = (event) => {
    setAnswer8(event.target.value);
    console.log(answer8);
  };

  const handleAnswerChange9 = (event) => {
    setAnswer9(event.target.value);
  };

  const handleAnswerChange10 = (event) => {
    setAnswer10(event.target.value);
  };

  const handleAnswerChange11 = (event) => {
    setAnswer11(event.target.value);
  };

  const handleAnswerChange12 = (event) => {
    setAnswer12(event.target.value);
  };

  const handleAnswerChange13 = (event) => {
    setAnswer13(event.target.value);
  };

  const handleAnswerChange14 = (event) => {
    setAnswer14(event.target.value);
  };

  const handleAnswerChange15 = (event) => {
    setAnswer15(event.target.value);
  };

  const content = {
    Age: 16,
    "I learn better by reading what the teacher writes on the chalkboard.": parseInt(answer1),
    "When I read instructions, I remember them better.": parseInt(answer2),
    "I understand better when I read instructions.": parseInt(answer3),
    "I learn better by reading than by listening to someone.": parseInt(answer4),
    "I learn more by reading textbooks than by listening to lectures.": parseInt(answer5),
    "When the teacher tells me the instructions I understand better": parseInt(answer6),
    "When someone tells me how to do something in class, I learn it better.": parseInt(answer7),
    "I remember things I have heard in class better than things I have read.": parseInt(answer8),
    "I learn better in class when the teacher gives a lecture.": parseInt(answer9),
    "I learn better in class when I listen to someone.": parseInt(answer10),
    "I prefer to learn by doing something in class.": parseInt(answer11),
    "When I do things in class, I learn better.": parseInt(answer12),
    "I enjoy learning in class by doing experiments.": parseInt(answer13),
    "I understand things better in class when I participate in role-playing.": parseInt(answer14),
    Gender: "Male",
  }
  const [response, setResponse] = useState("");
  var raw = JSON.stringify(content);
  var myHeaders = new Headers();
  //myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    // mode: "no-cors",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const handleClose = () => {
    setShow(false);
    showAlert();
    
  };
 
  const showAlert = () => {
    setbuttonContent("");
  };
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    setShow(false);
    setbuttonContent("abcd")
    console.log(answer1 + answer2 + answer3 + answer4 + answer5 + answer6);
    e.preventDefault();
    try {      
    fetch("http://localhost:5000/FHL", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.data);
          setResponse(result.data);
        })
        .then(()=>{
          if(response === 'A')
          {
            setResponse("Auditory")
          }
          else if(response === 'R')
          {
            setResponse('Reading')
          }
          else if(response === 'V')
          {
            setResponse('Visual');
          }
        })
        .catch((error) => console.log("error", error));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button variant="btn btn-secondary" onClick={handleShow}>
        {buttonContent === ""
          ? "Take Survey"
          : `Your Learning style is ${response}`}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Answer the most relevant one according to you
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "150vh" }}>
          <div className="survey-form-pop-up">
            {/* <form style={{ width: "100vh" }}> */}
            <div
              className="d-flex justify-content-center "
              style={{ height: "225vh", width: "80vh" }}
            >
              <Form margin="auto">

                <Form.Group>
                  <Form.Label id="1">
                    1. I learn better by reading what the teacher writes on the
                    chalkboard.
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      name="q1"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer1=== "1"}
                      onChange={handleAnswerChange1}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q1"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer1 === "2"}
                      onChange={handleAnswerChange1}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q1"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer1 === "3"}
                      onChange={handleAnswerChange1}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q1"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer1 === "4"}
                      onChange={handleAnswerChange1}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q1"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer1 === "5"}
                      onChange={handleAnswerChange1}
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
                      value="1"
                      checked={answer2 === "1"}
                      onChange={handleAnswerChange2}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q2"
                      id="q2-b"
                      label="Disagree"
                      value="2"
                      checked={answer2 === "2"}
                      onChange={handleAnswerChange2}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q2"
                      id="q2-c"
                      label="Neutral"
                      value="3"
                      checked={answer2 === "3"}
                      onChange={handleAnswerChange2}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q2"
                      id="q2-d"
                      label="Agree"
                      value="4"
                      checked={answer2 === "4"}
                      onChange={handleAnswerChange2}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q2"
                      id="q2-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer2 === "5"}
                      onChange={handleAnswerChange2}
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
                      value="1"
                      checked={answer3 === "1"}
                      onChange={handleAnswerChange3}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q3"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer3 === "2"}
                      onChange={handleAnswerChange3}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q3"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer3 === "3"}
                      onChange={handleAnswerChange3}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q3"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer3 === "4"}
                      onChange={handleAnswerChange3}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q3"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer3 === "5"}
                      onChange={handleAnswerChange3}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    4. I remember things I have heard in class better than
                    things I have read
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      name="q4"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer4 === "1"}
                      onChange={handleAnswerChange4}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q4"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer4 === "2"}
                      onChange={handleAnswerChange4}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q4"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer4 === "3"}
                      onChange={handleAnswerChange4}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q4"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer4 === "4"}
                      onChange={handleAnswerChange4}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q4"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer4 === "5"}
                      onChange={handleAnswerChange4}
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
                      value="1"
                      checked={answer5 === "1"}
                      onChange={handleAnswerChange5}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q5"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer5 === "2"}
                      onChange={handleAnswerChange5}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q5"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer5 === "3"}
                      onChange={handleAnswerChange5}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q5"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer5 === "4"}
                      onChange={handleAnswerChange5}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q5"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer5 === "5"}
                      onChange={handleAnswerChange5}
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
                      value="1"
                      checked={answer6 === "1"}
                      onChange={handleAnswerChange6}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q6"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer6 === "2"}
                      onChange={handleAnswerChange6}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q6"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer6 === "3"}
                      onChange={handleAnswerChange6}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q6"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer6 === "4"}
                      onChange={handleAnswerChange4}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q6"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer6 === "5"}
                      onChange={handleAnswerChange6}
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
                      value="1"
                      checked={answer7 === "1"}
                      onChange={handleAnswerChange7}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q7"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer7 === "2"}
                      onChange={handleAnswerChange7}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q7"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer7 === "3"}
                      onChange={handleAnswerChange7}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q7"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer7 === "4"}
                      onChange={handleAnswerChange7}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q7"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer7 === "5"}
                      onChange={handleAnswerChange7}
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
                      value="1"
                      checked={answer8 === "1"}
                      onChange={handleAnswerChange8}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q8"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer8 === "2"}
                      onChange={handleAnswerChange8}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q8"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer8 === "3"}
                      onChange={handleAnswerChange8}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q8"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer8 === "4"}
                      onChange={handleAnswerChange8}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q8"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer8 === "5"}
                      onChange={handleAnswerChange8}
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
                      value="1"
                      checked={answer9 === "1"}
                      onChange={handleAnswerChange9}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q9"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer9 === "2"}
                      onChange={handleAnswerChange9}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q9"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer9 === "3"}
                      onChange={handleAnswerChange9}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q9"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer9 === "4"}
                      onChange={handleAnswerChange9}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q9"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer9 === "5"}
                      onChange={handleAnswerChange9}
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
                      value="1"
                      checked={answer10 === "1"}
                      onChange={handleAnswerChange10}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q10"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer10 === "2"}
                      onChange={handleAnswerChange10}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q10"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer10 === "3"}
                      onChange={handleAnswerChange10}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q10"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer10 === "4"}
                      onChange={handleAnswerChange10}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="q10"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer10 === "5"}
                      onChange={handleAnswerChange10}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  {" "}
                  <Form.Label>
                    {" "}
                    11. I learn better in class when I listen to someone.
                  </Form.Label>{" "}
                  <div>
                    {" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q11"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer11 === "1"}
                      onChange={handleAnswerChange11}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q11"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer11 === "2"}
                      onChange={handleAnswerChange11}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q11"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer11 === "3"}
                      onChange={handleAnswerChange11}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q11"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer11 === "4"}
                      onChange={handleAnswerChange11}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q11"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer11 === "5"}
                      onChange={handleAnswerChange11}
                    />{" "}
                  </div>{" "}
                </Form.Group>{" "}
                <Form.Group>
                  {" "}
                  <Form.Label>
                    {" "}
                    12. I prefer to learn by doing something in class.
                  </Form.Label>{" "}
                  <div>
                    {" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q12"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer12 === "1"}
                      onChange={handleAnswerChange12}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q12"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer12 === "2"}
                      onChange={handleAnswerChange12}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q12"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer12 === "3"}
                      onChange={handleAnswerChange12}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q12"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer12 === "4"}
                      onChange={handleAnswerChange12}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q12"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer12 === "5"}
                      onChange={handleAnswerChange12}
                    />{" "}
                  </div>{" "}
                </Form.Group>{" "}
                <Form.Group>
                  {" "}
                  <Form.Label>
                    {" "}
                    13. When I do things in class, I learn better.
                  </Form.Label>{" "}
                  <div>
                    {" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q13"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer13 === "1"}
                      onChange={handleAnswerChange13}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q13"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer13 === "2"}
                      onChange={handleAnswerChange13}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q13"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer13 === "3"}
                      onChange={handleAnswerChange13}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q13"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer13 === "4"}
                      onChange={handleAnswerChange13}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q13"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer13 === "5"}
                      onChange={handleAnswerChange13}
                    />{" "}
                  </div>{" "}
                </Form.Group>{" "}
                <Form.Group>
                  {" "}
                  <Form.Label>
                    {" "}
                    14. I enjoy learning in class by doing experiments.
                  </Form.Label>{" "}
                  <div>
                    {" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q14"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer14 === "1"}
                      onChange={handleAnswerChange14}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q14"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer14 === "2"}
                      onChange={handleAnswerChange14}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q14"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer14 === "3"}
                      onChange={handleAnswerChange14}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q14"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer14 === "4"}
                      onChange={handleAnswerChange14}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q14"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer14 === "5"}
                      onChange={handleAnswerChange14}
                    />{" "}
                  </div>{" "}
                </Form.Group>{" "}
                <Form.Group>
                  {" "}
                  <Form.Label>
                    {" "}
                    15. I understand things better in class when I participate
                    in role-playing.
                  </Form.Label>{" "}
                  <div>
                    {" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q15"
                      id="q1-a"
                      label="Strongly Disagree"
                      value="1"
                      checked={answer15 === "1"}
                      onChange={handleAnswerChange15}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q15"
                      id="q1-b"
                      label="Disagree"
                      value="2"
                      checked={answer15 === "2"}
                      onChange={handleAnswerChange15}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q15"
                      id="q1-c"
                      label="Neutral"
                      value="3"
                      checked={answer15 === "3"}
                      onChange={handleAnswerChange15}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q15"
                      id="q1-d"
                      label="Agree"
                      value="4"
                      checked={answer15 === "4"}
                      onChange={handleAnswerChange15}
                    />{" "}
                    <Form.Check
                      inline
                      type="radio"
                      name="q15"
                      id="q1-d"
                      label="Strongly Agree"
                      value="5"
                      checked={answer15 === "5"}
                      onChange={handleAnswerChange15}
                    />{" "}
                  </div>{" "}
                </Form.Group>
                {/* <Button inline
                    className="d-flex justify-content-center"
                    type="submit"
                  >
                    Submit
                  </Button> */}
                {/* <Button inline onClick={() => this.setState({ showPopUp: false })}>
                Close
                  </Button> */}
                {/* Add the rest of the questions here */}
              </Form>
            </div>

            {/* </form> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
