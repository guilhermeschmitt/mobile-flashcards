import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Deck extends React.Component {
  render() {
    const { title, quantidade } = this.props.deck;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.quantidade}>
          {`${quantidade} cards`}
        </Text>
      </View>
    )
  }
}

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