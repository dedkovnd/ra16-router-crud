import React from 'react';
import './App.css';
import {Posts} from "./Posts";
import {NewPost} from "./NewPost";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {PostProvider} from "./PostProvider";

function App() {
  return (
      <PostProvider>
      <Router>
          <div className="App">
              <Route exact path="/" component={Posts}/>
              <Switch>
                  <Route path="/posts/new" component={NewPost}/>
                  <Route path="/posts/:id([0-9]+)?"/>
              </Switch>
          </div>
      </Router>
      </PostProvider>
  );
}

export default App;
