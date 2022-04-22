/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import data from './data'
const GetContext = React.createContext();

function GetProvider({ children }) {
    const [newData, setNewData] = useState([])
    function searchValue(search) {
        setNewData([])
        data.map(value => {
            if (value.name.includes(search)) {
                setNewData(d => [...d, value])
            }
        })
    }

    return (
        <GetContext.Provider
            value={{ searchValue, newData }}
        >

            {children}

        </GetContext.Provider>
    );
}

function useGetContext() {
    return useContext(GetContext);
}

export { GetProvider, GetContext, useGetContext };
