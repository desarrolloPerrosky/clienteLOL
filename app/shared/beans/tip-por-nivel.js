"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipPorNivel = (function () {
    function TipPorNivel(effect, // Efectos?
        label) {
        this.effect = effect;
        this.label = label;
    }
    TipPorNivel.NEW = function (dto) {
        return new TipPorNivel(dto.effect, dto.label);
    };
    return TipPorNivel;
}());
exports.TipPorNivel = TipPorNivel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwLXBvci1uaXZlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpcC1wb3Itbml2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNDLHFCQUNjLE1BQXFCLEVBQUUsV0FBVztRQUNsQyxLQUFvQjtRQURwQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWU7SUFFL0IsQ0FBQztJQUNNLGVBQUcsR0FBVixVQUFXLEdBQU87UUFDZCxNQUFNLENBQUMsSUFBSSxXQUFXLENBQ2xCLEdBQUcsQ0FBQyxNQUFNLEVBQ1YsR0FBRyxDQUFDLEtBQUssQ0FDWixDQUFDO0lBQ04sQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaXBQb3JOaXZlbCB7XHJcblx0Y29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGVmZmVjdCA6QXJyYXk8c3RyaW5nPiwgLy8gRWZlY3Rvcz9cclxuICAgICAgICBwdWJsaWMgbGFiZWwgOkFycmF5PHN0cmluZz4sIC8vIE5vbWJyZXM/XHJcbiAgICApeyBcclxuICAgIH1cclxuICAgIHN0YXRpYyBORVcoZHRvOmFueSk6VGlwUG9yTml2ZWx7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaXBQb3JOaXZlbChcclxuICAgICAgICAgICAgZHRvLmVmZmVjdCxcclxuICAgICAgICAgICAgZHRvLmxhYmVsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==