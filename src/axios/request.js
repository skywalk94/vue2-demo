import http from "./http";
const api_key = "apikey";

let sign;
if (process.env.NODE_ENV === "production") {
  sign = localStorage.getItem("wx_sign");
} else {
  sign = "wxsign";
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

const getCarouselList = ({
    page,
    limit
  }) =>
  post("getCarouselList", {
    page,
    limit
  });

const getChapterList = id => post("getChapterList", {
  id
});

const getUserInfo = () => post("getUserInfo", {});

export {
  getCarouselList,
  getChapterList,
  getUserInfo
};