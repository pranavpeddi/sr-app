import React, { useState } from 'react';

export interface TEmployee {
    name: string;
    age: number;
    department: Department
}

export interface Department {
    id: number,
    name: string;
    loc: string;
    [key: string]: any;
}

export interface TProps {
    data: TEmployee;
}


function TreeView({data}:TProps) {

    const [modifiedObject, setModifiedObject] = useState<TProps>()


    return (
        <>
            <div>
                <ul>
                    <li>
                        {data.name}
                    </li>
                    <li>
                        {data.age}
                    </li>
                    <li>
                        Department:
                        <ul>
                            {data.department ?
                                Object.keys(data.department).map((key) => {
                                    return (
                                        <li>
                                           <b>{key}</b> : {data.department[key]}
                                        </li>
                                    )
                                }) : <></>}

                        </ul>

                    </li>
                </ul>
            </div>
        </>
    )
}


export default TreeView;
