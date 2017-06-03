import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from './shared/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const loading = state.ajaxCallsInProgress > 0;

  return {
    loading
  };
}

export default connect(mapStateToProps)(App);
