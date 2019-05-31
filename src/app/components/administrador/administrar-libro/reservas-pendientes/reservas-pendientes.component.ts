import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from "../../../../model/usuario.model";
import { UsuarioService } from "../../../../services/usuario.service";

@Component({
  selector: "app-reservas-pendientes",
  templateUrl: "./reservas-pendientes.component.html",
  styleUrls: ["./reservas-pendientes.component.css"]
})
export class ReservasPendientesComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuario: Usuario = null;
  id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {}
}
