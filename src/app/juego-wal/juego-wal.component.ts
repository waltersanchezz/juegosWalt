import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { proJuego } from '../model/juegoW.model';
@Component({
  selector: 'juego-wal',
  templateUrl: './juego-wal.component.html',
  styleUrls: ['./juego-wal.component.css']
})
export class JuegoWalComponent implements OnInit {

  private registroACrear:proJuego;

  constructor(private http:Http) { 
     this.registroACrear = new proJuego();
  }

  ngOnInit() {
  }


  public guardarRegistro()
  {
    this.http.post(
      "http://sofia_henao.net23.net/juegoWalter/juegoW.php",
      this.registroACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Registro guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el Registro");
      }
    });

      
  }

}
