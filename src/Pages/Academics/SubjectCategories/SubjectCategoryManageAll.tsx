import React, { useState, useEffect }  from 'react';
import { TManageAll } from '../../../Interfaces/ManageAll';
import { IGeneral } from '../../../Interfaces/General';
import axios from 'axios';
import { SubjectCategory} from '../../../API/Endpoints'
import ManageAllGrid from '../../../Shared/ManageAllGrid/ManageAllGrid';


function SubjectCatManageAll() {
    const [renderData, setRD] = useState<TManageAll[]>()

    useEffect(() => {
        var objects: any = [];
        axios.get<[]>(SubjectCategory.getAll).then((response: any) => {
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
        <ManageAllGrid data={renderData as TManageAll[]} screenName={"Subject categories's"} endpoint='viewsubjectcategory' newRecord='/addsubjectcategory'/>
        
    )

}

export default SubjectCatManageAll;