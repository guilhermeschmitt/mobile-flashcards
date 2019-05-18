import { AsyncStorage } from "react-native";

const FLASHCARD_STORAGE_KEY = 'Flashcard:deckTESTE';

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(response => JSON.parse(response));
}

export function addDeck(deck) {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: deck
    })
  );
}

export function addCard(deckId, question, answer) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(response => {
      const data = JSON.parse(response);

      data[deckId] = {
        ...data[deckId],
        cards: [
          ...data[deckId].cards,
          {
            question,
            answer
          }
        ]
      };

      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
    });
}