import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  public modalLevel : Boolean = false;
  public start : Boolean = true;
  public q1 : Boolean = false;
  public numero : number = 0;
  public porcentaje : number = 0;
  public end : Boolean = false;
  public questions : any;
  public typeQuestion : string;
  constructor( private router : Router , private auth : AuthService) { }
  public enunciado : string;
  public imagen : string = "";
  public p1 : string = "";
  public p2 : string = "";
  public p3 : string = "";
  public p4 : string = "";
  public respuestaCorrecta : string = "";

  ngOnInit() {
    this.loadFuente();
  }

  openModal(a ,b){
    this.toogleModal();
    this.typeQuestion = a;
    setTimeout(function(){ 
      document.getElementById("level-modal").style.backgroundColor = b;
      document.getElementById("button-start").style.backgroundColor = b;
      let ele = document.getElementById("image-start")
      let m = ''
      if(a == 'distribucion'){
        m = "url('./assets/images/division-colombia.svg')";
        ele.style.marginLeft = '15%';
      }else if(a == 'sectores'){
        m = "url('./assets/images/hombre.svg')";
      }else if(a == 'regiones'){
        m = "url('./assets/images/Distribucion Geografica.svg')";
      }else{
        m = "url('./assets/images/Cundinamarca.svg')";
      }
      ele.style.backgroundImage = m
      ele.style.backgroundRepeat = "no-repeat"
      ele.style.height= '100%';
      ele.style.width = '100%';
      
     }, 1);
  }

  toogleModal(){
    if (this.modalLevel == true){
      this.modalLevel = false;
    }else{
      this.modalLevel = true;
    }
  }

  closeModal(){
    this.toogleModal();
    this.end = false;
    this.start = true;
    this.numero = 0;
    this.porcentaje = 0;
    this.q1 = false;
  }

  logout(){
    sessionStorage.removeItem('x-auth');
    this.router.navigate(["folder/inbox"]);
  }

  next(){
    this.numero = this.numero +1;
    this.porcentaje = this.porcentaje + 10;
    this.start = false;
    this.q1 = true;
    this.getQuestion(this.typeQuestion);
    document.getElementById("level-modal").style.backgroundColor = "white";
    if(this.numero > 10){
      this.q1 = false;
      this.end = true;
    }
  }

  loadFuente(){
    this.auth.getQuestions().subscribe((data : any) => {
      this.questions = data['preguntas'];
    });;
  }

  getQuestion(elem){
    let option = elem == 'distribucion' ? 0 : elem == 'regiones' ? 1 : elem == 'sectores' ? 2 : 3;
    let random = this.getRandomInt(0,this.questions[option][elem].length);
    let pregunta = this.questions[option][elem][random];
    this.enunciado = pregunta.enunciado;
    this.imagen = '../assets/images'+pregunta.imagen;
    this.p1 = pregunta['respuestas'][0].respuesta;
    this.p2 = pregunta['respuestas'][1].respuesta;
    this.p3 = pregunta['respuestas'][2].respuesta;
    this.p4 = pregunta['respuestas'][3].respuesta;
    this.respuestaCorrecta = pregunta['respuestas'][0].correcta == true ? "p1" : pregunta['respuestas'][1].correcta == true ? "p2" : pregunta['respuestas'][2].correcta == true ? "p3" : pregunta['respuestas'][3].correcta == true ? "p4" : "n";
    console.log(this.respuestaCorrecta)

    // if(this.respuestaCorrecta == "p1"){
    //   document.getElementById("r1")[0].value = true
    // }else if(this.respuestaCorrecta == "p2"){
    //   document.getElementById("r2")[0].value = true
    // }else if(this.respuestaCorrecta == "p3"){
    //   document.getElementById("r3")[0].value = true
    // }else if(this.respuestaCorrecta == "p4"){
    //   document.getElementById("r4")[0].value = true
    // }
  }

  /**
   * 
   * @param min Minimo del numero aleatorio
   * @param max Maximo del numero aleatorio
   * @returns 
   */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  finalizar(){
    this.toogleModal();
    this.end = false;
    this.start = true;
    this.numero = 0;
    this.porcentaje = 0;
  }

}
