"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUt6RSxrRkFBK0U7QUFFL0UsdURBQXlEO0FBUXpELElBQWEsYUFBYTtJQVV6Qix1QkFDUyxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVYvQyxnQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPZCxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUM1QixTQUFTLENBQUUsVUFBQSxlQUFlO1lBQzFCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBRSxhQUFhO2dCQUN0QyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVzthQUMvQixHQUFHLENBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFaLENBQVksQ0FBRTthQUM5QixJQUFJLENBQUUsSUFBSSxDQUFFO2FBQ1osSUFBSSxFQUFFLENBQUM7UUFDVCxXQUFXLENBQUMsU0FBUyxDQUFFLFVBQVUsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7SUFHRCwyQkFBRyxHQUFIO1FBQUEsaUJBd0JDO1FBdkJBLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUUsc0JBQXNCLENBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUM7UUFDUixDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFO2FBQ3pDLFNBQVMsQ0FDVixVQUFBLGFBQWE7WUFDWixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQ0Q7WUFDQyxLQUFLLENBQUU7Z0JBQ04sT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUNBLENBQUE7SUFDSCxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBcERBO0lBREMsZ0JBQVMsQ0FBRSxrQkFBa0IsQ0FBRTs4QkFDZCxpQkFBVTt1REFBQztBQVJqQixhQUFhO0lBTnpCLGdCQUFTLENBQUU7UUFDWCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO0tBQy9CLENBQUM7cUNBWTRCLHlDQUFrQjtHQVhuQyxhQUFhLENBNER6QjtBQTVEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcblxyXG5AQ29tcG9uZW50KCB7XHJcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXHJcblx0cHJvdmlkZXJzOiBbR3JvY2VyeUxpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Z3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XHJcblxyXG5cdGdyb2NlcnkgPSBcIlwiO1xyXG5cclxuXHRpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcblx0QFZpZXdDaGlsZCggXCJncm9jZXJ5VGV4dEZpZWxkXCIgKVxyXG5cdGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZVxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpXHJcblx0XHRcdC5zdWJzY3JpYmUoIGxvYWRlZEdyb2NlcmllcyA9PiB7XHJcblx0XHRcdFx0bG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKCBncm9jZXJ5T2JqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KCBncm9jZXJ5T2JqZWN0ICk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2hhcmUoKSB7XHJcblx0XHRsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcclxuXHRcdFx0Lm1hcCggZ3JvY2VyeSA9PiBncm9jZXJ5Lm5hbWUgKVxyXG5cdFx0XHQuam9pbiggXCIsIFwiIClcclxuXHRcdFx0LnRyaW0oKTtcclxuXHRcdFNvY2lhbFNoYXJlLnNoYXJlVGV4dCggbGlzdFN0cmluZyApO1xyXG5cdH1cclxuXHJcblxyXG5cdGFkZCgpIHtcclxuXHRcdGlmICggdGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIiApIHtcclxuXHRcdFx0YWxlcnQoIFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIiApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcclxuXHRcdGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0dGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuXHJcblx0XHR0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQoIHRoaXMuZ3JvY2VyeSApXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdGdyb2NlcnlPYmplY3QgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdCggZ3JvY2VyeU9iamVjdCApO1xyXG5cdFx0XHRcdHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRhbGVydCgge1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXHJcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdH1cclxufSJdfQ==