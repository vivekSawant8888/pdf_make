export interface IPhotoNomial{
    enRollmentNo:string;
    studentName:string;
    birthDate:string;
    gender:string;
    medium:string;
    category:string;
    studentPhoto:string;
    sign:string;
    course:string;
    year:string;
    semester:string;
    appearingSubject:[
        {
            subjectCode:string,
            subjectType:ISubjectTypePdf,
            subjectName:string
        },
    ]
};

export enum ISubjectTypePdf {
    Theory = 'TH',
    Practical = 'PR',
    Internal = 'IA',
  }

export interface IChallan{
  clientCode:string;
  collegeName:string;
  collegeCode:string;
  year:string; //* month/year
  courseName:string;
  semName:string; //* semester/year
  mode:string;
  modeOfPayment:string;
  bankName:string;
  bankBranch:string;
  no:string;
  bankDate:string;
  mobileNo:string;
  feeDetails:
    {
      examFee:string;
      examFeeLable:string;
      studentCount: number;
      amount: number;
    }[];
}


export interface IRepeaterFeeSlip {
  receiptNo:number;
  courseName:string;
  studentName:string;
  quota:string;
  feeDetails:
  {
    subjectName:string;
    semester:string;
    amount: number;
  }[];
}

  export interface IBarCode{
    enrollmentNo:number;
    block:number;
    seatNo:number;
    ansNo:number;
    subjectType:string;
    courseName:string;
    examDate:string;
    subjectName:string;
    courseCode:number;
    subjectCode:number;
  }

  export interface IIdCard {
    collegeName:string;
    collegeLogo:string;
    studentName:string;
    standard:string;
    prnNo:string;
    rollNo:string;
    gender:string;
    issuingAuthority:string;
    dob:string;
    contactNo:string;
    bloodGroup:string;
    address:string;
    email:string;
  }


  export interface IMarksheet {
    courseName:string;
    semesterName:string;
    examYear:string;
    seatNo:string;
    studentName:string;
    enrollmentNo:string;
    collegeName:string;
    result:string;
    totalCredit:string;
    externalMaxTotal:string;
    externalObtTotal:string;
    internalMaxTotal:string;
    internalObtTotal:string;
    totalOfTotal:string;
    totalCgp:string;
    subjects:{
      subjectName: string;
      subjectType: string
      credit: number;
      externalMax: number;
      externalMin: number;
      internalMax: number;
      internalMin: number;
      externalObt: string;
      internalObt: string;
      total: string;
      grade: string;
      cgp: number;
      gp: number;
    }[];
  }


  export interface IResult{
    collegeName:string;
    collegeLogo:string;
    studentPhoto:string;
    courseName:string;
    semester:string; // (I,II,III,IV)
    AcadamicYear:string; // 2020-2021
    prnNo:string;
    seatNo:string;
    studentName:string;
    monthAndYear:string; // June 2021 BACKLOG, March 2021 REGULAR
    sgpi:string;
    remarks:string; // successfull
    totalGrade:string; // A+, B, A
    totalMarks:string; // 421/700
    totalCredit:string; // 20.00
    icg:string; // Total of cg
    semOneCredit:string; 
    semTwoCredit:string;
    semThreeCredit:string;
    semFourCredit:string;
    semFiveCredit:string;
    semSixCredit:string;
    semOneSgpi:string; 
    semTwoSgpi:string;
    semThreeSgpi:string;
    semFourSgpi:string;
    semFiveSgpi:string;
    semSixSgpi:string;
    cgpa:string;
    finalGrade:string;
    principalSign:string;
    directorSign:string;
    date:string;
    place:string;
    universityLogo:string;
    subjectDetails:{
      subjectCode:string;
      subjectName:string;
      internalMax:string;
      internalMin:string;
      internalObt:string;
      externalMax:string;
      externalMin:string;
      externalObt:string;
      totalMax:string;
      totalMin:string;
      totalObt:string;
      grade:string;
      gradePoint:string;
      creditPoint:string; 
      cg:string;
    }[];
  }