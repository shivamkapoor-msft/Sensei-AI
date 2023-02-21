import React from "react";
import "./App.css";
import Navbar1 from "./Navbar";
import Search from "./Search";
import Suggestion from "./Suggestion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = {
    name: "Anni kumari",
    profilePic: "https://via.placeholder.com/150",
    userClass: "Class 5th   ",
  };

  return (
    <div className="App">
      <Navbar1
        name={user.name}
        profilePic={user.profilePic}
        userClass={user.userClass}
      />
      <Search />
      <div className="container">
        <h2 className="text-left" style={{ alignItems: 'left' }}>Suggestions</h2>
        <hr className="mb-4" />
      </div>
      <Suggestion />
    </div>
  );
}

export default App;
