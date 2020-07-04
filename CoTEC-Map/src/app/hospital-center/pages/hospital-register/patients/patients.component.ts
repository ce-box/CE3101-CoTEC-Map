import { Component, OnInit } from '@angular/core';
import { Pathologys } from '../../../Interfaces/pathologys';
import { Medication } from '../../../Interfaces/medication';
import { PatientService } from 'src/app/hospital-center/Services/patient.service';
import { Country } from 'src/app/hospital-center/Interfaces/Country';
import { Status } from 'src/app/hospital-center/Interfaces/status';
import { Patient, SendPatient } from 'src/app/hospital-center/Interfaces/Patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {

  pageName = 'Crear paciente';
  countrySelect = false;

  // Add patient var
  hospitalizedPatient: boolean;
  icuPatent: boolean;
  statusPatient: number;

  // Data lists
  pathologys: Pathologys[];
  medication: Medication[];
  pathologysList: any[] = [];
  medicationList: any[] = [];
  status: Status[];
  countries: Country[];
  regions: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: PatientService) { }

  ngOnInit(): void {
    this._http.getContriesData().subscribe(data => {
      this.countries = data;
    });

    this._http.getMedications().subscribe(data => {
      this.medication = data;
    });

    this._http.getStatus().subscribe(data => {
      this.status = data;
    });

    this._http.getPathologys().subscribe(data => {
      this.pathologys = data;
    });
  }

  getRegions(code: string) {
    this.countrySelect = true;
    for (const entry of this.countries) {
      if (entry.countryName === code){
        this._http.getRegionsForContry(entry.countryCode).subscribe(data => {
          this.regions = data;
        });
      }
    }
  }

  // Add a pathology in the list for send to Data Base
  getPathologyValue(value: Pathologys[]): void {
    const i = this.pathologysList.indexOf(value);

    if (i === -1) {
      this.pathologysList.push(value);
      console.log(this.pathologysList);
    }

  }

  // Delete a pathology for the list
  deletePathology(value: Pathologys): void {
    const i = this.pathologysList.indexOf(value);

    if (i !== -1) {
      this.pathologysList.splice(i, 1);
    }
  }

  // Add a medicine in the list for send to Data Base
  getMedicineValue(value: Medication[]): void {
    const i = this.medicationList.indexOf(value);

    if (i === -1) {
      this.medicationList.push(value);
      console.log(this.medicationList);
    }

  }

  // Delete a medicine for the list
  deleteMedicine(value: Medication): void {
    const i = this.medicationList.indexOf(value);

    if (i !== -1) {
      this.medicationList.splice(i, 1);
    }
  }

  // tslint:disable-next-line: max-line-length
  addPatient(dni: string, name: string, lastName: string, doB: string, hospitalized: string, icu: string, status: string, region: string, country: string) {

    if (hospitalized === 'true') {
      this.hospitalizedPatient = true;
    }
    else {
      this.hospitalizedPatient = false;
    }

    for (const entry of this.status) {
      if (entry.name === status) {
        this.statusPatient = entry.id;
      }
    }

    for (const entry of this.countries) {
      if (entry.countryName === country) {
        country = entry.countryCode;
      }
    }

    if (icu === 'true') {
      this.icuPatent = true;
    }
    else {
      this.icuPatent = false;
    }
    const patient: SendPatient = {Dni: dni, Name: name, LastName: lastName,
      DoB: doB, Hospitalized: this.hospitalizedPatient, ICU: this.icuPatent,
      Status: this.statusPatient, Hospital_Id: 1, Region: region, Country: country };

    // this._http.postPatient(patient);

    console.log(this.medicationList);
    const medicationSend = [];
    for (const entry of this.medicationList) {
      medicationSend.push({patientDni: dni, medicationId: entry.id, prescription: 'Seguir etiqueta'});
    }


    const pathologysSend = [];
    for (const entry of this.pathologysList) {
      pathologysSend.push({PatientDni: dni, PathologyName: entry.name});
    }

    if (pathologysSend.length !== 0) {
      this._http.postPathology(pathologysSend);
    }
    if (medicationSend.length !== 0) {
      this._http.postMedicine(medicationSend);
    }
  }
}
