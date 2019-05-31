import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from "../../../model/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";

@Component({
  selector: "app-registrarse",
  templateUrl: "./registrarse.component.html",
  styleUrls: ["./registrarse.component.css"]
})
export class RegistrarseComponent implements OnInit {
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

  ngOnInit() { }

  crearSiNoExiste(usuario: Usuario) {
    this.usuarioService.obtenerUsuarios().subscribe((data: Array<any>) => {
      this.existeUser = false;

      if (data) {
        Usuario.convertToArray(data).forEach(usr => {
          if (usr.mail === usuario.mail) {
            this.existeUser = true;
          }
        });
      }

      if (this.existeUser == false) {
        this.usuarioService
          .nuevoUsuario(usuario)
          .subscribe(d => console.log(d), e => console.log(e));
        this.router.navigate(["/login"]);
      }
    });
  }
}
