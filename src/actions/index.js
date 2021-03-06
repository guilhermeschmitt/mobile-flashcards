export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const CREATE_CARD = 'CREATE_CARD';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function createDeck(deck) {
  return {
    type: CREATE_DECK,
    deck
  }
}

export function createCard(deckId, question, answer) {
  return {
    type: CREATE_CARD,
    deckId,
    question,
    answer
  }
}