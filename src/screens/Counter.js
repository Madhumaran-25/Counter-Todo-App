import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  reset,
  addRandom,
} from '../../Reducer/counterReducer';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const addNumber = Number(number) || 0;

  const addRandomNumber = () => {
    dispatch(addRandom(addNumber));
    setNumber('');
    console.log("clicked")
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Counter</Text>
      </View>

      <Text style={styles.countNo}>{count}</Text>

      <View style={styles.btns}>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={styles.btn}>
          <Text style={styles.btntxt}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={styles.btn}>
          <Text style={styles.btntxt}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(reset())} style={styles.btn}>
          <Text style={styles.btntxt}>reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.hdr2}>Add random number</Text>
        <TextInput
          value={number}
          onChangeText={setNumber}
          placeholder="Enter a random number"
          style={styles.numToAdd}
        />
        <TouchableOpacity
          onPress={addRandomNumber}
          style={styles.btn}>
          <Text style={styles.btntxt}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  title: {
    color: 'blue',
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine:'underline'
  },
  input: {
    marginTop: 50,
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 0.5,
    width: '30%',
    height: 100,
    borderRadius: 6,
    backgroundColor: '#D0D0D0',
    textAlign: 'center',
    fontSize: 35,
  },
  btns: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '50%',
    marginLeft: 100,
  },
  countNo: {
    fontSize: 50,
    textAlign: 'center',
    color: '#000',
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 6,
  },
  btntxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addContainer: {marginTop: 50, alignItems: 'center'},
  hdr2: {fontWeight: 'bold', color: '#000', fontSize: 20},
  numToAdd: {
    borderWidth: 0.5,
    borderRadius: 6,
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
  },
});
