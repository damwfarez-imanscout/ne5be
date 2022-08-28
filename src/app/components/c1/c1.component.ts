import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor() { }

  data: Student[] = [];

  ngOnInit(): void {
    fetch('https://api-ne5be.herokuapp.com/c1')
      .then(response => response.json())
      .then(json => {
        json.forEach((x: any) => {
          let si = new Student();
          si.name = x.name;
          si.hofoz = x.hofoz;
          si.muraja3a = x.muraja3a;
          si.total = x.total;
          x.total = x.hofoz + x.muraja3a;
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
  muraja3a: string = '';
  total: string = '';
}