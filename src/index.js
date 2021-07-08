"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoxClient = exports.query = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const box_node_sdk_1 = require("box-node-sdk");
function query() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get('https://chao.yang.to');
        return response.data;
    });
}
exports.query = query;
function getBoxClient(token) {
    return box_node_sdk_1.getBasicClient(token);
}
exports.getBoxClient = getBoxClient;
//# sourceMappingURL=index.js.map