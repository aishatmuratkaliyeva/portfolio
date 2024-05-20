import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // ваш корневой редюсер

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
    