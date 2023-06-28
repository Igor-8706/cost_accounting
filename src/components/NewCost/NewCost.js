import { useState } from "react";
import CostForm from "./CostForm"
import AddCost from "./AddCost";
import './NewCost.css'

const NewCost = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveDataCostHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
    }



    return (
        <div className="new-cost">
            {showForm ? <CostForm onSaveCostData = {saveDataCostHandler} setShowForm={() => setShowForm(!showForm)}/> : <AddCost setShowForm={() => setShowForm(!showForm)}/>}
        </div>
    )
}

export default NewCost