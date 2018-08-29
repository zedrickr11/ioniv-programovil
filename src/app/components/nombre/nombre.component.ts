import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  title = 'Zedrick';

  cambiarnombre(){
    this.title="Clark";
  }
  constructor() { }

  ngOnInit() {
  }

}
