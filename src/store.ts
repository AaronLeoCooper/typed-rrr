import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as UserRedux from './modules/User/UserRedux';

const rootReducer = combineReducers({
  [UserRedux.NAMESPACE]: UserRedux.default
});

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
