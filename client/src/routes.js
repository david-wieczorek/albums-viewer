import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { AddGameContainer, AlbumsContainer, AlbumContainer } from './containers';
import { Home, Archive, Welcome, About, Contact } from './components';

const routes = (
   <Router history={hashHistory}>
      <Route path="/" component={Home}>
         <IndexRoute component={Welcome} />
         <Route path="/albums" component={AlbumsContainer} />
         <Route path="/contact" component={Contact} />
         <Route path="/albums" component={Archive}>
            <IndexRoute component={AlbumsContainer} />
            <Route path="add" component={AddGameContainer} />
            <Route path=":id" component={AlbumContainer}/>
         </Route>
      </Route>
   </Router>
);

export default routes;
