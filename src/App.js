import React from 'react';
import Store from './Store/configureStore'
import { Provider } from 'react-redux';
import WeAll from "./Weall";

export default class App extends React.Component {

  render() {
    return (
        <Provider store={Store}>
          <div>
            <WeAll/>
          </div>
        </Provider>
    )
  }
}
