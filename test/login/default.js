import http from "k6/http";
import { check } from "k6";
import { pegarBaseURL } from '../../utils/variaveis.js';
const postLogin = JSON.parse(open("../../fixtures/postLogin.json"));

export default function () {
  const url = pegarBaseURL() + "/login";
  const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);
  check(res, {
    "Status é 200": (r) => r.status === 200,
    "Token é string": (r) => typeof r.json().token === "string",
  });
}
