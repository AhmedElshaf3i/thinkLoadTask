import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import AddScreen from './components/addScreen';
import MainScreen from './components/mainScreen';
import NotFound from './components/notFound';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App container my-5">
      <Switch>
        <Route path="/mainscreen" component={MainScreen}/>
        <Route path="/addscreen" component={AddScreen}/>
        <Route path="/notFound" component={NotFound} />
        <Redirect from="/" exact to="/mainscreen" />
        <Redirect to="/notFound"/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
