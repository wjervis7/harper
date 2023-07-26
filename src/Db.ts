import { Client } from "harperive";

export interface DbConfigurationOptions {
    host: string;
    username: string;
    password: string;
    schema: ""
};

class Db {
    private static _client: Client;

    static schema: string;

    static createClient(config: DbConfigurationOptions): void {
        this._client = new Client({
            token: "",
            harperHost: config.host,
            username: config.username,
            password: config.password,
            schema: config.schema
        });
    }

    static get client() {
        if(!this._client) {
            throw new Error("Client needs to be initiated; call DbClient.createClient first.");
        }

        return this._client;
    }
}

export default Db;
