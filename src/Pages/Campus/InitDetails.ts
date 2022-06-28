export const campusInitDetails = {
    id: 0,
    orgnNo: 1,
    code: "",
    details: "",
    shortDet: "",
    addr1: "",
    addr2: "",
    addr3: "",
    city: "",
    mandalNo: 0,
    districtNo: 0,
    stateNo: 0,
    phoneNo: "",
    cellNo: "",
    mailId: "",
    isInUse: false,
    isSelected: false,
    acadCampDet: {
      id: 0,
      acadNo: 0,
      campCategoryNo: 0,
      fromDate:new Date(""),
      toDate: new Date(""),
      session1FromTime: new Date(""),
      session1ToTime: new Date(""),
      session2FromTime: new Date(""),
      session2ToTime: new Date(""),
      session3FromTime: new Date(""),
      session3ToTime: new Date(""),
      session1BreakFromTime: new Date(""),
      session1BreakToTime: new Date(""),
      workload1: 0,
      workload2: 0,
      workloadWt1: 0,
      workloadWt2: 0,
      periodDuration: 0,
      maxPeriods: 0,
      totalPeri: 0,
      isInUse: false,
      isSelected: false,
      acadClassDet: [
        {
            id: 0,
            acadCampCategoryDetNo: 0,
            classNo: 41,
            isInUse: false,
            isSelected: false,
            classDet: {
              id: 0,
              orgnNo: 1,
              code: "",
              details: "",
              delStat: 0
            },
            classSubDet: {
              id: 0,
              acadClassDetNo: 0,
              isInUse: false,
              isSelected: false,
              classTimingDet: [],
              objPrevVal: ""
            },
            objPrevVal: ""
          }
      ],
      acadCampTimingDet: [
        [
            {
                id: 0,
                acadCampCategoryDetNo: 0,
                weekDay: 0,
                periNo: 1,
                periFromTime: "",
                periFromTimeDispStr: "",
                periToTime: "",
                periToTimeDispStr: "",
                isInUse: false,
                isSelected: false,
                objPrevVal: ""
              },
        ]
      ],
      objPrevVal: ""
    },
    objPrevVal: ""
  }