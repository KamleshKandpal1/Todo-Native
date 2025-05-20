import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Filter from './components/Filter';
import Stats from './components/Stats';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  // getItem
  useEffect(() => {
    const lodoTodos = async () => {
      const saved = await AsyncStorage.getItem('todos');
      if (saved) setTodos(JSON.parse(saved));
    };
    lodoTodos();
  }, []);
  // setItem
  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  // addTodo
  const handleAddTodo = text => {
    if (text.trim() !== '') {
      setTodos([...todos, {id: Date.now(), title: text, isComplete: false}]);
    }
  };
  // toggleTodo
  const handleToggleComplete = id => {
    setTodos(prev =>
      prev.map(prevTodo =>
        prevTodo.id === id
          ? {...prevTodo, isComplete: !prevTodo.isComplete}
          : prevTodo,
      ),
    );
  };
  // deleteTodo
  const handleDeleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  // Filter Todo
  const filterTodos = todos.filter(todo =>
    filter === 'All'
      ? true
      : filter === 'Active'
      ? !todo.isComplete
      : todo.isComplete,
  );
  // Edit Todo
  const handleEditTodo = id => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? {...todo, title: editInput} : todo)),
    );
    setEditIndex(null); // exit edit mode
    setEditInput('');
  };

  const compeleteCount = todos.filter(todo => todo.isComplete).length;
  const totalTodo = todos.length;

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#0d0d0d',
        height: '100%',
        paddingHorizontal: 30,
      }}>
      <StatusBar backgroundColor={'#ff5730'} barStyle="dark-content" />
      <Text style={style.title}>Todo App</Text>
      <ScrollView>
        <Stats compeleteCount={compeleteCount} totalTodo={totalTodo} />
        <AddTodo addTodo={handleAddTodo} />
        <Filter setFilter={setFilter} filter={filter} />
        <TodoList
          todos={filterTodos}
          filter={filter}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          editInput={editInput}
          setEditInput={setEditInput}
          handleEditTodo={handleEditTodo}
          toggleBtn={handleToggleComplete}
          onDelete={handleDeleteTodo}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    padding: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 600,
    color: '#f1f1f1',
  },
});

export default App;
