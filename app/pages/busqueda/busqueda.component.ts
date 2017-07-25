import { Component, ElementRef, OnInit, ViewChild, OnChanges } from "@angular/core";

import * as application from "application";

import { DeviceOrientation } from "ui/enums";

import { Router } from "@angular/router";

import { Page } from "ui/page";

import { User } from "../../shared/user/user";

import { UserService } from "../../shared/user/user.service";
import { CampeonService } from "../../shared/campeon/campeon.service";

import { TextField } from "ui/text-field";

import * as platformModule from "tns-core-modules/platform";

import { PaginaComponent } from "../pagina";

@Component( {
	selector: "busqueda-champion",
	providers: [UserService, CampeonService],
	templateUrl: "pages/busqueda/busqueda.component.html",
	styleUrls: ["pages/busqueda/busqueda-common.css", "pages/busqueda/busqueda.css"]
})

//, "pages/login/login.css"
export class BusquedaComponent extends PaginaComponent implements OnInit {

	campeon;
	
	@ViewChild( "busquedaTextField" )
	busquedaTextField: ElementRef;

	user: User;
	isLoggingIn = true;

	constructor(
		private router :Router,
		private userService :UserService,
		private service :CampeonService,
		private page :Page
	) {
		super();
		this.campeon = "ana";

		console.dir(platformModule.screen.mainScreen);
		
		this.user = new User();
		this.user.email = "des.arrolloperro.sky@gmail.com";
		this.user.password = "1234567890a";
	}

	/**
	 * @param largo
	 *  Represents the visibility mode of a view.
	 * 	collapse | hidden | visible
	 */
	visibleSiAlto(largo:number):string{
		console.log("visibleSiAlto : " + largo + " Alto es " + this.alto);
		return (largo > this.alto ? "visible" : "collapse");
	}


	ngOnInit() {
		console.log("Largo pantalla: " + platformModule.screen.mainScreen.widthPixels);
//		this.page.actionBarHidden = false;
//		this.page.backgroundImage = "res://bg_login";
	}

	test(){
		console.log("Largo pantalla: " + platformModule.screen.mainScreen.widthPixels);
		alert( platformModule.screen.mainScreen.widthPixels );
	}


	busqueda(){
		// Dismiss the keyboard
		let textField = <TextField>this.busquedaTextField.nativeElement;
		textField.dismissSoftInput();

		this.service.busqueda( this.campeon )
			.then(
			datos => {
				if(!datos || datos.length == 0){
					alert( "No existe ningun campeón para esa busqueda." );
				} else {
					this.router.navigate( ["/","listado",this.campeon] );
				}
			},
			( error ) => alert( "Unfortunately we could not find your account." )
			);
	}
	
	submit() {
		if ( this.isLoggingIn ) {
			this.login();
		} else {
			this.signUp();
		}
	}

	login() {
		this.userService.login( this.user )
			.subscribe(
			() => this.router.navigate( ["/listado"] ),
			( error ) => alert( "Unfortunately we could not find your account." )
			);
	}

	signUp() {
		this.userService.register( this.user )
			.subscribe(
			() => {
				alert( "Your account was successfully created." );
				this.toggleDisplay();
			},
			() => alert( "Unfortunately we were unable to create your account." )
			);
	}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}
}