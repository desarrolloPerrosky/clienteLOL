import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';

import { Config }		from "../config";
import { Campeon }		from "./campeon";
import { CampeonDto }	from "./campeon.dto";

import { CampeonFull }	from "../beans/campeon-full";

import { CAMPEONES }	from './campeones.mock';
import { CAMPEON }		from './campeones-full.mock';

@Injectable()
export class CampeonService {
	misCampeones : Array<Campeon> = CAMPEONES;
	constructor( private http: Http ) { }
//	load() {
//		let headers = new Headers();
//		headers.append( "Authorization", "Bearer " + Config.token );
//
//		return this.http.get( Config.apiUrl + "Groceries", {
//			headers: headers
//		})
//			.map( res => res.json() )
//			.map( data => {
//				let groceryList = [];
//				data.Result.forEach(( grocery ) => {
//					groceryList.push( new Grocery( grocery.Id, grocery.Name ) );
//				});
//				return groceryList;
//			})
//			.catch( this.handleErrors );
//	}
//
	busqueda( campeonBuscado: string ): Promise<Array<Campeon>> {
		let cb:string = campeonBuscado.toUpperCase()
		let seleccion: Array<Campeon> = CAMPEONES.filter((campeon,indice, arreglo) => {
			return campeon.nombre.toUpperCase().indexOf(cb) >= 0;
		});

		seleccion.sort((primero: Campeon, segundo:Campeon)=>{
			if (primero.nombre < segundo.nombre) {
				return -1;
			}
			if (primero.nombre > segundo.nombre) {
				return 1;
			}
			return 0;
		});

		return Promise.resolve( seleccion );
	}

	busquedaDto( campeonBuscado: string ): Promise<Array<CampeonDto>> {
		let cb:string = campeonBuscado.toUpperCase()
		let seleccion: Array<Campeon> = CAMPEONES.filter((campeon,indice, arreglo) => {
			return campeon.nombre.toUpperCase().indexOf(cb) >= 0;
		});
		
		let _seleccion: Array<CampeonDto> = [];
		
		seleccion.forEach((campeon,indice, arreglo) => {
			let cc :CampeonDto = new CampeonDto(campeon.id, campeon.nombre);			

			cc.title  = CAMPEON[cc.nombre].title;
			cc.name   = CAMPEON[cc.nombre].name;
			
			_seleccion.push( cc );
		});

		_seleccion.sort((primero: CampeonDto, segundo:CampeonDto)=>{
			if (primero.nombre < segundo.nombre) {
				return -1;
			}
			if (primero.nombre > segundo.nombre) {
				return 1;
			}
			return 0;
		});
		
		return Promise.resolve( _seleccion );
	}

	findCampeonByName( campeonBuscado: string ): Promise<CampeonFull> {
		//let dto:any = CAMPEONES[campeonBuscado];
		//let resultado:CampeonFull = CampeonFull.NEW(dto);
		return Promise.resolve( CampeonFull.NEW(CAMPEON[campeonBuscado]));
	}
	
//	add( name: string ) {
//		let headers = new Headers();
//		headers.append( "Authorization", "Bearer " + Config.token );
//		headers.append( "Content-Type", "application/json" );
//
//		return this.http.post(
//			Config.apiUrl + "Groceries",
//			JSON.stringify( { Name: name }),
//			{ headers: headers }
//		)
//			.map( res => res.json() )
//			.map( data => {
//				return new Grocery( data.Result.Id, name );
//			})
//			.catch( this.handleErrors );
//	}

	handleErrors( error: Response ) {
		console.log( JSON.stringify( error.json() ) );
		return Observable.throw( error );
	}
}