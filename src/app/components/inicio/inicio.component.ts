import { Component, OnInit } from "@angular/core";
import { LibrosService } from "../../Services/libros.service";
import { Libro } from "src/app/model/libro.model";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  libros1: any;
  libros2: any;
  libros3: any;
  constructor(private librosService: LibrosService) {
    // this.librosService.obtenerLibros().subscribe(data => {
    //   // .convertToArray(data);
    //   let libros = Libro;
    //   this.libros1 = libros;
    //   this.libros2 = libros;
    //   this.libros3 = libros;
    // });
  }

  ngOnInit() { }
}
