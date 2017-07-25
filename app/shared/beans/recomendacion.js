"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blockeo_1 = require("./blockeo");
var Recomendacion = (function () {
    function Recomendacion(map, blocks, champion, title, mode, type) {
        this.map = map;
        this.blocks = blocks;
        this.champion = champion;
        this.title = title;
        this.mode = mode;
        this.type = type;
    }
    Recomendacion.NEW = function (dto) {
        return new Recomendacion(dto.map, blockeo_1.Blockeo.ALL(dto.blocks), dto.champion, dto.title, dto.mode, dto.type);
    };
    Recomendacion.ALL = function (dto) {
        var arreglo = [];
        for (var _i = 0, dto_1 = dto; _i < dto_1.length; _i++) {
            var _dto = dto_1[_i];
            arreglo.push(Recomendacion.NEW(_dto));
        }
        return arreglo;
    };
    return Recomendacion;
}());
exports.Recomendacion = Recomendacion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb21lbmRhY2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY29tZW5kYWNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFFckM7SUFDSSx1QkFDVyxHQUFXLEVBQ1gsTUFBc0IsRUFDdEIsUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLElBQVksRUFDWixJQUFZO1FBTFosUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBRXZCLENBQUM7SUFFTSxpQkFBRyxHQUFWLFVBQVcsR0FBTztRQUNkLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FDcEIsR0FBRyxDQUFDLEdBQUcsRUFDUCxpQkFBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQ3pCLEdBQUcsQ0FBQyxRQUFRLEVBQ1osR0FBRyxDQUFDLEtBQUssRUFDVCxHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0saUJBQUcsR0FBVixVQUFXLEdBQWM7UUFDckIsSUFBSSxPQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUV0QyxHQUFHLENBQUEsQ0FBYSxVQUFHLEVBQUgsV0FBRyxFQUFILGlCQUFHLEVBQUgsSUFBRztZQUFmLElBQUksSUFBSSxZQUFBO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBRSxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja2VvIH1cdFx0ZnJvbSBcIi4vYmxvY2tlb1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29tZW5kYWNpb24ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG1hcDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBibG9ja3M6IEFycmF5PEJsb2NrZW8+LFxyXG4gICAgICAgIHB1YmxpYyBjaGFtcGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtb2RlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZyxcclxuICAgICl7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBORVcoZHRvOmFueSk6IFJlY29tZW5kYWNpb257XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWNvbWVuZGFjaW9uKFxyXG4gICAgICAgICAgICBkdG8ubWFwLFxyXG4gICAgICAgICAgICBCbG9ja2VvLkFMTCggZHRvLmJsb2NrcyApLFxyXG4gICAgICAgICAgICBkdG8uY2hhbXBpb24sXHJcbiAgICAgICAgICAgIGR0by50aXRsZSxcclxuICAgICAgICAgICAgZHRvLm1vZGUsXHJcbiAgICAgICAgICAgIGR0by50eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQUxMKGR0bzpBcnJheTxhbnk+KTpBcnJheTxSZWNvbWVuZGFjaW9uPntcclxuICAgICAgICBsZXQgYXJyZWdsbzpBcnJheTxSZWNvbWVuZGFjaW9uPiA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgX2R0byBvZiBkdG8pe1xyXG4gICAgICAgICAgICBhcnJlZ2xvLnB1c2goIFJlY29tZW5kYWNpb24uTkVXKF9kdG8pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJlZ2xvO1xyXG4gICAgfVxyXG59Il19