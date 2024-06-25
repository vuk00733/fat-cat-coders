import './styles.css';

import { Landing } from './components/landing/Landing.js';
import React from 'react';
import { UserList } from './components/UserList';
import FormGenerator from './components/postForm/FormGenerator';
import PageGenerator from './components/dynamicForm/PageGenerator';

function App() {
    return (
        <main>
            {/* <Landing /> */}
            {/* <UserList /> */}
            {/* <FormGenerator /> */}
            <PageGenerator></PageGenerator>
        </main>
    );
}

export default App;
