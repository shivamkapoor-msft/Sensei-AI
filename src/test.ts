var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "Age": 16,
  "I learn better by reading what the teacher writes on the chalkboard.": 3,
  "When I read instructions, I remember them better.": 3,
  "I understand better when I read instructions.": 4,
  "I learn better by reading than by listening to someone.": 3,
  "I learn more by reading textbooks than by listening to lectures.": 2,
  "When the teacher tells me the instructions I understand better": 4,
  "When someone tells me how to do something in class, I learn it better.": 3,
  "I remember things I have heard in class better than things I have read.": 3,
  "I learn better in class when the teacher gives a lecture.": 2,
  "I learn better in class when I listen to someone.": 3,
  "I prefer to learn by doing something in class.": 4,
  "When I do things in class, I learn better.": 2,
  "I enjoy learning in class by doing experiments.": 2,
  "I understand things better in class when I participate in role-playing.": 3,
  "Gender": "Male"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/FHL", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));