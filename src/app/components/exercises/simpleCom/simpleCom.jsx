import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    if (!isAuth) {
        return <button onClick={onLogin}>Войти</button>;
    } else {
        return <button onClick={onLogOut}>Выйти из системы</button>;
    }
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
