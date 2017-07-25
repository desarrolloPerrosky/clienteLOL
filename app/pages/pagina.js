"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var platformModule = require("tns-core-modules/platform");
var PaginaComponent = (function () {
    function PaginaComponent() {
        var _this = this;
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
        console.log("Orientacion:" + application.orientationChangedEvent);
        application.on("orientationChanged", function (datos) { return _this.cambioOrientacion(datos); });
    }
    PaginaComponent.prototype.cambioOrientacion = function (data) {
        console.log("#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!");
        console.log("Largo pantalla: " + platformModule.screen.mainScreen.widthPixels);
        console.log("Orientacion: " + data.newValue);
        console.log("#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!");
        this.orientacion = data.newValue;
        this.calcularLargo();
        console.log("Ancho : " + this.ancho.toString() + " alto : " + this.alto.toString());
    };
    PaginaComponent.prototype.calcularLargo = function () {
        if (this.orientacion == 'portrait') {
            this.alto = platformModule.screen.mainScreen.heightPixels;
            this.ancho = platformModule.screen.mainScreen.widthPixels;
        }
        else {
            this.ancho = platformModule.screen.mainScreen.heightPixels;
            this.alto = platformModule.screen.mainScreen.widthPixels;
        }
    };
    return PaginaComponent;
}());
exports.PaginaComponent = PaginaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnaW5hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWtEO0FBQ2xELDBEQUErRDtBQUUvRDtJQU1DO1FBQUEsaUJBb0JJO1FBbkJHLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUczQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRSxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUUzRCxXQUFXLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFHaEYsQ0FBQztJQUVKLDJDQUFpQixHQUFqQixVQUFrQixJQUFTO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0VBQXdFLENBQUMsQ0FBQztRQUM1RixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7UUFFdEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUM7SUFDekYsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDOUQsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDN0QsQ0FBQztJQUNMLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiAgICAgICAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlICAgIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hQ29tcG9uZW50e1xyXG5cdG9yaWVudGFjaW9uOiBhbnk7XHJcbiAgICBcclxuICAgIGFuY2hvOiBudW1iZXI7XHJcblx0YWx0bzogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9yaWVudGFjaW9uID0gJ3BvcnRyYWl0JztcclxuICAgICAgICB0aGlzLmNhbGN1bGFyTGFyZ28oKTtcclxuXHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJEZXZpY2UgbW9kZWw6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm1vZGVsKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIHR5cGU6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGUpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJPUzogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJPUyB2ZXJzaW9uOiBcIiArIHBsYXRmb3JtTW9kdWxlLmRldmljZS5vc1ZlcnNpb24pO1xyXG5cdFx0Y29uc29sZS5sb2coXCJTREsgVmVyc2lvbjogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uuc2RrVmVyc2lvbik7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwiU2NyZWVuIHdpZHRoOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiU2NyZWVuIGhlaWdodDogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJTY3JlZW4gc2NhbGU6IFwiICsgcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uc2NhbGUpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiT3JpZW50YWNpb246XCIrIGFwcGxpY2F0aW9uLm9yaWVudGF0aW9uQ2hhbmdlZEV2ZW50KTtcclxuXHJcbiAgICAgICAgYXBwbGljYXRpb24ub24oXCJvcmllbnRhdGlvbkNoYW5nZWRcIixkYXRvcyA9PiB0aGlzLmNhbWJpb09yaWVudGFjaW9uKGRhdG9zKSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgXHJcblx0Y2FtYmlvT3JpZW50YWNpb24oZGF0YTogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyFcIik7XHJcblx0XHRjb25zb2xlLmxvZyhcIkxhcmdvIHBhbnRhbGxhOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWVudGFjaW9uOiBcIiArIGRhdGEubmV3VmFsdWUgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyEjISMhIyFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vcmllbnRhY2lvbiA9IGRhdGEubmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhckxhcmdvKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5jaG8gOiBcIiArIHRoaXMuYW5jaG8udG9TdHJpbmcoKSArIFwiIGFsdG8gOiBcIiArIHRoaXMuYWx0by50b1N0cmluZygpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXJMYXJnbygpe1xyXG4gICAgICAgIGlmKHRoaXMub3JpZW50YWNpb24gPT0gJ3BvcnRyYWl0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWx0byA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcclxuICAgICAgICAgICAgdGhpcy5hbmNobyA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xyXG4gICAgICAgIH1lbHNleyAvLyBcInBvcnRyYWl0XCIgfCBcImxhbmRzY2FwZVwiIHwgXCJ1bmtub3duXCJcclxuICAgICAgICAgICAgdGhpcy5hbmNobyA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcclxuICAgICAgICAgICAgdGhpcy5hbHRvID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=