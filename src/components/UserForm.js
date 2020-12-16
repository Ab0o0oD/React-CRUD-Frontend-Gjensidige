import { React } from "react";
import { withRouter } from "react-router-dom";
const UserForm =(props)=>{

    return(< div className="submit-form" >
        <p>{props.errorMessage}</p>
        {props.submitted ? (
            <div className="submit-form text-center">
                <h4>New user added successfully!</h4>
                <button className="btn btn-primary" onClick={()=>{
                    props.history.push("/users")
                }}>
                    Show users list
          </button>
                <button className="btn btn-success" onClick={props.newUser}>
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
                            onChange={props.handleInputChange}
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
                            onChange={props.handleInputChange}
                            name="lastName"
                        />
                    </div>

                    <button className="btn btn-success" onClick={props.handleSubmit}>
                        Submit
          </button>
                </div>
            )}


    </div>
    )
}

export default withRouter(UserForm);