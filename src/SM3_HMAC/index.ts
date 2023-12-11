import { hmac } from "./hamc";
import { sm3 } from "./sm3";
const SM3_HMAC = (key: Uint8Array, msg: Uint8Array) => {
    return hmac(sm3, key, msg);
};
export { SM3_HMAC };
