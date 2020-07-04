import React, { Component } from 'react';
import PropTypes from 'prop-types';

class  ToDoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.markComplete.bind(this)}/> {' '}
                <p>{ this.props.todo.title } </p>
            </div>
        )
    }

}

//PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default ToDoItem;
