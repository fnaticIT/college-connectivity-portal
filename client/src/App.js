import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Clubs from "./components/Clubs/Clubs";
import Friends from "./components/Friends/Friends";
import Followers from "./components/Friends/Followers";
import Question from "./components/Question/Question";
import PostDetails from "./components/PostDetails/PostDetails";
import Answer from "./components/Answers/Answer";
import Home2 from "./pages/home/Home2";
import Notfound from "./components/Notfound/Notfound";
import Allclubs from "./components/Allclubs/Allclubs";
import ReactGA from "react-ga";
import Messenger from "./pages/messenger/Messenger";
import Main from "./components/Main/Main";
import Interview from "./components/Interview/Interview";
import Form from "./components/Interview/Form";
import View from "./components/Interview/View";
import Experience from "./components/Interview/Experience";
import Aboutus from "./components/Aboutus/Aboutus.js";
import Contact from "./components/Contact/Contact";
import Event from "./components/Event/Event";
function initializeReactGA() {
  ReactGA.initialize("G-31SQCBNXV8");
  ReactGA.pageview("/");
}
function App() {
  const { user } = useContext(AuthContext);
  initializeReactGA();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Main /> : <Register />}
        </Route>
        <Route exact path="/social">
          <Home />
        </Route>
        <Route exact path="/interview">
          <Interview />
        </Route>
        <Route exact path="/aboutus">
          <Aboutus />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/view">
          <View />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login flag={1} />}</Route>
        <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route exact path="/messenger">
          {user ? <Messenger /> : <Register />}
        </Route>
        <Route path="/clubs">
          <Clubs />
        </Route>
        <Route path="/friends">
          <Friends user={user} />
        </Route>
        <Route path="/followers">
          <Followers user={user} />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/exp/:id" exact component={Experience} />
        <Route path="/answers/:id" exact component={Answer} />
        <Route path="/home2" exact component={Home2} />
        <Route path="/allclubs" exact component={Allclubs} />
        <Route path="/clubpage" exact component={Clubs} />
        <Route path="/events" exact component={Event} />
        <Route path="" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
