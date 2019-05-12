import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';

class NewDeck extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          What is the title of your new deck?
        </Text>

        <InputText
          onChangeText={() => {}}
          value={undefined}
          placeholder='Deck title'
        />

        <TextButton style={styles.submitButton}>
          Submit
        </TextButton>
      </View>
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
    textAlign: 'center'
  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#000'
  }
});

export default NewDeck;