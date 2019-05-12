import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from '../components/TextButton';
import InputText from '../components/InputText';

class NewCard extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <InputText
          onChangeText={() => { }}
          value={undefined}
          placeholder='Question'
        />

        <InputText
          onChangeText={() => { }}
          value={undefined}
          placeholder='Answer'
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

export default NewCard;