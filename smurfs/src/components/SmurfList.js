// Will export List

import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'

const List = props => {
  const fetchSmurfs = event => {
    event.preventDefault();
    props.getSmurfs();
  };

  return(
    <div>
      <h1>Welcome to Smurf Village!</h1>
      <button onClick={fetchSmurfs}>Smurf our Smurfs in Smurf Village!</button>
      <div>
        {props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurf,
  error: state.error,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps,
  { getSmurfs }
)(List);
