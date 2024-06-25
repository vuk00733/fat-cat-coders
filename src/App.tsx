import './styles.css';
import React, { useState } from 'react';
import { Landing } from './components/landing/Landing';
import { UserList } from './components/UserList';
import FormGenerator from './components/postForm/FormGenerator';
import PageGenerator from './components/dynamicForm/PageGenerator';
import { TAB_NAMES } from './types/tabs';
import TabSelector from './components/baseComponents/TabSelector';

function App() {
    const [selectedTab, setSelectedTab] = useState<TAB_NAMES>(
        TAB_NAMES.LANDING
    );

    const renderComponent = () => {
        switch (selectedTab) {
            case TAB_NAMES.LANDING:
                return <Landing />;
            case TAB_NAMES.USER_LIST:
                return <UserList />;
            case TAB_NAMES.FORM_GENERATOR:
                return <FormGenerator />;
            case TAB_NAMES.PAGE_GENERATOR:
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
