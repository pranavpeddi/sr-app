import React from 'react';

interface LabelProps{
    labelName: string;
}

function Label({labelName}: LabelProps){
    return(
        <label className='form-label'>{labelName}</label>
    )
}

export default Label;