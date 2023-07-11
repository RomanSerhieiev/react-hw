import React from 'react';

import SubChild2_1 from './SubChild2_1'
import SubChild2_2 from './SubChild2_2'

const Child2 = ({text}) => {
    return (
        <div>
            <h3>Child2</h3>
            <SubChild2_1 />
            <SubChild2_2 text={text} />
        </div>
    );
};

export default Child2;