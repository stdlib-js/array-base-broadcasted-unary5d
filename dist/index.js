"use strict";var L=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var J=L(function(Q,I){
var M=require('@stdlib/array-base-broadcast-array/dist');function N(i,r,K){var p,A,g,h,k,s,f,u,y,j,t,x,o,d,e,n,S,c,b,q,l,w,z,B,C,D,E,F,a,v,m,G,H;if(a=r[1],s=a[4],f=a[3],u=a[2],y=a[1],j=a[0],!(s<=0||f<=0||u<=0||y<=0||j<=0))for(m=M(i[0],r[0],a),G=m.data,v=m.strides,p=v[4],A=v[3],g=v[2],h=v[1],k=v[0],H=i[1],q=0,e=0;e<j;e++){for(b=0,B=G[q],F=H[e],d=0;d<y;d++){for(c=0,z=B[b],E=F[d],o=0;o<u;o++){for(S=0,w=z[c],D=E[o],x=0;x<f;x++){for(n=0,l=w[S],C=D[x],t=0;t<s;t++)C[t]=K(l[n]),n+=p;S+=A}c+=g}b+=h}q+=k}}I.exports=N
});var O=J();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
