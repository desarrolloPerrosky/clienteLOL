"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Informacion = (function () {
    function Informacion(difficulty, attack, defense, magic) {
        this.difficulty = difficulty;
        this.attack = attack;
        this.defense = defense;
        this.magic = magic;
    }
    Informacion.NEW = function (dto) {
        return new Informacion(dto.difficulty, dto.attack, dto.defense, dto.magic);
    };
    return Informacion;
}());
exports.Informacion = Informacion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYWNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvcm1hY2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0MscUJBQ2MsVUFBa0IsRUFDbEIsTUFBYyxFQUNkLE9BQWUsRUFDZixLQUFhO1FBSGIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFeEIsQ0FBQztJQUNHLGVBQUcsR0FBVixVQUFXLEdBQU87UUFDWCxNQUFNLENBQUMsSUFBSSxXQUFXLENBQ2xCLEdBQUcsQ0FBQyxVQUFVLEVBQ2QsR0FBRyxDQUFDLE1BQU0sRUFDVixHQUFHLENBQUMsT0FBTyxFQUNYLEdBQUcsQ0FBQyxLQUFLLENBQ1osQ0FBQztJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW5mb3JtYWNpb24ge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBkaWZmaWN1bHR5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGF0dGFjazogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkZWZlbnNlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG1hZ2ljOiBudW1iZXJcclxuICAgICl7IFxyXG4gICAgfVxyXG5cdHN0YXRpYyBORVcoZHRvOmFueSk6IEluZm9ybWFjaW9ue1xyXG4gICAgICAgIHJldHVybiBuZXcgSW5mb3JtYWNpb24oXHJcbiAgICAgICAgICAgIGR0by5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICBkdG8uYXR0YWNrLFxyXG4gICAgICAgICAgICBkdG8uZGVmZW5zZSxcclxuICAgICAgICAgICAgZHRvLm1hZ2ljXHJcbiAgICAgICAgKTsgXHJcbiAgICB9XHJcbn0iXX0=