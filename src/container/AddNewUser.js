import { React, useState } from "react";
import "../App.css";
import axios from "axios";
import UserForm from "../components/UserForm";


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

    return (
        <UserForm 
        submitted={submitted}
        errorMessage={errorMessage}
        newUser={newUser}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        />
    )
}


export default AddNewUser;

