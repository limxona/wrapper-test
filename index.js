var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NetmeraPluginOriginal = /** @class */ (function (_super) {
    __extends(NetmeraPluginOriginal, _super);
    function NetmeraPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetmeraPluginOriginal.prototype.start = function (netmeraKey, fcmKey, baseUrl) { return cordova(this, "start", {}, arguments); };
    NetmeraPluginOriginal.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    NetmeraPluginOriginal.prototype.subscribePushNotification = function () { return cordova(this, "subscribePushNotification", { "observable": true }, arguments); };
    NetmeraPluginOriginal.prototype.subscribeOpenUrl = function () { return cordova(this, "subscribeOpenUrl", { "observable": true }, arguments); };
    NetmeraPluginOriginal.prototype.subscribePushClick = function () { return cordova(this, "subscribePushClick", { "observable": true }, arguments); };
    NetmeraPluginOriginal.prototype.subscribePushButtonClick = function () { return cordova(this, "subscribePushButtonClick", { "observable": true }, arguments); };
    NetmeraPluginOriginal.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    NetmeraPluginOriginal.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    NetmeraPluginOriginal.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    NetmeraPluginOriginal.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    NetmeraPluginOriginal.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    NetmeraPluginOriginal.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    NetmeraPluginOriginal.prototype.requestLocationAuthorization = function () { return cordova(this, "requestLocationAuthorization", {}, arguments); };
    NetmeraPluginOriginal.pluginName = "NetmeraPlugin";
    NetmeraPluginOriginal.plugin = "cordova-plugin-netmera";
    NetmeraPluginOriginal.pluginRef = "NetmeraPlugin";
    NetmeraPluginOriginal.repo = "";
    NetmeraPluginOriginal.install = "";
    NetmeraPluginOriginal.installVariables = [];
    NetmeraPluginOriginal.platforms = ["Android", "iOS"];
    return NetmeraPluginOriginal;
}(IonicNativePlugin));
var NetmeraPlugin = new NetmeraPluginOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldG1lcmEtcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDO0FBQzVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBYUMsaUNBQWlCOzs7O0lBR2xELDZCQUFLLGFBQUMsVUFBa0IsRUFBRSxNQUFjLEVBQUUsT0FBZ0I7SUFLMUQsNERBQW9DO0lBT3BDLGlEQUF5QjtJQU96Qix3Q0FBZ0I7SUFPaEIsMENBQWtCO0lBT2xCLGdEQUF3QjtJQUt4QixpQ0FBUyxhQUFDLEtBQW1CO0lBSzdCLDZDQUFxQixhQUFDLE1BQTBCO0lBS2hELHFDQUFhO0lBS2Isc0NBQWMsYUFBQyxNQUF5QjtJQUt4Qyx3Q0FBZ0IsYUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQXlCO0lBS3pFLGtDQUFVLGFBQUMsSUFBaUI7SUFHNUIsb0RBQTRCOzs7Ozs7Ozt3QkEvRjlCO0VBMEJtQyxpQkFBaUI7U0FBdkMsYUFBYTtBQWlHMUIsTUFBTSxDQUFOLElBQVksaUJBT1g7QUFQRCxXQUFZLGlCQUFpQjtJQUMzQixtRUFBYSxDQUFBO0lBQ2IseURBQVEsQ0FBQTtJQUNSLDZEQUFVLENBQUE7SUFDViwyRUFBaUIsQ0FBQTtJQUNqQiwrREFBVyxDQUFBO0lBQ1gsdURBQU8sQ0FBQTtBQUNULENBQUMsRUFQVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBTzVCOzs7O0lBVUMsc0JBQUksa0NBQVM7YUFBYixVQUFjLEtBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFJLGlDQUFRO2FBQVosVUFBYSxLQUFVLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNoRCxzQkFBSSxrQ0FBUzthQUFiLFVBQWMsS0FBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEQsc0JBQUksNkJBQUk7YUFBUixVQUFTLEtBQWEsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzVDLHNCQUFJLGdDQUFPO2FBQVgsVUFBWSxLQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtzQkFoSmhEOzs7Ozs7dUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ldG1lcmFQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXRtZXJhJyxcbiAgcGx1Z2luUmVmOiAnTmV0bWVyYVBsdWdpbicsIFxuICByZXBvOiAnJywgXG4gIGluc3RhbGw6ICcnLCBcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ldG1lcmFQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydChuZXRtZXJhS2V5OiBzdHJpbmcsIGZjbUtleTogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UHVzaE5vdGlmaWNhdGlvbkF1dGhvcml6YXRpb24oKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbigpOiBPYnNlcnZhYmxlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3Vic2NyaWJlT3BlblVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHN1YnNjcmliZVB1c2hDbGljaygpOiBPYnNlcnZhYmxlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3Vic2NyaWJlUHVzaEJ1dHRvbkNsaWNrKCk6IE9ic2VydmFibGU8TmV0bWVyYVB1c2g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNlbmRFdmVudChldmVudDogTmV0bWVyYUV2ZW50KTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBmZXRjaEluYm94VXNpbmdGaWx0ZXIoZmlsdGVyOiBOZXRtZXJhSW5ib3hGaWx0ZXIpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hOZXh0UGFnZSgpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY291bnRGb3JTdGF0dXMoc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVQdXNoU3RhdHVzKGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBzdGF0dXM6IE5ldG1lcmFQdXNoU3RhdHVzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVVc2VyKHVzZXI6IE5ldG1lcmFVc2VyKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RMb2NhdGlvbkF1dGhvcml6YXRpb24oKTogdm9pZCB7IH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFJbmJveEZpbHRlciB7XG4gIHN0YXR1cz86IG51bWJlcixcbiAgcGFnZVNpemU/OiBudW1iZXIsXG4gIGNhdGVnb3JpZXM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUV4cGlyZWRPYmplY3RzPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFQdXNoIHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgc3VidGl0bGU6IHN0cmluZyxcbiAgYm9keTogc3RyaW5nLFxuICBwdXNoSWQ6IHN0cmluZyxcbiAgcHVzaEluc3RhbmNlSWQ6IHN0cmluZyxcbiAgcHVzaFR5cGU6IG51bWJlclxuICBpbmJveFN0YXR1czogbnVtYmVyLFxuICBzZW5kRGF0ZTogYW55XG4gIGRlZXBsaW5rVXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3gge1xuICBoYXNOZXh0UGFnZTogYm9vbGVhbixcbiAgaW5ib3g6IE5ldG1lcmFQdXNoW11cbn1cblxuZXhwb3J0IGVudW0gTmV0bWVyYVB1c2hTdGF0dXMge1xuICB1bmRlZmllbmQgPSAwLFxuICByZWFkID0gMSxcbiAgdW5yZWFkID0gMixcbiAgcmVhZEFuZFVucmVhZCA9IDMsXG4gIGRlbGV0ZWQgPSA0LFxuICBhbGwgPSA3XG59XG5cbmV4cG9ydCBjbGFzcyBOZXRtZXJhVXNlciB7XG5cbiAgcHJpdmF0ZSB1c2VySWQ6IGFueTtcbiAgcHJpdmF0ZSBtc2lzZG46IGFueTtcbiAgcHJpdmF0ZSBlbWFpbDogYW55O1xuICBwcml2YXRlIHBhOiBhbnk7XG4gIHByaXZhdGUgcGI6IGFueTtcblxuICBzZXQgc2V0VXNlcklkKHZhbHVlOiBhbnkpIHsgdGhpcy51c2VySWQgPSB2YWx1ZTsgfVxuICBzZXQgc2V0RW1haWwodmFsdWU6IGFueSkgeyB0aGlzLmVtYWlsID0gdmFsdWU7IH1cbiAgc2V0IHNldE1zaXNkbih2YWx1ZTogYW55KSB7IHRoaXMubXNpc2RuID0gdmFsdWU7IH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykgeyB0aGlzLnBhID0gdmFsdWU7IH1cbiAgc2V0IHN1cm5hbWUodmFsdWU6IHN0cmluZykgeyB0aGlzLnBhID0gdmFsdWUgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0bWVyYUV2ZW50IHsgfSJdfQ==