import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeToDo} from '../../Reducer/todoreducer';

const Todo = () => {
  const todos = useSelector(state => state.todos.todo);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const addItem = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeToDo(id));
  };

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{color: '#000', fontWeight: 'bold', fontSize: 25}}>
          Todo
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <TextInput
          value={todoText}
          onChangeText={setTodoText}
          style={{
            borderWidth: 0.5,
            width: '70%',
            borderRadius: 10,
            backgroundColor: '#f1f1f1',
            marginTop: 30,
          }}
        />
        <TouchableOpacity
          onPress={addItem}
          style={{backgroundColor: 'blue', marginTop: 20, borderRadius: 5}}>
          <Text style={{color: '#fff', padding: 5}}>Enter</Text>
        </TouchableOpacity>
      </View>
      <View>
        {todos.map((todo, index) => (
          <View style={{marginHorizontal:22, marginTop:10, flexDirection:'row', justifyContent:'space-between'}} key={index}>
            <Text style={{color: '#000'}}>
              {index + 1}.{todo.text}
            </Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(todo.id)} style={{backgroundColor:'red', padding:5,}}>
                <Text style={{color:'#fff', fontWeight:'bold'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({});
