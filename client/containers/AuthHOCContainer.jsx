import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!localStorage.getItem('token')) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return connect(
    state => ({ user: state.auth.user }),
    null
  )(ComposedComponent);
};
