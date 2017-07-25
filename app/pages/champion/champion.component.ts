import { Component, OnInit  } from "@angular/core";

import { Router } from "@angular/router";

import { Page } from "ui/page";

import { User } from "../../shared/user/user";

import { UserService } from "../../shared/user/user.service";

@Component( {
	selector: "my-champion",
	providers: [UserService],
	templateUrl: "pages/champion/champion.component.html",
	styleUrls: ["pages/champion/champion-common.css"]
})
//, "pages/login/login.css"
export class ChampionComponent implements OnInit {

	user: User;
	isLoggingIn = true;

	constructor(
		private router: Router,
		private userService: UserService,
		private page: Page
	) {
		this.user = new User();

		this.user.email = "des.arrolloperro.sky@gmail.com";
		this.user.password = "1234567890a";
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
//		this.page.backgroundImage = "res://bg_login";
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