import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Libro } from "../../../../model/libro.model";
import { LibrosService } from "../../../../Services/libros.service";
@Component({
  selector: "app-editar-libro",
  templateUrl: "./editar-libro.component.html",
  styleUrls: ["./editar-libro.component.css"]
})
export class EditarLibroComponent implements OnInit {
  libro: Libro = null;
  id: string;
  constructor(
    private librosService: LibrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.libro = {
      nombre: "",
      resena: "",
      img: "",
      autor: "",
      paginas: 0,
      edicion: 0,
      idioma: ""
    };
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
      console.log(parametros);
      this.id = parametros["id"];

      this.librosService
        .obtenerLibro(this.id)
        .subscribe(libro => (this.libro = libro as Libro));
    });
  }

  volver() {
    this.router.navigateByUrl("/administradorLibro");
  }

  editar() {
    this.librosService.actualizarLibro(this.libro, this.id).subscribe(
      data => {
        this.router.navigate(["/catalogo"]);
        console.log(data);
      },
      error => console.error(error)
    );
  }
}
