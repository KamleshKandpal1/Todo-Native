import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {
  const [text, setText] = useState('');
  return (
    <View style={style.inputBox}>
      <TextInput
        style={style.textInput}
        value={text}
        onChangeText={setText}
        placeholder="write your next task"
        returnKeyType="Done"
        onSubmitEditing={() => {
          addTodo(text);
          setText('');
        }}
        blurOnSubmit={true}
      />

      <TouchableOpacity
        style={style.button}
        onPress={() => {
          addTodo(text);
          setText('');
        }}>
        <Text style={style.buttonTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  inputBox: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  textInput: {
    borderRadius: 20,
    color: '#c5c6d0',
    backgroundColor: '#1e1e1e',
    paddingLeft: 20,
    width: '80%',
  },

  button: {
    width: 40,
    height: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff5730',
  },
  buttonTxt: {
    fontSize: 26,
    fontWeight: 900,
  },
});
export default AddTodo;
