"use strict";var L=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var K=L(function(Q,J){
var M=require('@stdlib/array-base-broadcast-array/dist');function N(i,r,s){var A,g,h,k,l,f,u,y,j,n,t,x,o,d,e,S,c,b,q,m,w,z,B,C,D,E,F,G,a,v,p,H,I;if(a=r[1],f=a[4],u=a[3],y=a[2],j=a[1],n=a[0],!(f<=0||u<=0||y<=0||j<=0||n<=0))for(p=M(i[0],r[0],a),H=p.data,v=p.strides,A=v[4],g=v[3],h=v[2],k=v[1],l=v[0],I=i[1],m=0,e=0;e<n;e++){for(q=0,C=H[m],G=I[e],d=0;d<j;d++){for(b=0,B=C[q],F=G[d],o=0;o<y;o++){for(c=0,z=B[b],E=F[o],x=0;x<u;x++){for(S=0,w=z[c],D=E[x],t=0;t<f;t++)D[t]=s(w[S]),S+=A;c+=g}b+=h}q+=k}m+=l}}J.exports=N
});var O=K();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
