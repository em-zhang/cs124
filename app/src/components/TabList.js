import React, {useState} from 'react';
import Tab from './Tab.js'
import "./TabList.css"

function TabList(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].key);
    return (
        <div className="tabs">
            <div className="tab-list">
                {props.children.map(child =>
                    <Tab key={child.key}
                         label={child.key}
                         activeTab={activeTab}
                         onClickTab={(label) => setActiveTab(label)}/>)}
            </div>
            {props.children.find((child) => child.key === activeTab)}
        </div>
    );
}

export default TabList;