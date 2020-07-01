import { Component, OnInit } from '@angular/core';
import { CountriesService } from './Services/countries.service';
import { Country } from './Interfaces/Country';
import { Measures } from './Interfaces/Measures';


declare var google;
declare var require: any;

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {

  countries: any;
  worldInformation: any;
  mapInformation: any;
  measures: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: CountriesService) {}

  // This funtion draw the map in at screen.
  ngOnInit(): void {

    this._http.getContriesData().subscribe(data => {
      this.countries = data;
    });

    this._http.getWorldInformation().subscribe(data => {
      this.worldInformation = data;
      this.createDoughnut(data);
    });

    this._http.getContriesData().subscribe(data => {
      this.mapInformation = data;
      const mapData = this.mapStructure(data);
      this.createMap(mapData);
    });

  }

  mapStructure(countriesData: Country[]) {
    const countryList: any = [['Country', 'Casos', 'Muertes']];
    countriesData.forEach(country => {
      countryList.push([country.countryName, country.infected, country.deaths]);
    });

    return countryList;
  }

  createDoughnut(data: Country) {
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
            data: [this.worldInformation.active, this.worldInformation.deaths, this.worldInformation.recovered],
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

  createMap(mapInformation: any){

    // Cases coubtry map
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
      const data = google.visualization.arrayToDataTable(mapInformation);
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
  }

  getMeasures(code: string) {
    this._http.getMeasuresData(code).subscribe(data => {
      this.measures = data;
    });
  }
}
