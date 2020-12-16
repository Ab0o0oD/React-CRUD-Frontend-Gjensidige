import { React, useEffect, useState } from "react";
import dataBase from "../users";
import UserTable from "./UserTable";
import axios from "axios";

const UserList = (props) => {

    const [users, setUsers] = useState(dataBase);
    //get user list from users Array
    useEffect(() => {

        axios.get("http://localhost:8080/api/v1/getAll")
            .then((response) => {
                setUsers(response.data)
            }, (error) => {

            })

    }, [users])


    const editUser = () => {


    }
    return (<div>
        <UserTable
            users={users}
         
            editUser={editUser} />
    </div>


    )
}


export default UserList;