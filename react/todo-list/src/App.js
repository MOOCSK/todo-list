import React, { Component, Fragment } from 'react';

import TodoList from './component/todo-list/TodoList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div><TodoList/></div>
      </Fragment>
    );
  }
}

export default App;
