import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import todoreducer from './todoreducer';

const store = configureStore({
    reducer:{
        counter: counterReducer,
        todos: todoreducer,
    }
  
});
export default store;
