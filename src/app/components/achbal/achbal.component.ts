import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achbal',
  templateUrl: './achbal.component.html',
  styleUrls: ['./achbal.component.css']
})
export class AchbalComponent implements OnInit {

  constructor() { }

  data: Student[] = [];

  ngOnInit(): void {
    fetch('https://api-ne5be.herokuapp.com/fetyane')
      .then(response => response.json())
      .then(json => {
        json.forEach((x: any) => {
          let si = new Student();
          si.name = x.name;
          si.libas = x.libas;
          si.hofoz = x.hofoz;
          si.sira = x.sira;
          si.total = x.total;
          x.total = x.libas + x.hofoz + x.sira;
          this.data.push(si);
        });
        this.data = json
        console.log(json);
      })
  }

}

class Student {
  name: string = '';
  libas: string = '';
  hofoz: string = '';
  sira: string = '';
  total: string = '';
}