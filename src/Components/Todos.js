import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {

	let TodoItems;

	if (this.props.todos){
		TodoItems = this.props.todos.map(todo => {
			return (
				<TodoItem key={todo.title} todo={todo} />
			);
		});
	}

    return (
      <div className="Todos">
       <h3>Latest Todos</h3>

        {TodoItems}
      </div>
    );
  }
}

export default Todos;
