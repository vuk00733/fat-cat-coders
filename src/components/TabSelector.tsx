import React, { useState } from 'react';

interface TabSelectorProps {
    selectedTab: string;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabSelector: React.FC<TabSelectorProps> = ({
    selectedTab,
    setSelectedTab,
}) => {
    const handleTabClick = (tabName: string) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={() => handleTabClick('Landing')}
                className={`${
                    selectedTab === 'Landing'
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                Landing
            </button>
            <button
                onClick={() => handleTabClick('UserList')}
                className={`${
                    selectedTab === 'UserList'
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                User List
            </button>
            <button
                onClick={() => handleTabClick('FormGenerator')}
                className={`${
                    selectedTab === 'FormGenerator'
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                Form Generator
            </button>
            <button
                onClick={() => handleTabClick('PageGenerator')}
                className={`${
                    selectedTab === 'PageGenerator'
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                Page Generator
            </button>
        </div>
    );
};

export default TabSelector;
