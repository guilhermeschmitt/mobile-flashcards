import React from 'react';
import { TextInput } from 'react-native';
import { inputTextStyle } from '../utils/styles';

class InputText extends React.Component {
  render() {
    return (
      <TextInput
        style={inputTextStyle.input}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        placeholder={this.props.placeholder}
      />
    );
  }
};

export default InputText;