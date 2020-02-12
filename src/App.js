import React, { Component } from 'react';
import './App.css';
import List from './List/List';
import Store from './store'

function omit(obj, keyToOmit ) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj: {...newObj, [key]: value},
    {}
  );
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
    return {
      id, 
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    }
}

class App extends Component {
  
  state = {
    store: Store
  }

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
	return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };
  
  render() {
    const { store } = this.state;
    return(
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map((list) => (
            <List 
            key={list.id}
            id={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            onClickDelete={this.handleDeleteCard}
            onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App; 

/*========= Implementing State (#1) ========== */
// We need to refactor App component so that it uses state for the store rather than props 
// So we have to remove store from index.js and import it into App.js 

/*========================================== */

/*========= Delete Buttons (#1) ========== */
//We can give a callback props for the actions we need to perform for the delete
// 1st: We'll create an event handler 
//When deleting a card, we removed the references to that card in each lists cardIds (we combined map with a filter to generate a new list array after this)
//2nd: Using omit
//We'll use the omit function to remove key value pairs from an object 
//3rd: 
// We'll change the variable of store to state rather than this.props
//We'll pass id for the cardIds id to be deleted when a user click delete for a specific card
// Then we'll pass the event handler to the Component instance of List as it's the parent for the Cards
//App.js ===> List.js 

/*========================================== */

/*========= Add Random Button (#1) ========== */
//1st: We'll add a callback props for the cards 
//
//2nd: Addding Random Card function 
// This function to generate a random new card inside the event handler before adding it to state
// It also returns a new id, title, and content 
//3rd: We'll pass the callback function to the List component instance 
//App.js ===> List.js 