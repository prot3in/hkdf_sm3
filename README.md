## About

A JavaScript library about the HDKF (HMAC-based Key Derivation Function) implemented with SM3.

## Install

```bash
npm install hkdf_sm3   ##use npm
yarn add hkdf_sm3      ##use yarn
pnpm install hkdf_sm3  ##use pnpm
```

## Usage

```js
//es6 module
import { HKDF } from "hdkf_sm3";
//or
import HKDF from "hdkf_sm3";

//commonjs
const { HKDF } = require("hkdf_sm3");

const ikm = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
const salt = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
const info = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
const length = 16;
HKDF(ikm, salt, info, length);
//Uint8Array(16) [235, 161, 114, 43, 215, 157, 61, 0, 30, 241, 88, 42,210, 63, 248, 218]
```

## Params

`function HKDF(key: Uint8Array, salt?: Uint8Array, info?: Uint8Array, length?: number): Uint8Array;`

| Param  | Type                    | Default                                | Description                     |
| ------ | ----------------------- | -------------------------------------- | ------------------------------- |
| ikm    | <code>Uint8Array</code> |                                        | Initial Keying Material         |
| salt   | <code>Uint8Array</code> | <code>Uint8Array(32) [0,...,0] </code> | Optional salt (recommended)     |
| info   | <code>Uint8Array</code> | <code>Uint8Array(0) [] </code>         | Optional context (safe to skip) |
| length | <code>intenger</code>   | <code> 32 </code>                      | Required byte length of output  |
