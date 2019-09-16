import React from "react";
import "./App.css";
import store from "./STORE";
import List from "./List";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
