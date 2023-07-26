import Db from "./Db";
import ServiceError from "./ServiceError";

interface HarperOptions {
    schema?: string;
}

const NO_SCHEMA_TOKEN = "NO_SCHEMA_PROVIDED";
const HARPER_SCHEMA = Db.schema;

const validateSchema = (schema: string | undefined) => {
    if(!schema) {
        throw new ServiceError({
            token: NO_SCHEMA_TOKEN
        });
    }
};

const prepareRawQuery = (query: string, options?: HarperOptions): string => {
    const schema = options?.schema ?? HARPER_SCHEMA;

    validateSchema(schema);

    const preparedQuery = query.replace(/schema/g, schema);

    return preparedQuery;
};

export const executeRawQuery = async (query: string, options?: HarperOptions) => {
    const rawQuery = prepareRawQuery(query, options);
    const result = await Db.client.query(rawQuery);
    return result;
};

export const insertRecords = async(table: string, records: Object[], options?: HarperOptions) => {
    const schema = options?.schema ?? HARPER_SCHEMA;
    validateSchema(schema);

    const insertedRecords = await Db.client.insert({
        table,
        records,
        schema
    });

    return insertedRecords?.data?.inserted_hashes;
};

export const updateRecords = async(table: string, records: Object[], options?: HarperOptions) => {
    const schema = options?.schema ?? HARPER_SCHEMA;
    validateSchema(schema);

    const updatedRecords = await Db.client.update({
        table,
        records,
        schema
    });

    return updatedRecords?.data?.update_hashes;
};

export const deleteRecords = async(table: string, hashValues: string[], options?: HarperOptions) => {
    const schema = options?.schema ?? HARPER_SCHEMA;
    validateSchema(schema);

    const deletedRecords = await Db.client.delete({
        table,
        hashValues,
        schema
    });

    return deletedRecords;
};

interface SearchByValueOptions extends HarperOptions {
    attributes?: string[];
}

export const searchByValue = async(table: string, criteria: {searchAttribute: string, searchValue: string}, options?: SearchByValueOptions) => {
    const schema = options?.schema ?? HARPER_SCHEMA;
    validateSchema(schema);

    const { searchAttribute, searchValue } = criteria;

    const attributes = options?.attributes?.length
        ? options.attributes
        : ["*"];

    const result = await Db.client.searchByValue({
        table,
        schema,
        searchAttribute,
        searchValue,
        attributes
    });

    return result?.data;
};
