declare class ServiceError extends Error {
    token: string;
    constructor(options: any);
}
export default ServiceError;
