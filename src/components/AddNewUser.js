import { React, useState } from "react";
import "../App.css";
import axios from "axios";

const AddNewUser = (props) => {


    const userInitValue = {
        id: null,
        firstName: "",
        lastName: ""
    }

    const [user, setUser] = useState(userInitValue);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //onChange Input listener
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = () => {
        if (user.firstName && user.lastName) {
            axios.post("http://localhost:8080/api/v1/addUser", {
                firstName: user.firstName,
                lastName: user.lastName
            })
                .then((resposne) => {
                    setErrorMessage("");

                }, (error) => {
                    setErrorMessage(error.data);
                })


            setSubmitted(true);
        } else {
            setErrorMessage("Missing input !!");
        }

        //TODO
    }

    const newUser = () => {
        setUser(userInitValue);
        setSubmitted(false);
    }

    return (< div className="submit-form" >
        <p>{errorMessage}</p>
        {submitted ? (
            <div className="submit-form text-center">
                <h4>New user added successfully!</h4>
                <button className="btn btn-primary" onClick={()=>{
                    props.history.push("/users")
                }}>
                    Show users list
          </button>
                <button className="btn btn-success" onClick={newUser}>
                    Add new user
          </button>

            </div>
        ) : (
                <div className="submit-form ">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            required
                            onChange={handleInputChange}
                            name="firstName"
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
                        />
                    </div>

                    <button className="btn btn-success" onClick={handleSubmit}>
                        Submit
          </button>
                </div>
            )}


    </div>
    )
}


export default AddNewUser;