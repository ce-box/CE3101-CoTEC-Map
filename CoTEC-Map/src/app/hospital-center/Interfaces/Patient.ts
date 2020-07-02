
// Country information interface
export interface Patient{
    dni: string;
    name: string;
    lastName: string;
    age: number;
    hospital: string;
    hospitalized: boolean;
    icu: boolean;
    status: string;
    region: string;
    country: string;
    }

// Send Patient information interface
export interface SendPatient{
    Dni: string;
    Name: string;
    LastName: string;
    DoB: string;
    Hospitalized: boolean;
    ICU: boolean;
    Status: number;
    Hospital_Id: number;
    Region: string;
    Country: string;
    }

