import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div className="content">
                {/* Animated */}
                <div className="animated fadeIn">
                    {/* Orders */}
                    <div className="orders">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="box-title">Customers</h4>
                                    </div>
                                    <div className="card-body--">
                                        <div className="table-stats order-table ov-h">
                                            <table className="table ">
                                                <thead>
                                                <tr>
                                                    <th className="serial">#</th>
                                                    <th className="avatar">Avatar</th>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="serial">1.</td>
                                                    <td className="avatar">
                                                        <div className="round-img">
                                                            <a href="#"><img className="rounded-circle"
                                                                             src="images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5469</td>
                                                    <td><span className="name">Louis Stanley</span></td>
                                                    <td><span className="product">iMax</span></td>
                                                    <td><span className="count">231</span></td>
                                                    <td>
                                                        <button className="badge badge-primary">Detail</button>
                                                        <button className="badge badge-warning">Edit</button>
                                                        <button className="badge badge-danger">Remove</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="serial">2.</td>
                                                    <td className="avatar">
                                                        <div className="round-img">
                                                            <a href="#"><img className="rounded-circle"
                                                                             src="images/avatar/2.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5468</td>
                                                    <td><span className="name">Gregory Dixon</span></td>
                                                    <td><span className="product">iPad</span></td>
                                                    <td><span className="count">250</span></td>
                                                    <td>
                                                        <span className="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="serial">3.</td>
                                                    <td className="avatar">
                                                        <div className="round-img">
                                                            <a href="#"><img className="rounded-circle"
                                                                             src="images/avatar/3.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5467</td>
                                                    <td><span className="name">Catherine Dixon</span></td>
                                                    <td><span className="product">SSD</span></td>
                                                    <td><span className="count">250</span></td>
                                                    <td>
                                                        <span className="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="serial">4.</td>
                                                    <td className="avatar">
                                                        <div className="round-img">
                                                            <a href="#"><img className="rounded-circle"
                                                                             src="images/avatar/4.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5466</td>
                                                    <td><span className="name">Mary Silva</span></td>
                                                    <td><span className="product">Magic Mouse</span></td>
                                                    <td><span className="count">250</span></td>
                                                    <td>
                                                        <span className="badge badge-pending">Pending</span>
                                                    </td>
                                                </tr>
                                                <tr className=" pb-0">
                                                    <td className="serial">5.</td>
                                                    <td className="avatar pb-0">
                                                        <div className="round-img">
                                                            <a href="#"><img className="rounded-circle"
                                                                             src="images/avatar/6.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5465</td>
                                                    <td><span className="name">Johnny Stephens</span></td>
                                                    <td><span className="product">Monitor</span></td>
                                                    <td><span className="count">250</span></td>
                                                    <td>
                                                        <span className="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.table-stats */}
                                    </div>
                                </div>
                                {/* /.card */}
                            </div>
                        </div>
                    </div>
                    <div className="modal fade none-border" id="event-modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">×
                                    </button>
                                    <h4 className="modal-title"><strong>Add New Event</strong></h4>
                                </div>
                                <div className="modal-body"/>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default waves-effect"
                                            data-dismiss="modal">Close
                                    </button>
                                    <button type="button"
                                            className="btn btn-success save-event waves-effect waves-light">Create
                                        event
                                    </button>
                                    <button type="button"
                                            className="btn btn-danger delete-event waves-effect waves-light"
                                            data-dismiss="modal">Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /#event-modal */}
                    {/* Modal - Calendar - Add Category */}
                    <div className="modal fade none-border" id="add-category">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">×
                                    </button>
                                    <h4 className="modal-title"><strong>Add a category </strong></h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">Category Name</label>
                                                <input className="form-control form-white" placeholder="Enter name"
                                                       type="text" name="category-name"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">Choose Category Color</label>
                                                <select className="form-control form-white"
                                                        data-placeholder="Choose a color..." name="category-color">
                                                    <option value="success">Success</option>
                                                    <option value="danger">Danger</option>
                                                    <option value="info">Info</option>
                                                    <option value="pink">Pink</option>
                                                    <option value="primary">Primary</option>
                                                    <option value="warning">Warning</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default waves-effect"
                                            data-dismiss="modal">Close
                                    </button>
                                    <button type="button"
                                            className="btn btn-danger waves-effect waves-light save-category"
                                            data-dismiss="modal">Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /#add-category */}
                </div>
                {/* .animated */}
            </div>
        );
    }
}

export default Content;