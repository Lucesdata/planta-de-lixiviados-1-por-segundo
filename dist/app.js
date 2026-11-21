"use strict";(()=>{var Md="170";var eg=0,Vh=1,tg=2;var cp=1,wd=2,zi=3,Ei=0,Bn=1,tn=2,dr=0,xs=1,Br=2,Gh=3,Wh=4,ng=5,kr=100,ig=101,rg=102,sg=103,og=104,ag=200,cg=201,lg=202,ug=203,Ql=204,eu=205,dg=206,hg=207,fg=208,pg=209,mg=210,gg=211,xg=212,vg=213,bg=214,tu=0,nu=1,iu=2,Es=3,ru=4,su=5,ou=6,au=7,lp=0,yg=1,Eg=2,hr=0,_g=1,Mg=2,wg=3,Tg=4,Sg=5,Rg=6,Td=7,Xh="attached",Ag="detached",up=300,_s=301,Ms=302,cu=303,lu=304,fc=306,uu=1e3,Dr=1001,du=1002,Yn=1003,Cg=1004;var na=1005;var yi=1006,ml=1007;var Ur=1008;var Gi=1009,dp=1010,hp=1011,bo=1012,Sd=1013,Nr=1014,hi=1015,Po=1016,Rd=1017,Ad=1018,ws=1020,fp=35902,pp=1021,mp=1022,Jn=1023,gp=1024,xp=1025,vs=1026,Ts=1027,Cd=1028,Id=1029,vp=1030,Pd=1031;var Ld=1033,La=33776,ka=33777,Ha=33778,Da=33779,hu=35840,fu=35841,pu=35842,mu=35843,gu=36196,xu=37492,vu=37496,bu=37808,yu=37809,Eu=37810,_u=37811,Mu=37812,wu=37813,Tu=37814,Su=37815,Ru=37816,Au=37817,Cu=37818,Iu=37819,Pu=37820,Lu=37821,Ua=36492,ku=36494,Hu=36495,bp=36283,Du=36284,Uu=36285,Bu=36286;var Na=2300,Nu=2301,gl=2302,qh=2400,Yh=2401,$h=2402;var Ig=3200,Pg=3201;var yp=0,Lg=1,lr="",ln="srgb",Ps="srgb-linear",pc="linear",Ft="srgb";var ts=7680;var Zh=519,kg=512,Hg=513,Dg=514,Ep=515,Ug=516,Bg=517,Ng=518,zg=519,Kh=35044;var Jh="300 es",Oi=2e3,za=2001,fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ba=Math.PI/180,zu=180/Math.PI;function Ls(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function Fg(i,e){return(i%e+e)%e}function xl(i,e,t){return(1-t)*i+t*e}function ro(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=r[0],g=r[3],m=r[6],b=r[1],y=r[4],_=r[7],R=r[2],S=r[5],P=r[8];return s[0]=o*v+a*b+c*R,s[3]=o*g+a*y+c*S,s[6]=o*m+a*_+c*P,s[1]=l*v+u*b+d*R,s[4]=l*g+u*y+d*S,s[7]=l*m+u*_+d*P,s[2]=h*v+f*b+p*R,s[5]=h*g+f*y+p*S,s[8]=h*m+f*_+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,p=t*d+n*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(r*l-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vl.makeScale(e,t)),this}rotate(e){return this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vl=new ot;function _p(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Og(){let i=Fa("canvas");return i.style.display="block",i}var jh={};function po(i){i in jh||(jh[i]=!0,console.warn(i))}function Vg(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Gg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var wt={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ft&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ft&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===lr?pc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qh=[.64,.33,.3,.6,.15,.06],ef=[.2126,.7152,.0722],tf=[.3127,.329],nf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rf=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[Ps]:{primaries:Qh,whitePoint:tf,transfer:pc,toXYZ:nf,fromXYZ:rf,luminanceCoefficients:ef,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:Qh,whitePoint:tf,transfer:Ft,toXYZ:nf,fromXYZ:rf,luminanceCoefficients:ef,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});var ns,Fu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Fa("canvas")),ns.width=e.width,ns.height=e.height;let n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xg=0,Oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bl(r[o].image)):s.push(bl(r[o]))}else s=bl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qg=0,Nn=class i extends fr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dr,r=Dr,s=yi,o=Ur,a=Jn,c=Gi,l=i.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ls(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uu:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uu:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=up;Nn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(f+1)/2,R=(m+1)/2,S=(u+h)/4,P=(d+v)/4,L=(p+g)/4;return y>_&&y>R?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=S/n,s=P/n):_>R?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=S/r,s=L/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=L/s),this.set(n,r,s,t),this}let b=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-v)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ou=class extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Va=class extends Nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vu=class extends Nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==p){let g=1-a,m=c*h+l*f+u*p+d*v,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let R=Math.sqrt(y),S=Math.atan2(R,m*b);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}let _=a*b;if(c=c*g+h*_,l=l*g+f*_,u=u*g+p*_,d=d*g+v*_,g===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*d+c*f-l*h,e[t+1]=c*p+u*h+l*d-a*f,e[t+2]=l*p+u*f+a*h-c*d,e[t+3]=u*p-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yl.copy(this).projectOnVector(e),this.sub(yl)}reflect(e){return this.sub(yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yl=new x,sf=new bt,jn=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),ra.subVectors(this.max,so),is.subVectors(e.a,so),rs.subVectors(e.b,so),ss.subVectors(e.c,so),ir.subVectors(rs,is),rr.subVectors(ss,rs),Sr.subVectors(is,ss);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Sr.z,Sr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Sr.z,0,-Sr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Sr.y,Sr.x,0];return!El(t,is,rs,ss,ra)||(t=[1,0,0,0,1,0,0,0,1],!El(t,is,rs,ss,ra))?!1:(sa.crossVectors(ir,rr),t=[sa.x,sa.y,sa.z],El(t,is,rs,ss,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hi=[new x,new x,new x,new x,new x,new x,new x,new x],li=new x,ia=new jn,is=new x,rs=new x,ss=new x,ir=new x,rr=new x,Sr=new x,so=new x,ra=new x,sa=new x,Rr=new x;function El(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Rr.fromArray(i,s);let a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),c=e.dot(Rr),l=t.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Yg=new jn,oo=new x,_l=new x,_i=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(_l)),this.expandByPoint(oo.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new x,Ml=new x,oa=new x,sr=new x,wl=new x,aa=new x,Tl=new x,Ss=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ml.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Ml);let s=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=sr.dot(this.direction),c=-sr.dot(oa),l=sr.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*c-a,h=o*a-c,p=s*u,d>=0)if(h>=-p)if(h<=p){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ml).addScaledVector(oa,h),f}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),r=Di.dot(Di)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,r,s){wl.subVectors(t,e),aa.subVectors(n,e),Tl.crossVectors(wl,aa);let o=this.direction.dot(Tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);let c=a*this.direction.dot(aa.crossVectors(sr,aa));if(c<0)return null;let l=a*this.direction.dot(wl.cross(sr));if(l<0||c+l>o)return null;let u=-a*sr.dot(Tl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(e,t,n,r,s,o,a,c,l,u,d,h,f,p,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,h,f,p,v,g)}set(e,t,n,r,s,o,a,c,l,u,d,h,f,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,p=l*u,v=l*d;t[0]=h+v*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,p=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,v=a*d;t[0]=c*u,t[4]=p*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($g,e,Zg)}lookAt(e,t,n){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),or.crossVectors(n,Xn),or.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),or.crossVectors(n,Xn)),or.normalize(),ca.crossVectors(Xn,or),r[0]=or.x,r[4]=ca.x,r[8]=Xn.x,r[1]=or.y,r[5]=ca.y,r[9]=Xn.y,r[2]=or.z,r[6]=ca.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],b=n[3],y=n[7],_=n[11],R=n[15],S=r[0],P=r[4],L=r[8],w=r[12],T=r[1],H=r[5],N=r[9],U=r[13],z=r[2],I=r[6],B=r[10],X=r[14],V=r[3],Q=r[7],se=r[11],le=r[15];return s[0]=o*S+a*T+c*z+l*V,s[4]=o*P+a*H+c*I+l*Q,s[8]=o*L+a*N+c*B+l*se,s[12]=o*w+a*U+c*X+l*le,s[1]=u*S+d*T+h*z+f*V,s[5]=u*P+d*H+h*I+f*Q,s[9]=u*L+d*N+h*B+f*se,s[13]=u*w+d*U+h*X+f*le,s[2]=p*S+v*T+g*z+m*V,s[6]=p*P+v*H+g*I+m*Q,s[10]=p*L+v*N+g*B+m*se,s[14]=p*w+v*U+g*X+m*le,s[3]=b*S+y*T+_*z+R*V,s[7]=b*P+y*H+_*I+R*Q,s[11]=b*L+y*N+_*B+R*se,s[15]=b*w+y*U+_*X+R*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+s*c*d-r*l*d-s*a*h+n*l*h+r*a*f-n*c*f)+v*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+g*(+t*l*d-t*a*f-s*o*d+n*o*f+s*a*u-n*l*u)+m*(-r*a*u-t*c*d+t*a*h+r*o*d-n*o*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],b=d*g*l-v*h*l+v*c*f-a*g*f-d*c*m+a*h*m,y=p*h*l-u*g*l-p*c*f+o*g*f+u*c*m-o*h*m,_=u*v*l-p*d*l+p*a*f-o*v*f-u*a*m+o*d*m,R=p*d*c-u*v*c-p*a*h+o*v*h+u*a*g-o*d*g,S=t*b+n*y+r*_+s*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/S;return e[0]=b*P,e[1]=(v*h*s-d*g*s-v*r*f+n*g*f+d*r*m-n*h*m)*P,e[2]=(a*g*s-v*c*s+v*r*l-n*g*l-a*r*m+n*c*m)*P,e[3]=(d*c*s-a*h*s-d*r*l+n*h*l+a*r*f-n*c*f)*P,e[4]=y*P,e[5]=(u*g*s-p*h*s+p*r*f-t*g*f-u*r*m+t*h*m)*P,e[6]=(p*c*s-o*g*s-p*r*l+t*g*l+o*r*m-t*c*m)*P,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*P,e[8]=_*P,e[9]=(p*d*s-u*v*s-p*n*f+t*v*f+u*n*m-t*d*m)*P,e[10]=(o*v*s-p*a*s+p*n*l-t*v*l-o*n*m+t*a*m)*P,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*f-t*a*f)*P,e[12]=R*P,e[13]=(u*v*r-p*d*r+p*n*h-t*v*h-u*n*g+t*d*g)*P,e[14]=(p*a*r-o*v*r-p*n*c+t*v*c+o*n*g-t*a*g)*P,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*h+t*a*h)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,p=s*d,v=o*u,g=o*d,m=a*d,b=c*l,y=c*u,_=c*d,R=n.x,S=n.y,P=n.z;return r[0]=(1-(v+m))*R,r[1]=(f+_)*R,r[2]=(p-y)*R,r[3]=0,r[4]=(f-_)*S,r[5]=(1-(h+m))*S,r[6]=(g+b)*S,r[7]=0,r[8]=(p+y)*P,r[9]=(g-b)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=os.set(r[0],r[1],r[2]).length(),o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);let l=1/s,u=1/o,d=1/a;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Oi){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r),f,p;if(a===Oi)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===za)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Oi){let c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*l,f=(n+r)*u,p,v;if(a===Oi)p=(o+s)*d,v=-2*d;else if(a===za)p=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},os=new x,ui=new be,$g=new x(0,0,0),Zg=new x(1,1,1),or=new x,ca=new x,Xn=new x,of=new be,af=new bt,en=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kg=0,cf=new x,as=new bt,Ui=new be,la=new x,ao=new x,Jg=new x,jg=new bt,lf=new x(1,0,0),uf=new x(0,1,0),df=new x(0,0,1),hf={type:"added"},Qg={type:"removed"},cs={type:"childadded",child:null},Sl={type:"childremoved",child:null},Mn=class i extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new x,t=new en,n=new bt,r=new x(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new ot}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ao,la,this.up):Ui.lookAt(la,ao,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Ui),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,Jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Mn.DEFAULT_UP=new x(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new x,Bi=new x,Rl=new x,Ni=new x,ls=new x,us=new x,ff=new x,Al=new x,Cl=new x,Il=new x,Pl=new Et,Ll=new Et,kl=new Et,ur=class i{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),di.subVectors(e,t),r.cross(di);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){di.subVectors(r,t),Bi.subVectors(n,t),Rl.subVectors(e,t);let o=di.dot(di),a=di.dot(Bi),c=di.dot(Rl),l=Bi.dot(Bi),u=Bi.dot(Rl),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,p=(o*u-a*c)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Pl.setScalar(0),Ll.setScalar(0),kl.setScalar(0),Pl.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pl,s.x),o.addScaledVector(Ll,s.y),o.addScaledVector(kl,s.z),o}static isFrontFacing(e,t,n,r){return di.subVectors(n,t),Bi.subVectors(e,t),di.cross(Bi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),di.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ls.subVectors(r,n),us.subVectors(s,n),Al.subVectors(e,n);let c=ls.dot(Al),l=us.dot(Al);if(c<=0&&l<=0)return t.copy(n);Cl.subVectors(e,r);let u=ls.dot(Cl),d=us.dot(Cl);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ls,o);Il.subVectors(e,s);let f=ls.dot(Il),p=us.dot(Il);if(p>=0&&f<=p)return t.copy(s);let v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(us,a);let g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return ff.subVectors(s,r),a=(d-u)/(d-u+(f-p)),t.copy(r).addScaledVector(ff,a);let m=1/(g+v+h);return o=v*m,a=h*m,t.copy(n).addScaledVector(ls,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=wt.workingColorSpace){if(e=Fg(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hl(o,s,e+1/3),this.g=Hl(o,s,e),this.b=Hl(o,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let n=Mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return wt.fromWorkingColorSpace(In.copy(this),e),Math.round(bn(In.r*255,0,255))*65536+Math.round(bn(In.g*255,0,255))*256+Math.round(bn(In.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(In.copy(this),t);let n=In.r,r=In.g,s=In.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ln){wt.fromWorkingColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(ua);let n=xl(ar.h,ua.h,t),r=xl(ar.s,ua.s,t),s=xl(ar.l,ua.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Ce;Ce.NAMES=Mp;var ex=0,pr=class extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ls(),this.name="",this.blending=xs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=eu,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ql&&(n.blendSrc=this.blendSrc),this.blendDst!==eu&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pn=class extends pr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var cn=new x,da=new pe,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ro(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),e}};var Ga=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wa=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Oe=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},tx=0,Kn=new be,Dl=new Mn,ds=new x,qn=new jn,co=new jn,vn=new x,St=class i extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?Wa:Ga)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(qn.min,co.min),qn.expandByPoint(vn),vn.addVectors(qn.max,co.max),qn.expandByPoint(vn)):(qn.expandByPoint(co.min),qn.expandByPoint(co.max))}qn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)vn.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(e,l),vn.add(ds)),r=Math.max(r,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new x,c[L]=new x;let l=new x,u=new x,d=new x,h=new pe,f=new pe,p=new pe,v=new x,g=new x;function m(L,w,T){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,T),h.fromBufferAttribute(s,L),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,T),u.sub(l),d.sub(l),f.sub(h),p.sub(h);let H=1/(f.x*p.y-p.x*f.y);isFinite(H)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(H),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(H),a[L].add(v),a[w].add(v),a[T].add(v),c[L].add(g),c[w].add(g),c[T].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,w=b.length;L<w;++L){let T=b[L],H=T.start,N=T.count;for(let U=H,z=H+N;U<z;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new x,_=new x,R=new x,S=new x;function P(L){R.fromBufferAttribute(r,L),S.copy(R);let w=a[L];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(S,w);let H=_.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,H)}for(let L=0,w=b.length;L<w;++L){let T=b[L],H=T.start,N=T.count;for(let U=H,z=H+N;U<z;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new x,s=new x,o=new x,a=new x,c=new x,l=new x,u=new x,d=new x;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new nn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pf=new be,Ar=new Ss,ha=new _i,mf=new x,fa=new x,pa=new x,ma=new x,Ul=new x,ga=new x,gf=new x,xa=new x,re=class extends Mn{constructor(e=new St,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Ul.fromBufferAttribute(d,e),o?ga.addScaledVector(Ul,u):ga.addScaledVector(Ul.sub(t),u))}t.add(ga)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(ha.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ha,mf)===null||Ar.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,R=y;_<R;_+=3){let S=a.getX(_),P=a.getX(_+1),L=a.getX(_+2);r=va(this,m,e,n,l,u,d,S,P,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let b=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);r=va(this,o,e,n,l,u,d,b,y,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,R=y;_<R;_+=3){let S=_,P=_+1,L=_+2;r=va(this,m,e,n,l,u,d,S,P,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let b=g,y=g+1,_=g+2;r=va(this,o,e,n,l,u,d,b,y,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function nx(i,e,t,n,r,s,o,a){let c;if(e.side===Bn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Ei,a),c===null)return null;xa.copy(a),xa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xa);return l<t.near||l>t.far?null:{distance:l,point:xa.clone(),object:i}}function va(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,fa),i.getVertexPosition(c,pa),i.getVertexPosition(l,ma);let u=nx(i,e,t,n,fa,pa,ma,gf);if(u){let d=new x;ur.getBarycoord(gf,fa,pa,ma,d),r&&(u.uv=ur.getInterpolatedAttribute(r,a,c,l,d,new pe)),s&&(u.uv1=ur.getInterpolatedAttribute(s,a,c,l,d,new pe)),o&&(u.normal=ur.getInterpolatedAttribute(o,a,c,l,d,new x),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new x,materialIndex:0};ur.getNormal(fa,pa,ma,h.normal),u.face=h,u.barycoord=d}return u}var Gt=class i extends St{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function p(v,g,m,b,y,_,R,S,P,L,w){let T=_/P,H=R/L,N=_/2,U=R/2,z=S/2,I=P+1,B=L+1,X=0,V=0,Q=new x;for(let se=0;se<B;se++){let le=se*H-U;for(let Ae=0;Ae<I;Ae++){let at=Ae*T-N;Q[v]=at*b,Q[g]=le*y,Q[m]=z,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[m]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Ae/P),d.push(1-se/L),X+=1}}for(let se=0;se<L;se++)for(let le=0;le<P;le++){let Ae=h+le+I*se,at=h+le+I*(se+1),K=h+(le+1)+I*(se+1),ie=h+(le+1)+I*se;c.push(Ae,at,ie),c.push(at,K,ie),V+=6}a.addGroup(f,V,w),f+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kn(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let r in n)e[r]=n[r]}return e}function ix(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var rx={clone:Rs,merge:kn},sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends pr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xa=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cr=new x,xf=new pe,vf=new pe,yn=class extends Xa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,xf,vf),t.subVectors(vf,xf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,fs=1,Gu=class extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(hs,fs,e,t);r.layers=this.layers,this.add(r);let s=new yn(hs,fs,e,t);s.layers=this.layers,this.add(s);let o=new yn(hs,fs,e,t);o.layers=this.layers,this.add(o);let a=new yn(hs,fs,e,t);a.layers=this.layers,this.add(a);let c=new yn(hs,fs,e,t);c.layers=this.layers,this.add(c);let l=new yn(hs,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},qa=class extends Nn{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wu=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gt(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:dr});s.uniforms.tEquirect.value=t;let o=new re(r,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=yi),new Gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Bl=new x,ax=new x,cx=new ot,Fi=class{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Bl.subVectors(n,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cx.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new _i,ba=new x,Eo=class{constructor(e=new Fi,t=new Fi,n=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],p=r[9],v=r[10],g=r[11],m=r[12],b=r[13],y=r[14],_=r[15];if(n[0].setComponents(c-s,h-l,g-f,_-m).normalize(),n[1].setComponents(c+s,h+l,g+f,_+m).normalize(),n[2].setComponents(c+o,h+u,g+p,_+b).normalize(),n[3].setComponents(c-o,h-u,g-p,_-b).normalize(),n[4].setComponents(c-a,h-d,g-v,_-y).normalize(),t===Oi)n[5].setComponents(c+a,h+d,g+v,_+y).normalize();else if(t===za)n[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function lx(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Je=class i extends St{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let b=m*h-o;for(let y=0;y<l;y++){let _=y*d-s;p.push(_,-b,0),v.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let y=b+l*m,_=b+l*(m+1),R=b+1+l*(m+1),S=b+1+l*m;f.push(y,_,S),f.push(_,R,S)}this.setIndex(f),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
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
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kx=`#define PI 3.141592653589793
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
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
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
#endif`,c1=`struct PhysicalMaterial {
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
}`,l1=`
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L1=`#ifdef USE_NORMALMAP
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
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
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
}`,gv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xv=`#define DISTANCE
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
}`,vv=`#define DISTANCE
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,_v=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,wv=`uniform vec3 diffuse;
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
}`,Tv=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,Rv=`#define MATCAP
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
}`,Av=`#define MATCAP
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
}`,Cv=`#define NORMAL
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
}`,Iv=`#define NORMAL
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
}`,Pv=`#define PHONG
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
}`,Lv=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,Hv=`#define STANDARD
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
}`,Dv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Fv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:hx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:xx,batching_pars_vertex:vx,batching_vertex:bx,begin_vertex:yx,beginnormal_vertex:Ex,bsdfs:_x,iridescence_fragment:Mx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Ax,color_fragment:Cx,color_pars_fragment:Ix,color_pars_vertex:Px,color_vertex:Lx,common:kx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Bx,emissivemap_fragment:Nx,emissivemap_pars_fragment:zx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:Vx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:n1,envmap_vertex:qx,fog_vertex:Yx,fog_pars_vertex:$x,fog_fragment:Zx,fog_pars_fragment:Kx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:jx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:r1,lights_phong_fragment:s1,lights_phong_pars_fragment:o1,lights_physical_fragment:a1,lights_physical_pars_fragment:c1,lights_fragment_begin:l1,lights_fragment_maps:u1,lights_fragment_end:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:x1,map_particle_fragment:v1,map_particle_pars_fragment:b1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:E1,morphinstance_vertex:_1,morphcolor_vertex:M1,morphnormal_vertex:w1,morphtarget_pars_vertex:T1,morphtarget_vertex:S1,normal_fragment_begin:R1,normal_fragment_maps:A1,normal_pars_fragment:C1,normal_pars_vertex:I1,normal_vertex:P1,normalmap_pars_fragment:L1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:D1,iridescence_pars_fragment:U1,opaque_fragment:B1,packing:N1,premultiplied_alpha_fragment:z1,project_vertex:F1,dithering_fragment:O1,dithering_pars_fragment:V1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:q1,shadowmap_vertex:Y1,shadowmask_pars_fragment:$1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:J1,skinnormal_vertex:j1,specularmap_fragment:Q1,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:rv,uv_pars_fragment:sv,uv_pars_vertex:ov,uv_vertex:av,worldpos_vertex:cv,background_vert:lv,background_frag:uv,backgroundCube_vert:dv,backgroundCube_frag:hv,cube_vert:fv,cube_frag:pv,depth_vert:mv,depth_frag:gv,distanceRGBA_vert:xv,distanceRGBA_frag:vv,equirect_vert:bv,equirect_frag:yv,linedashed_vert:Ev,linedashed_frag:_v,meshbasic_vert:Mv,meshbasic_frag:wv,meshlambert_vert:Tv,meshlambert_frag:Sv,meshmatcap_vert:Rv,meshmatcap_frag:Av,meshnormal_vert:Cv,meshnormal_frag:Iv,meshphong_vert:Pv,meshphong_frag:Lv,meshphysical_vert:kv,meshphysical_frag:Hv,meshtoon_vert:Dv,meshtoon_frag:Uv,points_vert:Bv,points_frag:Nv,shadow_vert:zv,shadow_frag:Fv,sprite_vert:Ov,sprite_frag:Vv},ve={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},bi={basic:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:kn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:kn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:kn([ve.points,ve.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:kn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:kn([ve.common,ve.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:kn([ve.sprite,ve.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:kn([ve.common,ve.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:kn([ve.lights,ve.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};bi.physical={uniforms:kn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var ya={r:0,b:0,g:0},Ir=new en,Gv=new be;function Wv(i,e,t,n,r,s,o){let a=new Ce(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1,_=p(b);_===null?m(a,c):_&&_.isColor&&(m(_,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let _=p(y);_&&(_.isCubeTexture||_.mapping===fc)?(u===void 0&&(u=new re(new Gt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Rs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ir.copy(y.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(Ir)),u.material.toneMapped=wt.getTransfer(_.colorSpace)!==Ft,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new re(new Je(2,2),new zn({name:"BackgroundMaterial",uniforms:Rs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=wt.getTransfer(_.colorSpace)!==Ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,y){b.getRGB(ya,wp(i)),n.buffers.color.setClear(ya.r,ya.g,ya.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:v,addToRenderList:g}}function Xv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(T,H,N,U,z){let I=!1,B=d(U,N,H);s!==B&&(s=B,l(s.object)),I=f(T,U,N,z),I&&p(T,U,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,_(T,H,N,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function d(T,H,N){let U=N.wireframe===!0,z=n[T.id];z===void 0&&(z={},n[T.id]=z);let I=z[H.id];I===void 0&&(I={},z[H.id]=I);let B=I[U];return B===void 0&&(B=h(c()),I[U]=B),B}function h(T){let H=[],N=[],U=[];for(let z=0;z<t;z++)H[z]=0,N[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:N,attributeDivisors:U,object:T,attributes:{},index:null}}function f(T,H,N,U){let z=s.attributes,I=H.attributes,B=0,X=N.getAttributes();for(let V in X)if(X[V].location>=0){let se=z[V],le=I[V];if(le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor)),se===void 0||se.attribute!==le||le&&se.data!==le.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function p(T,H,N,U){let z={},I=H.attributes,B=0,X=N.getAttributes();for(let V in X)if(X[V].location>=0){let se=I[V];se===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));let le={};le.attribute=se,se&&se.data&&(le.data=se.data),z[V]=le,B++}s.attributes=z,s.attributesNum=B,s.index=U}function v(){let T=s.newAttributes;for(let H=0,N=T.length;H<N;H++)T[H]=0}function g(T){m(T,0)}function m(T,H){let N=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;N[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),z[T]!==H&&(i.vertexAttribDivisor(T,H),z[T]=H)}function b(){let T=s.newAttributes,H=s.enabledAttributes;for(let N=0,U=H.length;N<U;N++)H[N]!==T[N]&&(i.disableVertexAttribArray(N),H[N]=0)}function y(T,H,N,U,z,I,B){B===!0?i.vertexAttribIPointer(T,H,N,z,I):i.vertexAttribPointer(T,H,N,U,z,I)}function _(T,H,N,U){v();let z=U.attributes,I=N.getAttributes(),B=H.defaultAttributeValues;for(let X in I){let V=I[X];if(V.location>=0){let Q=z[X];if(Q===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let se=Q.normalized,le=Q.itemSize,Ae=e.get(Q);if(Ae===void 0)continue;let at=Ae.buffer,K=Ae.type,ie=Ae.bytesPerElement,oe=K===i.INT||K===i.UNSIGNED_INT||Q.gpuType===Sd;if(Q.isInterleavedBufferAttribute){let ce=Q.data,Te=ce.stride,Ne=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let Xe=0;Xe<V.locationSize;Xe++)m(V.location+Xe,ce.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Xe=0;Xe<V.locationSize;Xe++)g(V.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Xe=0;Xe<V.locationSize;Xe++)y(V.location+Xe,le/V.locationSize,K,se,Te*ie,(Ne+le/V.locationSize*Xe)*ie,oe)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce,Q.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<V.locationSize;ce++)g(V.location+ce);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ce=0;ce<V.locationSize;ce++)y(V.location+ce,le/V.locationSize,K,se,le*ie,le/V.locationSize*ce*ie,oe)}}else if(B!==void 0){let se=B[X];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(V.location,se);break;case 3:i.vertexAttrib3fv(V.location,se);break;case 4:i.vertexAttrib4fv(V.location,se);break;default:i.vertexAttrib1fv(V.location,se)}}}}b()}function R(){L();for(let T in n){let H=n[T];for(let N in H){let U=H[N];for(let z in U)u(U[z].object),delete U[z];delete H[N]}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let H=n[T.id];for(let N in H){let U=H[N];for(let z in U)u(U[z].object),delete U[z];delete H[N]}delete n[T.id]}function P(T){for(let H in n){let N=n[H];if(N[T.id]===void 0)continue;let U=N[T.id];for(let z in U)u(U[z].object),delete U[z];delete N[T.id]}}function L(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function qv(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v]*h[v];t.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Yv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let L=P===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hi&&!L)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:S}}function $v(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Fi,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):l();else{let b=s?0:n,y=b*4,_=m.clippingState||null;c.value=_,_=u(p,h,y,f);for(let R=0;R!==y;++R)_[R]=t[R];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=f+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(d[y]).applyMatrix4(b,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Zv(i){let e=new WeakMap;function t(o,a){return a===cu?o.mapping=_s:a===lu&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===cu||a===lu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ya=class extends Xa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gs=4,bf=[.125,.215,.35,.446,.526,.582],Hr=20,Nl=new Ya,yf=new Ce,zl=null,Fl=0,Ol=0,Vl=!1,Lr=(1+Math.sqrt(5))/2,ps=1/Lr,Ef=[new x(-Lr,ps,0),new x(Lr,ps,0),new x(-ps,0,Lr),new x(ps,0,Lr),new x(0,Lr,-ps),new x(0,Lr,ps),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],$a=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Fl,Ol),this._renderer.xr.enabled=Vl,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Po,format:Jn,colorSpace:Ps,depthBuffer:!1},r=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kv(s)),this._blurMaterial=Jv(s,e,t)}return r}_compileMaterial(e){let t=new re(this._lodPlanes[0],e);this._renderer.compile(t,Nl)}_sceneToCubeUV(e,t,n,r){let a=new yn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(yf),u.toneMapping=hr,u.autoClear=!1;let f=new Pn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),p=new re(new Gt,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(yf),v=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let y=this._cubeSize;Ea(r,b*y,m>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===_s||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ea(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Nl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ef[(r-s-1)%Ef.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new re(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hr-1),v=s/p,g=isFinite(s)?1+Math.floor(u*v):Hr;g>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hr}`);let m=[],b=0;for(let P=0;P<Hr;++P){let L=P/v,w=Math.exp(-L*L/2);m.push(w),P===0?b+=w:P<g&&(b+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-n;let _=this._sizeLods[r],R=3*_*(r>y-gs?r-y+gs:0),S=4*(this._cubeSize-_);Ea(t,R,S,3*_,2*_),c.setRenderTarget(t),c.render(d,Nl)}};function Kv(i){let e=[],t=[],n=[],r=i,s=i-gs+1+bf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-gs?c=bf[o-i+gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,b=new Float32Array(v*p*f),y=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let S=0;S<f;S++){let P=S%3*2/3-1,L=S>2?0:-1,w=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];b.set(w,v*p*S),y.set(h,g*p*S);let T=[S,S,S,S,S,S];_.set(T,m*p*S)}let R=new St;R.setAttribute("position",new nn(b,v)),R.setAttribute("uv",new nn(y,g)),R.setAttribute("faceIndex",new nn(_,m)),e.push(R),r>gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(i,e,t){let n=new Wi(i,e,t);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jv(i,e,t){let n=new Float32Array(Hr),r=new x(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kd(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Mf(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function wf(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function kd(){return`

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
	`}function jv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===cu||c===lu,u=c===_s||c===Ms;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new $a(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new $a(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function eb(i,e,t,n){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);for(let p in h.morphAttributes){let v=h.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,p=d.attributes.position,v=0;if(f!==null){let b=f.array;v=f.version;for(let y=0,_=b.length;y<_;y+=3){let R=b[y+0],S=b[y+1],P=b[y+2];h.push(R,S,S,P,P,R)}}else if(p!==void 0){let b=p.array;v=p.version;for(let y=0,_=b.length/3-1;y<_;y+=3){let R=y+0,S=y+1,P=y+2;h.push(R,S,S,P,P,R)}}else return;let g=new(_p(h)?Wa:Ga)(h,1);g.version=v;let m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function tb(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*o,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function d(h,f,p,v){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)l(h[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,v,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*v[b];t.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ib(i,e,t){let n=new WeakMap,r=new Et;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let _=a.attributes.position.count*y,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*R*4*d),P=new Va(S,_,R,d);P.type=hi,P.needsUpdate=!0;let L=y*4;for(let T=0;T<d;T++){let H=g[T],N=m[T],U=b[T],z=_*R*4*T;for(let I=0;I<H.count;I++){let B=I*L;f===!0&&(r.fromBufferAttribute(H,I),S[z+B+0]=r.x,S[z+B+1]=r.y,S[z+B+2]=r.z,S[z+B+3]=0),p===!0&&(r.fromBufferAttribute(N,I),S[z+B+4]=r.x,S[z+B+5]=r.y,S[z+B+6]=r.z,S[z+B+7]=0),v===!0&&(r.fromBufferAttribute(U,I),S[z+B+8]=r.x,S[z+B+9]=r.y,S[z+B+10]=r.z,S[z+B+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new pe(_,R)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function rb(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Za=class extends Nn{constructor(e,t,n,r,s,o,a,c,l,u=vs){if(u!==vs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=Nr),n===void 0&&u===Ts&&(n=ws),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yn,this.minFilter=c!==void 0?c:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sp=new Nn,Tf=new Za(1,1),Rp=new Va,Ap=new Vu,Cp=new qa,Sf=[],Rf=[],Af=new Float32Array(16),Cf=new Float32Array(9),If=new Float32Array(4);function ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Sf[r];if(s===void 0&&(s=new Float32Array(r),Sf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mc(i,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function lb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;If.set(n),i.uniformMatrix2fv(this.addr,!1,If),fn(t,n)}}function ub(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Cf.set(n),i.uniformMatrix3fv(this.addr,!1,Cf),fn(t,n)}}function db(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),fn(t,n)}}function hb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function gb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function yb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Tf.compareFunction=Ep,s=Tf):s=Sp,t.setTexture2D(e||s,r)}function Eb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ap,r)}function _b(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cp,r)}function Mb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rp,r)}function wb(i){switch(i){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return cb;case 35674:return lb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return hb;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return xb;case 36295:return vb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return Mb}}function Tb(i,e){i.uniform1fv(this.addr,e)}function Sb(i,e){let t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Rb(i,e){let t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function Ab(i,e){let t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Cb(i,e){let t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ib(i,e){let t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pb(i,e){let t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lb(i,e){i.uniform1iv(this.addr,e)}function kb(i,e){i.uniform2iv(this.addr,e)}function Hb(i,e){i.uniform3iv(this.addr,e)}function Db(i,e){i.uniform4iv(this.addr,e)}function Ub(i,e){i.uniform1uiv(this.addr,e)}function Bb(i,e){i.uniform2uiv(this.addr,e)}function Nb(i,e){i.uniform3uiv(this.addr,e)}function zb(i,e){i.uniform4uiv(this.addr,e)}function Fb(i,e,t){let n=this.cache,r=e.length,s=mc(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sp,s[o])}function Ob(i,e,t){let n=this.cache,r=e.length,s=mc(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ap,s[o])}function Vb(i,e,t){let n=this.cache,r=e.length,s=mc(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cp,s[o])}function Gb(i,e,t){let n=this.cache,r=e.length,s=mc(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rp,s[o])}function Wb(i){switch(i){case 5126:return Tb;case 35664:return Sb;case 35665:return Rb;case 35666:return Ab;case 35674:return Cb;case 35675:return Ib;case 35676:return Pb;case 5124:case 35670:return Lb;case 35667:case 35671:return kb;case 35668:case 35672:return Hb;case 35669:case 35673:return Db;case 5125:return Ub;case 36294:return Bb;case 36295:return Nb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wb(t.type)}},qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wb(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function Xb(i,e,t){let n=i.name,r=n.length;for(Gl.lastIndex=0;;){let s=Gl.exec(n),o=Gl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Pf(t,l===void 0?new Xu(a,i,e):new qu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Yu(a),Pf(t,d)),t=d}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Xb(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Lf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qb=37297,Yb=0;function $b(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kf=new ot;function Zb(i){wt._getMatrix(kf,wt.workingColorSpace,i);let e=`mat3( ${kf.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case pc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$b(i.getShaderSource(e),o)}else return r}function Kb(i,e){let t=Zb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jb(i,e){let t;switch(e){case _g:t="Linear";break;case Mg:t="Reinhard";break;case wg:t="Cineon";break;case Tg:t="ACESFilmic";break;case Rg:t="AgX";break;case Td:t="Neutral";break;case Sg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _a=new x;function jb(){wt.getLuminanceCoefficients(_a);let i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function ey(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ty(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function mo(i){return i!==""}function Df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(ny,ry)}var iy=new Map;function ry(i,e){let t=pt[e];if(t===void 0){let n=iy.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $u(t)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(i){return i.replace(sy,oy)}function oy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ay(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case Ms:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ly(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function uy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lp:e="ENVMAP_BLENDING_MULTIPLY";break;case yg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function dy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hy(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ay(t),l=cy(t),u=ly(t),d=uy(t),h=dy(t),f=Qb(t),p=ey(s),v=r.createProgram(),g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?pt.tonemapping_pars_fragment:"",t.toneMapping!==hr?Jb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Kb("linearToOutputTexel",t.outputColorSpace),jb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=$u(o),o=Df(o,t),o=Uf(o,t),a=$u(a),a=Df(a,t),a=Uf(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=b+g+o,_=b+m+a,R=Lf(r,r.VERTEX_SHADER,y),S=Lf(r,r.FRAGMENT_SHADER,_);r.attachShader(v,R),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(H){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(S).trim(),I=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,R,S);else{let X=Hf(r,R,"vertex"),V=Hf(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+N+`
`+X+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||z==="")&&(B=!1);B&&(H.diagnostics={runnable:I,programLog:N,vertexShader:{log:U,prefix:g},fragmentShader:{log:z,prefix:m}})}r.deleteShader(R),r.deleteShader(S),L=new ys(r,v),w=ty(r,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,qb)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=S,this}var fy=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ku(e),t.set(e,n)),n}},Ku=class{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}};function py(i,e,t,n,r,s,o){let a=new yo,c=new Zu,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,T,H,N,U){let z=N.fog,I=U.geometry,B=w.isMeshStandardMaterial?N.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),V=X&&X.mapping===fc?X.image.height:null,Q=p[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,le=se!==void 0?se.length:0,Ae=0;I.morphAttributes.position!==void 0&&(Ae=1),I.morphAttributes.normal!==void 0&&(Ae=2),I.morphAttributes.color!==void 0&&(Ae=3);let at,K,ie,oe;if(Q){let Nt=bi[Q];at=Nt.vertexShader,K=Nt.fragmentShader}else at=w.vertexShader,K=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),oe=c.getFragmentShaderID(w);let ce=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,Xe=U.isBatchedMesh===!0,Ze=!!w.map,et=!!w.matcap,Mt=!!X,G=!!w.aoMap,Vt=!!w.lightMap,it=!!w.bumpMap,ct=!!w.normalMap,qe=!!w.displacementMap,zt=!!w.emissiveMap,Ye=!!w.metalnessMap,D=!!w.roughnessMap,A=w.anisotropy>0,$=w.clearcoat>0,F=w.dispersion>0,Z=w.iridescence>0,ee=w.sheen>0,fe=w.transmission>0,he=A&&!!w.anisotropyMap,xe=$&&!!w.clearcoatMap,Ke=$&&!!w.clearcoatNormalMap,de=$&&!!w.clearcoatRoughnessMap,ye=Z&&!!w.iridescenceMap,ze=Z&&!!w.iridescenceThicknessMap,$e=ee&&!!w.sheenColorMap,Se=ee&&!!w.sheenRoughnessMap,xt=!!w.specularMap,lt=!!w.specularColorMap,Xt=!!w.specularIntensityMap,W=fe&&!!w.transmissionMap,Ee=fe&&!!w.thicknessMap,te=!!w.gradientMap,ae=!!w.alphaMap,Re=w.alphaTest>0,Me=!!w.alphaHash,ut=!!w.extensions,on=hr;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(on=i.toneMapping);let An={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:at,fragmentShader:K,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Xe,batchingColor:Xe&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ps,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:et,envMap:Mt,envMapMode:Mt&&X.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:Vt,bumpMap:it,normalMap:ct,displacementMap:h&&qe,emissiveMap:zt,normalMapObjectSpace:ct&&w.normalMapType===Lg,normalMapTangentSpace:ct&&w.normalMapType===yp,metalnessMap:Ye,roughnessMap:D,anisotropy:A,anisotropyMap:he,clearcoat:$,clearcoatMap:xe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:de,dispersion:F,iridescence:Z,iridescenceMap:ye,iridescenceThicknessMap:ze,sheen:ee,sheenColorMap:$e,sheenRoughnessMap:Se,specularMap:xt,specularColorMap:lt,specularIntensityMap:Xt,transmission:fe,transmissionMap:W,thicknessMap:Ee,gradientMap:te,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:ae,alphaTest:Re,alphaHash:Me,combine:w.combine,mapUv:Ze&&v(w.map.channel),aoMapUv:G&&v(w.aoMap.channel),lightMapUv:Vt&&v(w.lightMap.channel),bumpMapUv:it&&v(w.bumpMap.channel),normalMapUv:ct&&v(w.normalMap.channel),displacementMapUv:qe&&v(w.displacementMap.channel),emissiveMapUv:zt&&v(w.emissiveMap.channel),metalnessMapUv:Ye&&v(w.metalnessMap.channel),roughnessMapUv:D&&v(w.roughnessMap.channel),anisotropyMapUv:he&&v(w.anisotropyMap.channel),clearcoatMapUv:xe&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(w.sheenRoughnessMap.channel),specularMapUv:xt&&v(w.specularMap.channel),specularColorMapUv:lt&&v(w.specularColorMap.channel),specularIntensityMapUv:Xt&&v(w.specularIntensityMap.channel),transmissionMapUv:W&&v(w.transmissionMap.channel),thicknessMapUv:Ee&&v(w.thicknessMap.channel),alphaMapUv:ae&&v(w.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ct||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ze||ae),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:on,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:zt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===Bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ut&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&w.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return An.vertexUv1s=l.has(1),An.vertexUv2s=l.has(2),An.vertexUv3s=l.has(3),l.clear(),An}function m(w){let T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(let H in w.defines)T.push(H),T.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(b(T,w),y(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function b(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function y(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let T=p[w.type],H;if(T){let N=bi[T];H=rx.clone(N.uniforms)}else H=w.uniforms;return H}function R(w,T){let H;for(let N=0,U=u.length;N<U;N++){let z=u[N];if(z.cacheKey===T){H=z,++H.usedTimes;break}}return H===void 0&&(H=new hy(i,T,w,s),u.push(H)),H}function S(w){if(--w.usedTimes===0){let T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function P(w){c.remove(w)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:R,releaseProgram:S,releaseShaderCache:P,programs:u,dispose:L}}function my(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ff(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,p,v,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=v,m.group=g),e++,m}function a(d,h,f,p,v,g){let m=o(d,h,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,h,f,p,v,g){let m=o(d,h,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,h){t.length>1&&t.sort(d||gy),n.length>1&&n.sort(h||zf),r.length>1&&r.sort(h||zf)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function xy(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Ff,i.set(n,[o])):r>=s.length?(o=new Ff,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function vy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new Ce};break;case"SpotLight":t={position:new x,direction:new x,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new x,halfWidth:new x,halfHeight:new x};break}return i[e.id]=t,t}}}function by(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yy=0;function Ey(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _y(i){let e=new vy,t=by(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new x);let r=new x,s=new be,o=new be;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,b=0,y=0,_=0,R=0,S=0,P=0;l.sort(Ey);for(let w=0,T=l.length;w<T;w++){let H=l[w],N=H.color,U=H.intensity,z=H.distance,I=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=N.r*U,d+=N.g*U,h+=N.b*U;else if(H.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(H.sh.coefficients[B],U);P++}else if(H.isDirectionalLight){let B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let X=H.shadow,V=t.get(H);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=H.shadow.matrix,b++}n.directional[f]=B,f++}else if(H.isSpotLight){let B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(N).multiplyScalar(U),B.distance=z,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,n.spot[v]=B;let X=H.shadow;if(H.map&&(n.spotLightMap[R]=H.map,R++,X.updateMatrices(H),H.castShadow&&S++),n.spotLightMatrix[v]=X.matrix,H.castShadow){let V=t.get(H);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=I,_++}v++}else if(H.isRectAreaLight){let B=e.get(H);B.color.copy(N).multiplyScalar(U),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),n.rectArea[g]=B,g++}else if(H.isPointLight){let B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){let X=H.shadow,V=t.get(H);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=I,n.pointShadowMatrix[p]=H.shadow.matrix,y++}n.point[p]=B,p++}else if(H.isHemisphereLight){let B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(U),B.groundColor.copy(H.groundColor).multiplyScalar(U),n.hemi[m]=B,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==R||L.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=P,L.directionalLength=f,L.pointLength=p,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=R,L.numLightProbes=P,n.version=yy++)}function c(l,u){let d=0,h=0,f=0,p=0,v=0,g=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let y=l[m];if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Of(i){let e=new _y(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function My(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Of(i),e.set(r,[a])):s>=o.length?(a=new Of(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ju=class extends pr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ju=class extends pr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
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
}`;function Sy(i,e,t){let n=new Eo,r=new pe,s=new pe,o=new Et,a=new Ju({depthPacking:Pg}),c=new ju,l={},u=t.maxTextureSize,d={[Ei]:Bn,[Bn]:Ei,[tn]:tn},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:wy,fragmentShader:Ty}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new St;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new re(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let m=this.type;this.render=function(S,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),T=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),N=i.state;N.setBlending(dr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=m!==zi&&this.type===zi,z=m===zi&&this.type!==zi;for(let I=0,B=S.length;I<B;I++){let X=S[I],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let Q=V.getFrameExtents();if(r.multiply(Q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,V.mapSize.y=s.y)),V.map===null||U===!0||z===!0){let le=this.type!==zi?{minFilter:Yn,magFilter:Yn}:{};V.map!==null&&V.map.dispose(),V.map=new Wi(r.x,r.y,le),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let se=V.getViewportCount();for(let le=0;le<se;le++){let Ae=V.getViewport(le);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),N.viewport(o),V.updateMatrices(X,le),n=V.getFrustum(),_(P,L,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&b(V,L),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,T,H)};function b(S,P){let L=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wi(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(P,null,L,h,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(P,null,L,f,v,null)}function y(S,P,L,w){let T=null,H=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0)T=H;else if(T=L.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let N=T.uuid,U=P.uuid,z=l[N];z===void 0&&(z={},l[N]=z);let I=z[U];I===void 0&&(I=T.clone(),z[U]=I,P.addEventListener("dispose",R)),T=I}if(T.visible=P.visible,T.wireframe=P.wireframe,w===zi?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:d[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=i.properties.get(T);N.light=L}return T}function _(S,P,L,w,T){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===zi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let U=e.update(S),z=S.material;if(Array.isArray(z)){let I=U.groups;for(let B=0,X=I.length;B<X;B++){let V=I[B],Q=z[V.materialIndex];if(Q&&Q.visible){let se=y(S,Q,w,T);S.onBeforeShadow(i,S,P,L,U,se,V),i.renderBufferDirect(L,null,U,se,S,V),S.onAfterShadow(i,S,P,L,U,se,V)}}}else if(z.visible){let I=y(S,z,w,T);S.onBeforeShadow(i,S,P,L,U,I,null),i.renderBufferDirect(L,null,U,I,S,null),S.onAfterShadow(i,S,P,L,U,I,null)}}let N=S.children;for(let U=0,z=N.length;U<z;U++)_(N[U],P,L,w,T)}function R(S){S.target.removeEventListener("dispose",R);for(let L in l){let w=l[L],T=S.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}var Ry={[tu]:nu,[iu]:ou,[ru]:au,[Es]:su,[nu]:tu,[ou]:iu,[au]:ru,[su]:Es};function Ay(i,e){function t(){let W=!1,Ee=new Et,te=null,ae=new Et(0,0,0,0);return{setMask:function(Re){te!==Re&&!W&&(i.colorMask(Re,Re,Re,Re),te=Re)},setLocked:function(Re){W=Re},setClear:function(Re,Me,ut,on,An){An===!0&&(Re*=on,Me*=on,ut*=on),Ee.set(Re,Me,ut,on),ae.equals(Ee)===!1&&(i.clearColor(Re,Me,ut,on),ae.copy(Ee))},reset:function(){W=!1,te=null,ae.set(-1,0,0,0)}}}function n(){let W=!1,Ee=!1,te=null,ae=null,Re=null;return{setReversed:function(Me){if(Ee!==Me){let ut=e.get("EXT_clip_control");Ee?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);let on=Re;Re=null,this.setClear(on)}Ee=Me},getReversed:function(){return Ee},setTest:function(Me){Me?ce(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Me){te!==Me&&!W&&(i.depthMask(Me),te=Me)},setFunc:function(Me){if(Ee&&(Me=Ry[Me]),ae!==Me){switch(Me){case tu:i.depthFunc(i.NEVER);break;case nu:i.depthFunc(i.ALWAYS);break;case iu:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case ru:i.depthFunc(i.EQUAL);break;case su:i.depthFunc(i.GEQUAL);break;case ou:i.depthFunc(i.GREATER);break;case au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Me}},setLocked:function(Me){W=Me},setClear:function(Me){Re!==Me&&(Ee&&(Me=1-Me),i.clearDepth(Me),Re=Me)},reset:function(){W=!1,te=null,ae=null,Re=null,Ee=!1}}}function r(){let W=!1,Ee=null,te=null,ae=null,Re=null,Me=null,ut=null,on=null,An=null;return{setTest:function(Nt){W||(Nt?ce(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Nt){Ee!==Nt&&!W&&(i.stencilMask(Nt),Ee=Nt)},setFunc:function(Nt,ai,Li){(te!==Nt||ae!==ai||Re!==Li)&&(i.stencilFunc(Nt,ai,Li),te=Nt,ae=ai,Re=Li)},setOp:function(Nt,ai,Li){(Me!==Nt||ut!==ai||on!==Li)&&(i.stencilOp(Nt,ai,Li),Me=Nt,ut=ai,on=Li)},setLocked:function(Nt){W=Nt},setClear:function(Nt){An!==Nt&&(i.clearStencil(Nt),An=Nt)},reset:function(){W=!1,Ee=null,te=null,ae=null,Re=null,Me=null,ut=null,on=null,An=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,b=null,y=null,_=null,R=null,S=null,P=new Ce(0,0,0),L=0,w=!1,T=null,H=null,N=null,U=null,z=null,I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=X>=2);let Q=null,se={},le=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),at=new Et().fromArray(le),K=new Et().fromArray(Ae);function ie(W,Ee,te,ae){let Re=new Uint8Array(4),Me=i.createTexture();i.bindTexture(W,Me),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<te;ut++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Ee+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Me}let oe={};oe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Es),it(!1),ct(Vh),ce(i.CULL_FACE),G(dr);function ce(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function Te(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Ne(W,Ee){return d[W]!==Ee?(i.bindFramebuffer(W,Ee),d[W]=Ee,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ee),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Xe(W,Ee){let te=f,ae=!1;if(W){te=h.get(Ee),te===void 0&&(te=[],h.set(Ee,te));let Re=W.textures;if(te.length!==Re.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,ut=Re.length;Me<ut;Me++)te[Me]=i.COLOR_ATTACHMENT0+Me;te.length=Re.length,ae=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ae=!0);ae&&i.drawBuffers(te)}function Ze(W){return p!==W?(i.useProgram(W),p=W,!0):!1}let et={[kr]:i.FUNC_ADD,[ig]:i.FUNC_SUBTRACT,[rg]:i.FUNC_REVERSE_SUBTRACT};et[sg]=i.MIN,et[og]=i.MAX;let Mt={[ag]:i.ZERO,[cg]:i.ONE,[lg]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[mg]:i.SRC_ALPHA_SATURATE,[fg]:i.DST_COLOR,[dg]:i.DST_ALPHA,[ug]:i.ONE_MINUS_SRC_COLOR,[eu]:i.ONE_MINUS_SRC_ALPHA,[pg]:i.ONE_MINUS_DST_COLOR,[hg]:i.ONE_MINUS_DST_ALPHA,[gg]:i.CONSTANT_COLOR,[xg]:i.ONE_MINUS_CONSTANT_COLOR,[vg]:i.CONSTANT_ALPHA,[bg]:i.ONE_MINUS_CONSTANT_ALPHA};function G(W,Ee,te,ae,Re,Me,ut,on,An,Nt){if(W===dr){v===!0&&(Te(i.BLEND),v=!1);return}if(v===!1&&(ce(i.BLEND),v=!0),W!==ng){if(W!==g||Nt!==w){if((m!==kr||_!==kr)&&(i.blendEquation(i.FUNC_ADD),m=kr,_=kr),Nt)switch(W){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,y=null,R=null,S=null,P.set(0,0,0),L=0,g=W,w=Nt}return}Re=Re||Ee,Me=Me||te,ut=ut||ae,(Ee!==m||Re!==_)&&(i.blendEquationSeparate(et[Ee],et[Re]),m=Ee,_=Re),(te!==b||ae!==y||Me!==R||ut!==S)&&(i.blendFuncSeparate(Mt[te],Mt[ae],Mt[Me],Mt[ut]),b=te,y=ae,R=Me,S=ut),(on.equals(P)===!1||An!==L)&&(i.blendColor(on.r,on.g,on.b,An),P.copy(on),L=An),g=W,w=!1}function Vt(W,Ee){W.side===tn?Te(i.CULL_FACE):ce(i.CULL_FACE);let te=W.side===Bn;Ee&&(te=!te),it(te),W.blending===xs&&W.transparent===!1?G(dr):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let ae=W.stencilWrite;a.setTest(ae),ae&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){T!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),T=W)}function ct(W){W!==eg?(ce(i.CULL_FACE),W!==H&&(W===Vh?i.cullFace(i.BACK):W===tg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),H=W}function qe(W){W!==N&&(B&&i.lineWidth(W),N=W)}function zt(W,Ee,te){W?(ce(i.POLYGON_OFFSET_FILL),(U!==Ee||z!==te)&&(i.polygonOffset(Ee,te),U=Ee,z=te)):Te(i.POLYGON_OFFSET_FILL)}function Ye(W){W?ce(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function D(W){W===void 0&&(W=i.TEXTURE0+I-1),Q!==W&&(i.activeTexture(W),Q=W)}function A(W,Ee,te){te===void 0&&(Q===null?te=i.TEXTURE0+I-1:te=Q);let ae=se[te];ae===void 0&&(ae={type:void 0,texture:void 0},se[te]=ae),(ae.type!==W||ae.texture!==Ee)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(W,Ee||oe[W]),ae.type=W,ae.texture=Ee)}function $(){let W=se[Q];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(W){at.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),at.copy(W))}function Se(W){K.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),K.copy(W))}function xt(W,Ee){let te=l.get(Ee);te===void 0&&(te=new WeakMap,l.set(Ee,te));let ae=te.get(W);ae===void 0&&(ae=i.getUniformBlockIndex(Ee,W.name),te.set(W,ae))}function lt(W,Ee){let ae=l.get(Ee).get(W);c.get(Ee)!==ae&&(i.uniformBlockBinding(Ee,ae,W.__bindingPointIndex),c.set(Ee,ae))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,se={},d={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,b=null,y=null,_=null,R=null,S=null,P=new Ce(0,0,0),L=0,w=!1,T=null,H=null,N=null,U=null,z=null,at.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Te,bindFramebuffer:Ne,drawBuffers:Xe,useProgram:Ze,setBlending:G,setMaterial:Vt,setFlipSided:it,setCullFace:ct,setLineWidth:qe,setPolygonOffset:zt,setScissorTest:Ye,activeTexture:D,bindTexture:A,unbindTexture:$,compressedTexImage2D:F,compressedTexImage3D:Z,texImage2D:ye,texImage3D:ze,updateUBOMapping:xt,uniformBlockBinding:lt,texStorage2D:Ke,texStorage3D:de,texSubImage2D:ee,texSubImage3D:fe,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:$e,viewport:Se,reset:Xt}}function Vf(i,e,t,n){let r=Cy(n);switch(t){case pp:return i*e;case gp:return i*e;case xp:return i*e*2;case Cd:return i*e/r.components*r.byteLength;case Id:return i*e/r.components*r.byteLength;case vp:return i*e*2/r.components*r.byteLength;case Pd:return i*e*2/r.components*r.byteLength;case mp:return i*e*3/r.components*r.byteLength;case Jn:return i*e*4/r.components*r.byteLength;case Ld:return i*e*4/r.components*r.byteLength;case La:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:case mu:return Math.max(i,16)*Math.max(e,8)/4;case hu:case pu:return Math.max(i,8)*Math.max(e,8)/2;case gu:case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ua:case ku:case Hu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bp:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uu:case Bu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cy(i){switch(i){case Gi:case dp:return{byteLength:1,components:1};case bo:case hp:case Po:return{byteLength:2,components:1};case Rd:case Ad:return{byteLength:2,components:4};case Nr:case Sd:case hi:return{byteLength:4,components:1};case fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Iy(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,A){return f?new OffscreenCanvas(D,A):Fa("canvas")}function v(D,A,$){let F=1,Z=Ye(D);if((Z.width>$||Z.height>$)&&(F=$/Math.max(Z.width,Z.height)),F<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ee=Math.floor(F*Z.width),fe=Math.floor(F*Z.height);d===void 0&&(d=p(ee,fe));let he=A?p(ee,fe):d;return he.width=ee,he.height=fe,he.getContext("2d").drawImage(D,0,0,ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+fe+")."),he}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,A,$,F,Z=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=A;if(A===i.RED&&($===i.FLOAT&&(ee=i.R32F),$===i.HALF_FLOAT&&(ee=i.R16F),$===i.UNSIGNED_BYTE&&(ee=i.R8)),A===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.R8UI),$===i.UNSIGNED_SHORT&&(ee=i.R16UI),$===i.UNSIGNED_INT&&(ee=i.R32UI),$===i.BYTE&&(ee=i.R8I),$===i.SHORT&&(ee=i.R16I),$===i.INT&&(ee=i.R32I)),A===i.RG&&($===i.FLOAT&&(ee=i.RG32F),$===i.HALF_FLOAT&&(ee=i.RG16F),$===i.UNSIGNED_BYTE&&(ee=i.RG8)),A===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RG8UI),$===i.UNSIGNED_SHORT&&(ee=i.RG16UI),$===i.UNSIGNED_INT&&(ee=i.RG32UI),$===i.BYTE&&(ee=i.RG8I),$===i.SHORT&&(ee=i.RG16I),$===i.INT&&(ee=i.RG32I)),A===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),$===i.UNSIGNED_INT&&(ee=i.RGB32UI),$===i.BYTE&&(ee=i.RGB8I),$===i.SHORT&&(ee=i.RGB16I),$===i.INT&&(ee=i.RGB32I)),A===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),$===i.UNSIGNED_INT&&(ee=i.RGBA32UI),$===i.BYTE&&(ee=i.RGBA8I),$===i.SHORT&&(ee=i.RGBA16I),$===i.INT&&(ee=i.RGBA32I)),A===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),A===i.RGBA){let fe=Z?pc:wt.getTransfer(F);$===i.FLOAT&&(ee=i.RGBA32F),$===i.HALF_FLOAT&&(ee=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ee=fe===Ft?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(D,A){let $;return D?A===null||A===Nr||A===ws?$=i.DEPTH24_STENCIL8:A===hi?$=i.DEPTH32F_STENCIL8:A===bo&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Nr||A===ws?$=i.DEPTH_COMPONENT24:A===hi?$=i.DEPTH_COMPONENT32F:A===bo&&($=i.DEPTH_COMPONENT16),$}function R(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Yn&&D.minFilter!==yi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function S(D){let A=D.target;A.removeEventListener("dispose",S),L(A),A.isVideoTexture&&u.delete(A)}function P(D){let A=D.target;A.removeEventListener("dispose",P),T(A)}function L(D){let A=n.get(D);if(A.__webglInit===void 0)return;let $=D.source,F=h.get($);if(F){let Z=F[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(D),Object.keys(F).length===0&&h.delete($)}n.remove(D)}function w(D){let A=n.get(D);i.deleteTexture(A.__webglTexture);let $=D.source,F=h.get($);delete F[A.__cacheKey],o.memory.textures--}function T(D){let A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(A.__webglFramebuffer[F]))for(let Z=0;Z<A.__webglFramebuffer[F].length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[F][Z]);else i.deleteFramebuffer(A.__webglFramebuffer[F]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[F])}else{if(Array.isArray(A.__webglFramebuffer))for(let F=0;F<A.__webglFramebuffer.length;F++)i.deleteFramebuffer(A.__webglFramebuffer[F]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let F=0;F<A.__webglColorRenderbuffer.length;F++)A.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[F]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let $=D.textures;for(let F=0,Z=$.length;F<Z;F++){let ee=n.get($[F]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove($[F])}n.remove(D)}let H=0;function N(){H=0}function U(){let D=H;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),H+=1,D}function z(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function I(D,A){let $=n.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){let F=D.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,D,A);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+A)}function B(D,A){let $=n.get(D);if(D.version>0&&$.__version!==D.version){K($,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+A)}function X(D,A){let $=n.get(D);if(D.version>0&&$.__version!==D.version){K($,D,A);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+A)}function V(D,A){let $=n.get(D);if(D.version>0&&$.__version!==D.version){ie($,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+A)}let Q={[uu]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[du]:i.MIRRORED_REPEAT},se={[Yn]:i.NEAREST,[Cg]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[Ur]:i.LINEAR_MIPMAP_LINEAR},le={[kg]:i.NEVER,[zg]:i.ALWAYS,[Hg]:i.LESS,[Ep]:i.LEQUAL,[Dg]:i.EQUAL,[Ng]:i.GEQUAL,[Ug]:i.GREATER,[Bg]:i.NOTEQUAL};function Ae(D,A){if(A.type===hi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yi||A.magFilter===ml||A.magFilter===na||A.magFilter===Ur||A.minFilter===yi||A.minFilter===ml||A.minFilter===na||A.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,se[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,le[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Yn||A.minFilter!==na&&A.minFilter!==Ur||A.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function at(D,A){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",S));let F=A.source,Z=h.get(F);Z===void 0&&(Z={},h.set(F,Z));let ee=z(A);if(ee!==D.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),Z[ee].usedTimes++;let fe=Z[D.__cacheKey];fe!==void 0&&(Z[D.__cacheKey].usedTimes--,fe.usedTimes===0&&w(A)),D.__cacheKey=ee,D.__webglTexture=Z[ee].texture}return $}function K(D,A,$){let F=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(F=i.TEXTURE_3D);let Z=at(D,A),ee=A.source;t.bindTexture(F,D.__webglTexture,i.TEXTURE0+$);let fe=n.get(ee);if(ee.version!==fe.__version||Z===!0){t.activeTexture(i.TEXTURE0+$);let he=wt.getPrimaries(wt.workingColorSpace),xe=A.colorSpace===lr?null:wt.getPrimaries(A.colorSpace),Ke=A.colorSpace===lr||he===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let de=v(A.image,!1,r.maxTextureSize);de=zt(A,de);let ye=s.convert(A.format,A.colorSpace),ze=s.convert(A.type),$e=y(A.internalFormat,ye,ze,A.colorSpace,A.isVideoTexture);Ae(F,A);let Se,xt=A.mipmaps,lt=A.isVideoTexture!==!0,Xt=fe.__version===void 0||Z===!0,W=ee.dataReady,Ee=R(A,de);if(A.isDepthTexture)$e=_(A.format===Ts,A.type),Xt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,$e,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,$e,de.width,de.height,0,ye,ze,null));else if(A.isDataTexture)if(xt.length>0){lt&&Xt&&t.texStorage2D(i.TEXTURE_2D,Ee,$e,xt[0].width,xt[0].height);for(let te=0,ae=xt.length;te<ae;te++)Se=xt[te],lt?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Se.width,Se.height,ye,ze,Se.data):t.texImage2D(i.TEXTURE_2D,te,$e,Se.width,Se.height,0,ye,ze,Se.data);A.generateMipmaps=!1}else lt?(Xt&&t.texStorage2D(i.TEXTURE_2D,Ee,$e,de.width,de.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,ye,ze,de.data)):t.texImage2D(i.TEXTURE_2D,0,$e,de.width,de.height,0,ye,ze,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&Xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,$e,xt[0].width,xt[0].height,de.depth);for(let te=0,ae=xt.length;te<ae;te++)if(Se=xt[te],A.format!==Jn)if(ye!==null)if(lt){if(W)if(A.layerUpdates.size>0){let Re=Vf(Se.width,Se.height,A.format,A.type);for(let Me of A.layerUpdates){let ut=Se.data.subarray(Me*Re/Se.data.BYTES_PER_ELEMENT,(Me+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Me,Se.width,Se.height,1,ye,ut)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Se.width,Se.height,de.depth,ye,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,$e,Se.width,Se.height,de.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Se.width,Se.height,de.depth,ye,ze,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,$e,Se.width,Se.height,de.depth,0,ye,ze,Se.data)}else{lt&&Xt&&t.texStorage2D(i.TEXTURE_2D,Ee,$e,xt[0].width,xt[0].height);for(let te=0,ae=xt.length;te<ae;te++)Se=xt[te],A.format!==Jn?ye!==null?lt?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,te,$e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Se.width,Se.height,ye,ze,Se.data):t.texImage2D(i.TEXTURE_2D,te,$e,Se.width,Se.height,0,ye,ze,Se.data)}else if(A.isDataArrayTexture)if(lt){if(Xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,$e,de.width,de.height,de.depth),W)if(A.layerUpdates.size>0){let te=Vf(de.width,de.height,A.format,A.type);for(let ae of A.layerUpdates){let Re=de.data.subarray(ae*te/de.data.BYTES_PER_ELEMENT,(ae+1)*te/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,de.width,de.height,1,ye,ze,Re)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ye,ze,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,de.width,de.height,de.depth,0,ye,ze,de.data);else if(A.isData3DTexture)lt?(Xt&&t.texStorage3D(i.TEXTURE_3D,Ee,$e,de.width,de.height,de.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ye,ze,de.data)):t.texImage3D(i.TEXTURE_3D,0,$e,de.width,de.height,de.depth,0,ye,ze,de.data);else if(A.isFramebufferTexture){if(Xt)if(lt)t.texStorage2D(i.TEXTURE_2D,Ee,$e,de.width,de.height);else{let te=de.width,ae=de.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(i.TEXTURE_2D,Re,$e,te,ae,0,ye,ze,null),te>>=1,ae>>=1}}else if(xt.length>0){if(lt&&Xt){let te=Ye(xt[0]);t.texStorage2D(i.TEXTURE_2D,Ee,$e,te.width,te.height)}for(let te=0,ae=xt.length;te<ae;te++)Se=xt[te],lt?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ye,ze,Se):t.texImage2D(i.TEXTURE_2D,te,$e,ye,ze,Se);A.generateMipmaps=!1}else if(lt){if(Xt){let te=Ye(de);t.texStorage2D(i.TEXTURE_2D,Ee,$e,te.width,te.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ze,de)}else t.texImage2D(i.TEXTURE_2D,0,$e,ye,ze,de);g(A)&&m(F),fe.__version=ee.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ie(D,A,$){if(A.image.length!==6)return;let F=at(D,A),Z=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+$);let ee=n.get(Z);if(Z.version!==ee.__version||F===!0){t.activeTexture(i.TEXTURE0+$);let fe=wt.getPrimaries(wt.workingColorSpace),he=A.colorSpace===lr?null:wt.getPrimaries(A.colorSpace),xe=A.colorSpace===lr||fe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,de=A.image[0]&&A.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!Ke&&!de?ye[ae]=v(A.image[ae],!0,r.maxCubemapSize):ye[ae]=de?A.image[ae].image:A.image[ae],ye[ae]=zt(A,ye[ae]);let ze=ye[0],$e=s.convert(A.format,A.colorSpace),Se=s.convert(A.type),xt=y(A.internalFormat,$e,Se,A.colorSpace),lt=A.isVideoTexture!==!0,Xt=ee.__version===void 0||F===!0,W=Z.dataReady,Ee=R(A,ze);Ae(i.TEXTURE_CUBE_MAP,A);let te;if(Ke){lt&&Xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,xt,ze.width,ze.height);for(let ae=0;ae<6;ae++){te=ye[ae].mipmaps;for(let Re=0;Re<te.length;Re++){let Me=te[Re];A.format!==Jn?$e!==null?lt?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,0,0,Me.width,Me.height,$e,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,xt,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,0,0,Me.width,Me.height,$e,Se,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,xt,Me.width,Me.height,0,$e,Se,Me.data)}}}else{if(te=A.mipmaps,lt&&Xt){te.length>0&&Ee++;let ae=Ye(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,xt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(de){lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,$e,Se,ye[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,xt,ye[ae].width,ye[ae].height,0,$e,Se,ye[ae].data);for(let Re=0;Re<te.length;Re++){let ut=te[Re].image[ae].image;lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,0,0,ut.width,ut.height,$e,Se,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,xt,ut.width,ut.height,0,$e,Se,ut.data)}}else{lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,$e,Se,ye[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,xt,$e,Se,ye[ae]);for(let Re=0;Re<te.length;Re++){let Me=te[Re];lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,0,0,$e,Se,Me.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,xt,$e,Se,Me.image[ae])}}}g(A)&&m(i.TEXTURE_CUBE_MAP),ee.__version=Z.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function oe(D,A,$,F,Z,ee){let fe=s.convert($.format,$.colorSpace),he=s.convert($.type),xe=y($.internalFormat,fe,he,$.colorSpace),Ke=n.get(A),de=n.get($);if(de.__renderTarget=A,!Ke.__hasExternalTextures){let ye=Math.max(1,A.width>>ee),ze=Math.max(1,A.height>>ee);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,xe,ye,ze,A.depth,0,fe,he,null):t.texImage2D(Z,ee,xe,ye,ze,0,fe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,Z,de.__webglTexture,0,it(A)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,Z,de.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(D,A,$){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){let F=A.depthTexture,Z=F&&F.isDepthTexture?F.type:null,ee=_(A.stencilBuffer,Z),fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=it(A);ct(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ee,A.width,A.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ee,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,D)}else{let F=A.textures;for(let Z=0;Z<F.length;Z++){let ee=F[Z],fe=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),xe=y(ee.internalFormat,fe,he,ee.colorSpace),Ke=it(A);$&&ct(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,xe,A.width,A.height):ct(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,xe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,xe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(A.depthTexture);F.__renderTarget=A,(!F.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);let Z=F.__webglTexture,ee=it(A);if(A.depthTexture.format===vs)ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(A.depthTexture.format===Ts)ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ne(D){let A=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let F=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),F){let Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,F.removeEventListener("dispose",Z)};F.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=F}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(A.__webglFramebuffer,D)}else if($){A.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[F]),A.__webglDepthbuffer[F]===void 0)A.__webglDepthbuffer[F]=i.createRenderbuffer(),ce(A.__webglDepthbuffer[F],D,!1);else{let Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ce(A.__webglDepthbuffer,D,!1);else{let F=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,A,$){let F=n.get(D);A!==void 0&&oe(F.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Ne(D)}function Ze(D){let A=D.texture,$=n.get(D),F=n.get(A);D.addEventListener("dispose",P);let Z=D.textures,ee=D.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=A.version,o.memory.textures++),ee){$.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[he]=[];for(let xe=0;xe<A.mipmaps.length;xe++)$.__webglFramebuffer[he][xe]=i.createFramebuffer()}else $.__webglFramebuffer[he]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)$.__webglFramebuffer[he]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(fe)for(let he=0,xe=Z.length;he<xe;he++){let Ke=n.get(Z[he]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ct(D)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let he=0;he<Z.length;he++){let xe=Z[he];$.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[he]);let Ke=s.convert(xe.format,xe.colorSpace),de=s.convert(xe.type),ye=y(xe.internalFormat,Ke,de,xe.colorSpace,D.isXRRenderTarget===!0),ze=it(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ye,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,$.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ce($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)oe($.__webglFramebuffer[he][xe],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else oe($.__webglFramebuffer[he],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(A)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let he=0,xe=Z.length;he<xe;he++){let Ke=Z[he],de=n.get(Ke);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Ae(i.TEXTURE_2D,Ke),oe($.__webglFramebuffer,D,Ke,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),g(Ke)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,F.__webglTexture),Ae(he,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)oe($.__webglFramebuffer[xe],D,A,i.COLOR_ATTACHMENT0,he,xe);else oe($.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,he,0);g(A)&&m(he),t.unbindTexture()}D.depthBuffer&&Ne(D)}function et(D){let A=D.textures;for(let $=0,F=A.length;$<F;$++){let Z=A[$];if(g(Z)){let ee=b(D),fe=n.get(Z).__webglTexture;t.bindTexture(ee,fe),m(ee),t.unbindTexture()}}}let Mt=[],G=[];function Vt(D){if(D.samples>0){if(ct(D)===!1){let A=D.textures,$=D.width,F=D.height,Z=i.COLOR_BUFFER_BIT,ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(D),he=A.length>1;if(he)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let Ke=n.get(A[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,$,F,0,0,$,F,Z,i.NEAREST),c===!0&&(Mt.length=0,G.length=0,Mt.push(i.COLOR_ATTACHMENT0+xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Mt.push(ee),G.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let Ke=n.get(A[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function it(D){return Math.min(r.maxSamples,D.samples)}function ct(D){let A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qe(D){let A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function zt(D,A){let $=D.colorSpace,F=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Ps&&$!==lr&&(wt.getTransfer($)===Ft?(F!==Jn||Z!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Xe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ct}function Py(i,e){function t(n,r=lr){let s,o=wt.getTransfer(r);if(n===Gi)return i.UNSIGNED_BYTE;if(n===Rd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ad)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dp)return i.BYTE;if(n===hp)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===Sd)return i.INT;if(n===Nr)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===Po)return i.HALF_FLOAT;if(n===pp)return i.ALPHA;if(n===mp)return i.RGB;if(n===Jn)return i.RGBA;if(n===gp)return i.LUMINANCE;if(n===xp)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Cd)return i.RED;if(n===Id)return i.RED_INTEGER;if(n===vp)return i.RG;if(n===Pd)return i.RG_INTEGER;if(n===Ld)return i.RGBA_INTEGER;if(n===La||n===ka||n===Ha||n===Da)if(o===Ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hu||n===fu||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===xu||n===vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===xu)return o===Ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bu||n===yu||n===Eu||n===_u||n===Mu||n===wu||n===Tu||n===Su||n===Ru||n===Au||n===Cu||n===Iu||n===Pu||n===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ru)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Au)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Iu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lu)return o===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===ku||n===Hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ua)return o===Ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bp||n===Du||n===Uu||n===Bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qu=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_e=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ly={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`,ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zn({vertexShader:ky,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends fr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null,v=new ed,g=t.getContextAttributes(),m=null,b=null,y=[],_=[],R=new pe,S=null,P=new yn;P.viewport=new Et;let L=new yn;L.viewport=new Et;let w=[P,L],T=new Qu,H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new go,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new go,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new go,y[K]=ie),ie.getHandSpace()};function U(K){let ie=_.indexOf(K.inputSource);if(ie===-1)return;let oe=y[ie];oe!==void 0&&(oe.update(K.inputSource,K.frame,l||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",I);for(let K=0;K<y.length;K++){let ie=_[K];ie!==null&&(_[K]=null,y[K].disconnect(ie))}H=null,N=null,v.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,b=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Wi(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,oe=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?Ts:vs,oe=g.stencil?ws:Nr);let Te={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Wi(h.textureWidth,h.textureHeight,{format:Jn,type:Gi,depthTexture:new Za(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function I(K){for(let ie=0;ie<K.removed.length;ie++){let oe=K.removed[ie],ce=_.indexOf(oe);ce>=0&&(_[ce]=null,y[ce].disconnect(oe))}for(let ie=0;ie<K.added.length;ie++){let oe=K.added[ie],ce=_.indexOf(oe);if(ce===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=_.length){_.push(oe),ce=Ne;break}else if(_[Ne]===null){_[Ne]=oe,ce=Ne;break}if(ce===-1)break}let Te=y[ce];Te&&Te.connect(oe)}}let B=new x,X=new x;function V(K,ie,oe){B.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);let ce=B.distanceTo(X),Te=ie.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,Xe=Te[14]/(Te[10]-1),Ze=Te[14]/(Te[10]+1),et=(Te[9]+1)/Te[5],Mt=(Te[9]-1)/Te[5],G=(Te[8]-1)/Te[0],Vt=(Ne[8]+1)/Ne[0],it=Xe*G,ct=Xe*Vt,qe=ce/(-G+Vt),zt=qe*-G;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(zt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Ye=Xe+qe,D=Ze+qe,A=it-zt,$=ct+(ce-zt),F=et*Ze/D*Ye,Z=Mt*Ze/D*Ye;K.projectionMatrix.makePerspective(A,$,F,Z,Ye,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,oe=K.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),T.near=L.near=P.near=ie,T.far=L.far=P.far=oe,(H!==T.near||N!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,N=T.far),P.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,T.layers.mask=P.layers.mask|L.layers.mask;let ce=K.parent,Te=T.cameras;Q(T,ce);for(let Ne=0;Ne<Te.length;Ne++)Q(Te[Ne],ce);Te.length===2?V(T,P,L):T.projectionMatrix.copy(P.projectionMatrix),se(K,T,ce)};function se(K,ie,oe){oe===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let le=null;function Ae(K,ie){if(u=ie.getViewerPose(l||o),p=ie,u!==null){let oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ce=!1;oe.length!==T.cameras.length&&(T.cameras.length=0,ce=!0);for(let Ne=0;Ne<oe.length;Ne++){let Xe=oe[Ne],Ze=null;if(f!==null)Ze=f.getViewport(Xe);else{let Mt=d.getViewSubImage(h,Xe);Ze=Mt.viewport,Ne===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(b))}let et=w[Ne];et===void 0&&(et=new yn,et.layers.enable(Ne),et.viewport=new Et,w[Ne]=et),et.matrix.fromArray(Xe.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Xe.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ne===0&&(T.matrix.copy(et.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ce===!0&&T.cameras.push(et)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Ne=d.getDepthInformation(oe[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let oe=0;oe<y.length;oe++){let ce=_[oe],Te=y[oe];ce!==null&&Te!==void 0&&Te.update(ce,ie,l||o)}le&&le(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}let at=new Tp;at.setAnimationLoop(Ae),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}},Pr=new en,Dy=new be;function Uy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,wp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,b,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Bn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Bn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),y=b.envMap,_=b.envMapRotation;y&&(g.envMap.value=y,Pr.copy(_),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(Pr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function By(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let _=y.program;n.uniformBlockBinding(b,_)}function l(b,y){let _=r[b.id];_===void 0&&(p(b),_=u(b),r[b.id]=_,b.addEventListener("dispose",g));let R=y.program;n.updateUBOMapping(b,R);let S=e.render.frame;s[b.id]!==S&&(h(b),s[b.id]=S)}function u(b){let y=d();b.__bindingPointIndex=y;let _=i.createBuffer(),R=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let y=r[b.id],_=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,P=_.length;S<P;S++){let L=Array.isArray(_[S])?_[S]:[_[S]];for(let w=0,T=L.length;w<T;w++){let H=L[w];if(f(H,S,w,R)===!0){let N=H.__offset,U=Array.isArray(H.value)?H.value:[H.value],z=0;for(let I=0;I<U.length;I++){let B=U[I],X=v(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+z,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,_,R){let S=b.value,P=y+"_"+_;if(R[P]===void 0)return typeof S=="number"||typeof S=="boolean"?R[P]=S:R[P]=S.clone(),!0;{let L=R[P];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return R[P]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function p(b){let y=b.uniforms,_=0,R=16;for(let P=0,L=y.length;P<L;P++){let w=Array.isArray(y[P])?y[P]:[y[P]];for(let T=0,H=w.length;T<H;T++){let N=w[T],U=Array.isArray(N.value)?N.value:[N.value];for(let z=0,I=U.length;z<I;z++){let B=U[z],X=v(B),V=_%R,Q=V%X.boundary,se=V+Q;_+=Q,se!==0&&R-se<X.storage&&(_+=R-se),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=X.storage}}}let S=_%R;return S>0&&(_+=R-S),b.__size=_,b.__cache={},this}function v(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var _o=class{constructor(e={}){let{canvas:t=Og(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=hr,this.toneMappingExposure=1;let _=this,R=!1,S=0,P=0,L=null,w=-1,T=null,H=new Et,N=new Et,U=null,z=new Ce(0),I=0,B=t.width,X=t.height,V=1,Q=null,se=null,le=new Et(0,0,B,X),Ae=new Et(0,0,B,X),at=!1,K=new Eo,ie=!1,oe=!1,ce=new be,Te=new be,Ne=new x,Xe=new Et,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Mt(){return L===null?V:1}let G=n;function Vt(k,q){return t.getContext(k,q)}try{let k={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Md}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Me,!1),G===null){let q="webgl2";if(G=Vt(q,k),G===null)throw Vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let it,ct,qe,zt,Ye,D,A,$,F,Z,ee,fe,he,xe,Ke,de,ye,ze,$e,Se,xt,lt,Xt,W;function Ee(){it=new Qv(G),it.init(),lt=new Py(G,it),ct=new Yv(G,it,e,lt),qe=new Ay(G,it),ct.reverseDepthBuffer&&h&&qe.buffers.depth.setReversed(!0),zt=new nb(G),Ye=new my,D=new Iy(G,it,qe,Ye,ct,lt,zt),A=new Zv(_),$=new jv(_),F=new lx(G),Xt=new Xv(G,F),Z=new eb(G,F,zt,Xt),ee=new rb(G,Z,F,zt),$e=new ib(G,ct,D),de=new $v(Ye),fe=new py(_,A,$,it,ct,Xt,de),he=new Uy(_,Ye),xe=new xy,Ke=new My(it),ze=new Wv(_,A,$,qe,ee,f,c),ye=new Sy(_,ee,ct),W=new By(G,zt,ct,qe),Se=new qv(G,it,zt),xt=new tb(G,it,zt),zt.programs=fe.programs,_.capabilities=ct,_.extensions=it,_.properties=Ye,_.renderLists=xe,_.shadowMap=ye,_.state=qe,_.info=zt}Ee();let te=new td(_,G);this.xr=te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let k=it.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=it.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(k){k!==void 0&&(V=k,this.setSize(B,X,!1))},this.getSize=function(k){return k.set(B,X)},this.setSize=function(k,q,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=k,X=q,t.width=Math.floor(k*V),t.height=Math.floor(q*V),J===!0&&(t.style.width=k+"px",t.style.height=q+"px"),this.setViewport(0,0,k,q)},this.getDrawingBufferSize=function(k){return k.set(B*V,X*V).floor()},this.setDrawingBufferSize=function(k,q,J){B=k,X=q,V=J,t.width=Math.floor(k*J),t.height=Math.floor(q*J),this.setViewport(0,0,k,q)},this.getCurrentViewport=function(k){return k.copy(H)},this.getViewport=function(k){return k.copy(le)},this.setViewport=function(k,q,J,j){k.isVector4?le.set(k.x,k.y,k.z,k.w):le.set(k,q,J,j),qe.viewport(H.copy(le).multiplyScalar(V).round())},this.getScissor=function(k){return k.copy(Ae)},this.setScissor=function(k,q,J,j){k.isVector4?Ae.set(k.x,k.y,k.z,k.w):Ae.set(k,q,J,j),qe.scissor(N.copy(Ae).multiplyScalar(V).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(k){qe.setScissorTest(at=k)},this.setOpaqueSort=function(k){Q=k},this.setTransparentSort=function(k){se=k},this.getClearColor=function(k){return k.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(k=!0,q=!0,J=!0){let j=0;if(k){let Y=!1;if(L!==null){let ge=L.texture.format;Y=ge===Ld||ge===Pd||ge===Id}if(Y){let ge=L.texture.type,we=ge===Gi||ge===Nr||ge===bo||ge===ws||ge===Rd||ge===Ad,ke=ze.getClearColor(),He=ze.getClearAlpha(),st=ke.r,dt=ke.g,De=ke.b;we?(p[0]=st,p[1]=dt,p[2]=De,p[3]=He,G.clearBufferuiv(G.COLOR,0,p)):(v[0]=st,v[1]=dt,v[2]=De,v[3]=He,G.clearBufferiv(G.COLOR,0,v))}else j|=G.COLOR_BUFFER_BIT}q&&(j|=G.DEPTH_BUFFER_BIT),J&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),xe.dispose(),Ke.dispose(),Ye.dispose(),A.dispose(),$.dispose(),ee.dispose(),Xt.dispose(),W.dispose(),fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",Hh),te.removeEventListener("sessionend",Dh),Tr.stop()};function ae(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let k=zt.autoReset,q=ye.enabled,J=ye.autoUpdate,j=ye.needsUpdate,Y=ye.type;Ee(),zt.autoReset=k,ye.enabled=q,ye.autoUpdate=J,ye.needsUpdate=j,ye.type=Y}function Me(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ut(k){let q=k.target;q.removeEventListener("dispose",ut),on(q)}function on(k){An(k),Ye.remove(k)}function An(k){let q=Ye.get(k).programs;q!==void 0&&(q.forEach(function(J){fe.releaseProgram(J)}),k.isShaderMaterial&&fe.releaseShaderCache(k))}this.renderBufferDirect=function(k,q,J,j,Y,ge){q===null&&(q=Ze);let we=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=Jm(k,q,J,j,Y);qe.setMaterial(j,we);let He=J.index,st=1;if(j.wireframe===!0){if(He=Z.getWireframeAttribute(J),He===void 0)return;st=2}let dt=J.drawRange,De=J.attributes.position,Tt=dt.start*st,qt=(dt.start+dt.count)*st;ge!==null&&(Tt=Math.max(Tt,ge.start*st),qt=Math.min(qt,(ge.start+ge.count)*st)),He!==null?(Tt=Math.max(Tt,0),qt=Math.min(qt,He.count)):De!=null&&(Tt=Math.max(Tt,0),qt=Math.min(qt,De.count));let Zt=qt-Tt;if(Zt<0||Zt===1/0)return;Xt.setup(Y,j,ke,J,He);let Dn,kt=Se;if(He!==null&&(Dn=F.get(He),kt=xt,kt.setIndex(Dn)),Y.isMesh)j.wireframe===!0?(qe.setLineWidth(j.wireframeLinewidth*Mt()),kt.setMode(G.LINES)):kt.setMode(G.TRIANGLES);else if(Y.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),qe.setLineWidth(Be*Mt()),Y.isLineSegments?kt.setMode(G.LINES):Y.isLineLoop?kt.setMode(G.LINE_LOOP):kt.setMode(G.LINE_STRIP)}else Y.isPoints?kt.setMode(G.POINTS):Y.isSprite&&kt.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)kt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))kt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Be=Y._multiDrawStarts,ki=Y._multiDrawCounts,Ht=Y._multiDrawCount,ci=He?F.get(He).bytesPerElement:1,es=Ye.get(j).currentProgram.getUniforms();for(let Wn=0;Wn<Ht;Wn++)es.setValue(G,"_gl_DrawID",Wn),kt.render(Be[Wn]/ci,ki[Wn])}else if(Y.isInstancedMesh)kt.renderInstances(Tt,Zt,Y.count);else if(J.isInstancedBufferGeometry){let Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ki=Math.min(J.instanceCount,Be);kt.renderInstances(Tt,Zt,ki)}else kt.render(Tt,Zt)};function Nt(k,q,J){k.transparent===!0&&k.side===tn&&k.forceSinglePass===!1?(k.side=Bn,k.needsUpdate=!0,ta(k,q,J),k.side=Ei,k.needsUpdate=!0,ta(k,q,J),k.side=tn):ta(k,q,J)}this.compile=function(k,q,J=null){J===null&&(J=k),m=Ke.get(J),m.init(q),y.push(m),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),k!==J&&k.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();let j=new Set;return k.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ge=Y.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let ke=ge[we];Nt(ke,J,Y),j.add(ke)}else Nt(ge,J,Y),j.add(ge)}),y.pop(),m=null,j},this.compileAsync=function(k,q,J=null){let j=this.compile(k,q,J);return new Promise(Y=>{function ge(){if(j.forEach(function(we){Ye.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){Y(k);return}setTimeout(ge,10)}it.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ai=null;function Li(k){ai&&ai(k)}function Hh(){Tr.stop()}function Dh(){Tr.start()}let Tr=new Tp;Tr.setAnimationLoop(Li),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(k){ai=k,te.setAnimationLoop(k),k===null?Tr.stop():Tr.start()},te.addEventListener("sessionstart",Hh),te.addEventListener("sessionend",Dh),this.render=function(k,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(q),q=te.getCamera()),k.isScene===!0&&k.onBeforeRender(_,k,q,L),m=Ke.get(k,y.length),m.init(q),y.push(m),Te.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(Te),oe=this.localClippingEnabled,ie=de.init(this.clippingPlanes,oe),g=xe.get(k,b.length),g.init(),b.push(g),te.enabled===!0&&te.isPresenting===!0){let ge=_.xr.getDepthSensingMesh();ge!==null&&pl(ge,q,-1/0,_.sortObjects)}pl(k,q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Q,se),et=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,et&&ze.addToRenderList(g,k),this.info.render.frame++,ie===!0&&de.beginShadows();let J=m.state.shadowsArray;ye.render(J,k,q),ie===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,Y=g.transmissive;if(m.setupLights(),q.isArrayCamera){let ge=q.cameras;if(Y.length>0)for(let we=0,ke=ge.length;we<ke;we++){let He=ge[we];Bh(j,Y,k,He)}et&&ze.render(k);for(let we=0,ke=ge.length;we<ke;we++){let He=ge[we];Uh(g,k,He,He.viewport)}}else Y.length>0&&Bh(j,Y,k,q),et&&ze.render(k),Uh(g,k,q);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),k.isScene===!0&&k.onAfterRender(_,k,q),Xt.resetDefaultState(),w=-1,T=null,y.pop(),y.length>0?(m=y[y.length-1],ie===!0&&de.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function pl(k,q,J,j){if(k.visible===!1)return;if(k.layers.test(q.layers)){if(k.isGroup)J=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(q);else if(k.isLight)m.pushLight(k),k.castShadow&&m.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||K.intersectsSprite(k)){j&&Xe.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Te);let we=ee.update(k),ke=k.material;ke.visible&&g.push(k,we,ke,J,Xe.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||K.intersectsObject(k))){let we=ee.update(k),ke=k.material;if(j&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),Xe.copy(k.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Xe.copy(we.boundingSphere.center)),Xe.applyMatrix4(k.matrixWorld).applyMatrix4(Te)),Array.isArray(ke)){let He=we.groups;for(let st=0,dt=He.length;st<dt;st++){let De=He[st],Tt=ke[De.materialIndex];Tt&&Tt.visible&&g.push(k,we,Tt,J,Xe.z,De)}}else ke.visible&&g.push(k,we,ke,J,Xe.z,null)}}let ge=k.children;for(let we=0,ke=ge.length;we<ke;we++)pl(ge[we],q,J,j)}function Uh(k,q,J,j){let Y=k.opaque,ge=k.transmissive,we=k.transparent;m.setupLightsView(J),ie===!0&&de.setGlobalState(_.clippingPlanes,J),j&&qe.viewport(H.copy(j)),Y.length>0&&ea(Y,q,J),ge.length>0&&ea(ge,q,J),we.length>0&&ea(we,q,J),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Bh(k,q,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Wi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Po:Gi,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let ge=m.state.transmissionRenderTarget[j.id],we=j.viewport||H;ge.setSize(we.z,we.w);let ke=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(z),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),et&&ze.render(J);let He=_.toneMapping;_.toneMapping=hr;let st=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ie===!0&&de.setGlobalState(_.clippingPlanes,j),ea(k,J,j),D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge),it.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let De=0,Tt=q.length;De<Tt;De++){let qt=q[De],Zt=qt.object,Dn=qt.geometry,kt=qt.material,Be=qt.group;if(kt.side===tn&&Zt.layers.test(j.layers)){let ki=kt.side;kt.side=Bn,kt.needsUpdate=!0,Nh(Zt,J,j,Dn,kt,Be),kt.side=ki,kt.needsUpdate=!0,dt=!0}}dt===!0&&(D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge))}_.setRenderTarget(ke),_.setClearColor(z,I),st!==void 0&&(j.viewport=st),_.toneMapping=He}function ea(k,q,J){let j=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,ge=k.length;Y<ge;Y++){let we=k[Y],ke=we.object,He=we.geometry,st=j===null?we.material:j,dt=we.group;ke.layers.test(J.layers)&&Nh(ke,q,J,He,st,dt)}}function Nh(k,q,J,j,Y,ge){k.onBeforeRender(_,q,J,j,Y,ge),k.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),Y.onBeforeRender(_,q,J,j,k,ge),Y.transparent===!0&&Y.side===tn&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,_.renderBufferDirect(J,q,j,Y,k,ge),Y.side=Ei,Y.needsUpdate=!0,_.renderBufferDirect(J,q,j,Y,k,ge),Y.side=tn):_.renderBufferDirect(J,q,j,Y,k,ge),k.onAfterRender(_,q,J,j,Y,ge)}function ta(k,q,J){q.isScene!==!0&&(q=Ze);let j=Ye.get(k),Y=m.state.lights,ge=m.state.shadowsArray,we=Y.state.version,ke=fe.getParameters(k,Y.state,ge,q,J),He=fe.getProgramCacheKey(ke),st=j.programs;j.environment=k.isMeshStandardMaterial?q.environment:null,j.fog=q.fog,j.envMap=(k.isMeshStandardMaterial?$:A).get(k.envMap||j.environment),j.envMapRotation=j.environment!==null&&k.envMap===null?q.environmentRotation:k.envMapRotation,st===void 0&&(k.addEventListener("dispose",ut),st=new Map,j.programs=st);let dt=st.get(He);if(dt!==void 0){if(j.currentProgram===dt&&j.lightsStateVersion===we)return Fh(k,ke),dt}else ke.uniforms=fe.getUniforms(k),k.onBeforeCompile(ke,_),dt=fe.acquireProgram(ke,He),st.set(He,dt),j.uniforms=ke.uniforms;let De=j.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(De.clippingPlanes=de.uniform),Fh(k,ke),j.needsLights=Qm(k),j.lightsStateVersion=we,j.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=dt,j.uniformsList=null,dt}function zh(k){if(k.uniformsList===null){let q=k.currentProgram.getUniforms();k.uniformsList=ys.seqWithValue(q.seq,k.uniforms)}return k.uniformsList}function Fh(k,q){let J=Ye.get(k);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function Jm(k,q,J,j,Y){q.isScene!==!0&&(q=Ze),D.resetTextureUnits();let ge=q.fog,we=j.isMeshStandardMaterial?q.environment:null,ke=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ps,He=(j.isMeshStandardMaterial?$:A).get(j.envMap||we),st=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,dt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!J.morphAttributes.position,Tt=!!J.morphAttributes.normal,qt=!!J.morphAttributes.color,Zt=hr;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Zt=_.toneMapping);let Dn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,kt=Dn!==void 0?Dn.length:0,Be=Ye.get(j),ki=m.state.lights;if(ie===!0&&(oe===!0||k!==T)){let Zn=k===T&&j.id===w;de.setState(j,k,Zn)}let Ht=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ki.state.version||Be.outputColorSpace!==ke||Y.isBatchedMesh&&Be.batching===!1||!Y.isBatchedMesh&&Be.batching===!0||Y.isBatchedMesh&&Be.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Be.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Be.instancing===!1||!Y.isInstancedMesh&&Be.instancing===!0||Y.isSkinnedMesh&&Be.skinning===!1||!Y.isSkinnedMesh&&Be.skinning===!0||Y.isInstancedMesh&&Be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Be.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Be.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Be.instancingMorph===!1&&Y.morphTexture!==null||Be.envMap!==He||j.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==st||Be.vertexTangents!==dt||Be.morphTargets!==De||Be.morphNormals!==Tt||Be.morphColors!==qt||Be.toneMapping!==Zt||Be.morphTargetsCount!==kt)&&(Ht=!0):(Ht=!0,Be.__version=j.version);let ci=Be.currentProgram;Ht===!0&&(ci=ta(j,q,Y));let es=!1,Wn=!1,no=!1,Kt=ci.getUniforms(),vi=Be.uniforms;if(qe.useProgram(ci.program)&&(es=!0,Wn=!0,no=!0),j.id!==w&&(w=j.id,Wn=!0),es||T!==k){qe.buffers.depth.getReversed()?(ce.copy(k.projectionMatrix),Gg(ce),Wg(ce),Kt.setValue(G,"projectionMatrix",ce)):Kt.setValue(G,"projectionMatrix",k.projectionMatrix),Kt.setValue(G,"viewMatrix",k.matrixWorldInverse);let tr=Kt.map.cameraPosition;tr!==void 0&&tr.setValue(G,Ne.setFromMatrixPosition(k.matrixWorld)),ct.logarithmicDepthBuffer&&Kt.setValue(G,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Kt.setValue(G,"isOrthographic",k.isOrthographicCamera===!0),T!==k&&(T=k,Wn=!0,no=!0)}if(Y.isSkinnedMesh){Kt.setOptional(G,Y,"bindMatrix"),Kt.setOptional(G,Y,"bindMatrixInverse");let Zn=Y.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Kt.setValue(G,"boneTexture",Zn.boneTexture,D))}Y.isBatchedMesh&&(Kt.setOptional(G,Y,"batchingTexture"),Kt.setValue(G,"batchingTexture",Y._matricesTexture,D),Kt.setOptional(G,Y,"batchingIdTexture"),Kt.setValue(G,"batchingIdTexture",Y._indirectTexture,D),Kt.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Kt.setValue(G,"batchingColorTexture",Y._colorsTexture,D));let io=J.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&$e.update(Y,J,ci),(Wn||Be.receiveShadow!==Y.receiveShadow)&&(Be.receiveShadow=Y.receiveShadow,Kt.setValue(G,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vi.envMap.value=He,vi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&q.environment!==null&&(vi.envMapIntensity.value=q.environmentIntensity),Wn&&(Kt.setValue(G,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&jm(vi,no),ge&&j.fog===!0&&he.refreshFogUniforms(vi,ge),he.refreshMaterialUniforms(vi,j,V,X,m.state.transmissionRenderTarget[k.id]),ys.upload(G,zh(Be),vi,D)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ys.upload(G,zh(Be),vi,D),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Kt.setValue(G,"center",Y.center),Kt.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Kt.setValue(G,"normalMatrix",Y.normalMatrix),Kt.setValue(G,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Zn=j.uniformsGroups;for(let tr=0,nr=Zn.length;tr<nr;tr++){let Oh=Zn[tr];W.update(Oh,ci),W.bind(Oh,ci)}}return ci}function jm(k,q){k.ambientLightColor.needsUpdate=q,k.lightProbe.needsUpdate=q,k.directionalLights.needsUpdate=q,k.directionalLightShadows.needsUpdate=q,k.pointLights.needsUpdate=q,k.pointLightShadows.needsUpdate=q,k.spotLights.needsUpdate=q,k.spotLightShadows.needsUpdate=q,k.rectAreaLights.needsUpdate=q,k.hemisphereLights.needsUpdate=q}function Qm(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(k,q,J){Ye.get(k.texture).__webglTexture=q,Ye.get(k.depthTexture).__webglTexture=J;let j=Ye.get(k);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(k,q){let J=Ye.get(k);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(k,q=0,J=0){L=k,S=q,P=J;let j=!0,Y=null,ge=!1,we=!1;if(k){let He=Ye.get(k);if(He.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(G.FRAMEBUFFER,null),j=!1;else if(He.__webglFramebuffer===void 0)D.setupRenderTarget(k);else if(He.__hasExternalTextures)D.rebindTextures(k,Ye.get(k.texture).__webglTexture,Ye.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let De=k.depthTexture;if(He.__boundDepthTexture!==De){if(De!==null&&Ye.has(De)&&(k.width!==De.image.width||k.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(k)}}let st=k.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(we=!0);let dt=Ye.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(dt[q])?Y=dt[q][J]:Y=dt[q],ge=!0):k.samples>0&&D.useMultisampledRTT(k)===!1?Y=Ye.get(k).__webglMultisampledFramebuffer:Array.isArray(dt)?Y=dt[J]:Y=dt,H.copy(k.viewport),N.copy(k.scissor),U=k.scissorTest}else H.copy(le).multiplyScalar(V).floor(),N.copy(Ae).multiplyScalar(V).floor(),U=at;if(qe.bindFramebuffer(G.FRAMEBUFFER,Y)&&j&&qe.drawBuffers(k,Y),qe.viewport(H),qe.scissor(N),qe.setScissorTest(U),ge){let He=Ye.get(k.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,J)}else if(we){let He=Ye.get(k.texture),st=q||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.__webglTexture,J||0,st)}w=-1},this.readRenderTargetPixels=function(k,q,J,j,Y,ge,we){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ye.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){qe.bindFramebuffer(G.FRAMEBUFFER,ke);try{let He=k.texture,st=He.format,dt=He.type;if(!ct.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=k.width-j&&J>=0&&J<=k.height-Y&&G.readPixels(q,J,j,Y,lt.convert(st),lt.convert(dt),ge)}finally{let He=L!==null?Ye.get(L).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(k,q,J,j,Y,ge,we){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ye.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){let He=k.texture,st=He.format,dt=He.type;if(!ct.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=k.width-j&&J>=0&&J<=k.height-Y){qe.bindFramebuffer(G.FRAMEBUFFER,ke);let De=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,De),G.bufferData(G.PIXEL_PACK_BUFFER,ge.byteLength,G.STREAM_READ),G.readPixels(q,J,j,Y,lt.convert(st),lt.convert(dt),0);let Tt=L!==null?Ye.get(L).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,Tt);let qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Vg(G,qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,De),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ge),G.deleteBuffer(De),G.deleteSync(qt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(k,q=null,J=0){k.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,k=arguments[1]);let j=Math.pow(2,-J),Y=Math.floor(k.image.width*j),ge=Math.floor(k.image.height*j),we=q!==null?q.x:0,ke=q!==null?q.y:0;D.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,we,ke,Y,ge),qe.unbindTexture()},this.copyTextureToTexture=function(k,q,J=null,j=null,Y=0){k.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,k=arguments[1],q=arguments[2],Y=arguments[3]||0,J=null);let ge,we,ke,He,st,dt,De,Tt,qt,Zt=k.isCompressedTexture?k.mipmaps[Y]:k.image;J!==null?(ge=J.max.x-J.min.x,we=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,st=J.min.y,dt=J.isBox3?J.min.z:0):(ge=Zt.width,we=Zt.height,ke=Zt.depth||1,He=0,st=0,dt=0),j!==null?(De=j.x,Tt=j.y,qt=j.z):(De=0,Tt=0,qt=0);let Dn=lt.convert(q.format),kt=lt.convert(q.type),Be;q.isData3DTexture?(D.setTexture3D(q,0),Be=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(D.setTexture2DArray(q,0),Be=G.TEXTURE_2D_ARRAY):(D.setTexture2D(q,0),Be=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let ki=G.getParameter(G.UNPACK_ROW_LENGTH),Ht=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ci=G.getParameter(G.UNPACK_SKIP_PIXELS),es=G.getParameter(G.UNPACK_SKIP_ROWS),Wn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,He),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),G.pixelStorei(G.UNPACK_SKIP_IMAGES,dt);let no=k.isDataArrayTexture||k.isData3DTexture,Kt=q.isDataArrayTexture||q.isData3DTexture;if(k.isRenderTargetTexture||k.isDepthTexture){let vi=Ye.get(k),io=Ye.get(q),Zn=Ye.get(vi.__renderTarget),tr=Ye.get(io.__renderTarget);qe.bindFramebuffer(G.READ_FRAMEBUFFER,Zn.__webglFramebuffer),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let nr=0;nr<ke;nr++)no&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.get(k).__webglTexture,Y,dt+nr),k.isDepthTexture?(Kt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,Y,qt+nr),G.blitFramebuffer(He,st,ge,we,De,Tt,ge,we,G.DEPTH_BUFFER_BIT,G.NEAREST)):Kt?G.copyTexSubImage3D(Be,Y,De,Tt,qt+nr,He,st,ge,we):G.copyTexSubImage2D(Be,Y,De,Tt,qt+nr,He,st,ge,we);qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Kt?k.isDataTexture||k.isData3DTexture?G.texSubImage3D(Be,Y,De,Tt,qt,ge,we,ke,Dn,kt,Zt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Be,Y,De,Tt,qt,ge,we,ke,Dn,Zt.data):G.texSubImage3D(Be,Y,De,Tt,qt,ge,we,ke,Dn,kt,Zt):k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,De,Tt,ge,we,Dn,kt,Zt.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,De,Tt,Zt.width,Zt.height,Dn,Zt.data):G.texSubImage2D(G.TEXTURE_2D,Y,De,Tt,ge,we,Dn,kt,Zt);G.pixelStorei(G.UNPACK_ROW_LENGTH,ki),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ci),G.pixelStorei(G.UNPACK_SKIP_ROWS,es),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wn),Y===0&&q.generateMipmaps&&G.generateMipmap(Be),qe.unbindTexture()},this.copyTextureToTexture3D=function(k,q,J=null,j=null,Y=0){return k.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,j=arguments[1]||null,k=arguments[2],q=arguments[3],Y=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(k,q,J,j,Y)},this.initRenderTarget=function(k){Ye.get(k).__webglFramebuffer===void 0&&D.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?D.setTextureCube(k,0):k.isData3DTexture?D.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?D.setTexture2DArray(k,0):D.setTexture2D(k,0),qe.unbindTexture()},this.resetState=function(){S=0,P=0,L=null,qe.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var As=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mo=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Gf=new x,Wf=new Et,Xf=new Et,Ny=new x,qf=new be,Ma=new x,Wl=new _i,Yf=new be,Xl=new Ss,Ka=class extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xh,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(r),e.ray.intersectsSphere(Wl)!==!1&&(Yf.copy(r).invert(),Xl.copy(e.ray).applyMatrix4(Yf),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ag?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Wf.fromBufferAttribute(r.attributes.skinIndex,e),Xf.fromBufferAttribute(r.attributes.skinWeight,e),Gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Xf.getComponent(s);if(o!==0){let a=Wf.getComponent(s);qf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ny.copy(Gf).applyMatrix4(qf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},wo=class extends Mn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ja=class extends Nn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Yn,u=Yn,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$f=new be,zy=new be,ja=class i{constructor(e=[],t=[]){this.uuid=Ls(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:zy;$f.multiplyMatrices(a,t[s]),$f.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ja(t,e,e,Jn,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wo),this.bones.push(o),this.boneInverses.push(new be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},zr=class extends nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new be,Zf=new be,wa=[],Kf=new jn,Fy=new be,lo=new re,uo=new _i,_t=class extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Fy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),Kf.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),uo.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),Zf.multiplyMatrices(n,ms),lo.matrixWorld=Zf,lo.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){let c=wa[o];c.instanceId=s,c.object=this,t.push(c)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ja(new Float32Array(r*this.count),r,this.count,Cd,hi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var To=class extends pr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qa=new x,ec=new x,Jf=new be,ho=new Ss,Ta=new _i,ql=new x,jf=new x,nd=class extends Mn{constructor(e=new St,t=new To){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Qa.fromBufferAttribute(t,r-1),ec.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Qa.distanceTo(ec);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;Jf.copy(r).invert(),ho.copy(e.ray).applyMatrix4(Jf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=l){let m=u.getX(v),b=u.getX(v+1),y=Sa(this,e,ho,c,m,b);y&&t.push(y)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(f),m=Sa(this,e,ho,c,v,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=l){let m=Sa(this,e,ho,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=Sa(this,e,ho,c,p-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Sa(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,r),ec.fromBufferAttribute(o,s),t.distanceSqToSegment(Qa,ec,ql,jf)>n)return;ql.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:jf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Qf=new x,ep=new x,So=class extends nd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Qf.fromBufferAttribute(t,r),ep.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qf.distanceTo(ep);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xi=class extends Nn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new x);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new x,r=[],s=[],o=[],a=new x,c=new be;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new x)}s[0]=new x,o[0]=new x;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(bn(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(bn(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends Qn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},id=class extends Ro{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hd(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Ra=new x,Yl=new Hd,$l=new Hd,Zl=new Hd,rd=class extends Qn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new x){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Ra.subVectors(r[0],r[1]).add(r[0]),l=Ra);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ra.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Yl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,v,g),$l.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,v,g),Zl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),$l.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Zl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Yl.calc(c),$l.calc(c),Zl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new x().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tp(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Oy(i,e){let t=1-i;return t*t*e}function Vy(i,e){return 2*(1-i)*i*e}function Gy(i,e){return i*i*e}function xo(i,e,t,n){return Oy(i,e)+Vy(i,t)+Gy(i,n)}function Wy(i,e){let t=1-i;return t*t*t*e}function Xy(i,e){let t=1-i;return 3*t*t*i*e}function qy(i,e){return 3*(1-i)*i*i*e}function Yy(i,e){return i*i*i*e}function vo(i,e,t,n,r){return Wy(i,e)+Xy(i,t)+qy(i,n)+Yy(i,r)}var tc=class extends Qn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,r.x,s.x,o.x,a.x),vo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sd=class extends Qn{constructor(e=new x,t=new x,n=new x,r=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new x){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,r.x,s.x,o.x,a.x),vo(e,r.y,s.y,o.y,a.y),vo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends Qn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},od=class extends Qn{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Qn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xo(e,r.x,s.x,o.x),xo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ad=class extends Qn{constructor(e=new x,t=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new x){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xo(e,r.x,s.x,o.x),xo(e,r.y,s.y,o.y),xo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(tp(a,c.x,l.x,u.x,d.x),tp(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},np=Object.freeze({__proto__:null,ArcCurve:id,CatmullRomCurve3:rd,CubicBezierCurve:tc,CubicBezierCurve3:sd,EllipseCurve:Ro,LineCurve:nc,LineCurve3:od,QuadraticBezierCurve:ic,QuadraticBezierCurve3:ad,SplineCurve:rc}),cd=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new np[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new np[r.type]().fromJSON(r))}return this}},ld=class extends cd{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new nc(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ic(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new tc(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new rc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new Ro(e,t,n,r,s,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qi=class i extends St{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=bn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],u=1/t,d=new x,h=new pe,f=new x,p=new x,v=new x,g=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(p)}for(let b=0;b<=t;b++){let y=n+b*u*r,_=Math.sin(y),R=Math.cos(y);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*_,d.y=e[S].y,d.z=e[S].x*R,o.push(d.x,d.y,d.z),h.x=b/t,h.y=S/(e.length-1),a.push(h.x,h.y);let P=c[3*S+0]*_,L=c[3*S+1],w=c[3*S+0]*R;l.push(P,L,w)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let _=y+b*e.length,R=_,S=_+e.length,P=_+e.length+1,L=_+1;s.push(R,S,L),s.push(P,L,S)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},mr=class i extends qi{constructor(e=1,t=1,n=4,r=8){let s=new ld;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},wn=class i extends St{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new x,u=new pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class i extends St{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],f=[],p=0,v=[],g=n/2,m=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(f,2));function b(){let _=new x,R=new x,S=0,P=(t-e)/n;for(let L=0;L<=s;L++){let w=[],T=L/s,H=T*(t-e)+e;for(let N=0;N<=r;N++){let U=N/r,z=U*c+a,I=Math.sin(z),B=Math.cos(z);R.x=H*I,R.y=-T*n+g,R.z=H*B,d.push(R.x,R.y,R.z),_.set(I,P,B).normalize(),h.push(_.x,_.y,_.z),f.push(U,1-T),w.push(p++)}v.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){let T=v[w][L],H=v[w+1][L],N=v[w+1][L+1],U=v[w][L+1];(e>0||w!==0)&&(u.push(T,H,U),S+=3),(t>0||w!==s-1)&&(u.push(H,N,U),S+=3)}l.addGroup(m,S,0),m+=S}function y(_){let R=p,S=new pe,P=new x,L=0,w=_===!0?e:t,T=_===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,g*T,0),h.push(0,T,0),f.push(.5,.5),p++;let H=p;for(let N=0;N<=r;N++){let z=N/r*c+a,I=Math.cos(z),B=Math.sin(z);P.x=w*B,P.y=g*T,P.z=w*I,d.push(P.x,P.y,P.z),h.push(0,T,0),S.x=I*.5+.5,S.y=B*.5*T+.5,f.push(S.x,S.y),p++}for(let N=0;N<r;N++){let U=R+N,z=H+N;_===!0?u.push(z,z+1,U):u.push(z+1,z,U),L+=3}l.addGroup(m,L,_===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yi=class i extends yt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sc=class i extends St{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new x,_=new x,R=new x;for(let S=0;S<t.length;S+=3)f(t[S+0],y),f(t[S+1],_),f(t[S+2],R),c(y,_,R,b)}function c(b,y,_,R){let S=R+1,P=[];for(let L=0;L<=S;L++){P[L]=[];let w=b.clone().lerp(_,L/S),T=y.clone().lerp(_,L/S),H=S-L;for(let N=0;N<=H;N++)N===0&&L===S?P[L][N]=w:P[L][N]=w.clone().lerp(T,N/H)}for(let L=0;L<S;L++)for(let w=0;w<2*(S-L)-1;w++){let T=Math.floor(w/2);w%2===0?(h(P[L][T+1]),h(P[L+1][T]),h(P[L][T])):(h(P[L][T+1]),h(P[L+1][T+1]),h(P[L+1][T]))}}function l(b){let y=new x;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(b),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function u(){let b=new x;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];let _=g(b)/2/Math.PI+.5,R=m(b)/Math.PI+.5;o.push(_,1-R)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){let y=o[b+0],_=o[b+2],R=o[b+4],S=Math.max(y,_,R),P=Math.min(y,_,R);S>.9&&P<.1&&(y<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,y){let _=b*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function p(){let b=new x,y=new x,_=new x,R=new x,S=new pe,P=new pe,L=new pe;for(let w=0,T=0;w<s.length;w+=9,T+=6){b.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),S.set(o[T+0],o[T+1]),P.set(o[T+2],o[T+3]),L.set(o[T+4],o[T+5]),R.copy(b).add(y).add(_).divideScalar(3);let H=g(R);v(S,T+0,b,H),v(P,T+2,y,H),v(L,T+4,_,H)}}function v(b,y,_,R){R<0&&b.x===1&&(o[y]=b.x-1),_.x===0&&_.z===0&&(o[y]=R/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},oc=class i extends sc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Aa=new x,Ca=new x,Kl=new x,Ia=new ur,ac=class extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ba*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:v,b:g,c:m}=Ia;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Ia.getNormal(Kl),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let y=(b+1)%3,_=d[b],R=d[y],S=Ia[u[b]],P=Ia[u[y]],L=`${_}_${R}`,w=`${R}_${_}`;w in h&&h[w]?(Kl.dot(h[w].normal)<=s&&(f.push(S.x,S.y,S.z),f.push(P.x,P.y,P.z)),h[w]=null):L in h||(h[L]={index0:l[b],index1:l[y],normal:Kl.clone()})}}for(let p in h)if(h[p]){let{index0:v,index1:g}=h[p];Aa.fromBufferAttribute(a,v),Ca.fromBufferAttribute(a,g),f.push(Aa.x,Aa.y,Aa.z),f.push(Ca.x,Ca.y,Ca.z)}this.setAttribute("position",new Oe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Tn=class i extends sc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ao=class i extends St{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],u=[],d=e,h=(t-e)/r,f=new x,p=new pe;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){let m=s+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<r;v++){let g=v*(n+1);for(let m=0;m<n;m++){let b=m+g,y=b,_=b+n+1,R=b+n+2,S=b+1;a.push(y,_,S),a.push(_,R,S)}}this.setIndex(a),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var rt=class i extends St{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new x,h=new x,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let b=[],y=m/n,_=0;m===0&&o===0?_=.5/t:m===n&&c===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let S=R/t;d.x=-e*Math.cos(r+S*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+S*s)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(S+_,1-y),b.push(l++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let y=u[m][b+1],_=u[m][b],R=u[m+1][b],S=u[m+1][b+1];(m!==0||o>0)&&f.push(y,_,S),(m!==n-1||c<Math.PI)&&f.push(_,R,S)}this.setIndex(f),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var En=class i extends St{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new x,d=new x,h=new x;for(let f=0;f<=n;f++)for(let p=0;p<=r;p++){let v=p/r*s,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(p/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=r;p++){let v=(r+1)*f+p-1,g=(r+1)*(f-1)+p-1,m=(r+1)*(f-1)+p,b=(r+1)*f+p;o.push(v,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tt=class extends pr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cc=class extends tt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $y(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Cs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ud=class extends Cs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:s=e,a=2*t-n;break;case $h:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yh:o=e,c=2*n-t;break;case $h:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,b=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,y=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let R=0;R!==a;++R)s[R]=m*o[u+R]+b*o[l+R]+y*o[c+R]+_*o[d+R];return s}},dd=class extends Cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},hd=class extends Cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ud(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Nu:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Nu;case this.InterpolantFactoryMethodSmooth:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&$y(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===gl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Nu;var Fr=class extends fi{constructor(e,t,n){super(e,t,n)}};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Na;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var fd=class extends fi{};fd.prototype.ValueTypeName="color";var pd=class extends fi{};pd.prototype.ValueTypeName="number";var md=class extends Cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)bt.slerpFlat(s,0,o,l-a,o,l,c);return s}},lc=class extends fi{InterpolantFactoryMethodLinear(e){return new md(this.times,this.values,this.getValueSize(),e)}};lc.prototype.ValueTypeName="quaternion";lc.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends fi{constructor(e,t,n){super(e,t,n)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Na;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var gd=class extends fi{};gd.prototype.ValueTypeName="vector";var xd=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},Zy=new xd,vd=class{constructor(e){this.manager=e!==void 0?e:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=class extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Io=class extends Co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jl=new be,ip=new x,rp=new x,uc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sp=new be,fo=new x,jl=new x,bd=class extends uc{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fo.setFromMatrixPosition(e.matrixWorld),n.position.copy(fo),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),r.makeTranslation(-fo.x,-fo.y,-fo.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp)}},Is=class extends Co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yd=class extends uc{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new yd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var dc=class extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Dd="\\[\\]\\.:\\/",Ky=new RegExp("["+Dd+"]","g"),Ud="[^"+Dd+"]",Jy="[^"+Dd.replace("\\.","")+"]",jy=/((?:WC+[\/:])*)/.source.replace("WC",Ud),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),eE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ud),tE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ud),nE=new RegExp("^"+jy+Qy+eE+tE+"$"),iE=["material","materials","bones","map"],Ed=class{constructor(e,t,n){let r=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ky,"")}static parseTrackName(e){let t=nE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);iE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=Ed;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u2=new Float32Array(1);var op=new be,hc=class{constructor(e,t,n=0,r=1/0){this.ray=new Ss(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(op),this}intersectObject(e,t=!0,n=[]){return _d(e,this,n,t),n.sort(ap),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)_d(e[r],this,n,t);return n.sort(ap),n}};function ap(i,e){return i.distance-e.distance}function _d(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)_d(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);var rn={flow_Ls:1,hoursPerDay:8,uasbCount:4,uasbRecirculation:!1,apparentDensity_tm3:.75},Hs={flow_m3h:rn.flow_Ls*3.6,daily_m3:rn.flow_Ls*3.6*rn.hoursPerDay,perUasb_Ls:rn.flow_Ls/4};function Ip(i,e=rn.flow_Ls){return i==null?null:i/(e*3.6)}var pi=[{id:"homog",tag:"TK-101",stage:"homog",shape:"cyl",pos:[-24,-8],size:{d:3.2,h:2.6},base:.3,volume:20,name:{es:"Tanque de homogenizaci\xF3n",en:"Homogenization tank"},fn:{es:"Recibe el lixiviado y amortigua variaciones de caudal y carga.",en:"Receives leachate and equalizes flow and load."}},{id:"coag",tag:"TK-102",stage:"coag",shape:"box",pos:[-18.5,-8],size:{w:1,h:1,l:1},base:1.2,volume:1,name:{es:"Tanque de coagulaci\xF3n",en:"Coagulation tank"},fn:{es:"Mezcla r\xE1pida con coagulante para desestabilizar coloides.",en:"Rapid mix with coagulant to destabilize colloids."}},{id:"floc",tag:"TK-103",stage:"floc",shape:"cyl",pos:[-15.5,-8],size:{d:1.1,h:1.05},base:1.2,volume:1,name:{es:"Tanque de floculaci\xF3n",en:"Flocculation tank"},fn:{es:"Mezcla lenta para formar fl\xF3culos sedimentables.",en:"Slow mix to grow settleable flocs."}},{id:"clar1",tag:"CL-101",stage:"clar1",shape:"cone-clarifier",pos:[-11.5,-8],size:{d:2.2,h:3.4},base:0,volume:null,name:{es:"Clarificador c\xF3nico 1",en:"Conical clarifier 1"},fn:{es:"Sedimentaci\xF3n primaria; el lodo se purga por el cono.",en:"Primary settling; sludge is drawn from the cone."}},{id:"sludge",tag:"LS-101",stage:null,shape:"sludge-bed",pos:[-21.2,6.85],size:{w:7,h:.8,l:4},base:0,volume:null,name:{es:"Lecho de secado cubierto",en:"Covered sludge drying bed"},fn:{es:"Deshidrata el lodo espesado; el drenado vuelve a cabecera y la torta se retira en cami\xF3n.",en:"Dewaters thickened sludge; drainage returns to the headworks and cake leaves by truck."}},{id:"inter",tag:"TK-104",stage:"uasb",shape:"cyl",pos:[-7,-8],size:{d:1.5,h:1.15},base:.3,volume:2,name:{es:"Tanque intermedio",en:"Intermediate tank"},fn:{es:"Pulm\xF3n de succi\xF3n para el bombeo a los UASB.",en:"Suction buffer for pumping to the UASB train."}},{id:"pump",tag:"P-01",stage:"uasb",shape:"pump",pos:[-3,-8],size:{w:.9,h:.7,l:.5},base:.15,volume:null,name:{es:"Bomba de alimentaci\xF3n UASB",en:"UASB feed pump"},fn:{es:"Impulsa el clarificado al colector de reparto UASB.",en:"Lifts clarified flow to the UASB distribution header."}},{id:"uasb1",tag:"R-201",stage:"uasb",shape:"cyl",pos:[-8,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 1",en:"UASB reactor 1"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"uasb2",tag:"R-202",stage:"uasb",shape:"cyl",pos:[-4.4,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 2",en:"UASB reactor 2"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"uasb3",tag:"R-203",stage:"uasb",shape:"cyl",pos:[-.8,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 3",en:"UASB reactor 3"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"uasb4",tag:"R-204",stage:"uasb",shape:"cyl",pos:[2.8,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 4",en:"UASB reactor 4"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"clar2",tag:"CL-201",stage:"clar2",shape:"cone-clarifier",pos:[8,.5],size:{d:2.2,h:3.4},base:0,volume:null,name:{es:"Clarificador c\xF3nico 2",en:"Conical clarifier 2"},fn:{es:"Separa s\xF3lidos arrastrados del efluente anaerobio.",en:"Separates solids carried over from the anaerobic effluent."}},{id:"mbbr",tag:"R-301",stage:"mbbr",shape:"box",pos:[13.5,.5],size:{w:4,h:2,l:2.5},base:.3,volume:20,name:{es:"Reactor MBBR",en:"MBBR reactor"},fn:{es:"Biopel\xEDcula aerobia sobre soportes m\xF3viles, aireada por el soplante B-301; pulimento.",en:"Aerobic biofilm on moving carriers, aerated by blower B-301; polishing."}},{id:"filtro",tag:"FF-401",stage:"filtro",shape:"bed",pos:[9,9],size:{w:9,h:.9,l:5},base:0,volume:null,name:{es:"Filtro fitopedol\xF3gico",en:"Phytopedological filter"},fn:{es:"Lecho plantado de suelo/medio; afinamiento final.",en:"Planted soil/media bed; final polishing."}},{id:"discharge",tag:"DS-501",stage:"discharge",shape:"outfall",pos:[1,9],size:{w:1.6,h:.9,l:1.6},base:0,volume:null,name:{es:"Descarga de efluente tratado",en:"Treated effluent discharge"},fn:{es:"C\xE1mara de salida y punto de descarga del efluente.",en:"Outlet chamber and effluent discharge point."}},{id:"screen",tag:"RJ-100",stage:"homog",shape:"box",pos:[-28.3,-8],size:{w:2.2,h:.9,l:.9},base:0,volume:null,name:{es:"Rejilla y desarenador",en:"Screen and grit channel"},fn:{es:"Retiene s\xF3lidos gruesos y arenas antes de la homogenizaci\xF3n.",en:"Removes coarse solids and grit ahead of equalization."}},{id:"dosC",tag:"DQ-101",stage:"coag",shape:"box",pos:[-19,-5.95],size:{w:1.4,h:1.5,l:1},base:0,volume:null,name:{es:"Dosificaci\xF3n de coagulante",en:"Coagulant dosing"},fn:{es:"Tanque y bomba dosificadora de coagulante hacia TK-102.",en:"Coagulant day tank and metering pump to TK-102."}},{id:"dosF",tag:"DQ-102",stage:"floc",shape:"box",pos:[-15.5,-5.95],size:{w:1.4,h:1.5,l:1},base:0,volume:null,name:{es:"Preparaci\xF3n y dosificaci\xF3n de pol\xEDmero",en:"Polymer make-up and dosing"},fn:{es:"Preparaci\xF3n de floculante y bomba dosificadora hacia TK-103.",en:"Flocculant make-up and metering pump to TK-103."}},{id:"pumpB",tag:"P-01B",stage:"uasb",shape:"pump",pos:[-3,-9.6],size:{w:.9,h:.7,l:.5},base:.15,volume:null,name:{es:"Bomba de reserva UASB",en:"UASB standby pump"},fn:{es:"Bomba de reserva en paralelo con P-01 (en espera).",en:"Standby pump in parallel with P-01."}},{id:"flare",tag:"QB-201",stage:"uasb",shape:"cyl",pos:[6.5,-13],size:{d:.5,h:5},base:.3,volume:null,name:{es:"Sello hidr\xE1ulico y antorcha de biog\xE1s",en:"Biogas seal pot and flare"},fn:{es:"Recoge el biog\xE1s de los 4 UASB y lo quema en antorcha.",en:"Collects biogas from the 4 UASB and burns it in a flare."}},{id:"thick",tag:"ES-101",stage:null,shape:"cyl",pos:[-9.6,6.8],size:{d:2.4,h:2.6},base:.3,volume:null,name:{es:"Espesador de lodos",en:"Sludge thickener"},fn:{es:"Concentra los lodos de CL-101, de los UASB y de CL-201 antes del secado.",en:"Thickens sludge from CL-101, the UASB and CL-201 before drying."}},{id:"control",tag:"ED-01",stage:null,shape:"box",pos:[-24.5,-2.2],size:{w:6,h:3.2,l:3},base:0,volume:null,name:{es:"Caseta de control y qu\xEDmicos",en:"Control and chemical building"},fn:{es:"Sala de control, tablero el\xE9ctrico (MCC) y bodega de qu\xEDmicos.",en:"Control room, MCC panel and chemical store."}}],Le=Object.fromEntries(pi.map(i=>[i.id,i])),pn=[-31,-8],gt={gate:[-33,2.5],z:2.5,width:3.6,endX:-17.6,loop:{eastX:-13.6,southZ:11.4,westX:-28.8,r:4},chemStop:{x:-24,z:2.5},sludgeStop:{x:-20.2,z:11.4}},We={minX:-33,maxX:19,minZ:-18.5,maxZ:13.5},mi=[.45,.8,1],gc={minX:-84,maxX:-46,minZ:-27,maxZ:-4,tierH:2.6,slope:3.2,bench:1.4,face:{minX:-66,maxX:-55}},sn={minX:-42.5,maxX:-36.5,minZ:-11.5,maxZ:-4.5,depth:1.2},Pp={z:-2.6,x:-44.6,w:.7},Bd={farX:-118,spawnX:-96,despawnX:-66,laneIn:4.3,laneOut:.7,shiftX0:-44,shiftX1:-37.5,width:7.4},xc={cx:3.5,cz:22,rx:9.5,rz:5.2};var je=(i,e=.62,t=0,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),Qe={sage:15330806,sageDark:13029348,warmGray:14541550,offWhite:16185339,steelBlue:4024038,motor:3103722,concrete:14870256,concreteDark:12831452,ochre:15906354,steel:13226205,steelDark:5924228,grating:10726854,rubber:2830138,soil:10126438,gravel:12894131,leachate:9329702,clarified:10518078,anaerobic:8748602,treated:2078118,sludge:6045734,carrier:15919302,reed:6271066,outline:3107839},E={concrete:je(Qe.concrete,.86),concreteDark:je(Qe.concreteDark,.9),sage:je(Qe.sage,.6,.02),sageDark:je(Qe.sageDark,.62,.02),warmGray:je(Qe.warmGray,.62),offWhite:je(Qe.offWhite,.58),steelBlue:je(Qe.steelBlue,.55,.12),motor:je(Qe.motor,.48,.25),steel:je(Qe.steel,.38,.72),steelDark:je(Qe.steelDark,.5,.55),grating:je(Qe.grating,.72,.35),rail:je(Qe.ochre,.55,.08),rubber:je(Qe.rubber,.75),soil:je(Qe.soil,.96),gravel:je(Qe.gravel,.92),sludgeCake:je(Qe.sludge,.78),carrier:je(Qe.carrier,.6),plant:je(16777215,.78),bubble:je(14673634,.25,0,{transparent:!0,opacity:.75,emissive:10465966,emissiveIntensity:.25}),flocSpeck:je(4008470,.8),glass:new cc({color:12901083,roughness:.08,metalness:0,transparent:!0,opacity:.16,depthWrite:!1,side:tn}),paint:je(14210244,.7),walkway:je(15906354,.85,0,{transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),outline:new To({color:Qe.outline,transparent:!0,opacity:.7,depthWrite:!1})},Gr;function rE(){if(Gr!==void 0)return Gr;if(typeof document>"u")return Gr=null,null;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");if(!e)return Gr=null,null;let t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.45,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Gr=new Xi(i),Gr.colorSpace=ln,Gr}function kp(){return new Pn({color:Qe.outline,map:rE(),transparent:!0,opacity:.28,blending:Br,depthWrite:!1,toneMapped:!1})}var vc={idle:8357769,active:8372346,standby:14263361,alert:14836796};function Hp(){return je(vc.idle,.35,0,{emissive:vc.idle,emissiveIntensity:.15})}var sE={still:0,ripple:1,swirl:2,flow:3,sheen:4,aeration:5},oE=`
varying vec3 vWPosL;
uniform float uTime; uniform float uMotion; uniform float uGlow; uniform float uSpread; uniform float uMode;
uniform vec2 uCenter; uniform vec2 uDir; uniform float uSpeed; uniform float uScale; uniform float uSpan;
uniform vec3 uHi;
float lqHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float lqPattern(out float mask){
  mask = 1.0;
  vec2 d = vWPosL.xz - uCenter;
  float r = length(d);
  float a = atan(d.y, d.x);
  float m = uMotion;
  if (uMode < 0.5) return 0.0;
  if (uMode < 1.5) { // ondas suaves con giro lento (mezclador)
    float w = sin(r * 9.0 * uScale - uTime * 1.6 * uSpeed + sin(a * 3.0 + uTime * 0.4 * uSpeed) * 1.4);
    return smoothstep(0.75, 1.0, w) * (0.3 + 0.7 * m);
  }
  if (uMode < 2.5) { // remolino espiral
    float w = sin(a * 4.0 + r * 11.0 * uScale - uTime * uSpeed);
    float w2 = sin(a * 7.0 - r * 6.0 * uScale - uTime * uSpeed * 0.7);
    return smoothstep(0.35, 1.0, w * 0.7 + w2 * 0.3) * (0.25 + 0.75 * m);
  }
  if (uMode < 3.5) { // flujo en canal
    vec2 dir = normalize(uDir);
    vec2 pp = vec2(-dir.y, dir.x);
    float s = dot(d, dir); float q = dot(d, pp);
    float w = sin(s * 7.0 * uScale - uTime * 3.2 * uSpeed + sin(q * 9.0 + s * 1.7) * 1.3);
    float w2 = sin(s * 13.0 * uScale - uTime * 4.1 * uSpeed + q * 5.0);
    return smoothstep(0.7, 1.0, w * 0.7 + w2 * 0.3) * (0.3 + 0.7 * m);
  }
  if (uMode < 4.5) { // l\xE1mina de agua que avanza sobre el lecho
    vec2 dir = normalize(uDir);
    float s = dot(d, dir);
    float front = uSpread * uSpan;
    mask = 1.0 - smoothstep(front - 0.8, front, s);
    float w = sin(s * 4.0 * uScale - uTime * 1.2 * uSpeed + sin(dot(d, vec2(-dir.y, dir.x)) * 3.0) * 1.2);
    return mask * (0.25 + 0.5 * smoothstep(0.2, 1.0, w)) * (0.4 + 0.6 * m);
  }
  // aireaci\xF3n: celdas con anillos que brotan
  vec2 g = vWPosL.xz * 1.7 * uScale;
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float h = lqHash(cell);
  float rr = length(f);
  float ring = sin(rr * 30.0 - uTime * (4.0 + 2.0 * h) * uSpeed + h * 6.283);
  float boil = 0.5 + 0.5 * sin(dot(vWPosL.xz, vec2(3.1, 2.3)) + uTime * 1.7) * sin(dot(vWPosL.xz, vec2(-2.2, 3.7)) - uTime * 1.3);
  return (smoothstep(0.8, 1.0, ring) * (1.0 - smoothstep(0.1, 0.42, rr)) * 0.7 + boil * 0.35) * m;
}
`;function Jt(i){let e=i.opacity??1,t=je(i.color,i.roughness??.22,0,{transparent:e<1,opacity:e,depthWrite:e>=1,side:i.side??Ei,emissive:i.color,emissiveIntensity:0}),n={uTime:{value:0},uMotion:{value:0},uGlow:{value:0},uSpread:{value:1},uMode:{value:sE[i.mode??"still"]},uCenter:{value:new pe(i.center?.[0]??0,i.center?.[1]??0)},uDir:{value:new pe(i.dir?.[0]??1,i.dir?.[1]??0)},uSpeed:{value:i.speed??1},uScale:{value:i.scale??1},uSpan:{value:i.span??1},uHi:{value:new Ce(i.hi??13615264)}};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPosL;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPosL = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+oE).replace("#include <color_fragment>",`#include <color_fragment>
        float lqMask; float lqP = lqPattern(lqMask);
        diffuseColor.rgb = mix(diffuseColor.rgb, uHi, clamp(lqP * 0.22, 0.0, 1.0));
        diffuseColor.a *= lqMask;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uHi * (lqP * 0.05 * (0.5 + uGlow)) + diffuseColor.rgb * uGlow * 0.3;`)},t.customProgramCacheKey=()=>"ptl-liquid",{material:t,uniforms:n}}var Lp=new Map;function Ds(i,e,t=.6){let n=`${i}|${JSON.stringify(e)}`,r=Lp.get(n);if(r)return r;let s=je(i,t,.02,{side:tn}),o={uWin:{value:new Et(e.phi,e.halfWidth,e.y0,e.y1)},uCone:{value:new Et(e.r,e.yApex??-1e3,e.rApex??e.r,e.yc??-1e3)}};return s.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocalP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocalP = position;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocalP; uniform vec4 uWin; uniform vec4 uCone;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float ph = atan(vLocalP.x, vLocalP.z);
          float dph = abs(mod(ph - uWin.x + 3.14159265, 6.2831853) - 3.14159265);
          float rr = length(vLocalP.xz);
          float rs = vLocalP.y > uCone.w ? uCone.x : mix(uCone.z, uCone.x, clamp((vLocalP.y - uCone.y) / max(uCone.w - uCone.y, 1e-3), 0.0, 1.0));
          if (dph < uWin.y && vLocalP.y > uWin.z && vLocalP.y < uWin.w && abs(rr - rs) < 0.12) discard;
        }`)},s.customProgramCacheKey=()=>"ptl-shell-window",Lp.set(n,s),s}var aE=`
varying float vS; varying float vAng;
uniform float uTime; uniform float uFlow; uniform float uFront; uniform float uLength; uniform float uHighlight;
uniform vec3 uFluid;
`;function Dp(i,e){let t=je(i,.5,.18),n={uTime:{value:0},uFlow:{value:0},uFront:{value:0},uLength:{value:1},uHighlight:{value:0},uFluid:{value:new Ce(e)}};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aS; varying float vS; varying float vAng;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vS = aS; vAng = uv.y;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+aE).replace("#include <color_fragment>",`#include <color_fragment>
        float pLit = 1.0 - smoothstep(uFront - 0.12, uFront + 0.02, vS);
        pLit *= step(0.001, uFront);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.72 + uFluid * 0.3, pLit * 0.7);
        diffuseColor.rgb *= 1.0 + uHighlight * 0.15;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // 0 = generatriz superior, 1 = inferior
          float side = abs(fract(vAng + 0.5) - 0.5) * 2.0;
          // Pulsos suaves a lo largo del tubo (todo el per\xEDmetro, intensidad baja)
          float kp = fract((vS - uTime * 1.1) / 1.6);
          float soft = exp(-pow((kp - 0.5) / 0.09, 2.0));
          // Chevr\xF3n fino solo en la franja superior (apunta en el sentido del flujo)
          float topBand = 1.0 - smoothstep(0.22, 0.32, side);
          float kc = fract((vS + side * 0.9 - uTime * 1.1) / 1.6);
          float chev = smoothstep(0.0, 0.015, kc) * (1.0 - smoothstep(0.035, 0.06, kc)) * topBand;
          float act = uFlow * (0.35 + 0.65 * pLit);
          float headOn = step(0.02, uFront) * (1.0 - step(uLength - 0.02, uFront));
          float head = headOn * exp(-pow((vS - uFront) / 0.3, 2.0));
          vec3 nrm = normalize(normal);
          float fres = pow(1.0 - abs(dot(nrm, normalize(vViewPosition))), 2.5);
          totalEmissiveRadiance += uFluid * (pLit * 0.03 + act * (soft * 0.22 + chev * 0.8) + head * 0.75)
            + vec3(0.37, 0.83, 0.88) * fres * uHighlight * 0.35;
        }`)},t.customProgramCacheKey=()=>"ptl-pipe",{material:t,uniforms:n}}var Fe={pe:je(14275522,.45,0,{transparent:!0,opacity:.88}),peBlue:je(4026342,.5),bund:je(13226211,.7,.05),asphalt:je(12371686,.95),curb:je(15001844,.9),roadPaint:je(16777215,.8,0,{polygonOffset:!0,polygonOffsetFactor:-2}),roadPaintYellow:je(15906354,.8,0,{polygonOffset:!0,polygonOffsetFactor:-2}),apron:je(14673138,.92),sand:je(14471864,.95),roofSteel:je(4024038,.5,.2,{side:tn}),wall:je(16119546,.7),wallTrim:je(3103722,.55,.12),rollDoor:je(14673135,.5,.2),ibcCage:je(12173776,.4,.6),ibcTank:je(15000022,.4,0,{transparent:!0,opacity:.82}),pallet:je(13214826,.85),ductTape:je(4080712,.6),sludgeDry:je(8018490,.95),flareSteel:je(10134712,.55,.4),grit:je(13486006,.95)},Nd=[],Lo={value:0};function ei(i,e=1.6,t=.05,n=2764078){let r=je(n,.35,0,{emissive:i,emissiveIntensity:t});return Nd.push({m:r,on:e,off:t,kind:"emissive"}),r}var Wr;function cE(){if(Wr!==void 0)return Wr;if(typeof document>"u")return Wr=null,null;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");if(!e)return Wr=null,null;let t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.55)"),t.addColorStop(.7,"rgba(255,255,255,0.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Wr=new Xi(i),Wr.colorSpace=ln,Wr}function Us(i=16767392,e=.34){let t=new Pn({color:i,map:cE(),transparent:!0,opacity:0,blending:Br,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4});return Nd.push({m:t,on:e,off:0,kind:"opacity"}),t}var Up=[];function Bp(i,e){Up.push({l:i,on:e}),i.intensity=0}function zd(i){Lo.value=i;for(let e of Up)e.l.intensity=e.on*i;for(let e of Nd){let t=e.off+(e.on-e.off)*i;e.kind==="emissive"?e.m.emissiveIntensity=t*(e.m.userData.boost??1):(e.m.opacity=t,e.m.visible=t>.002)}}var bc={day:{sky:["#c3cdf0","#d6ddf6","#e6eaf8"],fog:14870519,hemiSky:16777215,hemiGround:13029096,hemiI:1.45,keyColor:16777215,keyI:2.3,keyDir:[-.55,1,.62],fillColor:15002367,fillI:.7,rimColor:14673663,rimI:.4},dusk:{sky:["#0b1622","#1a2a3a","#4a3a36"],fog:2763827,hemiSky:10465999,hemiGround:4867128,hemiI:.8,keyColor:16757370,keyI:1.7,keyDir:[-.9,.38,.35],fillColor:10466512,fillI:.35,rimColor:13671034,rimI:.5},night:{sky:["#060d13","#0b1820","#12252c"],fog:990757,hemiSky:7313072,hemiGround:2503482,hemiI:.75,keyColor:11059160,keyI:.42,keyDir:[-.3,1,.45],fillColor:8363188,fillI:.22,rimColor:9416900,rimI:.3}},Bs=(i,e,t)=>new Ce(i).lerp(new Ce(e),t),Fd=(i,e,t)=>"#"+new Ce(i).lerp(new Ce(e),t).getHexString(),yc=(i,e,t)=>i+(e-i)*t;function Np(i,e=We){let t=(e.minX+e.maxX)/2,n=(e.minZ+e.maxZ)/2,r=new x(t,0,n),s=Math.hypot(e.maxX-e.minX,e.maxZ-e.minZ)/2,o=new Io(13294560,3819075,.85);i.add(o);let a=new Vr(16773856,2.8);a.target.position.copy(r),a.castShadow=!0,a.shadow.mapSize.set(4096,4096);let c=a.shadow.camera;c.left=-s-2,c.right=s+2,c.top=s+2,c.bottom=-s-2,c.near=20,c.far=150,a.shadow.bias=-25e-5,a.shadow.normalBias=.025,a.shadow.radius=2.5,i.add(a,a.target);let l=new Vr(14017514,.55);l.position.copy(r).add(new x(.9,.45,.7).multiplyScalar(60)),l.target.position.copy(r),i.add(l,l.target);let u=new Vr(12571612,.45);u.position.copy(r).add(new x(.2,.6,-1).multiplyScalar(60)),u.target.position.copy(r),i.add(u,u.target);let d=null,h=null;typeof document<"u"&&(d=document.createElement("canvas"),d.width=4,d.height=256,h=new Xi(d),h.colorSpace=ln);let f=v=>{if(d&&h){let g=d.getContext("2d");if(g){let m=g.createLinearGradient(0,0,0,256);m.addColorStop(0,v[0]),m.addColorStop(.55,v[1]),m.addColorStop(1,v[2]),g.fillStyle=m,g.fillRect(0,0,4,256),h.needsUpdate=!0,i.background=h;return}}i.background=new Ce(v[1])},p={key:a,hemi:o,fill:l,rim:u,mode:"day",daylight:1,setMode(v){p.setDaylight(v==="day"?1:v==="dusk"?.5:0),p.mode=v},nightFactor(){let v=p.daylight;return Math.max(0,Math.min(1,(.8-v)/.4))},setDaylight(v){let g=Math.max(0,Math.min(1,Number.isFinite(v)?v:1));p.daylight=g,p.mode=g>.75?"day":g>.25?"dusk":"night";let[m,b,y]=g>=.5?[bc.dusk,bc.day,(g-.5)/.5]:[bc.night,bc.dusk,g/.5];o.color.copy(Bs(m.hemiSky,b.hemiSky,y)),o.groundColor.copy(Bs(m.hemiGround,b.hemiGround,y)),o.intensity=yc(m.hemiI,b.hemiI,y),a.color.copy(Bs(m.keyColor,b.keyColor,y)),a.intensity=yc(m.keyI,b.keyI,y);let _=new x(...m.keyDir).lerp(new x(...b.keyDir),y).normalize();a.position.copy(r).addScaledVector(_,80),l.color.copy(Bs(m.fillColor,b.fillColor,y)),l.intensity=yc(m.fillI,b.fillI,y),u.color.copy(Bs(m.rimColor,b.rimColor,y)),u.intensity=yc(m.rimI,b.rimI,y),f([Fd(m.sky[0],b.sky[0],y),Fd(m.sky[1],b.sky[1],y),Fd(m.sky[2],b.sky[2],y)]),i.fog instanceof As&&i.fog.color.copy(Bs(m.fog,b.fog,y)),zd(p.nightFactor())},update(v){zd(p.nightFactor())}};return p.setDaylight(1),p}var Xr={skyTop:"#c3cdf0",skyMid:"#d6ddf6",horizon:"#e6eaf8",terrain:13818352,slab:15922426};function lE(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=4,i.height=256;let e=i.getContext("2d");if(!e)return null;let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,Xr.skyTop),t.addColorStop(.55,Xr.skyMid),t.addColorStop(1,Xr.horizon),e.fillStyle=t,e.fillRect(0,0,4,256);let n=new Xi(i);return n.colorSpace=ln,n}function uE(){let i=new tt({color:Xr.slab,roughness:.92,metalness:0});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSlabW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSlabW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSlabW;`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vSlabW.y > -0.01) {
          vec2 q = vSlabW.xz / 4.0;
          vec2 dj = abs(fract(q + 0.5) - 0.5) * 4.0;
          float j = 1.0 - smoothstep(0.012, 0.04, min(dj.x, dj.y));
          vec2 q2 = vSlabW.xz / 12.0;
          vec2 dj2 = abs(fract(q2 + 0.5) - 0.5) * 12.0;
          float j2 = 1.0 - smoothstep(0.02, 0.06, min(dj2.x, dj2.y));
          float mott = 0.5 + 0.5 * sin(vSlabW.x * 0.37 + sin(vSlabW.z * 0.23) * 2.0) * sin(vSlabW.z * 0.29 + 1.3);
          diffuseColor.rgb *= (1.0 - 0.12 * j - 0.1 * j2) * (0.97 + 0.05 * mott);
        }`)},i.customProgramCacheKey=()=>"ptl-slab",i}function dE(){let i=new tt({color:Xr.terrain,roughness:1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTerW;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 q = vTerW.xz;
        float n1 = sin(q.x * 0.11 + sin(q.y * 0.07) * 2.3) * sin(q.y * 0.13 + 1.7);
        float n2 = sin(q.x * 0.53 + q.y * 0.31) * sin(q.y * 0.47 - q.x * 0.21);
        diffuseColor.rgb *= 0.985 + 0.025 * n1;`)},i.customProgramCacheKey=()=>"ptl-terrain",i}function hE(){let i=new _e;i.name="ground";let e=new re(new Je(700,700),dE());e.rotation.x=-Math.PI/2,e.position.y=-.03,e.receiveShadow=!0;let t=We.maxX-We.minX,n=We.maxZ-We.minZ,r=new Gt(t,.24,n),s=new re(r,uE());s.position.set((We.minX+We.maxX)/2,-.12,(We.minZ+We.maxZ)/2),s.receiveShadow=!0;let o=new tt({color:13160680,roughness:.9}),a=new _e;for(let[c,l,u,d]of[[(We.minX+We.maxX)/2,We.minZ,t+.3,.3],[(We.minX+We.maxX)/2,We.maxZ,t+.3,.3],[We.minX,(We.minZ+We.maxZ)/2,.3,n],[We.maxX,(We.minZ+We.maxZ)/2,.3,n]]){let h=new re(new Gt(u,.32,d),o);h.position.set(c,-.08,l),h.receiveShadow=!0,a.add(h)}return i.add(e,s,a),i}function zp(i){let e=new _o({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(typeof window<"u"&&window.devicePixelRatio||1,2)),e.outputColorSpace=ln,e.toneMapping=Td,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=wd,i.appendChild(e.domElement);let t=new Mo;t.background=lE()??new Ce(Xr.skyMid),t.fog=new As(Xr.horizon,170,460),t.add(hE());let n=Np(t),r=(s,o)=>{e.setSize(s,o)};return r(i.clientWidth||1600,i.clientHeight||900),{renderer:e,scene:t,lighting:n,resize:r}}var Ec=["uasb1","uasb2","uasb3","uasb4"],Mi=[{id:"p-inlet",from:"world",fromPort:"inlet",to:"screen",toPort:"in",kind:"leachate",stage:"homog"},{id:"p-screen-homog",from:"screen",fromPort:"out",to:"homog",toPort:"in",kind:"leachate",stage:"homog"},{id:"p-homog-coag",from:"homog",fromPort:"out",to:"coag",toPort:"in",kind:"leachate",stage:"coag"},{id:"p-coag-floc",from:"coag",fromPort:"out",to:"floc",toPort:"in",kind:"leachate",stage:"floc"},{id:"p-floc-clar1",from:"floc",fromPort:"out",to:"clar1",toPort:"in",kind:"leachate",stage:"clar1"},{id:"p-clar1-thick",from:"clar1",fromPort:"sludge",to:"thick",toPort:"in",kind:"sludge",stage:"clar1"},{id:"p-thick-bed",from:"thick",fromPort:"out",to:"sludge",toPort:"in",kind:"sludge",stage:"clar1"},{id:"p-bed-return",from:"sludge",fromPort:"drain",to:"homog",toPort:"return",kind:"return",stage:"clar1"},{id:"p-dosC-coag",from:"dosC",fromPort:"out",to:"coag",toPort:"dose",kind:"chemical",stage:"coag"},{id:"p-dosF-floc",from:"dosF",fromPort:"out",to:"floc",toPort:"dose",kind:"chemical",stage:"floc"},{id:"p-clar1-inter",from:"clar1",fromPort:"out",to:"inter",toPort:"in",kind:"clarified",stage:"uasb"},{id:"p-inter-pump",from:"inter",fromPort:"out",to:"pump",toPort:"in",kind:"clarified",stage:"uasb"},{id:"p-inter-pumpB",from:"inter",fromPort:"out",to:"pumpB",toPort:"in",kind:"clarified",stage:"uasb"},{id:"p-pumpB-header",from:"pumpB",fromPort:"out",to:"pump",toPort:"header",kind:"pumped",stage:"uasb"},...Ec.map(i=>({id:`p-feed-${i}`,from:"pump",fromPort:"out",to:i,toPort:"in",kind:"pumped",stage:"uasb"})),...Ec.map(i=>({id:`p-${i}-clar2`,from:i,fromPort:"out",to:"clar2",toPort:"in",kind:"anaerobic",stage:"clar2"})),...Ec.map(i=>({id:`p-gas-${i}`,from:i,fromPort:"gas",to:"flare",toPort:"in",kind:"biogas",stage:"uasb"})),...Ec.map(i=>({id:`p-purge-${i}`,from:i,fromPort:"sludge",to:"thick",toPort:"in",kind:"sludge",stage:"uasb"})),{id:"p-clar2-thick",from:"clar2",fromPort:"sludge",to:"thick",toPort:"in",kind:"sludge",stage:"clar2"},{id:"p-clar2-mbbr",from:"clar2",fromPort:"out",to:"mbbr",toPort:"in",kind:"treated",stage:"mbbr"},{id:"p-mbbr-filtro",from:"mbbr",fromPort:"out",to:"filtro",toPort:"in",kind:"treated",stage:"filtro"},{id:"p-filtro-discharge",from:"filtro",fromPort:"out",to:"discharge",toPort:"in",kind:"treated",stage:"discharge"},{id:"p-outfall",from:"discharge",fromPort:"out",to:"world",toPort:"outfall",kind:"treated",stage:"discharge"}],_c=[{id:"homog",units:["screen","homog"]},{id:"coag",units:["dosC","coag"]},{id:"floc",units:["dosF","floc"]},{id:"clar1",units:["clar1","thick","sludge"]},{id:"uasb",units:["inter","pump","pumpB","uasb1","uasb2","uasb3","uasb4","flare"]},{id:"clar2",units:["clar2"]},{id:"mbbr",units:["mbbr"]},{id:"filtro",units:["filtro"]},{id:"discharge",units:["discharge"]}],Ns={leachate:{pipe:12947290,fluid:15964716},clarified:{pipe:13806954,fluid:16172099},pumped:{pipe:9085149,fluid:5209087},anaerobic:{pipe:11120746,fluid:11913266},treated:{pipe:7129277,fluid:1426352},sludge:{pipe:10122578,fluid:11561522},biogas:{pipe:15123524,fluid:16767050},chemical:{pipe:11247580,fluid:9399807},return:{pipe:11645855,fluid:13482378}};var ko=new x;function ti(i,e,t,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;ko.copy(e),ko[n]=0,ko.normalize();let l=.5*o/(o+a),u=1-ko.angleTo(i)/c;return Math.sign(ko[t])===1?u*l:a/(o+a)+l+l*(1-u)}var Mc=class extends Gt{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new x,c=new x,l=new x(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=u.length/6,p=new x,v=.5/r;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),u[g+0]=l.x*Math.sign(a.x)+c.x*s,u[g+1]=l.y*Math.sign(a.y)+c.y*s,u[g+2]=l.z*Math.sign(a.z)+c.z*s,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),h[m+0]=ti(p,c,"z","y",s,n),h[m+1]=1-ti(p,c,"y","z",s,t);break;case 1:p.set(-1,0,0),h[m+0]=1-ti(p,c,"z","y",s,n),h[m+1]=1-ti(p,c,"y","z",s,t);break;case 2:p.set(0,1,0),h[m+0]=1-ti(p,c,"x","z",s,e),h[m+1]=ti(p,c,"z","x",s,n);break;case 3:p.set(0,-1,0),h[m+0]=1-ti(p,c,"x","z",s,e),h[m+1]=1-ti(p,c,"z","x",s,n);break;case 4:p.set(0,0,1),h[m+0]=1-ti(p,c,"x","y",s,e),h[m+1]=1-ti(p,c,"y","x",s,t);break;case 5:p.set(0,0,-1),h[m+0]=ti(p,c,"x","y",s,e),h[m+1]=1-ti(p,c,"y","x",s,t);break}}};function gr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new St,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in s){let d=Fp(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);let p=Fp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function Fp(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new nn(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let v=u.getComponent(h,p);a.setComponent(h+d,p,v)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function ue(i,e=0){let t=Math.sin(i*127.1+e*311.7+17.13)*43758.5453;return t-Math.floor(t)}var xr=i=>i-Math.floor(i),Op=new bt,fE=new en;function M(i=0,e=0,t=0,n=0,r=0,s=0,o=1){let a=typeof o=="number"?new x(o,o,o):new x(...o);return Op.setFromEuler(fE.set(n,r,s)),new be().compose(new x(i,e,t),Op,a)}function Vd(i,e){let t=new x().subVectors(e,i),n=t.length(),r=new bt().setFromUnitVectors(new x(0,1,0),t.clone().normalize());return new be().compose(i.clone().add(e).multiplyScalar(.5),r,new x(1,n,1))}var Ie=class{constructor(){this.groups=new Map}add(e,t,n){let r=e.clone();for(let o of Object.keys(r.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&r.deleteAttribute(o);if(r.attributes.uv||r.setAttribute("uv",new nn(new Float32Array(r.attributes.position.count*2),2)),r.attributes.normal||r.computeVertexNormals(),!r.index){let o=r.attributes.position.count,a=new Uint32Array(o);for(let c=0;c<o;c++)a[c]=c;r.setIndex(new nn(a,1))}r.clearGroups(),n&&r.applyMatrix4(n),r.index.array instanceof Uint32Array||r.setIndex(new nn(Uint32Array.from(r.index.array),1));let s=this.groups.get(t)??[];s.push(r),this.groups.set(t,s)}rod(e,t,n,r,s=8){this.add(pE(n,s),r,Vd(e,t))}build(e,t=!0,n=!0){let r=[];for(let[s,o]of this.groups){let a=gr(o,!1);if(!a)continue;a.computeBoundingSphere();let c=new re(a,s);c.castShadow=t&&!s.transparent,c.receiveShadow=n,e.add(c),r.push(c);for(let l of o)l.dispose()}return this.groups.clear(),r}},Vp=new Map;function pE(i,e){let t=e,n=Vp.get(t);return n||(n=new yt(1,1,1,e,1,!1),Vp.set(t,n)),n.clone().scale(i,1,i)}var C=(i,e,t,n=.04,r=2)=>new Mc(i,e,t,r,Math.min(n,i/2-.001,e/2-.001,t/2-.001)),ne=(i,e,t=32,n=i,r=!1)=>new yt(n,i,e,t,1,r);function mE(i,e,t=4){let n=[],r=i.map(s=>new pe(s[0],s[1]));n.push(r[0].clone());for(let s=1;s<r.length-1;s++){let o=r[s-1],a=r[s],c=r[s+1],l=new pe().subVectors(o,a),u=l.length();l.normalize();let d=new pe().subVectors(c,a),h=d.length();d.normalize();let f=Math.min(e,u*.45,h*.45);if(f<1e-4||Math.abs(l.dot(d))>.999){n.push(a.clone());continue}let p=a.clone().addScaledVector(l,f),v=a.clone().addScaledVector(d,f);for(let g=0;g<=t;g++){let m=g/t,b=(1-m)*(1-m)*p.x+2*(1-m)*m*a.x+m*m*v.x,y=(1-m)*(1-m)*p.y+2*(1-m)*m*a.y+m*m*v.y;n.push(new pe(Math.max(0,b),y))}}return n.push(r[r.length-1].clone()),n}function Ot(i,e=.05,t=48,n=0,r=Math.PI*2){return new qi(mE(i,e),t,n,r)}function wi(i,e,t,n=.05,r=!0,s=.06){let o=e+t;return r?[[0,e],[i,e],[i,o],[i-n,o],[i-n,e+s],[0,e+s]]:[[0,o-n],[i-n,o-n],[i-n,e+s],[0,e+s],[0,e],[i,e],[i,o],[0,o]]}function Wt(i,e,t,n=.18,r=.085,s=E.steel){let o=t.clone().normalize(),a=e.clone().addScaledVector(o,n);return i.rod(e.clone().addScaledVector(o,-.03),a,r,s,16),i.rod(a.clone().addScaledVector(o,-.045),a,r*1.65,s,20),a}function wc(i,e,t,n,r=.28,s=E.steelDark){let o=new x(Math.sin(n),0,Math.cos(n)),a=o.clone().multiplyScalar(e);i.rod(a.clone().addScaledVector(o,-.02),a.clone().addScaledVector(o,.07),r,s,24),i.rod(a.clone().addScaledVector(o,.07),a.clone().addScaledVector(o,.1),r*.82,s,24),i.rod(a.clone().addScaledVector(o,.1).add(new x(0,r*.35,0)),a.clone().addScaledVector(o,.1).add(new x(0,-r*.35,0)),.015,E.steel,6)}function Fn(i,e,t=1,n=1.4,r=E.rail){for(let o=0;o<e.length-1;o++){let a=e[o],c=e[o+1],l=a.distanceTo(c),u=Math.max(1,Math.ceil(l/n));for(let d=0;d<=u;d++){if(d===0&&o>0)continue;let h=a.clone().lerp(c,d/u);i.rod(h,h.clone().add(new x(0,t,0)),.022,r,6)}i.rod(a.clone().setY(a.y+t),c.clone().setY(c.y+t),.022*1.15,r,8),i.rod(a.clone().setY(a.y+t*.5),c.clone().setY(c.y+t*.5),.022*.9,r,6)}}function Ti(i,e,t,n,r=!1,s=.42){let o=n.clone().normalize(),a=new x(0,1,0).cross(o).normalize(),c=e.clone().addScaledVector(a,-s/2),l=e.clone().addScaledVector(a,s/2),u=t+.9;i.rod(c,c.clone().setY(u),.022,E.rail,6),i.rod(l,l.clone().setY(u),.022,E.rail,6);for(let d=e.y+.3;d<t+.05;d+=.3)i.rod(c.clone().setY(d),l.clone().setY(d),.014,E.rail,5);if(r){let d=new En(.36,.014,4,12,Math.PI),h=new be().makeBasis(a,o,new x(0,-1,0));for(let f=e.y+2.2;f<=u;f+=.7){let p=e.clone().setY(f).addScaledVector(o,.04);i.add(d,E.rail,new be().makeTranslation(p.x,p.y,p.z).multiply(h))}}}function Rt(i){let e=new _e;e.position.copy(i);let t=new re(ne(.06,.06,12),E.steelDark);t.position.y=.03;let n=Hp(),r=new re(new rt(.055,14,10,0,Math.PI*2,0,Math.PI/2),n);return r.position.y=.06,e.add(t,r),{object:e,set(s,o){let a=vc[s];n.color.setHex(a),n.emissive.setHex(a),n.emissiveIntensity=s==="idle"?.12:o?1.25:.8}}}function ni(i,e=4,t=64){let n=[];for(let[o,a]of i)if(!(o<.02))for(let c=0;c<t;c++){let l=c/t*Math.PI*2,u=(c+1)/t*Math.PI*2;n.push(Math.sin(l)*o,a,Math.cos(l)*o,Math.sin(u)*o,a,Math.cos(u)*o)}for(let o=0;o<e;o++){let a=Math.PI/4+o/e*Math.PI*2;for(let c=0;c<i.length-1;c++){let[l,u]=i[c],[d,h]=i[c+1];n.push(Math.sin(a)*l,u,Math.cos(a)*l,Math.sin(a)*d,h,Math.cos(a)*d)}}let r=new St;r.setAttribute("position",new Oe(n,3));let s=new So(r,E.outline);return s.renderOrder=5,s}function un(i,e){let t=new x().subVectors(e,i),n=new ac(new Gt(t.x,t.y,t.z));n.translate((i.x+e.x)/2,(i.y+e.y)/2,(i.z+e.z)/2);let r=new So(n,E.outline);return r.renderOrder=5,r}function gE(i,e){let t=new re(new wn(i,48),kp());return t.rotation.x=-Math.PI/2,t.position.y=e,t.renderOrder=3,t}function At(i){let e=new _e;return e.name=i.id,e.position.set(i.pos[0],0,i.pos[1]),e}function Ct(i){let e={active:!1,selected:!1,flow:0,motion:0,status:"idle"},t=i.root.position.clone(),n={};for(let[a,c]of Object.entries(i.localAnchors))n[a]=c.clone().add(t);let r={min:[i.localBox.min[0]+t.x,i.localBox.min[1],i.localBox.min[2]+t.z],max:[i.localBox.max[0]+t.x,i.localBox.max[1],i.localBox.max[2]+t.z]};i.outline.visible=!1,i.root.add(i.outline);let s=gE(i.glowRadius,i.glowY);s.visible=!1,i.root.add(s),i.root.add(i.lamp.object),i.lamp.set("idle",!1);for(let a of i.pickTargets)a.userData.unitId=i.spec.id;let o=()=>{i.lamp.set(e.status,e.active),i.onState?.(e)};return{id:i.spec.id,root:i.root,anchors:n,radius:i.radius,footprint:r,pickTargets:i.pickTargets,setActive(a){e.active=a,o()},setSelected(a){e.selected=a,i.outline.visible=a,s.visible=a},setFlowLevel(a){e.flow=zs(a),o()},setInternalMotion(a){e.motion=zs(a),o()},setStatus(a){e.status=a,o()},update(a){i.animate?.(a,e)}}}var zs=i=>i<0?0:i>1?1:Number.isFinite(i)?i:0,xE=new be,vE=new x,Od=new x,Gp=new bt,bE=new en;function $i(i,e,t,n,r,s,o=0,a=0,c=0){typeof s=="number"?Od.set(s,s,s):Od.set(s[0],s[1],s[2]),Gp.setFromEuler(bE.set(o,a,c)),i.setMatrixAt(e,xE.compose(vE.set(t,n,r),Gp,Od))}function Fs(i){return Math.atan2(i[0],i[2])}function an(i,e,t,n,r,s,o){let a=Math.max(8,Math.ceil(s/(Math.PI*2)*64)),c=new En(e,t,8,a,s);i.add(c,o,M(0,n,0,0,r-Math.PI/2,0).multiply(M(0,0,0,-Math.PI/2,0,0)))}function Os(i,e,t,n){let r=(d,h,f)=>new x(Math.sin(f)*d,h,Math.cos(f)*d);for(let d of[t.phi-t.halfWidth,t.phi+t.halfWidth])for(let h=0;h<n.length-1;h++)i.rod(r(n[h][0]+.01,n[h][1],d),r(n[h+1][0]+.01,n[h+1][1],d),.03,E.steelDark,8);let[s,o]=n[0],[a,c]=n[n.length-1];an(i,s+.01,.03,o,t.phi-t.halfWidth,2*t.halfWidth,E.steelDark),an(i,a+.01,.03,c,t.phi-t.halfWidth,2*t.halfWidth,E.steelDark);let l=n.map(([d,h])=>new pe(d-.02,h)),u=new re(new qi(l,24,t.phi-t.halfWidth,2*t.halfWidth),E.glass);return u.renderOrder=2,e.add(u),u}var mn={feedHeaderY:4.2,feedHeaderZ:-2.2,collectorY:2.85,collectorZ:2.4,collectorTurnX:6,homogRiserX:-20.4,pipeR:.085,trunkR:.105,sludgeR:.075,chemR:.035,cornerR:.24,gasY:4.8,gasZ:.5,gasX:6.3,purgeY:.45,purgeZ:2,purgeX:-9.6,trenchY:-.2,purgeTrenchX:[4.5,5.9],chemY:{coag:3.45,floc:3.55},returnX:-20,returnZ:-5.75,thickBedRiserX:-16.9,thickBedDropX:-11.6},Ve=(i,e,t)=>new x(i,e,t);function yE(i,e,t){let n=mn,r;if(i.id==="p-inlet")r=[e,Ve(e.x,t.y,e.z),t];else if(i.id==="p-homog-coag")r=[e,Ve(n.homogRiserX,e.y,e.z),Ve(n.homogRiserX,t.y,e.z),t];else if(i.id.startsWith("p-feed-")){let s=n.feedHeaderY,o=n.feedHeaderZ;r=[e,Ve(e.x,s,e.z),Ve(e.x,s,o),Ve(t.x,s,o),Ve(t.x,s,t.z),t]}else if(/^p-uasb\d-clar2$/.test(i.id)){let s=n.collectorY,o=n.collectorZ,a=n.collectorTurnX;r=[e,Ve(e.x,s,e.z),Ve(e.x,s,o),Ve(a,s,o),Ve(a,s,t.z),Ve(a,t.y,t.z),t]}else if(i.id==="p-screen-homog")r=[e,Ve(e.x,t.y,e.z),t];else if(i.id.startsWith("p-gas-")){let s=n.gasY;r=[e,Ve(e.x,s,e.z),Ve(n.gasX,s,e.z),Ve(n.gasX,s,t.z),Ve(t.x,s,t.z),t]}else if(i.id.startsWith("p-purge-")){let s=n.purgeY,o=n.purgeZ,a=n.purgeX;r=[e,Ve(e.x,s,e.z),Ve(e.x,s,o),Ve(a,s,o),Ve(a,s,t.z),t]}else if(i.id==="p-clar2-thick"){let s=n.purgeY,o=n.purgeZ,a=n.purgeX,c=n.trenchY,[l,u]=n.purgeTrenchX;r=[e,Ve(e.x,c,e.z),Ve(e.x,c,o),Ve(l,c,o),Ve(l,s,o),Ve(a,s,o),Ve(a,s,t.z),t]}else if(i.id==="p-clar1-thick"){let s=n.purgeY,o=n.purgeZ,a=n.purgeX,c=n.trenchY;r=[e,Ve(e.x,c,e.z),Ve(a,c,e.z),Ve(a,c,o-.6),Ve(a,s,o-.6),Ve(a,s,t.z),t]}else if(i.id==="p-thick-bed"){let s=n.trenchY;r=[e,Ve(n.thickBedDropX,e.y,e.z),Ve(n.thickBedDropX,s,e.z),Ve(n.thickBedRiserX,s,e.z),Ve(n.thickBedRiserX,t.y,e.z),Ve(n.thickBedRiserX,t.y,t.z),t]}else if(i.id==="p-bed-return"){let s=n.trenchY;r=[e,Ve(e.x,s,e.z),Ve(n.returnX,s,e.z),Ve(n.returnX,s,n.returnZ),Ve(t.x,s,n.returnZ),Ve(t.x,s,t.z),t]}else if(i.id==="p-dosC-coag"||i.id==="p-dosF-floc"){let s=i.id==="p-dosC-coag"?n.chemY.coag:n.chemY.floc;r=[e,Ve(e.x,s,e.z),Ve(e.x,s,t.z),Ve(t.x,s,t.z),t]}else if(i.id==="p-inter-pumpB")r=[e,Ve(-4.6,e.y,e.z),Ve(-4.6,e.y,t.z),t];else if(i.id==="p-pumpB-header")r=[e,Ve(e.x,t.y,e.z),t];else if(i.id==="p-clar1-inter"||i.id==="p-clar2-mbbr")r=[e,Ve(t.x,e.y,e.z),t];else if(i.id==="p-mbbr-filtro"){let s=e.z+.7;r=[e,Ve(e.x,e.y,s),Ve(e.x,t.y,s),Ve(e.x,t.y,t.z),t]}else r=[e,Ve(t.x,e.y,e.z),Ve(t.x,e.y,t.z),t];return Wp(r)}function Wp(i){let e=[];for(let t of i)(!e.length||e[e.length-1].distanceTo(t)>1e-4)&&e.push(t.clone());for(let t=e.length-2;t>=1;t--){let n=e[t].clone().sub(e[t-1]).normalize(),r=e[t+1].clone().sub(e[t]).normalize();n.dot(r)>.9999&&e.splice(t,1)}return e}function EE(i){let e=0;for(let t=1;t<i.length;t++)e+=i[t].distanceTo(i[t-1]);return e}var vr=new x(0,1,0);function Gd(i){return vr.clone().addScaledVector(i,-i.y).normalize()}function _E(i,e,t){let n=Math.atan2(i.z,i.x),r=Math.atan2(e.z,e.x)-n;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;let s=n+r*t;return new x(Math.cos(s),0,Math.sin(s))}function ME(i,e,t=8){let n=i.length,r=[],s=[],o=[0];for(let u=0;u<n-1;u++){let d=i[u+1].clone().sub(i[u]);s.push(d.length()),r.push(d.normalize()),o.push(o[u]+s[u])}let a=new Array(n).fill(0);for(let u=1;u<n-1;u++)a[u]=Math.min(e,.45*s[u-1],.45*s[u]);let c=u=>Math.abs(u.y)>.999,l=[];for(let u=0;u<n-1;u++){let d=i[u].clone().addScaledVector(r[u],a[u]),h=i[u+1].clone().addScaledVector(r[u],-a[u+1]),f=o[u]+a[u],p=o[u+1]-a[u+1];if(c(r[u])){let v=Math.sign(r[u].y),g=u>0&&!c(r[u-1])?r[u-1].clone().multiplyScalar(-v):null,m=u<n-2&&!c(r[u+1])?r[u+1].clone().multiplyScalar(-v):null,b=g??m??new x(1,0,0),y=m??b,_=b.dot(y)>.999?1:12;for(let R=0;R<=_;R++){let S=R/_;l.push({c:d.clone().lerp(h,S),t:r[u].clone(),n:_E(b,y,S),s:f+(p-f)*S})}}else l.push({c:d,t:r[u].clone(),n:Gd(r[u]),s:f}),l.push({c:h,t:r[u].clone(),n:Gd(r[u]),s:p});if(u<n-2&&a[u+1]>1e-4){let v=r[u],g=r[u+1],m=a[u+1],y=i[u+1].clone().addScaledVector(v,-m).addScaledVector(g,m);for(let _=1;_<t;_++){let R=_/t*Math.PI/2,S=y.clone().addScaledVector(g,-m*Math.cos(R)).addScaledVector(v,m*Math.sin(R)),P=v.clone().multiplyScalar(Math.cos(R)).addScaledVector(g,Math.sin(R)).normalize();l.push({c:S,t:P,n:Gd(P),s:o[u+1]-m+2*m*(_/t)})}}}return l}var Wd=class{constructor(e){this.length=e;this.pos=[];this.nrm=[];this.uv=[];this.aS=[];this.idx=[]}addRings(e,t,n=14){let r=this.pos.length/3;for(let s of e){let o=new x().crossVectors(s.n,s.t);for(let a=0;a<=n;a++){let c=a/n*Math.PI*2,l=Math.cos(c)*s.n.x+Math.sin(c)*o.x,u=Math.cos(c)*s.n.y+Math.sin(c)*o.y,d=Math.cos(c)*s.n.z+Math.sin(c)*o.z;this.pos.push(s.c.x+t*l,s.c.y+t*u,s.c.z+t*d),this.nrm.push(l,u,d),this.uv.push(s.s/this.length,a/n),this.aS.push(s.s)}}for(let s=1;s<e.length;s++)for(let o=1;o<=n;o++){let a=r+(n+1)*(s-1)+(o-1),c=r+(n+1)*s+(o-1),l=r+(n+1)*s+o,u=r+(n+1)*(s-1)+o;this.idx.push(a,c,u,c,l,u)}}addStatic(e,t,n){let r=(e.index,e),s=r.attributes.position,o=r.attributes.normal,a=new ot().getNormalMatrix(t),c=this.pos.length/3,l=new x;for(let u=0;u<s.count;u++)l.fromBufferAttribute(s,u).applyMatrix4(t),this.pos.push(l.x,l.y,l.z),l.fromBufferAttribute(o,u).applyMatrix3(a).normalize(),this.nrm.push(l.x,l.y,l.z),this.uv.push(n/this.length,.5),this.aS.push(n);if(r.index)for(let u=0;u<r.index.count;u++)this.idx.push(c+r.index.getX(u));else for(let u=0;u<s.count;u++)this.idx.push(c+u)}build(){let e=new St;return e.setAttribute("position",new Oe(this.pos,3)),e.setAttribute("normal",new Oe(this.nrm,3)),e.setAttribute("uv",new Oe(this.uv,2)),e.setAttribute("aS",new Oe(this.aS,1)),e.setIndex(this.idx),e.computeBoundingSphere(),e}};function Tc(i,e,t=1){let n=new bt().setFromUnitVectors(vr,e.clone().normalize());return new be().compose(i,n,new x(1,t,1))}var Xd=class{constructor(e,t,n){this.mesh=e;this.uniforms=t;this.length=n;this.members=[]}refresh(e){let t=0,n=0,r=!1,s=!1;for(let a of this.members){let c=a.run;c.visibleFlag&&(s=!0,t=Math.max(t,c.flowValue),n=Math.max(n,Math.min(this.length,Math.max(0,c.frontValue*c.length-a.offset))),r=r||c.highlighted)}let o=this.uniforms;o.uTime.value=e,o.uFlow.value=t,o.uFront.value=n,o.uHighlight.value=r?1:0,this.mesh.visible=s}},qd=class{constructor(e,t,n,r,s){this.id=e;this.kind=t;this.from=n;this.to=r;this.points=s;this.root=new _e;this.flowValue=0;this.frontValue=0;this.highlighted=!1;this.visibleFlag=!0;this.tubes=[];this.cum=[0];for(let o=1;o<s.length;o++)this.cum.push(this.cum[o-1]+s[o].distanceTo(s[o-1]));this.length=this.cum[this.cum.length-1],this.root.name=e}pointAt(e){let t=zs(e)*this.length,n=1;for(;n<this.cum.length-1&&this.cum[n]<t;)n++;let r=this.cum[n]-this.cum[n-1],s=r>1e-9?(t-this.cum[n-1])/r:0;return this.points[n-1].clone().lerp(this.points[n],s)}setFlow(e){this.flowValue=zs(e)}setFront(e){this.frontValue=zs(e)}setHighlighted(e){this.highlighted=e}setVisible(e){this.visibleFlag=e;for(let t of this.tubes)t.refresh(t.uniforms.uTime.value)}update(e){for(let t of this.tubes)t.refresh(e)}},qr=i=>`${i.x.toFixed(3)},${i.y.toFixed(3)},${i.z.toFixed(3)}`;function wE(i,e,t){let n=t.clone().sub(e),r=n.length();if(r<1e-6)return null;let s=i.clone().sub(e).dot(n)/(r*r);return s<=1e-6||s>=1-1e-6?null:e.clone().addScaledVector(n,s).distanceTo(i)<1e-4?s:null}function TE(i){let e=[],t=new Map;for(let n of i){let r=n.group;r&&i.filter(s=>s.group===r).length>1?(t.has(r)||t.set(r,[]),t.get(r).push(n)):e.push({points:n.points.map(s=>s.clone()),owners:[n.id],members:[{id:n.id,offset:0}],kind:n.kind,startJunction:!1,endJunction:!1})}for(let n of t.values()){let r=n.flatMap(c=>c.points),s=new Map;for(let c of n){let l=[c.points[0].clone()];for(let u=1;u<c.points.length;u++){let d=c.points[u-1],h=c.points[u],f=r.map(p=>({v:p,t:wE(p,d,h)})).filter(p=>p.t!==null);f.sort((p,v)=>p.t-v.t);for(let p of f)l[l.length-1].distanceTo(p.v)>1e-4&&l.push(p.v.clone());l.push(h.clone())}s.set(c.id,l)}let o=new Map;for(let[c,l]of s)for(let u=1;u<l.length;u++){let d=qr(l[u-1])+">"+qr(l[u]);o.has(d)||o.set(d,new Set),o.get(d).add(c)}let a=new Map;for(let c of n){let l=s.get(c.id),u=1,d=0;for(;u<l.length;){let h=[...o.get(qr(l[u-1])+">"+qr(l[u]))].sort(),f=h.join("|"),p=[l[u-1]],v=d;for(;u<l.length&&[...o.get(qr(l[u-1])+">"+qr(l[u]))].sort().join("|")===f;)d+=l[u].distanceTo(l[u-1]),p.push(l[u]),u++;let g=f+"@"+qr(p[0]),m=a.get(g);m||(m={points:Wp(p),owners:h,members:[],kind:c.kind,startJunction:v>1e-6,endJunction:u<l.length},a.set(g,m),e.push(m)),m.members.push({id:c.id,offset:v})}}}return e}function SE(i,e){return i==="chemical"?mn.chemR:e?i==="sludge"?mn.sludgeR*1.2:mn.trunkR:i==="sludge"||i==="return"?mn.sludgeR:mn.pipeR}function RE(i,e,t){let n=EE(i.points),r=new Wd(n),s=ME(i.points,mn.cornerR);r.addRings(s,e);let o=new yt(1,1,1,22),a=s[0],c=s[s.length-1],l=(g,m,b)=>{let y=Tc(g,m,.045).multiply(new be().makeScale(e*1.65,1,e*1.65));r.addStatic(o,y,b)};t.flangeStart&&l(a.c.clone().addScaledVector(a.t,.0225),a.t,0),t.flangeEnd&&l(c.c.clone().addScaledVector(c.t,-.0225),c.t,n);let u=new rt(1,16,12),d=(g,m,b)=>{r.addStatic(u,new be().compose(g,new bt,new x().setScalar(t.junctionR*1.18)),b);let y=Tc(g.clone().addScaledVector(m,b===0?.1:-.1),m,.1).multiply(new be().makeScale(e*1.3,1,e*1.3));r.addStatic(o,y,b)};i.startJunction&&d(a.c,a.t,0),i.endJunction&&d(c.c,c.t,n);let h=Ns[i.kind],{material:f,uniforms:p}=Dp(h.pipe,h.fluid);p.uLength.value=n;let v=new re(r.build(),f);return v.castShadow=!0,v.receiveShadow=!0,new Xd(v,p,n)}function Xp(i,e,t){let n=new _e;n.name="pipes";let r=new Map,s=[];for(let p of i){let[v,g]=e(p),m=yE(p,v,g);r.set(p.id,new qd(p.id,p.kind,p.from,p.to,m));let b=i.filter(R=>R.from===p.from&&R.fromPort===p.fromPort&&R.from!=="world").length>1,y=i.filter(R=>R.to===p.to&&R.toPort===p.toPort&&R.to!=="world").length>1,_=b?`from:${p.from}.${p.fromPort}`:y?`to:${p.to}.${p.toPort}`:null;s.push({id:p.id,kind:p.kind,points:m,group:_})}let o=new Map(i.map(p=>[p.id,p])),a=TE(s),c=[],l=new Ie;for(let p of a){let v=p.owners.length>1,g=SE(p.kind,v),m=p.members[0],b=r.get(m.id),y=o.get(m.id),_=!p.startJunction&&y.from!=="world",R=o.get(p.members[p.members.length-1].id),S=!p.endJunction&&y.to!=="world"&&R.toPort!=="header",P=RE(p,g,{flangeStart:_,flangeEnd:S,junctionR:mn.trunkR});for(let L of p.members){let w=r.get(L.id);P.members.push({run:w,offset:L.offset}),w.tubes.push(P)}P.mesh.userData.pipeIds=p.owners,b.root.add(P.mesh),IE(l,p.points,g,t,c),CE(l,p.points)}LE(l,r,a);let u=r.get("p-pumpB-header");if(u){let p=u.points[u.points.length-1];l.add(new rt(mn.trunkR*1.25,16,12),E.steelDark,M(p.x,p.y,p.z))}let d=r.get("p-outfall");if(d){let p=d.points[d.points.length-1];l.add(ne(mn.pipeR*1.6,.05,22),E.steelDark,M(p.x,p.y,p.z-.025,Math.PI/2,0,0))}for(let p of r.values())n.add(p.root);let h=l.build(n);for(let p of h)p.name="pipe-supports";let f={};for(let[p,v]of r)f[p]=v;return n.userData.supports=c,{root:n,pipes:f,supports:c}}function AE(i,e,t,n){return t.some(r=>i>r.min[0]-n&&i<r.max[0]+n&&e>r.min[2]-n&&e<r.max[2]+n)}function CE(i,e){for(let t=1;t<e.length;t++){let n=e[t-1],r=e[t];if(n.y>=0||r.y>=0)continue;let s=new x().subVectors(r,n).setY(0),o=s.length();if(o<.001)continue;let a=.25,c=Math.atan2(s.x,s.z),l=n.clone().add(r).multiplyScalar(.5);i.add(C(.56,.03,o+a*2,.008),E.grating,M(l.x,.028,l.z,0,c,0));let u=new x(Math.cos(c),0,-Math.sin(c));for(let f of[-1,1]){let p=l.clone().addScaledVector(u,f*.3);i.add(C(.05,.035,o+a*2,.008),E.steelDark,M(p.x,.02,p.z,0,c,0))}let d=Math.floor((o+a*2)/.18),h=s.clone().normalize();for(let f=0;f<=d;f++){let p=n.clone().addScaledVector(h,-a+f*.18);i.add(C(.54,.012,.025,.004),E.steelDark,M(p.x,.046,p.z,0,c,0))}}}function IE(i,e,t,n,r){for(let s=1;s<e.length;s++){let o=e[s-1],a=e[s];if(Math.abs(o.y-a.y)>.001||o.y<0)continue;let c=o.distanceTo(a);if(c<1.4)continue;let l=o.y,u=a.clone().sub(o).normalize(),d=new x(-u.z,0,u.x),h=Math.max(1,Math.round(c/3));for(let f=0;f<h;f++){let p=(f+.5)/h,v=o.clone().lerp(a,p);if(AE(v.x,v.z,n,.3))continue;let g=Math.atan2(d.x,d.z);if(l-t<.55){let R=Math.max(.05,l-t);i.add(C(.22,R,.42,.03),E.concreteDark,M(v.x,R/2,v.z,0,g,0)),r.push({min:[v.x-.22,0,v.z-.22],max:[v.x+.22,l+t,v.z+.22]});continue}let m=l>3,b=m?.13:.08,y=l-t-.06;i.add(C(b,y,b,.015),E.steelBlue,M(v.x,y/2,v.z)),r.push({min:[v.x-b*1.3,0,v.z-b*1.3],max:[v.x+b*1.3,l+t,v.z+b*1.3]}),i.add(C(b*2.6,.03,b*2.6,.01),E.steelDark,M(v.x,.015,v.z)),i.add(C(m?.7:.42,.06,.07,.012),E.steelBlue,M(v.x,y+.03,v.z,0,g+Math.PI/2,0));let _=new bt().setFromUnitVectors(new x(0,0,1),u);if(i.add(new En(t+.012,.012,6,18),E.steel,new be().compose(v,_,new x(1,1,1))),m){let R=v.clone().setY(y-.55).addScaledVector(d,0),S=v.clone().setY(y).addScaledVector(d,.3);i.rod(R,S,.025,E.steelBlue,6)}}}}function Vs(i,e,t,n,r){let s=Tc(e,t,.2);i.add(ne(n*1.75,1,20),E.steelDark,s),i.add(new rt(n*1.55,16,10),E.steelDark,M(e.x,e.y,e.z));let o=e.clone().addScaledVector(r,n*1.5),a=e.clone().addScaledVector(r,n*1.5+.22);i.rod(o,a,.025,E.steel,8);let c=new bt().setFromUnitVectors(new x(0,0,1),r);i.add(new En(.1,.016,8,24),E.rail,new be().compose(a,c,new x(1,1,1)))}function PE(i,e,t,n){i.add(ne(n*1.9,1,22),E.steelDark,Tc(e,t,.09));let r=e.clone().setY(e.y+n*1.9);i.rod(r,r.clone().setY(r.y+.1),.02,E.steel,6);let s=new x(-t.z,0,t.x).normalize();i.rod(r.clone().setY(r.y+.1),r.clone().setY(r.y+.1).addScaledVector(t,.22).addScaledVector(s,0),.016,E.rail,6)}function LE(i,e,t){let n=t.find(c=>c.owners.length===4&&c.kind==="pumped");if(n&&n.points.length>1){let c=n.points[0];Vs(i,new x(c.x,1.75,c.z),vr,mn.trunkR,new x(0,0,1)),i.add(ne(mn.trunkR*1.5,.26,18),E.steelDark,M(c.x,1.25,c.z))}for(let c of t){if(c.kind!=="pumped"||c.owners.length!==1)continue;let l=c.points;for(let u=1;u<l.length;u++){let d=l[u].clone().sub(l[u-1]);if(Math.abs(d.z)>1&&Math.abs(d.y)<.001){PE(i,l[u-1].clone().lerp(l[u],.5),d.normalize(),mn.pipeR);break}}}let r=e.get("p-inter-pump");if(r){let c=r.pointAt(.78);Vs(i,c,new x(1,0,0),mn.pipeR,vr)}let s=e.get("p-inter-pumpB");if(s){let c=s.points[s.points.length-1],l=s.points[s.points.length-2];Vs(i,l.clone().lerp(c,.45),new x(1,0,0),mn.pipeR,vr)}let o=e.get("p-pumpB-header");if(o){let c=o.points[0];Vs(i,new x(c.x,1.75,c.z),vr,mn.pipeR,new x(0,0,1)),i.add(ne(mn.pipeR*1.5,.26,18),E.steelDark,M(c.x,1.25,c.z))}for(let[c,l]of e){if(!c.startsWith("p-gas-"))continue;let u=l.points[0];Vs(i,new x(u.x,u.y+.45,u.z),vr,mn.pipeR,new x(0,0,1))}let a=e.get("p-gas-uasb1");if(a){let c=a.points[a.points.length-1];Vs(i,new x(c.x,3.3,c.z),vr,mn.trunkR,new x(1,0,0))}}function Sc(i,e,t,n){let r=Math.max(2,Math.ceil(Math.abs(n-t)/(Math.PI/22))),s=[];for(let o=0;o<=r;o++){let a=t+(n-t)*(o/r);s.push([i[0]+e*Math.cos(a),i[1]+e*Math.sin(a)])}return s}function qp(i){let e=[];for(let t of i)(!e.length||Math.hypot(t[0]-e[e.length-1][0],t[1]-e[e.length-1][1])>1e-4)&&e.push(t);return e}var br=gt.loop,On=gt.z,Si=br.r,Rc={ne:[gt.endX,On+Si],se:[gt.endX,br.southZ-Si],sw:[br.westX+Si,br.southZ-Si],exit:[br.westX-Si,On+Si]};function Yp(i,e,t,n,r=10){let s=[];for(let o=0;o<=r;o++){let a=o/r,c=.5-.5*Math.cos(Math.PI*a);s.push([i+(t-i)*a,e+(n-e)*c])}return s}var Zi=(()=>{let i=Bd,e=qp([[i.spawnX,i.laneIn],...Yp(i.shiftX0,i.laneIn,i.shiftX1,On),[gt.endX,On]]),t=qp([[gt.endX,On],...Sc(Rc.ne,Si,-Math.PI/2,0),...Sc(Rc.se,Si,0,Math.PI/2),...Sc(Rc.sw,Si,Math.PI/2,Math.PI),...Sc(Rc.exit,Si,0,-Math.PI/2),...Yp(i.shiftX1,On,i.shiftX0,i.laneOut),[i.despawnX,i.laneOut]]);return{entry:e,loop:t}})();function Cc(i,e){let t=1/0;for(let n of[Zi.entry,Zi.loop])for(let r=1;r<n.length;r++){let[s,o]=n[r-1],[a,c]=n[r],l=a-s,u=c-o,d=l*l+u*u,h=d>0?Math.max(0,Math.min(1,((i-s)*l+(e-o)*u)/d)):0;t=Math.min(t,Math.hypot(i-(s+h*l),e-(o+h*u)))}return t}function Ac(i,e){return i.map((t,n)=>{let r=i[Math.max(0,n-1)],s=i[Math.min(i.length-1,n+1)],o=s[0]-r[0],a=s[1]-r[1],c=Math.hypot(o,a)||1;return o/=c,a/=c,[t[0]+a*e,t[1]-o*e]})}function Yd(i,e=!1){let t=We.minX+.05,n=[],r=s=>s[0]>=t!==e;for(let s=0;s<i.length;s++){let o=i[s],a=r(o);if(s>0){let c=i[s-1],l=r(c);if(a!==l){let u=(t-c[0])/(o[0]-c[0]);n.push([t,c[1]+(o[1]-c[1])*u])}}a&&n.push(o)}return n}function Ho(i,e,t){let n=Ac(i,e),r=Ac(i,-e),s=[],o=[],a=[],c=[],l=0;for(let v=0;v<i.length;v++)if(v>0&&(l+=Math.hypot(i[v][0]-i[v-1][0],i[v][1]-i[v-1][1])),s.push(n[v][0],t,n[v][1],r[v][0],t,r[v][1]),o.push(0,1,0,0,1,0),a.push(l/4,0,l/4,1),v>0){let g=2*v;c.push(g-2,g-1,g,g-1,g+1,g)}let u=new St;u.setAttribute("position",new Oe(s,3)),u.setAttribute("normal",new Oe(o,3)),u.setAttribute("uv",new Oe(a,2)),u.setIndex(c);let d=new x(s[0],s[1],s[2]),h=new x(s[3],s[4],s[5]),f=new x(s[6],s[7],s[8]);if(new x().subVectors(h,d).cross(new x().subVectors(f,d)).y<0){for(let v=0;v<c.length;v+=3){let g=c[v];c[v]=c[v+1],c[v+1]=g}u.setIndex(c)}return u}function $p(i,e){let t=[],n=[],r=[];for(let s=1;s<i.length;s++){let[o,a]=i[s-1],[c,l]=i[s],u=Math.max(1,Math.ceil(Math.hypot(c-o,l-a)/.4));for(let d=0;d<u;d++)r.push([o+(c-o)*d/u,a+(l-a)*d/u])}r.push(i[i.length-1]);for(let s of r)Cc(s[0],s[1])<e||s[0]<We.minX+.05?n.length&&(n.length>1&&t.push(n),n=[]):n.push(s);return n.length>1&&t.push(n),t}function Zp(){let i=new _e;i.name="road";let e=gt.width/2,t=new Ie,n=new Ie,r=[],s=Yd(Zi.entry),o=Yd(Zi.loop);t.add(Ho(s,e,.012),Fe.asphalt),t.add(Ho(o,e,.013),Fe.asphalt);for(let I of[s,o])for(let B of[1,-1]){for(let X of $p(Ac(I,B*(e+.08)),e-.02))for(let V=1;V<X.length;V++){let[Q,se]=X[V-1],[le,Ae]=X[V],at=Math.hypot(le-Q,Ae-se);t.add(C(.16,.12,at+.02,.02),Fe.curb,M((Q+le)/2,.06,(se+Ae)/2,0,Math.atan2(le-Q,Ae-se),0))}for(let X of $p(Ac(I,B*(e-.25)),e-.4))for(let V=1;V<X.length;V++){let[Q,se]=X[V-1],[le,Ae]=X[V],at=Math.hypot(le-Q,Ae-se);n.add(new Je(.1,at+.01).rotateX(-Math.PI/2),Fe.roadPaint,M((Q+le)/2,.02,(se+Ae)/2,0,Math.atan2(le-Q,Ae-se),0))}}let a=[[-29,On,Math.PI/2],[-15,9,0],[-21,br.southZ+0,-Math.PI/2],[-28.8,9,Math.PI]];for(let[I,B,X]of a)for(let V of[-1,1])n.add(new Je(.12,.9).rotateX(-Math.PI/2),Fe.roadPaint,M(I+Math.sin(X)*0+V*.28*Math.cos(X),.021,B-V*.28*Math.sin(X),0,X+V*.6,0));let c=gt.chemStop,l=Le.control.pos,u=c.x-3.2,d=c.x+6.2;for(let I of[On-e+.35,On+e-.35])n.add(new Je(d-u,.12).rotateX(-Math.PI/2),Fe.roadPaintYellow,M((u+d)/2,.022,I));for(let I of[u,d])n.add(new Je(.12,gt.width-.7).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(I,.022,On));for(let I=0;I<4;I++)n.add(new Je(.12,1.2).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(u+.6+I*.45,.022,On,0,.75,0));t.add(C(6.4,.03,1.05,.01),Fe.apron,M(l[0]-.2,.015,On-e-.52));let h=Le.sludge,f=h.size.w,p=h.size.l,v=h.pos[1]+p/2,g=br.southZ-e;t.add(C(f,.03,g-v+.1,.01),Fe.apron,M(h.pos[0],.015,(v+g)/2));let m=gt.sludgeStop;for(let I of[m.x-5.2,m.x+1.6])n.add(new Je(.12,gt.width-.7).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(I,.022,br.southZ));let b=We.minX+.45,y=On-e-.45,_=On+e+.45;for(let I of[y,_])t.add(C(.22,2.2,.22,.03),E.steelDark,M(b,1.1,I)),t.add(C(.3,.05,.3,.01),E.steelBlue,M(b,2.22,I));t.add(C(.08,.04,5,.01),E.steelDark,M(b-.2,.02,y-2));let R=y-2.4,S=_-y-.3;for(let I of[.15,1.85])t.add(C(.06,.07,S,.01),E.rail,M(b-.2,I,R));for(let I=0;I<=12;I++)t.add(C(.03,1.7,.03,.005),E.rail,M(b-.2,1,R-S/2+I*(S/12)));for(let I of[R-S/2+.3,R+S/2-.3])t.add(ne(.07,.05,12),E.rubber,M(b-.2,.08,I,0,0,Math.PI/2));t.add(C(.12,.12,.12,.02),Fe.roadPaintYellow,M(b,2.3,_));let P=b+1.1,L=_+1.35;t.add(C(1.4,2.4,1.4,.05),Fe.wall,M(P,1.2,L)),t.add(C(1.6,.12,1.6,.03),E.steelBlue,M(P,2.46,L)),t.add(C(.9,.7,.02,.01),E.glass,M(P,1.5,L-.71)),t.add(C(.02,.7,.9,.01),E.glass,M(P+.71,1.5,L)),r.push({id:"gate-post-n",min:[b-.11,0,y-.11],max:[b+.11,2.3,y+.11]}),r.push({id:"gate-post-s",min:[b-.11,0,_-.11],max:[b+.11,2.3,_+.11]}),r.push({id:"gate-leaf",min:[b-.25,0,R-S/2],max:[b-.15,1.9,R+S/2]}),r.push({id:"guard-hut",min:[P-.8,0,L-.8],max:[P+.8,2.5,L+.8]});let w=Bd,T=I=>Yd(I,!0),H=T(Zi.entry),N=T(Zi.loop);t.add(Ho(H,e,.011),Fe.asphalt),t.add(Ho(N,e,.0115),Fe.asphalt);let U=(w.laneIn+w.laneOut)/2;t.add(Ho([[w.farX,U],[w.shiftX0+.5,U]],w.width/2,.0105),Fe.asphalt);for(let I of[U-w.width/2-.45,U+w.width/2+.45])t.add(new Je(w.shiftX0-w.farX,.9).rotateX(-Math.PI/2),Fe.grit,M((w.farX+w.shiftX0)/2,.006,I));for(let I of[U-w.width/2+.25,U+w.width/2-.25])n.add(new Je(w.shiftX0-w.farX,.1).rotateX(-Math.PI/2),Fe.roadPaint,M((w.farX+w.shiftX0)/2,.02,I));for(let I=w.farX+1;I<w.shiftX0-1;I+=3.2)n.add(new Je(1.6,.11).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(I+.8,.02,U));t.build(i,!1,!0);let z=n.build(i,!1,!0);for(let I of z)I.renderOrder=-1;return{group:i,footprints:r}}var yr={minX:-19.6,maxX:-14.5,minZ:-9.1,maxZ:-6.9,stairX:-17,stairW:.8,stairRun:1.8},$r={minX:-9.6,maxX:4.4,minZ:-1.85,maxZ:-.7,deckY:1.95,railH:.95},Yr=(i,e,t,n)=>({id:i,footprint:{min:e,max:t},hosts:n});function Kp(){let i=new _e;i.name="structures";let e=new Ie,t=new Ie,n=[];{let a=yr,c=Le.coag.base,l=(a.minX+a.maxX)/2,u=(a.minZ+a.maxZ)/2,d=a.maxX-a.minX,h=a.maxZ-a.minZ;e.add(C(d,.06,h,.015),E.grating,M(l,c-.03,u));for(let y of[a.minZ,a.maxZ])e.add(C(d,.16,.07,.015),E.steelBlue,M(l,c-.1,y));for(let y of[a.minX,a.maxX])e.add(C(.07,.16,h,.015),E.steelBlue,M(y,c-.1,u));for(let y of[a.minX+.08,l,a.maxX-.08])for(let _ of[a.minZ+.08,a.maxZ-.08])e.add(C(.09,c-.06,.09,.015),E.steelBlue,M(y,(c-.06)/2,_)),e.add(C(.22,.03,.22,.01),E.steelDark,M(y,.015,_));Fn(e,[new x(a.minX+.05,c,a.minZ+.03),new x(a.maxX-.05,c,a.minZ+.03)],1,1.3);let f=a.stairX-a.stairW/2,p=a.stairX+a.stairW/2,v=a.maxZ-.03;Fn(e,[new x(a.minX+.05,c,v),new x(f,c,v)],1,1.3),Fn(e,[new x(p,c,v),new x(a.maxX-.05,c,v)],1,1.3);let g=6,m=c/g,b=a.stairRun/g;for(let y=0;y<g-1;y++){let _=c-m*(y+1),R=a.maxZ+b*(y+.5);e.add(C(a.stairW-.06,.04,b*.92,.01),E.grating,M(a.stairX,_,R))}for(let y of[f,p]){let _=new x(y,c-.05,a.maxZ),R=new x(y,0,a.maxZ+a.stairRun);e.rod(_,R,.035,E.steelBlue,6),Fn(e,[new x(y,c,a.maxZ),new x(y,.05,a.maxZ+a.stairRun)],.95,2.5)}n.push(Yr("platform-deck",[a.minX,0,a.minZ],[a.maxX,c+.02,a.maxZ])),n.push(Yr("platform-rail-n",[a.minX,c,a.minZ-.03],[a.maxX,c+1.02,a.minZ+.06])),n.push(Yr("platform-rail-s",[a.minX,c,a.maxZ-.06],[a.maxX,c+1.02,a.maxZ+.03])),n.push(Yr("platform-stair",[f,0,a.maxZ],[p,c+1,a.maxZ+a.stairRun]))}{let a=$r,c=a.deckY,l=(a.minX+a.maxX)/2,u=(a.minZ+a.maxZ)/2,d=a.maxX-a.minX,h=a.maxZ-a.minZ;e.add(C(d,.06,h,.015),E.grating,M(l,c-.03,u));for(let f of[a.minZ,a.maxZ])e.add(C(d,.18,.07,.015),E.steelBlue,M(l,c-.11,f));for(let f of[a.minX+.1,-6.2,-2.6,1,a.maxX-.1]){for(let p of[a.minZ+.06,a.maxZ-.06])e.add(C(.1,c-.2,.1,.015),E.steelBlue,M(f,(c-.2)/2,p)),e.add(C(.24,.03,.24,.01),E.steelDark,M(f,.015,p));e.add(C(.07,.1,h,.012),E.steelBlue,M(f,c-.25,u))}Fn(e,[new x(a.minX+.05,c,a.minZ+.03),new x(a.maxX-.05,c,a.minZ+.03),new x(a.maxX-.05,c,a.maxZ-.03)],a.railH,1.4),Ti(e,new x(a.minX-.18,0,u),c,new x(-1,0,0),!0),n.push(Yr("catwalk-deck",[a.minX,0,a.minZ],[a.maxX,c+.02,a.maxZ])),n.push(Yr("catwalk-rail",[a.minX,c,a.minZ-.03],[a.maxX,c+a.railH+.03,a.minZ+.08]))}{let[a,c]=pn,l=.9,u=.45,d=.1;e.add(C(l,.06,l,.02),E.concreteDark,M(a,.03,c)),e.add(C(d,u,l,.025),E.concrete,M(a-l/2+d/2,u/2,c)),e.add(C(d,u,l,.025),E.concrete,M(a+l/2-d/2,u/2,c)),e.add(C(l,u,d,.025),E.concrete,M(a,u/2,c-l/2+d/2)),e.add(C(l,u,d,.025),E.concrete,M(a,u/2,c+l/2-d/2)),n.push(Yr("inlet-pit",[a-l/2,0,c-l/2],[a+l/2,u,c+l/2],["p-inlet"]))}let r=(a,c,l,u)=>{let d=Math.abs(l-a),h=Math.abs(u-c);t.add(new Je(Math.max(d,.07),Math.max(h,.07)).rotateX(-Math.PI/2),E.walkway,M((a+l)/2,.004,(c+u)/2))},s=(a,c,l,u,d=.6)=>{Math.abs(u-c)<1e-6?(r(a,c-d,l,c-d),r(a,c+d,l,c+d)):(r(a-d,c,a-d,u),r(a+d,c,a+d,u))};s(-30,-4.6,5,-4.6),s(5.2,-3.9,5.2,3.9),s(-8.6,4.6,17.5,4.6),s(-13.55,-11.2,-13.55,-5.3,.5);for(let[a,c]of[[-1.9,-6.9],[-1.9,-9.1],[-30,-6.9],[-30,-9.1],[-.5,12.6],[2.5,12.6]])e.add(ne(.09,.85,16),E.rail,M(a,.425,c)),e.add(new rt(.09,14,8,0,Math.PI*2,0,Math.PI/2),E.rail,M(a,.85,c)),e.add(ne(.093,.08,16),E.rubber,M(a,.62,c));{let l=We.minX+.45,u=We.maxX-.45,d=We.minZ+.45,h=We.maxZ-.45,f=[[l,d,u,d,!0],[u,d,u,h,!0],[l,h,u,h,!1],[l,d,l,h,!0]];for(let[p,v,g,m,b]of f){let y=Math.hypot(g-p,m-v),_=Math.round(y/4);for(let R=0;R<=_;R++){let S=p+(g-p)*(R/_),P=v+(m-v)*(R/_);Math.abs(P-pn[1])<1.2&&Math.abs(S-We.minX)<1||Math.abs(P-gt.z)<gt.width/2+.6&&Math.abs(S-We.minX)<1||Cc(S,P)<gt.width/2+.25||e.add(C(.06,1.4,.06,.012),E.steelDark,M(S,1.4/2,P))}if(b&&Math.abs(p-g)<1e-6&&Math.abs(p-(We.minX+.45))<1e-6){let R=gt.z-gt.width/2-.6,S=gt.z+gt.width/2+.6;e.rod(new x(p,1.4-.05,v),new x(p,1.4-.05,R),.018,E.steelDark,5),e.rod(new x(p,1.4-.05,S),new x(g,1.4-.05,m),.018,E.steelDark,5)}else b&&e.rod(new x(p,1.4-.05,v),new x(g,1.4-.05,m),.018,E.steelDark,5)}}e.build(i);let o=t.build(i,!1,!1);for(let a of o)a.renderOrder=-1;return i.userData.footprints=n,{group:i,footprints:n}}function Jp(i=Le.homog){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Ie;o.add(Ot([[0,0],[e+.16,0],[e+.16,n],[0,n]],.04,56),E.concrete),o.add(Ot(wi(e,n,t,.07,!0,.08),.05,72),E.sage),an(o,e+.01,.045,r-.01,0,Math.PI*2,E.sageDark);for(let w of[n+.05,n+.95,n+1.8])an(o,e+.012,.028,w,0,Math.PI*2,E.sageDark);wc(o,e,n+.65,-.6);let a=.62;o.add(C(2*e+.3,.07,a,.02),E.grating,M(0,r+.04,0)),o.add(C(2*e+.3,.12,.06,.02),E.steelBlue,M(0,r+.02,a/2)),o.add(C(2*e+.3,.12,.06,.02),E.steelBlue,M(0,r+.02,-a/2));for(let w of[a/2,-a/2])Fn(o,[new x(-e+.1,r+.08,w),new x(e-.1,r+.08,w)],.95,1.1);let c=-2.25;Ti(o,new x(Math.sin(c)*(e+.18),0,Math.cos(c)*(e+.18)),r,new x(Math.sin(c),0,Math.cos(c)),!0);let l=Wt(o,new x(-e+.02,2.45,0),new x(-1,0,0),.17),u=Wt(o,new x(e-.02,.75,0),new x(1,0,0),.17),d=.5,h=Math.sqrt(e*e-d*d);o.rod(new x(d,.55,h-.03),new x(d,.55,e+.35),.075,E.steel,14),o.add(new rt(.085,14,10),E.steel,M(d,.55,e+.35)),o.rod(new x(d,.55,e+.35),new x(d,.35,e+.35),.075,E.steel,14),o.add(ne(.12,.04,20),E.steel,M(d,.37,e+.35));let f=new x(d,.35,e+.35),p=r-.28,v=r+.08;o.add(C(.62,.08,.56,.02),E.steelDark,M(0,v+.04,0)),o.add(C(.36,.3,.34,.05),E.motor,M(0,v+.23,0)),o.add(ne(.2,.06,28),E.steelDark,M(0,v+.1,0)),o.add(ne(.13,.42,28),E.motor,M(.38,v+.27,0,0,0,Math.PI/2));for(let w=0;w<6;w++)o.add(ne(.142,.016,28),E.motor,M(.24+w*.055,v+.27,0,0,0,Math.PI/2));o.add(ne(.135,.07,28,.1),E.steelDark,M(.62,v+.27,0,0,0,-Math.PI/2)),o.add(C(.1,.08,.09,.015),E.motor,M(.36,v+.45,0)),o.add(C(.06,.1,.06,.01),E.steel,M(0,v+.43,0)),o.rod(new x(0,v,0),new x(0,p-.05,0),.04,E.steel,12);let g=new _e;g.position.y=v-.12;let m=new re(ne(.085,.09,18),E.steel),b=new re(C(.04,.092,.04,.008),E.rail);b.position.x=.085;let y=new _e;y.position.y=p-.35-g.position.y;for(let w=0;w<3;w++){let T=new re(C(.5,.025,.14,.01),E.steelDark),H=w/3*Math.PI*2;T.position.set(Math.cos(H)*.3,0,-Math.sin(H)*.3),T.rotation.set(.35,H,0),y.add(T)}g.add(m,b,y),m.castShadow=!0,s.add(g);let _=o.build(s),R=Jt({color:Qe.leachate,hi:11569749,mode:"swirl",speed:1.6,scale:.55,center:[i.pos[0],i.pos[1]]}),S=new re(new wn(e-.07,64),R.material);S.rotation.x=-Math.PI/2,S.position.y=p,S.receiveShadow=!0,s.add(S);let P=Rt(new x(.35,r+.08,a/2-.08)),L=ni([[e+.05,.01],[e+.05,r+.03]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+1.6,0),focus:new x(0,n+t*.5,0),core:new x(0,n+t*.55,0),in:l,out:u,return:f},radius:Math.hypot(e,t/2)+.3,localBox:{min:[-e-.16,0,-e-.16],max:[e+.16,r+1,e+.16]},pickTargets:[..._,S],outline:L,glowRadius:e*1.55,glowY:.015,lamp:P,animate(w,T){R.uniforms.uTime.value=w,R.uniforms.uMotion.value=T.motion,R.uniforms.uGlow.value=.03+.18*T.flow+(T.active?.06:0),g.rotation.y=w*2.2*T.motion}})}function Ic(i,e,t,n,r,s=1){let o=s;i.add(C(t,.09*o,.16*o,.02),E.steelBlue,M(0,n+.045*o,0)),i.add(C(.24*o,.16*o,.24*o,.03),E.motor,M(0,n+.17*o,0)),i.add(ne(.11*o,.3*o,24),E.motor,M(0,n+.4*o,0)),i.add(ne(.115*o,.05*o,24,.09*o),E.steelDark,M(0,n+.575*o,0)),i.add(C(.09*o,.07*o,.07*o,.015),E.steelDark,M(.12*o,n+.45*o,0)),i.rod(new x(0,n,0),new x(0,r,0),.025*o,E.steel,10);let a=new _e;a.position.y=n-.06*o;let c=new re(ne(.055*o,.07*o,16),E.steel),l=new re(C(.03*o,.072*o,.03*o,.006),E.rail);return l.position.x=.055*o,a.add(c,l),c.castShadow=!0,e.add(a),a}function jp(i=Le.coag){let e=i.size.w,t=i.size.h,n=i.size.l,r=i.base,s=r+t,o=At(i),a=new Ie,c=.06;a.add(C(e,.08,n,.03),E.offWhite,M(0,r+.04,0)),a.add(C(c,t,n,.025),E.offWhite,M(-e/2+c/2,r+t/2,0)),a.add(C(c,t,n,.025),E.offWhite,M(e/2-c/2,r+t/2,0)),a.add(C(e,t,c,.025),E.offWhite,M(0,r+t/2,-n/2+c/2)),a.add(C(e,t,c,.025),E.offWhite,M(0,r+t/2,n/2-c/2));for(let[R,S,P,L]of[[0,n/2,e+.04,.05],[0,-n/2,e+.04,.05],[e/2,0,.05,n+.04],[-e/2,0,.05,n+.04]])a.add(C(P,.05,L,.02),E.steelBlue,M(R,s-.02,S));a.add(C(e+.12,.06,n+.12,.02),E.steelDark,M(0,r-.01,0));let l=Wt(a,new x(-e/2+.01,1.85,0),new x(-1,0,0),.14),u=Wt(a,new x(e/2-.01,1.85,0),new x(1,0,0),.14),d=.25,h=n/2-.12;a.rod(new x(d,s-.35,h),new x(d,s+.12,h),.022,E.steel,8),a.add(C(.08,.06,.08,.01),E.steelDark,M(d,s+.02,h));let f=new x(d,s+.12,h),p=s-.12,v=Ic(a,o,e+.1,s+.02,p-.05,.85),g=a.build(o),m=Jt({color:Qe.leachate,hi:12622432,mode:"swirl",speed:4.2,scale:2.2,center:[i.pos[0],i.pos[1]]}),b=new re(new Je(e-2*c,n-2*c),m.material);b.rotation.x=-Math.PI/2,b.position.y=p,b.receiveShadow=!0,o.add(b);let y=Rt(new x(e/2-.08,s+.05,.18)),_=un(new x(-e/2-.04,r-.04,-n/2-.04),new x(e/2+.04,s+.02,n/2+.04));return Ct({spec:i,root:o,localAnchors:{label:new x(0,s+1.05,0),focus:new x(0,r+t*.55,0),core:new x(0,r+t*.5,0),in:l,out:u,dose:f},radius:1,localBox:{min:[-e/2-.06,r-.04,-n/2-.06],max:[e/2+.06,s+.55,n/2+.06]},pickTargets:[...g,b],outline:_,glowRadius:1.15,glowY:r+.01,lamp:y,animate(R,S){m.uniforms.uTime.value=R,m.uniforms.uMotion.value=S.motion,m.uniforms.uGlow.value=.03+.2*S.flow+(S.active?.06:0),v.rotation.y=R*9*S.motion}})}function Qp(i=Le.floc){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Ie,a=.05;o.add(C(2*e+.14,.06,2*e+.14,.02),E.steelDark,M(0,n-.01,0)),o.add(Ot(wi(e,n,t,a,!0,.06),.04,56),E.offWhite),an(o,e+.005,.03,r-.005,0,Math.PI*2,E.steelBlue),an(o,e+.008,.02,n+.5,0,Math.PI*2,E.steelBlue);let c=Wt(o,new x(-e+.01,1.85,0),new x(-1,0,0),.16),l=Wt(o,new x(e-.01,1.75,0),new x(1,0,0),.16),u=.2,d=.38;o.rod(new x(u,r-.35,d),new x(u,r+.12,d),.022,E.steel,8),o.add(C(.08,.06,.08,.01),E.steelDark,M(u,r+.02,d));let h=new x(u,r+.12,d),f=r-.12,p=Ic(o,s,2*e+.12,r+.02,f-.05,.85),v=o.build(s),g=Jt({color:Qe.leachate,hi:12096610,mode:"swirl",speed:1.1,scale:2.4,center:[i.pos[0],i.pos[1]]}),m=new re(new wn(e-a,48),g.material);m.rotation.x=-Math.PI/2,m.position.y=f,m.receiveShadow=!0;let b=44,y=new _t(new yt(1,1,.3,7),E.flocSpeck,b);y.frustumCulled=!1,s.add(m,y);let _=Rt(new x(e-.1,r+.07,0)),R=ni([[e+.05,n-.04],[e+.05,r+.02]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+1.05,0),focus:new x(0,n+t*.55,0),core:new x(0,n+t*.5,0),in:c,out:l,dose:h},radius:1,localBox:{min:[-e-.07,n-.04,-e-.07],max:[e+.07,r+.55,e+.07]},pickTargets:[...v,m],outline:R,glowRadius:1.1,glowY:n+.01,lamp:_,animate(S,P){let L=P.motion;g.uniforms.uTime.value=S,g.uniforms.uMotion.value=L,g.uniforms.uGlow.value=.03+.2*P.flow+(P.active?.06:0),p.rotation.y=S*2.4*L;let w=Math.min(1,L*2);for(let T=0;T<b;T++){let H=xr(ue(T,1)+S*.045),N=(.08+.82*H)*(e-a-.05),U=ue(T,2)*Math.PI*2+S*.6*L/(.3+H),z=w*(.006+.022*H*(.6+.4*ue(T,3)))*(H>.92?(1-H)/.08:1);$i(y,T,Math.sin(U)*N,f+.004,Math.cos(U)*N,[Math.max(z,1e-4),.02,Math.max(z,1e-4)])}y.instanceMatrix.needsUpdate=!0}})}var kE={yApex:.85,yc:1.7,rApex:.09,wall:.05};function e0(i,e){let t=i.size.d/2,n=i.base+i.size.h,{yApex:r,yc:s,rApex:o,wall:a}=kE,c=Q=>Q>=s?t:o+(t-o)*(Q-r)/(s-r),l=At(i),u=new Ie,d=Fs(mi),h=t*.78,f=[];for(let Q=0;Q<4;Q++){let se=Math.PI/4+Q*Math.PI/2,le=new x(Math.sin(se)*h,0,Math.cos(se)*h);f.push(le);let Ae=r+(h-o)/(t-o)*(s-r)+.04;u.add(C(.1,Ae,.1,.015),E.steelBlue,M(le.x,Ae/2,le.z)),u.add(C(.22,.03,.22,.01),E.steelDark,M(le.x,.015,le.z))}for(let Q=0;Q<4;Q++)u.rod(f[Q].clone().setY(.35),f[(Q+1)%4].clone().setY(.35),.025,E.steelBlue,6);an(u,t+.012,.035,s,0,Math.PI*2,E.steelBlue);let p={phi:d,halfWidth:.38,y0:r+.3,y1:n-.38,r:t,yApex:r,rApex:o,yc:s},v=Ds(Qe.warmGray,p);u.add(Ot([[o,r],[t,s],[t,n],[t-a,n],[t-a,s+.02],[o-.03,r+.06]],.05,64),v),an(u,t+.005,.04,n,0,Math.PI*2,E.warmGray);let g=Os(u,l,p,[[c(p.y0),p.y0],[t,s],[t,p.y1]]);u.add(Ot([[t-a,n-.14],[t-.2,n-.14],[t-.2,n-.03]],.01,48),E.steelDark),u.add(ne(.28,.85,32,.28,!0),E.steel,M(0,n-.33,0)),u.add(C(2*t+.1,.09,.16,.02),E.steelBlue,M(0,n+.05,0));let m=Wt(u,new x(-t+.02,e.inY,0),new x(-1,0,0),.18),b=Wt(u,new x(t-.02,3.05,0),new x(1,0,0),.18);u.rod(new x(0,r+.03,0),new x(0,r-.14,0),.07,E.steel,14),u.add(ne(.115,.04,20),E.steel,M(0,r-.15,0));let y=null;e.purge?(u.add(C(.2,.16,.18,.03),E.steelDark,M(0,r-.27,0)),u.rod(new x(0,r-.27,.09),new x(0,r-.27,.3),.022,E.steel,8),u.add(new En(.1,.016,8,24),E.rail,M(0,r-.27,.3)),u.rod(new x(0,r-.35,0),new x(0,e.purgeY,0),.08,E.steel,14),u.add(new rt(.085,14,10),E.steel,M(0,e.purgeY,0)),y=new x(0,e.purgeY,-.02)):u.add(ne(.115,.03,20),E.steelDark,M(0,r-.185,0));let _=u.build(l),R=n-.12,S=Q=>c(Q)-a-.012,P=Jt({color:e.liquid,opacity:.4,mode:"still"}),L=new qi([new pe(0,r+.08),new pe(Math.max(.02,S(r+.08)),r+.08),new pe(S(s),s+.005),new pe(S(R),R),new pe(0,R)],48),w=new re(L,P.material);w.renderOrder=1;let T=Jt({color:e.liquid,hi:14141858,mode:"ripple",speed:.35,scale:.8,center:[i.pos[0],i.pos[1]],opacity:.85}),H=new re(new wn(S(R),48),T.material);H.rotation.x=-Math.PI/2,H.position.y=R,H.renderOrder=1;let N=.6,U=new re(new qi([new pe(0,0),new pe(S(r+N)*.98,N),new pe(0,N)],40),E.sludgeCake);U.position.y=r+.06;let z=40,I=new _t(new Tn(.03,0),new tt({color:e.particle,roughness:.85}),z);I.frustumCulled=!1,l.add(w,H,U,I);let B=Rt(new x(.55,n+.1,0)),X=ni([[o+.04,r],[t+.05,s],[t+.05,n+.02]],4),V={label:new x(0,n+.95,0),focus:new x(0,(r+n)/2,0),core:new x(0,(s+n)/2,0),in:m,out:b};return y&&(V.sludge=y),Ct({spec:i,root:l,localAnchors:V,radius:Math.hypot(t,i.size.h/2)+.2,localBox:{min:[-t-.05,0,-t-.05],max:[t+.05,n+.12,t+.05]},pickTargets:[..._,g],outline:X,glowRadius:t*1.8,glowY:.015,lamp:B,animate(Q,se){let le=se.motion;P.uniforms.uGlow.value=.04+.2*se.flow+(se.active?.08:0),T.uniforms.uTime.value=Q,T.uniforms.uMotion.value=.3+.7*se.flow,T.uniforms.uGlow.value=.03+.15*se.flow;let Ae=.1+e.sludgeMax*(.25+.75*le)+.02*Math.sin(Q*.3+e.seed)*le;U.scale.setScalar(Ae/N);let at=r+.06+Ae,K=Math.min(1,le*1.8);for(let ie=0;ie<z;ie++){let oe=ie+e.seed*50,ce=xr(ue(oe,1)+Q*(.05+.04*ue(oe,2))),Te=R-.08-ce*(R-.08-at),Ne=d+(ue(oe,3)-.5)*2*p.halfWidth*.95,Xe=Math.min((.25+.7*ue(oe,4))*(t-.12),S(Te)-.06),Ze=K*(.6+.8*ue(oe,5))*(ce<.06?ce/.06:1);$i(I,ie,Math.sin(Ne)*Xe,Te,Math.cos(Ne)*Xe,Math.max(Ze,1e-4),Q*.7+oe,oe,0)}I.instanceMatrix.needsUpdate=!0}})}function t0(i=Le.clar1){return e0(i,{purge:!0,liquid:Qe.clarified,particle:4861976,sludgeMax:.42,seed:1,inY:1.75,purgeY:.38})}function n0(i=Le.clar2){return e0(i,{purge:!0,liquid:6187594,particle:5920048,sludgeMax:.22,seed:2,inY:2.85,purgeY:.45})}function i0(i=Le.inter){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Ie,a=Fs(mi),c=.05;o.add(Ot([[0,0],[e+.12,0],[e+.12,n],[0,n]],.04,40),E.concrete);let l={phi:a,halfWidth:.42,y0:n+.14,y1:r-.16,r:e};o.add(Ot(wi(e,n,t,c,!1),.05,56),Ds(Qe.offWhite,l)),an(o,e+.008,.03,r-.01,0,Math.PI*2,E.steelBlue),an(o,e+.008,.025,n+.03,0,Math.PI*2,E.steelBlue);let u=Os(o,s,l,[[e,l.y0],[e,l.y1]]),d=a-l.halfWidth-.1;for(let _=0;_<=4;_++){let R=l.y0+_/4*(l.y1-l.y0),S=new x(Math.sin(d),0,Math.cos(d));o.rod(S.clone().multiplyScalar(e).setY(R),S.clone().multiplyScalar(e+.035).setY(R),.012,E.steelDark,5)}o.add(ne(.16,.06,24),E.steel,(()=>{let _=new be;return _.makeTranslation(.25,r+.03,-.2),_})());let h=Wt(o,new x(-.3,r-.02,0),new x(0,1,0),.1),f=Wt(o,new x(e-.02,.5,0),new x(1,0,0),.17),p=o.build(s),v=e-c-.012,g=Jt({color:Qe.clarified,opacity:.5,mode:"still"}),m=new re(ne(v,1,40),g.material);m.renderOrder=1,s.add(m);let b=Rt(new x(Math.sin(a)*.45,r,Math.cos(a)*.45)),y=ni([[e+.05,.01],[e+.05,r+.02]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+.95,0),focus:new x(0,n+t*.5,0),core:new x(0,n+t*.45,0),in:h,out:f},radius:1,localBox:{min:[-e-.12,0,-e-.12],max:[e+.12,r+.12,e+.12]},pickTargets:[...p,u],outline:y,glowRadius:e*1.8,glowY:.015,lamp:b,animate(_,R){g.uniforms.uGlow.value=.04+.2*R.flow+(R.active?.08:0);let S=n+.07,P=S+(t-.3)*(.3+.55*R.flow)+.025*Math.sin(_*.9)*R.motion;m.scale.y=Math.max(.01,P-S),m.position.y=(P+S)/2}})}function $d(i=Le.pump,e={}){let t=At(i),n=new Ie,r=i.base,s=.5,o=(p,v,g)=>M(p,v,g,0,0,Math.PI/2);n.add(C(1.2,r,.72,.04),E.concrete,M(0,r/2,0)),n.add(C(1.02,.07,.5,.02),E.steelDark,M(0,r+.035,0)),n.add(ne(.15,.4,28),E.motor,o(.2,s,0));for(let p=0;p<7;p++)n.add(ne(.162,.018,28),E.motor,o(.04+p*.05,s,0));n.add(ne(.155,.09,28,.12),E.steelDark,M(.445,s,0,0,0,-Math.PI/2)),n.add(C(.12,.08,.1,.015),E.motor,M(.18,s+.19,0)),n.add(C(.36,.2,.06,.015),E.steelDark,M(.2,r+.12,.1)),n.add(C(.36,.2,.06,.015),E.steelDark,M(.2,r+.12,-.1)),n.add(ne(.075,.16,20),E.steelBlue,o(-.17,s,0)),n.add(C(.14,s-r-.06,.16,.02),E.steelBlue,M(-.17,(s+r)/2,0));let a=new yt(.12,.12,.2,20,1,!0,-Math.PI/2,Math.PI);if(n.add(a,E.rail,M(-0,s,0,Math.PI/2,0,Math.PI/2)),n.add(ne(.18,.13,32),E.steelBlue,o(-.32,s,0)),n.add(ne(.12,.06,28),E.steelBlue,o(-.405,s,0)),n.rod(new x(-.43,s,0),new x(-.52,s,0),.075,E.steel,16),n.rod(new x(-.53,s,0),new x(-.485,s,0),.13,E.steel,20),n.rod(new x(-.32,s+.12,0),new x(-.32,.95,0),.07,E.steelBlue,16),n.rod(new x(-.32,.905,0),new x(-.32,.95,0),.125,E.steel,20),n.add(C(.1,s-r-.12,.2,.02),E.steelBlue,M(-.32,(s-.12+r)/2+.03,0)),n.add(C(.06,1.05,.06,.012),E.steelDark,M(.38,.525,.48)),n.add(C(.22,.26,.12,.025),E.offWhite,M(.38,1,.48)),n.add(C(.04,.04,.02,.008),E.rubber,M(.33,.97,.545)),n.add(C(.04,.04,.02,.008),E.rubber,M(.43,.97,.545)),e.cabinet){n.add(C(.8,.12,.5,.02),E.concrete,M(1.35,.06,-.6)),n.add(C(.7,1.55,.4,.03),E.offWhite,M(1.35,.12+.775,-.6)),n.add(C(.74,.06,.46,.02),E.steelDark,M(1.35,1.7,-.6)),n.add(C(.01,1.3,.01,.003),E.steelDark,M(1.35,.9,-.6+.205));for(let g of[1.35-.2,1.35-.1,1.35+.15])n.add(ne(.022,.02,10),g>1.35?E.rail:E.rubber,M(g,1.35,-.6+.21,Math.PI/2,0,0));n.add(C(.04,.12,.03,.006),E.steel,M(1.35+.28,.95,-.6+.215))}let c=n.build(t),l=new _e;l.position.set(-0,s,0);let u=new re(ne(.025,.24,12),E.steel);u.rotation.z=Math.PI/2;let d=new re(ne(.065,.1,18),E.steelDark);d.rotation.z=Math.PI/2,l.add(u,d);for(let p=0;p<4;p++){let v=new re(C(.11,.022,.022,.006),p===0?E.rail:E.steel),g=p/4*Math.PI*2;v.position.set(0,Math.cos(g)*.048,Math.sin(g)*.048),l.add(v)}l.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),t.add(l);let h=Rt(new x(.38,1.13,.48)),f=un(new x(-.62,0,-.38),new x(.62,1,.38));return Ct({spec:i,root:t,localAnchors:{label:new x(0,1.75,0),focus:new x(0,.5,0),core:new x(-.32,s,0),in:new x(-.53,s,0),out:new x(-.32,.95,0),header:new x(-.32,2.3,0)},radius:.9,localBox:e.cabinet?{min:[-.6,0,-.86],max:[1.76,1.75,.56]}:{min:[-.6,0,-.36],max:[.6,.98,.56]},pickTargets:c,outline:f,glowRadius:1,glowY:.015,lamp:h,animate(p,v){l.rotation.x=p*14*v.motion}})}var Gs=.06;function r0(i,e=Le[i]){let t=e.size.d/2,n=e.size.h,r=e.base,s=r+n,o=At(e),a=new Ie,c=Fs(mi),l=Le[i]?["uasb1","uasb2","uasb3","uasb4"].indexOf(i)+1:1;a.add(Ot([[0,0],[t+.14,0],[t+.14,r],[0,r]],.04,48),E.concrete);let u={phi:c,halfWidth:.36,y0:r+.3,y1:s-.5,r:t},d=Ds(Qe.sage,u);a.add(Ot(wi(t,r,n,Gs,!1),.05,64),d),an(a,t+.012,.03,r+.04,0,Math.PI*2,E.sageDark),an(a,t+.012,.035,s-.02,0,Math.PI*2,E.sageDark);for(let K of[r+1.15,r+2.1])an(a,t+.01,.024,K,c+u.halfWidth+.06,Math.PI*2-2*(u.halfWidth+.06),E.sageDark);let h=Os(a,o,u,[[t,u.y0],[t,u.y1]]);a.add(ne(.62,.5,24,.12,!0),E.steelDark,M(0,s-.75,0)),a.add(ne(t-Gs-.02,.28,32,t-.3,!0),E.steelDark,M(0,s-1.15,0)),a.rod(new x(0,s,-.65),new x(0,r+.25,-.65),.045,E.steel,10);let f=r+.2,p=t-Gs-.12;a.rod(new x(0,r+.25,-.65),new x(0,f,0),.04,E.steel,8);for(let K of[c,c+Math.PI/2]){let ie=new x(Math.sin(K),0,Math.cos(K));a.rod(ie.clone().multiplyScalar(-p).setY(f),ie.clone().multiplyScalar(p).setY(f),.035,E.steel,8);for(let oe of[-.75,-.4,.4,.75])a.add(ne(.03,.08,8),E.steelDark,M(ie.x*p*oe,f-.05,ie.z*p*oe))}for(let K=0;K<2;K++){let ie=s-1.3+K*.32;a.add(ne(t-Gs-.02,.22,32,t-.42,!0),E.steel,M(0,ie,0))}for(let K=0;K<28;K++){let ie=K/28*Math.PI*2;a.add(C(.05,.06,.012,.003),E.steelDark,M(Math.sin(ie)*(t-.2),3.1,Math.cos(ie)*(t-.2),0,ie,0))}let v=c-u.halfWidth-.2,g=new x(Math.sin(v),0,Math.cos(v)),m=g.clone().multiplyScalar(t+.09);a.rod(m.clone().setY(r+.4),m.clone().setY(s-.2),.028,E.offWhite,10);for(let K of[r+.4,s-.2])a.rod(g.clone().multiplyScalar(t).setY(K),m.clone().setY(K),.018,E.steel,6);a.add(C(.05,.42,.05,.01),E.rail,M(m.x,s-.75,m.z)),a.add(Ot([[0,s],[.5,s],[.5,s+.1],[.3,s+.3],[0,s+.33]],.05,40),E.warmGray);let b=Wt(a,new x(0,s+.3,0),new x(0,1,0),.15,.07);a.add(ne(.075,.035,16),E.steel,M(0,s+.3,0)),a.rod(new x(.3,s+.18,.12),new x(.3,s+.48,.12),.035,E.steel,10),a.add(ne(.07,.12,16),E.steelDark,M(.3,s+.5,.12)),a.add(Ot([[0,0],[.1,0],[.1,.02],[.03,.07],[0,.08]],.012,16),E.steelDark,M(.3,s+.56,.12));let y=-.45,_=new x(Math.sin(y),0,Math.cos(y)),R=Wt(a,_.clone().multiplyScalar(t-.02).setY(.45),_,.37,.07),S=_.clone().multiplyScalar(t+.17).setY(.45);a.add(new rt(.1,14,10),E.steelDark,M(S.x,S.y,S.z)),a.rod(S.clone().setY(.52),S.clone().setY(.78),.02,E.steel,6),a.add(new En(.085,.014,6,18),E.rail,M(S.x,.79,S.z,Math.PI/2,0,0));let P=Wt(a,new x(0,s-.02,-.65),new x(0,1,0),.12),L=-.3,w=Wt(a,new x(L,2.85,Math.sqrt(t*t-L*L)-.02),new x(0,0,1),.2);a.add(Ot([[t-Gs,2.97],[t-.2,2.97],[t-.2,3.07]],.01,48),E.steelDark),wc(a,t,r+.75,-.95);for(let K of[r+.7,r+1.4,r+2.1]){let ie=c+u.halfWidth+.14,oe=new x(Math.sin(ie),0,Math.cos(ie)),ce=oe.clone().multiplyScalar(t).setY(K);a.rod(ce,ce.clone().addScaledVector(oe,.12),.018,E.steel,8),a.rod(ce.clone().addScaledVector(oe,.12),ce.clone().addScaledVector(oe,.12).setY(K-.06),.012,E.steel,6)}let T=a.build(o),H=t-Gs-.012,N=s-.42,U=Jt({color:Qe.anaerobic,hi:10128725,opacity:.34,mode:"still"}),z=new re(ne(H,N-(r+.06),40),U.material);z.position.y=(N+r+.06)/2,z.renderOrder=1;let I=r+1.05,B=new tt({color:4074265,roughness:.85,emissive:8015650,emissiveIntensity:.12}),X=new re(ne(H-.01,I-(r+.06),40),B);X.position.y=(I+r+.06)/2;let V=new tt({color:6965798,roughness:.7,emissive:10512428,emissiveIntensity:.2,transparent:!0,opacity:.45,depthWrite:!1}),Q=new re(ne(H-.012,.32,40,H-.012,!0),V);Q.position.y=I+.16,Q.renderOrder=1;let se=34,le=new _t(new Tn(.026,1),E.bubble,se);le.frustumCulled=!1,le.renderOrder=0,o.add(z,X,Q,le);let Ae=Rt(new x(Math.sin(c)*.72,s,Math.cos(c)*.72)),at=ni([[t+.05,.01],[t+.05,s+.01],[.52,s+.12]],4);return Ct({spec:e,root:o,localAnchors:{label:new x(0,s+1.75,0),focus:new x(0,r+n*.5,0),core:new x(0,r+1.6,0),in:P,out:w,gas:b,sludge:R,tGls:new x(Math.sin(c)*t,s-1,Math.cos(c)*t),tBlanket:new x(Math.sin(c)*t,r+1.2,Math.cos(c)*t),tBed:new x(Math.sin(c)*t,r+.45,Math.cos(c)*t),tGas:new x(0,s+.42,0)},radius:Math.hypot(t,n/2)+.2,localBox:{min:[-t-.14,0,-t-.14],max:[t+.14,s+.6,t+.14]},pickTargets:[...T,h],outline:at,glowRadius:t*1.7,glowY:.015,lamp:Ae,animate(K,ie){let oe=ie.motion;U.uniforms.uGlow.value=.03+.14*ie.flow+(ie.active?.05:0);let ce=.6+.4*Math.sin(K*1.15+l*1.7);B.emissiveIntensity=.06+(.2*oe+.06*ie.flow)*ce,V.emissiveIntensity=.08+.32*oe*ce,V.opacity=.25+.3*Math.max(oe,ie.flow);let Te=Math.min(1,oe*1.6),Ne=N-I-.1;for(let Xe=0;Xe<se;Xe++){let Ze=Xe+l*100,et=c+(ue(Ze,1)-.5)*2*(u.halfWidth*.95),Mt=(.3+.62*Math.sqrt(ue(Ze,2)))*(H-.06),G=.28+.22*ue(Ze,3),Vt=xr(ue(Ze,4)+K*G/Ne),it=.025*Math.sin(K*3.1+Ze),ct=Te*(.55+.6*ue(Ze,5))*(.7+.5*Vt)*(Vt>.96?(1-Vt)/.04:1);$i(le,Xe,Math.sin(et)*Mt+it,I+.06+Vt*Ne,Math.cos(et)*Mt,Math.max(ct,1e-4))}le.instanceMatrix.needsUpdate=!0}})}function s0(i=Le.mbbr){let e=i.size.w,t=i.size.h,n=i.size.l,r=i.base,s=r+t,o=At(i),a=new Ie,c=.18;a.add(C(e+.3,r,n+.3,.04),E.concreteDark,M(0,r/2,0)),a.add(C(e,.15,n,.03),E.concrete,M(0,r+.075,0)),a.add(C(c,t,n,.04),E.concrete,M(-e/2+c/2,r+t/2,0)),a.add(C(c,t,n,.04),E.concrete,M(e/2-c/2,r+t/2,0)),a.add(C(e,t,c,.04),E.concrete,M(0,r+t/2,-n/2+c/2)),a.add(C(e,t,c,.04),E.concrete,M(0,r+t/2,n/2-c/2));let l=-n/2+c/2;a.rod(new x(-e/2+.2,s+.12,l),new x(e/2-.2,s+.12,l),.05,E.steel,12);for(let oe=0;oe<4;oe++){let ce=-e/2+.6+oe*((e-1.2)/3);a.rod(new x(ce,s+.12,l),new x(ce,s+.12,l+.25),.035,E.steel,10),a.rod(new x(ce,s+.12,l+.25),new x(ce,r+.4,l+.25),.035,E.steel,10),a.add(C(.1,.08,.06,.01),E.steelDark,M(ce,s+.12,l))}a.add(C(.45,.4,.06,.01),E.grating,M(1,2.05,n/2-c-.05)),Ti(a,new x(e/2+.2,0,-.5),s,new x(1,0,0),!1),Fn(a,[new x(e/2-c/2,s,-1),new x(e/2-c/2,s,0)],.9,1);let u=e/2+1.25,d=-.85,h=.12,f=h+.34,p=(oe,ce,Te)=>M(oe,ce,Te,0,0,Math.PI/2);a.add(C(1.25,h,.85,.03),E.concrete,M(u,h/2,d)),a.add(C(1.1,.06,.7,.02),E.steelDark,M(u,h+.03,d));let v=u-.25;a.add(C(.42,.4,.4,.06),E.steelBlue,M(v,f,d)),a.add(C(.46,.06,.44,.02),E.steelDark,M(v,f-.2,d)),a.add(ne(.13,.05,24),E.steelDark,p(v+.235,f,d));let g=u+.3;a.add(ne(.14,.38,28),E.motor,p(g,f,d));for(let oe=0;oe<6;oe++)a.add(ne(.152,.016,28),E.motor,p(g-.15+oe*.06,f,d));a.add(ne(.145,.08,28,.11),E.steelDark,M(g+.23,f,d,0,0,-Math.PI/2)),a.add(C(.11,.08,.1,.015),E.motor,M(g,f+.18,d)),a.add(C(.1,f-h-.12,.16,.02),E.steelDark,M(u+.06,(f+h)/2-.03,d)),a.rod(new x(v+.08,f+.2,d),new x(v+.08,f+.34,d),.05,E.steel,12),a.add(ne(.12,.2,24),E.offWhite,M(v+.08,f+.44,d)),a.add(ne(.13,.03,24,.09),E.steelDark,M(v+.08,f+.555,d));let m=v-.36;a.rod(new x(v-.21,f,d),new x(m,f,d),.05,E.steel,12),a.add(ne(.11,.5,24),E.steel,M(m,f+.2,d)),a.add(ne(.115,.03,24),E.steelDark,M(m,f-.05,d)),a.add(ne(.115,.03,24),E.steelDark,M(m,f+.45,d));let b=s+.12,y=-n/2+c/2,_=new x(m,f+.45,d),R=new x(m,b,d),S=new x(m,b,y),P=new x(e/2-.2,b,y);a.rod(_,R,.05,E.steel,12),a.rod(R,S,.05,E.steel,12),a.rod(S,P,.05,E.steel,12),a.add(C(.13,.13,.13,.02),E.steelDark,M(m,b,d)),a.add(C(.13,.13,.13,.02),E.steelDark,M(m,b,y)),a.add(C(.12,.16,.12,.02),E.steelBlue,M(m,f+.75,d)),a.rod(new x(m,f+.95,d),new x(m+.12,f+.95,d),.012,E.steel,6),a.add(ne(.045,.02,16),E.offWhite,M(m+.13,f+.95,d,Math.PI/2,0,0)),a.rod(new x(m,b,(d+y)/2),new x(m,0,(d+y)/2),.025,E.steelDark,6);let L=-e/2+c+.55,w=n/2-c/2;a.add(C(.16,.2,.1,.02),E.offWhite,M(L,s+.25,w+.02)),a.add(C(.12,.05,.02,.005),E.steelBlue,M(L,s+.28,w+.075)),a.rod(new x(L,s+.15,w),new x(L,s+.05,w),.02,E.steel,6),a.rod(new x(L,s+.05,w),new x(L,s+.05,w-.3),.02,E.steel,6),a.rod(new x(L,s+.05,w-.3),new x(L,r+1,w-.3),.022,E.steelDark,8);for(let oe=0;oe<4;oe++){let ce=-e/2+.6+oe*((e-1.2)/3);a.rod(new x(ce,r+.4,l+.25),new x(ce,r+.4,n/2-c-.2),.03,E.steelDark,8)}let T=new x(-e/2+c+.17,s-.05,0);a.rod(T.clone().setY(s-.05),T.clone().setY(s-.35),.085,E.steel,14);let H=Wt(a,new x(1,2,n/2-.02),new x(0,0,1),.17),N=a.build(o),U=s-.22,z=Jt({color:5204558,hi:13623500,mode:"aeration",speed:1,scale:1,opacity:.82}),I=new re(new Je(e-2*c,n-2*c),z.material);I.rotation.x=-Math.PI/2,I.position.y=U,I.renderOrder=1;let B=150,X=new _t(new yt(.055,.055,.045,10,1,!0),new tt({color:Qe.carrier,roughness:.6,side:tn}),B);X.castShadow=!1,X.frustumCulled=!1;let V=60,Q=new _t(new Tn(.03,1),E.bubble,V);Q.frustumCulled=!1,o.add(I,X,Q);let se=new _e;se.position.set(u+.06,f,d);let le=new re(ne(.06,.09,18),E.steelDark);le.rotation.z=Math.PI/2,se.add(le);for(let oe=0;oe<4;oe++){let ce=new re(C(.1,.02,.02,.005),oe===0?E.rail:E.steel),Te=oe/4*Math.PI*2;ce.position.set(0,Math.cos(Te)*.045,Math.sin(Te)*.045),se.add(ce)}o.add(se);let Ae=Rt(new x(e/2-c/2,s,.6)),at=un(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,s+.03,n/2+.04)),K=(e-2*c-.2)/2,ie=(n-2*c-.2)/2;return Ct({spec:i,root:o,localAnchors:{label:new x(0,s+1.1,0),focus:new x(0,r+t*.5,0),core:new x(0,r+t*.55,0),in:T,out:H,tMedia:new x(-.3,U,.2),tAir:new x(-e/2+.6,s+.12,l),tBlower:new x(u-.25,f+.4,d),tScreen:new x(1,2.15,n/2-c),tDo:new x(L,s+.35,w)},radius:2.6,localBox:{min:[-e/2-.15,0,-n/2-.15],max:[u+.65,s+.2,n/2+.15]},pickTargets:[...N,I],outline:at,glowRadius:3.1,glowY:.015,lamp:Ae,animate(oe,ce){let Te=ce.motion;se.rotation.x=oe*12*Te,z.uniforms.uTime.value=oe,z.uniforms.uMotion.value=Te,z.uniforms.uGlow.value=.03+.18*ce.flow+(ce.active?.06:0);let Ne=.08+.3*Te;for(let Ze=0;Ze<B;Ze++){let et=(ue(Ze,1)*2-1)*K,Mt=(ue(Ze,2)*2-1)*ie,G=ue(Ze,3)*6.283,Vt=et+Ne*Math.sin(oe*.55+G),it=Mt+Ne*.7*Math.cos(oe*.43+G*1.3),ct=U-.06+.07*Math.sin(oe*1.3*(.4+Te)+G*2.1);$i(X,Ze,Math.max(-K,Math.min(K,Vt)),ct,Math.max(-ie,Math.min(ie,it)),1,G+oe*1.6*Te,G*.7+oe*1.1*Te,G*1.9)}X.instanceMatrix.needsUpdate=!0;let Xe=Math.min(1,Te*1.6);for(let Ze=0;Ze<V;Ze++){let et=Ze+300,Mt=xr(ue(et,1)+oe*(.9+.6*ue(et,2))),G=(ue(et,3)*2-1)*K,Vt=(ue(et,4)*2-1)*ie,it=Xe*(.5+.7*ue(et,5))*(Mt>.85?(1-Mt)/.15:1);$i(Q,Ze,G,U-.18+Mt*.2,Vt,Math.max(it,1e-4))}Q.instanceMatrix.needsUpdate=!0}})}function o0(i=Le.filtro){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Ie,o=.2,a=t-.18;s.add(C(o,t,n,.05),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.05),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(e,t,o,.05),E.concrete,M(0,t/2,-n/2+o/2)),s.add(C(e,t,o,.05),E.concrete,M(0,t/2,n/2-o/2)),s.add(C(e-2*o+.02,a,n-2*o+.02,.02),E.soil,M(0,a/2,0)),s.add(C(e-2*o-.2,.03,.7,.01),E.gravel,M(0,a+.01,0)),s.add(C(.6,.03,n-2*o-.1,.01),E.gravel,M(-e/2+o+.32,a+.01,0));let c=a+.12,l=e/2+.25;s.rod(new x(l,1.1,0),new x(e/2-o-.15,1.1,0),.085,E.steelDark,14),s.rod(new x(e/2-o-.15,1.1,0),new x(e/2-o-.15,c,0),.085,E.steelDark,14),s.add(new rt(.085,12,8),E.steelDark,M(e/2-o-.15,1.1,0)),s.rod(new x(e/2-o-.15,c,0),new x(-e/2+o+.8,c,0),.07,E.steelDark,12);for(let H=e/2-o-.8;H>-e/2+o+.9;H-=1.15)s.rod(new x(H,c,-1.6),new x(H,c,1.6),.035,E.steelDark,8);s.rod(new x(l-.05,1.1,0),new x(l,1.1,0),.14,E.steel,18),s.add(C(.5,.35,.7,.03),E.concreteDark,M(-e/2+o+.3,a+.06,0)),s.rod(new x(-e/2+.02,.4,0),new x(-e/2-.2,.4,0),.085,E.steel,14),s.rod(new x(-e/2-.245,.4,0),new x(-e/2-.2,.4,0),.14,E.steel,18);let u=s.build(r),d=Jt({color:Qe.treated,hi:12575708,mode:"sheen",opacity:.62,speed:1,scale:1,center:[i.pos[0]+e/2-o,i.pos[1]],dir:[-1,0],span:e-2*o}),h=new re(new Je(e-2*o,n-2*o),d.material);h.rotation.x=-Math.PI/2,h.position.y=a+.035,h.renderOrder=1,r.add(h);let f=[];for(let H=0;f.length<46&&H<400;H++){let N=(ue(H,11)-.5)*(e-2*o-.6),U=(ue(H,12)-.5)*(n-2*o-.5);Math.abs(U)<.5||N<-e/2+o+.75||f.some(([z,I])=>Math.hypot(z-N,I-U)<.62)||f.push([N,U])}let p=9,v=new _t(new Yi(.028,1,5,1).translate(0,.5,0),E.plant,f.length*p),g=new _t(new mr(.025,.1,3,6),E.plant,f.length*3),m=new be,b=new bt,y=new en,_=new x,R=new x,S=new Ce,P=0,L=0;f.forEach(([H,N],U)=>{for(let z=0;z<p;z++){let I=U*31+z,B=ue(I,1)*Math.PI*2,X=.05+.16*ue(I,2),V=.55+.6*ue(I,3);if(_.set(H+Math.sin(B)*X,a,N+Math.cos(B)*X),y.set(Math.cos(B)*.22*ue(I,4),0,-Math.sin(B)*.22*ue(I,4)),b.setFromEuler(y),R.set(1,V,1),v.setMatrixAt(P,m.compose(_,b,R)),S.setHex(Qe.reed).offsetHSL(.02*(ue(I,5)-.5),-.05*ue(I,6),.08*(ue(I,7)-.5)),v.setColorAt(P,S),P++,z<3){let Q=new x(0,V,0).applyQuaternion(b).add(_);g.setMatrixAt(L,m.compose(Q,b,R.set(1,1,1))),g.setColorAt(L,S.setHex(8219208)),L++}}}),v.castShadow=!0,v.receiveShadow=!0,r.add(v,g);let w=Rt(new x(e/2-o/2,t,n/2-.4)),T=un(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,t+.03,n/2+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,t+1.7,0),focus:new x(0,t*.6,0),core:new x(0,a+.1,0),in:new x(l,1.1,0),out:new x(-e/2-.245,.4,0)},radius:Math.hypot(e,n)/2,localBox:{min:[-e/2,0,-n/2],max:[e/2,t+1.2,n/2]},pickTargets:[...u,h],outline:T,glowRadius:e*.62,glowY:.015,lamp:w,animate(H,N){d.uniforms.uTime.value=H,d.uniforms.uMotion.value=N.motion,d.uniforms.uSpread.value=.04+1*N.flow,d.uniforms.uGlow.value=.03+.12*N.flow+(N.active?.05:0)}})}var Ri=3.9;function a0(i=Le.discharge){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Ie,o=.15;s.add(C(e,.12,n,.03),E.concrete,M(0,.06,0)),s.add(C(o,t,n,.04),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.04),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(e,t,o,.04),E.concrete,M(0,t/2,-n/2+o/2)),s.add(C((e-.6)/2,t,o,.04),E.concrete,M(-(e+.6)/4,t/2,n/2-o/2)),s.add(C((e-.6)/2,t,o,.04),E.concrete,M((e+.6)/4,t/2,n/2-o/2)),s.add(C(.6,.3,o,.03),E.concrete,M(0,.15,n/2-o/2));let a=n/2,c=Ri-.25,l=c-a;s.add(C(.86,.1,l,.02),E.concrete,M(0,.05,(a+c)/2)),s.add(C(.12,.45,l,.03),E.concrete,M(-.37,.225,(a+c)/2)),s.add(C(.12,.45,l,.03),E.concrete,M(.37,.225,(a+c)/2)),s.add(C(2.2,1,.25,.05),E.concrete,M(0,.5,Ri-.125)),s.add(C(.2,.75,.6,.04),E.concrete,M(-1,.375,Ri+.2,0,.3,0)),s.add(C(.2,.75,.6,.04),E.concrete,M(1,.375,Ri+.2,0,-.3,0)),s.rod(new x(0,.35,Ri-.3),new x(0,.35,Ri+.02),.12,E.concreteDark,18),s.rod(new x(e/2-.02,.4,0),new x(e/2+.15,.4,0),.085,E.steel,14),s.rod(new x(e/2+.105,.4,0),new x(e/2+.15,.4,0),.14,E.steel,18),s.add(C(e-.1,.04,n/2-.1,.01),E.grating,M(0,t+.02,-n/4));let u=new oc(1,0);for(let m=0;m<16;m++){let b=(ue(m,21)-.5)*1.8,y=Ri+1.6+ue(m,22)*1.3,_=.12+.12*ue(m,23);s.add(u,E.concreteDark,M(b,-.12+_*.4,y,ue(m,24)*3,ue(m,25)*3,0,[_*1.2,_*.7,_]))}let d=s.build(r),h=Jt({color:Qe.treated,hi:13363682,mode:"flow",dir:[0,1],speed:1,scale:1.4,center:[i.pos[0],i.pos[1]]}),f=new re(new Je(e-2*o,n-2*o),h.material);f.rotation.x=-Math.PI/2,f.position.y=t-.25;let p=new re(new Je(.62,l+.1),h.material);p.rotation.x=-Math.PI/2,p.position.set(0,.28,(a+c)/2),r.add(f,p);let v=Rt(new x(e/2-o/2,t,-n/2+.2)),g=un(new x(-1.12,0,-n/2-.04),new x(1.12,t+.04,Ri+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,t+1,.6),focus:new x(0,.4,1.2),core:new x(0,t-.35,0),in:new x(e/2+.15,.4,0),out:new x(0,.35,Ri)},radius:2.4,localBox:{min:[-1.1,0,-n/2],max:[1.1,t+.05,Ri]},pickTargets:[...d,f,p],outline:g,glowRadius:2.2,glowY:.015,lamp:v,animate(m,b){h.uniforms.uTime.value=m,h.uniforms.uMotion.value=Math.max(b.motion,b.flow*.6),h.uniforms.uGlow.value=.03+.15*b.flow+(b.active?.05:0)}})}function HE(){let i=new tt({color:5916210,roughness:.9}),e={uWet:{value:1},uTime:{value:0},uStir:{value:0}};return i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCakeW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCakeW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCakeW; uniform float uWet; uniform float uTime; uniform float uStir;
vec2 ckH(vec2 p){ p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }
float ckCell(vec2 x){ vec2 n = floor(x), f = fract(x); float d1 = 8.0, d2 = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) { vec2 g = vec2(float(i), float(j)); vec2 o = ckH(n + g);
    vec2 r = g + o - f; float d = dot(r, r); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
  return sqrt(d2) - sqrt(d1); }`).replace("#include <color_fragment>",`#include <color_fragment>
  float crack = 1.0 - smoothstep(0.02, 0.07, ckCell(vCakeW.xz * 2.2));
  float dry = 1.0 - uWet;
  vec3 wetC = vec3(0.16, 0.11, 0.07), dryC = vec3(0.47, 0.39, 0.29);
  float mott = 0.5 + 0.5 * sin(vCakeW.x * 3.1 + sin(vCakeW.z * 2.3) * 1.7);
  vec3 col = mix(wetC, dryC, dry) * (0.92 + 0.12 * mott);
  col *= 1.0 - crack * dry * 0.55;
  float furrow = 0.5 + 0.5 * sin(vCakeW.z * 14.0 + vCakeW.x * 0.6);
  col *= 1.0 - uStir * 0.12 * furrow;
  diffuseColor.rgb = col;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(0.32, 0.97, dry);`)},i.customProgramCacheKey=()=>"ptl-cake",{material:i,u:e}}var Zd={wall:.2,gapHalf:.8,roofLow:3.35,roofHigh:3.85,colX:[-3.6,-1.2,1.2,3.6],colZ:2.15};function c0(i=Le.sludge){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Ie,o=Zd.wall,a=Zd.gapHalf;s.add(C(o,t,n,.04),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.04),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(e,t,o,.04),E.concrete,M(0,t/2,-n/2+o/2));let c=e/2-a;s.add(C(c,t,o,.04),E.concrete,M(-e/2+c/2,t/2,n/2-o/2)),s.add(C(c,t,o,.04),E.concrete,M(e/2-c/2,t/2,n/2-o/2)),s.add(C(2*a,.12,o*.6,.02),Fe.pallet,M(0,.06,n/2-o/2));for(let z of[-1,1])s.add(C(.06,t,.08,.01),E.steelDark,M(z*(a+.03),t/2,n/2-o/2));s.add(C(e-2*o+.02,.08,n-2*o+.02,.02),E.gravel,M(0,.04,0)),s.add(C(e-2*o+.02,.08,n-2*o+.02,.02),Fe.sand,M(0,.12,0)),s.add(C(.5,.03,.5,.01),E.concreteDark,M(e/2-o-.35,.18,0));let l=new x(e/2+.25,.95,0);s.rod(l,new x(e/2-o-.3,.95,0),.075,E.steel,14),s.add(new rt(.085,12,8),E.steel,M(e/2-o-.3,.95,0)),s.rod(new x(e/2-o-.3,.95,0),new x(e/2-o-.3,.55,0),.075,E.steel,14),s.add(ne(.125,.04,20),E.steel,M(l.x-.02,.95,0,0,0,Math.PI/2));let u=1.2;s.rod(new x(u,.15,-n/2+o+.05),new x(u,.15,-n/2-.15),.065,E.steelDark,12),s.add(new rt(.075,12,8),E.steelDark,M(u,.15,-n/2-.15)),s.rod(new x(u,.15,-n/2-.15),new x(u,.05,-n/2-.15),.065,E.steelDark,12);let d=new x(u,.05,-n/2-.15),{roofLow:h,roofHigh:f,colX:p,colZ:v}=Zd,g=z=>f+(h-f)*((z+v)/(2*v));for(let z of p)for(let I of[-v,v]){let B=g(I);s.add(C(.12,B,.12,.015),E.steelBlue,M(z,B/2,I)),s.add(C(.26,.03,.26,.01),E.steelDark,M(z,.015,I))}for(let z of p){let I=new x(z,g(-v-.15),-v-.15),B=new x(z,g(v+.15),v+.15);s.rod(I,B,.06,E.steelBlue,6)}for(let z=0;z<=5;z++){let I=-v-.15+z*((2*v+.3)/5);s.rod(new x(-e/2-.3,g(I)+.07,I),new x(e/2+.3,g(I)+.07,I),.035,E.steel,6)}for(let z of[-v,v])s.rod(new x(p[0],g(z)-.08,z),new x(p[3],g(z)-.08,z),.05,E.steelBlue,6);s.add(C(e+.6,.08,.14,.02),E.steelDark,M(0,g(v+.15)+.02,v+.2));let m=s.build(r),b=Math.hypot(2*v+.3,f-h),y=new tt({color:14082016,roughness:.35,transparent:!0,opacity:.22,depthWrite:!1,side:tn}),_=new re(new Je(e+.6,b),y);_.rotation.x=-Math.PI/2+Math.atan2(f-h,2*v+.3),_.position.set(0,(h+f)/2+.11,0),_.renderOrder=4,r.add(_);let R=ei(16769712,1.6,.04,14210244),S=new Ie,P=[];for(let z of[-2.4,0,2.4]){let B=g(0)-.12;S.add(C(.5,.07,.14,.03),R,M(z,B,0)),P.push(new x(z,B,0))}S.build(r,!1,!1);let L=Us(16768170,.28),w=new _t(new Je(2.6,2.6).rotateX(-Math.PI/2),L,P.length);P.forEach((z,I)=>w.setMatrixAt(I,new be().makeTranslation(z.x,.62,z.z))),w.renderOrder=3,r.add(w);let T=HE(),H=new re(new Gt(e-2*o,1,n-2*o,8,1,4),T.material);H.receiveShadow=!0,r.add(H);let N=Rt(new x(e/2-o/2,t,n/2-.25)),U=un(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,t+.03,n/2+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,f+.9,0),focus:new x(0,1,.3),core:new x(0,.3,.4),in:l,drain:d,access:new x(0,0,n/2)},radius:4,localBox:{min:[-e/2-.3,0,-v-.15],max:[e/2+.3,f+.25,v+.3]},pickTargets:[...m,H],outline:U,glowRadius:4,glowY:.015,lamp:N,animate(z,I){let B=.04+.22*I.flow+.04*I.motion;H.scale.y=B,H.position.y=.16+B/2,T.u.uWet.value=Math.min(1,.15+.85*I.flow),T.u.uStir.value=I.motion,T.u.uTime.value=z}})}var OM=Qe.sludge;function l0(i=Le.screen){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Ie,o=.12,a=.42;s.add(C(e+.1,.1,n+.1,.02),E.concreteDark,M(0,.05,0)),s.add(C(e,t,o,.03),E.concrete,M(0,t/2,-n/2+o/2)),s.add(C(e,t,o,.03),E.concrete,M(0,t/2,n/2-o/2)),s.add(C(o,t,n,.03),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.03),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(.8,.12,n-2*o,.04),Fe.grit,M(.6,.17,0)),s.add(C(.04,.5,n-2*o,.01),E.steelDark,M(.18,.35,0));let c=-.45,l=Math.PI/6,u=11,d=n-2*o-.04;for(let L=0;L<u;L++){let w=-d/2+(L+.5)*(d/u);s.add(C(.018,1.05,.012,.004),E.steel,M(c,.55,w,0,0,-l))}s.add(C(.05,.05,d+.04,.01),E.steelDark,M(c-Math.sin(l)*.5,.55+.45,0)),s.add(C(.05,.05,d+.04,.01),E.steelDark,M(c+Math.sin(l)*.48,.12,0)),s.add(C(.5,.04,.42,.01),E.grating,M(c-.45,t+.02,-.12)),s.add(C(.5,.04,n-.05,.01),E.grating,M(-.9,t+.02,0)),s.add(C(.75,.04,n-.05,.01),E.grating,M(.62,t+.02,0)),s.add(C(.06,.55,n-2*o,.01),E.steelDark,M(e/2-o-.08,.5,0)),s.rod(new x(e/2-o-.08,t,0),new x(e/2-o-.08,t+.35,0),.02,E.steel,6),s.add(new En(.1,.015,6,20),E.rail,M(e/2-o-.08,t+.36,0,Math.PI/2,0,0));let h=-.55,f=-n/2-.42;s.add(C(.62,.78,.55,.05),Fe.peBlue,M(h,.43,f)),s.add(C(.66,.05,.58,.02),E.steelDark,M(h,.85,f+.02,-.35,0,0));for(let L of[-.22,.22])s.add(ne(.05,.04,12),E.rubber,M(h+L,.05,f-.2,0,0,Math.PI/2));let p=n/2+.05,v=n/2+.8,g=.3;s.add(C(e,.05,v-p,.01),E.grating,M(0,g-.025,(p+v)/2));for(let L of[-e/2+.1,-.2,e/2-.03])s.add(C(.06,g-.05,.06,.01),E.steelBlue,M(L,(g-.05)/2,v-.05));Fn(s,[new x(-e/2+.05,g,v-.03),new x(.3,g,v-.03)],.95,1.2);let m=Wt(s,new x(-e/2+.02,a,0),new x(-1,0,0),.15),b=Wt(s,new x(e/2-.02,a,0),new x(1,0,0),.15),y=s.build(r),_=Jt({color:Qe.leachate,hi:11569749,mode:"flow",dir:[1,0],speed:.8,scale:1.4,center:[i.pos[0],i.pos[1]]}),R=new re(new Je(e-2*o,n-2*o),_.material);R.rotation.x=-Math.PI/2,R.position.y=a,R.receiveShadow=!0,r.add(R);let S=Rt(new x(e/2-.06,t,-n/2+.06)),P=un(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,t+.03,n/2+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,t+1.1,0),focus:new x(0,.5,.2),core:new x(0,a-.1,0),in:m,out:b,operator:new x(c-.15,g,n/2+.45)},radius:1.6,localBox:{min:[-e/2-.05,0,f-.32],max:[e/2+.05,t+.1,v]},pickTargets:[...y,R],outline:P,glowRadius:1.7,glowY:.015,lamp:S,animate(L,w){_.uniforms.uTime.value=L,_.uniforms.uMotion.value=Math.max(w.motion,w.flow),_.uniforms.uGlow.value=.03+.18*w.flow+(w.active?.06:0)}})}var DE={coag:.55,poly:.2};function u0(i,e){let t=i.size.w,n=i.size.l,r=At(i),s=new Ie,o=e==="poly",a=.16;s.add(C(t,.05,n,.015),Fe.bund,M(0,.025,0));for(let[U,z,I,B]of[[0,-n/2+.02,t,.04],[0,n/2-.02,t,.04],[-t/2+.02,0,.04,n],[t/2-.02,0,.04,n]])s.add(C(I,a,B,.01),Fe.bund,M(U,a/2,z));s.add(C(t-.1,.02,n-.1,.005),E.grating,M(0,a-.02,0));let c=o?.41:.31,l=o?.95:.72,u=o?-.24:-.3,d=-.02,h=a;s.add(Ot([[0,0],[c,0],[c,l-.06],[c-.06,l],[.12,l],[.12,l+.04],[0,l+.04]],.03,40),Fe.pe,M(u,h,d));for(let U of[.25,.55])s.add(new En(c+.004,.012,6,40),Fe.pe,M(u,h+U*l,d,Math.PI/2,0,0));s.rod(new x(u+c*.7,h+.05,d+c*.72),new x(u+c*.7,h+l-.05,d+c*.72),.012,E.glass,6),s.add(C(.16,.12,.01,.004),E.offWhite,M(u,h+l*.62,d+c+.006)),s.rod(new x(u+c-.02,h+.08,d),new x(.18,h+.08,d),.018,E.steel,8),s.add(ne(.035,.35,12),E.glass,M(.12,h+.3,d-.28)),s.rod(new x(.12,h+.08,d-.28),new x(.12,h+.12,d),.012,E.steel,6);let f=[.22,-.2],p=[];for(let U of f)s.add(C(.26,.06,.2,.015),E.steelDark,M(.38,h+.03,U)),s.add(ne(.065,.2,18),E.motor,M(.38+.04,h+.13,U,0,0,Math.PI/2)),s.add(C(.11,.14,.12,.02),Fe.peBlue,M(.38-.1,h+.13,U)),s.add(ne(.06,.04,18),E.offWhite,M(.38-.17,h+.13,U,0,0,Math.PI/2)),p.push(new x(.38-.2,h+.13,U)),s.rod(new x(.38-.17,h+.21,U),new x(.38-.17,h+.34,U),.01,E.steel,6);let v=DE[e],g=-n/2+.1,m=1.3;s.rod(new x(.21,h+.34,f[0]),new x(.21,h+.34,g),.016,E.steel,6),s.rod(new x(.21,h+.34,g),new x(v,h+.34,g),.016,E.steel,6),s.rod(new x(v,h+.34,g),new x(v,m,g),.022,E.steel,8),s.add(C(.07,.12,.07,.01),E.steelDark,M(v,h+.62,g)),s.add(ne(.035,.02,14),E.offWhite,M(v,h+.82,g+.04,Math.PI/2,0,0)),s.add(C(.05,m-.05,.05,.01),E.steelBlue,M(v+.07,(m-.05)/2,g));let b=t/2-.14,y=n/2-.08;s.add(C(.05,1.2,.05,.01),E.steelDark,M(b,.6,y)),s.add(C(.3,.36,.14,.03),E.offWhite,M(b,1.15,y-.02)),s.add(C(.05,.05,.02,.008),E.rubber,M(b-.07,1.1,y+.055)),s.add(C(.05,.05,.02,.008),E.rubber,M(b+.07,1.1,y+.055));let _=null;if(o){let U=h+l+.04;s.add(C(2*c+.06,.05,.12,.01),E.steelBlue,M(u,U+.025,d)),s.add(C(.16,.12,.16,.02),E.motor,M(u,U+.11,d)),s.add(ne(.075,.2,18),E.motor,M(u,U+.27,d)),s.add(ne(.08,.035,18,.06),E.steelDark,M(u,U+.385,d)),s.add(ne(.12,.18,18,.16),E.offWhite,M(u+.24,U+.25,d+.18)),s.add(ne(.04,.12,12,.12),E.offWhite,M(u+.24,U+.1,d+.18)),_=new _e,_.position.set(u,U-.02,d);let z=new re(ne(.04,.05,14),E.steel),I=new re(C(.02,.052,.02,.004),E.rail);I.position.x=.04,_.add(z,I),r.add(_)}let R=s.build(r),S=Jt({color:o?12170138:8014374,opacity:.55,mode:"still"}),P=new re(ne(c-.025,1,32),S.material);P.position.set(u,0,d),P.renderOrder=1,r.add(P);let L=new _t(ne(.045,.03,14),E.steel,p.length);L.frustumCulled=!1,r.add(L);let w=new be,T=new bt().setFromEuler(new en(0,0,Math.PI/2)),H=Rt(new x(b,1.33,y-.02)),N=un(new x(-t/2-.03,0,-n/2-.03),new x(t/2+.03,1.5,n/2+.03));return Ct({spec:i,root:r,localAnchors:{label:new x(0,2.1,0),focus:new x(0,.6,0),core:new x(u,h+l*.5,d),out:new x(v,m,g),operator:new x(b,0,n/2+.45)},radius:1,localBox:{min:[-t/2,0,-n/2],max:[t/2,1.7,n/2]},pickTargets:[...R,P],outline:N,glowRadius:1.1,glowY:.015,lamp:H,animate(U,z){let I=l*(.35+.5*(1-.4*z.flow))-.04;P.scale.y=I,P.position.y=h+.03+I/2,S.uniforms.uGlow.value=.02+.12*z.flow+(z.active?.05:0),_&&(_.rotation.y=U*1.6*z.motion);for(let B=0;B<p.length;B++){let V=.012*(B===0?z.motion:0)*Math.sin(U*9);w.compose(new x(p[B].x-.01+V,p[B].y,p[B].z),T,new x(1,1,1)),L.setMatrixAt(B,w)}L.instanceMatrix.needsUpdate=!0}})}var d0=(i=Le.dosC)=>u0(i,"coag"),h0=(i=Le.dosF)=>u0(i,"poly");var UE=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,BE=`
varying vec2 vUv;
uniform float uTime; uniform float uI; uniform float uShimmer;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
void main(){
  vec2 uv = vUv;
  float y = uv.y;
  float t = uTime;
  float n = n2(vec2(uv.x * 4.0, y * 3.0 - t * 2.3)) * 0.6 + n2(vec2(uv.x * 9.0 + 3.1, y * 7.0 - t * 3.7)) * 0.4;
  float w = (0.42 - 0.3 * y) * (0.75 + 0.5 * n);          // ancho que se afina hacia arriba
  float x = abs(uv.x - 0.5 + 0.06 * sin(y * 5.0 - t * 2.0) * y);
  float body = smoothstep(w, w * 0.35, x) * smoothstep(0.0, 0.08, y) * (1.0 - smoothstep(0.55 + 0.35 * n, 1.0, y));
  float core = smoothstep(w * 0.55, 0.0, x) * (1.0 - smoothstep(0.05, 0.45, y)) * smoothstep(0.0, 0.05, y);
  vec3 c = mix(vec3(0.95, 0.42, 0.12), vec3(1.0, 0.78, 0.42), core);
  float a = (body * 0.8 + core * 0.6) * uI;
  if (uShimmer > 0.5) { // ondulaci\xF3n de calor: velo muy tenue
    float s = n2(vec2(uv.x * 6.0, y * 4.0 - t * 1.5));
    a = smoothstep(0.3, 0.0, abs(uv.x - 0.5) - 0.15) * (1.0 - y) * y * 0.08 * s * uI;
    c = vec3(0.9, 0.85, 0.8);
  }
  gl_FragColor = vec4(c * a, a);
}`;function f0(i){return new zn({uniforms:{uTime:{value:0},uI:{value:0},uShimmer:{value:i?1:0}},vertexShader:UE,fragmentShader:BE,transparent:!0,depthWrite:!1,blending:Br,side:tn,toneMapped:!1})}function p0(i=Le.flare){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Ie;o.add(C(3,.15,3.4,.03),E.concreteDark,M(-.3,.075,.25)),o.add(ne(.55,n-.15,32),E.concrete,M(0,.15+(n-.15)/2,0)),o.add(ne(e+.12,.05,32),E.steelDark,M(0,n+.025,0));for(let U=0;U<4;U++){let z=U*Math.PI/2+Math.PI/4;o.add(C(.03,.45,.22,.008),E.steelDark,M(Math.sin(z)*(e+.08),n+.25,Math.cos(z)*(e+.08),0,z,0))}o.add(ne(e,t-.5,32),Fe.flareSteel,M(0,n+(t-.5)/2,0));for(let U of[n+1.2,n+2.6,n+3.9])o.add(ne(e+.015,.06,32),E.steelDark,M(0,U,0));o.add(Ot([[e-.02,r-.52],[e+.12,r-.42],[e+.12,r],[e+.08,r],[e+.08,r-.38],[e-.06,r-.46]],.02,32),E.steelDark),o.add(ne(e*.55,.12,20),E.rubber,M(0,r-.12,0)),o.rod(new x(e+.05,.9,.1),new x(e+.05,r-.1,.1),.015,E.steel,6),o.add(C(.05,1.3,.05,.01),E.steelDark,M(.95,.65+.15,.9)),o.add(C(.36,.44,.16,.03),E.offWhite,M(.95,1.3,.85)),o.add(ne(.03,.02,10),E.rubber,M(.95,1.3,.94,Math.PI/2,0,0)),Ti(o,new x(0,.15,-e-.22),n+2.3,new x(0,0,-1),!0,.38);let a=-.2,c=1.4;o.add(Ot([[0,0],[.17,0],[.17,.5],[.08,.58],[0,.6]],.03,24),E.steelBlue,M(a,.3,c)),o.add(C(.3,.15,.3,.02),E.concrete,M(a,.22,c)),o.rod(new x(a,.88,c),new x(a,1.5,c),.085,E.steel,14),o.add(ne(.14,.045,20),E.steel,M(a,1.48,c)),o.add(new rt(.11,14,10),E.steel,M(a,1.1,c)),o.rod(new x(a+.17,.42,c),new x(a+.4,.42,c),.02,E.steel,6),o.add(C(.08,.08,.08,.01),E.steelDark,M(a+.33,.42,c));let l=-1,u=.55,d=.36,h=1.35;o.rod(new x(a,1.1,c),new x(l,1.1,c),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(l,1.1,c)),o.rod(new x(l,1.1,c),new x(l,1.1,u+d-.02),.075,E.steel,12),o.add(Ot([[0,.3],[d-.05,.3],[d,.38],[d,.3+h-.08],[d-.05,.3+h],[.1,.3+h+.08],[0,.3+h+.08]],.03,32),E.sage,M(l,0,u)),o.add(ne(d+.06,.08,28),E.concrete,M(l,.26,u)),o.add(C(.06,.6,.03,.01),E.glass,M(l+.2,.95,u+d*.86,0,.5,0)),o.add(C(.09,.68,.02,.01),E.steelDark,M(l+.205,.95,u+d*.84,0,.5,0)),o.rod(new x(l-d,.9,u),new x(l-d-.25,.9,u),.03,E.steel,8),o.rod(new x(l-d-.25,.9,u),new x(l-d-.25,.2,u),.03,E.steel,8);let f=.3+h+.08,p=2;o.rod(new x(l,f,u),new x(l,p,u),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(l,p,u)),o.rod(new x(l,p,u),new x(0,p,u),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(0,p,u)),o.rod(new x(0,p,u),new x(0,p,e-.02),.075,E.steel,12);let v=-.5;o.add(ne(.16,.28,24),E.steelDark,M(v,p,u,0,0,Math.PI/2));for(let U=0;U<5;U++)o.add(ne(.18,.012,24),E.steel,M(v-.1+U*.05,p,u,0,0,Math.PI/2));for(let U of[-1,1])o.add(ne(.12,.03,20),E.steel,M(v+U*.16,p,u,0,0,Math.PI/2));o.rod(new x(v,p-.17,u),new x(v,.15,u),.03,E.steelBlue,6);for(let[U,z]of[[1.15,1.8],[-1.7,1.8],[1.15,-1.2],[-1.7,-1.2]])o.add(ne(.08,.8,14),E.rail,M(U,.55,z));let g=o.build(s),m=ei(14827564,2.2,.15,5904916),b=new re(new rt(.06,14,10,0,Math.PI*2,0,Math.PI/2),m);b.position.set(e+.1,r+.02,0);let y=new re(ne(.05,.05,10),E.steelDark);y.position.set(e+.1,r-.01,0),s.add(b,y);let _=f0(!1),R=f0(!0),S=new re(new Je(1,1).translate(0,.5,0),_),P=new re(new Je(1,1).translate(0,.5,0),R);S.renderOrder=6,P.renderOrder=6,S.frustumCulled=!1,P.frustumCulled=!1;let L=new x,w=U=>(z,I,B)=>{U.getWorldPosition(L),U.rotation.y=Math.atan2(B.position.x-L.x,B.position.z-L.z),U.updateMatrix(),U.updateMatrixWorld()};S.onBeforeRender=w(S),P.onBeforeRender=w(P),s.add(S,P);let T=new Is(16751178,0,14,1.8);T.position.set(0,r+.6,0),s.add(T);let H=Rt(new x(.95,1.52,.85)),N=un(new x(-1.5,0,-.9),new x(1.2,r+.1,2));return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+1.9,0),focus:new x(-.2,2.3,.5),core:new x(l,.9,u),in:new x(a,1.5,c),tip:new x(0,r,0)},radius:3,localBox:{min:[-1.8,0,-1.3],max:[1.25,r+.1,1.9]},pickTargets:g,outline:N,glowRadius:2,glowY:.16,lamp:H,animate(U,z){let I=z.motion,B=(.55+.85*Math.max(z.flow,.3))*(.92+.08*Math.sin(U*3.1)*Math.sin(U*1.7+.6));S.visible=I>.02,P.visible=I>.02,S.scale.set(.55+.25*I,B*(.6+.4*I),1),S.position.set(0,r-.05,0),P.scale.set(1,2.2*B,1),P.position.set(0,r+B*.5,0),_.uniforms.uTime.value=U,_.uniforms.uI.value=I,R.uniforms.uTime.value=U,R.uniforms.uI.value=I;let X=.85+.1*Math.sin(U*7.3)*Math.sin(U*3.1+1);T.intensity=9*I*(.25+Lo.value)*X,b.scale.setScalar(.85+.15*(.5+.5*Math.sin(U*2.1)))}})}function m0(i=Le.thick){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Ie,a=.05;o.add(Ot([[0,0],[e+.12,0],[e+.12,n],[0,n]],.04,48),E.concrete),o.add(Ot(wi(e,n,t,a,!0,.06),.04,64),E.warmGray),an(o,e+.01,.035,r-.01,0,Math.PI*2,E.steelBlue);for(let N of[n+.08,n+1.3])an(o,e+.012,.025,N,0,Math.PI*2,E.steelBlue);o.add(Ot([[.12,n+.1],[e-a-.01,n+.7],[e-a-.01,n+.74],[.12,n+.14]],.01,40),E.steelDark);let c=r-.12;o.add(Ot([[e-a,c-.16],[e-.24,c-.16],[e-.24,c+.02]],.01,56),E.steelDark);let l=40;for(let N=0;N<l;N++){let U=N/l*Math.PI*2;o.add(new Yi(.035,.07,3),E.steelDark,M(Math.sin(U)*(e-.24),c+.055,Math.cos(U)*(e-.24),0,U,0))}let u=2.2,d=new x(Math.sin(u),0,Math.cos(u));o.rod(d.clone().multiplyScalar(e-.1).setY(c-.1),d.clone().multiplyScalar(e+.22).setY(c-.1),.05,E.steel,10),o.rod(d.clone().multiplyScalar(e+.22).setY(c-.1),d.clone().multiplyScalar(e+.22).setY(.12),.05,E.steel,10),o.add(C(.3,.1,.3,.02),E.concreteDark,M(d.x*(e+.22),.05,d.z*(e+.22)));let h=2*e+.36,f=.6,p=r+.06;o.add(C(h,.07,f,.02),E.grating,M(0,p,0));for(let N of[f/2,-f/2])o.add(C(h,.14,.06,.02),E.steelBlue,M(0,p-.03,N));for(let N of[f/2-.03,-f/2+.03])Fn(o,[new x(-e+.05,p+.04,N),new x(e+.12,p+.04,N)],.95,1.2);o.add(C(.42,.06,.42,.02),E.steelDark,M(0,p+.06,0)),o.add(ne(.2,.22,28),E.motor,M(0,p+.2,0)),o.add(ne(.09,.3,20),E.motor,M(.25,p+.25,0,0,0,Math.PI/2)),o.add(ne(.095,.05,20,.07),E.steelDark,M(.42,p+.25,0,0,0,-Math.PI/2)),o.add(C(.08,.06,.07,.01),E.motor,M(.22,p+.37,0)),o.add(ne(.28,.7,28,.28,!0),E.steel,M(0,r-.3,0));for(let N of[-.22,.22])o.rod(new x(0,p-.04,N),new x(0,r+.02,N*1.2),.015,E.steelBlue,5);Ti(o,new x(e+.28,0,0),p,new x(1,0,0),!0);let v=Wt(o,new x(0,.45,-e-.02),new x(0,0,-1),.13),g=-e-.15;o.add(new rt(.085,12,8),E.steel,M(0,.45,g)),o.rod(new x(0,.45,g),new x(0,r+.35,g),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(0,r+.35,g)),o.rod(new x(0,r+.35,g),new x(0,r+.35,-.26),.075,E.steel,12),o.rod(new x(0,r+.35,-.26),new x(0,r-.1,-.26),.075,E.steel,12);for(let N of[1,2])o.add(C(.12,.05,.2,.01),E.steelBlue,M(0,N,-e-.07));let m=new x(-e-.25,.45,0);o.rod(new x(-.2,.45,0),m,.075,E.steel,14),o.add(ne(.12,.04,20),E.steel,M(m.x+.02,.45,0,0,0,Math.PI/2)),o.add(C(.16,.18,.2,.03),E.steelDark,M(-e-.09,.45,0)),o.rod(new x(-e-.09,.55,0),new x(-e-.09,.85,0),.02,E.steel,6),o.add(new En(.09,.014,6,18),E.rail,M(-e-.09,.86,0,Math.PI/2,0,0));let b=o.build(s),y=c+.02,_=new _e,R=new Ie;R.rod(new x(0,n+.2,0),new x(0,p,0),.04,E.steel,12);for(let N of[-1,1]){let U=new x(0,n+.3,0),z=new x(N*(e-.15),n+.82,0);R.rod(U,z,.025,E.steelBlue,6);for(let I=1;I<=4;I++){let B=U.clone().lerp(z,I/4.6);R.add(C(.16,.06,.02,.005),E.steelBlue,M(B.x,B.y-.04,B.z,0,N*.6,0))}for(let I=1;I<=6;I++){let B=U.clone().lerp(z,I/6.5);R.rod(B,B.clone().setY(y-.25),.012,E.steel,5)}R.rod(z.clone().setY(y-.25),new x(N*.12,y-.25,0),.015,E.steel,5)}R.add(C(.05,.12,2*e-.55,.01),E.steelDark,M(0,y+.02,0)),R.add(C(.3,.05,.3,.01),E.rail,M(0,p-.1,0)),R.build(_),s.add(_);let S=Jt({color:4864550,hi:10125400,mode:"ripple",speed:.4,scale:.8,opacity:.62,center:[i.pos[0],i.pos[1]]}),P=new re(new wn(e-a-.01,56),S.material);P.rotation.x=-Math.PI/2,P.position.y=y,P.renderOrder=1;let L=new tt({color:Qe.sludge,roughness:.85,transparent:!0,opacity:.85}),w=new re(ne(e-a-.02,1,40),L);w.renderOrder=0,s.add(P,w);let T=Rt(new x(e+.05,p+.04,f/2-.05)),H=ni([[e+.05,.01],[e+.05,r+.02]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,p+1.5,0),focus:new x(0,r*.5,0),core:new x(0,n+.9,0),in:v,out:m},radius:Math.hypot(e,t/2)+.3,localBox:{min:[-e-.27,0,-e-.24],max:[e+.5,p+1,e+.24]},pickTargets:[...b,P],outline:H,glowRadius:e*1.7,glowY:.015,lamp:T,animate(N,U){_.rotation.y=N*.35*U.motion,S.uniforms.uTime.value=N,S.uniforms.uMotion.value=.3+.7*U.motion,S.uniforms.uGlow.value=.03+.16*U.flow+(U.active?.06:0);let z=.55+.6*U.flow+.03*Math.sin(N*.4)*U.motion;w.scale.y=z,w.position.y=n+.08+z/2}})}var Do={rollDoor:{x0:-2.45,x1:-.55,h:2.5},persDoor:{z0:-.45,z1:.45,h:2.1},plinth:.15,toteSlots:[[-2.2,-.72],[-.95,-.72],[-2.2,.38],[-.95,.38]]};function g0(i=Le.control){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Ie,o=.12,a=Do.plinth,{rollDoor:c,persDoor:l}=Do,u=t;s.add(C(e+.2,a,n+.2,.02),E.concreteDark,M(0,a/2,0)),s.add(C(e,u-a,o,.02),Fe.wall,M(0,a+(u-a)/2,-n/2+o/2)),s.add(C(o,u-a,n,.02),Fe.wall,M(-e/2+o/2,a+(u-a)/2,0));let d=l.z0+n/2,h=n/2-l.z1;s.add(C(o,u-a,d,.02),Fe.wall,M(e/2-o/2,a+(u-a)/2,-n/2+d/2)),s.add(C(o,u-a,h,.02),Fe.wall,M(e/2-o/2,a+(u-a)/2,n/2-h/2)),s.add(C(o,u-a-l.h,l.z1-l.z0,.02),Fe.wall,M(e/2-o/2,a+l.h+(u-a-l.h)/2,0)),s.add(C(.05,l.h,l.z1-l.z0-.04,.01),Fe.wallTrim,M(e/2+.005,a+l.h/2,0)),s.add(C(.04,.04,.14,.01),E.steel,M(e/2+.04,a+1,l.z0+.14));let f=[[-e/2,c.x0],[c.x1,e/2]];for(let[I,B]of f)s.add(C(B-I,u-a,o,.02),Fe.wall,M((I+B)/2,a+(u-a)/2,n/2-o/2));s.add(C(c.x1-c.x0,u-a-c.h,o,.02),Fe.wall,M((c.x0+c.x1)/2,a+c.h+(u-a-c.h)/2,n/2-o/2)),s.add(ne(.16,c.x1-c.x0+.1,20),Fe.rollDoor,M((c.x0+c.x1)/2,a+c.h+.14,n/2+.12,0,0,Math.PI/2));for(let I of[c.x0,c.x1])s.add(C(.06,c.h,.08,.01),E.steelDark,M(I,a+c.h/2,n/2+.02));s.add(C(o*.8,u-a,n-2*o,.02),Fe.wall,M(0,a+(u-a)/2,0)),s.add(C(-c.x0+c.x1+.4,.06,.1,.01),Fe.bund,M((c.x0+c.x1)/2,a+.03,n/2-o-.06)),s.add(C(.3,.012,.3,.005),E.grating,M(-1.6,a+.006,-1.1)),s.add(C(.4,.5,.05,.01),E.offWhite,M(-1.6,1.6,-n/2+o+.03));for(let I=0;I<4;I++){let B=.55+I*.6;s.add(C(.56,2,.42,.02),E.steelBlue,M(B,a+1,-n/2+o+.22)),s.add(C(.5,1.6,.01,.004),E.steelDark,M(B,a+1.05,-n/2+o+.435)),s.add(C(.04,.04,.01,.005),E.rail,M(B-.15,a+1.7,-n/2+o+.44))}s.add(C(1.6,.05,.6,.01),E.offWhite,M(1.75,a+.75,.75));for(let I of[1.25,1.75,2.25])s.add(C(.38,.26,.03,.01),E.rubber,M(I,a+1,.62));let p=.35;s.add(C(e+2*p,.16,n+2*p,.04),E.steelBlue,M(0,u+.08,0)),s.add(C(e+2*p+.02,.06,n+2*p+.02,.02),E.steelDark,M(0,u+.19,0)),s.rod(new x(-e/2-.1,u,n/2+.1),new x(-e/2-.1,.1,n/2+.1),.04,E.steelDark,8);let v={x:e/2+.33,y:.75,z:1};s.add(C(.5,.6,.8,.04),E.offWhite,M(v.x,v.y,v.z)),s.add(ne(.22,.03,24),E.steelDark,M(v.x+.25,v.y+.02,v.z,0,0,Math.PI/2));for(let I of[v.z-.3,v.z+.3])s.add(C(.5,.05,.05,.01),E.steelDark,M(v.x-.02,v.y-.33,I));s.rod(new x(e/2+.05,v.y+.2,v.z-.35),new x(e/2+.05,2.4,v.z-.35),.025,E.steelDark,6),s.add(C(.2,.9,.6,.03),E.offWhite,M(-e/2-.1,1.4,-.4)),s.add(C(1.2,.3,.03,.01),E.steelDark,M(1.6,u-.35,n/2+.02)),s.add(C(1.1,.22,.01,.005),E.offWhite,M(1.6,u-.35,n/2+.04));let g=[[.55,1.35],[1.85,2.65]],m=1.05,b=2;for(let[I,B]of g){for(let X of[I,B])s.add(C(.05,b-m+.05,.08,.01),Fe.wallTrim,M(X,(m+b)/2,n/2+.01));for(let X of[m,b])s.add(C(B-I+.05,.05,.08,.01),Fe.wallTrim,M((I+B)/2,X,n/2+.01));s.add(C(B-I,.04,.16,.01),E.concreteDark,M((I+B)/2,m-.05,n/2+.06))}let y=s.build(r),_=new tt({color:2832960,roughness:.12,metalness:.2,emissive:16767398,emissiveIntensity:0}),R=new Ie;for(let[I,B]of g)R.add(new Je(B-I-.04,b-m-.04),_,M((I+B)/2,(m+b)/2,n/2-o/2+.005));let S=R.build(r,!1,!0);S.forEach(I=>I.position.z=o/2+.01);let P=ei(16770748,1.8,.04,14210244),L=new Ie,w=[[(c.x0+c.x1)/2,a+c.h+.45,n/2+.12,0],[e/2+.1,a+l.h+.3,0,Math.PI/2],[-e/2+.3,u-.4,n/2+.1,0],[e/2-.3,u-.4,n/2+.1,0]];for(let[I,B,X,V]of w)L.add(C(.22,.14,.12,.03),E.steelDark,M(I,B+.03,X,0,V,0)),L.add(C(.18,.04,.1,.015),P,M(I,B-.05,X+(V?0:.02),0,V,0));L.build(r);let T=Us(16768170,.3),H=new _t(new Je(1,1).rotateX(-Math.PI/2),T,4);[[(c.x0+c.x1)/2,n/2+1.3,3.6],[e/2+1.2,0,2.8],[-e/2+.3,n/2+1,2.4],[e/2-.3,n/2+1,2.4]].forEach(([I,B,X],V)=>H.setMatrixAt(V,new be().compose(new x(I,.02,B),new bt,new x(X,1,X)))),H.renderOrder=3,r.add(H);let U=Rt(new x(e/2-.2,u+.22,n/2-.2)),z=un(new x(-e/2-.05,0,-n/2-.05),new x(e/2+.05,u+.25,n/2+.05));return Ct({spec:i,root:r,localAnchors:{label:new x(0,u+1.2,0),focus:new x(0,1.6,.4),core:new x(1.5,1.2,0),door:new x(e/2+.6,0,0),bay:new x((c.x0+c.x1)/2,0,n/2+.6)},radius:3.6,localBox:{min:[-e/2-p,0,-n/2-p],max:[e/2+.6,u+.25,n/2+p]},pickTargets:[...y,...S],outline:z,glowRadius:3.8,glowY:.015,lamp:U,animate(I,B){let X=B.active?1:.55;_.emissiveIntensity=Lo.value*1.1*X}})}var Kd=class{constructor(e){this.points=e;this.cum=[0];for(let t=1;t<e.length;t++)this.cum.push(this.cum[t-1]+e[t].distanceTo(e[t-1]));this.length=this.cum[this.cum.length-1]}seg(e){let t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0))*this.length,n=1;for(;n<this.cum.length-1&&this.cum[n]<t;)n++;let r=this.cum[n]-this.cum[n-1];return{i:n,f:r>1e-9?(t-this.cum[n-1])/r:0}}pointAt(e){let{i:t,f:n}=this.seg(e);return this.points[t-1].clone().lerp(this.points[t],n)}headingAt(e){let{i:t}=this.seg(e),n=r=>{let s=this.points[r-1],o=this.points[r],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)>1e-6?Math.atan2(a,c):null};for(let r=0;r<this.points.length;r++)for(let s of[t-r,t+r])if(s>=1&&s<this.points.length){let o=n(s);if(o!==null)return o}return 0}},nt=(i,e,t)=>new x(i,e,t);function x0(i,e,t){for(let n=1;n<i.length;n++){let[r,s]=i[n-1],[o,a]=i[n],c=o-r,l=a-s,u=c*c+l*l;if(u<1e-9)continue;let d=((e-r)*c+(t-s)*l)/u;if(!(d<-1e-6||d>1+1e-6)&&!(Math.hypot(r+d*c-e,s+d*l-t)>.001))return[[...i.slice(0,n),[e,t]],[[e,t],...i.slice(n)]]}throw new Error(`Parada fuera de la v\xEDa: (${e}, ${t})`)}var Pc=i=>i.map(([e,t])=>nt(e,0,t)),NE=(i,e)=>[...i,...e.slice(1)];function v0(){let{entry:i,loop:e}=Zi,t=NE(i,e),n=gt.chemStop,r=gt.sludgeStop,[s,o]=x0(t,n.x,n.z),[a,c]=x0(t,r.x,r.z),l={"chem-arrive":[Pc(s),{kind:"truck",allow:[]}],"chem-leave":[Pc(o),{kind:"truck",allow:[]}],"sludge-arrive":[Pc(a),{kind:"truck",allow:[]}],"sludge-leave":[Pc(c),{kind:"truck",allow:[]}],"w-operator":[[nt(-20.9,0,-2.2),nt(-20.55,0,-2.2),nt(-20.55,0,-5),nt(-18.45,0,-5),nt(-17,0,-5),nt(-17,0,-5.1),nt(-17,1.2,-6.9),nt(-17,1.2,-7.16),nt(-18.55,1.2,-7.16)],{kind:"worker",allow:["control","dosC","coag","estructura:platform-stair","estructura:platform-deck","estructura:platform-rail-s"]}],"w-uasb":[[nt(-11,0,-1.275),nt(-10.1,0,-1.275),nt(-10.1,1.95,-1.275),nt(-9.4,1.95,-1.275),nt(4,1.95,-1.275)],{kind:"worker",allow:["estructura:catwalk-deck"]}],"w-bed-a":[[nt(-22.4,.2,7.3),nt(-21.6,.2,7.9),nt(-21.6,.2,8.55),nt(-21.6,0,9.15),nt(-21.6,0,9.85)],{kind:"worker",allow:["sludge"]}],"w-bed-b":[[nt(-20,.2,7.5),nt(-20.8,.2,8),nt(-20.8,.2,8.55),nt(-20.8,0,9.15),nt(-20.8,0,9.85)],{kind:"worker",allow:["sludge"]}],"w-unload":[[nt(-26,0,2.5),nt(-26,0,.2),nt(-26,.15,-.55),nt(-26,.15,-1)],{kind:"worker",allow:["control"]}],"w-mbbr":[[nt(17,0,.55),nt(16.1,0,.55),nt(15.98,0,.15),nt(15.98,1.5,.15)],{kind:"worker",allow:["mbbr"]}],"w-patrol":[[nt(-20.9,0,-2.2),nt(-20.55,0,-2.2),nt(-20.55,0,-4.75),nt(9.85,0,-4.75),nt(9.85,0,4.6),nt(5.2,0,4.6),nt(5.2,0,-4.25),nt(-20.15,0,-4.25),nt(-20.15,0,-2.6),nt(-20.9,0,-2.2)],{kind:"worker",allow:["control"]}],"w-screen":[[nt(-27.5,0,-6.3),nt(-27.5,.3,-6.95),nt(-28.9,.3,-7.1)],{kind:"worker",allow:["screen"]}]},u={},d={};for(let[h,[f,p]]of Object.entries(l))u[h]=new Kd(f),d[h]=p;return{routes:u,meta:d}}var Dc={w:1.2,l:1,h:1.16},Lc=null,kc=i=>i.index?i.toNonIndexed():i;function Hc(i,e,t){return new yt(t,t,1,5,1).applyMatrix4(Vd(i,e))}function zE(){if(Lc)return Lc;let{w:i,l:e,h:t}=Dc,n=gr([C(i,.04,e,.01).translate(0,.13,0),...[-.5,0,.5].map(h=>C(.12,.11,e,.01).translate(h*(i-.12),.055,0))].map(kc)),r=C(i-.1,t-.22,e-.1,.09,3).translate(0,.15+(t-.22)/2,0),s=gr([kc(r),kc(new yt(.09,.09,.06,14).translate(0,t-.04,0))]),o=[],a=.15,c=t,l=[-i/2,-i/6,i/6,i/2],u=[-e/2,0,e/2];for(let h of l)for(let f of[-e/2,e/2])o.push(Hc(new x(h,a,f),new x(h,c,f),.012));for(let h of u)for(let f of[-i/2,i/2])o.push(Hc(new x(f,a,h),new x(f,c,h),.012));for(let h of[a,(a+c)/2,c]){for(let f of[-e/2,e/2])o.push(Hc(new x(-i/2,h,f),new x(i/2,h,f),.012));for(let f of[-i/2,i/2])o.push(Hc(new x(f,h,-e/2),new x(f,h,e/2),.012))}let d=gr(o.map(kc));return Lc={pallet:n,tank:s,cage:d},Lc}function Uo(i){let e=zE(),t=new _e,n=[[e.pallet,Fe.pallet],[e.tank,Fe.ibcTank],[e.cage,Fe.ibcCage]].map(([r,s])=>{let o=new _t(r,s,i.length);return i.forEach((a,c)=>o.setMatrixAt(c,a)),o.castShadow=!0,o.receiveShadow=!0,o.count=0,o.frustumCulled=!1,t.add(o),o});return{group:t,capacity:i.length,setCount(r){let s=Math.max(0,Math.min(i.length,Math.round(r)));for(let o of n)o.count=s;t.visible=s>0}}}var Jd={cab:new tt({color:3103722,roughness:.45,metalness:.1}),white:new tt({color:15988218,roughness:.5}),teal:new tt({color:2074767,roughness:.5,metalness:.05})},Bo={length:7.2,width:2.4,rearOverhang:1.3,wheelbase:4.2,wheelR:.5,height:3.2},jd=null,Qd=null,Ws=null,b0=null;function FE(){if(!Ws){let i=Bo.wheelR,e=[[new yt(i,i,.3,24),2500907],[new yt(i*.6,i*.6,.31,18),10397354],[new Gt(.08,.32,i*1),6055016]],t=[],n=[],r=[];for(let[s,o]of e){let a=s.toNonIndexed();a.rotateZ(Math.PI/2);let c=new Ce(o).convertSRGBToLinear();t.push(...a.attributes.position.array),n.push(...a.attributes.normal.array);for(let l=0;l<a.attributes.position.count;l++)r.push(c.r,c.g,c.b)}Ws=new St,Ws.setAttribute("position",new Oe(t,3)),Ws.setAttribute("normal",new Oe(n,3)),Ws.setAttribute("color",new Oe(r,3)),b0=new tt({vertexColors:!0,roughness:.8})}return{geo:Ws,mat:b0}}var eh=class{constructor(e,t){this.id=e;this.kind=t;this.root=new _e;this.length=Bo.length;this.wheelPos=[];this.totes=null;this.lift=null;this.body=null;this.gate=null;this.cake=null;this.m4=new be;this.root.name=`truck:${e}`;let n=Bo,r=new Ie,s=Jd.cab,o=t==="chemical"?Jd.white:Jd.teal,a=t==="chemical"?E.steelBlue:E.rail,c=n.wheelbase,l=n.length-n.rearOverhang,u=-n.rearOverhang;for(let g of[-1,1])r.add(C(.16,.22,l-u-.3,.02),E.steelDark,M(g*.45,.78,(l+u)/2-.1));r.add(C(.5,.4,.9,.06),E.steelDark,M(-.95,.75,2.2)),r.add(C(.5,.35,.6,.05),E.rubber,M(.95,.75,2.4));for(let g of[-1,1])r.add(C(.04,.12,2.2,.01),E.steel,M(g*1.15,.55,1.95));for(let g of[-1,1])for(let m of[0,c])r.add(C(.5,.06,.9,.02),E.steelDark,M(g*.95,1.05,m));let d=c-.2,h=l;r.add(C(n.width,1.85,h-d,.18,3),s,M(0,1.05+.925,(d+h)/2)),r.add(C(n.width+.02,.16,h-d+.02,.05),a,M(0,1.55,(d+h)/2));let f=new tt({color:2240826,roughness:.1,metalness:.4});r.add(C(n.width-.3,.75,.04,.03),f,M(0,2.35,h+.005));for(let g of[-1,1])r.add(C(.04,.65,.95,.03),f,M(g*(n.width/2+.005),2.35,h-.65));r.add(C(n.width-.4,.28,.06,.02),E.steelDark,M(0,1.35,h+.02)),r.add(C(n.width+.05,.22,.2,.04),E.steelDark,M(0,.85,h+.08));for(let g of[-1,1])r.rod(new x(g*n.width/2,2.4,h-.3),new x(g*(n.width/2+.25),2.4,h-.2),.015,E.steelDark,5),r.add(C(.06,.3,.16,.02),E.steelDark,M(g*(n.width/2+.27),2.35,h-.2));r.rod(new x(-.95,1.2,d-.1),new x(-.95,3.25,d-.1),.05,E.steel,10),r.add(C(.3,.08,.3,.02),E.steelDark,M(0,2.93,d+.5)),jd||(jd=ei(16773328,2.4,.08,15262936)),Qd||(Qd=ei(12595242,1.6,.15,5904916));for(let g of[-1,1])r.add(C(.3,.16,.04,.03),jd,M(g*.85,1.32,h+.03)),r.add(C(.22,.1,.04,.02),Qd,M(g*1,.95,u-.02));if(r.add(C(n.width,.12,.06,.02),E.steelDark,M(0,.9,u+.03)),t==="chemical"){let g=u,m=d-.1,b=1.15;r.add(C(n.width,.12,m-g,.02),Fe.pallet,M(0,b-.06,(g+m)/2));for(let S of[-1,1])r.add(C(.05,.35,m-g,.01),a,M(S*(n.width/2-.03),b+.18,(g+m)/2));r.add(C(n.width,1.3,.08,.02),a,M(0,b+.65,m-.04));for(let S=0;S<5;S++)r.add(C(.04,.32,.04,.01),E.steelDark,M(-n.width/2+.03,b+.17,g+.3+S*((m-g-.6)/4)));for(let S of[-1,1])r.add(C(.1,1.1,.1,.02),E.steelDark,M(S*(n.width/2-.1),.6,u-.05));let y=[];for(let S=0;S<4;S++)y.push(new be().makeTranslation(0,b,m-.15-Dc.l/2-S*(Dc.l+.12)));this.totes=Uo(y),this.root.add(this.totes.group);let _=new _e;_.position.set(0,b,u);let R=new Ie;R.add(C(n.width-.2,.06,1.4,.015),E.grating,M(0,0,-.7)),R.add(C(n.width-.2,.08,.05,.01),E.rail,M(0,.04,-1.38)),R.build(_),this.lift=_,this.root.add(_)}else{let g=new _e,m=u+.1,b=1.3,y=4.6,_=2.3,R=1.05;g.position.set(0,b,m);let S=new Ie;S.add(C(_,.1,y,.03),o,M(0,.05,y/2));for(let T of[-1,1])S.add(C(.08,R,y,.02),o,M(T*(_/2-.04),R/2,y/2));S.add(C(_,R+.2,.08,.02),o,M(0,(R+.2)/2,y-.04)),S.add(C(_+.1,.1,.9,.02),o,M(0,R+.15,y+.35));for(let T=0;T<4;T++)for(let H of[-1,1])S.add(C(.05,R,.06,.01),a,M(H*(_/2+.01),R/2,.4+T*1.2));S.build(g);let P=new re(new Gt(_-.18,1,y-.2,6,1,10),Fe.sludgeDry);P.position.set(0,.1,y/2),P.receiveShadow=!0,g.add(P);let L=new _e;L.position.set(0,R,0);let w=new re(C(_,R,.08,.02),o);w.position.set(0,-R/2,-.04),w.castShadow=!0,L.add(w),g.add(L),this.body=g,this.gate=L,this.cake=P,this.root.add(g),r.add(ne(.08,1.1,12),E.steel,M(0,1,2.6,.5,0,0))}r.build(this.root),this.beaconMat=new tt({color:6965786,emissive:16752698,emissiveIntensity:0,roughness:.3,transparent:!0,opacity:.92});let p=new re(new yt(.09,.11,.18,14),this.beaconMat);p.position.set(0,3.06,d+.5),this.root.add(p);for(let g of[-1,1])this.wheelPos.push([g*1.02,c]),this.wheelPos.push([g*1.05,0],[g*.72,0]);let v=FE();this.wheels=new _t(v.geo,v.mat,this.wheelPos.length),this.wheels.castShadow=!0,this.wheels.frustumCulled=!1,this.root.add(this.wheels),this.root.traverse(g=>{g.isMesh&&!g.isInstancedMesh&&(g.castShadow=!0)}),this.setPose(new x,0,0),this.setLoad(0),this.setWork(0),this.setBeacon(!1,0)}setPose(e,t,n){this.root.position.copy(e),this.root.rotation.set(0,t,0);let r=new bt().setFromEuler(new en(n*Math.PI*2,0,0)),s=new x(1,1,1);this.wheelPos.forEach(([o,a],c)=>this.wheels.setMatrixAt(c,this.m4.compose(new x(o,Bo.wheelR,a),r,s))),this.wheels.instanceMatrix.needsUpdate=!0}setLoad(e){let t=Math.max(0,Math.min(1,e));if(this.totes&&this.totes.setCount(Math.round(4*t)),this.cake){let n=.02+.85*t;this.cake.scale.y=n,this.cake.position.y=.1+n/2,this.cake.visible=t>.01}}setWork(e){let t=Math.max(0,Math.min(1,e));if(this.lift){let n=Math.min(1,t/.4),r=Math.max(0,(t-.4)/.6);this.lift.rotation.x=Math.PI/2*(1-n),this.lift.position.y=1.15-(1.15-.06)*r}this.body&&this.gate&&(this.body.rotation.x=-.75*t,this.gate.rotation.x=.9*Math.min(1,t*2))}setBeacon(e,t){let n=.5+.5*Math.cos(t*Math.PI*2*1.4);this.beaconMat.emissiveIntensity=e?.3+2.2*n*n:0}setVisible(e){this.root.visible=e}};function Uc(i,e=`truck-${i}`){return new eh(e,i)}var No=[{hat:15328988,vest:13661242,shirt:4609642,trousers:2896960,skin:12950394},{hat:14267710,vest:11978058,shirt:5989745,trousers:3093046,skin:9265736},{hat:15328988,vest:11978058,shirt:4082782,trousers:3159613,skin:10976092},{hat:14267710,vest:13661242,shirt:6975348,trousers:2501425,skin:13806988},{hat:15328988,vest:13208124,shirt:4938578,trousers:2830392,skin:8017215},{hat:14267710,vest:11123538,shirt:5267566,trousers:3488320,skin:12159592},{hat:15328988,vest:13661242,shirt:6117974,trousers:2304046,skin:10120786},{hat:14267710,vest:11978058,shirt:4478310,trousers:3027769,skin:13148288}],It={base:0,hips:1,spine:2,head:3,shL:4,elL:5,shR:6,elR:7,hipL:8,knL:9,hipR:10,knR:11,shovel:12,rake:13,tablet:14,bottle:15,jack:16},vt={hips:[0,.95,0],spine:[0,1.02,0],head:[0,1.52,0],shL:[.21,1.45,0],elL:[.23,1.17,0],shR:[-.21,1.45,0],elR:[-.23,1.17,0],hipL:[.095,.93,0],knL:[.095,.5,0],hipR:[-.095,.93,0],knR:[-.095,.5,0],handL:[.23,.9,.02],handR:[-.23,.9,.02]},th=null;function OE(){return th||(th=new tt({vertexColors:!0,roughness:.68,metalness:.02})),th}var y0=new Map;function Xs(i,e,t){let n=new x(...i),r=new x(...e),s=n.distanceTo(r),o=new mr(t,Math.max(.001,s),3,10),a=new bt().setFromUnitVectors(new x(0,1,0),r.clone().sub(n).normalize());return o.applyMatrix4(new be().compose(n.clone().add(r).multiplyScalar(.5),a,new x(1,1,1))),o}function VE(i){let e=JSON.stringify(i),t=y0.get(e);if(t)return t;let n=[],r=(d,h,f)=>{let p=d.index?d.toNonIndexed():d;for(let _ of Object.keys(p.attributes))_!=="position"&&_!=="normal"&&p.deleteAttribute(_);let v=p.attributes.position.count,g=new Ce(h).convertSRGBToLinear(),m=new Float32Array(v*3),b=new Uint16Array(v*4),y=new Float32Array(v*4);for(let _=0;_<v;_++)m.set([g.r,g.g,g.b],_*3),b[_*4]=f,y[_*4]=1;p.setAttribute("color",new nn(m,3)),p.setAttribute("skinIndex",new nn(b,4)),p.setAttribute("skinWeight",new nn(y,4)),n.push(p)},s=(d,h,f)=>new be().makeTranslation(d,h,f),o=i.boots??2762274,a=i.glove??3815988;for(let[d,h,f]of[[1,It.hipL,It.knL],[-1,It.hipR,It.knR]]){let p=.095*d;r(Xs([p,.9,0],[p,.56,0],.072),i.trousers,h),r(Xs([p,.48,0],[p,.14,0],.058),i.trousers,f),r(C(.12,.1,.27,.035).applyMatrix4(s(p,.05,.04)),o,f)}r(C(.32,.17,.2,.06).applyMatrix4(s(0,.96,0)),i.trousers,It.hips),r(C(.34,.46,.21,.08).applyMatrix4(s(0,1.26,0)),i.shirt,It.spine),r(C(.365,.38,.235,.08).applyMatrix4(s(0,1.24,0)),i.vest,It.spine);for(let d of[1.14,1.29])r(C(.37,.032,.24,.012).applyMatrix4(s(0,d,0)),14212310,It.spine);r(new yt(.048,.052,.08,10).applyMatrix4(s(0,1.52,0)),i.skin,It.head),r(new rt(.102,14,10).applyMatrix4(s(0,1.64,.005)),i.skin,It.head),r(new rt(.118,16,8,0,Math.PI*2,0,Math.PI/2).applyMatrix4(s(0,1.67,0)),i.hat,It.head),r(new yt(.135,.135,.014,18).applyMatrix4(s(0,1.672,.01)),i.hat,It.head),r(C(.12,.012,.06,.004).applyMatrix4(s(0,1.672,.14)),i.hat,It.head);for(let[d,h,f]of[[1,It.shL,It.elL],[-1,It.shR,It.elR]]){let p=.22*d;r(Xs([p,1.43,0],[p*1.04,1.2,0],.05),i.vest,h),r(Xs([p*1.04,1.15,0],[p*1.04,.95,.02],.042),i.shirt,f),r(new rt(.046,10,8).applyMatrix4(s(p*1.04,.9,.02)),a,f)}let c=vt.handR;r(new yt(.016,.016,1.15,6).applyMatrix4(s(c[0],c[1]-.25,c[2]+.02)),9071429,It.shovel),r(C(.22,.28,.02,.01).applyMatrix4(s(c[0],c[1]-.9,c[2]+.05)),6055016,It.shovel),r(new yt(.015,.015,1.5,6).applyMatrix4(s(c[0],c[1]-.4,c[2]+.02)),9071429,It.rake),r(C(.45,.03,.03,.008).applyMatrix4(s(c[0],c[1]-1.15,c[2]+.02)),5002587,It.rake);for(let d=0;d<7;d++)r(C(.012,.1,.012,.003).applyMatrix4(s(c[0]-.2+d*.066,c[1]-1.2,c[2]+.02)),5002587,It.rake);let l=vt.handL;r(C(.2,.28,.016,.012).applyMatrix4(s(l[0],l[1]+.02,l[2]+.07)),2830129,It.tablet),r(C(.17,.23,.004,.004).applyMatrix4(s(l[0],l[1]+.02,l[2]+.08)),8368560,It.tablet),r(new yt(.034,.034,.15,12).applyMatrix4(s(c[0],c[1]-.05,c[2]+.04)),15000022,It.bottle),r(new yt(.02,.02,.03,10).applyMatrix4(s(c[0],c[1]+.035,c[2]+.04)),4156042,It.bottle);for(let d of[-1,1])r(C(.16,.06,1.15,.015).applyMatrix4(s(d*.2,.06,1.12)),11833935,It.jack);r(C(.56,.32,.2,.03).applyMatrix4(s(0,.18,.48)),11833935,It.jack),r(new yt(.07,.07,.08,12).rotateZ(Math.PI/2).applyMatrix4(s(0,.07,.42)),2830129,It.jack),r(Xs([0,.3,.46],[0,1,.3],.02),2830129,It.jack),r(Xs([-.15,1,.3],[.15,1,.3],.022),2830129,It.jack);let u=gr(n);return u.computeBoundingSphere(),y0.set(e,u),u}var nh=class{constructor(e,t){this.id=e;this.root=new _e;this.bones={};this.heading=0;this.action="idle";this.visible=!0;this.root.name=`worker:${e}`;let n=(p,v,g,m=[0,0,0])=>{let b=new wo;return b.name=p,b.position.set(g[0]-m[0],g[1]-m[1],g[2]-m[2]),v&&v.add(b),this.bones[p]=b,b},r=n("base",null,[0,0,0]),s=n("hips",r,vt.hips),o=n("spine",s,vt.spine,vt.hips);n("head",o,vt.head,vt.spine);let a=n("shL",o,vt.shL,vt.spine);n("elL",a,vt.elL,vt.shL);let c=n("shR",o,vt.shR,vt.spine),l=n("elR",c,vt.elR,vt.shR),u=n("hipL",s,vt.hipL,vt.hips);n("knL",u,vt.knL,vt.hipL);let d=n("hipR",s,vt.hipR,vt.hips);n("knR",d,vt.knR,vt.hipR),n("shovel",l,vt.handR,vt.elR),n("rake",l,vt.handR,vt.elR),n("tablet",this.bones.elL,vt.handL,vt.elL),n("bottle",l,vt.handR,vt.elR),n("jack",r,[0,0,0]);let f=["base","hips","spine","head","shL","elL","shR","elR","hipL","knL","hipR","knR","shovel","rake","tablet","bottle","jack"].map(p=>this.bones[p]);this.mesh=new Ka(VE(t),OE()),this.mesh.add(r),this.mesh.updateMatrixWorld(!0),this.mesh.bind(new ja(f)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.root.add(this.mesh),this.setAction("idle",0,0)}setPose(e,t){this.root.position.copy(e),this.root.rotation.set(0,t,0),this.heading=t}setVisible(e){this.visible=e,this.root.visible=e}setAction(e,t,n){this.action=e;let r=this.bones;for(let l of Object.keys(r))r[l].rotation.set(0,0,0);r.hips.position.set(vt.hips[0],vt.hips[1],vt.hips[2]);for(let l of["shovel","rake","tablet","bottle","jack"])r[l].scale.setScalar(1e-4);let s=Math.PI*2,o=t*s,a=Math.sin(o)*.015;if((e==="walk"||e==="carry")&&n!==0){let l=n*s,u=Math.sin(l),d=e==="carry"?.38:.5;r.hipL.rotation.x=-u*d,r.hipR.rotation.x=u*d,r.knL.rotation.x=Math.max(0,Math.sin(l+1.3))*.75,r.knR.rotation.x=Math.max(0,Math.sin(l+1.3+Math.PI))*.75,r.hips.position.y=vt.hips[1]-.018+.018*Math.abs(Math.cos(l)),r.spine.rotation.y=u*.06,e==="walk"&&(r.shL.rotation.x=u*.38,r.shR.rotation.x=-u*.38,r.elL.rotation.x=-.25,r.elR.rotation.x=-.25)}switch(e){case"idle":r.spine.rotation.x=.02+a,r.shL.rotation.z=.06,r.shR.rotation.z=-.06,r.head.rotation.y=.25*Math.sin(o*.5);break;case"walk":r.spine.rotation.x=.05;break;case"inspect":{r.tablet.scale.setScalar(1),r.shL.rotation.x=-.75,r.elL.rotation.x=-1,r.shL.rotation.z=-.15;let l=Math.max(0,Math.sin(o))**2;r.shR.rotation.x=-1.3*l,r.shR.rotation.z=-.15*l,r.elR.rotation.x=-.15*l,r.head.rotation.y=.45*Math.sin(o),r.head.rotation.x=.12-.2*l,r.spine.rotation.x=.03+a;break}case"shovel":{r.shovel.scale.setScalar(1);let l=t<.55?Math.sin(t/.55*Math.PI):0,u=t>=.55?Math.sin((t-.55)/.45*Math.PI):0;r.spine.rotation.x=.25+.45*l-.15*u,r.spine.rotation.y=.35*u,r.hips.position.y=vt.hips[1]-.12*l,r.hipL.rotation.x=-.35*l,r.hipR.rotation.x=-.2*l,r.knL.rotation.x=.6*l,r.knR.rotation.x=.4*l,r.shR.rotation.x=-.55-.3*l-1.1*u,r.elR.rotation.x=-.35+.2*u,r.shL.rotation.x=-.9-.2*l-.8*u,r.shL.rotation.z=-.45,r.elL.rotation.x=-.6,r.shovel.rotation.x=.9-.6*u;break}case"rake":{r.rake.scale.setScalar(1);let l=Math.sin(o);r.spine.rotation.x=.3+.08*l,r.shR.rotation.x=-.75-.35*l,r.elR.rotation.x=-.4+.2*l,r.shL.rotation.x=-.95-.3*l,r.shL.rotation.z=-.35,r.elL.rotation.x=-.5,r.rake.rotation.x=.85+.15*l,r.hipL.rotation.x=-.25,r.knL.rotation.x=.25,r.hipR.rotation.x=.1;break}case"carry":r.jack.scale.setScalar(1),r.spine.rotation.x=.12,r.shL.rotation.x=-.75,r.shR.rotation.x=-.75,r.elL.rotation.x=-.35,r.elR.rotation.x=-.35,r.shL.rotation.z=-.12,r.shR.rotation.z=.12;break;case"operate":{let l=Math.max(0,Math.sin(o*2))*.12;r.shR.rotation.x=-1.15-l,r.elR.rotation.x=-.55+l,r.shR.rotation.z=.1,r.shL.rotation.z=.05,r.head.rotation.x=.1,r.spine.rotation.x=.04+a;break}case"sample":{r.bottle.scale.setScalar(1);let l=.5+.5*Math.sin(o);r.hips.position.y=vt.hips[1]-.42,r.hipL.rotation.x=-1.55,r.knL.rotation.x=2.1,r.hipR.rotation.x=-.9,r.knR.rotation.x=1.9,r.spine.rotation.x=.45,r.shR.rotation.x=-.75-.25*l,r.elR.rotation.x=-.2,r.shL.rotation.x=-.4,r.elL.rotation.x=-.9,r.head.rotation.x=.35;break}}this.mesh.visible=this.visible}forkPoint(e=new x){let t=this.heading;return e.set(this.root.position.x+Math.sin(t)*1.12,this.root.position.y+.1,this.root.position.z+Math.cos(t)*1.12)}};function ih(i,e=0){let t=typeof e=="number"?No[(e%No.length+No.length)%No.length]:e;return new nh(i,t)}var GE=["op-1","op-2","op-3","op-4","op-5","op-6","op-7","op-8"];function E0(){let i=new _e;i.name="actors";let e=Zp();i.add(e.group);let t=GE.map((f,p)=>ih(f,p));for(let f of t)i.add(f.root),f.setVisible(!1);let n={chemical:Uc("chemical"),sludge:Uc("sludge")};for(let f of Object.values(n))i.add(f.root),f.setVisible(!1);let{routes:r,meta:s}=v0(),o=Le.control,a=Do.plinth,c=[];for(let f of[0,1])for(let[p,v]of Do.toteSlots)c.push(new be().makeTranslation(o.pos[0]+p,a+f*1.18,o.pos[1]+v));let l=Uo(c);i.add(l.group);let u=Uo([new be]);u.setCount(1),u.group.visible=!1,i.add(u.group);let d=null,h=new x;return i.userData.routeMeta=s,i.userData.roadFootprints=e.footprints,{root:i,workers:t,trucks:n,routes:r,setCarriedTote(f){d=f?t.find(p=>p.id===f)??null:null,u.group.visible=!!d},setStockedTotes(f){l.setCount(f)},update(f){d&&(d.forkPoint(h),u.group.position.copy(h),u.group.rotation.set(0,d.heading,0),u.group.visible=d.root.visible)}}}var WE=[[-31,.1,0],[-19,.1,0],[-31.8,10,Math.PI/2],[-13,11.8,-Math.PI*.75]],XE=[[-13.55,-12.2],[-5.5,-3.2],[11.8,-5.6],[-3,6.4],[-15,-.8]];function _0(){let i=new _e;i.name="site-lights";let e=new Ie,t=ei(16773590,2,.03,13619916),n=ei(10477744,1.4,.25,4086344),r=[],s=[];WE.forEach(([p,v,g],m)=>{e.add(C(.32,.12,.32,.02),E.concreteDark,M(p,.06,v)),e.add(ne(.07,7,12,.05),E.steelBlue,M(p,7/2,v));let y=Math.sin(g),_=Math.cos(g),R=new x(p+y*1.3,7+.12,v+_*1.3);e.rod(new x(p,7-.05,v),R,.035,E.steelBlue,8),e.add(C(.62,.1,.28,.04),E.steelDark,M(R.x,R.y,R.z,0,g+Math.PI/2,0)),e.add(C(.52,.02,.2,.01),t,M(R.x,R.y-.06,R.z,0,g+Math.PI/2,0)),s.push([R.x+y*.6,.03,R.z+_*.6,9]),r.push({id:`street-pole-${m+1}`,min:[p-.18,0,v-.18],max:[p+.18,7,v+.18]})});let o=-6,a=-2;XE.forEach(([p,v],g)=>{e.add(C(.6,.3,.6,.04),E.concrete,M(p,.15,v)),e.add(ne(.11,9.5,12,.07),E.steelBlue,M(p,.3+9.5/2,v));let b=Math.atan2(o-p,a-v);e.add(C(1.3,.08,.12,.02),E.steelDark,M(p,9.5+.2,v,0,b+Math.PI/2,0));for(let y of[-1,0,1]){let _=Math.cos(b)*.5*y,R=-Math.sin(b)*.5*y,S=b+y*.45;e.add(C(.36,.26,.12,.03),E.steelDark,M(p+_,9.5+.42,v+R,-.55,S,0)),e.add(C(.3,.2,.02,.01),t,M(p+_+Math.sin(S)*.06,9.5+.38,v+R+Math.cos(S)*.06,-.55,S,0)),s.push([p+Math.sin(S)*7,.03,v+Math.cos(S)*7,11])}r.push({id:`flood-mast-${g+1}`,min:[p-.3,0,v-.3],max:[p+.3,9.5+.6,v+.3]})});let c=(p,v,g,m,b)=>{e.rod(new x(p,v,g),new x(p,v+.55,g),.02,E.steelDark,6),e.add(C(.26,.08,.14,.03),E.steelDark,M(p,v+.6,g,0,m,0)),e.add(C(.2,.015,.1,.006),t,M(p,v+.555,g,0,m,0)),s.push([p,b,g,3.2])},l=1.2+1;c(yr.minX+.08,l,yr.maxZ-.03,0,1.22),c(yr.maxX-.08,l,yr.maxZ-.03,0,1.22);let u=$r.deckY+$r.railH;for(let p of[-8,-2.6,2.8])c(p,u,$r.minZ+.03,0,$r.deckY+.02);c(15.41,2.3+.9,-.5,Math.PI/2,.03);for(let[p,v,g]of[[yr.stairX+.45,l-.2,yr.maxZ],[$r.minX+.05,u-.2,-1.6]])e.add(C(.16,.1,.06,.02),n,M(p,v,g));e.add(C(.16,.1,.12,.02),t,M(We.minX+.45,2.34,gt.z+gt.width/2+.45)),e.build(i);let d=Us(16768174,.26),h=new _t(new Je(1,1).rotateX(-Math.PI/2),d,s.length);s.forEach(([p,v,g,m],b)=>h.setMatrixAt(b,new be().compose(new x(p,v,g),new bt,new x(m,1,m)))),h.renderOrder=3,h.frustumCulled=!1,i.add(h);let f=[[-26,3,.8,16766624,6],[-17,3.6,-6.2,16769720,5],[-2.6,3.8,-1.4,16769720,8],[-21.2,3,6.8,16766624,7]];for(let[p,v,g,m,b]of f){let y=new Is(m,0,b*1.6,1.6);y.position.set(p,v,g),y.castShadow=!1,Bp(y,7),i.add(y)}return i.userData.footprints=r,i}var gn=(i,e=.9,t=0,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),ht={cover:gn(9881994),coverDark:gn(8830332),soil:gn(13808778),garbageBed:gn(12168082),liner:gn(3818848,.55),gravel:gn(13617594),concrete:gn(14936048,.85),pipe:gn(13666874,.5,.1),steel:gn(9411252,.45,.4),yellow:gn(15906354,.5,.1),dark:gn(2829872,.7,.2),truckBody:gn(2074767,.5,.05),truckCab:gn(3103722,.45),glass:gn(10467266,.15,.3),fence:gn(11779538,.5,.4),cloud:gn(16777215,1,0,{transparent:!0,opacity:.55,depthWrite:!1}),bird:new Pn({color:4871544,side:tn})};function M0(i,e,t,n,r,s,o){let a=[[i,t],[e,t],[e,n],[i,n]],c=[[i+r,t+r],[e-r,t+r],[e-r,n-r],[i+r,n-r]],l=[],u=(p,v,g,m)=>l.push(...p,...v,...g,...p,...g,...m);for(let p=0;p<4;p++){let v=(p+1)%4;u([a[p][0],s,a[p][1]],[c[p][0],o,c[p][1]],[c[v][0],o,c[v][1]],[a[v][0],s,a[v][1]])}u([c[0][0],o,c[0][1]],[c[3][0],o,c[3][1]],[c[2][0],o,c[2][1]],[c[1][0],o,c[1][1]]);let d=new St;d.setAttribute("position",new Oe(l,3)),d.computeVertexNormals();let h=d.attributes.normal,f=h.count-1;if(h.getY(f)<0){let p=d.attributes.position.array;for(let v=0;v<p.length;v+=9)for(let g=0;g<3;g++){let m=p[v+3+g];p[v+3+g]=p[v+6+g],p[v+6+g]=m}d.computeVertexNormals()}return d}function zo(i,e,t,n){let r=gn(i,.25,.05,{emissive:i,emissiveIntensity:.12});return r.onBeforeCompile=s=>{s.uniforms.uTime=t,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWw;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWw = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWw;
uniform float uTime;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 dir = vec2(${e[0].toFixed(3)}, ${e[1].toFixed(3)});
        float along = dot(vWw.xz, dir), across = dot(vWw.xz, vec2(-dir.y, dir.x));
        float band = smoothstep(0.55, 1.0, fract(along * 0.8 - uTime * ${n?"0.0":"0.9"} + 0.35 * sin(across * 5.0 + along * 0.7)));
        diffuseColor.rgb *= 0.86 + ${n?"0.0":"0.32"} * band;
        ${n?`
        vec2 cell = floor(vWw.xz / 0.9);
        float h = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453);
        float ph = fract(uTime * 0.9 + h);
        vec2 c = (cell + 0.25 + 0.5 * vec2(h, fract(h * 7.31))) * 0.9;
        float r = length(vWw.xz - c);
        float ring = smoothstep(0.035, 0.0, abs(r - ph * 0.42)) * (1.0 - ph);
        diffuseColor.rgb += vec3(0.30, 0.26, 0.18) * ring;`:""}`)},r.customProgramCacheKey=()=>`ptl-water-${e.join(",")}-${n}`,r}function qE(i,e,t){let n=new Je(.03,1.15);n.rotateZ(.12);let r=Math.atan2(mi[0],mi[2]);n.rotateY(r);let s=new dc;s.index=n.index,s.setAttribute("position",n.attributes.position);let o=new Float32Array(t*4);for(let l=0;l<t;l++)o[l*4]=e.x0+(e.x1-e.x0)*ue(l,1),o[l*4+1]=e.z0+(e.z1-e.z0)*ue(l,2),o[l*4+2]=ue(l,3),o[l*4+3]=.85+.3*ue(l,4);s.setAttribute("aSeed",new zr(o,4)),s.instanceCount=t;let a=new zn({transparent:!0,depthWrite:!1,uniforms:{uTime:i,uTop:{value:e.top}},vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime; uniform float uTop;
      varying float vA;
      void main() {
        float y = mod(aSeed.z * uTop - uTime * 13.0 * aSeed.w, uTop);
        vec3 p = position + vec3(aSeed.x + (uTop - y) * 0.06, y + 0.6, aSeed.y);
        vA = smoothstep(0.0, 1.5, y) * smoothstep(uTop, uTop - 3.0, y);
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      varying float vA;
      void main() { gl_FragColor = vec4(0.45, 0.58, 0.92, 0.55 * vA); }`}),c=new re(s,a);return c.frustumCulled=!1,c.renderOrder=5,c.name="rain",c}function w0(){let i=new _e;i.name="landfill";let e=new Ie,t={value:0},n=gc,r=n.tierH,s=n.slope,o=[n.minX,n.maxX,n.minZ,n.maxZ],a=s+n.bench,c=[n.minX+a,n.maxX-a,n.minZ+a,n.maxZ-a];e.add(M0(o[0],o[1],o[2],o[3],s,-.03,r),ht.cover),e.add(M0(c[0],c[1],c[2],c[3],s,r-.02,2*r),ht.coverDark);let l=2*r,u={x0:c[0]+s,x1:c[1]-s,z0:c[2]+s,z1:c[3]-s},d=n.face;e.add(C(d.maxX-d.minX,.12,u.z1-u.z0-.4,.03),ht.garbageBed,M((d.minX+d.maxX)/2,l+.04,(u.z0+u.z1)/2));let h=Math.hypot(s,r),f=Math.atan2(r,s);e.add(new Je(d.maxX-d.minX,h),ht.garbageBed,M((d.minX+d.maxX)/2,r*1.5+.03,c[3]-s/2+.03,-Math.PI/2+f,0,0)),e.add(C(c[1]-c[0],.14,.42,.03),ht.concrete,M((c[0]+c[1])/2,r+.05,c[3]+.45)),e.add(C(.42,.14,c[3]-c[2],.03),ht.concrete,M(c[1]+.45,r+.05,(c[2]+c[3])/2)),e.add(C(.5,.12,Math.hypot(s,r)+.2,.03),ht.concrete,M(o[1]-1.6,r/2+.06,o[3]-s/2,f-Math.PI/2+Math.PI/2-0,0,0));for(let[F,Z,ee,fe]of[[(o[0]+o[1])/2,o[3]+.25,o[1]-o[0]+1,.5],[(o[0]+o[1])/2,o[2]-.25,o[1]-o[0]+1,.5],[o[1]+.25,(o[2]+o[3])/2,.5,o[3]-o[2]],[o[0]-.25,(o[2]+o[3])/2,.5,o[3]-o[2]]])e.add(C(ee,.05,fe,.01),ht.liner,M(F,0,Z));let p=[[u.x0+2,u.z0+1.6],[u.x0+5.2,u.z1-1.4],[u.x0+8,u.z0+2.6],[u.x0+1.8,u.z1-1.2],[d.minX-2.2,u.z0+1]];for(let[F,Z]of p)e.add(ne(.45,.35,10),ht.gravel,M(F,l+.17,Z)),e.add(ne(.09,1.7,10),ht.steel,M(F,l+.85,Z)),e.add(C(.5,.08,.14,.02),ht.steel,M(F,l+1.72,Z));let v=Pp,g=v.w,m=[{a:[n.minX-.6,v.z],b:[v.x,v.z],dir:[1,0]},{a:[v.x,n.minZ-.6],b:[v.x,(sn.minZ+sn.maxZ)/2],dir:[0,1]},{a:[v.x,v.z],b:[v.x,(sn.minZ+sn.maxZ)/2],dir:[0,-1]},{a:[v.x,(sn.minZ+sn.maxZ)/2],b:[sn.minX+.2,(sn.minZ+sn.maxZ)/2],dir:[1,0]}],b=[];for(let F of m){let Z=F.b[0]-F.a[0],ee=F.b[1]-F.a[1],fe=Math.hypot(Z,ee)+g,he=(F.a[0]+F.b[0])/2,xe=(F.a[1]+F.b[1])/2,Ke=Math.abs(Z)>Math.abs(ee),[de,ye]=Ke?[fe,g]:[g,fe];e.add(C(de,.06,ye,.01),ht.concrete,M(he,0,xe));for(let $e of[-1,1]){let Se=Ke?0:$e*(g/2-.05),xt=Ke?$e*(g/2-.05):0;e.add(C(Ke?fe:.1,.3,Ke?.1:fe,.02),ht.concrete,M(he+Se,.12,xe+xt))}let ze=new re(new Je(Ke?fe-.1:g-.2,Ke?g-.2:fe-.1).rotateX(-Math.PI/2),zo(13208380,F.dir,t,!1));ze.position.set(he,.15,xe),ze.receiveShadow=!0,b.push(ze)}let y=sn,_=(y.minX+y.maxX)/2,R=(y.minZ+y.maxZ)/2,S=y.maxX-y.minX,P=y.maxZ-y.minZ,L=.75,w=.6;for(let[F,Z,ee,fe]of[[_,y.minZ-L/2+.3,S+2*L-.6,L],[_,y.maxZ+L/2-.3,S+2*L-.6,L],[y.maxX+L/2-.3,R,L,P],[y.minX-L/2+.3,(y.minZ+R-.55)/2,L,R-.55-y.minZ],[y.minX-L/2+.3,(y.maxZ+R+.55)/2,L,y.maxZ-R-.55]])e.add(C(ee,w,fe,.12),ht.soil,M(F,w/2-.02,Z));e.add(C(S-.5,.06,P-.5,.02),ht.liner,M(_,.02,R));for(let[F,Z,ee,fe]of[[_,y.minZ+.32,S-.6,.06],[_,y.maxZ-.32,S-.6,.06],[y.maxX-.32,R,.06,P-.6],[y.minX+.32,(y.minZ+.3+R-.55)/2,.06,R-.55-y.minZ-.3],[y.minX+.32,(y.maxZ-.3+R+.55)/2,.06,y.maxZ-.3-R-.55]])e.add(C(ee,w,fe,.02),ht.liner,M(F,w/2,Z));let T=new re(new Je(S-.7,P-.7).rotateX(-Math.PI/2),zo(11893301,[1,0],t,!0));T.position.set(_,.42,R),T.receiveShadow=!0,b.push(T);let H=y.minX-L-.3,N=y.maxX+L+.3,U=y.minZ-L-.3,z=y.maxZ+L+.3,I=(F,Z)=>{let ee=Math.max(1,Math.round(F.distanceTo(Z)/2.2));for(let fe=0;fe<=ee;fe++){let he=F.clone().lerp(Z,fe/ee);e.add(C(.07,1.4,.07,.01),ht.fence,M(he.x,.7,he.z))}for(let fe of[.6,1.3])e.rod(new x(F.x,fe,F.z),new x(Z.x,fe,Z.z),.025,ht.fence,6)},B=new x(H,0,U),X=new x(N,0,U),V=new x(N,0,z),Q=new x(H,0,z);I(B,X),I(X,V),I(V,Q),I(Q,new x(H,0,R+.6)),I(new x(H,0,R-.6),B);let se=y.maxX+1.4,le=.55;e.add(C(1,.18,.8,.03),ht.concrete,M(se+.7,.09,R)),e.add(ne(.2,.6,16),ht.steel,M(se+.5,.45,R,0,0,Math.PI/2)),e.add(ne(.16,.42,16),E.steelBlue,M(se+1,.45,R,0,0,Math.PI/2));let Ae=pn[0],at=pn[1];e.rod(new x(y.maxX-.6,le,R),new x(se+.2,le,R),.09,ht.pipe,12),e.rod(new x(se+1.2,le,R),new x(Ae-.3,le,R),.09,ht.pipe,12),Math.abs(R-at)>.05&&e.rod(new x(Ae-.3,le,R),new x(Ae-.3,le,at),.09,ht.pipe,12),e.rod(new x(Ae-.3,le,at),new x(Ae-.3,.2,at),.09,ht.pipe,12);for(let F of[se+2.4,Ae-.9])e.add(C(.12,le-.05,.3,.02),ht.concrete,M(F,(le-.05)/2,R));e.build(i,!0,!0);for(let F of b)i.add(F);let K=[3818070,5995760,3125370,15987960,5214176,12173520,15909194,15987960],ie=[14069882,12159578,15296346,16777215,4178096,14069882,13225176],oe=900,ce=650,Te=new _t(new Tn(1,0),gn(16777215,.6),oe),Ne=new _t(new Gt(1,1,1),gn(16777215,.8),ce),Xe=new be,Ze=new Ce,et=F=>F<=u.z1?l:l-(F-u.z1)/s*r,Mt=(F,Z)=>{let ee=ue(F,Z+9)<.42,fe=d.minX+.3+(d.maxX-d.minX-.6)*ue(F,Z+1),he=ee?u.z1+s*Math.pow(ue(F,Z+2),.8):u.z0+.4+(u.z1-u.z0-.4)*ue(F,Z+2);return[fe,et(he),he]};for(let F=0;F<oe;F++){let[Z,ee,fe]=Mt(F,10),he=.16+.24*ue(F,13);Xe.compose(new x(Z,ee+he*.55,fe),new bt().setFromEuler(new en(ue(F,14)*3,ue(F,15)*6.28,0)),new x(he*1.1,he*.8,he)),Te.setMatrixAt(F,Xe),Te.setColorAt(F,Ze.setHex(K[Math.floor(ue(F,16)*K.length)]))}for(let F=0;F<ce;F++){let[Z,ee,fe]=Mt(F,30),he=.12+.4*ue(F,33),xe=.05+.18*ue(F,34),Ke=.1+.32*ue(F,35);Xe.compose(new x(Z,ee+xe*.4,fe),new bt().setFromEuler(new en((ue(F,36)-.5)*.8,ue(F,37)*6.28,(ue(F,38)-.5)*.8)),new x(he,xe,Ke)),Ne.setMatrixAt(F,Xe),Ne.setColorAt(F,Ze.setHex(ie[Math.floor(ue(F,39)*ie.length)]))}for(let F of[Te,Ne])F.castShadow=!0,F.receiveShadow=!0,F.instanceMatrix.needsUpdate=!0,F.instanceColor&&(F.instanceColor.needsUpdate=!0),i.add(F);let G=new _e;{let F=new Ie;F.add(C(2,.75,1.5,.08),ht.yellow,M(0,.75,0)),F.add(C(.95,.85,1.15,.06),ht.yellow,M(-.45,1.5,0)),F.add(C(.8,.55,1.18,.03),ht.glass,M(-.45,1.55,0));for(let Z of[-.72,.72])F.add(C(2.3,.5,.36,.12),ht.dark,M(0,.27,Z));F.add(C(.22,.85,2,.04),ht.yellow,M(1.45,.48,0));for(let Z of[-.6,.6])F.rod(new x(.8,.7,Z),new x(1.38,.45,Z),.05,ht.dark,6);F.add(ne(.06,.5,8),ht.dark,M(.2,1.35,.4)),F.build(G,!0,!0)}G.rotation.y=-Math.PI/2,i.add(G);let Vt=new _e,it=new _e;{let F=new Ie;for(let ee of[-1.4,.9,1.9])for(let fe of[-.95,.95])F.add(ne(.42,.3,14),ht.dark,M(ee,.42,fe,Math.PI/2,0,0));F.add(C(5,.3,1.9,.04),ht.dark,M(.3,.75,0)),F.add(C(1.5,1.6,2.1,.12),ht.truckCab,M(-2,1.55,0)),F.add(C(.05,.7,1.8,.02),ht.glass,M(-2.76,1.85,0)),F.build(Vt,!0,!0);let Z=new Ie;Z.add(C(3.6,1.9,2.2,.15),ht.truckBody,M(-1.8,.95,0)),Z.add(C(.25,1.8,2.1,.06),ht.dark,M(-.1,.95,0)),Z.build(it,!0,!0)}it.position.set(3,.9,0),Vt.add(it),Vt.position.set(d.minX+2.6,l+.1,u.z0+1.4),Vt.rotation.y=.15,i.add(Vt);{let F=new Ie;F.add(new Tn(1,1).scale(1.3,.55,1.1),ht.garbageBed,M(d.minX+6.6,l+.1,u.z0+1.9)),F.build(i,!0,!0)}let ct=new _e;for(let F=0;F<8;F++){let Z=new re(new Tn(1,3),ht.cloud);Z.scale.set(5+3*ue(F,51),1.2+.6*ue(F,52),3.5+2*ue(F,53)),Z.position.set(n.minX+2+(n.maxX-n.minX+6)*(F/7)+2*ue(F,54),19+2.5*ue(F,55),(n.minZ+n.maxZ)/2-4+8*ue(F,56)),Z.renderOrder=6,ct.add(Z)}i.add(ct);let qe=[],zt=new St;zt.setAttribute("position",new Oe([0,0,0,-.35,.08,.32,0,0,.12,0,0,0,0,0,.12,.35,.08,.32],3));for(let F=0;F<7;F++){let Z=new re(zt,ht.bird);qe.push(Z),i.add(Z)}let Ye={x0:n.minX-4,x1:sn.maxX+1.5,z0:n.minZ-3,z1:v.z+.5,top:16},D=qE(t,Ye,3400);i.add(D);let A={landfill:new x((d.minX+d.maxX)/2,l+1.4,(u.z0+u.z1)/2),pond:new x(_,1,R)},$=[[n.minX,0,n.maxZ+1],[n.maxX,0,n.maxZ+1],[n.minX,l,n.minZ+6],[n.maxX,l,n.minZ+6],[y.maxX+1,0,y.maxZ+1],[y.maxX+1,0,y.minZ-1],[(d.minX+d.maxX)/2,l+3,u.z0]];return{group:i,anchors:A,framePoints:$,setRain(F){D.visible=F,ct.visible=F},update(F){t.value=F;let Z=9,ee=(F%Z+Z)%Z/Z,fe=ee<.62?ee/.62:1-(ee-.62)/.38,he=fe*fe*(3-2*fe);G.position.set(d.maxX-2.4-.6*Math.sin(F*.21),l+.08,u.z0+1.3+(u.z1-u.z0-1.6)*he);let xe=(F+3)%14/14,Ke=xe<.3?xe/.3:xe<.55?1:xe<.8?1-(xe-.55)/.25:0;it.rotation.z=-.75*Ke*Ke*(3-2*Ke),qe.forEach((de,ye)=>{let ze=4+3*ue(ye,61),$e=.35+.15*ue(ye,62),Se=F*$e+ue(ye,63)*6.28,xt=(d.minX+d.maxX)/2+(ue(ye,64)-.5)*8,lt=(u.z0+u.z1)/2+(ue(ye,65)-.5)*5;de.position.set(xt+ze*Math.cos(Se),l+6+2*ue(ye,66)+.4*Math.sin(F*1.3+ye),lt+ze*Math.sin(Se)),de.rotation.set(0,-Se,.25*Math.sin(F*6+ye*1.7))})}}}var Sn=(i,e=.85,t=0,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),Dt={meadow:Sn(12049570),sand:Sn(15326396),stone:Sn(13883362),wood:Sn(13212258,.8),trunk:Sn(10122322),leafA:Sn(8176762),leafB:Sn(6271854),leafC:Sn(10473866),reed:Sn(6203482),reedHead:Sn(10122322),pad:Sn(5812842),flower:Sn(15967944),white:Sn(16251131,.6),beak:Sn(15906354,.5),dark:Sn(3818070,.6),duck:Sn(9071178,.7),duckHead:Sn(3116906,.5)},rh=(i,e,t=64)=>new wn(1,t).rotateX(-Math.PI/2).scale(i,1,e);function T0(i){let e=new _e;e.name="wetland";let t=xc,n={value:0},r=new Ie;r.add(rh(t.rx+6,t.rz+4.5),Dt.meadow,M(t.cx,-.015,t.cz+.6)),r.add(rh(t.rx+1,t.rz+.9),Dt.sand,M(t.cx,-.005,t.cz));let s=new re(rh(t.rx,t.rz),zo(4639168,[0,1],n,!0));s.position.set(t.cx,.02,t.cz),s.receiveShadow=!0,e.add(s);let o=i.z-.2,a=t.cz-t.rz+.6,c=i.x,l=a-o;r.add(C(1.9,.08,l,.02),Dt.stone,M(c,-.02,(o+a)/2));for(let I of[-1,1])r.add(C(.25,.28,l,.06),Dt.stone,M(c+I*.9,.1,(o+a)/2));let u=new re(new Je(1.5,l).rotateX(-Math.PI/2),zo(4639168,[0,1],n,!1));u.position.set(c,.06,(o+a)/2),e.add(u);for(let I=0;I<34;I++){let B=I/34*Math.PI*2+ue(I,3)*.1,X=1.02+.05*ue(I,4),V=.18+.2*ue(I,5);r.add(new Tn(1,0).scale(V*1.3,V*.7,V),Dt.stone,M(t.cx+Math.cos(B)*t.rx*X,.05,t.cz+Math.sin(B)*t.rz*X,0,B,0))}let d=t.cx+t.rx*.55,h=t.cz+t.rz+1.2,f=t.cz+.8;r.add(C(1.3,.1,h-f,.02),Dt.wood,M(d,.32,(h+f)/2));for(let I=f;I<=h+1e-6;I+=1.2)for(let B of[-1,1])r.add(ne(.05,.6,8),Dt.wood,M(d+B*.6,.1,I)),r.add(ne(.035,.75,8),Dt.wood,M(d+B*.6,.72,I));for(let I of[-1,1])r.add(C(.06,.06,h-f,.01),Dt.wood,M(d+I*.6,1.08,(h+f)/2));r.add(C(2.4,.1,1.8,.02),Dt.wood,M(d,.32,f-.6)),r.add(C(1.6,.08,.45,.02),Dt.wood,M(t.cx-4,.45,t.cz+t.rz+2.2));for(let I of[-1,1])r.add(C(.08,.45,.4,.02),Dt.dark,M(t.cx-4+I*.7,.22,t.cz+t.rz+2.2));r.add(ne(.05,1.4,8),Dt.wood,M(c+1.6,.7,a-.6)),r.add(C(1.1,.6,.06,.03),Dt.white,M(c+1.6,1.45,a-.6));let p=new yt(.018,.025,1,5),v=420,g=new _t(p,Dt.reed,v),m=new _t(new yt(.045,.045,.22,6),Dt.reedHead,v),b=new be,y=new bt,_=new en;for(let I=0;I<v;I++){let X=Math.floor(ue(I,11)*14)/14*Math.PI*2+.35+(ue(I,12)-.5)*.28,V=.86+.16*ue(I,13),Q=t.cx+Math.cos(X)*t.rx*V,se=t.cz+Math.sin(X)*t.rz*V,le=.9+.8*ue(I,14);y.setFromEuler(_.set((ue(I,15)-.5)*.25,0,(ue(I,16)-.5)*.25)),b.compose(new x(Q,le/2,se),y,new x(1,le,1)),g.setMatrixAt(I,b),b.compose(new x(Q,le+.05,se),y,new x(1,ue(I,17)<.5?1:.001,1)),m.setMatrixAt(I,b)}let R=30,S=new _t(new wn(.32,14,.4,Math.PI*2-.4).rotateX(-Math.PI/2),Dt.pad,R),P=new _t(new Tn(.11,0),Dt.flower,R);for(let I=0;I<R;I++){let B=ue(I,21)*Math.PI*2,X=.25+.55*Math.sqrt(ue(I,22)),V=t.cx-2+Math.cos(B)*t.rx*.6*X,Q=t.cz+Math.sin(B)*t.rz*.7*X,se=.8+.6*ue(I,23);b.compose(new x(V,.035,Q),y.setFromEuler(_.set(0,ue(I,24)*6.28,0)),new x(se,1,se)),S.setMatrixAt(I,b),b.compose(new x(V+.05,.08,Q),y,new x(ue(I,25)<.4?1:.001,1,1)),P.setMatrixAt(I,b)}let L=[];for(let I=0;I<18;I++){let B=I/18*Math.PI*2+ue(I,31)*.2;if(Math.sin(B)<-.55&&Math.abs(Math.cos(B))<.45)continue;let X=1.35+.25*ue(I,32);L.push([t.cx+Math.cos(B)*(t.rx+2.5)*X*.85,t.cz+Math.sin(B)*(t.rz+2)*X*.9,.8+.5*ue(I,33)])}L.forEach(([I,B,X],V)=>{r.add(ne(.12*X,1.4*X,8),Dt.trunk,M(I,.7*X,B));let Q=[Dt.leafA,Dt.leafB,Dt.leafC][V%3];r.add(new Tn(1,1).scale(1.1*X,1*X,1.1*X),Q,M(I,1.9*X,B)),r.add(new Tn(1,1).scale(.75*X,.7*X,.75*X),Q,M(I+.45*X,2.5*X,B-.2*X))});let w=[],T=[[t.cx-t.rx*.7,t.cz-.6,.6],[t.cx+2.5,t.cz+t.rz*.75,-2.2],[t.cx-3.5,t.cz+t.rz*.85,2.6]];for(let[I,B,X]of T){let V=new _e,Q=new Ie;Q.add(new rt(1,12,8).scale(.32,.2,.18),Dt.white,M(0,.75,0));for(let Ae of[-.06,.06])Q.add(ne(.012,.6,5),Dt.beak,M(-.02,.3,Ae));Q.build(V,!0,!0);let se=new _e;se.position.set(.22,.82,0);let le=new Ie;le.add(ne(.035,.42,6),Dt.white,M(.05,.2,0,0,0,-.25)),le.add(new rt(.075,10,8),Dt.white,M(.1,.42,0)),le.add(new Yi(.03,.22,6).rotateZ(-Math.PI/2),Dt.beak,M(.25,.42,0)),le.build(se,!0,!0),V.add(se),V.position.set(I,0,B),V.rotation.y=X,e.add(V),w.push(V)}let H=[];for(let I=0;I<4;I++){let B=new _e,X=new Ie;X.add(new rt(1,10,8).scale(.24,.12,.15),Dt.duck,M(0,.08,0)),X.add(new rt(.08,10,8),Dt.duckHead,M(.18,.2,0)),X.add(new Yi(.03,.09,6).rotateZ(-Math.PI/2),Dt.beak,M(.28,.19,0)),X.build(B,!0,!0),e.add(B),H.push(B)}let N=new St;N.setAttribute("position",new Oe([0,0,0,-.3,.07,.28,0,0,.1,0,0,0,0,0,.1,.3,.07,.28],3));let U=new Pn({color:4871544,side:tn}),z=Array.from({length:5},()=>{let I=new re(N,U);return e.add(I),I});r.build(e,!0,!0);for(let I of[g,m,S,P])I.castShadow=!0,I.receiveShadow=!0,I.instanceMatrix.needsUpdate=!0,e.add(I);return{group:e,anchor:new x(t.cx-1.5,1.6,t.cz-.5),framePoints:[[t.cx-t.rx-2,0,t.cz],[t.cx+t.rx+2,0,t.cz],[t.cx,0,t.cz-t.rz-1],[t.cx,0,t.cz+t.rz+2.5],[t.cx-t.rx,3,t.cz],[t.cx+t.rx,3,t.cz]],update(I){n.value=I,w.forEach((B,X)=>{let V=B.children[B.children.length-1],Q=Math.max(0,Math.sin(I*.9+X*2.1));V.rotation.z=-.9*Q*Q*Q}),H.forEach((B,X)=>{let V=.18+.05*X,Q=I*V+X*1.7,se=t.rx*(.35+.1*X),le=t.rz*(.3+.08*X);B.position.set(t.cx+1+Math.cos(Q)*se,.02+.01*Math.sin(I*3+X),t.cz+Math.sin(Q)*le),B.rotation.y=-Math.atan2(Math.cos(Q)*le,-Math.sin(Q)*se)}),z.forEach((B,X)=>{let V=I*(.3+.07*X)+X*1.3,Q=5+2*ue(X,41);B.position.set(t.cx+Q*Math.cos(V),6+X*.5+.3*Math.sin(I*1.5+X),t.cz+.6*Q*Math.sin(V)),B.rotation.set(0,-V,.25*Math.sin(I*6+X))})}}}function YE(i){switch(i.id){case"homog":return Jp(i);case"coag":return jp(i);case"floc":return Qp(i);case"clar1":return t0(i);case"clar2":return n0(i);case"inter":return i0(i);case"pump":return $d(i);case"uasb1":case"uasb2":case"uasb3":case"uasb4":return r0(i.id,i);case"mbbr":return s0(i);case"filtro":return o0(i);case"discharge":return a0(i);case"sludge":return c0(i);case"screen":return l0(i);case"dosC":return d0(i);case"dosF":return h0(i);case"pumpB":return $d(i,{cabinet:!0});case"flare":return p0(i);case"thick":return m0(i);case"control":return g0(i)}}function $E(i){let e=i.discharge.anchors.out;return{inlet:new x(pn[0],.25,pn[1]),outfall:new x(e.x,e.y,We.maxZ+.9)}}function S0(){let i=new _e;i.name="plant";let e=new _e;e.name="units";let t={};for(let b of pi){let y=YE(b);t[b.id]=y,e.add(y.root)}let{group:n,footprints:r}=Kp(),s=$E(t),o=(b,y,_)=>{if(b==="world")return _.clone();let R=t[b].anchors[y];if(!R)throw new Error(`Puerto inexistente: ${b}.${y}`);return R.clone()},a=b=>[o(b.from,b.fromPort,s.inlet),o(b.to,b.toPort,s.outfall)],c=[...Object.values(t).map(b=>b.footprint),...r.map(b=>b.footprint)],l=Xp(Mi,a,c),u=_0(),d=E0(),h=w0(),f=T0(s.outfall);i.add(e,l.root,n,u,d.root,h.group,f.group),i.userData.siteLights=u;let p=new jn;for(let b of Object.values(t))p.expandByPoint(new x(...b.footprint.min)),p.expandByPoint(new x(...b.footprint.max));for(let b of Object.values(l.pipes))for(let y of b.points)p.expandByPoint(y);let v={min:p.min.toArray(),max:p.max.toArray()},g=Object.values(t),m=Object.values(l.pipes);return{root:i,units:t,pipes:l.pipes,bounds:v,layers:{pipes:l.root,structures:n},worldPorts:s,actors:d,landfill:h,wetland:{anchor:f.anchor,framePoints:f.framePoints},update(b){h.update(b),f.update(b);for(let y of g)y.update(b);for(let y of m)y.update(b);d.update(b)}}}function ZE(i,e){let t=0,n=[];for(let s=1;s<i.length;s++){let o=i[s].distanceTo(i[s-1]);n.push(o),t+=o}let r=Math.max(0,Math.min(1,e))*t;for(let s=0;s<n.length;s++){if(r<=n[s]||s===n.length-1)return i[s].clone().lerp(i[s+1],n[s]>0?Math.min(1,r/n[s]):1);r-=n[s]}return i[i.length-1].clone()}function sh(){let i=new _e;i.name="stub-plant";let e={};for(let a of pi){let c=new _e,l=a.size.d??a.size.w??1,u=a.size.d??a.size.l??1,d=a.size.h,h=new tt({color:8161935,roughness:.8,metalness:.1}),f=a.size.d?new yt(l/2,l/2,d,28):new Gt(l,d,u),p=new re(f,h);p.position.set(a.pos[0],a.base+d/2,a.pos[1]),c.add(p),i.add(c);let v=a.base+d,g={label:new x(a.pos[0],v+.6,a.pos[1]),focus:new x(a.pos[0],a.base+d/2,a.pos[1]),core:new x(a.pos[0],a.base+d/2,a.pos[1]),in:new x(a.pos[0]-l/2,a.base+Math.min(d*.6,1),a.pos[1]),out:new x(a.pos[0]+l/2,a.base+Math.min(d*.6,1),a.pos[1]),sludge:new x(a.pos[0],.25,a.pos[1]-u/2)},m=!1,b=!1,y=()=>{h.color.set(b?10470600:m?9412772:6977403),h.emissive.set(b?797230:0)};e[a.id]={id:a.id,root:c,anchors:g,radius:Math.max(l,u,d)/2,footprint:{min:[a.pos[0]-l/2,0,a.pos[1]-u/2],max:[a.pos[0]+l/2,v,a.pos[1]+u/2]},pickTargets:[p],setActive(_){m=_,y()},setSelected(_){b=_,y()},setFlowLevel(){},setInternalMotion(){},setStatus(_){},update(){}}}let t={},n=new _e;i.add(n);for(let a of Mi){let c=a.from==="world"?new x(pn[0],1,pn[1]):e[a.from].anchors[a.fromPort]??e[a.from].anchors.out,l=a.to==="world"?new x(e.discharge.anchors.out.x-.5,.4,We.maxZ-.5):e[a.to].anchors[a.toPort]??e[a.to].anchors.in,u=(c.x+l.x)/2,d=[c.clone(),new x(u,c.y,c.z),new x(u,c.y,l.z),new x(u,l.y,l.z),l.clone()].filter((b,y,_)=>y===0||b.distanceTo(_[y-1])>1e-4),h=new _e,f=new tt({color:Ns[a.kind].pipe,roughness:.6});for(let b=1;b<d.length;b++){let y=d[b].distanceTo(d[b-1]),_=new re(new yt(.07,.07,y,8),f);_.position.copy(d[b]).add(d[b-1]).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new x(0,1,0),d[b].clone().sub(d[b-1]).normalize()),h.add(_)}n.add(h);let p=0;for(let b=1;b<d.length;b++)p+=d[b].distanceTo(d[b-1]);let v=0,g=!1,m=()=>{f.color.set(v>=1?Ns[a.kind].fluid:Ns[a.kind].pipe),f.emissive.set(g?1916740:0)};t[a.id]={id:a.id,kind:a.kind,from:a.from,to:a.to,root:h,points:d,length:p,pointAt:b=>ZE(d,b),setFlow(){},setFront(b){v=b,m()},setHighlighted(b){g=b,m()},setVisible(b){h.visible=b},update(){}}}let r=new _e;i.add(r);let s=new re(new Gt(We.maxX-We.minX,.1,We.maxZ-We.minZ),new tt({color:3818054}));s.position.set((We.maxX+We.minX)/2,-.05,(We.maxZ+We.minZ)/2),r.add(s);let o=oh();return i.add(o.root),{root:i,units:e,pipes:t,bounds:{min:[We.minX,0,We.minZ],max:[We.maxX,4,We.maxZ]},layers:{pipes:n,structures:r},actors:o,update(){}}}function R0(i){let e=0,t=[0];for(let r=1;r<i.length;r++)e+=i[r].distanceTo(i[r-1]),t.push(e);let n=r=>{let s=Math.max(0,Math.min(1,r))*e,o=1;for(;o<i.length-1&&t[o]<s;)o++;return{i:o,k:t[o]>t[o-1]?(s-t[o-1])/(t[o]-t[o-1]):1}};return{points:i,length:e,pointAt(r){let{i:s,k:o}=n(r);return i[s-1].clone().lerp(i[s],Math.min(1,Math.max(0,o)))},headingAt(r){let{i:s}=n(r),o=i[s].clone().sub(i[s-1]);return Math.atan2(o.x,o.z)}}}var KE=(i,e,t)=>new x(i,e,t),A0=(i,e=0)=>i.map(([t,n])=>KE(t,e,n));function JE(i,e){if(i.length<3||e<=0)return i;let t=[i[0].clone()];for(let n=1;n<i.length-1;n++){let r=i[n-1],s=i[n],o=i[n+1],a=s.clone().sub(r),c=o.clone().sub(s),l=a.length(),u=c.length();a.normalize(),c.normalize();let d=Math.acos(Math.max(-1,Math.min(1,a.dot(c))));if(d<.001){t.push(s.clone());continue}let h=Math.min(e*Math.tan(d/2),l*.48,u*.48),f=s.clone().addScaledVector(a,-h),p=s.clone().addScaledVector(c,h),v=8;for(let g=0;g<=v;g++){let m=g/v;t.push(f.clone().multiplyScalar((1-m)*(1-m)).addScaledVector(s,2*m*(1-m)).addScaledVector(p,m*m))}}return t.push(i[i.length-1].clone()),t.filter((n,r,s)=>r===0||n.distanceTo(s[r-1])>1e-4)}function jE(){let i=gt.loop,e=gt.chemStop,t=gt.sludgeStop,n=gt.z,r=gt.gate[0]-5,s=n+2,o={"chem-arrive":[[r,n],[e.x,e.z]],"chem-leave":[[e.x,e.z],[i.eastX,n],[i.eastX,i.southZ],[i.westX,i.southZ],[i.westX,s],[r,s]],"sludge-arrive":[[r,n],[i.eastX,n],[i.eastX,i.southZ],[t.x,t.z]],"sludge-leave":[[t.x,t.z],[i.westX,i.southZ],[i.westX,s],[r,s]],"w-operator":[[-23,-4.1],[-23,-4.9],[-14.6,-4.9]],"w-unload":[[-24.5,-.35],[-24.5,.4],[-26.6,.4],[-26.6,1.6]],"w-bed-a":[[-21,7.6],[-21,9.3],[-20,9.3],[-20,9.9]],"w-bed-b":[[-23.2,7.2],[-23.2,9.3],[-22.4,9.3]],"w-mbbr":[[13.5,-1.2],[16.6,-1.2]],"w-patrol":[[-6,-11.5],[18,-11.5],[18,-3],[-6,-3],[-6,-11.5]],"w-screen":[[-29.6,-9],[-27,-9],[-27,-10.5]]},a={};for(let[c,l]of Object.entries(o))a[c]=R0(JE(A0(l),c.includes("arrive")||c.includes("leave")?4:.6));return a["w-uasb"]=R0(A0([[-9.2,-.9],[4,-.9]],3.6)),a}function QE(i,e){let t=new _e;t.name=i;let n=new tt({color:e,roughness:.7}),r=new re(new mr(.2,.9,4,10),n);r.position.y=.65;let s=new re(new rt(.14,12,8),new tt({color:15258474}));s.position.y=1.5;let o=new re(new Gt(.08,.08,.2),n);return o.position.set(0,1.45,.16),t.add(r,s,o),{id:i,root:t,setPose(a,c){t.position.copy(a),t.rotation.y=c},setAction(a,c,l){r.position.y=.65+.04*Math.abs(Math.sin(Math.PI*2*l))},setVisible(a){t.visible=a}}}function C0(i){let e=new _e;e.name=`truck-${i}`;let t=7,n=new re(new Gt(2.3,2.2,5),new tt({color:i==="chemical"?13685974:9071162}));n.position.set(0,1.5,1.2);let r=new re(new Gt(2.3,2.4,1.8),new tt({color:3104122}));r.position.set(0,1.5,4.7);let s=new re(new Gt(2.1,1,4.8),new tt({color:i==="chemical"?15790312:3811866})),o=new re(new rt(.15,8,6),new Pn({color:16752672}));return o.position.set(0,2.85,4.7),e.add(n,r,s,o),{id:`truck-${i}`,kind:i,root:e,length:t,setPose(a,c){e.position.copy(a),e.rotation.y=c},setLoad(a){s.visible=a>.01,s.scale.y=Math.max(.01,a),s.position.set(0,2.6+.5*a,1.2)},setWork(a){},setBeacon(a,c){o.visible=a&&Math.sin(c*12)>0},setVisible(a){e.visible=a}}}function oh(){let i=new _e;i.name="stub-actors";let t=["w-operator","w-uasb","w-bed-a","w-bed-b","w-unload","w-mbbr","w-patrol","w-screen"].map((l,u)=>QE(l,[14711340,14271036,3968985][u%3]));for(let l of t)i.add(l.root);let n={chemical:C0("chemical"),sludge:C0("sludge")};i.add(n.chemical.root,n.sludge.root);let r=new Gt(1,1,1.2),s=new tt({color:15658730}),o=new re(r,s);o.scale.setScalar(.8),i.add(o);let a=[];for(let l=0;l<6;l++){let u=new re(r,s);u.position.set(-21.6+l%3*1.1,.5,-.25),u.visible=!1,a.push(u),i.add(u)}let c=null;return{root:i,workers:t,trucks:n,routes:jE(),setCarriedTote(l){c=l},setStockedTotes(l){a.forEach((u,d)=>{u.visible=d<l})},update(){let l=t.find(u=>u.id===c);o.visible=!!l&&l.root.visible,l&&(o.position.copy(l.root.position),o.position.y+=.45,o.position.x+=.7*Math.sin(l.root.rotation.y),o.position.z+=.7*Math.cos(l.root.rotation.y))}}}var dn=(i,e=0,t=1)=>i<e?e:i>t?t:i,ii=(i,e,t)=>i+(e-i)*t;function Er(i,e,t){return t<=e?i>=t?1:0:dn((i-e)/(t-e))}function Yt(i,e,t){let n=Er(i,e,t);return n*n*(3-2*n)}function I0(i,e,t){let n=Er(i,e,t);return n*n*n*(n*(n*6-15)+10)}var P0=i=>{let e=dn(i);return e*e*(3-2*e)};function _r(i){let e=Math.max(0,i),t=Math.floor(e/60),r=(e-t*60).toFixed(1).padStart(4,"0");return`${String(t).padStart(2,"0")}:${r}`}function xn(i,e,t){let n=i.toFixed(e);return t==="es"?n.replace(".",","):n}var Hn=50,Bc=["w-operator","w-uasb","w-bed-a","w-bed-b","w-unload","w-mbbr","w-patrol","w-screen"],Nc=3,e_=4,F0=1.35,O0=1.2,t_=1.05,n_=.48,L0=4.2;function i_(i,e){let t=i.length,n=e*t;if(t<=0)return i.headingAt(e);let r=i.pointAt(e),s=i.pointAt(Math.min(1,(n+L0)/t)),o=s.x-r.x,a=s.z-r.z,c=t-n,l=W0(i,Math.min(1,e),1);if(o*o+a*a<1e-6)return l;let u=Math.atan2(o,a),d=dn(c/L0);return Kr(lh(l,u,d))}var Zr={sludge:{arrive:{route:"sludge-arrive",t0:.05,t1:13.6},work:[14,14.8,36.4,37.2],leave:{route:"sludge-leave",t0:37.4,t1:46}},chemical:{arrive:{route:"chem-arrive",t0:2.6,t1:13.8},work:[14.1,15,38.2,39],leave:{route:"chem-leave",t0:39.2,t1:49.8}}},r_=.85,k0=[15,36.2];function ah(i,e){let t=Zr[i];return e<t.arrive.t0||e>=t.leave.t1?"away":e<t.arrive.t1?"enroute":e>=t.leave.t0?"leaving":e>=t.work[1]&&e<t.work[2]?i==="chemical"?"unloading":"loading":"bay"}function V0(i){return{personnel:Bc.length,trucks:{chemical:ah("chemical",i),sludge:ah("sludge",i)}}}var G0=[{t:Zr.chemical.arrive.t1,id:"truck-chem",level:"info",text:{es:"Cami\xF3n de qu\xEDmicos en bah\xEDa",en:"Chemical truck at the bay"}},{t:Zr.chemical.work[1],id:"truck-chem-unload",level:"info",text:{es:`Entrega de coagulante \xB7 ${Nc} IBC`,en:`Coagulant delivery \xB7 ${Nc} IBC`}},{t:Zr.sludge.work[1],id:"truck-sludge",level:"info",text:{es:"Cami\xF3n de lodos en carga",en:"Sludge truck loading"}},{t:Zr.sludge.leave.t0,id:"truck-sludge-out",level:"info",text:{es:"Cami\xF3n de lodos sale con torta",en:"Sludge truck leaves with cake"}}];function H0(i,e=.22){let t=dn(i),n=1/(1-e);return t<e?n*t*t/(2*e):t>1-e?1-n*(1-t)*(1-t)/(2*e):n*(e/2+(t-e))}var Ge=i=>s_(i);function s_(i){return Le[i].pos}function o_(){let i=[gt.chemStop.x,gt.chemStop.z],e=[{act:"idle",until:Zr.chemical.work[1]+.1,face:i}];for(let t=0;t<Nc;t++)e.push({walk:{far:Ge("control")},speed:O0}),e.push({act:"operate",dur:.8,face:"keep"}),e.push({walk:{near:Ge("control")},carry:!0,speed:t_}),e.push({act:"idle",dur:.5,face:"keep"});return e.push({act:"idle",until:Hn,face:i}),{"w-screen":{route:"w-screen",start:{near:Ge("screen")},steps:[{act:"idle",until:1,face:Ge("screen")},{act:"rake",until:6.6,face:Ge("screen")},{walk:{far:Ge("screen")}},{act:"inspect",dur:3,face:"keep"},{walk:{near:Ge("screen")}},{act:"rake",until:21,face:Ge("screen")},{act:"idle",until:26,face:Ge("screen")},{walk:{far:Ge("screen")}},{act:"inspect",dur:4,face:"keep"},{walk:{near:Ge("screen")}},{act:"rake",until:44,face:Ge("screen")},{act:"idle",until:Hn,face:Ge("screen")}]},"w-operator":{route:"w-operator",start:{near:Ge("control")},steps:[{act:"idle",dur:.5,face:Ge("dosC")},{walk:{near:Ge("dosC")},arriveBy:6},{act:"operate",until:8.2,dur:1.8,face:Ge("dosC")},{walk:{near:Ge("dosF")}},{act:"operate",until:10.8,dur:2.2,face:Ge("dosF")},{walk:{near:Ge("coag")}},{act:"inspect",dur:4,face:Ge("coag")},{walk:{near:Ge("control")}},{act:"idle",until:30,face:Ge("dosC")},{walk:{near:Ge("dosF")}},{act:"inspect",dur:3,face:Ge("dosF")},{walk:{near:Ge("control")}},{act:"idle",until:Hn,face:Ge("dosC")}]},"w-unload":{route:"w-unload",start:{near:Ge("control")},steps:e},"w-bed-a":{route:"w-bed-a",start:{near:Ge("sludge")},steps:[{act:"shovel",until:12,face:Ge("sludge")},{repeat:[{walk:{far:Ge("sludge")}},{act:"shovel",dur:2.4,face:"keep"},{walk:{near:Ge("sludge")}},{act:"shovel",dur:3.6,face:Ge("sludge")}],until:37.5,max:4},{act:"shovel",until:Hn,face:Ge("sludge")}]},"w-bed-b":{route:"w-bed-b",start:{near:Ge("sludge")},steps:[{act:"rake",until:11,face:Ge("sludge")},{walk:{far:Ge("sludge")}},{act:"inspect",dur:3,face:"keep"},{walk:{near:Ge("sludge")}},{act:"rake",until:30,face:Ge("sludge")},{walk:{far:Ge("sludge")}},{act:"inspect",dur:2.5,face:"keep"},{walk:{near:Ge("sludge")}},{act:"rake",until:Hn,face:Ge("sludge")}]},"w-uasb":{route:"w-uasb",start:"a",steps:[{act:"idle",dur:1.5,face:Ge("uasb1")},{walk:{near:Ge("uasb2")},arriveBy:24},{act:"sample",until:30,face:Ge("uasb2")},{walk:{near:Ge("uasb3")}},{act:"inspect",dur:2,face:Ge("uasb3")},{walk:"a"},{act:"idle",until:Hn,face:Ge("uasb1")}]},"w-mbbr":{route:"w-mbbr",start:{near:Ge("mbbr")},steps:[{act:"inspect",until:12,face:Ge("mbbr")},{act:"idle",dur:1,face:Ge("mbbr")},{walk:{far:Ge("mbbr")},arriveBy:33},{act:"inspect",until:37,face:"keep"},{walk:{near:Ge("mbbr")}},{act:"inspect",until:Hn,face:Ge("mbbr")}]},"w-patrol":{route:"w-patrol",loop:!0,speed:.8,dwell:1.2}}}var ch=Math.PI*2,Kr=i=>{let e=(i+Math.PI)%ch;return e<0&&(e+=ch),e-Math.PI},lh=(i,e,t)=>i+Kr(e-i)*t;function a_(i,e,t,n=!1){let r=0,s=n?-1/0:1/0,o=400;for(let a=0;a<=o;a++){let c=a/o,l=i.pointAt(c),u=(l.x-e)**2+(l.z-t)**2;(n?u>s:u<s)&&(s=u,r=c)}return r}function D0(i,e){if(typeof e=="number")return dn(e);if(e==="a")return 0;if(e==="b")return 1;if("near"in e)return a_(i,e.near[0],e.near[1]);let t=i.pointAt(0),n=i.pointAt(1),r=(t.x-e.far[0])**2+(t.z-e.far[1])**2,s=(n.x-e.far[0])**2+(n.z-e.far[1])**2;return r>=s?0:1}function c_(i,e,t,n){if(!t||t==="keep")return n;let r=i.pointAt(e),s=t[0]-r.x,o=t[1]-r.z;return s*s+o*o<1e-4?n:Math.atan2(s,o)}function W0(i,e,t){let n=i.length>0?t/i.length:0,r=i.pointAt(dn(e-n)),s=i.pointAt(dn(e+n)),o=s.x-r.x,a=s.z-r.z;return o*o+a*a<1e-8?i.headingAt(dn(e)):Math.atan2(o,a)}function Fo(i,e,t){let n=W0(i,e,.55);return t?n:Kr(n+Math.PI)}function l_(i,e,t){let n=[],r=0,s=D0(t,e.start),o=t.headingAt(s),a=0,c=0,l=!0,u=d=>{if("repeat"in d){for(let h=0;h<(d.max??99);h++){let f={n:n.length,t:r,u:s,h:o,gait:a,dist:c,first:l};for(let p of d.repeat)u(p);if(r>d.until){n.length=f.n,{t:r,u:s,h:o,gait:a,dist:c,first:l}=f;break}}return}if("walk"in d){let h=D0(t,d.walk),f=Math.abs(h-s)*t.length;if(f<.001)return;let p=f/(d.speed??O0);if(d.arriveBy!=null&&r+p<d.arriveBy){let g=n[n.length-1],m=d.arriveBy-p;g&&g.kind==="act"&&(g.t1=m),r=m}let v=Math.max(1,Math.round(f/F0));n.push({kind:"walk",t0:r,t1:r+p,u0:s,u1:h,dist:f,carry:!!d.carry,g0:a,cycles:v,d0:c,h0:o}),r+=p,a+=v,c+=f,o=Fo(t,h,h>s),s=h}else{let h=Math.max(r+(d.dur??0),d.until??0);if(h<=r)return;let f=c_(t,s,d.face,o);n.push({kind:"act",t0:r,t1:h,u:s,action:d.act,h0:l?f:o,h1:f,g:a,d:c}),r=h,o=f}l=!1};for(let d of e.steps)u(d);return{id:i,route:e.route,segs:n,end:r}}function u_(i,e,t){let n=t.pointAt(0),r=t.pointAt(1),s=n.distanceTo(r)<.3,o=t.length,a=s?1:2,c=a*(o/e.speed+e.dwell),l=Math.max(1,Math.round(Hn/c)),u=Hn/l/a,d=Math.max(.5,u-e.dwell),h=Math.max(1,Math.round(o/F0));return{id:i,route:e.route,segs:[],end:Hn,patrol:{laps:l,walkT:d,dwell:u-d,closed:s,cyclesPerLeg:h,legLen:o}}}var U0=new WeakMap;function d_(i){let e=U0.get(i);if(e)return e;let t=o_(),n=[];for(let r of Bc){let s=t[r],o=i[s.route];!o||!(o.length>0)||n.push(s.loop?u_(r,s,o):l_(r,s,o))}return e={workers:n,routes:i},U0.set(i,e),e}var X0={idle:50/10,walk:1,carry:1,inspect:50/12,shovel:50/32,rake:50/28,operate:50/20,sample:50/16},zc=i=>i-Math.floor(i),Fc=i=>[i.x,i.y,i.z];function h_(i,e,t){if(i.patrol)return f_(i,e,t);let n=i.segs,r=n[n.length-1];for(let a of n)if(t<a.t1){r=a;break}if(r.kind==="walk"){let a=r.t1>r.t0?dn((t-r.t0)/(r.t1-r.t0)):1,c=r.u0+(r.u1-r.u0)*a,l=r.u1>r.u0,u=Fo(e,c,l),d=Kr(r.h0-Fo(e,r.u0,l)),h=Kr(u+d*(1-Yt(t,r.t0,r.t0+.45))),f=r.g0+r.cycles*a;return{id:i.id,visible:!0,pos:Fc(e.pointAt(c)),heading:h,action:r.carry?"carry":"walk",phase:zc(f),gait:f,dist:r.d0+r.dist*a,moving:a>0&&a<1,carrying:r.carry}}let s=Kr(lh(r.h0,r.h1,Yt(t,r.t0,r.t0+.6))),o=zc(t/X0[r.action]);return{id:i.id,visible:!0,pos:Fc(e.pointAt(r.u)),heading:s,action:r.action,phase:o,gait:r.g,dist:r.d,moving:!1,carrying:!1}}function f_(i,e,t){let n=i.patrol,r=n.walkT+n.dwell,s=t+n.walkT*.5,o=Math.floor(s/Hn),a=s-o*Hn,c=Math.round(Hn/r),l=Math.min(Math.floor(a/r),Math.round(Hn/r)-1),u=a-l*r,d=n.closed||l%2===0,h=dn(u/n.walkT),f=d?h:1-h,p=(o*c+l)*n.cyclesPerLeg+n.cyclesPerLeg*h,v=u<n.walkT,g=Fo(e,f,d),m=n.closed||(l+1)%2===0,b=Fo(e,m?0:1,m),y=v?g:Kr(lh(g,b,Yt(u,n.walkT+.1,r-.1)));return{id:i.id,visible:!0,pos:Fc(e.pointAt(f)),heading:y,action:v?"walk":"inspect",phase:zc(v?p:t/X0.inspect),gait:p,dist:(o*c+l+h)*n.legLen,moving:v&&h>0&&h<1,carrying:!1}}function B0(i,e,t,n){let r=Zr[i],s=e[r.arrive.route],o=e[r.leave.route],a=ah(i,t),c=i==="sludge"?0:Yt(t,r.work[0],r.work[1])*(1-Yt(t,r.work[2],r.work[3])),l=i==="chemical"?n/e_:r_*Yt(t,k0[0],k0[1]),u={kind:i,work:c,load:l,phase:a};if(!s||!o)return{...u,visible:!1,pos:[0,-50,0],heading:0,wheelTurns:0,beacon:!1,route:null,dist:0};let d,h,f,p;t<r.leave.t0?(h=H0((t-r.arrive.t0)/(r.arrive.t1-r.arrive.t0),.18),d=s,p=r.arrive.route,f=h*s.length):(h=H0((t-r.leave.t0)/(r.leave.t1-r.leave.t0),.18),d=o,p=r.leave.route,f=s.length+h*o.length);let v=a==="enroute"||a==="leaving";return{...u,visible:a!=="away",pos:Fc(d.pointAt(h)),heading:i_(d,h),wheelTurns:f/(ch*n_),beacon:v,route:a==="away"?null:p,dist:f}}var q0=null;function Y0(i){q0=i}function $0(i,e){let t=dn(i,0,Hn),n=e??q0??{},r=d_(n),s=[],o=null,a=0,c=0;for(let u of r.workers){let d=h_(u,n[u.route],t);if(s.push(d),u.id==="w-unload")for(let h of u.segs)h.kind==="walk"&&h.carry&&(t>=h.t0&&a++,t>=h.t1&&c++,t>=h.t0&&t<h.t1&&(o=u.id))}let l=Nc-a;return{t,workers:s,trucks:{chemical:B0("chemical",n,t,l),sludge:B0("sludge",n,t,l)},carriedTote:o,stockedTotes:c,totesOnTruck:l}}var N0=new x,z0=new WeakMap;function p_(i){let e=z0.get(i);if(e)return e;e=new Map;let t=new Set;Bc.forEach(r=>{let s=i.workers.findIndex(o=>o.id===r||`w-${o.id}`===r||o.id===r.slice(2));s>=0&&(e.set(r,s),t.add(s))});let n=0;return Bc.forEach(r=>{if(!e.has(r)){for(;t.has(n);)n++;n<i.workers.length&&(e.set(r,n),t.add(n))}}),z0.set(i,e),e}function Z0(i,e){let t=p_(i),n=new Set;for(let s of e.workers){let o=t.get(s.id);if(o==null)continue;let a=i.workers[o];n.add(o),a.setVisible(s.visible),a.setPose(N0.set(s.pos[0],s.pos[1],s.pos[2]),s.heading),a.setAction(s.action,s.phase,s.gait)}i.workers.forEach((s,o)=>{n.has(o)||s.setVisible(!1)});for(let s of["chemical","sludge"]){let o=i.trucks[s],a=e.trucks[s];o&&(o.setVisible(a.visible),o.setPose(N0.set(a.pos[0],a.pos[1],a.pos[2]),a.heading,a.wheelTurns),o.setLoad(a.load),o.setWork(a.work),o.setBeacon(a.beacon,e.t))}let r=e.carriedTote?t.get(e.carriedTote):void 0;i.setCarriedTote(r!=null?i.workers[r].id:null),i.setStockedTotes(e.stockedTotes),i.update(e.t)}function uh(i){return Math.max(0,Math.min(1,(.8-i)/.4))}var J0=16,j0=48,Q0=i=>1-.5*Yt(i,J0,j0),dh={t0:J0,t1:j0,fixturesOn:(()=>{for(let i=0;i<=5e3;i++){let e=i/100;if(uh(Q0(e))>.02)return Math.round(e*10)/10}return 50})()},K0={day:1,dusk:.5,night:0};function em(i,e){if(e!=="story"){let r=uh(K0[e]);return{mode:e,preset:e,daylight:K0[e],fixtures:r>.02,fixturesLevel:r}}let t=Q0(i),n=uh(t);return{mode:e,preset:t>.75?"day":"dusk",daylight:t,fixtures:i>=dh.fixturesOn,fixturesLevel:n}}function tm(i){return i==="day"||i==="dusk"||i==="night"||i==="story"?i:null}function nm(i){return i==="day"?"dusk":i==="dusk"?"night":"day"}var Oc=16/9,Ji={x0:364,x1:1556,y0:92,y1:840},im=1920,rm=1080,m_=(()=>{let i=Ji.x0/im*2-1,e=Ji.x1/im*2-1,t=1-Ji.y1/rm*2,n=1-Ji.y0/rm*2;return{bx:(i+e)/2,by:(t+n)/2,hx:(e-i)/2,hy:(n-t)/2}})(),sm=i=>{let e=Math.hypot(i[0],i[1],i[2]);return[i[0]/e,i[1]/e,i[2]/e]},om=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Ki=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Jr={aspect:Oc,safe:m_};function am(i,e){Jr={aspect:i,safe:e},hh=new WeakMap,fh=new WeakMap}var ri=(()=>{let i=sm(mi),e=[-i[0],-i[1],-i[2]],t=sm(om(e,[0,1,0])),n=om(t,e);return{dir:i,fwd:e,right:t,up:n}})(),g_=pi.map(i=>i.id),Oo=["uasb1","uasb2","uasb3","uasb4"],cm=[{t:0,units:[],fov:30,minDist:22,extra:["landfill"]},{t:.6,units:[],fov:30,minDist:22,extra:["landfill"]},{t:3.2,units:["screen"],fov:29,minDist:18,extra:["pond"]},{t:4.6,units:["screen","homog","dosC","coag"],fov:28,minDist:17},{t:7.4,units:["homog","dosC","dosF","coag","floc","clar1","control"],fov:28,minDist:17},{t:10,units:["floc","clar1","thick","sludge"],fov:27,minDist:17},{t:12.8,units:["clar1","thick","sludge","control"],fov:27,minDist:17,extra:["sludgeBay","chemBay"]},{t:14.4,units:["clar1","thick","sludge","control"],fov:27,minDist:17,extra:["sludgeBay","chemBay"]},{t:16.4,units:["clar1","inter","pump","pumpB"],fov:27,minDist:17},{t:18.4,units:["inter","pump","pumpB",...Oo],fov:28,minDist:18},{t:21,units:["pump",...Oo],fov:27,minDist:18},{t:23.8,units:[...Oo],fov:26,minDist:17},{t:26.6,units:[...Oo,"flare"],fov:27,minDist:17},{t:29.4,units:[...Oo,"clar2"],fov:26,minDist:17},{t:31.8,units:["uasb4","clar2","mbbr"],fov:27,minDist:17},{t:33.8,units:["clar2","mbbr"],fov:26,minDist:16},{t:36,units:["mbbr","filtro"],fov:27,minDist:17},{t:38.8,units:["mbbr","filtro","discharge"],fov:28,minDist:17},{t:41.6,units:["filtro","discharge"],fov:27,minDist:17},{t:44.4,units:["discharge"],fov:28,minDist:18,extra:["wetland"]},{t:45.2,units:["discharge"],fov:28,minDist:18,extra:["wetland"]},{t:48.6,units:"ALL",fov:31,minDist:20,wide:1.04,extra:["gate","wetland"]},{t:50,units:"ALL",fov:31,minDist:20,wide:1.04,extra:["gate","wetland"]}];function x_(i,e){if(i==="landfill"){let c=gc,l=2*c.tierH;return[[c.minX+6,0,c.maxZ+1.5],[c.maxX,0,c.maxZ+1.5],[c.minX+6,l+2,c.minZ+8],[c.maxX-4,l+2,c.minZ+8],[sn.maxX+1,0,sn.maxZ+1],[sn.maxX+1,.5,sn.minZ-1],[pn[0],.5,pn[1]]]}if(i==="wetland"){let c=xc;return[[c.cx-c.rx-1.5,0,c.cz],[c.cx+c.rx+1.5,0,c.cz],[c.cx,0,c.cz+c.rz+2.5],[c.cx,0,c.cz-c.rz],[c.cx-c.rx,3.2,c.cz-1],[c.cx+c.rx,3.2,c.cz-1]]}if(i==="pond")return[[sn.minX-3,0,sn.minZ-1],[sn.minX-3,0,sn.maxZ+3],[sn.maxX,1.5,sn.minZ-1],[pn[0],.5,pn[1]]];if(i==="gate")return[[gt.gate[0],.5,gt.gate[1]],[gt.gate[0],3.5,gt.gate[1]]];let t=e?.actors?.routes?.[i==="chemBay"?"chem-arrive":"sludge-arrive"],n,r=Math.PI/2;if(t){let c=t.pointAt(1);n=[c.x,c.y,c.z],r=t.headingAt(1)}else n=i==="chemBay"?[-18.5,0,1.6]:[-23.5,0,3.7];let s=Math.sin(r),o=Math.cos(r),a=[];for(let c of[-2,5.5])for(let l of[-1.3,1.3]){let u=n[0]+s*c+o*l,d=n[2]+o*c-s*l;a.push([u,0,d],[u,3.2,d])}return a}function lm(i,e){let t,n,r,s=e?.units?.[i];if(s&&s.footprint){t=[...s.footprint.min],n=[...s.footprint.max];let a=s.anchors?.label;r=a?[a.x,a.y,a.z]:[(t[0]+n[0])/2,n[1]+.8,(t[2]+n[2])/2]}else{let a=Le[i],c=(a.size.d??a.size.w??1)/2,l=(a.size.d??a.size.l??1)/2;t=[a.pos[0]-c,0,a.pos[1]-l],n=[a.pos[0]+c,a.base+a.size.h,a.pos[1]+l],r=[a.pos[0],a.base+a.size.h+.8,a.pos[1]]}let o=[];for(let a of[t[0],n[0]])for(let c of[t[1],n[1]])for(let l of[t[2],n[2]])o.push([a,c,l]);return o.push(r,[r[0],r[1]+1.4,r[2]]),o}function um(i,e,t,n=1,r=.84){let{right:s,up:o,fwd:a}=ri,c=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0];for(let H of i)for(let N=0;N<3;N++)c[N]=Math.min(c[N],H[N]),l[N]=Math.max(l[N],H[N]);let u=[(c[0]+l[0])/2,(c[1]+l[1])/2,(c[2]+l[2])/2],d=1/0,h=-1/0,f=1/0,p=-1/0;for(let H of i){let N=[H[0]-u[0],H[1]-u[1],H[2]-u[2]],U=Ki(N,s),z=Ki(N,o);d=Math.min(d,U),h=Math.max(h,U),f=Math.min(f,z),p=Math.max(p,z)}let v=(d+h)/2,g=(f+p)/2,m=[u[0]+s[0]*v+o[0]*g,u[1]+s[1]*v+o[1]*g,u[2]+s[2]*v+o[2]*g],b=Math.tan(e*Math.PI/360),y=b*Jr.aspect*Jr.safe.hx*r,_=b*Jr.safe.hy*r,R=t;for(let H of i){let N=[H[0]-m[0],H[1]-m[1],H[2]-m[2]],U=Math.abs(Ki(N,s)),z=Math.abs(Ki(N,o)),I=Ki(N,a);R=Math.max(R,U/y-I,z/_-I)}R*=n;let S=R*b*Jr.aspect,P=R*b,L=Jr.safe.bx*S,w=Jr.safe.by*P;return{target:[m[0]-s[0]*L-o[0]*w,m[1]-s[1]*L-o[1]*w,m[2]-s[2]*L-o[2]*w],distance:R,fov:e}}function dm(i,e){let t=i.units==="ALL"?g_:i.units,n=[];for(let r of t)n.push(...lm(r,e));i.units==="ALL"&&n.push([pn[0],.5,pn[1]]);for(let r of i.extra??[])n.push(...x_(r,e));return n}var hh=new WeakMap,hm={};function v_(i){let e=i??hm,t=hh.get(e);return t||(t=cm.map(n=>um(dm(n,i),n.fov,n.minDist,n.wide??1)),hh.set(e,t)),t}var fh=new WeakMap;function fm(i){let e=i??hm,t=fh.get(e);return t||(t=um(dm({t:0,units:"ALL",fov:31,minDist:20,extra:["landfill","wetland"]},i),31,20,1),fh.set(e,t)),ph(t)}function pm(i,e){let t=v_(e),n=cm;if(i<=n[0].t)return ph(t[0]);for(let r=0;r<n.length-1;r++)if(i<n[r+1].t){let s=I0(i,n[r].t,n[r+1].t),o=t[r],a=t[r+1];return{target:[ii(o.target[0],a.target[0],s),ii(o.target[1],a.target[1],s),ii(o.target[2],a.target[2],s)],distance:ii(o.distance,a.distance,s),fov:ii(o.fov,a.fov,s)}}return ph(t[t.length-1])}function ph(i){return{target:[i.target[0],i.target[1],i.target[2]],distance:i.distance,fov:i.fov}}function mm(i,e,t=26){let n=lm(i,e).slice(0,8),{right:r,up:s,fwd:o}=ri,a=n.reduce((u,d)=>[u[0]+d[0]/n.length,u[1]+d[1]/n.length,u[2]+d[2]/n.length],[0,0,0]),c=Math.tan(t*Math.PI/360),l=4;for(let u of n){let d=[u[0]-a[0],u[1]-a[1],u[2]-a[2]];l=Math.max(l,Math.abs(Ki(d,r))/(c*Oc*.7)-Ki(d,o),Math.abs(Ki(d,s))/(c*.7)-Ki(d,o))}return{target:a,distance:l,fov:t}}var Ai=50,Vo=["uasb1","uasb2","uasb3","uasb4"],Ln=[{kind:"pipe",ids:["p-inlet"],t0:2.6,t1:3.9},{kind:"unit",ids:["screen"],t0:3.9,t1:4.7},{kind:"pipe",ids:["p-screen-homog"],t0:4.7,t1:5.2},{kind:"unit",ids:["homog"],t0:5.2,t1:6.3},{kind:"pipe",ids:["p-homog-coag"],t0:6.3,t1:6.9},{kind:"unit",ids:["coag"],t0:6.9,t1:7.9},{kind:"pipe",ids:["p-coag-floc"],t0:7.9,t1:8.4},{kind:"unit",ids:["floc"],t0:8.4,t1:9.5},{kind:"pipe",ids:["p-floc-clar1"],t0:9.5,t1:10},{kind:"unit",ids:["clar1"],t0:10,t1:13.8},{kind:"pipe",ids:["p-clar1-inter"],t0:13.8,t1:16},{kind:"unit",ids:["inter"],t0:16,t1:17.3},{kind:"pipe",ids:["p-inter-pump"],t0:17.3,t1:18},{kind:"unit",ids:["pump"],t0:18,t1:18.8},{kind:"pipe",ids:Vo.map(i=>`p-feed-${i}`),t0:18.8,t1:23},{kind:"unit",ids:[...Vo],t0:23,t1:29.6},{kind:"pipe",ids:Vo.map(i=>`p-${i}-clar2`),t0:29.6,t1:31},{kind:"unit",ids:["clar2"],t0:31,t1:33.8},{kind:"pipe",ids:["p-clar2-mbbr"],t0:33.8,t1:34.6},{kind:"unit",ids:["mbbr"],t0:34.6,t1:37.6},{kind:"pipe",ids:["p-mbbr-filtro"],t0:37.6,t1:38.6},{kind:"unit",ids:["filtro"],t0:38.6,t1:41.8},{kind:"pipe",ids:["p-filtro-discharge"],t0:41.8,t1:42.4},{kind:"unit",ids:["discharge"],t0:42.4,t1:43.2},{kind:"pipe",ids:["p-outfall"],t0:43.2,t1:44}],b_=[{pipeId:"p-dosC-coag",t0:6.5,t1:7},{pipeId:"p-dosF-floc",t0:8,t1:8.5},{pipeId:"p-clar1-thick",t0:11.2,t1:12.6},{pipeId:"p-thick-bed",t0:13,t1:14.2},{pipeId:"p-bed-return",t0:20,t1:22.6},...Vo.map(i=>({pipeId:`p-gas-${i}`,t0:23.8,t1:25})),...Vo.map(i=>({pipeId:`p-purge-${i}`,t0:27.5,t1:29.4})),{pipeId:"p-clar2-thick",t0:32.4,t1:33.6}];var y_={dosC:6.5,dosF:8,thick:12.6,sludge:14.2,flare:25,control:2},E_=["pumpB"],gi=[{id:"homog",t0:3.9,t1:6.8},{id:"coag",t0:6.8,t1:8.4},{id:"floc",t0:8.4,t1:10},{id:"clar1",t0:10,t1:16},{id:"uasb",t0:16,t1:31},{id:"clar2",t0:31,t1:34.6},{id:"mbbr",t0:34.6,t1:38},{id:"filtro",t0:38,t1:42.4},{id:"discharge",t0:42.4,t1:44}],__=[{id:"idle",t0:0,t1:5},{id:"A",t0:5,t1:10},{id:"B",t0:10,t1:16},{id:"C",t0:16,t1:23},{id:"D",t0:23,t1:31},{id:"E",t0:31,t1:44},{id:"F",t0:44,t1:50}],qs=[{t:5.8,unit:"homog"},{t:11,unit:"clar1"},{t:24.6,unit:"uasb2"},{t:27.6,unit:"flare"},{t:35.4,unit:"mbbr"},{t:39.8,unit:"filtro"}],M_=4,w_=45.5,T_=1.4,S_=2,R_=48.6,A_=[{t:.3,id:"rain",level:"info",text:{es:"Lluvia sobre el vertedero \xB7 percolaci\xF3n",en:"Rain on the landfill \xB7 percolation"}},{t:1.6,id:"pond",level:"info",text:{es:"Laguna de lixiviados \u2192 bombeo a RJ-100",en:"Leachate pond \u2192 pumped to RJ-100"}},{t:44.2,id:"wetland",level:"info",text:{es:"Agua recuperada llega al humedal",en:"Recovered water reaches the wetland"}},{t:2.6,id:"inflow",level:"info",text:{es:"Ingreso de lixiviado \xB7 rejilla RJ-100",en:"Leachate inflow \xB7 screen RJ-100"}},{t:3,id:"pumpB",level:"info",text:{es:"P-01B en reserva",en:"P-01B on standby"}},{t:5.2,id:"homog",level:"info",text:{es:"Homogenizaci\xF3n en l\xEDnea",en:"Homogenization online"}},{t:6.5,id:"dosC",level:"info",text:{es:"Dosificaci\xF3n de coagulante activa",en:"Coagulant dosing active"}},{t:6.9,id:"coag",level:"info",text:{es:"Mezcla r\xE1pida TK-102 activa",en:"Rapid mix TK-102 active"}},{t:8,id:"dosF",level:"info",text:{es:"Pol\xEDmero DQ-102 en dosificaci\xF3n",en:"Polymer DQ-102 dosing"}},{t:8.4,id:"floc",level:"info",text:{es:"Floculaci\xF3n TK-103 en l\xEDnea",en:"Flocculation TK-103 online"}},{t:10,id:"clar1",level:"info",text:{es:"CL-101 en sedimentaci\xF3n primaria",en:"CL-101 primary settling"}},{t:11.2,id:"sludge",level:"notice",text:{es:"Purga de lodo CL-101 \u2192 espesador ES-101",en:"CL-101 sludge purge \u2192 thickener ES-101"}},{t:14.2,id:"bed",level:"info",text:{es:"Lodo espesado al lecho de secado LS-101",en:"Thickened sludge to drying bed LS-101"}},{t:20,id:"return",level:"info",text:{es:"Retorno de drenado LS-101 \u2192 TK-101",en:"LS-101 drainage return \u2192 TK-101"}},{t:16,id:"inter",level:"info",text:{es:"Tanque intermedio TK-104 en carga",en:"Intermediate tank TK-104 filling"}},{t:18,id:"pump",level:"notice",text:{es:"Bomba P-01 activa",en:"Pump P-01 active"}},{t:19.8,id:"split",level:"notice",text:{es:"Caudal repartido al tren UASB",en:"Flow distributed to UASB train"}},{t:23,id:"uasb",level:"info",text:{es:"UASB en l\xEDnea 4/4",en:"UASB online 4/4"}},{t:25.2,id:"flare",level:"notice",text:{es:"Antorcha QB-201 encendida \xB7 biog\xE1s de 4 UASB",en:"Flare QB-201 lit \xB7 biogas from 4 UASB"}},{t:27.5,id:"purge",level:"info",text:{es:"Purga de lodos UASB \u2192 espesador",en:"UASB sludge purge \u2192 thickener"}},{t:32.4,id:"purge2",level:"info",text:{es:"Purga de lodo CL-201 \u2192 espesador",en:"CL-201 sludge purge \u2192 thickener"}},{t:31,id:"clar2",level:"info",text:{es:"Clarificador CL-201 en l\xEDnea",en:"Clarifier CL-201 online"}},{t:34.2,id:"blower",level:"info",text:{es:"Soplante B-301 en marcha \xB7 aireaci\xF3n MBBR",en:"Blower B-301 running \xB7 MBBR aeration"}},{t:34.6,id:"mbbr",level:"notice",text:{es:"Etapa de pulimento en l\xEDnea",en:"Polishing stage online"}},{t:38.6,id:"filtro",level:"info",text:{es:"Filtro fitopedol\xF3gico en l\xEDnea",en:"Phytopedological filter online"}},{t:42.4,id:"discharge",level:"notice",text:{es:"Descarga de efluente tratado activa",en:"Treated effluent discharge active"}},{t:44,id:"all",level:"info",text:{es:"Todas las etapas en l\xEDnea",en:"All stages online"}},...G0],gm=[...A_].sort((i,e)=>i.t-e.t),C_={t:dh.fixturesOn,id:"lights",level:"info",text:{es:"Alumbrado de planta encendido",en:"Plant lighting switched on"}},I_=[{t0:0,t1:1.5,text:{es:"Lluvia sobre el vertedero \xB7 el agua percola la basura y se vuelve lixiviado (supuesto)",en:"Rain on the landfill \xB7 water percolates through the waste and becomes leachate (assumed)"}},{t0:1.5,t1:2.6,text:{es:"Canal perimetral \u2192 laguna de lixiviados \u2192 bombeo a la planta",en:"Perimeter ditch \u2192 leachate pond \u2192 pumped to the plant"}},{t0:2.6,t1:5,text:{es:"Ingreso de lixiviado \xB7 cribado RJ-100 \xB7 1,0 L/s (B)",en:"Leachate inflow \xB7 screening RJ-100 \xB7 1.0 L/s (brief)"}},{t0:5,t1:10,text:{es:"Acondicionamiento: homogenizaci\xF3n, coagulaci\xF3n y floculaci\xF3n (FeCl\u2083 300 mg/L, supuesto)",en:"Conditioning: equalization, coagulation and flocculation (FeCl\u2083 300 mg/L, assumed)"}},{t0:10,t1:16,text:{es:"Clarificaci\xF3n primaria \xB7 lodo \u2192 espesador \u2192 lecho de secado cubierto",en:"Primary clarification \xB7 sludge \u2192 thickener \u2192 covered drying bed"}},{t0:16,t1:23,text:{es:"Bombeo P-01 y reparto equitativo a 4 UASB en paralelo (hip\xF3tesis)",en:"Pump P-01 and equal split to 4 parallel UASB (hypothesis)"}},{t0:23,t1:31,text:{es:"Tratamiento anaerobio UASB \xB7 0,25 L/s por reactor \xB7 biog\xE1s a antorcha",en:"Anaerobic UASB treatment \xB7 0.25 L/s per reactor \xB7 biogas to flare"}},{t0:31,t1:38,text:{es:"Clarificaci\xF3n secundaria y pulimento aerobio MBBR",en:"Secondary clarification and aerobic MBBR polishing"}},{t0:38,t1:44,text:{es:"Filtro fitopedol\xF3gico y descarga de efluente tratado",en:"Phytopedological filter and treated effluent discharge"}},{t0:44,t1:47.6,text:{es:"Agua recuperada devuelta al humedal \xB7 el ciclo se cierra",en:"Recovered water returned to the wetland \xB7 the cycle closes"}},{t0:47.6,t1:50.001,text:{es:"Del lixiviado al agua recuperada \xB7 todas las etapas en l\xEDnea",en:"From leachate to recovered water \xB7 all stages online"}}],mh=(()=>{let i={};for(let e of pi)i[e.id]=1/0;for(let e of Ln)if(e.kind==="unit")for(let t of e.ids)i[t]=Math.min(i[t],e.t0);for(let[e,t]of Object.entries(y_))i[e]=Math.min(i[e],t);return i})(),P_=(()=>{let i={};for(let e of Ln)if(e.kind==="pipe")for(let t of e.ids)i[t]={t0:e.t0,t1:e.t1};for(let e of b_)i[e.pipeId]={t0:e.t0,t1:e.t1};return i})();function Vc(i){for(let e=0;e<Ln.length;e++){let t=Ln[e];if(i>=t.t0&&i<t.t1)return{seg:t,index:e,k:(i-t.t0)/(t.t1-t.t0)}}return null}function xm(i){if(i>=Ln[Ln.length-1].t1&&i<R_)return["discharge"];if(i<Ln[0].t0)return[];if(i>=Ln[Ln.length-1].t1)return pi.map(n=>n.id);let e=Vc(i);if(!e)return[];if(e.seg.kind==="unit")return e.seg.ids;let t=[];for(let n of e.seg.ids){let r=Mi.find(s=>s.id===n);r.to!=="world"&&!t.includes(r.to)&&t.push(r.to)}if(!t.length){let n=Mi.find(r=>r.id===e.seg.ids[0]);n.from!=="world"&&t.push(n.from)}return t}function L_(i){let e=Vc(i);if(!e)return{visible:!1,pipeId:null,unitId:null,u:i<Ln[0].t0?0:1,split:!1};let t=e.seg.ids.length>1;return e.seg.kind==="pipe"?{visible:!0,pipeId:e.seg.ids[0],unitId:null,u:dn(e.k),split:t}:{visible:!0,pipeId:null,unitId:e.seg.ids[0],u:dn(e.k),split:t}}function k_(i){let e=null;for(let t of qs)i>=t.t&&(e=t.unit);return e}function H_(i){let e=i>=M_&&i<w_,t=null,n=null,r=1,s=0;for(let o=0;o<qs.length;o++){let a=qs[o],c=a.t-T_;i>=c&&(t=o>0?qs[o-1].unit:null,n=a.unit,r=Yt(i,c,a.t-.15)),i>=a.t-.08&&i<a.t+.55&&(s=i<a.t?Er(i,a.t-.08,a.t):1-Yt(i,a.t,a.t+.55))}return n===null&&(r=0),{visible:e,unitId:n,travel:r,fromUnitId:t,press:s}}function D_(i){for(let e of __)if(i>=e.t0&&i<e.t1)return e.id;return"F"}function vm(i){return .35*Yt(i,23,31)+.65*Yt(i,31,42.4)}function bm(i,e){let t=gi[i];return Er(e,t.t0,t.t1)}function gh(i,e){let t=dn(i,0,Ai),n=t>=S_,r={};for(let p of pi){let v=mh[p.id],g=t>=v,m=E_.includes(p.id);r[p.id]={active:g,flow:g?Yt(t,v-.2,v+1.5):0,motion:g?Yt(t,v,v+2.5):0,status:g?"active":n||m?"standby":"idle"}}let s=k_(t),o={};for(let p of Mi){let v=P_[p.id],g=v?Er(t,v.t0,v.t1):0,m=v?Yt(t,v.t0,v.t1+1.5):0,b=s!==null&&(p.from===s||p.to===s);o[p.id]={flow:m,front:g,highlight:b}}let a=-1,c={};gi.forEach((p,v)=>{t>=p.t0&&t<p.t1&&(a=v),c[p.id]=t>=p.t1});let l=em(t,e?.light??"day"),d=(e?.light==="story"?[...gm,C_].sort((p,v)=>p.t-v.t):gm).filter(p=>t>=p.t).map(p=>({id:p.id,t:p.t,level:p.level,text:{...p.text}})),h=I_.find(p=>t>=p.t0&&t<p.t1),f=n?"Active":"Stable";return{t,duration:Ai,phase:D_(t),trackerIndex:a,trackerDone:c,units:r,pipes:o,parcel:L_(t),selected:s,alerts:d,camera:pm(t,e?.plant),cursor:H_(t),plantState:f,caption:h?{...h.text}:null,logistics:V0(t),lighting:l}}var UT=_c.map(i=>i.id);var Wc=4,Gc=4,U_=.07,ym=new x;function B_(i,e,t){let n=[],r=0;for(let o=1;o<i.length;o++){let a=i[o].distanceTo(i[o-1]);n.push(a),r+=a}if(r<1e-6)return t.copy(i[0]);let s=dn(e)*r;for(let o=0;o<n.length;o++){if(s<=n[o]||o===n.length-1)return t.copy(i[o]).lerp(i[o+1],n[o]>0?Math.min(1,s/n[o]):1);s-=n[o]}return t.copy(i[i.length-1])}function xh(i,e,t,n){let r=i.pipes[e];return r?n.copy(r.pointAt(dn(t))):n.set(0,-100,0)}function Xc(i,e,t,n=new x){let r=Vc(e);if(!r)return null;let{seg:s,index:o,k:a}=r,c=s.ids.length;if(t>=c)return null;if(s.kind==="pipe")return xh(i,s.ids[t],a,n);let l=i.units[s.ids[t]],u=Ln[o-1],d=Ln[o+1],h=new x,f=new x;u?xh(i,u.ids[Math.min(t,u.ids.length-1)],1,h):h.copy(l.anchors.core),d?xh(i,d.ids[Math.min(t,d.ids.length-1)],0,f):f.copy(l.anchors.core);let p=l.anchors.core??l.anchors.focus;return B_([h,p,f],P0(a),n)}var Em=new Ce(14263361),N_=new Ce(6271912);function z_(i,e=new Ce){return e.copy(Em).lerp(N_,vm(i))}var qc=class{constructor(){this.root=new _e;this.slots=[];this.trailMats=[];this.root.name="hero-parcel";let e=l=>new Pn({color:Em,transparent:!0,opacity:l,depthTest:!1,depthWrite:!1});this.coreMat=e(.96),this.haloMat=e(.42),this.discMat=e(.11);for(let l=0;l<Gc;l++)this.trailMats.push(e(.5*(1-(l+1)/(Gc+1))));let t=new rt(.2,20,14),n=new Ao(.32,.37,40),r=new wn(.5,40),s=new rt(.1,10,8),o=new Ao(.2,.25,40),a=new Pn({color:726040,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1});this.rimMat=a;let c=new bt().setFromUnitVectors(new x(0,0,1),new x(...ri.dir));for(let l=0;l<Wc;l++){let u=new _e,d=new re(t,this.coreMat),h=new re(n,this.haloMat);h.quaternion.copy(c);let f=new re(r,this.discMat);f.quaternion.copy(c);let p=new re(o,a);p.quaternion.copy(c),d.renderOrder=1002,h.renderOrder=1001,f.renderOrder=1e3,p.renderOrder=1001,u.add(f,p,h,d);let v=[];for(let g=0;g<Gc;g++){let m=new re(s,this.trailMats[g]);m.renderOrder=999,v.push(m),this.root.add(m)}this.root.add(u),this.slots.push({group:u,core:d,halo:h,disc:f,trail:v})}}update(e,t,n){let r=z_(t);for(let u of[this.coreMat,this.haloMat,this.discMat,...this.trailMats])u.color.copy(r);let s=dn(n/45,.55,1.7),o=1+.08*Math.sin(t*4.2),a=Ln[0].t0,c=Ln[Ln.length-1].t1,l=Yt(t,a,a+.35)*(1-Yt(t,c-.35,c));this.coreMat.opacity=.96*l,this.haloMat.opacity=.42*l,this.discMat.opacity=.11*l,this.rimMat.opacity=.55*l;for(let u=0;u<Wc;u++){let d=this.slots[u],h=Xc(e,t,u,ym);d.group.visible=!!h,h&&(d.group.position.copy(h),d.group.scale.setScalar(s),d.halo.scale.setScalar(o));for(let f=0;f<Gc;f++){let p=t-(f+1)*U_,v=Xc(e,p,u,ym),g=d.trail[f];g.visible=!!v&&!!h&&l>.05,v&&(g.position.copy(v),g.scale.setScalar(s*(1-f*.16)))}}}};var F_=24,O_=32;function _m(){let i=new yn(30,Oc,.5,600),e=new x(...ri.dir);i.up.set(0,1,0),i.position.copy(e),i.lookAt(0,0,0);let t=i.quaternion.clone(),n={camera:i,shot:{target:[0,0,0],distance:40,fov:30},apply(r){n.shot={target:[...r.target],distance:r.distance,fov:r.fov};let s=Math.min(O_,Math.max(F_,r.fov));i.position.set(r.target[0]+e.x*r.distance,r.target[1]+e.y*r.distance,r.target[2]+e.z*r.distance),i.quaternion.copy(t),i.fov!==s&&(i.fov=s,i.updateProjectionMatrix()),i.updateMatrixWorld(!0)},panPixels(r,s,o){let a=n.shot,c=2*a.distance*Math.tan(a.fov*Math.PI/360)/o,l=ri.right,u=new x(ri.fwd[0],0,ri.fwd[2]).normalize(),d=c,h=d/Math.max(.3,Math.sin(Math.asin(ri.dir[1])));n.apply({target:[a.target[0]-l[0]*r*d+u.x*s*h,a.target[1],a.target[2]-l[2]*r*d+u.z*s*h],distance:a.distance,fov:a.fov})},dolly(r){let s=n.shot;n.apply({target:s.target,distance:Math.min(140,Math.max(6,s.distance*r)),fov:s.fov})},setAspect(r){i.aspect=r,i.updateProjectionMatrix()}};return n.apply(n.shot),n}var vh="PTL Buenaventura \xB7 Agua Recuperada",V_={origin:{es:"Simulaci\xF3n din\xE1mica did\xE1ctica \xB7 todo es supuesto (B brief \xB7 S supuesto \xB7 C c\xE1lculo)",en:"Didactic dynamic simulation \xB7 everything is assumed (B brief \xB7 S assumption \xB7 C calculation)"},cls_B:{es:"brief",en:"brief"},cls_S:{es:"supuesto",en:"assumption"},cls_C:{es:"c\xE1lculo",en:"calculation"},cls_legend:{es:"B brief \xB7 S supuesto \xB7 C c\xE1lculo \u2014 nada proviene de documentos oficiales",en:"B brief \xB7 S assumption \xB7 C calculation \u2014 nothing comes from official documents"},not_applicable:{es:"no aplica",en:"n/a"},flow_poly:{es:"Pol\xEDmero",en:"Polymer"},d_facts:{es:"Supuestos y c\xE1lculos",en:"Assumptions and calculations"},mode:{es:"Modo",en:"Mode"},mode_narrative:{es:"Narrativa",en:"Narrative"},mode_overview:{es:"Vista general",en:"Overview"},mode_free:{es:"Libre",en:"Free"},mode_film:{es:"Pel\xEDcula",en:"Film"},clock:{es:"Tiempo de simulaci\xF3n",en:"Simulation time"},compressed:{es:"tiempo narrativo comprimido",en:"compressed narrative time"},plant_state:{es:"Estado de planta",en:"Plant state"},st_Stable:{es:"Estable",en:"Stable"},st_Active:{es:"Activa",en:"Active"},st_Alert:{es:"Alerta",en:"Alert"},phase:{es:"Fase",en:"Phase"},kpi_flow:{es:"Caudal",en:"Flow"},kpi_flow_sub:{es:"caudal de dise\xF1o \xB7 brief",en:"design flow \xB7 brief"},kpi_ops:{es:"Operaci\xF3n",en:"Operation"},kpi_ops_unit:{es:"h/d\xEDa",en:"h/day"},kpi_uasb:{es:"UASB en l\xEDnea",en:"UASB online"},kpi_uasb_sub:{es:"paralelo \xB7 sin recirculaci\xF3n",en:"parallel \xB7 no recirculation"},kpi_eff:{es:"L\xEDnea de efluente",en:"Effluent line"},kpi_sludge:{es:"L\xEDnea de lodos",en:"Sludge line"},kpi_health:{es:"Salud del sistema",en:"System health"},kpi_health_val:{es:"Buena",en:"Good"},kpi_health_sub:{es:"sin alarmas simuladas",en:"no simulated alarms"},on:{es:"Activa",en:"Active"},wait:{es:"Espera",en:"Standby"},eff_sub_on:{es:"descarga DS-501 en servicio",en:"DS-501 discharge in service"},eff_sub_off:{es:"aguardando efluente tratado",en:"awaiting treated effluent"},sludge_sub_on:{es:"CL-101/UASB/CL-201 \u2192 ES-101 \u2192 LS-101",en:"CL-101/UASB/CL-201 \u2192 ES-101 \u2192 LS-101"},kpi_staff:{es:"Log\xEDstica / Personal",en:"Logistics / Staff"},staff_on_site:{es:"Personal en planta",en:"Staff on site"},truck_chem:{es:"Qu\xEDmicos",en:"Chemicals"},truck_sludge:{es:"Lodos",en:"Sludge"},tk_away:{es:"Fuera",en:"Away"},tk_enroute:{es:"En ruta",en:"En route"},tk_bay:{es:"En bah\xEDa",en:"At bay"},tk_unloading:{es:"Descargando",en:"Unloading"},tk_loading:{es:"Cargando",en:"Loading"},tk_leaving:{es:"Salida",en:"Leaving"},lights:{es:"Alumbrado",en:"Lighting"},lights_on:{es:"Encendido",en:"On"},lights_off:{es:"Apagado",en:"Off"},light_day:{es:"D\xEDa",en:"Day"},light_dusk:{es:"Atardecer",en:"Dusk"},light_night:{es:"Noche",en:"Night"},light_story:{es:"D\xEDa \u2192 atardecer",en:"Day \u2192 dusk"},tg_light:{es:"Luz",en:"Light"},lbl_truck_chem:{es:"Cami\xF3n de qu\xEDmicos",en:"Chemical truck"},lbl_truck_sludge:{es:"Cami\xF3n de lodos",en:"Sludge truck"},tg_actors:{es:"Personas/Veh\xEDculos",en:"People/Vehicles"},lk_biogas:{es:"Biog\xE1s",en:"Biogas"},lk_chemical:{es:"Qu\xEDmicos",en:"Chemicals"},lk_return:{es:"Retorno",en:"Return"},lk_worker:{es:"Personal",en:"Staff"},lk_truck:{es:"Cami\xF3n",en:"Truck"},flow_reserve:{es:"En reserva \xB7 sin caudal",en:"On standby \xB7 no flow"},flow_flare:{es:"Biog\xE1s",en:"Biogas"},flow_control:{es:"En servicio \xB7 sin caudal de proceso",en:"In service \xB7 no process flow"},tag_reserve:{es:"En reserva",en:"Standby"},sludge_sub_off:{es:"sin purga",en:"no purge"},detail:{es:"Equipo seleccionado",en:"Selected equipment"},hint_click:{es:"Clic en un equipo para ver su ficha",en:"Click a unit to see its card"},none_selected:{es:"Seleccione un equipo",en:"Select a unit"},d_function:{es:"Funci\xF3n",en:"Function"},d_flow:{es:"Estado de flujo (estimado)",en:"Flow state (estimated)"},d_role:{es:"Rol en el proceso",en:"Process role"},d_volume:{es:"Volumen",en:"Volume"},d_hrt:{es:"TRH = V/Q",en:"HRT = V/Q"},d_stage:{es:"Etapa",en:"Stage"},no_data:{es:"sin dato",en:"no data"},tag_active:{es:"Activo",en:"Active"},tag_standby:{es:"Espera",en:"Standby"},tag_selected:{es:"Seleccionado",en:"Selected"},flow_on:{es:"En flujo",en:"Flowing"},flow_off:{es:"En espera \xB7 sin flujo",en:"Standby \xB7 no flow"},flow_uasb:{es:"reparto equitativo (hip\xF3tesis)",en:"equal split (hypothesis)"},flow_sludge:{es:"Lodos",en:"Sludge"},flow_pump:{es:"Impulsi\xF3n",en:"Delivery"},hrt_note:{es:"c\xE1lculo",en:"calculation"},tracker:{es:"Recorrido del proceso",en:"Process route"},events:{es:"Eventos del sistema",en:"System events"},no_events:{es:"Sin eventos",en:"No events"},split:{es:"Reparto UASB",en:"UASB split"},split_note:{es:"hip\xF3tesis: reparto equitativo",en:"hypothesis: equal split"},legend:{es:"L\xEDneas de proceso",en:"Process lines"},lk_leachate:{es:"Lixiviado",en:"Leachate"},lk_clarified:{es:"Clarificado",en:"Clarified"},lk_pumped:{es:"Impulsi\xF3n",en:"UASB feed"},lk_anaerobic:{es:"Anaerobio",en:"Anaerobic"},lk_treated:{es:"Tratado",en:"Treated"},lk_sludge:{es:"Lodos",en:"Sludge"},lk_parcel:{es:"Parcela",en:"Parcel"},tg_pipes:{es:"Tuber\xEDas",en:"Pipes"},tg_labels:{es:"Etiquetas",en:"Labels"},tg_flow:{es:"Flujo",en:"Flow"},tg_sludge:{es:"Lodos",en:"Sludge"},play:{es:"Reproducir",en:"Play"},pause:{es:"Pausa",en:"Pause"},loop:{es:"Bucle",en:"Loop"},back_story:{es:"Volver a la narrativa",en:"Back to story"}};function Pe(i,e){return V_[i][e]}var bh={homog:{es:"Homogenizaci\xF3n",en:"Homogenization"},coag:{es:"Coagulaci\xF3n",en:"Coagulation"},floc:{es:"Floculaci\xF3n",en:"Flocculation"},clar1:{es:"Clarificador 1",en:"Clarifier 1"},uasb:{es:"UASB",en:"UASB"},clar2:{es:"Clarificador 2",en:"Clarifier 2"},mbbr:{es:"MBBR",en:"MBBR"},filtro:{es:"Filtro fitopedol\xF3gico",en:"Phytopedological filter"},discharge:{es:"Descarga",en:"Discharge"}},Mm={homog:{es:"Homogenizaci\xF3n",en:"Homogenization"},coag:{es:"Coagulaci\xF3n",en:"Coagulation"},floc:{es:"Floculaci\xF3n",en:"Flocculation"},clar1:{es:"Clarificador 1",en:"Clarifier 1"},sludge:{es:"Lecho de secado",en:"Drying bed"},inter:{es:"Intermedio",en:"Intermediate"},pump:{es:"Bomba",en:"Pump"},uasb1:{es:"UASB 1",en:"UASB 1"},uasb2:{es:"UASB 2",en:"UASB 2"},uasb3:{es:"UASB 3",en:"UASB 3"},uasb4:{es:"UASB 4",en:"UASB 4"},clar2:{es:"Clarificador 2",en:"Clarifier 2"},mbbr:{es:"MBBR",en:"MBBR"},filtro:{es:"Filtro fitopedol\xF3gico",en:"Phyto filter"},discharge:{es:"Descarga",en:"Discharge"},screen:{es:"Rejilla",en:"Screen"},dosC:{es:"Coagulante",en:"Coagulant"},dosF:{es:"Pol\xEDmero",en:"Polymer"},pumpB:{es:"Bomba reserva",en:"Standby pump"},flare:{es:"Antorcha",en:"Flare"},thick:{es:"Espesador",en:"Thickener"},control:{es:"Caseta control",en:"Control bldg."}};var Ue={pad:16,top:{x0:0,y0:0,x1:1920,y1:56},rail:{x0:16,y0:72,x1:68,y1:470},left:{x0:80,y0:72,x1:320,y1:940},right:{x0:1600,y0:120,x1:1904,y1:776},caption:{x0:360,y0:852,x1:1560,y1:892},controls:{x0:360,y0:900,x1:1560,y1:940},tracker:{x0:16,y0:958,x1:1904,y1:1064},thumb:{x0:1612,y0:196,x1:1892,y1:326},safe:{x0:Ji.x0,y0:Ji.y0,x1:Ji.x1,y1:Ji.y1}},Ys=i=>`left:${i.x0}px;top:${i.y0}px;width:${i.x1-i.x0}px;height:${i.y1-i.y0}px;`,wm=`
:root{
  --bg:#dfe5f6; --panel:rgba(255,255,255,0.95); --panel-solid:#ffffff; --line:#e6eaf4; --line2:#d5dcee;
  --txt:#1b2240; --muted:#66708f; --dim:#9aa3be; --cyan:#2f5bea; --cyan-d:#6f8df2; --amber:#e39a17; --orange:#e2643c; --teal:#1fa88f;
  --green:#1f9d6b; --blue-soft:#eef2ff; --shadow:0 6px 22px rgba(46,66,140,.10), 0 1px 3px rgba(46,66,140,.08);
  --font: Inter, "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif;
  --mono: "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
}
*{box-sizing:border-box}
html,body{margin:0;height:100%;background:#c9d2ee;overflow:hidden;color:var(--txt);font-family:var(--font)}
#app{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#c9d2ee}
.stage{position:relative;overflow:hidden;background:var(--bg)}
.stage canvas{position:absolute;left:0;top:0;width:100%!important;height:100%!important;display:block}
.ov{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;pointer-events:none;
  font-size:14px;line-height:1.35;font-variant-numeric:tabular-nums;-webkit-font-smoothing:antialiased}
.ov .pe{pointer-events:auto}
.film .ov *{transition:none!important;animation:none!important}
.panel{position:absolute;background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}
.cap{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700}
.mono{font-family:var(--mono)}

/* Barra superior */
.top{${Ys(Ue.top)}display:flex;align-items:center;padding:0 18px;gap:18px}
.top .title{font-size:19px;font-weight:700;letter-spacing:-.01em;color:var(--txt);white-space:nowrap}
.top .title::before{content:"";display:inline-block;width:17px;height:17px;margin:0 13px 0 3px;vertical-align:-2px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff 0%,#2f5bea 45%,#15c3b0 100%);box-shadow:inset -3px 3px 0 rgba(255,255,255,.35)}
.top .origin{font-size:11.5px;color:#9a6408;border:1px solid #f4d9a6;border-radius:8px;padding:3px 9px;white-space:nowrap;background:#fff6e5}
.top .sp{flex:1}
.top .blk{display:flex;flex-direction:column;align-items:flex-start;gap:1px;padding-left:16px;border-left:1px solid var(--line)}
.top .blk .v{font-size:15px;font-weight:700;color:var(--txt)}
.top .clock .v{font-family:var(--mono);font-size:17px;letter-spacing:.02em}
.top .clock .n{font-size:10.5px;color:var(--dim);font-style:italic}
.pill{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:700;padding:4px 12px;border-radius:14px;border:1px solid var(--line2)}
.pill i{width:8px;height:8px;border-radius:50%;background:currentColor;display:inline-block}
.pill.Stable{color:var(--muted);background:#f4f6fb}
.pill.Active{color:var(--green);border-color:#bfe8d4;background:#e9f8f0}
.pill.Alert{color:var(--orange);border-color:#f5c9b6;background:#fdf0ea}

/* KPI */
.kpis{position:absolute;left:${Ue.left.x0}px;top:${Ue.left.y0}px;width:${Ue.left.x1-Ue.left.x0}px;display:flex;flex-direction:column;gap:7px}
.kpi{position:relative;height:72px;padding:8px 14px 0 18px}
.kpi::before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:4px;border-radius:0 3px 3px 0;background:var(--line2)}
.kpi.on::before{background:var(--cyan)}
.kpi.warm::before{background:var(--amber)}
.kpi .row{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px;gap:8px}
.kpi .v{font-size:21px;font-weight:700;color:var(--txt);letter-spacing:-.01em;white-space:nowrap}
.kpi[data-kpi=kpi_staff] .v{font-size:15px}
.kpi .badge{white-space:nowrap;flex:none}
.kpi .v.off{color:var(--dim)}
.kpi .s{font-size:11.5px;color:var(--muted);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.kpi .badge{font-size:10.5px;color:var(--muted);border:1px solid var(--line2);border-radius:8px;padding:1px 7px;background:#f6f8fc}
.kpi .badge.on{color:var(--cyan);border-color:#c9d6fb;background:var(--blue-soft)}

/* Leyenda */
.legend{left:${Ue.left.x0}px;top:651px;width:320px;padding:10px 14px}
.legend .lhd{display:flex;justify-content:space-between;align-items:center}
.legend .lfoot{font-size:10.5px;color:var(--muted);font-family:var(--mono)}
.legend .lfoot.on{color:var(--amber)}
.legend .items{display:grid;grid-template-columns:repeat(3,1fr);gap:5px 8px;margin-top:7px}
.legend .it{display:flex;align-items:center;gap:6px;font-size:11.5px;color:#3d4566;white-space:nowrap;overflow:hidden}
.legend .wk{width:8px;height:12px;border-radius:4px 4px 2px 2px;background:#f08a24;margin:0 3px;flex:none}
.legend .trk{width:14px;height:8px;border-radius:1px;background:#e9edf6;border-right:4px solid #2f5bea;flex:none}
.legend .sw{width:14px;height:4px;border-radius:2px;flex:none}
.legend .dotp{width:9px;height:9px;border-radius:50%;background:var(--amber);box-shadow:0 0 0 3px rgba(227,154,23,.2);margin:0 3px 0 2px;flex:none}
.toggles{display:flex;gap:5px;margin-left:6px}
.tg{font:inherit;font-size:11px;color:var(--muted);background:#fff;border:1px solid var(--line2);border-radius:8px;padding:3px 7px;cursor:pointer;white-space:nowrap}
html:not(.film) .top .origin{white-space:normal;max-width:262px;font-size:10.5px;line-height:1.25;padding:2px 7px}
.top .blk{flex:none;white-space:nowrap}
.top .toggles{flex:none}
.tg.on{color:var(--cyan);border-color:#c9d6fb;background:var(--blue-soft)}
.film .toggles{display:none}

/* Leyenda compacta en el encabezado del rastreador (fase 5) */
.legend{left:250px;top:957px;width:1420px;height:24px;padding:0;background:none;border:none;box-shadow:none;border-radius:0;z-index:3}
.legend .lhd{display:none}
.legend .items{display:flex;justify-content:center;gap:18px;margin-top:2px}
.legend .it{font-size:11px;color:var(--muted)}

/* Impacto (fase 5) */
.impact{left:${Ue.left.x0}px;top:651px;width:320px;height:120px;padding:10px 14px 0}
.impact .ihd{display:flex;justify-content:space-between;align-items:center}
.impact .igrid{display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;margin-top:6px}
.impact .k{font-size:10.5px;color:var(--muted);white-space:nowrap}
.impact .vr{display:flex;align-items:baseline;gap:4px;white-space:nowrap}
.impact .v{font-size:17px;font-weight:700;color:var(--green);letter-spacing:-.01em}
.impact .u{font-size:10.5px;color:var(--muted)}
.impact .ib{height:3px;border-radius:2px;background:#e8ecf6;margin-top:2px;overflow:hidden}
.impact .ib i{display:block;height:100%;border-radius:2px;background:linear-gradient(90deg,#15c3b0,#1f9d6b)}

/* Antes \xB7 Despu\xE9s (fase 5) */
.compare{left:${Ue.right.x0}px;width:320px;height:148px;padding:10px 14px;background:#fff;z-index:2}
.compare .chd{display:flex;justify-content:space-between;align-items:center}
.compare .delta{font-size:12px;font-weight:700;color:var(--green);background:#e9f8f0;border:1px solid #bfe8d4;border-radius:10px;padding:1px 9px}
.compare .crow{display:grid;grid-template-columns:1fr 16px 1fr;align-items:center;margin-top:7px;gap:4px}
.compare .side{display:flex;gap:8px;align-items:center;min-width:0}
.compare .vial{position:relative;width:20px;height:62px;border:2px solid #c9d2e8;border-top:none;border-radius:3px 3px 12px 12px;background:#f6f8fc;overflow:hidden;flex:none}
.compare .vial i{position:absolute;left:0;right:0;bottom:0;height:78%;display:block}
.compare .vial::after{content:"";position:absolute;left:3px;top:6px;width:3px;height:36px;border-radius:2px;background:rgba(255,255,255,.55)}
.compare .tx .n{font-size:12px;font-weight:700;color:var(--txt)}
.compare .tx .m{font-size:10px;color:var(--muted);white-space:nowrap;margin-top:2px}
.compare .arrow{font-size:18px;color:var(--cyan);text-align:center;font-weight:700}

/* Eventos */
.events{left:${Ue.left.x0}px;top:779px;width:320px;height:157px;padding:11px 14px}
.events .hd{display:flex;justify-content:space-between;align-items:center}
.ev{display:grid;grid-template-columns:50px 8px 1fr;align-items:center;gap:6px;height:27px;border-top:1px solid var(--line);font-size:12px;color:#4a5274}
.ev:first-of-type{border-top:none}
.ev .tm{font-family:var(--mono);font-size:11px;color:var(--dim)}
.ev .lv{width:7px;height:7px;border-radius:50%;background:var(--cyan-d)}
.ev.notice .lv{background:var(--amber)}
.ev.warn .lv{background:var(--orange)}
.ev.fresh{color:var(--txt);font-weight:600}
.ev.fresh .tm{color:var(--cyan)}
.ev .tx{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.evlist{margin-top:6px}

/* Detalle */
.detail{position:absolute;left:${Ue.right.x0}px;top:${Ue.right.y0}px;width:320px}
.detail .hdr{height:52px;padding:10px 16px 0;border-radius:14px 14px 0 0;border-bottom:none;box-shadow:none}
.detail .hdr .row{display:flex;justify-content:space-between;align-items:center}
.detail .thumb{position:absolute;left:${Ue.thumb.x0-Ue.right.x0}px;top:${Ue.thumb.y0-Ue.right.y0}px;width:${Ue.thumb.x1-Ue.thumb.x0}px;height:${Ue.thumb.y1-Ue.thumb.y0}px;border:1px solid var(--line2);border-radius:10px;overflow:hidden}
.detail .thumb .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--dim);background:#f3f5fb}
.detail .frameL,.detail .frameR{position:absolute;top:52px;width:16px;height:162px;background:var(--panel);border-left:1px solid var(--line);border-right:1px solid var(--line)}
.detail .frameL{left:0;border-right:none}.detail .frameR{right:0;border-left:none}
.detail .body{position:absolute;left:0;top:214px;width:320px;padding:10px 16px 10px;border-radius:0 0 14px 14px;border-top:none}
.detail .nm{font-size:18px;font-weight:700;color:var(--txt);line-height:1.25}
.detail .tagline{display:flex;gap:8px;align-items:center;margin-top:4px}
.detail .tagid{font-family:var(--mono);font-size:12.5px;color:var(--cyan);font-weight:600}
.chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}
.chip{font-size:11px;padding:2px 9px;border-radius:10px;border:1px solid var(--line2);color:var(--muted);background:#f6f8fc}
.chip.active{color:var(--green);border-color:#bfe8d4;background:#e9f8f0}
.chip.selected{color:var(--cyan);border-color:#c9d6fb;background:var(--blue-soft)}
.chip.standby{color:#9a6408;background:#fff6e5;border-color:#f4d9a6}
.kv{display:grid;grid-template-columns:1fr;gap:1px;margin-top:8px;padding-top:7px;border-top:1px solid var(--line)}
.kv .k{font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--dim);margin-top:4px;font-weight:600}
.kv .k:first-child{margin-top:0}
.kv .v{font-size:13px;color:#3d4566}
.kv .v.big{font-size:15px;font-weight:700;color:var(--txt)}
.kv2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px;padding-top:7px;border-top:1px solid var(--line)}
.kv2 .v{font-size:16px;font-weight:700;color:var(--txt)}
.kv2 .v.nd{color:var(--muted);font-weight:500;font-style:italic;font-size:14px}
.note{font-size:10.5px;color:var(--dim);margin-top:6px}
.detail .empty{padding:10px 0 0;color:var(--dim);font-size:12px}
.vrow{display:flex;align-items:baseline;gap:6px}
.cls{display:inline-block;font-family:var(--mono);font-size:9.5px;font-weight:700;line-height:13px;padding:0 4px;border-radius:4px;border:1px solid var(--line2);color:var(--muted);font-style:normal}
.cls.B{color:#14806d;border-color:#b6e3d8;background:#eaf8f4}
.cls.S{color:#9a6408;border-color:#f4d9a6;background:#fff6e5}
.cls.C{color:#2f5bea;border-color:#c9d6fb;background:var(--blue-soft)}
.facts{margin-top:8px;padding-top:7px;border-top:1px solid var(--line)}
.facts .k{font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--dim);font-weight:600}
.fgrid{display:grid;grid-template-columns:1fr;gap:3px 10px;margin-top:4px}
.fgrid.two{grid-template-columns:1fr 1fr}
.fr{min-width:0}
.fr .fl{font-size:10.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fr .fv{display:flex;align-items:baseline;gap:5px;font-size:12.5px;color:var(--txt);font-weight:700;white-space:nowrap}
.detail .foot{margin-top:8px;padding-top:6px;border-top:1px solid var(--line);font-size:9.5px;color:var(--dim);line-height:1.3}

/* Reparto UASB */
.split{left:${Ue.right.x0}px;width:320px;padding:12px 14px}
.split .r{display:grid;grid-template-columns:52px 1fr 44px 60px;align-items:center;gap:8px;height:22px;font-size:12px}
.split .r .l{font-family:var(--mono);color:var(--muted);font-size:11.5px}
.split .bar{height:6px;border-radius:3px;background:#e8ecf6;overflow:hidden}
.split .bar i{display:block;height:100%;background:linear-gradient(90deg,#2f5bea,#5b84ff);border-radius:3px}
.split .p{color:var(--txt);text-align:right;font-weight:600}.split .q{color:var(--muted);text-align:right}
.split .rows{margin-top:8px}

/* Subt\xEDtulo */
.caption{position:absolute;${Ys(Ue.caption)}display:flex;align-items:center;justify-content:center}
.caption span{font-size:17px;color:var(--txt);background:rgba(255,255,255,.95);border:1px solid var(--line);border-radius:12px;padding:6px 18px;letter-spacing:.01em;box-shadow:var(--shadow)}
.caption b{font-weight:700;color:#fff;background:var(--cyan);border-radius:6px;padding:2px 7px;margin-right:10px;font-size:11px;letter-spacing:.1em}

/* Controles */
.controls{${Ys(Ue.controls)}display:flex;align-items:center;gap:10px;padding:0 12px}
.film .controls{display:none}
.btn{font:inherit;font-size:12px;color:#3d4566;background:#fff;border:1px solid var(--line2);border-radius:8px;height:26px;padding:0 10px;cursor:pointer;white-space:nowrap}
.btn.on{color:#fff;border-color:var(--cyan);background:var(--cyan)}
.btn.hide{display:none}
.controls input[type=range]{flex:1;accent-color:#2f5bea;height:4px}
.controls .tm{font-family:var(--mono);font-size:12px;color:var(--muted);width:150px;text-align:center;white-space:nowrap}
.seg{display:inline-flex}.seg .btn{border-radius:0;margin-left:-1px}.seg .btn:first-child{border-radius:8px 0 0 8px}.seg .btn:last-child{border-radius:0 8px 8px 0}

/* Rastreador */
.tracker{${Ys(Ue.tracker)}padding:12px 22px 0}
.tracker .hd{display:flex;justify-content:space-between}
.steps{position:relative;margin-top:12px;height:56px}
.stp{position:absolute;top:0;width:150px;margin-left:-75px;text-align:center}
.stp .nd{width:24px;height:24px;margin:0 auto;border-radius:50%;border:1.5px solid var(--line2);background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--dim);font-weight:700}
.stp .lb{margin-top:6px;font-size:12.5px;color:var(--dim);white-space:nowrap}
.stp.done .nd{border-color:var(--cyan);background:var(--cyan);color:#fff}
.stp.done .lb{color:#3d4566}
.stp.active .nd{border-color:var(--cyan);background:#fff;color:var(--cyan);box-shadow:0 0 0 5px rgba(47,91,234,.15)}
.stp.active .lb{color:var(--txt);font-weight:700}
.cn{position:absolute;top:11px;height:3px;background:#e4e8f3;border-radius:2px}
.cn i{display:block;height:100%;background:var(--cyan);border-radius:2px}

/* Etiquetas 3D */
.labels{position:absolute;left:0;top:0;width:1920px;height:1080px}
.labels svg{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:visible}
.lbl{position:absolute;left:0;top:0;height:32px;box-sizing:border-box;padding:0 7px;border-radius:7px;background:rgba(255,255,255,.62);white-space:nowrap;pointer-events:none;text-align:center;text-shadow:0 0 3px #fff,0 0 3px #fff,0 0 6px rgba(255,255,255,.95),0 1px 0 #fff}
.lbl .t{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:#2f5bea;line-height:13px;text-transform:uppercase}
.lbl .n{font-size:13px;color:#1b2550;line-height:18px;font-weight:650}
.note3{position:absolute;left:0;top:0;height:18px;box-sizing:border-box;padding:0 6px;border-radius:5px;background:rgba(255,255,255,.62);white-space:nowrap;pointer-events:none;font-size:11px;line-height:18px;color:#26305a;font-weight:550;text-shadow:0 0 3px #fff,0 0 5px rgba(255,255,255,.9)}
.mk{position:absolute;left:0;top:0;width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.92);border:1.5px solid #9fb2ea;color:#5b6aa0;font:600 10px/15px var(--font);text-align:center;box-shadow:0 1px 3px rgba(30,45,110,.18);pointer-events:none}
.mk.on{background:#2f5bea;border-color:#fff;color:#fff}

/* Cursor guionizado */
.cursor{position:absolute;left:0;top:0;width:0;height:0}
.cursor svg{position:absolute;left:-3px;top:-2px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.35))}
.cursor .rip{position:absolute;border-radius:50%;border:1.5px solid rgba(47,91,234,.9)}

/* ================= SPEC v3.0 \xB7 Light Industrial Interface ================= */
.v3{
  --ui-bg:#FAFAF8; --ui-surface:#FFFFFF; --ui-surface-soft:#F5F3EE; --ui-scene-surround:#DDE3F4;
  --ui-text:#243443; --ui-text-muted:#66768A; --ui-border:#DEE3EB;
  --ui-primary:#3267CE; --ui-primary-soft:#EAF0FD; --ui-success:#409B73; --ui-success-soft:#E5F3E8;
  --ui-warning:#D49B3A; --ui-danger:#C95757;
  --ui-shadow:0 1px 2px rgba(36,52,67,.06),0 4px 14px rgba(36,52,67,.06);
  --ui-font:Inter,Geist,"Segoe UI",system-ui,-apple-system,Roboto,Arial,sans-serif;
  --ui-mono:"Geist Mono","JetBrains Mono","SFMono-Regular",Menlo,Consolas,monospace;
  --ui-t:200ms; --txt:var(--ui-text); --muted:var(--ui-text-muted); --cyan:var(--ui-primary); --green:var(--ui-success);
  font-family:var(--ui-font);color:var(--ui-text);font-size:13.5px;
}
.v3 .mono{font-family:var(--ui-mono)}
.v3 .closed{opacity:0;visibility:hidden;pointer-events:none!important;transform:translateY(-4px)}
.v3 .closed *{pointer-events:none!important}
.v3 .panel3,.v3 .insp3,.v3 .split,.v3 .compare,.v3 .rail3,.v3 .tool3,.v3 .pop3{transition:opacity var(--ui-t) ease,transform var(--ui-t) ease,visibility var(--ui-t)}
.v3 .panel3,.v3 .split,.v3 .compare{position:absolute;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:12px;box-shadow:var(--ui-shadow)}
.v3 .split,.v3 .compare{left:${Ue.right.x0}px;width:${Ue.right.x1-Ue.right.x0}px}
.v3 .cap{font-size:11.5px;letter-spacing:.02em;text-transform:none;color:var(--ui-text-muted);font-weight:600}

/* Bot\xF3n de icono */
.v3 .ib{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;border:1px solid transparent;background:transparent;color:var(--ui-text-muted);cursor:pointer;position:relative;padding:0;transition:background 140ms,color 140ms,border-color 140ms}
.v3 .ib:hover{background:var(--ui-surface-soft);color:var(--ui-text)}
.v3 .ib:focus-visible,.v3 .tab:focus-visible,.v3 .stp:focus-visible,.v3 .itab:focus-visible,.v3 .pit:focus-visible,.v3 .seg3 button:focus-visible{outline:2px solid var(--ui-primary);outline-offset:1px}
.v3 .ib.on{background:var(--ui-primary-soft);color:var(--ui-primary);border-color:#cddcf8}
.v3 .ib:active{transform:translateY(1px)}
.v3 .ib.primary{background:var(--ui-primary);color:#fff}
.v3 .ib.primary:hover{background:#2a59b4;color:#fff}
.v3 .ib.sm{width:26px;height:26px}
.v3 .ib:disabled{opacity:.45;cursor:default}
.v3 [data-tip]:hover::after,.v3 [data-tip]:focus-visible::after{content:attr(data-tip);position:absolute;left:50%;top:calc(100% + 6px);transform:translateX(-50%);white-space:nowrap;font:500 12px/1 var(--ui-font);color:#fff;background:#243443;padding:6px 8px;border-radius:6px;z-index:50;pointer-events:none}
.v3 .rail3 [data-tip]:hover::after,.v3 .rail3 [data-tip]:focus-visible::after{left:calc(100% + 8px);top:50%;transform:translateY(-50%)}
.v3 .tool3 [data-tip]:hover::after,.v3 .tool3 [data-tip]:focus-visible::after,.v3 .hbtns [data-tip]:hover::after{left:auto;right:0;transform:none}

/* Header */
.v3 .hdr3{position:absolute;${Ys(Ue.top)}display:flex;align-items:center;gap:16px;padding:0 16px 0 20px;background:var(--ui-surface);border-bottom:1px solid var(--ui-border);box-shadow:0 1px 0 rgba(36,52,67,.03)}
.v3 .brand{display:flex;align-items:center;gap:10px;flex:none}
.v3 .brand .logo{width:16px;height:16px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff,#3267CE 45%,#15c3b0)}
.v3 .brand .bn{font-size:17px;font-weight:650;letter-spacing:-.01em;line-height:1.1}
.v3 .brand .bd{font-size:12px;color:var(--ui-text-muted);line-height:1.2}
.v3 .origin3{font-size:11.5px;color:#8a5a12;background:#fbf3e4;border:1px solid #efdcb8;border-radius:6px;padding:3px 8px;white-space:nowrap;flex:none}
.v3 .tabs{display:flex;gap:2px;margin:0 auto;background:var(--ui-surface-soft);border:1px solid var(--ui-border);border-radius:10px;padding:3px}
.v3 .tab{font:500 13.5px var(--ui-font);color:var(--ui-text-muted);background:none;border:none;border-radius:7px;padding:6px 14px;cursor:pointer;transition:background 140ms,color 140ms}
.v3 .tab:hover:not(:disabled){color:var(--ui-text);background:#fff}
.v3 .tab.on{background:#fff;color:var(--ui-primary);box-shadow:0 1px 2px rgba(36,52,67,.08);font-weight:600}
.v3 .tab:disabled{opacity:.5;cursor:default}
.film .v3 .tab:disabled{opacity:1}
.film .v3 .tab:disabled:not(.on){opacity:.75}
.v3 .hright{display:flex;align-items:center;gap:14px;flex:none}
.v3 .hclock{display:flex;flex-direction:column;align-items:flex-end;line-height:1.2}
.v3 .hclock .ph{font-size:11.5px;color:var(--ui-text-muted)}
.v3 .hclock .mono{font-size:14px;font-weight:600}
.v3 .hbtns{display:flex;gap:6px}
.v3 .pill{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;padding:4px 10px;border-radius:999px;border:1px solid var(--ui-border);color:var(--ui-text-muted);background:var(--ui-surface-soft)}
.v3 .pill i{width:7px;height:7px;border-radius:50%;background:currentColor}
.v3 .pill.Active{color:var(--ui-success);border-color:#c6e4d3;background:var(--ui-success-soft)}
.v3 .pill.Alert{color:var(--ui-danger);border-color:#f0cccc;background:#fbeeee}

/* Rail */
.v3 .rail3{position:absolute;left:${Ue.rail.x0}px;top:${Ue.rail.y0}px;width:${Ue.rail.x1-Ue.rail.x0}px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 0;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:12px;box-shadow:var(--ui-shadow)}
.v3 .rail3 .ib{width:38px;height:38px}
.v3 .rail3 .sep{width:24px;height:1px;background:var(--ui-border);margin:4px 0}

/* Panel de operaci\xF3n */
.v3 .p3hd{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 12px 8px 16px}
.v3 .p3t{font-size:15px;font-weight:650}
.v3 .p3cap{font-size:12px;font-weight:600;color:var(--ui-text-muted);margin-bottom:6px}
.v3 .p3sec{padding:10px 16px;border-top:1px solid var(--ui-border)}
.v3 .p3sec:first-of-type{border-top:none;padding-top:0}
.v3 .p3foot{padding:8px 16px 12px;border-top:1px solid var(--ui-border);font-size:11px;color:var(--ui-text-muted);line-height:1.35}
.v3 .ops3{left:${Ue.left.x0}px;top:${Ue.left.y0}px;width:${Ue.left.x1-Ue.left.x0}px}
.v3 .orow{display:grid;grid-template-columns:1fr auto;align-items:baseline;column-gap:8px;padding:5px 0}
.v3 .orow+.orow{border-top:1px solid #eef1f5}
.v3 .orow .k{font-size:12.5px;color:var(--ui-text-muted)}
.v3 .orow .vw{display:flex;align-items:baseline;gap:6px;justify-content:flex-end}
.v3 .orow .v{font-size:15px;font-weight:650;white-space:nowrap}
.v3 .orow .s{grid-column:1/-1;font-size:11px;color:#8794a6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v3 .orow.ok .v{color:var(--ui-success)}
.v3 .orow.off .v{color:#a2adbb;font-weight:500}
.v3 .orow.muted .v{color:var(--ui-text-muted)}
.v3 .orow[data-kpi=kpi_staff]{grid-template-columns:1fr}
.v3 .orow[data-kpi=kpi_staff] .vw{justify-content:flex-start;flex-wrap:wrap;row-gap:3px}
.v3 .orow[data-kpi=kpi_staff] .v{font-size:13px;font-weight:600}
.v3 .chip3{font-size:10.5px;color:var(--ui-text-muted);border:1px solid var(--ui-border);border-radius:6px;padding:1px 6px;background:var(--ui-surface-soft);white-space:nowrap}
.v3 .chip3.on{color:#8a5a12;border-color:#efdcb8;background:#fbf3e4}
.v3 .igrid3{display:grid;grid-template-columns:1fr 1fr;gap:10px 12px}
.v3 .it3 .k{font-size:11.5px;color:var(--ui-text-muted);white-space:nowrap}
.v3 .it3 .vr{display:flex;align-items:baseline;gap:4px;white-space:nowrap}
.v3 .it3 .v{font-size:24px;font-weight:650;letter-spacing:-.02em;color:var(--ui-text)}
.v3 .it3 .u{font-size:11px;color:var(--ui-text-muted)}

/* Inspector */
.v3 .insp3{position:absolute;left:${Ue.right.x0}px;top:${Ue.right.y0}px;width:${Ue.right.x1-Ue.right.x0}px;max-height:${Ue.right.y1-Ue.right.y0}px;display:flex;flex-direction:column;background:transparent;border:1px solid var(--ui-border);border-radius:12px;box-shadow:var(--ui-shadow);overflow:hidden}
.v3 .insp3 .hdr,.v3 .insp3 .itabs,.v3 .insp3 .body,.v3 .insp3 .foot{background:var(--ui-surface)!important}
.v3 .insp3 .hdr{position:static;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;height:${Ue.thumb.y0-Ue.right.y0-4}px;padding:12px 12px 0 12px;border:none;box-shadow:none;background:none;flex:none}
.v3 .insp3 .nm{font-size:17px;font-weight:650;line-height:1.25;color:var(--ui-text)}
.v3 .insp3 .tagline{display:flex;align-items:center;gap:8px;margin-top:4px}
.v3 .insp3 .tagid{font-size:12.5px;color:var(--ui-primary);font-weight:600;font-family:var(--ui-mono)}
.v3 .insp3 .chips{margin:0}
.v3 .chip{font-size:11px;padding:1px 8px;border-radius:999px;border:1px solid var(--ui-border);color:var(--ui-text-muted);background:var(--ui-surface-soft)}
.v3 .chip.active{color:var(--ui-success);border-color:#c6e4d3;background:var(--ui-success-soft)}
.v3 .chip.standby{color:#8a5a12;border-color:#efdcb8;background:#fbf3e4}
.v3 .insp3 .thumb{position:relative;left:auto;top:auto;flex:none;margin:4px 12px 0;width:${Ue.thumb.x1-Ue.thumb.x0}px;height:${Ue.thumb.y1-Ue.thumb.y0}px;border:1px solid var(--ui-border);border-radius:8px;overflow:hidden;box-shadow:0 0 0 13px var(--ui-surface)}
.v3 .insp3 .thumb .ph{background:var(--ui-surface-soft);color:var(--ui-text-muted)}
.v3 .itabs{display:flex;gap:2px;margin:0;padding:10px 12px 0;box-shadow:inset 0 -1px 0 var(--ui-border);flex:none;position:relative;z-index:1}
.v3 .itab{font:500 13px var(--ui-font);color:var(--ui-text-muted);background:none;border:none;border-bottom:2px solid transparent;padding:6px 10px;margin-bottom:-1px;cursor:pointer;transition:color 140ms,border-color 140ms}
.v3 .itab:hover{color:var(--ui-text)}
.v3 .itab.on{color:var(--ui-primary);border-bottom-color:var(--ui-primary);font-weight:600}
.v3 .insp3 .body{position:static;width:auto;flex:1 1 auto;min-height:0;overflow:auto;padding:4px 16px 10px;border:none;background:none;box-shadow:none;pointer-events:auto}
.v3 .insp3 .isec{padding-top:6px}
.v3 .insp3 .kv{border-top:none;margin-top:0;padding-top:2px}
.v3 .insp3 .kv .k,.v3 .insp3 .facts .k,.v3 .opev .k,.v3 .dims .k{font-size:11.5px;letter-spacing:0;text-transform:none;color:var(--ui-text-muted);font-weight:600}
.v3 .insp3 .kv .v{font-size:13px;color:var(--ui-text)}
.v3 .insp3 .kv .v.big{font-size:15px;font-weight:650}
.v3 .insp3 .kv2{border-top:1px solid var(--ui-border)}
.v3 .insp3 .kv2 .cap{font-size:11.5px}
.v3 .insp3 .kv2 .v{font-size:20px;font-weight:650}
.v3 .insp3 .facts{margin-top:8px;padding-top:8px;border-top:1px solid var(--ui-border)}
.v3 .insp3 .fr .fl{font-size:11px;color:var(--ui-text-muted)}
.v3 .insp3 .fr .fv{font-size:13px;font-weight:650}
.v3 .dims{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 6px;margin-top:8px;padding-top:6px;border-top:1px dashed var(--ui-border);font-size:12px}
.v3 .dims .k{flex-basis:100%}
.v3 .dims .v{color:var(--ui-text);font-weight:600}
.v3 .opg .or{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eef1f5;font-size:12.5px}
.v3 .opg .or .k{color:var(--ui-text-muted)}
.v3 .opg .or .v{font-weight:600}
.v3 .opev{margin-top:10px}
.v3 .opev .oe{display:grid;grid-template-columns:52px 1fr;gap:6px;font-size:12px;padding:4px 0}
.v3 .opev .oe .mono{color:var(--ui-text-muted);font-size:11px}
.v3 .nodata{font-size:12px;color:#8794a6;font-style:italic;padding:4px 0}
.v3 .insp3 .empty{color:var(--ui-text-muted)}
.v3 .insp3 .foot{flex:none;margin:0;padding:8px 16px 10px;border-top:1px solid var(--ui-border);font-size:10.5px;color:#8794a6}
.v3 .cls.B{color:#2f7d5c;border-color:#c6e4d3;background:var(--ui-success-soft)}
.v3 .cls.S{color:#8a5a12;border-color:#efdcb8;background:#fbf3e4}
.v3 .cls.C{color:var(--ui-primary);border-color:#cddcf8;background:var(--ui-primary-soft)}

/* Tarjetas de an\xE1lisis */
.v3 .split,.v3 .compare{padding:12px 14px}
.v3 .split .bar i{background:var(--ui-primary)}
.v3 .compare .delta{color:var(--ui-success);background:var(--ui-success-soft);border-color:#c6e4d3}
.v3 .compare .arrow{color:var(--ui-primary)}

/* Toolbar 3D y popovers */
.v3 .tool3{position:absolute;right:16px;top:68px;display:flex;gap:2px;padding:3px;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:10px;box-shadow:var(--ui-shadow);z-index:4}
.v3 .pop3{position:absolute;right:16px;top:114px;width:268px;padding:6px;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:10px;box-shadow:0 8px 24px rgba(36,52,67,.12);z-index:6;opacity:0;visibility:hidden;transform:translateY(-4px)}
.v3 .pop3.open{opacity:1;visibility:visible;transform:none}
.v3 .pop3:not(.open),.v3 .pop3:not(.open) *{pointer-events:none!important}
.v3 .pit{display:flex;align-items:center;gap:10px;width:100%;font:500 13px var(--ui-font);color:var(--ui-text);background:none;border:none;border-radius:7px;padding:8px 10px;cursor:pointer;text-align:left}
.v3 .pit:hover{background:var(--ui-surface-soft)}
.v3 .pit .sw{width:26px;height:15px;border-radius:999px;background:#d5dbe4;position:relative;flex:none;transition:background 140ms}
.v3 .pit .sw::after{content:"";position:absolute;left:2px;top:2px;width:11px;height:11px;border-radius:50%;background:#fff;transition:transform 140ms}
.v3 .pit.on .sw{background:var(--ui-primary)}
.v3 .pit.on .sw::after{transform:translateX(11px)}

/* Timeline */
.v3 .tl3{${Ys(Ue.tracker)}padding:0;display:flex;flex-direction:column;transition:height var(--ui-t) ease,top var(--ui-t) ease}
.v3 .tl3.compact{top:${Ue.tracker.y1-50}px;height:50px}
.v3 .tlr1{display:flex;align-items:center;gap:12px;height:48px;padding:0 12px;flex:none}
.v3 .tln{font-size:13.5px;font-weight:600;white-space:nowrap}
.v3 .tlt{font-size:13px;color:var(--ui-text-muted);white-space:nowrap}
.v3 .tlp{position:relative;flex:1;height:20px;display:flex;align-items:center}
.v3 .tlp .track{position:absolute;left:0;right:0;top:8px;height:4px;border-radius:2px;background:#e6eaf0;overflow:hidden}
.v3 .tlp .track i{display:block;height:100%;background:var(--ui-primary);border-radius:2px;transition:width 120ms linear}
.v3 .tlp input{position:absolute;left:0;right:0;width:100%;margin:0;opacity:0;cursor:pointer;height:20px}
.v3 .tli{font-size:12px;color:var(--ui-text-muted);white-space:nowrap}
.v3 .seg3{display:inline-flex;border:1px solid var(--ui-border);border-radius:8px;overflow:hidden}
.v3 .seg3 button{font:500 12px var(--ui-mono);color:var(--ui-text-muted);background:#fff;border:none;padding:5px 9px;cursor:pointer}
.v3 .seg3 button+button{border-left:1px solid var(--ui-border)}
.v3 .seg3 button.on{background:var(--ui-primary-soft);color:var(--ui-primary)}
.v3 .tlr2{display:grid;grid-template-columns:repeat(9,1fr);gap:4px;padding:0 12px 10px;border-top:1px solid var(--ui-border);padding-top:8px;flex:1}
.v3 .tl3.compact .tlr2{display:none}
.v3 .stp{position:relative;top:auto;width:auto;margin:0;display:flex;align-items:center;gap:8px;font:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:8px;padding:4px 8px;cursor:pointer;color:var(--ui-text-muted);transition:background 140ms,border-color 140ms}
.v3 .stp:disabled{cursor:default}
.v3 .stp:hover:not(:disabled){background:var(--ui-surface-soft)}
.v3 .stp .nd{width:22px;height:22px;margin:0;border-radius:50%;border:1.5px solid #cfd6e0;background:#fff;display:flex;align-items:center;justify-content:center;font:600 11px var(--ui-mono);color:#8794a6;flex:none}
.v3 .stp .lb{margin:0;font-size:12.5px;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v3 .stp.done{color:var(--ui-text)}
.v3 .stp.done .nd{border-color:#9db6e8;background:var(--ui-primary-soft);color:var(--ui-primary)}
.v3 .stp.active{background:var(--ui-primary-soft);border-color:#cddcf8;color:var(--ui-primary)}
.v3 .stp.active .nd{border-color:var(--ui-primary);background:var(--ui-primary);color:#fff}
.v3 .stp.active .lb{font-weight:650}
.v3 .stp .run{position:absolute;right:6px;top:6px;width:6px;height:6px;border-radius:50%;background:transparent}
.v3 .stp .run.on{background:var(--ui-success)}

/* Eventos y documentaci\xF3n */
.v3 .ev3{left:332px;top:600px;width:420px;height:340px;display:flex;flex-direction:column}
.v3 .ev3 .cnt{font-size:12px;color:var(--ui-text-muted);margin-left:auto;margin-right:4px}
.v3 .evh,.v3 .evr{display:grid;grid-template-columns:52px 1fr 52px 66px;gap:8px;align-items:center;padding:0 16px}
.v3 .evh{font-size:11px;color:var(--ui-text-muted);font-weight:600;padding-bottom:6px;border-bottom:1px solid var(--ui-border)}
.v3 .evl{flex:1;overflow:auto}
.v3 .evr{font-size:12px;padding-top:6px;padding-bottom:6px;border-bottom:1px solid #eef1f5}
.v3 .evr .mono{font-size:11px;color:var(--ui-text-muted)}
.v3 .evr .tx{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v3 .sev{font-size:10.5px;border-radius:5px;padding:1px 5px;text-align:center;background:var(--ui-surface-soft);color:var(--ui-text-muted)}
.v3 .sev.notice{background:#fbf3e4;color:#8a5a12}
.v3 .sev.warn{background:#fbeeee;color:var(--ui-danger)}
.v3 .evr .src{font-size:10.5px;color:#8794a6}
.v3 .docs3{left:372px;top:72px;width:780px;max-height:868px;display:flex;flex-direction:column;z-index:5}
.v3 .dbody{overflow:auto;padding:0 20px 16px}
.v3 .dbody .lead{font-size:13.5px;color:var(--ui-text);margin:0 0 10px;line-height:1.5}
.v3 .clsrow{display:flex;gap:16px;margin-bottom:10px;font-size:12.5px;color:var(--ui-text-muted)}
.v3 .clsrow .ci{display:flex;gap:6px;align-items:center}
.v3 .dtbl .dh{font-size:13px;font-weight:650;margin-top:12px;padding-bottom:4px;border-bottom:1px solid var(--ui-border)}
.v3 .dtbl .dr{display:grid;grid-template-columns:200px 130px 22px 1fr;gap:10px;align-items:baseline;font-size:12.5px;padding:4px 0;border-bottom:1px solid #f1f3f6}
.v3 .dtbl .dl{color:var(--ui-text-muted)}
.v3 .dtbl .db{color:#8794a6;font-size:12px}

/* Subt\xEDtulo y cursor */
.v3 .caption span{font-size:16px;color:var(--ui-text);background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:10px;padding:7px 16px;box-shadow:var(--ui-shadow)}
.v3 .caption b{background:var(--ui-primary);border-radius:6px;font-size:11.5px;letter-spacing:.02em;font-weight:600}

/* Modo inmersivo: solo toolbar y timeline compacto */
.v3.immersive .hdr3,.v3.immersive .rail3{opacity:0;visibility:hidden;pointer-events:none}
.v3.immersive .hdr3 *,.v3.immersive .rail3 *{pointer-events:none!important}
.v3.immersive .tool3{top:16px}

@media (prefers-reduced-motion: reduce){.v3 *,.v3 *::after{transition:none!important;animation:none!important}}
`;function O(i,e="",t,n){let r=document.createElement(i);return e&&(r.className=e),n!=null&&(r.textContent=n),t&&t.appendChild(r),r}function me(i,e){i.textContent!==e&&(i.textContent=e)}function Pt(i,e,t){i.classList.contains(e)!==t&&i.classList.toggle(e,t)}function $t(i,e,t){let n=i.style;n[e]!==t&&(n[e]=t)}var ft={codIn_mgL:12e3,tssIn_mgL:800,codRemPhysChem:.25,codRemUasb:.7,codRemMbbr:.5,codRemFilter:.3,tssRemOverall:.92,ch4Lhv_kWhm3:9.97,coagDose_mgL:300,coagSolution:.4,coagDensity:1.42,coagDayTank_L:200,polyDose_mgL:2,polyPrepConc:.001,polyTank_L:500,ch4Yield_m3kg:.35,ch4Fraction:.65,flareCapacity_m3h:15,airPerVolume_m3m3h:3,blowerPressure_bar:.35,blowerMotor_kW:2.2,mbbrFill:.5,carrierSsa_m2m3:500,doSet_mgL:2.5,uasbSepAngle_deg:50,pumpHead_m:8,pumpEfficiency:.55,pumpMotor_kW:.75,primarySludge_kgm3:.6,uasbYield_kgSSkgCOD:.05,clar2Sludge_kgd:2,purgeSolids:.02,thickSolids:.05,cakeSolids:.25,truckCapacity_m3:6,clarD_m:2.2,clarCylH_m:1.7,clarConeH_m:.85,thickD_m:2.4,thickH_m:2.6,filterArea_m2:45,filterDepth_m:.9,bedArea_m2:28},Go=rn.flow_Ls*3.6,$s=Go*rn.hoursPerDay,yh=i=>i/1e3*Go;function ji(i=ft){let e=Math.PI*(i.clarD_m/2)**2,t=e*i.clarCylH_m+e*i.clarConeH_m/3,n=Math.PI*(i.thickD_m/2)**2*i.thickH_m,r=i.codIn_mgL*(1-i.codRemPhysChem),s=yh(r*i.codRemUasb),o=s*i.ch4Yield_m3kg,a=o/i.ch4Fraction,c=yh(i.coagDose_mgL),l=c/i.coagSolution/i.coagDensity,u=yh(i.polyDose_mgL),d=u/i.polyPrepConc,h=i.airPerVolume_m3m3h*20,f=1e3*9.81*(rn.flow_Ls/1e3)*i.pumpHead_m/1e3,p=i.primarySludge_kgm3*$s,v=s*rn.hoursPerDay*i.uasbYield_kgSSkgCOD,g=p+v+i.clar2Sludge_kgd,m=g/(i.purgeSolids*1e3),b=g/(i.thickSolids*1e3),y=g/i.cakeSolids,_=y/(rn.apparentDensity_tm3*1e3),R=r*(1-i.codRemUasb)*(1-i.codRemMbbr),S=R*(1-i.codRemFilter),P=100*(1-S/i.codIn_mgL),L=$s*(i.codIn_mgL-S)/1e3,w=o*rn.hoursPerDay,T=w*i.ch4Lhv_kWhm3,H=i.tssIn_mgL*(1-i.tssRemOverall);return{codFinal:S,codRemovalPct:P,codAvoided_kgd:L,ch4_m3d:w,energy_kWhd:T,tssOut:H,Q_m3h:Go,Q_m3d:$s,clarArea:e,clarVol:t,thickVol:n,codUasbIn:r,codRemovedUasb_kgh:s,ch4_m3h:o,biogas_m3h:a,coag_kgh:c,coagSol_Lh:l,poly_kgh:u,polySol_Lh:d,air_m3h:h,pumpHyd_kW:f,primary_kgd:p,uasbSludge_kgd:v,totalSS_kgd:g,purge_m3d:m,thick_m3d:b,cake_kgd:y,cake_m3d:_,codOut:R,clarSurfaceLoad_mh:Go/e,uasbVup_mh:Go/rn.uasbCount/(Math.PI*1**2),uasbOlr_kgm3d:$s/rn.uasbCount*r/1e3/10,mbbrArea_m2:20*i.mbbrFill*i.carrierSsa_m2m3,mbbrSalr_gm2d:$s*r*(1-i.codRemUasb)/(20*i.mbbrFill*i.carrierSsa_m2m3),filterHydLoad_md:$s/i.filterArea_m2,truckDays:i.truckCapacity_m3/_,coagDayTankDays:i.coagDayTank_L/(l*rn.hoursPerDay)}}var jt=ji(),Lt=(i,e,t,n,r,s,o,a,c)=>({key:i,label:{es:e,en:t},value:n,unit:r,digits:s,cls:o,basis:{es:a,en:c}}),Tm={clar1:jt.clarVol,clar2:jt.clarVol,thick:jt.thickVol,filtro:ft.filterArea_m2*ft.filterDepth_m,dosC:ft.coagDayTank_L/1e3,dosF:ft.polyTank_L/1e3},jr={homog:[Lt("codIn","DQO afluente","Influent COD",ft.codIn_mgL,"mg/L",0,"S","lixiviado t\xEDpico asumido","assumed typical leachate")],dosC:[Lt("coagDose","Dosis de FeCl\u2083","FeCl\u2083 dose",ft.coagDose_mgL,"mg/L",0,"S","ensayo de jarras no realizado","no jar test"),Lt("coagKg","Consumo","Consumption",jt.coag_kgh,"kg/h",2,"C","dosis \xD7 Q","dose \xD7 Q"),Lt("coagSol","Soluci\xF3n 40 %","40 % solution",jt.coagSol_Lh,"L/h",2,"C","consumo / (0,40 \xD7 1,42 kg/L)","consumption / (0.40 \xD7 1.42 kg/L)"),Lt("coagDays","Autonom\xEDa tanque 200 L","200 L tank autonomy",jt.coagDayTankDays,"d",1,"C","a 8 h/d\xEDa","at 8 h/day")],dosF:[Lt("polyDose","Dosis de pol\xEDmero","Polymer dose",ft.polyDose_mgL,"mg/L",1,"S","ani\xF3nico, t\xEDpico","anionic, typical"),Lt("polySol","Soluci\xF3n 0,1 %","0.1 % solution",jt.polySol_Lh,"L/h",1,"C","dosis \xD7 Q / 0,1 %","dose \xD7 Q / 0.1 %")],clar1:[Lt("clarSL","Carga superficial","Surface loading",jt.clarSurfaceLoad_mh,"m/h",2,"C","Q / \xE1rea \xD82,2 m","Q / \xD82.2 m area"),Lt("primSS","Lodo primario","Primary sludge",jt.primary_kgd,"kg SS/d",1,"C","0,6 kg SS/m\xB3 (S) \xD7 28,8 m\xB3/d","0.6 kg SS/m\xB3 (S) \xD7 28.8 m\xB3/d")],pump:[Lt("head","Altura supuesta","Assumed head",ft.pumpHead_m,"m",0,"S","sin curva de bomba","no pump curve"),Lt("hyd","Potencia hidr\xE1ulica","Hydraulic power",jt.pumpHyd_kW,"kW",3,"C","\u03C1\xB7g\xB7Q\xB7H","\u03C1\xB7g\xB7Q\xB7H"),Lt("motor","Motor","Motor",ft.pumpMotor_kW,"kW",2,"S","tama\xF1o comercial asumido","assumed commercial size")],pumpB:[Lt("motorB","Motor","Motor",ft.pumpMotor_kW,"kW",2,"S","igual a P-01","same as P-01")],uasb1:[],uasb2:[],uasb3:[],uasb4:[],flare:[Lt("biogas","Biog\xE1s (4 UASB)","Biogas (4 UASB)",jt.biogas_m3h,"m\xB3/h",1,"C","0,35 m\xB3 CH\u2084/kg DQO rem. \xF7 65 % CH\u2084","0.35 m\xB3 CH\u2084/kg COD rem. \xF7 65 % CH\u2084"),Lt("ch4","Metano","Methane",jt.ch4_m3h,"m\xB3/h",1,"C","DQO removida \xD7 rendimiento","COD removed \xD7 yield"),Lt("flareCap","Capacidad de antorcha","Flare capacity",ft.flareCapacity_m3h,"m\xB3/h",0,"S","margen sobre el caudal estimado","margin over estimated flow")],clar2:[Lt("c2SS","Lodo secundario","Secondary sludge",ft.clar2Sludge_kgd,"kg SS/d",1,"S","arrastre UASB asumido","assumed UASB carry-over")],mbbr:[Lt("air","Aire de proceso","Process air",jt.air_m3h,"Nm\xB3/h",0,"C","3 Nm\xB3/(m\xB3\xB7h) (S) \xD7 20 m\xB3","3 Nm\xB3/(m\xB3\xB7h) (S) \xD7 20 m\xB3"),Lt("area","Superficie protegida","Protected surface",jt.mbbrArea_m2,"m\xB2",0,"C",`20 m\xB3 \xD7 llenado \xD7 ${ft.carrierSsa_m2m3} m\xB2/m\xB3 (S)`,`20 m\xB3 \xD7 fill \xD7 ${ft.carrierSsa_m2m3} m\xB2/m\xB3 (S)`),Lt("salr","Carga superficial DQO","Surface COD load",jt.mbbrSalr_gm2d,"g/m\xB2\xB7d",1,"C","DQO de entrada \xD7 Q / superficie","inlet COD \xD7 Q / surface"),Lt("codOut","DQO estimada a la salida","Estimated outlet COD",jt.codOut,"mg/L",0,"C","remociones supuestas en cadena","chained assumed removals")],filtro:[Lt("fhl","Carga hidr\xE1ulica","Hydraulic loading",jt.filterHydLoad_md,"m/d",2,"C","28,8 m\xB3/d / 45 m\xB2 (S)","28.8 m\xB3/d / 45 m\xB2 (S)")],thick:[Lt("ssTot","S\xF3lidos a espesar","Solids to thicken",jt.totalSS_kgd,"kg SS/d",1,"C","primario + UASB + CL-201","primary + UASB + CL-201"),Lt("purge","Purga al 2 %","Purge at 2 %",jt.purge_m3d,"m\xB3/d",2,"C","SS / 20 kg/m\xB3","SS / 20 kg/m\xB3"),Lt("thk","Espesado al 5 %","Thickened at 5 %",jt.thick_m3d,"m\xB3/d",2,"C","SS / 50 kg/m\xB3","SS / 50 kg/m\xB3")],sludge:[Lt("cake","Torta al 25 %","Cake at 25 %",jt.cake_kgd,"kg/d",0,"C","SS / 0,25","SS / 0.25"),Lt("cakeV","Volumen de torta","Cake volume",jt.cake_m3d,"m\xB3/d",3,"C","densidad aparente 0,75 t/m\xB3 (brief)","apparent density 0.75 t/m\xB3 (brief)"),Lt("truck","Retiro con cami\xF3n de 6 m\xB3","6 m\xB3 truck pick-up",jt.truckDays,"d",0,"C","cada cu\xE1ntos d\xEDas","every N days")]};for(let i of["uasb1","uasb2","uasb3","uasb4"])jr[i]=[Lt("rem","Remoci\xF3n DQO","COD removal",ft.codRemUasb*100,"%",0,"S","UASB t\xEDpico con lixiviado","typical UASB on leachate"),Lt("vup","Velocidad ascensional","Upflow velocity",jt.uasbVup_mh,"m/h",2,"C","Q \xF7 4 / \xE1rea \xD8 2,0 m","Q \xF7 4 / \xD8 2.0 m area"),Lt("olr","Carga org\xE1nica (COV)","Organic loading (OLR)",jt.uasbOlr_kgm3d,"kg DQO/m\xB3\xB7d",1,"C","por d\xEDa de operaci\xF3n de 8 h","per 8 h operating day")];var G_={homog:{es:"Pretratamiento \xB7 ecualizaci\xF3n",en:"Pretreatment \xB7 equalization"},coag:{es:"Fisicoqu\xEDmico \xB7 coagulaci\xF3n",en:"Physicochemical \xB7 coagulation"},floc:{es:"Fisicoqu\xEDmico \xB7 floculaci\xF3n",en:"Physicochemical \xB7 flocculation"},clar1:{es:"Tratamiento primario \xB7 sedimentaci\xF3n",en:"Primary treatment \xB7 settling"},sludge:{es:"L\xEDnea de lodos \xB7 secado",en:"Sludge line \xB7 drying"},inter:{es:"Bombeo \xB7 pulm\xF3n de succi\xF3n",en:"Pumping \xB7 suction buffer"},pump:{es:"Bombeo a tren UASB",en:"Pumping to UASB train"},uasb1:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},uasb2:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},uasb3:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},uasb4:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},clar2:{es:"Clarificaci\xF3n secundaria",en:"Secondary clarification"},mbbr:{es:"Pulimento aerobio \xB7 biopel\xEDcula \xB7 aire: soplante B-301",en:"Aerobic polishing \xB7 biofilm \xB7 air: blower B-301"},filtro:{es:"Afinamiento final \xB7 lecho plantado",en:"Final polishing \xB7 planted bed"},discharge:{es:"Salida de efluente tratado",en:"Treated effluent outlet"},screen:{es:"Pretratamiento \xB7 cribado",en:"Pretreatment \xB7 screening"},dosC:{es:"Fisicoqu\xEDmico \xB7 dosificaci\xF3n",en:"Physicochemical \xB7 dosing"},dosF:{es:"Fisicoqu\xEDmico \xB7 dosificaci\xF3n de pol\xEDmero",en:"Physicochemical \xB7 polymer dosing"},pumpB:{es:"Bombeo \xB7 reserva",en:"Pumping \xB7 standby"},flare:{es:"Biog\xE1s \xB7 combusti\xF3n controlada",en:"Biogas \xB7 controlled combustion"},thick:{es:"L\xEDnea de lodos \xB7 espesamiento",en:"Sludge line \xB7 thickening"},control:{es:"Servicios \xB7 control y qu\xEDmicos",en:"Services \xB7 control and chemicals"}},W_=["sludge","thick","dosC","dosF","pumpB","flare","control"],Am=i=>i.startsWith("uasb");function Cm(i){return _c.find(e=>e.units.includes(i))?.id??null}function X_(i){return W_.includes(i)?null:Am(i)?Hs.perUasb_Ls:rn.flow_Ls}function q_(i,e){return i==null?Pe("not_applicable",e):i<1?`${xn(i*60,0,e)} min`:`${xn(i,1,e)} h`}var Sm=ji();function Y_(i,e,t,n){return`${xn(i,e,n)}${t?" "+t:""}`}function $_(i){let e=Le[i].volume;if(e!=null)return{v:e,cls:"B"};let t=Tm[i];return t!=null?{v:t,cls:"S"}:null}function Z_(i,e){return(jr[i]??[]).map(t=>({key:t.key,label:t.label[e],value:Y_(t.value,t.digits,t.unit,e),cls:t.cls,basis:t.basis[e]}))}function Im(i,e,t){if(!e)return null;let n=Le[e],s=!!i.units[e]?.active,o=X_(e),a;e==="pumpB"?a=Pe("flow_reserve",t):s?e==="sludge"||e==="thick"?a=`${Pe("flow_sludge",t)} \xB7 ${xn(Sm.totalSS_kgd,1,t)} kg SS/d (${Pe("cls_C",t)})`:e==="flare"?a=`${Pe("flow_flare",t)} \u2248 ${xn(Sm.biogas_m3h,1,t)} m\xB3/h (${Pe("cls_C",t)})`:e==="dosC"?a=`FeCl\u2083 ${xn(jr.dosC?.[0]?.value??0,0,t)} mg/L (${Pe("cls_S",t)})`:e==="dosF"?a=`${Pe("flow_poly",t)} ${xn(jr.dosF?.[0]?.value??0,1,t)} mg/L (${Pe("cls_S",t)})`:e==="control"?a=Pe("flow_control",t):Am(e)?a=`${xn(Hs.perUasb_Ls,2,t)} L/s \xB7 ${Pe("flow_uasb",t)}`:e==="pump"?a=`${Pe("flow_pump",t)} \xB7 ${xn(rn.flow_Ls,1,t)} L/s`:a=`${Pe("flow_on",t)} \xB7 ${xn(rn.flow_Ls,1,t)} L/s`:a=Pe("flow_off",t);let c=$_(e),l=o==null||!c?null:Ip(c.v,o),u=Cm(e),d=u?bh[u][t]:"\u2014";return{id:e,tag:n.tag,name:n.name[t],fn:n.fn[t],role:G_[e][t],stage:d,flowText:a,volumeText:c?`${xn(c.v,c.v<10&&c.cls==="S"?2:0,t)} m\xB3`:Pe("not_applicable",t),volumeCls:c?c.cls:null,hrtText:q_(l,t),hrtCls:l==null?null:"C",hrtNote:l==null||!c?"":`${xn(c.v,c.v<10&&c.cls==="S"?2:0,t)} m\xB3 / ${xn((o??0)*3.6,2,t)} m\xB3/h`,facts:Z_(e,t),active:s,tags:[{key:s?"active":"standby",text:Pe(s?"tag_active":e==="pumpB"?"tag_reserve":"tag_standby",t)},{key:"selected",text:Pe("tag_selected",t)},{key:"stage",text:d}]}}var Rm={away:"tk_away",enroute:"tk_enroute",bay:"tk_bay",unloading:"tk_unloading",loading:"tk_loading",leaving:"tk_leaving"};function Pm(i,e){let t=["uasb1","uasb2","uasb3","uasb4"].filter(o=>i.units[o].active).length,n=i.units.discharge.active,r=i.logistics,s=(i.pipes["p-clar1-thick"]?.front??0)>0;return{flow:`${xn(rn.flow_Ls,1,e)} L/s`,flowSub:`${xn(Hs.flow_m3h,1,e)} m\xB3/h \xB7 ${Pe("kpi_flow_sub",e)}`,ops:`${rn.hoursPerDay} ${Pe("kpi_ops_unit",e)}`,opsSub:`${xn(Hs.daily_m3,1,e)} m\xB3/d`,uasb:`${t}/${rn.uasbCount}`,uasbOn:t,uasbSub:Pe("kpi_uasb_sub",e),eff:Pe(n?"on":"wait",e),effOn:n,effSub:Pe(n?"eff_sub_on":"eff_sub_off",e),sludge:Pe(s?"on":"wait",e),sludgeOn:s,sludgeSub:Pe(s?"sludge_sub_on":"sludge_sub_off",e),health:Pe("kpi_health_val",e),healthSub:Pe("kpi_health_sub",e),staff:`${Pe("staff_on_site",e)}: ${r?.personnel??0}`,staffSub:r?`${Pe("truck_chem",e)}: ${Pe(Rm[r.trucks.chemical],e)} \xB7 ${Pe("truck_sludge",e)}: ${Pe(Rm[r.trucks.sludge],e)}`:"\u2014",trucksOn:!!r&&(r.trucks.chemical!=="away"||r.trucks.sludge!=="away"),lights:`${Pe("lights",e)}: ${Pe(i.lighting?.fixtures?"lights_on":"lights_off",e)}`,lightsOn:!!i.lighting?.fixtures}}function Lm(i,e){return gi.map((t,n)=>({id:t.id,name:bh[t.id][e],done:i.trackerDone[t.id],active:i.trackerIndex===n,progress:bm(n,i.t)}))}function km(i,e){let t=["uasb1","uasb2","uasb3","uasb4"];return{visible:(i.pipes["p-feed-uasb1"]?.front??0)>0,rows:t.map(r=>({id:r,label:Le[r].tag,pct:`${xn(100/rn.uasbCount,0,e)} %`,q:`${xn(Hs.perUasb_Ls,2,e)} L/s`,fill:i.pipes[`p-feed-${r}`]?.front??0}))}}var Wo=ji(),Xo=(i,e)=>{let t=mh[i];return t==null||!Number.isFinite(t)?0:Yt(e,t,t+1.6)};function Yo(i){let e=Xo("clar1",i),t=Xo("uasb1",i),n=Xo("mbbr",i),r=Xo("filtro",i),s=ft.codIn_mgL;s*=1-ft.codRemPhysChem*e,s*=1-ft.codRemUasb*t,s*=1-ft.codRemMbbr*n,s*=1-ft.codRemFilter*r;let o=100*(1-s/ft.codIn_mgL),a=Xo("discharge",i),c=ft.tssIn_mgL-(ft.tssIn_mgL-Wo.tssOut)*(.55*e+.2*t+.1*n+.15*r);return{codNow:s,removalPct:o,avoided_kgd:Wo.Q_m3d*(ft.codIn_mgL-s)/1e3,energy_kWhd:Wo.energy_kWhd*t,water_m3d:Wo.Q_m3d*a,tssNow:c,clean:o/Wo.codRemovalPct}}var qo=(i,e,t)=>{let n=i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return t==="es"?n.replace(/ /g," "):n};var Yc=class{constructor(e,t){this.visible=!1;this.root=O("div","panel compare",e),this.root.style.top=`${t}px`;let n=O("div","chd",this.root);this.cap=O("div","cap",n),this.delta=O("div","delta",n);let r=O("div","crow",this.root),s=()=>{let c=O("div","side",r),l=O("div","vial",c),u=O("i","",l),d=O("div","tx",c);return{fill:u,n:O("div","n",d),c:O("div","m",d),s:O("div","m",d)}},o=s();O("div","arrow",r,"\u2192");let a=s();this.fillA=o.fill,this.fillB=a.fill,this.a=o,this.b=a,this.foot=O("div","note",this.root)}update(e,t){this.visible=e.t>=37.5,$t(this.root,"display",this.visible?"block":"none"),this.visible&&this.fill(e,t)}forceUpdate(e,t){this.visible=!0,$t(this.root,"display","block"),this.fill(e,t)}fill(e,t){let n=e.t,r=Yo(n);me(this.cap,t==="es"?"Antes \xB7 Despu\xE9s":"Before \xB7 After"),me(this.delta,`\u2212${qo(r.removalPct,0,t)} % DQO`),me(this.a.n,t==="es"?"Lixiviado crudo":"Raw leachate"),me(this.a.c,`DQO ${qo(ft.codIn_mgL,0,t)} mg/L`),me(this.a.s,`SST ${qo(ft.tssIn_mgL,0,t)} mg/L`),me(this.b.n,t==="es"?"Efluente final":"Final effluent"),me(this.b.c,`DQO ${qo(r.codNow,0,t)} mg/L`),me(this.b.s,`SST ${qo(r.tssNow,0,t)} mg/L`),me(this.foot,t==="es"?"Entrada: S supuesto \xB7 salida: C c\xE1lculo":"Inlet: S assumed \xB7 outlet: C calculated"),$t(this.fillA,"background","linear-gradient(180deg,#a8692a,#6e3f15)");let s=Math.max(0,Math.min(1,r.clean)),o=(l,u)=>l.map((d,h)=>Math.round(d+(u[h]-d)*s)),a=o([168,105,42],[150,228,220]),c=o([110,63,21],[60,190,178]);$t(this.fillB,"background",`linear-gradient(180deg,rgb(${a}),rgb(${c}))`)}};var K_={plant:'<path d="M3 21h18"/><path d="M5 21V9l5 3V9l5 3V5h4v16"/>',process:'<circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/>',units:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',analysis:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',events:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',docs:'<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h8M8 11h6"/>',settings:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',play:'<path d="M7 4v16l13-8z"/>',pause:'<path d="M7 4h3v16H7zM14 4h3v16h-3z"/>',restart:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',overview:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',full:'<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>',hide:'<path d="M3 3l18 18"/><path d="M10.6 5.1A9.8 9.8 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6C3.9 8.4 2 12 2 12s4 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/>',show:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',close:'<path d="M6 6l12 12M18 6 6 18"/>',loop:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'};function Zs(i,e=18){return`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${K_[i]??""}</svg>`}function Vn(i,e,t,n,r){let s=O("button",`ib ${e}`,i);return s.type="button",s.innerHTML=Zs(t),s.setAttribute("aria-label",n),s.dataset.tip=n,s.onclick=r,s}var Um=()=>({view:"plant",ops:!0,inspector:!0,stages:!0,analysis:!1,events:!1,docs:!1,settings:!1,layers:!1,immersive:!1}),Ut=(i,e,t)=>i==="es"?e:t,Hm=[{id:"plant",es:"Planta",en:"Plant"},{id:"operation",es:"Operaci\xF3n",en:"Operation"},{id:"analysis",es:"An\xE1lisis",en:"Analysis"},{id:"scenarios",es:"Escenarios",en:"Scenarios",disabled:{es:"Sin escenarios definidos en este simulador",en:"No scenarios defined in this simulator"}},{id:"docs",es:"Documentaci\xF3n",en:"Documentation"}],$c=class{constructor(e,t,n,r,s){this.tabs=[];this.play=null;this.gear=null;this.root=O("header","hdr3",e);let o=O("div","brand",this.root);O("span","logo",o);let a=O("div","bt",o);O("div","bn",a,"PTL Buenaventura"),this.desc=O("div","bd",a),this.origin=O("span","origin3",this.root);let c=O("nav","tabs pe",this.root);c.setAttribute("role","tablist");for(let d of Hm){let h=O("button","tab",c);h.type="button",h.setAttribute("role","tab"),h.disabled=!!d.disabled||t,h.onclick=()=>n(d.id),this.tabs.push({id:d.id,b:h})}let l=O("div","hright",this.root);this.pill=O("div","pill Stable",l),O("i","",this.pill),this.pillT=O("span","",this.pill),this.pill.dataset.role="plant-state";let u=O("div","hclock",l);if(this.phase=O("span","ph",u),this.clock=O("span","mono",u),!t){let d=O("div","pe hbtns",l);this.play=Vn(d,"primary","play","Reproducir",()=>r.togglePlay()),this.gear=Vn(d,"","settings","Configuraci\xF3n",s)}}update(e,t,n,r){me(this.desc,Ut(r,"Agua Recuperada \xB7 planta de lixiviados","Recovered Water \xB7 leachate plant")),me(this.origin,Pe("origin",r));for(let s of this.tabs){let o=Hm.find(a=>a.id===s.id);me(s.b,o[r]),s.b.title=o.disabled?o.disabled[r]:"",Pt(s.b,"on",t.view===s.id),s.b.setAttribute("aria-selected",String(t.view===s.id))}if(this.pill.className=`pill ${e.plantState}`,me(this.pillT,Pe(`st_${e.plantState}`,r)),me(this.phase,e.phase==="idle"?Ut(r,"Inicio","Start"):`${Pe("phase",r)} ${e.phase}`),me(this.clock,`${_r(e.t)} / ${_r(e.duration)}`),this.play){let s=n.playing?"pause":"play";this.play.dataset.k!==s&&(this.play.dataset.k=s,this.play.innerHTML=Zs(s));let o=n.playing?Pe("pause",r):Pe("play",r);this.play.setAttribute("aria-label",o),this.play.dataset.tip=o}this.gear&&(Pt(this.gear,"on",t.settings),this.gear.dataset.tip=Ut(r,"Configuraci\xF3n","Settings"))}},Dm=[{k:"ops",icon:"plant",es:"Planta \xB7 panel de operaci\xF3n",en:"Plant \xB7 operation panel"},{k:"stages",icon:"process",es:"Proceso \xB7 etapas del timeline",en:"Process \xB7 timeline stages"},{k:"inspector",icon:"units",es:"Equipos \xB7 inspector",en:"Units \xB7 inspector"},{k:"analysis",icon:"analysis",es:"An\xE1lisis",en:"Analysis"},{k:"events",icon:"events",es:"Eventos",en:"Events"},{k:"docs",icon:"docs",es:"Documentaci\xF3n",en:"Documentation"},{k:"settings",icon:"settings",es:"Configuraci\xF3n",en:"Settings"}],Zc=class{constructor(e,t,n){this.btns=[];this.root=O("nav","rail3 pe",e),this.root.setAttribute("aria-label","Navegaci\xF3n");for(let r of Dm){r.k==="settings"&&O("div","sep",this.root);let s=Vn(this.root,"",r.icon,r.es,()=>n(r.k));s.disabled=t,this.btns.push({k:r.k,b:s})}}update(e,t){for(let{k:n,b:r}of this.btns){let s=Dm.find(a=>a.k===n);r.dataset.tip=s[t],r.setAttribute("aria-label",s[t]);let o=e[n];Pt(r,"on",o),r.setAttribute("aria-pressed",String(o))}}},Bm=(i,e,t)=>i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),Kc=class{constructor(e,t,n){this.caps=[];this.rows=[];this.tiles=[];this.root=O("aside","panel3 ops3",e);let r=O("div","p3hd",this.root);this.caps.push(O("div","p3t",r)),n||Vn(r,"sm pe","close","Ocultar panel",t);let s=h=>{let f=O("section","p3sec",this.root);return h>0&&this.caps.push(O("div","p3cap",f)),f},o=s(0),a=["kpi_flow","kpi_ops","kpi_uasb","kpi_eff","kpi_sludge"],c=(h,f)=>{let p=O("div","orow",h);p.dataset.kpi=f;let v=O("span","k",p),g=O("div","vw",p),m=O("span","v",g),b=O("span","b",g),y=O("div","s",p);this.rows.push({r:p,k:v,v:m,s:y,b})};for(let h of a)c(o,h);let l=s(1);for(let h of["kpi_health","kpi_staff","alarms"])c(l,h);let u=s(2),d=O("div","igrid3",u);for(let h=0;h<4;h++){let f=O("div","it3",d),p=O("div","k",f),v=O("div","vr",f);this.tiles.push({k:p,v:O("span","v",v),u:O("span","u",v)})}this.foot=O("div","p3foot",this.root)}update(e,t){let n=Pm(e,t);me(this.caps[0],Ut(t,"Operaci\xF3n en planta","Plant operation")),me(this.caps[1],Ut(t,"Estado general","General status")),me(this.caps[2],Ut(t,"Impacto \xB7 por d\xEDa de operaci\xF3n","Impact \xB7 per operating day"));let r=[[n.flow,n.flowSub,"B",e.plantState==="Active"?"ok":""],[n.ops,n.opsSub,"C",""],[n.uasb,n.uasbSub,"",n.uasbOn===4?"ok":n.uasbOn===0?"off":""],[n.eff,n.effSub,"",n.effOn?"ok":"off"],[n.sludge,n.sludgeSub,"",n.sludgeOn?"ok":"off"],[n.health,n.healthSub,"","ok"],[n.staff,n.staffSub,"",""],[String(e.alerts.filter(c=>c.level==="warn").length),Ut(t,"alarmas simuladas (no telemetr\xEDa)","simulated alarms (not telemetry)"),"","muted"]],s=["kpi_flow","kpi_ops","kpi_uasb","kpi_eff","kpi_sludge","kpi_health","kpi_staff"];this.rows.forEach((c,l)=>{let[u,d,h,f]=r[l];me(c.k,l<s.length?Pe(s[l],t):Ut(t,"Alarmas","Alarms")),me(c.v,u),me(c.s,d),me(c.b,h),c.b.className=h?`b cls ${h}`:"b",c.r.className=`orow ${f}`,s[l]==="kpi_staff"&&(c.b.dataset.role="lights",me(c.b,n.lights),c.b.className=`b chip3 ${n.lightsOn?"on":""}`)});let o=Yo(e.t),a=[[Ut(t,"Agua devuelta","Water returned"),o.water_m3d,1,"m\xB3/d"],[Ut(t,"DQO removida","COD removed"),o.removalPct,0,"%"],[Ut(t,"Carga evitada","Load avoided"),o.avoided_kgd,0,"kg DQO/d"],[Ut(t,"Energ\xEDa del biog\xE1s","Biogas energy"),o.energy_kWhd,0,"kWh/d"]];this.tiles.forEach((c,l)=>{let[u,d,h,f]=a[l];me(c.k,u),me(c.v,d>1e-6?Bm(d,h,t):"\u2014"),me(c.u,f)}),me(this.foot,Ut(t,"B brief \xB7 S supuesto \xB7 C c\xE1lculo. Valores estimados por el modelo, no mediciones.","B brief \xB7 S assumed \xB7 C calculated. Model estimates, not measurements."))}},Jc=class{constructor(e,t,n,r,s){this.root=O("div","tool3 pe",e),this.root.setAttribute("role","toolbar"),this.b={narr:Vn(this.root,"","reset","Restablecer vista (narrativa)",()=>t.setMode("narrative")),over:Vn(this.root,"","overview","Vista general",()=>t.setMode("overview")),layers:Vn(this.root,"","layers","Capas",r),full:Vn(this.root,"","full","Pantalla completa",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.()}),hide:Vn(this.root,"","hide","Ocultar interfaz",s)}}update(e,t,n){let r={narr:Ut(n,"Restablecer vista (narrativa)","Reset view (narrative)"),over:Ut(n,"Vista general","Overview"),layers:Ut(n,"Capas","Layers"),full:Ut(n,"Pantalla completa","Full screen"),hide:e.immersive?Ut(n,"Mostrar interfaz","Show interface"):Ut(n,"Ocultar interfaz (modo inmersivo)","Hide interface (immersive)")};for(let o of Object.keys(this.b))this.b[o].dataset.tip=r[o],this.b[o].setAttribute("aria-label",r[o]);Pt(this.b.narr,"on",t.mode==="narrative"),Pt(this.b.over,"on",t.mode==="overview"),Pt(this.b.layers,"on",e.layers);let s=e.immersive?"show":"hide";this.b.hide.dataset.k!==s&&(this.b.hide.dataset.k=s,this.b.hide.innerHTML=Zs(s)),Pt(this.b.hide,"on",e.immersive)}},$o=class{constructor(e,t,n){this.items=[];this.root=O("div",`pop3 pe ${t}`,e);for(let r of n){let s=O("button","pit",this.root);s.type="button",s.onclick=r.on,O("span","sw",s),O("span","tx",s),this.items.push({key:r.key,b:s})}}update(e,t){Pt(this.root,"open",e);for(let n of this.items){let[r,s]=t[n.key];me(n.b.lastChild,r),Pt(n.b,"on",s),n.b.setAttribute("aria-pressed",String(s))}}},Eh=["pipes","flow","sludge","labels","actors"],jc=class{constructor(e,t,n){this.play=null;this.range=null;this.speeds=[];this.loopB=null;this.steps=[];this.scrubbing=!1;this.root=O("div","panel3 tl3 tracker",e);let r=O("div","tlr1",this.root);t||(this.play=Vn(r,"primary pe","play","Reproducir",()=>n.togglePlay()),Vn(r,"pe","restart","Reiniciar",()=>n.seek(0))),this.name=O("div","tln",r),this.tm=O("div","tlt mono",r);let s=O("div","tlp",r);if(this.bar=O("i","",O("div","track",s)),!t){let o=O("input","pe",s);o.type="range",o.min="0",o.max="50",o.step="0.01",o.setAttribute("aria-label","Posici\xF3n en la secuencia"),o.oninput=()=>{this.scrubbing=!0,n.seek(parseFloat(o.value))},o.onchange=()=>{this.scrubbing=!1},this.range=o;let a=O("div","seg3 pe",r);for(let c of[.5,1,2]){let l=O("button","",a,`\xD7${c}`);l.type="button",l.dataset.speed=String(c),l.onclick=()=>n.setSpeed(c),this.speeds.push(l)}this.loopB=Vn(r,"pe","loop","Bucle",()=>n.toggleLoop())}this.idx=O("div","tli mono",r),this.stagesRow=O("div","tlr2",this.root),gi.forEach((o,a)=>{let c=O("button","stp",this.stagesRow);c.type="button",c.dataset.step=String(a),c.disabled=t,t||(c.classList.add("pe"),c.onclick=()=>n.seek(o.t0+.01));let l=O("span","nd",c,String(a+1)),u=O("span","lb",c),d=O("i","run",c);this.steps.push({r:c,nd:l,lb:u,run:d})})}update(e,t,n,r){me(this.name,Ut(r,"Recorrido del lixiviado \xB7 9 etapas","Leachate route \xB7 9 stages")),me(this.tm,`${_r(e.t)} / ${_r(e.duration)}`),$t(this.bar,"width",`${(100*e.t/e.duration).toFixed(2)}%`);let s=Lm(e,r),o=e.trackerIndex>=0?e.trackerIndex+1:s.filter(a=>a.done).length;if(me(this.idx,`${String(o).padStart(2,"0")} / 09`),this.play){let a=n.playing?"pause":"play";this.play.dataset.k!==a&&(this.play.dataset.k=a,this.play.innerHTML=Zs(a));let c=n.playing?Pe("pause",r):Pe("play",r);this.play.dataset.tip=c,this.play.setAttribute("aria-label",c)}this.range&&!this.scrubbing&&(this.range.value=e.t.toFixed(2));for(let a of this.speeds)Pt(a,"on",parseFloat(a.dataset.speed)===n.speed);this.loopB&&(Pt(this.loopB,"on",n.loop),this.loopB.dataset.tip=Ut(r,"Bucle","Loop")),Pt(this.root,"compact",!t.stages),s.forEach((a,c)=>{let l=this.steps[c];Pt(l.r,"done",a.done),Pt(l.r,"active",a.active),me(l.lb,a.name);let u=gi[c].id,d=Object.entries(e.units).some(([h,f])=>f?.active&&Le[h]?.stage===u);Pt(l.run,"on",d),l.r.title=`${a.name}${d?Ut(r," \xB7 equipos en funcionamiento"," \xB7 units running"):""}`})}},Qc=class{constructor(e,t){this.n=-1;this.lang=null;this.root=O("aside","panel3 ev3 events",e);let n=O("div","p3hd",this.root);this.cap=O("div","p3t",n),this.count=O("span","cnt mono",n),Vn(n,"sm pe","close","Cerrar",t);let r=O("div","evh",this.root);for(let s of["t","Evento","Sev.","Origen"])O("span","",r,s);this.list=O("div","evl pe",this.root),this.foot=O("div","p3foot",this.root)}update(e,t){if(me(this.cap,Ut(t,"Registro de eventos","Event log")),me(this.count,String(e.alerts.length)),me(this.foot,Ut(t,"Eventos de la simulaci\xF3n did\xE1ctica: no son telemetr\xEDa real.","Didactic simulation events: not real telemetry.")),!(e.alerts.length===this.n&&t===this.lang)){this.n=e.alerts.length,this.lang=t,this.list.textContent="";for(let n of[...e.alerts].reverse()){let r=O("div",`evr ${n.level}`,this.list);O("span","mono",r,_r(n.t)),O("span","tx",r,n.text[t]),O("span",`sev ${n.level}`,r,n.level==="warn"?Ut(t,"Aviso","Warn"):n.level==="notice"?Ut(t,"Nota","Notice"):"Info"),O("span","src",r,Ut(t,"Simulado","Simulated"))}}}},el=class{constructor(e,t){this.lang=null;this.root=O("aside","panel3 docs3 pe",e);let n=O("div","p3hd",this.root);this.cap=O("div","p3t",n),Vn(n,"sm","close","Cerrar",t),this.body=O("div","dbody",this.root)}update(e){if(e===this.lang)return;this.lang=e,me(this.cap,Ut(e,"Documentaci\xF3n \xB7 procedencia de datos","Documentation \xB7 data provenance"));let t=this.body;t.textContent="",O("p","lead",t,Ut(e,"Simulaci\xF3n did\xE1ctica de una planta de lixiviados de 1 L/s (8 h/d\xEDa). Ning\xFAn valor proviene de documentos oficiales ni de telemetr\xEDa; cada cifra indica su clase.","Didactic simulation of a 1 L/s leachate plant (8 h/day). No value comes from official documents or telemetry; every figure states its class."));let n=O("div","clsrow",t);for(let[s,o,a]of[["B","Brief: dato dado por el planteamiento","Brief: given by the brief"],["S","Supuesto editable (assumptions.ts)","Editable assumption (assumptions.ts)"],["C","C\xE1lculo a partir de B y S","Calculated from B and S"]]){let c=O("div","ci",n);O("span",`cls ${s}`,c,s),O("span","",c,Ut(e,o,a))}let r=O("div","dtbl",t);for(let[s,o]of Object.entries(jr)){if(!o.length||s.startsWith("uasb")&&s!=="uasb1")continue;let a=Le[s];O("div","dh",r,`${a.tag} \xB7 ${a.name[e]}${s==="uasb1"?" (\xD74)":""}`);for(let c of o){let l=O("div","dr",r);O("span","dl",l,c.label[e]),O("span","dv mono",l,`${Bm(c.value,c.digits,e)} ${c.unit}`),O("span",`cls ${c.cls}`,l,c.cls),O("span","db",l,c.basis[e])}}}};var tl=class{constructor(e,t=!1,n=()=>{}){this.film=t;this.factsKey="";this.tabs=[];this.lastKey="";this.tab="general";this.shown=null;this.root=O("aside","detail insp3",e),this.root.dataset.role="detail";let r=O("div","hdr",this.root),s=O("div","ht",r);this.nm=O("div","nm",s),this.nm.dataset.role="detail-name";let o=O("div","tagline",s);if(this.tagid=O("span","tagid mono",o),this.tagid.dataset.role="detail-tag",this.chips=O("div","chips",o),!t){let m=O("button","ib sm pe",r);m.type="button",m.innerHTML=Zs("close"),m.setAttribute("aria-label","Cerrar inspector"),m.dataset.tip="Cerrar",m.onclick=n}let a=O("div","thumb",this.root);this.ph=O("div","ph",a),this.tabsEl=O("div","itabs pe",this.root),this.tabsEl.setAttribute("role","tablist");for(let m of["general","design","operation"]){let b=O("button","itab",this.tabsEl);b.type="button",b.setAttribute("role","tab"),b.onclick=()=>{this.tab=m},this.tabs.push({k:m,b})}this.body=O("div","body",this.root),this.empty=O("div","empty",this.body),this.filled=O("div","",this.body);let c=O("section","isec",this.filled),l=O("div","kv",c);this.kFn=O("div","k",l),this.fn=O("div","v",l),this.kFlow=O("div","k",l),this.flow=O("div","v big",l),this.kRole=O("div","k",l),this.role=O("div","v",l);let u=O("div","kv2",c),d=O("div","",u),h=O("div","",u);this.kVol=O("div","cap",d);let f=O("div","vrow",d);this.vol=O("span","v",f),this.volB=O("span","cls",f),this.kHrt=O("div","cap",h);let p=O("div","vrow",h);this.hrt=O("span","v",p),this.hrtB=O("span","cls",p);let v=O("section","isec facts",this.filled);this.factsCap=O("div","k",v),this.factsGrid=O("div","fgrid",v),this.dims=O("div","dims",v);let g=O("section","isec",this.filled);this.opGrid=O("div","opg",g),this.opEv=O("div","opev",g),this.secs={general:c,design:v,operation:g},this.foot=O("div","foot",this.root)}update(e,t,n){let r=Im(e,t,n);this.shown=r?r.id:null;let s=n==="es";$t(this.ph,"display",r?"none":"flex"),me(this.ph,Pe("none_selected",n)),$t(this.empty,"display",r?"none":"block"),$t(this.filled,"display",r?"block":"none"),me(this.empty,Pe("hint_click",n)),me(this.foot,Pe("cls_legend",n));let o={general:"General",design:s?"Dise\xF1o":"Design",operation:s?"Operaci\xF3n":"Operation"};for(let h of this.tabs)me(h.b,o[h.k]),Pt(h.b,"on",this.tab===h.k),h.b.setAttribute("aria-selected",String(this.tab===h.k));$t(this.tabsEl,"display",this.film||!r?"none":"flex");for(let h of Object.keys(this.secs))$t(this.secs[h],"display",this.film?h==="operation"?"none":"block":this.tab===h?"block":"none");if(!r){me(this.nm,Pe("detail",n)),me(this.tagid,"\u2014"),this.chips.textContent="",this.lastKey="";return}this.root.dataset.unit=r.id,me(this.nm,r.name),me(this.tagid,r.tag);let a=`${r.id}|${n}|${r.active}`;if(a!==this.lastKey){this.lastKey=a,this.chips.textContent="";for(let h of r.tags.filter(f=>f.key==="active"||f.key==="standby"))O("span",`chip ${h.key}`,this.chips,h.text)}me(this.kFn,Pe("d_function",n)),me(this.fn,r.fn),me(this.kFlow,Pe("d_flow",n)),me(this.flow,r.flowText),me(this.kRole,Pe("d_role",n)),me(this.role,r.role),me(this.kVol,Pe("d_volume",n)),me(this.vol,r.volumeText),me(this.kHrt,Pe("d_hrt",n)),me(this.hrt,r.hrtText),Pt(this.vol,"nd",r.volumeCls==null),Pt(this.hrt,"nd",r.hrtCls==null),Nm(this.volB,r.volumeCls,n),Nm(this.hrtB,r.hrtCls,n),this.hrt.title=r.hrtNote;let c=`${r.id}|${n}`;if(c!==this.factsKey){this.factsKey=c,this.factsGrid.textContent="",Pt(this.factsGrid,"two",r.facts.length>=3);for(let p of r.facts){let v=O("div","fr",this.factsGrid);v.dataset.fact=p.key,v.title=`${p.cls} \xB7 ${Pe(`cls_${p.cls}`,n)}: ${p.basis}`,O("div","fl",v,p.label);let g=O("div","fv",v);O("span","",g,p.value);let m=O("span",`cls ${p.cls}`,g,p.cls);m.title=p.basis}r.facts.length||O("div","nodata",this.factsGrid,s?"Sin par\xE1metros adicionales declarados.":"No additional parameters declared.");let h=Le[r.id].size,f=h.d!=null?[`\xD8 ${h.d} m`,`h ${h.h} m`]:[`${h.w} \xD7 ${h.l} m`,`h ${h.h} m`];this.dims.innerHTML="",O("span","k",this.dims,s?"Dimensiones del modelo":"Model dimensions"),O("span","v mono",this.dims,f.join(" \xB7 ")),O("span","cls S",this.dims,"S")}me(this.factsCap,Pe("d_facts",n));let l=e.units[r.id],u=h=>`${Math.round(100*(h??0))} %`,d=`${r.id}|${n}|${l?.status}|${u(l?.flow)}|${u(l?.motion)}|${e.alerts.length}`;if(this.opGrid.dataset.k!==d){this.opGrid.dataset.k=d,this.opGrid.textContent="";let h=(p,v)=>{let g=O("div","or",this.opGrid);O("span","k",g,p),O("span","v",g,v)};h(s?"Estado":"Status",r.active?s?"En funcionamiento":"Running":s?"En espera":"Standby"),h(s?"Nivel de flujo (simulado)":"Flow level (simulated)",u(l?.flow)),h(s?"Actividad interna (simulada)":"Internal activity (simulated)",u(l?.motion)),this.opEv.textContent="",O("div","k",this.opEv,s?"Eventos asociados":"Related events");let f=e.alerts.filter(p=>p.text.es.includes(r.tag)).slice(-4).reverse();f.length||O("div","nodata",this.opEv,s?"Sin eventos de esta unidad hasta ahora.":"No events for this unit so far.");for(let p of f){let v=O("div","oe",this.opEv);O("span","mono",v,_r(p.t)),O("span","",v,p.text[n])}}}};function Nm(i,e,t){$t(i,"display",e?"":"none"),e&&(me(i,e),i.className=`cls ${e}`,i.title=Pe(`cls_${e}`,t))}var nl=class{constructor(e,t){this.rows=[];this.root=O("div","panel split",e),this.root.style.top=`${t}px`,this.cap=O("div","cap",this.root);let n=O("div","rows",this.root);for(let r=0;r<4;r++){let s=O("div","r",n),o=O("span","l",s),a=O("div","bar",s),c=O("i","",a),l=O("span","p",s),u=O("span","q",s);this.rows.push({l:o,bar:c,p:l,q:u})}this.noteEl=O("div","note",this.root)}update(e,t){let n=km(e,t);$t(this.root,"display",n.visible?"block":"none"),n.visible&&(me(this.cap,Pe("split",t)),me(this.noteEl,`\u03A3 1,00 L/s \xB7 ${Pe("split_note",t)}`.replace("1,00",t==="es"?"1,00":"1.00")),n.rows.forEach((r,s)=>{let o=this.rows[s];me(o.l,r.label),$t(o.bar,"width",`${(r.fill*25).toFixed(2)}%`),me(o.p,r.pct),me(o.q,r.q)}))}};var Zo="http://www.w3.org/2000/svg",Ci=26,Ks=32,il=18;var zm=["uasb1","uasb2","uasb3","uasb4"],Fm={homog:"homog",coag:"coag",floc:"floc",clar1:"clar1",uasb:"uasb-group",clar2:"clar2",mbbr:"mbbr",filtro:"filtro",discharge:"discharge"},Mh={"uasb-group":{t:"R-201\u2026R-204",n:{es:"UASB \xD74 en paralelo",en:"UASB \xD74 in parallel"}},landfill:{t:"Origen \xB7 supuesto",n:{es:"Vertedero \xB7 lluvia",en:"Landfill \xB7 rain"}},pond:{t:"Lixiviado",n:{es:"Laguna de lixiviados",en:"Leachate pond"}},wetland:{t:"Agua recuperada",n:{es:"Humedal receptor",en:"Receiving wetland"}}},J_=i=>i in Mh,j_=[{id:"landfill",t0:0,t1:1.6},{id:"pond",t0:1.6,t1:gi[0].t0},{id:"wetland",t0:44,t1:1/0}],Ii=ji(),_n=(i,e,t)=>i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),Q_={"uasb-group":[{unit:"uasb2",key:"tGas",text:i=>i==="es"?`Biog\xE1s \u2192 antorcha \xB7 ${_n(Ii.biogas_m3h,1,i)} m\xB3/h \xB7 C`:`Biogas \u2192 flare \xB7 ${_n(Ii.biogas_m3h,1,i)} m\xB3/h \xB7 C`},{unit:"uasb2",key:"tGls",text:i=>i==="es"?`Separador trif\xE1sico gas\xB7l\xEDquido\xB7s\xF3lido \xB7 ${ft.uasbSepAngle_deg}\xB0 \xB7 S`:`Three-phase separator \xB7 ${ft.uasbSepAngle_deg}\xB0 \xB7 S`},{unit:"uasb2",key:"tBlanket",text:i=>i==="es"?`Manto de lodo \xB7 ascenso ${_n(Ii.uasbVup_mh,2,i)} m/h \xB7 C`:`Sludge blanket \xB7 upflow ${_n(Ii.uasbVup_mh,2,i)} m/h \xB7 C`},{unit:"uasb2",key:"tBed",text:i=>i==="es"?`Lecho granular \xB7 COV ${_n(Ii.uasbOlr_kgm3d,1,i)} kg DQO/m\xB3\xB7d \xB7 C`:`Granular bed \xB7 OLR ${_n(Ii.uasbOlr_kgm3d,1,i)} kg COD/m\xB3\xB7d \xB7 C`}],mbbr:[{unit:"mbbr",key:"tMedia",text:i=>i==="es"?`Soportes PEAD \xB7 llenado ${_n(ft.mbbrFill*100,0,i)} % \xB7 ${_n(Ii.mbbrArea_m2,0,i)} m\xB2 \xB7 S/C`:`HDPE carriers \xB7 ${_n(ft.mbbrFill*100,0,i)} % fill \xB7 ${_n(Ii.mbbrArea_m2,0,i)} m\xB2 \xB7 S/C`},{unit:"mbbr",key:"tAir",text:i=>i==="es"?`Difusores de fondo \xB7 ${_n(Ii.air_m3h,0,i)} Nm\xB3/h \xB7 C`:`Bottom diffusers \xB7 ${_n(Ii.air_m3h,0,i)} Nm\xB3/h \xB7 C`},{unit:"mbbr",key:"tBlower",text:i=>i==="es"?`Soplante B-301 \xB7 ${_n(ft.blowerPressure_bar,2,i)} bar \xB7 ${_n(ft.blowerMotor_kW,1,i)} kW \xB7 S`:`Blower B-301 \xB7 ${_n(ft.blowerPressure_bar,2,i)} bar \xB7 ${_n(ft.blowerMotor_kW,1,i)} kW \xB7 S`},{unit:"mbbr",key:"tDo",text:i=>i==="es"?`Sonda OD \xB7 consigna ${_n(ft.doSet_mgL,1,i)} mg/L \xB7 S`:`DO probe \xB7 setpoint ${_n(ft.doSet_mgL,1,i)} mg/L \xB7 S`},{unit:"mbbr",key:"tScreen",text:i=>i==="es"?"Tamiz de retenci\xF3n de soportes":"Carrier retention screen"}]},_h=18,rl=class{constructor(e){this.focus=new Map;this.markers=[];this.notes=new Map;this.v=new x;this.visible=!0;this.lastRects=[];this.root=O("div","labels",e),this.svg=document.createElementNS(Zo,"svg"),this.svg.setAttribute("viewBox","0 0 1920 1080"),this.root.appendChild(this.svg),gi.forEach((t,n)=>{let r=Fm[t.id],s=O("div","mk",this.root,String(n+1));s.dataset.unit=r,this.markers.push({id:r,stageIdx:n,div:s})})}focusItem(e){let t=this.focus.get(e);if(t)return t;let n=O("div","lbl",this.root);n.dataset.unit=e;let r=O("div","t",n),s=O("div","n",n),o=document.createElementNS(Zo,"line");o.setAttribute("stroke","rgba(31,45,90,0.55)"),o.setAttribute("stroke-width","1.2");let a=document.createElementNS(Zo,"circle");return a.setAttribute("r","3.2"),a.setAttribute("fill","#2f5bea"),a.setAttribute("stroke","#fff"),a.setAttribute("stroke-width","1.5"),this.svg.append(o,a),t={id:e,div:n,t:r,n:s,stem:o,dot:a,w:0,wLang:null},this.focus.set(e,t),t}anchorOf(e,t){if(t==="uasb-group"){let n=zm.map(r=>e.units[r]?.anchors.label).filter(r=>!!r);return n.length?n.reduce((r,s)=>r.add(s),new x).multiplyScalar(1/n.length).add(new x(0,.4,0)):void 0}return t==="landfill"||t==="pond"?e.landfill?.anchors[t]:t==="wetland"?e.wetland?.anchor:e.units[t]?.anchors.label}project(e,t){return!e||(this.v.copy(e).project(t),!(this.v.z<1&&this.v.z>-1))?null:[(this.v.x*.5+.5)*1920,(-this.v.y*.5+.5)*1080]}focusIds(e,t){let n=[],r=j_.find(s=>e.t>=s.t0&&e.t<s.t1);return r?n.push(r.id):e.trackerIndex>=0&&n.push(Fm[gi[e.trackerIndex].id]),t&&!n.length&&n.push(t),n}update(e,t,n,r,s,o=[],a=[]){if(this.lastRects=[],this.root.style.display=this.visible?"block":"none",!this.visible)return;let c=Ue.safe,l=[...o],u=v=>v.x0>=c.x0&&v.x1<=c.x1&&v.y0>=c.y0&&v.y1<=c.y1,d=(v,g)=>u(v)&&!l.some(m=>e2(m,v,g)),h=this.focusIds(n,r);for(let v of this.focus.values())h.includes(v.id)||this.hideFocus(v);let f=new Set;for(let v of h){let g=this.focusItem(v);g.wLang!==s&&(J_(v)?(me(g.t,Mh[v].t),me(g.n,Mh[v].n[s])):(me(g.t,Le[v].tag),me(g.n,Mm[v]?.[s]??Le[v].name[s])),g.div.style.display="block",g.w=Math.ceil(g.div.offsetWidth)||140,g.wLang=s);let m=this.project(this.anchorOf(e,v),t),b=!1,y=0,_=0,R=0,S=0;if(m&&m[0]>=c.x0&&m[0]<=c.x1&&m[1]>=c.y0&&m[1]<=c.y1){let[P,L]=m,w=g.w,T=[[P-w/2,L-Ci-Ks,P,L-Ci],[P-w/2,L-Ci*2-Ks,P,L-Ci*2],[P+14,L-Ci-Ks+6,P+14,L-Ci+6],[P-w-14,L-Ci-Ks+6,P-14,L-Ci+6],[P-w/2,L+Ci,P,L+Ci]];for(let[H,N,U,z]of T){let I={x0:H,y0:N,x1:H+w,y1:N+Ks};if(d(I,6)){y=H,_=N,R=U,S=z,b=!0,l.push(I);break}}b&&(g.div.style.transform=`translate(${y.toFixed(1)}px, ${_.toFixed(1)}px)`,g.stem.setAttribute("x1",P.toFixed(1)),g.stem.setAttribute("y1",L.toFixed(1)),g.stem.setAttribute("x2",R.toFixed(1)),g.stem.setAttribute("y2",S.toFixed(1)),g.dot.setAttribute("cx",P.toFixed(1)),g.dot.setAttribute("cy",L.toFixed(1)),l.push({x0:P-6,y0:L-6,x1:P+6,y1:L+6}),this.lastRects.push({id:v,x0:y,y0:_,x1:y+w,y1:_+Ks}),f.add(v))}g.div.style.display=b?"block":"none",g.stem.style.display=b?"":"none",g.dot.style.display=b?"":"none"}let p=new Set;for(let v of f)for(let g of Q_[v]??[]){let m=`${g.unit}:${g.key}`,b=this.notes.get(m);if(!b){let L=O("div","note3",this.root),w=document.createElementNS(Zo,"line");w.setAttribute("stroke","rgba(31,45,90,0.45)"),w.setAttribute("stroke-width","1");let T=document.createElementNS(Zo,"circle");T.setAttribute("r","2.4"),T.setAttribute("fill","#fff"),T.setAttribute("stroke","#2f5bea"),T.setAttribute("stroke-width","1.4"),this.svg.append(w,T),b={div:L,stem:w,dot:T,w:0,lang:null},this.notes.set(m,b)}b.lang!==s&&(me(b.div,g.text(s)),b.div.style.display="block",b.w=Math.ceil(b.div.offsetWidth)||180,b.lang=s);let y=this.project(e.units[g.unit]?.anchors[g.key],t);if(!y)continue;let[_,R]=y,S=b.w,P=[[_+34,R-30],[_-34-S,R-30],[_+34,R+12],[_-34-S,R+12],[_+44,R-9],[_-44-S,R-9]];for(let[L,w]of P){let T={x0:L,y0:w,x1:L+S,y1:w+_h};if(!d(T,4))continue;l.push(T,{x0:_-4,y0:R-4,x1:_+4,y1:R+4}),b.div.style.transform=`translate(${L.toFixed(1)}px, ${w.toFixed(1)}px)`;let H=L>_?L:L+S;b.stem.setAttribute("x1",_.toFixed(1)),b.stem.setAttribute("y1",R.toFixed(1)),b.stem.setAttribute("x2",H.toFixed(1)),b.stem.setAttribute("y2",(w+_h/2).toFixed(1)),b.dot.setAttribute("cx",_.toFixed(1)),b.dot.setAttribute("cy",R.toFixed(1)),this.lastRects.push({id:v,x0:L,y0:w,x1:L+S,y1:w+_h}),p.add(m);break}}for(let[v,g]of this.notes){let m=p.has(v);g.div.style.display=m?"block":"none",g.stem.style.display=m?"":"none",g.dot.style.display=m?"":"none"}for(let v of this.markers){let g=!1;if(!f.has(v.id)&&!(v.id==="uasb-group"&&r&&zm.includes(r)&&f.has(r))){let m=this.project(this.anchorOf(e,v.id),t);if(m){let b={x0:m[0]-il/2,y0:m[1]-il/2,x1:m[0]+il/2,y1:m[1]+il/2};if(d(b,3)){g=!0,l.push(b),v.div.style.transform=`translate(${b.x0.toFixed(1)}px, ${b.y0.toFixed(1)}px)`;let y=v.id==="uasb-group"?"uasb1":v.id;Pt(v.div,"on",!!n.units[y]?.active)}}}v.div.style.display=g?"block":"none"}}hideFocus(e){e.div.style.display="none",e.stem.style.display="none",e.dot.style.display="none"}};function e2(i,e,t){return i.x0<e.x1+t&&e.x0<i.x1+t&&i.y0<e.y1+t&&e.y0<i.y1+t}var sl=class{constructor(e,t,n){this.film=t;this.ui=Um();this.thumbVisible=!1;this.v=new x;this.lastSel=null;this.ctxToggles=null;this.lang="es";this.lightName="";if(!document.getElementById("ptl-css")){let h=document.createElement("style");h.id="ptl-css",h.textContent=wm,document.head.appendChild(h)}this.root=O("div","ov v3",e),this.labels=new rl(this.root);let r=this.ui;this.header=new $c(this.root,t,h=>this.setView(h),n,()=>{r.settings=!r.settings,r.layers=!1}),this.rail=new Zc(this.root,t,h=>{if(h==="settings"){r.settings=!r.settings,r.layers=!1;return}r[h]=!r[h],h==="docs"&&!r.docs&&r.view==="docs"&&(r.view="plant")}),this.ops=new Kc(this.root,()=>{r.ops=!1},t),this.events=new Qc(this.root,()=>{r.events=!1}),this.detail=new tl(this.root,t,()=>{r.inspector=!1}),this.split=new nl(this.root,788),this.compare=new Yc(this.root,788),this.docs=new el(this.root,()=>{r.docs=!1,r.view==="docs"&&(r.view="plant")});let s=O("div","caption",this.root),o=O("span","",s),a=O("b","",o),c=O("span","",o);c.style.cssText="background:none;border:none;padding:0",this.caption={wrap:s,b:a,s:c},this.tool=t?null:new Jc(this.root,n,()=>r,()=>{r.layers=!r.layers,r.settings=!1},()=>this.setImmersive(!r.immersive)),this.layersPop=new $o(this.root,"layers",Eh.map(h=>({key:h,on:()=>n.toggle(h)}))),this.settingsPop=new $o(this.root,"settings",[{key:"lang",on:()=>n.setLang(this.lang==="es"?"en":"es")},{key:"light",on:()=>n.cycleLight()}]),this.timeline=new jc(this.root,t,n),t||window.addEventListener("keydown",h=>{let f=h.target;f?.tagName==="INPUT"&&f.type!=="range"||f?.tagName==="BUTTON"&&(h.code==="Space"||h.code==="Enter")||(h.code==="Space"?(h.preventDefault(),n.togglePlay()):h.code==="ArrowLeft"?(h.preventDefault(),n.step(-1)):h.code==="ArrowRight"?(h.preventDefault(),n.step(1)):h.code==="KeyL"?n.toggle("labels"):h.code==="KeyP"?n.toggle("pipes"):h.code==="KeyF"?n.toggle("flow"):h.code==="KeyV"?n.toggle("actors"):h.code==="KeyN"?n.cycleLight():h.code==="KeyI"?this.setImmersive(!r.immersive):h.code==="Escape"&&(r.layers||r.settings?(r.layers=!1,r.settings=!1):r.immersive?this.setImmersive(!1):r.docs&&(r.docs=!1,r.view="plant")))});let l=O("div","cursor",this.root),u=O("div","rip",l),d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width","22"),d.setAttribute("height","26"),d.setAttribute("viewBox","0 0 22 26"),d.innerHTML='<path d="M2 1.5 L2 20 L7 15.5 L10.5 23.5 L13.8 22 L10.4 14.3 L17 14 Z" fill="#243443" stroke="#ffffff" stroke-width="1.3" stroke-linejoin="round"/>',l.appendChild(d),this.cursor={root:l,arrow:d,rip:u}}setView(e){let t=this.ui;e!=="scenarios"&&(t.view=e,t.immersive=!1,e==="plant"?Object.assign(t,{ops:!0,events:!1,analysis:!1,docs:!1}):e==="operation"?Object.assign(t,{ops:!0,events:!0,analysis:!1,docs:!1}):e==="analysis"?Object.assign(t,{ops:!0,events:!1,analysis:!0,docs:!1}):e==="docs"&&Object.assign(t,{docs:!0,events:!1}))}setImmersive(e){this.ui.immersive=e,this.ui.layers=!1,this.ui.settings=!1}setScale(e){this.root.style.transform=`scale(${e})`}update(e,t,n,r){let{lang:s}=t,o=this.ui;this.lang=s,this.ctxToggles=t.toggles;let a={...t.controls,mode:t.mode};t.selected&&t.selected!==this.lastSel&&(o.inspector=!0),this.lastSel=t.selected;let c=o.immersive;Pt(this.root,"immersive",c),this.header.update(e,o,a,s),this.rail.update(o,s),this.tool?.update(o,a,s),Pt(this.ops.root,"closed",c||!o.ops),this.ops.update(e,s),Pt(this.events.root,"closed",c||!o.events),o.events&&!c&&this.events.update(e,s),Pt(this.docs.root,"closed",c||!o.docs),o.docs&&this.docs.update(s);let l=!c&&o.inspector&&!!t.selected;this.thumbVisible=l,Pt(this.detail.root,"closed",!l),this.detail.update(e,t.selected,s),this.split.update(e,s),this.compare.update(e,s),o.analysis&&!this.compare.visible&&this.compare.forceUpdate(e,s),this.compare.visible&&$t(this.split.root,"display","none"),Pt(this.split.root,"closed",c),Pt(this.compare.root,"closed",c);let u=e.lighting?.mode??"day";this.lightName=Pe(`light_${u}`,s);let d=this.ctxToggles,h=f=>Pe(`tg_${f}`,s);this.layersPop.update(o.layers&&!this.film,Object.fromEntries(Eh.map(f=>[f,[h(f),d[f]]]))),this.settingsPop.update(o.settings&&!this.film,{lang:[s==="es"?"Idioma: Espa\xF1ol \xB7 cambiar a English":"Language: English \xB7 switch to Espa\xF1ol",!0],light:[`${Pe("tg_light",s)}: ${this.lightName}`,u!=="day"]}),e.caption&&!c?($t(this.caption.wrap,"display","flex"),me(this.caption.b,e.phase==="idle"?s==="es"?"Inicio":"Start":`${Pe("phase",s)} ${e.phase}`),me(this.caption.s,e.caption[s])):$t(this.caption.wrap,"display","none"),this.timeline.update(e,c?{...o,stages:!1}:o,a,s),this.labels.visible=t.toggles.labels,this.labels.update(n,r,e,t.selected,s,t.obstacles,t.trucks),this.updateCursor(e,t,n,r)}screenOf(e,t,n){let r=e.units[t]?.anchors.focus??e.units[t]?.anchors.label;return r?(this.v.copy(r).project(n),[(this.v.x*.5+.5)*1920,(-this.v.y*.5+.5)*1080]):[1460,760]}updateCursor(e,t,n,r){let s=e.cursor,o=s.visible&&(t.mode==="narrative"||t.mode==="film")&&s.unitId!==null;if($t(this.cursor.root,"display",o?"block":"none"),!o||!s.unitId)return;let a=this.screenOf(n,s.unitId,r),c=s.fromUnitId?this.screenOf(n,s.fromUnitId,r):[1470,780],l=s.travel,u=c[0]+(a[0]-c[0])*l,d=c[1]+(a[1]-c[1])*l-Math.sin(Math.PI*l)*40;this.cursor.root.style.transform=`translate(${u.toFixed(1)}px, ${d.toFixed(1)}px)`,this.cursor.arrow.style.transform=`scale(${(1-.12*s.press).toFixed(3)})`;let h=-1;for(let f of qs)e.t>=f.t&&e.t<f.t+.7&&(h=Er(e.t,f.t,f.t+.7));if(h>=0){let f=6+24*h;$t(this.cursor.rip,"display","block"),this.cursor.rip.style.cssText=`display:block;left:${(-f).toFixed(1)}px;top:${(-f).toFixed(1)}px;width:${(2*f).toFixed(1)}px;height:${(2*f).toFixed(1)}px;opacity:${(1-h).toFixed(3)}`}else $t(this.cursor.rip,"display","none")}};var wh=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Om(i){let e={duration:i.duration,fps:i.fps,ready:(async()=>{i.renderFrame(0),await wh(),await wh()})(),async renderFrame(t){i.renderFrame(t),await wh()}};return window.__film=e,e}var Qi=[{from:0,to:4.4,kicker:{es:"1 \xB7 Origen",en:"1 \xB7 Source"},title:{es:"La lluvia atraviesa el vertedero y se vuelve lixiviado",en:"Rain seeps through the landfill and becomes leachate"}},{from:10.6,to:14.4,kicker:{es:"2 \xB7 Tratamiento",en:"2 \xB7 Treatment"},title:{es:"La planta lo recibe, lo clarifica y separa los lodos",en:"The plant receives it, clarifies it and removes sludge"}},{from:24.2,to:28.2,kicker:{es:"3 \xB7 Energ\xEDa",en:"3 \xB7 Energy"},title:{es:"Cuatro reactores UASB lo digieren y producen biog\xE1s",en:"Four UASB reactors digest it and produce biogas"}},{from:43.6,to:50,kicker:{es:"4 \xB7 Agua recuperada",en:"4 \xB7 Recovered water"},title:{es:"El agua tratada vuelve a un humedal lleno de vida",en:"Treated water returns to a living wetland"}}],ol=Qi.reduce((i,e)=>i+(e.to-e.from),0),Th=ol-3.2;function al(i){let e=0,t=Math.max(0,Math.min(ol-1e-6,i));for(let r=0;r<Qi.length;r++){let s=Qi[r],o=s.to-s.from;if(t<e+o)return{t:s.from+(t-e),seg:r,local:t-e};e+=o}let n=Qi[Qi.length-1];return{t:n.to,seg:Qi.length-1,local:n.to-n.from}}var cl=ji(),Vm=(i,e,t)=>i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),t2=`
.soc{position:absolute;left:0;top:0;width:1080px;height:1920px;transform-origin:0 0;pointer-events:none;font-family:var(--font);color:var(--txt)}
.soc .brand{position:absolute;left:48px;top:56px;right:48px;height:96px;display:flex;align-items:center;gap:20px;padding:0 30px;background:rgba(255,255,255,.95);border-radius:26px;box-shadow:var(--shadow)}
.soc .drop{width:34px;height:34px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff 0%,#2f5bea 45%,#15c3b0 100%);flex:none;margin:0 6px}
.soc .bt{font-size:33px;font-weight:800;letter-spacing:-.01em}
.soc .bs{font-size:18px;color:var(--muted);margin-top:2px}
.soc .shade{position:absolute;left:0;right:0;top:1180px;bottom:0;background:linear-gradient(180deg,rgba(226,232,248,0) 0%,rgba(226,232,248,.9) 22%,rgba(226,232,248,.97) 100%)}
.soc .step{position:absolute;left:48px;top:1330px;font-size:24px;font-weight:800;color:#fff;background:var(--cyan);border-radius:14px;padding:8px 18px;letter-spacing:.02em}
.soc .dots{position:absolute;right:56px;top:1344px;display:flex;gap:10px}
.soc .dots i{width:46px;height:8px;border-radius:4px;background:rgba(47,91,234,.2)}
.soc .dots i.on{background:var(--cyan)}
.soc .head{position:absolute;left:48px;right:48px;top:1400px;font-size:56px;line-height:1.12;font-weight:800;letter-spacing:-.02em;color:var(--txt);text-shadow:0 2px 0 rgba(255,255,255,.6)}
.soc .chips{position:absolute;left:48px;right:48px;top:1660px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.soc .chip2{background:rgba(255,255,255,.96);border-radius:22px;padding:18px 20px;box-shadow:var(--shadow)}
.soc .chip2 .k{font-size:18px;color:var(--muted);font-weight:600}
.soc .chip2 .v{font-size:40px;font-weight:800;color:var(--green);letter-spacing:-.02em;margin-top:2px}
.soc .chip2 .u{font-size:20px;color:var(--muted);font-weight:600;margin-left:6px}
.soc .note{position:absolute;left:48px;right:48px;top:1860px;font-size:16px;color:var(--muted);text-align:center}
.soc .end{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;background:rgba(236,240,252,.88)}
.soc .end .ed{width:110px;height:110px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff 0%,#2f5bea 45%,#15c3b0 100%)}
.soc .end .et{font-size:64px;font-weight:800;text-align:center;line-height:1.08;letter-spacing:-.02em;max-width:900px}
.soc .end .es{font-size:26px;color:var(--muted);text-align:center;max-width:860px}
.soc .end .eg{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;width:900px}
`,ll=class{constructor(e){this.dots=[];this.chips=[];this.endChips=[];let t=document.createElement("style");t.textContent=t2,document.head.appendChild(t),this.root=O("div","soc",e);let n=O("div","brand",this.root);O("div","drop",n);let r=O("div","",n);O("div","bt",r,vh),this.bs=O("div","bs",r),O("div","shade",this.root),this.step=O("div","step",this.root);let s=O("div","dots",this.root);for(let l=0;l<Qi.length;l++)this.dots.push(O("i","",s));this.head=O("div","head",this.root);let o=O("div","chips",this.root),a=l=>{let u=O("div","chip2",l),d=O("div","k",u),h=O("div","",u),f=O("span","v",h),p=O("span","u",h);return{k:d,v:f,u:p}};for(let l=0;l<3;l++)this.chips.push(a(o));this.note=O("div","note",this.root),this.end=O("div","end",this.root),O("div","ed",this.end),this.et=O("div","et",this.end),this.es=O("div","es",this.end);let c=O("div","eg",this.end);for(let l=0;l<4;l++)this.endChips.push(a(c))}setScale(e){this.root.style.transform=`scale(${e})`}update(e,t){let{t:n,seg:r}=al(e),s=Qi[r],o=Yo(n);me(this.bs,t==="es"?"Simulaci\xF3n did\xE1ctica \xB7 todos los valores son supuestos":"Educational simulation \xB7 all values are assumptions"),me(this.step,s.kicker[t]),this.dots.forEach((l,u)=>l.classList.toggle("on",u<=r)),me(this.head,s.title[t]),[[t==="es"?"DQO removida":"COD removed",o.removalPct,0,"%"],[t==="es"?"Energ\xEDa biog\xE1s":"Biogas energy",o.energy_kWhd,0,"kWh/d"],[t==="es"?"Agua devuelta":"Water returned",o.water_m3d,1,"m\xB3/d"]].forEach(([l,u,d,h],f)=>{me(this.chips[f].k,l),me(this.chips[f].v,u>1e-6?Vm(u,d,t):"\u2014"),me(this.chips[f].u,h)}),me(this.note,t==="es"?"Cifras calculadas a partir de supuestos editables (1 L/s, 8 h/d\xEDa) \xB7 no son mediciones":"Figures calculated from editable assumptions (1 L/s, 8 h/day) \xB7 not measurements");let c=Yt(e,Th,Th+.6);$t(this.end,"opacity",c.toFixed(3)),$t(this.end,"display",c>.001?"flex":"none"),c>.001&&(me(this.et,t==="es"?"Del lixiviado al agua recuperada":"From leachate to recovered water"),me(this.es,vh),[[t==="es"?"Agua devuelta":"Water returned",cl.Q_m3d,1,"m\xB3/d"],[t==="es"?"DQO removida":"COD removed",cl.codRemovalPct,0,"%"],[t==="es"?"Carga evitada":"Load avoided",cl.codAvoided_kgd,0,"kg/d"],[t==="es"?"Energ\xEDa biog\xE1s":"Biogas energy",cl.energy_kWhd,0,"kWh/d"]].forEach(([u,d,h,f],p)=>{me(this.endChips[p].k,u),me(this.endChips[p].v,Vm(d,h,t)),me(this.endChips[p].u,f)}))}};var xi=new URLSearchParams(location.search),Pi=xi.get("film")==="1",n2=Number(xi.get("fps"))||30,Xm=Number(xi.get("w"))||1920,qm=Number(xi.get("h"))||1080,Qo=Pi&&xi.get("social")==="1",Ch=xi.get("lang")==="en"?"en":"es",Ym=xi.has("t")?Number(xi.get("t")):null,eo=tm(xi.get("light"))??"day",i2=document.getElementById("app")??document.body.appendChild(document.createElement("div")),Qr=document.createElement("div");Qr.className="stage";i2.appendChild(Qr);Pi&&document.documentElement.classList.add("film");var Ih=document.createElement("div");Ih.style.cssText="position:absolute;inset:0";Qr.appendChild(Ih);var Ph=zp(Ih),{renderer:$n,scene:Jo}=Ph;function r2(){if(xi.get("stub")==="1")return sh();try{return S0()}catch(i){return console.error("buildPlant() fall\xF3; se usa la planta de respaldo",i),sh()}}var Bt=r2();!Bt.actors&&xi.get("stubActors")!=="0"&&(Bt.actors=oh());Bt.actors&&!Bt.actors.root.parent&&Jo.add(Bt.actors.root);Bt.actors&&Y0(Bt.actors.routes);Jo.add(Bt.root);var ul=Ph.lighting,Sh="";function s2(i){if(!i||!ul)return;let e=`${i.mode}|${i.daylight.toFixed(3)}|${i.fixturesLevel.toFixed(3)}`;e!==Sh&&(Sh=e,ul.setDaylight?ul.setDaylight(i.daylight):ul.setMode?.(i.preset))}var Gn=_m(),Ko=new qc;Jo.add(Ko.root);var Js=new yn(26,(Ue.thumb.x1-Ue.thumb.x0)/(Ue.thumb.y1-Ue.thumb.y0),.3,300),Rn=Ym??0,er=!Pi&&Ym==null,Lh=1,fl=!0,oi=Pi?"film":"narrative",jo,wr={pipes:!0,labels:!0,flow:!0,sludge:!0,actors:!0},Mr=1920,js=1080,dl=gh(Rn,{plant:Bt,light:eo}),$m=null,Zm=null,si=null,to=new sl(Qr,Pi,{togglePlay(){Rn>=Ai&&!er&&(Rn=0),er=!er},seek(i){Rn=Math.min(Ai,Math.max(0,i))},setSpeed(i){Lh=i},toggleLoop(){fl=!fl},setMode(i){o2(),oi=i,jo=void 0},step(i){er=!1,Rn=Math.min(Ai,Math.max(0,Math.round(Rn+i)))},toggle(i){wr[i]=!wr[i]},setLang(i){Ch=i,document.documentElement.lang=i},cycleLight(){eo=nm(eo)},clearSelection(){jo=null}});function o2(){si={from:{...Gn.shot,target:[...Gn.shot.target]},t0:performance.now()}}var Rh=Qo?new ll(Qr):null;Qo&&(to.root.style.display="none",am(Xm/qm,{bx:0,by:.2,hx:.9,hy:.56}));function Km(){if(Pi)Mr=Xm,js=qm;else{let i=window.innerWidth,e=window.innerHeight;Mr=Math.floor(Math.min(i,e*16/9)),js=Math.floor(Mr*9/16)}Qr.style.width=`${Mr}px`,Qr.style.height=`${js}px`,$n.setPixelRatio(Pi?1:Math.min(window.devicePixelRatio||1,2)),Ph.resize(Mr,js),Gn.setAspect(Qo?Mr/js:16/9),to.setScale(Mr/1920),Rh?.setScale(Mr/1080)}Km();window.addEventListener("resize",()=>{Km(),er||Qs(Rn)});function a2(i){return jo!==void 0?jo:i.selected}function Qs(i){let e=gh(i,{plant:Bt,light:eo});s2(e.lighting);let t=a2(e);for(let o of Object.keys(Bt.units)){let a=Bt.units[o],c=e.units[o];c&&(a.setActive(c.active),a.setStatus(c.status),a.setFlowLevel(c.flow),a.setInternalMotion(c.motion),a.setSelected(o===t))}for(let o of Mi){let a=Bt.pipes[o.id],c=e.pipes[o.id];!a||!c||(a.setFront(c.front),a.setFlow(wr.flow?c.flow:0),a.setHighlighted(t!==null&&(o.from===t||o.to===t)),a.setVisible(wr.pipes&&(o.kind!=="sludge"||wr.sludge)))}Bt.update(e.t);let n=[];if(Bt.actors){Bt.actors.root.visible=wr.actors;let o=$0(e.t,Bt.actors.routes);if(Z0(Bt.actors,o),$m=o,wr.actors)for(let a of["chemical","sludge"]){let c=o.trucks[a];if(!c.visible)continue;let l=Bt.actors.trucks[a]?.length??7;n.push({kind:a,pos:new x(c.pos[0]+Math.sin(c.heading)*l*.35,c.pos[1]+3.6,c.pos[2]+Math.cos(c.heading)*l*.35)})}}let r;if(oi==="narrative"||oi==="film"?r=e.camera:oi==="overview"?r=fm(Bt):r=Gn.shot,si&&!Pi){let o=Yt(performance.now(),si.t0,si.t0+900);o>=1||oi==="free"?si=null:r={target:[ii(si.from.target[0],r.target[0],o),ii(si.from.target[1],r.target[1],o),ii(si.from.target[2],r.target[2],o)],distance:ii(si.from.distance,r.distance,o),fov:ii(si.from.fov,r.fov,o)}}Gn.apply(r),Ko.update(Bt,e.t,Gn.shot.distance);let s=[];for(let o=0;o<Wc;o++){let a=Xc(Bt,e.t,o,hl);if(!a)continue;let[c,l]=Ah(a);s.push({x0:c-20,y0:l-20,x1:c+20,y1:l+20})}return to.update(e,{mode:oi,lang:Ch,selected:t,toggles:wr,obstacles:s,trucks:n,controls:{playing:er,speed:Lh,loop:fl,t:e.t,duration:Ai,mode:oi}},Bt,Gn.camera),c2(Qo||!to.thumbVisible?null:t),dl=e,Zm=t,e}function c2(i){let e=$n.getSize(new pe);if($n.setScissorTest(!1),$n.setViewport(0,0,e.x,e.y),$n.render(Jo,Gn.camera),!i)return;let t=e.x/1920,n=Ue.thumb,r=n.x0*t,s=e.y-n.y1*t,o=(n.x1-n.x0)*t,a=(n.y1-n.y0)*t,c=mm(i,Bt);Js.fov=c.fov,Js.updateProjectionMatrix();let l=new x(...ri.dir);Js.position.set(c.target[0]+l.x*c.distance,c.target[1]+l.y*c.distance,c.target[2]+l.z*c.distance),Js.quaternion.copy(Gn.camera.quaternion),Js.updateMatrixWorld(!0);let u=Ko.root.visible;Ko.root.visible=!1,$n.setViewport(r,s,o,a),$n.setScissor(r,s,o,a),$n.setScissorTest(!0),$n.render(Jo,Js),$n.setScissorTest(!1),$n.setViewport(0,0,e.x,e.y),Ko.root.visible=u}var Gm=new hc,kh=new Map;for(let i of Object.keys(Bt.units))for(let e of Bt.units[i].pickTargets??[])kh.set(e,i);var l2=[...kh.keys()];function Wm(i,e){let t=$n.domElement.getBoundingClientRect(),n=new pe((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1);Gm.setFromCamera(n,Gn.camera);for(let r of Gm.intersectObjects(l2,!0)){let s=r.object;for(;s;){let o=kh.get(s);if(o)return o;s=s.parent}}return null}if(!Pi){let i=$n.domElement;i.style.touchAction="none";let e=null;i.addEventListener("pointerdown",t=>{e={x:t.clientX,y:t.clientY,moved:!1},i.setPointerCapture(t.pointerId)}),i.addEventListener("pointermove",t=>{if(!e){i.style.cursor=Wm(t.clientX,t.clientY)?"pointer":"default";return}let n=t.clientX-e.x,r=t.clientY-e.y;if(!e.moved&&Math.hypot(n,r)<4)return;e.moved||(e.moved=!0,oi!=="free"&&(si=null,oi="free"));let s=1080/js;Gn.panPixels(n*s,r*s,1080),e.x=t.clientX,e.y=t.clientY}),i.addEventListener("pointerup",t=>{e&&!e.moved&&(jo=Wm(t.clientX,t.clientY)),e=null}),i.addEventListener("wheel",t=>{t.preventDefault(),oi!=="free"&&(si=null,oi="free"),Gn.dolly(Math.pow(1.1,t.deltaY/100))},{passive:!1})}var hl=new x;function Ah(i){return hl.copy(i).project(Gn.camera),[(hl.x*.5+.5)*1920,(-hl.y*.5+.5)*1080]}window.__sim={getState:()=>({t:dl.t,state:dl,selected:Zm,detailUnit:to.detail.shown,mode:oi,shot:Gn.shot,labelRects:to.labels.lastRects,focusUnits:xm(dl.t),actors:$m,lightMode:eo,hasRealActors:!!Bt.actors&&Bt.actors.root.name!=="stub-actors",plantKind:Bt.root.name}),projectPoint:(i,e,t)=>Ah(new x(i,e,t)),setLight:i=>{eo=i,Sh=""},projectAnchor:(i,e="focus")=>{let t=Bt.units[i]?.anchors[e];return t?Ah(t):null},seek:i=>{Rn=i,er=!1,Qs(Rn)},grid:Ue,unitInfo:i=>({tag:Le[i].tag,name:Le[i].name})};if(Pi){let i=Om({duration:Qo?ol:Ai,fps:n2,renderFrame:e=>{if(Rh){let t=al(e);Rn=t.t,Qs(t.t),Rh.update(e,Ch)}else Rn=e,Qs(e)}})}else{let i=performance.now(),e=t=>{let n=Math.min(.1,Math.max(0,(t-i)/1e3));i=t,er&&(Rn+=n*Lh,Rn>=Ai&&(fl?Rn=0:(Rn=Ai,er=!1))),Qs(Rn),requestAnimationFrame(e)};Qs(Rn),requestAnimationFrame(e)}})();
