import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createbrowserhistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import {Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<Router history={createbrowserhistory()}>
    <Switch>
        <Route exact path='/' render={()=><Header><App></App></Header>}></Route>
<Route path='/jokes' render={()=><Header><Jokes></Jokes></Header>}></Route>
    </Switch>
</Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


/* PROMISES 

new Promise((resolve,reject) =>{
     
    setTimeout(() => {
        //console.log('A');
        resolve('Add,Bats,Cats');
    }, 2000);
    reject(new Error('No Errors'));
})
.then(response => {
    console.log(response);
   // console.log('C');
})
.catch(error=>{
    console.log(error);
});

*/


//serviceWorker.unregister();
