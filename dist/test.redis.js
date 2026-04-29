"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = void 0;
const redis_1 = require("redis");
const redis_client = (0, redis_1.createClient)({
    url: "rediss://default:gQAAAAAAAQ4oAAIncDJiNDNkMWJjYWUyNWM0ZmJhYTljN2Q0NDMwYjQwZDZmZnAyNjkxNjA@sharing-woodcock-69160.upstash.io:6379"
});
const connectRedis = async () => {
    await redis_client.connect();
};
exports.connectRedis = connectRedis;
//# sourceMappingURL=test.redis.js.map