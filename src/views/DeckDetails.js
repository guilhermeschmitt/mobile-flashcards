import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';
import { deckDetailsStyle } from '../utils/styles';

class DeckDetails extends React.Component {

  render() {
    const { title, cards, id } = this.props.deck;

    return (
      <View style={deckDetailsStyle.container}>
        <View style={deckDetailsStyle.containerInfo}>
          <Text style={deckDetailsStyle.title}>
            {title}
          </Text>
          <Text style={deckDetailsStyle.quantidade}>
            {`${cards.length} cards`}
          </Text>
        </View>

        <View>
          <TextButton
            style={deckDetailsStyle.startQuiz}
            onPress={() => this.props.navigation.navigate('GameQuiz', { deckId: id })}
            disabled={!cards.length}
          >
            Start Quiz
          </TextButton>

          <TextButton
            style={deckDetailsStyle.addCard}
            onPress={() => this.props.navigation.navigate('CreateCard', { deckId: id })}
          >
            Add Card
          </TextButton>
        </View>
      </View>
    )
  }

}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deck: state[deckId],
  };
}

export default connect(mapStateToProps)(DeckDetails);