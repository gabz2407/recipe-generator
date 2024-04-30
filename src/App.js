import "./App.css";

function App() {
  function handleInputValue(input) {
    console.log(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
