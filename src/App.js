import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  function handleResponse(response) {
    console.log(response.data.answer);
    setAnswer(response.data.answer);
  }

  function handleInputValue(input) {
    setInput(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let prompt = `Generate a recipe about ${input}`;
    let context = `Accordingly to your knowledge about world foods, generate a healthy recipe. Please answer in this format:<h2>Recipe Name</h2><br /> <h4>Ingredients:</h4><ul><li>Ingredients list</li></ul><h4>Instructions:</h4><p></p>`;
    let apiKey = "ad4a76bd16e24537a83abaf57d8dcaa3";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="App">
      <header>Recipe Generator</header>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a recipe"
          onChange={handleInputValue}
        />
        <input type="submit" value="Search" />
      </form>
      <div>{answer}</div>
      {/* option buttons
      - vegan
      - vegetarian
      - carnivore
      - pescatarian */}
    </div>
  );
}

export default App;
