import { Campus } from "./Campus";
import { TDistrict } from "./District";
import { TMandal } from "./Mandal";
import { TState } from "./State";

export interface IGeneral{
    id: number;
    details: string;
}
export interface SRManageAll{
    
}
export interface TUIPageData {
    details: Campus[];
    acadYearDet: AcadYearDet[];
    mandalDet: TMandal[];
    districtDet: TDistrict[];
    stateDet: TState[];
}
export interface AcadYearDet {
    id: number;
    orgnNo: number;
    details: string;
    shortDet: string;
    yearDet: string;
    fromDate: Date;
    toDate: Date;
    delStat: number;
}
