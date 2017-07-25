"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var campeon_service_1 = require("../../shared/campeon/campeon.service");
var SocialShare = require("nativescript-social-share");
var ListadoComponent = (function () {
    function ListadoComponent(router, service, pageRoute) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.pageRoute = pageRoute;
        this.listadoCampeones = [];
        this.busqueda = "";
        this.grocery = "";
        this.isLoading = false;
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
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.busqueda = params["busqueda"]; });
        //listView.on(listViewModule.ListView.itemTapEvent, function (args: listViewModule.ItemEventData) {
        //    var tappedItemIndex = args.index;
        //    var tappedItemView = args.view;
        //    // Do someting
        //});
    }
    ListadoComponent.prototype.onItemTap = function (args) {
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
        var dto = this.listadoCampeones[args.index];
        //alert('Clicked item with index ' + args.index);
        this.router.navigate(["/", "campeon", dto.nombre]);
    };
    ;
    ListadoComponent.prototype.getImagen = function (path) {
        return 'res://' + path;
    };
    ListadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.busquedaDto(this.busqueda)
            .then(function (datos) {
            console.dir(datos);
            _this.listadoCampeones = datos;
            setTimeout(function () { _this.isLoading = false; }, 1000);
        }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    ListadoComponent.prototype.share = function () {
        var listString = this.listadoCampeones
            .map(function (grocery) { return grocery.nombre; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    ListadoComponent.prototype.opciones = function () {
        alert("Enter a list of options ");
    };
    ListadoComponent.prototype.add = function () {
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
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
    };
    return ListadoComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListadoComponent.prototype, "groceryTextField", void 0);
ListadoComponent = __decorate([
    core_1.Component({
        selector: "listado-campeones",
        templateUrl: "pages/listado/list.html",
        styleUrls: ["pages/listado/list-common.css", "pages/list/list.css"],
        providers: [campeon_service_1.CampeonService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        campeon_service_1.CampeonService,
        router_2.PageRoute])
], ListadoComponent);
exports.ListadoComponent = ListadoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwwQ0FBeUM7QUFVekMsc0RBQXlEO0FBQ3pELHVDQUFxQztBQU1yQyx3RUFBc0U7QUFFdEUsdURBQTBEO0FBUTFELElBQWEsZ0JBQWdCO0lBa0M1QiwwQkFDUyxNQUFjLEVBQ2QsT0FBdUIsRUFDdkIsU0FBb0I7UUFIN0IsaUJBNkJDO1FBNUJRLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBcEM3QixxQkFBZ0IsR0FBc0IsRUFBRSxDQUFDO1FBRXpDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFnQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBR3hCLGtEQUFrRDtRQUNsRCwwR0FBMEc7UUFDMUcsMENBQTBDO1FBQzFDLHdDQUF3QztRQUN4Qyx1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLE1BQU07UUFDTix1RUFBdUU7UUFDdkUsUUFBUTtRQUVOLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDNUIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNLElBQU8sS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxtR0FBbUc7UUFDbkcsdUNBQXVDO1FBQ3ZDLHFDQUFxQztRQUNyQyxvQkFBb0I7UUFDcEIsS0FBSztJQUVKLENBQUM7SUFoRE0sb0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUVwQixvREFBb0Q7UUFDdEQ7Ozs7Ozs7OztXQVNHO1FBQ0QsSUFBSSxHQUFHLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxpREFBaUQ7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsQ0FBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBRSxDQUFDO0lBQ3hELENBQUM7SUFBQSxDQUFDO0lBaUNGLG9DQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFYQSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFFO2FBQ3ZDLElBQUksQ0FDTCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBRXJCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFFOUIsVUFBVSxDQUFDLGNBQUssS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUNELFVBQUUsS0FBSyxJQUFNLE9BQUEsS0FBSyxDQUFFLCtDQUErQyxDQUFFLEVBQXhELENBQXdELENBQ3BFLENBQUM7SUFDSixDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDcEMsR0FBRyxDQUFFLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBZCxDQUFjLENBQUU7YUFDaEMsSUFBSSxDQUFFLElBQUksQ0FBRTthQUNaLElBQUksRUFBRSxDQUFDO1FBRVQsV0FBVyxDQUFDLFNBQVMsQ0FBRSxVQUFVLENBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNDLEtBQUssQ0FBRSwwQkFBMEIsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBRyxHQUFIO1FBQ0MsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUUvQiwrQ0FBK0M7UUFDL0MsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixnREFBZ0Q7UUFDaEQsd0JBQXdCO1FBQ3hCLE9BQU87UUFDUCxZQUFZO1FBQ1osY0FBYztRQUNkLHVFQUF1RTtRQUN2RSx5QkFBeUI7UUFDekIsU0FBUztRQUNULHdCQUF3QjtRQUN4QixNQUFNO1FBQ04sTUFBTTtJQUNMLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUExSEQsSUEwSEM7QUE3R0E7SUFEQyxnQkFBUyxDQUFFLGtCQUFrQixDQUFFOzhCQUNkLGlCQUFVOzBEQUFDO0FBYmpCLGdCQUFnQjtJQU41QixnQkFBUyxDQUFFO1FBQ1gsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixFQUFFLHFCQUFxQixDQUFDO1FBQ25FLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDM0IsQ0FBQztxQ0FvQ2dCLGVBQU07UUFDTCxnQ0FBYztRQUNaLGtCQUFTO0dBckNqQixnQkFBZ0IsQ0EwSDVCO0FBMUhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBJbWFnZSBcdFx0XHRmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG4vL2ltcG9ydCAqIGFzIFNjcm9sbEV2ZW50RGF0YVx0ZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcclxuLy9cclxuLy9pbXBvcnQgKiBhcyBGbGV4Ym94TGF5b3V0XHRmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZVx0ZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCAqIGFzIG9ic2VydmFibGVBcnJheSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9XHRcdGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0RmllbGQgfVx0XHRmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FtcGVvbiB9XHRcdFx0ZnJvbSBcIi4uLy4uL3NoYXJlZC9jYW1wZW9uL2NhbXBlb25cIjtcclxuaW1wb3J0IHsgQ2FtcGVvbkR0byB9XHRcdGZyb20gXCIuLi8uLi9zaGFyZWQvY2FtcGVvbi9jYW1wZW9uLmR0b1wiO1xyXG5pbXBvcnQgeyBDYW1wZW9uU2VydmljZSB9XHRmcm9tIFwiLi4vLi4vc2hhcmVkL2NhbXBlb24vY2FtcGVvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZVx0XHRmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuQENvbXBvbmVudCgge1xyXG5cdHNlbGVjdG9yOiBcImxpc3RhZG8tY2FtcGVvbmVzXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdGFkby9saXN0Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3RhZG8vbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcclxuXHRwcm92aWRlcnM6IFtDYW1wZW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RhZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGxpc3RhZG9DYW1wZW9uZXM6IEFycmF5PENhbXBlb25EdG8+ID0gW107XHJcblxyXG5cdGJ1c3F1ZWRhOnN0cmluZyA9IFwiXCI7XHJcblx0XHJcblx0Z3JvY2VyeSA9IFwiXCI7XHJcblxyXG5cdGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuLy9cdEBWaWV3Q2hpbGQoIFwibWlsaXN0YWRvXCIgKSAgXHJcbi8vXHRsaXN0VmlldzpMaXN0VmlldztcclxuXHJcblx0QFZpZXdDaGlsZCggXCJncm9jZXJ5VGV4dEZpZWxkXCIgKVxyXG5cdGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG5cdHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MpO1xyXG4vKipcclxuICB7XHJcbiAgICAgXCJpZFwiOiAxMzEsXHJcbiAgICAgXCJub21icmVcIjogXCJEaWFuYVwiLFxyXG4gICAgIFwidGl0bGVcIjogXCJFbCBEZXNkw6luIGRlIGxhIEx1bmFcIixcclxuICAgICBcImljb25vXCI6IFwicmVzOi8vZGlhbmFcIixcclxuICAgICBcIm5hbWVcIjogXCJEaWFuYVwiLFxyXG4gICAgIFwiJGluZGV4XCI6IDBcclxuIH1cclxuICovXHJcblx0XHRsZXQgZHRvOkNhbXBlb25EdG8gPSB0aGlzLmxpc3RhZG9DYW1wZW9uZXNbYXJncy5pbmRleF07XHJcblxyXG5cdCAgICAvL2FsZXJ0KCdDbGlja2VkIGl0ZW0gd2l0aCBpbmRleCAnICsgYXJncy5pbmRleCk7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWyBcIi9cIiwgXCJjYW1wZW9uXCIsIGR0by5ub21icmUgXSApO1xyXG5cdH07XHJcblx0XHRcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcm91dGVyIDpSb3V0ZXIsXHRcdFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBDYW1wZW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHRcclxuLy9cdFx0dGhpcy5saXN0VmlldyA9IG5ldyBsaXN0Vmlld01vZHVsZS5MaXN0VmlldygpO1xyXG4vL1x0XHR0aGlzLmxpc3RWaWV3Lm9uKGxpc3RWaWV3TW9kdWxlLkxpc3RWaWV3Lml0ZW1UYXBFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IGxpc3RWaWV3TW9kdWxlLkl0ZW1FdmVudERhdGEpIHtcclxuLy9cdFx0XHQgICAgdmFyIHRhcHBlZEl0ZW1JbmRleCA9IGFyZ3MuaW5kZXg7XHJcbi8vXHRcdFx0ICAgIHZhciB0YXBwZWRJdGVtVmlldyA9IGFyZ3MudmlldztcclxuLy9cdFx0XHQgICAgLy8gRG8gc29tZXRpbmdcclxuLy9cdFx0XHRcdGNvbnNvbGUuZGlyKGFyZ3MpO1xyXG4vL1x0XHRcdFx0XHJcbi8vXHRcdFx0XHRhbGVydCgnSW5kaWNlWycrdGFwcGVkSXRlbUluZGV4KyddIHkgdmlzdGFbJyt0YXBwZWRJdGVtVmlldysnXScpO1xyXG4vL1x0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXHJcblx0XHR0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG5cdFx0LnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcblx0XHQuZm9yRWFjaCgocGFyYW1zKSA9PiB7IHRoaXMuYnVzcXVlZGEgPSBwYXJhbXNbXCJidXNxdWVkYVwiXTsgfSk7XHJcblx0XHRcclxuLy9saXN0Vmlldy5vbihsaXN0Vmlld01vZHVsZS5MaXN0Vmlldy5pdGVtVGFwRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBsaXN0Vmlld01vZHVsZS5JdGVtRXZlbnREYXRhKSB7XHJcbi8vICAgIHZhciB0YXBwZWRJdGVtSW5kZXggPSBhcmdzLmluZGV4O1xyXG4vLyAgICB2YXIgdGFwcGVkSXRlbVZpZXcgPSBhcmdzLnZpZXc7XHJcbi8vICAgIC8vIERvIHNvbWV0aW5nXHJcbi8vfSk7XHJcblxyXG5cdH1cclxuXHRcclxuXHRnZXRJbWFnZW4ocGF0aDogc3RyaW5nKXtcclxuXHRcdHJldHVybiAncmVzOi8vJytwYXRoO1xyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdFxyXG5cdFx0dGhpcy5zZXJ2aWNlLmJ1c3F1ZWRhRHRvKCB0aGlzLmJ1c3F1ZWRhIClcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdGRhdG9zID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmRpciggZGF0b3MgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmxpc3RhZG9DYW1wZW9uZXMgPSBkYXRvcztcclxuXHRcdFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9Pnt0aGlzLmlzTG9hZGluZyA9IGZhbHNlO30sIDEwMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQoIGVycm9yICkgPT4gYWxlcnQoIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIgKVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRcclxuXHRzaGFyZSgpIHtcclxuXHRcdGxldCBsaXN0U3RyaW5nID0gdGhpcy5saXN0YWRvQ2FtcGVvbmVzXHJcblx0XHRcdC5tYXAoIGdyb2NlcnkgPT4gZ3JvY2VyeS5ub21icmUgKVxyXG5cdFx0XHQuam9pbiggXCIsIFwiIClcclxuXHRcdFx0LnRyaW0oKTtcclxuXHRcdFxyXG5cdFx0U29jaWFsU2hhcmUuc2hhcmVUZXh0KCBsaXN0U3RyaW5nICk7XHJcblx0fVxyXG5cclxuXHRvcGNpb25lcygpe1xyXG5cdFx0YWxlcnQoIFwiRW50ZXIgYSBsaXN0IG9mIG9wdGlvbnMgXCIgKTtcclxuXHR9XHJcblxyXG5cdGFkZCgpIHtcclxuXHRcdGlmICggdGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIiApIHtcclxuXHRcdFx0YWxlcnQoIFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIiApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcclxuXHRcdGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0dGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuXHJcbi8vXHRcdHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCggdGhpcy5ncm9jZXJ5IClcclxuLy9cdFx0XHQuc3Vic2NyaWJlKFxyXG4vL1x0XHRcdGdyb2NlcnlPYmplY3QgPT4ge1xyXG4vL1x0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KCBncm9jZXJ5T2JqZWN0ICk7XHJcbi8vXHRcdFx0XHR0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG4vL1x0XHRcdH0sXHJcbi8vXHRcdFx0KCkgPT4ge1xyXG4vL1x0XHRcdFx0YWxlcnQoIHtcclxuLy9cdFx0XHRcdFx0bWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXHJcbi8vXHRcdFx0XHRcdG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbi8vXHRcdFx0XHR9KTtcclxuLy9cdFx0XHRcdHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbi8vXHRcdFx0fVxyXG4vL1x0XHRcdClcclxuXHR9XHJcbn0iXX0=