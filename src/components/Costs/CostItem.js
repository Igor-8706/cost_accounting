import { useState } from 'react';
import CostDate from './CostDate';
import Card from '../UI/Card';
import './costItem.css'


function CostItem(props) {
    // console.log(props)
    const { date, description, amount } = props.date

    return (
        <li>
            <Card className='cost-item'>
                <CostDate data={date} />
                <div className='cost-item__description'>
                    <h2>{description}</h2>
                    <div className='cost-item__price'>{amount + '$'}</div>
                </div>
            </Card>
        </li>
    )
}

export default CostItem;