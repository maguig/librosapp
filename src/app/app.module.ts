import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//Rutas
import { APP_ROUTING } from "./app.routes";
import { AppRoutingModule } from "./app-routing.module";

//Servicios
import { LibrosService } from "./Services/libros.service";
import { UsuarioService } from "./services/usuario.service";
import { AuthService } from "./services/auth.service";
import { LibrosPedidosService } from "./services/libros-pedidos.service";

//Componentes
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { CatalogoComponent } from "./components/catalogo/catalogo.component";
import { LibroComponent } from "./components/libro/libro.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { TarjetaComponent } from "./components/tarjeta/tarjeta.component";
import { PedidosComponent } from "./components/pedidos/pedidos.component";
import { UsuarioAdmComponent } from "./components/administrador/administrar-libro/usuario-adm/usuario-adm.component";
import { PedidosActivosComponent } from "./components/administrador/administrar-libro/pedidos-activos/pedidos-activos.component";
import { EditarLibroComponent } from "./components/administrador/administrar-libro/editar-libro/editar-libro.component";
import { AgregarLibroComponent } from "./components/administrador/administrar-libro/agregar-libro/agregar-libro.component";
import { AdministradorLibroComponent } from "./components/administrador/administrar-libro/administrador-libro.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { LoginComponent } from "./components/ingresar/login/login.component";
import { RegistrarseComponent } from "./components/ingresar/registrarse/registrarse.component";
import { ReservasComponent } from "./components/administrador/administrar-libro/reservas/reservas.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogoComponent,
    LibroComponent,
    InicioComponent,
    TarjetaComponent,
    PedidosComponent,
    UsuarioAdmComponent,
    PedidosActivosComponent,
    EditarLibroComponent,
    AgregarLibroComponent,
    AdministradorLibroComponent,
    FooterComponent,
    LoginComponent,
    RegistrarseComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [LibrosService, LibrosPedidosService, UsuarioService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
