
import './App.css';
import HomeScreen from './Components/HomeScreen2';
import AboutScreen from './Components/AboutScreen2';
import ContactScreen from './Components/ContactScreen';
import SkillScreen from './Components/SkillScreen1';
import Project1Screen from './Components/ProjectScreen1';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HeaderScreen from './Components/HeaderScreen2';
import CountryhenScreen from './Components/CountryhenScreen';
import KNCETians from './Components/KNCETians';
import VimerzaScreen from './Components/VimerzaScreen';
import ChatScreen from './Components/ChatScreen';


function App() {
  return (
    <Router>
    <div className="App" style={{background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)'}}>
      <HeaderScreen/>
      <Switch>
      <Route path='/' exact component={HomeScreen}/>
      <Route path='/AboutScreen' component={AboutScreen}/>
      <Route path='/SkillScreen' component={SkillScreen}/>
      <Route path='/Project1Screen' component={Project1Screen}/>
      <Route path='/ContactScreen' component={ContactScreen}/>
      <Route path='/CountryhenScreen' component={CountryhenScreen}/>
      <Route path='/KNCETians' component={KNCETians}/>
      <Route path='/VimerzaScreen' component={VimerzaScreen}/>
      <Route path='/ChatScreen' component={ChatScreen}/>
      </Switch>
      {/* <Todo/> */}
    </div>
    </Router>
  );
}

export default App;
