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
  todosLosLibros: Libro[];
  libros: Libro[];
  libro: Libro = null;
  constructor(private librosService: LibrosService, private router: Router) { }
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

    this.librosService.obtenerLibros().subscribe(data => {
      console.log(data);

      if (data) {
        let arrData = Libro.convertToArray(data);
        this.todosLosLibros = arrData;
        this.libros = arrData;
      }
    });
  }

  // cuandoRecibaLosLibros(data: any) {
  //   this.libros = Libro.convertToArray(data);
  // }

  // cuandoFalleLaBusqueda(error: any) {
  //   console.error(error);
  // }

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
    this.libros = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.todosLosLibros.length; i++) {
      let libro = this.todosLosLibros[i];

      let nombre = libro.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        this.libros.push(libro);
      }
    }
  }

  verTodos() {
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
}
