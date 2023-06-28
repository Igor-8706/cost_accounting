import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import AddCost from './components/NewCost/AddCost'
const INITIAL_STATE = [
  {
    id: 'c1',
    date: new Date(2023, 3, 15),
    description: 'Холодильник',
    amount: '89'
  },
  {
    id: 'c2',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: '929'
  },
  {
    id: 'c3',
    date: new Date(2021, 11, 12),
    description: 'Холодильник',
    amount: '919'
  }
]

function App() {

  const [costs, setCosts] = useState(INITIAL_STATE);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs}/>
    </div>
  );
}

export default App;
