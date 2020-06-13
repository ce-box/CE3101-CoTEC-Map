import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  pageName = 'Reporte';
  show = false;
  countryData: any;
  countrystatistics: any;

  constructor() {
    this.countryData = [
      {coutry: 'Costa Rica', infections: 23455566, recovered: 6675775, dead: 345566, actives: 566467},
      {coutry: 'Costa Rica', infections: 234555566, recovered: 6675775, dead: 345566, actives: 566467},
      {coutry: 'Costa Rica', infections: 23455566, recovered: 66755775, dead: 345566, actives: 5566467},
      {coutry: 'Costa Rica', infections: 23455566, recovered: 6675775, dead: 3455566, actives: 566467}
    ];
    this.countrystatistics =
      {infections: 23455566, recovered: 6675775, dead: 345566, actives: 566467};
  }

  ngOnInit(): void {
  }

  // Print the report in a pdf
  print() {
    window.print();
  }

  // Active a state patients report
  reportState() {
    this.pageName = 'Reporte de pacientes por estado';
    this.show = true;
  }

  // Active a state dead report
  reportDead() {
    this.pageName = 'Reporte de muertes y nuevos casos';
    this.show = true;
  }
}
