import * as application        from "application";
import * as platformModule    from "tns-core-modules/platform";

export class PaginaComponent{
	orientacion: any;
    
    ancho: number;
	alto: number;

	constructor() {
        this.orientacion = 'portrait';
        this.calcularLargo();


		console.log("Device model: " + platformModule.device.model);
		console.log("Device type: " + platformModule.device.deviceType);
		console.log("OS: " + platformModule.device.os);
		console.log("OS version: " + platformModule.device.osVersion);
		console.log("SDK Version: " + platformModule.device.sdkVersion);
		
		console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
		console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
		console.log("Screen scale: " + platformModule.screen.mainScreen.scale);

		console.log("Orientacion:"+ application.orientationChangedEvent);

        application.on("orientationChanged",datos => this.cambioOrientacion(datos));
        

    }
    
	cambioOrientacion(data: any){
        console.log("#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!");
		console.log("Largo pantalla: " + platformModule.screen.mainScreen.widthPixels);
        console.log("Orientacion: " + data.newValue );
        console.log("#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!");
        
        this.orientacion = data.newValue;
        this.calcularLargo();

        console.log("Ancho : " + this.ancho.toString() + " alto : " + this.alto.toString() );
    }

    calcularLargo(){
        if(this.orientacion == 'portrait'){
            this.alto = platformModule.screen.mainScreen.heightPixels;
            this.ancho = platformModule.screen.mainScreen.widthPixels;
        }else{ // "portrait" | "landscape" | "unknown"
            this.ancho = platformModule.screen.mainScreen.heightPixels;
            this.alto = platformModule.screen.mainScreen.widthPixels;
        }
    }
    
}