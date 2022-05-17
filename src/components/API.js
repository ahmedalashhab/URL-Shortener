import axios from "axios";

const getShortLink = async (link) => {
  return await axios
    .post(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
