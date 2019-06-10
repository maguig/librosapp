import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Libro } from "../../../model/libro.model";
import { LibrosService } from "../../../Services/libros.service";

@Component({
  selector: "app-administrador-libro",
  templateUrl: "./administrador-libro.component.html",
  styleUrls: ["./administrador-libro.component.css"]
})
export class AdministradorLibroComponent implements OnInit {
  libros: Libro[];
  libroEncontrado: Libro[] = [];
  librosSinStock: Libro[] = [];
  constructor(private librosService: LibrosService, private router: Router) {}
  ngOnInit() {
    this.librosService
      .obtenerLibros()
      // .subscribe(this.cuandoRecibaLosLibros, this.cuandoFalleLaBusqueda);
      .subscribe(
        data => {
          this.libros = Libro.convertToArray(data);
        },
        error => console.error(error)
      );
  }

  borrarLibroAdm(key$: string) {
    this.librosService.borrarLibro(key$).subscribe(error => {
      if (error) {
        console.error(error);
      } else {
        //Todo bien
        this.ngOnInit();
      }
    });
  }

  buscarLibro(termino: string) {
    termino = termino.toLowerCase();

    for (let i = 0; i < this.libros.length; i++) {
      let libro = this.libros[i];

      let nombre = libro.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        this.libroEncontrado.push(libro);
      }
    }
    this.libros = this.libroEncontrado;
  }

  verTodos() {
    this.librosService.obtenerLibros().subscribe(
      data => {
        this.libros = Libro.convertToArray(data);
      },
      error => console.error(error)
    );
  }

  buscarSinStock() {
    for (let i = 0; i < this.libros.length; i++) {
      let libro = this.libros[i];

      let stockLibro = this.libros[i].stock;

      if (stockLibro == 0) {
        this.librosSinStock.push(libro);
      }
    }
    this.libros = this.librosSinStock;
  }
}
