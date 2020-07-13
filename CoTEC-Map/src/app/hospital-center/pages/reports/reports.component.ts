import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../Services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  pageName = 'Reporte';

  // Change report type
  showPatientStatistics = false;
  showDeadStatistics = false;

  // List data
  countryData: any;
  countrystatistics: any;
  countrylastdays: any;
  dates = [];

  // tslint:disable-next-line: variable-name
  constructor(private _http: ReportsService) { }

  ngOnInit(): void {
    this._http.getContriesData().subscribe(data => {
      this.countryData = data;
    });

    this._http.getWorldInformation().subscribe(data => {
      this.countrystatistics = data;
    });

    this._http.getCoutryReport().subscribe(data => {
      this.countrylastdays = data;

      // tslint:disable-next-line: forin
      for (const key in data){
        const value = data[key];

        // tslint:disable-next-line: forin
        for ( const report in value){
          // tslint:disable-next-line: no-string-literal
          const currentDate = value[report]['date'].replace('T00:00:00', '');
          this.dates.push(currentDate);
        }
        break;
      }
    });

  }

  // Print the report in a pdf
  print() {
    window.print();
  }

  // Active a state patients report
  reportState() {
    this.pageName = 'Reporte de pacientes por estado';
    this.showPatientStatistics = true;
    this.showDeadStatistics = false;
  }

  // Active a state dead report
  reportDead() {
    this.pageName = 'Reporte de muertes y nuevos casos';
    this.showDeadStatistics = true;
    this.showPatientStatistics = false;
  }
}
