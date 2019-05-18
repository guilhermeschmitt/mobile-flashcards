import { RECEIVE_DECKS, ADD_CARD, ADD_DECK } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...[action.deckId],
          cards: [
            ...[action.deckId].cards,
            {
              question: action.question,
              answer: action.answer
            }
          ]
        }
      }
    default:
      return state
  }
}

export default decks;