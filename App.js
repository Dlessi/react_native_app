import React,{Component} from 'react'; 
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import showsReducer from './src/reducers/showsReducer'
import Navigation from './src/navigation/Navigation'

const middleware = [thunk]
middleware.push(createLogger())

const store = createStore(showsReducer, applyMiddleware(...middleware))

class App extends Component{ 
  render() {
  return <Provider store={store}>
      <Navigation/>
    </Provider>;
  }
}
export default App


