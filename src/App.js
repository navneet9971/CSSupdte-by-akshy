import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/auth/Login";
import ErrorPage from "./component/errorPage";
import View from "./component/pages/View";
import Add from "./component/pages/Add";
import Review from "./component/pages/Review";
import Myaccount from "./component/pages/Myaccount";
import Download from "./component/pages/Download";
import Check from "./component/pages/Check";
import SignUP from "./component/auth/SignUP";
import Firstpage from "./component/pagesscrn4/Firstpage";
import Secondpage from "./component/pagesscrn4/Secondpage";
import Thirdpage from "./component/pagesscrn4/Thirdpage";
import Fourthpage from "./component/pagesscrn4/Fourthpage";
import ClientDashboard from "./component/pagesscrn4/client-dashbord/Clientdashboard";
import Navbar from "./component/pagesscrn4/Navbar/Navbar";
import Edit from "./component/pages/ComplianceTypePage";
import Bookmarks from "./component/pages/account-pages/Bookmarks";
import Editprofile from "./component/pages/account-pages/Editprofile";
import Notifaction from "./component/pages/account-pages/Notifaction";
import Package from "./component/pages/account-pages/Package";
import Payment from "./component/pages/account-pages/Payment";
import Track from "./component/pages/account-pages/Track";
import Transaction from "./component/pages/account-pages/Transaction";

const App = () => {
  const router = (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <SignUP />
        </Route>

        <Route path="/navbar">
         <Navbar /> 
        <Switch>
        <Route path="/navbar/clientdashboard">
          <ClientDashboard />
        </Route>
        <Route path="/navbar/secondpage">
          <Secondpage />
        </Route>
        <Route path="/navbar/compliance/:id">
          <Thirdpage />
        </Route> 
        <Route path="/navbar/compliance1/:id">
          <Fourthpage />
        </Route>             
        <Route path="/navbar/firstpage">
              <Firstpage />
            </Route>
            <Route path="/navbar/add">
              <Add />
            </Route>
            <Route path="/navbar/review">
              <Review />
            </Route>
            <Route path="/navbar/ComplianceTypePage/:id">
              <Edit />
            </Route>
            <Route path="/navbar/check">
              <Check />
            </Route>
            <Route path="/navbar/download">
              <Download />
            </Route>
            <Route path="/navbar/myaccount">
              <Myaccount />
            </Route>
            <Route path="/navbar/view">
              <View />
            </Route>
            
{/*--------------------------My account pages Path inside of navbar-----------------------------------*/}

            <Route path="/navbar/transaction">
            <Transaction />
          </Route>
          <Route path="/navbar/package">
            <Package />
          </Route>
          <Route path="/navbar/payment">
            <Payment />
          </Route>
          <Route path="/navbar/track">
            <Track />
          </Route>
          <Route path="/navbar/notifaction">
            <Notifaction />
          </Route>
          <Route path="/navbar/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/navbar/edit-profile">
            <Editprofile />
          </Route>
          
        </Switch>
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

  return router;
};

export default App;
