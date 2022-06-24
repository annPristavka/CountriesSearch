import React from 'react'
import Main from './components/Main'
import {Provider} from 'react-redux'
import store from './store/index'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
    
  );
}

export default App;
