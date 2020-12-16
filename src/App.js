import './App.css';


import  AddNewUser  from "./container/AddNewUser";
import  UserList  from "./container/UserList";
import NavBar from "./components/NavBar";
import { Switch,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
<NavBar/>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/users"]} component={UserList} />
          <Route exact path="/addnewuser" component={AddNewUser} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
