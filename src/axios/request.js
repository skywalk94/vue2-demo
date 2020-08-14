import http from "./http";
const api_key = "apikey";

let sign;
if (process.env.NODE_ENV === "production") {
  sign = localStorage.getItem("wx_sign");
} else {
  sign = "17a1920fdc3c3c25d1bf7c6dd724f5cf";
}

const post = (url, data) => http.post(url, Object.assign({
    api_key: api_key,
    sign: sign
  },
  data
));

const get = (url, data) => http.get(url, Object.assign({
    api_key: api_key,
    sign: sign
  },
  data
));

/**
 * 四大学院
 * @param {*}
 */
const getClassSchedule = ({
    schedule_id,
    page,
    limit
  }) =>
  post("getClassSchedule", {
    schedule_id,
    page,
    limit
  });

export {
  getClassSchedule
};