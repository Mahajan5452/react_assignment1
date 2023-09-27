import React, { Component } from 'react';

class AdminInfo extends Component {
   constructor(props) {
    super(props);
    this.state = { 
        adminData: {
            name: 'jay mahajan',
            email: 'jaymahajan@gmail.com',
            role: 'Admin'
        }
    }
}
    render() { 
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.adminData.name}</h5>
                    <p className="card-text">Email: {this.state.adminData.email}</p>
                    <p className="card-text">Role: {this.state.adminData.role}</p>
                </div>
            </div>
        );
    }
}
 
export default AdminInfo;