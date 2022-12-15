import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.css'],
})
export class BandejaComponent implements OnInit, AfterViewInit  {
  
  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    
  }

  applyFilter() {
    
  }

}




