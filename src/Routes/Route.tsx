import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import App from '../App';
import Mandal from '../Pages/Others/Mandal/Mandal'
import MandalManageAll from '../Pages/Others/Mandal/MandalManageAll'
import StateManageAll from '../Pages/Others/State/StateManageAll';
import State from '../Pages/Others/State/State';
import Loader from '../Shared/Loader';
import District from '../Pages/Others/District/District';
import DistrictManageAll from '../Pages/Others/District/DistrictManageAll';
import SubjectCatManageAll from '../Pages/Academics/SubjectCategories/SubjectCategoryManageAll';
import SubjectCategory from '../Pages/Academics/SubjectCategories/SubjectCategory';
import ClassSectionManageAll from '../Pages/Administration/ClassSection/ClassSectionManageAll';
import ClassSection from '../Pages/Administration/ClassSection/ClassSection';


function SrRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="mandalmanageall" element={<MandalManageAll />} />
            <Route path="/viewmandal/:id" element={<Mandal />} />
            <Route path="/addmandal" element={<Mandal />} />
            <Route path='loader' element={<Loader />} />
            <Route path='statemanageall' element={<StateManageAll />} />
            <Route path='/viewstate/:id' element={<State />} />
            <Route path='/addstate' element={<State />} />
            <Route path='districtManageAll' element={<DistrictManageAll />} />
            <Route path='/viewdistrict/:id' element={<District />} />
            <Route path='/adddistrict' element={<District />} />
            <Route path='/viewsubjectcategories' element={<SubjectCatManageAll />} />
            <Route path='/addsubjectcategory' element={<SubjectCategory />} />
            <Route path='/viewsubjectcategory/:id' element={<SubjectCategory />} />
            <Route path='/classsectionmanageall' element={<ClassSectionManageAll />} />
            <Route path='/viewclasssection/:id' element={<ClassSection />} />
            <Route path='/addclasssection' element={<ClassSection />} />
        </Routes>
    )
}

export default SrRoutes;