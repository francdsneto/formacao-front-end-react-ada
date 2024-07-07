// import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";
import { Memorization } from "./components/Concepts/Memorization";

function App() {
  return (
    <>
      <Header />;
      <Tasks />
      {/* <Refs /> */}
      <Memorization
        financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      />
    </>
  );
}

export default App;
