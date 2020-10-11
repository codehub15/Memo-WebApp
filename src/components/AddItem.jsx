import React, { Component } from 'react'
import ListItem from './ListItem'
import { CgPlayListAdd } from 'react-icons/cg'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
    }

    // add user input
    handleNewItem = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    // add user input to the memo list
    handleSubmit = (e) => {
        e.preventDefault();
        // check if user input is not empty, then run the function 
        if (this.state.userInput.trim() !== "") {
            // call the function to ad new item to array todo list
            this.props.addItem(this.state.userInput.trim())
            // empty the input again
            this.setState({
                userInput: ""
            })
        }
    }

    render() {
        const items = this.props.item;

        const memoList = items.map(item => {
            return (
                <ListItem
                    item={item}
                    key={item.text}
                    completeItem={this.props.completeItem}
                    removeItem={this.props.removeItem}
                    editItem={this.props.editItem}
                />
            )
        });

        return (
            <div className="list-item-container">
                <h2>My plan for the day</h2>

                <form className="memo-form" onSubmit={this.handleSubmit}>
                    <label className="input-item" for="user-input">
                        <input type="text"
                            name="todo"
                            id="user-input"
                            placeholder="add to plan"
                            value={this.state.userInput} onChange={this.handleNewItem} />
                    </label>
                    <button type="submit" className="btn add-btn"><CgPlayListAdd /> ADD</button>
                </form>

                <ul> {memoList} </ul>
            </div>
        )
    }
}
