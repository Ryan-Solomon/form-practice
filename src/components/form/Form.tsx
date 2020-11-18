import React from 'react';
import './Form.styles.scss';

function Form() {
  return (
    <main className='outer-container'>
      <form className='form-container'>
        <header>
          <h2>Sign Up</h2>
        </header>
        <div className='input first-name'>
          <label htmlFor='first-name'>First Name </label>
          <input
            id='first-name'
            type='text'
            placeholder='First Name'
            required
            autoFocus
          />
        </div>
        <div className='input last-name'>
          <label htmlFor='last-name'>Last Name </label>
          <input id='last-name' type='text' placeholder='Last Name' required />
        </div>
        <div className='input email'>
          <label htmlFor='email'>Email </label>
          <input id='email' type='email' placeholder='Email' required />
        </div>
        <div className='input password'>
          <label htmlFor='password'>Password </label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <div className='sign-up btn'>
          <button>Sign Up</button>
        </div>
        <footer>
          <h4>By clicking you agree to</h4>
          <h4>Terms and Conditions</h4>
        </footer>
      </form>
    </main>
  );
}

export default Form;
