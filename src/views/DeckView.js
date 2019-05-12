import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from '../components/TextButton';

class DeckView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>
            TITULO
          </Text>
          <Text style={styles.quantidade}>
            X cards
          </Text>
        </View>

        <View>
          <TextButton style={styles.addCard}>
            Add Card
          </TextButton>

          <TextButton style={styles.startQuiz}>
            Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#696969',
  },
  quantidade: {
    color: '#a9a9a9',
    fontWeight: 'bold',
    fontSize: 20
  },
  startQuiz: {
    color: '#fff',
    backgroundColor: '#000'
  },
  addCard: {
    color: '#000',
    backgroundColor: '#fff'
  }
});

export default DeckView;