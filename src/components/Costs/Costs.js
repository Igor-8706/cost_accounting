import { useState } from 'react'
import Card from '../UI/Card'
import CostsFilter from '../CostsFilter/CostsFilter'
import CostList from './CostList'
import CostsDiagram from './CostsDiagram'

import './Costs.css'

const Costs = (props) => {
    const [changedYear, setChangedYear] = useState('2021');
    const filteredCosts = props.costs.filter(item => item.date.getFullYear().toString() === changedYear)

    const onChangeYear = (year) => {
        setChangedYear(year)
    }


    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={changedYear} onChangeYear={onChangeYear} />
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    )
}

export default Costs;