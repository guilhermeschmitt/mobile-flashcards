import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';
import { createCard } from '../actions';
import { addCard } from '../utils/api';

class NewCard extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  createNewCard = () => {
    const { dispatch, navigation } = this.props;
    const { deckId } = navigation.state.params;
    const { question, answer } = this.state;

    dispatch(createCard(deckId, question, answer));
    addCard(deckId, question, answer);

    this.setState(() => ({
      question: '',
      answer: ''
    }));

    this.props.navigation.navigate('DeckView', { deckId });

    //TODO: VERIFICAR SE TEM NOTIFICAÇÃO DE TELA
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <Text>
        {this.props.navigation.state.params.deckId}
      </Text>

        <InputText
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder="Question"
        />

        <InputText
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder="Answer"
        />

        <TextButton style={styles.submitButton} onPress={this.createNewCard}>
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

export default connect()(NewCard);
