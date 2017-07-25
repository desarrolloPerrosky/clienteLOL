"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "Groceries", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.Result.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Groceries", JSON.stringify({ Name: name }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return new grocery_1.Grocery(data.Result.Id, name);
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMscUNBQW9DO0FBR3BDLElBQWEsa0JBQWtCO0lBQzlCLDRCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFLLENBQUM7SUFFckMsaUNBQUksR0FBSjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUU1RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUU7WUFDbEQsT0FBTyxFQUFFLE9BQU87U0FDaEIsQ0FBQzthQUNBLEdBQUcsQ0FBRSxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUU7YUFDeEIsR0FBRyxDQUFFLFVBQUEsSUFBSTtZQUNULElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFFLE9BQU87Z0JBQzVCLFdBQVcsQ0FBQyxJQUFJLENBQUUsSUFBSSxpQkFBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFFLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFHLEdBQUgsVUFBSyxJQUFZO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUM1RCxPQUFPLENBQUMsTUFBTSxDQUFFLGNBQWMsRUFBRSxrQkFBa0IsQ0FBRSxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQzNCLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDL0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3BCO2FBQ0MsR0FBRyxDQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBRTthQUN4QixHQUFHLENBQUUsVUFBQSxJQUFJO1lBQ1QsTUFBTSxDQUFDLElBQUksaUJBQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWMsS0FBZTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLENBQUUsQ0FBQztRQUM5QyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUVlLFdBQUk7R0FEbkIsa0JBQWtCLENBMEM5QjtBQTFDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEh0dHAgKSB7IH1cclxuXHJcblx0bG9hZCgpIHtcclxuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGhlYWRlcnMuYXBwZW5kKCBcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4gKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCggQ29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzXCIsIHtcclxuXHRcdFx0aGVhZGVyczogaGVhZGVyc1xyXG5cdFx0fSlcclxuXHRcdFx0Lm1hcCggcmVzID0+IHJlcy5qc29uKCkgKVxyXG5cdFx0XHQubWFwKCBkYXRhID0+IHtcclxuXHRcdFx0XHRsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuXHRcdFx0XHRkYXRhLlJlc3VsdC5mb3JFYWNoKCggZ3JvY2VyeSApID0+IHtcclxuXHRcdFx0XHRcdGdyb2NlcnlMaXN0LnB1c2goIG5ldyBHcm9jZXJ5KCBncm9jZXJ5LklkLCBncm9jZXJ5Lk5hbWUgKSApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiBncm9jZXJ5TGlzdDtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCB0aGlzLmhhbmRsZUVycm9ycyApO1xyXG5cdH1cclxuXHJcblx0YWRkKCBuYW1lOiBzdHJpbmcgKSB7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZCggXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuICk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZCggXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIgKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcblx0XHRcdENvbmZpZy5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiLFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeSggeyBOYW1lOiBuYW1lIH0pLFxyXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG5cdFx0KVxyXG5cdFx0XHQubWFwKCByZXMgPT4gcmVzLmpzb24oKSApXHJcblx0XHRcdC5tYXAoIGRhdGEgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgR3JvY2VyeSggZGF0YS5SZXN1bHQuSWQsIG5hbWUgKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCB0aGlzLmhhbmRsZUVycm9ycyApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlRXJyb3JzKCBlcnJvcjogUmVzcG9uc2UgKSB7XHJcblx0XHRjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIGVycm9yLmpzb24oKSApICk7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyggZXJyb3IgKTtcclxuXHR9XHJcbn0iXX0=