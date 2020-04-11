export interface CasesTimeSeries {
    dailyconfirmed: number,
    dailydeceased: number,
    dailyrecovered: number,
    date: string ,
    totalconfirmed: number,
    totaldeceased: number,
    totalrecovered: number
}

export interface StateWise {
    active:number,
    confirmed: number,
    deaths: number,
    deltaconfirmed: number,
    deltadeaths: number,
    deltarecovered: number,
    lastupdatedtime: Date,
    recovered: number,
    state: string,
    statecode: string
}

export interface Tested {
    positivecasesfromsamplesreported: string,
    samplereportedtoday: string,
    source: string,
    testsconductedbyprivatelabs: string,
    totalindividualstested: number,
    totalpositivecases: number,
    totalsamplestested: number,
    updatetimestamp: Date
}

export interface Response {
    casesTimeSeries: CasesTimeSeries[];
    stateWise: StateWise[];
    tested: Tested[];
}
export interface CovitIndia {
    get: string;
    errors: any[];
    results: number;
    response: Response[];
}


