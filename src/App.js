import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './components/NavBar.js'
import Footer from './components/Footer';
import { AuthProvider } from './firebase/context';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import SearchCar from './pages/SearchCar';
import LoanCalculator from './components/LoanCalculator';
import EvaluateCar from './components/EvaluateCar';


import PublishCar from './pages/PublishCar';
import Contact from './pages/Contact';
import PageNotFound from './components/PageNotFound';
import Profile from './pages/Profile';

function App() {
    return (      
        <Router>
          <AuthProvider>
            <NavBar/>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/contact-us" component={LoanCalculator}  />

              <Route path="/buy" component={SearchCar}  />
              <PrivateRoute path="/sell" component={PublishCar} />

              { /* Default route -> 404  */ }
              <Route path="/" component={PageNotFound}  />
              
            </Switch>
            <Footer/>
          </AuthProvider>
        </Router>
      
    
    );

}


export default App;
