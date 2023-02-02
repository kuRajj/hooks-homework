import React from "react";
import CardWrapper from "../common/Card";
const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("token");

    const onLogin = () => {
        localStorage.setItem("token", "isAuth");
    };

    const onLogOut = () => {
        localStorage.removeItem("token");
    };
    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
