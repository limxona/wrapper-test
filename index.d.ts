import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare class NetmeraPluginOriginal extends IonicNativePlugin {
    start(netmeraKey: string, fcmKey: string, baseUrl?: string): void;
    requestPushNotificationAuthorization(): void;
    subscribePushNotification(): Observable<NetmeraPush>;
    subscribeOpenUrl(): Observable<string>;
    subscribePushClick(): Observable<NetmeraPush>;
    subscribePushButtonClick(): Observable<NetmeraPush>;
    sendEvent(event: NetmeraEvent): void;
    fetchInboxUsingFilter(filter: NetmeraInboxFilter): Promise<NetmeraInbox>;
    fetchNextPage(): Promise<NetmeraInbox>;
    countForStatus(status: NetmeraPushStatus): Promise<number>;
    updatePushStatus(index: number, length: number, status: NetmeraPushStatus): Promise<boolean>;
    updateUser(user: NetmeraUser): void;
    requestLocationAuthorization(): void;
}
export interface NetmeraInboxFilter {
    status?: number;
    pageSize?: number;
    categories?: string[];
    includeExpiredObjects?: boolean;
}
export interface NetmeraPush {
    title: string;
    subtitle: string;
    body: string;
    pushId: string;
    pushInstanceId: string;
    pushType: number;
    inboxStatus: number;
    sendDate: any;
    deeplinkUrl: string;
}
export interface NetmeraInbox {
    hasNextPage: boolean;
    inbox: NetmeraPush[];
}
export declare enum NetmeraPushStatus {
    undefiend = 0,
    read = 1,
    unread = 2,
    readAndUnread = 3,
    deleted = 4,
    all = 7
}
export declare class NetmeraUser {
    private userId;
    private msisdn;
    private email;
    private pa;
    private pb;
    set setUserId(value: any);
    set setEmail(value: any);
    set setMsisdn(value: any);
    set name(value: string);
    set surname(value: string);
}
export declare class NetmeraEvent {
}

export declare const NetmeraPlugin: NetmeraPluginOriginal;