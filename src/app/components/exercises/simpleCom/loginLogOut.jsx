import React from "react";

const loginLogOut = (Component) => (props) => {
    const onLogin = () => {
        // в задании не указано, что должна выполнять данная ф-ия
        console.log("onLogin");
    };
    const onLogOut = () => {
        // в задании не указано, что должна выполнять данная ф-ия
        console.log("onLogOut");
    };
    return (
       <Component
           onLogin = {onLogin}
           onLogOut = {onLogOut}
       />
    );
};

export default loginLogOut;
