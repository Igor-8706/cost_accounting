import './NewCost.css'

const AddCost = (props) => {
    return (
            <div className='new-cost__actions' style={{textAlign: 'center'}}>
                <button onClick={props.setShowForm} type='submit' >Добавить новый расход</button>
            </div>
    )
}

export default AddCost