import React from 'react';
import ReactDOM from 'react-dom';
import Technologies from "./Technologies";

const App = () => {
    return (
        <div>
            <Technologies />
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));