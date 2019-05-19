import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton({ children, onPress, disabled = false, style = {} }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.reset, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    borderWidth: 1,
    borderColor: '#336633',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 10,
    width: 150,
    textAlign: 'center',
    borderRadius: 5,
  }
}) 