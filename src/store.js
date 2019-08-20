import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
