import './App.css';
import ExperienceList from './components/ExperienceList';
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import EmptyPage from './components/EmptyPage';
import CreateExperience from './components/CreateExperience';
import CreateProfile from './components/CreateProfile';
import UpdateProfile from './components/UpdateProfile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <ExperienceList />
          </Route>

          <Route exact path="/profile/:career">
            <ProfileList />
          </Route>

          <Route exact path="/create-experience">
            <CreateExperience />
          </Route>

          <Route exact path="/create-profile">
            <CreateProfile />
          </Route>

          {/* <Route exact path="/update-profile/:id"> */}
          <Route exact path="/update-profile">
            <UpdateProfile />
          </Route>

          <Route>
            <EmptyPage />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;