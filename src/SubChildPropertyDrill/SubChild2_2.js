import React, {useEffect} from 'react';

const SubChild2_2 = ({text}) => {
    useEffect(() => {
        text('Hello, SubChild1_1 from SubChild2_2')
    }, [])

    return (
        <div>
            <h4>SubChild2_2</h4>
        </div>
    );
};

export default SubChild2_2;