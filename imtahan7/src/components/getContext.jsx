/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import data from './data'
const GetContext = React.createContext();

function GetProvider({ children }) {
    const [newData, setNewData] = useState(data)

    function remove(id) {
        setNewData(newData.filter(value => value.id != id))
    }

    return (
        <GetContext.Provider
            value={{ newData, remove }}
        >
            {children}

        </GetContext.Provider>
    );
}

function useGetContext() {
    return useContext(GetContext);
}

export { GetProvider, GetContext, useGetContext };
