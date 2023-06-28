import './CostForm.css'
import { useState } from 'react'

const CostForm = (props) => {

    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    })

    const nameChangeHandler = (event) => {
        setUserInput((previousState) => ({
            ...previousState,
            name: event.target.value
        }))
    }
    const amountChangeHandler = (event) => {
        setUserInput((previousState) => ({
            ...previousState,
            amount: event.target.value
        }))
    }
    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                date: event.target.value
            }
        })
    }

    const submitHabdler = (e, props) => {
        e.preventDefault();
        props.setShowForm()
        const { name, amount, date } = userInput
        const costData = { description: name, amount: amount, date: new Date(date) }
        props.onSaveCostData(costData);
        setUserInput(
            {
            name: '',
            amount: '',
            date: ''
        });
    }

    return (
        <form onSubmit={(e) => submitHabdler(e, props)}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input value={userInput.name} type='text' onChange={nameChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input value={userInput.amount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input value={userInput.date} onChange={dateChangeHandler} type='date' min='2019-01-01' step='2023-12-31' />
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                    <button onClick={props.setShowForm} type='button'>Отмена</button>
                </div>
            </div>
        </form>
    )

}

export default CostForm