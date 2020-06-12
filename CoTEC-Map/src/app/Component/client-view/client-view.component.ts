import { Component, OnInit } from '@angular/core';

declare var google;
declare var require: any;

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {

  countries: any;

  constructor() {
    // sOLO NECESARIO PARA PRUEBAS SE DEBE ELIMINRA UNA VEZ SE HAGA LA CONEXIÓN
    this.countries = [
      // tslint:disable-next-line: max-line-length
      {code : 'https://www.countryflags.io/US/flat/64.png', name : 'Costa Rica', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      // tslint:disable-next-line: max-line-length
      {code : 'https://www.countryflags.io/CR/flat/64.png', name : 'coFFd', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      // tslint:disable-next-line: max-line-length
      {code : 'https://www.countryflags.io/RU/flat/64.png', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'coFd', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cCDod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678},
      {code : 'US', name : 'cod', numberCases : 2344, numberDeads : 234455, numberRecovered : 3455678}
    ];
  }

  // This funtion draw the map in at screen.
  ngOnInit(): void {
    google.charts.load('current', {
      packages: ['geomap'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: 'AIzaSyDmhGZrOiBDdjLuW2Jp4nZC9IT2KKRYdpw',
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    function drawRegionsMap() {
      // tslint:disable-next-line: prefer-const
      // List of countries and information
      const data = google.visualization.arrayToDataTable([
        ['Country', 'Casos'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['Costa Rica', 700],
      ]);
      // tslint:disable-next-line: prefer-const
      let options = {
        colorAxis: { colors: ['#0553FF'] },
        defaultColor: '#DCDDE3',
      };

      // tslint:disable-next-line: prefer-const
      let chart = new google.visualization.GeoChart(
        document.getElementById('regions_div')
      );
      chart.draw(data, options);
    }

    // Create a graphic with the cases
    // tslint:disable-next-line: prefer-const
    let Chart = require('chart.js');
    // tslint:disable-next-line: prefer-const
    let ctx = document.getElementById('myPieChart');
    // tslint:disable-next-line: prefer-const
    let myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Casos Activos', 'Muertes', 'Recuperados'],
        datasets: [
          {
            label: 'My First Dataset',
            // List of data with: Active cases, deads and recovered
            data: [27865, 20000, 34560],
            backgroundColor: [
              '#38C3ED',
              '#FC8E19',
              '#38ECED',
            ],
          },
        ],
      },
      options: {
        animation: {
          animateRotate: true,
          animateScale: false,
        }
      }
    });
  }
}
