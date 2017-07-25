"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item(count, id) {
        this.count = count;
        this.id = id;
    }
    Item.NEW = function (dto) {
        return new Item(dto.count, dto.id);
    };
    Item.ALL = function (dto) {
        var arreglo = [];
        for (var _i = 0, dto_1 = dto; _i < dto_1.length; _i++) {
            var _dto = dto_1[_i];
            arreglo.push(Item.NEW(_dto));
        }
        return arreglo;
    };
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNDLGNBQ2MsS0FBYSxFQUNiLEVBQVU7UUFEVixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsT0FBRSxHQUFGLEVBQUUsQ0FBUTtJQUVyQixDQUFDO0lBRU0sUUFBRyxHQUFWLFVBQVcsR0FBTztRQUNkLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FDWCxHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxFQUFFLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFTSxRQUFHLEdBQVYsVUFBVyxHQUFjO1FBQ3JCLElBQUksT0FBTyxHQUFlLEVBQUUsQ0FBQztRQUU3QixHQUFHLENBQUEsQ0FBYSxVQUFHLEVBQUgsV0FBRyxFQUFILGlCQUFHLEVBQUgsSUFBRztZQUFmLElBQUksSUFBSSxZQUFBO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgY291bnQgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgaWQgOm51bWJlclxyXG4gICAgKXsgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIE5FVyhkdG86YW55KTpJdGVte1xyXG4gICAgICAgIHJldHVybiBuZXcgSXRlbShcclxuICAgICAgICAgICAgZHRvLmNvdW50LFxyXG4gICAgICAgICAgICBkdG8uaWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBBTEwoZHRvOkFycmF5PGFueT4pOkFycmF5PEl0ZW0+e1xyXG4gICAgICAgIGxldCBhcnJlZ2xvOkFycmF5PEl0ZW0+ID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBfZHRvIG9mIGR0byl7XHJcbiAgICAgICAgICAgIGFycmVnbG8ucHVzaCggSXRlbS5ORVcoX2R0bykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXJyZWdsbztcclxuICAgIH1cclxufSJdfQ==