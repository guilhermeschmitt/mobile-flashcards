import { RECEIVE_DECKS, CREATE_CARD, CREATE_DECK } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case CREATE_DECK:
      const { id, title, cards } = action.deck;
      return {
        ...state,
        [id]: {
          id,
          title,
          cards
        }
      }
    case CREATE_CARD:
      const { deckId, answer, question } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: [
            ...state[deckId].cards,
            {
              question,
              answer
            }
          ]
        }
      }
    default:
      return state
  }
}

export default decks;