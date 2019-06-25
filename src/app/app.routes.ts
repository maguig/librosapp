import { Routes, RouterModule } from "@angular/router";

import { LibroComponent } from "./components/libro/libro.component";
import { CatalogoComponent } from "./components/catalogo/catalogo.component";
import { PedidosComponent } from "./components/pedidos/pedidos.component";
import { UsuarioAdmComponent } from "./components/administrador/administrar-libro/usuario-adm/usuario-adm.component";
import { PedidosActivosComponent } from "./components/administrador/administrar-libro/pedidos-activos/pedidos-activos.component";
import { EditarLibroComponent } from "./components/administrador/administrar-libro/editar-libro/editar-libro.component";
import { AgregarLibroComponent } from "./components/administrador/administrar-libro/agregar-libro/agregar-libro.component";
import { AdministradorLibroComponent } from "./components/administrador/administrar-libro/administrador-libro.component";
import { LoginComponent } from "./components/ingresar/login/login.component";
import { RegistrarseComponent } from "./components/ingresar/registrarse/registrarse.component";
import { ReservasComponent } from "./components/administrador/administrar-libro/reservas/reservas.component";

const APP_ROUTES: Routes = [
  { path: "libro/:id", component: LibroComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "pedido/:id", component: PedidosComponent },
  { path: "editarLibro/:id", component: EditarLibroComponent },
  { path: "agregarLibro", component: AgregarLibroComponent },
  { path: "usuarioAdm", component: UsuarioAdmComponent },
  { path: "pedidosActivos", component: PedidosActivosComponent },
  { path: "administradorLibro", component: AdministradorLibroComponent },
  { path: "login", component: LoginComponent },
  { path: "registrarse", component: RegistrarseComponent },
  { path: "reservas", component: ReservasComponent },

  { path: "**", pathMatch: "full", redirectTo: "catalogo" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
