import React from "react";
import PropTypes from "prop-types";

function SimpleComponent({ onLogin, onLogOut, isAuth }) {
  return (
    <>
      { isAuth
      ? <button className="btn btn-danger" onClick={onLogOut}>Выйти из системы</button>
      : <button className="btn btn-primary" onClick={onLogin}>Войти в систему</button>
      }
    </>
  );
}
SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func,
  isAuth: PropTypes.bool
};

export default SimpleComponent;
