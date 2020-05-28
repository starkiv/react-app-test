import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Technologies from "./Technologies";

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));