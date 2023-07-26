interface HarperOptions {
    schema?: string;
}
export declare const executeRawQuery: (query: string, options?: HarperOptions) => Promise<any>;
export declare const insertRecords: (table: string, records: Object[], options?: HarperOptions) => Promise<any>;
export declare const updateRecords: (table: string, records: Object[], options?: HarperOptions) => Promise<any>;
export declare const deleteRecords: (table: string, hashValues: string[], options?: HarperOptions) => Promise<any>;
interface SearchByValueOptions extends HarperOptions {
    attributes?: string[];
}
export declare const searchByValue: (table: string, criteria: {
    searchAttribute: string;
    searchValue: string;
}, options?: SearchByValueOptions) => Promise<any>;
export {};
