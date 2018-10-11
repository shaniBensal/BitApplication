import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootStore from './store/RootStore'
import './assets/styles.css'
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const store = new RootStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


