import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';
import { createDeck } from '../actions';
import { addDeck } from '../utils/api';
import { generateUID } from '../utils/utils';

class CreateDeck extends React.Component {

  state = {
    title: '',
  };

  createNewDeck = () => {
    const { dispatch, navigation } = this.props;
    const deck = {
      id: generateUID(),
      title: this.state.title,
      cards: []
    };

    dispatch(createDeck(deck))
    addDeck(deck);

    navigation.navigate('DeckDetails', { deckId: deck.id });

    this.setState({ title: '' })
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
      >
        <Text style={styles.header}>
          What is the title of your new deck?
        </Text>

        <InputText
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          placeholder="Deck title"
        />

        <TextButton
          style={styles.submitButton}
          onPress={this.createNewDeck}
        >
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 45,
    color: '#696969',
    padding: 10,
    textAlign: 'center',
  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#000',
  },
});

export default connect()(CreateDeck);
