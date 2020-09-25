import {http} from "./http";

function getMovieList(params) {
  return http.get("/api/home/topRatedMovies",params);
}

function getMovieItem(params) {
  return http.post("/api/home/movieOnInfoList",params);
}

function getLoadList(param) {
  return http.post("/api/home/moreComingList",param);
}

function getMovieById(id) {
  return http.get("/api/detail/info",id);
}

function getCinema(params) {
  return http.get("/api/cinema/list",params);
}

export {getMovieList,getMovieItem,getLoadList,getMovieById,getCinema}