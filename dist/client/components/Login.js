import React, { useRef } from 'react';
var Login = function () {
    var username = useRef(null); //how to get around forbidden null assertions
    var password = useRef(null);
    var handleLogin = function () {
        // const user : string | undefined = username.current?.value;
        // const pass : string | undefined = password.current?.value;
        //make a post fetch request with user + pass sent as body
        //dispatch an action once logged in
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: function () { return handleLogin(); } })));
};
export default Login;
