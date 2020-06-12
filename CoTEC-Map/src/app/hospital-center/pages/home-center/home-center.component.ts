import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.scss']
})
export class HomeCenterComponent implements OnInit {

  hospitalName = ' Hospital Max Peralta';

  constructor() { }

  ngOnInit(): void {
  }

}
