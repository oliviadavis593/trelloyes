import React from 'react';
import './List.css'
import Card from '../Card/Card';

function List(props) {
    return(
        <div className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map(card => 
                    <Card 
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    content={card.content}
                    onClickDelete={props.onClickDelete}
                    />    
                )}
                <button 
                type='button'
                onClick={() => props.onClickAdd(props.id)}
                >
                    + Add Random Button
                </button>
            </div>
        </div>
    )
}

List.defaultProps = {
    onClickAdd: () => {},
}

export default List; 

/*========= Delete Buttons (#2) ========== */
//We'll pass the callback prop into Card component instance 
//We'll also pass the id from List component instance from App.js so it removes the id from state
//List.js ===> Card.js

/*====================================== */
/*========= Add Random Button (#2) ========== */
//We'll pass the callback props into the + Add random button 
//Finally, we'll add defaultProps for the add button
