import './styles.css';

import { Landing } from './components/landing/Landing.js';
import React from 'react';
import UserList from './components/List';
import FormGenerator from './components/postForm/FormGenerator';

function App() {
    return (
        <main>
            {/* <Landing /> */}
            {/* <UserList /> */}
            <FormGenerator />
        </main>
    );
}

export default App;
