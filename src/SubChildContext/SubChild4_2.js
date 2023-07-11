import React, {useContext, useEffect} from 'react';

import {TextContext} from '../App'

const SubChild4_2 = () => {
    const {text2} = useContext(TextContext);

    useEffect(() => {
        text2('Hello, SubChild3_1 from SubChild4_2')
    }, [])

    return (
        <div>
            <h4>SubChild4_2</h4>
        </div>
    );
};

export default SubChild4_2;