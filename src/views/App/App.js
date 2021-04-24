import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Info from '../Info/Info';
import Ticket from '../Ticket/ticket';
import Nav from './Nav';
import Nav1 from './Nav1';
import useToken from './useToken';
import LogoutModal from './LogoutModal';
import Trip from '../Trip/Trip';
import TripDetail from '../TripDetail/TripDetail';

function App() {
  const {token} = useToken();
  console.log('@token', typeof token);

  if (!token) {
    return (
      <div id="wrapper">
        <Router>
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Nav />
              {/* <!-- Begin Page Content --> */}

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/trip">
                  <Trip />
                </Route>
                <Route path="/tripdetail/:id">
                  <TripDetail />
                </Route>
              </Switch>

              {/* <!-- End Page Content --> */}
            </div>
          </div>
          {/* End Content Wrapper */}
        </Router>
      </div>
    );
    // return <Login setToken={setToken} />;
  }

  return (
    <div id="wrapper">
      <Router>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Nav1 />
            {/* <!-- Begin Page Content --> */}

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/info">
                <Info />
              </Route>
              <Route path="/ticket">
                <Ticket />
              </Route>
              <Route path="/trip">
                <Trip />
              </Route>
              <Route path="/tripdetail/:id">
                <TripDetail />
              </Route>
            </Switch>

            {/* <!-- End Page Content --> */}
          </div>
        </div>
        <LogoutModal />
        {/* End Content Wrapper */}
      </Router>
    </div>
  );
}

export default App;
