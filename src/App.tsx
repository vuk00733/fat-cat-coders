import './styles.css';

import { Landing } from './components/landing/Landing.js';
import React from 'react';
import UserList from './components/List';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
    return (
        <main>
            {/* <Landing /> */}
            <UserList />
        </main>
    );
}

export default App;
