import React from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import "./Styles/UserContainer.css";
import { postUser } from "../redux";
import { useState } from "react";
import axios from "axios";
function UserContainer({ userData, fetchUsers }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const onClickHandler = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.mobileNo && user.password) {
      axios
        .post("localhost:9898/api/v1/users/post", user)
        .then((success) => {
          console.log("data posted sucessfully", success);
        })
        .then((err) => {
          console.log(err);
        });
    } else {
      alert("please enter valide data");
    }
  };
  return (
    <div>
      <h1>list of users</h1>
      <h4>{JSON.stringify(user)}</h4>
      <form className="addContainer">
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="full name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="abc@gmail.com"
          ></input>
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            type="number"
            onChange={(e) => {
              setUser({ ...user, mobileNo: e.target.value });
            }}
            placeholder="+91-866868686767"
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder=""
          ></input>
        </div>
        <div>
          <button
            onClick={(e) => {
              onClickHandler(e);
            }}
          >
            Add User
          </button>
        </div>
      </form>

      <div className="CardConainer">
        {userData.Users.map((item) => {
          return (
            <div className="Card">
              <div className="Card_title">{item.name}</div>
              <div className="Card_Email">{item.email}</div>
              <div className="Card_Mobile">{item.mobileNo}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    postUser: (User) => {
      dispatch(postUser(User));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
