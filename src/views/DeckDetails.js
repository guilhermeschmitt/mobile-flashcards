import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';

class DeckDetails extends React.Component {

  render() {
    const { title, cards, id } = this.props.deck;

    return (
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.quantidade}>
            {`${cards.length} cards`}
          </Text>
        </View>

        <View>
          <TextButton
            style={styles.addCard}
            onPress={() => this.props.navigation.navigate('CreateCard', { deckId: id })}
          >
            Add Card
          </TextButton>

          {/* FIXME: Podia colocar um estilo diferente pro botão desabilitado, né? */}

          <TextButton
            style={styles.startQuiz}
            onPress={() => this.props.navigation.navigate('GameQuiz', { deckId: id })}
            disabled={!cards.length}
          >
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

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deck: state[deckId],
  }
}

export default connect(mapStateToProps)(DeckDetails);