import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/views/Header";
import PostsList from "./components/containers/PostsList";
import PostItem from "./components/containers/PostItem";
import AddNewPostForm from "./components/containers/NewPostForm";
import NotFoundPage from "./components/views/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
      </div>

      <Switch>
        <Route path="/" exact component={PostsList} />
        <Route path="/add-post/" exact component={AddNewPostForm} />
        <Route
          path="/posts/:postId"
          exact
          render={props => <PostItem postId={props.match.params.postId} />}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
