import { useState } from "react";
import "./App.css";
import { Fruit } from "./components/Fruit";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
    { name: "watermelon", color: "red", price: 10},
    { name: "orange", color: "yellow", price: 5}
  ]);

  let myFruits = [
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
    { name: "watermelon", color: "red", price: 10},
    { name: "orange", color: "yellow", price: 5}
  ]

  function filterRedFruits() {
    setFruits(fruits.filter((elem) => elem.color === "red"));
  }

  function filterYellowFruits() {
    setFruits(fruits.filter((elem) => elem.color === "yellow"));
  }
  
  function allFruits() {
    setFruits(myFruits);
  }

  const totalPrice = fruits.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="App">
      <ul>
        <h3>Preço total = {totalPrice}</h3>
        {fruits.map((elem, index) => (
          <Fruit key={index} name={elem.name} />
        ))}
      </ul>
      <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      <button onClick={filterYellowFruits}>Mostrar frutas amarelas</button>
      <button onClick={allFruits}>Mostrar todas as frutas</button>
    </div>
  );
}

export default App;
