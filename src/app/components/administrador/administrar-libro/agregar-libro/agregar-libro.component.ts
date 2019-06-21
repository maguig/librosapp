import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Libro } from "../../../../model/libro.model";
import { LibrosService } from "../../../../Services/libros.service";
@Component({
  selector: "app-agregar-libro",
  templateUrl: "./agregar-libro.component.html",
  styleUrls: ["./agregar-libro.component.css"]
})
export class AgregarLibroComponent implements OnInit {
  libro: Libro = null;

  constructor(private librosService: LibrosService, private router: Router) {
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

  ngOnInit() {}

  guardarCambios() {
    console.log(this.libro);

    this.librosService.nuevoLibro(this.libro).subscribe(
      data => {
        this.router.navigate(["/administradorLibro"]);
      },
      error => console.error(error)
    );
  }

  volver() {
    this.router.navigateByUrl("/administradorLibro");
  }
}
