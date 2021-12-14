import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Formulario } from '../Models/form.models';
import { ApiFormularioService } from '../API/api-formulario.service';
import { Console } from 'console';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
// import { Console } from 'console';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  formulario: Formulario = new Formulario()      
  dados: Array<any> = new Array();  

  constructor(private apiForm: ApiFormularioService) { }

  ngOnInit() {
    this.ListadosCadastrosForm();
  }  

  CadastrarDadosFormulario(){  
    this.apiForm.postForm(this.formulario).subscribe(fomr =>{
      this.formulario =  new Formulario;
      this.ListadosCadastrosForm();
    }, err =>{
      console.log('Erro ao cadastrar Aluno', err)
    })
  }

  ListadosCadastrosForm(){
    this.apiForm.listar().subscribe(forms =>{      
        const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var arrayAux = [];
        var arryNomesAtuais = [];
        var letraPorPosicao = [];
        
        forms.map((usuario) => {
          var nameForme = usuario.name.charAt();
          arrayAux.push(letras.indexOf(nameForme.toUpperCase()))
        });      

        var ordernado = this.radixSort(arrayAux);     
        
        for (let i = 0; i < forms.length; i++) {
          var nameForme = forms[i].name.charAt();
          nameForme.toUpperCase();
          letraPorPosicao.push(letras[ordernado[i]]);

          forms.map((usuario)=>{
            if(usuario.name.charAt() == letraPorPosicao[i]){
              arryNomesAtuais.push(usuario);                                    
            }
          });
          
          this.dados = arryNomesAtuais;
          // this.dados = forms;
          
        } 
      },err =>{
        console.log('erro!',err);  
    })
  }

  
  getMax(array){ // O(n)
    let max = 0
    for (let num of array) {
      max = (max < num.toString().length) ? num.toString().length : max
    }
    return max
  }

  getPosition(num,place){
   return Math.floor(num / Math.pow(10,place)) % 10;
  } 

  radixSort(array){ // O(nk)
    var max = this.getMax(array)
    for (let i = 0; i < max; i++) {
      let buckets = Array.from({length:10}, () => [])
      for (let j = 0; j < array.length; j++) {        
        buckets[this.getPosition(array[j], i)].push(array[j])
      }
      array = [].concat(...buckets)
    }
    return array
  }

}
    