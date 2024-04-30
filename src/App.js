import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleResponse(response) {
    console.log(response.data.answer);
  }

  function handleInputValue(input) {
    console.log(input.target.value);
    setInput(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let prompt = `Generate a recipe about ${input}`;
    let context = `Accordingly to your knowledge about world foods, generate a healthy recipe`;
    let apiKey = "8bc029ce07bb99a925obf42d966t543f";
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

      {/* option buttons
      - vegan
      - vegetarian
      - carnivore
      - pescatarian */}
    </div>
  );
}

export default App;
