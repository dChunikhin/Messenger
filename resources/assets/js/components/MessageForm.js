import React, {Component} from 'react';

export default class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: {
                    author: "dsa",
                    text: "",
                    date: ""
                }
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    static toFixDate() {
        const date = new Date();
        return date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    }
    handleInput(e) {
        const state = Object.assign({}, this.state.newMessage);
        state.author = "dsa";
        state.text = e.target.value;
        state.date = MessageForm.toFixDate();
        this.setState({newMessage: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newMessage);
        this.input.value = "";
    }

    render() {
        return (
            <form className={"MessageForm"} onSubmit={this.handleSubmit}>
                <input placeholder={"type here..."} ref={input => this.input = input} onChange={this.handleInput}/>
                <button disabled={this.state.newMessage.text == 0}>{"SEND"}</button>
            </form>
        )
    }
}