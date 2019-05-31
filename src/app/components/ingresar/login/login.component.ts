import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from "../../../model/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: Usuario = null;
  existeUser = false;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuario = {
      nombre: "",
      apellido: "",
      mail: "",
      contrasena: "",
      administrador: false
    };
  }

  ngOnInit() {}

  ingresarSiEstaRegistrado(usuario: Usuario) {
    this.usuarioService.obtenerUsuarios().subscribe((data: Array<any>) => {
      this.existeUser = false;

      if (data) {
        Usuario.convertToArray(data).forEach(usr => {
          if (usr.mail !== usuario.mail) {
            this.existeUser = true;
          } else {
            this.router.navigate(["/catalogo"]);
          }
        });
      }
    });
  }
}
