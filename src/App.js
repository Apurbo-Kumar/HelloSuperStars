import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Switch, BrowserRouter} from "react-router-dom";


import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import Otp from "./components/UserAuthentication/Otp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HelloSuperStarDemo from './components/UserAuthentication/HelloSuperStarDemo';
import AccountCreate from "./components/UserAuthentication/AccountCreate";
import SliderTutorial from "./components/Pages/User/TutorialSPage/SliderTutroial";
import Packages from "./components/Pages/User/Packages/Packages";
import BuyPackages from "./components/Pages/User/Packages/BuyPackages";
import Profile from './components/Pages/Profile/Profile';

// Navigation
import Navigation from './components/Header/Navigation';

// Home Page
import Home from "./components/Pages/Home/HomePages";
import Live from "./components/Pages/Home/Body/LiveNow/LiveBody";
import Learn from "./components/Pages/Home/Body/LearningSessions/LearnBody";
import UpLive from "./components/Pages/Home/Body/UpcomingLive/UpliveBody";
import Auditions from "./components/Pages/Home/Body/UpcomingAuditions/AuditionsBody";

// Market Place Page
import Market from "./components/Pages/Market/MarketPlace";

import Error from "./components/Pages/Home/Error";


import './components/CSS/Navbar/LeftSideNavbar.css';
import './components/CSS/Navbar/RightSideNavbar.css';
import './App.css';
import GuestUserPage from "./components/Pages/User/GuestUser/GuestUserPage";


// Category
import CoreCategory from "./components/Pages/Category/CoreCategory";
import SubCategory from "./components/Pages/Category/SubCategory";


// Choose Category
import Hollywood from './components/Pages/Home/ChooseCategory/FollowCategory/Hollywood/Body'
import Bollywood from "./components/Pages/Home/ChooseCategory/FollowCategory/Bollywood/Body";

import CategoryBody from './components/Sidebar/Left/Category/CategoryBody'

import Body from "./components/Sidebar/Settings/Body";
import EnrollBody from "./components/Sidebar/Left/EnrolledAuditions/EnrollBody";


function App() {
  return (
    <>
    <BrowserRouter>
    <PrivateRoute component={Navigation} />
      <Switch>

        <PrivateRoute exact path='/' component={Home} />

        <Route exact path='/live-now' component={Live} />
        <Route exact path='/learning-sessions' component={Learn}/>
        <Route exact path='/upcoming-live' component={UpLive} />
        <Route exact path='/upcoming-auditions' component={Auditions} />

        <Route exact path='/marketplace' component={Market} />

       
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <Route path='/accountCreate' exact component={AccountCreate} />

        <Route exact path='/tutorial' component={SliderTutorial} />
        <Route exact path='/packages' component={Packages} />
        <Route exact path='/buy-packages' component={BuyPackages} />
        <Route path='/guestUser' exact component={GuestUserPage} />
        <Route path='/profile' exact component={Profile} />

         {/* Category */}
          <Route path='/coreCategory' exact component={CoreCategory} />
          <Route path='/subCategory' exact component={SubCategory} />

        
        {/* Left Sidebar*/}

          <Route path='/category' component={CategoryBody} />
          <Route path='/enrolled-auditions' component={EnrollBody} />
          <Route path='/settings' component={Body} />

          {/* Follow Category */}
          <Route path='/category/Hollywood' component={Hollywood} />
          <Route path='/category/Bollywood' component={Bollywood} />

        {/* Left Sidebar End*/}


        <PrivateRoute exact path='/logo' component={HelloSuperStarDemo} />
        <Route component={Error} />
        
      </Switch>
    </BrowserRouter>
    </>
  );
} 

export default App;
