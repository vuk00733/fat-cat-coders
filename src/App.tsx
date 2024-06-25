import './styles.css';
import React, { useState } from 'react';
import { Landing } from './components/landing/Landing';
import { UserList } from './components/UserList';
import FormGenerator from './components/postForm/FormGenerator';
import PageGenerator from './components/dynamicForm/PageGenerator';
import TabSelector from './components/TabSelector';

function App() {
    const [selectedTab, setSelectedTab] = useState<string>('PageGenerator');

    const renderComponent = () => {
        switch (selectedTab) {
            case 'Landing':
                return <Landing />;
            case 'UserList':
                return <UserList />;
            case 'FormGenerator':
                return <FormGenerator />;
            case 'PageGenerator':
            default:
                return <PageGenerator />;
        }
    };

    return (
        <main className="p-8">
            <TabSelector
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            {renderComponent()}
        </main>
    );
}

export default App;
