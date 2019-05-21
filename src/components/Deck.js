import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { deckComponentStyle } from '../utils/styles';


const Deck = ({ title, cards, deckId, navigation }) => (
  <TouchableOpacity
    style={deckComponentStyle.container}
    onPress={() => navigation.navigate("DeckDetails", { deckId })}
  >
    <Text style={deckComponentStyle.title}>
      {title}
    </Text>
    <Text style={deckComponentStyle.quantidade}>
      {`${cards.length} cards`}
    </Text>
  </TouchableOpacity>
);;

export default Deck;