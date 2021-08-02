import React from 'react';
import './Users-list.css';


class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedItems: [],
        };
        this.loadUsers()
    }

    onClick(userId) {
        if (!this.state.selectedItems.includes(userId)) {
            this.state.selectedItems.push(userId)
        } else {
            this.state.selectedItems = this.state.selectedItems.filter(item => item !== userId);
        }

        this.setState(this.state)
    }

    onClickAll(value) {
        if (value) {
            this.state.selectedItems = this.state.users.map((user) => user.id);
        } else {
            this.state.selectedItems = [];
        }

        this.setState(this.state)
    }

    onDelete() {
        this.state.selectedItems.forEach(value => this.delete(value))
    }

    delete(id) {
        fetch('http://localhost:8000/users/delete/' + id, {
            method: 'DELETE',})
            .then(() => this.loadUsers())
    }

    loadUsers() {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(users => this.setState({ ...this.state, users }))
    }



    render() {
        return <div className="user-list container">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-black">Block</button>
                <button type="button" className="btn btn-black">Unblock</button>
                <button type="button" className="btn btn-black " onClick={this.onDelete.bind(this)}>Delete</button>
            </div>
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col"><input
                        type="checkbox" onChange={(event => this.onClickAll(event.target.checked))}/></th>
                    <th scope="col">Id</th>
                    <th scope="col">First name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">CreatedAt</th>
                    <th scope="col">UpdatedAt</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map(user =>(
                    <tr key={user.id}>
                        <td><input
                            type="checkbox" checked={this.state.selectedItems.includes(user.id)} onChange={() => this.onClick(user.id)}/></td>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.email}</td>
                        <td>{user.status}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    };
}

export default UsersList;
