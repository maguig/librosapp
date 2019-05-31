import { Component, OnInit } from "@angular/core";
import { LibrosService } from "../../services/libros.service";
import { Libro } from "../../model/libro.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo.component.html",
  styleUrls: ["./catalogo.component.css"]
})
export class CatalogoComponent implements OnInit {
  libros: Libro[] = [];
  todosLosLibros: Libro[];
  profile: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService,
    private router: Router
  ) {
    this.librosService.obtenerLibros().subscribe(data => {
      console.log(data);

      if (data) {
        let arrData = Libro.convertToArray(data);
        this.todosLosLibros = arrData;
        this.libros = arrData;
      }
    });
  }

  ngOnInit() { }

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
}
