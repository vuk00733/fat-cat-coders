import React, { useState } from 'react';
import { TAB_NAMES } from '../types/tabs';

interface TabSelectorProps {
    selectedTab: TAB_NAMES;
    setSelectedTab: React.Dispatch<React.SetStateAction<TAB_NAMES>>;
}

const TabSelector: React.FC<TabSelectorProps> = ({
    selectedTab,
    setSelectedTab,
}) => {
    const handleTabClick = (tabName: TAB_NAMES) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={() => handleTabClick(TAB_NAMES.LANDING)}
                className={`${
                    selectedTab === TAB_NAMES.LANDING
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                Landing
            </button>
            <button
                onClick={() => handleTabClick(TAB_NAMES.USER_LIST)}
                className={`${
                    selectedTab === TAB_NAMES.USER_LIST
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                User List
            </button>
            <button
                onClick={() => handleTabClick(TAB_NAMES.FORM_GENERATOR)}
                className={`${
                    selectedTab === TAB_NAMES.FORM_GENERATOR
                        ? 'bg-black text-white'
                        : 'bg-gray-200'
                } hover:bg-blue-400 text-sm px-4 py-2 mx-1 rounded-md focus:outline-none`}
            >
                Form Generator
            </button>
            <button
                onClick={() => handleTabClick(TAB_NAMES.PAGE_GENERATOR)}
                className={`${
                    selectedTab === TAB_NAMES.PAGE_GENERATOR
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
