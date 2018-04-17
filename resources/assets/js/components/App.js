import React, {Component} from 'react';
import DialogList from './DialogList';
import DialogWindow from './DialogWindow';
import Invitation from "./Invitation"
import '../../sass/components/App.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogs: props.dialogs,
            messages: props.messages,
            currentDialog: props.dialogs.length ? props.dialogs[0].id : null
        };
        this.handleNewMessage = this.handleNewMessage.bind(this);
        this.handleDialogSelection = this.handleDialogSelection.bind(this);
    }

    // Fetching list of dialogs from DateBase on load;

    // componentDidMount() {
    //     fetch('/api/products')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(messages => {
    //             this.setState({ messages });
    //         });
    // }

    // Fetching list of dialogs from DateBase;

    handleDialogSelection(id) {
        this.setState({currentDialog: id});

        // fetch( 'api/products/', {
        //     method:'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(id)
        // })
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(dialog => {
        //         this.setState((prevState)=> ({
        //             messages: prevState.message.concat(message)
        //         }))
        //     })
    }

    handleNewMessage(message) {
        console.log(message);
        this.setState((prevState)=> ({
            messages: prevState.messages.concat(message)
            }));

        // fetch( 'api/products/', {
            //     method:'post',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(message)
            // })
            //     .then(response => {
            //         return response.json();
            //     })
            //     .then(message => {
            //         this.setState((prevState)=> ({
            //             messages: prevState.messages.concat(message)
            //         }))
            //     })
    }
    render() {
        if (this.state.currentDialog) {
            return (
                <div className="App">
                    <DialogList className={"DialogList"} dialogs={this.state.dialogs} onSelection={this.handleDialogSelection}/>
                    <DialogWindow className={"DialogWindow"} messages={this.state.messages} onAdd={this.handleNewMessage}/>
                </div>
            )
        } else { return <Invitation/> }
    }
}

export default App;
