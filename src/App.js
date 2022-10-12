import React from 'react';
import { render } from 'react-dom';

const App = () => {
    //JSX
        //return React.createElement('h1', {}, 'holaaaa');
    return(
        <div>
            holaa
        </div>
    )

};
render(React.createElement(App),document.getElementById('root') )