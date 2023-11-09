import { apiWithoutToken } from '../api-setting';

// url 轉換器
export const apiGetHeaderFooter = () => apiWithoutToken["get"]('/data/common.json');

export const apiGetIndex = () => apiWithoutToken["get"]('/data/index.json');