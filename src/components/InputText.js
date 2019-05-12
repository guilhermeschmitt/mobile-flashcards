import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class InputText extends React.Component {
  render() {
    return (
      <TextInput
        style={styles.inputText}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        placeholder={this.props.placeholder}
      />
    );
  }
};

const styles = StyleSheet.create({
  inputText: {
    height: 50,
    borderWidth: 1,
    borderColor: '#336633',
    width: 300,
    borderRadius: 5,
    padding: 5,
    marginTop: 15,
    marginBottom: 15,
  }
})

export default InputText;