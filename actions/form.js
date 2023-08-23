import fetch from "isomorphic-fetch";
import { API } from "../config";

export const emailContactForm = (data) => {
  let emailEndpoint;

  if (data.authorEmail) {
    emailEndpoint = `${API}/contact-blog-author`;
  } else {
    emailEndpoint = `${API}/contact`;
  }

  return fetch(`${emailEndpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));

  //   let responseClone; // 1
  //   return fetch(`${emailEndpoint}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(function (response) {
  //       responseClone = response.clone(); // 2
  //       return response.json();
  //     })
  //     .catch((err) => console.log(err));
};
