import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation()

const OpenCounter = () => {
    navigation.navigate('Counter')
}

const OpenTodo = () => {
  navigation.navigate('Todo')
}


  return (
    <View style={{marginTop:100, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity >
        <Text onPress={OpenCounter} style={{color:'blue', fontSize:25}}>1.Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={OpenTodo} style={{marginTop:15}}>
        <Text style={{color:'blue', fontSize:25,}}>2.Todo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;


const styles = StyleSheet.create({})