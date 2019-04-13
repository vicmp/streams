import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import Header from './Header.js';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

import history from '../history';

import reducers from '../reducers';



//import { BrowserRouter, Route, Link } from 'react-router-dom';

  // const PageOne = () => {
  //   return (
  //   <div>
  //     <p> My Page One </p>
  //     <Link to="/pagetwo" > Link to page two here </Link>
  //   </div>
  //   );
  // }

  // const PageTwo = () => {
  //   return (
  //     <div>
  //       <p> My Page Two </p>
  //       <Link to="/" > Link to page one here </Link>
  //     </div>);
  // }




  /* https://github.com/zalmoxisus/redux-devtools-extension  */ 
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers, 
    compose(applyMiddleware(reduxThunk))  // <- alternative without extension. With extension -> //composeEnhancers(applyMiddleware(reduxThunk))
  );

  const App = () => {
    return (
      <Provider store={store}>
        
        <Router history={history} >
          <div>
          <Header />
            <Switch>
              {/* <Route path="/" exact component={PageOne} />
              <Route path="/pagetwo" component={PageTwo} /> */}
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </Provider>        
    );
  }
//}

export default App;
