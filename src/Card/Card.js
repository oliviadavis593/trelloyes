import React from 'react';
import './Card.css'

function Card(props) {
    return(
        <div className='Card'>
            <button 
            type='button'
            onClick={() => props.onClickDelete(props.id)}
            >
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

Card.propTypes = {
    onClickDelete: () => {}
}

export default Card; 

/*========= Delete Buttons (#3) ========== */
//Last step: 
// This is the final phase of getting the button to delete when state is inside the App component
//1st: We'll add the onClick method to the button
//We're using an arrow function that roots to the onClickDelete from List component instance inside App.js
//...and it'll take in the id inside the List component instance as well
//2nd:
// We'll add propTypes 