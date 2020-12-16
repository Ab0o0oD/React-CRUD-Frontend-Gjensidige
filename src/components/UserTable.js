import { React } from "react";
import "../App.css";
import axios from "axios";
const UserTable = (props) => {

     function deleteUser (id)  {
      
        axios.post("http://localhost:8080/api/v1/deleteUser?id="+id)
            .then((resposne) => {

                console.log(resposne);

            }, (error) => {


            })

    }

    return (<table className="container">
        <thead>
            <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => {
                    const { id, firstName, lastName } = user;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>
                                <button className="btn-sm btn-danger" onClick={() => deleteUser(id)}>Delete</button>
                                <button className="btn-sm btn-warning" onClick={() => props.editUser(id, user)}>Edit</button>
                            </td>
                        </tr>
                    )
                })
            ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    )

}


export default UserTable;