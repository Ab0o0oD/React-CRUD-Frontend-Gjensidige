import { React, useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import axios from "axios";
import { withRouter, useHistory } from "react-router-dom"


const UserList = (props) => {
    let history = useHistory();

    const [users, setUsers] = useState([]);

    const getUserList = () => {
        axios.get("http://localhost:8080/api/v1/getAll")
            .then((response) => {
                setUsers(response.data)
            }, (error) => {
                setErorrMesaage("Couldn't get data from database!!"+error.message)
            })

    }
    //get user list from users Array
    useEffect(getUserList, [])

    function deleteUser(id) {

        axios.post("http://localhost:8080/api/v1/deleteUser?id=" + id)
            .then((resposne) => {

                console.log(resposne);

            }, (error) => {
                if (error != null) {
                    setErorrMesaage("something went wrong!!")
                }

            }).then(() => {
                window.location.reload();
            })

    }


    const [editing, setEditing] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [errorMessage, setErorrMesaage] = useState("")
    const userInitValue = {
        id: null,
        firstName: "",
        lastName: ""
    }
    const [userToEdit, setUserToedit] = useState(userInitValue);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserToedit({ ...userToEdit, [name]: value })
    }

    const editUser = (id, user) => {
        setEditing(true);
        setUserToedit(user);

    }

    const saveUpdatedUser = () => {
        setUpdated(true);

        if (userToEdit.firstName !== "" && userToEdit.lastName !== "") {
            axios.post("http://localhost:8080/api/v1/UpdateUser", {

                id: userToEdit.id,
                firstName: userToEdit.firstName,
                lastName: userToEdit.lastName
            })
                .then((response) => {
                    setUserToedit(userInitValue);
                }, (error) => {
                    setErorrMesaage("User couldn't be updated")
                })
                .then(
                    getUserList
                )
        }
        else {
            setUpdated(false)
            setErorrMesaage("Missing input")

        }
    }
    return (<div>


        {editing ? (
            < div className="submit-form" >
                {updated ? (
                    <div className="submit-form text-center">
                        <h4>User Updated successfully!</h4>
                        <button className="btn btn-primary" onClick={() => {
                            setEditing(false)
                            setUpdated(false)
                            setErorrMesaage("");
                        }}>
                            Back to list
          </button>


                    </div>
                ) : (
                        <div className="submit-form ">
                            <p>{errorMessage}</p>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    required
                                    onChange={handleInputChange}
                                    name="firstName"
                                    value={userToEdit.firstName}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    required
                                    onChange={handleInputChange}
                                    name="lastName"
                                    value={userToEdit.lastName}
                                />
                            </div>

                            <button className="btn btn-success" onClick={saveUpdatedUser}>
                                Update
          </button>
                        </div>
                    )}


            </div>) :
            (<UserTable
                users={users}
                deleteUser={deleteUser}
                editUser={editUser} />

            )}
    </div>

    )
}


export default withRouter(UserList);