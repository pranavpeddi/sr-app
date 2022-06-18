import React, { useState, useEffect }  from 'react';
import ManageAllGrid from '../../../Shared/ManageAllGrid/ManageAllGrid'
import { TManageAll } from '../../../Interfaces/ManageAll';
import { IGeneral } from '../../../Interfaces/General';
import axios from 'axios';
import {District as districtEp} from '../../../API/Endpoints'


function DistrictManageAll() {
    const [renderData, setRD] = useState<TManageAll[]>()

    useEffect(() => {
        var objects: any = [];
        axios.get<[]>(districtEp.getAll).then((response: any) => {
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
        <ManageAllGrid data={renderData as TManageAll[]} screenName={"District's"} endpoint='viewdistrict' newRecord='/adddistrict'/>
        
    )

}

export default DistrictManageAll;