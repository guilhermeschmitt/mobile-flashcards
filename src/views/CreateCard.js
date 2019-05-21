import React from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';
import { createCard } from '../actions';
import { addCard } from '../utils/api';
import { createCardStyle } from '../utils/styles';

class CreateCard extends React.Component {

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

    navigation.navigate('DeckDetails', { deckId });

  }

  render() {
    return (
      <KeyboardAvoidingView
        style={createCardStyle.container}
        behavior="padding"
        enabled
      >

        <Text style={createCardStyle.header}>
          What's the question?
        </Text>

        <InputText
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder="How old are you?"
        />

        <InputText
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder="I'm xx years old."
        />

        <TextButton
          style={createCardStyle.submitButton}
          onPress={this.createNewCard}
        >
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(CreateCard);
