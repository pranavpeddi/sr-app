import React, { useState, useEffect } from 'react'
import ManageAllGrid from '../../../Shared/ManageAllGrid/ManageAllGrid'
import { TMandal } from '../../../Interfaces/Mandal';
import { Mandal } from '../../../API/Endpoints'
import axios from 'axios';
import { TManageAll } from '../../../Interfaces/ManageAll';

function MandalManageAll() {

    const [renderData, setRD] = useState<TManageAll[]>()

    useEffect(() => {
        var objects: any = [];
        axios.get<TMandal[]>(Mandal.getAll).then((response: any) => {
            if (response.data.value) {
                response.data.value.map((value: TMandal) => {
                    let obj: TManageAll = {
                        details: value.details,
                        id: value.id
                    }

                    objects.push(obj)
                })
                setRD(objects)
            }
        })
    }, [])

    return (

        <ManageAllGrid data={renderData as TManageAll[]} screenName={"Mandals"} endpoint='viewmandal' newRecord='/addmandal'/>
    )

}


export default MandalManageAll;