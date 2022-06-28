    import {IGeneral} from './General' 
    export interface ClassDet {
        id: number;
        orgnNo: number;
        code: string;
        details: string;
        delStat: number;
    }

    export interface ClassSubDet {
        id: number;
        acadClassDetNo: number;
        isInUse: boolean;
        isSelected: boolean;
        classTimingDet: any[];
        objPrevVal: string;
    }

    export interface AcadClassDet {
        id: number;
        acadCampCategoryDetNo: number;
        classNo: number;
        isInUse: boolean;
        isSelected: boolean;
        classDet: ClassDet;
        classSubDet: ClassSubDet;
        objPrevVal: string;
    }

    export interface AcadCampDet {
        id: number;
        acadNo: number;
        campCategoryNo: number;
        fromDate: Date;
        toDate: Date;
        session1FromTime: Date;
        session1ToTime: Date;
        session2FromTime: Date;
        session2ToTime: Date;
        session3FromTime: Date;
        session3ToTime: Date;
        session1BreakFromTime: Date;
        session1BreakToTime: Date;
        workload1: number;
        workload2: number;
        workloadWt1: number;
        workloadWt2: number;
        periodDuration: number;
        maxPeriods: number;
        totalPeri: number;
        isInUse: boolean;
        isSelected: boolean;
        acadClassDet: AcadClassDet[];
        acadCampTimingDet: any[][];
        objPrevVal: string;
    }

    export interface Campus extends IGeneral {
        orgnNo: number;
        code: string;
        shortDet: string;
        addr1: string;
        addr2: string;
        addr3: string;
        city: string;
        mandalNo: number;
        districtNo: number;
        stateNo: number;
        phoneNo: string;
        cellNo: string;
        mailId: string;
        isInUse: boolean;
        isSelected: boolean;
        acadCampDet: AcadCampDet;
        objPrevVal: string;
    }


