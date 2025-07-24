import loginTest from "./default.js";
export { loginTest as default };

export const options = {
  stages: [
    { duration: "1m", target: 30 },
    { duration: "4m", target: 30 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(90)<3000", "max<5000"],
    http_req_failed: ["rate<0.01"],
  },
};
