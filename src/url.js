import { PROD_URL, LOCAL_URL } from "./constants";

export const url = (env='local') => {
    let pathData = '';
    if (env === 'production') {
        pathData = PROD_URL;
    } else {
        pathData = LOCAL_URL;
    }
    return pathData;
}
