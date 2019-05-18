import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';
import { createDeck } from '../actions';
import { addDeck } from '../utils/api';
import { generateUID } from '../utils/utils';

class NewDeck extends React.Component {
  state = {
    title: '',
  };

  onChangeText = title =>
    this.setState(() => ({
      title,
    }));

  _createDeck = () => ({
    id: generateUID(),
    title: this.state.title,
    cards: [],
  })

  createNewDeck = () => {
    const { dispatch } = this.props;
    const deck = this._createDeck();

    dispatch(createDeck(deck))
    addDeck(deck);

    this.props.navigation.navigate('DeckView', {
      deckId: deck.id,
      title: deck.title
    });

    this.setState(() => ({
      title: '',
    }));

    //TODO: VERIFICAR SE TEM NOTIFICAÇÃO DE TELA
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.header}>What is the title of your new deck?</Text>

        <InputText
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          placeholder="Deck title"
        />

        <TextButton style={styles.submitButton} onPress={this.createNewDeck}>
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

export default connect()(NewDeck);
