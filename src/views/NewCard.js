import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';

class NewCard extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  createNewCard = () => {
    //TODO: CHAMA O REDUCER

    //TODO: CHAMA A FUNÇÃO PARA ADICIONAR NO BANCO

    this.setState(() => ({
      question: '',
      answer: ''
    }));

    //TODO: VAI PRA PÁGINA PRINCIPAL

    //TODO: VERIFICAR SE TEM NOTIFICAÇÃO DE TELA
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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

export default NewCard;
