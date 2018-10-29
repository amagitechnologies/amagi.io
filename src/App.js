import React from 'react';

import { Landing, Privacy, NotFound } from './pages';
import { Router, Route, Switch } from 'react-router-dom';
import { Loader } from 'components';

import createHistory from 'history/createBrowserHistory';

class App extends React.Component {
  state = {
    loaded: false,
  };

  constructor(props) {
    super(props);

    window.addEventListener('load', this.load);
  }

  load = () =>
    this.setState({
      loaded: true,
    });

  render() {
    const { loaded } = this.state;

    if (!loaded) return <Loader />;

    return (
      <Router history={createHistory()}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/privacy-policies" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
