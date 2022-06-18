

type ManageAllProps = {
    data: TManageAll[];
    screenName: string;
    endpoint:string;
    newRecord:string;
}


type TManageAll = {
    details:string;
    id:number;
}

export type {ManageAllProps,TManageAll}