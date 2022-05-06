export declare function createDB(): Promise<import("rxdb").RxDatabase<{
    [key: string]: import("rxdb").RxCollection<any, {}, {}, {}>;
}, import("rxdb").PouchStorageInternals, import("rxdb").PouchSettings>>;
