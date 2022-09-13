const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjI1MDY1YmRiZmViYzQ5MTRkOTBhMmUyN2NiMDczYSIsInN1YiI6IjYzMWFiZDcxMDk3YzQ5MDA3ZmIzN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsuAYFv2MaOI0PKTB2a",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
