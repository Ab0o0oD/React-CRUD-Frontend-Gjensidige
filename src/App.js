import './App.css';


import  AddNewUser  from "./components/AddNewUser";
import  UserList  from "./components/UserList";
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
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
