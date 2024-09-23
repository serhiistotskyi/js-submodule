import axios from "axios";

export function request(url) {
    return axios.get(url);
}
