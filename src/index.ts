import { SM3_HMAC } from "./SM3_HMAC";

const HASH_LEN = 32; // 256bit, 32bytes.
function HKDF_EXTRACT(ikm: Uint8Array, salt: Uint8Array) {
    return SM3_HMAC(salt, ikm);
}

function HKDF_EXPAND(prk: Uint8Array, info: Uint8Array, length: number = 32) {
    let t = new Uint8Array(HASH_LEN + info.length + 1);
    let N = Math.ceil(length / HASH_LEN);
    let okm = new Uint8Array(N * HASH_LEN);
    for (let i = 0; i < N; i++) {
        t.set(info, HASH_LEN);
        t.set([i + 1], t.length - 1);
        t.set(SM3_HMAC(prk, i == 0 ? t.slice(HASH_LEN) : t));
        okm.set(t.slice(0, HASH_LEN), i * HASH_LEN);
    }
    return okm.slice(0, length);
}

function HKDF(
    ikm: Uint8Array,
    salt?: Uint8Array,
    info?: Uint8Array,
    length: number = 32
) {
    if (!salt) {
        salt = new Uint8Array(HASH_LEN).fill(0);
    }
    if (!info) {
        info = new Uint8Array([]);
    }
    const prk = HKDF_EXTRACT(ikm, salt);
    const okm = HKDF_EXPAND(prk, info, length);
    return okm;
}

export { HKDF };
export default HKDF;
