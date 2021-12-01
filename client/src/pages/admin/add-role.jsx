import React, { Component } from 'react';
import Beneficiary from '../../services/contracts/Beneficiary';
import Storage from '../../services/storage';

class AddRole extends Component {
    constructor() {
        super();
        this.TABLE_KEY = 'table-items'
        this.state = {
            tableItems: Storage.getItem(this.TABLE_KEY) || {}
        }
        this.ROLE_MAP = {
            "1": "DOCTOR",
            "2": "VACCINE PRODUCER",
            "3": "GOVT AUTHORITY"
        }
    }
    handleSubmit = async evt => {
        evt.preventDefault();

        console.log(this.inputAddress.value, this.inputRole.value)

        await Beneficiary.addRole(this.inputAddress.value, this.inputRole.value);

        Storage.updateItem(this.TABLE_KEY, this.inputAddress.value, this.inputRole.value);
        this.setState({tableItems: Storage.getItem(this.TABLE_KEY)})
        
        alert('role updated')
    }
    render() {
        let counter = 1;
        return (
            <div>
                <div className="container" style={{ maxWidth: "1000px" }}>
                    <h1>Role Management</h1>
                    <div className="row">
                        <div className="col-12 add-role-form">
                            <form className="row gy-2 gx-3 justify-items-center" onSubmit={this.handleSubmit}>
                                <div className="col">
                                    <label className="visually-hidden" htmlFor="address">Name</label>
                                    <input ref={node => (this.inputAddress = node)} type="text" className="form-control" id="address" placeholder="address : 0x095f557754761fE760Dd9b623CC5e7E70D4f342B" />
                                </div>

                                <div className="col-auto">
                                    <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                    <select ref={node => (this.inputRole = node)} className="form-select" id="autoSizingSelect">
                                        <option selected>Choose Role...</option>
                                        <option value="1">Doctor</option>
                                        <option value="2">Vaccine Producer</option>
                                        <option value="3">Govt Authority</option>
                                        <option value="99">Admin</option>
                                    </select>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary">Add Role</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "18px"}}>
                        <div className="col-12 roles-table">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(this.state.tableItems).map(item => {
                                        return (
                                            <tr key={counter}>
                                                <th scope="row">{counter++}</th>
                                                <td>{item[0]}</td>
                                                <td>{this.ROLE_MAP[item[1]]}</td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddRole;
