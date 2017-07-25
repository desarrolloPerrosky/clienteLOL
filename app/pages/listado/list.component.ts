import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";

//import * as Image 			from "tns-core-modules/ui/image";
//import * as ScrollEventData	from "tns-core-modules/ui/scroll-view";
//
//import * as FlexboxLayout	from "tns-core-modules/ui/layouts/flexbox-layout";

import * as listViewModule	from "tns-core-modules/ui/list-view";
import * as observableArray from "tns-core-modules/data/observable-array";

import { PageRoute }		from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { TextField }		from "ui/text-field";

import { Campeon }			from "../../shared/campeon/campeon";
import { CampeonDto }		from "../../shared/campeon/campeon.dto";
import { CampeonService }	from "../../shared/campeon/campeon.service";

import * as SocialShare		from "nativescript-social-share";

@Component( {
	selector: "listado-campeones",
	templateUrl: "pages/listado/list.html",
	styleUrls: ["pages/listado/list-common.css", "pages/list/list.css"],
	providers: [CampeonService]
})
export class ListadoComponent implements OnInit {
	listadoCampeones: Array<CampeonDto> = [];

	busqueda:string = "";
	
	grocery = "";

	isLoading = false;

//	@ViewChild( "milistado" )  
//	listView:ListView;

	@ViewChild( "groceryTextField" )
	groceryTextField: ElementRef;

	public onItemTap(args) {

		//console.log("Item Tapped at cell index: " + args);
/**
  {
     "id": 131,
     "nombre": "Diana",
     "title": "El Desdén de la Luna",
     "icono": "res://diana",
     "name": "Diana",
     "$index": 0
 }
 */
		let dto:CampeonDto = this.listadoCampeones[args.index];

	    //alert('Clicked item with index ' + args.index);
		this.router.navigate( [ "/", "campeon", dto.nombre ] );
	};
		
	constructor(
		private router :Router,		
		private service: CampeonService,
		private pageRoute: PageRoute
	) {
		this.isLoading = true;

		
//		this.listView = new listViewModule.ListView();
//		this.listView.on(listViewModule.ListView.itemTapEvent, function (args: listViewModule.ItemEventData) {
//			    var tappedItemIndex = args.index;
//			    var tappedItemView = args.view;
//			    // Do someting
//				console.dir(args);
//				
//				alert('Indice['+tappedItemIndex+'] y vista['+tappedItemView+']');
//			});
		
		// use switchMap to get the latest activatedRoute instance
		this.pageRoute.activatedRoute
		.switchMap(activatedRoute => activatedRoute.params)
		.forEach((params) => { this.busqueda = params["busqueda"]; });
		
//listView.on(listViewModule.ListView.itemTapEvent, function (args: listViewModule.ItemEventData) {
//    var tappedItemIndex = args.index;
//    var tappedItemView = args.view;
//    // Do someting
//});

	}
	
	getImagen(path: string){
		return 'res://'+path;
	}
	
	ngOnInit() {
		
		this.service.busquedaDto( this.busqueda )
			.then(
			datos => {
				console.dir( datos );
				
				this.listadoCampeones = datos;
		
				setTimeout(()=>{this.isLoading = false;}, 1000);
			},
			( error ) => alert( "Unfortunately we could not find your account." )
			);
	}
	
	share() {
		let listString = this.listadoCampeones
			.map( grocery => grocery.nombre )
			.join( ", " )
			.trim();
		
		SocialShare.shareText( listString );
	}

	opciones(){
		alert( "Enter a list of options " );
	}

	add() {
		if ( this.grocery.trim() === "" ) {
			alert( "Enter a grocery item" );
			return;
		}

		// Dismiss the keyboard
		let textField = <TextField>this.groceryTextField.nativeElement;
		textField.dismissSoftInput();

//		this.groceryListService.add( this.grocery )
//			.subscribe(
//			groceryObject => {
//				this.groceryList.unshift( groceryObject );
//				this.grocery = "";
//			},
//			() => {
//				alert( {
//					message: "An error occurred while adding an item to your list.",
//					okButtonText: "OK"
//				});
//				this.grocery = "";
//			}
//			)
	}
}