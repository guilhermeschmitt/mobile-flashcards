import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TextButton from '../components/TextButton';

class QuizView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>
          1/2
        </Text>

        <View style={styles.info}>
          <Text style={styles.question}>
            QUESTION
          </Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.option}>
              Answer
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TextButton style={styles.correctButton}>
            Correct
          </TextButton>
          <TextButton style={styles.incorrectButton}>
            Incorrect
          </TextButton>
        </View>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingRight: 5,
  },
  count: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  info: {
    alignItems: 'center',
  },
  question: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5
  },
  option: {
    color: 'red',
    fontWeight: 'bold'
  },
  correctButton: {
    backgroundColor: 'green',
    color: 'white',
    borderColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
    color: 'white',
    borderColor: 'red',
  }
})

export default QuizView;