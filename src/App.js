import './App.css';
import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import tabsData from "./tabs.json"
import Tab from './components/Tab';

function App() {
  return (
    <Router>
        <div className="tab-container">
            {tabsData.map(tab => (
                <Tab key={tab.id} id={tab.id} title={tab.title} />
            ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/" render={() => <Redirect to={`/tabs/${tabsData[0].id}`} exact />}/>
            {tabsData.map(tab => (
                <Route key={tab.id} path={`/tabs/${tab.id}`} component = {React.lazy(() => import(`./${tab.path}`))} exact />
            ))}
         </Switch>
         </Suspense>
    </Router>
  );
}

export default App;
