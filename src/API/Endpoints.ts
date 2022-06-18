export const baseUrl: string = 'http://localhost:5000/'


export const Mandal = {
    getAll: baseUrl + "Mandal/GetAllDet?userId=3",
    getById: baseUrl + "Mandal/GetCompDataById?userId=3&id=",
    addMandal : baseUrl + 'Mandal/SaveWithCompData?userId=3',
    deleteMandal : baseUrl + 'Mandal/DeleteById?userId=3&id='
}

export const State = {
    getAll: baseUrl + "state/GetAllDet?userId=3",
    getById: baseUrl + "state/GetCompDataById?userId=3&id=",
    addState : baseUrl + 'state/SaveWithCompData?userId=3',
    deleteState: baseUrl + 'state/DeleteById?userId=3&id='
}

export const District = {
    getAll: baseUrl + "district/GetAllDet?userId=3",
    getById: baseUrl + "district/GetCompDataById?userId=3&id=",
    addDistrict : baseUrl + 'district/SaveWithCompData?userId=3',
    deleteDistrict: baseUrl + 'district/DeleteById?userId=3&id='
}

export const SubjectCategory = {
    getAll: baseUrl + "SubjectCategory/GetAllDet?userId=3",
    getById: baseUrl + "SubjectCategory/GetCompDataById?userId=3&id=",
    addSubjectCategory : baseUrl + 'SubjectCategory/SaveWithCompData?userId=3',
    deleteSubjectCategory : baseUrl + 'SubjectCategory/DeleteById?userId=3&id='
}

export const ClassSection = {
    getAll: baseUrl + "ClassSect/GetAllDet?userId=3",
    getById: baseUrl + "ClassSect/GetCompDataById?userId=3&id=",
    addClassSection : baseUrl + 'ClassSect/SaveWithCompData?userId=3',
    deleteClassSection : baseUrl + 'ClassSect/DeleteById?userId=3&id='
}

export const CourseCategory = {
    getAll: baseUrl + "CourseCategory/GetAllDet?userId=3",
    getById: baseUrl + "CourseCategory/GetCompDataById?userId=3&id=",
    addCourseCat : baseUrl + 'CourseCategory/SaveWithCompData?userId=3',
    deleteCourseCat : baseUrl + 'CourseCategory/DeleteById?userId=3&id='
}



