import React, { useContext } from 'react';

import {TextContext} from '../App'

const SubChild3_1 = () => {
    const { data2 } = useContext(TextContext);

    return (
        <div>
            <h4>SubChild3_1</h4>
            <p>{data2}</p>
        </div>
    );
};

export default SubChild3_1;