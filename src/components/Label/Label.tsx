import React from 'react';

interface LabelProps {
    labelName: string;
    isMandatory?:boolean;
}

function Label({ labelName,isMandatory }: LabelProps) {
    return (
        <div className='d-flex' >
            <label className='form-label'>{labelName}</label>
            {isMandatory ? <span className='text-danger ms-2' style={{fontSize:'20px'}}>*</span> : <></>}
        </div>

    )
}

export default Label;