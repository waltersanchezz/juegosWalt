import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { proJuego } from './model/juegoW.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registroList:Array<proJuego> =new Array<proJuego>();
 
  constructor(private http:Http){

  }

  TodoRegistros(){
    this.http
    .get("http://sofia_henao.net23.net/juegoWalter/juegoW.php")
    .subscribe((response)=>{
      this.registroList = response.json();
      console.log(this.registroList);
      let listarRegistros = document.getElementById("listarRegistros");
    });
  } 
}
