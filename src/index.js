/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import R from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

render(
  <Provider store={store}>
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
  </Provider>,
  document.getElementById('app')
);
