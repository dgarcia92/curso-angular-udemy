import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LogginService } from '../LogginService.service';
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
    
    @ViewChild('nombreInput') nombreInput : ElementRef; //ViewChild  
    @ViewChild('apellidoInput') apellidoInput : ElementRef; //ViewChild  
    
    constructor(private logginService:LogginService ){ }

    //agregarPersona(){
    // agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){ //Local References
    agregarPersona(){
     // let persona1 = new Persona(nombreInput.value, apellidoInput.value); //Local References
     let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);  //ViewChild  
      //this.personas.push( persona1 );

      this.logginService.enviaMensajeAConsola('Envíando persona: '+persona1.nombre + ' ' + persona1.apellido);

      this.personaCreada.emit(persona1);
    }


}
