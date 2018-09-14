import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    state = {
        list: [],
        inputValue: ''
    };

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({
            inputValue: value
        });
    }

    handleButtonClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem key={index} 
                        content={item} 
                        index={index} 
                        delete={this.handleDelete} />
                );
            })
        );
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </div>
        );
    }

}

export default TodoList;