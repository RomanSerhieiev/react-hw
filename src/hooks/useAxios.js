import { useState, useEffect } from "react";

export const useAxios = (method, deps) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        method
            .then((value) => value.data)
            .then((value) => setData(value));
    }, [deps]);

    return [data];
};