import { Client } from "harperive";
export interface DbConfigurationOptions {
    host: string;
    username: string;
    password: string;
    schema: "";
}
declare class Db {
    private static _client;
    static schema: string;
    static createClient(config: DbConfigurationOptions): void;
    static get client(): Client;
}
export default Db;
