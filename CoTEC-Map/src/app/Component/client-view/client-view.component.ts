import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {
  title = 'angular7googlemaps';

  constructor() {}

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
      let data = google.visualization.arrayToDataTable([
        ['Country', 'Casos'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
      ]);
      // tslint:disable-next-line: prefer-const
      let options = {};

      // tslint:disable-next-line: prefer-const
      let chart = new google.visualization.GeoChart(
        document.getElementById('regions_div')
      );
      chart.draw(data, options);
    }
  }
}
