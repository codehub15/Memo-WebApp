import React, { Component } from 'react'


export default class ListItem extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.editItem)
        this.state = {
            edit: false,
            editValue: this.props.item.text
        };
    }

    // edit item
    editFunc = (id) => {
        this.setState({
            edit: !this.state.edit
        }, () => {
            this.props.editItem(id, this.state.editValue);
        }
        );
    };

    render() {
        const data = this.props.item;

        return (
            <div>
                <li
                    onClick={() => {
                        this.props.completeItem(data.id);
                    }}
                >
                    {/* check edit state */}
                    {this.state.edit ?
                        (
                            <input
                                type="text"
                                value={this.state.editValue}
                                onChange={e => {
                                    this.setState({
                                        editValue: e.target.value
                                    });
                                }}
                            />
                        ) :
                        (
                            <p className={data.complete ? "cross-out" : null}>
                                {this.state.editValue}
                            </p>
                        )
                    }

                    {/* button to remove item */}
                    <button
                        onClick={() => this.props.removeItem(data.id)}
                        className="btn-delete"
                    >
                        &#128465;
                    </button>

                    {/* button to edit item */}
                    <button onClick={() => this.editFunc(data.id)}>
                        {this.state.edit ? "save" : "edit"}
                    </button>
                </li>
            </div>
        )
    }
}
