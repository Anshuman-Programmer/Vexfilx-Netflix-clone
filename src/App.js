import React,{useEffect} from 'react';
import './_app.scss';
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser)
  // const user = null
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else{
        dispatch(logout())
      }
    })

    return unsubcribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ?(<LoginScreen/>):
          (<Switch>
            <Route exact path="/"> 
              <HomeScreen />
            </Route>
            <Route path="/profile"> 
              <ProfileScreen/>
            </Route>
            
          </Switch>)}
        
      </Router>
    </div>
  );
}

export default App;
