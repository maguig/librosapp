import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  usuarioLogueado: Usuario = null;

  login(usuario: Usuario) {
    this.usuarioLogueado = usuario;
  }

  logout() {
    this.usuarioLogueado = null;
  }

  isAuthenticated(): boolean {
    if (this.usuarioLogueado === null) {
      return false;
    } else {
      return true;
    }
  }

  isAdmin() {
    if (this.isAuthenticated() && this.usuarioLogueado.administrador === true) {
      return true;
    }
    return false;
  }
}
