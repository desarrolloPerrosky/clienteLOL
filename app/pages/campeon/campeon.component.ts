import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ScrollEventData } from "ui/scroll-view";
import { Page } from "ui/page";
import { Image } from "ui/image";
import { FlexboxLayout } from "ui/layouts/flexbox-layout";
import { PageRoute }		from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";
import { CampeonService }	from "../../shared/campeon/campeon.service";

import { CampeonFull } from "../../shared/beans/campeon-full";
//    moduleId: module.id,
@Component({
	selector: "info-campeon",
	templateUrl: "pages/campeon/campeon.html",
    styleUrls: ["pages/campeon/campeon-common.css", "pages/campeon/campeon.css"],
    providers: [CampeonService]
})
export class CampeonComponent implements OnInit {
    public campeonBuscado: string;

    public title: string;
    public desc: string;
    public imageSrc: string;
    public image: Image;
    public flex: FlexboxLayout;

    public miCampeon:CampeonFull;
    public historia:boolean = true;
//    @ViewChild("img") img: ElementRef;
//    @ViewChild("content") content: ElementRef;

    siLargo(valor: number){
        if(platformModule && platformModule.screen && platformModule.screen.mainScreen){
            console.log("Preguntando largo: " + platformModule.screen.mainScreen.widthPixels);
            if(platformModule.screen.mainScreen.widthPixels >= valor){
                return 'visible';
            }else{
                return 'hidden';//'collapsed';
            }
        }else{
            return 'visible';
        }
    }

    tags(label:string):string{
        let tag:string;
        if(!label){
            tag = 'indeterminado';
        }else{
            switch (label) {
                case 'Fighter':tag = 'Luchador';break;
                case 'Tank':tag = 'Tanque';break;
                case 'Assassin':tag = 'Asesino';break;
                //case 'Marksman':tag = 'Asesino';break;
                case 'Mage':tag = 'Mago';break;
                case 'Support':tag = 'Soporte';break;
                default:
                    tag = label;//'Campeón';
                    break;
            }
        }
        return tag;
    }

// visibility="{{ showDetails ? 'visible' : 'collapsed' }}"
// Deberia ser ademas el hidden probarlo 

    constructor(
        public page: Page,
        private pageRoute: PageRoute,
        private service : CampeonService
        
    ) {
        this.miCampeon = null;
        this.isLoading = true;
        this.campeonBuscado = '';


        this.pageRoute.activatedRoute
		.switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.campeonBuscado = params["campeon"]; });
        
		this.service.findCampeonByName( this.campeonBuscado )
			.then(
			(campeon:CampeonFull) => {
				console.log( "Identidad campeon buscado ",campeon.id );
                
                this.miCampeon = campeon;
                setTimeout(()=>{this.isLoading = false;}, 1000);
			},
			( error ) => alert( "No encontramos a tu campeon." )
			);


        //this.page.backgroundSpanUnderStatusBar = true;
		console.log("XD Device model: " + platformModule.device.model);
		console.log("XD Device type: " + platformModule.device.deviceType);
		console.log("XD OS: " + platformModule.device.os);
		console.log("XD OS version: " + platformModule.device.osVersion);
		console.log("XD SDK Version: " + platformModule.device.sdkVersion);
		
		console.log("XD Screen width: " + platformModule.screen.mainScreen.widthPixels);
		console.log("XD Screen height: " + platformModule.screen.mainScreen.heightPixels);
		console.log("XD Screen scale: " + platformModule.screen.mainScreen.scale);
    }
isLoading:boolean;
    ngOnInit() {


//        this.imageSrc = "res://ashe_o.9";
//        this.imageSrc = "~/images/m33.jpg";
        this.title = "The Hydrogen Clouds of M33";
        this.desc = "Gorgeous spiral galaxy M33 seems to have more than its fair share of glowing hydrogen gas." +
            "A prominent member of the local group of galaxies, M33 is also known as the Triangulum Galaxy and" +
            "lies about 3 million light-years distant.The galaxy's inner 30,000 light-years or so are shown in this" +
            "telescopic portrait that enhances its reddish ionized hydrogen clouds or HII regions." +
            "Sprawling along loose spiral arms that wind toward the core, M33's giant HII regions are some" +
            "of the largest known stellar nurseries,sites of the formation of short-lived but very massive stars." +
            "Intense ultraviolet radiation from the luminous, massive stars ionizes" +
            "the surrounding hydrogen gas and ultimately produces the characteristic red glow. To enhance this image," +
            "broadband data was used to produce a color view of the galaxy and combined with narrowband data recorded" +
            "through a hydrogen-alpha filter.That filter transmits the light of the strongest hydrogen emission line.";
//        this.image = this.img.nativeElement;
//        this.flex = this.content.nativeElement;

//        this.esMasDe720 =  platformModule.screen.mainScreen.widthPixels >= 720 ? true : false;
    }

/**
    onScroll(args: ScrollEventData) {
        if (args.scrollY <= this.flex.getMeasuredHeight()) {
            this.image.animate({
                translate: { x: 0, y: args.scrollY * 0.3 }
            });
        }
    }
***/
}