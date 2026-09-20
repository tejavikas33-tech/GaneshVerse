(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const al="180",Jf=0,Xl=1,Qf=2,_u=1,vu=2,ci=3,Mi=0,Qt=1,Nt=2,Fi=0,Ds=1,dc=2,Yl=3,ql=4,ep=5,ts=100,tp=101,np=102,ip=103,sp=104,rp=200,op=201,ap=202,cp=203,hc=204,uc=205,lp=206,dp=207,hp=208,up=209,fp=210,pp=211,mp=212,gp=213,_p=214,fc=0,pc=1,mc=2,Gs=3,gc=4,_c=5,vc=6,xc=7,xu=0,vp=1,xp=2,Oi=0,Mp=1,yp=2,Sp=3,cl=4,Ep=5,wp=6,bp=7,jl="attached",Tp="detached",Mu=300,zs=301,Hs=302,Mc=303,yc=304,ia=306,Gi=1e3,Yn=1001,Bo=1002,en=1003,yu=1004,pr=1005,pn=1006,Ao=1007,pi=1008,Kn=1009,Su=1010,Eu=1011,Cr=1012,ll=1013,cs=1014,kn=1015,Gr=1016,dl=1017,hl=1018,Pr=1020,wu=35902,bu=35899,Tu=1021,Au=1022,Sn=1023,Ir=1026,Lr=1027,ul=1028,fl=1029,Ru=1030,pl=1031,ml=1033,Ro=33776,Co=33777,Po=33778,Io=33779,Sc=35840,Ec=35841,wc=35842,bc=35843,Tc=36196,Ac=37492,Rc=37496,Cc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,Fc=37815,Oc=37816,Bc=37817,kc=37818,Gc=37819,zc=37820,Hc=37821,Vc=36492,Wc=36494,Xc=36495,Yc=36283,qc=36284,jc=36285,Kc=36286,Dr=2300,Nr=2301,_a=2302,Kl=2400,$l=2401,Zl=2402,Ap=2500,Rp=0,Cu=1,$c=2,Cp=3200,Pp=3201,Pu=0,Ip=1,Di="",Vt="srgb",tn="srgb-linear",ko="linear",St="srgb",fs=7680,Jl=519,Lp=512,Dp=513,Np=514,Iu=515,Up=516,Fp=517,Op=518,Bp=519,Zc=35044,Ql="300 es",qn=2e3,Go=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const gr=Math.PI/180,Vs=180/Math.PI;function Gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function gl(s,e){return(s%e+e)%e}function kp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Gp(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function zp(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function Hp(s,e=1){return e-Math.abs(gl(s,e*2)-e)}function Vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Yp(s,e){return s+Math.random()*(e-s)}function qp(s){return s*(.5-Math.random())}function jp(s){s!==void 0&&(ed=s);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(s){return s*gr}function $p(s){return s*Vs}function Zp(s){return(s&s-1)===0&&s!==0}function Jp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function em(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*d,c*h,c*u,a*l);break;case"YZY":s.set(c*u,a*d,c*h,a*l);break;case"ZXZ":s.set(c*h,c*u,a*d,a*l);break;case"XZX":s.set(a*d,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*d,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:gr,RAD2DEG:Vs,generateUUID:Gn,clamp:nt,euclideanModulo:gl,mapLinear:kp,inverseLerp:Gp,lerp:_r,damp:zp,pingpong:Hp,smoothstep:Vp,smootherstep:Wp,randInt:Xp,randFloat:Yp,randFloatSpread:qp,seededRandom:jp,degToRad:Kp,radToDeg:$p,isPowerOfTwo:Zp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:em,normalize:_t,denormalize:Un};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==u||l!==f||d!==g){let m=1-a;const p=c*u+l*f+d*g+h*_,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const P=Math.sqrt(w),A=Math.atan2(P,p*T);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const M=a*T;if(c=c*m+u*M,l=l*m+f*M,d=d*m+g*M,h=h*m+_*M,m===1-a){const P=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=P,l*=P,d*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-a*f,e[t+2]=l*g+d*f+a*u-c*h,e[t+3]=d*g-a*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),h=a(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+i*l-r*c,this._y=i*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*d,this.y=n+c*d+a*l-r*h,this.z=i+c*h+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new C,td=new Hi;class Je{constructor(e,t,n,i,r,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],w=i[4],M=i[7],P=i[2],A=i[5],R=i[8];return r[0]=o*_+a*T+c*P,r[3]=o*m+a*w+c*A,r[6]=o*p+a*M+c*R,r[1]=l*_+d*T+h*P,r[4]=l*m+d*w+h*A,r[7]=l*p+d*M+h*R,r[2]=u*_+f*T+g*P,r[5]=u*m+f*w+g*A,r[8]=u*p+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=d*o-a*l,u=a*c-d*r,f=l*r-o*c,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-d*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(d*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Je;function Lu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tm(){const s=Ur("canvas");return s.style.display="block",s}const nd={};function Fr(s){s in nd||(nd[s]=!0,console.warn(s))}function nm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const id=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function im(){const s={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[tn]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}const at=im();function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class sm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Ur("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rm=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ma(i[o].image)):r.push(Ma(i[o]))}else r=Ma(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ma(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;const ya=new C;class Ot extends $s{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Yn,i=Yn,r=pn,o=pi,a=Sn,c=Kn,l=Ot.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Gn(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Mu;Ot.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(f+1)/2,P=(p+1)/2,A=(d+u)/4,R=(h+_)/4,N=(g+m)/4;return w>M&&w>P?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=R/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=N/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=N/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(u-d)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class am extends $s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ot(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends am{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Du extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),$r.subVectors(this.max,ir),ms.subVectors(e.a,ir),gs.subVectors(e.b,ir),_s.subVectors(e.c,ir),Ei.subVectors(gs,ms),wi.subVectors(_s,gs),Wi.subVectors(ms,_s);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!Sa(t,ms,gs,_s,$r)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,ms,gs,_s,$r))?!1:(Zr.crossVectors(Ei,wi),t=[Zr.x,Zr.y,Zr.z],Sa(t,ms,gs,_s,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,Kr=new yi,ms=new C,gs=new C,_s=new C,Ei=new C,wi=new C,Wi=new C,ir=new C,$r=new C,Zr=new C,Xi=new C;function Sa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xi.fromArray(s,r);const a=i.x*Math.abs(Xi.x)+i.y*Math.abs(Xi.y)+i.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),d=n.dot(Xi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const lm=new yi,sr=new C,Ea=new C;class Qn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Ea)),this.expandByPoint(sr.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new C,wa=new C,Jr=new C,bi=new C,ba=new C,Qr=new C,Ta=new C;class zr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=bi.dot(this.direction),c=-bi.dot(Jr),l=bi.lengthSq(),d=Math.abs(1-o*o);let h,u,f,g;if(d>0)if(h=o*c-a,u=o*a-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wa).addScaledVector(Jr,u),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,r){ba.subVectors(t,e),Qr.subVectors(n,e),Ta.crossVectors(ba,Qr);let o=this.direction.dot(Ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const c=a*this.direction.dot(Qr.crossVectors(bi,Qr));if(c<0)return null;const l=a*this.direction.dot(ba.cross(bi));if(l<0||c+l>o)return null;const d=-a*bi.dot(Ta);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,r,o,a,c,l,d,h,u,f,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,d,h,u,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,d,h,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,f=o*h,g=a*d,_=a*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,_=l*h;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,_=l*h;t[0]=u-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,f=o*h,g=a*d,_=a*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*h,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+_,t[5]=o*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,hm)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ti.crossVectors(n,hn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ti.crossVectors(n,hn)),Ti.normalize(),eo.crossVectors(hn,Ti),i[0]=Ti.x,i[4]=eo.x,i[8]=hn.x,i[1]=Ti.y,i[5]=eo.y,i[9]=hn.y,i[2]=Ti.z,i[6]=eo.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],w=n[7],M=n[11],P=n[15],A=i[0],R=i[4],N=i[8],S=i[12],E=i[1],U=i[5],O=i[9],H=i[13],K=i[2],X=i[6],$=i[10],ie=i[14],W=i[3],ue=i[7],ge=i[11],Ee=i[15];return r[0]=o*A+a*E+c*K+l*W,r[4]=o*R+a*U+c*X+l*ue,r[8]=o*N+a*O+c*$+l*ge,r[12]=o*S+a*H+c*ie+l*Ee,r[1]=d*A+h*E+u*K+f*W,r[5]=d*R+h*U+u*X+f*ue,r[9]=d*N+h*O+u*$+f*ge,r[13]=d*S+h*H+u*ie+f*Ee,r[2]=g*A+_*E+m*K+p*W,r[6]=g*R+_*U+m*X+p*ue,r[10]=g*N+_*O+m*$+p*ge,r[14]=g*S+_*H+m*ie+p*Ee,r[3]=T*A+w*E+M*K+P*W,r[7]=T*R+w*U+M*X+P*ue,r[11]=T*N+w*O+M*$+P*ge,r[15]=T*S+w*H+M*ie+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*u+n*l*u+i*a*f-n*c*f)+_*(+t*c*f-t*l*u+r*o*u-i*o*f+i*l*d-r*c*d)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*d-n*l*d)+p*(-i*a*d-t*c*h+t*a*u+i*o*h-n*o*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*l-_*u*l+_*c*f-a*m*f-h*c*p+a*u*p,w=g*u*l-d*m*l-g*c*f+o*m*f+d*c*p-o*u*p,M=d*_*l-g*h*l+g*a*f-o*_*f-d*a*p+o*h*p,P=g*h*c-d*_*c-g*a*u+o*_*u+d*a*m-o*h*m,A=t*T+n*w+i*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=T*R,e[1]=(_*u*r-h*m*r-_*i*f+n*m*f+h*i*p-n*u*p)*R,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(h*c*r-a*u*r-h*i*l+n*u*l+a*i*f-n*c*f)*R,e[4]=w*R,e[5]=(d*m*r-g*u*r+g*i*f-t*m*f-d*i*p+t*u*p)*R,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*u*r-d*c*r+d*i*l-t*u*l-o*i*f+t*c*f)*R,e[8]=M*R,e[9]=(g*h*r-d*_*r-g*n*f+t*_*f+d*n*p-t*h*p)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(d*a*r-o*h*r-d*n*l+t*h*l+o*n*f-t*a*f)*R,e[12]=P*R,e[13]=(d*_*i-g*h*i+g*n*u-t*_*u-d*n*m+t*h*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*h*i-d*a*i+d*n*c-t*h*c-o*n*u+t*a*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,h=a+a,u=r*l,f=r*d,g=r*h,_=o*d,m=o*h,p=a*h,T=c*l,w=c*d,M=c*h,P=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+M)*P,i[2]=(g-w)*P,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(u+p))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+w)*R,i[9]=(m-T)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vs.set(i[0],i[1],i[2]).length();const o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Cn.copy(this);const l=1/r,d=1/o,h=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=qn,c=!1){const l=this.elements,d=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Go)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=qn,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===qn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Go)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new C,Cn=new $e,dm=new C(0,0,0),hm=new C(1,1,1),Ti=new C,eo=new C,hn=new C,rd=new $e,od=new Hi;class $n{constructor(e=0,t=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let um=0;const ad=new C,xs=new Hi,si=new $e,to=new C,rr=new C,fm=new C,pm=new Hi,cd=new C(1,0,0),ld=new C(0,1,0),dd=new C(0,0,1),hd={type:"added"},mm={type:"removed"},Ms={type:"childadded",child:null},Aa={type:"childremoved",child:null};class At extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new C,t=new $n,n=new Hi,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(cd,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cd,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(rr,to,this.up):si.lookAt(to,rr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(si),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mm),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new C(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new C,ri=new C,Ra=new C,oi=new C,ys=new C,Ss=new C,ud=new C,Ca=new C,Pa=new C,Ia=new C,La=new pt,Da=new pt,Na=new pt;class Fn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pn.subVectors(i,t),ri.subVectors(n,t),Ra.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ri),c=Pn.dot(Ra),l=ri.dot(ri),d=ri.dot(Ra),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-a*d)*u,g=(o*d-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return La.setScalar(0),Da.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),ri.subVectors(e,t),Pn.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ys.subVectors(i,n),Ss.subVectors(r,n),Ca.subVectors(e,n);const c=ys.dot(Ca),l=Ss.dot(Ca);if(c<=0&&l<=0)return t.copy(n);Pa.subVectors(e,i);const d=ys.dot(Pa),h=Ss.dot(Pa);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(ys,o);Ia.subVectors(e,r);const f=ys.dot(Ia),g=Ss.dot(Ia);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ss,a);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return ud.subVectors(r,i),a=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(ud,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ua(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=gl(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ua(o,r,e+1/3),this.g=Ua(o,r,e),this.b=Ua(o,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return at.workingToColorSpace(Xt.copy(this),e),Math.round(nt(Xt.r*255,0,255))*65536+Math.round(nt(Xt.g*255,0,255))*256+Math.round(nt(Xt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Vt){at.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(no);const n=_r(Ai.h,no.h,t),i=_r(Ai.s,no.s,t),r=_r(Ai.l,no.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new qe;qe.NAMES=Nu;let gm=0;class jn extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Ds,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rt extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new C,io=new De;let _m=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Uu extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fu extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vm=0;const vn=new $e,Fa=new At,Es=new C,un=new yi,or=new yi,zt=new C;class Gt extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Fu:Uu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(un.min,or.min),un.expandByPoint(zt),zt.addVectors(un.max,or.max),un.expandByPoint(zt)):(un.expandByPoint(or.min),un.expandByPoint(or.max))}un.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)zt.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(e,l),zt.add(Es)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new C,c[N]=new C;const l=new C,d=new C,h=new C,u=new De,f=new De,g=new De,_=new C,m=new C;function p(N,S,E){l.fromBufferAttribute(n,N),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),u.fromBufferAttribute(r,N),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(U),a[N].add(_),a[S].add(_),a[E].add(_),c[N].add(m),c[S].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,S=T.length;N<S;++N){const E=T[N],U=E.start,O=E.count;for(let H=U,K=U+O;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new C,M=new C,P=new C,A=new C;function R(N){P.fromBufferAttribute(i,N),A.copy(P);const S=a[N];w.copy(S),w.sub(P.multiplyScalar(P.dot(S))).normalize(),M.crossVectors(A,S);const U=M.dot(c[N])<0?-1:1;o.setXYZW(N,w.x,w.y,w.z,U)}for(let N=0,S=T.length;N<S;++N){const E=T[N],U=E.start,O=E.count;for(let H=U,K=U+O;H<K;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,d=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,h=a.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new qt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fd=new $e,Yi=new zr,so=new Qn,pd=new C,ro=new C,oo=new C,ao=new C,Oa=new C,co=new C,md=new C,lo=new C;class I extends At{constructor(e=new Gt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],h=r[c];d!==0&&(Oa.fromBufferAttribute(h,e),o?co.addScaledVector(Oa,d):co.addScaledVector(Oa.sub(t),d))}t.add(co)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(so.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(so,pd)===null||Yi.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(fd.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,P=w;M<P;M+=3){const A=a.getX(M),R=a.getX(M+1),N=a.getX(M+2);i=ho(this,p,e,n,l,d,h,A,R,N),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);i=ho(this,o,e,n,l,d,h,T,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,P=w;M<P;M+=3){const A=M,R=M+1,N=M+2;i=ho(this,p,e,n,l,d,h,A,R,N),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,w=m+1,M=m+2;i=ho(this,o,e,n,l,d,h,T,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function xm(s,e,t,n,i,r,o,a){let c;if(e.side===Qt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Mi,a),c===null)return null;lo.copy(a),lo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:s}}function ho(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ro),s.getVertexPosition(c,oo),s.getVertexPosition(l,ao);const d=xm(s,e,t,n,ro,oo,ao,md);if(d){const h=new C;Fn.getBarycoord(md,ro,oo,ao,h),i&&(d.uv=Fn.getInterpolatedAttribute(i,a,c,l,h,new De)),r&&(d.uv1=Fn.getInterpolatedAttribute(r,a,c,l,h,new De)),o&&(d.normal=Fn.getInterpolatedAttribute(o,a,c,l,h,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new C,materialIndex:0};Fn.getNormal(ro,oo,ao,u.normal),d.face=u,d.barycoord=h}return d}class ze extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function g(_,m,p,T,w,M,P,A,R,N,S){const E=M/R,U=P/N,O=M/2,H=P/2,K=A/2,X=R+1,$=N+1;let ie=0,W=0;const ue=new C;for(let ge=0;ge<$;ge++){const Ee=ge*U-H;for(let Oe=0;Oe<X;Oe++){const Qe=Oe*E-O;ue[_]=Qe*T,ue[m]=Ee*w,ue[p]=K,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=A>0?1:-1,d.push(ue.x,ue.y,ue.z),h.push(Oe/R),h.push(1-ge/N),ie+=1}}for(let ge=0;ge<N;ge++)for(let Ee=0;Ee<R;Ee++){const Oe=u+Ee+X*ge,Qe=u+Ee+X*(ge+1),je=u+(Ee+1)+X*(ge+1),Ke=u+(Ee+1)+X*ge;c.push(Oe,Qe,Ke),c.push(Qe,je,Ke),W+=6}a.addGroup(f,W,S),f+=W,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const n=Ws(s[t]);for(const i in n)e[i]=n[i]}return e}function Mm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ou(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const ym={clone:Ws,merge:$t};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new C,gd=new De,_d=new De;class Yt extends Bu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,gd,_d),t.subVectors(_d,gd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,bs=1;class wm extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(ws,bs,e,t);i.layers=this.layers,this.add(i);const r=new Yt(ws,bs,e,t);r.layers=this.layers,this.add(r);const o=new Yt(ws,bs,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ws,bs,e,t);a.layers=this.layers,this.add(a);const c=new Yt(ws,bs,e,t);c.layers=this.layers,this.add(c);const l=new Yt(ws,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ku extends Ot{constructor(e=[],t=zs,n,i,r,o,a,c,l,d){super(e,t,n,i,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bm extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ku(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ze(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Fi});r.uniforms.tEquirect.value=t;const o=new I(i,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=pn),new wm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ne extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new xl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gu extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Am{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new C;class Ml{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vd=new C,xd=new pt,Md=new pt,Rm=new C,yd=new $e,uo=new C,ka=new Qn,Sd=new $e,Ga=new zr;class Cm extends I{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),e.ray.intersectsSphere(ka)!==!1&&(Sd.copy(i).invert(),Ga.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,e),Md.fromBufferAttribute(i.attributes.skinWeight,e),vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Md.getComponent(r);if(o!==0){const a=xd.getComponent(r);yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rm.copy(vd).applyMatrix4(yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zu extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hu extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,c,l=en,d=en,h,u){super(null,o,a,c,l,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new $e,Pm=new $e;class yl{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Pm;Ed.multiplyMatrices(a,t[r]),Ed.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hu(t,e,e,Sn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zu),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Jc extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new $e,wd=new $e,fo=[],bd=new yi,Im=new $e,ar=new I,cr=new Qn;class Lm extends I{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Im)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),bd.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(bd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),cr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),wd.multiplyMatrices(n,Ts),ar.matrixWorld=wd,ar.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const c=fo[o];c.instanceId=r,c.object=this,t.push(c)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hu(new Float32Array(i*this.count),i,this.count,ul,kn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new C,Dm=new C,Nm=new Je;class Zi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=za.subVectors(n,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nm.getNormalMatrix(e),i=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Qn,Um=new De(.5,.5),po=new C;class Sl{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],w=r[13],M=r[14],P=r[15];if(i[0].setComponents(l-o,f-d,p-g,P-T).normalize(),i[1].setComponents(l+o,f+d,p+g,P+T).normalize(),i[2].setComponents(l+a,f+h,p+_,P+w).normalize(),i[3].setComponents(l-a,f-h,p-_,P-w).normalize(),n)i[4].setComponents(c,u,m,M).normalize(),i[5].setComponents(l-c,f-u,p-m,P-M).normalize();else if(i[4].setComponents(l-c,f-u,p-m,P-M).normalize(),t===qn)i[5].setComponents(l+c,f+u,p+m,P+M).normalize();else if(t===Go)i[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const t=Um.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(po.x=i.normal.x>0?e.max.x:e.min.x,po.y=i.normal.y>0?e.max.y:e.min.y,po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class El extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new C,Ho=new C,Td=new $e,lr=new zr,mo=new Qn,Ha=new C,Ad=new C;class sa extends At{constructor(e=new Gt,t=new El){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)zo.fromBufferAttribute(t,i-1),Ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zo.distanceTo(Ho);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Td.copy(i).invert(),lr.copy(e.ray).applyMatrix4(Td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=d.getX(_),T=d.getX(_+1),w=go(this,e,lr,c,p,T,_);w&&t.push(w)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(f),p=go(this,e,lr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=go(this,e,lr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=go(this,e,lr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(zo.fromBufferAttribute(a,i),Ho.fromBufferAttribute(a,r),t.distanceSqToSegment(zo,Ho,Ha,Ad)>n)return;Ha.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ha);if(!(l<e.near||l>e.far))return{distance:l,point:Ad.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Rd=new C,Cd=new C;class Fm extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rd.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rd.distanceTo(Cd);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Om extends sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wl extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pd=new $e,Qc=new zr,_o=new Qn,vo=new C;class Vu extends At{constructor(e=new Gt,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Pd.copy(i).invert(),Qc.copy(e.ray).applyMatrix4(Pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);vo.fromBufferAttribute(h,m),Id(vo,m,c,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,_=f;g<_;g++)vo.fromBufferAttribute(h,g),Id(vo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Id(s,e,t,n,i,r,o){const a=Qc.distanceSqToPoint(s);if(a<t){const c=new C;Qc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Bi extends Ot{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wu extends Ot{constructor(e,t,n=cs,i,r,o,a=en,c=en,l,d=Ir,h=1){if(d!==Ir&&d!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xu extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ra extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new C,d=new De;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Te extends Gt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function T(){const M=new C,P=new C;let A=0;const R=(t-e)/n;for(let N=0;N<=r;N++){const S=[],E=N/r,U=E*(t-e)+e;for(let O=0;O<=i;O++){const H=O/i,K=H*c+a,X=Math.sin(K),$=Math.cos(K);P.x=U*X,P.y=-E*n+m,P.z=U*$,h.push(P.x,P.y,P.z),M.set(X,R,$).normalize(),u.push(M.x,M.y,M.z),f.push(H,1-E),S.push(g++)}_.push(S)}for(let N=0;N<i;N++)for(let S=0;S<r;S++){const E=_[S][N],U=_[S+1][N],O=_[S+1][N+1],H=_[S][N+1];(e>0||S!==0)&&(d.push(E,U,H),A+=3),(t>0||S!==r-1)&&(d.push(U,O,H),A+=3)}l.addGroup(p,A,0),p+=A}function w(M){const P=g,A=new De,R=new C;let N=0;const S=M===!0?e:t,E=M===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*E,0),u.push(0,E,0),f.push(.5,.5),g++;const U=g;for(let O=0;O<=i;O++){const K=O/i*c+a,X=Math.cos(K),$=Math.sin(K);R.x=S*$,R.y=m*E,R.z=S*X,h.push(R.x,R.y,R.z),u.push(0,E,0),A.x=X*.5+.5,A.y=$*.5*E+.5,f.push(A.x,A.y),g++}for(let O=0;O<i;O++){const H=P+O,K=U+O;M===!0?d.push(K,K+1,H):d.push(K+1,K,H),N+=3}l.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Te(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ft extends Te{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ft(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oa extends Gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),d(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const w=new C,M=new C,P=new C;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],M),f(t[A+2],P),c(w,M,P,T)}function c(T,w,M,P){const A=P+1,R=[];for(let N=0;N<=A;N++){R[N]=[];const S=T.clone().lerp(M,N/A),E=w.clone().lerp(M,N/A),U=A-N;for(let O=0;O<=U;O++)O===0&&N===A?R[N][O]=S:R[N][O]=S.clone().lerp(E,O/U)}for(let N=0;N<A;N++)for(let S=0;S<2*(A-N)-1;S++){const E=Math.floor(S/2);S%2===0?(u(R[N][E+1]),u(R[N+1][E]),u(R[N][E])):(u(R[N][E+1]),u(R[N+1][E+1]),u(R[N+1][E]))}}function l(T){const w=new C;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(T),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function d(){const T=new C;for(let w=0;w<r.length;w+=3){T.x=r[w+0],T.y=r[w+1],T.z=r[w+2];const M=m(T)/2/Math.PI+.5,P=p(T)/Math.PI+.5;o.push(M,1-P)}g(),h()}function h(){for(let T=0;T<o.length;T+=6){const w=o[T+0],M=o[T+2],P=o[T+4],A=Math.max(w,M,P),R=Math.min(w,M,P);A>.9&&R<.1&&(w<.2&&(o[T+0]+=1),M<.2&&(o[T+2]+=1),P<.2&&(o[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function f(T,w){const M=T*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){const T=new C,w=new C,M=new C,P=new C,A=new De,R=new De,N=new De;for(let S=0,E=0;S<r.length;S+=9,E+=6){T.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),A.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),N.set(o[E+4],o[E+5]),P.copy(T).add(w).add(M).divideScalar(3);const U=m(P);_(A,E+0,T,U),_(R,E+2,w,U),_(N,E+4,M,U)}}function _(T,w,M,P){P<0&&T.x===1&&(o[w]=T.x-1),M.x===0&&M.z===0&&(o[w]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.vertices,e.indices,e.radius,e.details)}}class bl extends oa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bl(e.radius,e.detail)}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const d=n[i],u=n[i+1]-d,f=(o-d)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new De:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],r=[],o=[],a=new C,c=new $e;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=l&&(l=d,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yu extends Si{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new De){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*d-f*h+this.aX,l=u*h+f*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bm extends Yu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,h){let u=(o-r)/l-(a-r)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+h)+(c-a)/h;u*=d,f*=d,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const xo=new C,Va=new Tl,Wa=new Tl,Xa=new Tl;class Al extends Si{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=i[(a-1)%r]:(xo.subVectors(i[0],i[1]).add(i[0]),l=xo);const h=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?d=i[(a+2)%r]:(xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Va.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,g,_,m),Wa.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,g,_,m),Xa.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,g,_,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),Wa.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),Xa.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return n.set(Va.calc(c),Wa.calc(c),Xa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ld(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function km(s,e){const t=1-s;return t*t*e}function Gm(s,e){return 2*(1-s)*s*e}function zm(s,e){return s*s*e}function vr(s,e,t,n){return km(s,e)+Gm(s,t)+zm(s,n)}function Hm(s,e){const t=1-s;return t*t*t*e}function Vm(s,e){const t=1-s;return 3*t*t*s*e}function Wm(s,e){return 3*(1-s)*s*s*e}function Xm(s,e){return s*s*s*e}function xr(s,e,t,n,i){return Hm(s,e)+Vm(s,t)+Wm(s,n)+Xm(s,i)}class Ym extends Si{constructor(e=new De,t=new De,n=new De,i=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new De){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,r.x,o.x,a.x),xr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qm extends Si{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,r.x,o.x,a.x),xr(e,i.y,r.y,o.y,a.y),xr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jm extends Si{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Km extends Si{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends Si{constructor(e=new De,t=new De,n=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new De){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,i.x,r.x,o.x),vr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rl extends Si{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,i.x,r.x,o.x),vr(e,i.y,r.y,o.y),vr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zm extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],d=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ld(a,c.x,l.x,d.x,h.x),Ld(a,c.y,l.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new De().fromArray(i))}return this}}var Jm=Object.freeze({__proto__:null,ArcCurve:Bm,CatmullRomCurve3:Al,CubicBezierCurve:Ym,CubicBezierCurve3:qm,EllipseCurve:Yu,LineCurve:jm,LineCurve3:Km,QuadraticBezierCurve:$m,QuadraticBezierCurve3:Rl,SplineCurve:Zm});class Cl extends oa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cl(e.radius,e.detail)}}class Ft extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,h=e/a,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const T=p*u-o;for(let w=0;w<l;w++){const M=w*h-r;g.push(M,-T,0),_.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const w=T+l*p,M=T+l*(p+1),P=T+1+l*(p+1),A=T+1+l*p;f.push(w,M,A),f.push(M,P,A)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hr extends Gt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let h=e;const u=(t-e)/i,f=new C,g=new De;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const T=p+m,w=T,M=T+n+1,P=T+n+2,A=T+1;a.push(w,M,A),a.push(M,P,A)}}this.setIndex(a),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class it extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new C,u=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],w=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const A=P/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(A+M,1-w),T.push(l++)}d.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const w=d[p][T+1],M=d[p][T],P=d[p+1][T],A=d[p+1][T+1];(p!==0||o>0)&&f.push(w,M,A),(p!==n-1||c<Math.PI)&&f.push(M,P,A)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ht extends Gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],d=new C,h=new C,u=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,T=(i+1)*f+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pl extends Gt{constructor(e=new Rl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,c=new C,l=new De;let d=new C;const h=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function _(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),T(),p()}function m(w){d=e.getPointAt(w/t,d);const M=o.normals[w],P=o.binormals[w];for(let A=0;A<=i;A++){const R=A/i*Math.PI*2,N=Math.sin(R),S=-Math.cos(R);c.x=S*M.x+N*P.x,c.y=S*M.y+N*P.y,c.z=S*M.z+N*P.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let M=1;M<=i;M++){const P=(i+1)*(w-1)+(M-1),A=(i+1)*w+(M-1),R=(i+1)*w+M,N=(i+1)*(w-1)+M;g.push(P,A,N),g.push(A,R,N)}}function T(){for(let w=0;w<=t;w++)for(let M=0;M<=i;M++)l.x=w/t,l.y=M/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Pl(new Jm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xe extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qm extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eg extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function tg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ng(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Dd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function qu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ig extends Vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=e,a=2*t-n;break;case Zl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $l:o=e,c=2*n-t;break;case Zl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,T=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let P=0;P!==a;++P)r[P]=p*o[d+P]+T*o[l+P]+w*o[c+P]+M*o[h+P];return r}}class sg extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[l+u]*h+o[c+u]*d;return r}}class rg extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ig(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&tg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_a,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Nr;class Zs extends zn{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Dr;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class ju extends zn{constructor(e,t,n,i){super(e,t,n,i)}}ju.prototype.ValueTypeName="color";class Xs extends zn{constructor(e,t,n,i){super(e,t,n,i)}}Xs.prototype.ValueTypeName="number";class og extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let d=l+a;l!==d;l+=4)Hi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ys extends zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new og(this.times,this.values,this.getValueSize(),e)}}Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends zn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Dr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends zn{constructor(e,t,n,i){super(e,t,n,i)}}qs.prototype.ValueTypeName="vector";class ag{constructor(e="",t=-1,n=[],i=Ap){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(lg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const d=ng(c);c=Dd(c,1,d),l=Dd(l,1,d),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,_){if(f.length!==0){const m=[],p=[];qu(f,m,p,g),m.length!==0&&_.push(new h(u,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==u[g].morphTargets.length;++T){const w=u[g];m.push(w.time),p.push(w.morphTarget===_?1:0)}i.push(new Xs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(qs,f+".position",u,"pos",i),n(Ys,f+".quaternion",u,"rot",i),n(qs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return ju;case"quaternion":return Ys;case"bool":case"boolean":return Zs;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function lg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cg(s.type);if(s.times===void 0){const t=[],n=[];qu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class dg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hg=new dg;class Qs{constructor(e){this.manager=e!==void 0?e:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class ug extends Error{constructor(e,t){super(e),this.response=t}}class Ku extends Qs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=ai[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:w,value:M})=>{if(w)p.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,R=d.length;A<R;A++){const N=d[A];N.onProgress&&N.onProgress(P)}p.enqueue(M),T()}},w=>{p.error(w)})}}});return new Response(m)}else throw new ug(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{mi.add(`file:${e}`,l);const d=ai[e];delete ai[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=ai[e];if(d===void 0)throw this.manager.itemError(e),l;delete ai[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class fg extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=As.get(o);h===void 0&&(h=[],As.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Ur("img");function c(){d(),t&&t(this);const h=As.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}As.delete(this),r.manager.itemEnd(e)}function l(h){d(),i&&i(h),mi.remove(`image:${e}`);const u=As.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(h)}As.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),mi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class pg extends Qs{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new fg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Wr extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mg extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ya=new $e,Nd=new C,Ud=new C;class Il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),Ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gg extends Il{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $u extends Wr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fd=new $e,dr=new C,qa=new C;class _g extends Il{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),Fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,n.coordinateSystem,n.reversedDepth)}}class Jt extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _g}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ll extends Bu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vg extends Il{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Us extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new vg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xg extends Wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ja=new WeakMap;class Mg extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=mi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(ja.has(o)===!0)i&&i(ja.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return mi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ja.set(c,l),mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yg extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Dl="\\[\\]\\.:\\/",Eg=new RegExp("["+Dl+"]","g"),Nl="[^"+Dl+"]",wg="[^"+Dl.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Tg=/(WCOD+)?/.source.replace("WCOD",wg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),Cg=new RegExp("^"+bg+Tg+Ag+Rg+"$"),Pg=["material","materials","bones","map"];class Ig{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(e){const t=Cg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=Ig;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Od=new $e;class Lg{constructor(e,t,n=0,i=1/0){this.ray=new zr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)el(e[i],this,n,t);return n.sort(Bd),n}}function Bd(s,e){return s.distance-e.distance}function el(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)el(r[o],e,t,!0)}}function kd(s,e,t,n){const i=Dg(n);switch(t){case Tu:return s*e;case ul:return s*e/i.components*i.byteLength;case fl:return s*e/i.components*i.byteLength;case Ru:return s*e*2/i.components*i.byteLength;case pl:return s*e*2/i.components*i.byteLength;case Au:return s*e*3/i.components*i.byteLength;case Sn:return s*e*4/i.components*i.byteLength;case ml:return s*e*4/i.components*i.byteLength;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ec:case bc:return Math.max(s,16)*Math.max(e,8)/4;case Sc:case wc:return Math.max(s,8)*Math.max(e,8)/2;case Tc:case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vc:case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yc:case qc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jc:case Kc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(s){switch(s){case Kn:case Su:return{byteLength:1,components:1};case Cr:case Eu:case Gr:return{byteLength:2,components:1};case dl:case hl:return{byteLength:2,components:4};case cs:case ll:case kn:return{byteLength:4,components:1};case wu:case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);function Zu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ng(s){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,h=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const d=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Ug,alphahash_pars_fragment:Fg,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:Gg,aomap_fragment:zg,aomap_pars_fragment:Hg,batching_pars_vertex:Vg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:Yg,bsdfs:qg,iridescence_fragment:jg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:s0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:c0,emissivemap_fragment:l0,emissivemap_pars_fragment:d0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:A0,envmap_vertex:_0,fog_vertex:v0,fog_pars_vertex:x0,fog_fragment:M0,fog_pars_fragment:y0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:E0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:b0,lights_pars_begin:T0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:N0,lights_fragment_maps:U0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:G0,map_fragment:z0,map_pars_fragment:H0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:q0,morphcolor_vertex:j0,morphnormal_vertex:K0,morphtarget_pars_vertex:$0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:e_,normal_pars_vertex:t_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:r_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:c_,packing:l_,premultiplied_alpha_fragment:d_,project_vertex:h_,dithering_fragment:u_,dithering_pars_fragment:f_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:m_,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:__,shadowmap_vertex:v_,shadowmask_pars_fragment:x_,skinbase_vertex:M_,skinning_pars_vertex:y_,skinning_vertex:S_,skinnormal_vertex:E_,specularmap_fragment:w_,specularmap_pars_fragment:b_,tonemapping_fragment:T_,tonemapping_pars_fragment:A_,transmission_fragment:R_,transmission_pars_fragment:C_,uv_pars_fragment:P_,uv_pars_vertex:I_,uv_vertex:L_,worldpos_vertex:D_,background_vert:N_,background_frag:U_,backgroundCube_vert:F_,backgroundCube_frag:O_,cube_vert:B_,cube_frag:k_,depth_vert:G_,depth_frag:z_,distanceRGBA_vert:H_,distanceRGBA_frag:V_,equirect_vert:W_,equirect_frag:X_,linedashed_vert:Y_,linedashed_frag:q_,meshbasic_vert:j_,meshbasic_frag:K_,meshlambert_vert:$_,meshlambert_frag:Z_,meshmatcap_vert:J_,meshmatcap_frag:Q_,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:cv,points_frag:lv,shadow_vert:dv,shadow_frag:hv,sprite_vert:uv,sprite_frag:fv},Me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Xn={basic:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:$t([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:$t([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:$t([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:$t([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:$t([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:$t([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:$t([Me.common,Me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:$t([Me.lights,Me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Xn.physical={uniforms:$t([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const yo={r:0,b:0,g:0},ji=new $n,pv=new $e;function mv(s,e,t,n,i,r,o){const a=new qe(0);let c=r===!0?0:1,l,d,h=null,u=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function _(w){let M=!1;const P=g(w);P===null?p(a,c):P&&P.isColor&&(p(P,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,M){const P=g(M);P&&(P.isCubeTexture||P.mapping===ia)?(d===void 0&&(d=new I(new ze(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ws(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ji.copy(M.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(ji)),d.material.toneMapped=at.getTransfer(P.colorSpace)!==St,(h!==P||u!==P.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,h=P,u=P.version,f=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new I(new Ft(2,2),new zi({name:"BackgroundMaterial",uniforms:Ws(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=at.getTransfer(P.colorSpace)!==St,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||u!==P.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=P,u=P.version,f=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(yo,Ou(s)),n.buffers.color.setClear(yo.r,yo.g,yo.b,M,o)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m,dispose:T}}function gv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(E,U,O,H,K){let X=!1;const $=h(H,O,U);r!==$&&(r=$,l(r.object)),X=f(E,H,O,K),X&&g(E,H,O,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(E,U,O,H),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return s.createVertexArray()}function l(E){return s.bindVertexArray(E)}function d(E){return s.deleteVertexArray(E)}function h(E,U,O){const H=O.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let X=K[U.id];X===void 0&&(X={},K[U.id]=X);let $=X[H];return $===void 0&&($=u(c()),X[H]=$),$}function u(E){const U=[],O=[],H=[];for(let K=0;K<t;K++)U[K]=0,O[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:H,object:E,attributes:{},index:null}}function f(E,U,O,H){const K=r.attributes,X=U.attributes;let $=0;const ie=O.getAttributes();for(const W in ie)if(ie[W].location>=0){const ge=K[W];let Ee=X[W];if(Ee===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Ee=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Ee=E.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function g(E,U,O,H){const K={},X=U.attributes;let $=0;const ie=O.getAttributes();for(const W in ie)if(ie[W].location>=0){let ge=X[W];ge===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));const Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),K[W]=Ee,$++}r.attributes=K,r.attributesNum=$,r.index=H}function _(){const E=r.newAttributes;for(let U=0,O=E.length;U<O;U++)E[U]=0}function m(E){p(E,0)}function p(E,U){const O=r.newAttributes,H=r.enabledAttributes,K=r.attributeDivisors;O[E]=1,H[E]===0&&(s.enableVertexAttribArray(E),H[E]=1),K[E]!==U&&(s.vertexAttribDivisor(E,U),K[E]=U)}function T(){const E=r.newAttributes,U=r.enabledAttributes;for(let O=0,H=U.length;O<H;O++)U[O]!==E[O]&&(s.disableVertexAttribArray(O),U[O]=0)}function w(E,U,O,H,K,X,$){$===!0?s.vertexAttribIPointer(E,U,O,K,X):s.vertexAttribPointer(E,U,O,H,K,X)}function M(E,U,O,H){_();const K=H.attributes,X=O.getAttributes(),$=U.defaultAttributeValues;for(const ie in X){const W=X[ie];if(W.location>=0){let ue=K[ie];if(ue===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const ge=ue.normalized,Ee=ue.itemSize,Oe=e.get(ue);if(Oe===void 0)continue;const Qe=Oe.buffer,je=Oe.type,Ke=Oe.bytesPerElement,Z=je===s.INT||je===s.UNSIGNED_INT||ue.gpuType===ll;if(ue.isInterleavedBufferAttribute){const ee=ue.data,J=ee.stride,se=ue.offset;if(ee.isInstancedInterleavedBuffer){for(let re=0;re<W.locationSize;re++)p(W.location+re,ee.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let re=0;re<W.locationSize;re++)w(W.location+re,Ee/W.locationSize,je,ge,J*Ke,(se+Ee/W.locationSize*re)*Ke,Z)}else{if(ue.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,ue.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let ee=0;ee<W.locationSize;ee++)w(W.location+ee,Ee/W.locationSize,je,ge,Ee*Ke,Ee/W.locationSize*ee*Ke,Z)}}else if($!==void 0){const ge=$[ie];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(W.location,ge);break;case 3:s.vertexAttrib3fv(W.location,ge);break;case 4:s.vertexAttrib4fv(W.location,ge);break;default:s.vertexAttrib1fv(W.location,ge)}}}}T()}function P(){N();for(const E in n){const U=n[E];for(const O in U){const H=U[O];for(const K in H)d(H[K].object),delete H[K];delete U[O]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const U=n[E.id];for(const O in U){const H=U[O];for(const K in H)d(H[K].object),delete H[K];delete U[O]}delete n[E.id]}function R(E){for(const U in n){const O=n[U];if(O[E.id]===void 0)continue;const H=O[E.id];for(const K in H)d(H[K].object),delete H[K];delete O[E.id]}}function N(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function _v(s,e,t){let n;function i(l){n=l}function r(l,d){s.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,h){h!==0&&(s.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function a(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function c(l,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!N)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function xv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zi,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):l();else{const T=r?0:n,w=T*4;let M=p.clippingState||null;c.value=M,M=d(g,u,w,f);for(let P=0;P!==w;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=f;w!==_;++w,M+=4)o.copy(h[w]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mv(s){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=zs:a===yc&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mc||a===yc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bm(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ps=4,Gd=[.125,.215,.35,.446,.526,.582],ns=20,Ka=new Ll,zd=new qe;let $a=null,Za=0,Ja=0,Qa=!1;const Ji=(1+Math.sqrt(5))/2,Rs=1/Ji,Hd=[new C(-Ji,Rs,0),new C(Ji,Rs,0),new C(-Rs,0,Ji),new C(Rs,0,Ji),new C(0,Ji,-Rs),new C(0,Ji,Rs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],yv=new C;class Vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=yv}=r;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a,Za,Ja),this._renderer.xr.enabled=Qa,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Gr,format:Sn,colorSpace:tn,depthBuffer:!1},i=Wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=Ev(r,e,t)}return i}_compileMaterial(e){const t=new I(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i,r){const c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(zd),h.toneMapping=Oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new rt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new I(new ze,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(zd),p=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const P=this._cubeSize;So(i,M*P,w>2?P:0,P,P),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;So(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hd[(i-r-1)%Hd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new I(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ns-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let T=0;for(let R=0;R<ns;++R){const N=R/_,S=Math.exp(-N*N/2);p.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;const M=this._sizeLods[i],P=3*M*(i>w-Ps?i-w+Ps:0),A=4*(this._cubeSize-M);So(t,P,A,3*M,2*M),c.setRenderTarget(t),c.render(h,Ka)}}function Sv(s){const e=[],t=[],n=[];let i=s;const r=s-Ps+1+Gd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ps?c=Gd[o-s+Ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),w=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,N=A>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(S,_*g*A),w.set(u,m*g*A);const E=[A,A,A,A,A,A];M.set(E,p*g*A)}const P=new Gt;P.setAttribute("position",new qt(T,_)),P.setAttribute("uv",new qt(w,m)),P.setAttribute("faceIndex",new qt(M,p)),e.push(P),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wd(s,e,t){const n=new ls(s,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ev(s,e,t){const n=new Float32Array(ns),i=new C(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Xd(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Yd(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Mc||c===yc,d=c===zs||c===Hs;if(l||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Vd(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Vd(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tv(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let w=0,M=T.length;w<M;w+=3){const P=T[w+0],A=T[w+1],R=T[w+2];u.push(P,A,A,R,R,P)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,M=T.length/3-1;w<M;w+=3){const P=w+0,A=w+1,R=w+2;u.push(P,A,A,R,R,P)}}else return;const m=new(Lu(u)?Fu:Uu)(u,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function Av(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Rv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cv(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let E=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*A*4*h),N=new Du(R,P,A,h);N.type=kn,N.needsUpdate=!0;const S=M*4;for(let U=0;U<h;U++){const O=p[U],H=T[U],K=w[U],X=P*A*4*U;for(let $=0;$<O.count;$++){const ie=$*S;g===!0&&(i.fromBufferAttribute(O,$),R[X+ie+0]=i.x,R[X+ie+1]=i.y,R[X+ie+2]=i.z,R[X+ie+3]=0),_===!0&&(i.fromBufferAttribute(H,$),R[X+ie+4]=i.x,R[X+ie+5]=i.y,R[X+ie+6]=i.z,R[X+ie+7]=0),m===!0&&(i.fromBufferAttribute(K,$),R[X+ie+8]=i.x,R[X+ie+9]=i.y,R[X+ie+10]=i.z,R[X+ie+11]=K.itemSize===4?i.w:1)}}u={count:h,texture:N,size:new De(P,A)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Pv(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Ju=new Ot,qd=new Wu(1,1),Qu=new Du,ef=new cm,tf=new ku,jd=[],Kd=[],$d=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function er(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=jd[i];if(r===void 0&&(r=new Float32Array(i),jd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function aa(s,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Iv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Lv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function Dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function Nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function Uv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Jd.set(n),s.uniformMatrix2fv(this.addr,!1,Jd),kt(t,n)}}function Fv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Zd.set(n),s.uniformMatrix3fv(this.addr,!1,Zd),kt(t,n)}}function Ov(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;$d.set(n),s.uniformMatrix4fv(this.addr,!1,$d),kt(t,n)}}function Bv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function Gv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function Hv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function Xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function Yv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qd.compareFunction=Iu,r=qd):r=Ju,t.setTexture2D(e||r,i)}function qv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ef,i)}function jv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tf,i)}function Kv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qu,i)}function $v(s){switch(s){case 5126:return Iv;case 35664:return Lv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return kv;case 35668:case 35672:return Gv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Zv(s,e){s.uniform1fv(this.addr,e)}function Jv(s,e){const t=er(e,this.size,2);s.uniform2fv(this.addr,t)}function Qv(s,e){const t=er(e,this.size,3);s.uniform3fv(this.addr,t)}function ex(s,e){const t=er(e,this.size,4);s.uniform4fv(this.addr,t)}function tx(s,e){const t=er(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nx(s,e){const t=er(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ix(s,e){const t=er(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sx(s,e){s.uniform1iv(this.addr,e)}function rx(s,e){s.uniform2iv(this.addr,e)}function ox(s,e){s.uniform3iv(this.addr,e)}function ax(s,e){s.uniform4iv(this.addr,e)}function cx(s,e){s.uniform1uiv(this.addr,e)}function lx(s,e){s.uniform2uiv(this.addr,e)}function dx(s,e){s.uniform3uiv(this.addr,e)}function hx(s,e){s.uniform4uiv(this.addr,e)}function ux(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ju,r[o])}function fx(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ef,r[o])}function px(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tf,r[o])}function mx(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qu,r[o])}function gx(s){switch(s){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return cx;case 36294:return lx;case 36295:return dx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}class _x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}}class vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gx(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Qd(s,e){s.seq.push(e),s.map[e.id]=e}function Mx(s,e,t){const n=s.name,i=n.length;for(ec.lastIndex=0;;){const r=ec.exec(n),o=ec.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Qd(t,l===void 0?new _x(a,s,e):new vx(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new xx(a),Qd(t,h)),t=h}}}class Lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Mx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const yx=37297;let Sx=0;function Ex(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const th=new Je;function wx(s){at._getMatrix(th,at.workingColorSpace,s);const e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case ko:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ex(s.getShaderSource(e),a)}else return r}function bx(s,e){const t=wx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tx(s,e){let t;switch(e){case Mp:t="Linear";break;case yp:t="Reinhard";break;case Sp:t="Cineon";break;case cl:t="ACESFilmic";break;case wp:t="AgX";break;case bp:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eo=new C;function Ax(){at.getLuminanceCoefficients(Eo);const s=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Cx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Px(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mr(s){return s!==""}function ih(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(s){return s.replace(Ix,Dx)}const Lx=new Map;function Dx(s,e){let t=et[e];if(t===void 0){const n=Lx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(s){return s.replace(Nx,Ux)}function Ux(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function oh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Ox(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bx(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Hs&&(e="ENVMAP_MODE_REFRACTION"),e}function kx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xu:e="ENVMAP_BLENDING_MULTIPLY";break;case vp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function Gx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Fx(t),l=Ox(t),d=Bx(t),h=kx(t),u=Gx(t),f=Rx(t),g=Cx(r),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?et.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),Ax(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=tl(o),o=ih(o,t),o=sh(o,t),a=tl(a),a=ih(a,t),a=sh(a,t),o=rh(o),a=rh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+o,M=T+p+a,P=eh(i,i.VERTEX_SHADER,w),A=eh(i,i.FRAGMENT_SHADER,M);i.attachShader(_,P),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(U){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(P)||"",K=i.getShaderInfoLog(A)||"",X=O.trim(),$=H.trim(),ie=K.trim();let W=!0,ue=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,A);else{const ge=nh(i,P,"vertex"),Ee=nh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+ge+`
`+Ee)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):($===""||ie==="")&&(ue=!1);ue&&(U.diagnostics={runnable:W,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:ie,prefix:p}})}i.deleteShader(P),i.deleteShader(A),N=new Lo(i,_),S=Px(i,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,yx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let Hx=0;class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wx(e),t.set(e,n)),n}}class Wx{constructor(e){this.id=Hx++,this.code=e,this.usedTimes=0}}function Xx(s,e,t,n,i,r,o){const a=new vl,c=new Vx,l=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,U,O,H){const K=O.fog,X=H.geometry,$=S.isMeshStandardMaterial?O.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),W=ie&&ie.mapping===ia?ie.image.height:null,ue=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=ge!==void 0?ge.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let Qe,je,Ke,Z;if(ue){const lt=Xn[ue];Qe=lt.vertexShader,je=lt.fragmentShader}else Qe=S.vertexShader,je=S.fragmentShader,c.update(S),Ke=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);const ee=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),se=H.isInstancedMesh===!0,re=H.isBatchedMesh===!0,ye=!!S.map,tt=!!S.matcap,L=!!ie,He=!!S.aoMap,Fe=!!S.lightMap,Ie=!!S.bumpMap,Ce=!!S.normalMap,ct=!!S.displacementMap,Ae=!!S.emissiveMap,Ye=!!S.metalnessMap,Lt=!!S.roughnessMap,xt=S.anisotropy>0,y=S.clearcoat>0,x=S.dispersion>0,D=S.iridescence>0,V=S.sheen>0,Q=S.transmission>0,z=xt&&!!S.anisotropyMap,we=y&&!!S.clearcoatMap,de=y&&!!S.clearcoatNormalMap,ne=y&&!!S.clearcoatRoughnessMap,oe=D&&!!S.iridescenceMap,j=D&&!!S.iridescenceThicknessMap,ae=V&&!!S.sheenColorMap,ve=V&&!!S.sheenRoughnessMap,_e=!!S.specularMap,he=!!S.specularColorMap,Ue=!!S.specularIntensityMap,F=Q&&!!S.transmissionMap,ce=Q&&!!S.thicknessMap,fe=!!S.gradientMap,be=!!S.alphaMap,le=S.alphaTest>0,te=!!S.alphaHash,Re=!!S.extensions;let Ge=Oi;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const Mt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:je,defines:S.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:re,batchingColor:re&&H._colorsTexture!==null,instancing:se,instancingColor:se&&H.instanceColor!==null,instancingMorph:se&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:tn,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:tt,envMap:L,envMapMode:L&&ie.mapping,envMapCubeUVHeight:W,aoMap:He,lightMap:Fe,bumpMap:Ie,normalMap:Ce,displacementMap:u&&ct,emissiveMap:Ae,normalMapObjectSpace:Ce&&S.normalMapType===Ip,normalMapTangentSpace:Ce&&S.normalMapType===Pu,metalnessMap:Ye,roughnessMap:Lt,anisotropy:xt,anisotropyMap:z,clearcoat:y,clearcoatMap:we,clearcoatNormalMap:de,clearcoatRoughnessMap:ne,dispersion:x,iridescence:D,iridescenceMap:oe,iridescenceThicknessMap:j,sheen:V,sheenColorMap:ae,sheenRoughnessMap:ve,specularMap:_e,specularColorMap:he,specularIntensityMap:Ue,transmission:Q,transmissionMap:F,thicknessMap:ce,gradientMap:fe,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:be,alphaTest:le,alphaHash:te,combine:S.combine,mapUv:ye&&_(S.map.channel),aoMapUv:He&&_(S.aoMap.channel),lightMapUv:Fe&&_(S.lightMap.channel),bumpMapUv:Ie&&_(S.bumpMap.channel),normalMapUv:Ce&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:Ae&&_(S.emissiveMap.channel),metalnessMapUv:Ye&&_(S.metalnessMap.channel),roughnessMapUv:Lt&&_(S.roughnessMap.channel),anisotropyMapUv:z&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(S.sheenRoughnessMap.channel),specularMapUv:_e&&_(S.specularMap.channel),specularColorMapUv:he&&_(S.specularColorMap.channel),specularIntensityMapUv:Ue&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ce&&_(S.thicknessMap.channel),alphaMapUv:be&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ce||xt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(ye||be),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:J,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:Ae&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nt,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&S.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(T(E,S),w(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const E=g[S.type];let U;if(E){const O=Xn[E];U=ym.clone(O.uniforms)}else U=S.uniforms;return U}function P(S,E){let U;for(let O=0,H=d.length;O<H;O++){const K=d[O];if(K.cacheKey===E){U=K,++U.usedTimes;break}}return U===void 0&&(U=new zx(s,E,S,r),d.push(U)),U}function A(S){if(--S.usedTimes===0){const E=d.indexOf(S);d[E]=d[d.length-1],d.pop(),S.destroy()}}function R(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:N}}function Yx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ah(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ch(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,u){t.length>1&&t.sort(h||qx),n.length>1&&n.sort(u||ah),i.length>1&&i.sort(u||ah)}function d(){for(let h=e,u=s.length;h<u;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:l}}function jx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ch,s.set(n,[o])):i>=r.length?(o=new ch,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new qe};break;case"SpotLight":t={position:new C,direction:new C,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function $x(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Zx=0;function Jx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qx(s){const e=new Kx,t=$x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new $e,o=new $e;function a(l){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,w=0,M=0,P=0,A=0,R=0;l.sort(Jx);for(let S=0,E=l.length;S<E;S++){const U=l[S],O=U.color,H=U.intensity,K=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=O.r*H,h+=O.g*H,u+=O.b*H;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],H);R++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ie=U.shadow,W=t.get(U);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=U.shadow.matrix,T++}n.directional[f]=$,f++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(O).multiplyScalar(H),$.distance=K,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[_]=$;const ie=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,ie.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[_]=ie.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=X,M++}_++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(O).multiplyScalar(H),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=$,m++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const ie=U.shadow,W=t.get(U);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=U.shadow.matrix,w++}n.point[g]=$,g++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(H),$.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==M||N.numSpotMaps!==P||N.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=M,N.numSpotMaps=P,N.numLightProbes=R,n.version=Zx++)}function c(l,d){let h=0,u=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const w=l[p];if(w.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(w.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function lh(s){const e=new Qx(s),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function eM(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new lh(s),e.set(i,[a])):r>=o.length?(a=new lh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iM(s,e,t){let n=new Sl;const i=new De,r=new De,o=new pt,a=new Qm({depthPacking:Pp}),c=new eg,l={},d=t.maxTextureSize,h={[Mi]:Qt,[Qt]:Mi,[Nt]:Nt},u=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let p=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),E=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Fi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=p!==ci&&this.type===ci,K=p===ci&&this.type!==ci;for(let X=0,$=A.length;X<$;X++){const ie=A[X],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ue=W.getFrameExtents();if(i.multiply(ue),r.copy(W.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ue.x),i.x=r.x*ue.x,W.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ue.y),i.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||H===!0||K===!0){const Ee=this.type!==ci?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new ls(i.x,i.y,Ee),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ge=W.getViewportCount();for(let Ee=0;Ee<ge;Ee++){const Oe=W.getViewport(Ee);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),O.viewport(o),W.updateMatrices(ie,Ee),n=W.getFrustum(),M(R,N,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===ci&&T(W,N),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,U)};function T(A,R){const N=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ls(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,N,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,N,f,_,null)}function w(A,R,N,S){let E=null;const U=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)E=U;else if(E=N.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=E.uuid,H=R.uuid;let K=l[O];K===void 0&&(K={},l[O]=K);let X=K[H];X===void 0&&(X=E.clone(),K[H]=X,R.addEventListener("dispose",P)),E=X}if(E.visible=R.visible,E.wireframe=R.wireframe,S===ci?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=s.properties.get(E);O.light=N}return E}function M(A,R,N,S,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ci)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const H=e.update(A),K=A.material;if(Array.isArray(K)){const X=H.groups;for(let $=0,ie=X.length;$<ie;$++){const W=X[$],ue=K[W.materialIndex];if(ue&&ue.visible){const ge=w(A,ue,S,E);A.onBeforeShadow(s,A,R,N,H,ge,W),s.renderBufferDirect(N,null,H,ge,A,W),A.onAfterShadow(s,A,R,N,H,ge,W)}}}else if(K.visible){const X=w(A,K,S,E);A.onBeforeShadow(s,A,R,N,H,X,null),s.renderBufferDirect(N,null,H,X,A,null),A.onAfterShadow(s,A,R,N,H,X,null)}}const O=A.children;for(let H=0,K=O.length;H<K;H++)M(O[H],R,N,S,E)}function P(A){A.target.removeEventListener("dispose",P);for(const N in l){const S=l[N],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const sM={[fc]:pc,[mc]:vc,[gc]:xc,[Gs]:_c,[pc]:fc,[vc]:mc,[xc]:gc,[_c]:Gs};function rM(s,e){function t(){let F=!1;const ce=new pt;let fe=null;const be=new pt(0,0,0,0);return{setMask:function(le){fe!==le&&!F&&(s.colorMask(le,le,le,le),fe=le)},setLocked:function(le){F=le},setClear:function(le,te,Re,Ge,Mt){Mt===!0&&(le*=Ge,te*=Ge,Re*=Ge),ce.set(le,te,Re,Ge),be.equals(ce)===!1&&(s.clearColor(le,te,Re,Ge),be.copy(ce))},reset:function(){F=!1,fe=null,be.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,fe=null,be=null,le=null;return{setReversed:function(te){if(ce!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ge=le;le=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(te){te?ee(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(te){fe!==te&&!F&&(s.depthMask(te),fe=te)},setFunc:function(te){if(ce&&(te=sM[te]),be!==te){switch(te){case fc:s.depthFunc(s.NEVER);break;case pc:s.depthFunc(s.ALWAYS);break;case mc:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case gc:s.depthFunc(s.EQUAL);break;case _c:s.depthFunc(s.GEQUAL);break;case vc:s.depthFunc(s.GREATER);break;case xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=te}},setLocked:function(te){F=te},setClear:function(te){le!==te&&(ce&&(te=1-te),s.clearDepth(te),le=te)},reset:function(){F=!1,fe=null,be=null,le=null,ce=!1}}}function i(){let F=!1,ce=null,fe=null,be=null,le=null,te=null,Re=null,Ge=null,Mt=null;return{setTest:function(lt){F||(lt?ee(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!F&&(s.stencilMask(lt),ce=lt)},setFunc:function(lt,An,cn){(fe!==lt||be!==An||le!==cn)&&(s.stencilFunc(lt,An,cn),fe=lt,be=An,le=cn)},setOp:function(lt,An,cn){(te!==lt||Re!==An||Ge!==cn)&&(s.stencilOp(lt,An,cn),te=lt,Re=An,Ge=cn)},setLocked:function(lt){F=lt},setClear:function(lt){Mt!==lt&&(s.clearStencil(lt),Mt=lt)},reset:function(){F=!1,ce=null,fe=null,be=null,le=null,te=null,Re=null,Ge=null,Mt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,w=null,M=null,P=null,A=null,R=new qe(0,0,0),N=0,S=!1,E=null,U=null,O=null,H=null,K=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ie=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=ie>=2);let ue=null,ge={};const Ee=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Qe=new pt().fromArray(Ee),je=new pt().fromArray(Oe);function Ke(F,ce,fe,be){const le=new Uint8Array(4),te=s.createTexture();s.bindTexture(F,te),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<fe;Re++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ce+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return te}const Z={};Z[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),o.setFunc(Gs),Ie(!1),Ce(Xl),ee(s.CULL_FACE),He(Fi);function ee(F){d[F]!==!0&&(s.enable(F),d[F]=!0)}function J(F){d[F]!==!1&&(s.disable(F),d[F]=!1)}function se(F,ce){return h[F]!==ce?(s.bindFramebuffer(F,ce),h[F]=ce,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ce),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function re(F,ce){let fe=f,be=!1;if(F){fe=u.get(ce),fe===void 0&&(fe=[],u.set(ce,fe));const le=F.textures;if(fe.length!==le.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Re=le.length;te<Re;te++)fe[te]=s.COLOR_ATTACHMENT0+te;fe.length=le.length,be=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,be=!0);be&&s.drawBuffers(fe)}function ye(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const tt={[ts]:s.FUNC_ADD,[tp]:s.FUNC_SUBTRACT,[np]:s.FUNC_REVERSE_SUBTRACT};tt[ip]=s.MIN,tt[sp]=s.MAX;const L={[rp]:s.ZERO,[op]:s.ONE,[ap]:s.SRC_COLOR,[hc]:s.SRC_ALPHA,[fp]:s.SRC_ALPHA_SATURATE,[hp]:s.DST_COLOR,[lp]:s.DST_ALPHA,[cp]:s.ONE_MINUS_SRC_COLOR,[uc]:s.ONE_MINUS_SRC_ALPHA,[up]:s.ONE_MINUS_DST_COLOR,[dp]:s.ONE_MINUS_DST_ALPHA,[pp]:s.CONSTANT_COLOR,[mp]:s.ONE_MINUS_CONSTANT_COLOR,[gp]:s.CONSTANT_ALPHA,[_p]:s.ONE_MINUS_CONSTANT_ALPHA};function He(F,ce,fe,be,le,te,Re,Ge,Mt,lt){if(F===Fi){_===!0&&(J(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),F!==ep){if(F!==m||lt!==S){if((p!==ts||M!==ts)&&(s.blendEquation(s.FUNC_ADD),p=ts,M=ts),lt)switch(F){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFunc(s.ONE,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ql:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,w=null,P=null,A=null,R.set(0,0,0),N=0,m=F,S=lt}return}le=le||ce,te=te||fe,Re=Re||be,(ce!==p||le!==M)&&(s.blendEquationSeparate(tt[ce],tt[le]),p=ce,M=le),(fe!==T||be!==w||te!==P||Re!==A)&&(s.blendFuncSeparate(L[fe],L[be],L[te],L[Re]),T=fe,w=be,P=te,A=Re),(Ge.equals(R)===!1||Mt!==N)&&(s.blendColor(Ge.r,Ge.g,Ge.b,Mt),R.copy(Ge),N=Mt),m=F,S=!1}function Fe(F,ce){F.side===Nt?J(s.CULL_FACE):ee(s.CULL_FACE);let fe=F.side===Qt;ce&&(fe=!fe),Ie(fe),F.blending===Ds&&F.transparent===!1?He(Fi):He(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const be=F.stencilWrite;a.setTest(be),be&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){E!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),E=F)}function Ce(F){F!==Jf?(ee(s.CULL_FACE),F!==U&&(F===Xl?s.cullFace(s.BACK):F===Qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),U=F}function ct(F){F!==O&&($&&s.lineWidth(F),O=F)}function Ae(F,ce,fe){F?(ee(s.POLYGON_OFFSET_FILL),(H!==ce||K!==fe)&&(s.polygonOffset(ce,fe),H=ce,K=fe)):J(s.POLYGON_OFFSET_FILL)}function Ye(F){F?ee(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function Lt(F){F===void 0&&(F=s.TEXTURE0+X-1),ue!==F&&(s.activeTexture(F),ue=F)}function xt(F,ce,fe){fe===void 0&&(ue===null?fe=s.TEXTURE0+X-1:fe=ue);let be=ge[fe];be===void 0&&(be={type:void 0,texture:void 0},ge[fe]=be),(be.type!==F||be.texture!==ce)&&(ue!==fe&&(s.activeTexture(fe),ue=fe),s.bindTexture(F,ce||Z[F]),be.type=F,be.texture=ce)}function y(){const F=ge[ue];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(F){Qe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Qe.copy(F))}function ve(F){je.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function _e(F,ce){let fe=l.get(ce);fe===void 0&&(fe=new WeakMap,l.set(ce,fe));let be=fe.get(F);be===void 0&&(be=s.getUniformBlockIndex(ce,F.name),fe.set(F,be))}function he(F,ce){const be=l.get(ce).get(F);c.get(ce)!==be&&(s.uniformBlockBinding(ce,be,F.__bindingPointIndex),c.set(ce,be))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ue=null,ge={},h={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,w=null,M=null,P=null,A=null,R=new qe(0,0,0),N=0,S=!1,E=null,U=null,O=null,H=null,K=null,Qe.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:J,bindFramebuffer:se,drawBuffers:re,useProgram:ye,setBlending:He,setMaterial:Fe,setFlipSided:Ie,setCullFace:Ce,setLineWidth:ct,setPolygonOffset:Ae,setScissorTest:Ye,activeTexture:Lt,bindTexture:xt,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:oe,texImage3D:j,updateUBOMapping:_e,uniformBlockBinding:he,texStorage2D:de,texStorage3D:ne,texSubImage2D:V,texSubImage3D:Q,compressedTexSubImage2D:z,compressedTexSubImage3D:we,scissor:ae,viewport:ve,reset:Ue}}function oM(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return f?new OffscreenCanvas(y,x):Ur("canvas")}function _(y,x,D){let V=1;const Q=xt(y);if((Q.width>D||Q.height>D)&&(V=D/Math.max(Q.width,Q.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const z=Math.floor(V*Q.width),we=Math.floor(V*Q.height);h===void 0&&(h=g(z,we));const de=x?g(z,we):h;return de.width=z,de.height=we,de.getContext("2d").drawImage(y,0,0,z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+z+"x"+we+")."),de}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){s.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?s.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(y,x,D,V,Q=!1){if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let z=x;if(x===s.RED&&(D===s.FLOAT&&(z=s.R32F),D===s.HALF_FLOAT&&(z=s.R16F),D===s.UNSIGNED_BYTE&&(z=s.R8)),x===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(z=s.R8UI),D===s.UNSIGNED_SHORT&&(z=s.R16UI),D===s.UNSIGNED_INT&&(z=s.R32UI),D===s.BYTE&&(z=s.R8I),D===s.SHORT&&(z=s.R16I),D===s.INT&&(z=s.R32I)),x===s.RG&&(D===s.FLOAT&&(z=s.RG32F),D===s.HALF_FLOAT&&(z=s.RG16F),D===s.UNSIGNED_BYTE&&(z=s.RG8)),x===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(z=s.RG8UI),D===s.UNSIGNED_SHORT&&(z=s.RG16UI),D===s.UNSIGNED_INT&&(z=s.RG32UI),D===s.BYTE&&(z=s.RG8I),D===s.SHORT&&(z=s.RG16I),D===s.INT&&(z=s.RG32I)),x===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(z=s.RGB8UI),D===s.UNSIGNED_SHORT&&(z=s.RGB16UI),D===s.UNSIGNED_INT&&(z=s.RGB32UI),D===s.BYTE&&(z=s.RGB8I),D===s.SHORT&&(z=s.RGB16I),D===s.INT&&(z=s.RGB32I)),x===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),D===s.UNSIGNED_INT&&(z=s.RGBA32UI),D===s.BYTE&&(z=s.RGBA8I),D===s.SHORT&&(z=s.RGBA16I),D===s.INT&&(z=s.RGBA32I)),x===s.RGB&&(D===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),D===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),x===s.RGBA){const we=Q?ko:at.getTransfer(V);D===s.FLOAT&&(z=s.RGBA32F),D===s.HALF_FLOAT&&(z=s.RGBA16F),D===s.UNSIGNED_BYTE&&(z=we===St?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function M(y,x){let D;return y?x===null||x===cs||x===Pr?D=s.DEPTH24_STENCIL8:x===kn?D=s.DEPTH32F_STENCIL8:x===Cr&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===cs||x===Pr?D=s.DEPTH_COMPONENT24:x===kn?D=s.DEPTH_COMPONENT32F:x===Cr&&(D=s.DEPTH_COMPONENT16),D}function P(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==en&&y.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function A(y){const x=y.target;x.removeEventListener("dispose",A),N(x),x.isVideoTexture&&d.delete(x)}function R(y){const x=y.target;x.removeEventListener("dispose",R),E(x)}function N(y){const x=n.get(y);if(x.__webglInit===void 0)return;const D=y.source,V=u.get(D);if(V){const Q=V[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(y),Object.keys(V).length===0&&u.delete(D)}n.remove(y)}function S(y){const x=n.get(y);s.deleteTexture(x.__webglTexture);const D=y.source,V=u.get(D);delete V[x.__cacheKey],o.memory.textures--}function E(y){const x=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let Q=0;Q<x.__webglFramebuffer[V].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[V][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=y.textures;for(let V=0,Q=D.length;V<Q;V++){const z=n.get(D[V]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(D[V])}n.remove(y)}let U=0;function O(){U=0}function H(){const y=U;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),U+=1,y}function K(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function X(y,x){const D=n.get(y);if(y.isVideoTexture&&Ye(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&D.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(D,y,x);return}}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+x)}function $(y,x){const D=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Z(D,y,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+x)}function ie(y,x){const D=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Z(D,y,x);return}t.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+x)}function W(y,x){const D=n.get(y);if(y.version>0&&D.__version!==y.version){ee(D,y,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+x)}const ue={[Gi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},ge={[en]:s.NEAREST,[yu]:s.NEAREST_MIPMAP_NEAREST,[pr]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Ao]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},Ee={[Lp]:s.NEVER,[Bp]:s.ALWAYS,[Dp]:s.LESS,[Iu]:s.LEQUAL,[Np]:s.EQUAL,[Op]:s.GEQUAL,[Up]:s.GREATER,[Fp]:s.NOTEQUAL};function Oe(y,x){if(x.type===kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===Ao||x.magFilter===pr||x.magFilter===pi||x.minFilter===pn||x.minFilter===Ao||x.minFilter===pr||x.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(y,s.TEXTURE_WRAP_S,ue[x.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,ue[x.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,ue[x.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,ge[x.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==pr&&x.minFilter!==pi||x.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");s.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(y,x){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",A));const V=x.source;let Q=u.get(V);Q===void 0&&(Q={},u.set(V,Q));const z=K(x);if(z!==y.__cacheKey){Q[z]===void 0&&(Q[z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Q[z].usedTimes++;const we=Q[y.__cacheKey];we!==void 0&&(Q[y.__cacheKey].usedTimes--,we.usedTimes===0&&S(x)),y.__cacheKey=z,y.__webglTexture=Q[z].texture}return D}function je(y,x,D){return Math.floor(Math.floor(y/D)/x)}function Ke(y,x,D,V){const z=y.updateRanges;if(z.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,D,V,x.data);else{z.sort((j,ae)=>j.start-ae.start);let we=0;for(let j=1;j<z.length;j++){const ae=z[we],ve=z[j],_e=ae.start+ae.count,he=je(ve.start,x.width,4),Ue=je(ae.start,x.width,4);ve.start<=_e+1&&he===Ue&&je(ve.start+ve.count-1,x.width,4)===he?ae.count=Math.max(ae.count,ve.start+ve.count-ae.start):(++we,z[we]=ve)}z.length=we+1;const de=s.getParameter(s.UNPACK_ROW_LENGTH),ne=s.getParameter(s.UNPACK_SKIP_PIXELS),oe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let j=0,ae=z.length;j<ae;j++){const ve=z[j],_e=Math.floor(ve.start/4),he=Math.ceil(ve.count/4),Ue=_e%x.width,F=Math.floor(_e/x.width),ce=he,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Ue,F,ce,fe,D,V,x.data)}y.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,de),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function Z(y,x,D){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);const Q=Qe(y,x),z=x.source;t.bindTexture(V,y.__webglTexture,s.TEXTURE0+D);const we=n.get(z);if(z.version!==we.__version||Q===!0){t.activeTexture(s.TEXTURE0+D);const de=at.getPrimaries(at.workingColorSpace),ne=x.colorSpace===Di?null:at.getPrimaries(x.colorSpace),oe=x.colorSpace===Di||de===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let j=_(x.image,!1,i.maxTextureSize);j=Lt(x,j);const ae=r.convert(x.format,x.colorSpace),ve=r.convert(x.type);let _e=w(x.internalFormat,ae,ve,x.colorSpace,x.isVideoTexture);Oe(V,x);let he;const Ue=x.mipmaps,F=x.isVideoTexture!==!0,ce=we.__version===void 0||Q===!0,fe=z.dataReady,be=P(x,j);if(x.isDepthTexture)_e=M(x.format===Lr,x.type),ce&&(F?t.texStorage2D(s.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,_e,j.width,j.height,0,ae,ve,null));else if(x.isDataTexture)if(Ue.length>0){F&&ce&&t.texStorage2D(s.TEXTURE_2D,be,_e,Ue[0].width,Ue[0].height);for(let le=0,te=Ue.length;le<te;le++)he=Ue[le],F?fe&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,he.width,he.height,ae,ve,he.data):t.texImage2D(s.TEXTURE_2D,le,_e,he.width,he.height,0,ae,ve,he.data);x.generateMipmaps=!1}else F?(ce&&t.texStorage2D(s.TEXTURE_2D,be,_e,j.width,j.height),fe&&Ke(x,j,ae,ve)):t.texImage2D(s.TEXTURE_2D,0,_e,j.width,j.height,0,ae,ve,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,_e,Ue[0].width,Ue[0].height,j.depth);for(let le=0,te=Ue.length;le<te;le++)if(he=Ue[le],x.format!==Sn)if(ae!==null)if(F){if(fe)if(x.layerUpdates.size>0){const Re=kd(he.width,he.height,x.format,x.type);for(const Ge of x.layerUpdates){const Mt=he.data.subarray(Ge*Re/he.data.BYTES_PER_ELEMENT,(Ge+1)*Re/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Ge,he.width,he.height,1,ae,Mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,he.width,he.height,j.depth,ae,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,_e,he.width,he.height,j.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,he.width,he.height,j.depth,ae,ve,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,_e,he.width,he.height,j.depth,0,ae,ve,he.data)}else{F&&ce&&t.texStorage2D(s.TEXTURE_2D,be,_e,Ue[0].width,Ue[0].height);for(let le=0,te=Ue.length;le<te;le++)he=Ue[le],x.format!==Sn?ae!==null?F?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,he.width,he.height,ae,he.data):t.compressedTexImage2D(s.TEXTURE_2D,le,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?fe&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,he.width,he.height,ae,ve,he.data):t.texImage2D(s.TEXTURE_2D,le,_e,he.width,he.height,0,ae,ve,he.data)}else if(x.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,_e,j.width,j.height,j.depth),fe)if(x.layerUpdates.size>0){const le=kd(j.width,j.height,x.format,x.type);for(const te of x.layerUpdates){const Re=j.data.subarray(te*le/j.data.BYTES_PER_ELEMENT,(te+1)*le/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,j.width,j.height,1,ae,ve,Re)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,ve,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,ae,ve,j.data);else if(x.isData3DTexture)F?(ce&&t.texStorage3D(s.TEXTURE_3D,be,_e,j.width,j.height,j.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,ve,j.data)):t.texImage3D(s.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,ae,ve,j.data);else if(x.isFramebufferTexture){if(ce)if(F)t.texStorage2D(s.TEXTURE_2D,be,_e,j.width,j.height);else{let le=j.width,te=j.height;for(let Re=0;Re<be;Re++)t.texImage2D(s.TEXTURE_2D,Re,_e,le,te,0,ae,ve,null),le>>=1,te>>=1}}else if(Ue.length>0){if(F&&ce){const le=xt(Ue[0]);t.texStorage2D(s.TEXTURE_2D,be,_e,le.width,le.height)}for(let le=0,te=Ue.length;le<te;le++)he=Ue[le],F?fe&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ae,ve,he):t.texImage2D(s.TEXTURE_2D,le,_e,ae,ve,he);x.generateMipmaps=!1}else if(F){if(ce){const le=xt(j);t.texStorage2D(s.TEXTURE_2D,be,_e,le.width,le.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,ve,j)}else t.texImage2D(s.TEXTURE_2D,0,_e,ae,ve,j);m(x)&&p(V),we.__version=z.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ee(y,x,D){if(x.image.length!==6)return;const V=Qe(y,x),Q=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+D);const z=n.get(Q);if(Q.version!==z.__version||V===!0){t.activeTexture(s.TEXTURE0+D);const we=at.getPrimaries(at.workingColorSpace),de=x.colorSpace===Di?null:at.getPrimaries(x.colorSpace),ne=x.colorSpace===Di||we===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let te=0;te<6;te++)!oe&&!j?ae[te]=_(x.image[te],!0,i.maxCubemapSize):ae[te]=j?x.image[te].image:x.image[te],ae[te]=Lt(x,ae[te]);const ve=ae[0],_e=r.convert(x.format,x.colorSpace),he=r.convert(x.type),Ue=w(x.internalFormat,_e,he,x.colorSpace),F=x.isVideoTexture!==!0,ce=z.__version===void 0||V===!0,fe=Q.dataReady;let be=P(x,ve);Oe(s.TEXTURE_CUBE_MAP,x);let le;if(oe){F&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,Ue,ve.width,ve.height);for(let te=0;te<6;te++){le=ae[te].mipmaps;for(let Re=0;Re<le.length;Re++){const Ge=le[Re];x.format!==Sn?_e!==null?F?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Ge.width,Ge.height,_e,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ue,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Ge.width,Ge.height,_e,he,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ue,Ge.width,Ge.height,0,_e,he,Ge.data)}}}else{if(le=x.mipmaps,F&&ce){le.length>0&&be++;const te=xt(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(j){F?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ae[te].width,ae[te].height,_e,he,ae[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,ae[te].width,ae[te].height,0,_e,he,ae[te].data);for(let Re=0;Re<le.length;Re++){const Mt=le[Re].image[te].image;F?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,Mt.width,Mt.height,_e,he,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ue,Mt.width,Mt.height,0,_e,he,Mt.data)}}else{F?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e,he,ae[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,_e,he,ae[te]);for(let Re=0;Re<le.length;Re++){const Ge=le[Re];F?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,_e,he,Ge.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ue,_e,he,Ge.image[te])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),z.__version=Q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function J(y,x,D,V,Q,z){const we=r.convert(D.format,D.colorSpace),de=r.convert(D.type),ne=w(D.internalFormat,we,de,D.colorSpace),oe=n.get(x),j=n.get(D);if(j.__renderTarget=x,!oe.__hasExternalTextures){const ae=Math.max(1,x.width>>z),ve=Math.max(1,x.height>>z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,z,ne,ae,ve,x.depth,0,we,de,null):t.texImage2D(Q,z,ne,ae,ve,0,we,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,y),Ae(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Q,j.__webglTexture,0,ct(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Q,j.__webglTexture,z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(y,x,D){if(s.bindRenderbuffer(s.RENDERBUFFER,y),x.depthBuffer){const V=x.depthTexture,Q=V&&V.isDepthTexture?V.type:null,z=M(x.stencilBuffer,Q),we=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=ct(x);Ae(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,z,x.width,x.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,z,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,z,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,y)}else{const V=x.textures;for(let Q=0;Q<V.length;Q++){const z=V[Q],we=r.convert(z.format,z.colorSpace),de=r.convert(z.type),ne=w(z.internalFormat,we,de,z.colorSpace),oe=ct(x);D&&Ae(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ne,x.width,x.height):Ae(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ne,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ne,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(x.depthTexture);V.__renderTarget=x,(!V.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const Q=V.__webglTexture,z=ct(x);if(x.depthTexture.format===Ir)Ae(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Lr)Ae(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(y){const x=n.get(y),D=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",Q)};V.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=V}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const V=y.texture.mipmaps;V&&V.length>0?re(x.__webglFramebuffer[0],y):re(x.__webglFramebuffer,y)}else if(D){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),se(x.__webglDepthbuffer[V],y,!1);else{const Q=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,z)}}else{const V=y.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),se(x.__webglDepthbuffer,y,!1);else{const Q=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,z)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(y,x,D){const V=n.get(y);x!==void 0&&J(V.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&ye(y)}function L(y){const x=y.texture,D=n.get(y),V=n.get(x);y.addEventListener("dispose",R);const Q=y.textures,z=y.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,o.memory.textures++),z){D.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[de]=[];for(let ne=0;ne<x.mipmaps.length;ne++)D.__webglFramebuffer[de][ne]=s.createFramebuffer()}else D.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)D.__webglFramebuffer[de]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(we)for(let de=0,ne=Q.length;de<ne;de++){const oe=n.get(Q[de]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),o.memory.textures++)}if(y.samples>0&&Ae(y)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const ne=Q[de];D.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const oe=r.convert(ne.format,ne.colorSpace),j=r.convert(ne.type),ae=w(ne.internalFormat,oe,j,ne.colorSpace,y.isXRRenderTarget===!0),ve=ct(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,ae,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,D.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),se(D.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)J(D.__webglFramebuffer[de][ne],y,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ne);else J(D.__webglFramebuffer[de],y,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,ne=Q.length;de<ne;de++){const oe=Q[de],j=n.get(oe);let ae=s.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ae=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Oe(ae,oe),J(D.__webglFramebuffer,y,oe,s.COLOR_ATTACHMENT0+de,ae,0),m(oe)&&p(ae)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(de=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,V.__webglTexture),Oe(de,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)J(D.__webglFramebuffer[ne],y,x,s.COLOR_ATTACHMENT0,de,ne);else J(D.__webglFramebuffer,y,x,s.COLOR_ATTACHMENT0,de,0);m(x)&&p(de),t.unbindTexture()}y.depthBuffer&&ye(y)}function He(y){const x=y.textures;for(let D=0,V=x.length;D<V;D++){const Q=x[D];if(m(Q)){const z=T(y),we=n.get(Q).__webglTexture;t.bindTexture(z,we),p(z),t.unbindTexture()}}}const Fe=[],Ie=[];function Ce(y){if(y.samples>0){if(Ae(y)===!1){const x=y.textures,D=y.width,V=y.height;let Q=s.COLOR_BUFFER_BIT;const z=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(y),de=x.length>1;if(de)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const ne=y.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[oe]);const j=n.get(x[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,D,V,0,0,D,V,Q,s.NEAREST),c===!0&&(Fe.length=0,Ie.length=0,Fe.push(s.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Fe.push(z),Ie.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,we.__webglColorRenderbuffer[oe]);const j=n.get(x[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,j,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const x=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ct(y){return Math.min(i.maxSamples,y.samples)}function Ae(y){const x=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(y){const x=o.render.frame;d.get(y)!==x&&(d.set(y,x),y.update())}function Lt(y,x){const D=y.colorSpace,V=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==tn&&D!==Di&&(at.getTransfer(D)===St?(V!==Sn||Q!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function xt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=tt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ae}function aM(s,e){function t(n,i=Di){let r;const o=at.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===dl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Su)return s.BYTE;if(n===Eu)return s.SHORT;if(n===Cr)return s.UNSIGNED_SHORT;if(n===ll)return s.INT;if(n===cs)return s.UNSIGNED_INT;if(n===kn)return s.FLOAT;if(n===Gr)return s.HALF_FLOAT;if(n===Tu)return s.ALPHA;if(n===Au)return s.RGB;if(n===Sn)return s.RGBA;if(n===Ir)return s.DEPTH_COMPONENT;if(n===Lr)return s.DEPTH_STENCIL;if(n===ul)return s.RED;if(n===fl)return s.RED_INTEGER;if(n===Ru)return s.RG;if(n===pl)return s.RG_INTEGER;if(n===ml)return s.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Io)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===wc||n===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tc||n===Ac)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===Gc||n===zc||n===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===qc||n===jc||n===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zi({vertexShader:cM,fragmentShader:lM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new I(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hM extends $s{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new dM,p={},T=t.getContextAttributes();let w=null,M=null;const P=[],A=[],R=new De;let N=null;const S=new Yt;S.viewport=new pt;const E=new Yt;E.viewport=new pt;const U=[S,E],O=new yg;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=P[Z];return ee===void 0&&(ee=new Ba,P[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=P[Z];return ee===void 0&&(ee=new Ba,P[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=P[Z];return ee===void 0&&(ee=new Ba,P[Z]=ee),ee.getHandSpace()};function X(Z){const ee=A.indexOf(Z.inputSource);if(ee===-1)return;const J=P[ee];J!==void 0&&(J.update(Z.inputSource,Z.frame,l||o),J.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<P.length;Z++){const ee=A[Z];ee!==null&&(A[Z]=null,P[Z].disconnect(ee))}H=null,K=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(w),f=null,u=null,h=null,i=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,se=null,re=null;T.depth&&(re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=T.stencil?Lr:Ir,se=T.stencil?Pr:cs);const ye={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ls(u.textureWidth,u.textureHeight,{format:Sn,type:Kn,depthTexture:new Wu(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const J={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ls(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let ee=0;ee<Z.removed.length;ee++){const J=Z.removed[ee],se=A.indexOf(J);se>=0&&(A[se]=null,P[se].disconnect(J))}for(let ee=0;ee<Z.added.length;ee++){const J=Z.added[ee];let se=A.indexOf(J);if(se===-1){for(let ye=0;ye<P.length;ye++)if(ye>=A.length){A.push(J),se=ye;break}else if(A[ye]===null){A[ye]=J,se=ye;break}if(se===-1)break}const re=P[se];re&&re.connect(J)}}const W=new C,ue=new C;function ge(Z,ee,J){W.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(J.matrixWorld);const se=W.distanceTo(ue),re=ee.projectionMatrix.elements,ye=J.projectionMatrix.elements,tt=re[14]/(re[10]-1),L=re[14]/(re[10]+1),He=(re[9]+1)/re[5],Fe=(re[9]-1)/re[5],Ie=(re[8]-1)/re[0],Ce=(ye[8]+1)/ye[0],ct=tt*Ie,Ae=tt*Ce,Ye=se/(-Ie+Ce),Lt=Ye*-Ie;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),re[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xt=tt+Ye,y=L+Ye,x=ct-Lt,D=Ae+(se-Lt),V=He*L/y*xt,Q=Fe*L/y*xt;Z.projectionMatrix.makePerspective(x,D,V,Q,xt,y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ee(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,J=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(J=m.depthFar)),O.near=E.near=S.near=ee,O.far=E.far=S.far=J,(H!==O.near||K!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,K=O.far),O.layers.mask=Z.layers.mask|6,S.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const se=Z.parent,re=O.cameras;Ee(O,se);for(let ye=0;ye<re.length;ye++)Ee(re[ye],se);re.length===2?ge(O,S,E):O.projectionMatrix.copy(S.projectionMatrix),Oe(Z,O,se)};function Oe(Z,ee,J){J===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(J.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let Qe=null;function je(Z,ee){if(d=ee.getViewerPose(l||o),g=ee,d!==null){const J=d.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let se=!1;J.length!==O.cameras.length&&(O.cameras.length=0,se=!0);for(let L=0;L<J.length;L++){const He=J[L];let Fe=null;if(f!==null)Fe=f.getViewport(He);else{const Ce=h.getViewSubImage(u,He);Fe=Ce.viewport,L===0&&(e.setRenderTargetTextures(M,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(M))}let Ie=U[L];Ie===void 0&&(Ie=new Yt,Ie.layers.enable(L),Ie.viewport=new pt,U[L]=Ie),Ie.matrix.fromArray(He.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(He.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),L===0&&(O.matrix.copy(Ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),se===!0&&O.cameras.push(Ie)}const re=i.enabledFeatures;if(re&&re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(J[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<J.length;L++){const He=J[L].camera;if(He){let Fe=p[He];Fe||(Fe=new Xu,p[He]=Fe);const Ie=h.getCameraImage(He);Fe.sourceTexture=Ie}}}}for(let J=0;J<P.length;J++){const se=A[J],re=P[J];se!==null&&re!==void 0&&re.update(se,ee,l||o)}Qe&&Qe(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ke=new Zu;Ke.setAnimationLoop(je),this.setAnimationLoop=function(Z){Qe=Z},this.dispose=function(){}}}const Ki=new $n,uM=new $e;function fM(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ou(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,M=T.envMapRotation;w&&(m.envMap.value=w,Ki.copy(M),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(Ki)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pM(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const M=w.program;n.uniformBlockBinding(T,M)}function l(T,w){let M=i[T.id];M===void 0&&(g(T),M=d(T),i[T.id]=M,T.addEventListener("dispose",m));const P=w.program;n.updateUBOMapping(T,P);const A=e.render.frame;r[T.id]!==A&&(u(T),r[T.id]=A)}function d(T){const w=h();T.__bindingPointIndex=w;const M=s.createBuffer(),P=T.__size,A=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const w=i[T.id],M=T.uniforms,P=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let A=0,R=M.length;A<R;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,E=N.length;S<E;S++){const U=N[S];if(f(U,A,S,P)===!0){const O=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let X=0;X<H.length;X++){const $=H[X],ie=_($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,O+K,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,K),K+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,w,M,P){const A=T.value,R=w+"_"+M;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const N=P[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(T){const w=T.uniforms;let M=0;const P=16;for(let R=0,N=w.length;R<N;R++){const S=Array.isArray(w[R])?w[R]:[w[R]];for(let E=0,U=S.length;E<U;E++){const O=S[E],H=Array.isArray(O.value)?O.value:[O.value];for(let K=0,X=H.length;K<X;K++){const $=H[K],ie=_($),W=M%P,ue=W%ie.boundary,ge=W+ue;M+=ue,ge!==0&&P-ge<ie.storage&&(M+=P-ge),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=ie.storage}}}const A=M%P;return A>0&&(M+=P-A),T.__size=M,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class nf{constructor(e={}){const{canvas:t=tm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=Vt;let A=0,R=0,N=null,S=-1,E=null;const U=new pt,O=new pt;let H=null;const K=new qe(0);let X=0,$=t.width,ie=t.height,W=1,ue=null,ge=null;const Ee=new pt(0,0,$,ie),Oe=new pt(0,0,$,ie);let Qe=!1;const je=new Sl;let Ke=!1,Z=!1;const ee=new $e,J=new C,se=new pt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function tt(){return N===null?W:1}let L=n;function He(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const B="webgl2";if(L=He(B,b),L===null)throw He(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,Ie,Ce,ct,Ae,Ye,Lt,xt,y,x,D,V,Q,z,we,de,ne,oe,j,ae,ve,_e,he,Ue;function F(){Fe=new bv(L),Fe.init(),_e=new aM(L,Fe),Ie=new vv(L,Fe,e,_e),Ce=new rM(L,Fe),Ie.reversedDepthBuffer&&u&&Ce.buffers.depth.setReversed(!0),ct=new Rv(L),Ae=new Yx,Ye=new oM(L,Fe,Ce,Ae,Ie,_e,ct),Lt=new Mv(M),xt=new wv(M),y=new Ng(L),he=new gv(L,y),x=new Tv(L,y,ct,he),D=new Pv(L,x,y,ct),j=new Cv(L,Ie,Ye),de=new xv(Ae),V=new Xx(M,Lt,xt,Fe,Ie,he,de),Q=new fM(M,Ae),z=new jx,we=new eM(Fe),oe=new mv(M,Lt,xt,Ce,D,f,c),ne=new iM(M,D,Ie),Ue=new pM(L,ct,Ie,Ce),ae=new _v(L,Fe,ct),ve=new Av(L,Fe,ct),ct.programs=V.programs,M.capabilities=Ie,M.extensions=Fe,M.properties=Ae,M.renderLists=z,M.shadowMap=ne,M.state=Ce,M.info=ct}F();const ce=new hM(M,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize($,ie,!1))},this.getSize=function(b){return b.set($,ie)},this.setSize=function(b,B,Y=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,ie=B,t.width=Math.floor(b*W),t.height=Math.floor(B*W),Y===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set($*W,ie*W).floor()},this.setDrawingBufferSize=function(b,B,Y){$=b,ie=B,W=Y,t.width=Math.floor(b*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,B,Y,q){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,B,Y,q),Ce.viewport(U.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Oe)},this.setScissor=function(b,B,Y,q){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,B,Y,q),Ce.scissor(O.copy(Oe).multiplyScalar(W).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(b){Ce.setScissorTest(Qe=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,Y=!0){let q=0;if(b){let k=!1;if(N!==null){const pe=N.texture.format;k=pe===ml||pe===pl||pe===fl}if(k){const pe=N.texture.type,Se=pe===Kn||pe===cs||pe===Cr||pe===Pr||pe===dl||pe===hl,Le=oe.getClearColor(),Pe=oe.getClearAlpha(),Ve=Le.r,We=Le.g,Be=Le.b;Se?(g[0]=Ve,g[1]=We,g[2]=Be,g[3]=Pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ve,_[1]=We,_[2]=Be,_[3]=Pe,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}B&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",le,!1),oe.dispose(),z.dispose(),we.dispose(),Ae.dispose(),Lt.dispose(),xt.dispose(),D.dispose(),he.dispose(),Ue.dispose(),V.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",cn),ce.removeEventListener("sessionend",Yr),ti.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=ct.autoReset,B=ne.enabled,Y=ne.autoUpdate,q=ne.needsUpdate,k=ne.type;F(),ct.autoReset=b,ne.enabled=B,ne.autoUpdate=Y,ne.needsUpdate=q,ne.type=k}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const B=b.target;B.removeEventListener("dispose",te),Re(B)}function Re(b){Ge(b),Ae.remove(b)}function Ge(b){const B=Ae.get(b).programs;B!==void 0&&(B.forEach(function(Y){V.releaseProgram(Y)}),b.isShaderMaterial&&V.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Y,q,k,pe){B===null&&(B=re);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Le=Yf(b,B,Y,q,k);Ce.setMaterial(q,Se);let Pe=Y.index,Ve=1;if(q.wireframe===!0){if(Pe=x.getWireframeAttribute(Y),Pe===void 0)return;Ve=2}const We=Y.drawRange,Be=Y.attributes.position;let ot=We.start*Ve,yt=(We.start+We.count)*Ve;pe!==null&&(ot=Math.max(ot,pe.start*Ve),yt=Math.min(yt,(pe.start+pe.count)*Ve)),Pe!==null?(ot=Math.max(ot,0),yt=Math.min(yt,Pe.count)):Be!=null&&(ot=Math.max(ot,0),yt=Math.min(yt,Be.count));const Dt=yt-ot;if(Dt<0||Dt===1/0)return;he.setup(k,q,Le,Y,Pe);let wt,Et=ae;if(Pe!==null&&(wt=y.get(Pe),Et=ve,Et.setIndex(wt)),k.isMesh)q.wireframe===!0?(Ce.setLineWidth(q.wireframeLinewidth*tt()),Et.setMode(L.LINES)):Et.setMode(L.TRIANGLES);else if(k.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),Ce.setLineWidth(ke*tt()),k.isLineSegments?Et.setMode(L.LINES):k.isLineLoop?Et.setMode(L.LINE_LOOP):Et.setMode(L.LINE_STRIP)}else k.isPoints?Et.setMode(L.POINTS):k.isSprite&&Et.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,Ct=k._multiDrawCounts,ht=k._multiDrawCount,ln=Pe?y.get(Pe).bytesPerElement:1,us=Ae.get(q).currentProgram.getUniforms();for(let dn=0;dn<ht;dn++)us.setValue(L,"_gl_DrawID",dn),Et.render(ke[dn]/ln,Ct[dn])}else if(k.isInstancedMesh)Et.renderInstances(ot,Dt,k.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,ke);Et.renderInstances(ot,Dt,Ct)}else Et.render(ot,Dt)};function Mt(b,B,Y){b.transparent===!0&&b.side===Nt&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,jr(b,B,Y),b.side=Mi,b.needsUpdate=!0,jr(b,B,Y),b.side=Nt):jr(b,B,Y)}this.compile=function(b,B,Y=null){Y===null&&(Y=b),p=we.get(Y),p.init(B),w.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==Y&&b.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Le=pe[Se];Mt(Le,Y,k),q.add(Le)}else Mt(pe,Y,k),q.add(pe)}),p=w.pop(),q},this.compileAsync=function(b,B,Y=null){const q=this.compile(b,B,Y);return new Promise(k=>{function pe(){if(q.forEach(function(Se){Ae.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){k(b);return}setTimeout(pe,10)}Fe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let lt=null;function An(b){lt&&lt(b)}function cn(){ti.stop()}function Yr(){ti.start()}const ti=new Zu;ti.setAnimationLoop(An),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){lt=b,ce.setAnimationLoop(b),b===null?ti.stop():ti.start()},ce.addEventListener("sessionstart",cn),ce.addEventListener("sessionend",Yr),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,B,N),p=we.get(b,w.length),p.init(B),w.push(p),ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),je.setFromProjectionMatrix(ee,qn,B.reversedDepth),Z=this.localClippingEnabled,Ke=de.init(this.clippingPlanes,Z),m=z.get(b,T.length),m.init(),T.push(m),ce.enabled===!0&&ce.isPresenting===!0){const pe=M.xr.getDepthSensingMesh();pe!==null&&hs(pe,B,-1/0,M.sortObjects)}hs(b,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ue,ge),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&oe.addToRenderList(m,b),this.info.render.frame++,Ke===!0&&de.beginShadows();const Y=p.state.shadowsArray;ne.render(Y,b,B),Ke===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const pe=B.cameras;if(k.length>0)for(let Se=0,Le=pe.length;Se<Le;Se++){const Pe=pe[Se];zl(q,k,b,Pe)}ye&&oe.render(b);for(let Se=0,Le=pe.length;Se<Le;Se++){const Pe=pe[Se];Gl(m,b,Pe,Pe.viewport)}}else k.length>0&&zl(q,k,b,B),ye&&oe.render(b),Gl(m,b,B);N!==null&&R===0&&(Ye.updateMultisampleRenderTarget(N),Ye.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(M,b,B),he.resetDefaultState(),S=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],Ke===!0&&de.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function hs(b,B,Y,q){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||je.intersectsSprite(b)){q&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Se=D.update(b),Le=b.material;Le.visible&&m.push(b,Se,Le,Y,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||je.intersectsObject(b))){const Se=D.update(b),Le=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),se.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),se.copy(Se.boundingSphere.center)),se.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Le)){const Pe=Se.groups;for(let Ve=0,We=Pe.length;Ve<We;Ve++){const Be=Pe[Ve],ot=Le[Be.materialIndex];ot&&ot.visible&&m.push(b,Se,ot,Y,se.z,Be)}}else Le.visible&&m.push(b,Se,Le,Y,se.z,null)}}const pe=b.children;for(let Se=0,Le=pe.length;Se<Le;Se++)hs(pe[Se],B,Y,q)}function Gl(b,B,Y,q){const k=b.opaque,pe=b.transmissive,Se=b.transparent;p.setupLightsView(Y),Ke===!0&&de.setGlobalState(M.clippingPlanes,Y),q&&Ce.viewport(U.copy(q)),k.length>0&&qr(k,B,Y),pe.length>0&&qr(pe,B,Y),Se.length>0&&qr(Se,B,Y),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function zl(b,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ls(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Gr:Kn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const pe=p.state.transmissionRenderTarget[q.id],Se=q.viewport||U;pe.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);const Le=M.getRenderTarget(),Pe=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(pe),M.getClearColor(K),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),ye&&oe.render(Y);const We=M.toneMapping;M.toneMapping=Oi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Ke===!0&&de.setGlobalState(M.clippingPlanes,q),qr(b,Y,q),Ye.updateMultisampleRenderTarget(pe),Ye.updateRenderTargetMipmap(pe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let yt=0,Dt=B.length;yt<Dt;yt++){const wt=B[yt],Et=wt.object,ke=wt.geometry,Ct=wt.material,ht=wt.group;if(Ct.side===Nt&&Et.layers.test(q.layers)){const ln=Ct.side;Ct.side=Qt,Ct.needsUpdate=!0,Hl(Et,Y,q,ke,Ct,ht),Ct.side=ln,Ct.needsUpdate=!0,ot=!0}}ot===!0&&(Ye.updateMultisampleRenderTarget(pe),Ye.updateRenderTargetMipmap(pe))}M.setRenderTarget(Le,Pe,Ve),M.setClearColor(K,X),Be!==void 0&&(q.viewport=Be),M.toneMapping=We}function qr(b,B,Y){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pe=b.length;k<pe;k++){const Se=b[k],Le=Se.object,Pe=Se.geometry,Ve=Se.group;let We=Se.material;We.allowOverride===!0&&q!==null&&(We=q),Le.layers.test(Y.layers)&&Hl(Le,B,Y,Pe,We,Ve)}}function Hl(b,B,Y,q,k,pe){b.onBeforeRender(M,B,Y,q,k,pe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(M,B,Y,q,b,pe),k.transparent===!0&&k.side===Nt&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,M.renderBufferDirect(Y,B,q,k,b,pe),k.side=Mi,k.needsUpdate=!0,M.renderBufferDirect(Y,B,q,k,b,pe),k.side=Nt):M.renderBufferDirect(Y,B,q,k,b,pe),b.onAfterRender(M,B,Y,q,k,pe)}function jr(b,B,Y){B.isScene!==!0&&(B=re);const q=Ae.get(b),k=p.state.lights,pe=p.state.shadowsArray,Se=k.state.version,Le=V.getParameters(b,k.state,pe,B,Y),Pe=V.getProgramCacheKey(Le);let Ve=q.programs;q.environment=b.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(b.isMeshStandardMaterial?xt:Lt).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",te),Ve=new Map,q.programs=Ve);let We=Ve.get(Pe);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return Wl(b,Le),We}else Le.uniforms=V.getUniforms(b),b.onBeforeCompile(Le,M),We=V.acquireProgram(Le,Pe),Ve.set(Pe,We),q.uniforms=Le.uniforms;const Be=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=de.uniform),Wl(b,Le),q.needsLights=jf(b),q.lightsStateVersion=Se,q.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function Vl(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Lo.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Wl(b,B){const Y=Ae.get(b);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Yf(b,B,Y,q,k){B.isScene!==!0&&(B=re),Ye.resetTextureUnits();const pe=B.fog,Se=q.isMeshStandardMaterial?B.environment:null,Le=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tn,Pe=(q.isMeshStandardMaterial?xt:Lt).get(q.envMap||Se),Ve=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,yt=!!Y.morphAttributes.color;let Dt=Oi;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=M.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=wt!==void 0?wt.length:0,ke=Ae.get(q),Ct=p.state.lights;if(Ke===!0&&(Z===!0||b!==E)){const jt=b===E&&q.id===S;de.setState(q,b,jt)}let ht=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ct.state.version||ke.outputColorSpace!==Le||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Pe||q.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==de.numPlanes||ke.numIntersection!==de.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==Be||ke.morphNormals!==ot||ke.morphColors!==yt||ke.toneMapping!==Dt||ke.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,ke.__version=q.version);let ln=ke.currentProgram;ht===!0&&(ln=jr(q,B,k));let us=!1,dn=!1,nr=!1;const Pt=ln.getUniforms(),gn=ke.uniforms;if(Ce.useProgram(ln.program)&&(us=!0,dn=!0,nr=!0),q.id!==S&&(S=q.id,dn=!0),us||E!==b){Ce.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pt.setValue(L,"projectionMatrix",b.projectionMatrix),Pt.setValue(L,"viewMatrix",b.matrixWorldInverse);const nn=Pt.map.cameraPosition;nn!==void 0&&nn.setValue(L,J.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&Pt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,dn=!0,nr=!0)}if(k.isSkinnedMesh){Pt.setOptional(L,k,"bindMatrix"),Pt.setOptional(L,k,"bindMatrixInverse");const jt=k.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Pt.setValue(L,"boneTexture",jt.boneTexture,Ye))}k.isBatchedMesh&&(Pt.setOptional(L,k,"batchingTexture"),Pt.setValue(L,"batchingTexture",k._matricesTexture,Ye),Pt.setOptional(L,k,"batchingIdTexture"),Pt.setValue(L,"batchingIdTexture",k._indirectTexture,Ye),Pt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Pt.setValue(L,"batchingColorTexture",k._colorsTexture,Ye));const _n=Y.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&j.update(k,Y,ln),(dn||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,Pt.setValue(L,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gn.envMap.value=Pe,gn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),dn&&(Pt.setValue(L,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&qf(gn,nr),pe&&q.fog===!0&&Q.refreshFogUniforms(gn,pe),Q.refreshMaterialUniforms(gn,q,W,ie,p.state.transmissionRenderTarget[b.id]),Lo.upload(L,Vl(ke),gn,Ye)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Lo.upload(L,Vl(ke),gn,Ye),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(L,"center",k.center),Pt.setValue(L,"modelViewMatrix",k.modelViewMatrix),Pt.setValue(L,"normalMatrix",k.normalMatrix),Pt.setValue(L,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const jt=q.uniformsGroups;for(let nn=0,ga=jt.length;nn<ga;nn++){const Vi=jt[nn];Ue.update(Vi,ln),Ue.bind(Vi,ln)}}return ln}function qf(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function jf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,B,Y){const q=Ae.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ae.get(b.texture).__webglTexture=B,Ae.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const Y=Ae.get(b);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const Kf=L.createFramebuffer();this.setRenderTarget=function(b,B=0,Y=0){N=b,A=B,R=Y;let q=!0,k=null,pe=!1,Se=!1;if(b){const Pe=Ae.get(b);if(Pe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Pe.__webglFramebuffer===void 0)Ye.setupRenderTarget(b);else if(Pe.__hasExternalTextures)Ye.rebindTextures(b,Ae.get(b.texture).__webglTexture,Ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(Pe.__boundDepthTexture!==Be){if(Be!==null&&Ae.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(b)}}const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const We=Ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[B])?k=We[B][Y]:k=We[B],pe=!0):b.samples>0&&Ye.useMultisampledRTT(b)===!1?k=Ae.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[Y]:k=We,U.copy(b.viewport),O.copy(b.scissor),H=b.scissorTest}else U.copy(Ee).multiplyScalar(W).floor(),O.copy(Oe).multiplyScalar(W).floor(),H=Qe;if(Y!==0&&(k=Kf),Ce.bindFramebuffer(L.FRAMEBUFFER,k)&&q&&Ce.drawBuffers(b,k),Ce.viewport(U),Ce.scissor(O),Ce.setScissorTest(H),pe){const Pe=Ae.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,Y)}else if(Se){const Pe=B;for(let Ve=0;Ve<b.textures.length;Ve++){const We=Ae.get(b.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,We.__webglTexture,Y,Pe)}}else if(b!==null&&Y!==0){const Pe=Ae.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(b,B,Y,q,k,pe,Se,Le=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){Ce.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Ve=b.textures[Le],We=Ve.format,Be=Ve.type;if(!Ie.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-q&&Y>=0&&Y<=b.height-k&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Le),L.readPixels(B,Y,q,k,_e.convert(We),_e.convert(Be),pe))}finally{const Ve=N!==null?Ae.get(N).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(b,B,Y,q,k,pe,Se,Le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe)if(B>=0&&B<=b.width-q&&Y>=0&&Y<=b.height-k){Ce.bindFramebuffer(L.FRAMEBUFFER,Pe);const Ve=b.textures[Le],We=Ve.format,Be=Ve.type;if(!Ie.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ot),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Le),L.readPixels(B,Y,q,k,_e.convert(We),_e.convert(Be),0);const yt=N!==null?Ae.get(N).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,yt);const Dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nm(L,Dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(ot),L.deleteSync(Dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,Y=0){const q=Math.pow(2,-Y),k=Math.floor(b.image.width*q),pe=Math.floor(b.image.height*q),Se=B!==null?B.x:0,Le=B!==null?B.y:0;Ye.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Se,Le,k,pe),Ce.unbindTexture()};const $f=L.createFramebuffer(),Zf=L.createFramebuffer();this.copyTextureToTexture=function(b,B,Y=null,q=null,k=0,pe=null){pe===null&&(k!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let Se,Le,Pe,Ve,We,Be,ot,yt,Dt;const wt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(Y!==null)Se=Y.max.x-Y.min.x,Le=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Ve=Y.min.x,We=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const _n=Math.pow(2,-k);Se=Math.floor(wt.width*_n),Le=Math.floor(wt.height*_n),b.isDataArrayTexture?Pe=wt.depth:b.isData3DTexture?Pe=Math.floor(wt.depth*_n):Pe=1,Ve=0,We=0,Be=0}q!==null?(ot=q.x,yt=q.y,Dt=q.z):(ot=0,yt=0,Dt=0);const Et=_e.convert(B.format),ke=_e.convert(B.type);let Ct;B.isData3DTexture?(Ye.setTexture3D(B,0),Ct=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ye.setTexture2DArray(B,0),Ct=L.TEXTURE_2D_ARRAY):(Ye.setTexture2D(B,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),ln=L.getParameter(L.UNPACK_IMAGE_HEIGHT),us=L.getParameter(L.UNPACK_SKIP_PIXELS),dn=L.getParameter(L.UNPACK_SKIP_ROWS),nr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const Pt=b.isDataArrayTexture||b.isData3DTexture,gn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const _n=Ae.get(b),jt=Ae.get(B),nn=Ae.get(_n.__renderTarget),ga=Ae.get(jt.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let Vi=0;Vi<Pe;Vi++)Pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(b).__webglTexture,k,Be+Vi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(B).__webglTexture,pe,Dt+Vi)),L.blitFramebuffer(Ve,We,Se,Le,ot,yt,Se,Le,L.DEPTH_BUFFER_BIT,L.NEAREST);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Ae.has(b)){const _n=Ae.get(b),jt=Ae.get(B);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,$f),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zf);for(let nn=0;nn<Pe;nn++)Pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_n.__webglTexture,k,Be+nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_n.__webglTexture,k),gn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jt.__webglTexture,pe,Dt+nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jt.__webglTexture,pe),k!==0?L.blitFramebuffer(Ve,We,Se,Le,ot,yt,Se,Le,L.COLOR_BUFFER_BIT,L.NEAREST):gn?L.copyTexSubImage3D(Ct,pe,ot,yt,Dt+nn,Ve,We,Se,Le):L.copyTexSubImage2D(Ct,pe,ot,yt,Ve,We,Se,Le);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ct,pe,ot,yt,Dt,Se,Le,Pe,Et,ke,wt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,pe,ot,yt,Dt,Se,Le,Pe,Et,wt.data):L.texSubImage3D(Ct,pe,ot,yt,Dt,Se,Le,Pe,Et,ke,wt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,ot,yt,Se,Le,Et,ke,wt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,ot,yt,wt.width,wt.height,Et,wt.data):L.texSubImage2D(L.TEXTURE_2D,pe,ot,yt,Se,Le,Et,ke,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ln),L.pixelStorei(L.UNPACK_SKIP_PIXELS,us),L.pixelStorei(L.UNPACK_SKIP_ROWS,dn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nr),pe===0&&B.generateMipmaps&&L.generateMipmap(Ct),Ce.unbindTexture()},this.initRenderTarget=function(b){Ae.get(b).__webglFramebuffer===void 0&&Ye.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ye.setTextureCube(b,0):b.isData3DTexture?Ye.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ye.setTexture2DArray(b,0):Ye.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){A=0,R=0,N=null,Ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function dh(s,e){if(e===Rp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$c||e===Cu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===$c)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class sf extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new DM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Mr.extractUrlBase(e);o=Mr.resolveURL(l,this.path)}else o=Mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ku(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rf){try{o[st.KHR_BINARY_GLTF]=new NM(e)}catch(h){i&&i(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new qM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new _M;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new UM(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new FM;break;case st.KHR_MESH_QUANTIZATION:o[h]=new OM;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function mM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gM{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new qe(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],tn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Us(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Jt(d),l.distance=h;break;case"spot":l=new $u(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class _M{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){const i=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(i)}}class vM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class yM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class TM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Vt)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class PM{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class IM{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class LM{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class DM{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(d=>(c[l]=d,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const _=new $e,m=new C,p=new Hi,T=new C(1,1,1),w=new Lm(g.geometry,g.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&T.fromBufferAttribute(c.SCALE,M),w.setMatrixAt(M,_.compose(m,p,T));for(const M in c)if(M==="_COLOR_0"){const P=c[M];w.instanceColor=new Jc(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);At.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const rf="glTF",hr=12,hh={JSON:1313821514,BIN:5130562};class NM{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hr,r=new DataView(e,hr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===hh.JSON){const l=new Uint8Array(e,hr+o,a);this.content=n.decode(l)}else if(c===hh.BIN){const l=hr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const d in o){const h=nl[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=nl[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],f=Fs[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,tn,u)})})}}class FM{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OM{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class of extends Vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,d=i-t,h=(n-t)/d,u=h*h,f=u*h,g=e*l,_=g-l,m=-2*f+3*u,p=f-u,T=1-m,w=p-u+h;for(let M=0;M!==a;M++){const P=o[_+M+a],A=o[_+M+c]*d,R=o[g+M+a],N=o[g+M]*d;r[M]=T*P+w*A+m*R+p*N}return r}}const BM=new Hi;class kM extends of{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return BM.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uh={9728:en,9729:pn,9984:yu,9985:Ao,9986:pr,9987:pi},fh={33071:Yn,33648:Bo,10497:Gi},tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GM={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),s.DefaultMaterial}function $i(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function VM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WM(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ic(t.attributes):e=s.indices+":"+ic(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ic(s.targets[n]);return e}function ic(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function il(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const YM=new $e;class qM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new pg(this.options.manager):this.textureLoader=new Mg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ku(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $i(r,a,i),Vn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,d]of o.children.entries())r(d,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Mr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=tc[i.type],a=Fs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new qt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=tc[i.type],l=Fs[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(u/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(T);w||(_=new l(a,p*f,i.count*f/d),w=new Am(_,f/d),t.cache.add(T,w)),m=new Ml(w,c,u%f/d,g)}else a===null?_=new l(i.count*c):_=new l(a,u,i.count*c),m=new qt(_,c,g);if(i.sparse!==void 0){const p=tc.SCALAR,T=Fs[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,P=new T(o[1],w,i.sparse.count*p),A=new l(o[2],M,i.sparse.count*c);a!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,N=P.length;R<N;R++){const S=P[R];if(m.setX(S,A[R*c]),c>=2&&m.setY(S,A[R*c+1]),c>=3&&m.setZ(S,A[R*c+2]),c>=4&&m.setW(S,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return d.magFilter=uh[u.magFilter]||pn,d.minFilter=uh[u.minFilter]||pi,d.wrapS=fh[u.wrapS]||Gi,d.wrapT=fh[u.wrapT]||Gi,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==en&&d.minFilter!==pn,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,u(m)}),t.load(Mr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Vn(h,o),h.userData.mimeType=o.mimeType||XM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new wl,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new El,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],tn),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nt);const d=r.alphaMode||nc.OPAQUE;if(d===nc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===nc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==rt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rt){const h=r.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==rt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Vn(h,r),t.associations.set(h,{materials:e}),r.extensions&&$i(i,h,r),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ph(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],d=WM(l),h=i[d];if(h)o.push(h.promise);else{let u;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=ph(new Gt,l,t),i[d]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const d=o[c].material===void 0?zM(this.cache):this.getDependency("material",o[c].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const _=d[f],m=o[f];let p;const T=l[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Cm(_,T):new I(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?p.geometry=dh(p.geometry,Cu):m.mode===yn.TRIANGLE_FAN&&(p.geometry=dh(p.geometry,$c));else if(m.mode===yn.LINES)p=new Fm(_,T);else if(m.mode===yn.LINE_STRIP)p=new sa(_,T);else if(m.mode===yn.LINE_LOOP)p=new Om(_,T);else if(m.mode===yn.POINTS)p=new Vu(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&VM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vn(p,r),m.extensions&&$i(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&$i(i,h[0],r),h[0];const u=new Ne;r.extensions&&$i(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Mn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ll(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,d=o.length;l<d;l++){const h=o[l];if(h){a.push(h);const u=new $e;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yl(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let w=0,M=u.length;w<M;w++){const P=u[w],A=f[w],R=g[w],N=_[w],S=m[w];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const E=n._createAnimationTracks(P,A,R,N,S);if(E)for(let U=0;U<E.length;U++)p.push(E[U])}const T=new ag(r,void 0,p);return Vn(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,d=a.length;l<d;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,YM)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let d;if(r.isBone===!0?d=new zu:l.length>1?d=new Ne:l.length===1?d=l[0]:d=new At,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=o),Vn(d,r),r.extensions&&$i(n,d,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(d);i.associations.set(d,{...h})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ne;n.name&&(r.name=i.createUniqueName(n.name)),Vn(r,n),n.extensions&&$i(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let d=0,h=c.length;d<h;d++)r.add(c[d]);const l=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof jn||u instanceof Ot)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ci[r.path]===Ci.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Ci[r.path]){case Ci.weights:l=Xs;break;case Ci.rotation:l=Ys;break;case Ci.translation:case Ci.scale:l=qs;break;default:n.itemSize===1?l=Xs:l=qs;break}const d=i.interpolation!==void 0?GM[i.interpolation]:Nr,h=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+Ci[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=il(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ys?kM:of;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jM(s,e,t){const n=e.attributes,i=new yi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const d=il(Fs[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=il(Fs[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Qn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ph(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=nl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Vn(s,e),jM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HM(s,e.targets,t):s})}const v={stage:0,chanda:0,score:0,familiesVisited:0,invitedFamilies:[],activeFamily:null,isDialogueOpen:!1,audioEnabled:!0,totalChandaGoal:1150,currentObjective:"Visit all 8 devotee families along the street, collect Chanda & invite them for Bappa's festival.",destination:null,isMapOpen:!1,isShopOpen:!1,selectedIdol:"bal",selectedIdolName:"Shri Bal Ganesha",selectedIdolPrice:300,selectedIdolModel:"/models/ganesha_bal.glb",purchasedIdol:null,stage2Completed:!1,stage3:{started:!1,mandapReached:!1,isRevealing:!1,clothProgress:0,revealed:!1,completed:!1,songPlaying:!1},stage4:{started:!1,completed:!1,placedCount:0,totalItems:8,items:{toran:!1,garlands:!1,samaiLamps:!1,cushions:!1,fruits:!1,kalash:!1,modaks:!1,incense:!1}},stage5:{started:!1,completed:!1,currentStep:0,totalSteps:7,offerings:{diya:!1,durva:!1,flowers:!1,fruits:!1,coconut:!1,modaks:!1,incense:!1}},stage6:{started:!1,isAartiActive:!1,completed:!1,currentRound:0,totalRounds:3,totalAngleRotated:0,lastPointerAngle:null},stage7:{started:!1,completed:!1}},hi=[{id:1,name:"Ravi Family",houseNum:"Villa 101 — Shanti Sadan",side:"left",posX:-9,posZ:-45,contribution:100,wallColor:14056013,doorColor:4859410,members:[{role:"father",name:"Ravi",gender:"m",attire:"kurta",color:14034984,skin:13933426,height:1.76},{role:"mother",name:"Sunita",gender:"f",attire:"saree",color:10165584,skin:14592642,height:1.63},{role:"child",name:"Aarav",gender:"m",attire:"kid",color:16098851,skin:13933426,height:1.15}],dialogue:["Namaste! Happy Ganesh Chaturthi!","Thank you for organizing the festival and coming to invite our family.","Here is our humble contribution for Bappa's celebration."]},{id:2,name:"Sharma Family",houseNum:"Villa 103 — Anand Bhavan",side:"left",posX:-9,posZ:-15,contribution:150,wallColor:14264150,doorColor:4004870,members:[{role:"grandfather",name:"Pandit Sharma",gender:"m",attire:"dhoti",color:16117734,skin:12946524,height:1.7,elder:!0},{role:"mother",name:"Meera",gender:"f",attire:"saree",color:1802105,skin:14592642,height:1.62}],dialogue:["Radhe Radhe! Bappa's arrival fills our whole lane with divine joy.","May Lord Vighnaharta remove every obstacle from your life.","Here is our auspicious offering for the community pandal."]},{id:3,name:"Deshmukh Family",houseNum:"Villa 105 — Ganesh Kripa",side:"left",posX:-9,posZ:15,contribution:200,wallColor:13067350,doorColor:5120785,members:[{role:"father",name:"Anand Deshmukh",gender:"m",attire:"kurta",color:2390944,skin:13933426,height:1.77},{role:"mother",name:"Pooja",gender:"f",attire:"saree",color:14034984,skin:14592642,height:1.64},{role:"child",name:"Tanvi",gender:"f",attire:"kid",color:16765286,skin:13933426,height:1.12}],dialogue:["Ganpati Bappa Morya! Welcome to our home!","We have fresh handmade modaks ready for the deity.","Please accept our family's contribution with utmost devotion!"]},{id:4,name:"Patel Family",houseNum:"Villa 107 — Shivam Nivas",side:"left",posX:-9,posZ:45,contribution:100,wallColor:13410395,doorColor:3807499,members:[{role:"father",name:"Bhavesh Patel",gender:"m",attire:"kurta",color:4684184,skin:13933426,height:1.75},{role:"mother",name:"Kiran",gender:"f",attire:"saree",color:8599788,skin:14592642,height:1.62}],dialogue:["Jai Shri Ganesh! It is wonderful to see our youth taking the lead.","The festival brings our entire neighborhood together as one family.","Here is our contribution to help prepare the grand pandal!"]},{id:5,name:"Kulkarni Family",houseNum:"Villa 102 — Mangal Murti",side:"right",posX:9,posZ:-45,contribution:250,wallColor:12342075,doorColor:4070672,members:[{role:"father",name:"Suresh Kulkarni",gender:"m",attire:"kurta",color:13715803,skin:13933426,height:1.78},{role:"mother",name:"Anuradha",gender:"f",attire:"saree",color:15576649,skin:14592642,height:1.64},{role:"child",name:"Rohan",gender:"m",attire:"kid",color:31116,skin:13933426,height:1.18}],dialogue:["Namaskar! Happy Ganesh Utsav to you and your festival team!","We have been eagerly awaiting the arrival of the festival samiti.","We are blessed to offer this special contribution for Bappa!"]},{id:6,name:"Iyer Family",houseNum:"Villa 104 — Sri Nilayam",side:"right",posX:9,posZ:-15,contribution:150,wallColor:14393185,doorColor:4332555,members:[{role:"grandfather",name:"Subramanian Iyer",gender:"m",attire:"dhoti",color:16051944,skin:12946524,height:1.68,elder:!0},{role:"father",name:"Karthik Iyer",gender:"m",attire:"kurta",color:2976335,skin:13933426,height:1.76}],dialogue:["Namaskaram! May Lord Vinayaka bestow health and peace upon all.","The traditional rice kolam at our door is drawn to welcome Bappa.","Kindly accept our humble offering for the grand Aarti."]},{id:7,name:"Verma Family",houseNum:"Villa 106 — Ashirwad",side:"right",posX:9,posZ:15,contribution:100,wallColor:14057299,doorColor:4727060,members:[{role:"father",name:"Vikram Verma",gender:"m",attire:"kurta",color:3835647,skin:13933426,height:1.75},{role:"mother",name:"Shalini",gender:"f",attire:"saree",color:7473591,skin:14592642,height:1.63}],dialogue:["Namaste! Wishing you auspicious beginnings this Ganesh Chaturthi!","Count our family in for all the pandal decorations and bhajan singing.","Here is our Chanda token for the festival guardian!"]},{id:8,name:"Reddy Family",houseNum:"Villa 108 — Sai Nivas",side:"right",posX:9,posZ:45,contribution:200,wallColor:12609850,doorColor:3544585,members:[{role:"father",name:"Prabhakar Reddy",gender:"m",attire:"kurta",color:14222377,skin:13933426,height:1.77},{role:"mother",name:"Lakshmi",gender:"f",attire:"saree",color:3715072,skin:14592642,height:1.63},{role:"child",name:"Siddharth",gender:"m",attire:"kid",color:16758531,skin:13933426,height:1.14}],dialogue:["Namaskaram! It is the most joyous celebration of the entire year!","We are ready to welcome Bappa with beating dhol-tasha and marigolds.","Here is our family's festive contribution for the grand event!"]}],gi=[{id:"bal",name:"Shri Bal Ganesha",tagline:"Youthful & Sweet",price:300,modelUrl:"/models/ganesha_bal.glb",desc:"The adorable youthful Bal Ganesha seated upon an open 16-petal blooming lotus with a golden plate of steamed modaks.",previewScale:1.05,previewOffsetY:-.38,previewRotY:0,worldRotY:0,mandapRotY:0,mandapScale:.95},{id:"eco",name:"Eco Ganesha",tagline:"100% Shadu Mati",price:400,modelUrl:"/models/ganesha_eco.glb",desc:"Handcrafted pure terracotta Shadu clay idol with sacred peepal leaf base and natural earthy textures.",previewScale:1.05,previewOffsetY:-.38,previewRotY:0,worldRotY:0,mandapRotY:0,mandapScale:.95}];class KM{constructor(){this.ctx=null,this.isMuted=!1,this.volume=.75,this.festivalMusic=null,this.aartiAudio=null,this.bellAudio=null,this.playlist=["/assets/audio/jai_jai_ganesha.wav","/assets/audio/festival_song_1.wav","/assets/audio/festival_song_2.wav","/assets/audio/festival_song_3.wav"],this.songTitles=["Ekadantaya Vakratundaya (Ganeshay Dheemahi) — Shankar Mahadevan","Jai Jai Ganesha (Telugu Bhajan) — S.P. Balasubrahmanyam","Vinayaka Chavithi Mahotsavam (Telugu Devotional)","Ganapati Bappa Moriya (Celebration Dhol Tasha)"],this.currentSongIndex=0,this.currentMode="idle",this.isFestivalMusicActive=!1,this.isAartiActive=!1,this.fadeTimer=null,this.synthTimer=null,this.hasUserInteracted=!1,this.pendingPlayMode=null,this.soundCooldowns={},this.fanfareTimers=[],this.setupAutoplayUnblocker()}clearFanfareTimers(){this.fanfareTimers&&this.fanfareTimers.length>0&&(this.fanfareTimers.forEach(e=>clearTimeout(e)),this.fanfareTimers=[])}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setupAutoplayUnblocker(){const e=()=>{this.hasUserInteracted=!0,this.init(),this.pendingPlayMode==="festival"?(this.pendingPlayMode=null,this.playFestivalMusic()):this.pendingPlayMode==="aarti"&&(this.pendingPlayMode=null,this.playAarathi())};window.addEventListener("pointerdown",e,{passive:!0,once:!0}),window.addEventListener("keydown",e,{passive:!0,once:!0}),window.addEventListener("click",e,{passive:!0,once:!0})}playFestivalMusic(e=null){if(this.init(),this.currentMode="festival",this.clearFanfareTimers(),(this.isAartiActive||this.aartiAudio)&&this.stopAarathi(!1),this.festivalMusic)try{this.festivalMusic.pause(),this.festivalMusic.currentTime=0}catch{}if(this.bellAudio)try{this.bellAudio.pause(),this.bellAudio.currentTime=0}catch{}this.fadeTimer&&(clearInterval(this.fadeTimer),this.fadeTimer=null);const t="Ekadantaya Vakratundaya (Ganeshay Dheemahi) — Shankar Mahadevan";this.playYoutubeStream(),this.isFestivalMusicActive=!0,this.updateHudSongInfo(t,!0,!1)}playYoutubeStream(){try{const e=document.getElementById("festival-yt-player");e&&e.contentWindow&&(e.contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*"),this.isMuted?e.contentWindow.postMessage(JSON.stringify({event:"command",func:"mute",args:[]}),"*"):(e.contentWindow.postMessage(JSON.stringify({event:"command",func:"unMute",args:[]}),"*"),e.contentWindow.postMessage(JSON.stringify({event:"command",func:"setVolume",args:[85]}),"*")))}catch{}}pauseYoutubeStream(){try{const e=document.getElementById("festival-yt-player");e&&e.contentWindow&&e.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:[]}),"*")}catch{}}nextFestivalSong(){this.currentSongIndex=(this.currentSongIndex+1)%this.playlist.length,this.playFestivalMusic()}stopFestivalMusic(){if(this.currentMode="idle",this.isFestivalMusicActive=!1,this.pauseYoutubeStream(),this.fadeTimer&&(clearInterval(this.fadeTimer),this.fadeTimer=null),this.festivalMusic)try{this.festivalMusic.pause(),this.festivalMusic.currentTime=0}catch{}this.updateHudSongInfo("",!1,!1)}stopAllAudio(){if(this.clearFanfareTimers(),this.stopFestivalMusic(),this.stopAarathi(!1),this.pauseYoutubeStream(),this.bellAudio)try{this.bellAudio.pause(),this.bellAudio.currentTime=0}catch{}}fadeOutMusic(e=1e3,t=null){if(this.pauseYoutubeStream(),!this.festivalMusic||this.festivalMusic.paused){this.isFestivalMusicActive=!1,t&&t();return}this.fadeTimer&&(clearInterval(this.fadeTimer),this.fadeTimer=null);const n=this.festivalMusic.volume,i=16,r=Math.max(20,e/i);let o=0;this.fadeTimer=setInterval(()=>{o++;const a=Math.max(0,1-o/i);if(this.festivalMusic&&(this.festivalMusic.volume=n*a),o>=i){if(clearInterval(this.fadeTimer),this.fadeTimer=null,this.festivalMusic)try{this.festivalMusic.pause(),this.festivalMusic.volume=this.volume}catch{}this.isFestivalMusicActive=!1,t&&t()}},r)}playAarathi(){this.init(),this.currentMode="aarti",this.fadeOutMusic(900,()=>{this._startAartiAudio()})}_startAartiAudio(){this.aartiAudio||(this.aartiAudio=new Audio,this.aartiAudio.preload="auto",this.aartiAudio.addEventListener("ended",()=>{console.log("[Aarathi] Aarathi track concluded. Resuming continuous Telugu festival music."),this.isAartiActive=!1,this.playFestivalMusic()}),this.aartiAudio.addEventListener("error",()=>{console.info("[Aarathi] Audio file fallback: playing continuous temple bells."),this.isAartiActive=!0,this.updateHudSongInfo("Ganesha Sacred Aarathi",!0,!1)}),this.aartiAudio.addEventListener("playing",()=>{this.isAartiActive=!0,this.updateHudSongInfo("Ganesha Sacred Aarathi",!0,!1)}));const e="/assets/audio/ganesha_aarti.wav";this.aartiAudio.src=e,this.aartiAudio.volume=this.isMuted?0:Math.min(1,this.volume*1.15);const t=this.aartiAudio.play();t!==void 0&&t.then(()=>{this.isAartiActive=!0,this.updateHudSongInfo("Ganesha Sacred Aarathi",!0,!1)}).catch(n=>{n.name==="NotAllowedError"&&(this.pendingPlayMode="aarti"),this.isAartiActive=!0,this.updateHudSongInfo("Ganesha Sacred Aarathi",!0,!1)})}stopAarathi(e=!0){if(this.isAartiActive=!1,this.aartiAudio)try{this.aartiAudio.pause(),this.aartiAudio.currentTime=0}catch{}e&&this.currentMode!=="idle"&&this.playFestivalMusic()}playBellSound(e=1){const t=performance.now();if(!(this.soundCooldowns.bell&&t-this.soundCooldowns.bell<90)&&(this.soundCooldowns.bell=t,!this.isMuted)){this.bellAudio||(this.bellAudio=new Audio("/assets/audio/bell.wav"),this.bellAudio.volume=.85,this.bellAudio.addEventListener("error",()=>{this._playSynthesizedTempleBell(e)}));try{this.bellAudio.currentTime=0;const n=this.bellAudio.play();n!==void 0&&n.catch(()=>{this._playSynthesizedTempleBell(e)})}catch{this._playSynthesizedTempleBell(e)}}}playTempleBell(e=1){this.playBellSound(e)}_playSynthesizedTempleBell(e=1){if(!(!this.ctx||this.isMuted))try{const t=this.ctx.currentTime,n=554.37*e;[{mult:1,gain:.38,decay:2.8},{mult:1.2,gain:.22,decay:2.2},{mult:1.5,gain:.16,decay:1.8},{mult:2,gain:.12,decay:1.4},{mult:2.76,gain:.08,decay:1},{mult:3,gain:.04,decay:.7}].forEach(r=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*r.mult,t),a.gain.setValueAtTime(r.gain*(this.isMuted?0:.8),t),a.gain.exponentialRampToValueAtTime(1e-4,t+r.decay),o.connect(a),a.connect(this.ctx.destination),o.start(t),o.stop(t+r.decay+.05)})}catch{}}playCoinChime(){const e=performance.now();if(!(this.soundCooldowns.coin&&e-this.soundCooldowns.coin<75)&&(this.soundCooldowns.coin=e,this.init(),!(!this.ctx||this.isMuted)))try{[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=this.ctx.currentTime+i*.055,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.18,r),a.gain.exponentialRampToValueAtTime(1e-4,r+.3),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.3)})}catch{}}playCelebrationFanfare(){this.clearFanfareTimers(),this.playBellSound(1),this.fanfareTimers.push(setTimeout(()=>this.playBellSound(1.25),220)),this.fanfareTimers.push(setTimeout(()=>this.playBellSound(1.5),440)),this.fanfareTimers.push(setTimeout(()=>this.playCoinChime(),660))}toggleMute(){this.isMuted=!this.isMuted,this.festivalMusic&&(this.festivalMusic.muted=this.isMuted),this.aartiAudio&&(this.aartiAudio.muted=this.isMuted),this.bellAudio&&(this.bellAudio.muted=this.isMuted);const e=document.getElementById("festival-yt-player");return e&&e.contentWindow&&e.contentWindow.postMessage(JSON.stringify({event:"command",func:this.isMuted?"mute":"unMute",args:[]}),"*"),!this.isMuted}updateHudSongInfo(e,t,n=!1){const i=document.getElementById("stage3-song-pill");i&&(i.style.display="flex",t?(i.innerHTML=`<span>🎵</span> <span>${e||"Jai Jai Ganesha (Telugu)"} (Playing)</span>`,i.style.borderColor="var(--gold)"):(i.innerHTML=`<span>🎵</span> <span>${e||"Jai Jai Ganesha (Telugu)"} (Devotional Bhajan)</span>`,i.style.borderColor="rgba(255, 209, 102, 0.6)"))}}const Xe=new KM;window.festivalAudio=Xe;window.playFestivalMusic=s=>Xe.playFestivalMusic(s);window.stopFestivalMusic=()=>Xe.stopFestivalMusic();window.fadeOutMusic=(s,e)=>Xe.fadeOutMusic(s,e);window.playAarathi=()=>Xe.playAarathi();window.stopAarathi=s=>Xe.stopAarathi(s);window.playBellSound=s=>Xe.playBellSound(s);window.nextFestivalSong=()=>Xe.nextFestivalSong();function af(){Xe.init()}window.addEventListener("pointerdown",af,{once:!1});window.addEventListener("keydown",af,{once:!1});function $M(){const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d"),t=256,n=256;e.clearRect(0,0,512,512),e.lineWidth=5,e.strokeStyle="#ffffff",e.beginPath(),e.arc(t,n,240,0,Math.PI*2),e.stroke(),e.lineWidth=14,e.strokeStyle="#ffd166",e.beginPath(),e.arc(t,n,222,0,Math.PI*2),e.stroke(),e.lineWidth=10,e.strokeStyle="#f77f00",e.beginPath(),e.arc(t,n,202,0,Math.PI*2),e.stroke();for(let u=0;u<16;u++){const f=u*Math.PI/8,g=t+Math.cos(f)*196,_=n+Math.sin(f)*196,m=t+Math.cos(f+.22)*145,p=n+Math.sin(f+.22)*145;e.fillStyle=u%2===0?"#d62828":"#f77f00",e.beginPath(),e.moveTo(t,n),e.quadraticCurveTo(g,_,m,p),e.closePath(),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=2.5,e.stroke()}for(let u=0;u<8;u++){const f=u*Math.PI/4,g=t+Math.cos(f)*115,_=n+Math.sin(f)*115;e.fillStyle="#d81159",e.beginPath(),e.arc(g,_,38,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=3,e.stroke()}e.fillStyle="#ffb703",e.beginPath(),e.arc(t,n,58,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=5,e.stroke(),e.fillStyle="#d62828",e.beginPath(),e.arc(t,n,28,0,Math.PI*2),e.fill();const i=new Bi(s);i.anisotropy=8;const r=document.createElement("canvas");r.width=512,r.height=512;const o=r.getContext("2d");o.fillStyle="#231d1e",o.fillRect(0,0,512,512);for(let u=0;u<7e3;u++){const f=Math.random()*512,g=Math.random()*512,_=Math.floor(Math.random()*45)+30;o.fillStyle=`rgb(${_},${_-4},${_-6})`,o.fillRect(f,g,2,2)}for(let u=0;u<512;u+=32)o.fillStyle="#ffffff",o.beginPath(),o.arc(28,u+16,5,0,Math.PI*2),o.arc(484,u+16,5,0,Math.PI*2),o.fill(),o.fillStyle="#d62828",o.beginPath(),o.arc(38,u+16,3,0,Math.PI*2),o.arc(474,u+16,3,0,Math.PI*2),o.fill();o.fillStyle="#ffb703";for(let u=25;u<512;u+=85)o.fillRect(248,u,16,46);const a=new Bi(r);a.wrapS=Gi,a.wrapT=Gi,a.repeat.set(1,12);const c=document.createElement("canvas");c.width=512,c.height=512;const l=c.getContext("2d"),d=l.createLinearGradient(0,0,0,512);d.addColorStop(0,"#100a1c"),d.addColorStop(.45,"#3b1428"),d.addColorStop(.75,"#8c2d19"),d.addColorStop(1,"#d97426"),l.fillStyle=d,l.fillRect(0,0,512,512),l.fillStyle="#ffffff";for(let u=0;u<180;u++){const f=Math.random()*512,g=Math.random()*220,_=Math.random()*1.5+.5;l.globalAlpha=Math.random()*.8+.2,l.beginPath(),l.arc(f,g,_,0,Math.PI*2),l.fill()}l.globalAlpha=1;const h=new Bi(c);return{rangoliTexture:i,roadTexture:a,skyTexture:h}}const ZM=document.getElementById("canvas-container"),Rt=new Gu;Rt.background=new qe(2363672);Rt.fog=new xl(2626074,.0065);const Ze=new Yt(50,window.innerWidth/window.innerHeight,.1,260);Ze.position.set(0,4.2,-66);Ze.lookAt(0,1.6,-58);const Zn=new nf({antialias:!0,powerPreference:"high-performance"});Zn.setSize(window.innerWidth,window.innerHeight);Zn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Zn.shadowMap.enabled=!0;Zn.shadowMap.type=vu;Zn.toneMapping=cl;Zn.toneMappingExposure=1.25;ZM.appendChild(Zn.domElement);const{rangoliTexture:cf,roadTexture:JM,skyTexture:QM}=$M(),ey=new it(220,32,24),ty=new rt({map:QM,side:Qt}),ny=new I(ey,ty);Rt.add(ny);const iy=new mg(16768954,4004886,.95);Rt.add(iy);const Tn=new Us(16754740,2.5);Tn.position.set(20,35,15);Tn.castShadow=!0;Tn.shadow.mapSize.width=1024;Tn.shadow.mapSize.height=1024;Tn.shadow.camera.near=2;Tn.shadow.camera.far=160;Tn.shadow.camera.left=-40;Tn.shadow.camera.right=40;Tn.shadow.camera.top=80;Tn.shadow.camera.bottom=-80;Tn.shadow.bias=-4e-4;Rt.add(Tn);const lf=new Us(15881307,.7);lf.position.set(-25,20,-25);Rt.add(lf);const ca=240,df=new Gt,Do=new Float32Array(ca*3),hf=new Float32Array(ca);for(let s=0;s<ca;s++)Do[s*3+0]=(Math.random()-.5)*35,Do[s*3+1]=Math.random()*8+.4,Do[s*3+2]=(Math.random()-.5)*140,hf[s]=Math.random()*.35+.15;df.setAttribute("position",new qt(Do,3));const uf=new wl({color:16765286,size:.18,transparent:!0,opacity:.8,blending:dc}),sl=new Vu(df,uf);Rt.add(sl);const me={road:new xe({map:JM,roughness:.82,metalness:.1}),sidewalk:new xe({color:9664620,roughness:.85}),curb:new xe({color:5916739,roughness:.8}),verandaFloor:new xe({color:9714988,roughness:.45,metalness:.1}),roofTile:new xe({color:11877928,roughness:.65}),woodPillar:new xe({color:4004619,roughness:.55}),brassGold:new xe({color:16765286,metalness:.88,roughness:.22}),marigoldOrange:new xe({color:16219904,roughness:.65}),marigoldYellow:new xe({color:16758531,roughness:.65}),mangoLeaf:new xe({color:2252349,roughness:.45,side:Nt}),diyaClay:new xe({color:11355693,roughness:.8}),diyaFlame:new rt({color:16770688}),lanternGlass:new rt({color:16769154}),windowGlow:new rt({color:16760331}),rangoli:new rt({map:cf,transparent:!0,opacity:.96}),treeBark:new xe({color:4860951,roughness:.9}),treeFoliage:new xe({color:2055723,roughness:.6})},Vo=[],ff=[],bn=new Ne;Rt.add(bn);const sy=new Ft(9,150),la=new I(sy,me.road);la.rotation.x=-Math.PI/2;la.position.set(0,0,0);la.receiveShadow=!0;bn.add(la);[-6.2,6.2].forEach(s=>{const e=new ze(3.4,.25,150),t=new I(e,me.sidewalk);t.position.set(s,.125,0),t.receiveShadow=!0,bn.add(t);const n=new ze(.24,.32,150),i=new I(n,me.curb);i.position.set(s>0?4.58:-4.58,.16,0),i.receiveShadow=!0,bn.add(i)});const ry=new Ft(100,170),oy=new xe({color:1576209,roughness:.95}),da=new I(ry,oy);da.rotation.x=-Math.PI/2;da.position.set(0,-.05,0);da.receiveShadow=!0;bn.add(da);function mh(s,e,t){const n=new Ne;n.position.set(s,0,e);const i=new Te(.28,.35,.4,8),r=new I(i,me.woodPillar);r.position.y=.2,n.add(r);const o=new Te(.09,.13,4.4,10),a=new I(o,me.woodPillar);a.position.y=2.4,n.add(a);const c=t?.6:-.6,l=new Te(.04,.04,.9,6);l.rotateZ(t?-Math.PI/4:Math.PI/4);const d=new I(l,me.brassGold);d.position.set(c*.5,4.4,0),n.add(d);const h=new Te(.18,.12,.36,6),u=new I(h,me.lanternGlass);u.position.set(c,4,0),n.add(u);const f=new Jt(16758531,1.2,11,1.8);return f.position.set(c,3.85,0),n.add(f),n}for(let s=-60;s<=60;s+=20)bn.add(mh(-4.8,s,!0)),bn.add(mh(4.8,s,!1));const gh=[16765286,16219904,14034984,2792847,16711790],pf=[];function ay(s,e,t,n){const i=new Ne;i.position.set(s,e,t);const r=new Cl(.32,0),o=new rt({color:n}),a=new I(r,o);i.add(a);const c=new Jt(n,.6,4.5,1.8);i.add(c);const l=new Ne;l.position.y=-.32;const d=new Ft(.06,.5),h=new rt({color:n,side:Nt});for(let u=0;u<6;u++){const f=u/6*Math.PI*2,g=new I(d,h);g.position.set(Math.cos(f)*.12,-.25,Math.sin(f)*.12),g.rotation.y=f,l.add(g)}return i.add(l),pf.push({group:i,frills:l,offset:Math.random()*10}),i}function cy(){const s=new Ne;for(let e=-55;e<=55;e+=15){const n=new Rl(new C(-6.2,4.6,e),new C(0,3.7,e),new C(6.2,4.6,e)).getPoints(20),i=new Gt().setFromPoints(n),r=new El({color:2825236}),o=new sa(i,r);s.add(o);for(let a=1;a<n.length-1;a+=2){const c=n[a],l=gh[a%gh.length],d=new it(.08,8,8),h=new rt({color:l}),u=new I(d,h);u.position.set(c.x,c.y-.08,c.z),s.add(u);const f=new ft(.18,.45,3),g=new xe({color:l,roughness:.6}),_=new I(f,g);_.position.set(c.x,c.y-.32,c.z),_.rotation.z=Math.PI,s.add(_)}if(e===0){const a=document.createElement("canvas");a.width=512,a.height=128;const c=a.getContext("2d");c.fillStyle="#7a0e14",c.fillRect(0,0,512,128),c.lineWidth=6,c.strokeStyle="#ffd166",c.strokeRect(6,6,500,116),c.font="bold 36px serif",c.fillStyle="#ffd166",c.textAlign="center",c.fillText("॥ श्री गणेशाय नमः ॥",256,48),c.font="bold 28px sans-serif",c.fillStyle="#ffffff",c.fillText("WELCOME TO GANESHOTSAV",256,96);const l=new Bi(a),d=new Ft(6.4,1.6),h=new rt({map:l,side:Nt}),u=new I(d,h);u.position.set(0,4.5,0),s.add(u)}}return s}bn.add(cy());function _h(s,e){const t=new Ne;t.position.set(s,0,e);const n=new Te(.22,.32,4.2,8),i=new I(n,me.treeBark);return i.position.y=2.1,i.castShadow=!0,t.add(i),[3.6,4.8,5.8].forEach((r,o)=>{const a=1.6-o*.35,c=new it(a,8,8);c.scale(1,.8,1);const l=new I(c,me.treeFoliage);l.position.y=r,l.castShadow=!0,t.add(l)}),t}[-30,0,30,60].forEach(s=>{bn.add(_h(-13.5,s)),bn.add(_h(13.5,s))});function Hn(s={}){const e=s.scale||1,t=s.dhotiColor||16219904,n=s.skinColor||13933426,i=s.isGold||!1,r=s.isTerracotta||!1,o=s.isMarble||!1,a=s.baseType||"lotus",c=s.crownHeight||.45,l=s.hasHalo!==void 0?s.hasHalo:!0,d=new Ne;d.scale.set(e,e,e);let h;i?h=me.brassGold:r?h=new xe({color:11884597,roughness:.88,metalness:.05}):o?h=new xe({color:16775920,roughness:.35,metalness:.1}):h=new xe({color:n,roughness:.65});const u=me.brassGold,f=r?h:new xe({color:t,roughness:.55}),g=new xe({color:16777215,roughness:.4}),_=new rt({color:14034984}),m=new Ne;if(a==="lotus"){const J=new I(new Te(.72,.82,.16,20),new xe({color:9051438,roughness:.6}));J.position.y=.08,m.add(J);const se=new xe({color:s.petalColor||15681391,roughness:.5});for(let re=0;re<14;re++){const ye=re/14*Math.PI*2,tt=Math.cos(ye)*.74,L=Math.sin(ye)*.74,He=new I(new ft(.16,.26,8),se);He.position.set(tt,.14,L),He.rotation.x=Math.sin(ye)*.35,He.rotation.z=-Math.cos(ye)*.35,m.add(He)}}else if(a==="throne"){const J=new I(new ze(1.5,.28,1.3),new xe({color:4855813,roughness:.5}));J.position.y=.14,m.add(J);const se=new I(new ze(1.54,.06,1.34),u);se.position.y=.25,m.add(se);const re=new I(new ze(1.4,1.5,.14),new xe({color:9048093,roughness:.75}));re.position.set(0,1,.5),m.add(re)}else if(a==="leaf"){const J=new xe({color:2976335,roughness:.7}),se=new I(new Te(.75,.82,.14,16),J);se.position.y=.07,m.add(se)}else{const J=new I(new Te(.75,.82,.2,18),new xe({color:6038545,roughness:.6}));J.position.y=.1,m.add(J);const se=new I(new Ht(.76,.035,6,20),u);se.rotation.x=Math.PI/2,se.position.y=.18,m.add(se)}d.add(m);const p=new Ht(.42,.16,10,18,Math.PI),T=new I(p,f);T.rotation.x=Math.PI/2,T.position.set(0,.3,.04),d.add(T),[-.3,.3].forEach(J=>{const se=new I(new it(.09,8,8),h);se.scale.set(1.15,.7,1.4),se.position.set(J,.26,-.14),d.add(se);const re=new I(new Ht(.08,.018,6,10),u);re.rotation.x=Math.PI/2,re.position.set(J,.28,-.14),d.add(re)});const w=new I(new it(.4,14,12),h);w.scale.set(1.05,1.12,1.05),w.position.set(0,.62,.02),d.add(w);const M=new I(new Ht(.4,.02,6,18),u);M.rotation.set(.65,.45,.85),M.position.set(0,.68,.04),d.add(M);const P=new I(new Ht(.4,.024,6,18),u);P.rotation.x=Math.PI/2,P.position.set(0,.5,.02),d.add(P);const A=new I(new Te(.075,.085,.36,8),h);A.position.set(.45,.92,.04),A.rotation.z=-Math.PI/3.5,d.add(A);const R=new I(new ft(.11,.22,4),u);R.position.set(.62,1.1,.04),R.rotation.z=Math.PI/4,d.add(R);const N=new I(new Te(.075,.085,.36,8),h);N.position.set(-.45,.92,.04),N.rotation.z=Math.PI/3.5,d.add(N);const S=new I(new it(.09,8,8),_);S.position.set(-.62,1.1,.04),d.add(S);const E=new I(new Te(.075,.08,.34,8),h);E.position.set(-.32,.6,-.2),E.rotation.set(Math.PI/3,-.4,0),d.add(E);const U=new I(new Te(.13,.075,.075,12),u);U.position.set(-.22,.62,-.3),d.add(U);for(let J=0;J<4;J++){const se=Math.cos(J*1.57)*.045,re=Math.sin(J*1.57)*.045,ye=new I(new ft(.032,.065,8),g);ye.position.set(-.22+se,.68,-.3+re),d.add(ye)}const O=new I(new Te(.075,.08,.32,8),h);O.position.set(.36,.7,-.16),O.rotation.set(-.3,.2,-Math.PI/6),d.add(O);const H=new I(new ze(.09,.11,.035),h);H.position.set(.45,.85,-.18),H.rotation.y=-.3,d.add(H);const K=new I(new ra(.022,8),_);K.position.set(.45,.85,-.205),d.add(K);const X=new Ne;X.position.set(0,1.1,-.04);const $=new I(new it(.3,14,12),h);$.scale.set(1.15,1,1.1),X.add($),[-.13,.13].forEach(J=>{const se=new I(new it(.13,8,8),h);se.position.set(J,.16,-.14),X.add(se)});const ie=new I(new Ft(.1,.16),_);ie.position.set(0,.16,-.28),X.add(ie),[-.14,.14].forEach(J=>{const se=new I(new it(.032,6,6),new rt({color:1118481}));se.scale.set(1.4,.8,1),se.position.set(J,.04,-.26),X.add(se)});const W=new Al([new C(0,.03,-.26),new C(-.04,-.16,-.34),new C(-.11,-.35,-.36),new C(-.2,-.42,-.32),new C(-.23,-.38,-.26)]),ue=new Pl(W,16,.1,8,!1),ge=new I(ue,h);X.add(ge);const Ee=new I(new ft(.045,.08,8),u);Ee.position.set(-.23,-.34,-.26),X.add(Ee);const Oe=new I(new ft(.032,.16,8),g);Oe.position.set(.13,-.12,-.24),Oe.rotation.set(.4,0,-.3),X.add(Oe);const Qe=new I(new Te(.032,.032,.065,8),g);Qe.position.set(-.13,-.1,-.24),Qe.rotation.set(.4,0,.3),X.add(Qe),[-.35,.35].forEach((J,se)=>{const re=se===1,ye=new I(new Te(.22,.26,.028,14),h);ye.scale.set(1.2,.2,1.4),ye.position.set(J,.03,-.04),ye.rotation.set(0,re?-.4:.4,re?.3:-.3),X.add(ye);const tt=new I(new Ht(.065,.016,6,10),u);tt.position.set(J*1.25,-.13,-.02),X.add(tt)});const je=new Ne;je.position.set(0,.28,-.04);const Ke=new I(new Te(.24,.28,.18,14),u);je.add(Ke);const Z=new I(new ft(.22,c,14),u);Z.position.y=.18+c/2,je.add(Z);const ee=new I(new it(.055,6,6),_);if(ee.position.set(0,.16,-.23),je.add(ee),X.add(je),l){const J=new Ne;J.position.set(0,1.2,.2);const se=new I(new Hr(.36,.65,20),u);J.add(se);for(let re=0;re<14;re++){const ye=re/14*Math.PI*2,tt=new I(new ft(.038,.22,4),u);tt.position.set(Math.cos(ye)*.68,Math.sin(ye)*.68,0),tt.rotation.z=ye-Math.PI/2,J.add(tt)}d.add(J)}return d.add(X),d}const mf=new C(0,0,61.5),In=[],ki={},sc={};function ly(){const s=new Ne;s.position.set(0,0,61.5);const e=new ze(14,.35,8),t=new xe({color:7220254,roughness:.75}),n=new I(e,t);n.position.set(0,.175,0),n.receiveShadow=!0,s.add(n);const i=new ze(7,.18,1.2),r=new I(i,t);r.position.set(0,.09,-4.6),r.receiveShadow=!0,s.add(r);const o=new Ft(3.6,3.6),a=new rt({map:cf,transparent:!0,opacity:.95}),c=new I(o,a);c.rotation.x=-Math.PI/2,c.position.set(0,.36,-2.8),s.add(c);const l=new xe({color:4003594,roughness:.6}),d=new ze(13.8,3.8,.25),h=new I(d,l);h.position.set(0,2.05,3.8),h.receiveShadow=!0,s.add(h);const u=new xe({color:14245150,roughness:.85}),f=new Ft(12.5,3.2),g=new I(f,u);g.position.set(0,2.05,3.65),s.add(g),[-6.8,6.8].forEach(y=>{const x=new ze(.25,3.8,7.6),D=new I(x,l);D.position.set(y,2.05,0),D.receiveShadow=!0,s.add(D)}),[-5.8,-2.2,2.2,5.8].forEach(y=>{const x=new Te(.18,.24,4,10),D=new I(x,me.woodPillar);D.position.set(y,2.15,-3.8),D.castShadow=!0,s.add(D),[.4,3.9].forEach(V=>{const Q=new Te(.26,.26,.16,10),z=new I(Q,me.brassGold);z.position.set(y,V,-3.8),s.add(z)})});const _=new ze(14.4,.4,.4),m=new I(_,me.woodPillar);m.position.set(0,4.15,-3.8),s.add(m);const p=new ft(9.6,2.2,4);p.rotateY(Math.PI/4);const T=new I(p,me.roofTile);T.position.set(0,5.25,0),T.scale.set(1.55,1,.9),T.castShadow=!0,s.add(T);const w=new Te(.08,.22,.7,8),M=new I(w,me.brassGold);M.position.set(0,6.6,0),s.add(M);const P=document.createElement("canvas");P.width=1024,P.height=256;const A=P.getContext("2d"),R=A.createLinearGradient(0,0,1024,0);R.addColorStop(0,"#3a080c"),R.addColorStop(.5,"#6a1218"),R.addColorStop(1,"#3a080c"),A.fillStyle=R,A.fillRect(0,0,1024,256),A.lineWidth=10,A.strokeStyle="#ffd166",A.strokeRect(10,10,1004,236),A.lineWidth=4,A.strokeStyle="#f77f00",A.strokeRect(20,20,984,216),A.font="bold 36px serif",A.fillStyle="#ffd166",A.textAlign="center",A.fillText("ॐ   ॥ श्री गणेशाय नमः ॥   ॐ",512,65),A.font="bold 52px Cinzel, serif",A.fillStyle="#ffffff",A.fillText("GANESHA MURTI WORKSHOP",512,140),A.font="bold 26px Outfit, sans-serif",A.fillStyle="#ffbe0b",A.fillText("★ HANDCRAFTED SACRED IDOLS FOR YOUR PANDAL ★",512,202);const N=new Bi(P),S=new Ft(8.2,1.8),E=new xe({map:N,roughness:.3,metalness:.1,side:Nt}),U=new I(S,E);U.position.set(0,4.4,-3.98),U.rotation.y=0,s.add(U);const O=new Jt(16768954,1.8,9,1.8);O.position.set(0,4.6,-4.6),s.add(O);const H=new Jt(16758531,3.2,16,1.4);H.position.set(0,3.4,.8),s.add(H);const K=new Jt(16219904,2.2,12,1.6);K.position.set(0,2.4,2.4),s.add(K);const X=new Jt(16768896,2.5,8,1.6);X.position.set(0,3.2,2.2),s.add(X);for(let y=-6.5;y<=6.5;y+=.45){const x=new Te(.045,.045,.55+Math.abs(Math.sin(y))*.3,6),D=Math.round(Math.abs(y*2))%2===0?me.marigoldOrange:me.marigoldYellow,V=new I(x,D);V.position.set(y,3.85,-3.76),s.add(V)}[-3.8,3.8].forEach(y=>{const x=new Te(.09,.16,2.2,8),D=new I(x,me.brassGold);D.position.set(y,1.25,-4.4),D.castShadow=!0,s.add(D),[.8,1.5,2.2].forEach(Q=>{const z=new Te(.32-Q*.08,.18,.08,10),we=new I(z,me.brassGold);we.position.set(y,Q,-4.4),s.add(we);const de=new ft(.05,.14,8),ne=new I(de,me.diyaFlame);ne.position.set(y,Q+.09,-4.4),s.add(ne)});const V=new Jt(16752155,1.1,5,1.8);V.position.set(y,2.2,-4.4),s.add(V)});const $=new xe({color:3018516,roughness:.55}),ie=new xe({color:9047837,roughness:.85}),W=me.brassGold;function ue(y,x,D,V,Q,z){const we=new Ne;we.position.set(y,x,D);const de=new I(new ze(V,z,Q),$);de.receiveShadow=!0,we.add(de);const ne=new I(new ze(V-.05,.04,Q-.05),ie);ne.position.y=z/2+.02,we.add(ne);const oe=new I(new ze(V+.02,.05,.04),W);return oe.position.set(0,z/2,-Q/2),we.add(oe),s.add(we),we}ue(-3.4,.35,.6,5.4,1.1,.35),ue(-3.4,.85,1.6,5.4,1.1,.65),ue(-3.4,1.55,2.5,5.4,.9,.75),ue(3.4,.35,.6,5.4,1.1,.35),ue(3.4,.85,1.6,5.4,1.1,.65),ue(3.4,1.55,2.5,5.4,.9,.75);const ge=new Ne;ge.position.set(0,.25,2.4);const Ee=new xe({color:16117734,roughness:.3,metalness:.1}),Oe=new I(new Te(1.6,1.75,.25,24),Ee);Oe.position.y=.125,ge.add(Oe);const Qe=new I(new Te(1.3,1.45,.25,24),Ee);Qe.position.y=.375,ge.add(Qe);const je=new Ht(1.3,.08,10,32,Math.PI),Ke=new I(je,W);Ke.position.set(0,1.8,.35),ge.add(Ke),[-1.25,1.25].forEach(y=>{const x=new it(.18,12,10);x.scale(1,1.2,1);const D=new I(x,me.brassGold);D.position.set(y,.65,0),ge.add(D);const V=new ft(.12,.24,8),Q=new I(V,new xe({color:4861464,roughness:.8}));Q.position.set(y,.85,0),ge.add(Q)}),s.add(ge);function Z(y,x,D,V){const Q=document.createElement("canvas");Q.width=512,Q.height=128;const z=Q.getContext("2d");z.fillStyle="#22080a",z.fillRect(0,0,512,128),z.lineWidth=6,z.strokeStyle="#ffd166",z.strokeRect(4,4,504,120),z.font="bold 36px Cinzel, serif",z.fillStyle="#ffd166",z.textAlign="center",z.fillText(y,256,75);const we=new Bi(Q),de=new I(new Ft(1.5,.38),new rt({map:we,side:Nt}));return de.position.set(x,D,V),de.rotation.x=-.25,s.add(de),de}const ee=Hn({scale:1.15,baseType:"throne",dhotiColor:14034984,skinColor:15247484,crownHeight:.6,hasHalo:!0});ee.position.set(0,.75,2.3),s.add(ee),In.push({id:"centerpiece",mesh:ee,baseRotY:0});const J=new Ne;J.position.set(-2.4,1.2,1.6);const se=Hn({scale:.92,baseType:"lotus",petalColor:15681391,dhotiColor:16765286,skinColor:16036482});J.add(se),s.add(J),sc.bal=J,In.push({id:"bal",mesh:J,baseRotY:0}),Z("1. Shri Bal Ganesha (₹300)",-2.4,1.25,.95);const re=new Ne;re.position.set(2.4,1.2,1.6);const ye=Hn({scale:.92,baseType:"leaf",isTerracotta:!0});re.add(ye),s.add(re),sc.eco=re,In.push({id:"eco",mesh:re,baseRotY:0}),Z("2. Eco Ganesha (₹400)",2.4,1.25,.95),[{x:-5,dhoti:16758531,base:"lotus",skin:16042658,petal:16751048},{x:-3.5,dhoti:10165584,base:"chowki",isMarble:!0},{x:-2,dhoti:2792847,base:"throne",isGold:!0}].forEach((y,x)=>{const D=Hn({scale:.68,baseType:y.base,dhotiColor:y.dhoti,skinColor:y.skin,petalColor:y.petal,isMarble:y.isMarble,isGold:y.isGold});D.position.set(y.x,1.95,2.45),D.rotation.y=.08,s.add(D),In.push({id:`upper_l_${x}`,mesh:D,baseRotY:.08})}),[{x:2,dhoti:14034984,base:"throne",isGold:!0},{x:3.5,dhoti:1802105,base:"chowki",skin:14723452},{x:5,dhoti:16219904,base:"lotus",skin:13933426,petal:16765286}].forEach((y,x)=>{const D=Hn({scale:.68,baseType:y.base,dhotiColor:y.dhoti,skinColor:y.skin,petalColor:y.petal,isGold:y.isGold});D.position.set(y.x,1.95,2.45),D.rotation.y=-.08,s.add(D),In.push({id:`upper_r_${x}`,mesh:D,baseRotY:-.08})}),[{x:-5,isTerracotta:!0,base:"leaf"},{x:-3.8,dhoti:15681391,base:"lotus",skin:15910043},{x:-2.6,isTerracotta:!0,base:"chowki"},{x:-1.4,dhoti:16760331,base:"lotus",isMarble:!0}].forEach((y,x)=>{const D=Hn({scale:.52,baseType:y.base,dhotiColor:y.dhoti,skinColor:y.skin,isTerracotta:y.isTerracotta,isMarble:y.isMarble,hasHalo:!1});D.position.set(y.x,.54,.6),D.rotation.y=.05,s.add(D),In.push({id:`lower_l_${x}`,mesh:D,baseRotY:.05})}),[{x:1.4,dhoti:16219904,base:"chowki",skin:13933426},{x:2.6,dhoti:2390944,base:"lotus",skin:14592642},{x:3.8,isGold:!0,base:"throne"},{x:5,isTerracotta:!0,base:"leaf"}].forEach((y,x)=>{const D=Hn({scale:.52,baseType:y.base,dhotiColor:y.dhoti,skinColor:y.skin,isGold:y.isGold,isTerracotta:y.isTerracotta,hasHalo:!1});D.position.set(y.x,.54,.6),D.rotation.y=-.05,s.add(D),In.push({id:`lower_r_${x}`,mesh:D,baseRotY:-.05})});const tt=new ze(4.8,.72,.9),L=new xe({color:4855813,roughness:.6}),He=new I(tt,L);He.position.set(2.4,.54,-1.1),He.receiveShadow=!0,s.add(He);const Fe=new I(new ze(4.9,.06,.95),me.woodPillar);Fe.position.set(2.4,.92,-1.1),s.add(Fe),[{x:1,isMarble:!0,dhoti:16765286},{x:2.4,isGold:!0},{x:3.8,isTerracotta:!0}].forEach((y,x)=>{const D=Hn({scale:.38,baseType:"chowki",isMarble:y.isMarble,isGold:y.isGold,isTerracotta:y.isTerracotta,dhotiColor:y.dhoti,hasHalo:!1});D.position.set(y.x,.96,-1.1),s.add(D),In.push({id:`counter_${x}`,mesh:D,baseRotY:0})});const Ie=Xr({role:"sculptor",gender:"m",attire:"dhoti",color:9055517,skin:11892812,height:1.72});Ie.mesh.position.set(-2.8,.35,-.6),Ie.mesh.rotation.y=.15,Ie.anim.isNamaste=!0,s.add(Ie.mesh);const Ce=new ze(2.4,.65,1.2),ct=new I(Ce,me.woodPillar);ct.position.set(-5,.5,-.8),s.add(ct);const Ae=new I(new Te(.35,.38,.1,16),me.brassGold);Ae.position.set(-4.5,.88,-.8),s.add(Ae);const Ye=Hn({scale:.42,isTerracotta:!0,baseType:"leaf",hasHalo:!1});Ye.position.set(-4.5,.94,-.8),s.add(Ye),[{x:-5.4,z:-.6,c:16765286},{x:-5.4,z:-1,c:14034984},{x:-5.8,z:-.6,c:16777215},{x:-5.8,z:-1,c:16196997}].forEach(y=>{const x=new I(new Te(.09,.06,.07,10),me.diyaClay);x.position.set(y.x,.86,y.z),s.add(x);const D=new I(new it(.075,8,8),new rt({color:y.c}));D.scale.set(1,.6,1),D.position.set(y.x,.9,y.z),s.add(D)});function Lt(y,x){y&&(x==="raja"?y.traverse(D=>{D.name==="Sketchfab_model.001"&&D.position.set(0,1.08,-.12)}):x==="festival"&&y.traverse(D=>{D.name==="Sketchfab_model.002"&&D.position.set(0,1,-.05)}))}const xt=new sf;gi.forEach(y=>{xt.load(y.modelUrl,x=>{Lt(x.scene,y.id),ki[y.id]=x.scene;const D=sc[y.id];if(D){for(;D.children.length>0;)D.remove(D.children[0]);const V=x.scene.clone(!0),z={bal:.85,eco:.85,raja:.62,festival:.68}[y.id]||.7;V.scale.set(z,z,z),V.position.set(0,0,0),V.rotation.y=0,D.add(V)}typeof On=="function"&&v.selectedIdol===y.id&&On()},void 0,x=>{console.warn(`Could not load GLTF idol ${y.id}:`,x)})}),xt.load("/models/ganesha.glb",y=>{ki.centerpiece=y.scene;const x=y.scene.clone(!0);x.scale.set(.72,.72,.72),x.position.set(0,.85,2.3),x.rotation.y=0,s.remove(ee),s.add(x);const D=In.findIndex(V=>V.id==="centerpiece");D!==-1&&(In[D].mesh=x)},void 0,()=>{}),bn.add(s)}function ur(s,e,t){const n=new Ne;n.position.set(s,e,t);const i=new Te(.12,.07,.06,10),r=new I(i,me.diyaClay);r.castShadow=!0,n.add(r);const o=new ft(.045,.12,8),a=new I(o,me.diyaFlame);a.position.y=.07,n.add(a);const c=new Jt(16752155,.75,4,1.8);return c.position.y=.1,n.add(c),Vo.push({light:c,flame:a,baseIntensity:.75,offset:Math.random()*10}),n}function dy(s=2){const e=new Ne,t=9;for(let n=0;n<t;n++){const i=n/(t-1),r=(i-.5)*s,o=-Math.sin(i*Math.PI)*.22,a=new ft(.07,.24,3),c=new I(a,me.mangoLeaf);c.position.set(r,o-.08,0),c.rotation.z=Math.PI+(i-.5)*.25,e.add(c);const l=new it(.06,6,6),d=new I(l,n%2===0?me.marigoldOrange:me.marigoldYellow);d.position.set(r,o,.02),e.add(d)}return e}function hy(){const s=new Ne,e=new ze(.45,.6,.45),t=new xe({color:11752504,roughness:.75}),n=new I(e,t);n.position.y=.3,n.castShadow=!0,s.add(n);const i=new it(.24,8,8),r=new xe({color:2057782,roughness:.5}),o=new I(i,r);return o.position.y=.72,s.add(o),s}function Xr(s,e=!1){const t=new Ne,n=s.height?s.height/1.75:1;t.scale.set(n,n,n);const i=new xe({color:s.skin||13933426,roughness:.65}),r=new xe({color:s.elder?14540253:1578004,roughness:.85}),o=new xe({color:s.color||14034984,roughness:.58}),a=new xe({color:16117992,roughness:.65}),c=new Ne;c.position.y=1.48;const l=new it(.17,16,14);l.scale(1,1.14,1);const d=new I(l,i);d.castShadow=!0,c.add(d);const h=new ft(.035,.08,4),u=new I(h,i);u.position.set(0,0,.175),u.rotation.x=Math.PI/2,c.add(u),[-.055,.055].forEach(J=>{const se=new it(.022,6,6),re=new rt({color:1708556}),ye=new I(se,re);ye.position.set(J,.04,.155),c.add(ye)});const f=new it(.022,8,8),g=new rt({color:14034984}),_=new I(f,g);if(_.position.set(0,.08,.165),c.add(_),s.elder){const J=new Ht(.18,.08,10,20),se=new xe({color:16773341,roughness:.8}),re=new I(J,se);re.rotation.x=Math.PI/2.2,re.position.y=.08,c.add(re);const ye=new ft(.04,.12,4),tt=new I(ye,me.brassGold);tt.position.set(0,.18,.18),c.add(tt)}else if(s.gender==="f"){const J=new it(.18,14,12);J.scale(1.02,.85,1.05);const se=new I(J,r);se.position.set(0,.07,-.04),c.add(se);const re=new it(.09,10,10),ye=new I(re,r);ye.position.set(0,.02,-.19),c.add(ye);const tt=new Ht(.09,.035,8,16),L=new xe({color:16777215,roughness:.5}),He=new I(tt,L);He.position.set(0,.02,-.19),c.add(He)}else{const J=new it(.18,14,12);J.scale(1.04,.72,1.08);const se=new I(J,r);se.position.set(0,.09,-.03),c.add(se)}t.add(c);const m=new Te(.08,.09,.14,8),p=new I(m,i);p.position.y=1.35,t.add(p);const T=new Ne;if(T.position.y=.95,s.attire==="saree"){const J=new ze(.44,.42,.28),se=new I(J,o);se.position.y=.22,se.castShadow=!0,T.add(se);const re=new Te(.22,.32,.85,12),ye=new I(re,o);ye.position.y=-.32,ye.castShadow=!0,T.add(ye);const tt=new Te(.26,.34,.88,12,1,!0,0,Math.PI*.9),L=new xe({color:16765286,roughness:.35,metalness:.75,side:Nt}),He=new I(tt,L);He.position.y=.05,He.rotation.y=.4,T.add(He);const Fe=new Ht(.16,.02,6,16),Ie=new I(Fe,me.brassGold);Ie.position.set(0,.35,.12),Ie.rotation.x=Math.PI/3,T.add(Ie)}else{const J=new ze(.46,.52,.28),se=new I(J,o);se.position.y=.18,se.castShadow=!0,T.add(se);const re=new Te(.11,.12,.08,8),ye=new I(re,o);ye.position.y=.45,T.add(ye),[.34,.22,.1].forEach(He=>{const Fe=new it(.018,6,6),Ie=new I(Fe,me.brassGold);Ie.position.set(0,He,.145),T.add(Ie)});const tt=new ze(.48,.45,.29),L=new I(tt,o);if(L.position.y=-.22,L.castShadow=!0,T.add(L),e||s.role==="father"){const He=new Ne;He.position.set(.04,.16,.02);const Fe=new ze(.13,.68,.31);Fe.rotateZ(.52);const Ie=new xe({color:e?16758531:16219904,roughness:.4,metalness:.3}),Ce=new I(Fe,Ie);He.add(Ce);const ct=new ze(.14,.06,.32);ct.rotateZ(.52);const Ae=new I(ct,me.brassGold);Ae.position.set(-.16,-.26,0),He.add(Ae),T.add(He)}}t.add(T);const w=new Ne;w.position.set(-.31,1.34,0);const M=new Ne;M.position.set(.31,1.34,0);const P=new Te(.065,.055,.32,8);P.translate(0,-.16,0);const A=new I(P,o),R=new I(P,o);A.castShadow=!0,R.castShadow=!0;const N=new Ne;N.position.set(0,-.32,0);const S=new Ne;S.position.set(0,-.32,0);const E=new Te(.055,.048,.3,8);E.translate(0,-.15,0);const U=s.gender==="f"?i:o,O=new I(E,U),H=new I(E,U);O.castShadow=!0,H.castShadow=!0;const K=new it(.055,8,8),X=new I(K,i);X.position.set(0,-.32,0);const $=new I(K,i);if($.position.set(0,-.32,0),s.gender==="f"){const J=new Ht(.058,.016,6,12),se=new I(J,me.brassGold);se.position.set(0,-.28,0),N.add(se);const re=new I(J,me.brassGold);re.position.set(0,-.28,0),S.add(re)}N.add(O,X),S.add(H,$),w.add(A,N),M.add(R,S),t.add(w,M);const ie=new Ne;ie.position.set(-.13,.52,0);const W=new Ne;W.position.set(.13,.52,0);const ue=new Te(.085,.07,.56,8);ue.translate(0,-.24,0);const ge=s.attire==="dhoti"?a:s.attire==="saree"?o:a,Ee=new I(ue,ge),Oe=new I(ue,ge);Ee.castShadow=!0,Oe.castShadow=!0;const Qe=new ze(.13,.08,.22),je=new xe({color:4004368,roughness:.8}),Ke=new I(Qe,je);Ke.position.set(0,-.52,.04);const Z=new I(Qe,je);Z.position.set(0,-.52,.04),ie.add(Ee,Ke),W.add(Oe,Z),t.add(ie,W);const ee={group:t,head:c,torso:T,leftArm:w,rightArm:M,leftForearm:N,rightForearm:S,leftLeg:ie,rightLeg:W,isNamaste:!1,namasteFactor:0,idleOffset:Math.random()*10};return e||ff.push(ee),{mesh:t,anim:ee}}ly();let gt=null,ut=null,dt=null,yr=null,an=null;const gf=[],mn=[],Fl=new C(0,.46,-.6);function uy(s=0){const e=mn[s]||mn[0];if(!e){Xe.playBellSound(1);return}const t=Math.random()>.5?1:-1;e.swingVelocity=t*(2.6+Math.random()*1),Xe.playBellSound(.95+Math.random()*.15),fy(e.worldPos),Tt("🔔 Sacred Temple Bell Rung with Devotion! 🙏")}function fy(s){if(!Rt)return;const e=[16765286,16769690,16758531],t=new Ne;t.position.copy(s);for(let n=0;n<10;n++){const i=new I(new it(.025,4,4),new rt({color:e[n%e.length]}));i.position.set((Math.random()-.5)*.35,-.2+(Math.random()-.5)*.25,(Math.random()-.5)*.35),t.add(i)}Rt.add(t),setTimeout(()=>{Rt.remove(t)},700)}function py(){const s=document.createElement("canvas");s.width=1024,s.height=1024;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,1024,1024);t.addColorStop(0,"#7b0d1e"),t.addColorStop(.45,"#540b0e"),t.addColorStop(1,"#330306"),e.fillStyle=t,e.fillRect(0,0,1024,1024),e.strokeStyle="rgba(255, 209, 102, 0.08)",e.lineWidth=1.5;for(let c=-1024;c<2048;c+=32)e.beginPath(),e.moveTo(c,0),e.lineTo(c+1024,1024),e.stroke(),e.beginPath(),e.moveTo(c+1024,0),e.lineTo(c,1024),e.stroke();e.fillStyle="rgba(255, 215, 0, 0.12)";for(let c=16;c<1024;c+=32)for(let l=16;l<1024;l+=32)e.beginPath(),e.arc(c,l,2,0,Math.PI*2),e.fill();e.strokeStyle="#ffd166",e.lineWidth=16,e.strokeRect(28,28,968,968),e.strokeStyle="#f77f00",e.lineWidth=4,e.strokeRect(42,42,940,940),e.fillStyle="#ffd166";for(let c=46;c<=970;c+=24)e.beginPath(),e.moveTo(c,42),e.lineTo(c+12,60),e.lineTo(c+24,42),e.fill(),e.beginPath(),e.moveTo(c,982),e.lineTo(c+12,964),e.lineTo(c+24,982),e.fill();for(let c=46;c<=970;c+=24)e.beginPath(),e.moveTo(42,c),e.lineTo(60,c+12),e.lineTo(42,c+24),e.fill(),e.beginPath(),e.moveTo(982,c),e.lineTo(964,c+12),e.lineTo(982,c+24),e.fill();e.strokeStyle="#ffd166",e.lineWidth=3,e.strokeRect(72,72,880,880);const n=512,i=450,r=e.createRadialGradient(n,i,25,n,i,270);r.addColorStop(0,"rgba(255, 209, 102, 0.45)"),r.addColorStop(.55,"rgba(247, 127, 0, 0.22)"),r.addColorStop(1,"rgba(84, 11, 14, 0)"),e.fillStyle=r,e.beginPath(),e.arc(n,i,270,0,Math.PI*2),e.fill(),e.strokeStyle="#ffd166",e.lineWidth=3,e.beginPath(),e.arc(n,i,185,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255, 209, 102, 0.5)",e.lineWidth=2,e.beginPath(),e.arc(n,i,172,0,Math.PI*2),e.stroke();for(let c=0;c<24;c++){const l=c*Math.PI*2/24,d=n+Math.cos(l)*185,h=i+Math.sin(l)*185,u=n+Math.cos(l+.13)*220,f=i+Math.sin(l+.13)*220,g=n+Math.cos(l+.26)*185,_=i+Math.sin(l+.26)*185;e.fillStyle="#ffd166",e.beginPath(),e.moveTo(d,h),e.quadraticCurveTo(u,f,g,_),e.fill()}e.save(),e.shadowColor="#ffb703",e.shadowBlur=32,e.font="bold 235px serif",e.fillStyle="#fff7d6",e.textAlign="center",e.textBaseline="middle",e.fillText("ॐ",n,i-10),e.restore();const o=e.createLinearGradient(n-90,i-90,n+90,i+90);o.addColorStop(0,"#ffffff"),o.addColorStop(.35,"#ffd166"),o.addColorStop(.7,"#f77f00"),o.addColorStop(1,"#ffbe0b"),e.fillStyle=o,e.font="bold 235px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("ॐ",n,i-10),e.font='bold 44px "Cinzel", "Outfit", serif',e.fillStyle="#ffd166",e.shadowColor="rgba(0, 0, 0, 0.85)",e.shadowBlur=12,e.fillText("॥ श्री गणेशाय नमः ॥",n,i+245),e.font='600 22px "Outfit", sans-serif',e.fillStyle="#fce1b8",e.fillText("• GANESHVERSE CEREMONIAL MANTRA •",n,i+290),e.fillStyle="#ffd166";for(let c=60;c<=960;c+=18)e.fillRect(c,986,6,26),e.beginPath(),e.arc(c+3,1014,5,0,Math.PI*2),e.fill();const a=new Bi(s);return a.wrapS=Yn,a.wrapT=Yn,a}function On(){if(!ut)return;for(;ut.children.length>0;)ut.remove(ut.children[0]);if(v.stage>=3&&!v.purchasedIdol){const t=v.selectedIdol||"bal";v.purchasedIdol=gi.find(n=>n.id===t)||gi[0]}if(v.stage<3||!v.purchasedIdol){ut.visible=!1,dt&&(dt.visible=!1);return}const s=v.purchasedIdol&&v.purchasedIdol.id||v.selectedIdol||"bal",e=gi.find(t=>t.id===s)||gi[0];if(ki&&ki[s]){const t=ki[s].clone(!0),i={bal:.95,eco:.95}[s]||.95;t.scale.set(i,i,i),t.position.set(0,0,0),t.rotation.y=e.mandapRotY!==void 0?e.mandapRotY:0,t.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.material&&(r.material.needsUpdate=!0))}),ut.add(t)}else{const t=Hn({baseType:s==="eco"?"leaf":"lotus",scale:.95,skinColor:s==="eco"?11884597:13933426,isTerracotta:s==="eco"});t.rotation.y=Math.PI,t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),ut.add(t)}ut.position.set(0,1.25,-.6),ut.visible=!0}function my(){gt=new Ne,gt.position.set(0,0,0);const s=new ze(9.6,.28,8.4),e=new xe({color:4004875,roughness:.6}),t=new I(s,e);t.position.y=.14,t.receiveShadow=!0,gt.add(t);for(let ne=0;ne<2;ne++){const oe=new ze(4.2,.14,.5),j=new I(oe,e);j.position.set(0,.07+ne*.14,4.35+ne*.45),j.receiveShadow=!0,gt.add(j)}const n=new ze(8.2,.2,7.2),i=new xe({color:16117734,roughness:.35}),r=new I(n,i);r.position.y=.36,r.receiveShadow=!0,gt.add(r);const o=new ze(3.6,.02,6.8),a=new xe({color:8392211,roughness:.85}),c=new I(o,a);c.position.set(0,.47,0),c.receiveShadow=!0,gt.add(c),[[-3.6,-3],[3.6,-3],[-3.6,3],[3.6,3]].forEach(([ne,oe])=>{const j=new Ne;j.position.set(ne,.46,oe);const ae=new ze(.7,.35,.7),ve=new I(ae,me.woodPillar);ve.position.y=.175,j.add(ve);const _e=new Te(.24,.28,4.2,12),he=new I(_e,me.woodPillar);he.position.y=2.4,he.castShadow=!0,j.add(he),[1.2,2.4,3.6].forEach(ce=>{const fe=new Ht(.27,.035,8,16);fe.rotateX(Math.PI/2);const be=new I(fe,me.brassGold);be.position.y=ce,j.add(be)});const Ue=new ze(.75,.3,.75),F=new I(Ue,me.woodPillar);F.position.y=4.6,j.add(F),gt.add(j)});const d=new ze(7.8,.28,.35);[-3,3].forEach(ne=>{const oe=new I(d,me.woodPillar);oe.position.set(0,5,ne),gt.add(oe)});const h=new ze(.35,.28,6.4);[-3.6,3.6].forEach(ne=>{const oe=new I(h,me.woodPillar);oe.position.set(ne,5,0),gt.add(oe)});const u=new ft(5.4,2.6,4);u.rotateY(Math.PI/4);const f=new xe({color:10165536,roughness:.65}),g=new I(u,f);g.position.set(0,6.4,0),g.castShadow=!0,gt.add(g);const _=new it(.35,16,16);_.scale(1,1.15,1);const m=new I(_,me.brassGold);m.position.set(0,7.85,0),gt.add(m);const p=new ft(.16,.7,12),T=new I(p,me.brassGold);T.position.set(0,8.4,0),gt.add(T);for(let ne=-3.4;ne<=3.4;ne+=.28){const oe=Math.sin((ne+3.4)/6.8*Math.PI)*.45,j=new ft(.08,.26,4);j.rotateX(Math.PI);const ae=new I(j,me.mangoLeaf);ae.position.set(ne,4.85-oe,3),gt.add(ae);const ve=new it(.065,8,8),_e=Math.round(ne*10)%2===0,he=new I(ve,_e?me.marigoldOrange:me.marigoldYellow);he.position.set(ne,4.96-oe,3),gt.add(he)}[[-2.2,.4,4],[2.2,.4,4]].forEach(([ne,oe,j],ae)=>{const ve=new Ne;ve.position.set(ne,j,oe);const _e=.85,he=new Te(.012,.012,_e,6),Ue=new I(he,me.brassGold);Ue.position.y=-_e/2,ve.add(Ue);const F=new Ne;F.position.y=-_e;const ce=new Te(.06,.08,.07,12),fe=new I(ce,me.brassGold);fe.position.y=-.035,F.add(fe);const be=new Te(.08,.22,.32,16),le=new I(be,me.brassGold);le.position.y=-.18,F.add(le);const te=new Ht(.22,.024,6,16);te.rotateX(Math.PI/2);const Re=new I(te,me.brassGold);Re.position.y=-.34,F.add(Re);const Ge=new Ne;Ge.position.y=-.12;const Mt=new Te(.01,.01,.28,6),lt=new I(Mt,me.brassGold);lt.position.y=-.14,Ge.add(lt);const An=new it(.045,8,8),cn=new I(An,me.brassGold);cn.position.y=-.28,Ge.add(cn);const Yr=new Te(.014,.018,.32,8),ti=new xe({color:14034984,roughness:.8}),hs=new I(Yr,ti);hs.position.y=-.46,Ge.add(hs),F.add(Ge),ve.add(F),gt.add(ve),mn.push({group:ve,pivot:F,clapper:Ge,dome:le,worldPos:new C(ne,j-_e,oe),swingAngle:0,swingVelocity:0,isInteractive:!0})}),[-2.6,2.6].forEach(ne=>{const oe=new Ne;oe.position.set(ne,.46,3.8);const j=new Te(.12,.16,2.6,10),ae=new xe({color:4231532,roughness:.7}),ve=new I(j,ae);ve.position.y=1.3,oe.add(ve);for(let _e=0;_e<6;_e++){const he=_e/6*Math.PI*2,Ue=new Ne;Ue.position.set(0,2.3+_e%2*.2,0),Ue.rotation.y=he;const F=new ze(.35,.015,1.4),ce=new xe({color:2976335,roughness:.6}),fe=new I(F,ce);fe.position.set(0,0,.7),fe.rotation.x=.35+_e%3*.1,Ue.add(fe),oe.add(Ue)}gt.add(oe)}),[[-3.6,-2.4],[3.6,-2.4],[-3.6,2.4],[3.6,2.4]].forEach(([ne,oe],j)=>{const ae=new Ne;ae.position.set(ne,.46,oe);const ve=new Te(.3,.36,.12,12),_e=new I(ve,me.brassGold);_e.position.y=.06,ae.add(_e);const he=new Te(.06,.09,1.6,10),Ue=new I(he,me.brassGold);Ue.position.y=.86,ae.add(Ue),[.75,1.15,1.55].forEach((F,ce)=>{const fe=new Te(.22-ce*.04,.12,.06,12),be=new I(fe,me.brassGold);be.position.y=F,ae.add(be);const le=new ft(.035,.1,6),te=new I(le,me.diyaFlame);if(te.position.set(0,F+.07,0),ae.add(te),ce===2){const Re=new Jt(16758531,.65,5.5);Re.position.set(0,F+.12,0),ae.add(Re),Vo.push({light:Re,flame:te,baseIntensity:.65,offset:j*1.5+ce})}}),gt.add(ae)});const P=new Ft(2.8,2.8),A=new I(P,me.rangoli);A.rotation.x=-Math.PI/2,A.position.set(0,.48,1.1),gt.add(A);const R=new Ne;R.position.set(0,.46,-.6);const N=new ze(2.4,.55,1.5),S=new xe({color:4857357,roughness:.6}),E=new I(N,S);E.position.y=.275,R.add(E);const U=new ze(2.48,.58,1.58),O=new xe({color:8131104,roughness:.7}),H=new I(U,O);H.position.y=.29,R.add(H);const K=new ze(2.52,.06,1.62),X=new I(K,me.brassGold);X.position.y=.57,R.add(X);const $=new Te(.72,.8,.16,16),ie=new I($,me.brassGold);ie.position.y=.66,R.add(ie);const W=new Te(.68,.68,.04,16),ue=new I(W,O);ue.position.y=.75,R.add(ue);const ge=new Te(.26,.28,.03,16),Ee=new I(ge,me.brassGold);Ee.position.set(-.7,.6,.35),R.add(Ee);const Oe=new xe({color:16032353,roughness:.5});[[0,0],[.09,.05],[-.09,.05],[.05,-.08],[-.05,-.08]].forEach(([ne,oe])=>{const j=new Ne;j.position.set(-.7+ne,.62,.35+oe);const ae=new it(.045,8,8);ae.scale(1,.7,1);const ve=new I(ae,Oe);j.add(ve);const _e=new ft(.04,.09,8),he=new I(_e,Oe);he.position.y=.04,j.add(he),R.add(j)});const je=new Ne;je.position.set(.7,.6,.35);const Ke=new it(.14,12,12);Ke.scale(1,1.15,1);const Z=new I(Ke,me.brassGold);Z.position.y=.14,je.add(Z);const ee=new Ht(.11,.015,6,16);ee.rotateX(Math.PI/2);const J=new rt({color:14034984}),se=new I(ee,J);se.position.y=.22,je.add(se);for(let ne=0;ne<5;ne++){const oe=ne*Math.PI*2/5,j=new ft(.04,.16,4);j.rotateZ(.4),j.rotateY(oe);const ae=new I(j,me.mangoLeaf);ae.position.set(0,.27,0),je.add(ae)}const re=new it(.08,10,10);re.scale(.85,1.2,.85);const ye=new xe({color:5518621,roughness:.9}),tt=new I(re,ye);tt.position.y=.33,je.add(tt),R.add(je);const L=new Te(.22,.15,.12,14,1,!0),He=new xe({color:9067062,roughness:.85,side:Nt}),Fe=new I(L,He);Fe.position.set(-.35,.65,.52),R.add(Fe);const Ie=new xe({color:12653087,roughness:.3});[-.05,.05].forEach((ne,oe)=>{const j=new it(.05,8,8),ae=new I(j,Ie);ae.position.set(-.35+ne,.7,.52+oe*.04),R.add(ae)});const Ce=new Te(.07,.09,.05,10),ct=new I(Ce,me.brassGold);ct.position.set(.35,.62,.52),R.add(ct),[-.02,0,.02].forEach((ne,oe)=>{const j=new Te(.005,.005,.28,6),ae=new xe({color:4007959,roughness:.9}),ve=new I(j,ae);ve.position.set(.35+ne,.76,.52+oe*.015),ve.rotation.z=(oe-1)*.15,R.add(ve);const _e=new it(.009,6,6),he=new rt({color:16724736}),Ue=new I(_e,he);Ue.position.set(.35+ne*1.5,.9,.52+oe*.015),R.add(Ue)});const Ae=new Te(.08,.05,.04,10),Ye=new I(Ae,me.brassGold);Ye.position.set(0,.61,.55),R.add(Ye);const Lt=new ft(.025,.08,6),xt=new I(Lt,me.diyaFlame);xt.position.set(0,.66,.55),R.add(xt);const y=new Jt(16758531,.75,4.5);y.position.set(0,.7,.55),R.add(y),Vo.push({light:y,flame:xt,baseIntensity:.75,offset:3.2}),gt.add(R),ut=new Ne,ut.position.set(0,1.25,-.6),ut.visible=!1,gt.add(ut),On(),dt=new Ne,dt.position.set(0,1.88,-.22),dt.visible=!1;const x=py(),D=new Ft(1.85,2.35,36,48),V=D.attributes.position;for(let ne=0;ne<V.count;ne++){const oe=V.getX(ne),j=V.getY(ne),ae=Math.cos(oe*1.5)*.2+Math.sin((j+1.1)*2.8)*.04,ve=Math.sin(oe*16)*.03*(1.25-j*.35);V.setZ(ne,ae+ve)}D.computeVertexNormals(),yr=new xe({map:x,roughness:.58,metalness:.18,side:Nt,transparent:!0,opacity:1});const Q=new I(D,yr);Q.castShadow=!0,dt.add(Q),[-1,1].forEach(ne=>{const oe=new Ft(.55,2.35,12,32),j=oe.attributes.position;for(let ve=0;ve<j.count;ve++){const _e=j.getX(ve),he=j.getY(ve);j.setZ(ve,-_e*.45+Math.sin(he*4)*.03)}oe.computeVertexNormals();const ae=new I(oe,yr);ae.position.set(ne*.98,0,-.15),ae.rotation.y=ne*.65,ae.castShadow=!0,dt.add(ae)});const z=new Te(.04,.04,2,16);z.rotateZ(Math.PI/2);const we=new I(z,me.brassGold);we.position.set(0,1.16,.06),dt.add(we),gt.add(dt),an=new Jt(16765286,1.4,7.5),an.position.set(0,2.3,.1),gt.add(an),[{posX:-2.8,posZ:.5,rotY:Math.PI/4,gender:"f",attire:"saree",color:10165584,skin:14592642,height:1.64},{posX:-2.9,posZ:-.6,rotY:Math.PI/3,gender:"m",attire:"dhoti",color:16117734,skin:12946524,height:1.7,elder:!0},{posX:-2.1,posZ:1.8,rotY:Math.PI/6,gender:"m",attire:"kurta",color:2390944,skin:13933426,height:1.76},{posX:2.8,posZ:.5,rotY:-Math.PI/4,gender:"f",attire:"saree",color:1802105,skin:14592642,height:1.63},{posX:2.9,posZ:-.6,rotY:-Math.PI/3,gender:"m",attire:"kurta",color:14034984,skin:13933426,height:1.75},{posX:2.1,posZ:1.8,rotY:-Math.PI/6,gender:"f",attire:"kid",color:16765286,skin:13933426,height:1.15}].forEach(ne=>{const oe=Xr(ne);oe.mesh.position.set(ne.posX,.46,ne.posZ),oe.mesh.rotation.y=ne.rotY,oe.anim.isNamaste=!0,oe.anim.namasteFactor=1,gt.add(oe.mesh),gf.push(oe.anim)}),bn.add(gt)}my();const ha=[],_f=[];function gy(s){const e=new Ne,t=s.side==="left",n=s.posX,i=s.posZ,r=t?Math.PI/2:-Math.PI/2;e.position.set(n,0,i),e.rotation.y=r;const o=new xe({color:s.wallColor,roughness:.85}),a=new xe({color:s.doorColor,roughness:.6}),c=new ze(8.5,4.8,6.5),l=new I(c,o);l.position.set(0,2.4,-3.8),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const d=new ft(6.4,2.4,4);d.rotateY(Math.PI/4),d.scale(1.15,1,.85);const h=new I(d,me.roofTile);h.position.set(0,5.8,-3.8),h.castShadow=!0,e.add(h);const u=new ze(7.6,.35,3.2),f=new I(u,me.verandaFloor);f.position.set(0,.175,.7),f.receiveShadow=!0,e.add(f);const g=new ze(3.2,.18,.7),_=new I(g,me.sidewalk);_.position.set(0,.09,2.45),_.receiveShadow=!0,e.add(_);const m=new ze(7.8,.22,3.5);m.rotateX(.12);const p=new I(m,me.roofTile);p.position.set(0,3.8,.7),p.castShadow=!0,e.add(p),[-3.2,-1.1,1.1,3.2].forEach(ee=>{const J=new Te(.12,.14,3.6,10),se=new I(J,me.woodPillar);se.position.set(ee,1.95,2),se.castShadow=!0,e.add(se);const re=new Te(.17,.13,.15,8),ye=new I(re,me.brassGold);ye.position.set(ee,3.6,2),e.add(ye)});const T=new ze(1.7,2.9,.12),w=new I(T,a);w.position.set(0,1.6,-.48),e.add(w);const M=new Ht(.1,.025,8,16),P=new I(M,me.brassGold);P.position.set(0,1.7,-.4),e.add(P);const A=document.createElement("canvas");A.width=256,A.height=64;const R=A.getContext("2d");R.fillStyle="#220e06",R.fillRect(0,0,256,64),R.lineWidth=4,R.strokeStyle="#ffd166",R.strokeRect(4,4,248,56),R.font="bold 24px sans-serif",R.fillStyle="#ffd166",R.textAlign="center",R.fillText(s.name,128,40);const N=new Bi(A),S=new Ft(1.5,.38),E=new rt({map:N}),U=new I(S,E);U.position.set(0,3.25,-.46),e.add(U);const O=dy(2);O.position.set(0,3.05,-.42),e.add(O),[-2.4,2.4].forEach(ee=>{const J=new ze(1.2,1.6,.1),se=new I(J,a);se.position.set(ee,2,-.5),e.add(se);const re=new I(new Ft(.95,1.35),me.windowGlow);re.position.set(ee,2,-.44),e.add(re)});const H=new I(new Ft(2.1,2.1),me.rangoli);H.rotation.x=-Math.PI/2,H.position.set(0,.36,1.1),e.add(H),e.add(ur(-1.1,.37,.2)),e.add(ur(1.1,.37,.2)),e.add(ur(-1.8,.37,1.9)),e.add(ur(1.8,.37,1.9)),e.add(ur(0,.2,2.45));const K=hy();K.position.set(2.4,.36,1.6),e.add(K);const X=ay(0,3.2,2,16752412);e.add(X);const $=new Hr(1.4,1.65,32),ie=new rt({color:16765286,side:Nt,transparent:!0,opacity:.6}),W=new I($,ie);W.rotation.x=-Math.PI/2,W.position.set(0,.37,1.9),e.add(W);const ue=new ra(.32,24),ge=new rt({color:3065014,side:Nt,transparent:!0,opacity:0}),Ee=new I(ue,ge);Ee.rotation.x=-Math.PI/2,Ee.position.set(0,.38,1.9),e.add(Ee);const Oe=[],Qe=.85,Ke=-((s.members.length-1)*Qe)/2;s.members.forEach((ee,J)=>{const se=Xr(ee),re=se.mesh;re.position.set(Ke+J*Qe,.35,.25),e.add(re),Oe.push(se)}),Rt.add(e),_f.push(e);const Z=new C(t?n+3.4:n-3.4,0,i);ha.push({data:s,group:e,ring:W,seal:Ee,members:Oe,worldPos:Z,isVisited:!1})}hi.forEach(s=>gy(s));const ua=new Ne;ua.position.set(0,0,-58);Rt.add(ua);const vf=Xr({role:"leader",gender:"m",attire:"kurta",color:16219904,skin:13933426,height:1.78},!0);ua.add(vf.mesh);const G={group:ua,anim:vf.anim,speed:7.5,velocity:new C,rotation:0,targetRotation:0,isMoving:!1,walkCycle:0},En={forward:!1,backward:!1,left:!1,right:!1};window.addEventListener("keydown",s=>{if(s.code==="KeyH"&&typeof as=="function"){as();return}if(typeof fu=="function"&&fu()){if(s.key==="Escape"){as(!1);return}return}if(s.code==="KeyC"&&v.stage===7){Jn&&Jn.classList.contains("active")?Vf():kl();return}if(s.code==="KeyM"){Br();return}if(v.isMapOpen){s.key==="Escape"&&Br(!1);return}if(v.isShopOpen){s.key==="Escape"&&fa();return}if(v.isDialogueOpen){if(s.key==="Escape"){rl();return}if(s.code==="KeyE"||s.code==="Enter"||s.code==="Space"){Or&&Or.click();return}return}if(v.stage===3&&v.stage3&&v.stage3.isRevealing&&!v.stage3.revealed&&(s.code==="KeyE"||s.code==="Space"||s.code==="Enter"||s.code==="ArrowRight")){const e=v.stage3.clothProgress||0;ds(Math.min(1,e+.35));return}switch(s.code){case"KeyW":case"ArrowUp":En.forward=!0;break;case"KeyS":case"ArrowDown":En.backward=!0;break;case"KeyA":case"ArrowLeft":En.left=!0;break;case"KeyD":case"ArrowRight":En.right=!0;break;case"KeyE":if(v.stage===1||v.stage===2||v.stage===3||v.stage===4)Mf();else if(v.stage===5)Bf();else if(v.stage===6&&v.stage6&&v.stage6.isAartiActive){if(v.stage6.totalAngleRotated+=Math.PI*.45,Xe.playTempleBell(1.25),It){const r=v.stage6.totalAngleRotated;It.position.x=Math.sin(r)*.95,It.position.z=-.6+Math.cos(r)*.75,It.position.y=1.35+Math.sin(r*2)*.08,It.rotation.y=r}const e=Math.min(2,Math.floor(v.stage6.totalAngleRotated/(Math.PI*2))),t=v.stage6.totalAngleRotated%(Math.PI*2)/(Math.PI*2);if(ea){const n=Math.round(t*100);ea.textContent=`AARTI ROUND: ${e+1} / 3 (${n}%)`}v.stage6.totalAngleRotated>=Math.PI*6&&!v.stage6.completed&&zf()}break}});window.addEventListener("keyup",s=>{switch(s.code){case"KeyW":case"ArrowUp":En.forward=!1;break;case"KeyS":case"ArrowDown":En.backward=!1;break;case"KeyA":case"ArrowLeft":En.left=!1;break;case"KeyD":case"ArrowRight":En.right=!1;break}});function _y(s){if(s.z<-65||s.z>66||s.x<-8.2||s.x>8.2)return!0;for(const e of ha){const t=Math.abs(s.x-e.data.posX),n=Math.abs(s.z-e.data.posZ);if(t<3.2&&n<3.2)return!0}return Math.abs(s.x)<1.9&&s.z>-1.7&&s.z<.25||s.z>60.5&&Math.abs(s.x)<5.8}const No=[];function vy(s,e,t){const n=new ze(.38,.04,.26),i=new xe({color:14034984,metalness:.3,roughness:.4}),r=new I(n,i),o=new Te(.06,.06,.05,12),a=new I(o,me.brassGold);a.position.y=.02,r.add(a),r.position.copy(s),Rt.add(r),No.push({meshObj:r,start:s.clone(),end:e.clone(),progress:0,onComplete:t})}function xy(s){for(let e=No.length-1;e>=0;e--){const t=No[e];if(t.progress+=s*2.2,t.progress>=1)Rt.remove(t.meshObj),t.meshObj.geometry.dispose(),t.onComplete&&t.onComplete(),No.splice(e,1);else{const n=t.progress;t.meshObj.position.lerpVectors(t.start,t.end,n),t.meshObj.position.y+=Math.sin(n*Math.PI)*1.6,t.meshObj.rotation.y+=s*10,t.meshObj.rotation.z+=s*6}}}const Zt=document.getElementById("interaction-prompt"),Pi=document.getElementById("prompt-action-verb"),Ii=document.getElementById("prompt-family-name"),xf=document.getElementById("dialogue-modal"),vh=document.getElementById("dialogue-family-title"),xh=document.getElementById("dialogue-family-subtitle"),Mh=document.getElementById("dialogue-amount"),yh=document.getElementById("dialogue-line-1"),Sh=document.getElementById("dialogue-line-2"),Eh=document.getElementById("dialogue-line-3"),Or=document.getElementById("btn-collect-chanda"),di=document.getElementById("hud-chanda-val"),js=document.getElementById("hud-score-val"),rn=document.getElementById("hud-visited-val"),fn=document.getElementById("hud-families-val"),bt=document.getElementById("hud-guide-text"),rc=document.getElementById("toast-msg");function Bn(){const s=document.getElementById("hud");if(s)if(v.stage>=3){s.classList.add("mandap-mode");const e=document.getElementById("hud-mandap-chanda"),t=document.getElementById("hud-mandap-score");e&&(e.textContent=`₹${v.chanda}`),t&&(t.textContent=`${v.score}`)}else s.classList.remove("mandap-mode")}let is=null,Dn=null;function Ol(){if(v.stage<1||v.stage>4||v.isDialogueOpen||v.isShopOpen||v.isMapOpen||v.stage3&&v.stage3.isRevealing)return;if(v.stage===1){let t=null,n=1/0,i=null,r=1/0;for(const o of ha){const a=G.group.position.distanceTo(o.worldPos),c=Math.abs(G.group.position.x-o.data.posX),l=Math.abs(G.group.position.z-o.data.posZ);(a<7.2||c<7.8&&l<5)&&a<n&&(n=a,t=o),!o.isVisited&&a<r&&(r=a,i=o)}if(bt)if(i){const o=Math.round(r),a=i.worldPos.z-G.group.position.z,c=a>2?"ahead ➔":a<-2?"behind ⬅":"nearby";bt.textContent=`🏠 ${i.data.name} (${i.data.houseNum.split("—")[0].trim()}) • ${o}m ${c}`}else bt.textContent="🎉 All 8 families invited! Chanda collection complete.";t?(Dn="house",is=t,Pi&&(Pi.textContent=t.isVisited?"Speak with ":"Collect Chanda & Invite "),Ii&&(Ii.textContent=t.isVisited?`${t.data.name} (Invited ✅)`:`${t.data.name} (₹${t.data.contribution}) 💰`),Zt.classList.add("visible"),t.members.forEach(o=>{o.anim.isNamaste=!0,o.mesh.lookAt(G.group.position.x,o.mesh.position.y,G.group.position.z)})):(Dn=null,is=null,Zt.classList.remove("visible"));return}if(v.stage===2){const t=G.group.position.distanceTo(mf),n=t<8.5;if(bt){const i=Math.round(t);bt.textContent=`🧭 Ganesha Murti Workshop • ${i}m ahead ➔ (Press E to Enter)`}n?(Dn="shop",is=null,Pi&&(Pi.textContent="Enter "),Ii&&(Ii.textContent="Ganesha Murti Workshop (Inspect Idols) 🐘"),Zt.classList.add("visible")):(Dn=null,Zt.classList.remove("visible"));return}const e=G.group.position.distanceTo(Fl)<7.5;if(v.stage===3){bt&&(bt.textContent=v.stage3&&v.stage3.revealed?"🙏 BAPPA HAS ARRIVED at the Festival Mandap!":"🧭 Festival Mandap • (Drag Sacred Cloth or Press E to Unveil)"),e?(Dn="mandap",is=null,Pi&&(Pi.textContent=v.stage3&&v.stage3.revealed?"Seek ":"Perform "),Ii&&(Ii.textContent=v.stage3&&v.stage3.revealed?"Bappa's Divine Blessings 🙏":"Ceremonial Cloth Unveiling 🪔"),Zt.classList.add("visible")):(Dn=null,Zt.classList.remove("visible"));return}if(v.stage===4){bt&&(bt.textContent="🌸 Stage 4: Prepare the Mandap with flower malas, samai lamps & torans."),e?(Dn="pandal_prep",is=null,Pi&&(Pi.textContent="Place "),Ii&&(Ii.textContent="Mandap Sacred Decoration 🌸"),Zt.classList.add("visible")):(Dn=null,Zt.classList.remove("visible"));return}}function Mf(){if(Dn==="pandal_prep"||v.stage===4){if(v.stage4&&!v.stage4.completed){const e=["toran","garlands","samaiLamps","cushions","fruits","kalash","modaks","incense"].find(t=>!v.stage4.items[t]);e?Df(e):Tt("🌸 All pandal decorations placed with devotion!")}}else Dn==="mandap"?v.stage3.revealed?Tt("🙏 Bappa has arrived! Festival preparations in progress."):pa():Dn==="shop"?Bl():is&&yf(is)}Zt.addEventListener("click",Mf);function yf(s){v.isDialogueOpen=!0,v.activeFamily=s,Zt.classList.remove("visible"),s.isVisited?(vh.textContent=`🙏 ${s.data.name} (Invited ✅)`,xh.textContent=`${s.data.houseNum} • Confirmed Festival Devotees`,yh.textContent='"Namaste! We are already invited and eagerly preparing modaks for Bappa!"',Sh.textContent=`"Our contribution of ₹${s.data.contribution} is dedicated to Lord Vighnaharta's grand mandap."`,Eh.textContent='"We will see you at the grand pandal for the sacred Aarti!"',Mh.textContent=`₹${s.data.contribution} (Contributed)`,Or.innerHTML="<span>🙏</span> <span>Namaste (Already Invited — Press E to Close)</span>"):(vh.textContent=`🙏 ${s.data.name}`,xh.textContent=`${s.data.houseNum} • Festival Devotees`,yh.textContent=`"${s.data.dialogue[0]}"`,Sh.textContent=`"${s.data.dialogue[1]}"`,Eh.textContent=`"${s.data.dialogue[2]}"`,Mh.textContent=`₹${s.data.contribution}`,Or.innerHTML=`<span>💰</span> <span>COLLECT ₹${s.data.contribution} CHANDA & INVITE (Press E)</span>`),xf.classList.add("active"),Xe.playTempleBell(1.1)}function rl(){v.isDialogueOpen=!1,xf.classList.remove("active")}Or.addEventListener("click",()=>{if(!v.activeFamily)return;const s=v.activeFamily;if(s.isVisited){rl();return}rl();const e=s.worldPos.clone().add(new C(0,1.4,0)),t=G.group.position.clone().add(new C(0,1.2,0));vy(e,t,()=>{v.chanda+=s.data.contribution,v.score+=s.data.contribution*10,v.familiesVisited+=1,v.invitedFamilies.push(s.data),s.isVisited=!0,s.seal.material.opacity=.85,s.ring.material.color.setHex(3065014),di.textContent=`₹${v.chanda}`,js.textContent=`${v.score}`,rn&&(rn.textContent=`${v.familiesVisited} / 8`),fn.textContent=`${v.invitedFamilies.length} / 8`,Xe.playCoinChime(),Tt(`✅ ${s.data.name} invited! Received ₹${s.data.contribution} Chanda`),v.familiesVisited===8&&v.invitedFamilies.length===8&&setTimeout(Ey,900)})});function Tt(s){rc.textContent=s,rc.classList.add("show"),setTimeout(()=>{rc.classList.remove("show")},3400)}const Sf=document.getElementById("stage1-modal"),My=document.getElementById("stat-total-chanda"),yy=document.getElementById("stat-total-score"),Sy=document.getElementById("btn-stage1-continue");function Ey(){Xe.playCelebrationFanfare(),My.textContent=`₹${v.chanda}`,yy.textContent=`${v.score}`,Sf.classList.add("active"),uf.color.setHex(16777215)}Sy.addEventListener("click",()=>{Sf.classList.remove("active"),v.stage=2,v.stage1Completed=!0,G.group.position.set(0,0,52),G.rotation=0,G.group.rotation.y=0,xi=null,Ze.position.set(0,3.4,44.5),Ze.lookAt(0,2.1,62.5),Sr({name:"Ganesha Murti Workshop",x:0,z:61.5,type:"shop"}),v.currentObjective="Select Lord Ganesha's sacred Murti for the festival pandal.";const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");s&&(s.textContent="Stage 2: Murti Workshop"),e&&(e.textContent=v.currentObjective),bt&&(bt.textContent="🐘 Choose Bappa's Murti from the 4 sacred sculpted idols ➔"),on(),tr(),setTimeout(Bl,350),Tt("🎉 Stage 1 Complete! Welcome to the Ganesha Murti Workshop.")});const wh=document.getElementById("btn-map-toggle"),bh=document.getElementById("btn-close-map"),Th=document.getElementById("btn-set-destination-shop"),Ah=document.getElementById("festival-map-modal"),ui=document.getElementById("festival-map-canvas"),Rh=document.getElementById("map-objective-text"),wo=document.getElementById("map-dest-name"),bo=document.getElementById("map-dest-dist"),Ni=new Ne,wy=new rt({color:16765286}),Ef=new ft(.35,.85,4);Ef.rotateX(Math.PI/2);const wf=new I(Ef,wy);wf.position.set(0,.22,0);Ni.add(wf);const bf=new Hr(.25,.52,16);bf.rotateX(-Math.PI/2);const by=new rt({color:16219904,side:Nt,transparent:!0,opacity:.75}),Tf=new I(bf,by);Tf.position.set(0,.06,0);Ni.add(Tf);Rt.add(Ni);function Sr(s){v.destination=s,Os()}function Os(){if(Rh&&(Rh.textContent=v.currentObjective),v.destination){wo&&(wo.textContent=v.destination.name);const s=new C(v.destination.x,0,v.destination.z),e=Math.round(G.group.position.distanceTo(s)),t=v.destination.z-G.group.position.z,n=t>2?"ahead ➔":t<-2?"behind ⬅":"nearby";bo&&(bo.textContent=`${e}m ${n}`)}else wo&&(wo.textContent="None Selected"),bo&&(bo.textContent="--")}function Br(s){s===void 0&&(s=!v.isMapOpen),v.isMapOpen=s,s?(Ah.classList.add("active"),Xe.playTempleBell(1),Os(),on()):Ah.classList.remove("active")}wh&&wh.addEventListener("click",()=>Br(!0));bh&&bh.addEventListener("click",()=>Br(!1));Th&&Th.addEventListener("click",()=>{Sr({name:"Ganesha Murti Workshop",x:0,z:61.5,type:"shop"}),v.currentObjective="Visit the Ganesh Idol Shop and choose Bappa's Murti.";const s=document.getElementById("hud-objective-text");s&&(s.textContent=v.currentObjective),Os(),on(),Tt("🚩 Destination set: Ganesha Murti Workshop")});function Li(s){return 90+(s- -65)/130*630}function oc(s){return 190+s/14*80}function on(){if(!ui)return;const s=ui.getContext("2d"),e=ui.width,t=ui.height;s.fillStyle="#14080b",s.fillRect(0,0,e,t),s.strokeStyle="#ffd166",s.lineWidth=3,s.strokeRect(8,8,e-16,t-16),s.strokeStyle="rgba(247, 127, 0, 0.4)",s.lineWidth=1,s.strokeRect(14,14,e-28,t-28),s.fillStyle="#241a1d",s.fillRect(70,160,660,60),s.fillStyle="#ffffff";for(let d=80;d<=710;d+=25)s.fillRect(d,160,8,3),s.fillRect(d,217,8,3);s.fillStyle="#ffb703";for(let d=85;d<=700;d+=45)s.fillRect(d,188,22,4);s.font="bold 11px Outfit, sans-serif",s.fillStyle="rgba(255, 255, 255, 0.5)",s.textAlign="center",s.fillText("Street Entrance ➔",115,150),hi.forEach(d=>{const h=v.invitedFamilies.some(g=>g.id===d.id),u=Li(d.posZ),f=d.side==="left"?100:275;s.fillStyle=h?"rgba(46, 196, 182, 0.2)":"rgba(255, 209, 102, 0.12)",s.strokeStyle=h?"#2ec4b6":"#ffd166",s.lineWidth=1.5,s.beginPath(),s.roundRect(u-36,f-26,72,52,8),s.fill(),s.stroke(),s.font="bold 11px Outfit, sans-serif",s.fillStyle=h?"#2ec4b6":"#ffd166",s.textAlign="center",s.fillText(d.name.split(" ")[0],u,f-8),s.font="10px Outfit, sans-serif",s.fillStyle="#fff",s.fillText(`Villa ${d.houseNum.split("—")[0].replace("Villa","").trim()}`,u,f+6),s.font="bold 10px sans-serif",h?(s.fillStyle="#2ec4b6",s.fillText("✅ Invited",u,f+19)):(s.fillStyle="#f77f00",s.fillText("🟡 Unvisited",u,f+19))});const n=Li(61.5),i=v.destination&&v.destination.type==="shop";s.fillStyle=i?"rgba(247, 127, 0, 0.35)":"rgba(84, 11, 14, 0.7)",s.strokeStyle=i?"#ffd166":"#f77f00",s.lineWidth=i?3:2,s.beginPath(),s.roundRect(n-40,150,80,80,12),s.fill(),s.stroke(),s.font="22px serif",s.textAlign="center",s.fillText("🐘",n,180),s.font="bold 11px Cinzel, serif",s.fillStyle="#ffd166",s.fillText("MURTI SHOP",n,202),s.font="9px Outfit, sans-serif",s.fillStyle="#fff",s.fillText("Workshop",n,218);const r=Li(0),o=v.destination&&(v.destination.type==="mandap"||v.destination.type==="pandal"||v.destination.type==="puja"||v.destination.type==="aarti"||v.destination.type==="celebration");s.fillStyle=o?"rgba(214, 40, 40, 0.45)":"rgba(84, 11, 14, 0.75)",s.strokeStyle=o?"#ffd166":"#f77f00",s.lineWidth=o?3:2,s.beginPath(),s.roundRect(r-36,150,72,80,10),s.fill(),s.stroke(),s.font="22px serif",s.textAlign="center",s.fillText("🪔",r,178),s.font="bold 10px Cinzel, serif",s.fillStyle="#ffd166",s.fillText("MANDAP",r,198),s.font="9px Outfit, sans-serif";let a="Sacred Shrine";if(v.stage===3?a=v.stage3&&v.stage3.revealed?"Bappa Arrived ✅":"Arrival / Unveil":v.stage===4?a=v.stage4&&v.stage4.completed?"Pandal Ready ✅":"Pandal Decor 🌸":v.stage===5?a=v.stage5&&v.stage5.completed?"Puja Offered 🙏":"Ganesh Puja 🪔":v.stage===6?a=v.stage6&&v.stage6.completed?"Aarti Done ✨":"Holy Aarti 🪔":v.stage===7&&(a="Celebration 🎊"),s.fillStyle=v.stage>=4||v.stage3&&v.stage3.revealed?"#2ec4b6":"#fce1b8",s.fillText(a,r,214),v.destination){const d=Li(v.destination.z),u=v.destination.type==="shop"||v.destination.type==="mandap"||v.destination.type==="pandal"||v.destination.type==="puja"||v.destination.type==="aarti"||v.destination.type==="celebration"?190:oc(v.destination.x),f=Li(G.group.position.z),g=oc(G.group.position.x);s.strokeStyle="#ffd166",s.lineWidth=2.5,s.setLineDash([6,6]),s.beginPath(),s.moveTo(f,g),s.lineTo(d,u),s.stroke(),s.setLineDash([])}const c=Li(G.group.position.z),l=oc(G.group.position.x);s.fillStyle="rgba(255, 209, 102, 0.35)",s.beginPath(),s.arc(c,l,14,0,Math.PI*2),s.fill(),s.fillStyle="#f77f00",s.strokeStyle="#ffffff",s.lineWidth=2,s.beginPath(),s.arc(c,l,8,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle="#ffffff",s.font="bold 10px sans-serif",s.fillText("YOU",c,l-14)}ui&&ui.addEventListener("click",s=>{const e=ui.getBoundingClientRect(),t=(s.clientX-e.left)*(ui.width/e.width),n=(s.clientY-e.top)*(ui.height/e.height),i=Li(0);if(Math.abs(t-i)<38&&Math.abs(n-190)<40){Sr({name:"Festival Mandap",x:0,z:0,type:"mandap"}),v.currentObjective="Bring Bappa to the festival mandap and reveal the sacred idol.";const r=document.getElementById("hud-objective-text");r&&(r.textContent=v.currentObjective),Os(),on(),Tt("🚩 Destination: Festival Mandap");return}if(t>=660&&t<=750&&n>=140&&n<=240){Sr({name:"Ganesha Murti Workshop",x:0,z:61.5,type:"shop"}),v.currentObjective="Visit the Ganesh Idol Shop and choose Bappa's Murti.";const r=document.getElementById("hud-objective-text");r&&(r.textContent=v.currentObjective),Os(),on(),Tt("🚩 Destination: Ganesha Murti Workshop");return}for(const r of hi){const o=Li(r.posZ),a=r.side==="left"?100:275;if(Math.abs(t-o)<38&&Math.abs(n-a)<28){Sr({name:r.name,x:r.posX,z:r.posZ,type:"house",houseId:r.id}),Os(),on(),Tt(`🚩 Destination: ${r.name}`);return}}});const Af=document.getElementById("murti-shop-modal"),Wn=document.getElementById("idol-inspect-canvas"),Ch=document.getElementById("shop-chanda-amount"),Ph=document.getElementById("inspect-model-title"),Ih=document.getElementById("summary-idol-name"),Lh=document.getElementById("summary-idol-cost"),Dh=document.getElementById("summary-avail-chanda"),ac=document.getElementById("summary-remain-chanda"),Is=document.getElementById("btn-purchase-murti"),Nh=document.getElementById("btn-cancel-shop"),Uh=document.getElementById("btn-close-shop-x"),Fh=document.getElementById("btn-rotate-left"),Oh=document.getElementById("btn-rotate-right"),Bh=document.getElementById("btn-reset-view"),Rf=document.querySelectorAll(".idol-card");let li,wn,Ui,fi,ss=0,Er=0,Ls=2.6,Uo=!1,cc=0,lc=0,wr=null;function Ty(){if(li)return;li=new Gu,wn=new Yt(45,Wn.clientWidth/Wn.clientHeight,.1,50),wn.position.set(0,.4,2.6),Ui=new nf({canvas:Wn,antialias:!0,alpha:!0}),Ui.setSize(Wn.clientWidth,Wn.clientHeight),Ui.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ui.toneMapping=cl,Ui.toneMappingExposure=1.35;const s=new xg(16772829,1.1);li.add(s);const e=new Us(16773583,2.6);e.position.set(3,4,3),li.add(e);const t=new Us(16219904,1.4);t.position.set(-3,2,1),li.add(t);const n=new Us(16765286,1.8);n.position.set(0,3,-3),li.add(n);const i=new Jt(16753152,1.2,5,1.8);i.position.set(0,-.4,1.2),li.add(i),fi=new Ne,li.add(fi),Wn.addEventListener("pointerdown",r=>{Uo=!0,cc=r.clientX,lc=r.clientY}),window.addEventListener("pointermove",r=>{if(!Uo)return;const o=r.clientX-cc,a=r.clientY-lc;ss+=o*.01,Er=Mn.clamp(Er+a*.01,-.4,.6),cc=r.clientX,lc=r.clientY}),window.addEventListener("pointerup",()=>{Uo=!1}),Wn.addEventListener("wheel",r=>{r.preventDefault(),Ls=Mn.clamp(Ls+r.deltaY*.002,1.4,4.2),wn.position.z=Ls},{passive:!1}),Fh&&Fh.addEventListener("click",()=>{ss-=.4}),Oh&&Oh.addEventListener("click",()=>{ss+=.4}),Bh&&Bh.addEventListener("click",()=>{ss=0,Er=0,Ls=2.6,wn.position.set(0,.4,2.6)})}function Cf(){v.isShopOpen&&(wr=requestAnimationFrame(Cf),Uo||(ss+=.006),fi.rotation.y=ss,fi.rotation.x=Er,wn.position.z=Ls,Ui.render(li,wn))}function Bl(){v.isShopOpen=!0,Af.classList.add("active"),Xe.playTempleBell(1),Ty(),setTimeout(()=>{if(Wn&&Ui&&wn){const s=Wn.clientWidth,e=Wn.clientHeight;Ui.setSize(s,e),wn.aspect=s/e,wn.updateProjectionMatrix()}},50),Pf(v.selectedIdol||"bal"),wr||Cf()}function fa(){v.isShopOpen=!1,Af.classList.remove("active"),wr&&(cancelAnimationFrame(wr),wr=null)}Nh&&Nh.addEventListener("click",fa);Uh&&Uh.addEventListener("click",fa);function Pf(s){const e=gi.find(n=>n.id===s);if(!e)return;for(v.selectedIdol=e.id,v.selectedIdolName=e.name,v.selectedIdolPrice=e.price,v.selectedIdolModel=e.modelUrl,Rf.forEach(n=>{n.getAttribute("data-idol")===s?n.classList.add("selected"):n.classList.remove("selected")});fi.children.length>0;)fi.remove(fi.children[0]);if(ss=0,Er=0,Ls=2.9,wn&&(wn.position.set(0,.35,2.9),wn.lookAt(0,0,0)),ki[e.id]){const n=ki[e.id].clone(!0);n.scale.set(e.previewScale,e.previewScale,e.previewScale),n.position.set(0,e.previewOffsetY,0),n.rotation.y=e.previewRotY||0,fi.add(n)}else new sf().load(e.modelUrl,i=>{applyIdolNodeOffsets(i.scene,e.id),ki[e.id]=i.scene;const r=i.scene.clone(!0);r.scale.set(e.previewScale,e.previewScale,e.previewScale),r.position.set(0,e.previewOffsetY,0),r.rotation.y=e.previewRotY||0,fi.add(r)});Ph&&(Ph.textContent=`${e.name} (₹${e.price})`),Ih&&(Ih.textContent=e.name),Lh&&(Lh.textContent=`₹${e.price}`),Ch&&(Ch.textContent=`₹${v.chanda}`),Dh&&(Dh.textContent=`₹${v.chanda}`);const t=v.chanda-e.price;ac&&(ac.textContent=`₹${t}`,ac.style.color=t>=0?"var(--gold)":"#e63946"),v.chanda<e.price?(Is.disabled=!0,Is.textContent="❌ Not Enough Chanda"):(Is.disabled=!1,Is.textContent=`🙏 Purchase Murti (₹${e.price})`)}Rf.forEach(s=>{s.addEventListener("click",()=>{const e=s.getAttribute("data-idol");Pf(e),Xe.playCoinChime()})});Is&&Is.addEventListener("click",()=>{const s=gi.find(t=>t.id===v.selectedIdol);if(!s)return;if(v.chanda<s.price){Tt("❌ Not enough Chanda funds to purchase this Murti.");return}v.chanda-=s.price,v.selectedIdol=s.id,v.selectedIdolName=s.name,v.selectedIdolPrice=s.price,v.selectedIdolModel=s.modelUrl,v.purchasedIdol=s,v.stage2Completed=!0,v.currentObjective="Take the selected Ganesha Murti to the festival mandap.",di.textContent=`₹${v.chanda}`;const e=document.getElementById("hud-objective-text");e&&(e.textContent=v.currentObjective),Xe.playCelebrationFanfare(),fa(),Tt(`🎉 ${s.name} Purchased! Bappa is ready for the Mandap.`),setTimeout(Ay,600)});const Wo=document.getElementById("stage2-modal"),kh=document.getElementById("stat-selected-murti"),Gh=document.getElementById("stat-stage2-chanda"),zh=document.getElementById("btn-stage2-continue");function Ay(){kh&&(kh.textContent=v.selectedIdolName),Gh&&(Gh.textContent=`₹${v.chanda}`),Wo&&Wo.classList.add("active")}zh&&zh.addEventListener("click",()=>{Wo&&Wo.classList.remove("active"),v.stage=3,v.stage2Completed=!0,v.stage3&&(v.stage3.started=!0,v.stage3.revealed=!1,v.stage3.clothProgress=0),G.group.position.set(1.65,.46,.8),G.rotation=Math.PI*.75,G.group.rotation.y=Math.PI*.75,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1),ut.visible=!0,dt.visible=!0,On(),ds(0),xi=null,Ze.position.set(0,2.2,3.2),Ze.lookAt(0,1.55,-.6),v.destination={name:"Festival Mandap",x:0,z:0,type:"mandap"},v.currentObjective="Unveil Lord Ganesha at the festival mandap.";const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");s&&(s.textContent="Stage 3: Ganesha Arrival"),e&&(e.textContent=v.currentObjective),bt&&(bt.textContent="🪔 Drag the sacred cloth to reveal Bappa ➔"),Bn(),on(),tr(),setTimeout(pa,350),Tt("🙏 Bappa has arrived at the Mandap! Drag the sacred cloth to reveal Bappa.")});const Xo=document.getElementById("stage3-reveal-container"),Ln=document.getElementById("stage3-drag-track"),Hh=document.getElementById("stage3-drag-fill"),Vh=document.getElementById("stage3-drag-handle"),Wh=document.getElementById("stage3-progress-text"),Yo=document.getElementById("stage3-modal"),Xh=document.getElementById("stat-stage3-selected-murti"),Yh=document.getElementById("stat-stage3-chanda"),qh=document.getElementById("btn-stage3-continue"),jh=document.getElementById("stage3-song-pill");document.getElementById("stage3-song-title");let rs=!1,qo=0,jo=0,xi=null,If=0;const br=[];function kr(){if(!Rt||br.length>50)return;const s=[16219904,16765286,14034984,16758531,16741775],e=24;for(let t=0;t<e;t++){const n=s[Math.floor(Math.random()*s.length)],i=new Ft(.12,.18),r=new rt({color:n,side:Nt,transparent:!0,opacity:.95}),o=new I(i,r);o.position.set((Math.random()-.5)*4.2,3.6+Math.random()*2.6,-.6+(Math.random()-.5)*2.8),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),o.castShadow=!1,Rt.add(o),br.push({mesh:o,speedY:.85+Math.random()*.95,rotSpeedX:1.8+Math.random()*2.8,rotSpeedZ:1.4+Math.random()*2.2,driftFreq:2.2+Math.random()*3,driftAmp:.014+Math.random()*.02,seed:Math.random()*10})}}function Ry(s,e){for(let t=br.length-1;t>=0;t--){const n=br[t];n.mesh.position.y-=n.speedY*s,n.mesh.position.x+=Math.sin(e*n.driftFreq+n.seed)*n.driftAmp,n.mesh.position.z+=Math.cos(e*n.driftFreq+n.seed)*(n.driftAmp*.7),n.mesh.rotation.x+=n.rotSpeedX*s,n.mesh.rotation.z+=n.rotSpeedZ*s,n.mesh.position.y<=.48&&(Rt.remove(n.mesh),n.mesh.geometry&&n.mesh.geometry.dispose(),n.mesh.material&&n.mesh.material.dispose(),br.splice(t,1))}}jh&&jh.addEventListener("click",()=>{Xe.isFestivalMusicActive?Xe.nextFestivalSong():Xe.playFestivalMusic()});function pa(){if(v.stage3&&v.stage3.revealed)return;v.stage3&&(v.stage3.isRevealing=!0),Zt.classList.remove("visible"),G&&G.group&&(G.group.position.set(1.45,.46,1.2),G.rotation=Math.PI*.75,G.group.rotation.y=Math.PI*.75,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1)),Bn(),Xo&&Xo.classList.remove("hidden");const s=document.getElementById("hud-objective-text");s&&(s.textContent="Drag the sacred cloth from left to right."),bt&&(bt.textContent="👉 DRAG THE SACRED CLOTH → TO REVEAL BAPPA"),Tt("🪔 Drag the sacred cloth across to reveal Lord Ganesha!")}function ds(s){if(s=Math.max(0,Math.min(1,s)),v.stage3&&(v.stage3.clothProgress=s),Hh&&(Hh.style.width=`${s*100}%`),Vh&&Ln){const e=Ln.clientWidth||360,t=Math.max(20,e-48);Vh.style.left=`${s*t+3}px`}Wh&&(Wh.textContent=`REVEAL: ${Math.round(s*100)}%`),dt&&(dt.position.x=s*2.6,dt.position.z=-.2+s*.52,dt.rotation.y=-s*.45,dt.rotation.z=s*.16,yr&&(yr.opacity=s>.65?Math.max(0,1-(s-.65)/.35):1)),an&&(an.intensity=1.4+s*2.4),s>=.88&&v.stage3&&!v.stage3.revealed&&Cy()}if(Ln){Ln.addEventListener("pointerdown",e=>{rs=!0,qo=e.clientX,jo=v.stage3&&v.stage3.clothProgress||0;try{Ln.setPointerCapture(e.pointerId)}catch{}const t=Ln.getBoundingClientRect(),n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width));n>.12&&ds(n)}),Ln.addEventListener("pointermove",e=>{if(!rs)return;const t=Ln.clientWidth||360,n=e.clientX-qo,i=Math.max(20,t-48),r=jo+n/i;ds(r)});const s=e=>{if(rs){rs=!1;try{Ln.releasePointerCapture(e.pointerId)}catch{}}};Ln.addEventListener("pointerup",s),Ln.addEventListener("pointercancel",s)}window.addEventListener("pointerdown",s=>{if(v.stage===3&&v.stage3&&v.stage3.isRevealing&&!v.stage3.revealed){if(s.target.closest("#stage3-drag-track"))return;rs=!0,qo=s.clientX,jo=v.stage3.clothProgress||0}});window.addEventListener("pointermove",s=>{if(rs&&v.stage===3&&v.stage3&&v.stage3.isRevealing&&!v.stage3.revealed){const e=Math.max(100,window.innerWidth*.35),t=s.clientX-qo,n=jo+t/e;ds(n)}});window.addEventListener("pointerup",()=>{rs=!1});function Cy(){if(!v.stage3||v.stage3.revealed)return;v.stage3.revealed=!0,v.stage3.completed=!0,v.stage3.isRevealing=!1,ds(1),setTimeout(()=>{Xo&&Xo.classList.add("hidden"),dt&&(dt.visible=!1),ut&&(ut.visible=!0)},400),an&&(an.intensity=3.8),Xe.clearFanfareTimers(),Xe.playFestivalMusic(0),kr(),gf.forEach(e=>{e.isNamaste=!0,e.namasteFactor=1,e.swayCelebration=!0}),xi="mandap_reveal",If=performance.now();const s=document.getElementById("hud-objective-text");s&&(s.textContent="BAPPA HAS ARRIVED 🙏"),bt&&(bt.textContent="🙏 BAPPA HAS ARRIVED at the festival mandap!"),Tt("🙏 JAI GANESHA! Bappa has been ceremonially unveiled!"),setTimeout(Py,2800)}function Py(){Xh&&(Xh.textContent=v.selectedIdolName||"Shri Bal Ganesha"),Yh&&(Yh.textContent=`₹${v.chanda}`),Yo&&Yo.classList.add("active")}qh&&qh.addEventListener("click",()=>{Yo&&Yo.classList.remove("active"),Lf()});let os=null;const Ko=document.getElementById("stage4-prep-container"),Kh=document.getElementById("prep-count"),$o=document.getElementById("stage4-modal"),$h=document.getElementById("stat-stage4-score"),Zh=document.getElementById("btn-stage4-continue");function Tr(){os||(os=new Ne,gt.add(os))}function Lf(){v.stage=4,v.stage4.started=!0,v.destination={name:"Pandal Preparation",x:0,z:0,type:"pandal"},v.currentObjective="Decorate the festival pandal with all 8 sacred items for Lord Ganesha.";const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");s&&(s.textContent="Stage 4: Pandal Preparation"),e&&(e.textContent=v.currentObjective),bt&&(bt.textContent="🌸 Select decoration items from the tray or press E at the Mandap ➔"),Tr(),Ko&&Ko.classList.remove("hidden"),G&&G.group&&(G.group.position.set(1.45,.46,1.4),G.rotation=Math.PI*.75,G.group.rotation.y=Math.PI*.75,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1)),Bn(),xi=null,Ze.position.set(0,2.6,5.2),Ze.lookAt(0,1.6,-.6),Tt("🌸 Stage 4: Decorate Bappa's Mandap with traditional festival items!"),tr()}function Df(s){if(!v.stage4||v.stage4.items[s])return;Tr(),v.stage4.items[s]=!0,v.stage4.placedCount++,v.score+=50,js&&(js.textContent=v.score);const e=Fo(s);e&&os.add(e);const t=document.querySelector(`.prep-item-card[data-item="${s}"]`);if(t){t.classList.add("placed");const n=document.getElementById(`prep-status-${s}`);n&&(n.textContent="PLACED ✅")}Kh&&(Kh.textContent=`${v.stage4.placedCount} / 8 PLACED`),Xe.playCoinChime(),Xe.playTempleBell(1.1+v.stage4.placedCount*.05),Nf(new C(0,1.2,0)),Tt(`✨ ${Iy(s)} placed with devotion!`),v.stage4.placedCount>=8&&!v.stage4.completed&&Ly()}function Iy(s){return{toran:"Mango Leaf Toran",garlands:"Marigold Malas",samaiLamps:"Brass Samai Lamps",cushions:"Royal Velvet Cushions",fruits:"Fresh Fruits Basket",kalash:"Sacred Kalash",modaks:"Steamed Modaks Thali",incense:"Incense Agarbatti"}[s]||s}function Fo(s){const e=new Ne;if(s==="toran")new Al([new C(-3.8,3.4,3.8),new C(-1.9,3.1,3.8),new C(0,3.3,3.8),new C(1.9,3.1,3.8),new C(3.8,3.4,3.8)]).getPoints(36).forEach((i,r)=>{if(r%2===0){const o=new bl(.08),a=new xe({color:r%4===0?16758531:16219904,roughness:.6}),c=new I(o,a);c.position.copy(i),e.add(c)}else{const o=new ft(.05,.18,4),a=new xe({color:2976335,roughness:.5}),c=new I(o,a);c.position.set(i.x,i.y-.08,i.z),c.rotation.x=Math.PI,e.add(c)}});else if(s==="garlands")[[-3.6,-3.2],[3.6,-3.2],[-3.6,3.2],[3.6,3.2]].forEach(([n,i])=>{for(let r=0;r<4;r++){const o=new Ht(.24,.06,8,16),a=new xe({color:r%2===0?16219904:16758531,roughness:.65}),c=new I(o,a);c.rotation.x=Math.PI/2,c.position.set(n,1+r*.65,i),e.add(c)}});else if(s==="samaiLamps")[-2.2,2.2].forEach(t=>{const n=new Te(.22,.28,.12,16),i=new Te(.04,.04,1.4,12),r=new Te(.32,.18,.14,16),o=new I(n,me.brassGold);o.position.set(t,.52,.7);const a=new I(i,me.brassGold);a.position.set(t,1.22,.7);const c=new I(r,me.brassGold);c.position.set(t,1.92,.7);const l=new ft(.06,.14,6),d=new rt({color:16769154}),h=new I(l,d);h.position.set(t,2.05,.7);const u=new Jt(16758531,1.2,4.5);u.position.set(t,2.1,.7),e.add(o,a,c,h,u)});else if(s==="cushions")[-1.3,1.3].forEach(t=>{const n=new ze(.65,.16,.65),i=new xe({color:8392211,roughness:.85}),r=new I(n,i);r.position.set(t,.54,1.2);const o=new ze(.67,.04,.67),a=new I(o,me.brassGold);a.position.set(t,.54,1.2),e.add(r,a)});else if(s==="fruits"){const t=new Te(.36,.28,.05,20),n=new I(t,me.brassGold);n.position.set(-.65,.98,-.35);for(let i=0;i<3;i++){const r=new it(.06,8,8),o=new xe({color:14034984,roughness:.4}),a=new I(r,o);a.position.set(-.65+(i-1)*.1,1.05,-.35+i%2*.08),e.add(a)}for(let i=0;i<4;i++){const r=new Te(.025,.025,.18,6),o=new xe({color:16765286,roughness:.5}),a=new I(r,o);a.position.set(-.65+(i-1.5)*.08,1.03,-.42),a.rotation.z=Math.PI/3,e.add(a)}e.add(n)}else if(s==="kalash"){const t=new it(.18,16,16),n=new I(t,me.brassGold);n.position.set(.65,1.08,-.35);const i=new Te(.12,.14,.1,14),r=new I(i,me.brassGold);r.position.set(.65,1.23,-.35);const o=new it(.12,12,12);o.scale(1,1.25,1);const a=new xe({color:5779214,roughness:.85}),c=new I(o,a);c.position.set(.65,1.34,-.35);for(let l=0;l<5;l++){const d=l*Math.PI*2/5,h=new ft(.04,.16,4),u=new xe({color:2976335,roughness:.5}),f=new I(h,u);f.position.set(.65+Math.cos(d)*.11,1.28,-.35+Math.sin(d)*.11),f.rotation.x=Math.sin(d)*.4,f.rotation.z=-Math.cos(d)*.4,e.add(f)}e.add(n,r,c)}else if(s==="modaks"){const t=new Te(.38,.32,.04,24),n=new I(t,me.brassGold);n.position.set(0,.98,-.26);const i=new ft(.045,.08,10),r=new xe({color:16445642,roughness:.55}),o=new I(i,r);o.position.set(0,1.05,-.26),e.add(o);for(let a=0;a<8;a++){const c=a*Math.PI*2/8,l=new I(i,r);l.position.set(Math.cos(c)*.18,1.03,-.26+Math.sin(c)*.18),e.add(l)}e.add(n)}else if(s==="incense"){const t=new Te(.08,.1,.06,12),n=new I(t,me.brassGold);n.position.set(.35,.99,-.2);for(let i=0;i<3;i++){const r=new Te(.008,.008,.32,6),o=new xe({color:4004368}),a=new I(r,o);a.position.set(.35+(i-1)*.03,1.15,-.2),a.rotation.z=(i-1)*.15;const c=new it(.012,4,4),l=new rt({color:16726832}),d=new I(c,l);d.position.set(.35+(i-1)*.05,1.31,-.2),e.add(a,d)}e.add(n)}return e}function Nf(s){const e=[16765286,16219904,3065014,16741775];for(let t=0;t<24;t++){const n=new it(.04,4,4),i=new rt({color:e[t%e.length]}),r=new I(n,i);r.position.set(s.x+(Math.random()-.5)*1.5,s.y+Math.random()*.8,s.z+(Math.random()-.5)*1.5),Rt.add(r),setTimeout(()=>Rt.remove(r),1200)}}document.querySelectorAll(".prep-item-card").forEach(s=>{s.addEventListener("click",()=>{const e=s.getAttribute("data-item");e&&Df(e)})});function Ly(){v.stage4.completed=!0,Xe.playCelebrationFanfare(),setTimeout(()=>{Ko&&Ko.classList.add("hidden"),$h&&($h.textContent=v.score),$o&&$o.classList.add("active")},700)}Zh&&Zh.addEventListener("click",()=>{$o&&$o.classList.remove("active"),Ff()});const Zo=document.getElementById("stage5-puja-container"),Jh=document.getElementById("puja-count"),Ar=document.getElementById("btn-offer-current"),Jo=document.getElementById("stage5-modal"),Qh=document.getElementById("stat-stage5-score"),eu=document.getElementById("btn-stage5-continue"),Uf=["1. Light Sacred Diya 🪔","2. Offer Sacred Durva Grass 🌿","3. Offer Marigold Floral Mala 🌼","4. Offer Fresh Seasonal Fruits 🍎","5. Consecrate Holy Coconut 🥥","6. Offer Sweet Prasad Modaks 🍬","7. Wave Aromatic Incense 🕯️"];function Ff(){v.stage=5,v.stage5.started=!0,v.stage5.currentStep=0,v.destination={name:"Ganesh Puja",x:0,z:0,type:"puja"},v.currentObjective="Perform the sacred 7-step Puja offerings for Lord Ganesha.";const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");s&&(s.textContent="Stage 5: Ganesh Puja"),e&&(e.textContent=v.currentObjective),bt&&(bt.textContent="🪔 Perform sacred offerings before Bappa (Click button or Press E) ➔"),G&&G.group&&(G.group.position.set(1.45,.46,1.2),G.rotation=Math.PI*.75,G.group.rotation.y=Math.PI*.75,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1)),Bn(),Zo&&Zo.classList.remove("hidden"),Of(),Tt("🪔 Stage 5: Begin Lord Vighnaharta's auspicious Puja!"),tr()}function Of(){const s=v.stage5.currentStep;for(let e=0;e<7;e++){const t=document.getElementById(`puja-step-${e}`);t&&(t.classList.remove("active","completed"),e<s?t.classList.add("completed"):e===s&&t.classList.add("active"))}Jh&&(Jh.textContent=`${s} / 7 OFFERED`),Ar&&(s<7?Ar.textContent=`🙏 ${Uf[s]} (Press E)`:Ar.textContent="✨ Puja Complete 🙏")}function Bf(){if(v.stage!==5||!v.stage5||v.stage5.completed)return;const s=v.stage5.currentStep;s>=7||(Xe.playTempleBell(1+s*.12),Xe.playCoinChime(),kr(),Nf(new C(0,1.4,-.6)),v.score+=75,js&&(js.textContent=v.score),v.stage5.currentStep++,Of(),Tt(`🙏 Offered: ${Uf[s]}`),v.stage5.currentStep>=7&&Dy())}Ar&&Ar.addEventListener("click",Bf);function Dy(){v.stage5.completed=!0,Xe.playCelebrationFanfare(),setTimeout(()=>{Zo&&Zo.classList.add("hidden"),Qh&&(Qh.textContent=v.score),Jo&&Jo.classList.add("active")},900)}eu&&eu.addEventListener("click",()=>{Jo&&Jo.classList.remove("active"),Gf()});let It=null,Oo=!1,Rr=null;const Qo=document.getElementById("stage6-aarti-container"),ea=document.getElementById("aarti-round-text"),Nn=document.getElementById("aarti-drag-zone"),Bs=document.getElementById("aarti-pointer"),ta=document.getElementById("stage6-modal"),tu=document.getElementById("stat-stage6-score"),nu=document.getElementById("btn-stage6-continue");function kf(){if(It)return;It=new Ne;const s=new Te(.42,.36,.04,24),e=new I(s,me.brassGold);It.add(e);for(let o=0;o<5;o++){const a=o*Math.PI*2/5,c=new Te(.06,.04,.06,12),l=new I(c,me.brassGold);l.position.set(Math.cos(a)*.26,.04,Math.sin(a)*.26);const d=new ft(.045,.12,6),h=new rt({color:16769154}),u=new I(d,h);u.position.set(Math.cos(a)*.26,.13,Math.sin(a)*.26),It.add(l,u)}const t=new ft(.06,.16,8),n=new rt({color:16765286}),i=new I(t,n);i.position.set(0,.11,0),It.add(i);const r=new Jt(16760331,2.2,5);r.position.set(0,.25,0),It.add(r),It.position.set(0,1.35,.2),gt.add(It)}let xn=null;function Ny(){!xn&&gt&&(xn=new $u(16774584,4.6,14,Math.PI/3.2,.35,1),xn.position.set(0,3.8,1.3),xn.castShadow=!0,ut&&(xn.target=ut),gt.add(xn),xn.target&&!xn.target.parent&&gt.add(xn.target)),xn&&(xn.visible=!0,xn.intensity=4.8),an&&(an.visible=!0,an.intensity=3.6,an.color.setHex(16771717),an.position.set(0,2.3,.3))}function Gf(){v.stage=6,v.stage6.started=!0,v.stage6.isAartiActive=!0,v.stage6.currentRound=0,v.stage6.totalAngleRotated=0,v.stage6.lastPointerAngle=null,v.destination={name:"Aarti Ceremony",x:0,z:0,type:"aarti"},v.currentObjective="Wave the sacred Aarti Thali clockwise around Lord Ganesha.";const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");if(s&&(s.textContent="Stage 6: Aarti Ceremony"),e&&(e.textContent=v.currentObjective),bt&&(bt.textContent="🪔 Drag Aarti Thali in clockwise circles around Bappa ➔"),!v.purchasedIdol){const t=v.selectedIdol||"bal";v.purchasedIdol=gi.find(n=>n.id===t)||gi[0]}if(On(),dt&&(dt.visible=!1),ut&&(ut.visible=!0),kf(),It&&(It.visible=!0),mn.forEach(t=>{t.group&&(t.group.visible=!1)}),Qo&&Qo.classList.remove("hidden"),Bs&&Nn){const t=Nn.getBoundingClientRect(),n=(t.width||340)*.48;Bs.style.left=`${(t.width||340)/2}px`,Bs.style.top=`${(t.height||340)/2-n}px`}G&&G.group&&(G.group.position.set(1.45,.46,1.2),G.rotation=Math.PI*.75,G.group.rotation.y=Math.PI*.75,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1)),Bn(),Ny(),xi=null,Ze.position.set(0,2.05,2.35),Ze.lookAt(0,1.95,-.6),Xe.clearFanfareTimers(),Xe.playBellSound(1),Xe.playAarathi(),Tt("🪔 Stage 6: Begin the holy Aarti! Rotate clockwise around Bappa."),tr()}function ol(s,e){if(!Nn)return;const t=Nn.getBoundingClientRect(),n=t.left+t.width/2,i=t.top+t.height/2,r=Math.atan2(e-i,s-n);if(Rr!==null){let o=r-Rr;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;if(o>0){if(v.stage6.totalAngleRotated+=o,Math.floor(v.stage6.totalAngleRotated/Math.PI)>Math.floor((v.stage6.totalAngleRotated-o)/Math.PI)&&(Xe.playTempleBell(1.25),mn.length>0)){const l=Math.floor(Math.random()*mn.length),d=mn[l];d&&(d.swingVelocity=(Math.random()>.5?1:-1)*2.2)}if(It){const h=v.stage6.totalAngleRotated;It.position.x=Math.sin(h)*.95,It.position.z=-.6+Math.cos(h)*.75,It.position.y=1.35+Math.sin(h*2)*.08,It.rotation.y=h,It.rotation.z=Math.sin(h)*.12}const a=v.stage6.totalAngleRotated%(Math.PI*2)/(Math.PI*2),c=Math.min(2,Math.floor(v.stage6.totalAngleRotated/(Math.PI*2)));if(v.stage6.currentRound=c,ea){const l=Math.round(a*100);ea.textContent=`AARTI ROUND: ${c+1} / 3 (${l}%)`}if(Bs){const l=t.width*.48;Bs.style.left=`${t.width/2+Math.cos(r)*l}px`,Bs.style.top=`${t.height/2+Math.sin(r)*l}px`}v.stage6.totalAngleRotated>=Math.PI*6&&!v.stage6.completed&&zf()}}Rr=r}if(Nn){Nn.addEventListener("pointerdown",e=>{Oo=!0,Rr=null,ol(e.clientX,e.clientY);try{Nn.setPointerCapture(e.pointerId)}catch{}}),Nn.addEventListener("pointermove",e=>{Oo&&ol(e.clientX,e.clientY)});const s=e=>{Oo=!1,Rr=null;try{Nn.releasePointerCapture(e.pointerId)}catch{}};Nn.addEventListener("pointerup",s),Nn.addEventListener("pointercancel",s)}window.addEventListener("pointermove",s=>{v.stage===6&&v.stage6&&v.stage6.isAartiActive&&Oo&&ol(s.clientX,s.clientY)});function zf(){v.stage6.completed=!0,v.stage6.isAartiActive=!1,It&&(It.visible=!1),mn.forEach(s=>{s.group&&(s.group.visible=!0)}),Xe.clearFanfareTimers(),Xe.stopAarathi(!1),kr(),an&&(an.intensity=4.2),Tt("✨ AARTI COMPLETE 🙏 All 3 rounds offered with pure love!"),setTimeout(()=>{Qo&&Qo.classList.add("hidden"),tu&&(tu.textContent=v.score+250),ta&&ta.classList.add("active")},1200)}nu&&nu.addEventListener("click",()=>{ta&&ta.classList.remove("active"),Hf()});let fr=null,ks=null;const Jn=document.getElementById("stage7-modal"),iu=document.getElementById("stat-stage7-chanda"),su=document.getElementById("stat-stage7-murti"),ru=document.getElementById("stat-stage7-score"),ou=document.getElementById("btn-play-again"),au=document.getElementById("btn-view-map-final");function Hf(){v.stage=7,v.stage7.started=!0,v.stage7.completed=!0,v.destination={name:"Grand Celebration",x:0,z:0,type:"celebration"},v.currentObjective="Celebrate Ganesh Chaturthi with all 8 invited neighborhood families!";const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");s&&(s.textContent="Stage 7: Grand Celebration"),e&&(e.textContent=v.currentObjective),bt&&(bt.textContent="🎊 ALL 8 FAMILIES REUNITED! Happy Ganesh Chaturthi 🙏"),Uy(),G&&G.group&&(G.group.position.set(1.4,.46,2),G.rotation=Math.PI*.8,G.group.rotation.y=Math.PI*.8,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1,G.anim.swayCelebration=!0)),Bn(),Zt&&Zt.classList.remove("active");const t=document.getElementById("controls-hint");t&&(t.innerHTML='<span>✨ Celebrating with Bappa & Families | Press <span class="key-badge">C</span> to Toggle Summary</span>'),xi="celebration_orbit",Xe.clearFanfareTimers(),Xe.stopAarathi(!1),Xe.playFestivalMusic(0),Xe.updateHudSongInfo("Ekadantaya Vakratundaya — Shankar Mahadevan",!0),kr(),ks&&clearInterval(ks),ks=setInterval(kr,3200),Tt("🎶 Pandal Celebration: Ekadantaya Vakratundaya — Shankar Mahadevan"),setTimeout(()=>{iu&&(iu.textContent=`₹${v.chanda}`),su&&(su.textContent=v.selectedIdolName||"Shri Bal Ganesha"),ru&&(ru.textContent=`${v.score+500}`);const n=document.getElementById("stat-stage7-song");n&&(n.textContent="Ekadantaya Vakratundaya (Ganeshay Dheemahi) — Shankar Mahadevan"),Jn&&Jn.classList.add("active")},3200),tr()}function Uy(){fr&&Rt.remove(fr),fr=new Ne,hi.forEach((s,e)=>{const t=e/8*Math.PI-Math.PI/2,n=5.2+e%2*.8,i=Math.sin(t)*n,r=1.6+Math.cos(t)*n;s.members.forEach((o,a)=>{const c=Xr(o,!1);c.mesh.position.set(i+(a-1)*.52,0,r+a%2*.35),c.mesh.lookAt(0,1.2,-.6),c.anim.isNamaste=!0,c.anim.namasteFactor=1,c.anim.swayCelebration=!0,fr.add(c.mesh)})}),Rt.add(fr)}function ma(){ks&&(clearInterval(ks),ks=null),Xe&&Xe.stopAllAudio();try{localStorage.removeItem("ganeshverse_save"),sessionStorage.clear()}catch{}const s=document.getElementById("welcome-screen"),e=document.getElementById("hud"),t=document.getElementById("stage7-modal"),n=document.getElementById("rules-modal"),i=document.getElementById("interaction-prompt");t&&t.classList.remove("active"),n&&n.classList.remove("active"),i&&i.classList.remove("active"),e&&e.classList.add("hidden"),s&&s.classList.remove("hidden"),document.querySelectorAll(".active").forEach(r=>r.classList.remove("active")),Tt("🔄 Returning to Starting Home Page..."),setTimeout(()=>{window.location.reload()},120)}const cu=document.getElementById("btn-exit-reset-final");cu&&cu.addEventListener("click",()=>{ma()});ou&&ou.addEventListener("click",()=>{ma()});au&&au.addEventListener("click",()=>{Jn&&Jn.classList.remove("active"),Br(!0)});const lu=document.getElementById("btn-see-celebration-scene"),Ks=document.getElementById("btn-floating-summary"),na=document.getElementById("btn-show-summary");function Vf(){Jn&&Jn.classList.remove("active"),Zt&&Zt.classList.remove("active"),Ks&&(Ks.style.display="block"),na&&(na.style.display="inline-flex"),Tt("🙏 Viewing Grand Celebration with Lord Ganesha & Devotee Families!")}function kl(){Jn&&Jn.classList.add("active"),Ks&&(Ks.style.display="none")}lu&&lu.addEventListener("click",Vf);Ks&&Ks.addEventListener("click",kl);na&&na.addEventListener("click",kl);function tr(){try{const s={stage:v.stage,chanda:v.chanda,score:v.score,familiesVisited:v.familiesVisited,invitedFamilies:v.invitedFamilies,selectedIdol:v.selectedIdol,selectedIdolName:v.selectedIdolName,purchasedIdol:v.purchasedIdol,stage2Completed:v.stage2Completed,stage3:v.stage3,stage4:v.stage4,stage5:v.stage5,stage6:v.stage6,stage7:v.stage7};localStorage.setItem("ganeshverse_save",JSON.stringify(s))}catch(s){console.log("Save error:",s)}}function Wf(s){const e=document.getElementById(s);if(!e)return;const t=e.querySelectorAll(".guide-tab-btn");t.forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const r=n.getAttribute("data-tab-target");if(!r)return;t.forEach(a=>a.classList.remove("active")),n.classList.add("active");const o=e.closest(".welcome-card, .rules-modal-card");if(o){o.querySelectorAll(".guide-pane").forEach(l=>l.classList.remove("active"));const c=document.getElementById(r);c&&c.classList.add("active")}})})}Wf("welcome-tabs-bar");Wf("modal-tabs-bar");const _i=document.getElementById("rules-modal"),du=document.getElementById("btn-rules-toggle"),hu=document.getElementById("btn-close-rules-modal"),uu=document.getElementById("btn-resume-festival");function fu(){return _i&&_i.classList.contains("active")}function as(s){if(!_i)return;(s!==void 0?s:!_i.classList.contains("active"))?(_i.classList.add("active"),Xe&&Xe.playTempleBell(.6)):_i.classList.remove("active")}du&&du.addEventListener("click",()=>as(!0));hu&&hu.addEventListener("click",()=>as(!1));uu&&uu.addEventListener("click",()=>as(!1));_i&&_i.addEventListener("click",s=>{s.target===_i&&as(!1)});const pu=document.getElementById("btn-exit-game");pu&&pu.addEventListener("click",()=>{(v.stage===7||confirm("Are you sure you want to exit and reset the festival back to the beginning?"))&&ma()});const mu=document.getElementById("btn-modal-exit-reset");mu&&mu.addEventListener("click",()=>{confirm("Are you sure you want to exit and reset the festival back to the beginning?")&&ma()});const Qi=document.getElementById("welcome-screen"),Fy=document.getElementById("btn-enter-festival"),es=document.getElementById("hud"),Oy=document.getElementById("btn-audio-toggle"),By=document.getElementById("audio-icon"),ky=document.getElementById("audio-label");Fy.addEventListener("click",()=>{Xe.init(),Xe.playTempleBell(1),Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=1,G.group.position.set(0,0,-58),G.rotation=0,G.group.rotation.y=0,ut&&(ut.visible=!1),dt&&(dt.visible=!1),On(),di.textContent=`₹${v.chanda}`,js.textContent=`${v.score}`,rn&&(rn.textContent=`${v.familiesVisited} / 8`),fn&&(fn.textContent=`${v.invitedFamilies.length} / 8`);const s=document.getElementById("hud-stage-name"),e=document.getElementById("hud-objective-text");s&&(s.textContent="Stage 1: Chanda Yatra"),e&&(e.textContent="Visit all 8 devotee families along the street, collect Chanda & invite them for Bappa's festival."),Ol(),on(),Tt("🙏 Welcome to Ganeshverse! Walk the street and invite all 8 families.")});Oy.addEventListener("click",()=>{const s=Xe.toggleMute();By.textContent=s?"🔊":"🔇",ky.textContent=s?"Sound On":"Sound Muted"});const To=new Lg,Cs=new De;window.addEventListener("pointerdown",s=>{if(v.isDialogueOpen||v.isShopOpen||v.isMapOpen||s.target.closest("#hud")||s.target.closest("#top-right-bar")||s.target.closest("#dialogue-modal")||s.target.closest("#stage1-modal")||s.target.closest("#stage2-modal")||s.target.closest("#stage3-modal")||s.target.closest("#stage3-reveal-container")||s.target.closest("#stage3-song-pill"))return;if(v.stage===3&&v.stage3&&!v.stage3.revealed&&G.group.position.distanceTo(Fl)<7.5){pa();return}if(v.stage>=3&&mn.length>0){Cs.x=s.clientX/window.innerWidth*2-1,Cs.y=-(s.clientY/window.innerHeight)*2+1,To.setFromCamera(Cs,Ze);const t=mn.map(i=>i.group),n=To.intersectObjects(t,!0);if(n.length>0){for(let i=0;i<mn.length;i++)if(n[0].object.isDescendantOf(mn[i].group)){uy(i);return}}}if(v.stage!==1)return;Cs.x=s.clientX/window.innerWidth*2-1,Cs.y=-(s.clientY/window.innerHeight)*2+1,To.setFromCamera(Cs,Ze);const e=To.intersectObjects(_f,!0);if(e.length>0){for(const t of ha)if(e[0].object.isDescendantOf(t.group)){G.group.position.distanceTo(t.worldPos)<8.5&&!t.isVisited?yf(t):t.isVisited||Tt(`🚶 Walk closer to ${t.data.name} to talk.`);break}}});const Gy=new C(0,3.8,-6.8),sn=new C;function zy(s){if(v.stage===0){const i=performance.now()*15e-5;Ze.position.x=Math.sin(i)*12,Ze.position.z=-56+Math.cos(i)*8,Ze.position.y=4.6+Math.sin(i*2)*.5,Ze.lookAt(0,1.6,-45);return}if(xi==="celebration_orbit"||v.stage===7){const i=performance.now()*35e-5,r=7.6;Ze.position.x=Math.sin(i)*r,Ze.position.z=2+Math.cos(i)*r,Ze.position.y=3.4+Math.sin(i*1.5)*.4,Ze.lookAt(0,1.45,-.6);return}if(v.stage===6){const i=new C(0,2.05,2.35);Ze.position.lerp(i,.085);const r=new C(0,1.95,-.6);sn.lerp(r,.085),Ze.lookAt(sn);return}if(v.stage===5){const i=new C(0,2.2,3.4);Ze.position.lerp(i,.085);const r=new C(0,1.5,-.6);sn.lerp(r,.085),Ze.lookAt(sn);return}if(xi==="mandap_reveal")if((performance.now()-If)/1e3<4.5){const r=new C(0,2.15,3.2);Ze.position.lerp(r,.085);const o=new C(0,1.55,-.6);sn.lerp(o,.085),Ze.lookAt(sn);return}else xi=null;if(v.stage3&&v.stage3.isRevealing&&!v.stage3.revealed){const i=new C(0,2.15,3.2);Ze.position.lerp(i,.09);const r=new C(0,1.55,-.6);sn.lerp(r,.09),Ze.lookAt(sn);return}const e=G.group.position.distanceTo(Fl);if((v.stage===3||v.stage===4)&&e<8.2&&G.group.position.z>-1.2){const i=new C(G.group.position.x*.45,2.3,Math.max(G.group.position.z+2.4,3.8));Ze.position.lerp(i,.085);const r=new C(0,1.55,-.6);sn.lerp(r,.085),Ze.lookAt(sn);return}if(G.group.position.distanceTo(mf)<11.5&&G.group.position.z>48){const i=new C(G.group.position.x*.35,3.6,G.group.position.z-6.4);Ze.position.lerp(i,.085);const r=new C(0,2.1,62.5);sn.lerp(r,.085),Ze.lookAt(sn);return}const n=G.group.position.clone().add(Gy);Ze.position.lerp(n,.085),sn.copy(G.group.position).add(new C(0,1.5,1.2)),Ze.lookAt(sn)}const gu=new Sg;function Xf(){requestAnimationFrame(Xf);const s=Math.min(gu.getDelta(),.1),e=gu.getElapsedTime();Vo.forEach(i=>{const r=Math.sin(e*8.5+i.offset)*.14+Math.cos(e*15+i.offset)*.08;i.light.intensity=i.baseIntensity+r,i.flame.scale.set(1+r*.25,1+r*.45,1+r*.25)}),pf.forEach(i=>{const r=Math.sin(e*2+i.offset)*.08;i.group.rotation.z=r,i.frills.rotation.z=r*1.5});const t=sl.geometry.attributes.position.array;for(let i=0;i<ca;i++)t[i*3+1]+=hf[i]*s,t[i*3+1]>9&&(t[i*3+1]=.4);if(sl.geometry.attributes.position.needsUpdate=!0,Ry(s,e),mn.forEach((i,r)=>{if(!i.pivot)return;const o=3.2;i.swingVelocity+=(-22*i.swingAngle-o*i.swingVelocity)*s,i.swingAngle+=i.swingVelocity*s;const a=Math.sin(e*1.8+r*1.4)*.025;i.pivot.rotation.z=i.swingAngle+a,i.clapper&&(i.clapper.rotation.z=-(i.swingAngle*1.35+a*.5))}),ff.forEach(i=>{i.torso.position.y=.95+Math.sin(e*2.2+i.idleOffset)*.012,i.head.position.y=1.48+Math.sin(e*2.2+i.idleOffset)*.015;const r=i.isNamaste?1:0;i.namasteFactor=Mn.lerp(i.namasteFactor,r,s*5.5),i.namasteFactor>.01?(i.leftArm.rotation.x=-Math.PI/3.2*i.namasteFactor,i.leftArm.rotation.y=Math.PI/4.5*i.namasteFactor,i.leftArm.rotation.z=Math.PI/5.5*i.namasteFactor,i.leftForearm.rotation.x=-Math.PI/2.8*i.namasteFactor,i.leftForearm.rotation.y=Math.PI/3*i.namasteFactor,i.rightArm.rotation.x=-Math.PI/3.2*i.namasteFactor,i.rightArm.rotation.y=-Math.PI/4.5*i.namasteFactor,i.rightArm.rotation.z=-Math.PI/5.5*i.namasteFactor,i.rightForearm.rotation.x=-Math.PI/2.8*i.namasteFactor,i.rightForearm.rotation.y=-Math.PI/3*i.namasteFactor,i.head.rotation.x=Math.PI/14*i.namasteFactor):(i.leftArm.rotation.set(0,0,0),i.rightArm.rotation.set(0,0,0),i.leftForearm.rotation.set(0,0,0),i.rightForearm.rotation.set(0,0,0),i.head.rotation.x=0),i.swayCelebration&&(i.torso.rotation.z=Math.sin(e*3.2+i.idleOffset)*.04,i.head.rotation.x=Math.PI/10+Math.sin(e*2.5)*.03)}),xy(s),v.destination&&(v.stage===1||v.stage===2||v.stage===3||v.stage===4)){Ni.visible=!0;const i=new C(0,0,1.2).applyAxisAngle(new C(0,1,0),G.rotation);Ni.position.copy(G.group.position).add(i),Ni.position.y=.12+Math.sin(e*4.5)*.04;const r=new C(v.destination.x,.12,v.destination.z);Ni.lookAt(r)}else Ni.visible=!1;if(In.forEach((i,r)=>{const o=i.baseRotY!==void 0?i.baseRotY:0;i.mesh.rotation.y=o+Math.sin(e*.75+r)*.08}),v.stage>=1&&v.stage<=7&&!v.isDialogueOpen&&!v.isMapOpen&&!v.isShopOpen&&(!v.stage3||!v.stage3.isRevealing)&&(!v.stage6||!v.stage6.isAartiActive)){const i=new C(0,0,-1).applyQuaternion(Ze.quaternion);i.y=0,i.normalize();const r=new C(1,0,0).applyQuaternion(Ze.quaternion);r.y=0,r.normalize();const o=new C;if(En.forward&&o.add(i),En.backward&&o.sub(i),En.right&&o.add(r),En.left&&o.sub(r),o.lengthSq()>0){o.normalize(),G.isMoving=!0,G.anim&&(G.anim.isNamaste=!1);const a=G.group.position.clone().addScaledVector(o,G.speed*s);_y(a)||G.group.position.copy(a),G.targetRotation=Math.atan2(o.x,o.z);let c=G.targetRotation-G.rotation;for(;c<-Math.PI;)c+=Math.PI*2;for(;c>Math.PI;)c-=Math.PI*2;G.rotation+=c*s*12,G.group.rotation.y=G.rotation,G.walkCycle+=s*9.5,G.anim.leftLeg.rotation.x=Math.sin(G.walkCycle)*.55,G.anim.rightLeg.rotation.x=-Math.sin(G.walkCycle)*.55,G.anim.leftArm.rotation.x=-Math.sin(G.walkCycle)*.45,G.anim.rightArm.rotation.x=Math.sin(G.walkCycle)*.45,G.anim.torso.position.y=.95+Math.abs(Math.sin(G.walkCycle*2))*.035}else G.isMoving=!1,G.anim.leftLeg.rotation.x=Mn.lerp(G.anim.leftLeg.rotation.x,0,s*10),G.anim.rightLeg.rotation.x=Mn.lerp(G.anim.rightLeg.rotation.x,0,s*10),G.anim&&G.anim.isNamaste?(G.anim.leftArm.rotation.x=-Math.PI/3.2,G.anim.leftArm.rotation.y=Math.PI/4.5,G.anim.leftArm.rotation.z=Math.PI/5.5,G.anim.leftForearm.rotation.x=-Math.PI/2.8,G.anim.leftForearm.rotation.y=Math.PI/3,G.anim.rightArm.rotation.x=-Math.PI/3.2,G.anim.rightArm.rotation.y=-Math.PI/4.5,G.anim.rightArm.rotation.z=-Math.PI/5.5,G.anim.rightForearm.rotation.x=-Math.PI/2.8,G.anim.rightForearm.rotation.y=-Math.PI/3,G.anim.head.rotation.x=Math.PI/14):G.anim&&(G.anim.leftArm.rotation.x=Mn.lerp(G.anim.leftArm.rotation.x,0,s*10),G.anim.leftArm.rotation.y=Mn.lerp(G.anim.leftArm.rotation.y,0,s*10),G.anim.leftArm.rotation.z=Mn.lerp(G.anim.leftArm.rotation.z,0,s*10),G.anim.rightArm.rotation.x=Mn.lerp(G.anim.rightArm.rotation.x,0,s*10),G.anim.rightArm.rotation.y=Mn.lerp(G.anim.rightArm.rotation.y,0,s*10),G.anim.rightArm.rotation.z=Mn.lerp(G.anim.rightArm.rotation.z,0,s*10),G.anim.leftForearm.rotation.set(0,0,0),G.anim.rightForearm.rotation.set(0,0,0),G.anim.head.rotation.x=0),G.anim.torso.position.y=.95;Ol()}zy(),Zn.render(Rt,Ze)}Xf();window.addEventListener("resize",()=>{Ze.aspect=window.innerWidth/window.innerHeight,Ze.updateProjectionMatrix(),Zn.setSize(window.innerWidth,window.innerHeight),Zn.setPixelRatio(Math.min(window.devicePixelRatio,2))});try{const s=new URLSearchParams(window.location.search),e=parseInt(s.get("stage"));if(!isNaN(e))if(e===2){Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=2,v.chanda=1150,G.group.position.set(0,0,52),v.destination={name:"Ganesha Murti Workshop",x:0,z:61.5,type:"shop"},v.currentObjective="Select Lord Ganesha's sacred Murti for the festival pandal.";const t=document.getElementById("hud-stage-name"),n=document.getElementById("hud-objective-text");t&&(t.textContent="Stage 2: Murti Workshop"),n&&(n.textContent=v.currentObjective),di.textContent=`₹${v.chanda}`,ut&&(ut.visible=!1),dt&&(dt.visible=!1),on(),setTimeout(Bl,300)}else if(e===3){Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=3,v.stage3&&(v.stage3.started=!0,v.stage3.revealed=!1,v.stage3.clothProgress=0),v.chanda=850,v.selectedIdol="bal",v.selectedIdolName="Shri Bal Ganesha",v.stage1Completed=!0,v.stage2Completed=!0,v.familiesVisited=8,v.invitedFamilies=hi.map(i=>({id:i.id,name:i.name})),G.group.position.set(1.65,.46,.8),G.rotation=Math.PI*.75,G.group.rotation.y=Math.PI*.75,G.anim&&(G.anim.isNamaste=!0,G.anim.namasteFactor=1),Ze.position.set(0,2.2,3.2),Ze.lookAt(0,1.55,-.6),ut&&(ut.visible=!0),dt&&(dt.visible=!0),ds(0),On(),v.destination={name:"Festival Mandap",x:0,z:0,type:"mandap"},v.currentObjective="Unveil Lord Ganesha at the festival mandap.";const t=document.getElementById("hud-stage-name"),n=document.getElementById("hud-objective-text");t&&(t.textContent="Stage 3: Ganesha Arrival"),n&&(n.textContent=v.currentObjective),di.textContent=`₹${v.chanda}`,rn&&(rn.textContent="8 / 8"),fn&&(fn.textContent="8 / 8"),Bn(),Ol(),on(),setTimeout(pa,350)}else e===4?(Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=4,v.chanda=950,v.score=650,v.selectedIdol="bal",v.selectedIdolName="Shri Bal Ganesha",v.stage1Completed=!0,v.stage2Completed=!0,v.stage3&&(v.stage3.started=!0,v.stage3.revealed=!0),v.familiesVisited=8,v.invitedFamilies=hi.map(t=>({id:t.id,name:t.name})),G.group.position.set(1.45,.46,1.4),On(),dt&&(dt.visible=!1),ut&&(ut.visible=!0),di.textContent=`₹${v.chanda}`,rn&&(rn.textContent="8 / 8"),fn&&(fn.textContent="8 / 8"),Bn(),Lf(),on()):e===5?(Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=5,v.chanda=950,v.score=1050,v.selectedIdol="bal",v.selectedIdolName="Shri Bal Ganesha",v.stage1Completed=!0,v.stage2Completed=!0,v.stage3&&(v.stage3.started=!0,v.stage3.revealed=!0),v.stage4&&(v.stage4.completed=!0),v.familiesVisited=8,v.invitedFamilies=hi.map(t=>({id:t.id,name:t.name})),G.group.position.set(1.45,.46,1.2),On(),dt&&(dt.visible=!1),ut&&(ut.visible=!0),Tr(),["toran","garlands","samaiLamps","cushions","fruits","kalash","modaks","incense"].forEach(t=>{v.stage4&&(v.stage4.items[t]=!0);const n=Fo(t);n&&os.add(n)}),di.textContent=`₹${v.chanda}`,rn&&(rn.textContent="8 / 8"),fn&&(fn.textContent="8 / 8"),Bn(),Ff(),on()):e===6?(Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=6,v.chanda=950,v.score=1575,v.selectedIdol="bal",v.selectedIdolName="Shri Bal Ganesha",v.stage1Completed=!0,v.stage2Completed=!0,v.stage3&&(v.stage3.started=!0,v.stage3.revealed=!0),v.stage4&&(v.stage4.completed=!0),v.stage5&&(v.stage5.completed=!0),v.familiesVisited=8,v.invitedFamilies=hi.map(t=>({id:t.id,name:t.name})),G.group.position.set(1.45,.46,1.2),On(),dt&&(dt.visible=!1),ut&&(ut.visible=!0),Tr(),["toran","garlands","samaiLamps","cushions","fruits","kalash","modaks","incense"].forEach(t=>{v.stage4&&(v.stage4.items[t]=!0);const n=Fo(t);n&&os.add(n)}),di.textContent=`₹${v.chanda}`,rn&&(rn.textContent="8 / 8"),fn&&(fn.textContent="8 / 8"),Bn(),Gf(),on()):e===7&&(Qi.classList.add("hidden"),es.classList.remove("hidden"),v.stage=7,v.chanda=950,v.score=2200,v.selectedIdol="bal",v.selectedIdolName="Shri Bal Ganesha",v.stage1Completed=!0,v.stage2Completed=!0,v.stage3&&(v.stage3.started=!0,v.stage3.revealed=!0),v.stage4&&(v.stage4.completed=!0),v.stage5&&(v.stage5.completed=!0),v.stage6&&(v.stage6.completed=!0),v.familiesVisited=8,v.invitedFamilies=hi.map(t=>({id:t.id,name:t.name})),G.group.position.set(1.4,.46,2),On(),dt&&(dt.visible=!1),Tr(),["toran","garlands","samaiLamps","cushions","fruits","kalash","modaks","incense"].forEach(t=>{v.stage4&&(v.stage4.items[t]=!0);const n=Fo(t);n&&os.add(n)}),kf(),di.textContent=`₹${v.chanda}`,rn&&(rn.textContent="8 / 8"),fn&&(fn.textContent="8 / 8"),Bn(),Hf(),on())}catch(s){console.log("URL debug param check caught:",s)}
