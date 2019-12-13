// will export Add

import React, { useState } from 'react';
import { addSmurfs } from '../actions/index';
import { connect } from 'react-redux';

import "../index.css";

const Add = (props) => {
  const [values, setValues] = useState ({
    name: '',
    age: '',
    height: ''
  })

  const handleChange = event => setValues({...values, [event.target.name]: event.target.value});

  const handleSubmit = async event => {
    event.preventDefault();
    await props.addSmurfs(values)
  };

  return (
    <form onSubmit={handleSubmit} className='smurfAddForm'>
      <label>Let's Smurf a new Smurf!</label>
      <input
        type='text'
        name='name'
        onChange={handleChange}
        placeholder='name'
        value={values.name}
      />

      <input 
        type='text'
        name='age'
        onChange={handleChange}
        placeholder='age'
        value={values.age}
      />
      
      <input 
        type='text'
        name='height'
        onChange={handleChange}
        placeholder='height'
        value={values.height}
      />

      <button>Smurf your new Smurf!</button>

    </form>
  )
};

const mapStateToProps = state => ({
  smurfs: state.smurf.smurf
})

const mapDispatchToProps = {addSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
