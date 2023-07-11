import React from 'react';

import SubChild1_1 from './SubChild1_1'
import SubChild1_2 from './SubChild1_2'

const Child1 = ({data}) => {
    return (
        <div>
            <h3>Child1</h3>
            <SubChild1_1 data={data} />
            <SubChild1_2 />
        </div>
    );
};

export default Child1;