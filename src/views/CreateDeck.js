import React from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';
import { createDeck } from '../actions';
import { addDeck } from '../utils/api';
import { createDeckStyle } from '../utils/styles';
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
      cards: [],
    };

    dispatch(createDeck(deck));
    addDeck(deck);

    navigation.navigate('DeckDetails', { deckId: deck.id });

    this.setState({ title: '' });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={createDeckStyle.container}
        behavior="padding" 
        enabled
      >
        <Text style={createDeckStyle.header}>
          What are you going to study?
        </Text>

        <InputText
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          placeholder="e.g React native"
        />

        <TextButton
          style={createDeckStyle.submitButton}
          onPress={this.createNewDeck}
        >
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(CreateDeck);