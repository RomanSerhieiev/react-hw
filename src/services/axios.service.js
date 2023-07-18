import axios from "axios";
import {baseCarsUrl, baseJpUrl} from "../configs/urls";

export const axiosServiceCar = axios.create({ baseURL: baseCarsUrl });

export const axiosServiceJp = axios.create({ baseURL: baseJpUrl });