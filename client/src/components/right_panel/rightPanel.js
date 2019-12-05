import React, {Component} from 'react';
import Content from "./content/content";
import Header from "./header/header";

class RightPanel extends Component {
    render() {
        return (
            <div id="right-panel" className="right-panel">
                {/* Header*/}
                <Header/>
                {/* /#header */}
                {/* Content */}
                <Content/>
            </div>
        );
    }
}

export default RightPanel;