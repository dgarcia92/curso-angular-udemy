import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

   @Output() personaCreada = new EventEmitter<Persona>();
    
    //nombreInput:string = '';
    //apellidoInput:string = '';

  

    //agregarPersona(){
     agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){
      let persona1 = new Persona(nombreInput.value, apellidoInput.value);
      //this.personas.push( persona1 );
      this.personaCreada.emit(persona1);
    }


}
