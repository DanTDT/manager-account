import React, {Component} from 'react';

class LeftPanel extends Component {
    render() {
        return (
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="index.html"><i className="menu-icon fa fa-laptop"/>Dashboard </a>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-th"/>BRANCHS</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"/><a href="forms-basic.html">Branch 1</a></li>
                                    <li><i className="menu-icon fa fa-th"/><a href="forms-advanced.html">Branch 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-th"/>REPORT</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"/><a href="forms-basic.html">Customers</a></li>
                                    <li><i className="menu-icon fa fa-th"/><a href="forms-advanced.html">Deposit</a>
                                    </li>
                                    <li><i className="menu-icon fa fa-th"/><a href="forms-advanced.html">Withdraw</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </nav>
            </aside>
        );
    }
}

export default LeftPanel;