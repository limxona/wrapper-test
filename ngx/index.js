import { __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NetmeraPlugin = /** @class */ (function (_super) {
    __extends(NetmeraPlugin, _super);
    function NetmeraPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetmeraPlugin.prototype.start = function (netmeraKey, fcmKey, baseUrl) { return cordova(this, "start", {}, arguments); };
    NetmeraPlugin.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    NetmeraPlugin.prototype.subscribePushNotification = function () { return cordova(this, "subscribePushNotification", { "observable": true }, arguments); };
    NetmeraPlugin.prototype.subscribeOpenUrl = function () { return cordova(this, "subscribeOpenUrl", { "observable": true }, arguments); };
    NetmeraPlugin.prototype.subscribePushClick = function () { return cordova(this, "subscribePushClick", { "observable": true }, arguments); };
    NetmeraPlugin.prototype.subscribePushButtonClick = function () { return cordova(this, "subscribePushButtonClick", { "observable": true }, arguments); };
    NetmeraPlugin.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    NetmeraPlugin.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    NetmeraPlugin.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    NetmeraPlugin.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    NetmeraPlugin.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    NetmeraPlugin.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    NetmeraPlugin.prototype.requestLocationAuthorization = function () { return cordova(this, "requestLocationAuthorization", {}, arguments); };
    NetmeraPlugin.pluginName = "NetmeraPlugin";
    NetmeraPlugin.plugin = "cordova-plugin-netmera";
    NetmeraPlugin.pluginRef = "NetmeraPlugin";
    NetmeraPlugin.repo = "";
    NetmeraPlugin.install = "";
    NetmeraPlugin.installVariables = [];
    NetmeraPlugin.platforms = ["Android", "iOS"];
    NetmeraPlugin.decorators = [
        { type: Injectable }
    ];
    return NetmeraPlugin;
}(IonicNativePlugin));
export { NetmeraPlugin };
export var NetmeraPushStatus;
(function (NetmeraPushStatus) {
    NetmeraPushStatus[NetmeraPushStatus["undefiend"] = 0] = "undefiend";
    NetmeraPushStatus[NetmeraPushStatus["read"] = 1] = "read";
    NetmeraPushStatus[NetmeraPushStatus["unread"] = 2] = "unread";
    NetmeraPushStatus[NetmeraPushStatus["readAndUnread"] = 3] = "readAndUnread";
    NetmeraPushStatus[NetmeraPushStatus["deleted"] = 4] = "deleted";
    NetmeraPushStatus[NetmeraPushStatus["all"] = 7] = "all";
})(NetmeraPushStatus || (NetmeraPushStatus = {}));
var NetmeraUser = /** @class */ (function () {
    function NetmeraUser() {
    }
    Object.defineProperty(NetmeraUser.prototype, "setUserId", {
        set: function (value) { this.userId = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "setEmail", {
        set: function (value) { this.email = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "setMsisdn", {
        set: function (value) { this.msisdn = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "name", {
        set: function (value) { this.pa = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "surname", {
        set: function (value) { this.pa = value; },
        enumerable: false,
        configurable: true
    });
    return NetmeraUser;
}());
export { NetmeraUser };
var NetmeraEvent = /** @class */ (function () {
    function NetmeraEvent() {
    }
    return NetmeraEvent;
}());
export { NetmeraEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldG1lcmEtcGx1Z2luL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWFDLGlDQUFpQjs7OztJQUdsRCw2QkFBSyxhQUFDLFVBQWtCLEVBQUUsTUFBYyxFQUFFLE9BQWdCO0lBSzFELDREQUFvQztJQU9wQyxpREFBeUI7SUFPekIsd0NBQWdCO0lBT2hCLDBDQUFrQjtJQU9sQixnREFBd0I7SUFLeEIsaUNBQVMsYUFBQyxLQUFtQjtJQUs3Qiw2Q0FBcUIsYUFBQyxNQUEwQjtJQUtoRCxxQ0FBYTtJQUtiLHNDQUFjLGFBQUMsTUFBeUI7SUFLeEMsd0NBQWdCLGFBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxNQUF5QjtJQUt6RSxrQ0FBVSxhQUFDLElBQWlCO0lBRzVCLG9EQUE0Qjs7Ozs7Ozs7O2dCQXRFN0IsVUFBVTs7d0JBekJYO0VBMEJtQyxpQkFBaUI7U0FBdkMsYUFBYTtBQWlHMUIsTUFBTSxDQUFOLElBQVksaUJBT1g7QUFQRCxXQUFZLGlCQUFpQjtJQUMzQixtRUFBYSxDQUFBO0lBQ2IseURBQVEsQ0FBQTtJQUNSLDZEQUFVLENBQUE7SUFDViwyRUFBaUIsQ0FBQTtJQUNqQiwrREFBVyxDQUFBO0lBQ1gsdURBQU8sQ0FBQTtBQUNULENBQUMsRUFQVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBTzVCOzs7O0lBVUMsc0JBQUksa0NBQVM7YUFBYixVQUFjLEtBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFJLGlDQUFRO2FBQVosVUFBYSxLQUFVLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNoRCxzQkFBSSxrQ0FBUzthQUFiLFVBQWMsS0FBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEQsc0JBQUksNkJBQUk7YUFBUixVQUFTLEtBQWEsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzVDLHNCQUFJLGdDQUFPO2FBQVgsVUFBWSxLQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtzQkFoSmhEOzs7Ozs7dUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ldG1lcmFQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXRtZXJhJyxcbiAgcGx1Z2luUmVmOiAnTmV0bWVyYVBsdWdpbicsIFxuICByZXBvOiAnJywgXG4gIGluc3RhbGw6ICcnLCBcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ldG1lcmFQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydChuZXRtZXJhS2V5OiBzdHJpbmcsIGZjbUtleTogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UHVzaE5vdGlmaWNhdGlvbkF1dGhvcml6YXRpb24oKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbigpOiBPYnNlcnZhYmxlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3Vic2NyaWJlT3BlblVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHN1YnNjcmliZVB1c2hDbGljaygpOiBPYnNlcnZhYmxlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3Vic2NyaWJlUHVzaEJ1dHRvbkNsaWNrKCk6IE9ic2VydmFibGU8TmV0bWVyYVB1c2g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNlbmRFdmVudChldmVudDogTmV0bWVyYUV2ZW50KTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBmZXRjaEluYm94VXNpbmdGaWx0ZXIoZmlsdGVyOiBOZXRtZXJhSW5ib3hGaWx0ZXIpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hOZXh0UGFnZSgpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY291bnRGb3JTdGF0dXMoc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVQdXNoU3RhdHVzKGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBzdGF0dXM6IE5ldG1lcmFQdXNoU3RhdHVzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVVc2VyKHVzZXI6IE5ldG1lcmFVc2VyKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RMb2NhdGlvbkF1dGhvcml6YXRpb24oKTogdm9pZCB7IH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFJbmJveEZpbHRlciB7XG4gIHN0YXR1cz86IG51bWJlcixcbiAgcGFnZVNpemU/OiBudW1iZXIsXG4gIGNhdGVnb3JpZXM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUV4cGlyZWRPYmplY3RzPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFQdXNoIHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgc3VidGl0bGU6IHN0cmluZyxcbiAgYm9keTogc3RyaW5nLFxuICBwdXNoSWQ6IHN0cmluZyxcbiAgcHVzaEluc3RhbmNlSWQ6IHN0cmluZyxcbiAgcHVzaFR5cGU6IG51bWJlclxuICBpbmJveFN0YXR1czogbnVtYmVyLFxuICBzZW5kRGF0ZTogYW55XG4gIGRlZXBsaW5rVXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3gge1xuICBoYXNOZXh0UGFnZTogYm9vbGVhbixcbiAgaW5ib3g6IE5ldG1lcmFQdXNoW11cbn1cblxuZXhwb3J0IGVudW0gTmV0bWVyYVB1c2hTdGF0dXMge1xuICB1bmRlZmllbmQgPSAwLFxuICByZWFkID0gMSxcbiAgdW5yZWFkID0gMixcbiAgcmVhZEFuZFVucmVhZCA9IDMsXG4gIGRlbGV0ZWQgPSA0LFxuICBhbGwgPSA3XG59XG5cbmV4cG9ydCBjbGFzcyBOZXRtZXJhVXNlciB7XG5cbiAgcHJpdmF0ZSB1c2VySWQ6IGFueTtcbiAgcHJpdmF0ZSBtc2lzZG46IGFueTtcbiAgcHJpdmF0ZSBlbWFpbDogYW55O1xuICBwcml2YXRlIHBhOiBhbnk7XG4gIHByaXZhdGUgcGI6IGFueTtcblxuICBzZXQgc2V0VXNlcklkKHZhbHVlOiBhbnkpIHsgdGhpcy51c2VySWQgPSB2YWx1ZTsgfVxuICBzZXQgc2V0RW1haWwodmFsdWU6IGFueSkgeyB0aGlzLmVtYWlsID0gdmFsdWU7IH1cbiAgc2V0IHNldE1zaXNkbih2YWx1ZTogYW55KSB7IHRoaXMubXNpc2RuID0gdmFsdWU7IH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykgeyB0aGlzLnBhID0gdmFsdWU7IH1cbiAgc2V0IHN1cm5hbWUodmFsdWU6IHN0cmluZykgeyB0aGlzLnBhID0gdmFsdWUgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0bWVyYUV2ZW50IHsgfSJdfQ==