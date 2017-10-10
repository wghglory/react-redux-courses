import React from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course" exact component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
