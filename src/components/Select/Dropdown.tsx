import React from 'react'
import { TManageAll } from '../../Interfaces/ManageAll'

export interface TDropDownProps {
    options: TManageAll[] 
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
    id: string;
    value: number;
    validity: string;
}

export default function DropDown(props: TDropDownProps) {
    console.log(props)
    const { options, onChange, id, value, validity } = props
    return (
        <select id={id} className={
             "form-select" + " " + validity
        } onChange={onChange
        }>
            <option value="" >Select </option>
            {Array.isArray(options) && options.map((option, index) => {
                return <option key={index} value={option.id} selected={value == option.id}>{option.details}</option>
            })}
        </select>
    )
}