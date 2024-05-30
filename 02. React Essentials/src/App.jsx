import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
