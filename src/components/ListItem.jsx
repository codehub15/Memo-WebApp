import React, { Component } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineSave } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'

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
            <>
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

                    <div className="btns">
                        {/* button to remove item */}
                        <button className="btn btn-delete"
                            onClick={() => this.props.removeItem(data.id)}
                        >
                            <RiDeleteBin6Line />
                        </button>

                        {/* button to edit item */}
                        <button className="btn save-btn" onClick={() => this.editFunc(data.id)}>
                            {this.state.edit ?
                                <div><AiOutlineSave /> SAVE</div>
                                :
                                <div><BiEditAlt /> EDIT</div>
                            }
                        </button>
                    </div>
                </li>
            </>
        )
    }
}
