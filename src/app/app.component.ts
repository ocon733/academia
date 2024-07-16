import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cursos disponibles';
  cursos:string[] = ["Java","JavaScript","Python","C#","Visual Basic"];
  abierto:boolean = false;

  nombres?:string[] = [];

  abrircursos():void{
    this.abierto = !this.abierto;
  }
}
