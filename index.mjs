// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@esm/index.mjs";function a(a,s,t){var o,f,d,e,i,n,m,b,c,j,l,p,h,u,v,x,y,g,k,q,w,z,A,B,C,D,E,F,G,H,I,J,K;if(n=(G=s[1])[4],m=G[3],b=G[2],c=G[1],j=G[0],!(n<=0||m<=0||b<=0||c<=0||j<=0))for(J=(I=r(a[0],s[0],G)).data,o=(H=I.strides)[4],f=H[3],d=H[2],e=H[1],i=H[0],K=a[1],q=0,v=0;v<j;v++){for(k=0,B=J[q],F=K[v],u=0;u<c;u++){for(g=0,A=B[k],E=F[u],h=0;h<b;h++){for(y=0,z=A[g],D=E[h],p=0;p<m;p++){for(x=0,w=z[y],C=D[p],l=0;l<n;l++)C[l]=t(w[x]),x+=o;y+=f}g+=d}k+=e}q+=i}}export{a as default};
//# sourceMappingURL=index.mjs.map
