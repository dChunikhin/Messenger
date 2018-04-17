import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from 'js/components/App';


const dialogs = [
    {
        id: 9,
        message: {
            author: "Andreyka",
            date: "12:34 23.04.2014",
            text: "Hello, guys!"
        },
    },
    {
        id: 10,
        message: {
            author: "Maxim",
            date: "12:34 23.04.2014",
            text: "Hello, girls!"
        }
    },
    {
        id: 11,
        message: {
            author: "Artemka",
            date: "12:34 23.04.2014",
            text: "Hello, guys!"
        },
    }
];

const messages = [
    {
            author: "sqd",
            text: "332142",
            date: "12:34 23.04.2014"
    },
    {
            author: "qw",
            text: "dsqdqsd",
            date: "12:34 23.04.2014"
    }
];

ReactDOM.render(<App dialogs={dialogs} messages={messages}/>, document.getElementById('root'));
