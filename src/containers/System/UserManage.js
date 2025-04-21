import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
import ModalAddUser from "./ModalAddUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }
  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  handleAddUser = () => {
    alert('add new')
  }

  render() {
    return (
      <div className="user-container">
        <h1 className="title text-center">Manage Users</h1>
      <ModalAddUser/>
        <div className="user-table mx-3">
          <div className="mb-2">
            <button className="btn btn-primary px-3"
              onClick={() => this.handleAddUser()}
            >+ Add new user</button>
          </div>

          <table id="customers">
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
            {this.state.arrUsers &&
              this.state.arrUsers.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-actions no-outline">
                      <i className="fa-solid fa-pen text-info"></i>
                    </button>
                    <button className="btn no-outline">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
