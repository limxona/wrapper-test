import { __decorate, __extends } from "tslib";
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
var NetmeraPlugin = /** @class */ (function (_super) {
    __extends(NetmeraPlugin, _super);
    function NetmeraPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetmeraPlugin.prototype.start = function (netmeraKey, fcmKey, baseUrl) { return cordova(this, "start", {}, arguments); };
    NetmeraPlugin.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    NetmeraPlugin.prototype.subscribePushNotification = function () { return cordova(this, "subscribePushNotification", {}, arguments); };
    NetmeraPlugin.prototype.subscribeOpenUrl = function () { return cordova(this, "subscribeOpenUrl", {}, arguments); };
    NetmeraPlugin.prototype.subscribePushClick = function () { return cordova(this, "subscribePushClick", {}, arguments); };
    NetmeraPlugin.prototype.subscribePushButtonClick = function () { return cordova(this, "subscribePushButtonClick", {}, arguments); };
    NetmeraPlugin.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    NetmeraPlugin.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    NetmeraPlugin.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    NetmeraPlugin.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    NetmeraPlugin.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    NetmeraPlugin.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    NetmeraPlugin.pluginName = "NetmeraPlugin";
    NetmeraPlugin.plugin = "cordova-plugin-netmera";
    NetmeraPlugin.pluginRef = "NetmeraPlugin";
    NetmeraPlugin.repo = "";
    NetmeraPlugin.install = "";
    NetmeraPlugin.installVariables = [];
    NetmeraPlugin.platforms = ["Android", "iOS"];
    NetmeraPlugin = __decorate([
        Injectable()
    ], NetmeraPlugin);
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "setEmail", {
        set: function (value) { this.email = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "setMsisdn", {
        set: function (value) { this.msisdn = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "name", {
        set: function (value) { this.pa = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "surname", {
        set: function (value) { this.pa = value; },
        enumerable: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldG1lcmEtcGx1Z2luL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFjekYsaUNBQWlCOzs7O0lBR2xELDZCQUFLLGFBQUMsVUFBa0IsRUFBRSxNQUFjLEVBQUUsT0FBZ0I7SUFLMUQsNERBQW9DO0lBS3BDLGlEQUF5QjtJQUt6Qix3Q0FBZ0I7SUFLaEIsMENBQWtCO0lBS2xCLGdEQUF3QjtJQUt4QixpQ0FBUyxhQUFDLEtBQW1CO0lBSzdCLDZDQUFxQixhQUFDLE1BQTBCO0lBS2hELHFDQUFhO0lBS2Isc0NBQWMsYUFBQyxNQUF5QjtJQUt4Qyx3Q0FBZ0IsYUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQXlCO0lBS3pFLGtDQUFVLGFBQUMsSUFBaUI7Ozs7Ozs7O0lBMURqQixhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBMUIxQjtFQTBCbUMsaUJBQWlCO1NBQXZDLGFBQWE7QUFzRjFCLE1BQU0sQ0FBTixJQUFZLGlCQU9YO0FBUEQsV0FBWSxpQkFBaUI7SUFDM0IsbUVBQWEsQ0FBQTtJQUNiLHlEQUFRLENBQUE7SUFDUiw2REFBVSxDQUFBO0lBQ1YsMkVBQWlCLENBQUE7SUFDakIsK0RBQVcsQ0FBQTtJQUNYLHVEQUFPLENBQUE7QUFDVCxDQUFDLEVBUFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU81Qjs7OztJQVVDLHNCQUFJLGtDQUFTO2FBQWIsVUFBYyxLQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRCxzQkFBSSxpQ0FBUTthQUFaLFVBQWEsS0FBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDaEQsc0JBQUksa0NBQVM7YUFBYixVQUFjLEtBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFJLDZCQUFJO2FBQVIsVUFBUyxLQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM1QyxzQkFBSSxnQ0FBTzthQUFYLFVBQVksS0FBYSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7c0JBckloRDs7Ozs7O3VCQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXRtZXJhUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0bWVyYScsXG4gIHBsdWdpblJlZjogJ05ldG1lcmFQbHVnaW4nLCBcbiAgcmVwbzogJycsIFxuICBpbnN0YWxsOiAnJywgXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXRtZXJhUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQobmV0bWVyYUtleTogc3RyaW5nLCBmY21LZXk6IHN0cmluZywgYmFzZVVybD86IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFB1c2hOb3RpZmljYXRpb25BdXRob3JpemF0aW9uKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmVPcGVuVXJsKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmVQdXNoQ2xpY2soKTogUHJvbWlzZTxOZXRtZXJhUHVzaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlUHVzaEJ1dHRvbkNsaWNrKCk6IFByb21pc2U8TmV0bWVyYVB1c2g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNlbmRFdmVudChldmVudDogTmV0bWVyYUV2ZW50KTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBmZXRjaEluYm94VXNpbmdGaWx0ZXIoZmlsdGVyOiBOZXRtZXJhSW5ib3hGaWx0ZXIpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hOZXh0UGFnZSgpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY291bnRGb3JTdGF0dXMoc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVQdXNoU3RhdHVzKGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBzdGF0dXM6IE5ldG1lcmFQdXNoU3RhdHVzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVVc2VyKHVzZXI6IE5ldG1lcmFVc2VyKTogdm9pZCB7IH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFJbmJveEZpbHRlciB7XG4gIHN0YXR1cz86IG51bWJlcixcbiAgcGFnZVNpemU/OiBudW1iZXIsXG4gIGNhdGVnb3JpZXM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUV4cGlyZWRPYmplY3RzPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFQdXNoIHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgc3VidGl0bGU6IHN0cmluZyxcbiAgYm9keTogc3RyaW5nLFxuICBwdXNoSWQ6IHN0cmluZyxcbiAgcHVzaEluc3RhbmNlSWQ6IHN0cmluZyxcbiAgcHVzaFR5cGU6IG51bWJlclxuICBpbmJveFN0YXR1czogbnVtYmVyLFxuICBzZW5kRGF0ZTogYW55XG4gIGRlZXBsaW5rVXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3gge1xuICBoYXNOZXh0UGFnZTogYm9vbGVhbixcbiAgaW5ib3g6IE5ldG1lcmFQdXNoW11cbn1cblxuZXhwb3J0IGVudW0gTmV0bWVyYVB1c2hTdGF0dXMge1xuICB1bmRlZmllbmQgPSAwLFxuICByZWFkID0gMSxcbiAgdW5yZWFkID0gMixcbiAgcmVhZEFuZFVucmVhZCA9IDMsXG4gIGRlbGV0ZWQgPSA0LFxuICBhbGwgPSA3XG59XG5cbmV4cG9ydCBjbGFzcyBOZXRtZXJhVXNlciB7XG5cbiAgcHJpdmF0ZSB1c2VySWQ6IGFueTtcbiAgcHJpdmF0ZSBtc2lzZG46IGFueTtcbiAgcHJpdmF0ZSBlbWFpbDogYW55O1xuICBwcml2YXRlIHBhOiBhbnk7XG4gIHByaXZhdGUgcGI6IGFueTtcblxuICBzZXQgc2V0VXNlcklkKHZhbHVlOiBhbnkpIHsgdGhpcy51c2VySWQgPSB2YWx1ZTsgfVxuICBzZXQgc2V0RW1haWwodmFsdWU6IGFueSkgeyB0aGlzLmVtYWlsID0gdmFsdWU7IH1cbiAgc2V0IHNldE1zaXNkbih2YWx1ZTogYW55KSB7IHRoaXMubXNpc2RuID0gdmFsdWU7IH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykgeyB0aGlzLnBhID0gdmFsdWU7IH1cbiAgc2V0IHN1cm5hbWUodmFsdWU6IHN0cmluZykgeyB0aGlzLnBhID0gdmFsdWUgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0bWVyYUV2ZW50IHsgfSJdfQ==