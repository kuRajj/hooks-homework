import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {!isAuth && (
                <button className="btn btn-primary mx-1" onClick={onLogin}>
                    Войти
                </button>
            )}
            {isAuth && (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
