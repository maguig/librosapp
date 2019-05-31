import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../../model/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  agregar: boolean = false;
  profile: any;
  usuario: Usuario[] = [];
  username: string = "";
  userPicture: string = "";

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {}
}
