import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
   <Switch>
     <Route exact path="/login" component={Login} />
     <Route exact path="/" component={Register} />
     <Route exact path="/dashboard" component={Dashboard} />
  
   </Switch>
 </Router>      
 
 </div>
  );
}

export default App;
