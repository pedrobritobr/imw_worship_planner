/* eslint-disable */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Register.css';

const churchAllowed = [
  'Selecione a igreja',
  'IMW São Cristovão',
  'IMW Central CF',
];

const userData = {
  email: '',
  password: '',
  church: '',
}

function Register({
  className,
}) {
  const [user, setUser] = useState(null);
  const [selectedChurch, setSelectedChurch] = useState(churchAllowed[0]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    userData.email = event.target["register-email"].value;
    userData.password = event.target["register-password"].value;
    userData.church = selectedChurch;
    console.log(userData);
    setUser(userData);
    console.log(user);
  };

  const handleSelectChurch = (church) => {
    setSelectedChurch(church);
    setDropdownOpen(false);
  };

  return (
    <form className={`${className} register-form`} onSubmit={handleRegister}>
      <header>
        <h4>Cadastro</h4>
        <button type="submit">Cadastrar</button>
      </header>
      <label htmlFor="register-email" id="input-register-email">
        <span>Email:</span>
        <input type="email" id="register-email" required />
      </label>
      <label htmlFor="register-password">
        <span>Senha:</span>
        <input type="password" id="register-password" name="password" required />
      </label>
      <label htmlFor="register-check-password">
        <span className="register-check-password">
          <span class="small-text">Confirmar</span>
          Senha:
        </span>
        <input type="password" id="register-check-password" name="check-password" required />
      </label>
      <label htmlFor="register-church">
        <span>Igreja:</span>
        <div
          className={`custom-select ${isDropdownOpen ? 'open' : ''}`}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <div className="select-trigger">{selectedChurch}</div>
          {isDropdownOpen && (
            <ul className="options">
              {churchAllowed.map((church) => (
                <li
                  key={church}
                  className="option"
                  onClick={() => handleSelectChurch(church)}
                >
                  {church}
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>
    </form>
  );
}

Register.propTypes = {
  className: PropTypes.string,
};

export default Register;
