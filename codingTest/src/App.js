import React from "react";
import "./styles.css";
import Login from "./components/login";
import Posts from "./components/posts";
import Single from "./components/singlePosts";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default function App() {
  return <BrowserRouter> <Switch>
  <Route path="/" component={Login} exact />
  <Route path="/posts" component={Posts}  />
  <Route path="/singlePosts" component={Single}  />
</Switch>
</BrowserRouter>
;
}
