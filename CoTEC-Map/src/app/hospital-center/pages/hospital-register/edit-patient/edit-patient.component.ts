import { Component, OnInit, Input } from '@angular/core';
import { Pathologys } from '../../../Interfaces/pathologys';
import { Medication } from '../../../Interfaces/medication';
import { PatientService } from 'src/app/hospital-center/Services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  // Patient dni, Contact dni
  @Input() dniPatient: number;

  pageName = 'Editar paciente';

  // Data lists
  pathologys: Pathologys[];
  medication: Medication[];
  pathologysList: any[] = [];
  medicationList: any[] = [];
  patient: any;
  patientRaw: any;
  status: any;
  statusPatient: string;

  // tslint:disable-next-line: variable-name
  constructor(private _http: PatientService) {
  }

  ngOnInit(): void {
    this._http.getPatientMedications(this.dniPatient).subscribe(data => {
      data.forEach(
        // tslint:disable-next-line: no-unused-expression
        entry => {
          this.medicationList.push({ id: entry.medicationId, medicationName: entry.medicationName, pharmaCo: entry.pharmaCo });
        }
      );
    });

    this._http.getMedications().subscribe(data => {
      this.medication = data;
    });

    this._http.getPathologys().subscribe(data => {
      this.pathologys = data;
    });

    this._http.getPatientPathologys(this.dniPatient).subscribe(data => {
      this.pathologysList = data;
    });

    this._http.getPatientData(this.dniPatient).subscribe(data => {
      this.patient = data;
    });

    this._http.getPatientRawData(this.dniPatient).subscribe(data => {
      this.patientRaw = data;
    });

    this._http.getStatus().subscribe(data => {
      this.status = data;
    });
  }

  // Add a pathology in the list for send to Data Base
  getPathologyValue(value: Pathologys[]): void {
    const i = this.pathologysList.indexOf(value);

    if (i === -1) {
      this.pathologysList.push(value);
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
    }

  }

  // Delete a medicine for the list
  deleteMedicine(value: Medication): void {
    const i = this.medicationList.indexOf(value);

    if (i !== -1) {
      this.medicationList.splice(i, 1);
    }
  }

  pachtPatient(dni: number, name: string, lastName: string, customRadio: string, customRadio2: string, inputState: string) {
    for (const entry of this.status) {
      if (entry.name === inputState) {
        this.statusPatient = entry.id;
      }
    }

    const patient = [
      {
          op: 'replace',
          path: '/name',
          value: name
      },
      {
          op: 'replace',
          path: '/lastName',
          value: lastName
      },
      {
          op: 'replace',
          path: '/hospitalized',
          value: customRadio
      },
      {
          op: 'replace',
          path: '/icu',
          value: customRadio2
      },
      {
          op: 'replace',
          path: '/doB',
          value: this.patientRaw.doB
      },
      {
          op: 'replace',
          path: '/status',
          value: this.statusPatient
      },
      {
          op: 'replace',
          path: '/hospital_Id',
          value: this.patientRaw.hospital_Id
      }
  ];
    this._http.pacthPatient(patient, this.patient.dni);

    const pathologysSend = [];
    for (const entry of this.pathologysList) {
          pathologysSend.push({PatientDni: this.patient.dni, PathologyName: entry.name});
    }

    const medicationSend = [];
    for (const entry of this.medicationList) {
        medicationSend.push({patientDni: this.patient.dni, medicationId: entry.id, prescription: 'Seguir etiqueta'});
      }

    this._http.postPathology(pathologysSend);
    this._http.postMedicine(medicationSend);

    window.history.go(-1);
  }
}

