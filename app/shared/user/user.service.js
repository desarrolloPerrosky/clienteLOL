"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBbUM7QUFHbkMsSUFBYSxXQUFXO0lBQ3ZCLHFCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFLLENBQUM7SUFFckMsOEJBQVEsR0FBUixVQUFVLElBQVU7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFFLGNBQWMsRUFBRSxrQkFBa0IsQ0FBRSxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUU7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN2QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3BCO2FBQ0MsS0FBSyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFPLElBQVU7UUFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFFLGNBQWMsRUFBRSxrQkFBa0IsQ0FBRSxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQzdCLElBQUksQ0FBQyxTQUFTLENBQUU7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxVQUFVO1NBQ3RCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDcEI7YUFDQyxHQUFHLENBQUUsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFFO2FBQ2xDLEVBQUUsQ0FBRSxVQUFBLElBQUk7WUFDUixlQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYyxLQUFlO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUUsQ0FBRSxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2xDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVlLFdBQUk7R0FEbkIsV0FBVyxDQTJDdkI7QUEzQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogSHR0cCApIHsgfVxyXG5cclxuXHRyZWdpc3RlciggdXNlcjogVXNlciApIHtcclxuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGhlYWRlcnMuYXBwZW5kKCBcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIiApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuXHRcdFx0Q29uZmlnLmFwaVVybCArIFwiVXNlcnNcIixcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoIHtcclxuXHRcdFx0XHRVc2VybmFtZTogdXNlci5lbWFpbCxcclxuXHRcdFx0XHRFbWFpbDogdXNlci5lbWFpbCxcclxuXHRcdFx0XHRQYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuXHRcdClcclxuXHRcdFx0LmNhdGNoKCB0aGlzLmhhbmRsZUVycm9ycyApO1xyXG5cdH1cclxuXHJcblx0bG9naW4oIHVzZXI6IFVzZXIgKSB7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZCggXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIgKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcblx0XHRcdENvbmZpZy5hcGlVcmwgKyBcIm9hdXRoL3Rva2VuXCIsXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KCB7XHJcblx0XHRcdFx0dXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcblx0XHRcdFx0cGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcblx0XHRcdFx0Z3JhbnRfdHlwZTogXCJwYXNzd29yZFwiXHJcblx0XHRcdH0pLFxyXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG5cdFx0KVxyXG5cdFx0XHQubWFwKCByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgKVxyXG5cdFx0XHQuZG8oIGRhdGEgPT4ge1xyXG5cdFx0XHRcdENvbmZpZy50b2tlbiA9IGRhdGEuUmVzdWx0LmFjY2Vzc190b2tlbjtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCB0aGlzLmhhbmRsZUVycm9ycyApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlRXJyb3JzKCBlcnJvcjogUmVzcG9uc2UgKSB7XHJcblx0XHRjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIGVycm9yLmpzb24oKSApICk7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyggZXJyb3IgKTtcclxuXHR9XHJcbn0iXX0=