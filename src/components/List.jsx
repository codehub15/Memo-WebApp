import React, { Component } from 'react'
import ListItem from './ListItem'
import AddItem from './AddItem'


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 0, text: "be happy", complete: false },
                { id: 1, text: "relax", complete: true }
            ]
        }
    }

    // get saved items from the local storage
    componentDidMount() {
        let data = localStorage.getItem("memo-list");
        let parsedData = JSON.parse(data);

        if (parsedData !== null) {
            this.setState({
                items: parsedData
            })
        }
    }

    // add item to memo list
    addItem = (newItem) => {
        // create new item
        let item = { id: this.state.items.length, text: newItem, complete: false };
        // add new item to the array copy
        this.setState({
            items: [...this.state.items, item]
        }, () => {
            // archive items, save in local storage
            localStorage.setItem('memo-list', JSON.stringify(this.state.items));
        }
        )
    }


    // edit item
    editItem = (id, newInput) => {
        console.log(id, newInput)
        let newState = this.state.items.map(item => {
            if (item.id === id) {
                item.text = newInput;
                return item
            } else {
                return item
            }
        });
        console.log(newState)
        this.setState({
            items: newState
        }, () => {

            // archive items, save in local storage
            localStorage.setItem('memo-list', JSON.stringify(this.state.items))
        })
    }


    // cross out completed task
    completeItem = (id) => {
        const newState = this.state.items.map(item => {
            if (item.id === id) {
                item.complete = !item.complete;
                return item;
            } else {
                return item;
            }
        })
        // update the state
        this.setState({
            items: newState
        }, () => {
            // archive items, save in local storage
            localStorage.setItem('memo-list', JSON.stringify(this.state.items))
        })
    }


    // delete item from memo list
    removeItem = (id) => {
        const newArr = this.state.items.splice(id, 1);
        this.setState({
            items: newArr
        }, () => {
            // archive items, save in local storage
            localStorage.setItem('memo-list', JSON.stringify(this.state.items))
        })
    }


    render() {
        const memoItem = this.state.items.map((item) => {
            return item;
        });

        return (
            <div>
                <AddItem
                    item={memoItem}
                    addItem={this.addItem}
                    completeItem={this.completeItem}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                />

                {/** 
                <ListItem
                    item={memoItem}
                    addItem={this.addItem}
                    completeItem={this.completeItem}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                />
                */}
            </div>
        )
    }
}
