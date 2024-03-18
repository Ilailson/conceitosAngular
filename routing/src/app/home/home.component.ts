import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadProducts(id: number): void {
    //algum calculo
    this.router.navigate(['/produtos', id, 'editar'], {
      queryParams: { permiteEditar: '1'},
      fragment: 'Carregando'
    });
  }

}
