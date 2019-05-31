import { Component, OnInit } from "@angular/core";
import { LibrosService } from "../../Services/libros.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Libro } from "../../model/libro.model";
@Component({
  selector: "app-libro",
  templateUrl: "./libro.component.html",
  styleUrls: ["./libro.component.css"]
})
export class LibroComponent implements OnInit {
  libro: any;

  constructor(
    private librosService: LibrosService,
    private activatedReute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedReute.params.subscribe(params => {
      this.librosService.obtenerLibro(params["id"]).subscribe(libroFirebase => {
        this.libro = libroFirebase;
        this.libro.key$ = params["id"];
      });
    });
  }

  ngOnInit() {}

  volver() {
    this.router.navigateByUrl("/catalogo");
  }
}
