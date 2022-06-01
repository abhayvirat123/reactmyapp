import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/global.scss';
import {Card, Row, Col} from 'antd';
import './index.scss';
import Dashboard from './pages/dashboard';



import {Route, Link,Switch, BrowserRouter as Router} from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
const NoMatchPage = () => {
  return (
    <Row style={{marginTop: '20%'}}>
      <Col xs={{span: 12, offset: 6}}>

        <Card>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Page not found</h2>
              <Link to="/dashboard">back to dashboard</Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="*" component={NoMatchPage} />
  </Switch>
  </Router>
);
ReactDOM.render (routing, document.getElementById ('root'));
