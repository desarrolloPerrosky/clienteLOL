"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var ChampionComponent = (function () {
    function ChampionComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "des.arrolloperro.sky@gmail.com";
        this.user.password = "1234567890a";
    }
    ChampionComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        //		this.page.backgroundImage = "res://bg_login";
    };
    ChampionComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    ChampionComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/listado"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    ChampionComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    ChampionComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return ChampionComponent;
}());
ChampionComponent = __decorate([
    core_1.Component({
        selector: "my-champion",
        providers: [user_service_1.UserService],
        templateUrl: "pages/champion/champion.component.html",
        styleUrls: ["pages/champion/champion-common.css"]
    })
    //, "pages/login/login.css"
    ,
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        page_1.Page])
], ChampionComponent);
exports.ChampionComponent = ChampionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbXBpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBRW5ELDBDQUF5QztBQUV6QyxnQ0FBK0I7QUFFL0IsK0NBQThDO0FBRTlDLCtEQUE2RDtBQVM3RCxJQUFhLGlCQUFpQjtJQUs3QiwyQkFDUyxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsSUFBVTtRQUZWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTG5CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBT2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbkMsaURBQWlEO0lBQ2hELENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0MsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFdBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNGLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFO2FBQ2pDLFNBQVMsQ0FDVixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBRSxFQUFwQyxDQUFvQyxFQUMxQyxVQUFFLEtBQUssSUFBTSxPQUFBLEtBQUssQ0FBRSwrQ0FBK0MsQ0FBRSxFQUF4RCxDQUF3RCxDQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFNLEdBQU47UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUU7YUFDcEMsU0FBUyxDQUNWO1lBQ0MsS0FBSyxDQUFFLHdDQUF3QyxDQUFFLENBQUM7WUFDbEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFFLHNEQUFzRCxDQUFFLEVBQS9ELENBQStELENBQ3BFLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFuREQsSUFtREM7QUFuRFksaUJBQWlCO0lBUDdCLGdCQUFTLENBQUU7UUFDWCxRQUFRLEVBQUUsYUFBYTtRQUN2QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7S0FDakQsQ0FBQztJQUNGLDJCQUEyQjs7cUNBT1QsZUFBTTtRQUNELDBCQUFXO1FBQ2xCLFdBQUk7R0FSUCxpQkFBaUIsQ0FtRDdCO0FBbkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KCB7XHJcblx0c2VsZWN0b3I6IFwibXktY2hhbXBpb25cIixcclxuXHRwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvY2hhbXBpb24vY2hhbXBpb24uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2NoYW1waW9uL2NoYW1waW9uLWNvbW1vbi5jc3NcIl1cclxufSlcclxuLy8sIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJcclxuZXhwb3J0IGNsYXNzIENoYW1waW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0dXNlcjogVXNlcjtcclxuXHRpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBwYWdlOiBQYWdlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG5cclxuXHRcdHRoaXMudXNlci5lbWFpbCA9IFwiZGVzLmFycm9sbG9wZXJyby5za3lAZ21haWwuY29tXCI7XHJcblx0XHR0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzQ1Njc4OTBhXCI7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4vL1x0XHR0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG5cdH1cclxuXHJcblx0c3VibWl0KCkge1xyXG5cdFx0aWYgKCB0aGlzLmlzTG9nZ2luZ0luICkge1xyXG5cdFx0XHR0aGlzLmxvZ2luKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpZ25VcCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9naW4oKSB7XHJcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKCB0aGlzLnVzZXIgKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHQoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW1wiL2xpc3RhZG9cIl0gKSxcclxuXHRcdFx0KCBlcnJvciApID0+IGFsZXJ0KCBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiIClcclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdHNpZ25VcCgpIHtcclxuXHRcdHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIoIHRoaXMudXNlciApXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRhbGVydCggXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiICk7XHJcblx0XHRcdFx0dGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdCgpID0+IGFsZXJ0KCBcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIiApXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVEaXNwbGF5KCkge1xyXG5cdFx0dGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG5cdH1cclxufSJdfQ==