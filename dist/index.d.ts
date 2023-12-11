declare function HKDF(ikm: Uint8Array, salt?: Uint8Array, info?: Uint8Array, length?: number): Uint8Array;
export { HKDF };
export default HKDF;
