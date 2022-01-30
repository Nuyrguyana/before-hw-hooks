import React from "react";

const withAuth = (Component) => (props) => {
    const isAuth = localStorage.getItem("users");
    return (
        <Component isAuth = {isAuth} />
    );
};

export default withAuth;
