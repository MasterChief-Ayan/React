import {createContext} from "react";

const AppContext = createContext({
    loginStatus: false,
    log: function () {},  // if it was arrow function , then use () => {}

});

export default AppContext;