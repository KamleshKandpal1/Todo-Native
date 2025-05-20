import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

const TodoList = ({
  todos,
  toggleBtn,
  onDelete,
  filter,
  editIndex,
  editInput,
  setEditIndex,
  setEditInput,
  handleEditTodo,
}) => {
  return (
    <ScrollView>
      {todos.length === 0 ? (
        <Text style={styles.emptyText}>
          {filter === 'All'
            ? 'No todos available.'
            : `No ${filter.toLowerCase()} todos found.`}
        </Text>
      ) : (
        todos.map(todo => (
          <View key={todo.id} style={styles.line}>
            <View style={styles.inputs}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => toggleBtn(todo.id)}>
                {todo.isComplete && <View style={styles.inner} />}
              </TouchableOpacity>
              {editIndex === todo.id ? (
                <TextInput
                   style={styles.textInput}
                  value={editInput}
                  onChangeText={setEditInput}
                  autoFocus
                  returnKeyType="Done"
                  onSubmitEditing={() => {
                    handleEditTodo(todo.id);
                  }}
                  onBlur={()=>setEditIndex(null)}
                  blurOnSubmit={true}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setEditIndex(todo.id);
                    setEditInput(todo.title);
                  }}>
                  <Text style={styles.textInput} selectable={true}>
                    {todo.title}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity onPress={() => onDelete(todo.id)}>
              <Text style={styles.del}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
    fontSize: 16,
  },
  line: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    display: 'flex',
    backgroundColor: '#1e1e1e',
  },
  inputs: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: '',
    gap: 12,
  },
  textInput: {
    fontSize: 15,
    color: '#f1f1f1',
    fontWeight: 400,
    width: '100%',
  },
  outer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c5c6d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 17,
    height: 17,
    borderRadius: 8.5,
    backgroundColor: '#ff5730',
  },
  del: {
    fontSize: 20,
    paddingRight: 5,
  },
});

export default TodoList;
