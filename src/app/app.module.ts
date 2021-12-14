import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FormComponent } from './FORMULARIO/form/form.component';
import { HeaderFormComponent } from './header/header-form/header-form.component';
import { RodapeComponent } from './RODAPÉ/rodape/rodape.component';
import { ApiFormularioService } from './FORMULARIO/API/api-formulario.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrosComponent } from './FORMULARIO/registros/registros.component'


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderFormComponent,
    RodapeComponent,
    RegistrosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule,ApiFormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
