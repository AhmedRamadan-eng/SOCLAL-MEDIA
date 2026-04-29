"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundtExcption = exports.ConflictExcption = exports.BadRequestExcption = exports.ApplicationExcptions = void 0;
class ApplicationExcptions extends Error {
    status;
    constructor(message, status, cause) {
        super(message, { cause });
        this.status = status;
        this.name = this.constructor.name;
    }
}
exports.ApplicationExcptions = ApplicationExcptions;
class BadRequestExcption extends ApplicationExcptions {
    constructor(message, cause) {
        super(message, 400, { cause });
    }
}
exports.BadRequestExcption = BadRequestExcption;
class ConflictExcption extends ApplicationExcptions {
    constructor(message, cause) {
        super(message, 409, { cause });
    }
}
exports.ConflictExcption = ConflictExcption;
class NotFoundtExcption extends ApplicationExcptions {
    constructor(message, cause) {
        super(message, 404, { cause });
    }
}
exports.NotFoundtExcption = NotFoundtExcption;
//# sourceMappingURL=application.excptions.js.map