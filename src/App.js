import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Tab } from './component/Tab';
import { Login } from './component/login';
import Layout from 'antd/lib/layout/layout';
import { LayoutTab } from './layout/layout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
           <Route path="/login">
            <Login />
          </Route>

            <Route path="/">
              <LayoutTab />
            </Route>

        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
