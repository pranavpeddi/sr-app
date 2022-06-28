import {IGeneral} from './General'

export interface CourseCategory extends IGeneral{
    orgnNo?: number;
    workload1: number;
    workload2?: number;
    workloadWt1: number;
    workloadWt2?: number;
    impStat?: number;
    delStat?: number;
    createBy?: number;
    createDate?: Date;
    createTime?: Date;
    modifyBy?: number;
    modifyDate?: Date;
    modifyTime?: Date;
    objPrevVal?: string;
}
