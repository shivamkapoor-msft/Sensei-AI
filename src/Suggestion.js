import React from "react";
import "./Sugesstio.css";
const cardData = [
  {
    id: 1,
    title: "Solid States",
    description: "Solid-state in Chemistry is the study ",
    imageUrl: "images/solid states.jfif",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    description:
      "Artificial general intelligence (AGI), or general AI………read more",
    imageUrl: "/images/artificial inteligence.jfif",
  },
  {
    id: 3,
    title: "Probability",
    description: "Probability means possibility. It is a branch of………read more",
    imageUrl: "/images/pro.jfif",
  },
  {
    id: 4,
    title: "Laws of Motions",
    description: "Newton’s laws of motion imply the relationship………read more",
    imageUrl: "/images/newton.jfif",
  },
];
function Card({ data }) {
  return (
    <div className="cardss">
            <img src={data.imageUrl} alt="Card" />      <h2>{data.title}</h2>   
        {data.description}   {" "}
    </div>
  );
}
function App() {
  return (
    <div className="App">
           {" "}
      {cardData.map((card) => (
        <Card data={card} key={card.id} />
      ))}
         {" "}
    </div>
  );
}
export default App;
