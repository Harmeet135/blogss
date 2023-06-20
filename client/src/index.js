import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './redux/reducers/rootreducer';

import App from './App';

const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
  });
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

