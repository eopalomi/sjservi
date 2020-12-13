import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartera-cliente',
  templateUrl: './cartera-cliente.component.html',
  styleUrls: ['./cartera-cliente.component.css']
})
export class CarteraClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**************** CONFIGURACION DE LA TABLA 01 ***************/
  // DATOS DE LA TABLA
  DATA_PAGE: { 
    col01: string, col02: string,     col03: string,       col03_color:string, col04: string,     col05: string,      col06: string,  col06_color:string, col07: string, 
    col08: string, col08_ico: string, col08_color: string, col09: string,      col09_ico: string, col09_color: string, col10: string, col10_ico: string, col10_color: string,
    col11: string, col11_ico: string, col11_color: string
  } [] = [
    { col01: '1',  col02: 'PETRO', col03: 'LOG', col03_color: '#026DA5', col04: 'COMAS', col05: 'Sr. Juan Alore',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '2',  col02: 'PDVSA', col03: 'ALM', col03_color: '#778A42', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'VEN', col06_color: '#F40100', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-tired', col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '3',  col02: 'ALMER', col03: 'CAL', col03_color: '#4BA5BB', col04: 'COMAS', col05: 'Ing. Juan Munip', col06: 'CAL', col06_color: '#4BA5BB', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '4',  col02: 'BONOR', col03: 'LOG', col03_color: '#026DA5', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'PRO', col06_color: '#692F98', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-meh',   col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '5',  col02: 'AMBEV', col03: 'ALM', col03_color: '#778A42', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'PRO', col06_color: '#692F98', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-angry', col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '6',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Abdur',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '7',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '8',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Ing. Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '9',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '10', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Falco',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '11', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Choka',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '12', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '13', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col01: '14', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Ing. Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA55',}
  ];

  // TITULOS DE LA PAGINA
  TITLE_PAGE: { 
    col01: string, col02: string, col03: string, col04: string, col05: string, col06: string, col07: string, col08: string
    col09: string, col10: string, col11: string
  } [] = [{ 
    col01: 'Item',    col02: 'Razon Social', col03: 'Sector Economico', col04: 'Ubicacion',   col05: 'Contacto', col06: 'Area', col07: 'Vendedor', 
    col08: 'Permiso', col09: 'Retornar',     col10: 'Rendimiento',      col11: 'Reporte'
  }];

  // TIPO DE DATO
  TYPE_COLUMN: { 
    col01: number, col02: number, col03: number, col04: number, col05: number, col06: number, col07: number, col08: number
    col09: number, col10: number, col11: number
  } [] = [{ 
    col01: 1, col02: 1, col03: 2, col04: 1, col05: 1, col06: 2, col07: 1, col08: 3,
    col09: 3, col10: 3, col11: 3
  }];

  // OPCIONES DE LA PAGINA
  OPC_PAGE: { paginator:boolean, cabecera: boolean, buscador: boolean}[] = [{
    paginator:true, cabecera: true, buscador: true
  }];
  /*****************************************************/

/**************** CONFIGURACION DE LA TABLA 02 ***************/
  // DATOS DE LA TABLA
  DATA_PAGE_02: {
    col01: string, col02: string, col03: string, col04: string, col05: string, col06: string
  }[] = [
      { col01: 'Luisa Mori',       col02: '11', col03: '33', col04: '44', col05: '22', col06: '180' },
      { col01: 'Miriam Rodriguez', col02: '3',  col03: '33', col04: '44', col05: '22', col06: '180' },
      { col01: 'Pedro Palacion',   col02: '11', col03: '33', col04: '44', col05: '22', col06: '180' },
      { col01: 'Hilda Ponte',      col02: '18', col03: '33', col04: '44', col05: '22', col06: '180' },
    ];

  // TITULOS DE LA PAGINA
  TITLE_PAGE_02: { 
    col01: string, col02: string, col03: string, col04: string, col05: string, col06: string
  } [] = [{ 
    col01: 'Vendedor',    col02: 'Rend. 01', col03: 'Rend. 02', col04: 'Rend. 03',   col05: 'Rend. 04', col06: 'Total'
  }];

  // TIPO DE DATO
  TYPE_COLUMN_02: { 
    col01: number, col02: number, col03: number, col04: number, col05: number, col06: number
  } [] = [{ 
    col01: 1, col02: 1, col03: 1, col04: 1, col05: 1, col06: 1
  }];

  // OPCIONES DE LA PAGINA
  OPC_PAGE_02: { paginator:boolean, cabecera: boolean, buscador: boolean}[] = [{
    paginator:false, cabecera: true, buscador: false
  }];

}
