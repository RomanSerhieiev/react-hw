import axios from "axios";
import {carUrl, jpUrl} from "../configs/urls";

export const axiosServiceCar = axios.create({ baseURL: carUrl });

export const axiosServiceJp = axios.create({ baseURL: jpUrl });