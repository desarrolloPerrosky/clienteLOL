"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var campeon_service_1 = require("../../shared/campeon/campeon.service");
//    moduleId: module.id,
var CampeonComponent = (function () {
    // visibility="{{ showDetails ? 'visible' : 'collapsed' }}"
    // Deberia ser ademas el hidden probarlo 
    function CampeonComponent(page, pageRoute, service) {
        var _this = this;
        this.page = page;
        this.pageRoute = pageRoute;
        this.service = service;
        this.historia = true;
        this.miCampeon = null;
        this.isLoading = true;
        this.campeonBuscado = '';
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.campeonBuscado = params["campeon"]; });
        this.service.findCampeonByName(this.campeonBuscado)
            .then(function (campeon) {
            console.log("Identidad campeon buscado ", campeon.id);
            _this.miCampeon = campeon;
            setTimeout(function () { _this.isLoading = false; }, 1000);
        }, function (error) { return alert("No encontramos a tu campeon."); });
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
    //    @ViewChild("img") img: ElementRef;
    //    @ViewChild("content") content: ElementRef;
    CampeonComponent.prototype.siLargo = function (valor) {
        if (platformModule && platformModule.screen && platformModule.screen.mainScreen) {
            console.log("Preguntando largo: " + platformModule.screen.mainScreen.widthPixels);
            if (platformModule.screen.mainScreen.widthPixels >= valor) {
                return 'visible';
            }
            else {
                return 'hidden'; //'collapsed';
            }
        }
        else {
            return 'visible';
        }
    };
    CampeonComponent.prototype.tags = function (label) {
        var tag;
        if (!label) {
            tag = 'indeterminado';
        }
        else {
            switch (label) {
                case 'Fighter':
                    tag = 'Luchador';
                    break;
                case 'Tank':
                    tag = 'Tanque';
                    break;
                case 'Assassin':
                    tag = 'Asesino';
                    break;
                //case 'Marksman':tag = 'Asesino';break;
                case 'Mage':
                    tag = 'Mago';
                    break;
                case 'Support':
                    tag = 'Soporte';
                    break;
                default:
                    tag = label; //'Campeón';
                    break;
            }
        }
        return tag;
    };
    CampeonComponent.prototype.ngOnInit = function () {
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
    };
    return CampeonComponent;
}());
CampeonComponent = __decorate([
    core_1.Component({
        selector: "info-campeon",
        templateUrl: "pages/campeon/campeon.html",
        styleUrls: ["pages/campeon/campeon-common.css", "pages/campeon/campeon.css"],
        providers: [campeon_service_1.CampeonService]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.PageRoute,
        campeon_service_1.CampeonService])
], CampeonComponent);
exports.CampeonComponent = CampeonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGVvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW1wZW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxnQ0FBK0I7QUFHL0Isc0RBQXlEO0FBQ3pELDBEQUE0RDtBQUM1RCx3RUFBc0U7QUFHdEUsMEJBQTBCO0FBTzFCLElBQWEsZ0JBQWdCO0lBK0M3QiwyREFBMkQ7SUFDM0QseUNBQXlDO0lBRXJDLDBCQUNXLElBQVUsRUFDVCxTQUFvQixFQUNwQixPQUF3QjtRQUhwQyxpQkFxQ0M7UUFwQ1UsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNULGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUEzQzdCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUE4QzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBR3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUNsQyxTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQzVDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxLQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRTthQUNuRCxJQUFJLENBQ0wsVUFBQyxPQUFtQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFFLDRCQUE0QixFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQztZQUUzQyxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixVQUFVLENB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LENBQUEsWUFBWTtvQkFDeEIsS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQTRDRCxtQ0FBUSxHQUFSO1FBR0osMkNBQTJDO1FBQzNDLDZDQUE2QztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsNEZBQTRGO1lBQ3BHLG1HQUFtRztZQUNuRyx3R0FBd0c7WUFDeEcsdUZBQXVGO1lBQ3ZGLCtGQUErRjtZQUMvRixzR0FBc0c7WUFDdEcsd0VBQXdFO1lBQ3hFLDBHQUEwRztZQUMxRywwR0FBMEc7WUFDMUcsMEdBQTBHLENBQUM7UUFDdkgsOENBQThDO1FBQzlDLGlEQUFpRDtRQUVqRCxnR0FBZ0c7SUFDNUYsQ0FBQztJQVdMLHVCQUFDO0FBQUQsQ0FBQyxBQXhIRCxJQXdIQztBQXhIWSxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7UUFDdEMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsMkJBQTJCLENBQUM7UUFDNUUsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztLQUM5QixDQUFDO3FDQW9EbUIsV0FBSTtRQUNFLGtCQUFTO1FBQ1YsZ0NBQWM7R0FyRDNCLGdCQUFnQixDQXdINUI7QUF4SFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRmxleGJveExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCI7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9XHRcdGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgQ2FtcGVvblNlcnZpY2UgfVx0ZnJvbSBcIi4uLy4uL3NoYXJlZC9jYW1wZW9uL2NhbXBlb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2FtcGVvbkZ1bGwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2JlYW5zL2NhbXBlb24tZnVsbFwiO1xyXG4vLyAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJpbmZvLWNhbXBlb25cIixcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9jYW1wZW9uL2NhbXBlb24uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9jYW1wZW9uL2NhbXBlb24tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2NhbXBlb24vY2FtcGVvbi5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtDYW1wZW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbXBlb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGNhbXBlb25CdXNjYWRvOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlU3JjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEltYWdlO1xyXG4gICAgcHVibGljIGZsZXg6IEZsZXhib3hMYXlvdXQ7XHJcblxyXG4gICAgcHVibGljIG1pQ2FtcGVvbjpDYW1wZW9uRnVsbDtcclxuICAgIHB1YmxpYyBoaXN0b3JpYTpib29sZWFuID0gdHJ1ZTtcclxuLy8gICAgQFZpZXdDaGlsZChcImltZ1wiKSBpbWc6IEVsZW1lbnRSZWY7XHJcbi8vICAgIEBWaWV3Q2hpbGQoXCJjb250ZW50XCIpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgc2lMYXJnbyh2YWxvcjogbnVtYmVyKXtcclxuICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZSAmJiBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4gJiYgcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByZWd1bnRhbmRvIGxhcmdvOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuICAgICAgICAgICAgaWYocGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHMgPj0gdmFsb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd2aXNpYmxlJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpZGRlbic7Ly8nY29sbGFwc2VkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gJ3Zpc2libGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWdzKGxhYmVsOnN0cmluZyk6c3RyaW5ne1xyXG4gICAgICAgIGxldCB0YWc6c3RyaW5nO1xyXG4gICAgICAgIGlmKCFsYWJlbCl7XHJcbiAgICAgICAgICAgIHRhZyA9ICdpbmRldGVybWluYWRvJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc3dpdGNoIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRmlnaHRlcic6dGFnID0gJ0x1Y2hhZG9yJzticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RhbmsnOnRhZyA9ICdUYW5xdWUnO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXNzYXNzaW4nOnRhZyA9ICdBc2VzaW5vJzticmVhaztcclxuICAgICAgICAgICAgICAgIC8vY2FzZSAnTWFya3NtYW4nOnRhZyA9ICdBc2VzaW5vJzticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ01hZ2UnOnRhZyA9ICdNYWdvJzticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1N1cHBvcnQnOnRhZyA9ICdTb3BvcnRlJzticmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gbGFiZWw7Ly8nQ2FtcGXDs24nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWc7XHJcbiAgICB9XHJcblxyXG4vLyB2aXNpYmlsaXR5PVwie3sgc2hvd0RldGFpbHMgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVwiXHJcbi8vIERlYmVyaWEgc2VyIGFkZW1hcyBlbCBoaWRkZW4gcHJvYmFybG8gXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHNlcnZpY2UgOiBDYW1wZW9uU2VydmljZVxyXG4gICAgICAgIFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5taUNhbXBlb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbXBlb25CdXNjYWRvID0gJyc7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG5cdFx0LnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmNhbXBlb25CdXNjYWRvID0gcGFyYW1zW1wiY2FtcGVvblwiXTsgfSk7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNlcnZpY2UuZmluZENhbXBlb25CeU5hbWUoIHRoaXMuY2FtcGVvbkJ1c2NhZG8gKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0KGNhbXBlb246Q2FtcGVvbkZ1bGwpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggXCJJZGVudGlkYWQgY2FtcGVvbiBidXNjYWRvIFwiLGNhbXBlb24uaWQgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5taUNhbXBlb24gPSBjYW1wZW9uO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3RoaXMuaXNMb2FkaW5nID0gZmFsc2U7fSwgMTAwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdCggZXJyb3IgKSA9PiBhbGVydCggXCJObyBlbmNvbnRyYW1vcyBhIHR1IGNhbXBlb24uXCIgKVxyXG5cdFx0XHQpO1xyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIlhEIERldmljZSBtb2RlbDogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UubW9kZWwpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJYRCBEZXZpY2UgdHlwZTogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlhEIE9TOiBcIiArIHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlhEIE9TIHZlcnNpb246IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zVmVyc2lvbik7XHJcblx0XHRjb25zb2xlLmxvZyhcIlhEIFNESyBWZXJzaW9uOiBcIiArIHBsYXRmb3JtTW9kdWxlLmRldmljZS5zZGtWZXJzaW9uKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJYRCBTY3JlZW4gd2lkdGg6IFwiICsgcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHMpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJYRCBTY3JlZW4gaGVpZ2h0OiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlhEIFNjcmVlbiBzY2FsZTogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5zY2FsZSk7XHJcbiAgICB9XHJcbmlzTG9hZGluZzpib29sZWFuO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG5cclxuLy8gICAgICAgIHRoaXMuaW1hZ2VTcmMgPSBcInJlczovL2FzaGVfby45XCI7XHJcbi8vICAgICAgICB0aGlzLmltYWdlU3JjID0gXCJ+L2ltYWdlcy9tMzMuanBnXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiVGhlIEh5ZHJvZ2VuIENsb3VkcyBvZiBNMzNcIjtcclxuICAgICAgICB0aGlzLmRlc2MgPSBcIkdvcmdlb3VzIHNwaXJhbCBnYWxheHkgTTMzIHNlZW1zIHRvIGhhdmUgbW9yZSB0aGFuIGl0cyBmYWlyIHNoYXJlIG9mIGdsb3dpbmcgaHlkcm9nZW4gZ2FzLlwiICtcclxuICAgICAgICAgICAgXCJBIHByb21pbmVudCBtZW1iZXIgb2YgdGhlIGxvY2FsIGdyb3VwIG9mIGdhbGF4aWVzLCBNMzMgaXMgYWxzbyBrbm93biBhcyB0aGUgVHJpYW5ndWx1bSBHYWxheHkgYW5kXCIgK1xyXG4gICAgICAgICAgICBcImxpZXMgYWJvdXQgMyBtaWxsaW9uIGxpZ2h0LXllYXJzIGRpc3RhbnQuVGhlIGdhbGF4eSdzIGlubmVyIDMwLDAwMCBsaWdodC15ZWFycyBvciBzbyBhcmUgc2hvd24gaW4gdGhpc1wiICtcclxuICAgICAgICAgICAgXCJ0ZWxlc2NvcGljIHBvcnRyYWl0IHRoYXQgZW5oYW5jZXMgaXRzIHJlZGRpc2ggaW9uaXplZCBoeWRyb2dlbiBjbG91ZHMgb3IgSElJIHJlZ2lvbnMuXCIgK1xyXG4gICAgICAgICAgICBcIlNwcmF3bGluZyBhbG9uZyBsb29zZSBzcGlyYWwgYXJtcyB0aGF0IHdpbmQgdG93YXJkIHRoZSBjb3JlLCBNMzMncyBnaWFudCBISUkgcmVnaW9ucyBhcmUgc29tZVwiICtcclxuICAgICAgICAgICAgXCJvZiB0aGUgbGFyZ2VzdCBrbm93biBzdGVsbGFyIG51cnNlcmllcyxzaXRlcyBvZiB0aGUgZm9ybWF0aW9uIG9mIHNob3J0LWxpdmVkIGJ1dCB2ZXJ5IG1hc3NpdmUgc3RhcnMuXCIgK1xyXG4gICAgICAgICAgICBcIkludGVuc2UgdWx0cmF2aW9sZXQgcmFkaWF0aW9uIGZyb20gdGhlIGx1bWlub3VzLCBtYXNzaXZlIHN0YXJzIGlvbml6ZXNcIiArXHJcbiAgICAgICAgICAgIFwidGhlIHN1cnJvdW5kaW5nIGh5ZHJvZ2VuIGdhcyBhbmQgdWx0aW1hdGVseSBwcm9kdWNlcyB0aGUgY2hhcmFjdGVyaXN0aWMgcmVkIGdsb3cuIFRvIGVuaGFuY2UgdGhpcyBpbWFnZSxcIiArXHJcbiAgICAgICAgICAgIFwiYnJvYWRiYW5kIGRhdGEgd2FzIHVzZWQgdG8gcHJvZHVjZSBhIGNvbG9yIHZpZXcgb2YgdGhlIGdhbGF4eSBhbmQgY29tYmluZWQgd2l0aCBuYXJyb3diYW5kIGRhdGEgcmVjb3JkZWRcIiArXHJcbiAgICAgICAgICAgIFwidGhyb3VnaCBhIGh5ZHJvZ2VuLWFscGhhIGZpbHRlci5UaGF0IGZpbHRlciB0cmFuc21pdHMgdGhlIGxpZ2h0IG9mIHRoZSBzdHJvbmdlc3QgaHlkcm9nZW4gZW1pc3Npb24gbGluZS5cIjtcclxuLy8gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmltZy5uYXRpdmVFbGVtZW50O1xyXG4vLyAgICAgICAgdGhpcy5mbGV4ID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4vLyAgICAgICAgdGhpcy5lc01hc0RlNzIwID0gIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzID49IDcyMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbi8qKlxyXG4gICAgb25TY3JvbGwoYXJnczogU2Nyb2xsRXZlbnREYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3Muc2Nyb2xsWSA8PSB0aGlzLmZsZXguZ2V0TWVhc3VyZWRIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IGFyZ3Muc2Nyb2xsWSAqIDAuMyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKioqL1xyXG59Il19