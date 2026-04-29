"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasRepository = void 0;
class DatabasRepository {
    model;
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    create(data) {
        return this.model.create(data);
    }
    findOne(filter, select, populate) {
        console.log(select);
        let docs = this.model.findOne(filter);
        if (select) {
            docs = docs.select(select);
        }
        if (populate) {
            docs = docs.populate(populate);
        }
        return docs;
    }
}
exports.DatabasRepository = DatabasRepository;
//# sourceMappingURL=databes.reposataly.js.map