import React, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const clickHandler = () => {
    setPeople([]);
  };
  return (
    <div>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={clickHandler}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
