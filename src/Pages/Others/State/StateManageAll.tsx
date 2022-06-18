import React, { useState, useEffect }  from 'react';
import ManageAllGrid from '../../../Shared/ManageAllGrid/ManageAllGrid'
import { TManageAll } from '../../../Interfaces/ManageAll';
import { IGeneral } from '../../../Interfaces/General';
import axios from 'axios';
import {State} from '../../../API/Endpoints'


function StateManageAll() {
    const [renderData, setRD] = useState<TManageAll[]>()

    useEffect(() => {
        var objects: any = [];
        axios.get<[]>(State.getAll).then((response: any) => {
            if (response.data.value) {
                response.data.value.map((value: IGeneral) => {
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

    return(
        <ManageAllGrid data={renderData as TManageAll[]} screenName={"State's"} endpoint='viewstate' newRecord='/addstate'/>
    )

}

export default StateManageAll;