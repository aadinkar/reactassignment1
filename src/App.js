import './App.css';
import * as React from 'react';
import Tabs from "./components/tabs";
import Order from "./components/order"
import RTable from "./components/table"

function App() {

  return (
    <div className="App">
      <Order></Order>
      <br/>
      <Tabs>
        <div label="All">
        <RTable></RTable>
        </div>
        <div label="Buy">
        </div>
        <div label="Sell">
        </div>
      </Tabs>
      {/* <h2></h2> */}
    </div>
    
  );
}

export default App;
