export declare class ApplicationExcptions extends Error {
    status: number;
    constructor(message: string, status: number, cause?: unknown);
}
export declare class BadRequestExcption extends ApplicationExcptions {
    constructor(message: string, cause?: unknown);
}
export declare class ConflictExcption extends ApplicationExcptions {
    constructor(message: string, cause?: unknown);
}
export declare class NotFoundtExcption extends ApplicationExcptions {
    constructor(message: string, cause?: unknown);
}
//# sourceMappingURL=application.excptions.d.ts.map