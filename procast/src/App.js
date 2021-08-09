import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DogeMeme from './images/dogeMeme.png';
import Timer from './components/Timer';
import Navbar from './components/navbar.js';
import Notes from './components/Notes.js';
import PageTitle from './components/PageTitle.js';
import SetOfNotes from './components/SetOfNotes.js';
import ToDoList from './components/ToDoList.js';
import LoggedInHomepage from './components/LoggedInHomepage.js';
import TimerVisual from './components/TimerVisual.js';
import Login from './components/Login.js';
import Logout from './components/Logout';
import IntroPage from './components/OpeningHomepage.js';
import Tracking from './components/Tracking.js';


function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/displaypage" exact></Route>
          <Route path="/login" exact></Route>
          <Route path="/*">
            <div style={{ position: "fixed", float: "left", height: "100vh", width: "20%", backgroundColor: "blue" }}>
              <Navbar />
            </div>
          </Route>
            
        </Switch>

          <Switch>
          <div>
            <div style={{ float: "right", height: "100vh", width: "80%" }}>
                {/*<Route exact path="/">
                  <div style={{float: "left", margin: "0", width: "100%", height: "15vh", backgroundColor: "#B4D2E7"}}><PageTitle title="Homepage - Welcome!"/></div>
                  <OpeningHomepage />
                </Route>*/}
                <Route path="/loggedinhomepage">
                  <LoggedInHomepage />
                </Route>
                <Route path="/tracking">
                  <div className="pageTitle"><PageTitle title="Tracking your progress!"/></div>
                  <Tracking />
                </Route>
                <Route path="/todolist">
                  <div className="pageTitle"><PageTitle title="To - Do List"/></div>
                  <div style={{float: "left", margin: "0", width: "100%", height: "85vh"}}><ToDoList /></div>
                </Route>
                <Route path="/notes">
                  <div className="pageTitle"><PageTitle title="Notes"/></div>
                  <div style={{float: "left", margin: "0", width: "75%", height: "85vh"}}><Notes /></div>
                  <div style={{float: "right", margin: "0", width: "25%", height: "85vh", display: "inlineBlock"}}><TimerVisual/><SetOfNotes/></div>
                </Route>
                
              </div>
                <Route path="/displaypage">
                  <div style={{height: "100vh", width: "100%", backgroundColor: "#B4D2E7"}}><IntroPage /></div>
                </Route>
                <Route path="/login">
                  <div style={{height: "100vh", width: "100%", backgroundColor: "B4D2E7"}}><Login /></div>
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
