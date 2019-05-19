import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Deck = ({ title, cards, deckId, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate("DeckDetails", { deckId })}
  >
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.quantidade}>
      {`${cards.length} cards`}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#696969'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#696969',
  },
  quantidade: {
    color: '#a9a9a9',
    fontWeight: 'bold',
  }
});

export default Deck;