"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Variable = (function () {
    function Variable(coeff, // Coeficiente?
        link, // "attackdamage"
        key) {
        this.coeff = coeff;
        this.link = link;
        this.key = key;
    }
    Variable.NEW = function (dto) {
        return new Variable(dto.coeff, dto.link, dto.key);
    };
    Variable.ALL = function (dto) {
        if (dto && dto.length > 0) {
            var arreglo = [];
            for (var _i = 0, dto_1 = dto; _i < dto_1.length; _i++) {
                var _dto = dto_1[_i];
                arreglo.push(Variable.NEW(_dto));
            }
            return arreglo;
        }
        return [];
    };
    return Variable;
}());
exports.Variable = Variable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YXJpYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0Msa0JBQ2MsS0FBb0IsRUFBRSxlQUFlO1FBQ3JDLElBQVksRUFBRSxpQkFBaUI7UUFDL0IsR0FBVztRQUZYLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFFdEIsQ0FBQztJQUVNLFlBQUcsR0FBVixVQUFXLEdBQU87UUFDZCxNQUFNLENBQUMsSUFBSSxRQUFRLENBQ2YsR0FBRyxDQUFDLEtBQUssRUFDVCxHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxHQUFHLENBQ1YsQ0FBQztJQUNOLENBQUM7SUFFTSxZQUFHLEdBQVYsVUFBVyxHQUFHO1FBQ1YsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QixJQUFJLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQSxDQUFhLFVBQUcsRUFBSCxXQUFHLEVBQUgsaUJBQUcsRUFBSCxJQUFHO2dCQUFmLElBQUksSUFBSSxZQUFBO2dCQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWYXJpYWJsZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGNvZWZmIDpBcnJheTxudW1iZXI+LCAvLyBDb2VmaWNpZW50ZT9cclxuICAgICAgICBwdWJsaWMgbGluazogc3RyaW5nLCAvLyBcImF0dGFja2RhbWFnZVwiXHJcbiAgICAgICAgcHVibGljIGtleSA6c3RyaW5nXHJcbiAgICApeyBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgTkVXKGR0bzphbnkpOiBWYXJpYWJsZXtcclxuICAgICAgICByZXR1cm4gbmV3IFZhcmlhYmxlKFxyXG4gICAgICAgICAgICBkdG8uY29lZmYsXHJcbiAgICAgICAgICAgIGR0by5saW5rLFxyXG4gICAgICAgICAgICBkdG8ua2V5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQUxMKGR0byApOkFycmF5PFZhcmlhYmxlPntcclxuICAgICAgICBpZihkdG8gJiYgZHRvLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgYXJyZWdsbzpBcnJheTxWYXJpYWJsZT4gPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBfZHRvIG9mIGR0byl7XHJcbiAgICAgICAgICAgICAgICBhcnJlZ2xvLnB1c2goIFZhcmlhYmxlLk5FVyhfZHRvKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmVnbG87XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn0iXX0=