//var validator = require("email-validator");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        //		return validator.validate( this.email );
        return this.email && this.email.length > 10;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOzs7QUFFN0M7SUFBQTtJQU9BLENBQUM7SUFKQSwyQkFBWSxHQUFaO1FBQ0QsNENBQTRDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0YsV0FBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0cGFzc3dvcmQ6IHN0cmluZztcclxuXHRpc1ZhbGlkRW1haWwoKSB7XHJcbi8vXHRcdHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoIHRoaXMuZW1haWwgKTtcclxuXHRcdHJldHVybiB0aGlzLmVtYWlsICYmIHRoaXMuZW1haWwubGVuZ3RoID4gMTA7XHJcblx0fVxyXG59Il19