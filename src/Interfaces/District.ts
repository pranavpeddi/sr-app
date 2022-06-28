import {IGeneral} from './General'

export interface TDistrict extends IGeneral{
    stateNo: number;
    impStat: number;
    delStat: number;
    createBy: number;
    createDate: Date;
    createTime: Date;
    modifyBy: number;
    modifyDate: Date;
    modifyTime: Date;
    objPrevVal: string;
}