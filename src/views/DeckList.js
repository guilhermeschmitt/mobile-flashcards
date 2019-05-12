import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Deck from '../components/Deck';

const decks = [
  { title: 'Teste 1', quantidade: '3' },
  { title: 'Teste 2', quantidade: '8' },
  { title: 'Teste 3', quantidade: '9' },
  { title: 'Teste 4', quantidade: '9' },
  { title: 'Teste 5', quantidade: '9' },
  { title: 'Teste 6', quantidade: '9' },
  { title: 'Teste 7', quantidade: '9' },
  { title: 'Teste 8', quantidade: '9' },
]

class DeckList extends React.Component {

  renderItem = ({ item }) => (
    <Deck
      deck={item}
      key={item.title}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default DeckList;