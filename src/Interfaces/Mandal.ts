import {IGeneral} from './General'

export interface TMandal extends IGeneral{
    districtNo: number;
    impStat: number;
    delStat: number;
    createBy: number;
    createDate: Date;
    createTime: Date;
    modifyBy: number;
    modifyDate: Date;
    modifyTime: Date;
}


