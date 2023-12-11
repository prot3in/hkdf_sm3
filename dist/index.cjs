"use strict";var x=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var V=(e,t)=>{for(var n in t)x(e,n,{get:t[n],enumerable:!0})},O=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of v(t))!F.call(e,o)&&o!==n&&x(e,o,{get:()=>t[o],enumerable:!(r=N(t,o))||r.enumerable});return e};var G=e=>O(x({},"__esModule",{value:!0}),e);var st={};V(st,{HKDF:()=>L,default:()=>rt});module.exports=G(st);var j=e=>e instanceof Uint8Array;var A=e=>new DataView(e.buffer,e.byteOffset,e.byteLength);var P=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!P)throw new Error("Non little-endian hardware is not supported");var it=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function K(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function d(e){if(typeof e=="string"&&(e=K(e)),!j(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}var m=class{clone(){return this._cloneInto()}};function k(e){let t=r=>e().update(d(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}var g=class extends m{oHash;iHash;blockLen;outputLen;finished=!1;destroyed=!1;constructor(t,n){super();let r=d(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let o=this.blockLen,i=new Uint8Array(o);i.set(r.length>o?t.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return this.iHash.update(t),this}digestInto(t){this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||=Object.create(Object.getPrototypeOf(this),{});let{oHash:n,iHash:r,finished:o,destroyed:i,blockLen:s,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},U=(e,t,n)=>new g(e,t).update(n).digest();U.create=(e,t)=>new g(e,t);var R=(e,t,n)=>e&t|e&n|t&n,B=(e,t,n)=>e^t^n,$=(e,t,n)=>e&t|~e&n;function q(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);let o=BigInt(32),i=BigInt(4294967295),s=Number(n>>o&i),u=Number(n&i),c=r?4:0,h=r?0:4;e.setUint32(t+c,s,r),e.setUint32(t+h,u,r)}function p(e,t){let n=t&31;return e<<n|e>>>32-n}function W(e){return e^p(e,9)^p(e,17)}function z(e){return e^p(e,15)^p(e,23)}var y=new Uint32Array([1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214]),f=new Uint32Array(68),E=new Uint32Array(64),J=2043430169,Q=2055708042,H=class{A=y[0]|0;B=y[1]|0;C=y[2]|0;D=y[3]|0;E=y[4]|0;F=y[5]|0;G=y[6]|0;H=y[7]|0;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;blockLen;outputLen;padOffset;isLE;constructor(){this.blockLen=64,this.outputLen=32,this.padOffset=8,this.isLE=!1,this.buffer=new Uint8Array(this.blockLen),this.view=A(this.buffer)}get(){let{A:t,B:n,C:r,D:o,E:i,F:s,G:u,H:c}=this;return[t,n,r,o,i,s,u,c]}set(t,n,r,o,i,s,u,c){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=u|0,this.H=c|0}process(t,n){for(let a=0;a<16;a++,n+=4)f[a]=t.getUint32(n,!1);for(let a=16;a<68;a++)f[a]=z(f[a-16]^f[a-9]^p(f[a-3],15))^p(f[a-13],7)^f[a-6];for(let a=0;a<64;a++)E[a]=f[a]^f[a+4];let{A:r,B:o,C:i,D:s,E:u,F:c,G:h,H:l}=this;for(let a=0;a<64;a++){let w=a>=0&&a<=15,_=w?J:Q,I=p(p(r,12)+u+p(_,a),7),M=I^p(r,12),S=(w?B(r,o,i):R(r,o,i))+s+M+E[a]|0,D=(w?B(u,c,h):$(u,c,h))+l+I+f[a]|0;s=i,i=p(o,9),o=r,r=S,l=h,h=p(c,19),c=u,u=W(D)}r=r^this.A|0,o=o^this.B|0,i=i^this.C|0,s=s^this.D|0,u=u^this.E|0,c=c^this.F|0,h=h^this.G|0,l=l^this.H|0,this.set(r,o,i,s,u,c,h,l)}roundClean(){f.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}update(t){let{view:n,buffer:r,blockLen:o}=this;t=d(t);let i=t.length;for(let s=0;s<i;){let u=Math.min(o-this.pos,i-s);if(u===o){let c=A(t);for(;o<=i-s;s+=o)this.process(c,s);continue}r.set(t.subarray(s,s+u),this.pos),this.pos+=u,s+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:i}=this,{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(r,0),s=0);for(let a=s;a<o;a++)n[a]=0;q(r,o-8,BigInt(this.length*8),i),this.process(r,0);let u=A(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let h=c/4,l=this.get();if(h>l.length)throw new Error("_sha2: outputLen bigger than state");for(let a=0;a<h;a++)u.setUint32(4*a,l[a],i)}digest(){let{buffer:t,outputLen:n}=this;this.digestInto(t);let r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||=new this.constructor,t.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:i,destroyed:s,pos:u}=this;return t.length=o,t.pos=u,t.finished=i,t.destroyed=s,o%n&&t.buffer.set(r),t}clone(){return this._cloneInto()}},C=k(()=>new H);var T=(e,t)=>U(C,e,t);var b=32;function Y(e,t){return T(t,e)}function Z(e,t,n=32){let r=new Uint8Array(b+t.length+1),o=Math.ceil(n/b),i=new Uint8Array(o*b);for(let s=0;s<o;s++)r.set(t,b),r.set([s+1],r.length-1),r.set(T(e,s==0?r.slice(b):r)),i.set(r.slice(0,b),s*b);return i.slice(0,n)}function L(e,t,n,r=32){t||(t=new Uint8Array(b).fill(0)),n||(n=new Uint8Array([]));let o=Y(e,t);return Z(o,n,r)}var X=new Uint8Array([1,2,3,4,5,6,7,8]),tt=new Uint8Array([1,2,3,4,5,6,7,8]),et=new Uint8Array([1,2,3,4,5,6,7,8]),nt=16;console.log(L(X,tt,et,nt));var rt=L;
