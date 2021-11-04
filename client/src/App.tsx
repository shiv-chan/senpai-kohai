import type { VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./common/components/Home";
import Header from "./common/components/Header";
import MyPage from "./common/components/MyPage";
import BrowsingPage from "./common/components/BrowsingPage";
import SenpaiProfile from "./features/profile/SenpaiProfile";
import SenpaiProfileSetting from "./features/profile/setting/SenpaiProfileSetting";
import KohaiProfile from "./features/profile/KohaiProfile";
import KohaiProfileSetting from "./features/profile/setting/KohaiProfileSetting";
import LogIn from "./features/login/LogIn";
import SignUp from "./features/signup/SignUp";
import Detail from "./common/components/Detail";

const App: VFC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact to="/" component={Home} />
        <Route to="/board" component={BrowsingPage} />
        <Route to="/mypage" component={MyPage} />
        <Route to="/profile/senpai" component={SenpaiProfile} />
        <Route to="/setting/senpai" component={SenpaiProfileSetting} />
        <Route to="/profile/kohai" component={KohaiProfile} />
        <Route to="/setting/kohai" component={KohaiProfileSetting} />
        <Route to="/login" component={LogIn} />
        <Route to="/signup" component={SignUp} />
        <Route to="/profile/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
