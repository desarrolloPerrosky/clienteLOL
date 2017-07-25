"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creo que son bloqueos ?
var item_1 = require("./item");
var Blockeo = (function () {
    function Blockeo(items, recMath, type) {
        this.items = items;
        this.recMath = recMath;
        this.type = type;
        /**
         * beginner_starter
         * beginner_advanced
         * beginner_movementspeed
         * beginner_legendaryitem
         * beginner_morelegendaryitems
         * consumables
         * defensive
         * offensive
         * essential
         * startingjungle
         * starting
         */
        this.type = '';
    }
    Blockeo.NEW = function (dto) {
        return new Blockeo(item_1.Item.ALL(dto.items), dto.recMath, dto.type);
    };
    Blockeo.ALL = function (dto) {
        var arreglo = [];
        for (var _i = 0, dto_1 = dto; _i < dto_1.length; _i++) {
            var _dto = dto_1[_i];
            arreglo.push(Blockeo.NEW(_dto));
        }
        return arreglo;
    };
    return Blockeo;
}());
exports.Blockeo = Blockeo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tlby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsb2NrZW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBMEI7QUFDMUIsK0JBQStCO0FBRS9CO0lBQ0MsaUJBQ2MsS0FBa0IsRUFDbEIsT0FBZ0IsRUFDaEIsSUFBWTtRQUZaLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRW5COzs7Ozs7Ozs7Ozs7V0FZRztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxXQUFHLEdBQVYsVUFBVyxHQUFPO1FBQ2QsTUFBTSxDQUFDLElBQUksT0FBTyxDQUNkLFdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUNuQixHQUFHLENBQUMsT0FBTyxFQUNYLEdBQUcsQ0FBQyxJQUFJLENBQ1gsQ0FBQztJQUNOLENBQUM7SUFDTSxXQUFHLEdBQVYsVUFBVyxHQUFjO1FBQ3JCLElBQUksT0FBTyxHQUFrQixFQUFFLENBQUM7UUFFaEMsR0FBRyxDQUFBLENBQWEsVUFBRyxFQUFILFdBQUcsRUFBSCxpQkFBRyxFQUFILElBQUc7WUFBZixJQUFJLElBQUksWUFBQTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVvIHF1ZSBzb24gYmxvcXVlb3MgP1xyXG5pbXBvcnQgeyBJdGVtIH1cdFx0ZnJvbSBcIi4vaXRlbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrZW8ge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbT4sXHJcbiAgICAgICAgcHVibGljIHJlY01hdGg6IGJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZ1xyXG4gICAgKXtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBiZWdpbm5lcl9zdGFydGVyXHJcbiAgICAgICAgICogYmVnaW5uZXJfYWR2YW5jZWRcclxuICAgICAgICAgKiBiZWdpbm5lcl9tb3ZlbWVudHNwZWVkXHJcbiAgICAgICAgICogYmVnaW5uZXJfbGVnZW5kYXJ5aXRlbVxyXG4gICAgICAgICAqIGJlZ2lubmVyX21vcmVsZWdlbmRhcnlpdGVtc1xyXG4gICAgICAgICAqIGNvbnN1bWFibGVzXHJcbiAgICAgICAgICogZGVmZW5zaXZlXHJcbiAgICAgICAgICogb2ZmZW5zaXZlXHJcbiAgICAgICAgICogZXNzZW50aWFsXHJcbiAgICAgICAgICogc3RhcnRpbmdqdW5nbGVcclxuICAgICAgICAgKiBzdGFydGluZ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICAnJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgTkVXKGR0bzphbnkpOkJsb2NrZW97XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9ja2VvKFxyXG4gICAgICAgICAgICBJdGVtLkFMTChkdG8uaXRlbXMpLFxyXG4gICAgICAgICAgICBkdG8ucmVjTWF0aCxcclxuICAgICAgICAgICAgZHRvLnR5cGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIEFMTChkdG86QXJyYXk8YW55Pik6QXJyYXk8QmxvY2tlbz57XHJcbiAgICAgICAgbGV0IGFycmVnbG86QXJyYXk8QmxvY2tlbz4gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IF9kdG8gb2YgZHRvKXtcclxuICAgICAgICAgICAgYXJyZWdsby5wdXNoKCBCbG9ja2VvLk5FVyhfZHRvKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyZWdsbztcclxuICAgIH1cclxufSJdfQ==