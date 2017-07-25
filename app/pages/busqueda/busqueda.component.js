"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var campeon_service_1 = require("../../shared/campeon/campeon.service");
var platformModule = require("tns-core-modules/platform");
var pagina_1 = require("../pagina");
var BusquedaComponent = (function (_super) {
    __extends(BusquedaComponent, _super);
    function BusquedaComponent(router, userService, service, page) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.userService = userService;
        _this.service = service;
        _this.page = page;
        _this.isLoggingIn = true;
        _this.campeon = "ana";
        console.dir(platformModule.screen.mainScreen);
        _this.user = new user_1.User();
        _this.user.email = "des.arrolloperro.sky@gmail.com";
        _this.user.password = "1234567890a";
        return _this;
    }
    /**
     * @param largo
     *  Represents the visibility mode of a view.
     * 	collapse | hidden | visible
     */
    BusquedaComponent.prototype.visibleSiAlto = function (largo) {
        console.log("visibleSiAlto : " + largo + " Alto es " + this.alto);
        return (largo > this.alto ? "visible" : "collapse");
    };
    BusquedaComponent.prototype.ngOnInit = function () {
        console.log("Largo pantalla: " + platformModule.screen.mainScreen.widthPixels);
        //		this.page.actionBarHidden = false;
        //		this.page.backgroundImage = "res://bg_login";
    };
    BusquedaComponent.prototype.test = function () {
        console.log("Largo pantalla: " + platformModule.screen.mainScreen.widthPixels);
        alert(platformModule.screen.mainScreen.widthPixels);
    };
    BusquedaComponent.prototype.busqueda = function () {
        var _this = this;
        // Dismiss the keyboard
        var textField = this.busquedaTextField.nativeElement;
        textField.dismissSoftInput();
        this.service.busqueda(this.campeon)
            .then(function (datos) {
            if (!datos || datos.length == 0) {
                alert("No existe ningun campeón para esa busqueda.");
            }
            else {
                _this.router.navigate(["/", "listado", _this.campeon]);
            }
        }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    BusquedaComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    BusquedaComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/listado"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    BusquedaComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    BusquedaComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return BusquedaComponent;
}(pagina_1.PaginaComponent));
__decorate([
    core_1.ViewChild("busquedaTextField"),
    __metadata("design:type", core_1.ElementRef)
], BusquedaComponent.prototype, "busquedaTextField", void 0);
BusquedaComponent = __decorate([
    core_1.Component({
        selector: "busqueda-champion",
        providers: [user_service_1.UserService, campeon_service_1.CampeonService],
        templateUrl: "pages/busqueda/busqueda.component.html",
        styleUrls: ["pages/busqueda/busqueda-common.css", "pages/busqueda/busqueda.css"]
    })
    //, "pages/login/login.css"
    ,
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        campeon_service_1.CampeonService,
        page_1.Page])
], BusquedaComponent);
exports.BusquedaComponent = BusquedaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzcXVlZGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVzcXVlZGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9GO0FBTXBGLDBDQUF5QztBQUV6QyxnQ0FBK0I7QUFFL0IsK0NBQThDO0FBRTlDLCtEQUE2RDtBQUM3RCx3RUFBc0U7QUFJdEUsMERBQTREO0FBRTVELG9DQUE0QztBQVU1QyxJQUFhLGlCQUFpQjtJQUFTLHFDQUFlO0lBVXJELDJCQUNTLE1BQWMsRUFDZCxXQUF3QixFQUN4QixPQUF1QixFQUN2QixJQUFVO1FBSm5CLFlBTUMsaUJBQU8sU0FRUDtRQWJRLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixVQUFJLEdBQUosSUFBSSxDQUFNO1FBTm5CLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBU2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUM7UUFDbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDOztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlDQUFhLEdBQWIsVUFBYyxLQUFZO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQyxD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UUFDeEMsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSw2QkFBNkIsQ0FBQztLQUNoRixDQUFDO0lBRUYsMkJBQTJCOztxQ0FZVCxlQUFNO1FBQ0QsMEJBQVc7UUFDZixnQ0FBYztRQUNqQixXQUFJO0dBZFAsaUJBQWlCLENBaUc3QjtBQWpHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbiB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYW1wZW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY2FtcGVvbi9jYW1wZW9uLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnaW5hQ29tcG9uZW50IH0gZnJvbSBcIi4uL3BhZ2luYVwiO1xyXG5cclxuQENvbXBvbmVudCgge1xyXG5cdHNlbGVjdG9yOiBcImJ1c3F1ZWRhLWNoYW1waW9uXCIsXHJcblx0cHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIENhbXBlb25TZXJ2aWNlXSxcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9idXNxdWVkYS9idXNxdWVkYS5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvYnVzcXVlZGEvYnVzcXVlZGEtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2J1c3F1ZWRhL2J1c3F1ZWRhLmNzc1wiXVxyXG59KVxyXG5cclxuLy8sIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJcclxuZXhwb3J0IGNsYXNzIEJ1c3F1ZWRhQ29tcG9uZW50IGV4dGVuZHMgUGFnaW5hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Y2FtcGVvbjtcclxuXHRcclxuXHRAVmlld0NoaWxkKCBcImJ1c3F1ZWRhVGV4dEZpZWxkXCIgKVxyXG5cdGJ1c3F1ZWRhVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG5cclxuXHR1c2VyOiBVc2VyO1xyXG5cdGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlciA6Um91dGVyLFxyXG5cdFx0cHJpdmF0ZSB1c2VyU2VydmljZSA6VXNlclNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNlcnZpY2UgOkNhbXBlb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBwYWdlIDpQYWdlXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jYW1wZW9uID0gXCJhbmFcIjtcclxuXHJcblx0XHRjb25zb2xlLmRpcihwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbik7XHJcblx0XHRcclxuXHRcdHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcblx0XHR0aGlzLnVzZXIuZW1haWwgPSBcImRlcy5hcnJvbGxvcGVycm8uc2t5QGdtYWlsLmNvbVwiO1xyXG5cdFx0dGhpcy51c2VyLnBhc3N3b3JkID0gXCIxMjM0NTY3ODkwYVwiO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGxhcmdvXHJcblx0ICogIFJlcHJlc2VudHMgdGhlIHZpc2liaWxpdHkgbW9kZSBvZiBhIHZpZXcuXHJcblx0ICogXHRjb2xsYXBzZSB8IGhpZGRlbiB8IHZpc2libGVcclxuXHQgKi9cclxuXHR2aXNpYmxlU2lBbHRvKGxhcmdvOm51bWJlcik6c3RyaW5ne1xyXG5cdFx0Y29uc29sZS5sb2coXCJ2aXNpYmxlU2lBbHRvIDogXCIgKyBsYXJnbyArIFwiIEFsdG8gZXMgXCIgKyB0aGlzLmFsdG8pO1xyXG5cdFx0cmV0dXJuIChsYXJnbyA+IHRoaXMuYWx0byA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiTGFyZ28gcGFudGFsbGE6IFwiICsgcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHMpO1xyXG4vL1x0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbi8vXHRcdHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XHJcblx0fVxyXG5cclxuXHR0ZXN0KCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIkxhcmdvIHBhbnRhbGxhOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuXHRcdGFsZXJ0KCBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyApO1xyXG5cdH1cclxuXHJcblxyXG5cdGJ1c3F1ZWRhKCl7XHJcblx0XHQvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxyXG5cdFx0bGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5idXNxdWVkYVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0dGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuXHJcblx0XHR0aGlzLnNlcnZpY2UuYnVzcXVlZGEoIHRoaXMuY2FtcGVvbiApXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRkYXRvcyA9PiB7XHJcblx0XHRcdFx0aWYoIWRhdG9zIHx8IGRhdG9zLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0XHRcdGFsZXJ0KCBcIk5vIGV4aXN0ZSBuaW5ndW4gY2FtcGXDs24gcGFyYSBlc2EgYnVzcXVlZGEuXCIgKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtcIi9cIixcImxpc3RhZG9cIix0aGlzLmNhbXBlb25dICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQoIGVycm9yICkgPT4gYWxlcnQoIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIgKVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRcclxuXHRzdWJtaXQoKSB7XHJcblx0XHRpZiAoIHRoaXMuaXNMb2dnaW5nSW4gKSB7XHJcblx0XHRcdHRoaXMubG9naW4oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2lnblVwKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2dpbigpIHtcclxuXHRcdHRoaXMudXNlclNlcnZpY2UubG9naW4oIHRoaXMudXNlciApXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXCIvbGlzdGFkb1wiXSApLFxyXG5cdFx0XHQoIGVycm9yICkgPT4gYWxlcnQoIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIgKVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2lnblVwKCkge1xyXG5cdFx0dGhpcy51c2VyU2VydmljZS5yZWdpc3RlciggdGhpcy51c2VyIClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdGFsZXJ0KCBcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIgKTtcclxuXHRcdFx0XHR0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0KCkgPT4gYWxlcnQoIFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiIClcclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZURpc3BsYXkoKSB7XHJcblx0XHR0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcblx0fVxyXG59Il19