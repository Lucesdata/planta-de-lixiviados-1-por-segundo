"use strict";(()=>{var yd="170";var Gm=0,Dh=1,Wm=2;var tp=1,vd=2,Ui=3,yi=0,Un=1,en=2,lr=0,gs=1,Br=2,Uh=3,Bh=4,Xm=5,kr=100,qm=101,Ym=102,Zm=103,$m=104,Km=200,Jm=201,jm=202,Qm=203,Zl=204,$l=205,eg=206,tg=207,ng=208,ig=209,rg=210,sg=211,og=212,ag=213,cg=214,Kl=0,Jl=1,jl=2,bs=3,Ql=4,eu=5,tu=6,nu=7,np=0,lg=1,ug=2,ur=0,dg=1,hg=2,fg=3,pg=4,mg=5,gg=6,bd=7,Nh="attached",xg="detached",ip=300,Es=301,_s=302,iu=303,ru=304,ac=306,su=1e3,Dr=1001,ou=1002,Xn=1003,yg=1004;var Ko=1005;var xi=1006,ul=1007;var Ur=1008;var zi=1009,rp=1010,sp=1011,mo=1012,Ed=1013,Nr=1014,ui=1015,Ro=1016,_d=1017,Md=1018,Ms=1020,op=35902,ap=1021,cp=1022,$n=1023,lp=1024,up=1025,xs=1026,ws=1027,wd=1028,Td=1029,dp=1030,Sd=1031;var Rd=1033,Sa=33776,Ra=33777,Aa=33778,Ca=33779,au=35840,cu=35841,lu=35842,uu=35843,du=36196,hu=37492,fu=37496,pu=37808,mu=37809,gu=37810,xu=37811,yu=37812,vu=37813,bu=37814,Eu=37815,_u=37816,Mu=37817,wu=37818,Tu=37819,Su=37820,Ru=37821,Ia=36492,Au=36494,Cu=36495,hp=36283,Iu=36284,Pu=36285,Lu=36286;var La=2300,ku=2301,dl=2302,Fh=2400,zh=2401,Oh=2402;var vg=3200,bg=3201;var fp=0,Eg=1,ar="",cn="srgb",Is="srgb-linear",cc="linear",Nt="srgb";var es=7680;var Vh=519,_g=512,Mg=513,wg=514,pp=515,Tg=516,Sg=517,Rg=518,Ag=519,Gh=35044;var Wh="300 es",Ni=2e3,ka=2001,dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,Hu=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function yn(i,e,t){return Math.max(e,Math.min(t,i))}function Cg(i,e){return(i%e+e)%e}function hl(i,e,t){return(1-t)*i+t*e}function eo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],y=r[0],g=r[3],m=r[6],v=r[1],b=r[4],_=r[7],R=r[2],S=r[5],L=r[8];return s[0]=o*y+a*v+c*R,s[3]=o*g+a*b+c*S,s[6]=o*m+a*_+c*L,s[1]=l*y+u*v+d*R,s[4]=l*g+u*b+d*S,s[7]=l*m+u*_+d*L,s[2]=h*y+f*v+p*R,s[5]=h*g+f*b+p*S,s[8]=h*m+f*_+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,p=t*d+n*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(r*l-u*n)*y,e[2]=(a*n-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fl.makeScale(e,t)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fl=new ot;function mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ig(){let i=Ha("canvas");return i.style.display="block",i}var Xh={};function lo(i){i in Xh||(Xh[i]=!0,console.warn(i))}function Pg(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Lg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var wt={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Nt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Nt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ar?cc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qh=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],Zh=[.3127,.329],$h=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[Is]:{primaries:qh,whitePoint:Zh,transfer:cc,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:qh,whitePoint:Zh,transfer:Nt,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});var ts,Du=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Ha("canvas")),ts.width=e.width,ts.height=e.height;let n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ha("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hg=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pl(r[o].image)):s.push(pl(r[o]))}else s=pl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dg=0,Bn=class i extends dr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dr,r=Dr,s=xi,o=Ur,a=$n,c=zi,l=i.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ps(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case su:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case su:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=ip;Bn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(f+1)/2,R=(m+1)/2,S=(u+h)/4,L=(d+y)/4,P=(p+g)/4;return b>_&&b>R?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=S/n,s=L/n):_>R?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=S/r,s=P/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=L/s,r=P/s),this.set(n,r,s,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-y)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uu=class extends dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Bn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends Uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ua=class extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bu=class extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],p=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=y;return}if(d!==y||c!==h||l!==f||u!==p){let g=1-a,m=c*h+l*f+u*p+d*y,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let R=Math.sqrt(b),S=Math.atan2(R,m*v);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}let _=a*v;if(c=c*g+h*_,l=l*g+f*_,u=u*g+p*_,d=d*g+y*_,g===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*d+c*f-l*h,e[t+1]=c*p+u*h+l*d-a*f,e[t+2]=l*p+u*f+a*h-c*d,e[t+3]=u*p-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new x,Jh=new yt,Kn=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),jo.subVectors(this.max,to),ns.subVectors(e.a,to),is.subVectors(e.b,to),rs.subVectors(e.c,to),tr.subVectors(is,ns),nr.subVectors(rs,is),Sr.subVectors(ns,rs);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Sr.z,Sr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Sr.z,0,-Sr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Sr.y,Sr.x,0];return!gl(t,ns,is,rs,jo)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,ns,is,rs,jo))?!1:(Qo.crossVectors(tr,nr),t=[Qo.x,Qo.y,Qo.z],gl(t,ns,is,rs,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new x,new x,new x,new x,new x,new x,new x,new x],ai=new x,Jo=new Kn,ns=new x,is=new x,rs=new x,tr=new x,nr=new x,Sr=new x,to=new x,jo=new x,Qo=new x,Rr=new x;function gl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Rr.fromArray(i,s);let a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),c=e.dot(Rr),l=t.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ug=new Kn,no=new x,xl=new x,vi=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ug.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(no,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(xl)),this.expandByPoint(no.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new x,yl=new x,ea=new x,ir=new x,vl=new x,ta=new x,bl=new x,Ts=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(yl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=ir.dot(this.direction),c=-ir.dot(ea),l=ir.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*c-a,h=o*a-c,p=s*u,d>=0)if(h>=-p)if(h<=p){let y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yl).addScaledVector(ea,h),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),r=Li.dot(Li)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,s){vl.subVectors(t,e),ta.subVectors(n,e),bl.crossVectors(vl,ta);let o=this.direction.dot(bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);let c=a*this.direction.dot(ta.crossVectors(ir,ta));if(c<0)return null;let l=a*this.direction.dot(vl.cross(ir));if(l<0||c+l>o)return null;let u=-a*ir.dot(bl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(e,t,n,r,s,o,a,c,l,u,d,h,f,p,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,h,f,p,y,g)}set(e,t,n,r,s,o,a,c,l,u,d,h,f,p,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,p=l*u,y=l*d;t[0]=h+y*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,p=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,y=a*d;t[0]=c*u,t[4]=p*l-f,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+p,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,Ng)}lookAt(e,t,n){let r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),rr.crossVectors(n,Gn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),rr.crossVectors(n,Gn)),rr.normalize(),na.crossVectors(Gn,rr),r[0]=rr.x,r[4]=na.x,r[8]=Gn.x,r[1]=rr.y,r[5]=na.y,r[9]=Gn.y,r[2]=rr.z,r[6]=na.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],v=n[3],b=n[7],_=n[11],R=n[15],S=r[0],L=r[4],P=r[8],w=r[12],T=r[1],H=r[5],N=r[9],U=r[13],F=r[2],I=r[6],B=r[10],X=r[14],V=r[3],Q=r[7],se=r[11],le=r[15];return s[0]=o*S+a*T+c*F+l*V,s[4]=o*L+a*H+c*I+l*Q,s[8]=o*P+a*N+c*B+l*se,s[12]=o*w+a*U+c*X+l*le,s[1]=u*S+d*T+h*F+f*V,s[5]=u*L+d*H+h*I+f*Q,s[9]=u*P+d*N+h*B+f*se,s[13]=u*w+d*U+h*X+f*le,s[2]=p*S+y*T+g*F+m*V,s[6]=p*L+y*H+g*I+m*Q,s[10]=p*P+y*N+g*B+m*se,s[14]=p*w+y*U+g*X+m*le,s[3]=v*S+b*T+_*F+R*V,s[7]=v*L+b*H+_*I+R*Q,s[11]=v*P+b*N+_*B+R*se,s[15]=v*w+b*U+_*X+R*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],y=e[7],g=e[11],m=e[15];return p*(+s*c*d-r*l*d-s*a*h+n*l*h+r*a*f-n*c*f)+y*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+g*(+t*l*d-t*a*f-s*o*d+n*o*f+s*a*u-n*l*u)+m*(-r*a*u-t*c*d+t*a*h+r*o*d-n*o*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],y=e[13],g=e[14],m=e[15],v=d*g*l-y*h*l+y*c*f-a*g*f-d*c*m+a*h*m,b=p*h*l-u*g*l-p*c*f+o*g*f+u*c*m-o*h*m,_=u*y*l-p*d*l+p*a*f-o*y*f-u*a*m+o*d*m,R=p*d*c-u*y*c-p*a*h+o*y*h+u*a*g-o*d*g,S=t*v+n*b+r*_+s*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/S;return e[0]=v*L,e[1]=(y*h*s-d*g*s-y*r*f+n*g*f+d*r*m-n*h*m)*L,e[2]=(a*g*s-y*c*s+y*r*l-n*g*l-a*r*m+n*c*m)*L,e[3]=(d*c*s-a*h*s-d*r*l+n*h*l+a*r*f-n*c*f)*L,e[4]=b*L,e[5]=(u*g*s-p*h*s+p*r*f-t*g*f-u*r*m+t*h*m)*L,e[6]=(p*c*s-o*g*s-p*r*l+t*g*l+o*r*m-t*c*m)*L,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*L,e[8]=_*L,e[9]=(p*d*s-u*y*s-p*n*f+t*y*f+u*n*m-t*d*m)*L,e[10]=(o*y*s-p*a*s+p*n*l-t*y*l-o*n*m+t*a*m)*L,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*f-t*a*f)*L,e[12]=R*L,e[13]=(u*y*r-p*d*r+p*n*h-t*y*h-u*n*g+t*d*g)*L,e[14]=(p*a*r-o*y*r-p*n*c+t*y*c+o*n*g-t*a*g)*L,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*h+t*a*h)*L,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,p=s*d,y=o*u,g=o*d,m=a*d,v=c*l,b=c*u,_=c*d,R=n.x,S=n.y,L=n.z;return r[0]=(1-(y+m))*R,r[1]=(f+_)*R,r[2]=(p-b)*R,r[3]=0,r[4]=(f-_)*S,r[5]=(1-(h+m))*S,r[6]=(g+v)*S,r[7]=0,r[8]=(p+b)*L,r[9]=(g-v)*L,r[10]=(1-(h+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=ss.set(r[0],r[1],r[2]).length(),o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ci.copy(this);let l=1/s,u=1/o,d=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ni){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r),f,p;if(a===Ni)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===ka)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ni){let c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*l,f=(n+r)*u,p,y;if(a===Ni)p=(o+s)*d,y=-2*d;else if(a===ka)p=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ss=new x,ci=new be,Bg=new x(0,0,0),Ng=new x(1,1,1),rr=new x,na=new x,Gn=new x,jh=new be,Qh=new yt,Qt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fg=0,ef=new x,os=new yt,ki=new be,ia=new x,io=new x,zg=new x,Og=new yt,tf=new x(1,0,0),nf=new x(0,1,0),rf=new x(0,0,1),sf={type:"added"},Vg={type:"removed"},as={type:"childadded",child:null},El={type:"childremoved",child:null},_n=class i extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new x,t=new Qt,n=new yt,r=new x(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new ot}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(io,ia,this.up):ki.lookAt(ia,io,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),os.setFromRotationMatrix(ki),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vg),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};_n.DEFAULT_UP=new x(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new x,Hi=new x,_l=new x,Di=new x,cs=new x,ls=new x,of=new x,Ml=new x,wl=new x,Tl=new x,Sl=new Et,Rl=new Et,Al=new Et,cr=class i{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){li.subVectors(r,t),Hi.subVectors(n,t),_l.subVectors(e,t);let o=li.dot(li),a=li.dot(Hi),c=li.dot(_l),l=Hi.dot(Hi),u=Hi.dot(_l),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,p=(o*u-a*c)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Sl.setScalar(0),Rl.setScalar(0),Al.setScalar(0),Sl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,n),Al.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sl,s.x),o.addScaledVector(Rl,s.y),o.addScaledVector(Al,s.z),o}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Hi.subVectors(e,t),li.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;cs.subVectors(r,n),ls.subVectors(s,n),Ml.subVectors(e,n);let c=cs.dot(Ml),l=ls.dot(Ml);if(c<=0&&l<=0)return t.copy(n);wl.subVectors(e,r);let u=cs.dot(wl),d=ls.dot(wl);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(cs,o);Tl.subVectors(e,s);let f=cs.dot(Tl),p=ls.dot(Tl);if(p>=0&&f<=p)return t.copy(s);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(ls,a);let g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return of.subVectors(s,r),a=(d-u)/(d-u+(f-p)),t.copy(r).addScaledVector(of,a);let m=1/(g+y+h);return o=y*m,a=h*m,t.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=wt.workingColorSpace){if(e=Cg(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let n=gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return wt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(yn(Cn.r*255,0,255))*65536+Math.round(yn(Cn.g*255,0,255))*256+Math.round(yn(Cn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Cn.copy(this),t);let n=Cn.r,r=Cn.g,s=Cn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=cn){wt.fromWorkingColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,r=Cn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(ra);let n=hl(sr.h,ra.h,t),r=hl(sr.s,ra.s,t),s=hl(sr.l,ra.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Ie;Ie.NAMES=gp;var Gg=0,hr=class extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ps(),this.name="",this.blending=gs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=$l,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zl&&(n.blendSrc=this.blendSrc),this.blendDst!==$l&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},In=class extends hr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var an=new x,sa=new me,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=eo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),r=Dn(r,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}};var Ba=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Na=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wg=0,Zn=new be,Il=new _n,us=new x,Wn=new Kn,ro=new Kn,xn=new x,St=class i extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?Na:Ba)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Wn.min,ro.min),Wn.expandByPoint(xn),xn.addVectors(Wn.max,ro.max),Wn.expandByPoint(xn)):(Wn.expandByPoint(ro.min),Wn.expandByPoint(ro.max))}Wn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xn.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(e,l),xn.add(us)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new x,c[P]=new x;let l=new x,u=new x,d=new x,h=new me,f=new me,p=new me,y=new x,g=new x;function m(P,w,T){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,T),h.fromBufferAttribute(s,P),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,T),u.sub(l),d.sub(l),f.sub(h),p.sub(h);let H=1/(f.x*p.y-p.x*f.y);isFinite(H)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(H),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(H),a[P].add(y),a[w].add(y),a[T].add(y),c[P].add(g),c[w].add(g),c[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){let T=v[P],H=T.start,N=T.count;for(let U=H,F=H+N;U<F;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new x,_=new x,R=new x,S=new x;function L(P){R.fromBufferAttribute(r,P),S.copy(R);let w=a[P];b.copy(w),b.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(S,w);let H=_.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,H)}for(let P=0,w=v.length;P<w;++P){let T=v[P],H=T.start,N=T.count;for(let U=H,F=H+N;U<F;U+=3)L(e.getX(U+0)),L(e.getX(U+1)),L(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new x,s=new x,o=new x,a=new x,c=new x,l=new x,u=new x,d=new x;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,p=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new tn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},af=new be,Ar=new Ts,oa=new vi,cf=new x,aa=new x,ca=new x,la=new x,Pl=new x,ua=new x,lf=new x,da=new x,oe=class extends _n{constructor(e=new St,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Pl.fromBufferAttribute(d,e),o?ua.addScaledVector(Pl,u):ua.addScaledVector(Pl.sub(t),u))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(oa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(oa,cf)===null||Ar.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(af.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let g=h[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,R=b;_<R;_+=3){let S=a.getX(_),L=a.getX(_+1),P=a.getX(_+2);r=ha(this,m,e,n,l,u,d,S,L,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let v=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);r=ha(this,o,e,n,l,u,d,v,b,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let g=h[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,R=b;_<R;_+=3){let S=_,L=_+1,P=_+2;r=ha(this,m,e,n,l,u,d,S,L,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let v=g,b=g+1,_=g+2;r=ha(this,o,e,n,l,u,d,v,b,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Xg(i,e,t,n,r,s,o,a){let c;if(e.side===Un?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===yi,a),c===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(da);return l<t.near||l>t.far?null:{distance:l,point:da.clone(),object:i}}function ha(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,aa),i.getVertexPosition(c,ca),i.getVertexPosition(l,la);let u=Xg(i,e,t,n,aa,ca,la,lf);if(u){let d=new x;cr.getBarycoord(lf,aa,ca,la,d),r&&(u.uv=cr.getInterpolatedAttribute(r,a,c,l,d,new me)),s&&(u.uv1=cr.getInterpolatedAttribute(s,a,c,l,d,new me)),o&&(u.normal=cr.getInterpolatedAttribute(o,a,c,l,d,new x),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new x,materialIndex:0};cr.getNormal(aa,ca,la,h.normal),u.face=h,u.barycoord=d}return u}var Ot=class i extends St{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function p(y,g,m,v,b,_,R,S,L,P,w){let T=_/L,H=R/P,N=_/2,U=R/2,F=S/2,I=L+1,B=P+1,X=0,V=0,Q=new x;for(let se=0;se<B;se++){let le=se*H-U;for(let Ce=0;Ce<I;Ce++){let Qe=Ce*T-N;Q[y]=Qe*v,Q[g]=le*b,Q[m]=F,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[g]=0,Q[m]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Ce/L),d.push(1-se/P),X+=1}}for(let se=0;se<P;se++)for(let le=0;le<L;le++){let Ce=h+le+I*se,Qe=h+le+I*(se+1),K=h+(le+1)+I*(se+1),ne=h+(le+1)+I*se;c.push(Ce,Qe,ne),c.push(Qe,K,ne),V+=6}a.addGroup(f,V,w),f+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=Ss(i[t]);for(let r in n)e[r]=n[r]}return e}function qg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var Yg={clone:Ss,merge:Ln},Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends hr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=$g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fa=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},or=new x,uf=new me,df=new me,vn=class extends Fa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,uf,df),t.subVectors(df,uf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=-90,hs=1,Nu=class extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(ds,hs,e,t);r.layers=this.layers,this.add(r);let s=new vn(ds,hs,e,t);s.layers=this.layers,this.add(s);let o=new vn(ds,hs,e,t);o.layers=this.layers,this.add(o);let a=new vn(ds,hs,e,t);a.layers=this.layers,this.add(a);let c=new vn(ds,hs,e,t);c.layers=this.layers,this.add(c);let l=new vn(ds,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},za=class extends Bn{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fu=class extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new za(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ot(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:lr});s.uniforms.tEquirect.value=t;let o=new oe(r,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=xi),new Nu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Ll=new x,Kg=new x,Jg=new ot,Bi=class{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ll.subVectors(n,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ll),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jg.getNormalMatrix(e),r=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new vi,fa=new x,xo=class{constructor(e=new Bi,t=new Bi,n=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],p=r[9],y=r[10],g=r[11],m=r[12],v=r[13],b=r[14],_=r[15];if(n[0].setComponents(c-s,h-l,g-f,_-m).normalize(),n[1].setComponents(c+s,h+l,g+f,_+m).normalize(),n[2].setComponents(c+o,h+u,g+p,_+v).normalize(),n[3].setComponents(c-o,h-u,g-p,_-v).normalize(),n[4].setComponents(c-a,h-d,g-y,_-b).normalize(),t===Ni)n[5].setComponents(c+a,h+d,g+y,_+b).normalize();else if(t===ka)n[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function jg(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Ke=class i extends St{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],p=[],y=[],g=[];for(let m=0;m<u;m++){let v=m*h-o;for(let b=0;b<l;b++){let _=b*d-s;p.push(_,-v,0),y.push(0,0,1),g.push(b/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let b=v+l*m,_=v+l*(m+1),R=v+1+l*(m+1),S=v+1+l*m;f.push(b,_,S),f.push(_,R,S)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hx=`#ifdef USE_IRIDESCENCE
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
#endif`,fx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,jx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c1=`#if defined( USE_POINTS_UV )
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
#endif`,l1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,_1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
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
}`,sy=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,dy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,yy=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,by=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,_y=`#define STANDARD
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
}`,My=`#define STANDARD
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
}`,wy=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Sy=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Cy=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Py=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Qg,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:cx,begin_vertex:lx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:hx,bumpmap_pars_fragment:fx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:vx,color_pars_vertex:bx,color_vertex:Ex,common:_x,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Sx,emissivemap_fragment:Rx,emissivemap_pars_fragment:Ax,colorspace_fragment:Cx,colorspace_pars_fragment:Ix,envmap_fragment:Px,envmap_common_pars_fragment:Lx,envmap_pars_fragment:kx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Xx,envmap_vertex:Dx,fog_vertex:Ux,fog_pars_vertex:Bx,fog_fragment:Nx,fog_pars_fragment:Fx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:Zx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Jx,lights_fragment_begin:jx,lights_fragment_maps:Qx,lights_fragment_end:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:o1,map_particle_fragment:a1,map_particle_pars_fragment:c1,metalnessmap_fragment:l1,metalnessmap_pars_fragment:u1,morphinstance_vertex:d1,morphcolor_vertex:h1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:x1,normal_pars_fragment:y1,normal_pars_vertex:v1,normal_vertex:b1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:_1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:T1,opaque_fragment:S1,packing:R1,premultiplied_alpha_fragment:A1,project_vertex:C1,dithering_fragment:I1,dithering_pars_fragment:P1,roughnessmap_fragment:L1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:H1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:B1,skinbase_vertex:N1,skinning_pars_vertex:F1,skinning_vertex:z1,skinnormal_vertex:O1,specularmap_fragment:V1,specularmap_pars_fragment:G1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:q1,transmission_pars_fragment:Y1,uv_pars_fragment:Z1,uv_pars_vertex:$1,uv_vertex:K1,worldpos_vertex:J1,background_vert:j1,background_frag:Q1,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:ry,depth_frag:sy,distanceRGBA_vert:oy,distanceRGBA_frag:ay,equirect_vert:cy,equirect_frag:ly,linedashed_vert:uy,linedashed_frag:dy,meshbasic_vert:hy,meshbasic_frag:fy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:xy,meshnormal_vert:yy,meshnormal_frag:vy,meshphong_vert:by,meshphong_frag:Ey,meshphysical_vert:_y,meshphysical_frag:My,meshtoon_vert:wy,meshtoon_frag:Ty,points_vert:Sy,points_frag:Ry,shadow_vert:Ay,shadow_frag:Cy,sprite_vert:Iy,sprite_frag:Py},ve={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:Ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ln([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ln([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ln([ve.points,ve.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ln([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ln([ve.common,ve.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ln([ve.sprite,ve.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Ln([ve.common,ve.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Ln([ve.lights,ve.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};gi.physical={uniforms:Ln([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var pa={r:0,b:0,g:0},Ir=new Qt,Ly=new be;function ky(i,e,t,n,r,s,o){let a=new Ie(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function p(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function y(v){let b=!1,_=p(v);_===null?m(a,c):_&&_.isColor&&(m(_,1),b=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===ac)?(u===void 0&&(u=new oe(new Ot(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ss(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,S,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ir.copy(b.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(Ir)),u.material.toneMapped=wt.getTransfer(_.colorSpace)!==Nt,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new oe(new Ke(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ss(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=wt.getTransfer(_.colorSpace)!==Nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(pa,xp(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:y,addToRenderList:g}}function Hy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(T,H,N,U,F){let I=!1,B=d(U,N,H);s!==B&&(s=B,l(s.object)),I=f(T,U,N,F),I&&p(T,U,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,_(T,H,N,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function d(T,H,N){let U=N.wireframe===!0,F=n[T.id];F===void 0&&(F={},n[T.id]=F);let I=F[H.id];I===void 0&&(I={},F[H.id]=I);let B=I[U];return B===void 0&&(B=h(c()),I[U]=B),B}function h(T){let H=[],N=[],U=[];for(let F=0;F<t;F++)H[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:N,attributeDivisors:U,object:T,attributes:{},index:null}}function f(T,H,N,U){let F=s.attributes,I=H.attributes,B=0,X=N.getAttributes();for(let V in X)if(X[V].location>=0){let se=F[V],le=I[V];if(le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor)),se===void 0||se.attribute!==le||le&&se.data!==le.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function p(T,H,N,U){let F={},I=H.attributes,B=0,X=N.getAttributes();for(let V in X)if(X[V].location>=0){let se=I[V];se===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));let le={};le.attribute=se,se&&se.data&&(le.data=se.data),F[V]=le,B++}s.attributes=F,s.attributesNum=B,s.index=U}function y(){let T=s.newAttributes;for(let H=0,N=T.length;H<N;H++)T[H]=0}function g(T){m(T,0)}function m(T,H){let N=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;N[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),F[T]!==H&&(i.vertexAttribDivisor(T,H),F[T]=H)}function v(){let T=s.newAttributes,H=s.enabledAttributes;for(let N=0,U=H.length;N<U;N++)H[N]!==T[N]&&(i.disableVertexAttribArray(N),H[N]=0)}function b(T,H,N,U,F,I,B){B===!0?i.vertexAttribIPointer(T,H,N,F,I):i.vertexAttribPointer(T,H,N,U,F,I)}function _(T,H,N,U){y();let F=U.attributes,I=N.getAttributes(),B=H.defaultAttributeValues;for(let X in I){let V=I[X];if(V.location>=0){let Q=F[X];if(Q===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let se=Q.normalized,le=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;let Qe=Ce.buffer,K=Ce.type,ne=Ce.bytesPerElement,ie=K===i.INT||K===i.UNSIGNED_INT||Q.gpuType===Ed;if(Q.isInterleavedBufferAttribute){let ae=Q.data,Me=ae.stride,Be=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)m(V.location+We,ae.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<V.locationSize;We++)g(V.location+We);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let We=0;We<V.locationSize;We++)b(V.location+We,le/V.locationSize,K,se,Me*ne,(Be+le/V.locationSize*We)*ne,ie)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae,Q.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<V.locationSize;ae++)g(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ae=0;ae<V.locationSize;ae++)b(V.location+ae,le/V.locationSize,K,se,le*ne,le/V.locationSize*ae*ne,ie)}}else if(B!==void 0){let se=B[X];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(V.location,se);break;case 3:i.vertexAttrib3fv(V.location,se);break;case 4:i.vertexAttrib4fv(V.location,se);break;default:i.vertexAttrib1fv(V.location,se)}}}}v()}function R(){P();for(let T in n){let H=n[T];for(let N in H){let U=H[N];for(let F in U)u(U[F].object),delete U[F];delete H[N]}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let H=n[T.id];for(let N in H){let U=H[N];for(let F in U)u(U[F].object),delete U[F];delete H[N]}delete n[T.id]}function L(T){for(let H in n){let N=n[H];if(N[T.id]===void 0)continue;let U=N[T.id];for(let F in U)u(U[F].object),delete U[F];delete N[T.id]}}function P(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function Dy(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y]*h[y];t.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Uy(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==$n&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let P=L===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==zi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ui&&!P)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:R,maxSamples:S}}function By(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Bi,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):l();else{let v=s?0:n,b=v*4,_=m.clippingState||null;c.value=_,_=u(p,h,b,f);for(let R=0;R!==b;++R)_[R]=t[R];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=c.value,p!==!0||g===null){let m=f+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=f;b!==y;++b,_+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Ny(i){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=Es:a===ru&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===iu||a===ru)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Oa=class extends Fa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ms=4,hf=[.125,.215,.35,.446,.526,.582],Hr=20,kl=new Oa,ff=new Ie,Hl=null,Dl=0,Ul=0,Bl=!1,Lr=(1+Math.sqrt(5))/2,fs=1/Lr,pf=[new x(-Lr,fs,0),new x(Lr,fs,0),new x(-fs,0,Lr),new x(fs,0,Lr),new x(0,Lr,-fs),new x(0,Lr,fs),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Hl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Dl,Ul),this._renderer.xr.enabled=Bl,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ro,format:$n,colorSpace:Is,depthBuffer:!1},r=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fy(s)),this._blurMaterial=zy(s,e,t)}return r}_compileMaterial(e){let t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,n,r){let a=new vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(ff),u.toneMapping=ur,u.autoClear=!1;let f=new In({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),p=new oe(new Ot,f),y=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,y=!0):(f.color.copy(ff),y=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let b=this._cubeSize;ma(r,v*b,m>2?b:0,b,b),u.setRenderTarget(r),y&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Es||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ma(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,kl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pf[(r-s-1)%pf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new oe(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hr-1),y=s/p,g=isFinite(s)?1+Math.floor(u*y):Hr;g>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hr}`);let m=[],v=0;for(let L=0;L<Hr;++L){let P=L/y,w=Math.exp(-P*P/2);m.push(w),L===0?v+=w:L<g&&(v+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-n;let _=this._sizeLods[r],R=3*_*(r>b-ms?r-b+ms:0),S=4*(this._cubeSize-_);ma(t,R,S,3*_,2*_),c.setRenderTarget(t),c.render(d,kl)}};function Fy(i){let e=[],t=[],n=[],r=i,s=i-ms+1+hf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-ms?c=hf[o-i+ms-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,y=3,g=2,m=1,v=new Float32Array(y*p*f),b=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let S=0;S<f;S++){let L=S%3*2/3-1,P=S>2?0:-1,w=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];v.set(w,y*p*S),b.set(h,g*p*S);let T=[S,S,S,S,S,S];_.set(T,m*p*S)}let R=new St;R.setAttribute("position",new tn(v,y)),R.setAttribute("uv",new tn(b,g)),R.setAttribute("faceIndex",new tn(_,m)),e.push(R),r>ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(i,e,t){let n=new Oi(i,e,t);return n.texture.mapping=ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zy(i,e,t){let n=new Float32Array(Hr),r=new x(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function gf(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function xf(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ad(){return`

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
	`}function Oy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===iu||c===ru,u=c===Es||c===_s;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Va(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Va(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gy(i,e,t,n){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);for(let p in h.morphAttributes){let y=h.morphAttributes[p];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let p in f){let y=f[p];for(let g=0,m=y.length;g<m;g++)e.update(y[g],i.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,p=d.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let b=0,_=v.length;b<_;b+=3){let R=v[b+0],S=v[b+1],L=v[b+2];h.push(R,S,S,L,L,R)}}else if(p!==void 0){let v=p.array;y=p.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let R=b+0,S=b+1,L=b+2;h.push(R,S,S,L,L,R)}}else return;let g=new(mp(h)?Na:Ba)(h,1);g.version=y;let m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Wy(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*o,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function d(h,f,p,y){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)l(h[m]/o,f[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,y,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*y[v];t.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Xy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qy(i,e,t){let n=new WeakMap,r=new Et;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let w=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),y===!0&&(b=3);let _=a.attributes.position.count*b,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*R*4*d),L=new Ua(S,_,R,d);L.type=ui,L.needsUpdate=!0;let P=b*4;for(let T=0;T<d;T++){let H=g[T],N=m[T],U=v[T],F=_*R*4*T;for(let I=0;I<H.count;I++){let B=I*P;f===!0&&(r.fromBufferAttribute(H,I),S[F+B+0]=r.x,S[F+B+1]=r.y,S[F+B+2]=r.z,S[F+B+3]=0),p===!0&&(r.fromBufferAttribute(N,I),S[F+B+4]=r.x,S[F+B+5]=r.y,S[F+B+6]=r.z,S[F+B+7]=0),y===!0&&(r.fromBufferAttribute(U,I),S[F+B+8]=r.x,S[F+B+9]=r.y,S[F+B+10]=r.z,S[F+B+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new me(_,R)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Yy(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ga=class extends Bn{constructor(e,t,n,r,s,o,a,c,l,u=xs){if(u!==xs&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Nr),n===void 0&&u===ws&&(n=Ms),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xn,this.minFilter=c!==void 0?c:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vp=new Bn,yf=new Ga(1,1),bp=new Ua,Ep=new Bu,_p=new za,vf=[],bf=[],Ef=new Float32Array(16),_f=new Float32Array(9),Mf=new Float32Array(4);function Ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=vf[r];if(s===void 0&&(s=new Float32Array(r),vf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lc(i,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function jy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;Mf.set(n),i.uniformMatrix2fv(this.addr,!1,Mf),hn(t,n)}}function Qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),hn(t,n)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;Ef.set(n),i.uniformMatrix4fv(this.addr,!1,Ef),hn(t,n)}}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function lv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(yf.compareFunction=pp,s=yf):s=vp,t.setTexture2D(e||s,r)}function uv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ep,r)}function dv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_p,r)}function hv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bp,r)}function fv(i){switch(i){case 5126:return Zy;case 35664:return $y;case 35665:return Ky;case 35666:return Jy;case 35674:return jy;case 35675:return Qy;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return ov;case 36295:return av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return hv}}function pv(i,e){i.uniform1fv(this.addr,e)}function mv(i,e){let t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function gv(i,e){let t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function xv(i,e){let t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){let t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vv(i,e){let t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bv(i,e){let t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ev(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function Mv(i,e){i.uniform3iv(this.addr,e)}function wv(i,e){i.uniform4iv(this.addr,e)}function Tv(i,e){i.uniform1uiv(this.addr,e)}function Sv(i,e){i.uniform2uiv(this.addr,e)}function Rv(i,e){i.uniform3uiv(this.addr,e)}function Av(i,e){i.uniform4uiv(this.addr,e)}function Cv(i,e,t){let n=this.cache,r=e.length,s=lc(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||vp,s[o])}function Iv(i,e,t){let n=this.cache,r=e.length,s=lc(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ep,s[o])}function Pv(i,e,t){let n=this.cache,r=e.length,s=lc(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_p,s[o])}function Lv(i,e,t){let n=this.cache,r=e.length,s=lc(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bp,s[o])}function kv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return yv;case 35675:return vv;case 35676:return bv;case 5124:case 35670:return Ev;case 35667:case 35671:return _v;case 35668:case 35672:return Mv;case 35669:case 35673:return wv;case 5125:return Tv;case 36294:return Sv;case 36295:return Rv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}var zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}},Ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}},Vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function wf(i,e){i.seq.push(e),i.map[e.id]=e}function Hv(i,e,t){let n=i.name,r=n.length;for(Nl.lastIndex=0;;){let s=Nl.exec(n),o=Nl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){wf(t,l===void 0?new zu(a,i,e):new Ou(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Vu(a),wf(t,d)),t=d}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Hv(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Dv=37297,Uv=0;function Bv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Sf=new ot;function Nv(i){wt._getMatrix(Sf,wt.workingColorSpace,i);let e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case cc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bv(i.getShaderSource(e),o)}else return r}function Fv(i,e){let t=Nv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zv(i,e){let t;switch(e){case dg:t="Linear";break;case hg:t="Reinhard";break;case fg:t="Cineon";break;case pg:t="ACESFilmic";break;case gg:t="AgX";break;case bd:t="Neutral";break;case mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ga=new x;function Ov(){wt.getLuminanceCoefficients(ga);let i=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function Gv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function uo(i){return i!==""}function Af(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(i){return i.replace(Xv,Yv)}var qv=new Map;function Yv(i,e){let t=ht[e];if(t===void 0){let n=qv.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gu(t)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(i){return i.replace(Zv,$v)}function $v(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Kv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Jv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case _s:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case np:e="ENVMAP_BLENDING_MULTIPLY";break;case lg:e="ENVMAP_BLENDING_MIX";break;case ug:e="ENVMAP_BLENDING_ADD";break}return e}function eb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tb(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Kv(t),l=Jv(t),u=jv(t),d=Qv(t),h=eb(t),f=Vv(t),p=Gv(s),y=r.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(uo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(uo).join(`
`),m.length>0&&(m+=`
`)):(g=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),m=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?ht.tonemapping_pars_fragment:"",t.toneMapping!==ur?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Fv("linearToOutputTexel",t.outputColorSpace),Ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),o=Gu(o),o=Af(o,t),o=Cf(o,t),a=Gu(a),a=Af(a,t),a=Cf(a,t),o=If(o),a=If(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+g+o,_=v+m+a,R=Tf(r,r.VERTEX_SHADER,b),S=Tf(r,r.FRAGMENT_SHADER,_);r.attachShader(y,R),r.attachShader(y,S),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function L(H){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(R).trim(),F=r.getShaderInfoLog(S).trim(),I=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,R,S);else{let X=Rf(r,R,"vertex"),V=Rf(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+N+`
`+X+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(B=!1);B&&(H.diagnostics={runnable:I,programLog:N,vertexShader:{log:U,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(R),r.deleteShader(S),P=new vs(r,y),w=Wv(r,y)}let P;this.getUniforms=function(){return P===void 0&&L(this),P};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(y,Dv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=S,this}var nb=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xu(e),t.set(e,n)),n}},Xu=class{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}};function ib(i,e,t,n,r,s,o){let a=new go,c=new Wu,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,T,H,N,U){let F=N.fog,I=U.geometry,B=w.isMeshStandardMaterial?N.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),V=X&&X.mapping===ac?X.image.height:null,Q=p[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,le=se!==void 0?se.length:0,Ce=0;I.morphAttributes.position!==void 0&&(Ce=1),I.morphAttributes.normal!==void 0&&(Ce=2),I.morphAttributes.color!==void 0&&(Ce=3);let Qe,K,ne,ie;if(Q){let Ut=gi[Q];Qe=Ut.vertexShader,K=Ut.fragmentShader}else Qe=w.vertexShader,K=w.fragmentShader,c.update(w),ne=c.getVertexShaderID(w),ie=c.getFragmentShaderID(w);let ae=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,We=U.isBatchedMesh===!0,Ze=!!w.map,et=!!w.matcap,Mt=!!X,G=!!w.aoMap,zt=!!w.lightMap,it=!!w.bumpMap,at=!!w.normalMap,Xe=!!w.displacementMap,Bt=!!w.emissiveMap,qe=!!w.metalnessMap,D=!!w.roughnessMap,A=w.anisotropy>0,Z=w.clearcoat>0,z=w.dispersion>0,$=w.iridescence>0,ee=w.sheen>0,pe=w.transmission>0,fe=A&&!!w.anisotropyMap,ye=Z&&!!w.clearcoatMap,$e=Z&&!!w.clearcoatNormalMap,he=Z&&!!w.clearcoatRoughnessMap,Ee=$&&!!w.iridescenceMap,Ne=$&&!!w.iridescenceThicknessMap,Ye=ee&&!!w.sheenColorMap,Re=ee&&!!w.sheenRoughnessMap,gt=!!w.specularMap,ct=!!w.specularColorMap,Gt=!!w.specularIntensityMap,W=pe&&!!w.transmissionMap,_e=pe&&!!w.thicknessMap,te=!!w.gradientMap,ce=!!w.alphaMap,Ae=w.alphaTest>0,Te=!!w.alphaHash,lt=!!w.extensions,sn=ur;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(sn=i.toneMapping);let Rn={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:Qe,fragmentShader:K,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:We,batchingColor:We&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Is,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:et,envMap:Mt,envMapMode:Mt&&X.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:zt,bumpMap:it,normalMap:at,displacementMap:h&&Xe,emissiveMap:Bt,normalMapObjectSpace:at&&w.normalMapType===Eg,normalMapTangentSpace:at&&w.normalMapType===fp,metalnessMap:qe,roughnessMap:D,anisotropy:A,anisotropyMap:fe,clearcoat:Z,clearcoatMap:ye,clearcoatNormalMap:$e,clearcoatRoughnessMap:he,dispersion:z,iridescence:$,iridescenceMap:Ee,iridescenceThicknessMap:Ne,sheen:ee,sheenColorMap:Ye,sheenRoughnessMap:Re,specularMap:gt,specularColorMap:ct,specularIntensityMap:Gt,transmission:pe,transmissionMap:W,thicknessMap:_e,gradientMap:te,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:Te,combine:w.combine,mapUv:Ze&&y(w.map.channel),aoMapUv:G&&y(w.aoMap.channel),lightMapUv:zt&&y(w.lightMap.channel),bumpMapUv:it&&y(w.bumpMap.channel),normalMapUv:at&&y(w.normalMap.channel),displacementMapUv:Xe&&y(w.displacementMap.channel),emissiveMapUv:Bt&&y(w.emissiveMap.channel),metalnessMapUv:qe&&y(w.metalnessMap.channel),roughnessMapUv:D&&y(w.roughnessMap.channel),anisotropyMapUv:fe&&y(w.anisotropyMap.channel),clearcoatMapUv:ye&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(w.sheenRoughnessMap.channel),specularMapUv:gt&&y(w.specularMap.channel),specularColorMapUv:ct&&y(w.specularColorMap.channel),specularIntensityMapUv:Gt&&y(w.specularIntensityMap.channel),transmissionMapUv:W&&y(w.transmissionMap.channel),thicknessMapUv:_e&&y(w.thicknessMap.channel),alphaMapUv:ce&&y(w.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ze||ce),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Me,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:sn,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Nt,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===en,flipSided:w.side===Un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&w.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Rn.vertexUv1s=l.has(1),Rn.vertexUv2s=l.has(2),Rn.vertexUv3s=l.has(3),l.clear(),Rn}function m(w){let T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(let H in w.defines)T.push(H),T.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(v(T,w),b(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function v(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function b(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let T=p[w.type],H;if(T){let N=gi[T];H=Yg.clone(N.uniforms)}else H=w.uniforms;return H}function R(w,T){let H;for(let N=0,U=u.length;N<U;N++){let F=u[N];if(F.cacheKey===T){H=F,++H.usedTimes;break}}return H===void 0&&(H=new tb(i,T,w,s),u.push(H)),H}function S(w){if(--w.usedTimes===0){let T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function L(w){c.remove(w)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:R,releaseProgram:S,releaseShaderCache:L,programs:u,dispose:P}}function rb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,p,y,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:y,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=y,m.group=g),e++,m}function a(d,h,f,p,y,g){let m=o(d,h,f,p,y,g);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,h,f,p,y,g){let m=o(d,h,f,p,y,g);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,h){t.length>1&&t.sort(d||sb),n.length>1&&n.sort(h||Lf),r.length>1&&r.sort(h||Lf)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ob(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new kf,i.set(n,[o])):r>=s.length?(o=new kf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ab(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new Ie};break;case"SpotLight":t={position:new x,direction:new x,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new x,halfWidth:new x,halfHeight:new x};break}return i[e.id]=t,t}}}function cb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lb=0;function ub(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function db(i){let e=new ab,t=cb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new x);let r=new x,s=new be,o=new be;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,v=0,b=0,_=0,R=0,S=0,L=0;l.sort(ub);for(let w=0,T=l.length;w<T;w++){let H=l[w],N=H.color,U=H.intensity,F=H.distance,I=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=N.r*U,d+=N.g*U,h+=N.b*U;else if(H.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(H.sh.coefficients[B],U);L++}else if(H.isDirectionalLight){let B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let X=H.shadow,V=t.get(H);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=H.shadow.matrix,v++}n.directional[f]=B,f++}else if(H.isSpotLight){let B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(N).multiplyScalar(U),B.distance=F,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,n.spot[y]=B;let X=H.shadow;if(H.map&&(n.spotLightMap[R]=H.map,R++,X.updateMatrices(H),H.castShadow&&S++),n.spotLightMatrix[y]=X.matrix,H.castShadow){let V=t.get(H);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=I,_++}y++}else if(H.isRectAreaLight){let B=e.get(H);B.color.copy(N).multiplyScalar(U),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),n.rectArea[g]=B,g++}else if(H.isPointLight){let B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){let X=H.shadow,V=t.get(H);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=I,n.pointShadowMatrix[p]=H.shadow.matrix,b++}n.point[p]=B,p++}else if(H.isHemisphereLight){let B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(U),B.groundColor.copy(H.groundColor).multiplyScalar(U),n.hemi[m]=B,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=L,P.directionalLength=f,P.pointLength=p,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=L,n.version=lb++)}function c(l,u){let d=0,h=0,f=0,p=0,y=0,g=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let b=l[m];if(b.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(b.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function Hf(i){let e=new db(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function hb(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Hf(i),e.set(r,[a])):s>=o.length?(a=new Hf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var qu=class extends hr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yu=class extends hr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pb=`uniform sampler2D shadow_pass;
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
}`;function mb(i,e,t){let n=new xo,r=new me,s=new me,o=new Et,a=new qu({depthPacking:bg}),c=new Yu,l={},u=t.maxTextureSize,d={[yi]:Un,[Un]:yi,[en]:en},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:fb,fragmentShader:pb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new St;p.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new oe(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tp;let m=this.type;this.render=function(S,L,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),T=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),N=i.state;N.setBlending(lr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=m!==Ui&&this.type===Ui,F=m===Ui&&this.type!==Ui;for(let I=0,B=S.length;I<B;I++){let X=S[I],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let Q=V.getFrameExtents();if(r.multiply(Q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,V.mapSize.y=s.y)),V.map===null||U===!0||F===!0){let le=this.type!==Ui?{minFilter:Xn,magFilter:Xn}:{};V.map!==null&&V.map.dispose(),V.map=new Oi(r.x,r.y,le),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let se=V.getViewportCount();for(let le=0;le<se;le++){let Ce=V.getViewport(le);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),N.viewport(o),V.updateMatrices(X,le),n=V.getFrustum(),_(L,P,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Ui&&v(V,P),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,T,H)};function v(S,L){let P=e.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Oi(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(L,null,P,h,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(L,null,P,f,y,null)}function b(S,L,P,w){let T=null,H=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0)T=H;else if(T=P.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let N=T.uuid,U=L.uuid,F=l[N];F===void 0&&(F={},l[N]=F);let I=F[U];I===void 0&&(I=T.clone(),F[U]=I,L.addEventListener("dispose",R)),T=I}if(T.visible=L.visible,T.wireframe=L.wireframe,w===Ui?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:d[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=i.properties.get(T);N.light=P}return T}function _(S,L,P,w,T){if(S.visible===!1)return;if(S.layers.test(L.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Ui)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let U=e.update(S),F=S.material;if(Array.isArray(F)){let I=U.groups;for(let B=0,X=I.length;B<X;B++){let V=I[B],Q=F[V.materialIndex];if(Q&&Q.visible){let se=b(S,Q,w,T);S.onBeforeShadow(i,S,L,P,U,se,V),i.renderBufferDirect(P,null,U,se,S,V),S.onAfterShadow(i,S,L,P,U,se,V)}}}else if(F.visible){let I=b(S,F,w,T);S.onBeforeShadow(i,S,L,P,U,I,null),i.renderBufferDirect(P,null,U,I,S,null),S.onAfterShadow(i,S,L,P,U,I,null)}}let N=S.children;for(let U=0,F=N.length;U<F;U++)_(N[U],L,P,w,T)}function R(S){S.target.removeEventListener("dispose",R);for(let P in l){let w=l[P],T=S.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}var gb={[Kl]:Jl,[jl]:tu,[Ql]:nu,[bs]:eu,[Jl]:Kl,[tu]:jl,[nu]:Ql,[eu]:bs};function xb(i,e){function t(){let W=!1,_e=new Et,te=null,ce=new Et(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!W&&(i.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Te,lt,sn,Rn){Rn===!0&&(Ae*=sn,Te*=sn,lt*=sn),_e.set(Ae,Te,lt,sn),ce.equals(_e)===!1&&(i.clearColor(Ae,Te,lt,sn),ce.copy(_e))},reset:function(){W=!1,te=null,ce.set(-1,0,0,0)}}}function n(){let W=!1,_e=!1,te=null,ce=null,Ae=null;return{setReversed:function(Te){if(_e!==Te){let lt=e.get("EXT_clip_control");_e?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);let sn=Ae;Ae=null,this.setClear(sn)}_e=Te},getReversed:function(){return _e},setTest:function(Te){Te?ae(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Te){te!==Te&&!W&&(i.depthMask(Te),te=Te)},setFunc:function(Te){if(_e&&(Te=gb[Te]),ce!==Te){switch(Te){case Kl:i.depthFunc(i.NEVER);break;case Jl:i.depthFunc(i.ALWAYS);break;case jl:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case Ql:i.depthFunc(i.EQUAL);break;case eu:i.depthFunc(i.GEQUAL);break;case tu:i.depthFunc(i.GREATER);break;case nu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Te}},setLocked:function(Te){W=Te},setClear:function(Te){Ae!==Te&&(_e&&(Te=1-Te),i.clearDepth(Te),Ae=Te)},reset:function(){W=!1,te=null,ce=null,Ae=null,_e=!1}}}function r(){let W=!1,_e=null,te=null,ce=null,Ae=null,Te=null,lt=null,sn=null,Rn=null;return{setTest:function(Ut){W||(Ut?ae(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Ut){_e!==Ut&&!W&&(i.stencilMask(Ut),_e=Ut)},setFunc:function(Ut,si,Ci){(te!==Ut||ce!==si||Ae!==Ci)&&(i.stencilFunc(Ut,si,Ci),te=Ut,ce=si,Ae=Ci)},setOp:function(Ut,si,Ci){(Te!==Ut||lt!==si||sn!==Ci)&&(i.stencilOp(Ut,si,Ci),Te=Ut,lt=si,sn=Ci)},setLocked:function(Ut){W=Ut},setClear:function(Ut){Rn!==Ut&&(i.clearStencil(Ut),Rn=Ut)},reset:function(){W=!1,_e=null,te=null,ce=null,Ae=null,Te=null,lt=null,sn=null,Rn=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],p=null,y=!1,g=null,m=null,v=null,b=null,_=null,R=null,S=null,L=new Ie(0,0,0),P=0,w=!1,T=null,H=null,N=null,U=null,F=null,I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=X>=2);let Q=null,se={},le=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Qe=new Et().fromArray(le),K=new Et().fromArray(Ce);function ne(W,_e,te,ce){let Ae=new Uint8Array(4),Te=i.createTexture();i.bindTexture(W,Te),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<te;lt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(_e+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Te}let ie={};ie[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(bs),it(!1),at(Dh),ae(i.CULL_FACE),G(lr);function ae(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function Me(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Be(W,_e){return d[W]!==_e?(i.bindFramebuffer(W,_e),d[W]=_e,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_e),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function We(W,_e){let te=f,ce=!1;if(W){te=h.get(_e),te===void 0&&(te=[],h.set(_e,te));let Ae=W.textures;if(te.length!==Ae.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,lt=Ae.length;Te<lt;Te++)te[Te]=i.COLOR_ATTACHMENT0+Te;te.length=Ae.length,ce=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ce=!0);ce&&i.drawBuffers(te)}function Ze(W){return p!==W?(i.useProgram(W),p=W,!0):!1}let et={[kr]:i.FUNC_ADD,[qm]:i.FUNC_SUBTRACT,[Ym]:i.FUNC_REVERSE_SUBTRACT};et[Zm]=i.MIN,et[$m]=i.MAX;let Mt={[Km]:i.ZERO,[Jm]:i.ONE,[jm]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[rg]:i.SRC_ALPHA_SATURATE,[ng]:i.DST_COLOR,[eg]:i.DST_ALPHA,[Qm]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[ig]:i.ONE_MINUS_DST_COLOR,[tg]:i.ONE_MINUS_DST_ALPHA,[sg]:i.CONSTANT_COLOR,[og]:i.ONE_MINUS_CONSTANT_COLOR,[ag]:i.CONSTANT_ALPHA,[cg]:i.ONE_MINUS_CONSTANT_ALPHA};function G(W,_e,te,ce,Ae,Te,lt,sn,Rn,Ut){if(W===lr){y===!0&&(Me(i.BLEND),y=!1);return}if(y===!1&&(ae(i.BLEND),y=!0),W!==Xm){if(W!==g||Ut!==w){if((m!==kr||_!==kr)&&(i.blendEquation(i.FUNC_ADD),m=kr,_=kr),Ut)switch(W){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.ONE,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}v=null,b=null,R=null,S=null,L.set(0,0,0),P=0,g=W,w=Ut}return}Ae=Ae||_e,Te=Te||te,lt=lt||ce,(_e!==m||Ae!==_)&&(i.blendEquationSeparate(et[_e],et[Ae]),m=_e,_=Ae),(te!==v||ce!==b||Te!==R||lt!==S)&&(i.blendFuncSeparate(Mt[te],Mt[ce],Mt[Te],Mt[lt]),v=te,b=ce,R=Te,S=lt),(sn.equals(L)===!1||Rn!==P)&&(i.blendColor(sn.r,sn.g,sn.b,Rn),L.copy(sn),P=Rn),g=W,w=!1}function zt(W,_e){W.side===en?Me(i.CULL_FACE):ae(i.CULL_FACE);let te=W.side===Un;_e&&(te=!te),it(te),W.blending===gs&&W.transparent===!1?G(lr):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let ce=W.stencilWrite;a.setTest(ce),ce&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){T!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),T=W)}function at(W){W!==Gm?(ae(i.CULL_FACE),W!==H&&(W===Dh?i.cullFace(i.BACK):W===Wm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),H=W}function Xe(W){W!==N&&(B&&i.lineWidth(W),N=W)}function Bt(W,_e,te){W?(ae(i.POLYGON_OFFSET_FILL),(U!==_e||F!==te)&&(i.polygonOffset(_e,te),U=_e,F=te)):Me(i.POLYGON_OFFSET_FILL)}function qe(W){W?ae(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function D(W){W===void 0&&(W=i.TEXTURE0+I-1),Q!==W&&(i.activeTexture(W),Q=W)}function A(W,_e,te){te===void 0&&(Q===null?te=i.TEXTURE0+I-1:te=Q);let ce=se[te];ce===void 0&&(ce={type:void 0,texture:void 0},se[te]=ce),(ce.type!==W||ce.texture!==_e)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(W,_e||ie[W]),ce.type=W,ce.texture=_e)}function Z(){let W=se[Q];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(W){Qe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Qe.copy(W))}function Re(W){K.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),K.copy(W))}function gt(W,_e){let te=l.get(_e);te===void 0&&(te=new WeakMap,l.set(_e,te));let ce=te.get(W);ce===void 0&&(ce=i.getUniformBlockIndex(_e,W.name),te.set(W,ce))}function ct(W,_e){let ce=l.get(_e).get(W);c.get(_e)!==ce&&(i.uniformBlockBinding(_e,ce,W.__bindingPointIndex),c.set(_e,ce))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,se={},d={},h=new WeakMap,f=[],p=null,y=!1,g=null,m=null,v=null,b=null,_=null,R=null,S=null,L=new Ie(0,0,0),P=0,w=!1,T=null,H=null,N=null,U=null,F=null,Qe.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Me,bindFramebuffer:Be,drawBuffers:We,useProgram:Ze,setBlending:G,setMaterial:zt,setFlipSided:it,setCullFace:at,setLineWidth:Xe,setPolygonOffset:Bt,setScissorTest:qe,activeTexture:D,bindTexture:A,unbindTexture:Z,compressedTexImage2D:z,compressedTexImage3D:$,texImage2D:Ee,texImage3D:Ne,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:$e,texStorage3D:he,texSubImage2D:ee,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ye,viewport:Re,reset:Gt}}function Df(i,e,t,n){let r=yb(n);switch(t){case ap:return i*e;case lp:return i*e;case up:return i*e*2;case wd:return i*e/r.components*r.byteLength;case Td:return i*e/r.components*r.byteLength;case dp:return i*e*2/r.components*r.byteLength;case Sd:return i*e*2/r.components*r.byteLength;case cp:return i*e*3/r.components*r.byteLength;case $n:return i*e*4/r.components*r.byteLength;case Rd:return i*e*4/r.components*r.byteLength;case Sa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:case uu:return Math.max(i,16)*Math.max(e,8)/4;case au:case lu:return Math.max(i,8)*Math.max(e,8)/2;case du:case hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Au:case Cu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hp:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pu:case Lu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yb(i){switch(i){case zi:case rp:return{byteLength:1,components:1};case mo:case sp:case Ro:return{byteLength:2,components:1};case _d:case Md:return{byteLength:2,components:4};case Nr:case Ed:case ui:return{byteLength:4,components:1};case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vb(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,A){return f?new OffscreenCanvas(D,A):Ha("canvas")}function y(D,A,Z){let z=1,$=qe(D);if(($.width>Z||$.height>Z)&&(z=Z/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ee=Math.floor(z*$.width),pe=Math.floor(z*$.height);d===void 0&&(d=p(ee,pe));let fe=A?p(ee,pe):d;return fe.width=ee,fe.height=pe,fe.getContext("2d").drawImage(D,0,0,ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ee+"x"+pe+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,A,Z,z,$=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=A;if(A===i.RED&&(Z===i.FLOAT&&(ee=i.R32F),Z===i.HALF_FLOAT&&(ee=i.R16F),Z===i.UNSIGNED_BYTE&&(ee=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ee=i.R8UI),Z===i.UNSIGNED_SHORT&&(ee=i.R16UI),Z===i.UNSIGNED_INT&&(ee=i.R32UI),Z===i.BYTE&&(ee=i.R8I),Z===i.SHORT&&(ee=i.R16I),Z===i.INT&&(ee=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(ee=i.RG32F),Z===i.HALF_FLOAT&&(ee=i.RG16F),Z===i.UNSIGNED_BYTE&&(ee=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Z===i.UNSIGNED_INT&&(ee=i.RG32UI),Z===i.BYTE&&(ee=i.RG8I),Z===i.SHORT&&(ee=i.RG16I),Z===i.INT&&(ee=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),Z===i.UNSIGNED_INT&&(ee=i.RGB32UI),Z===i.BYTE&&(ee=i.RGB8I),Z===i.SHORT&&(ee=i.RGB16I),Z===i.INT&&(ee=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ee=i.RGBA32UI),Z===i.BYTE&&(ee=i.RGBA8I),Z===i.SHORT&&(ee=i.RGBA16I),Z===i.INT&&(ee=i.RGBA32I)),A===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),A===i.RGBA){let pe=$?cc:wt.getTransfer(z);Z===i.FLOAT&&(ee=i.RGBA32F),Z===i.HALF_FLOAT&&(ee=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ee=pe===Nt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(D,A){let Z;return D?A===null||A===Nr||A===Ms?Z=i.DEPTH24_STENCIL8:A===ui?Z=i.DEPTH32F_STENCIL8:A===mo&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Nr||A===Ms?Z=i.DEPTH_COMPONENT24:A===ui?Z=i.DEPTH_COMPONENT32F:A===mo&&(Z=i.DEPTH_COMPONENT16),Z}function R(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xn&&D.minFilter!==xi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function S(D){let A=D.target;A.removeEventListener("dispose",S),P(A),A.isVideoTexture&&u.delete(A)}function L(D){let A=D.target;A.removeEventListener("dispose",L),T(A)}function P(D){let A=n.get(D);if(A.__webglInit===void 0)return;let Z=D.source,z=h.get(Z);if(z){let $=z[A.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(D),Object.keys(z).length===0&&h.delete(Z)}n.remove(D)}function w(D){let A=n.get(D);i.deleteTexture(A.__webglTexture);let Z=D.source,z=h.get(Z);delete z[A.__cacheKey],o.memory.textures--}function T(D){let A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(A.__webglFramebuffer[z]))for(let $=0;$<A.__webglFramebuffer[z].length;$++)i.deleteFramebuffer(A.__webglFramebuffer[z][$]);else i.deleteFramebuffer(A.__webglFramebuffer[z]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[z])}else{if(Array.isArray(A.__webglFramebuffer))for(let z=0;z<A.__webglFramebuffer.length;z++)i.deleteFramebuffer(A.__webglFramebuffer[z]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let z=0;z<A.__webglColorRenderbuffer.length;z++)A.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[z]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Z=D.textures;for(let z=0,$=Z.length;z<$;z++){let ee=n.get(Z[z]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(Z[z])}n.remove(D)}let H=0;function N(){H=0}function U(){let D=H;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),H+=1,D}function F(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function I(D,A){let Z=n.get(D);if(D.isVideoTexture&&Xe(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){let z=D.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Z,D,A);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function B(D,A){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){K(Z,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function X(D,A){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){K(Z,D,A);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function V(D,A){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){ne(Z,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}let Q={[su]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[ou]:i.MIRRORED_REPEAT},se={[Xn]:i.NEAREST,[yg]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[xi]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[Ur]:i.LINEAR_MIPMAP_LINEAR},le={[_g]:i.NEVER,[Ag]:i.ALWAYS,[Mg]:i.LESS,[pp]:i.LEQUAL,[wg]:i.EQUAL,[Rg]:i.GEQUAL,[Tg]:i.GREATER,[Sg]:i.NOTEQUAL};function Ce(D,A){if(A.type===ui&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xi||A.magFilter===ul||A.magFilter===Ko||A.magFilter===Ur||A.minFilter===xi||A.minFilter===ul||A.minFilter===Ko||A.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,se[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,le[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Xn||A.minFilter!==Ko&&A.minFilter!==Ur||A.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Qe(D,A){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",S));let z=A.source,$=h.get(z);$===void 0&&($={},h.set(z,$));let ee=F(A);if(ee!==D.__cacheKey){$[ee]===void 0&&($[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),$[ee].usedTimes++;let pe=$[D.__cacheKey];pe!==void 0&&($[D.__cacheKey].usedTimes--,pe.usedTimes===0&&w(A)),D.__cacheKey=ee,D.__webglTexture=$[ee].texture}return Z}function K(D,A,Z){let z=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(z=i.TEXTURE_3D);let $=Qe(D,A),ee=A.source;t.bindTexture(z,D.__webglTexture,i.TEXTURE0+Z);let pe=n.get(ee);if(ee.version!==pe.__version||$===!0){t.activeTexture(i.TEXTURE0+Z);let fe=wt.getPrimaries(wt.workingColorSpace),ye=A.colorSpace===ar?null:wt.getPrimaries(A.colorSpace),$e=A.colorSpace===ar||fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let he=y(A.image,!1,r.maxTextureSize);he=Bt(A,he);let Ee=s.convert(A.format,A.colorSpace),Ne=s.convert(A.type),Ye=b(A.internalFormat,Ee,Ne,A.colorSpace,A.isVideoTexture);Ce(z,A);let Re,gt=A.mipmaps,ct=A.isVideoTexture!==!0,Gt=pe.__version===void 0||$===!0,W=ee.dataReady,_e=R(A,he);if(A.isDepthTexture)Ye=_(A.format===ws,A.type),Gt&&(ct?t.texStorage2D(i.TEXTURE_2D,1,Ye,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ye,he.width,he.height,0,Ee,Ne,null));else if(A.isDataTexture)if(gt.length>0){ct&&Gt&&t.texStorage2D(i.TEXTURE_2D,_e,Ye,gt[0].width,gt[0].height);for(let te=0,ce=gt.length;te<ce;te++)Re=gt[te],ct?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Re.width,Re.height,Ee,Ne,Re.data):t.texImage2D(i.TEXTURE_2D,te,Ye,Re.width,Re.height,0,Ee,Ne,Re.data);A.generateMipmaps=!1}else ct?(Gt&&t.texStorage2D(i.TEXTURE_2D,_e,Ye,he.width,he.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ee,Ne,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,he.width,he.height,0,Ee,Ne,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&Gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ye,gt[0].width,gt[0].height,he.depth);for(let te=0,ce=gt.length;te<ce;te++)if(Re=gt[te],A.format!==$n)if(Ee!==null)if(ct){if(W)if(A.layerUpdates.size>0){let Ae=Df(Re.width,Re.height,A.format,A.type);for(let Te of A.layerUpdates){let lt=Re.data.subarray(Te*Ae/Re.data.BYTES_PER_ELEMENT,(Te+1)*Ae/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Te,Re.width,Re.height,1,Ee,lt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Re.width,Re.height,he.depth,Ee,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ye,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Re.width,Re.height,he.depth,Ee,Ne,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ye,Re.width,Re.height,he.depth,0,Ee,Ne,Re.data)}else{ct&&Gt&&t.texStorage2D(i.TEXTURE_2D,_e,Ye,gt[0].width,gt[0].height);for(let te=0,ce=gt.length;te<ce;te++)Re=gt[te],A.format!==$n?Ee!==null?ct?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Re.width,Re.height,Ee,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ye,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Re.width,Re.height,Ee,Ne,Re.data):t.texImage2D(i.TEXTURE_2D,te,Ye,Re.width,Re.height,0,Ee,Ne,Re.data)}else if(A.isDataArrayTexture)if(ct){if(Gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ye,he.width,he.height,he.depth),W)if(A.layerUpdates.size>0){let te=Df(he.width,he.height,A.format,A.type);for(let ce of A.layerUpdates){let Ae=he.data.subarray(ce*te/he.data.BYTES_PER_ELEMENT,(ce+1)*te/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,he.width,he.height,1,Ee,Ne,Ae)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ee,Ne,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,he.width,he.height,he.depth,0,Ee,Ne,he.data);else if(A.isData3DTexture)ct?(Gt&&t.texStorage3D(i.TEXTURE_3D,_e,Ye,he.width,he.height,he.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ee,Ne,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,he.width,he.height,he.depth,0,Ee,Ne,he.data);else if(A.isFramebufferTexture){if(Gt)if(ct)t.texStorage2D(i.TEXTURE_2D,_e,Ye,he.width,he.height);else{let te=he.width,ce=he.height;for(let Ae=0;Ae<_e;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ye,te,ce,0,Ee,Ne,null),te>>=1,ce>>=1}}else if(gt.length>0){if(ct&&Gt){let te=qe(gt[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ye,te.width,te.height)}for(let te=0,ce=gt.length;te<ce;te++)Re=gt[te],ct?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ee,Ne,Re):t.texImage2D(i.TEXTURE_2D,te,Ye,Ee,Ne,Re);A.generateMipmaps=!1}else if(ct){if(Gt){let te=qe(he);t.texStorage2D(i.TEXTURE_2D,_e,Ye,te.width,te.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ne,he)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Ee,Ne,he);g(A)&&m(z),pe.__version=ee.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ne(D,A,Z){if(A.image.length!==6)return;let z=Qe(D,A),$=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Z);let ee=n.get($);if($.version!==ee.__version||z===!0){t.activeTexture(i.TEXTURE0+Z);let pe=wt.getPrimaries(wt.workingColorSpace),fe=A.colorSpace===ar?null:wt.getPrimaries(A.colorSpace),ye=A.colorSpace===ar||pe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let $e=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!$e&&!he?Ee[ce]=y(A.image[ce],!0,r.maxCubemapSize):Ee[ce]=he?A.image[ce].image:A.image[ce],Ee[ce]=Bt(A,Ee[ce]);let Ne=Ee[0],Ye=s.convert(A.format,A.colorSpace),Re=s.convert(A.type),gt=b(A.internalFormat,Ye,Re,A.colorSpace),ct=A.isVideoTexture!==!0,Gt=ee.__version===void 0||z===!0,W=$.dataReady,_e=R(A,Ne);Ce(i.TEXTURE_CUBE_MAP,A);let te;if($e){ct&&Gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,gt,Ne.width,Ne.height);for(let ce=0;ce<6;ce++){te=Ee[ce].mipmaps;for(let Ae=0;Ae<te.length;Ae++){let Te=te[Ae];A.format!==$n?Ye!==null?ct?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Te.width,Te.height,Ye,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,gt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Te.width,Te.height,Ye,Re,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,gt,Te.width,Te.height,0,Ye,Re,Te.data)}}}else{if(te=A.mipmaps,ct&&Gt){te.length>0&&_e++;let ce=qe(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,gt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(he){ct?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Ye,Re,Ee[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,gt,Ee[ce].width,Ee[ce].height,0,Ye,Re,Ee[ce].data);for(let Ae=0;Ae<te.length;Ae++){let lt=te[Ae].image[ce].image;ct?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,lt.width,lt.height,Ye,Re,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,gt,lt.width,lt.height,0,Ye,Re,lt.data)}}else{ct?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ye,Re,Ee[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,gt,Ye,Re,Ee[ce]);for(let Ae=0;Ae<te.length;Ae++){let Te=te[Ae];ct?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Ye,Re,Te.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,gt,Ye,Re,Te.image[ce])}}}g(A)&&m(i.TEXTURE_CUBE_MAP),ee.__version=$.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ie(D,A,Z,z,$,ee){let pe=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),ye=b(Z.internalFormat,pe,fe,Z.colorSpace),$e=n.get(A),he=n.get(Z);if(he.__renderTarget=A,!$e.__hasExternalTextures){let Ee=Math.max(1,A.width>>ee),Ne=Math.max(1,A.height>>ee);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ee,ye,Ee,Ne,A.depth,0,pe,fe,null):t.texImage2D($,ee,ye,Ee,Ne,0,pe,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),at(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,$,he.__webglTexture,0,it(A)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,$,he.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(D,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){let z=A.depthTexture,$=z&&z.isDepthTexture?z.type:null,ee=_(A.stencilBuffer,$),pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=it(A);at(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ee,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ee,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,D)}else{let z=A.textures;for(let $=0;$<z.length;$++){let ee=z[$],pe=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),ye=b(ee.internalFormat,pe,fe,ee.colorSpace),$e=it(A);Z&&at(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ye,A.width,A.height):at(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,ye,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ye,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(A.depthTexture);z.__renderTarget=A,(!z.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);let $=z.__webglTexture,ee=it(A);if(A.depthTexture.format===xs)at(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(A.depthTexture.format===ws)at(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Be(D){let A=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let z=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),z){let $=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),A.__depthDisposeCallback=$}A.__boundDepthTexture=z}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Me(A.__webglFramebuffer,D)}else if(Z){A.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[z]),A.__webglDepthbuffer[z]===void 0)A.__webglDepthbuffer[z]=i.createRenderbuffer(),ae(A.__webglDepthbuffer[z],D,!1);else{let $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ae(A.__webglDepthbuffer,D,!1);else{let z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(D,A,Z){let z=n.get(D);A!==void 0&&ie(z.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Be(D)}function Ze(D){let A=D.texture,Z=n.get(D),z=n.get(A);D.addEventListener("dispose",L);let $=D.textures,ee=D.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=A.version,o.memory.textures++),ee){Z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[fe]=[];for(let ye=0;ye<A.mipmaps.length;ye++)Z.__webglFramebuffer[fe][ye]=i.createFramebuffer()}else Z.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)Z.__webglFramebuffer[fe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(pe)for(let fe=0,ye=$.length;fe<ye;fe++){let $e=n.get($[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&at(D)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let fe=0;fe<$.length;fe++){let ye=$[fe];Z.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[fe]);let $e=s.convert(ye.format,ye.colorSpace),he=s.convert(ye.type),Ee=b(ye.internalFormat,$e,he,ye.colorSpace,D.isXRRenderTarget===!0),Ne=it(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ee,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)ie(Z.__webglFramebuffer[fe][ye],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ie(Z.__webglFramebuffer[fe],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(A)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,ye=$.length;fe<ye;fe++){let $e=$[fe],he=n.get($e);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Ce(i.TEXTURE_2D,$e),ie(Z.__webglFramebuffer,D,$e,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),g($e)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,z.__webglTexture),Ce(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)ie(Z.__webglFramebuffer[ye],D,A,i.COLOR_ATTACHMENT0,fe,ye);else ie(Z.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,fe,0);g(A)&&m(fe),t.unbindTexture()}D.depthBuffer&&Be(D)}function et(D){let A=D.textures;for(let Z=0,z=A.length;Z<z;Z++){let $=A[Z];if(g($)){let ee=v(D),pe=n.get($).__webglTexture;t.bindTexture(ee,pe),m(ee),t.unbindTexture()}}}let Mt=[],G=[];function zt(D){if(D.samples>0){if(at(D)===!1){let A=D.textures,Z=D.width,z=D.height,$=i.COLOR_BUFFER_BIT,ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(D),fe=A.length>1;if(fe)for(let ye=0;ye<A.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<A.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);let $e=n.get(A[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,Z,z,0,0,Z,z,$,i.NEAREST),c===!0&&(Mt.length=0,G.length=0,Mt.push(i.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Mt.push(ee),G.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<A.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);let $e=n.get(A[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function it(D){return Math.min(r.maxSamples,D.samples)}function at(D){let A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(D){let A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Bt(D,A){let Z=D.colorSpace,z=D.format,$=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Is&&Z!==ar&&(wt.getTransfer(Z)===Nt?(z!==$n||$!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=at}function bb(i,e){function t(n,r=ar){let s,o=wt.getTransfer(r);if(n===zi)return i.UNSIGNED_BYTE;if(n===_d)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Md)return i.UNSIGNED_SHORT_5_5_5_1;if(n===op)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rp)return i.BYTE;if(n===sp)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===Ed)return i.INT;if(n===Nr)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===Ro)return i.HALF_FLOAT;if(n===ap)return i.ALPHA;if(n===cp)return i.RGB;if(n===$n)return i.RGBA;if(n===lp)return i.LUMINANCE;if(n===up)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===wd)return i.RED;if(n===Td)return i.RED_INTEGER;if(n===dp)return i.RG;if(n===Sd)return i.RG_INTEGER;if(n===Rd)return i.RGBA_INTEGER;if(n===Sa||n===Ra||n===Aa||n===Ca)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===au||n===cu||n===lu||n===uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===du||n===hu||n===fu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===du||n===hu)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pu||n===mu||n===gu||n===xu||n===yu||n===vu||n===bu||n===Eu||n===_u||n===Mu||n===wu||n===Tu||n===Su||n===Ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ru)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Au||n===Cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ia)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hp||n===Iu||n===Pu||n===Lu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zu=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},we=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eb={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mb=`
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

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Bn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:_b,fragmentShader:Mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends dr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null,y=new $u,g=t.getContextAttributes(),m=null,v=null,b=[],_=[],R=new me,S=null,L=new vn;L.viewport=new Et;let P=new vn;P.viewport=new Et;let w=[L,P],T=new Zu,H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=b[K];return ne===void 0&&(ne=new ho,b[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=b[K];return ne===void 0&&(ne=new ho,b[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=b[K];return ne===void 0&&(ne=new ho,b[K]=ne),ne.getHandSpace()};function U(K){let ne=_.indexOf(K.inputSource);if(ne===-1)return;let ie=b[ne];ie!==void 0&&(ie.update(K.inputSource,K.frame,l||o),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",I);for(let K=0;K<b.length;K++){let ne=_[K];ne!==null&&(_[K]=null,b[K].disconnect(ne))}H=null,N=null,y.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",F),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Oi(f.framebufferWidth,f.framebufferHeight,{format:$n,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,ie=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?ws:xs,ie=g.stencil?Ms:Nr);let Me={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Oi(h.textureWidth,h.textureHeight,{format:$n,type:zi,depthTexture:new Ga(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(K){for(let ne=0;ne<K.removed.length;ne++){let ie=K.removed[ne],ae=_.indexOf(ie);ae>=0&&(_[ae]=null,b[ae].disconnect(ie))}for(let ne=0;ne<K.added.length;ne++){let ie=K.added[ne],ae=_.indexOf(ie);if(ae===-1){for(let Be=0;Be<b.length;Be++)if(Be>=_.length){_.push(ie),ae=Be;break}else if(_[Be]===null){_[Be]=ie,ae=Be;break}if(ae===-1)break}let Me=b[ae];Me&&Me.connect(ie)}}let B=new x,X=new x;function V(K,ne,ie){B.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);let ae=B.distanceTo(X),Me=ne.projectionMatrix.elements,Be=ie.projectionMatrix.elements,We=Me[14]/(Me[10]-1),Ze=Me[14]/(Me[10]+1),et=(Me[9]+1)/Me[5],Mt=(Me[9]-1)/Me[5],G=(Me[8]-1)/Me[0],zt=(Be[8]+1)/Be[0],it=We*G,at=We*zt,Xe=ae/(-G+zt),Bt=Xe*-G;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Bt),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let qe=We+Xe,D=Ze+Xe,A=it-Bt,Z=at+(ae-Bt),z=et*Ze/D*qe,$=Mt*Ze/D*qe;K.projectionMatrix.makePerspective(A,Z,z,$,qe,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ie=K.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(ie=y.depthFar)),T.near=P.near=L.near=ne,T.far=P.far=L.far=ie,(H!==T.near||N!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,N=T.far),L.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,T.layers.mask=L.layers.mask|P.layers.mask;let ae=K.parent,Me=T.cameras;Q(T,ae);for(let Be=0;Be<Me.length;Be++)Q(Me[Be],ae);Me.length===2?V(T,L,P):T.projectionMatrix.copy(L.projectionMatrix),se(K,T,ae)};function se(K,ne,ie){ie===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(T)};let le=null;function Ce(K,ne){if(u=ne.getViewerPose(l||o),p=ne,u!==null){let ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ae=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let Be=0;Be<ie.length;Be++){let We=ie[Be],Ze=null;if(f!==null)Ze=f.getViewport(We);else{let Mt=d.getViewSubImage(h,We);Ze=Mt.viewport,Be===0&&(e.setRenderTargetTextures(v,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(v))}let et=w[Be];et===void 0&&(et=new vn,et.layers.enable(Be),et.viewport=new Et,w[Be]=et),et.matrix.fromArray(We.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(We.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Be===0&&(T.matrix.copy(et.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ae===!0&&T.cameras.push(et)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){let Be=d.getDepthInformation(ie[0]);Be&&Be.isValid&&Be.texture&&y.init(e,Be,r.renderState)}}for(let ie=0;ie<b.length;ie++){let ae=_[ie],Me=b[ie];ae!==null&&Me!==void 0&&Me.update(ae,ne,l||o)}le&&le(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let Qe=new yp;Qe.setAnimationLoop(Ce),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}},Pr=new Qt,wb=new be;function Tb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,xp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,_=v.envMapRotation;b&&(g.envMap.value=b,Pr.copy(_),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(Pr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sb(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let _=b.program;n.uniformBlockBinding(v,_)}function l(v,b){let _=r[v.id];_===void 0&&(p(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",g));let R=b.program;n.updateUBOMapping(v,R);let S=e.render.frame;s[v.id]!==S&&(h(v),s[v.id]=S)}function u(v){let b=d();v.__bindingPointIndex=b;let _=i.createBuffer(),R=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=r[v.id],_=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,L=_.length;S<L;S++){let P=Array.isArray(_[S])?_[S]:[_[S]];for(let w=0,T=P.length;w<T;w++){let H=P[w];if(f(H,S,w,R)===!0){let N=H.__offset,U=Array.isArray(H.value)?H.value:[H.value],F=0;for(let I=0;I<U.length;I++){let B=U[I],X=y(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+F,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,_,R){let S=v.value,L=b+"_"+_;if(R[L]===void 0)return typeof S=="number"||typeof S=="boolean"?R[L]=S:R[L]=S.clone(),!0;{let P=R[L];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return R[L]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function p(v){let b=v.uniforms,_=0,R=16;for(let L=0,P=b.length;L<P;L++){let w=Array.isArray(b[L])?b[L]:[b[L]];for(let T=0,H=w.length;T<H;T++){let N=w[T],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,I=U.length;F<I;F++){let B=U[F],X=y(B),V=_%R,Q=V%X.boundary,se=V+Q;_+=Q,se!==0&&R-se<X.storage&&(_+=R-se),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=X.storage}}}let S=_%R;return S>0&&(_+=R-S),v.__size=_,v.__cache={},this}function y(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var yo=class{constructor(e={}){let{canvas:t=Ig(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=ur,this.toneMappingExposure=1;let _=this,R=!1,S=0,L=0,P=null,w=-1,T=null,H=new Et,N=new Et,U=null,F=new Ie(0),I=0,B=t.width,X=t.height,V=1,Q=null,se=null,le=new Et(0,0,B,X),Ce=new Et(0,0,B,X),Qe=!1,K=new xo,ne=!1,ie=!1,ae=new be,Me=new be,Be=new x,We=new Et,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Mt(){return P===null?V:1}let G=n;function zt(k,q){return t.getContext(k,q)}try{let k={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yd}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Te,!1),G===null){let q="webgl2";if(G=zt(q,k),G===null)throw zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let it,at,Xe,Bt,qe,D,A,Z,z,$,ee,pe,fe,ye,$e,he,Ee,Ne,Ye,Re,gt,ct,Gt,W;function _e(){it=new Vy(G),it.init(),ct=new bb(G,it),at=new Uy(G,it,e,ct),Xe=new xb(G,it),at.reverseDepthBuffer&&h&&Xe.buffers.depth.setReversed(!0),Bt=new Xy(G),qe=new rb,D=new vb(G,it,Xe,qe,at,ct,Bt),A=new Ny(_),Z=new Oy(_),z=new jg(G),Gt=new Hy(G,z),$=new Gy(G,z,Bt,Gt),ee=new Yy(G,$,z,Bt),Ye=new qy(G,at,D),he=new By(qe),pe=new ib(_,A,Z,it,at,Gt,he),fe=new Tb(_,qe),ye=new ob,$e=new hb(it),Ne=new ky(_,A,Z,Xe,ee,f,c),Ee=new mb(_,ee,at),W=new Sb(G,Bt,at,Xe),Re=new Dy(G,it,Bt),gt=new Wy(G,it,Bt),Bt.programs=pe.programs,_.capabilities=at,_.extensions=it,_.properties=qe,_.renderLists=ye,_.shadowMap=Ee,_.state=Xe,_.info=Bt}_e();let te=new Ku(_,G);this.xr=te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let k=it.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=it.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(k){k!==void 0&&(V=k,this.setSize(B,X,!1))},this.getSize=function(k){return k.set(B,X)},this.setSize=function(k,q,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=k,X=q,t.width=Math.floor(k*V),t.height=Math.floor(q*V),J===!0&&(t.style.width=k+"px",t.style.height=q+"px"),this.setViewport(0,0,k,q)},this.getDrawingBufferSize=function(k){return k.set(B*V,X*V).floor()},this.setDrawingBufferSize=function(k,q,J){B=k,X=q,V=J,t.width=Math.floor(k*J),t.height=Math.floor(q*J),this.setViewport(0,0,k,q)},this.getCurrentViewport=function(k){return k.copy(H)},this.getViewport=function(k){return k.copy(le)},this.setViewport=function(k,q,J,j){k.isVector4?le.set(k.x,k.y,k.z,k.w):le.set(k,q,J,j),Xe.viewport(H.copy(le).multiplyScalar(V).round())},this.getScissor=function(k){return k.copy(Ce)},this.setScissor=function(k,q,J,j){k.isVector4?Ce.set(k.x,k.y,k.z,k.w):Ce.set(k,q,J,j),Xe.scissor(N.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(k){Xe.setScissorTest(Qe=k)},this.setOpaqueSort=function(k){Q=k},this.setTransparentSort=function(k){se=k},this.getClearColor=function(k){return k.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(k=!0,q=!0,J=!0){let j=0;if(k){let Y=!1;if(P!==null){let ge=P.texture.format;Y=ge===Rd||ge===Sd||ge===Td}if(Y){let ge=P.texture.type,Se=ge===zi||ge===Nr||ge===mo||ge===Ms||ge===_d||ge===Md,Le=Ne.getClearColor(),ke=Ne.getClearAlpha(),st=Le.r,ut=Le.g,He=Le.b;Se?(p[0]=st,p[1]=ut,p[2]=He,p[3]=ke,G.clearBufferuiv(G.COLOR,0,p)):(y[0]=st,y[1]=ut,y[2]=He,y[3]=ke,G.clearBufferiv(G.COLOR,0,y))}else j|=G.COLOR_BUFFER_BIT}q&&(j|=G.DEPTH_BUFFER_BIT),J&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ye.dispose(),$e.dispose(),qe.dispose(),A.dispose(),Z.dispose(),ee.dispose(),Gt.dispose(),W.dispose(),pe.dispose(),te.dispose(),te.removeEventListener("sessionstart",Rh),te.removeEventListener("sessionend",Ah),Tr.stop()};function ce(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let k=Bt.autoReset,q=Ee.enabled,J=Ee.autoUpdate,j=Ee.needsUpdate,Y=Ee.type;_e(),Bt.autoReset=k,Ee.enabled=q,Ee.autoUpdate=J,Ee.needsUpdate=j,Ee.type=Y}function Te(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function lt(k){let q=k.target;q.removeEventListener("dispose",lt),sn(q)}function sn(k){Rn(k),qe.remove(k)}function Rn(k){let q=qe.get(k).programs;q!==void 0&&(q.forEach(function(J){pe.releaseProgram(J)}),k.isShaderMaterial&&pe.releaseShaderCache(k))}this.renderBufferDirect=function(k,q,J,j,Y,ge){q===null&&(q=Ze);let Se=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=zm(k,q,J,j,Y);Xe.setMaterial(j,Se);let ke=J.index,st=1;if(j.wireframe===!0){if(ke=$.getWireframeAttribute(J),ke===void 0)return;st=2}let ut=J.drawRange,He=J.attributes.position,Tt=ut.start*st,Wt=(ut.start+ut.count)*st;ge!==null&&(Tt=Math.max(Tt,ge.start*st),Wt=Math.min(Wt,(ge.start+ge.count)*st)),ke!==null?(Tt=Math.max(Tt,0),Wt=Math.min(Wt,ke.count)):He!=null&&(Tt=Math.max(Tt,0),Wt=Math.min(Wt,He.count));let Zt=Wt-Tt;if(Zt<0||Zt===1/0)return;Gt.setup(Y,j,Le,J,ke);let Hn,Lt=Re;if(ke!==null&&(Hn=z.get(ke),Lt=gt,Lt.setIndex(Hn)),Y.isMesh)j.wireframe===!0?(Xe.setLineWidth(j.wireframeLinewidth*Mt()),Lt.setMode(G.LINES)):Lt.setMode(G.TRIANGLES);else if(Y.isLine){let De=j.linewidth;De===void 0&&(De=1),Xe.setLineWidth(De*Mt()),Y.isLineSegments?Lt.setMode(G.LINES):Y.isLineLoop?Lt.setMode(G.LINE_LOOP):Lt.setMode(G.LINE_STRIP)}else Y.isPoints?Lt.setMode(G.POINTS):Y.isSprite&&Lt.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let De=Y._multiDrawStarts,Ii=Y._multiDrawCounts,kt=Y._multiDrawCount,oi=ke?z.get(ke).bytesPerElement:1,Qr=qe.get(j).currentProgram.getUniforms();for(let Vn=0;Vn<kt;Vn++)Qr.setValue(G,"_gl_DrawID",Vn),Lt.render(De[Vn]/oi,Ii[Vn])}else if(Y.isInstancedMesh)Lt.renderInstances(Tt,Zt,Y.count);else if(J.isInstancedBufferGeometry){let De=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ii=Math.min(J.instanceCount,De);Lt.renderInstances(Tt,Zt,Ii)}else Lt.render(Tt,Zt)};function Ut(k,q,J){k.transparent===!0&&k.side===en&&k.forceSinglePass===!1?(k.side=Un,k.needsUpdate=!0,$o(k,q,J),k.side=yi,k.needsUpdate=!0,$o(k,q,J),k.side=en):$o(k,q,J)}this.compile=function(k,q,J=null){J===null&&(J=k),m=$e.get(J),m.init(q),b.push(m),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),k!==J&&k.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();let j=new Set;return k.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ge=Y.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let Le=ge[Se];Ut(Le,J,Y),j.add(Le)}else Ut(ge,J,Y),j.add(ge)}),b.pop(),m=null,j},this.compileAsync=function(k,q,J=null){let j=this.compile(k,q,J);return new Promise(Y=>{function ge(){if(j.forEach(function(Se){qe.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){Y(k);return}setTimeout(ge,10)}it.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let si=null;function Ci(k){si&&si(k)}function Rh(){Tr.stop()}function Ah(){Tr.start()}let Tr=new yp;Tr.setAnimationLoop(Ci),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(k){si=k,te.setAnimationLoop(k),k===null?Tr.stop():Tr.start()},te.addEventListener("sessionstart",Rh),te.addEventListener("sessionend",Ah),this.render=function(k,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(q),q=te.getCamera()),k.isScene===!0&&k.onBeforeRender(_,k,q,P),m=$e.get(k,b.length),m.init(q),b.push(m),Me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(Me),ie=this.localClippingEnabled,ne=he.init(this.clippingPlanes,ie),g=ye.get(k,v.length),g.init(),v.push(g),te.enabled===!0&&te.isPresenting===!0){let ge=_.xr.getDepthSensingMesh();ge!==null&&ll(ge,q,-1/0,_.sortObjects)}ll(k,q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Q,se),et=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,et&&Ne.addToRenderList(g,k),this.info.render.frame++,ne===!0&&he.beginShadows();let J=m.state.shadowsArray;Ee.render(J,k,q),ne===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,Y=g.transmissive;if(m.setupLights(),q.isArrayCamera){let ge=q.cameras;if(Y.length>0)for(let Se=0,Le=ge.length;Se<Le;Se++){let ke=ge[Se];Ih(j,Y,k,ke)}et&&Ne.render(k);for(let Se=0,Le=ge.length;Se<Le;Se++){let ke=ge[Se];Ch(g,k,ke,ke.viewport)}}else Y.length>0&&Ih(j,Y,k,q),et&&Ne.render(k),Ch(g,k,q);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),k.isScene===!0&&k.onAfterRender(_,k,q),Gt.resetDefaultState(),w=-1,T=null,b.pop(),b.length>0?(m=b[b.length-1],ne===!0&&he.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ll(k,q,J,j){if(k.visible===!1)return;if(k.layers.test(q.layers)){if(k.isGroup)J=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(q);else if(k.isLight)m.pushLight(k),k.castShadow&&m.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||K.intersectsSprite(k)){j&&We.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Me);let Se=ee.update(k),Le=k.material;Le.visible&&g.push(k,Se,Le,J,We.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||K.intersectsObject(k))){let Se=ee.update(k),Le=k.material;if(j&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),We.copy(k.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),We.copy(Se.boundingSphere.center)),We.applyMatrix4(k.matrixWorld).applyMatrix4(Me)),Array.isArray(Le)){let ke=Se.groups;for(let st=0,ut=ke.length;st<ut;st++){let He=ke[st],Tt=Le[He.materialIndex];Tt&&Tt.visible&&g.push(k,Se,Tt,J,We.z,He)}}else Le.visible&&g.push(k,Se,Le,J,We.z,null)}}let ge=k.children;for(let Se=0,Le=ge.length;Se<Le;Se++)ll(ge[Se],q,J,j)}function Ch(k,q,J,j){let Y=k.opaque,ge=k.transmissive,Se=k.transparent;m.setupLightsView(J),ne===!0&&he.setGlobalState(_.clippingPlanes,J),j&&Xe.viewport(H.copy(j)),Y.length>0&&Zo(Y,q,J),ge.length>0&&Zo(ge,q,J),Se.length>0&&Zo(Se,q,J),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ih(k,q,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Oi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ro:zi,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let ge=m.state.transmissionRenderTarget[j.id],Se=j.viewport||H;ge.setSize(Se.z,Se.w);let Le=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(F),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),et&&Ne.render(J);let ke=_.toneMapping;_.toneMapping=ur;let st=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ne===!0&&he.setGlobalState(_.clippingPlanes,j),Zo(k,J,j),D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge),it.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let He=0,Tt=q.length;He<Tt;He++){let Wt=q[He],Zt=Wt.object,Hn=Wt.geometry,Lt=Wt.material,De=Wt.group;if(Lt.side===en&&Zt.layers.test(j.layers)){let Ii=Lt.side;Lt.side=Un,Lt.needsUpdate=!0,Ph(Zt,J,j,Hn,Lt,De),Lt.side=Ii,Lt.needsUpdate=!0,ut=!0}}ut===!0&&(D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge))}_.setRenderTarget(Le),_.setClearColor(F,I),st!==void 0&&(j.viewport=st),_.toneMapping=ke}function Zo(k,q,J){let j=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,ge=k.length;Y<ge;Y++){let Se=k[Y],Le=Se.object,ke=Se.geometry,st=j===null?Se.material:j,ut=Se.group;Le.layers.test(J.layers)&&Ph(Le,q,J,ke,st,ut)}}function Ph(k,q,J,j,Y,ge){k.onBeforeRender(_,q,J,j,Y,ge),k.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),Y.onBeforeRender(_,q,J,j,k,ge),Y.transparent===!0&&Y.side===en&&Y.forceSinglePass===!1?(Y.side=Un,Y.needsUpdate=!0,_.renderBufferDirect(J,q,j,Y,k,ge),Y.side=yi,Y.needsUpdate=!0,_.renderBufferDirect(J,q,j,Y,k,ge),Y.side=en):_.renderBufferDirect(J,q,j,Y,k,ge),k.onAfterRender(_,q,J,j,Y,ge)}function $o(k,q,J){q.isScene!==!0&&(q=Ze);let j=qe.get(k),Y=m.state.lights,ge=m.state.shadowsArray,Se=Y.state.version,Le=pe.getParameters(k,Y.state,ge,q,J),ke=pe.getProgramCacheKey(Le),st=j.programs;j.environment=k.isMeshStandardMaterial?q.environment:null,j.fog=q.fog,j.envMap=(k.isMeshStandardMaterial?Z:A).get(k.envMap||j.environment),j.envMapRotation=j.environment!==null&&k.envMap===null?q.environmentRotation:k.envMapRotation,st===void 0&&(k.addEventListener("dispose",lt),st=new Map,j.programs=st);let ut=st.get(ke);if(ut!==void 0){if(j.currentProgram===ut&&j.lightsStateVersion===Se)return kh(k,Le),ut}else Le.uniforms=pe.getUniforms(k),k.onBeforeCompile(Le,_),ut=pe.acquireProgram(Le,ke),st.set(ke,ut),j.uniforms=Le.uniforms;let He=j.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(He.clippingPlanes=he.uniform),kh(k,Le),j.needsLights=Vm(k),j.lightsStateVersion=Se,j.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=ut,j.uniformsList=null,ut}function Lh(k){if(k.uniformsList===null){let q=k.currentProgram.getUniforms();k.uniformsList=vs.seqWithValue(q.seq,k.uniforms)}return k.uniformsList}function kh(k,q){let J=qe.get(k);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function zm(k,q,J,j,Y){q.isScene!==!0&&(q=Ze),D.resetTextureUnits();let ge=q.fog,Se=j.isMeshStandardMaterial?q.environment:null,Le=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Is,ke=(j.isMeshStandardMaterial?Z:A).get(j.envMap||Se),st=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ut=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!J.morphAttributes.position,Tt=!!J.morphAttributes.normal,Wt=!!J.morphAttributes.color,Zt=ur;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Zt=_.toneMapping);let Hn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=Hn!==void 0?Hn.length:0,De=qe.get(j),Ii=m.state.lights;if(ne===!0&&(ie===!0||k!==T)){let Yn=k===T&&j.id===w;he.setState(j,k,Yn)}let kt=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ii.state.version||De.outputColorSpace!==Le||Y.isBatchedMesh&&De.batching===!1||!Y.isBatchedMesh&&De.batching===!0||Y.isBatchedMesh&&De.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&De.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||Y.isInstancedMesh&&De.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&De.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&De.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&De.instancingMorph===!1&&Y.morphTexture!==null||De.envMap!==ke||j.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==st||De.vertexTangents!==ut||De.morphTargets!==He||De.morphNormals!==Tt||De.morphColors!==Wt||De.toneMapping!==Zt||De.morphTargetsCount!==Lt)&&(kt=!0):(kt=!0,De.__version=j.version);let oi=De.currentProgram;kt===!0&&(oi=$o(j,q,Y));let Qr=!1,Vn=!1,js=!1,$t=oi.getUniforms(),mi=De.uniforms;if(Xe.useProgram(oi.program)&&(Qr=!0,Vn=!0,js=!0),j.id!==w&&(w=j.id,Vn=!0),Qr||T!==k){Xe.buffers.depth.getReversed()?(ae.copy(k.projectionMatrix),Lg(ae),kg(ae),$t.setValue(G,"projectionMatrix",ae)):$t.setValue(G,"projectionMatrix",k.projectionMatrix),$t.setValue(G,"viewMatrix",k.matrixWorldInverse);let Qi=$t.map.cameraPosition;Qi!==void 0&&Qi.setValue(G,Be.setFromMatrixPosition(k.matrixWorld)),at.logarithmicDepthBuffer&&$t.setValue(G,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$t.setValue(G,"isOrthographic",k.isOrthographicCamera===!0),T!==k&&(T=k,Vn=!0,js=!0)}if(Y.isSkinnedMesh){$t.setOptional(G,Y,"bindMatrix"),$t.setOptional(G,Y,"bindMatrixInverse");let Yn=Y.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),$t.setValue(G,"boneTexture",Yn.boneTexture,D))}Y.isBatchedMesh&&($t.setOptional(G,Y,"batchingTexture"),$t.setValue(G,"batchingTexture",Y._matricesTexture,D),$t.setOptional(G,Y,"batchingIdTexture"),$t.setValue(G,"batchingIdTexture",Y._indirectTexture,D),$t.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&$t.setValue(G,"batchingColorTexture",Y._colorsTexture,D));let Qs=J.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Ye.update(Y,J,oi),(Vn||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,$t.setValue(G,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(mi.envMap.value=ke,mi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&q.environment!==null&&(mi.envMapIntensity.value=q.environmentIntensity),Vn&&($t.setValue(G,"toneMappingExposure",_.toneMappingExposure),De.needsLights&&Om(mi,js),ge&&j.fog===!0&&fe.refreshFogUniforms(mi,ge),fe.refreshMaterialUniforms(mi,j,V,X,m.state.transmissionRenderTarget[k.id]),vs.upload(G,Lh(De),mi,D)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vs.upload(G,Lh(De),mi,D),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$t.setValue(G,"center",Y.center),$t.setValue(G,"modelViewMatrix",Y.modelViewMatrix),$t.setValue(G,"normalMatrix",Y.normalMatrix),$t.setValue(G,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Yn=j.uniformsGroups;for(let Qi=0,er=Yn.length;Qi<er;Qi++){let Hh=Yn[Qi];W.update(Hh,oi),W.bind(Hh,oi)}}return oi}function Om(k,q){k.ambientLightColor.needsUpdate=q,k.lightProbe.needsUpdate=q,k.directionalLights.needsUpdate=q,k.directionalLightShadows.needsUpdate=q,k.pointLights.needsUpdate=q,k.pointLightShadows.needsUpdate=q,k.spotLights.needsUpdate=q,k.spotLightShadows.needsUpdate=q,k.rectAreaLights.needsUpdate=q,k.hemisphereLights.needsUpdate=q}function Vm(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(k,q,J){qe.get(k.texture).__webglTexture=q,qe.get(k.depthTexture).__webglTexture=J;let j=qe.get(k);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(k,q){let J=qe.get(k);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(k,q=0,J=0){P=k,S=q,L=J;let j=!0,Y=null,ge=!1,Se=!1;if(k){let ke=qe.get(k);if(ke.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(G.FRAMEBUFFER,null),j=!1;else if(ke.__webglFramebuffer===void 0)D.setupRenderTarget(k);else if(ke.__hasExternalTextures)D.rebindTextures(k,qe.get(k.texture).__webglTexture,qe.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let He=k.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&qe.has(He)&&(k.width!==He.image.width||k.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(k)}}let st=k.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Se=!0);let ut=qe.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(ut[q])?Y=ut[q][J]:Y=ut[q],ge=!0):k.samples>0&&D.useMultisampledRTT(k)===!1?Y=qe.get(k).__webglMultisampledFramebuffer:Array.isArray(ut)?Y=ut[J]:Y=ut,H.copy(k.viewport),N.copy(k.scissor),U=k.scissorTest}else H.copy(le).multiplyScalar(V).floor(),N.copy(Ce).multiplyScalar(V).floor(),U=Qe;if(Xe.bindFramebuffer(G.FRAMEBUFFER,Y)&&j&&Xe.drawBuffers(k,Y),Xe.viewport(H),Xe.scissor(N),Xe.setScissorTest(U),ge){let ke=qe.get(k.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,J)}else if(Se){let ke=qe.get(k.texture),st=q||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,J||0,st)}w=-1},this.readRenderTargetPixels=function(k,q,J,j,Y,ge,Se){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=qe.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){Xe.bindFramebuffer(G.FRAMEBUFFER,Le);try{let ke=k.texture,st=ke.format,ut=ke.type;if(!at.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=k.width-j&&J>=0&&J<=k.height-Y&&G.readPixels(q,J,j,Y,ct.convert(st),ct.convert(ut),ge)}finally{let ke=P!==null?qe.get(P).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(k,q,J,j,Y,ge,Se){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=qe.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){let ke=k.texture,st=ke.format,ut=ke.type;if(!at.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=k.width-j&&J>=0&&J<=k.height-Y){Xe.bindFramebuffer(G.FRAMEBUFFER,Le);let He=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.bufferData(G.PIXEL_PACK_BUFFER,ge.byteLength,G.STREAM_READ),G.readPixels(q,J,j,Y,ct.convert(st),ct.convert(ut),0);let Tt=P!==null?qe.get(P).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,Tt);let Wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Pg(G,Wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ge),G.deleteBuffer(He),G.deleteSync(Wt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(k,q=null,J=0){k.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,k=arguments[1]);let j=Math.pow(2,-J),Y=Math.floor(k.image.width*j),ge=Math.floor(k.image.height*j),Se=q!==null?q.x:0,Le=q!==null?q.y:0;D.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,Se,Le,Y,ge),Xe.unbindTexture()},this.copyTextureToTexture=function(k,q,J=null,j=null,Y=0){k.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,k=arguments[1],q=arguments[2],Y=arguments[3]||0,J=null);let ge,Se,Le,ke,st,ut,He,Tt,Wt,Zt=k.isCompressedTexture?k.mipmaps[Y]:k.image;J!==null?(ge=J.max.x-J.min.x,Se=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,st=J.min.y,ut=J.isBox3?J.min.z:0):(ge=Zt.width,Se=Zt.height,Le=Zt.depth||1,ke=0,st=0,ut=0),j!==null?(He=j.x,Tt=j.y,Wt=j.z):(He=0,Tt=0,Wt=0);let Hn=ct.convert(q.format),Lt=ct.convert(q.type),De;q.isData3DTexture?(D.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(D.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(D.setTexture2D(q,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let Ii=G.getParameter(G.UNPACK_ROW_LENGTH),kt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),oi=G.getParameter(G.UNPACK_SKIP_PIXELS),Qr=G.getParameter(G.UNPACK_SKIP_ROWS),Vn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);let js=k.isDataArrayTexture||k.isData3DTexture,$t=q.isDataArrayTexture||q.isData3DTexture;if(k.isRenderTargetTexture||k.isDepthTexture){let mi=qe.get(k),Qs=qe.get(q),Yn=qe.get(mi.__renderTarget),Qi=qe.get(Qs.__renderTarget);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let er=0;er<Le;er++)js&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qe.get(k).__webglTexture,Y,ut+er),k.isDepthTexture?($t&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,Y,Wt+er),G.blitFramebuffer(ke,st,ge,Se,He,Tt,ge,Se,G.DEPTH_BUFFER_BIT,G.NEAREST)):$t?G.copyTexSubImage3D(De,Y,He,Tt,Wt+er,ke,st,ge,Se):G.copyTexSubImage2D(De,Y,He,Tt,Wt+er,ke,st,ge,Se);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else $t?k.isDataTexture||k.isData3DTexture?G.texSubImage3D(De,Y,He,Tt,Wt,ge,Se,Le,Hn,Lt,Zt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Y,He,Tt,Wt,ge,Se,Le,Hn,Zt.data):G.texSubImage3D(De,Y,He,Tt,Wt,ge,Se,Le,Hn,Lt,Zt):k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,He,Tt,ge,Se,Hn,Lt,Zt.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,He,Tt,Zt.width,Zt.height,Hn,Zt.data):G.texSubImage2D(G.TEXTURE_2D,Y,He,Tt,ge,Se,Hn,Lt,Zt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ii),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,oi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qr),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Vn),Y===0&&q.generateMipmaps&&G.generateMipmap(De),Xe.unbindTexture()},this.copyTextureToTexture3D=function(k,q,J=null,j=null,Y=0){return k.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,j=arguments[1]||null,k=arguments[2],q=arguments[3],Y=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(k,q,J,j,Y)},this.initRenderTarget=function(k){qe.get(k).__webglFramebuffer===void 0&&D.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?D.setTextureCube(k,0):k.isData3DTexture?D.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?D.setTexture2DArray(k,0):D.setTexture2D(k,0),Xe.unbindTexture()},this.resetState=function(){S=0,L=0,P=null,Xe.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var Rs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vo=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Uf=new x,Bf=new Et,Nf=new Et,Rb=new x,Ff=new be,xa=new x,Fl=new vi,zf=new be,zl=new Ts,Wa=class extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(r),e.ray.intersectsSphere(Fl)!==!1&&(zf.copy(r).invert(),zl.copy(e.ray).applyMatrix4(zf),!(this.boundingBox!==null&&zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Bf.fromBufferAttribute(r.attributes.skinIndex,e),Nf.fromBufferAttribute(r.attributes.skinWeight,e),Uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Nf.getComponent(s);if(o!==0){let a=Bf.getComponent(s);Ff.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rb.copy(Uf).applyMatrix4(Ff),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},bo=class extends _n{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xa=class extends Bn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Xn,u=Xn,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Of=new be,Ab=new be,qa=class i{constructor(e=[],t=[]){this.uuid=Ps(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:Ab;Of.multiplyMatrices(a,t[s]),Of.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xa(t,e,e,$n,ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new bo),this.bones.push(o),this.boneInverses.push(new be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Fr=class extends tn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new be,Vf=new be,ya=[],Gf=new Kn,Cb=new be,so=new oe,oo=new vi,_t=class extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Cb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Gf.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),oo.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ps),Vf.multiplyMatrices(n,ps),so.matrixWorld=Vf,so.raycast(e,ya);for(let o=0,a=ya.length;o<a;o++){let c=ya[o];c.instanceId=s,c.object=this,t.push(c)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(r*this.count),r,this.count,wd,ui));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Eo=class extends hr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ya=new x,Za=new x,Wf=new be,ao=new Ts,va=new vi,Ol=new x,Xf=new x,Ju=class extends _n{constructor(e=new St,t=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ya.fromBufferAttribute(t,r-1),Za.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ya.distanceTo(Za);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Wf.copy(r).invert(),ao.copy(e.ray).applyMatrix4(Wf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=f,g=p-1;y<g;y+=l){let m=u.getX(y),v=u.getX(y+1),b=ba(this,e,ao,c,m,v);b&&t.push(b)}if(this.isLineLoop){let y=u.getX(p-1),g=u.getX(f),m=ba(this,e,ao,c,y,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=f,g=p-1;y<g;y+=l){let m=ba(this,e,ao,c,y,y+1);m&&t.push(m)}if(this.isLineLoop){let y=ba(this,e,ao,c,p-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ba(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Ya.fromBufferAttribute(o,r),Za.fromBufferAttribute(o,s),t.distanceSqToSegment(Ya,Za,Ol,Xf)>n)return;Ol.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ol);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var qf=new x,Yf=new x,_o=class extends Ju{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qf.fromBufferAttribute(t,r),Yf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vi=class extends Bn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new me:new x);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new x,r=[],s=[],o=[],a=new x,c=new be;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new x)}s[0]=new x,o[0]=new x;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(yn(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(yn(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends Jn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ju=class extends Mo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cd(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Ea=new x,Vl=new Cd,Gl=new Cd,Wl=new Cd,Qu=class extends Jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new x){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Ea.subVectors(r[0],r[1]).add(r[0]),l=Ea);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ea.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Vl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,y,g),Gl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,y,g),Wl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,y,g)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Gl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Wl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Vl.calc(c),Gl.calc(c),Wl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new x().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zf(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Ib(i,e){let t=1-i;return t*t*e}function Pb(i,e){return 2*(1-i)*i*e}function Lb(i,e){return i*i*e}function fo(i,e,t,n){return Ib(i,e)+Pb(i,t)+Lb(i,n)}function kb(i,e){let t=1-i;return t*t*t*e}function Hb(i,e){let t=1-i;return 3*t*t*i*e}function Db(i,e){return 3*(1-i)*i*i*e}function Ub(i,e){return i*i*i*e}function po(i,e,t,n,r){return kb(i,e)+Hb(i,t)+Db(i,n)+Ub(i,r)}var $a=class extends Jn{constructor(e=new me,t=new me,n=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new me){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(po(e,r.x,s.x,o.x,a.x),po(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ed=class extends Jn{constructor(e=new x,t=new x,n=new x,r=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new x){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(po(e,r.x,s.x,o.x,a.x),po(e,r.y,s.y,o.y,a.y),po(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends Jn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},td=class extends Jn{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Jn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(fo(e,r.x,s.x,o.x),fo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nd=class extends Jn{constructor(e=new x,t=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new x){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(fo(e,r.x,s.x,o.x),fo(e,r.y,s.y,o.y),fo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Zf(a,c.x,l.x,u.x,d.x),Zf(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new me().fromArray(r))}return this}},$f=Object.freeze({__proto__:null,ArcCurve:ju,CatmullRomCurve3:Qu,CubicBezierCurve:$a,CubicBezierCurve3:ed,EllipseCurve:Mo,LineCurve:Ka,LineCurve3:td,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:nd,SplineCurve:ja}),id=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $f[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new $f[r.type]().fromJSON(r))}return this}},rd=class extends id{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ka(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Ja(this.currentPoint.clone(),new me(e,t),new me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new $a(this.currentPoint.clone(),new me(e,t),new me(n,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new Mo(e,t,n,r,s,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gi=class i extends St{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=yn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],u=1/t,d=new x,h=new me,f=new x,p=new x,y=new x,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(p)}for(let v=0;v<=t;v++){let b=n+v*u*r,_=Math.sin(b),R=Math.cos(b);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*_,d.y=e[S].y,d.z=e[S].x*R,o.push(d.x,d.y,d.z),h.x=v/t,h.y=S/(e.length-1),a.push(h.x,h.y);let L=c[3*S+0]*_,P=c[3*S+1],w=c[3*S+0]*R;l.push(L,P,w)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let _=b+v*e.length,R=_,S=_+e.length,L=_+e.length+1,P=_+1;s.push(R,S,P),s.push(L,P,S)}this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},fr=class i extends Gi{constructor(e=1,t=1,n=4,r=8){let s=new rd;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Mn=class i extends St{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new x,u=new me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends St{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],f=[],p=0,y=[],g=n/2,m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function v(){let _=new x,R=new x,S=0,L=(t-e)/n;for(let P=0;P<=s;P++){let w=[],T=P/s,H=T*(t-e)+e;for(let N=0;N<=r;N++){let U=N/r,F=U*c+a,I=Math.sin(F),B=Math.cos(F);R.x=H*I,R.y=-T*n+g,R.z=H*B,d.push(R.x,R.y,R.z),_.set(I,L,B).normalize(),h.push(_.x,_.y,_.z),f.push(U,1-T),w.push(p++)}y.push(w)}for(let P=0;P<r;P++)for(let w=0;w<s;w++){let T=y[w][P],H=y[w+1][P],N=y[w+1][P+1],U=y[w][P+1];(e>0||w!==0)&&(u.push(T,H,U),S+=3),(t>0||w!==s-1)&&(u.push(H,N,U),S+=3)}l.addGroup(m,S,0),m+=S}function b(_){let R=p,S=new me,L=new x,P=0,w=_===!0?e:t,T=_===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,g*T,0),h.push(0,T,0),f.push(.5,.5),p++;let H=p;for(let N=0;N<=r;N++){let F=N/r*c+a,I=Math.cos(F),B=Math.sin(F);L.x=w*B,L.y=g*T,L.z=w*I,d.push(L.x,L.y,L.z),h.push(0,T,0),S.x=I*.5+.5,S.y=B*.5*T+.5,f.push(S.x,S.y),p++}for(let N=0;N<r;N++){let U=R+N,F=H+N;_===!0?u.push(F,F+1,U):u.push(F+1,F,U),P+=3}l.addGroup(m,P,_===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wi=class i extends vt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qa=class i extends St{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new x,_=new x,R=new x;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],_),f(t[S+2],R),c(b,_,R,v)}function c(v,b,_,R){let S=R+1,L=[];for(let P=0;P<=S;P++){L[P]=[];let w=v.clone().lerp(_,P/S),T=b.clone().lerp(_,P/S),H=S-P;for(let N=0;N<=H;N++)N===0&&P===S?L[P][N]=w:L[P][N]=w.clone().lerp(T,N/H)}for(let P=0;P<S;P++)for(let w=0;w<2*(S-P)-1;w++){let T=Math.floor(w/2);w%2===0?(h(L[P][T+1]),h(L[P+1][T]),h(L[P][T])):(h(L[P][T+1]),h(L[P+1][T+1]),h(L[P+1][T]))}}function l(v){let b=new x;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(v),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){let v=new x;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];let _=g(v)/2/Math.PI+.5,R=m(v)/Math.PI+.5;o.push(_,1-R)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let b=o[v+0],_=o[v+2],R=o[v+4],S=Math.max(b,_,R),L=Math.min(b,_,R);S>.9&&L<.1&&(b<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,b){let _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){let v=new x,b=new x,_=new x,R=new x,S=new me,L=new me,P=new me;for(let w=0,T=0;w<s.length;w+=9,T+=6){v.set(s[w+0],s[w+1],s[w+2]),b.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),S.set(o[T+0],o[T+1]),L.set(o[T+2],o[T+3]),P.set(o[T+4],o[T+5]),R.copy(v).add(b).add(_).divideScalar(3);let H=g(R);y(S,T+0,v,H),y(L,T+2,b,H),y(P,T+4,_,H)}}function y(v,b,_,R){R<0&&v.x===1&&(o[b]=v.x-1),_.x===0&&_.z===0&&(o[b]=R/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},ec=class i extends Qa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_a=new x,Ma=new x,Xl=new x,wa=new cr,tc=class extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Pa*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:y,b:g,c:m}=wa;if(y.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),wa.getNormal(Xl),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let b=(v+1)%3,_=d[v],R=d[b],S=wa[u[v]],L=wa[u[b]],P=`${_}_${R}`,w=`${R}_${_}`;w in h&&h[w]?(Xl.dot(h[w].normal)<=s&&(f.push(S.x,S.y,S.z),f.push(L.x,L.y,L.z)),h[w]=null):P in h||(h[P]={index0:l[v],index1:l[b],normal:Xl.clone()})}}for(let p in h)if(h[p]){let{index0:y,index1:g}=h[p];_a.fromBufferAttribute(a,y),Ma.fromBufferAttribute(a,g),f.push(_a.x,_a.y,_a.z),f.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new ze(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var wn=class i extends Qa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var wo=class i extends St{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],u=[],d=e,h=(t-e)/r,f=new x,p=new me;for(let y=0;y<=r;y++){for(let g=0;g<=n;g++){let m=s+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let y=0;y<r;y++){let g=y*(n+1);for(let m=0;m<n;m++){let v=m+g,b=v,_=v+n+1,R=v+n+2,S=v+1;a.push(b,_,S),a.push(_,R,S)}}this.setIndex(a),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var rt=class i extends St{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new x,h=new x,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let v=[],b=m/n,_=0;m===0&&o===0?_=.5/t:m===n&&c===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let S=R/t;d.x=-e*Math.cos(r+S*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+S*s)*Math.sin(o+b*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(S+_,1-b),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let b=u[m][v+1],_=u[m][v],R=u[m+1][v],S=u[m+1][v+1];(m!==0||o>0)&&f.push(b,_,S),(m!==n-1||c<Math.PI)&&f.push(_,R,S)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bn=class i extends St{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new x,d=new x,h=new x;for(let f=0;f<=n;f++)for(let p=0;p<=r;p++){let y=p/r*s,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(p/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=r;p++){let y=(r+1)*f+p-1,g=(r+1)*(f-1)+p-1,m=(r+1)*(f-1)+p,v=(r+1)*f+p;o.push(y,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tt=class extends hr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fp,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nc=class extends tt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ta(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sd=class extends As{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:s=e,a=2*t-n;break;case Oh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zh:o=e,c=2*n-t;break;case Oh:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),y=p*p,g=y*p,m=-h*g+2*h*y-h*p,v=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*p+1,b=(-1-f)*g+(1.5+f)*y+.5*p,_=f*g-f*y;for(let R=0;R!==a;++R)s[R]=m*o[u+R]+v*o[l+R]+b*o[c+R]+_*o[d+R];return s}},od=class extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},ad=class extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case ku:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return ku;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Bb(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===dl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let y=t[d+p];if(y!==t[h+p]||y!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ku;var zr=class extends di{constructor(e,t,n){super(e,t,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=La;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var cd=class extends di{};cd.prototype.ValueTypeName="color";var ld=class extends di{};ld.prototype.ValueTypeName="number";var ud=class extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)yt.slerpFlat(s,0,o,l-a,o,l,c);return s}},ic=class extends di{InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}};ic.prototype.ValueTypeName="quaternion";ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends di{constructor(e,t,n){super(e,t,n)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=La;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends di{};dd.prototype.ValueTypeName="vector";var hd=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},Nb=new hd,fd=class{constructor(e){this.manager=e!==void 0?e:Nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fd.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},So=class extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ql=new be,Kf=new x,Jf=new x,rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kf),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var jf=new be,co=new x,Yl=new x,pd=class extends rc{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),co.setFromMatrixPosition(e.matrixWorld),n.position.copy(co),Yl.copy(n.position),Yl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yl),n.updateMatrixWorld(),r.makeTranslation(-co.x,-co.y,-co.z),jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf)}},Cs=class extends To{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},md=class extends rc{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new md}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var sc=class extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Id="\\[\\]\\.:\\/",Fb=new RegExp("["+Id+"]","g"),Pd="[^"+Id+"]",zb="[^"+Id.replace("\\.","")+"]",Ob=/((?:WC+[\/:])*)/.source.replace("WC",Pd),Vb=/(WCOD+)?/.source.replace("WCOD",zb),Gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),Wb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),Xb=new RegExp("^"+Ob+Vb+Gb+Wb+"$"),qb=["material","materials","bones","map"],gd=class{constructor(e,t,n){let r=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fb,"")}static parseTrackName(e){let t=Xb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);qb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=gd;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q_=new Float32Array(1);var Qf=new be,oc=class{constructor(e,t,n=0,r=1/0){this.ray=new Ts(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qf),this}intersectObject(e,t=!0,n=[]){return xd(e,this,n,t),n.sort(ep),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)xd(e[r],this,n,t);return n.sort(ep),n}};function ep(i,e){return i.distance-e.distance}function xd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)xd(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);var nn={flow_Ls:1,hoursPerDay:8,uasbCount:4,uasbRecirculation:!1,apparentDensity_tm3:.75},ks={flow_m3h:nn.flow_Ls*3.6,daily_m3:nn.flow_Ls*3.6*nn.hoursPerDay,perUasb_Ls:nn.flow_Ls/4};function Mp(i,e=nn.flow_Ls){return i==null?null:i/(e*3.6)}var hi=[{id:"homog",tag:"TK-101",stage:"homog",shape:"cyl",pos:[-24,-8],size:{d:3.2,h:2.6},base:.3,volume:20,name:{es:"Tanque de homogenizaci\xF3n",en:"Homogenization tank"},fn:{es:"Recibe el lixiviado y amortigua variaciones de caudal y carga.",en:"Receives leachate and equalizes flow and load."}},{id:"coag",tag:"TK-102",stage:"coag",shape:"box",pos:[-18.5,-8],size:{w:1,h:1,l:1},base:1.2,volume:1,name:{es:"Tanque de coagulaci\xF3n",en:"Coagulation tank"},fn:{es:"Mezcla r\xE1pida con coagulante para desestabilizar coloides.",en:"Rapid mix with coagulant to destabilize colloids."}},{id:"floc",tag:"TK-103",stage:"floc",shape:"cyl",pos:[-15.5,-8],size:{d:1.1,h:1.05},base:1.2,volume:1,name:{es:"Tanque de floculaci\xF3n",en:"Flocculation tank"},fn:{es:"Mezcla lenta para formar fl\xF3culos sedimentables.",en:"Slow mix to grow settleable flocs."}},{id:"clar1",tag:"CL-101",stage:"clar1",shape:"cone-clarifier",pos:[-11.5,-8],size:{d:2.2,h:3.4},base:0,volume:null,name:{es:"Clarificador c\xF3nico 1",en:"Conical clarifier 1"},fn:{es:"Sedimentaci\xF3n primaria; el lodo se purga por el cono.",en:"Primary settling; sludge is drawn from the cone."}},{id:"sludge",tag:"LS-101",stage:null,shape:"sludge-bed",pos:[-21.2,6.85],size:{w:7,h:.8,l:4},base:0,volume:null,name:{es:"Lecho de secado cubierto",en:"Covered sludge drying bed"},fn:{es:"Deshidrata el lodo espesado; el drenado vuelve a cabecera y la torta se retira en cami\xF3n.",en:"Dewaters thickened sludge; drainage returns to the headworks and cake leaves by truck."}},{id:"inter",tag:"TK-104",stage:"uasb",shape:"cyl",pos:[-7,-8],size:{d:1.5,h:1.15},base:.3,volume:2,name:{es:"Tanque intermedio",en:"Intermediate tank"},fn:{es:"Pulm\xF3n de succi\xF3n para el bombeo a los UASB.",en:"Suction buffer for pumping to the UASB train."}},{id:"pump",tag:"P-01",stage:"uasb",shape:"pump",pos:[-3,-8],size:{w:.9,h:.7,l:.5},base:.15,volume:null,name:{es:"Bomba de alimentaci\xF3n UASB",en:"UASB feed pump"},fn:{es:"Impulsa el clarificado al colector de reparto UASB.",en:"Lifts clarified flow to the UASB distribution header."}},{id:"uasb1",tag:"R-201",stage:"uasb",shape:"cyl",pos:[-8,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 1",en:"UASB reactor 1"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"uasb2",tag:"R-202",stage:"uasb",shape:"cyl",pos:[-4.4,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 2",en:"UASB reactor 2"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"uasb3",tag:"R-203",stage:"uasb",shape:"cyl",pos:[-.8,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 3",en:"UASB reactor 3"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"uasb4",tag:"R-204",stage:"uasb",shape:"cyl",pos:[2.8,.5],size:{d:2,h:3.2},base:.3,volume:10,name:{es:"Reactor UASB 4",en:"UASB reactor 4"},fn:{es:"Digesti\xF3n anaerobia de flujo ascendente con manto de lodo.",en:"Upflow anaerobic sludge blanket digestion."}},{id:"clar2",tag:"CL-201",stage:"clar2",shape:"cone-clarifier",pos:[8,.5],size:{d:2.2,h:3.4},base:0,volume:null,name:{es:"Clarificador c\xF3nico 2",en:"Conical clarifier 2"},fn:{es:"Separa s\xF3lidos arrastrados del efluente anaerobio.",en:"Separates solids carried over from the anaerobic effluent."}},{id:"mbbr",tag:"R-301",stage:"mbbr",shape:"box",pos:[13.5,.5],size:{w:4,h:2,l:2.5},base:.3,volume:20,name:{es:"Reactor MBBR",en:"MBBR reactor"},fn:{es:"Biopel\xEDcula aerobia sobre soportes m\xF3viles, aireada por el soplante B-301; pulimento.",en:"Aerobic biofilm on moving carriers, aerated by blower B-301; polishing."}},{id:"filtro",tag:"FF-401",stage:"filtro",shape:"bed",pos:[9,9],size:{w:9,h:.9,l:5},base:0,volume:null,name:{es:"Filtro fitopedol\xF3gico",en:"Phytopedological filter"},fn:{es:"Lecho plantado de suelo/medio; afinamiento final.",en:"Planted soil/media bed; final polishing."}},{id:"discharge",tag:"DS-501",stage:"discharge",shape:"outfall",pos:[1,9],size:{w:1.6,h:.9,l:1.6},base:0,volume:null,name:{es:"Descarga de efluente tratado",en:"Treated effluent discharge"},fn:{es:"C\xE1mara de salida y punto de descarga del efluente.",en:"Outlet chamber and effluent discharge point."}},{id:"screen",tag:"RJ-100",stage:"homog",shape:"box",pos:[-28.3,-8],size:{w:2.2,h:.9,l:.9},base:0,volume:null,name:{es:"Rejilla y desarenador",en:"Screen and grit channel"},fn:{es:"Retiene s\xF3lidos gruesos y arenas antes de la homogenizaci\xF3n.",en:"Removes coarse solids and grit ahead of equalization."}},{id:"dosC",tag:"DQ-101",stage:"coag",shape:"box",pos:[-19,-5.95],size:{w:1.4,h:1.5,l:1},base:0,volume:null,name:{es:"Dosificaci\xF3n de coagulante",en:"Coagulant dosing"},fn:{es:"Tanque y bomba dosificadora de coagulante hacia TK-102.",en:"Coagulant day tank and metering pump to TK-102."}},{id:"dosF",tag:"DQ-102",stage:"floc",shape:"box",pos:[-15.5,-5.95],size:{w:1.4,h:1.5,l:1},base:0,volume:null,name:{es:"Preparaci\xF3n y dosificaci\xF3n de pol\xEDmero",en:"Polymer make-up and dosing"},fn:{es:"Preparaci\xF3n de floculante y bomba dosificadora hacia TK-103.",en:"Flocculant make-up and metering pump to TK-103."}},{id:"pumpB",tag:"P-01B",stage:"uasb",shape:"pump",pos:[-3,-9.6],size:{w:.9,h:.7,l:.5},base:.15,volume:null,name:{es:"Bomba de reserva UASB",en:"UASB standby pump"},fn:{es:"Bomba de reserva en paralelo con P-01 (en espera).",en:"Standby pump in parallel with P-01."}},{id:"flare",tag:"QB-201",stage:"uasb",shape:"cyl",pos:[6.5,-13],size:{d:.5,h:5},base:.3,volume:null,name:{es:"Sello hidr\xE1ulico y antorcha de biog\xE1s",en:"Biogas seal pot and flare"},fn:{es:"Recoge el biog\xE1s de los 4 UASB y lo quema en antorcha.",en:"Collects biogas from the 4 UASB and burns it in a flare."}},{id:"thick",tag:"ES-101",stage:null,shape:"cyl",pos:[-9.6,6.8],size:{d:2.4,h:2.6},base:.3,volume:null,name:{es:"Espesador de lodos",en:"Sludge thickener"},fn:{es:"Concentra los lodos de CL-101, de los UASB y de CL-201 antes del secado.",en:"Thickens sludge from CL-101, the UASB and CL-201 before drying."}},{id:"control",tag:"ED-01",stage:null,shape:"box",pos:[-24.5,-2.2],size:{w:6,h:3.2,l:3},base:0,volume:null,name:{es:"Caseta de control y qu\xEDmicos",en:"Control and chemical building"},fn:{es:"Sala de control, tablero el\xE9ctrico (MCC) y bodega de qu\xEDmicos.",en:"Control room, MCC panel and chemical store."}}],Ue=Object.fromEntries(hi.map(i=>[i.id,i])),fn=[-31,-8],pt={gate:[-33,2.5],z:2.5,width:3.6,endX:-17.6,loop:{eastX:-13.6,southZ:11.4,westX:-28.8,r:4},chemStop:{x:-24,z:2.5},sludgeStop:{x:-20.2,z:11.4}},Ge={minX:-33,maxX:19,minZ:-18.5,maxZ:13.5},fi=[.45,.8,1],uc={minX:-84,maxX:-46,minZ:-27,maxZ:-4,tierH:2.6,slope:3.2,bench:1.4,face:{minX:-66,maxX:-55}},rn={minX:-42.5,maxX:-36.5,minZ:-11.5,maxZ:-4.5,depth:1.2},wp={z:-2.6,x:-44.6,w:.7},Ld={farX:-118,spawnX:-96,despawnX:-66,laneIn:4.3,laneOut:.7,shiftX0:-44,shiftX1:-37.5,width:7.4},dc={cx:3.5,cz:22,rx:9.5,rz:5.2};var Je=(i,e=.62,t=0,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),je={sage:15330806,sageDark:13029348,warmGray:14541550,offWhite:16185339,steelBlue:4024038,motor:3103722,concrete:14870256,concreteDark:12831452,ochre:15906354,steel:13226205,steelDark:5924228,grating:10726854,rubber:2830138,soil:10126438,gravel:12894131,leachate:9329702,clarified:10518078,anaerobic:8748602,treated:2078118,sludge:6045734,carrier:15919302,reed:6271066,outline:3107839},E={concrete:Je(je.concrete,.86),concreteDark:Je(je.concreteDark,.9),sage:Je(je.sage,.6,.02),sageDark:Je(je.sageDark,.62,.02),warmGray:Je(je.warmGray,.62),offWhite:Je(je.offWhite,.58),steelBlue:Je(je.steelBlue,.55,.12),motor:Je(je.motor,.48,.25),steel:Je(je.steel,.38,.72),steelDark:Je(je.steelDark,.5,.55),grating:Je(je.grating,.72,.35),rail:Je(je.ochre,.55,.08),rubber:Je(je.rubber,.75),soil:Je(je.soil,.96),gravel:Je(je.gravel,.92),sludgeCake:Je(je.sludge,.78),carrier:Je(je.carrier,.6),plant:Je(16777215,.78),bubble:Je(14673634,.25,0,{transparent:!0,opacity:.75,emissive:10465966,emissiveIntensity:.25}),flocSpeck:Je(4008470,.8),glass:new nc({color:12901083,roughness:.08,metalness:0,transparent:!0,opacity:.16,depthWrite:!1,side:en}),paint:Je(14210244,.7),walkway:Je(15906354,.85,0,{transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),outline:new Eo({color:je.outline,transparent:!0,opacity:.7,depthWrite:!1})},Gr;function Yb(){if(Gr!==void 0)return Gr;if(typeof document>"u")return Gr=null,null;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");if(!e)return Gr=null,null;let t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.45,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Gr=new Vi(i),Gr.colorSpace=cn,Gr}function Sp(){return new In({color:je.outline,map:Yb(),transparent:!0,opacity:.28,blending:Br,depthWrite:!1,toneMapped:!1})}var hc={idle:8357769,active:8372346,standby:14263361,alert:14836796};function Rp(){return Je(hc.idle,.35,0,{emissive:hc.idle,emissiveIntensity:.15})}var Zb={still:0,ripple:1,swirl:2,flow:3,sheen:4,aeration:5},$b=`
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
`;function Kt(i){let e=i.opacity??1,t=Je(i.color,i.roughness??.22,0,{transparent:e<1,opacity:e,depthWrite:e>=1,side:i.side??yi,emissive:i.color,emissiveIntensity:0}),n={uTime:{value:0},uMotion:{value:0},uGlow:{value:0},uSpread:{value:1},uMode:{value:Zb[i.mode??"still"]},uCenter:{value:new me(i.center?.[0]??0,i.center?.[1]??0)},uDir:{value:new me(i.dir?.[0]??1,i.dir?.[1]??0)},uSpeed:{value:i.speed??1},uScale:{value:i.scale??1},uSpan:{value:i.span??1},uHi:{value:new Ie(i.hi??13615264)}};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPosL;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPosL = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+$b).replace("#include <color_fragment>",`#include <color_fragment>
        float lqMask; float lqP = lqPattern(lqMask);
        diffuseColor.rgb = mix(diffuseColor.rgb, uHi, clamp(lqP * 0.22, 0.0, 1.0));
        diffuseColor.a *= lqMask;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uHi * (lqP * 0.05 * (0.5 + uGlow)) + diffuseColor.rgb * uGlow * 0.3;`)},t.customProgramCacheKey=()=>"ptl-liquid",{material:t,uniforms:n}}var Tp=new Map;function Hs(i,e,t=.6){let n=`${i}|${JSON.stringify(e)}`,r=Tp.get(n);if(r)return r;let s=Je(i,t,.02,{side:en}),o={uWin:{value:new Et(e.phi,e.halfWidth,e.y0,e.y1)},uCone:{value:new Et(e.r,e.yApex??-1e3,e.rApex??e.r,e.yc??-1e3)}};return s.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocalP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocalP = position;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocalP; uniform vec4 uWin; uniform vec4 uCone;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float ph = atan(vLocalP.x, vLocalP.z);
          float dph = abs(mod(ph - uWin.x + 3.14159265, 6.2831853) - 3.14159265);
          float rr = length(vLocalP.xz);
          float rs = vLocalP.y > uCone.w ? uCone.x : mix(uCone.z, uCone.x, clamp((vLocalP.y - uCone.y) / max(uCone.w - uCone.y, 1e-3), 0.0, 1.0));
          if (dph < uWin.y && vLocalP.y > uWin.z && vLocalP.y < uWin.w && abs(rr - rs) < 0.12) discard;
        }`)},s.customProgramCacheKey=()=>"ptl-shell-window",Tp.set(n,s),s}var Kb=`
varying float vS; varying float vAng;
uniform float uTime; uniform float uFlow; uniform float uFront; uniform float uLength; uniform float uHighlight;
uniform vec3 uFluid;
`;function Ap(i,e){let t=Je(i,.5,.18),n={uTime:{value:0},uFlow:{value:0},uFront:{value:0},uLength:{value:1},uHighlight:{value:0},uFluid:{value:new Ie(e)}};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aS; varying float vS; varying float vAng;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vS = aS; vAng = uv.y;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+Kb).replace("#include <color_fragment>",`#include <color_fragment>
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
        }`)},t.customProgramCacheKey=()=>"ptl-pipe",{material:t,uniforms:n}}var Fe={pe:Je(14275522,.45,0,{transparent:!0,opacity:.88}),peBlue:Je(4026342,.5),bund:Je(13226211,.7,.05),asphalt:Je(12371686,.95),curb:Je(15001844,.9),roadPaint:Je(16777215,.8,0,{polygonOffset:!0,polygonOffsetFactor:-2}),roadPaintYellow:Je(15906354,.8,0,{polygonOffset:!0,polygonOffsetFactor:-2}),apron:Je(14673138,.92),sand:Je(14471864,.95),roofSteel:Je(4024038,.5,.2,{side:en}),wall:Je(16119546,.7),wallTrim:Je(3103722,.55,.12),rollDoor:Je(14673135,.5,.2),ibcCage:Je(12173776,.4,.6),ibcTank:Je(15000022,.4,0,{transparent:!0,opacity:.82}),pallet:Je(13214826,.85),ductTape:Je(4080712,.6),sludgeDry:Je(8018490,.95),flareSteel:Je(10134712,.55,.4),grit:Je(13486006,.95)},kd=[],Ao={value:0};function jn(i,e=1.6,t=.05,n=2764078){let r=Je(n,.35,0,{emissive:i,emissiveIntensity:t});return kd.push({m:r,on:e,off:t,kind:"emissive"}),r}var Wr;function Jb(){if(Wr!==void 0)return Wr;if(typeof document>"u")return Wr=null,null;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");if(!e)return Wr=null,null;let t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.55)"),t.addColorStop(.7,"rgba(255,255,255,0.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Wr=new Vi(i),Wr.colorSpace=cn,Wr}function Ds(i=16767392,e=.34){let t=new In({color:i,map:Jb(),transparent:!0,opacity:0,blending:Br,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4});return kd.push({m:t,on:e,off:0,kind:"opacity"}),t}var Cp=[];function Ip(i,e){Cp.push({l:i,on:e}),i.intensity=0}function Hd(i){Ao.value=i;for(let e of Cp)e.l.intensity=e.on*i;for(let e of kd){let t=e.off+(e.on-e.off)*i;e.kind==="emissive"?e.m.emissiveIntensity=t*(e.m.userData.boost??1):(e.m.opacity=t,e.m.visible=t>.002)}}var fc={day:{sky:["#c3cdf0","#d6ddf6","#e6eaf8"],fog:14870519,hemiSky:16777215,hemiGround:13029096,hemiI:1.45,keyColor:16777215,keyI:2.3,keyDir:[-.55,1,.62],fillColor:15002367,fillI:.7,rimColor:14673663,rimI:.4},dusk:{sky:["#0b1622","#1a2a3a","#4a3a36"],fog:2763827,hemiSky:10465999,hemiGround:4867128,hemiI:.8,keyColor:16757370,keyI:1.7,keyDir:[-.9,.38,.35],fillColor:10466512,fillI:.35,rimColor:13671034,rimI:.5},night:{sky:["#060d13","#0b1820","#12252c"],fog:990757,hemiSky:7313072,hemiGround:2503482,hemiI:.75,keyColor:11059160,keyI:.42,keyDir:[-.3,1,.45],fillColor:8363188,fillI:.22,rimColor:9416900,rimI:.3}},Us=(i,e,t)=>new Ie(i).lerp(new Ie(e),t),Dd=(i,e,t)=>"#"+new Ie(i).lerp(new Ie(e),t).getHexString(),pc=(i,e,t)=>i+(e-i)*t;function Pp(i,e=Ge){let t=(e.minX+e.maxX)/2,n=(e.minZ+e.maxZ)/2,r=new x(t,0,n),s=Math.hypot(e.maxX-e.minX,e.maxZ-e.minZ)/2,o=new So(13294560,3819075,.85);i.add(o);let a=new Vr(16773856,2.8);a.target.position.copy(r),a.castShadow=!0,a.shadow.mapSize.set(4096,4096);let c=a.shadow.camera;c.left=-s-2,c.right=s+2,c.top=s+2,c.bottom=-s-2,c.near=20,c.far=150,a.shadow.bias=-25e-5,a.shadow.normalBias=.025,a.shadow.radius=2.5,i.add(a,a.target);let l=new Vr(14017514,.55);l.position.copy(r).add(new x(.9,.45,.7).multiplyScalar(60)),l.target.position.copy(r),i.add(l,l.target);let u=new Vr(12571612,.45);u.position.copy(r).add(new x(.2,.6,-1).multiplyScalar(60)),u.target.position.copy(r),i.add(u,u.target);let d=null,h=null;typeof document<"u"&&(d=document.createElement("canvas"),d.width=4,d.height=256,h=new Vi(d),h.colorSpace=cn);let f=y=>{if(d&&h){let g=d.getContext("2d");if(g){let m=g.createLinearGradient(0,0,0,256);m.addColorStop(0,y[0]),m.addColorStop(.55,y[1]),m.addColorStop(1,y[2]),g.fillStyle=m,g.fillRect(0,0,4,256),h.needsUpdate=!0,i.background=h;return}}i.background=new Ie(y[1])},p={key:a,hemi:o,fill:l,rim:u,mode:"day",daylight:1,setMode(y){p.setDaylight(y==="day"?1:y==="dusk"?.5:0),p.mode=y},nightFactor(){let y=p.daylight;return Math.max(0,Math.min(1,(.8-y)/.4))},setDaylight(y){let g=Math.max(0,Math.min(1,Number.isFinite(y)?y:1));p.daylight=g,p.mode=g>.75?"day":g>.25?"dusk":"night";let[m,v,b]=g>=.5?[fc.dusk,fc.day,(g-.5)/.5]:[fc.night,fc.dusk,g/.5];o.color.copy(Us(m.hemiSky,v.hemiSky,b)),o.groundColor.copy(Us(m.hemiGround,v.hemiGround,b)),o.intensity=pc(m.hemiI,v.hemiI,b),a.color.copy(Us(m.keyColor,v.keyColor,b)),a.intensity=pc(m.keyI,v.keyI,b);let _=new x(...m.keyDir).lerp(new x(...v.keyDir),b).normalize();a.position.copy(r).addScaledVector(_,80),l.color.copy(Us(m.fillColor,v.fillColor,b)),l.intensity=pc(m.fillI,v.fillI,b),u.color.copy(Us(m.rimColor,v.rimColor,b)),u.intensity=pc(m.rimI,v.rimI,b),f([Dd(m.sky[0],v.sky[0],b),Dd(m.sky[1],v.sky[1],b),Dd(m.sky[2],v.sky[2],b)]),i.fog instanceof Rs&&i.fog.color.copy(Us(m.fog,v.fog,b)),Hd(p.nightFactor())},update(y){Hd(p.nightFactor())}};return p.setDaylight(1),p}var Xr={skyTop:"#c3cdf0",skyMid:"#d6ddf6",horizon:"#e6eaf8",terrain:13818352,slab:15922426};function jb(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=4,i.height=256;let e=i.getContext("2d");if(!e)return null;let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,Xr.skyTop),t.addColorStop(.55,Xr.skyMid),t.addColorStop(1,Xr.horizon),e.fillStyle=t,e.fillRect(0,0,4,256);let n=new Vi(i);return n.colorSpace=cn,n}function Qb(){let i=new tt({color:Xr.slab,roughness:.92,metalness:0});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"ptl-slab",i}function eE(){let i=new tt({color:Xr.terrain,roughness:1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTerW;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 q = vTerW.xz;
        float n1 = sin(q.x * 0.11 + sin(q.y * 0.07) * 2.3) * sin(q.y * 0.13 + 1.7);
        float n2 = sin(q.x * 0.53 + q.y * 0.31) * sin(q.y * 0.47 - q.x * 0.21);
        diffuseColor.rgb *= 0.985 + 0.025 * n1;`)},i.customProgramCacheKey=()=>"ptl-terrain",i}function tE(){let i=new we;i.name="ground";let e=new oe(new Ke(700,700),eE());e.rotation.x=-Math.PI/2,e.position.y=-.03,e.receiveShadow=!0;let t=Ge.maxX-Ge.minX,n=Ge.maxZ-Ge.minZ,r=new Ot(t,.24,n),s=new oe(r,Qb());s.position.set((Ge.minX+Ge.maxX)/2,-.12,(Ge.minZ+Ge.maxZ)/2),s.receiveShadow=!0;let o=new tt({color:13160680,roughness:.9}),a=new we;for(let[c,l,u,d]of[[(Ge.minX+Ge.maxX)/2,Ge.minZ,t+.3,.3],[(Ge.minX+Ge.maxX)/2,Ge.maxZ,t+.3,.3],[Ge.minX,(Ge.minZ+Ge.maxZ)/2,.3,n],[Ge.maxX,(Ge.minZ+Ge.maxZ)/2,.3,n]]){let h=new oe(new Ot(u,.32,d),o);h.position.set(c,-.08,l),h.receiveShadow=!0,a.add(h)}return i.add(e,s,a),i}function Lp(i){let e=new yo({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(typeof window<"u"&&window.devicePixelRatio||1,2)),e.outputColorSpace=cn,e.toneMapping=bd,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=vd,i.appendChild(e.domElement);let t=new vo;t.background=jb()??new Ie(Xr.skyMid),t.fog=new Rs(Xr.horizon,170,460),t.add(tE());let n=Pp(t),r=(s,o)=>{e.setSize(s,o)};return r(i.clientWidth||1600,i.clientHeight||900),{renderer:e,scene:t,lighting:n,resize:r}}var mc=["uasb1","uasb2","uasb3","uasb4"],bi=[{id:"p-inlet",from:"world",fromPort:"inlet",to:"screen",toPort:"in",kind:"leachate",stage:"homog"},{id:"p-screen-homog",from:"screen",fromPort:"out",to:"homog",toPort:"in",kind:"leachate",stage:"homog"},{id:"p-homog-coag",from:"homog",fromPort:"out",to:"coag",toPort:"in",kind:"leachate",stage:"coag"},{id:"p-coag-floc",from:"coag",fromPort:"out",to:"floc",toPort:"in",kind:"leachate",stage:"floc"},{id:"p-floc-clar1",from:"floc",fromPort:"out",to:"clar1",toPort:"in",kind:"leachate",stage:"clar1"},{id:"p-clar1-thick",from:"clar1",fromPort:"sludge",to:"thick",toPort:"in",kind:"sludge",stage:"clar1"},{id:"p-thick-bed",from:"thick",fromPort:"out",to:"sludge",toPort:"in",kind:"sludge",stage:"clar1"},{id:"p-bed-return",from:"sludge",fromPort:"drain",to:"homog",toPort:"return",kind:"return",stage:"clar1"},{id:"p-dosC-coag",from:"dosC",fromPort:"out",to:"coag",toPort:"dose",kind:"chemical",stage:"coag"},{id:"p-dosF-floc",from:"dosF",fromPort:"out",to:"floc",toPort:"dose",kind:"chemical",stage:"floc"},{id:"p-clar1-inter",from:"clar1",fromPort:"out",to:"inter",toPort:"in",kind:"clarified",stage:"uasb"},{id:"p-inter-pump",from:"inter",fromPort:"out",to:"pump",toPort:"in",kind:"clarified",stage:"uasb"},{id:"p-inter-pumpB",from:"inter",fromPort:"out",to:"pumpB",toPort:"in",kind:"clarified",stage:"uasb"},{id:"p-pumpB-header",from:"pumpB",fromPort:"out",to:"pump",toPort:"header",kind:"pumped",stage:"uasb"},...mc.map(i=>({id:`p-feed-${i}`,from:"pump",fromPort:"out",to:i,toPort:"in",kind:"pumped",stage:"uasb"})),...mc.map(i=>({id:`p-${i}-clar2`,from:i,fromPort:"out",to:"clar2",toPort:"in",kind:"anaerobic",stage:"clar2"})),...mc.map(i=>({id:`p-gas-${i}`,from:i,fromPort:"gas",to:"flare",toPort:"in",kind:"biogas",stage:"uasb"})),...mc.map(i=>({id:`p-purge-${i}`,from:i,fromPort:"sludge",to:"thick",toPort:"in",kind:"sludge",stage:"uasb"})),{id:"p-clar2-thick",from:"clar2",fromPort:"sludge",to:"thick",toPort:"in",kind:"sludge",stage:"clar2"},{id:"p-clar2-mbbr",from:"clar2",fromPort:"out",to:"mbbr",toPort:"in",kind:"treated",stage:"mbbr"},{id:"p-mbbr-filtro",from:"mbbr",fromPort:"out",to:"filtro",toPort:"in",kind:"treated",stage:"filtro"},{id:"p-filtro-discharge",from:"filtro",fromPort:"out",to:"discharge",toPort:"in",kind:"treated",stage:"discharge"},{id:"p-outfall",from:"discharge",fromPort:"out",to:"world",toPort:"outfall",kind:"treated",stage:"discharge"}],gc=[{id:"homog",units:["screen","homog"]},{id:"coag",units:["dosC","coag"]},{id:"floc",units:["dosF","floc"]},{id:"clar1",units:["clar1","thick","sludge"]},{id:"uasb",units:["inter","pump","pumpB","uasb1","uasb2","uasb3","uasb4","flare"]},{id:"clar2",units:["clar2"]},{id:"mbbr",units:["mbbr"]},{id:"filtro",units:["filtro"]},{id:"discharge",units:["discharge"]}],pr={leachate:{pipe:12947290,fluid:15964716},clarified:{pipe:13806954,fluid:16172099},pumped:{pipe:9085149,fluid:5209087},anaerobic:{pipe:11120746,fluid:11913266},treated:{pipe:7129277,fluid:1426352},sludge:{pipe:10122578,fluid:11561522},biogas:{pipe:15123524,fluid:16767050},chemical:{pipe:11247580,fluid:9399807},return:{pipe:11645855,fluid:13482378}};var Co=new x;function Qn(i,e,t,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Co.copy(e),Co[n]=0,Co.normalize();let l=.5*o/(o+a),u=1-Co.angleTo(i)/c;return Math.sign(Co[t])===1?u*l:a/(o+a)+l+l*(1-u)}var xc=class extends Ot{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new x,c=new x,l=new x(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=u.length/6,p=new x,y=.5/r;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),u[g+0]=l.x*Math.sign(a.x)+c.x*s,u[g+1]=l.y*Math.sign(a.y)+c.y*s,u[g+2]=l.z*Math.sign(a.z)+c.z*s,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),h[m+0]=Qn(p,c,"z","y",s,n),h[m+1]=1-Qn(p,c,"y","z",s,t);break;case 1:p.set(-1,0,0),h[m+0]=1-Qn(p,c,"z","y",s,n),h[m+1]=1-Qn(p,c,"y","z",s,t);break;case 2:p.set(0,1,0),h[m+0]=1-Qn(p,c,"x","z",s,e),h[m+1]=Qn(p,c,"z","x",s,n);break;case 3:p.set(0,-1,0),h[m+0]=1-Qn(p,c,"x","z",s,e),h[m+1]=1-Qn(p,c,"z","x",s,n);break;case 4:p.set(0,0,1),h[m+0]=1-Qn(p,c,"x","y",s,e),h[m+1]=1-Qn(p,c,"y","x",s,t);break;case 5:p.set(0,0,-1),h[m+0]=Qn(p,c,"x","y",s,e),h[m+1]=1-Qn(p,c,"y","x",s,t);break}}};function mr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new St,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in s){let d=kp(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<o[u].length;++y)f.push(o[u][y][h]);let p=kp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function kp(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new tn(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let y=u.getComponent(h,p);a.setComponent(h+d,p,y)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function de(i,e=0){let t=Math.sin(i*127.1+e*311.7+17.13)*43758.5453;return t-Math.floor(t)}var gr=i=>i-Math.floor(i),Hp=new yt,nE=new Qt;function M(i=0,e=0,t=0,n=0,r=0,s=0,o=1){let a=typeof o=="number"?new x(o,o,o):new x(...o);return Hp.setFromEuler(nE.set(n,r,s)),new be().compose(new x(i,e,t),Hp,a)}function Bd(i,e){let t=new x().subVectors(e,i),n=t.length(),r=new yt().setFromUnitVectors(new x(0,1,0),t.clone().normalize());return new be().compose(i.clone().add(e).multiplyScalar(.5),r,new x(1,n,1))}var Pe=class{constructor(){this.groups=new Map}add(e,t,n){let r=e.clone();for(let o of Object.keys(r.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&r.deleteAttribute(o);if(r.attributes.uv||r.setAttribute("uv",new tn(new Float32Array(r.attributes.position.count*2),2)),r.attributes.normal||r.computeVertexNormals(),!r.index){let o=r.attributes.position.count,a=new Uint32Array(o);for(let c=0;c<o;c++)a[c]=c;r.setIndex(new tn(a,1))}r.clearGroups(),n&&r.applyMatrix4(n),r.index.array instanceof Uint32Array||r.setIndex(new tn(Uint32Array.from(r.index.array),1));let s=this.groups.get(t)??[];s.push(r),this.groups.set(t,s)}rod(e,t,n,r,s=8){this.add(iE(n,s),r,Bd(e,t))}build(e,t=!0,n=!0){let r=[];for(let[s,o]of this.groups){let a=mr(o,!1);if(!a)continue;a.computeBoundingSphere();let c=new oe(a,s);c.castShadow=t&&!s.transparent,c.receiveShadow=n,e.add(c),r.push(c);for(let l of o)l.dispose()}return this.groups.clear(),r}},Dp=new Map;function iE(i,e){let t=e,n=Dp.get(t);return n||(n=new vt(1,1,1,e,1,!1),Dp.set(t,n)),n.clone().scale(i,1,i)}var C=(i,e,t,n=.04,r=2)=>new xc(i,e,t,r,Math.min(n,i/2-.001,e/2-.001,t/2-.001)),re=(i,e,t=32,n=i,r=!1)=>new vt(n,i,e,t,1,r);function rE(i,e,t=4){let n=[],r=i.map(s=>new me(s[0],s[1]));n.push(r[0].clone());for(let s=1;s<r.length-1;s++){let o=r[s-1],a=r[s],c=r[s+1],l=new me().subVectors(o,a),u=l.length();l.normalize();let d=new me().subVectors(c,a),h=d.length();d.normalize();let f=Math.min(e,u*.45,h*.45);if(f<1e-4||Math.abs(l.dot(d))>.999){n.push(a.clone());continue}let p=a.clone().addScaledVector(l,f),y=a.clone().addScaledVector(d,f);for(let g=0;g<=t;g++){let m=g/t,v=(1-m)*(1-m)*p.x+2*(1-m)*m*a.x+m*m*y.x,b=(1-m)*(1-m)*p.y+2*(1-m)*m*a.y+m*m*y.y;n.push(new me(Math.max(0,v),b))}}return n.push(r[r.length-1].clone()),n}function Ft(i,e=.05,t=48,n=0,r=Math.PI*2){return new Gi(rE(i,e),t,n,r)}function Ei(i,e,t,n=.05,r=!0,s=.06){let o=e+t;return r?[[0,e],[i,e],[i,o],[i-n,o],[i-n,e+s],[0,e+s]]:[[0,o-n],[i-n,o-n],[i-n,e+s],[0,e+s],[0,e],[i,e],[i,o],[0,o]]}function Vt(i,e,t,n=.18,r=.085,s=E.steel){let o=t.clone().normalize(),a=e.clone().addScaledVector(o,n);return i.rod(e.clone().addScaledVector(o,-.03),a,r,s,16),i.rod(a.clone().addScaledVector(o,-.045),a,r*1.65,s,20),a}function yc(i,e,t,n,r=.28,s=E.steelDark){let o=new x(Math.sin(n),0,Math.cos(n)),a=o.clone().multiplyScalar(e);i.rod(a.clone().addScaledVector(o,-.02),a.clone().addScaledVector(o,.07),r,s,24),i.rod(a.clone().addScaledVector(o,.07),a.clone().addScaledVector(o,.1),r*.82,s,24),i.rod(a.clone().addScaledVector(o,.1).add(new x(0,r*.35,0)),a.clone().addScaledVector(o,.1).add(new x(0,-r*.35,0)),.015,E.steel,6)}function Fn(i,e,t=1,n=1.4,r=E.rail){for(let o=0;o<e.length-1;o++){let a=e[o],c=e[o+1],l=a.distanceTo(c),u=Math.max(1,Math.ceil(l/n));for(let d=0;d<=u;d++){if(d===0&&o>0)continue;let h=a.clone().lerp(c,d/u);i.rod(h,h.clone().add(new x(0,t,0)),.022,r,6)}i.rod(a.clone().setY(a.y+t),c.clone().setY(c.y+t),.022*1.15,r,8),i.rod(a.clone().setY(a.y+t*.5),c.clone().setY(c.y+t*.5),.022*.9,r,6)}}function _i(i,e,t,n,r=!1,s=.42){let o=n.clone().normalize(),a=new x(0,1,0).cross(o).normalize(),c=e.clone().addScaledVector(a,-s/2),l=e.clone().addScaledVector(a,s/2),u=t+.9;i.rod(c,c.clone().setY(u),.022,E.rail,6),i.rod(l,l.clone().setY(u),.022,E.rail,6);for(let d=e.y+.3;d<t+.05;d+=.3)i.rod(c.clone().setY(d),l.clone().setY(d),.014,E.rail,5);if(r){let d=new bn(.36,.014,4,12,Math.PI),h=new be().makeBasis(a,o,new x(0,-1,0));for(let f=e.y+2.2;f<=u;f+=.7){let p=e.clone().setY(f).addScaledVector(o,.04);i.add(d,E.rail,new be().makeTranslation(p.x,p.y,p.z).multiply(h))}}}function Rt(i){let e=new we;e.position.copy(i);let t=new oe(re(.06,.06,12),E.steelDark);t.position.y=.03;let n=Rp(),r=new oe(new rt(.055,14,10,0,Math.PI*2,0,Math.PI/2),n);return r.position.y=.06,e.add(t,r),{object:e,set(s,o){let a=hc[s];n.color.setHex(a),n.emissive.setHex(a),n.emissiveIntensity=s==="idle"?.12:o?1.25:.8}}}function ei(i,e=4,t=64){let n=[];for(let[o,a]of i)if(!(o<.02))for(let c=0;c<t;c++){let l=c/t*Math.PI*2,u=(c+1)/t*Math.PI*2;n.push(Math.sin(l)*o,a,Math.cos(l)*o,Math.sin(u)*o,a,Math.cos(u)*o)}for(let o=0;o<e;o++){let a=Math.PI/4+o/e*Math.PI*2;for(let c=0;c<i.length-1;c++){let[l,u]=i[c],[d,h]=i[c+1];n.push(Math.sin(a)*l,u,Math.cos(a)*l,Math.sin(a)*d,h,Math.cos(a)*d)}}let r=new St;r.setAttribute("position",new ze(n,3));let s=new _o(r,E.outline);return s.renderOrder=5,s}function ln(i,e){let t=new x().subVectors(e,i),n=new tc(new Ot(t.x,t.y,t.z));n.translate((i.x+e.x)/2,(i.y+e.y)/2,(i.z+e.z)/2);let r=new _o(n,E.outline);return r.renderOrder=5,r}function sE(i,e){let t=new oe(new Mn(i,48),Sp());return t.rotation.x=-Math.PI/2,t.position.y=e,t.renderOrder=3,t}function At(i){let e=new we;return e.name=i.id,e.position.set(i.pos[0],0,i.pos[1]),e}function Ct(i){let e={active:!1,selected:!1,flow:0,motion:0,status:"idle"},t=i.root.position.clone(),n={};for(let[a,c]of Object.entries(i.localAnchors))n[a]=c.clone().add(t);let r={min:[i.localBox.min[0]+t.x,i.localBox.min[1],i.localBox.min[2]+t.z],max:[i.localBox.max[0]+t.x,i.localBox.max[1],i.localBox.max[2]+t.z]};i.outline.visible=!1,i.root.add(i.outline);let s=sE(i.glowRadius,i.glowY);s.visible=!1,i.root.add(s),i.root.add(i.lamp.object),i.lamp.set("idle",!1);for(let a of i.pickTargets)a.userData.unitId=i.spec.id;let o=()=>{i.lamp.set(e.status,e.active),i.onState?.(e)};return{id:i.spec.id,root:i.root,anchors:n,radius:i.radius,footprint:r,pickTargets:i.pickTargets,setActive(a){e.active=a,o()},setSelected(a){e.selected=a,i.outline.visible=a,s.visible=a},setFlowLevel(a){e.flow=Bs(a),o()},setInternalMotion(a){e.motion=Bs(a),o()},setStatus(a){e.status=a,o()},update(a){i.animate?.(a,e)}}}var Bs=i=>i<0?0:i>1?1:Number.isFinite(i)?i:0,oE=new be,aE=new x,Ud=new x,Up=new yt,cE=new Qt;function Xi(i,e,t,n,r,s,o=0,a=0,c=0){typeof s=="number"?Ud.set(s,s,s):Ud.set(s[0],s[1],s[2]),Up.setFromEuler(cE.set(o,a,c)),i.setMatrixAt(e,oE.compose(aE.set(t,n,r),Up,Ud))}function Ns(i){return Math.atan2(i[0],i[2])}function on(i,e,t,n,r,s,o){let a=Math.max(8,Math.ceil(s/(Math.PI*2)*64)),c=new bn(e,t,8,a,s);i.add(c,o,M(0,n,0,0,r-Math.PI/2,0).multiply(M(0,0,0,-Math.PI/2,0,0)))}function Fs(i,e,t,n){let r=(d,h,f)=>new x(Math.sin(f)*d,h,Math.cos(f)*d);for(let d of[t.phi-t.halfWidth,t.phi+t.halfWidth])for(let h=0;h<n.length-1;h++)i.rod(r(n[h][0]+.01,n[h][1],d),r(n[h+1][0]+.01,n[h+1][1],d),.03,E.steelDark,8);let[s,o]=n[0],[a,c]=n[n.length-1];on(i,s+.01,.03,o,t.phi-t.halfWidth,2*t.halfWidth,E.steelDark),on(i,a+.01,.03,c,t.phi-t.halfWidth,2*t.halfWidth,E.steelDark);let l=n.map(([d,h])=>new me(d-.02,h)),u=new oe(new Gi(l,24,t.phi-t.halfWidth,2*t.halfWidth),E.glass);return u.renderOrder=2,e.add(u),u}var pn={feedHeaderY:4.2,feedHeaderZ:-2.2,collectorY:2.85,collectorZ:2.4,collectorTurnX:6,homogRiserX:-20.4,pipeR:.085,trunkR:.105,sludgeR:.075,chemR:.035,cornerR:.24,gasY:4.8,gasZ:.5,gasX:6.3,purgeY:.45,purgeZ:2,purgeX:-9.6,trenchY:-.2,purgeTrenchX:[4.5,5.9],chemY:{coag:3.45,floc:3.55},returnX:-20,returnZ:-5.75,thickBedRiserX:-16.9,thickBedDropX:-11.6},Oe=(i,e,t)=>new x(i,e,t);function lE(i,e,t){let n=pn,r;if(i.id==="p-inlet")r=[e,Oe(e.x,t.y,e.z),t];else if(i.id==="p-homog-coag")r=[e,Oe(n.homogRiserX,e.y,e.z),Oe(n.homogRiserX,t.y,e.z),t];else if(i.id.startsWith("p-feed-")){let s=n.feedHeaderY,o=n.feedHeaderZ;r=[e,Oe(e.x,s,e.z),Oe(e.x,s,o),Oe(t.x,s,o),Oe(t.x,s,t.z),t]}else if(/^p-uasb\d-clar2$/.test(i.id)){let s=n.collectorY,o=n.collectorZ,a=n.collectorTurnX;r=[e,Oe(e.x,s,e.z),Oe(e.x,s,o),Oe(a,s,o),Oe(a,s,t.z),Oe(a,t.y,t.z),t]}else if(i.id==="p-screen-homog")r=[e,Oe(e.x,t.y,e.z),t];else if(i.id.startsWith("p-gas-")){let s=n.gasY;r=[e,Oe(e.x,s,e.z),Oe(n.gasX,s,e.z),Oe(n.gasX,s,t.z),Oe(t.x,s,t.z),t]}else if(i.id.startsWith("p-purge-")){let s=n.purgeY,o=n.purgeZ,a=n.purgeX;r=[e,Oe(e.x,s,e.z),Oe(e.x,s,o),Oe(a,s,o),Oe(a,s,t.z),t]}else if(i.id==="p-clar2-thick"){let s=n.purgeY,o=n.purgeZ,a=n.purgeX,c=n.trenchY,[l,u]=n.purgeTrenchX;r=[e,Oe(e.x,c,e.z),Oe(e.x,c,o),Oe(l,c,o),Oe(l,s,o),Oe(a,s,o),Oe(a,s,t.z),t]}else if(i.id==="p-clar1-thick"){let s=n.purgeY,o=n.purgeZ,a=n.purgeX,c=n.trenchY;r=[e,Oe(e.x,c,e.z),Oe(a,c,e.z),Oe(a,c,o-.6),Oe(a,s,o-.6),Oe(a,s,t.z),t]}else if(i.id==="p-thick-bed"){let s=n.trenchY;r=[e,Oe(n.thickBedDropX,e.y,e.z),Oe(n.thickBedDropX,s,e.z),Oe(n.thickBedRiserX,s,e.z),Oe(n.thickBedRiserX,t.y,e.z),Oe(n.thickBedRiserX,t.y,t.z),t]}else if(i.id==="p-bed-return"){let s=n.trenchY;r=[e,Oe(e.x,s,e.z),Oe(n.returnX,s,e.z),Oe(n.returnX,s,n.returnZ),Oe(t.x,s,n.returnZ),Oe(t.x,s,t.z),t]}else if(i.id==="p-dosC-coag"||i.id==="p-dosF-floc"){let s=i.id==="p-dosC-coag"?n.chemY.coag:n.chemY.floc;r=[e,Oe(e.x,s,e.z),Oe(e.x,s,t.z),Oe(t.x,s,t.z),t]}else if(i.id==="p-inter-pumpB")r=[e,Oe(-4.6,e.y,e.z),Oe(-4.6,e.y,t.z),t];else if(i.id==="p-pumpB-header")r=[e,Oe(e.x,t.y,e.z),t];else if(i.id==="p-clar1-inter"||i.id==="p-clar2-mbbr")r=[e,Oe(t.x,e.y,e.z),t];else if(i.id==="p-mbbr-filtro"){let s=e.z+.7;r=[e,Oe(e.x,e.y,s),Oe(e.x,t.y,s),Oe(e.x,t.y,t.z),t]}else r=[e,Oe(t.x,e.y,e.z),Oe(t.x,e.y,t.z),t];return Bp(r)}function Bp(i){let e=[];for(let t of i)(!e.length||e[e.length-1].distanceTo(t)>1e-4)&&e.push(t.clone());for(let t=e.length-2;t>=1;t--){let n=e[t].clone().sub(e[t-1]).normalize(),r=e[t+1].clone().sub(e[t]).normalize();n.dot(r)>.9999&&e.splice(t,1)}return e}function uE(i){let e=0;for(let t=1;t<i.length;t++)e+=i[t].distanceTo(i[t-1]);return e}var xr=new x(0,1,0);function Nd(i){return xr.clone().addScaledVector(i,-i.y).normalize()}function dE(i,e,t){let n=Math.atan2(i.z,i.x),r=Math.atan2(e.z,e.x)-n;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;let s=n+r*t;return new x(Math.cos(s),0,Math.sin(s))}function hE(i,e,t=8){let n=i.length,r=[],s=[],o=[0];for(let u=0;u<n-1;u++){let d=i[u+1].clone().sub(i[u]);s.push(d.length()),r.push(d.normalize()),o.push(o[u]+s[u])}let a=new Array(n).fill(0);for(let u=1;u<n-1;u++)a[u]=Math.min(e,.45*s[u-1],.45*s[u]);let c=u=>Math.abs(u.y)>.999,l=[];for(let u=0;u<n-1;u++){let d=i[u].clone().addScaledVector(r[u],a[u]),h=i[u+1].clone().addScaledVector(r[u],-a[u+1]),f=o[u]+a[u],p=o[u+1]-a[u+1];if(c(r[u])){let y=Math.sign(r[u].y),g=u>0&&!c(r[u-1])?r[u-1].clone().multiplyScalar(-y):null,m=u<n-2&&!c(r[u+1])?r[u+1].clone().multiplyScalar(-y):null,v=g??m??new x(1,0,0),b=m??v,_=v.dot(b)>.999?1:12;for(let R=0;R<=_;R++){let S=R/_;l.push({c:d.clone().lerp(h,S),t:r[u].clone(),n:dE(v,b,S),s:f+(p-f)*S})}}else l.push({c:d,t:r[u].clone(),n:Nd(r[u]),s:f}),l.push({c:h,t:r[u].clone(),n:Nd(r[u]),s:p});if(u<n-2&&a[u+1]>1e-4){let y=r[u],g=r[u+1],m=a[u+1],b=i[u+1].clone().addScaledVector(y,-m).addScaledVector(g,m);for(let _=1;_<t;_++){let R=_/t*Math.PI/2,S=b.clone().addScaledVector(g,-m*Math.cos(R)).addScaledVector(y,m*Math.sin(R)),L=y.clone().multiplyScalar(Math.cos(R)).addScaledVector(g,Math.sin(R)).normalize();l.push({c:S,t:L,n:Nd(L),s:o[u+1]-m+2*m*(_/t)})}}}return l}var Fd=class{constructor(e){this.length=e;this.pos=[];this.nrm=[];this.uv=[];this.aS=[];this.idx=[]}addRings(e,t,n=14){let r=this.pos.length/3;for(let s of e){let o=new x().crossVectors(s.n,s.t);for(let a=0;a<=n;a++){let c=a/n*Math.PI*2,l=Math.cos(c)*s.n.x+Math.sin(c)*o.x,u=Math.cos(c)*s.n.y+Math.sin(c)*o.y,d=Math.cos(c)*s.n.z+Math.sin(c)*o.z;this.pos.push(s.c.x+t*l,s.c.y+t*u,s.c.z+t*d),this.nrm.push(l,u,d),this.uv.push(s.s/this.length,a/n),this.aS.push(s.s)}}for(let s=1;s<e.length;s++)for(let o=1;o<=n;o++){let a=r+(n+1)*(s-1)+(o-1),c=r+(n+1)*s+(o-1),l=r+(n+1)*s+o,u=r+(n+1)*(s-1)+o;this.idx.push(a,c,u,c,l,u)}}addStatic(e,t,n){let r=(e.index,e),s=r.attributes.position,o=r.attributes.normal,a=new ot().getNormalMatrix(t),c=this.pos.length/3,l=new x;for(let u=0;u<s.count;u++)l.fromBufferAttribute(s,u).applyMatrix4(t),this.pos.push(l.x,l.y,l.z),l.fromBufferAttribute(o,u).applyMatrix3(a).normalize(),this.nrm.push(l.x,l.y,l.z),this.uv.push(n/this.length,.5),this.aS.push(n);if(r.index)for(let u=0;u<r.index.count;u++)this.idx.push(c+r.index.getX(u));else for(let u=0;u<s.count;u++)this.idx.push(c+u)}build(){let e=new St;return e.setAttribute("position",new ze(this.pos,3)),e.setAttribute("normal",new ze(this.nrm,3)),e.setAttribute("uv",new ze(this.uv,2)),e.setAttribute("aS",new ze(this.aS,1)),e.setIndex(this.idx),e.computeBoundingSphere(),e}};function vc(i,e,t=1){let n=new yt().setFromUnitVectors(xr,e.clone().normalize());return new be().compose(i,n,new x(1,t,1))}var zd=class{constructor(e,t,n){this.mesh=e;this.uniforms=t;this.length=n;this.members=[]}refresh(e){let t=0,n=0,r=!1,s=!1;for(let a of this.members){let c=a.run;c.visibleFlag&&(s=!0,t=Math.max(t,c.flowValue),n=Math.max(n,Math.min(this.length,Math.max(0,c.frontValue*c.length-a.offset))),r=r||c.highlighted)}let o=this.uniforms;o.uTime.value=e,o.uFlow.value=t,o.uFront.value=n,o.uHighlight.value=r?1:0,this.mesh.visible=s}},Od=class{constructor(e,t,n,r,s){this.id=e;this.kind=t;this.from=n;this.to=r;this.points=s;this.root=new we;this.flowValue=0;this.frontValue=0;this.highlighted=!1;this.visibleFlag=!0;this.tubes=[];this.cum=[0];for(let o=1;o<s.length;o++)this.cum.push(this.cum[o-1]+s[o].distanceTo(s[o-1]));this.length=this.cum[this.cum.length-1],this.root.name=e}pointAt(e){let t=Bs(e)*this.length,n=1;for(;n<this.cum.length-1&&this.cum[n]<t;)n++;let r=this.cum[n]-this.cum[n-1],s=r>1e-9?(t-this.cum[n-1])/r:0;return this.points[n-1].clone().lerp(this.points[n],s)}setFlow(e){this.flowValue=Bs(e)}setFront(e){this.frontValue=Bs(e)}setHighlighted(e){this.highlighted=e}setVisible(e){this.visibleFlag=e;for(let t of this.tubes)t.refresh(t.uniforms.uTime.value)}update(e){for(let t of this.tubes)t.refresh(e)}},qr=i=>`${i.x.toFixed(3)},${i.y.toFixed(3)},${i.z.toFixed(3)}`;function fE(i,e,t){let n=t.clone().sub(e),r=n.length();if(r<1e-6)return null;let s=i.clone().sub(e).dot(n)/(r*r);return s<=1e-6||s>=1-1e-6?null:e.clone().addScaledVector(n,s).distanceTo(i)<1e-4?s:null}function pE(i){let e=[],t=new Map;for(let n of i){let r=n.group;r&&i.filter(s=>s.group===r).length>1?(t.has(r)||t.set(r,[]),t.get(r).push(n)):e.push({points:n.points.map(s=>s.clone()),owners:[n.id],members:[{id:n.id,offset:0}],kind:n.kind,startJunction:!1,endJunction:!1})}for(let n of t.values()){let r=n.flatMap(c=>c.points),s=new Map;for(let c of n){let l=[c.points[0].clone()];for(let u=1;u<c.points.length;u++){let d=c.points[u-1],h=c.points[u],f=r.map(p=>({v:p,t:fE(p,d,h)})).filter(p=>p.t!==null);f.sort((p,y)=>p.t-y.t);for(let p of f)l[l.length-1].distanceTo(p.v)>1e-4&&l.push(p.v.clone());l.push(h.clone())}s.set(c.id,l)}let o=new Map;for(let[c,l]of s)for(let u=1;u<l.length;u++){let d=qr(l[u-1])+">"+qr(l[u]);o.has(d)||o.set(d,new Set),o.get(d).add(c)}let a=new Map;for(let c of n){let l=s.get(c.id),u=1,d=0;for(;u<l.length;){let h=[...o.get(qr(l[u-1])+">"+qr(l[u]))].sort(),f=h.join("|"),p=[l[u-1]],y=d;for(;u<l.length&&[...o.get(qr(l[u-1])+">"+qr(l[u]))].sort().join("|")===f;)d+=l[u].distanceTo(l[u-1]),p.push(l[u]),u++;let g=f+"@"+qr(p[0]),m=a.get(g);m||(m={points:Bp(p),owners:h,members:[],kind:c.kind,startJunction:y>1e-6,endJunction:u<l.length},a.set(g,m),e.push(m)),m.members.push({id:c.id,offset:y})}}}return e}function mE(i,e){return i==="chemical"?pn.chemR:e?i==="sludge"?pn.sludgeR*1.2:pn.trunkR:i==="sludge"||i==="return"?pn.sludgeR:pn.pipeR}function gE(i,e,t){let n=uE(i.points),r=new Fd(n),s=hE(i.points,pn.cornerR);r.addRings(s,e);let o=new vt(1,1,1,22),a=s[0],c=s[s.length-1],l=(g,m,v)=>{let b=vc(g,m,.045).multiply(new be().makeScale(e*1.65,1,e*1.65));r.addStatic(o,b,v)};t.flangeStart&&l(a.c.clone().addScaledVector(a.t,.0225),a.t,0),t.flangeEnd&&l(c.c.clone().addScaledVector(c.t,-.0225),c.t,n);let u=new rt(1,16,12),d=(g,m,v)=>{r.addStatic(u,new be().compose(g,new yt,new x().setScalar(t.junctionR*1.18)),v);let b=vc(g.clone().addScaledVector(m,v===0?.1:-.1),m,.1).multiply(new be().makeScale(e*1.3,1,e*1.3));r.addStatic(o,b,v)};i.startJunction&&d(a.c,a.t,0),i.endJunction&&d(c.c,c.t,n);let h=pr[i.kind],{material:f,uniforms:p}=Ap(h.pipe,h.fluid);p.uLength.value=n;let y=new oe(r.build(),f);return y.castShadow=!0,y.receiveShadow=!0,new zd(y,p,n)}function Np(i,e,t){let n=new we;n.name="pipes";let r=new Map,s=[];for(let p of i){let[y,g]=e(p),m=lE(p,y,g);r.set(p.id,new Od(p.id,p.kind,p.from,p.to,m));let v=i.filter(R=>R.from===p.from&&R.fromPort===p.fromPort&&R.from!=="world").length>1,b=i.filter(R=>R.to===p.to&&R.toPort===p.toPort&&R.to!=="world").length>1,_=v?`from:${p.from}.${p.fromPort}`:b?`to:${p.to}.${p.toPort}`:null;s.push({id:p.id,kind:p.kind,points:m,group:_})}let o=new Map(i.map(p=>[p.id,p])),a=pE(s),c=[],l=new Pe;for(let p of a){let y=p.owners.length>1,g=mE(p.kind,y),m=p.members[0],v=r.get(m.id),b=o.get(m.id),_=!p.startJunction&&b.from!=="world",R=o.get(p.members[p.members.length-1].id),S=!p.endJunction&&b.to!=="world"&&R.toPort!=="header",L=gE(p,g,{flangeStart:_,flangeEnd:S,junctionR:pn.trunkR});for(let P of p.members){let w=r.get(P.id);L.members.push({run:w,offset:P.offset}),w.tubes.push(L)}L.mesh.userData.pipeIds=p.owners,v.root.add(L.mesh),vE(l,p.points,g,t,c),yE(l,p.points)}EE(l,r,a);let u=r.get("p-pumpB-header");if(u){let p=u.points[u.points.length-1];l.add(new rt(pn.trunkR*1.25,16,12),E.steelDark,M(p.x,p.y,p.z))}let d=r.get("p-outfall");if(d){let p=d.points[d.points.length-1];l.add(re(pn.pipeR*1.6,.05,22),E.steelDark,M(p.x,p.y,p.z-.025,Math.PI/2,0,0))}for(let p of r.values())n.add(p.root);let h=l.build(n);for(let p of h)p.name="pipe-supports";let f={};for(let[p,y]of r)f[p]=y;return n.userData.supports=c,{root:n,pipes:f,supports:c}}function xE(i,e,t,n){return t.some(r=>i>r.min[0]-n&&i<r.max[0]+n&&e>r.min[2]-n&&e<r.max[2]+n)}function yE(i,e){for(let t=1;t<e.length;t++){let n=e[t-1],r=e[t];if(n.y>=0||r.y>=0)continue;let s=new x().subVectors(r,n).setY(0),o=s.length();if(o<.001)continue;let a=.25,c=Math.atan2(s.x,s.z),l=n.clone().add(r).multiplyScalar(.5);i.add(C(.56,.03,o+a*2,.008),E.grating,M(l.x,.028,l.z,0,c,0));let u=new x(Math.cos(c),0,-Math.sin(c));for(let f of[-1,1]){let p=l.clone().addScaledVector(u,f*.3);i.add(C(.05,.035,o+a*2,.008),E.steelDark,M(p.x,.02,p.z,0,c,0))}let d=Math.floor((o+a*2)/.18),h=s.clone().normalize();for(let f=0;f<=d;f++){let p=n.clone().addScaledVector(h,-a+f*.18);i.add(C(.54,.012,.025,.004),E.steelDark,M(p.x,.046,p.z,0,c,0))}}}function vE(i,e,t,n,r){for(let s=1;s<e.length;s++){let o=e[s-1],a=e[s];if(Math.abs(o.y-a.y)>.001||o.y<0)continue;let c=o.distanceTo(a);if(c<1.4)continue;let l=o.y,u=a.clone().sub(o).normalize(),d=new x(-u.z,0,u.x),h=Math.max(1,Math.round(c/3));for(let f=0;f<h;f++){let p=(f+.5)/h,y=o.clone().lerp(a,p);if(xE(y.x,y.z,n,.3))continue;let g=Math.atan2(d.x,d.z);if(l-t<.55){let R=Math.max(.05,l-t);i.add(C(.22,R,.42,.03),E.concreteDark,M(y.x,R/2,y.z,0,g,0)),r.push({min:[y.x-.22,0,y.z-.22],max:[y.x+.22,l+t,y.z+.22]});continue}let m=l>3,v=m?.13:.08,b=l-t-.06;i.add(C(v,b,v,.015),E.steelBlue,M(y.x,b/2,y.z)),r.push({min:[y.x-v*1.3,0,y.z-v*1.3],max:[y.x+v*1.3,l+t,y.z+v*1.3]}),i.add(C(v*2.6,.03,v*2.6,.01),E.steelDark,M(y.x,.015,y.z)),i.add(C(m?.7:.42,.06,.07,.012),E.steelBlue,M(y.x,b+.03,y.z,0,g+Math.PI/2,0));let _=new yt().setFromUnitVectors(new x(0,0,1),u);if(i.add(new bn(t+.012,.012,6,18),E.steel,new be().compose(y,_,new x(1,1,1))),m){let R=y.clone().setY(b-.55).addScaledVector(d,0),S=y.clone().setY(b).addScaledVector(d,.3);i.rod(R,S,.025,E.steelBlue,6)}}}}function zs(i,e,t,n,r){let s=vc(e,t,.2);i.add(re(n*1.75,1,20),E.steelDark,s),i.add(new rt(n*1.55,16,10),E.steelDark,M(e.x,e.y,e.z));let o=e.clone().addScaledVector(r,n*1.5),a=e.clone().addScaledVector(r,n*1.5+.22);i.rod(o,a,.025,E.steel,8);let c=new yt().setFromUnitVectors(new x(0,0,1),r);i.add(new bn(.1,.016,8,24),E.rail,new be().compose(a,c,new x(1,1,1)))}function bE(i,e,t,n){i.add(re(n*1.9,1,22),E.steelDark,vc(e,t,.09));let r=e.clone().setY(e.y+n*1.9);i.rod(r,r.clone().setY(r.y+.1),.02,E.steel,6);let s=new x(-t.z,0,t.x).normalize();i.rod(r.clone().setY(r.y+.1),r.clone().setY(r.y+.1).addScaledVector(t,.22).addScaledVector(s,0),.016,E.rail,6)}function EE(i,e,t){let n=t.find(c=>c.owners.length===4&&c.kind==="pumped");if(n&&n.points.length>1){let c=n.points[0];zs(i,new x(c.x,1.75,c.z),xr,pn.trunkR,new x(0,0,1)),i.add(re(pn.trunkR*1.5,.26,18),E.steelDark,M(c.x,1.25,c.z))}for(let c of t){if(c.kind!=="pumped"||c.owners.length!==1)continue;let l=c.points;for(let u=1;u<l.length;u++){let d=l[u].clone().sub(l[u-1]);if(Math.abs(d.z)>1&&Math.abs(d.y)<.001){bE(i,l[u-1].clone().lerp(l[u],.5),d.normalize(),pn.pipeR);break}}}let r=e.get("p-inter-pump");if(r){let c=r.pointAt(.78);zs(i,c,new x(1,0,0),pn.pipeR,xr)}let s=e.get("p-inter-pumpB");if(s){let c=s.points[s.points.length-1],l=s.points[s.points.length-2];zs(i,l.clone().lerp(c,.45),new x(1,0,0),pn.pipeR,xr)}let o=e.get("p-pumpB-header");if(o){let c=o.points[0];zs(i,new x(c.x,1.75,c.z),xr,pn.pipeR,new x(0,0,1)),i.add(re(pn.pipeR*1.5,.26,18),E.steelDark,M(c.x,1.25,c.z))}for(let[c,l]of e){if(!c.startsWith("p-gas-"))continue;let u=l.points[0];zs(i,new x(u.x,u.y+.45,u.z),xr,pn.pipeR,new x(0,0,1))}let a=e.get("p-gas-uasb1");if(a){let c=a.points[a.points.length-1];zs(i,new x(c.x,3.3,c.z),xr,pn.trunkR,new x(1,0,0))}}function bc(i,e,t,n){let r=Math.max(2,Math.ceil(Math.abs(n-t)/(Math.PI/22))),s=[];for(let o=0;o<=r;o++){let a=t+(n-t)*(o/r);s.push([i[0]+e*Math.cos(a),i[1]+e*Math.sin(a)])}return s}function Fp(i){let e=[];for(let t of i)(!e.length||Math.hypot(t[0]-e[e.length-1][0],t[1]-e[e.length-1][1])>1e-4)&&e.push(t);return e}var yr=pt.loop,zn=pt.z,Mi=yr.r,Ec={ne:[pt.endX,zn+Mi],se:[pt.endX,yr.southZ-Mi],sw:[yr.westX+Mi,yr.southZ-Mi],exit:[yr.westX-Mi,zn+Mi]};function zp(i,e,t,n,r=10){let s=[];for(let o=0;o<=r;o++){let a=o/r,c=.5-.5*Math.cos(Math.PI*a);s.push([i+(t-i)*a,e+(n-e)*c])}return s}var qi=(()=>{let i=Ld,e=Fp([[i.spawnX,i.laneIn],...zp(i.shiftX0,i.laneIn,i.shiftX1,zn),[pt.endX,zn]]),t=Fp([[pt.endX,zn],...bc(Ec.ne,Mi,-Math.PI/2,0),...bc(Ec.se,Mi,0,Math.PI/2),...bc(Ec.sw,Mi,Math.PI/2,Math.PI),...bc(Ec.exit,Mi,0,-Math.PI/2),...zp(i.shiftX1,zn,i.shiftX0,i.laneOut),[i.despawnX,i.laneOut]]);return{entry:e,loop:t}})();function Mc(i,e){let t=1/0;for(let n of[qi.entry,qi.loop])for(let r=1;r<n.length;r++){let[s,o]=n[r-1],[a,c]=n[r],l=a-s,u=c-o,d=l*l+u*u,h=d>0?Math.max(0,Math.min(1,((i-s)*l+(e-o)*u)/d)):0;t=Math.min(t,Math.hypot(i-(s+h*l),e-(o+h*u)))}return t}function _c(i,e){return i.map((t,n)=>{let r=i[Math.max(0,n-1)],s=i[Math.min(i.length-1,n+1)],o=s[0]-r[0],a=s[1]-r[1],c=Math.hypot(o,a)||1;return o/=c,a/=c,[t[0]+a*e,t[1]-o*e]})}function Vd(i,e=!1){let t=Ge.minX+.05,n=[],r=s=>s[0]>=t!==e;for(let s=0;s<i.length;s++){let o=i[s],a=r(o);if(s>0){let c=i[s-1],l=r(c);if(a!==l){let u=(t-c[0])/(o[0]-c[0]);n.push([t,c[1]+(o[1]-c[1])*u])}}a&&n.push(o)}return n}function Io(i,e,t){let n=_c(i,e),r=_c(i,-e),s=[],o=[],a=[],c=[],l=0;for(let y=0;y<i.length;y++)if(y>0&&(l+=Math.hypot(i[y][0]-i[y-1][0],i[y][1]-i[y-1][1])),s.push(n[y][0],t,n[y][1],r[y][0],t,r[y][1]),o.push(0,1,0,0,1,0),a.push(l/4,0,l/4,1),y>0){let g=2*y;c.push(g-2,g-1,g,g-1,g+1,g)}let u=new St;u.setAttribute("position",new ze(s,3)),u.setAttribute("normal",new ze(o,3)),u.setAttribute("uv",new ze(a,2)),u.setIndex(c);let d=new x(s[0],s[1],s[2]),h=new x(s[3],s[4],s[5]),f=new x(s[6],s[7],s[8]);if(new x().subVectors(h,d).cross(new x().subVectors(f,d)).y<0){for(let y=0;y<c.length;y+=3){let g=c[y];c[y]=c[y+1],c[y+1]=g}u.setIndex(c)}return u}function Op(i,e){let t=[],n=[],r=[];for(let s=1;s<i.length;s++){let[o,a]=i[s-1],[c,l]=i[s],u=Math.max(1,Math.ceil(Math.hypot(c-o,l-a)/.4));for(let d=0;d<u;d++)r.push([o+(c-o)*d/u,a+(l-a)*d/u])}r.push(i[i.length-1]);for(let s of r)Mc(s[0],s[1])<e||s[0]<Ge.minX+.05?n.length&&(n.length>1&&t.push(n),n=[]):n.push(s);return n.length>1&&t.push(n),t}function Vp(){let i=new we;i.name="road";let e=pt.width/2,t=new Pe,n=new Pe,r=[],s=Vd(qi.entry),o=Vd(qi.loop);t.add(Io(s,e,.012),Fe.asphalt),t.add(Io(o,e,.013),Fe.asphalt);for(let I of[s,o])for(let B of[1,-1]){for(let X of Op(_c(I,B*(e+.08)),e-.02))for(let V=1;V<X.length;V++){let[Q,se]=X[V-1],[le,Ce]=X[V],Qe=Math.hypot(le-Q,Ce-se);t.add(C(.16,.12,Qe+.02,.02),Fe.curb,M((Q+le)/2,.06,(se+Ce)/2,0,Math.atan2(le-Q,Ce-se),0))}for(let X of Op(_c(I,B*(e-.25)),e-.4))for(let V=1;V<X.length;V++){let[Q,se]=X[V-1],[le,Ce]=X[V],Qe=Math.hypot(le-Q,Ce-se);n.add(new Ke(.1,Qe+.01).rotateX(-Math.PI/2),Fe.roadPaint,M((Q+le)/2,.02,(se+Ce)/2,0,Math.atan2(le-Q,Ce-se),0))}}let a=[[-29,zn,Math.PI/2],[-15,9,0],[-21,yr.southZ+0,-Math.PI/2],[-28.8,9,Math.PI]];for(let[I,B,X]of a)for(let V of[-1,1])n.add(new Ke(.12,.9).rotateX(-Math.PI/2),Fe.roadPaint,M(I+Math.sin(X)*0+V*.28*Math.cos(X),.021,B-V*.28*Math.sin(X),0,X+V*.6,0));let c=pt.chemStop,l=Ue.control.pos,u=c.x-3.2,d=c.x+6.2;for(let I of[zn-e+.35,zn+e-.35])n.add(new Ke(d-u,.12).rotateX(-Math.PI/2),Fe.roadPaintYellow,M((u+d)/2,.022,I));for(let I of[u,d])n.add(new Ke(.12,pt.width-.7).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(I,.022,zn));for(let I=0;I<4;I++)n.add(new Ke(.12,1.2).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(u+.6+I*.45,.022,zn,0,.75,0));t.add(C(6.4,.03,1.05,.01),Fe.apron,M(l[0]-.2,.015,zn-e-.52));let h=Ue.sludge,f=h.size.w,p=h.size.l,y=h.pos[1]+p/2,g=yr.southZ-e;t.add(C(f,.03,g-y+.1,.01),Fe.apron,M(h.pos[0],.015,(y+g)/2));let m=pt.sludgeStop;for(let I of[m.x-5.2,m.x+1.6])n.add(new Ke(.12,pt.width-.7).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(I,.022,yr.southZ));let v=Ge.minX+.45,b=zn-e-.45,_=zn+e+.45;for(let I of[b,_])t.add(C(.22,2.2,.22,.03),E.steelDark,M(v,1.1,I)),t.add(C(.3,.05,.3,.01),E.steelBlue,M(v,2.22,I));t.add(C(.08,.04,5,.01),E.steelDark,M(v-.2,.02,b-2));let R=b-2.4,S=_-b-.3;for(let I of[.15,1.85])t.add(C(.06,.07,S,.01),E.rail,M(v-.2,I,R));for(let I=0;I<=12;I++)t.add(C(.03,1.7,.03,.005),E.rail,M(v-.2,1,R-S/2+I*(S/12)));for(let I of[R-S/2+.3,R+S/2-.3])t.add(re(.07,.05,12),E.rubber,M(v-.2,.08,I,0,0,Math.PI/2));t.add(C(.12,.12,.12,.02),Fe.roadPaintYellow,M(v,2.3,_));let L=v+1.1,P=_+1.35;t.add(C(1.4,2.4,1.4,.05),Fe.wall,M(L,1.2,P)),t.add(C(1.6,.12,1.6,.03),E.steelBlue,M(L,2.46,P)),t.add(C(.9,.7,.02,.01),E.glass,M(L,1.5,P-.71)),t.add(C(.02,.7,.9,.01),E.glass,M(L+.71,1.5,P)),r.push({id:"gate-post-n",min:[v-.11,0,b-.11],max:[v+.11,2.3,b+.11]}),r.push({id:"gate-post-s",min:[v-.11,0,_-.11],max:[v+.11,2.3,_+.11]}),r.push({id:"gate-leaf",min:[v-.25,0,R-S/2],max:[v-.15,1.9,R+S/2]}),r.push({id:"guard-hut",min:[L-.8,0,P-.8],max:[L+.8,2.5,P+.8]});let w=Ld,T=I=>Vd(I,!0),H=T(qi.entry),N=T(qi.loop);t.add(Io(H,e,.011),Fe.asphalt),t.add(Io(N,e,.0115),Fe.asphalt);let U=(w.laneIn+w.laneOut)/2;t.add(Io([[w.farX,U],[w.shiftX0+.5,U]],w.width/2,.0105),Fe.asphalt);for(let I of[U-w.width/2-.45,U+w.width/2+.45])t.add(new Ke(w.shiftX0-w.farX,.9).rotateX(-Math.PI/2),Fe.grit,M((w.farX+w.shiftX0)/2,.006,I));for(let I of[U-w.width/2+.25,U+w.width/2-.25])n.add(new Ke(w.shiftX0-w.farX,.1).rotateX(-Math.PI/2),Fe.roadPaint,M((w.farX+w.shiftX0)/2,.02,I));for(let I=w.farX+1;I<w.shiftX0-1;I+=3.2)n.add(new Ke(1.6,.11).rotateX(-Math.PI/2),Fe.roadPaintYellow,M(I+.8,.02,U));t.build(i,!1,!0);let F=n.build(i,!1,!0);for(let I of F)I.renderOrder=-1;return{group:i,footprints:r}}var vr={minX:-19.6,maxX:-14.5,minZ:-9.1,maxZ:-6.9,stairX:-17,stairW:.8,stairRun:1.8},Zr={minX:-9.6,maxX:4.4,minZ:-1.85,maxZ:-.7,deckY:1.95,railH:.95},Yr=(i,e,t,n)=>({id:i,footprint:{min:e,max:t},hosts:n});function Gp(){let i=new we;i.name="structures";let e=new Pe,t=new Pe,n=[];{let a=vr,c=Ue.coag.base,l=(a.minX+a.maxX)/2,u=(a.minZ+a.maxZ)/2,d=a.maxX-a.minX,h=a.maxZ-a.minZ;e.add(C(d,.06,h,.015),E.grating,M(l,c-.03,u));for(let b of[a.minZ,a.maxZ])e.add(C(d,.16,.07,.015),E.steelBlue,M(l,c-.1,b));for(let b of[a.minX,a.maxX])e.add(C(.07,.16,h,.015),E.steelBlue,M(b,c-.1,u));for(let b of[a.minX+.08,l,a.maxX-.08])for(let _ of[a.minZ+.08,a.maxZ-.08])e.add(C(.09,c-.06,.09,.015),E.steelBlue,M(b,(c-.06)/2,_)),e.add(C(.22,.03,.22,.01),E.steelDark,M(b,.015,_));Fn(e,[new x(a.minX+.05,c,a.minZ+.03),new x(a.maxX-.05,c,a.minZ+.03)],1,1.3);let f=a.stairX-a.stairW/2,p=a.stairX+a.stairW/2,y=a.maxZ-.03;Fn(e,[new x(a.minX+.05,c,y),new x(f,c,y)],1,1.3),Fn(e,[new x(p,c,y),new x(a.maxX-.05,c,y)],1,1.3);let g=6,m=c/g,v=a.stairRun/g;for(let b=0;b<g-1;b++){let _=c-m*(b+1),R=a.maxZ+v*(b+.5);e.add(C(a.stairW-.06,.04,v*.92,.01),E.grating,M(a.stairX,_,R))}for(let b of[f,p]){let _=new x(b,c-.05,a.maxZ),R=new x(b,0,a.maxZ+a.stairRun);e.rod(_,R,.035,E.steelBlue,6),Fn(e,[new x(b,c,a.maxZ),new x(b,.05,a.maxZ+a.stairRun)],.95,2.5)}n.push(Yr("platform-deck",[a.minX,0,a.minZ],[a.maxX,c+.02,a.maxZ])),n.push(Yr("platform-rail-n",[a.minX,c,a.minZ-.03],[a.maxX,c+1.02,a.minZ+.06])),n.push(Yr("platform-rail-s",[a.minX,c,a.maxZ-.06],[a.maxX,c+1.02,a.maxZ+.03])),n.push(Yr("platform-stair",[f,0,a.maxZ],[p,c+1,a.maxZ+a.stairRun]))}{let a=Zr,c=a.deckY,l=(a.minX+a.maxX)/2,u=(a.minZ+a.maxZ)/2,d=a.maxX-a.minX,h=a.maxZ-a.minZ;e.add(C(d,.06,h,.015),E.grating,M(l,c-.03,u));for(let f of[a.minZ,a.maxZ])e.add(C(d,.18,.07,.015),E.steelBlue,M(l,c-.11,f));for(let f of[a.minX+.1,-6.2,-2.6,1,a.maxX-.1]){for(let p of[a.minZ+.06,a.maxZ-.06])e.add(C(.1,c-.2,.1,.015),E.steelBlue,M(f,(c-.2)/2,p)),e.add(C(.24,.03,.24,.01),E.steelDark,M(f,.015,p));e.add(C(.07,.1,h,.012),E.steelBlue,M(f,c-.25,u))}Fn(e,[new x(a.minX+.05,c,a.minZ+.03),new x(a.maxX-.05,c,a.minZ+.03),new x(a.maxX-.05,c,a.maxZ-.03)],a.railH,1.4),_i(e,new x(a.minX-.18,0,u),c,new x(-1,0,0),!0),n.push(Yr("catwalk-deck",[a.minX,0,a.minZ],[a.maxX,c+.02,a.maxZ])),n.push(Yr("catwalk-rail",[a.minX,c,a.minZ-.03],[a.maxX,c+a.railH+.03,a.minZ+.08]))}{let[a,c]=fn,l=.9,u=.45,d=.1;e.add(C(l,.06,l,.02),E.concreteDark,M(a,.03,c)),e.add(C(d,u,l,.025),E.concrete,M(a-l/2+d/2,u/2,c)),e.add(C(d,u,l,.025),E.concrete,M(a+l/2-d/2,u/2,c)),e.add(C(l,u,d,.025),E.concrete,M(a,u/2,c-l/2+d/2)),e.add(C(l,u,d,.025),E.concrete,M(a,u/2,c+l/2-d/2)),n.push(Yr("inlet-pit",[a-l/2,0,c-l/2],[a+l/2,u,c+l/2],["p-inlet"]))}let r=(a,c,l,u)=>{let d=Math.abs(l-a),h=Math.abs(u-c);t.add(new Ke(Math.max(d,.07),Math.max(h,.07)).rotateX(-Math.PI/2),E.walkway,M((a+l)/2,.004,(c+u)/2))},s=(a,c,l,u,d=.6)=>{Math.abs(u-c)<1e-6?(r(a,c-d,l,c-d),r(a,c+d,l,c+d)):(r(a-d,c,a-d,u),r(a+d,c,a+d,u))};s(-30,-4.6,5,-4.6),s(5.2,-3.9,5.2,3.9),s(-8.6,4.6,17.5,4.6),s(-13.55,-11.2,-13.55,-5.3,.5);for(let[a,c]of[[-1.9,-6.9],[-1.9,-9.1],[-30,-6.9],[-30,-9.1],[-.5,12.6],[2.5,12.6]])e.add(re(.09,.85,16),E.rail,M(a,.425,c)),e.add(new rt(.09,14,8,0,Math.PI*2,0,Math.PI/2),E.rail,M(a,.85,c)),e.add(re(.093,.08,16),E.rubber,M(a,.62,c));{let l=Ge.minX+.45,u=Ge.maxX-.45,d=Ge.minZ+.45,h=Ge.maxZ-.45,f=[[l,d,u,d,!0],[u,d,u,h,!0],[l,h,u,h,!1],[l,d,l,h,!0]];for(let[p,y,g,m,v]of f){let b=Math.hypot(g-p,m-y),_=Math.round(b/4);for(let R=0;R<=_;R++){let S=p+(g-p)*(R/_),L=y+(m-y)*(R/_);Math.abs(L-fn[1])<1.2&&Math.abs(S-Ge.minX)<1||Math.abs(L-pt.z)<pt.width/2+.6&&Math.abs(S-Ge.minX)<1||Mc(S,L)<pt.width/2+.25||e.add(C(.06,1.4,.06,.012),E.steelDark,M(S,1.4/2,L))}if(v&&Math.abs(p-g)<1e-6&&Math.abs(p-(Ge.minX+.45))<1e-6){let R=pt.z-pt.width/2-.6,S=pt.z+pt.width/2+.6;e.rod(new x(p,1.4-.05,y),new x(p,1.4-.05,R),.018,E.steelDark,5),e.rod(new x(p,1.4-.05,S),new x(g,1.4-.05,m),.018,E.steelDark,5)}else v&&e.rod(new x(p,1.4-.05,y),new x(g,1.4-.05,m),.018,E.steelDark,5)}}e.build(i);let o=t.build(i,!1,!1);for(let a of o)a.renderOrder=-1;return i.userData.footprints=n,{group:i,footprints:n}}function Wp(i=Ue.homog){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Pe;o.add(Ft([[0,0],[e+.16,0],[e+.16,n],[0,n]],.04,56),E.concrete),o.add(Ft(Ei(e,n,t,.07,!0,.08),.05,72),E.sage),on(o,e+.01,.045,r-.01,0,Math.PI*2,E.sageDark);for(let w of[n+.05,n+.95,n+1.8])on(o,e+.012,.028,w,0,Math.PI*2,E.sageDark);yc(o,e,n+.65,-.6);let a=.62;o.add(C(2*e+.3,.07,a,.02),E.grating,M(0,r+.04,0)),o.add(C(2*e+.3,.12,.06,.02),E.steelBlue,M(0,r+.02,a/2)),o.add(C(2*e+.3,.12,.06,.02),E.steelBlue,M(0,r+.02,-a/2));for(let w of[a/2,-a/2])Fn(o,[new x(-e+.1,r+.08,w),new x(e-.1,r+.08,w)],.95,1.1);let c=-2.25;_i(o,new x(Math.sin(c)*(e+.18),0,Math.cos(c)*(e+.18)),r,new x(Math.sin(c),0,Math.cos(c)),!0);let l=Vt(o,new x(-e+.02,2.45,0),new x(-1,0,0),.17),u=Vt(o,new x(e-.02,.75,0),new x(1,0,0),.17),d=.5,h=Math.sqrt(e*e-d*d);o.rod(new x(d,.55,h-.03),new x(d,.55,e+.35),.075,E.steel,14),o.add(new rt(.085,14,10),E.steel,M(d,.55,e+.35)),o.rod(new x(d,.55,e+.35),new x(d,.35,e+.35),.075,E.steel,14),o.add(re(.12,.04,20),E.steel,M(d,.37,e+.35));let f=new x(d,.35,e+.35),p=r-.28,y=r+.08;o.add(C(.62,.08,.56,.02),E.steelDark,M(0,y+.04,0)),o.add(C(.36,.3,.34,.05),E.motor,M(0,y+.23,0)),o.add(re(.2,.06,28),E.steelDark,M(0,y+.1,0)),o.add(re(.13,.42,28),E.motor,M(.38,y+.27,0,0,0,Math.PI/2));for(let w=0;w<6;w++)o.add(re(.142,.016,28),E.motor,M(.24+w*.055,y+.27,0,0,0,Math.PI/2));o.add(re(.135,.07,28,.1),E.steelDark,M(.62,y+.27,0,0,0,-Math.PI/2)),o.add(C(.1,.08,.09,.015),E.motor,M(.36,y+.45,0)),o.add(C(.06,.1,.06,.01),E.steel,M(0,y+.43,0)),o.rod(new x(0,y,0),new x(0,p-.05,0),.04,E.steel,12);let g=new we;g.position.y=y-.12;let m=new oe(re(.085,.09,18),E.steel),v=new oe(C(.04,.092,.04,.008),E.rail);v.position.x=.085;let b=new we;b.position.y=p-.35-g.position.y;for(let w=0;w<3;w++){let T=new oe(C(.5,.025,.14,.01),E.steelDark),H=w/3*Math.PI*2;T.position.set(Math.cos(H)*.3,0,-Math.sin(H)*.3),T.rotation.set(.35,H,0),b.add(T)}g.add(m,v,b),m.castShadow=!0,s.add(g);let _=o.build(s),R=Kt({color:je.leachate,hi:11569749,mode:"swirl",speed:1.6,scale:.55,center:[i.pos[0],i.pos[1]]}),S=new oe(new Mn(e-.07,64),R.material);S.rotation.x=-Math.PI/2,S.position.y=p,S.receiveShadow=!0,s.add(S);let L=Rt(new x(.35,r+.08,a/2-.08)),P=ei([[e+.05,.01],[e+.05,r+.03]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+1.6,0),focus:new x(0,n+t*.5,0),core:new x(0,n+t*.55,0),in:l,out:u,return:f},radius:Math.hypot(e,t/2)+.3,localBox:{min:[-e-.16,0,-e-.16],max:[e+.16,r+1,e+.16]},pickTargets:[..._,S],outline:P,glowRadius:e*1.55,glowY:.015,lamp:L,animate(w,T){R.uniforms.uTime.value=w,R.uniforms.uMotion.value=T.motion,R.uniforms.uGlow.value=.03+.18*T.flow+(T.active?.06:0),g.rotation.y=w*2.2*T.motion}})}function wc(i,e,t,n,r,s=1){let o=s;i.add(C(t,.09*o,.16*o,.02),E.steelBlue,M(0,n+.045*o,0)),i.add(C(.24*o,.16*o,.24*o,.03),E.motor,M(0,n+.17*o,0)),i.add(re(.11*o,.3*o,24),E.motor,M(0,n+.4*o,0)),i.add(re(.115*o,.05*o,24,.09*o),E.steelDark,M(0,n+.575*o,0)),i.add(C(.09*o,.07*o,.07*o,.015),E.steelDark,M(.12*o,n+.45*o,0)),i.rod(new x(0,n,0),new x(0,r,0),.025*o,E.steel,10);let a=new we;a.position.y=n-.06*o;let c=new oe(re(.055*o,.07*o,16),E.steel),l=new oe(C(.03*o,.072*o,.03*o,.006),E.rail);return l.position.x=.055*o,a.add(c,l),c.castShadow=!0,e.add(a),a}function Xp(i=Ue.coag){let e=i.size.w,t=i.size.h,n=i.size.l,r=i.base,s=r+t,o=At(i),a=new Pe,c=.06;a.add(C(e,.08,n,.03),E.offWhite,M(0,r+.04,0)),a.add(C(c,t,n,.025),E.offWhite,M(-e/2+c/2,r+t/2,0)),a.add(C(c,t,n,.025),E.offWhite,M(e/2-c/2,r+t/2,0)),a.add(C(e,t,c,.025),E.offWhite,M(0,r+t/2,-n/2+c/2)),a.add(C(e,t,c,.025),E.offWhite,M(0,r+t/2,n/2-c/2));for(let[R,S,L,P]of[[0,n/2,e+.04,.05],[0,-n/2,e+.04,.05],[e/2,0,.05,n+.04],[-e/2,0,.05,n+.04]])a.add(C(L,.05,P,.02),E.steelBlue,M(R,s-.02,S));a.add(C(e+.12,.06,n+.12,.02),E.steelDark,M(0,r-.01,0));let l=Vt(a,new x(-e/2+.01,1.85,0),new x(-1,0,0),.14),u=Vt(a,new x(e/2-.01,1.85,0),new x(1,0,0),.14),d=.25,h=n/2-.12;a.rod(new x(d,s-.35,h),new x(d,s+.12,h),.022,E.steel,8),a.add(C(.08,.06,.08,.01),E.steelDark,M(d,s+.02,h));let f=new x(d,s+.12,h),p=s-.12,y=wc(a,o,e+.1,s+.02,p-.05,.85),g=a.build(o),m=Kt({color:je.leachate,hi:12622432,mode:"swirl",speed:4.2,scale:2.2,center:[i.pos[0],i.pos[1]]}),v=new oe(new Ke(e-2*c,n-2*c),m.material);v.rotation.x=-Math.PI/2,v.position.y=p,v.receiveShadow=!0,o.add(v);let b=Rt(new x(e/2-.08,s+.05,.18)),_=ln(new x(-e/2-.04,r-.04,-n/2-.04),new x(e/2+.04,s+.02,n/2+.04));return Ct({spec:i,root:o,localAnchors:{label:new x(0,s+1.05,0),focus:new x(0,r+t*.55,0),core:new x(0,r+t*.5,0),in:l,out:u,dose:f},radius:1,localBox:{min:[-e/2-.06,r-.04,-n/2-.06],max:[e/2+.06,s+.55,n/2+.06]},pickTargets:[...g,v],outline:_,glowRadius:1.15,glowY:r+.01,lamp:b,animate(R,S){m.uniforms.uTime.value=R,m.uniforms.uMotion.value=S.motion,m.uniforms.uGlow.value=.03+.2*S.flow+(S.active?.06:0),y.rotation.y=R*9*S.motion}})}function qp(i=Ue.floc){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Pe,a=.05;o.add(C(2*e+.14,.06,2*e+.14,.02),E.steelDark,M(0,n-.01,0)),o.add(Ft(Ei(e,n,t,a,!0,.06),.04,56),E.offWhite),on(o,e+.005,.03,r-.005,0,Math.PI*2,E.steelBlue),on(o,e+.008,.02,n+.5,0,Math.PI*2,E.steelBlue);let c=Vt(o,new x(-e+.01,1.85,0),new x(-1,0,0),.16),l=Vt(o,new x(e-.01,1.75,0),new x(1,0,0),.16),u=.2,d=.38;o.rod(new x(u,r-.35,d),new x(u,r+.12,d),.022,E.steel,8),o.add(C(.08,.06,.08,.01),E.steelDark,M(u,r+.02,d));let h=new x(u,r+.12,d),f=r-.12,p=wc(o,s,2*e+.12,r+.02,f-.05,.85),y=o.build(s),g=Kt({color:je.leachate,hi:12096610,mode:"swirl",speed:1.1,scale:2.4,center:[i.pos[0],i.pos[1]]}),m=new oe(new Mn(e-a,48),g.material);m.rotation.x=-Math.PI/2,m.position.y=f,m.receiveShadow=!0;let v=44,b=new _t(new vt(1,1,.3,7),E.flocSpeck,v);b.frustumCulled=!1,s.add(m,b);let _=Rt(new x(e-.1,r+.07,0)),R=ei([[e+.05,n-.04],[e+.05,r+.02]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+1.05,0),focus:new x(0,n+t*.55,0),core:new x(0,n+t*.5,0),in:c,out:l,dose:h},radius:1,localBox:{min:[-e-.07,n-.04,-e-.07],max:[e+.07,r+.55,e+.07]},pickTargets:[...y,m],outline:R,glowRadius:1.1,glowY:n+.01,lamp:_,animate(S,L){let P=L.motion;g.uniforms.uTime.value=S,g.uniforms.uMotion.value=P,g.uniforms.uGlow.value=.03+.2*L.flow+(L.active?.06:0),p.rotation.y=S*2.4*P;let w=Math.min(1,P*2);for(let T=0;T<v;T++){let H=gr(de(T,1)+S*.045),N=(.08+.82*H)*(e-a-.05),U=de(T,2)*Math.PI*2+S*.6*P/(.3+H),F=w*(.006+.022*H*(.6+.4*de(T,3)))*(H>.92?(1-H)/.08:1);Xi(b,T,Math.sin(U)*N,f+.004,Math.cos(U)*N,[Math.max(F,1e-4),.02,Math.max(F,1e-4)])}b.instanceMatrix.needsUpdate=!0}})}var _E={yApex:.85,yc:1.7,rApex:.09,wall:.05};function Yp(i,e){let t=i.size.d/2,n=i.base+i.size.h,{yApex:r,yc:s,rApex:o,wall:a}=_E,c=Q=>Q>=s?t:o+(t-o)*(Q-r)/(s-r),l=At(i),u=new Pe,d=Ns(fi),h=t*.78,f=[];for(let Q=0;Q<4;Q++){let se=Math.PI/4+Q*Math.PI/2,le=new x(Math.sin(se)*h,0,Math.cos(se)*h);f.push(le);let Ce=r+(h-o)/(t-o)*(s-r)+.04;u.add(C(.1,Ce,.1,.015),E.steelBlue,M(le.x,Ce/2,le.z)),u.add(C(.22,.03,.22,.01),E.steelDark,M(le.x,.015,le.z))}for(let Q=0;Q<4;Q++)u.rod(f[Q].clone().setY(.35),f[(Q+1)%4].clone().setY(.35),.025,E.steelBlue,6);on(u,t+.012,.035,s,0,Math.PI*2,E.steelBlue);let p={phi:d,halfWidth:.38,y0:r+.3,y1:n-.38,r:t,yApex:r,rApex:o,yc:s},y=Hs(je.warmGray,p);u.add(Ft([[o,r],[t,s],[t,n],[t-a,n],[t-a,s+.02],[o-.03,r+.06]],.05,64),y),on(u,t+.005,.04,n,0,Math.PI*2,E.warmGray);let g=Fs(u,l,p,[[c(p.y0),p.y0],[t,s],[t,p.y1]]);u.add(Ft([[t-a,n-.14],[t-.2,n-.14],[t-.2,n-.03]],.01,48),E.steelDark),u.add(re(.28,.85,32,.28,!0),E.steel,M(0,n-.33,0)),u.add(C(2*t+.1,.09,.16,.02),E.steelBlue,M(0,n+.05,0));let m=Vt(u,new x(-t+.02,e.inY,0),new x(-1,0,0),.18),v=Vt(u,new x(t-.02,3.05,0),new x(1,0,0),.18);u.rod(new x(0,r+.03,0),new x(0,r-.14,0),.07,E.steel,14),u.add(re(.115,.04,20),E.steel,M(0,r-.15,0));let b=null;e.purge?(u.add(C(.2,.16,.18,.03),E.steelDark,M(0,r-.27,0)),u.rod(new x(0,r-.27,.09),new x(0,r-.27,.3),.022,E.steel,8),u.add(new bn(.1,.016,8,24),E.rail,M(0,r-.27,.3)),u.rod(new x(0,r-.35,0),new x(0,e.purgeY,0),.08,E.steel,14),u.add(new rt(.085,14,10),E.steel,M(0,e.purgeY,0)),b=new x(0,e.purgeY,-.02)):u.add(re(.115,.03,20),E.steelDark,M(0,r-.185,0));let _=u.build(l),R=n-.12,S=Q=>c(Q)-a-.012,L=Kt({color:e.liquid,opacity:.4,mode:"still"}),P=new Gi([new me(0,r+.08),new me(Math.max(.02,S(r+.08)),r+.08),new me(S(s),s+.005),new me(S(R),R),new me(0,R)],48),w=new oe(P,L.material);w.renderOrder=1;let T=Kt({color:e.liquid,hi:14141858,mode:"ripple",speed:.35,scale:.8,center:[i.pos[0],i.pos[1]],opacity:.85}),H=new oe(new Mn(S(R),48),T.material);H.rotation.x=-Math.PI/2,H.position.y=R,H.renderOrder=1;let N=.6,U=new oe(new Gi([new me(0,0),new me(S(r+N)*.98,N),new me(0,N)],40),E.sludgeCake);U.position.y=r+.06;let F=40,I=new _t(new wn(.03,0),new tt({color:e.particle,roughness:.85}),F);I.frustumCulled=!1,l.add(w,H,U,I);let B=Rt(new x(.55,n+.1,0)),X=ei([[o+.04,r],[t+.05,s],[t+.05,n+.02]],4),V={label:new x(0,n+.95,0),focus:new x(0,(r+n)/2,0),core:new x(0,(s+n)/2,0),in:m,out:v};return b&&(V.sludge=b),Ct({spec:i,root:l,localAnchors:V,radius:Math.hypot(t,i.size.h/2)+.2,localBox:{min:[-t-.05,0,-t-.05],max:[t+.05,n+.12,t+.05]},pickTargets:[..._,g],outline:X,glowRadius:t*1.8,glowY:.015,lamp:B,animate(Q,se){let le=se.motion;L.uniforms.uGlow.value=.04+.2*se.flow+(se.active?.08:0),T.uniforms.uTime.value=Q,T.uniforms.uMotion.value=.3+.7*se.flow,T.uniforms.uGlow.value=.03+.15*se.flow;let Ce=.1+e.sludgeMax*(.25+.75*le)+.02*Math.sin(Q*.3+e.seed)*le;U.scale.setScalar(Ce/N);let Qe=r+.06+Ce,K=Math.min(1,le*1.8);for(let ne=0;ne<F;ne++){let ie=ne+e.seed*50,ae=gr(de(ie,1)+Q*(.05+.04*de(ie,2))),Me=R-.08-ae*(R-.08-Qe),Be=d+(de(ie,3)-.5)*2*p.halfWidth*.95,We=Math.min((.25+.7*de(ie,4))*(t-.12),S(Me)-.06),Ze=K*(.6+.8*de(ie,5))*(ae<.06?ae/.06:1);Xi(I,ne,Math.sin(Be)*We,Me,Math.cos(Be)*We,Math.max(Ze,1e-4),Q*.7+ie,ie,0)}I.instanceMatrix.needsUpdate=!0}})}function Zp(i=Ue.clar1){return Yp(i,{purge:!0,liquid:je.clarified,particle:4861976,sludgeMax:.42,seed:1,inY:1.75,purgeY:.38})}function $p(i=Ue.clar2){return Yp(i,{purge:!0,liquid:6187594,particle:5920048,sludgeMax:.22,seed:2,inY:2.85,purgeY:.45})}function Kp(i=Ue.inter){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Pe,a=Ns(fi),c=.05;o.add(Ft([[0,0],[e+.12,0],[e+.12,n],[0,n]],.04,40),E.concrete);let l={phi:a,halfWidth:.42,y0:n+.14,y1:r-.16,r:e};o.add(Ft(Ei(e,n,t,c,!1),.05,56),Hs(je.offWhite,l)),on(o,e+.008,.03,r-.01,0,Math.PI*2,E.steelBlue),on(o,e+.008,.025,n+.03,0,Math.PI*2,E.steelBlue);let u=Fs(o,s,l,[[e,l.y0],[e,l.y1]]),d=a-l.halfWidth-.1;for(let _=0;_<=4;_++){let R=l.y0+_/4*(l.y1-l.y0),S=new x(Math.sin(d),0,Math.cos(d));o.rod(S.clone().multiplyScalar(e).setY(R),S.clone().multiplyScalar(e+.035).setY(R),.012,E.steelDark,5)}o.add(re(.16,.06,24),E.steel,(()=>{let _=new be;return _.makeTranslation(.25,r+.03,-.2),_})());let h=Vt(o,new x(-.3,r-.02,0),new x(0,1,0),.1),f=Vt(o,new x(e-.02,.5,0),new x(1,0,0),.17),p=o.build(s),y=e-c-.012,g=Kt({color:je.clarified,opacity:.5,mode:"still"}),m=new oe(re(y,1,40),g.material);m.renderOrder=1,s.add(m);let v=Rt(new x(Math.sin(a)*.45,r,Math.cos(a)*.45)),b=ei([[e+.05,.01],[e+.05,r+.02]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+.95,0),focus:new x(0,n+t*.5,0),core:new x(0,n+t*.45,0),in:h,out:f},radius:1,localBox:{min:[-e-.12,0,-e-.12],max:[e+.12,r+.12,e+.12]},pickTargets:[...p,u],outline:b,glowRadius:e*1.8,glowY:.015,lamp:v,animate(_,R){g.uniforms.uGlow.value=.04+.2*R.flow+(R.active?.08:0);let S=n+.07,L=S+(t-.3)*(.3+.55*R.flow)+.025*Math.sin(_*.9)*R.motion;m.scale.y=Math.max(.01,L-S),m.position.y=(L+S)/2}})}function Gd(i=Ue.pump,e={}){let t=At(i),n=new Pe,r=i.base,s=.5,o=(p,y,g)=>M(p,y,g,0,0,Math.PI/2);n.add(C(1.2,r,.72,.04),E.concrete,M(0,r/2,0)),n.add(C(1.02,.07,.5,.02),E.steelDark,M(0,r+.035,0)),n.add(re(.15,.4,28),E.motor,o(.2,s,0));for(let p=0;p<7;p++)n.add(re(.162,.018,28),E.motor,o(.04+p*.05,s,0));n.add(re(.155,.09,28,.12),E.steelDark,M(.445,s,0,0,0,-Math.PI/2)),n.add(C(.12,.08,.1,.015),E.motor,M(.18,s+.19,0)),n.add(C(.36,.2,.06,.015),E.steelDark,M(.2,r+.12,.1)),n.add(C(.36,.2,.06,.015),E.steelDark,M(.2,r+.12,-.1)),n.add(re(.075,.16,20),E.steelBlue,o(-.17,s,0)),n.add(C(.14,s-r-.06,.16,.02),E.steelBlue,M(-.17,(s+r)/2,0));let a=new vt(.12,.12,.2,20,1,!0,-Math.PI/2,Math.PI);if(n.add(a,E.rail,M(-0,s,0,Math.PI/2,0,Math.PI/2)),n.add(re(.18,.13,32),E.steelBlue,o(-.32,s,0)),n.add(re(.12,.06,28),E.steelBlue,o(-.405,s,0)),n.rod(new x(-.43,s,0),new x(-.52,s,0),.075,E.steel,16),n.rod(new x(-.53,s,0),new x(-.485,s,0),.13,E.steel,20),n.rod(new x(-.32,s+.12,0),new x(-.32,.95,0),.07,E.steelBlue,16),n.rod(new x(-.32,.905,0),new x(-.32,.95,0),.125,E.steel,20),n.add(C(.1,s-r-.12,.2,.02),E.steelBlue,M(-.32,(s-.12+r)/2+.03,0)),n.add(C(.06,1.05,.06,.012),E.steelDark,M(.38,.525,.48)),n.add(C(.22,.26,.12,.025),E.offWhite,M(.38,1,.48)),n.add(C(.04,.04,.02,.008),E.rubber,M(.33,.97,.545)),n.add(C(.04,.04,.02,.008),E.rubber,M(.43,.97,.545)),e.cabinet){n.add(C(.8,.12,.5,.02),E.concrete,M(1.35,.06,-.6)),n.add(C(.7,1.55,.4,.03),E.offWhite,M(1.35,.12+.775,-.6)),n.add(C(.74,.06,.46,.02),E.steelDark,M(1.35,1.7,-.6)),n.add(C(.01,1.3,.01,.003),E.steelDark,M(1.35,.9,-.6+.205));for(let g of[1.35-.2,1.35-.1,1.35+.15])n.add(re(.022,.02,10),g>1.35?E.rail:E.rubber,M(g,1.35,-.6+.21,Math.PI/2,0,0));n.add(C(.04,.12,.03,.006),E.steel,M(1.35+.28,.95,-.6+.215))}let c=n.build(t),l=new we;l.position.set(-0,s,0);let u=new oe(re(.025,.24,12),E.steel);u.rotation.z=Math.PI/2;let d=new oe(re(.065,.1,18),E.steelDark);d.rotation.z=Math.PI/2,l.add(u,d);for(let p=0;p<4;p++){let y=new oe(C(.11,.022,.022,.006),p===0?E.rail:E.steel),g=p/4*Math.PI*2;y.position.set(0,Math.cos(g)*.048,Math.sin(g)*.048),l.add(y)}l.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),t.add(l);let h=Rt(new x(.38,1.13,.48)),f=ln(new x(-.62,0,-.38),new x(.62,1,.38));return Ct({spec:i,root:t,localAnchors:{label:new x(0,1.75,0),focus:new x(0,.5,0),core:new x(-.32,s,0),in:new x(-.53,s,0),out:new x(-.32,.95,0),header:new x(-.32,2.3,0)},radius:.9,localBox:e.cabinet?{min:[-.6,0,-.86],max:[1.76,1.75,.56]}:{min:[-.6,0,-.36],max:[.6,.98,.56]},pickTargets:c,outline:f,glowRadius:1,glowY:.015,lamp:h,animate(p,y){l.rotation.x=p*14*y.motion}})}var Os=.06;function Jp(i,e=Ue[i]){let t=e.size.d/2,n=e.size.h,r=e.base,s=r+n,o=At(e),a=new Pe,c=Ns(fi),l=Ue[i]?["uasb1","uasb2","uasb3","uasb4"].indexOf(i)+1:1;a.add(Ft([[0,0],[t+.14,0],[t+.14,r],[0,r]],.04,48),E.concrete);let u={phi:c,halfWidth:.36,y0:r+.3,y1:s-.5,r:t},d=Hs(je.sage,u);a.add(Ft(Ei(t,r,n,Os,!1),.05,64),d),on(a,t+.012,.03,r+.04,0,Math.PI*2,E.sageDark),on(a,t+.012,.035,s-.02,0,Math.PI*2,E.sageDark);for(let K of[r+1.15,r+2.1])on(a,t+.01,.024,K,c+u.halfWidth+.06,Math.PI*2-2*(u.halfWidth+.06),E.sageDark);let h=Fs(a,o,u,[[t,u.y0],[t,u.y1]]);a.add(re(.62,.5,24,.12,!0),E.steelDark,M(0,s-.75,0)),a.add(re(t-Os-.02,.28,32,t-.3,!0),E.steelDark,M(0,s-1.15,0)),a.rod(new x(0,s,-.65),new x(0,r+.25,-.65),.045,E.steel,10);let f=r+.2,p=t-Os-.12;a.rod(new x(0,r+.25,-.65),new x(0,f,0),.04,E.steel,8);for(let K of[c,c+Math.PI/2]){let ne=new x(Math.sin(K),0,Math.cos(K));a.rod(ne.clone().multiplyScalar(-p).setY(f),ne.clone().multiplyScalar(p).setY(f),.035,E.steel,8);for(let ie of[-.75,-.4,.4,.75])a.add(re(.03,.08,8),E.steelDark,M(ne.x*p*ie,f-.05,ne.z*p*ie))}for(let K=0;K<2;K++){let ne=s-1.3+K*.32;a.add(re(t-Os-.02,.22,32,t-.42,!0),E.steel,M(0,ne,0))}for(let K=0;K<28;K++){let ne=K/28*Math.PI*2;a.add(C(.05,.06,.012,.003),E.steelDark,M(Math.sin(ne)*(t-.2),3.1,Math.cos(ne)*(t-.2),0,ne,0))}let y=c-u.halfWidth-.2,g=new x(Math.sin(y),0,Math.cos(y)),m=g.clone().multiplyScalar(t+.09);a.rod(m.clone().setY(r+.4),m.clone().setY(s-.2),.028,E.offWhite,10);for(let K of[r+.4,s-.2])a.rod(g.clone().multiplyScalar(t).setY(K),m.clone().setY(K),.018,E.steel,6);a.add(C(.05,.42,.05,.01),E.rail,M(m.x,s-.75,m.z)),a.add(Ft([[0,s],[.5,s],[.5,s+.1],[.3,s+.3],[0,s+.33]],.05,40),E.warmGray);let v=Vt(a,new x(0,s+.3,0),new x(0,1,0),.15,.07);a.add(re(.075,.035,16),E.steel,M(0,s+.3,0)),a.rod(new x(.3,s+.18,.12),new x(.3,s+.48,.12),.035,E.steel,10),a.add(re(.07,.12,16),E.steelDark,M(.3,s+.5,.12)),a.add(Ft([[0,0],[.1,0],[.1,.02],[.03,.07],[0,.08]],.012,16),E.steelDark,M(.3,s+.56,.12));let b=-.45,_=new x(Math.sin(b),0,Math.cos(b)),R=Vt(a,_.clone().multiplyScalar(t-.02).setY(.45),_,.37,.07),S=_.clone().multiplyScalar(t+.17).setY(.45);a.add(new rt(.1,14,10),E.steelDark,M(S.x,S.y,S.z)),a.rod(S.clone().setY(.52),S.clone().setY(.78),.02,E.steel,6),a.add(new bn(.085,.014,6,18),E.rail,M(S.x,.79,S.z,Math.PI/2,0,0));let L=Vt(a,new x(0,s-.02,-.65),new x(0,1,0),.12),P=-.3,w=Vt(a,new x(P,2.85,Math.sqrt(t*t-P*P)-.02),new x(0,0,1),.2);a.add(Ft([[t-Os,2.97],[t-.2,2.97],[t-.2,3.07]],.01,48),E.steelDark),yc(a,t,r+.75,-.95);for(let K of[r+.7,r+1.4,r+2.1]){let ne=c+u.halfWidth+.14,ie=new x(Math.sin(ne),0,Math.cos(ne)),ae=ie.clone().multiplyScalar(t).setY(K);a.rod(ae,ae.clone().addScaledVector(ie,.12),.018,E.steel,8),a.rod(ae.clone().addScaledVector(ie,.12),ae.clone().addScaledVector(ie,.12).setY(K-.06),.012,E.steel,6)}let T=a.build(o),H=t-Os-.012,N=s-.42,U=Kt({color:je.anaerobic,hi:10128725,opacity:.34,mode:"still"}),F=new oe(re(H,N-(r+.06),40),U.material);F.position.y=(N+r+.06)/2,F.renderOrder=1;let I=r+1.05,B=new tt({color:4074265,roughness:.85,emissive:8015650,emissiveIntensity:.12}),X=new oe(re(H-.01,I-(r+.06),40),B);X.position.y=(I+r+.06)/2;let V=new tt({color:6965798,roughness:.7,emissive:10512428,emissiveIntensity:.2,transparent:!0,opacity:.45,depthWrite:!1}),Q=new oe(re(H-.012,.32,40,H-.012,!0),V);Q.position.y=I+.16,Q.renderOrder=1;let se=34,le=new _t(new wn(.026,1),E.bubble,se);le.frustumCulled=!1,le.renderOrder=0,o.add(F,X,Q,le);let Ce=Rt(new x(Math.sin(c)*.72,s,Math.cos(c)*.72)),Qe=ei([[t+.05,.01],[t+.05,s+.01],[.52,s+.12]],4);return Ct({spec:e,root:o,localAnchors:{label:new x(0,s+1.75,0),focus:new x(0,r+n*.5,0),core:new x(0,r+1.6,0),in:L,out:w,gas:v,sludge:R,tGls:new x(Math.sin(c)*t,s-1,Math.cos(c)*t),tBlanket:new x(Math.sin(c)*t,r+1.2,Math.cos(c)*t),tBed:new x(Math.sin(c)*t,r+.45,Math.cos(c)*t),tGas:new x(0,s+.42,0)},radius:Math.hypot(t,n/2)+.2,localBox:{min:[-t-.14,0,-t-.14],max:[t+.14,s+.6,t+.14]},pickTargets:[...T,h],outline:Qe,glowRadius:t*1.7,glowY:.015,lamp:Ce,animate(K,ne){let ie=ne.motion;U.uniforms.uGlow.value=.03+.14*ne.flow+(ne.active?.05:0);let ae=.6+.4*Math.sin(K*1.15+l*1.7);B.emissiveIntensity=.06+(.2*ie+.06*ne.flow)*ae,V.emissiveIntensity=.08+.32*ie*ae,V.opacity=.25+.3*Math.max(ie,ne.flow);let Me=Math.min(1,ie*1.6),Be=N-I-.1;for(let We=0;We<se;We++){let Ze=We+l*100,et=c+(de(Ze,1)-.5)*2*(u.halfWidth*.95),Mt=(.3+.62*Math.sqrt(de(Ze,2)))*(H-.06),G=.28+.22*de(Ze,3),zt=gr(de(Ze,4)+K*G/Be),it=.025*Math.sin(K*3.1+Ze),at=Me*(.55+.6*de(Ze,5))*(.7+.5*zt)*(zt>.96?(1-zt)/.04:1);Xi(le,We,Math.sin(et)*Mt+it,I+.06+zt*Be,Math.cos(et)*Mt,Math.max(at,1e-4))}le.instanceMatrix.needsUpdate=!0}})}function jp(i=Ue.mbbr){let e=i.size.w,t=i.size.h,n=i.size.l,r=i.base,s=r+t,o=At(i),a=new Pe,c=.18;a.add(C(e+.3,r,n+.3,.04),E.concreteDark,M(0,r/2,0)),a.add(C(e,.15,n,.03),E.concrete,M(0,r+.075,0)),a.add(C(c,t,n,.04),E.concrete,M(-e/2+c/2,r+t/2,0)),a.add(C(c,t,n,.04),E.concrete,M(e/2-c/2,r+t/2,0)),a.add(C(e,t,c,.04),E.concrete,M(0,r+t/2,-n/2+c/2)),a.add(C(e,t,c,.04),E.concrete,M(0,r+t/2,n/2-c/2));let l=-n/2+c/2;a.rod(new x(-e/2+.2,s+.12,l),new x(e/2-.2,s+.12,l),.05,E.steel,12);for(let ie=0;ie<4;ie++){let ae=-e/2+.6+ie*((e-1.2)/3);a.rod(new x(ae,s+.12,l),new x(ae,s+.12,l+.25),.035,E.steel,10),a.rod(new x(ae,s+.12,l+.25),new x(ae,r+.4,l+.25),.035,E.steel,10),a.add(C(.1,.08,.06,.01),E.steelDark,M(ae,s+.12,l))}a.add(C(.45,.4,.06,.01),E.grating,M(1,2.05,n/2-c-.05)),_i(a,new x(e/2+.2,0,-.5),s,new x(1,0,0),!1),Fn(a,[new x(e/2-c/2,s,-1),new x(e/2-c/2,s,0)],.9,1);let u=e/2+1.25,d=-.85,h=.12,f=h+.34,p=(ie,ae,Me)=>M(ie,ae,Me,0,0,Math.PI/2);a.add(C(1.25,h,.85,.03),E.concrete,M(u,h/2,d)),a.add(C(1.1,.06,.7,.02),E.steelDark,M(u,h+.03,d));let y=u-.25;a.add(C(.42,.4,.4,.06),E.steelBlue,M(y,f,d)),a.add(C(.46,.06,.44,.02),E.steelDark,M(y,f-.2,d)),a.add(re(.13,.05,24),E.steelDark,p(y+.235,f,d));let g=u+.3;a.add(re(.14,.38,28),E.motor,p(g,f,d));for(let ie=0;ie<6;ie++)a.add(re(.152,.016,28),E.motor,p(g-.15+ie*.06,f,d));a.add(re(.145,.08,28,.11),E.steelDark,M(g+.23,f,d,0,0,-Math.PI/2)),a.add(C(.11,.08,.1,.015),E.motor,M(g,f+.18,d)),a.add(C(.1,f-h-.12,.16,.02),E.steelDark,M(u+.06,(f+h)/2-.03,d)),a.rod(new x(y+.08,f+.2,d),new x(y+.08,f+.34,d),.05,E.steel,12),a.add(re(.12,.2,24),E.offWhite,M(y+.08,f+.44,d)),a.add(re(.13,.03,24,.09),E.steelDark,M(y+.08,f+.555,d));let m=y-.36;a.rod(new x(y-.21,f,d),new x(m,f,d),.05,E.steel,12),a.add(re(.11,.5,24),E.steel,M(m,f+.2,d)),a.add(re(.115,.03,24),E.steelDark,M(m,f-.05,d)),a.add(re(.115,.03,24),E.steelDark,M(m,f+.45,d));let v=s+.12,b=-n/2+c/2,_=new x(m,f+.45,d),R=new x(m,v,d),S=new x(m,v,b),L=new x(e/2-.2,v,b);a.rod(_,R,.05,E.steel,12),a.rod(R,S,.05,E.steel,12),a.rod(S,L,.05,E.steel,12),a.add(C(.13,.13,.13,.02),E.steelDark,M(m,v,d)),a.add(C(.13,.13,.13,.02),E.steelDark,M(m,v,b)),a.add(C(.12,.16,.12,.02),E.steelBlue,M(m,f+.75,d)),a.rod(new x(m,f+.95,d),new x(m+.12,f+.95,d),.012,E.steel,6),a.add(re(.045,.02,16),E.offWhite,M(m+.13,f+.95,d,Math.PI/2,0,0)),a.rod(new x(m,v,(d+b)/2),new x(m,0,(d+b)/2),.025,E.steelDark,6);let P=-e/2+c+.55,w=n/2-c/2;a.add(C(.16,.2,.1,.02),E.offWhite,M(P,s+.25,w+.02)),a.add(C(.12,.05,.02,.005),E.steelBlue,M(P,s+.28,w+.075)),a.rod(new x(P,s+.15,w),new x(P,s+.05,w),.02,E.steel,6),a.rod(new x(P,s+.05,w),new x(P,s+.05,w-.3),.02,E.steel,6),a.rod(new x(P,s+.05,w-.3),new x(P,r+1,w-.3),.022,E.steelDark,8);for(let ie=0;ie<4;ie++){let ae=-e/2+.6+ie*((e-1.2)/3);a.rod(new x(ae,r+.4,l+.25),new x(ae,r+.4,n/2-c-.2),.03,E.steelDark,8)}let T=new x(-e/2+c+.17,s-.05,0);a.rod(T.clone().setY(s-.05),T.clone().setY(s-.35),.085,E.steel,14);let H=Vt(a,new x(1,2,n/2-.02),new x(0,0,1),.17),N=a.build(o),U=s-.22,F=Kt({color:5204558,hi:13623500,mode:"aeration",speed:1,scale:1,opacity:.82}),I=new oe(new Ke(e-2*c,n-2*c),F.material);I.rotation.x=-Math.PI/2,I.position.y=U,I.renderOrder=1;let B=150,X=new _t(new vt(.055,.055,.045,10,1,!0),new tt({color:je.carrier,roughness:.6,side:en}),B);X.castShadow=!1,X.frustumCulled=!1;let V=60,Q=new _t(new wn(.03,1),E.bubble,V);Q.frustumCulled=!1,o.add(I,X,Q);let se=new we;se.position.set(u+.06,f,d);let le=new oe(re(.06,.09,18),E.steelDark);le.rotation.z=Math.PI/2,se.add(le);for(let ie=0;ie<4;ie++){let ae=new oe(C(.1,.02,.02,.005),ie===0?E.rail:E.steel),Me=ie/4*Math.PI*2;ae.position.set(0,Math.cos(Me)*.045,Math.sin(Me)*.045),se.add(ae)}o.add(se);let Ce=Rt(new x(e/2-c/2,s,.6)),Qe=ln(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,s+.03,n/2+.04)),K=(e-2*c-.2)/2,ne=(n-2*c-.2)/2;return Ct({spec:i,root:o,localAnchors:{label:new x(0,s+1.1,0),focus:new x(0,r+t*.5,0),core:new x(0,r+t*.55,0),in:T,out:H,tMedia:new x(-.3,U,.2),tAir:new x(-e/2+.6,s+.12,l),tBlower:new x(u-.25,f+.4,d),tScreen:new x(1,2.15,n/2-c),tDo:new x(P,s+.35,w)},radius:2.6,localBox:{min:[-e/2-.15,0,-n/2-.15],max:[u+.65,s+.2,n/2+.15]},pickTargets:[...N,I],outline:Qe,glowRadius:3.1,glowY:.015,lamp:Ce,animate(ie,ae){let Me=ae.motion;se.rotation.x=ie*12*Me,F.uniforms.uTime.value=ie,F.uniforms.uMotion.value=Me,F.uniforms.uGlow.value=.03+.18*ae.flow+(ae.active?.06:0);let Be=.08+.3*Me;for(let Ze=0;Ze<B;Ze++){let et=(de(Ze,1)*2-1)*K,Mt=(de(Ze,2)*2-1)*ne,G=de(Ze,3)*6.283,zt=et+Be*Math.sin(ie*.55+G),it=Mt+Be*.7*Math.cos(ie*.43+G*1.3),at=U-.06+.07*Math.sin(ie*1.3*(.4+Me)+G*2.1);Xi(X,Ze,Math.max(-K,Math.min(K,zt)),at,Math.max(-ne,Math.min(ne,it)),1,G+ie*1.6*Me,G*.7+ie*1.1*Me,G*1.9)}X.instanceMatrix.needsUpdate=!0;let We=Math.min(1,Me*1.6);for(let Ze=0;Ze<V;Ze++){let et=Ze+300,Mt=gr(de(et,1)+ie*(.9+.6*de(et,2))),G=(de(et,3)*2-1)*K,zt=(de(et,4)*2-1)*ne,it=We*(.5+.7*de(et,5))*(Mt>.85?(1-Mt)/.15:1);Xi(Q,Ze,G,U-.18+Mt*.2,zt,Math.max(it,1e-4))}Q.instanceMatrix.needsUpdate=!0}})}function Qp(i=Ue.filtro){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Pe,o=.2,a=t-.18;s.add(C(o,t,n,.05),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.05),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(e,t,o,.05),E.concrete,M(0,t/2,-n/2+o/2)),s.add(C(e,t,o,.05),E.concrete,M(0,t/2,n/2-o/2)),s.add(C(e-2*o+.02,a,n-2*o+.02,.02),E.soil,M(0,a/2,0)),s.add(C(e-2*o-.2,.03,.7,.01),E.gravel,M(0,a+.01,0)),s.add(C(.6,.03,n-2*o-.1,.01),E.gravel,M(-e/2+o+.32,a+.01,0));let c=a+.12,l=e/2+.25;s.rod(new x(l,1.1,0),new x(e/2-o-.15,1.1,0),.085,E.steelDark,14),s.rod(new x(e/2-o-.15,1.1,0),new x(e/2-o-.15,c,0),.085,E.steelDark,14),s.add(new rt(.085,12,8),E.steelDark,M(e/2-o-.15,1.1,0)),s.rod(new x(e/2-o-.15,c,0),new x(-e/2+o+.8,c,0),.07,E.steelDark,12);for(let H=e/2-o-.8;H>-e/2+o+.9;H-=1.15)s.rod(new x(H,c,-1.6),new x(H,c,1.6),.035,E.steelDark,8);s.rod(new x(l-.05,1.1,0),new x(l,1.1,0),.14,E.steel,18),s.add(C(.5,.35,.7,.03),E.concreteDark,M(-e/2+o+.3,a+.06,0)),s.rod(new x(-e/2+.02,.4,0),new x(-e/2-.2,.4,0),.085,E.steel,14),s.rod(new x(-e/2-.245,.4,0),new x(-e/2-.2,.4,0),.14,E.steel,18);let u=s.build(r),d=Kt({color:je.treated,hi:12575708,mode:"sheen",opacity:.62,speed:1,scale:1,center:[i.pos[0]+e/2-o,i.pos[1]],dir:[-1,0],span:e-2*o}),h=new oe(new Ke(e-2*o,n-2*o),d.material);h.rotation.x=-Math.PI/2,h.position.y=a+.035,h.renderOrder=1,r.add(h);let f=[];for(let H=0;f.length<46&&H<400;H++){let N=(de(H,11)-.5)*(e-2*o-.6),U=(de(H,12)-.5)*(n-2*o-.5);Math.abs(U)<.5||N<-e/2+o+.75||f.some(([F,I])=>Math.hypot(F-N,I-U)<.62)||f.push([N,U])}let p=9,y=new _t(new Wi(.028,1,5,1).translate(0,.5,0),E.plant,f.length*p),g=new _t(new fr(.025,.1,3,6),E.plant,f.length*3),m=new be,v=new yt,b=new Qt,_=new x,R=new x,S=new Ie,L=0,P=0;f.forEach(([H,N],U)=>{for(let F=0;F<p;F++){let I=U*31+F,B=de(I,1)*Math.PI*2,X=.05+.16*de(I,2),V=.55+.6*de(I,3);if(_.set(H+Math.sin(B)*X,a,N+Math.cos(B)*X),b.set(Math.cos(B)*.22*de(I,4),0,-Math.sin(B)*.22*de(I,4)),v.setFromEuler(b),R.set(1,V,1),y.setMatrixAt(L,m.compose(_,v,R)),S.setHex(je.reed).offsetHSL(.02*(de(I,5)-.5),-.05*de(I,6),.08*(de(I,7)-.5)),y.setColorAt(L,S),L++,F<3){let Q=new x(0,V,0).applyQuaternion(v).add(_);g.setMatrixAt(P,m.compose(Q,v,R.set(1,1,1))),g.setColorAt(P,S.setHex(8219208)),P++}}}),y.castShadow=!0,y.receiveShadow=!0,r.add(y,g);let w=Rt(new x(e/2-o/2,t,n/2-.4)),T=ln(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,t+.03,n/2+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,t+1.7,0),focus:new x(0,t*.6,0),core:new x(0,a+.1,0),in:new x(l,1.1,0),out:new x(-e/2-.245,.4,0)},radius:Math.hypot(e,n)/2,localBox:{min:[-e/2,0,-n/2],max:[e/2,t+1.2,n/2]},pickTargets:[...u,h],outline:T,glowRadius:e*.62,glowY:.015,lamp:w,animate(H,N){d.uniforms.uTime.value=H,d.uniforms.uMotion.value=N.motion,d.uniforms.uSpread.value=.04+1*N.flow,d.uniforms.uGlow.value=.03+.12*N.flow+(N.active?.05:0)}})}var wi=3.9;function e0(i=Ue.discharge){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Pe,o=.15;s.add(C(e,.12,n,.03),E.concrete,M(0,.06,0)),s.add(C(o,t,n,.04),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.04),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(e,t,o,.04),E.concrete,M(0,t/2,-n/2+o/2)),s.add(C((e-.6)/2,t,o,.04),E.concrete,M(-(e+.6)/4,t/2,n/2-o/2)),s.add(C((e-.6)/2,t,o,.04),E.concrete,M((e+.6)/4,t/2,n/2-o/2)),s.add(C(.6,.3,o,.03),E.concrete,M(0,.15,n/2-o/2));let a=n/2,c=wi-.25,l=c-a;s.add(C(.86,.1,l,.02),E.concrete,M(0,.05,(a+c)/2)),s.add(C(.12,.45,l,.03),E.concrete,M(-.37,.225,(a+c)/2)),s.add(C(.12,.45,l,.03),E.concrete,M(.37,.225,(a+c)/2)),s.add(C(2.2,1,.25,.05),E.concrete,M(0,.5,wi-.125)),s.add(C(.2,.75,.6,.04),E.concrete,M(-1,.375,wi+.2,0,.3,0)),s.add(C(.2,.75,.6,.04),E.concrete,M(1,.375,wi+.2,0,-.3,0)),s.rod(new x(0,.35,wi-.3),new x(0,.35,wi+.02),.12,E.concreteDark,18),s.rod(new x(e/2-.02,.4,0),new x(e/2+.15,.4,0),.085,E.steel,14),s.rod(new x(e/2+.105,.4,0),new x(e/2+.15,.4,0),.14,E.steel,18),s.add(C(e-.1,.04,n/2-.1,.01),E.grating,M(0,t+.02,-n/4));let u=new ec(1,0);for(let m=0;m<16;m++){let v=(de(m,21)-.5)*1.8,b=wi+1.6+de(m,22)*1.3,_=.12+.12*de(m,23);s.add(u,E.concreteDark,M(v,-.12+_*.4,b,de(m,24)*3,de(m,25)*3,0,[_*1.2,_*.7,_]))}let d=s.build(r),h=Kt({color:je.treated,hi:13363682,mode:"flow",dir:[0,1],speed:1,scale:1.4,center:[i.pos[0],i.pos[1]]}),f=new oe(new Ke(e-2*o,n-2*o),h.material);f.rotation.x=-Math.PI/2,f.position.y=t-.25;let p=new oe(new Ke(.62,l+.1),h.material);p.rotation.x=-Math.PI/2,p.position.set(0,.28,(a+c)/2),r.add(f,p);let y=Rt(new x(e/2-o/2,t,-n/2+.2)),g=ln(new x(-1.12,0,-n/2-.04),new x(1.12,t+.04,wi+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,t+1,.6),focus:new x(0,.4,1.2),core:new x(0,t-.35,0),in:new x(e/2+.15,.4,0),out:new x(0,.35,wi)},radius:2.4,localBox:{min:[-1.1,0,-n/2],max:[1.1,t+.05,wi]},pickTargets:[...d,f,p],outline:g,glowRadius:2.2,glowY:.015,lamp:y,animate(m,v){h.uniforms.uTime.value=m,h.uniforms.uMotion.value=Math.max(v.motion,v.flow*.6),h.uniforms.uGlow.value=.03+.15*v.flow+(v.active?.05:0)}})}function ME(){let i=new tt({color:5916210,roughness:.9}),e={uWet:{value:1},uTime:{value:0},uStir:{value:0}};return i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
  roughnessFactor = mix(0.32, 0.97, dry);`)},i.customProgramCacheKey=()=>"ptl-cake",{material:i,u:e}}var Wd={wall:.2,gapHalf:.8,roofLow:3.35,roofHigh:3.85,colX:[-3.6,-1.2,1.2,3.6],colZ:2.15};function t0(i=Ue.sludge){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Pe,o=Wd.wall,a=Wd.gapHalf;s.add(C(o,t,n,.04),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.04),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(e,t,o,.04),E.concrete,M(0,t/2,-n/2+o/2));let c=e/2-a;s.add(C(c,t,o,.04),E.concrete,M(-e/2+c/2,t/2,n/2-o/2)),s.add(C(c,t,o,.04),E.concrete,M(e/2-c/2,t/2,n/2-o/2)),s.add(C(2*a,.12,o*.6,.02),Fe.pallet,M(0,.06,n/2-o/2));for(let F of[-1,1])s.add(C(.06,t,.08,.01),E.steelDark,M(F*(a+.03),t/2,n/2-o/2));s.add(C(e-2*o+.02,.08,n-2*o+.02,.02),E.gravel,M(0,.04,0)),s.add(C(e-2*o+.02,.08,n-2*o+.02,.02),Fe.sand,M(0,.12,0)),s.add(C(.5,.03,.5,.01),E.concreteDark,M(e/2-o-.35,.18,0));let l=new x(e/2+.25,.95,0);s.rod(l,new x(e/2-o-.3,.95,0),.075,E.steel,14),s.add(new rt(.085,12,8),E.steel,M(e/2-o-.3,.95,0)),s.rod(new x(e/2-o-.3,.95,0),new x(e/2-o-.3,.55,0),.075,E.steel,14),s.add(re(.125,.04,20),E.steel,M(l.x-.02,.95,0,0,0,Math.PI/2));let u=1.2;s.rod(new x(u,.15,-n/2+o+.05),new x(u,.15,-n/2-.15),.065,E.steelDark,12),s.add(new rt(.075,12,8),E.steelDark,M(u,.15,-n/2-.15)),s.rod(new x(u,.15,-n/2-.15),new x(u,.05,-n/2-.15),.065,E.steelDark,12);let d=new x(u,.05,-n/2-.15),{roofLow:h,roofHigh:f,colX:p,colZ:y}=Wd,g=F=>f+(h-f)*((F+y)/(2*y));for(let F of p)for(let I of[-y,y]){let B=g(I);s.add(C(.12,B,.12,.015),E.steelBlue,M(F,B/2,I)),s.add(C(.26,.03,.26,.01),E.steelDark,M(F,.015,I))}for(let F of p){let I=new x(F,g(-y-.15),-y-.15),B=new x(F,g(y+.15),y+.15);s.rod(I,B,.06,E.steelBlue,6)}for(let F=0;F<=5;F++){let I=-y-.15+F*((2*y+.3)/5);s.rod(new x(-e/2-.3,g(I)+.07,I),new x(e/2+.3,g(I)+.07,I),.035,E.steel,6)}for(let F of[-y,y])s.rod(new x(p[0],g(F)-.08,F),new x(p[3],g(F)-.08,F),.05,E.steelBlue,6);s.add(C(e+.6,.08,.14,.02),E.steelDark,M(0,g(y+.15)+.02,y+.2));let m=s.build(r),v=Math.hypot(2*y+.3,f-h),b=new tt({color:14082016,roughness:.35,transparent:!0,opacity:.22,depthWrite:!1,side:en}),_=new oe(new Ke(e+.6,v),b);_.rotation.x=-Math.PI/2+Math.atan2(f-h,2*y+.3),_.position.set(0,(h+f)/2+.11,0),_.renderOrder=4,r.add(_);let R=jn(16769712,1.6,.04,14210244),S=new Pe,L=[];for(let F of[-2.4,0,2.4]){let B=g(0)-.12;S.add(C(.5,.07,.14,.03),R,M(F,B,0)),L.push(new x(F,B,0))}S.build(r,!1,!1);let P=Ds(16768170,.28),w=new _t(new Ke(2.6,2.6).rotateX(-Math.PI/2),P,L.length);L.forEach((F,I)=>w.setMatrixAt(I,new be().makeTranslation(F.x,.62,F.z))),w.renderOrder=3,r.add(w);let T=ME(),H=new oe(new Ot(e-2*o,1,n-2*o,8,1,4),T.material);H.receiveShadow=!0,r.add(H);let N=Rt(new x(e/2-o/2,t,n/2-.25)),U=ln(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,t+.03,n/2+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,f+.9,0),focus:new x(0,1,.3),core:new x(0,.3,.4),in:l,drain:d,access:new x(0,0,n/2)},radius:4,localBox:{min:[-e/2-.3,0,-y-.15],max:[e/2+.3,f+.25,y+.3]},pickTargets:[...m,H],outline:U,glowRadius:4,glowY:.015,lamp:N,animate(F,I){let B=.04+.22*I.flow+.04*I.motion;H.scale.y=B,H.position.y=.16+B/2,T.u.uWet.value=Math.min(1,.15+.85*I.flow),T.u.uStir.value=I.motion,T.u.uTime.value=F}})}var IM=je.sludge;function n0(i=Ue.screen){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Pe,o=.12,a=.42;s.add(C(e+.1,.1,n+.1,.02),E.concreteDark,M(0,.05,0)),s.add(C(e,t,o,.03),E.concrete,M(0,t/2,-n/2+o/2)),s.add(C(e,t,o,.03),E.concrete,M(0,t/2,n/2-o/2)),s.add(C(o,t,n,.03),E.concrete,M(-e/2+o/2,t/2,0)),s.add(C(o,t,n,.03),E.concrete,M(e/2-o/2,t/2,0)),s.add(C(.8,.12,n-2*o,.04),Fe.grit,M(.6,.17,0)),s.add(C(.04,.5,n-2*o,.01),E.steelDark,M(.18,.35,0));let c=-.45,l=Math.PI/6,u=11,d=n-2*o-.04;for(let P=0;P<u;P++){let w=-d/2+(P+.5)*(d/u);s.add(C(.018,1.05,.012,.004),E.steel,M(c,.55,w,0,0,-l))}s.add(C(.05,.05,d+.04,.01),E.steelDark,M(c-Math.sin(l)*.5,.55+.45,0)),s.add(C(.05,.05,d+.04,.01),E.steelDark,M(c+Math.sin(l)*.48,.12,0)),s.add(C(.5,.04,.42,.01),E.grating,M(c-.45,t+.02,-.12)),s.add(C(.5,.04,n-.05,.01),E.grating,M(-.9,t+.02,0)),s.add(C(.75,.04,n-.05,.01),E.grating,M(.62,t+.02,0)),s.add(C(.06,.55,n-2*o,.01),E.steelDark,M(e/2-o-.08,.5,0)),s.rod(new x(e/2-o-.08,t,0),new x(e/2-o-.08,t+.35,0),.02,E.steel,6),s.add(new bn(.1,.015,6,20),E.rail,M(e/2-o-.08,t+.36,0,Math.PI/2,0,0));let h=-.55,f=-n/2-.42;s.add(C(.62,.78,.55,.05),Fe.peBlue,M(h,.43,f)),s.add(C(.66,.05,.58,.02),E.steelDark,M(h,.85,f+.02,-.35,0,0));for(let P of[-.22,.22])s.add(re(.05,.04,12),E.rubber,M(h+P,.05,f-.2,0,0,Math.PI/2));let p=n/2+.05,y=n/2+.8,g=.3;s.add(C(e,.05,y-p,.01),E.grating,M(0,g-.025,(p+y)/2));for(let P of[-e/2+.1,-.2,e/2-.03])s.add(C(.06,g-.05,.06,.01),E.steelBlue,M(P,(g-.05)/2,y-.05));Fn(s,[new x(-e/2+.05,g,y-.03),new x(.3,g,y-.03)],.95,1.2);let m=Vt(s,new x(-e/2+.02,a,0),new x(-1,0,0),.15),v=Vt(s,new x(e/2-.02,a,0),new x(1,0,0),.15),b=s.build(r),_=Kt({color:je.leachate,hi:11569749,mode:"flow",dir:[1,0],speed:.8,scale:1.4,center:[i.pos[0],i.pos[1]]}),R=new oe(new Ke(e-2*o,n-2*o),_.material);R.rotation.x=-Math.PI/2,R.position.y=a,R.receiveShadow=!0,r.add(R);let S=Rt(new x(e/2-.06,t,-n/2+.06)),L=ln(new x(-e/2-.04,0,-n/2-.04),new x(e/2+.04,t+.03,n/2+.04));return Ct({spec:i,root:r,localAnchors:{label:new x(0,t+1.1,0),focus:new x(0,.5,.2),core:new x(0,a-.1,0),in:m,out:v,operator:new x(c-.15,g,n/2+.45)},radius:1.6,localBox:{min:[-e/2-.05,0,f-.32],max:[e/2+.05,t+.1,y]},pickTargets:[...b,R],outline:L,glowRadius:1.7,glowY:.015,lamp:S,animate(P,w){_.uniforms.uTime.value=P,_.uniforms.uMotion.value=Math.max(w.motion,w.flow),_.uniforms.uGlow.value=.03+.18*w.flow+(w.active?.06:0)}})}var wE={coag:.55,poly:.2};function i0(i,e){let t=i.size.w,n=i.size.l,r=At(i),s=new Pe,o=e==="poly",a=.16;s.add(C(t,.05,n,.015),Fe.bund,M(0,.025,0));for(let[U,F,I,B]of[[0,-n/2+.02,t,.04],[0,n/2-.02,t,.04],[-t/2+.02,0,.04,n],[t/2-.02,0,.04,n]])s.add(C(I,a,B,.01),Fe.bund,M(U,a/2,F));s.add(C(t-.1,.02,n-.1,.005),E.grating,M(0,a-.02,0));let c=o?.41:.31,l=o?.95:.72,u=o?-.24:-.3,d=-.02,h=a;s.add(Ft([[0,0],[c,0],[c,l-.06],[c-.06,l],[.12,l],[.12,l+.04],[0,l+.04]],.03,40),Fe.pe,M(u,h,d));for(let U of[.25,.55])s.add(new bn(c+.004,.012,6,40),Fe.pe,M(u,h+U*l,d,Math.PI/2,0,0));s.rod(new x(u+c*.7,h+.05,d+c*.72),new x(u+c*.7,h+l-.05,d+c*.72),.012,E.glass,6),s.add(C(.16,.12,.01,.004),E.offWhite,M(u,h+l*.62,d+c+.006)),s.rod(new x(u+c-.02,h+.08,d),new x(.18,h+.08,d),.018,E.steel,8),s.add(re(.035,.35,12),E.glass,M(.12,h+.3,d-.28)),s.rod(new x(.12,h+.08,d-.28),new x(.12,h+.12,d),.012,E.steel,6);let f=[.22,-.2],p=[];for(let U of f)s.add(C(.26,.06,.2,.015),E.steelDark,M(.38,h+.03,U)),s.add(re(.065,.2,18),E.motor,M(.38+.04,h+.13,U,0,0,Math.PI/2)),s.add(C(.11,.14,.12,.02),Fe.peBlue,M(.38-.1,h+.13,U)),s.add(re(.06,.04,18),E.offWhite,M(.38-.17,h+.13,U,0,0,Math.PI/2)),p.push(new x(.38-.2,h+.13,U)),s.rod(new x(.38-.17,h+.21,U),new x(.38-.17,h+.34,U),.01,E.steel,6);let y=wE[e],g=-n/2+.1,m=1.3;s.rod(new x(.21,h+.34,f[0]),new x(.21,h+.34,g),.016,E.steel,6),s.rod(new x(.21,h+.34,g),new x(y,h+.34,g),.016,E.steel,6),s.rod(new x(y,h+.34,g),new x(y,m,g),.022,E.steel,8),s.add(C(.07,.12,.07,.01),E.steelDark,M(y,h+.62,g)),s.add(re(.035,.02,14),E.offWhite,M(y,h+.82,g+.04,Math.PI/2,0,0)),s.add(C(.05,m-.05,.05,.01),E.steelBlue,M(y+.07,(m-.05)/2,g));let v=t/2-.14,b=n/2-.08;s.add(C(.05,1.2,.05,.01),E.steelDark,M(v,.6,b)),s.add(C(.3,.36,.14,.03),E.offWhite,M(v,1.15,b-.02)),s.add(C(.05,.05,.02,.008),E.rubber,M(v-.07,1.1,b+.055)),s.add(C(.05,.05,.02,.008),E.rubber,M(v+.07,1.1,b+.055));let _=null;if(o){let U=h+l+.04;s.add(C(2*c+.06,.05,.12,.01),E.steelBlue,M(u,U+.025,d)),s.add(C(.16,.12,.16,.02),E.motor,M(u,U+.11,d)),s.add(re(.075,.2,18),E.motor,M(u,U+.27,d)),s.add(re(.08,.035,18,.06),E.steelDark,M(u,U+.385,d)),s.add(re(.12,.18,18,.16),E.offWhite,M(u+.24,U+.25,d+.18)),s.add(re(.04,.12,12,.12),E.offWhite,M(u+.24,U+.1,d+.18)),_=new we,_.position.set(u,U-.02,d);let F=new oe(re(.04,.05,14),E.steel),I=new oe(C(.02,.052,.02,.004),E.rail);I.position.x=.04,_.add(F,I),r.add(_)}let R=s.build(r),S=Kt({color:o?12170138:8014374,opacity:.55,mode:"still"}),L=new oe(re(c-.025,1,32),S.material);L.position.set(u,0,d),L.renderOrder=1,r.add(L);let P=new _t(re(.045,.03,14),E.steel,p.length);P.frustumCulled=!1,r.add(P);let w=new be,T=new yt().setFromEuler(new Qt(0,0,Math.PI/2)),H=Rt(new x(v,1.33,b-.02)),N=ln(new x(-t/2-.03,0,-n/2-.03),new x(t/2+.03,1.5,n/2+.03));return Ct({spec:i,root:r,localAnchors:{label:new x(0,2.1,0),focus:new x(0,.6,0),core:new x(u,h+l*.5,d),out:new x(y,m,g),operator:new x(v,0,n/2+.45)},radius:1,localBox:{min:[-t/2,0,-n/2],max:[t/2,1.7,n/2]},pickTargets:[...R,L],outline:N,glowRadius:1.1,glowY:.015,lamp:H,animate(U,F){let I=l*(.35+.5*(1-.4*F.flow))-.04;L.scale.y=I,L.position.y=h+.03+I/2,S.uniforms.uGlow.value=.02+.12*F.flow+(F.active?.05:0),_&&(_.rotation.y=U*1.6*F.motion);for(let B=0;B<p.length;B++){let V=.012*(B===0?F.motion:0)*Math.sin(U*9);w.compose(new x(p[B].x-.01+V,p[B].y,p[B].z),T,new x(1,1,1)),P.setMatrixAt(B,w)}P.instanceMatrix.needsUpdate=!0}})}var r0=(i=Ue.dosC)=>i0(i,"coag"),s0=(i=Ue.dosF)=>i0(i,"poly");var TE=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,SE=`
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
}`;function o0(i){return new Nn({uniforms:{uTime:{value:0},uI:{value:0},uShimmer:{value:i?1:0}},vertexShader:TE,fragmentShader:SE,transparent:!0,depthWrite:!1,blending:Br,side:en,toneMapped:!1})}function a0(i=Ue.flare){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Pe;o.add(C(3,.15,3.4,.03),E.concreteDark,M(-.3,.075,.25)),o.add(re(.55,n-.15,32),E.concrete,M(0,.15+(n-.15)/2,0)),o.add(re(e+.12,.05,32),E.steelDark,M(0,n+.025,0));for(let U=0;U<4;U++){let F=U*Math.PI/2+Math.PI/4;o.add(C(.03,.45,.22,.008),E.steelDark,M(Math.sin(F)*(e+.08),n+.25,Math.cos(F)*(e+.08),0,F,0))}o.add(re(e,t-.5,32),Fe.flareSteel,M(0,n+(t-.5)/2,0));for(let U of[n+1.2,n+2.6,n+3.9])o.add(re(e+.015,.06,32),E.steelDark,M(0,U,0));o.add(Ft([[e-.02,r-.52],[e+.12,r-.42],[e+.12,r],[e+.08,r],[e+.08,r-.38],[e-.06,r-.46]],.02,32),E.steelDark),o.add(re(e*.55,.12,20),E.rubber,M(0,r-.12,0)),o.rod(new x(e+.05,.9,.1),new x(e+.05,r-.1,.1),.015,E.steel,6),o.add(C(.05,1.3,.05,.01),E.steelDark,M(.95,.65+.15,.9)),o.add(C(.36,.44,.16,.03),E.offWhite,M(.95,1.3,.85)),o.add(re(.03,.02,10),E.rubber,M(.95,1.3,.94,Math.PI/2,0,0)),_i(o,new x(0,.15,-e-.22),n+2.3,new x(0,0,-1),!0,.38);let a=-.2,c=1.4;o.add(Ft([[0,0],[.17,0],[.17,.5],[.08,.58],[0,.6]],.03,24),E.steelBlue,M(a,.3,c)),o.add(C(.3,.15,.3,.02),E.concrete,M(a,.22,c)),o.rod(new x(a,.88,c),new x(a,1.5,c),.085,E.steel,14),o.add(re(.14,.045,20),E.steel,M(a,1.48,c)),o.add(new rt(.11,14,10),E.steel,M(a,1.1,c)),o.rod(new x(a+.17,.42,c),new x(a+.4,.42,c),.02,E.steel,6),o.add(C(.08,.08,.08,.01),E.steelDark,M(a+.33,.42,c));let l=-1,u=.55,d=.36,h=1.35;o.rod(new x(a,1.1,c),new x(l,1.1,c),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(l,1.1,c)),o.rod(new x(l,1.1,c),new x(l,1.1,u+d-.02),.075,E.steel,12),o.add(Ft([[0,.3],[d-.05,.3],[d,.38],[d,.3+h-.08],[d-.05,.3+h],[.1,.3+h+.08],[0,.3+h+.08]],.03,32),E.sage,M(l,0,u)),o.add(re(d+.06,.08,28),E.concrete,M(l,.26,u)),o.add(C(.06,.6,.03,.01),E.glass,M(l+.2,.95,u+d*.86,0,.5,0)),o.add(C(.09,.68,.02,.01),E.steelDark,M(l+.205,.95,u+d*.84,0,.5,0)),o.rod(new x(l-d,.9,u),new x(l-d-.25,.9,u),.03,E.steel,8),o.rod(new x(l-d-.25,.9,u),new x(l-d-.25,.2,u),.03,E.steel,8);let f=.3+h+.08,p=2;o.rod(new x(l,f,u),new x(l,p,u),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(l,p,u)),o.rod(new x(l,p,u),new x(0,p,u),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(0,p,u)),o.rod(new x(0,p,u),new x(0,p,e-.02),.075,E.steel,12);let y=-.5;o.add(re(.16,.28,24),E.steelDark,M(y,p,u,0,0,Math.PI/2));for(let U=0;U<5;U++)o.add(re(.18,.012,24),E.steel,M(y-.1+U*.05,p,u,0,0,Math.PI/2));for(let U of[-1,1])o.add(re(.12,.03,20),E.steel,M(y+U*.16,p,u,0,0,Math.PI/2));o.rod(new x(y,p-.17,u),new x(y,.15,u),.03,E.steelBlue,6);for(let[U,F]of[[1.15,1.8],[-1.7,1.8],[1.15,-1.2],[-1.7,-1.2]])o.add(re(.08,.8,14),E.rail,M(U,.55,F));let g=o.build(s),m=jn(14827564,2.2,.15,5904916),v=new oe(new rt(.06,14,10,0,Math.PI*2,0,Math.PI/2),m);v.position.set(e+.1,r+.02,0);let b=new oe(re(.05,.05,10),E.steelDark);b.position.set(e+.1,r-.01,0),s.add(v,b);let _=o0(!1),R=o0(!0),S=new oe(new Ke(1,1).translate(0,.5,0),_),L=new oe(new Ke(1,1).translate(0,.5,0),R);S.renderOrder=6,L.renderOrder=6,S.frustumCulled=!1,L.frustumCulled=!1;let P=new x,w=U=>(F,I,B)=>{U.getWorldPosition(P),U.rotation.y=Math.atan2(B.position.x-P.x,B.position.z-P.z),U.updateMatrix(),U.updateMatrixWorld()};S.onBeforeRender=w(S),L.onBeforeRender=w(L),s.add(S,L);let T=new Cs(16751178,0,14,1.8);T.position.set(0,r+.6,0),s.add(T);let H=Rt(new x(.95,1.52,.85)),N=ln(new x(-1.5,0,-.9),new x(1.2,r+.1,2));return Ct({spec:i,root:s,localAnchors:{label:new x(0,r+1.9,0),focus:new x(-.2,2.3,.5),core:new x(l,.9,u),in:new x(a,1.5,c),tip:new x(0,r,0)},radius:3,localBox:{min:[-1.8,0,-1.3],max:[1.25,r+.1,1.9]},pickTargets:g,outline:N,glowRadius:2,glowY:.16,lamp:H,animate(U,F){let I=F.motion,B=(.55+.85*Math.max(F.flow,.3))*(.92+.08*Math.sin(U*3.1)*Math.sin(U*1.7+.6));S.visible=I>.02,L.visible=I>.02,S.scale.set(.55+.25*I,B*(.6+.4*I),1),S.position.set(0,r-.05,0),L.scale.set(1,2.2*B,1),L.position.set(0,r+B*.5,0),_.uniforms.uTime.value=U,_.uniforms.uI.value=I,R.uniforms.uTime.value=U,R.uniforms.uI.value=I;let X=.85+.1*Math.sin(U*7.3)*Math.sin(U*3.1+1);T.intensity=9*I*(.25+Ao.value)*X,v.scale.setScalar(.85+.15*(.5+.5*Math.sin(U*2.1)))}})}function c0(i=Ue.thick){let e=i.size.d/2,t=i.size.h,n=i.base,r=n+t,s=At(i),o=new Pe,a=.05;o.add(Ft([[0,0],[e+.12,0],[e+.12,n],[0,n]],.04,48),E.concrete),o.add(Ft(Ei(e,n,t,a,!0,.06),.04,64),E.warmGray),on(o,e+.01,.035,r-.01,0,Math.PI*2,E.steelBlue);for(let N of[n+.08,n+1.3])on(o,e+.012,.025,N,0,Math.PI*2,E.steelBlue);o.add(Ft([[.12,n+.1],[e-a-.01,n+.7],[e-a-.01,n+.74],[.12,n+.14]],.01,40),E.steelDark);let c=r-.12;o.add(Ft([[e-a,c-.16],[e-.24,c-.16],[e-.24,c+.02]],.01,56),E.steelDark);let l=40;for(let N=0;N<l;N++){let U=N/l*Math.PI*2;o.add(new Wi(.035,.07,3),E.steelDark,M(Math.sin(U)*(e-.24),c+.055,Math.cos(U)*(e-.24),0,U,0))}let u=2.2,d=new x(Math.sin(u),0,Math.cos(u));o.rod(d.clone().multiplyScalar(e-.1).setY(c-.1),d.clone().multiplyScalar(e+.22).setY(c-.1),.05,E.steel,10),o.rod(d.clone().multiplyScalar(e+.22).setY(c-.1),d.clone().multiplyScalar(e+.22).setY(.12),.05,E.steel,10),o.add(C(.3,.1,.3,.02),E.concreteDark,M(d.x*(e+.22),.05,d.z*(e+.22)));let h=2*e+.36,f=.6,p=r+.06;o.add(C(h,.07,f,.02),E.grating,M(0,p,0));for(let N of[f/2,-f/2])o.add(C(h,.14,.06,.02),E.steelBlue,M(0,p-.03,N));for(let N of[f/2-.03,-f/2+.03])Fn(o,[new x(-e+.05,p+.04,N),new x(e+.12,p+.04,N)],.95,1.2);o.add(C(.42,.06,.42,.02),E.steelDark,M(0,p+.06,0)),o.add(re(.2,.22,28),E.motor,M(0,p+.2,0)),o.add(re(.09,.3,20),E.motor,M(.25,p+.25,0,0,0,Math.PI/2)),o.add(re(.095,.05,20,.07),E.steelDark,M(.42,p+.25,0,0,0,-Math.PI/2)),o.add(C(.08,.06,.07,.01),E.motor,M(.22,p+.37,0)),o.add(re(.28,.7,28,.28,!0),E.steel,M(0,r-.3,0));for(let N of[-.22,.22])o.rod(new x(0,p-.04,N),new x(0,r+.02,N*1.2),.015,E.steelBlue,5);_i(o,new x(e+.28,0,0),p,new x(1,0,0),!0);let y=Vt(o,new x(0,.45,-e-.02),new x(0,0,-1),.13),g=-e-.15;o.add(new rt(.085,12,8),E.steel,M(0,.45,g)),o.rod(new x(0,.45,g),new x(0,r+.35,g),.075,E.steel,12),o.add(new rt(.085,12,8),E.steel,M(0,r+.35,g)),o.rod(new x(0,r+.35,g),new x(0,r+.35,-.26),.075,E.steel,12),o.rod(new x(0,r+.35,-.26),new x(0,r-.1,-.26),.075,E.steel,12);for(let N of[1,2])o.add(C(.12,.05,.2,.01),E.steelBlue,M(0,N,-e-.07));let m=new x(-e-.25,.45,0);o.rod(new x(-.2,.45,0),m,.075,E.steel,14),o.add(re(.12,.04,20),E.steel,M(m.x+.02,.45,0,0,0,Math.PI/2)),o.add(C(.16,.18,.2,.03),E.steelDark,M(-e-.09,.45,0)),o.rod(new x(-e-.09,.55,0),new x(-e-.09,.85,0),.02,E.steel,6),o.add(new bn(.09,.014,6,18),E.rail,M(-e-.09,.86,0,Math.PI/2,0,0));let v=o.build(s),b=c+.02,_=new we,R=new Pe;R.rod(new x(0,n+.2,0),new x(0,p,0),.04,E.steel,12);for(let N of[-1,1]){let U=new x(0,n+.3,0),F=new x(N*(e-.15),n+.82,0);R.rod(U,F,.025,E.steelBlue,6);for(let I=1;I<=4;I++){let B=U.clone().lerp(F,I/4.6);R.add(C(.16,.06,.02,.005),E.steelBlue,M(B.x,B.y-.04,B.z,0,N*.6,0))}for(let I=1;I<=6;I++){let B=U.clone().lerp(F,I/6.5);R.rod(B,B.clone().setY(b-.25),.012,E.steel,5)}R.rod(F.clone().setY(b-.25),new x(N*.12,b-.25,0),.015,E.steel,5)}R.add(C(.05,.12,2*e-.55,.01),E.steelDark,M(0,b+.02,0)),R.add(C(.3,.05,.3,.01),E.rail,M(0,p-.1,0)),R.build(_),s.add(_);let S=Kt({color:4864550,hi:10125400,mode:"ripple",speed:.4,scale:.8,opacity:.62,center:[i.pos[0],i.pos[1]]}),L=new oe(new Mn(e-a-.01,56),S.material);L.rotation.x=-Math.PI/2,L.position.y=b,L.renderOrder=1;let P=new tt({color:je.sludge,roughness:.85,transparent:!0,opacity:.85}),w=new oe(re(e-a-.02,1,40),P);w.renderOrder=0,s.add(L,w);let T=Rt(new x(e+.05,p+.04,f/2-.05)),H=ei([[e+.05,.01],[e+.05,r+.02]],4);return Ct({spec:i,root:s,localAnchors:{label:new x(0,p+1.5,0),focus:new x(0,r*.5,0),core:new x(0,n+.9,0),in:y,out:m},radius:Math.hypot(e,t/2)+.3,localBox:{min:[-e-.27,0,-e-.24],max:[e+.5,p+1,e+.24]},pickTargets:[...v,L],outline:H,glowRadius:e*1.7,glowY:.015,lamp:T,animate(N,U){_.rotation.y=N*.35*U.motion,S.uniforms.uTime.value=N,S.uniforms.uMotion.value=.3+.7*U.motion,S.uniforms.uGlow.value=.03+.16*U.flow+(U.active?.06:0);let F=.55+.6*U.flow+.03*Math.sin(N*.4)*U.motion;w.scale.y=F,w.position.y=n+.08+F/2}})}var Po={rollDoor:{x0:-2.45,x1:-.55,h:2.5},persDoor:{z0:-.45,z1:.45,h:2.1},plinth:.15,toteSlots:[[-2.2,-.72],[-.95,-.72],[-2.2,.38],[-.95,.38]]};function l0(i=Ue.control){let e=i.size.w,t=i.size.h,n=i.size.l,r=At(i),s=new Pe,o=.12,a=Po.plinth,{rollDoor:c,persDoor:l}=Po,u=t;s.add(C(e+.2,a,n+.2,.02),E.concreteDark,M(0,a/2,0)),s.add(C(e,u-a,o,.02),Fe.wall,M(0,a+(u-a)/2,-n/2+o/2)),s.add(C(o,u-a,n,.02),Fe.wall,M(-e/2+o/2,a+(u-a)/2,0));let d=l.z0+n/2,h=n/2-l.z1;s.add(C(o,u-a,d,.02),Fe.wall,M(e/2-o/2,a+(u-a)/2,-n/2+d/2)),s.add(C(o,u-a,h,.02),Fe.wall,M(e/2-o/2,a+(u-a)/2,n/2-h/2)),s.add(C(o,u-a-l.h,l.z1-l.z0,.02),Fe.wall,M(e/2-o/2,a+l.h+(u-a-l.h)/2,0)),s.add(C(.05,l.h,l.z1-l.z0-.04,.01),Fe.wallTrim,M(e/2+.005,a+l.h/2,0)),s.add(C(.04,.04,.14,.01),E.steel,M(e/2+.04,a+1,l.z0+.14));let f=[[-e/2,c.x0],[c.x1,e/2]];for(let[I,B]of f)s.add(C(B-I,u-a,o,.02),Fe.wall,M((I+B)/2,a+(u-a)/2,n/2-o/2));s.add(C(c.x1-c.x0,u-a-c.h,o,.02),Fe.wall,M((c.x0+c.x1)/2,a+c.h+(u-a-c.h)/2,n/2-o/2)),s.add(re(.16,c.x1-c.x0+.1,20),Fe.rollDoor,M((c.x0+c.x1)/2,a+c.h+.14,n/2+.12,0,0,Math.PI/2));for(let I of[c.x0,c.x1])s.add(C(.06,c.h,.08,.01),E.steelDark,M(I,a+c.h/2,n/2+.02));s.add(C(o*.8,u-a,n-2*o,.02),Fe.wall,M(0,a+(u-a)/2,0)),s.add(C(-c.x0+c.x1+.4,.06,.1,.01),Fe.bund,M((c.x0+c.x1)/2,a+.03,n/2-o-.06)),s.add(C(.3,.012,.3,.005),E.grating,M(-1.6,a+.006,-1.1)),s.add(C(.4,.5,.05,.01),E.offWhite,M(-1.6,1.6,-n/2+o+.03));for(let I=0;I<4;I++){let B=.55+I*.6;s.add(C(.56,2,.42,.02),E.steelBlue,M(B,a+1,-n/2+o+.22)),s.add(C(.5,1.6,.01,.004),E.steelDark,M(B,a+1.05,-n/2+o+.435)),s.add(C(.04,.04,.01,.005),E.rail,M(B-.15,a+1.7,-n/2+o+.44))}s.add(C(1.6,.05,.6,.01),E.offWhite,M(1.75,a+.75,.75));for(let I of[1.25,1.75,2.25])s.add(C(.38,.26,.03,.01),E.rubber,M(I,a+1,.62));let p=.35;s.add(C(e+2*p,.16,n+2*p,.04),E.steelBlue,M(0,u+.08,0)),s.add(C(e+2*p+.02,.06,n+2*p+.02,.02),E.steelDark,M(0,u+.19,0)),s.rod(new x(-e/2-.1,u,n/2+.1),new x(-e/2-.1,.1,n/2+.1),.04,E.steelDark,8);let y={x:e/2+.33,y:.75,z:1};s.add(C(.5,.6,.8,.04),E.offWhite,M(y.x,y.y,y.z)),s.add(re(.22,.03,24),E.steelDark,M(y.x+.25,y.y+.02,y.z,0,0,Math.PI/2));for(let I of[y.z-.3,y.z+.3])s.add(C(.5,.05,.05,.01),E.steelDark,M(y.x-.02,y.y-.33,I));s.rod(new x(e/2+.05,y.y+.2,y.z-.35),new x(e/2+.05,2.4,y.z-.35),.025,E.steelDark,6),s.add(C(.2,.9,.6,.03),E.offWhite,M(-e/2-.1,1.4,-.4)),s.add(C(1.2,.3,.03,.01),E.steelDark,M(1.6,u-.35,n/2+.02)),s.add(C(1.1,.22,.01,.005),E.offWhite,M(1.6,u-.35,n/2+.04));let g=[[.55,1.35],[1.85,2.65]],m=1.05,v=2;for(let[I,B]of g){for(let X of[I,B])s.add(C(.05,v-m+.05,.08,.01),Fe.wallTrim,M(X,(m+v)/2,n/2+.01));for(let X of[m,v])s.add(C(B-I+.05,.05,.08,.01),Fe.wallTrim,M((I+B)/2,X,n/2+.01));s.add(C(B-I,.04,.16,.01),E.concreteDark,M((I+B)/2,m-.05,n/2+.06))}let b=s.build(r),_=new tt({color:2832960,roughness:.12,metalness:.2,emissive:16767398,emissiveIntensity:0}),R=new Pe;for(let[I,B]of g)R.add(new Ke(B-I-.04,v-m-.04),_,M((I+B)/2,(m+v)/2,n/2-o/2+.005));let S=R.build(r,!1,!0);S.forEach(I=>I.position.z=o/2+.01);let L=jn(16770748,1.8,.04,14210244),P=new Pe,w=[[(c.x0+c.x1)/2,a+c.h+.45,n/2+.12,0],[e/2+.1,a+l.h+.3,0,Math.PI/2],[-e/2+.3,u-.4,n/2+.1,0],[e/2-.3,u-.4,n/2+.1,0]];for(let[I,B,X,V]of w)P.add(C(.22,.14,.12,.03),E.steelDark,M(I,B+.03,X,0,V,0)),P.add(C(.18,.04,.1,.015),L,M(I,B-.05,X+(V?0:.02),0,V,0));P.build(r);let T=Ds(16768170,.3),H=new _t(new Ke(1,1).rotateX(-Math.PI/2),T,4);[[(c.x0+c.x1)/2,n/2+1.3,3.6],[e/2+1.2,0,2.8],[-e/2+.3,n/2+1,2.4],[e/2-.3,n/2+1,2.4]].forEach(([I,B,X],V)=>H.setMatrixAt(V,new be().compose(new x(I,.02,B),new yt,new x(X,1,X)))),H.renderOrder=3,r.add(H);let U=Rt(new x(e/2-.2,u+.22,n/2-.2)),F=ln(new x(-e/2-.05,0,-n/2-.05),new x(e/2+.05,u+.25,n/2+.05));return Ct({spec:i,root:r,localAnchors:{label:new x(0,u+1.2,0),focus:new x(0,1.6,.4),core:new x(1.5,1.2,0),door:new x(e/2+.6,0,0),bay:new x((c.x0+c.x1)/2,0,n/2+.6)},radius:3.6,localBox:{min:[-e/2-p,0,-n/2-p],max:[e/2+.6,u+.25,n/2+p]},pickTargets:[...b,...S],outline:F,glowRadius:3.8,glowY:.015,lamp:U,animate(I,B){let X=B.active?1:.55;_.emissiveIntensity=Ao.value*1.1*X}})}var Xd=class{constructor(e){this.points=e;this.cum=[0];for(let t=1;t<e.length;t++)this.cum.push(this.cum[t-1]+e[t].distanceTo(e[t-1]));this.length=this.cum[this.cum.length-1]}seg(e){let t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0))*this.length,n=1;for(;n<this.cum.length-1&&this.cum[n]<t;)n++;let r=this.cum[n]-this.cum[n-1];return{i:n,f:r>1e-9?(t-this.cum[n-1])/r:0}}pointAt(e){let{i:t,f:n}=this.seg(e);return this.points[t-1].clone().lerp(this.points[t],n)}headingAt(e){let{i:t}=this.seg(e),n=r=>{let s=this.points[r-1],o=this.points[r],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)>1e-6?Math.atan2(a,c):null};for(let r=0;r<this.points.length;r++)for(let s of[t-r,t+r])if(s>=1&&s<this.points.length){let o=n(s);if(o!==null)return o}return 0}},nt=(i,e,t)=>new x(i,e,t);function u0(i,e,t){for(let n=1;n<i.length;n++){let[r,s]=i[n-1],[o,a]=i[n],c=o-r,l=a-s,u=c*c+l*l;if(u<1e-9)continue;let d=((e-r)*c+(t-s)*l)/u;if(!(d<-1e-6||d>1+1e-6)&&!(Math.hypot(r+d*c-e,s+d*l-t)>.001))return[[...i.slice(0,n),[e,t]],[[e,t],...i.slice(n)]]}throw new Error(`Parada fuera de la v\xEDa: (${e}, ${t})`)}var Tc=i=>i.map(([e,t])=>nt(e,0,t)),RE=(i,e)=>[...i,...e.slice(1)];function d0(){let{entry:i,loop:e}=qi,t=RE(i,e),n=pt.chemStop,r=pt.sludgeStop,[s,o]=u0(t,n.x,n.z),[a,c]=u0(t,r.x,r.z),l={"chem-arrive":[Tc(s),{kind:"truck",allow:[]}],"chem-leave":[Tc(o),{kind:"truck",allow:[]}],"sludge-arrive":[Tc(a),{kind:"truck",allow:[]}],"sludge-leave":[Tc(c),{kind:"truck",allow:[]}],"w-operator":[[nt(-20.9,0,-2.2),nt(-20.55,0,-2.2),nt(-20.55,0,-5),nt(-18.45,0,-5),nt(-17,0,-5),nt(-17,0,-5.1),nt(-17,1.2,-6.9),nt(-17,1.2,-7.16),nt(-18.55,1.2,-7.16)],{kind:"worker",allow:["control","dosC","coag","estructura:platform-stair","estructura:platform-deck","estructura:platform-rail-s"]}],"w-uasb":[[nt(-11,0,-1.275),nt(-10.1,0,-1.275),nt(-10.1,1.95,-1.275),nt(-9.4,1.95,-1.275),nt(4,1.95,-1.275)],{kind:"worker",allow:["estructura:catwalk-deck"]}],"w-bed-a":[[nt(-22.4,.2,7.3),nt(-21.6,.2,7.9),nt(-21.6,.2,8.55),nt(-21.6,0,9.15),nt(-21.6,0,9.85)],{kind:"worker",allow:["sludge"]}],"w-bed-b":[[nt(-20,.2,7.5),nt(-20.8,.2,8),nt(-20.8,.2,8.55),nt(-20.8,0,9.15),nt(-20.8,0,9.85)],{kind:"worker",allow:["sludge"]}],"w-unload":[[nt(-26,0,2.5),nt(-26,0,.2),nt(-26,.15,-.55),nt(-26,.15,-1)],{kind:"worker",allow:["control"]}],"w-mbbr":[[nt(17,0,.55),nt(16.1,0,.55),nt(15.98,0,.15),nt(15.98,1.5,.15)],{kind:"worker",allow:["mbbr"]}],"w-patrol":[[nt(-20.9,0,-2.2),nt(-20.55,0,-2.2),nt(-20.55,0,-4.75),nt(9.85,0,-4.75),nt(9.85,0,4.6),nt(5.2,0,4.6),nt(5.2,0,-4.25),nt(-20.15,0,-4.25),nt(-20.15,0,-2.6),nt(-20.9,0,-2.2)],{kind:"worker",allow:["control"]}],"w-screen":[[nt(-27.5,0,-6.3),nt(-27.5,.3,-6.95),nt(-28.9,.3,-7.1)],{kind:"worker",allow:["screen"]}]},u={},d={};for(let[h,[f,p]]of Object.entries(l))u[h]=new Xd(f),d[h]=p;return{routes:u,meta:d}}var Cc={w:1.2,l:1,h:1.16},Sc=null,Rc=i=>i.index?i.toNonIndexed():i;function Ac(i,e,t){return new vt(t,t,1,5,1).applyMatrix4(Bd(i,e))}function AE(){if(Sc)return Sc;let{w:i,l:e,h:t}=Cc,n=mr([C(i,.04,e,.01).translate(0,.13,0),...[-.5,0,.5].map(h=>C(.12,.11,e,.01).translate(h*(i-.12),.055,0))].map(Rc)),r=C(i-.1,t-.22,e-.1,.09,3).translate(0,.15+(t-.22)/2,0),s=mr([Rc(r),Rc(new vt(.09,.09,.06,14).translate(0,t-.04,0))]),o=[],a=.15,c=t,l=[-i/2,-i/6,i/6,i/2],u=[-e/2,0,e/2];for(let h of l)for(let f of[-e/2,e/2])o.push(Ac(new x(h,a,f),new x(h,c,f),.012));for(let h of u)for(let f of[-i/2,i/2])o.push(Ac(new x(f,a,h),new x(f,c,h),.012));for(let h of[a,(a+c)/2,c]){for(let f of[-e/2,e/2])o.push(Ac(new x(-i/2,h,f),new x(i/2,h,f),.012));for(let f of[-i/2,i/2])o.push(Ac(new x(f,h,-e/2),new x(f,h,e/2),.012))}let d=mr(o.map(Rc));return Sc={pallet:n,tank:s,cage:d},Sc}function Lo(i){let e=AE(),t=new we,n=[[e.pallet,Fe.pallet],[e.tank,Fe.ibcTank],[e.cage,Fe.ibcCage]].map(([r,s])=>{let o=new _t(r,s,i.length);return i.forEach((a,c)=>o.setMatrixAt(c,a)),o.castShadow=!0,o.receiveShadow=!0,o.count=0,o.frustumCulled=!1,t.add(o),o});return{group:t,capacity:i.length,setCount(r){let s=Math.max(0,Math.min(i.length,Math.round(r)));for(let o of n)o.count=s;t.visible=s>0}}}var qd={cab:new tt({color:3103722,roughness:.45,metalness:.1}),white:new tt({color:15988218,roughness:.5}),teal:new tt({color:2074767,roughness:.5,metalness:.05})},ko={length:7.2,width:2.4,rearOverhang:1.3,wheelbase:4.2,wheelR:.5,height:3.2},Yd=null,Zd=null,Vs=null,h0=null;function CE(){if(!Vs){let i=ko.wheelR,e=[[new vt(i,i,.3,24),2500907],[new vt(i*.6,i*.6,.31,18),10397354],[new Ot(.08,.32,i*1),6055016]],t=[],n=[],r=[];for(let[s,o]of e){let a=s.toNonIndexed();a.rotateZ(Math.PI/2);let c=new Ie(o).convertSRGBToLinear();t.push(...a.attributes.position.array),n.push(...a.attributes.normal.array);for(let l=0;l<a.attributes.position.count;l++)r.push(c.r,c.g,c.b)}Vs=new St,Vs.setAttribute("position",new ze(t,3)),Vs.setAttribute("normal",new ze(n,3)),Vs.setAttribute("color",new ze(r,3)),h0=new tt({vertexColors:!0,roughness:.8})}return{geo:Vs,mat:h0}}var $d=class{constructor(e,t){this.id=e;this.kind=t;this.root=new we;this.length=ko.length;this.wheelPos=[];this.totes=null;this.lift=null;this.body=null;this.gate=null;this.cake=null;this.m4=new be;this.root.name=`truck:${e}`;let n=ko,r=new Pe,s=qd.cab,o=t==="chemical"?qd.white:qd.teal,a=t==="chemical"?E.steelBlue:E.rail,c=n.wheelbase,l=n.length-n.rearOverhang,u=-n.rearOverhang;for(let g of[-1,1])r.add(C(.16,.22,l-u-.3,.02),E.steelDark,M(g*.45,.78,(l+u)/2-.1));r.add(C(.5,.4,.9,.06),E.steelDark,M(-.95,.75,2.2)),r.add(C(.5,.35,.6,.05),E.rubber,M(.95,.75,2.4));for(let g of[-1,1])r.add(C(.04,.12,2.2,.01),E.steel,M(g*1.15,.55,1.95));for(let g of[-1,1])for(let m of[0,c])r.add(C(.5,.06,.9,.02),E.steelDark,M(g*.95,1.05,m));let d=c-.2,h=l;r.add(C(n.width,1.85,h-d,.18,3),s,M(0,1.05+.925,(d+h)/2)),r.add(C(n.width+.02,.16,h-d+.02,.05),a,M(0,1.55,(d+h)/2));let f=new tt({color:2240826,roughness:.1,metalness:.4});r.add(C(n.width-.3,.75,.04,.03),f,M(0,2.35,h+.005));for(let g of[-1,1])r.add(C(.04,.65,.95,.03),f,M(g*(n.width/2+.005),2.35,h-.65));r.add(C(n.width-.4,.28,.06,.02),E.steelDark,M(0,1.35,h+.02)),r.add(C(n.width+.05,.22,.2,.04),E.steelDark,M(0,.85,h+.08));for(let g of[-1,1])r.rod(new x(g*n.width/2,2.4,h-.3),new x(g*(n.width/2+.25),2.4,h-.2),.015,E.steelDark,5),r.add(C(.06,.3,.16,.02),E.steelDark,M(g*(n.width/2+.27),2.35,h-.2));r.rod(new x(-.95,1.2,d-.1),new x(-.95,3.25,d-.1),.05,E.steel,10),r.add(C(.3,.08,.3,.02),E.steelDark,M(0,2.93,d+.5)),Yd||(Yd=jn(16773328,2.4,.08,15262936)),Zd||(Zd=jn(12595242,1.6,.15,5904916));for(let g of[-1,1])r.add(C(.3,.16,.04,.03),Yd,M(g*.85,1.32,h+.03)),r.add(C(.22,.1,.04,.02),Zd,M(g*1,.95,u-.02));if(r.add(C(n.width,.12,.06,.02),E.steelDark,M(0,.9,u+.03)),t==="chemical"){let g=u,m=d-.1,v=1.15;r.add(C(n.width,.12,m-g,.02),Fe.pallet,M(0,v-.06,(g+m)/2));for(let S of[-1,1])r.add(C(.05,.35,m-g,.01),a,M(S*(n.width/2-.03),v+.18,(g+m)/2));r.add(C(n.width,1.3,.08,.02),a,M(0,v+.65,m-.04));for(let S=0;S<5;S++)r.add(C(.04,.32,.04,.01),E.steelDark,M(-n.width/2+.03,v+.17,g+.3+S*((m-g-.6)/4)));for(let S of[-1,1])r.add(C(.1,1.1,.1,.02),E.steelDark,M(S*(n.width/2-.1),.6,u-.05));let b=[];for(let S=0;S<4;S++)b.push(new be().makeTranslation(0,v,m-.15-Cc.l/2-S*(Cc.l+.12)));this.totes=Lo(b),this.root.add(this.totes.group);let _=new we;_.position.set(0,v,u);let R=new Pe;R.add(C(n.width-.2,.06,1.4,.015),E.grating,M(0,0,-.7)),R.add(C(n.width-.2,.08,.05,.01),E.rail,M(0,.04,-1.38)),R.build(_),this.lift=_,this.root.add(_)}else{let g=new we,m=u+.1,v=1.3,b=4.6,_=2.3,R=1.05;g.position.set(0,v,m);let S=new Pe;S.add(C(_,.1,b,.03),o,M(0,.05,b/2));for(let T of[-1,1])S.add(C(.08,R,b,.02),o,M(T*(_/2-.04),R/2,b/2));S.add(C(_,R+.2,.08,.02),o,M(0,(R+.2)/2,b-.04)),S.add(C(_+.1,.1,.9,.02),o,M(0,R+.15,b+.35));for(let T=0;T<4;T++)for(let H of[-1,1])S.add(C(.05,R,.06,.01),a,M(H*(_/2+.01),R/2,.4+T*1.2));S.build(g);let L=new oe(new Ot(_-.18,1,b-.2,6,1,10),Fe.sludgeDry);L.position.set(0,.1,b/2),L.receiveShadow=!0,g.add(L);let P=new we;P.position.set(0,R,0);let w=new oe(C(_,R,.08,.02),o);w.position.set(0,-R/2,-.04),w.castShadow=!0,P.add(w),g.add(P),this.body=g,this.gate=P,this.cake=L,this.root.add(g),r.add(re(.08,1.1,12),E.steel,M(0,1,2.6,.5,0,0))}r.build(this.root),this.beaconMat=new tt({color:6965786,emissive:16752698,emissiveIntensity:0,roughness:.3,transparent:!0,opacity:.92});let p=new oe(new vt(.09,.11,.18,14),this.beaconMat);p.position.set(0,3.06,d+.5),this.root.add(p);for(let g of[-1,1])this.wheelPos.push([g*1.02,c]),this.wheelPos.push([g*1.05,0],[g*.72,0]);let y=CE();this.wheels=new _t(y.geo,y.mat,this.wheelPos.length),this.wheels.castShadow=!0,this.wheels.frustumCulled=!1,this.root.add(this.wheels),this.root.traverse(g=>{g.isMesh&&!g.isInstancedMesh&&(g.castShadow=!0)}),this.setPose(new x,0,0),this.setLoad(0),this.setWork(0),this.setBeacon(!1,0)}setPose(e,t,n){this.root.position.copy(e),this.root.rotation.set(0,t,0);let r=new yt().setFromEuler(new Qt(n*Math.PI*2,0,0)),s=new x(1,1,1);this.wheelPos.forEach(([o,a],c)=>this.wheels.setMatrixAt(c,this.m4.compose(new x(o,ko.wheelR,a),r,s))),this.wheels.instanceMatrix.needsUpdate=!0}setLoad(e){let t=Math.max(0,Math.min(1,e));if(this.totes&&this.totes.setCount(Math.round(4*t)),this.cake){let n=.02+.85*t;this.cake.scale.y=n,this.cake.position.y=.1+n/2,this.cake.visible=t>.01}}setWork(e){let t=Math.max(0,Math.min(1,e));if(this.lift){let n=Math.min(1,t/.4),r=Math.max(0,(t-.4)/.6);this.lift.rotation.x=Math.PI/2*(1-n),this.lift.position.y=1.15-(1.15-.06)*r}this.body&&this.gate&&(this.body.rotation.x=-.75*t,this.gate.rotation.x=.9*Math.min(1,t*2))}setBeacon(e,t){let n=.5+.5*Math.cos(t*Math.PI*2*1.4);this.beaconMat.emissiveIntensity=e?.3+2.2*n*n:0}setVisible(e){this.root.visible=e}};function Ic(i,e=`truck-${i}`){return new $d(e,i)}var Ho=[{hat:15328988,vest:13661242,shirt:4609642,trousers:2896960,skin:12950394},{hat:14267710,vest:11978058,shirt:5989745,trousers:3093046,skin:9265736},{hat:15328988,vest:11978058,shirt:4082782,trousers:3159613,skin:10976092},{hat:14267710,vest:13661242,shirt:6975348,trousers:2501425,skin:13806988},{hat:15328988,vest:13208124,shirt:4938578,trousers:2830392,skin:8017215},{hat:14267710,vest:11123538,shirt:5267566,trousers:3488320,skin:12159592},{hat:15328988,vest:13661242,shirt:6117974,trousers:2304046,skin:10120786},{hat:14267710,vest:11978058,shirt:4478310,trousers:3027769,skin:13148288}],It={base:0,hips:1,spine:2,head:3,shL:4,elL:5,shR:6,elR:7,hipL:8,knL:9,hipR:10,knR:11,shovel:12,rake:13,tablet:14,bottle:15,jack:16},xt={hips:[0,.95,0],spine:[0,1.02,0],head:[0,1.52,0],shL:[.21,1.45,0],elL:[.23,1.17,0],shR:[-.21,1.45,0],elR:[-.23,1.17,0],hipL:[.095,.93,0],knL:[.095,.5,0],hipR:[-.095,.93,0],knR:[-.095,.5,0],handL:[.23,.9,.02],handR:[-.23,.9,.02]},Kd=null;function IE(){return Kd||(Kd=new tt({vertexColors:!0,roughness:.68,metalness:.02})),Kd}var f0=new Map;function Gs(i,e,t){let n=new x(...i),r=new x(...e),s=n.distanceTo(r),o=new fr(t,Math.max(.001,s),3,10),a=new yt().setFromUnitVectors(new x(0,1,0),r.clone().sub(n).normalize());return o.applyMatrix4(new be().compose(n.clone().add(r).multiplyScalar(.5),a,new x(1,1,1))),o}function PE(i){let e=JSON.stringify(i),t=f0.get(e);if(t)return t;let n=[],r=(d,h,f)=>{let p=d.index?d.toNonIndexed():d;for(let _ of Object.keys(p.attributes))_!=="position"&&_!=="normal"&&p.deleteAttribute(_);let y=p.attributes.position.count,g=new Ie(h).convertSRGBToLinear(),m=new Float32Array(y*3),v=new Uint16Array(y*4),b=new Float32Array(y*4);for(let _=0;_<y;_++)m.set([g.r,g.g,g.b],_*3),v[_*4]=f,b[_*4]=1;p.setAttribute("color",new tn(m,3)),p.setAttribute("skinIndex",new tn(v,4)),p.setAttribute("skinWeight",new tn(b,4)),n.push(p)},s=(d,h,f)=>new be().makeTranslation(d,h,f),o=i.boots??2762274,a=i.glove??3815988;for(let[d,h,f]of[[1,It.hipL,It.knL],[-1,It.hipR,It.knR]]){let p=.095*d;r(Gs([p,.9,0],[p,.56,0],.072),i.trousers,h),r(Gs([p,.48,0],[p,.14,0],.058),i.trousers,f),r(C(.12,.1,.27,.035).applyMatrix4(s(p,.05,.04)),o,f)}r(C(.32,.17,.2,.06).applyMatrix4(s(0,.96,0)),i.trousers,It.hips),r(C(.34,.46,.21,.08).applyMatrix4(s(0,1.26,0)),i.shirt,It.spine),r(C(.365,.38,.235,.08).applyMatrix4(s(0,1.24,0)),i.vest,It.spine);for(let d of[1.14,1.29])r(C(.37,.032,.24,.012).applyMatrix4(s(0,d,0)),14212310,It.spine);r(new vt(.048,.052,.08,10).applyMatrix4(s(0,1.52,0)),i.skin,It.head),r(new rt(.102,14,10).applyMatrix4(s(0,1.64,.005)),i.skin,It.head),r(new rt(.118,16,8,0,Math.PI*2,0,Math.PI/2).applyMatrix4(s(0,1.67,0)),i.hat,It.head),r(new vt(.135,.135,.014,18).applyMatrix4(s(0,1.672,.01)),i.hat,It.head),r(C(.12,.012,.06,.004).applyMatrix4(s(0,1.672,.14)),i.hat,It.head);for(let[d,h,f]of[[1,It.shL,It.elL],[-1,It.shR,It.elR]]){let p=.22*d;r(Gs([p,1.43,0],[p*1.04,1.2,0],.05),i.vest,h),r(Gs([p*1.04,1.15,0],[p*1.04,.95,.02],.042),i.shirt,f),r(new rt(.046,10,8).applyMatrix4(s(p*1.04,.9,.02)),a,f)}let c=xt.handR;r(new vt(.016,.016,1.15,6).applyMatrix4(s(c[0],c[1]-.25,c[2]+.02)),9071429,It.shovel),r(C(.22,.28,.02,.01).applyMatrix4(s(c[0],c[1]-.9,c[2]+.05)),6055016,It.shovel),r(new vt(.015,.015,1.5,6).applyMatrix4(s(c[0],c[1]-.4,c[2]+.02)),9071429,It.rake),r(C(.45,.03,.03,.008).applyMatrix4(s(c[0],c[1]-1.15,c[2]+.02)),5002587,It.rake);for(let d=0;d<7;d++)r(C(.012,.1,.012,.003).applyMatrix4(s(c[0]-.2+d*.066,c[1]-1.2,c[2]+.02)),5002587,It.rake);let l=xt.handL;r(C(.2,.28,.016,.012).applyMatrix4(s(l[0],l[1]+.02,l[2]+.07)),2830129,It.tablet),r(C(.17,.23,.004,.004).applyMatrix4(s(l[0],l[1]+.02,l[2]+.08)),8368560,It.tablet),r(new vt(.034,.034,.15,12).applyMatrix4(s(c[0],c[1]-.05,c[2]+.04)),15000022,It.bottle),r(new vt(.02,.02,.03,10).applyMatrix4(s(c[0],c[1]+.035,c[2]+.04)),4156042,It.bottle);for(let d of[-1,1])r(C(.16,.06,1.15,.015).applyMatrix4(s(d*.2,.06,1.12)),11833935,It.jack);r(C(.56,.32,.2,.03).applyMatrix4(s(0,.18,.48)),11833935,It.jack),r(new vt(.07,.07,.08,12).rotateZ(Math.PI/2).applyMatrix4(s(0,.07,.42)),2830129,It.jack),r(Gs([0,.3,.46],[0,1,.3],.02),2830129,It.jack),r(Gs([-.15,1,.3],[.15,1,.3],.022),2830129,It.jack);let u=mr(n);return u.computeBoundingSphere(),f0.set(e,u),u}var Jd=class{constructor(e,t){this.id=e;this.root=new we;this.bones={};this.heading=0;this.action="idle";this.visible=!0;this.root.name=`worker:${e}`;let n=(p,y,g,m=[0,0,0])=>{let v=new bo;return v.name=p,v.position.set(g[0]-m[0],g[1]-m[1],g[2]-m[2]),y&&y.add(v),this.bones[p]=v,v},r=n("base",null,[0,0,0]),s=n("hips",r,xt.hips),o=n("spine",s,xt.spine,xt.hips);n("head",o,xt.head,xt.spine);let a=n("shL",o,xt.shL,xt.spine);n("elL",a,xt.elL,xt.shL);let c=n("shR",o,xt.shR,xt.spine),l=n("elR",c,xt.elR,xt.shR),u=n("hipL",s,xt.hipL,xt.hips);n("knL",u,xt.knL,xt.hipL);let d=n("hipR",s,xt.hipR,xt.hips);n("knR",d,xt.knR,xt.hipR),n("shovel",l,xt.handR,xt.elR),n("rake",l,xt.handR,xt.elR),n("tablet",this.bones.elL,xt.handL,xt.elL),n("bottle",l,xt.handR,xt.elR),n("jack",r,[0,0,0]);let f=["base","hips","spine","head","shL","elL","shR","elR","hipL","knL","hipR","knR","shovel","rake","tablet","bottle","jack"].map(p=>this.bones[p]);this.mesh=new Wa(PE(t),IE()),this.mesh.add(r),this.mesh.updateMatrixWorld(!0),this.mesh.bind(new qa(f)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.root.add(this.mesh),this.setAction("idle",0,0)}setPose(e,t){this.root.position.copy(e),this.root.rotation.set(0,t,0),this.heading=t}setVisible(e){this.visible=e,this.root.visible=e}setAction(e,t,n){this.action=e;let r=this.bones;for(let l of Object.keys(r))r[l].rotation.set(0,0,0);r.hips.position.set(xt.hips[0],xt.hips[1],xt.hips[2]);for(let l of["shovel","rake","tablet","bottle","jack"])r[l].scale.setScalar(1e-4);let s=Math.PI*2,o=t*s,a=Math.sin(o)*.015;if((e==="walk"||e==="carry")&&n!==0){let l=n*s,u=Math.sin(l),d=e==="carry"?.38:.5;r.hipL.rotation.x=-u*d,r.hipR.rotation.x=u*d,r.knL.rotation.x=Math.max(0,Math.sin(l+1.3))*.75,r.knR.rotation.x=Math.max(0,Math.sin(l+1.3+Math.PI))*.75,r.hips.position.y=xt.hips[1]-.018+.018*Math.abs(Math.cos(l)),r.spine.rotation.y=u*.06,e==="walk"&&(r.shL.rotation.x=u*.38,r.shR.rotation.x=-u*.38,r.elL.rotation.x=-.25,r.elR.rotation.x=-.25)}switch(e){case"idle":r.spine.rotation.x=.02+a,r.shL.rotation.z=.06,r.shR.rotation.z=-.06,r.head.rotation.y=.25*Math.sin(o*.5);break;case"walk":r.spine.rotation.x=.05;break;case"inspect":{r.tablet.scale.setScalar(1),r.shL.rotation.x=-.75,r.elL.rotation.x=-1,r.shL.rotation.z=-.15;let l=Math.max(0,Math.sin(o))**2;r.shR.rotation.x=-1.3*l,r.shR.rotation.z=-.15*l,r.elR.rotation.x=-.15*l,r.head.rotation.y=.45*Math.sin(o),r.head.rotation.x=.12-.2*l,r.spine.rotation.x=.03+a;break}case"shovel":{r.shovel.scale.setScalar(1);let l=t<.55?Math.sin(t/.55*Math.PI):0,u=t>=.55?Math.sin((t-.55)/.45*Math.PI):0;r.spine.rotation.x=.25+.45*l-.15*u,r.spine.rotation.y=.35*u,r.hips.position.y=xt.hips[1]-.12*l,r.hipL.rotation.x=-.35*l,r.hipR.rotation.x=-.2*l,r.knL.rotation.x=.6*l,r.knR.rotation.x=.4*l,r.shR.rotation.x=-.55-.3*l-1.1*u,r.elR.rotation.x=-.35+.2*u,r.shL.rotation.x=-.9-.2*l-.8*u,r.shL.rotation.z=-.45,r.elL.rotation.x=-.6,r.shovel.rotation.x=.9-.6*u;break}case"rake":{r.rake.scale.setScalar(1);let l=Math.sin(o);r.spine.rotation.x=.3+.08*l,r.shR.rotation.x=-.75-.35*l,r.elR.rotation.x=-.4+.2*l,r.shL.rotation.x=-.95-.3*l,r.shL.rotation.z=-.35,r.elL.rotation.x=-.5,r.rake.rotation.x=.85+.15*l,r.hipL.rotation.x=-.25,r.knL.rotation.x=.25,r.hipR.rotation.x=.1;break}case"carry":r.jack.scale.setScalar(1),r.spine.rotation.x=.12,r.shL.rotation.x=-.75,r.shR.rotation.x=-.75,r.elL.rotation.x=-.35,r.elR.rotation.x=-.35,r.shL.rotation.z=-.12,r.shR.rotation.z=.12;break;case"operate":{let l=Math.max(0,Math.sin(o*2))*.12;r.shR.rotation.x=-1.15-l,r.elR.rotation.x=-.55+l,r.shR.rotation.z=.1,r.shL.rotation.z=.05,r.head.rotation.x=.1,r.spine.rotation.x=.04+a;break}case"sample":{r.bottle.scale.setScalar(1);let l=.5+.5*Math.sin(o);r.hips.position.y=xt.hips[1]-.42,r.hipL.rotation.x=-1.55,r.knL.rotation.x=2.1,r.hipR.rotation.x=-.9,r.knR.rotation.x=1.9,r.spine.rotation.x=.45,r.shR.rotation.x=-.75-.25*l,r.elR.rotation.x=-.2,r.shL.rotation.x=-.4,r.elL.rotation.x=-.9,r.head.rotation.x=.35;break}}this.mesh.visible=this.visible}forkPoint(e=new x){let t=this.heading;return e.set(this.root.position.x+Math.sin(t)*1.12,this.root.position.y+.1,this.root.position.z+Math.cos(t)*1.12)}};function jd(i,e=0){let t=typeof e=="number"?Ho[(e%Ho.length+Ho.length)%Ho.length]:e;return new Jd(i,t)}var LE=["op-1","op-2","op-3","op-4","op-5","op-6","op-7","op-8"];function p0(){let i=new we;i.name="actors";let e=Vp();i.add(e.group);let t=LE.map((f,p)=>jd(f,p));for(let f of t)i.add(f.root),f.setVisible(!1);let n={chemical:Ic("chemical"),sludge:Ic("sludge")};for(let f of Object.values(n))i.add(f.root),f.setVisible(!1);let{routes:r,meta:s}=d0(),o=Ue.control,a=Po.plinth,c=[];for(let f of[0,1])for(let[p,y]of Po.toteSlots)c.push(new be().makeTranslation(o.pos[0]+p,a+f*1.18,o.pos[1]+y));let l=Lo(c);i.add(l.group);let u=Lo([new be]);u.setCount(1),u.group.visible=!1,i.add(u.group);let d=null,h=new x;return i.userData.routeMeta=s,i.userData.roadFootprints=e.footprints,{root:i,workers:t,trucks:n,routes:r,setCarriedTote(f){d=f?t.find(p=>p.id===f)??null:null,u.group.visible=!!d},setStockedTotes(f){l.setCount(f)},update(f){d&&(d.forkPoint(h),u.group.position.copy(h),u.group.rotation.set(0,d.heading,0),u.group.visible=d.root.visible)}}}var kE=[[-31,.1,0],[-19,.1,0],[-31.8,10,Math.PI/2],[-13,11.8,-Math.PI*.75]],HE=[[-13.55,-12.2],[-5.5,-3.2],[11.8,-5.6],[-3,6.4],[-15,-.8]];function m0(){let i=new we;i.name="site-lights";let e=new Pe,t=jn(16773590,2,.03,13619916),n=jn(10477744,1.4,.25,4086344),r=[],s=[];kE.forEach(([p,y,g],m)=>{e.add(C(.32,.12,.32,.02),E.concreteDark,M(p,.06,y)),e.add(re(.07,7,12,.05),E.steelBlue,M(p,7/2,y));let b=Math.sin(g),_=Math.cos(g),R=new x(p+b*1.3,7+.12,y+_*1.3);e.rod(new x(p,7-.05,y),R,.035,E.steelBlue,8),e.add(C(.62,.1,.28,.04),E.steelDark,M(R.x,R.y,R.z,0,g+Math.PI/2,0)),e.add(C(.52,.02,.2,.01),t,M(R.x,R.y-.06,R.z,0,g+Math.PI/2,0)),s.push([R.x+b*.6,.03,R.z+_*.6,9]),r.push({id:`street-pole-${m+1}`,min:[p-.18,0,y-.18],max:[p+.18,7,y+.18]})});let o=-6,a=-2;HE.forEach(([p,y],g)=>{e.add(C(.6,.3,.6,.04),E.concrete,M(p,.15,y)),e.add(re(.11,9.5,12,.07),E.steelBlue,M(p,.3+9.5/2,y));let v=Math.atan2(o-p,a-y);e.add(C(1.3,.08,.12,.02),E.steelDark,M(p,9.5+.2,y,0,v+Math.PI/2,0));for(let b of[-1,0,1]){let _=Math.cos(v)*.5*b,R=-Math.sin(v)*.5*b,S=v+b*.45;e.add(C(.36,.26,.12,.03),E.steelDark,M(p+_,9.5+.42,y+R,-.55,S,0)),e.add(C(.3,.2,.02,.01),t,M(p+_+Math.sin(S)*.06,9.5+.38,y+R+Math.cos(S)*.06,-.55,S,0)),s.push([p+Math.sin(S)*7,.03,y+Math.cos(S)*7,11])}r.push({id:`flood-mast-${g+1}`,min:[p-.3,0,y-.3],max:[p+.3,9.5+.6,y+.3]})});let c=(p,y,g,m,v)=>{e.rod(new x(p,y,g),new x(p,y+.55,g),.02,E.steelDark,6),e.add(C(.26,.08,.14,.03),E.steelDark,M(p,y+.6,g,0,m,0)),e.add(C(.2,.015,.1,.006),t,M(p,y+.555,g,0,m,0)),s.push([p,v,g,3.2])},l=1.2+1;c(vr.minX+.08,l,vr.maxZ-.03,0,1.22),c(vr.maxX-.08,l,vr.maxZ-.03,0,1.22);let u=Zr.deckY+Zr.railH;for(let p of[-8,-2.6,2.8])c(p,u,Zr.minZ+.03,0,Zr.deckY+.02);c(15.41,2.3+.9,-.5,Math.PI/2,.03);for(let[p,y,g]of[[vr.stairX+.45,l-.2,vr.maxZ],[Zr.minX+.05,u-.2,-1.6]])e.add(C(.16,.1,.06,.02),n,M(p,y,g));e.add(C(.16,.1,.12,.02),t,M(Ge.minX+.45,2.34,pt.z+pt.width/2+.45)),e.build(i);let d=Ds(16768174,.26),h=new _t(new Ke(1,1).rotateX(-Math.PI/2),d,s.length);s.forEach(([p,y,g,m],v)=>h.setMatrixAt(v,new be().compose(new x(p,y,g),new yt,new x(m,1,m)))),h.renderOrder=3,h.frustumCulled=!1,i.add(h);let f=[[-26,3,.8,16766624,6],[-17,3.6,-6.2,16769720,5],[-2.6,3.8,-1.4,16769720,8],[-21.2,3,6.8,16766624,7]];for(let[p,y,g,m,v]of f){let b=new Cs(m,0,v*1.6,1.6);b.position.set(p,y,g),b.castShadow=!1,Ip(b,7),i.add(b)}return i.userData.footprints=r,i}var mn=(i,e=.9,t=0,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),dt={cover:mn(9881994),coverDark:mn(8830332),soil:mn(13808778),garbageBed:mn(12168082),liner:mn(3818848,.55),gravel:mn(13617594),concrete:mn(14936048,.85),pipe:mn(13666874,.5,.1),steel:mn(9411252,.45,.4),yellow:mn(15906354,.5,.1),dark:mn(2829872,.7,.2),truckBody:mn(2074767,.5,.05),truckCab:mn(3103722,.45),glass:mn(10467266,.15,.3),fence:mn(11779538,.5,.4),cloud:mn(16777215,1,0,{transparent:!0,opacity:.55,depthWrite:!1}),bird:new In({color:4871544,side:en})};function g0(i,e,t,n,r,s,o){let a=[[i,t],[e,t],[e,n],[i,n]],c=[[i+r,t+r],[e-r,t+r],[e-r,n-r],[i+r,n-r]],l=[],u=(p,y,g,m)=>l.push(...p,...y,...g,...p,...g,...m);for(let p=0;p<4;p++){let y=(p+1)%4;u([a[p][0],s,a[p][1]],[c[p][0],o,c[p][1]],[c[y][0],o,c[y][1]],[a[y][0],s,a[y][1]])}u([c[0][0],o,c[0][1]],[c[3][0],o,c[3][1]],[c[2][0],o,c[2][1]],[c[1][0],o,c[1][1]]);let d=new St;d.setAttribute("position",new ze(l,3)),d.computeVertexNormals();let h=d.attributes.normal,f=h.count-1;if(h.getY(f)<0){let p=d.attributes.position.array;for(let y=0;y<p.length;y+=9)for(let g=0;g<3;g++){let m=p[y+3+g];p[y+3+g]=p[y+6+g],p[y+6+g]=m}d.computeVertexNormals()}return d}function Do(i,e,t,n){let r=mn(i,.25,.05,{emissive:i,emissiveIntensity:.12});return r.onBeforeCompile=s=>{s.uniforms.uTime=t,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb += vec3(0.30, 0.26, 0.18) * ring;`:""}`)},r.customProgramCacheKey=()=>`ptl-water-${e.join(",")}-${n}`,r}function DE(i,e,t){let n=new Ke(.03,1.15);n.rotateZ(.12);let r=Math.atan2(fi[0],fi[2]);n.rotateY(r);let s=new sc;s.index=n.index,s.setAttribute("position",n.attributes.position);let o=new Float32Array(t*4);for(let l=0;l<t;l++)o[l*4]=e.x0+(e.x1-e.x0)*de(l,1),o[l*4+1]=e.z0+(e.z1-e.z0)*de(l,2),o[l*4+2]=de(l,3),o[l*4+3]=.85+.3*de(l,4);s.setAttribute("aSeed",new Fr(o,4)),s.instanceCount=t;let a=new Nn({transparent:!0,depthWrite:!1,uniforms:{uTime:i,uTop:{value:e.top}},vertexShader:`
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
      void main() { gl_FragColor = vec4(0.45, 0.58, 0.92, 0.55 * vA); }`}),c=new oe(s,a);return c.frustumCulled=!1,c.renderOrder=5,c.name="rain",c}function x0(){let i=new we;i.name="landfill";let e=new Pe,t={value:0},n=uc,r=n.tierH,s=n.slope,o=[n.minX,n.maxX,n.minZ,n.maxZ],a=s+n.bench,c=[n.minX+a,n.maxX-a,n.minZ+a,n.maxZ-a];e.add(g0(o[0],o[1],o[2],o[3],s,-.03,r),dt.cover),e.add(g0(c[0],c[1],c[2],c[3],s,r-.02,2*r),dt.coverDark);let l=2*r,u={x0:c[0]+s,x1:c[1]-s,z0:c[2]+s,z1:c[3]-s},d=n.face;e.add(C(d.maxX-d.minX,.12,u.z1-u.z0-.4,.03),dt.garbageBed,M((d.minX+d.maxX)/2,l+.04,(u.z0+u.z1)/2));let h=Math.hypot(s,r),f=Math.atan2(r,s);e.add(new Ke(d.maxX-d.minX,h),dt.garbageBed,M((d.minX+d.maxX)/2,r*1.5+.03,c[3]-s/2+.03,-Math.PI/2+f,0,0)),e.add(C(c[1]-c[0],.14,.42,.03),dt.concrete,M((c[0]+c[1])/2,r+.05,c[3]+.45)),e.add(C(.42,.14,c[3]-c[2],.03),dt.concrete,M(c[1]+.45,r+.05,(c[2]+c[3])/2)),e.add(C(.5,.12,Math.hypot(s,r)+.2,.03),dt.concrete,M(o[1]-1.6,r/2+.06,o[3]-s/2,f-Math.PI/2+Math.PI/2-0,0,0));for(let[z,$,ee,pe]of[[(o[0]+o[1])/2,o[3]+.25,o[1]-o[0]+1,.5],[(o[0]+o[1])/2,o[2]-.25,o[1]-o[0]+1,.5],[o[1]+.25,(o[2]+o[3])/2,.5,o[3]-o[2]],[o[0]-.25,(o[2]+o[3])/2,.5,o[3]-o[2]]])e.add(C(ee,.05,pe,.01),dt.liner,M(z,0,$));let p=[[u.x0+2,u.z0+1.6],[u.x0+5.2,u.z1-1.4],[u.x0+8,u.z0+2.6],[u.x0+1.8,u.z1-1.2],[d.minX-2.2,u.z0+1]];for(let[z,$]of p)e.add(re(.45,.35,10),dt.gravel,M(z,l+.17,$)),e.add(re(.09,1.7,10),dt.steel,M(z,l+.85,$)),e.add(C(.5,.08,.14,.02),dt.steel,M(z,l+1.72,$));let y=wp,g=y.w,m=[{a:[n.minX-.6,y.z],b:[y.x,y.z],dir:[1,0]},{a:[y.x,n.minZ-.6],b:[y.x,(rn.minZ+rn.maxZ)/2],dir:[0,1]},{a:[y.x,y.z],b:[y.x,(rn.minZ+rn.maxZ)/2],dir:[0,-1]},{a:[y.x,(rn.minZ+rn.maxZ)/2],b:[rn.minX+.2,(rn.minZ+rn.maxZ)/2],dir:[1,0]}],v=[];for(let z of m){let $=z.b[0]-z.a[0],ee=z.b[1]-z.a[1],pe=Math.hypot($,ee)+g,fe=(z.a[0]+z.b[0])/2,ye=(z.a[1]+z.b[1])/2,$e=Math.abs($)>Math.abs(ee),[he,Ee]=$e?[pe,g]:[g,pe];e.add(C(he,.06,Ee,.01),dt.concrete,M(fe,0,ye));for(let Ye of[-1,1]){let Re=$e?0:Ye*(g/2-.05),gt=$e?Ye*(g/2-.05):0;e.add(C($e?pe:.1,.3,$e?.1:pe,.02),dt.concrete,M(fe+Re,.12,ye+gt))}let Ne=new oe(new Ke($e?pe-.1:g-.2,$e?g-.2:pe-.1).rotateX(-Math.PI/2),Do(13208380,z.dir,t,!1));Ne.position.set(fe,.15,ye),Ne.receiveShadow=!0,v.push(Ne)}let b=rn,_=(b.minX+b.maxX)/2,R=(b.minZ+b.maxZ)/2,S=b.maxX-b.minX,L=b.maxZ-b.minZ,P=.75,w=.6;for(let[z,$,ee,pe]of[[_,b.minZ-P/2+.3,S+2*P-.6,P],[_,b.maxZ+P/2-.3,S+2*P-.6,P],[b.maxX+P/2-.3,R,P,L],[b.minX-P/2+.3,(b.minZ+R-.55)/2,P,R-.55-b.minZ],[b.minX-P/2+.3,(b.maxZ+R+.55)/2,P,b.maxZ-R-.55]])e.add(C(ee,w,pe,.12),dt.soil,M(z,w/2-.02,$));e.add(C(S-.5,.06,L-.5,.02),dt.liner,M(_,.02,R));for(let[z,$,ee,pe]of[[_,b.minZ+.32,S-.6,.06],[_,b.maxZ-.32,S-.6,.06],[b.maxX-.32,R,.06,L-.6],[b.minX+.32,(b.minZ+.3+R-.55)/2,.06,R-.55-b.minZ-.3],[b.minX+.32,(b.maxZ-.3+R+.55)/2,.06,b.maxZ-.3-R-.55]])e.add(C(ee,w,pe,.02),dt.liner,M(z,w/2,$));let T=new oe(new Ke(S-.7,L-.7).rotateX(-Math.PI/2),Do(11893301,[1,0],t,!0));T.position.set(_,.42,R),T.receiveShadow=!0,v.push(T);let H=b.minX-P-.3,N=b.maxX+P+.3,U=b.minZ-P-.3,F=b.maxZ+P+.3,I=(z,$)=>{let ee=Math.max(1,Math.round(z.distanceTo($)/2.2));for(let pe=0;pe<=ee;pe++){let fe=z.clone().lerp($,pe/ee);e.add(C(.07,1.4,.07,.01),dt.fence,M(fe.x,.7,fe.z))}for(let pe of[.6,1.3])e.rod(new x(z.x,pe,z.z),new x($.x,pe,$.z),.025,dt.fence,6)},B=new x(H,0,U),X=new x(N,0,U),V=new x(N,0,F),Q=new x(H,0,F);I(B,X),I(X,V),I(V,Q),I(Q,new x(H,0,R+.6)),I(new x(H,0,R-.6),B);let se=b.maxX+1.4,le=.55;e.add(C(1,.18,.8,.03),dt.concrete,M(se+.7,.09,R)),e.add(re(.2,.6,16),dt.steel,M(se+.5,.45,R,0,0,Math.PI/2)),e.add(re(.16,.42,16),E.steelBlue,M(se+1,.45,R,0,0,Math.PI/2));let Ce=fn[0],Qe=fn[1];e.rod(new x(b.maxX-.6,le,R),new x(se+.2,le,R),.09,dt.pipe,12),e.rod(new x(se+1.2,le,R),new x(Ce-.3,le,R),.09,dt.pipe,12),Math.abs(R-Qe)>.05&&e.rod(new x(Ce-.3,le,R),new x(Ce-.3,le,Qe),.09,dt.pipe,12),e.rod(new x(Ce-.3,le,Qe),new x(Ce-.3,.2,Qe),.09,dt.pipe,12);for(let z of[se+2.4,Ce-.9])e.add(C(.12,le-.05,.3,.02),dt.concrete,M(z,(le-.05)/2,R));e.build(i,!0,!0);for(let z of v)i.add(z);let K=[3818070,5995760,3125370,15987960,5214176,12173520,15909194,15987960],ne=[14069882,12159578,15296346,16777215,4178096,14069882,13225176],ie=900,ae=650,Me=new _t(new wn(1,0),mn(16777215,.6),ie),Be=new _t(new Ot(1,1,1),mn(16777215,.8),ae),We=new be,Ze=new Ie,et=z=>z<=u.z1?l:l-(z-u.z1)/s*r,Mt=(z,$)=>{let ee=de(z,$+9)<.42,pe=d.minX+.3+(d.maxX-d.minX-.6)*de(z,$+1),fe=ee?u.z1+s*Math.pow(de(z,$+2),.8):u.z0+.4+(u.z1-u.z0-.4)*de(z,$+2);return[pe,et(fe),fe]};for(let z=0;z<ie;z++){let[$,ee,pe]=Mt(z,10),fe=.16+.24*de(z,13);We.compose(new x($,ee+fe*.55,pe),new yt().setFromEuler(new Qt(de(z,14)*3,de(z,15)*6.28,0)),new x(fe*1.1,fe*.8,fe)),Me.setMatrixAt(z,We),Me.setColorAt(z,Ze.setHex(K[Math.floor(de(z,16)*K.length)]))}for(let z=0;z<ae;z++){let[$,ee,pe]=Mt(z,30),fe=.12+.4*de(z,33),ye=.05+.18*de(z,34),$e=.1+.32*de(z,35);We.compose(new x($,ee+ye*.4,pe),new yt().setFromEuler(new Qt((de(z,36)-.5)*.8,de(z,37)*6.28,(de(z,38)-.5)*.8)),new x(fe,ye,$e)),Be.setMatrixAt(z,We),Be.setColorAt(z,Ze.setHex(ne[Math.floor(de(z,39)*ne.length)]))}for(let z of[Me,Be])z.castShadow=!0,z.receiveShadow=!0,z.instanceMatrix.needsUpdate=!0,z.instanceColor&&(z.instanceColor.needsUpdate=!0),i.add(z);let G=new we;{let z=new Pe;z.add(C(2,.75,1.5,.08),dt.yellow,M(0,.75,0)),z.add(C(.95,.85,1.15,.06),dt.yellow,M(-.45,1.5,0)),z.add(C(.8,.55,1.18,.03),dt.glass,M(-.45,1.55,0));for(let $ of[-.72,.72])z.add(C(2.3,.5,.36,.12),dt.dark,M(0,.27,$));z.add(C(.22,.85,2,.04),dt.yellow,M(1.45,.48,0));for(let $ of[-.6,.6])z.rod(new x(.8,.7,$),new x(1.38,.45,$),.05,dt.dark,6);z.add(re(.06,.5,8),dt.dark,M(.2,1.35,.4)),z.build(G,!0,!0)}G.rotation.y=-Math.PI/2,i.add(G);let zt=new we,it=new we;{let z=new Pe;for(let ee of[-1.4,.9,1.9])for(let pe of[-.95,.95])z.add(re(.42,.3,14),dt.dark,M(ee,.42,pe,Math.PI/2,0,0));z.add(C(5,.3,1.9,.04),dt.dark,M(.3,.75,0)),z.add(C(1.5,1.6,2.1,.12),dt.truckCab,M(-2,1.55,0)),z.add(C(.05,.7,1.8,.02),dt.glass,M(-2.76,1.85,0)),z.build(zt,!0,!0);let $=new Pe;$.add(C(3.6,1.9,2.2,.15),dt.truckBody,M(-1.8,.95,0)),$.add(C(.25,1.8,2.1,.06),dt.dark,M(-.1,.95,0)),$.build(it,!0,!0)}it.position.set(3,.9,0),zt.add(it),zt.position.set(d.minX+2.6,l+.1,u.z0+1.4),zt.rotation.y=.15,i.add(zt);{let z=new Pe;z.add(new wn(1,1).scale(1.3,.55,1.1),dt.garbageBed,M(d.minX+6.6,l+.1,u.z0+1.9)),z.build(i,!0,!0)}let at=new we;for(let z=0;z<8;z++){let $=new oe(new wn(1,3),dt.cloud);$.scale.set(5+3*de(z,51),1.2+.6*de(z,52),3.5+2*de(z,53)),$.position.set(n.minX+2+(n.maxX-n.minX+6)*(z/7)+2*de(z,54),19+2.5*de(z,55),(n.minZ+n.maxZ)/2-4+8*de(z,56)),$.renderOrder=6,at.add($)}i.add(at);let Xe=[],Bt=new St;Bt.setAttribute("position",new ze([0,0,0,-.35,.08,.32,0,0,.12,0,0,0,0,0,.12,.35,.08,.32],3));for(let z=0;z<7;z++){let $=new oe(Bt,dt.bird);Xe.push($),i.add($)}let qe={x0:n.minX-4,x1:rn.maxX+1.5,z0:n.minZ-3,z1:y.z+.5,top:16},D=DE(t,qe,3400);i.add(D);let A={landfill:new x((d.minX+d.maxX)/2,l+1.4,(u.z0+u.z1)/2),pond:new x(_,1,R)},Z=[[n.minX,0,n.maxZ+1],[n.maxX,0,n.maxZ+1],[n.minX,l,n.minZ+6],[n.maxX,l,n.minZ+6],[b.maxX+1,0,b.maxZ+1],[b.maxX+1,0,b.minZ-1],[(d.minX+d.maxX)/2,l+3,u.z0]];return{group:i,anchors:A,framePoints:Z,setRain(z){D.visible=z,at.visible=z},update(z){t.value=z;let $=9,ee=(z%$+$)%$/$,pe=ee<.62?ee/.62:1-(ee-.62)/.38,fe=pe*pe*(3-2*pe);G.position.set(d.maxX-2.4-.6*Math.sin(z*.21),l+.08,u.z0+1.3+(u.z1-u.z0-1.6)*fe);let ye=(z+3)%14/14,$e=ye<.3?ye/.3:ye<.55?1:ye<.8?1-(ye-.55)/.25:0;it.rotation.z=-.75*$e*$e*(3-2*$e),Xe.forEach((he,Ee)=>{let Ne=4+3*de(Ee,61),Ye=.35+.15*de(Ee,62),Re=z*Ye+de(Ee,63)*6.28,gt=(d.minX+d.maxX)/2+(de(Ee,64)-.5)*8,ct=(u.z0+u.z1)/2+(de(Ee,65)-.5)*5;he.position.set(gt+Ne*Math.cos(Re),l+6+2*de(Ee,66)+.4*Math.sin(z*1.3+Ee),ct+Ne*Math.sin(Re)),he.rotation.set(0,-Re,.25*Math.sin(z*6+Ee*1.7))})}}}var Tn=(i,e=.85,t=0,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),Ht={meadow:Tn(12049570),sand:Tn(15326396),stone:Tn(13883362),wood:Tn(13212258,.8),trunk:Tn(10122322),leafA:Tn(8176762),leafB:Tn(6271854),leafC:Tn(10473866),reed:Tn(6203482),reedHead:Tn(10122322),pad:Tn(5812842),flower:Tn(15967944),white:Tn(16251131,.6),beak:Tn(15906354,.5),dark:Tn(3818070,.6),duck:Tn(9071178,.7),duckHead:Tn(3116906,.5)},Qd=(i,e,t=64)=>new Mn(1,t).rotateX(-Math.PI/2).scale(i,1,e);function y0(i){let e=new we;e.name="wetland";let t=dc,n={value:0},r=new Pe;r.add(Qd(t.rx+6,t.rz+4.5),Ht.meadow,M(t.cx,-.015,t.cz+.6)),r.add(Qd(t.rx+1,t.rz+.9),Ht.sand,M(t.cx,-.005,t.cz));let s=new oe(Qd(t.rx,t.rz),Do(4639168,[0,1],n,!0));s.position.set(t.cx,.02,t.cz),s.receiveShadow=!0,e.add(s);let o=i.z-.2,a=t.cz-t.rz+.6,c=i.x,l=a-o;r.add(C(1.9,.08,l,.02),Ht.stone,M(c,-.02,(o+a)/2));for(let I of[-1,1])r.add(C(.25,.28,l,.06),Ht.stone,M(c+I*.9,.1,(o+a)/2));let u=new oe(new Ke(1.5,l).rotateX(-Math.PI/2),Do(4639168,[0,1],n,!1));u.position.set(c,.06,(o+a)/2),e.add(u);for(let I=0;I<34;I++){let B=I/34*Math.PI*2+de(I,3)*.1,X=1.02+.05*de(I,4),V=.18+.2*de(I,5);r.add(new wn(1,0).scale(V*1.3,V*.7,V),Ht.stone,M(t.cx+Math.cos(B)*t.rx*X,.05,t.cz+Math.sin(B)*t.rz*X,0,B,0))}let d=t.cx+t.rx*.55,h=t.cz+t.rz+1.2,f=t.cz+.8;r.add(C(1.3,.1,h-f,.02),Ht.wood,M(d,.32,(h+f)/2));for(let I=f;I<=h+1e-6;I+=1.2)for(let B of[-1,1])r.add(re(.05,.6,8),Ht.wood,M(d+B*.6,.1,I)),r.add(re(.035,.75,8),Ht.wood,M(d+B*.6,.72,I));for(let I of[-1,1])r.add(C(.06,.06,h-f,.01),Ht.wood,M(d+I*.6,1.08,(h+f)/2));r.add(C(2.4,.1,1.8,.02),Ht.wood,M(d,.32,f-.6)),r.add(C(1.6,.08,.45,.02),Ht.wood,M(t.cx-4,.45,t.cz+t.rz+2.2));for(let I of[-1,1])r.add(C(.08,.45,.4,.02),Ht.dark,M(t.cx-4+I*.7,.22,t.cz+t.rz+2.2));r.add(re(.05,1.4,8),Ht.wood,M(c+1.6,.7,a-.6)),r.add(C(1.1,.6,.06,.03),Ht.white,M(c+1.6,1.45,a-.6));let p=new vt(.018,.025,1,5),y=420,g=new _t(p,Ht.reed,y),m=new _t(new vt(.045,.045,.22,6),Ht.reedHead,y),v=new be,b=new yt,_=new Qt;for(let I=0;I<y;I++){let X=Math.floor(de(I,11)*14)/14*Math.PI*2+.35+(de(I,12)-.5)*.28,V=.86+.16*de(I,13),Q=t.cx+Math.cos(X)*t.rx*V,se=t.cz+Math.sin(X)*t.rz*V,le=.9+.8*de(I,14);b.setFromEuler(_.set((de(I,15)-.5)*.25,0,(de(I,16)-.5)*.25)),v.compose(new x(Q,le/2,se),b,new x(1,le,1)),g.setMatrixAt(I,v),v.compose(new x(Q,le+.05,se),b,new x(1,de(I,17)<.5?1:.001,1)),m.setMatrixAt(I,v)}let R=30,S=new _t(new Mn(.32,14,.4,Math.PI*2-.4).rotateX(-Math.PI/2),Ht.pad,R),L=new _t(new wn(.11,0),Ht.flower,R);for(let I=0;I<R;I++){let B=de(I,21)*Math.PI*2,X=.25+.55*Math.sqrt(de(I,22)),V=t.cx-2+Math.cos(B)*t.rx*.6*X,Q=t.cz+Math.sin(B)*t.rz*.7*X,se=.8+.6*de(I,23);v.compose(new x(V,.035,Q),b.setFromEuler(_.set(0,de(I,24)*6.28,0)),new x(se,1,se)),S.setMatrixAt(I,v),v.compose(new x(V+.05,.08,Q),b,new x(de(I,25)<.4?1:.001,1,1)),L.setMatrixAt(I,v)}let P=[];for(let I=0;I<18;I++){let B=I/18*Math.PI*2+de(I,31)*.2;if(Math.sin(B)<-.55&&Math.abs(Math.cos(B))<.45)continue;let X=1.35+.25*de(I,32);P.push([t.cx+Math.cos(B)*(t.rx+2.5)*X*.85,t.cz+Math.sin(B)*(t.rz+2)*X*.9,.8+.5*de(I,33)])}P.forEach(([I,B,X],V)=>{r.add(re(.12*X,1.4*X,8),Ht.trunk,M(I,.7*X,B));let Q=[Ht.leafA,Ht.leafB,Ht.leafC][V%3];r.add(new wn(1,1).scale(1.1*X,1*X,1.1*X),Q,M(I,1.9*X,B)),r.add(new wn(1,1).scale(.75*X,.7*X,.75*X),Q,M(I+.45*X,2.5*X,B-.2*X))});let w=[],T=[[t.cx-t.rx*.7,t.cz-.6,.6],[t.cx+2.5,t.cz+t.rz*.75,-2.2],[t.cx-3.5,t.cz+t.rz*.85,2.6]];for(let[I,B,X]of T){let V=new we,Q=new Pe;Q.add(new rt(1,12,8).scale(.32,.2,.18),Ht.white,M(0,.75,0));for(let Ce of[-.06,.06])Q.add(re(.012,.6,5),Ht.beak,M(-.02,.3,Ce));Q.build(V,!0,!0);let se=new we;se.position.set(.22,.82,0);let le=new Pe;le.add(re(.035,.42,6),Ht.white,M(.05,.2,0,0,0,-.25)),le.add(new rt(.075,10,8),Ht.white,M(.1,.42,0)),le.add(new Wi(.03,.22,6).rotateZ(-Math.PI/2),Ht.beak,M(.25,.42,0)),le.build(se,!0,!0),V.add(se),V.position.set(I,0,B),V.rotation.y=X,e.add(V),w.push(V)}let H=[];for(let I=0;I<4;I++){let B=new we,X=new Pe;X.add(new rt(1,10,8).scale(.24,.12,.15),Ht.duck,M(0,.08,0)),X.add(new rt(.08,10,8),Ht.duckHead,M(.18,.2,0)),X.add(new Wi(.03,.09,6).rotateZ(-Math.PI/2),Ht.beak,M(.28,.19,0)),X.build(B,!0,!0),e.add(B),H.push(B)}let N=new St;N.setAttribute("position",new ze([0,0,0,-.3,.07,.28,0,0,.1,0,0,0,0,0,.1,.3,.07,.28],3));let U=new In({color:4871544,side:en}),F=Array.from({length:5},()=>{let I=new oe(N,U);return e.add(I),I});r.build(e,!0,!0);for(let I of[g,m,S,L])I.castShadow=!0,I.receiveShadow=!0,I.instanceMatrix.needsUpdate=!0,e.add(I);return{group:e,anchor:new x(t.cx-1.5,1.6,t.cz-.5),framePoints:[[t.cx-t.rx-2,0,t.cz],[t.cx+t.rx+2,0,t.cz],[t.cx,0,t.cz-t.rz-1],[t.cx,0,t.cz+t.rz+2.5],[t.cx-t.rx,3,t.cz],[t.cx+t.rx,3,t.cz]],update(I){n.value=I,w.forEach((B,X)=>{let V=B.children[B.children.length-1],Q=Math.max(0,Math.sin(I*.9+X*2.1));V.rotation.z=-.9*Q*Q*Q}),H.forEach((B,X)=>{let V=.18+.05*X,Q=I*V+X*1.7,se=t.rx*(.35+.1*X),le=t.rz*(.3+.08*X);B.position.set(t.cx+1+Math.cos(Q)*se,.02+.01*Math.sin(I*3+X),t.cz+Math.sin(Q)*le),B.rotation.y=-Math.atan2(Math.cos(Q)*le,-Math.sin(Q)*se)}),F.forEach((B,X)=>{let V=I*(.3+.07*X)+X*1.3,Q=5+2*de(X,41);B.position.set(t.cx+Q*Math.cos(V),6+X*.5+.3*Math.sin(I*1.5+X),t.cz+.6*Q*Math.sin(V)),B.rotation.set(0,-V,.25*Math.sin(I*6+X))})}}}function UE(i){switch(i.id){case"homog":return Wp(i);case"coag":return Xp(i);case"floc":return qp(i);case"clar1":return Zp(i);case"clar2":return $p(i);case"inter":return Kp(i);case"pump":return Gd(i);case"uasb1":case"uasb2":case"uasb3":case"uasb4":return Jp(i.id,i);case"mbbr":return jp(i);case"filtro":return Qp(i);case"discharge":return e0(i);case"sludge":return t0(i);case"screen":return n0(i);case"dosC":return r0(i);case"dosF":return s0(i);case"pumpB":return Gd(i,{cabinet:!0});case"flare":return a0(i);case"thick":return c0(i);case"control":return l0(i)}}function BE(i){let e=i.discharge.anchors.out;return{inlet:new x(fn[0],.25,fn[1]),outfall:new x(e.x,e.y,Ge.maxZ+.9)}}function v0(){let i=new we;i.name="plant";let e=new we;e.name="units";let t={};for(let v of hi){let b=UE(v);t[v.id]=b,e.add(b.root)}let{group:n,footprints:r}=Gp(),s=BE(t),o=(v,b,_)=>{if(v==="world")return _.clone();let R=t[v].anchors[b];if(!R)throw new Error(`Puerto inexistente: ${v}.${b}`);return R.clone()},a=v=>[o(v.from,v.fromPort,s.inlet),o(v.to,v.toPort,s.outfall)],c=[...Object.values(t).map(v=>v.footprint),...r.map(v=>v.footprint)],l=Np(bi,a,c),u=m0(),d=p0(),h=x0(),f=y0(s.outfall);i.add(e,l.root,n,u,d.root,h.group,f.group),i.userData.siteLights=u;let p=new Kn;for(let v of Object.values(t))p.expandByPoint(new x(...v.footprint.min)),p.expandByPoint(new x(...v.footprint.max));for(let v of Object.values(l.pipes))for(let b of v.points)p.expandByPoint(b);let y={min:p.min.toArray(),max:p.max.toArray()},g=Object.values(t),m=Object.values(l.pipes);return{root:i,units:t,pipes:l.pipes,bounds:y,layers:{pipes:l.root,structures:n},worldPorts:s,actors:d,landfill:h,wetland:{anchor:f.anchor,framePoints:f.framePoints},update(v){h.update(v),f.update(v);for(let b of g)b.update(v);for(let b of m)b.update(v);d.update(v)}}}function NE(i,e){let t=0,n=[];for(let s=1;s<i.length;s++){let o=i[s].distanceTo(i[s-1]);n.push(o),t+=o}let r=Math.max(0,Math.min(1,e))*t;for(let s=0;s<n.length;s++){if(r<=n[s]||s===n.length-1)return i[s].clone().lerp(i[s+1],n[s]>0?Math.min(1,r/n[s]):1);r-=n[s]}return i[i.length-1].clone()}function eh(){let i=new we;i.name="stub-plant";let e={};for(let a of hi){let c=new we,l=a.size.d??a.size.w??1,u=a.size.d??a.size.l??1,d=a.size.h,h=new tt({color:8161935,roughness:.8,metalness:.1}),f=a.size.d?new vt(l/2,l/2,d,28):new Ot(l,d,u),p=new oe(f,h);p.position.set(a.pos[0],a.base+d/2,a.pos[1]),c.add(p),i.add(c);let y=a.base+d,g={label:new x(a.pos[0],y+.6,a.pos[1]),focus:new x(a.pos[0],a.base+d/2,a.pos[1]),core:new x(a.pos[0],a.base+d/2,a.pos[1]),in:new x(a.pos[0]-l/2,a.base+Math.min(d*.6,1),a.pos[1]),out:new x(a.pos[0]+l/2,a.base+Math.min(d*.6,1),a.pos[1]),sludge:new x(a.pos[0],.25,a.pos[1]-u/2)},m=!1,v=!1,b=()=>{h.color.set(v?10470600:m?9412772:6977403),h.emissive.set(v?797230:0)};e[a.id]={id:a.id,root:c,anchors:g,radius:Math.max(l,u,d)/2,footprint:{min:[a.pos[0]-l/2,0,a.pos[1]-u/2],max:[a.pos[0]+l/2,y,a.pos[1]+u/2]},pickTargets:[p],setActive(_){m=_,b()},setSelected(_){v=_,b()},setFlowLevel(){},setInternalMotion(){},setStatus(_){},update(){}}}let t={},n=new we;i.add(n);for(let a of bi){let c=a.from==="world"?new x(fn[0],1,fn[1]):e[a.from].anchors[a.fromPort]??e[a.from].anchors.out,l=a.to==="world"?new x(e.discharge.anchors.out.x-.5,.4,Ge.maxZ-.5):e[a.to].anchors[a.toPort]??e[a.to].anchors.in,u=(c.x+l.x)/2,d=[c.clone(),new x(u,c.y,c.z),new x(u,c.y,l.z),new x(u,l.y,l.z),l.clone()].filter((v,b,_)=>b===0||v.distanceTo(_[b-1])>1e-4),h=new we,f=new tt({color:pr[a.kind].pipe,roughness:.6});for(let v=1;v<d.length;v++){let b=d[v].distanceTo(d[v-1]),_=new oe(new vt(.07,.07,b,8),f);_.position.copy(d[v]).add(d[v-1]).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new x(0,1,0),d[v].clone().sub(d[v-1]).normalize()),h.add(_)}n.add(h);let p=0;for(let v=1;v<d.length;v++)p+=d[v].distanceTo(d[v-1]);let y=0,g=!1,m=()=>{f.color.set(y>=1?pr[a.kind].fluid:pr[a.kind].pipe),f.emissive.set(g?1916740:0)};t[a.id]={id:a.id,kind:a.kind,from:a.from,to:a.to,root:h,points:d,length:p,pointAt:v=>NE(d,v),setFlow(){},setFront(v){y=v,m()},setHighlighted(v){g=v,m()},setVisible(v){h.visible=v},update(){}}}let r=new we;i.add(r);let s=new oe(new Ot(Ge.maxX-Ge.minX,.1,Ge.maxZ-Ge.minZ),new tt({color:3818054}));s.position.set((Ge.maxX+Ge.minX)/2,-.05,(Ge.maxZ+Ge.minZ)/2),r.add(s);let o=th();return i.add(o.root),{root:i,units:e,pipes:t,bounds:{min:[Ge.minX,0,Ge.minZ],max:[Ge.maxX,4,Ge.maxZ]},layers:{pipes:n,structures:r},actors:o,update(){}}}function b0(i){let e=0,t=[0];for(let r=1;r<i.length;r++)e+=i[r].distanceTo(i[r-1]),t.push(e);let n=r=>{let s=Math.max(0,Math.min(1,r))*e,o=1;for(;o<i.length-1&&t[o]<s;)o++;return{i:o,k:t[o]>t[o-1]?(s-t[o-1])/(t[o]-t[o-1]):1}};return{points:i,length:e,pointAt(r){let{i:s,k:o}=n(r);return i[s-1].clone().lerp(i[s],Math.min(1,Math.max(0,o)))},headingAt(r){let{i:s}=n(r),o=i[s].clone().sub(i[s-1]);return Math.atan2(o.x,o.z)}}}var FE=(i,e,t)=>new x(i,e,t),E0=(i,e=0)=>i.map(([t,n])=>FE(t,e,n));function zE(i,e){if(i.length<3||e<=0)return i;let t=[i[0].clone()];for(let n=1;n<i.length-1;n++){let r=i[n-1],s=i[n],o=i[n+1],a=s.clone().sub(r),c=o.clone().sub(s),l=a.length(),u=c.length();a.normalize(),c.normalize();let d=Math.acos(Math.max(-1,Math.min(1,a.dot(c))));if(d<.001){t.push(s.clone());continue}let h=Math.min(e*Math.tan(d/2),l*.48,u*.48),f=s.clone().addScaledVector(a,-h),p=s.clone().addScaledVector(c,h),y=8;for(let g=0;g<=y;g++){let m=g/y;t.push(f.clone().multiplyScalar((1-m)*(1-m)).addScaledVector(s,2*m*(1-m)).addScaledVector(p,m*m))}}return t.push(i[i.length-1].clone()),t.filter((n,r,s)=>r===0||n.distanceTo(s[r-1])>1e-4)}function OE(){let i=pt.loop,e=pt.chemStop,t=pt.sludgeStop,n=pt.z,r=pt.gate[0]-5,s=n+2,o={"chem-arrive":[[r,n],[e.x,e.z]],"chem-leave":[[e.x,e.z],[i.eastX,n],[i.eastX,i.southZ],[i.westX,i.southZ],[i.westX,s],[r,s]],"sludge-arrive":[[r,n],[i.eastX,n],[i.eastX,i.southZ],[t.x,t.z]],"sludge-leave":[[t.x,t.z],[i.westX,i.southZ],[i.westX,s],[r,s]],"w-operator":[[-23,-4.1],[-23,-4.9],[-14.6,-4.9]],"w-unload":[[-24.5,-.35],[-24.5,.4],[-26.6,.4],[-26.6,1.6]],"w-bed-a":[[-21,7.6],[-21,9.3],[-20,9.3],[-20,9.9]],"w-bed-b":[[-23.2,7.2],[-23.2,9.3],[-22.4,9.3]],"w-mbbr":[[13.5,-1.2],[16.6,-1.2]],"w-patrol":[[-6,-11.5],[18,-11.5],[18,-3],[-6,-3],[-6,-11.5]],"w-screen":[[-29.6,-9],[-27,-9],[-27,-10.5]]},a={};for(let[c,l]of Object.entries(o))a[c]=b0(zE(E0(l),c.includes("arrive")||c.includes("leave")?4:.6));return a["w-uasb"]=b0(E0([[-9.2,-.9],[4,-.9]],3.6)),a}function VE(i,e){let t=new we;t.name=i;let n=new tt({color:e,roughness:.7}),r=new oe(new fr(.2,.9,4,10),n);r.position.y=.65;let s=new oe(new rt(.14,12,8),new tt({color:15258474}));s.position.y=1.5;let o=new oe(new Ot(.08,.08,.2),n);return o.position.set(0,1.45,.16),t.add(r,s,o),{id:i,root:t,setPose(a,c){t.position.copy(a),t.rotation.y=c},setAction(a,c,l){r.position.y=.65+.04*Math.abs(Math.sin(Math.PI*2*l))},setVisible(a){t.visible=a}}}function _0(i){let e=new we;e.name=`truck-${i}`;let t=7,n=new oe(new Ot(2.3,2.2,5),new tt({color:i==="chemical"?13685974:9071162}));n.position.set(0,1.5,1.2);let r=new oe(new Ot(2.3,2.4,1.8),new tt({color:3104122}));r.position.set(0,1.5,4.7);let s=new oe(new Ot(2.1,1,4.8),new tt({color:i==="chemical"?15790312:3811866})),o=new oe(new rt(.15,8,6),new In({color:16752672}));return o.position.set(0,2.85,4.7),e.add(n,r,s,o),{id:`truck-${i}`,kind:i,root:e,length:t,setPose(a,c){e.position.copy(a),e.rotation.y=c},setLoad(a){s.visible=a>.01,s.scale.y=Math.max(.01,a),s.position.set(0,2.6+.5*a,1.2)},setWork(a){},setBeacon(a,c){o.visible=a&&Math.sin(c*12)>0},setVisible(a){e.visible=a}}}function th(){let i=new we;i.name="stub-actors";let t=["w-operator","w-uasb","w-bed-a","w-bed-b","w-unload","w-mbbr","w-patrol","w-screen"].map((l,u)=>VE(l,[14711340,14271036,3968985][u%3]));for(let l of t)i.add(l.root);let n={chemical:_0("chemical"),sludge:_0("sludge")};i.add(n.chemical.root,n.sludge.root);let r=new Ot(1,1,1.2),s=new tt({color:15658730}),o=new oe(r,s);o.scale.setScalar(.8),i.add(o);let a=[];for(let l=0;l<6;l++){let u=new oe(r,s);u.position.set(-21.6+l%3*1.1,.5,-.25),u.visible=!1,a.push(u),i.add(u)}let c=null;return{root:i,workers:t,trucks:n,routes:OE(),setCarriedTote(l){c=l},setStockedTotes(l){a.forEach((u,d)=>{u.visible=d<l})},update(){let l=t.find(u=>u.id===c);o.visible=!!l&&l.root.visible,l&&(o.position.copy(l.root.position),o.position.y+=.45,o.position.x+=.7*Math.sin(l.root.rotation.y),o.position.z+=.7*Math.cos(l.root.rotation.y))}}}var un=(i,e=0,t=1)=>i<e?e:i>t?t:i,ti=(i,e,t)=>i+(e-i)*t;function br(i,e,t){return t<=e?i>=t?1:0:un((i-e)/(t-e))}function Xt(i,e,t){let n=br(i,e,t);return n*n*(3-2*n)}function M0(i,e,t){let n=br(i,e,t);return n*n*n*(n*(n*6-15)+10)}var w0=i=>{let e=un(i);return e*e*(3-2*e)};function Er(i){let e=Math.max(0,i),t=Math.floor(e/60),r=(e-t*60).toFixed(1).padStart(4,"0");return`${String(t).padStart(2,"0")}:${r}`}function gn(i,e,t){let n=i.toFixed(e);return t==="es"?n.replace(".",","):n}var kn=50,Pc=["w-operator","w-uasb","w-bed-a","w-bed-b","w-unload","w-mbbr","w-patrol","w-screen"],Lc=3,GE=4,k0=1.35,H0=1.2,WE=1.05,XE=.48,T0=4.2;function qE(i,e){let t=i.length,n=e*t;if(t<=0)return i.headingAt(e);let r=i.pointAt(e),s=i.pointAt(Math.min(1,(n+T0)/t)),o=s.x-r.x,a=s.z-r.z,c=t-n,l=B0(i,Math.min(1,e),1);if(o*o+a*a<1e-6)return l;let u=Math.atan2(o,a),d=un(c/T0);return Kr(rh(l,u,d))}var $r={sludge:{arrive:{route:"sludge-arrive",t0:.05,t1:13.6},work:[14,14.8,36.4,37.2],leave:{route:"sludge-leave",t0:37.4,t1:46}},chemical:{arrive:{route:"chem-arrive",t0:2.6,t1:13.8},work:[14.1,15,38.2,39],leave:{route:"chem-leave",t0:39.2,t1:49.8}}},YE=.85,S0=[15,36.2];function nh(i,e){let t=$r[i];return e<t.arrive.t0||e>=t.leave.t1?"away":e<t.arrive.t1?"enroute":e>=t.leave.t0?"leaving":e>=t.work[1]&&e<t.work[2]?i==="chemical"?"unloading":"loading":"bay"}function D0(i){return{personnel:Pc.length,trucks:{chemical:nh("chemical",i),sludge:nh("sludge",i)}}}var U0=[{t:$r.chemical.arrive.t1,id:"truck-chem",level:"info",text:{es:"Cami\xF3n de qu\xEDmicos en bah\xEDa",en:"Chemical truck at the bay"}},{t:$r.chemical.work[1],id:"truck-chem-unload",level:"info",text:{es:`Entrega de coagulante \xB7 ${Lc} IBC`,en:`Coagulant delivery \xB7 ${Lc} IBC`}},{t:$r.sludge.work[1],id:"truck-sludge",level:"info",text:{es:"Cami\xF3n de lodos en carga",en:"Sludge truck loading"}},{t:$r.sludge.leave.t0,id:"truck-sludge-out",level:"info",text:{es:"Cami\xF3n de lodos sale con torta",en:"Sludge truck leaves with cake"}}];function R0(i,e=.22){let t=un(i),n=1/(1-e);return t<e?n*t*t/(2*e):t>1-e?1-n*(1-t)*(1-t)/(2*e):n*(e/2+(t-e))}var Ve=i=>ZE(i);function ZE(i){return Ue[i].pos}function $E(){let i=[pt.chemStop.x,pt.chemStop.z],e=[{act:"idle",until:$r.chemical.work[1]+.1,face:i}];for(let t=0;t<Lc;t++)e.push({walk:{far:Ve("control")},speed:H0}),e.push({act:"operate",dur:.8,face:"keep"}),e.push({walk:{near:Ve("control")},carry:!0,speed:WE}),e.push({act:"idle",dur:.5,face:"keep"});return e.push({act:"idle",until:kn,face:i}),{"w-screen":{route:"w-screen",start:{near:Ve("screen")},steps:[{act:"idle",until:1,face:Ve("screen")},{act:"rake",until:6.6,face:Ve("screen")},{walk:{far:Ve("screen")}},{act:"inspect",dur:3,face:"keep"},{walk:{near:Ve("screen")}},{act:"rake",until:21,face:Ve("screen")},{act:"idle",until:26,face:Ve("screen")},{walk:{far:Ve("screen")}},{act:"inspect",dur:4,face:"keep"},{walk:{near:Ve("screen")}},{act:"rake",until:44,face:Ve("screen")},{act:"idle",until:kn,face:Ve("screen")}]},"w-operator":{route:"w-operator",start:{near:Ve("control")},steps:[{act:"idle",dur:.5,face:Ve("dosC")},{walk:{near:Ve("dosC")},arriveBy:6},{act:"operate",until:8.2,dur:1.8,face:Ve("dosC")},{walk:{near:Ve("dosF")}},{act:"operate",until:10.8,dur:2.2,face:Ve("dosF")},{walk:{near:Ve("coag")}},{act:"inspect",dur:4,face:Ve("coag")},{walk:{near:Ve("control")}},{act:"idle",until:30,face:Ve("dosC")},{walk:{near:Ve("dosF")}},{act:"inspect",dur:3,face:Ve("dosF")},{walk:{near:Ve("control")}},{act:"idle",until:kn,face:Ve("dosC")}]},"w-unload":{route:"w-unload",start:{near:Ve("control")},steps:e},"w-bed-a":{route:"w-bed-a",start:{near:Ve("sludge")},steps:[{act:"shovel",until:12,face:Ve("sludge")},{repeat:[{walk:{far:Ve("sludge")}},{act:"shovel",dur:2.4,face:"keep"},{walk:{near:Ve("sludge")}},{act:"shovel",dur:3.6,face:Ve("sludge")}],until:37.5,max:4},{act:"shovel",until:kn,face:Ve("sludge")}]},"w-bed-b":{route:"w-bed-b",start:{near:Ve("sludge")},steps:[{act:"rake",until:11,face:Ve("sludge")},{walk:{far:Ve("sludge")}},{act:"inspect",dur:3,face:"keep"},{walk:{near:Ve("sludge")}},{act:"rake",until:30,face:Ve("sludge")},{walk:{far:Ve("sludge")}},{act:"inspect",dur:2.5,face:"keep"},{walk:{near:Ve("sludge")}},{act:"rake",until:kn,face:Ve("sludge")}]},"w-uasb":{route:"w-uasb",start:"a",steps:[{act:"idle",dur:1.5,face:Ve("uasb1")},{walk:{near:Ve("uasb2")},arriveBy:24},{act:"sample",until:30,face:Ve("uasb2")},{walk:{near:Ve("uasb3")}},{act:"inspect",dur:2,face:Ve("uasb3")},{walk:"a"},{act:"idle",until:kn,face:Ve("uasb1")}]},"w-mbbr":{route:"w-mbbr",start:{near:Ve("mbbr")},steps:[{act:"inspect",until:12,face:Ve("mbbr")},{act:"idle",dur:1,face:Ve("mbbr")},{walk:{far:Ve("mbbr")},arriveBy:33},{act:"inspect",until:37,face:"keep"},{walk:{near:Ve("mbbr")}},{act:"inspect",until:kn,face:Ve("mbbr")}]},"w-patrol":{route:"w-patrol",loop:!0,speed:.8,dwell:1.2}}}var ih=Math.PI*2,Kr=i=>{let e=(i+Math.PI)%ih;return e<0&&(e+=ih),e-Math.PI},rh=(i,e,t)=>i+Kr(e-i)*t;function KE(i,e,t,n=!1){let r=0,s=n?-1/0:1/0,o=400;for(let a=0;a<=o;a++){let c=a/o,l=i.pointAt(c),u=(l.x-e)**2+(l.z-t)**2;(n?u>s:u<s)&&(s=u,r=c)}return r}function A0(i,e){if(typeof e=="number")return un(e);if(e==="a")return 0;if(e==="b")return 1;if("near"in e)return KE(i,e.near[0],e.near[1]);let t=i.pointAt(0),n=i.pointAt(1),r=(t.x-e.far[0])**2+(t.z-e.far[1])**2,s=(n.x-e.far[0])**2+(n.z-e.far[1])**2;return r>=s?0:1}function JE(i,e,t,n){if(!t||t==="keep")return n;let r=i.pointAt(e),s=t[0]-r.x,o=t[1]-r.z;return s*s+o*o<1e-4?n:Math.atan2(s,o)}function B0(i,e,t){let n=i.length>0?t/i.length:0,r=i.pointAt(un(e-n)),s=i.pointAt(un(e+n)),o=s.x-r.x,a=s.z-r.z;return o*o+a*a<1e-8?i.headingAt(un(e)):Math.atan2(o,a)}function Uo(i,e,t){let n=B0(i,e,.55);return t?n:Kr(n+Math.PI)}function jE(i,e,t){let n=[],r=0,s=A0(t,e.start),o=t.headingAt(s),a=0,c=0,l=!0,u=d=>{if("repeat"in d){for(let h=0;h<(d.max??99);h++){let f={n:n.length,t:r,u:s,h:o,gait:a,dist:c,first:l};for(let p of d.repeat)u(p);if(r>d.until){n.length=f.n,{t:r,u:s,h:o,gait:a,dist:c,first:l}=f;break}}return}if("walk"in d){let h=A0(t,d.walk),f=Math.abs(h-s)*t.length;if(f<.001)return;let p=f/(d.speed??H0);if(d.arriveBy!=null&&r+p<d.arriveBy){let g=n[n.length-1],m=d.arriveBy-p;g&&g.kind==="act"&&(g.t1=m),r=m}let y=Math.max(1,Math.round(f/k0));n.push({kind:"walk",t0:r,t1:r+p,u0:s,u1:h,dist:f,carry:!!d.carry,g0:a,cycles:y,d0:c,h0:o}),r+=p,a+=y,c+=f,o=Uo(t,h,h>s),s=h}else{let h=Math.max(r+(d.dur??0),d.until??0);if(h<=r)return;let f=JE(t,s,d.face,o);n.push({kind:"act",t0:r,t1:h,u:s,action:d.act,h0:l?f:o,h1:f,g:a,d:c}),r=h,o=f}l=!1};for(let d of e.steps)u(d);return{id:i,route:e.route,segs:n,end:r}}function QE(i,e,t){let n=t.pointAt(0),r=t.pointAt(1),s=n.distanceTo(r)<.3,o=t.length,a=s?1:2,c=a*(o/e.speed+e.dwell),l=Math.max(1,Math.round(kn/c)),u=kn/l/a,d=Math.max(.5,u-e.dwell),h=Math.max(1,Math.round(o/k0));return{id:i,route:e.route,segs:[],end:kn,patrol:{laps:l,walkT:d,dwell:u-d,closed:s,cyclesPerLeg:h,legLen:o}}}var C0=new WeakMap;function e_(i){let e=C0.get(i);if(e)return e;let t=$E(),n=[];for(let r of Pc){let s=t[r],o=i[s.route];!o||!(o.length>0)||n.push(s.loop?QE(r,s,o):jE(r,s,o))}return e={workers:n,routes:i},C0.set(i,e),e}var N0={idle:50/10,walk:1,carry:1,inspect:50/12,shovel:50/32,rake:50/28,operate:50/20,sample:50/16},kc=i=>i-Math.floor(i),Hc=i=>[i.x,i.y,i.z];function t_(i,e,t){if(i.patrol)return n_(i,e,t);let n=i.segs,r=n[n.length-1];for(let a of n)if(t<a.t1){r=a;break}if(r.kind==="walk"){let a=r.t1>r.t0?un((t-r.t0)/(r.t1-r.t0)):1,c=r.u0+(r.u1-r.u0)*a,l=r.u1>r.u0,u=Uo(e,c,l),d=Kr(r.h0-Uo(e,r.u0,l)),h=Kr(u+d*(1-Xt(t,r.t0,r.t0+.45))),f=r.g0+r.cycles*a;return{id:i.id,visible:!0,pos:Hc(e.pointAt(c)),heading:h,action:r.carry?"carry":"walk",phase:kc(f),gait:f,dist:r.d0+r.dist*a,moving:a>0&&a<1,carrying:r.carry}}let s=Kr(rh(r.h0,r.h1,Xt(t,r.t0,r.t0+.6))),o=kc(t/N0[r.action]);return{id:i.id,visible:!0,pos:Hc(e.pointAt(r.u)),heading:s,action:r.action,phase:o,gait:r.g,dist:r.d,moving:!1,carrying:!1}}function n_(i,e,t){let n=i.patrol,r=n.walkT+n.dwell,s=t+n.walkT*.5,o=Math.floor(s/kn),a=s-o*kn,c=Math.round(kn/r),l=Math.min(Math.floor(a/r),Math.round(kn/r)-1),u=a-l*r,d=n.closed||l%2===0,h=un(u/n.walkT),f=d?h:1-h,p=(o*c+l)*n.cyclesPerLeg+n.cyclesPerLeg*h,y=u<n.walkT,g=Uo(e,f,d),m=n.closed||(l+1)%2===0,v=Uo(e,m?0:1,m),b=y?g:Kr(rh(g,v,Xt(u,n.walkT+.1,r-.1)));return{id:i.id,visible:!0,pos:Hc(e.pointAt(f)),heading:b,action:y?"walk":"inspect",phase:kc(y?p:t/N0.inspect),gait:p,dist:(o*c+l+h)*n.legLen,moving:y&&h>0&&h<1,carrying:!1}}function I0(i,e,t,n){let r=$r[i],s=e[r.arrive.route],o=e[r.leave.route],a=nh(i,t),c=i==="sludge"?0:Xt(t,r.work[0],r.work[1])*(1-Xt(t,r.work[2],r.work[3])),l=i==="chemical"?n/GE:YE*Xt(t,S0[0],S0[1]),u={kind:i,work:c,load:l,phase:a};if(!s||!o)return{...u,visible:!1,pos:[0,-50,0],heading:0,wheelTurns:0,beacon:!1,route:null,dist:0};let d,h,f,p;t<r.leave.t0?(h=R0((t-r.arrive.t0)/(r.arrive.t1-r.arrive.t0),.18),d=s,p=r.arrive.route,f=h*s.length):(h=R0((t-r.leave.t0)/(r.leave.t1-r.leave.t0),.18),d=o,p=r.leave.route,f=s.length+h*o.length);let y=a==="enroute"||a==="leaving";return{...u,visible:a!=="away",pos:Hc(d.pointAt(h)),heading:qE(d,h),wheelTurns:f/(ih*XE),beacon:y,route:a==="away"?null:p,dist:f}}var F0=null;function z0(i){F0=i}function O0(i,e){let t=un(i,0,kn),n=e??F0??{},r=e_(n),s=[],o=null,a=0,c=0;for(let u of r.workers){let d=t_(u,n[u.route],t);if(s.push(d),u.id==="w-unload")for(let h of u.segs)h.kind==="walk"&&h.carry&&(t>=h.t0&&a++,t>=h.t1&&c++,t>=h.t0&&t<h.t1&&(o=u.id))}let l=Lc-a;return{t,workers:s,trucks:{chemical:I0("chemical",n,t,l),sludge:I0("sludge",n,t,l)},carriedTote:o,stockedTotes:c,totesOnTruck:l}}var P0=new x,L0=new WeakMap;function i_(i){let e=L0.get(i);if(e)return e;e=new Map;let t=new Set;Pc.forEach(r=>{let s=i.workers.findIndex(o=>o.id===r||`w-${o.id}`===r||o.id===r.slice(2));s>=0&&(e.set(r,s),t.add(s))});let n=0;return Pc.forEach(r=>{if(!e.has(r)){for(;t.has(n);)n++;n<i.workers.length&&(e.set(r,n),t.add(n))}}),L0.set(i,e),e}function V0(i,e){let t=i_(i),n=new Set;for(let s of e.workers){let o=t.get(s.id);if(o==null)continue;let a=i.workers[o];n.add(o),a.setVisible(s.visible),a.setPose(P0.set(s.pos[0],s.pos[1],s.pos[2]),s.heading),a.setAction(s.action,s.phase,s.gait)}i.workers.forEach((s,o)=>{n.has(o)||s.setVisible(!1)});for(let s of["chemical","sludge"]){let o=i.trucks[s],a=e.trucks[s];o&&(o.setVisible(a.visible),o.setPose(P0.set(a.pos[0],a.pos[1],a.pos[2]),a.heading,a.wheelTurns),o.setLoad(a.load),o.setWork(a.work),o.setBeacon(a.beacon,e.t))}let r=e.carriedTote?t.get(e.carriedTote):void 0;i.setCarriedTote(r!=null?i.workers[r].id:null),i.setStockedTotes(e.stockedTotes),i.update(e.t)}function sh(i){return Math.max(0,Math.min(1,(.8-i)/.4))}var W0=16,X0=48,q0=i=>1-.5*Xt(i,W0,X0),oh={t0:W0,t1:X0,fixturesOn:(()=>{for(let i=0;i<=5e3;i++){let e=i/100;if(sh(q0(e))>.02)return Math.round(e*10)/10}return 50})()},G0={day:1,dusk:.5,night:0};function Y0(i,e){if(e!=="story"){let r=sh(G0[e]);return{mode:e,preset:e,daylight:G0[e],fixtures:r>.02,fixturesLevel:r}}let t=q0(i),n=sh(t);return{mode:e,preset:t>.75?"day":"dusk",daylight:t,fixtures:i>=oh.fixturesOn,fixturesLevel:n}}function Z0(i){return i==="day"||i==="dusk"||i==="night"||i==="story"?i:null}function $0(i){return i==="day"?"dusk":i==="dusk"?"night":"day"}var Dc=16/9,Zi={x0:364,x1:1556,y0:92,y1:840},K0=1920,J0=1080,r_=(()=>{let i=Zi.x0/K0*2-1,e=Zi.x1/K0*2-1,t=1-Zi.y1/J0*2,n=1-Zi.y0/J0*2;return{bx:(i+e)/2,by:(t+n)/2,hx:(e-i)/2,hy:(n-t)/2}})(),j0=i=>{let e=Math.hypot(i[0],i[1],i[2]);return[i[0]/e,i[1]/e,i[2]/e]},Q0=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Yi=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Jr={aspect:Dc,safe:r_};function em(i,e){Jr={aspect:i,safe:e},ah=new WeakMap,ch=new WeakMap}var ni=(()=>{let i=j0(fi),e=[-i[0],-i[1],-i[2]],t=j0(Q0(e,[0,1,0])),n=Q0(t,e);return{dir:i,fwd:e,right:t,up:n}})(),s_=hi.map(i=>i.id),Bo=["uasb1","uasb2","uasb3","uasb4"],tm=[{t:0,units:[],fov:30,minDist:22,extra:["landfill"]},{t:.6,units:[],fov:30,minDist:22,extra:["landfill"]},{t:3.2,units:["screen"],fov:29,minDist:18,extra:["pond"]},{t:4.6,units:["screen","homog","dosC","coag"],fov:28,minDist:17},{t:7.4,units:["homog","dosC","dosF","coag","floc","clar1","control"],fov:28,minDist:17},{t:10,units:["floc","clar1","thick","sludge"],fov:27,minDist:17},{t:12.8,units:["clar1","thick","sludge","control"],fov:27,minDist:17,extra:["sludgeBay","chemBay"]},{t:14.4,units:["clar1","thick","sludge","control"],fov:27,minDist:17,extra:["sludgeBay","chemBay"]},{t:16.4,units:["clar1","inter","pump","pumpB"],fov:27,minDist:17},{t:18.4,units:["inter","pump","pumpB",...Bo],fov:28,minDist:18},{t:21,units:["pump",...Bo],fov:27,minDist:18},{t:23.8,units:[...Bo],fov:26,minDist:17},{t:26.6,units:[...Bo,"flare"],fov:27,minDist:17},{t:29.4,units:[...Bo,"clar2"],fov:26,minDist:17},{t:31.8,units:["uasb4","clar2","mbbr"],fov:27,minDist:17},{t:33.8,units:["clar2","mbbr"],fov:26,minDist:16},{t:36,units:["mbbr","filtro"],fov:27,minDist:17},{t:38.8,units:["mbbr","filtro","discharge"],fov:28,minDist:17},{t:41.6,units:["filtro","discharge"],fov:27,minDist:17},{t:44.4,units:["discharge"],fov:28,minDist:18,extra:["wetland"]},{t:45.2,units:["discharge"],fov:28,minDist:18,extra:["wetland"]},{t:48.6,units:"ALL",fov:31,minDist:20,wide:1.04,extra:["gate","wetland"]},{t:50,units:"ALL",fov:31,minDist:20,wide:1.04,extra:["gate","wetland"]}];function o_(i,e){if(i==="landfill"){let c=uc,l=2*c.tierH;return[[c.minX+6,0,c.maxZ+1.5],[c.maxX,0,c.maxZ+1.5],[c.minX+6,l+2,c.minZ+8],[c.maxX-4,l+2,c.minZ+8],[rn.maxX+1,0,rn.maxZ+1],[rn.maxX+1,.5,rn.minZ-1],[fn[0],.5,fn[1]]]}if(i==="wetland"){let c=dc;return[[c.cx-c.rx-1.5,0,c.cz],[c.cx+c.rx+1.5,0,c.cz],[c.cx,0,c.cz+c.rz+2.5],[c.cx,0,c.cz-c.rz],[c.cx-c.rx,3.2,c.cz-1],[c.cx+c.rx,3.2,c.cz-1]]}if(i==="pond")return[[rn.minX-3,0,rn.minZ-1],[rn.minX-3,0,rn.maxZ+3],[rn.maxX,1.5,rn.minZ-1],[fn[0],.5,fn[1]]];if(i==="gate")return[[pt.gate[0],.5,pt.gate[1]],[pt.gate[0],3.5,pt.gate[1]]];let t=e?.actors?.routes?.[i==="chemBay"?"chem-arrive":"sludge-arrive"],n,r=Math.PI/2;if(t){let c=t.pointAt(1);n=[c.x,c.y,c.z],r=t.headingAt(1)}else n=i==="chemBay"?[-18.5,0,1.6]:[-23.5,0,3.7];let s=Math.sin(r),o=Math.cos(r),a=[];for(let c of[-2,5.5])for(let l of[-1.3,1.3]){let u=n[0]+s*c+o*l,d=n[2]+o*c-s*l;a.push([u,0,d],[u,3.2,d])}return a}function nm(i,e){let t,n,r,s=e?.units?.[i];if(s&&s.footprint){t=[...s.footprint.min],n=[...s.footprint.max];let a=s.anchors?.label;r=a?[a.x,a.y,a.z]:[(t[0]+n[0])/2,n[1]+.8,(t[2]+n[2])/2]}else{let a=Ue[i],c=(a.size.d??a.size.w??1)/2,l=(a.size.d??a.size.l??1)/2;t=[a.pos[0]-c,0,a.pos[1]-l],n=[a.pos[0]+c,a.base+a.size.h,a.pos[1]+l],r=[a.pos[0],a.base+a.size.h+.8,a.pos[1]]}let o=[];for(let a of[t[0],n[0]])for(let c of[t[1],n[1]])for(let l of[t[2],n[2]])o.push([a,c,l]);return o.push(r,[r[0],r[1]+1.4,r[2]]),o}function im(i,e,t,n=1,r=.84){let{right:s,up:o,fwd:a}=ni,c=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0];for(let H of i)for(let N=0;N<3;N++)c[N]=Math.min(c[N],H[N]),l[N]=Math.max(l[N],H[N]);let u=[(c[0]+l[0])/2,(c[1]+l[1])/2,(c[2]+l[2])/2],d=1/0,h=-1/0,f=1/0,p=-1/0;for(let H of i){let N=[H[0]-u[0],H[1]-u[1],H[2]-u[2]],U=Yi(N,s),F=Yi(N,o);d=Math.min(d,U),h=Math.max(h,U),f=Math.min(f,F),p=Math.max(p,F)}let y=(d+h)/2,g=(f+p)/2,m=[u[0]+s[0]*y+o[0]*g,u[1]+s[1]*y+o[1]*g,u[2]+s[2]*y+o[2]*g],v=Math.tan(e*Math.PI/360),b=v*Jr.aspect*Jr.safe.hx*r,_=v*Jr.safe.hy*r,R=t;for(let H of i){let N=[H[0]-m[0],H[1]-m[1],H[2]-m[2]],U=Math.abs(Yi(N,s)),F=Math.abs(Yi(N,o)),I=Yi(N,a);R=Math.max(R,U/b-I,F/_-I)}R*=n;let S=R*v*Jr.aspect,L=R*v,P=Jr.safe.bx*S,w=Jr.safe.by*L;return{target:[m[0]-s[0]*P-o[0]*w,m[1]-s[1]*P-o[1]*w,m[2]-s[2]*P-o[2]*w],distance:R,fov:e}}function rm(i,e){let t=i.units==="ALL"?s_:i.units,n=[];for(let r of t)n.push(...nm(r,e));i.units==="ALL"&&n.push([fn[0],.5,fn[1]]);for(let r of i.extra??[])n.push(...o_(r,e));return n}var ah=new WeakMap,sm={};function a_(i){let e=i??sm,t=ah.get(e);return t||(t=tm.map(n=>im(rm(n,i),n.fov,n.minDist,n.wide??1)),ah.set(e,t)),t}var ch=new WeakMap;function om(i){let e=i??sm,t=ch.get(e);return t||(t=im(rm({t:0,units:"ALL",fov:31,minDist:20,extra:["landfill","wetland"]},i),31,20,1),ch.set(e,t)),lh(t)}function am(i,e){let t=a_(e),n=tm;if(i<=n[0].t)return lh(t[0]);for(let r=0;r<n.length-1;r++)if(i<n[r+1].t){let s=M0(i,n[r].t,n[r+1].t),o=t[r],a=t[r+1];return{target:[ti(o.target[0],a.target[0],s),ti(o.target[1],a.target[1],s),ti(o.target[2],a.target[2],s)],distance:ti(o.distance,a.distance,s),fov:ti(o.fov,a.fov,s)}}return lh(t[t.length-1])}function lh(i){return{target:[i.target[0],i.target[1],i.target[2]],distance:i.distance,fov:i.fov}}function cm(i,e,t=26){let n=nm(i,e).slice(0,8),{right:r,up:s,fwd:o}=ni,a=n.reduce((u,d)=>[u[0]+d[0]/n.length,u[1]+d[1]/n.length,u[2]+d[2]/n.length],[0,0,0]),c=Math.tan(t*Math.PI/360),l=4;for(let u of n){let d=[u[0]-a[0],u[1]-a[1],u[2]-a[2]];l=Math.max(l,Math.abs(Yi(d,r))/(c*Dc*.7)-Yi(d,o),Math.abs(Yi(d,s))/(c*.7)-Yi(d,o))}return{target:a,distance:l,fov:t}}var Ti=50,No=["uasb1","uasb2","uasb3","uasb4"],Pn=[{kind:"pipe",ids:["p-inlet"],t0:2.6,t1:3.9},{kind:"unit",ids:["screen"],t0:3.9,t1:4.7},{kind:"pipe",ids:["p-screen-homog"],t0:4.7,t1:5.2},{kind:"unit",ids:["homog"],t0:5.2,t1:6.3},{kind:"pipe",ids:["p-homog-coag"],t0:6.3,t1:6.9},{kind:"unit",ids:["coag"],t0:6.9,t1:7.9},{kind:"pipe",ids:["p-coag-floc"],t0:7.9,t1:8.4},{kind:"unit",ids:["floc"],t0:8.4,t1:9.5},{kind:"pipe",ids:["p-floc-clar1"],t0:9.5,t1:10},{kind:"unit",ids:["clar1"],t0:10,t1:13.8},{kind:"pipe",ids:["p-clar1-inter"],t0:13.8,t1:16},{kind:"unit",ids:["inter"],t0:16,t1:17.3},{kind:"pipe",ids:["p-inter-pump"],t0:17.3,t1:18},{kind:"unit",ids:["pump"],t0:18,t1:18.8},{kind:"pipe",ids:No.map(i=>`p-feed-${i}`),t0:18.8,t1:23},{kind:"unit",ids:[...No],t0:23,t1:29.6},{kind:"pipe",ids:No.map(i=>`p-${i}-clar2`),t0:29.6,t1:31},{kind:"unit",ids:["clar2"],t0:31,t1:33.8},{kind:"pipe",ids:["p-clar2-mbbr"],t0:33.8,t1:34.6},{kind:"unit",ids:["mbbr"],t0:34.6,t1:37.6},{kind:"pipe",ids:["p-mbbr-filtro"],t0:37.6,t1:38.6},{kind:"unit",ids:["filtro"],t0:38.6,t1:41.8},{kind:"pipe",ids:["p-filtro-discharge"],t0:41.8,t1:42.4},{kind:"unit",ids:["discharge"],t0:42.4,t1:43.2},{kind:"pipe",ids:["p-outfall"],t0:43.2,t1:44}],c_=[{pipeId:"p-dosC-coag",t0:6.5,t1:7},{pipeId:"p-dosF-floc",t0:8,t1:8.5},{pipeId:"p-clar1-thick",t0:11.2,t1:12.6},{pipeId:"p-thick-bed",t0:13,t1:14.2},{pipeId:"p-bed-return",t0:20,t1:22.6},...No.map(i=>({pipeId:`p-gas-${i}`,t0:23.8,t1:25})),...No.map(i=>({pipeId:`p-purge-${i}`,t0:27.5,t1:29.4})),{pipeId:"p-clar2-thick",t0:32.4,t1:33.6}];var l_={dosC:6.5,dosF:8,thick:12.6,sludge:14.2,flare:25,control:2},u_=["pumpB"],_r=[{id:"homog",t0:3.9,t1:6.8},{id:"coag",t0:6.8,t1:8.4},{id:"floc",t0:8.4,t1:10},{id:"clar1",t0:10,t1:16},{id:"uasb",t0:16,t1:31},{id:"clar2",t0:31,t1:34.6},{id:"mbbr",t0:34.6,t1:38},{id:"filtro",t0:38,t1:42.4},{id:"discharge",t0:42.4,t1:44}],d_=[{id:"idle",t0:0,t1:5},{id:"A",t0:5,t1:10},{id:"B",t0:10,t1:16},{id:"C",t0:16,t1:23},{id:"D",t0:23,t1:31},{id:"E",t0:31,t1:44},{id:"F",t0:44,t1:50}],Ws=[{t:5.8,unit:"homog"},{t:11,unit:"clar1"},{t:24.6,unit:"uasb2"},{t:27.6,unit:"flare"},{t:35.4,unit:"mbbr"},{t:39.8,unit:"filtro"}],h_=4,f_=45.5,p_=1.4,m_=2,g_=48.6,x_=[{t:.3,id:"rain",level:"info",text:{es:"Lluvia sobre el vertedero \xB7 percolaci\xF3n",en:"Rain on the landfill \xB7 percolation"}},{t:1.6,id:"pond",level:"info",text:{es:"Laguna de lixiviados \u2192 bombeo a RJ-100",en:"Leachate pond \u2192 pumped to RJ-100"}},{t:44.2,id:"wetland",level:"info",text:{es:"Agua recuperada llega al humedal",en:"Recovered water reaches the wetland"}},{t:2.6,id:"inflow",level:"info",text:{es:"Ingreso de lixiviado \xB7 rejilla RJ-100",en:"Leachate inflow \xB7 screen RJ-100"}},{t:3,id:"pumpB",level:"info",text:{es:"P-01B en reserva",en:"P-01B on standby"}},{t:5.2,id:"homog",level:"info",text:{es:"Homogenizaci\xF3n en l\xEDnea",en:"Homogenization online"}},{t:6.5,id:"dosC",level:"info",text:{es:"Dosificaci\xF3n de coagulante activa",en:"Coagulant dosing active"}},{t:6.9,id:"coag",level:"info",text:{es:"Mezcla r\xE1pida TK-102 activa",en:"Rapid mix TK-102 active"}},{t:8,id:"dosF",level:"info",text:{es:"Pol\xEDmero DQ-102 en dosificaci\xF3n",en:"Polymer DQ-102 dosing"}},{t:8.4,id:"floc",level:"info",text:{es:"Floculaci\xF3n TK-103 en l\xEDnea",en:"Flocculation TK-103 online"}},{t:10,id:"clar1",level:"info",text:{es:"CL-101 en sedimentaci\xF3n primaria",en:"CL-101 primary settling"}},{t:11.2,id:"sludge",level:"notice",text:{es:"Purga de lodo CL-101 \u2192 espesador ES-101",en:"CL-101 sludge purge \u2192 thickener ES-101"}},{t:14.2,id:"bed",level:"info",text:{es:"Lodo espesado al lecho de secado LS-101",en:"Thickened sludge to drying bed LS-101"}},{t:20,id:"return",level:"info",text:{es:"Retorno de drenado LS-101 \u2192 TK-101",en:"LS-101 drainage return \u2192 TK-101"}},{t:16,id:"inter",level:"info",text:{es:"Tanque intermedio TK-104 en carga",en:"Intermediate tank TK-104 filling"}},{t:18,id:"pump",level:"notice",text:{es:"Bomba P-01 activa",en:"Pump P-01 active"}},{t:19.8,id:"split",level:"notice",text:{es:"Caudal repartido al tren UASB",en:"Flow distributed to UASB train"}},{t:23,id:"uasb",level:"info",text:{es:"UASB en l\xEDnea 4/4",en:"UASB online 4/4"}},{t:25.2,id:"flare",level:"notice",text:{es:"Antorcha QB-201 encendida \xB7 biog\xE1s de 4 UASB",en:"Flare QB-201 lit \xB7 biogas from 4 UASB"}},{t:27.5,id:"purge",level:"info",text:{es:"Purga de lodos UASB \u2192 espesador",en:"UASB sludge purge \u2192 thickener"}},{t:32.4,id:"purge2",level:"info",text:{es:"Purga de lodo CL-201 \u2192 espesador",en:"CL-201 sludge purge \u2192 thickener"}},{t:31,id:"clar2",level:"info",text:{es:"Clarificador CL-201 en l\xEDnea",en:"Clarifier CL-201 online"}},{t:34.2,id:"blower",level:"info",text:{es:"Soplante B-301 en marcha \xB7 aireaci\xF3n MBBR",en:"Blower B-301 running \xB7 MBBR aeration"}},{t:34.6,id:"mbbr",level:"notice",text:{es:"Etapa de pulimento en l\xEDnea",en:"Polishing stage online"}},{t:38.6,id:"filtro",level:"info",text:{es:"Filtro fitopedol\xF3gico en l\xEDnea",en:"Phytopedological filter online"}},{t:42.4,id:"discharge",level:"notice",text:{es:"Descarga de efluente tratado activa",en:"Treated effluent discharge active"}},{t:44,id:"all",level:"info",text:{es:"Todas las etapas en l\xEDnea",en:"All stages online"}},...U0],lm=[...x_].sort((i,e)=>i.t-e.t),y_={t:oh.fixturesOn,id:"lights",level:"info",text:{es:"Alumbrado de planta encendido",en:"Plant lighting switched on"}},v_=[{t0:0,t1:1.5,text:{es:"Lluvia sobre el vertedero \xB7 el agua percola la basura y se vuelve lixiviado (supuesto)",en:"Rain on the landfill \xB7 water percolates through the waste and becomes leachate (assumed)"}},{t0:1.5,t1:2.6,text:{es:"Canal perimetral \u2192 laguna de lixiviados \u2192 bombeo a la planta",en:"Perimeter ditch \u2192 leachate pond \u2192 pumped to the plant"}},{t0:2.6,t1:5,text:{es:"Ingreso de lixiviado \xB7 cribado RJ-100 \xB7 1,0 L/s (B)",en:"Leachate inflow \xB7 screening RJ-100 \xB7 1.0 L/s (brief)"}},{t0:5,t1:10,text:{es:"Acondicionamiento: homogenizaci\xF3n, coagulaci\xF3n y floculaci\xF3n (FeCl\u2083 300 mg/L, supuesto)",en:"Conditioning: equalization, coagulation and flocculation (FeCl\u2083 300 mg/L, assumed)"}},{t0:10,t1:16,text:{es:"Clarificaci\xF3n primaria \xB7 lodo \u2192 espesador \u2192 lecho de secado cubierto",en:"Primary clarification \xB7 sludge \u2192 thickener \u2192 covered drying bed"}},{t0:16,t1:23,text:{es:"Bombeo P-01 y reparto equitativo a 4 UASB en paralelo (hip\xF3tesis)",en:"Pump P-01 and equal split to 4 parallel UASB (hypothesis)"}},{t0:23,t1:31,text:{es:"Tratamiento anaerobio UASB \xB7 0,25 L/s por reactor \xB7 biog\xE1s a antorcha",en:"Anaerobic UASB treatment \xB7 0.25 L/s per reactor \xB7 biogas to flare"}},{t0:31,t1:38,text:{es:"Clarificaci\xF3n secundaria y pulimento aerobio MBBR",en:"Secondary clarification and aerobic MBBR polishing"}},{t0:38,t1:44,text:{es:"Filtro fitopedol\xF3gico y descarga de efluente tratado",en:"Phytopedological filter and treated effluent discharge"}},{t0:44,t1:47.6,text:{es:"Agua recuperada devuelta al humedal \xB7 el ciclo se cierra",en:"Recovered water returned to the wetland \xB7 the cycle closes"}},{t0:47.6,t1:50.001,text:{es:"Del lixiviado al agua recuperada \xB7 todas las etapas en l\xEDnea",en:"From leachate to recovered water \xB7 all stages online"}}],uh=(()=>{let i={};for(let e of hi)i[e.id]=1/0;for(let e of Pn)if(e.kind==="unit")for(let t of e.ids)i[t]=Math.min(i[t],e.t0);for(let[e,t]of Object.entries(l_))i[e]=Math.min(i[e],t);return i})(),b_=(()=>{let i={};for(let e of Pn)if(e.kind==="pipe")for(let t of e.ids)i[t]={t0:e.t0,t1:e.t1};for(let e of c_)i[e.pipeId]={t0:e.t0,t1:e.t1};return i})();function Uc(i){for(let e=0;e<Pn.length;e++){let t=Pn[e];if(i>=t.t0&&i<t.t1)return{seg:t,index:e,k:(i-t.t0)/(t.t1-t.t0)}}return null}function um(i){if(i>=Pn[Pn.length-1].t1&&i<g_)return["discharge"];if(i<Pn[0].t0)return[];if(i>=Pn[Pn.length-1].t1)return hi.map(n=>n.id);let e=Uc(i);if(!e)return[];if(e.seg.kind==="unit")return e.seg.ids;let t=[];for(let n of e.seg.ids){let r=bi.find(s=>s.id===n);r.to!=="world"&&!t.includes(r.to)&&t.push(r.to)}if(!t.length){let n=bi.find(r=>r.id===e.seg.ids[0]);n.from!=="world"&&t.push(n.from)}return t}function E_(i){let e=Uc(i);if(!e)return{visible:!1,pipeId:null,unitId:null,u:i<Pn[0].t0?0:1,split:!1};let t=e.seg.ids.length>1;return e.seg.kind==="pipe"?{visible:!0,pipeId:e.seg.ids[0],unitId:null,u:un(e.k),split:t}:{visible:!0,pipeId:null,unitId:e.seg.ids[0],u:un(e.k),split:t}}function __(i){let e=null;for(let t of Ws)i>=t.t&&(e=t.unit);return e}function M_(i){let e=i>=h_&&i<f_,t=null,n=null,r=1,s=0;for(let o=0;o<Ws.length;o++){let a=Ws[o],c=a.t-p_;i>=c&&(t=o>0?Ws[o-1].unit:null,n=a.unit,r=Xt(i,c,a.t-.15)),i>=a.t-.08&&i<a.t+.55&&(s=i<a.t?br(i,a.t-.08,a.t):1-Xt(i,a.t,a.t+.55))}return n===null&&(r=0),{visible:e,unitId:n,travel:r,fromUnitId:t,press:s}}function w_(i){for(let e of d_)if(i>=e.t0&&i<e.t1)return e.id;return"F"}function dm(i){return .35*Xt(i,23,31)+.65*Xt(i,31,42.4)}function hm(i,e){let t=_r[i];return br(e,t.t0,t.t1)}function dh(i,e){let t=un(i,0,Ti),n=t>=m_,r={};for(let p of hi){let y=uh[p.id],g=t>=y,m=u_.includes(p.id);r[p.id]={active:g,flow:g?Xt(t,y-.2,y+1.5):0,motion:g?Xt(t,y,y+2.5):0,status:g?"active":n||m?"standby":"idle"}}let s=__(t),o={};for(let p of bi){let y=b_[p.id],g=y?br(t,y.t0,y.t1):0,m=y?Xt(t,y.t0,y.t1+1.5):0,v=s!==null&&(p.from===s||p.to===s);o[p.id]={flow:m,front:g,highlight:v}}let a=-1,c={};_r.forEach((p,y)=>{t>=p.t0&&t<p.t1&&(a=y),c[p.id]=t>=p.t1});let l=Y0(t,e?.light??"day"),d=(e?.light==="story"?[...lm,y_].sort((p,y)=>p.t-y.t):lm).filter(p=>t>=p.t).map(p=>({id:p.id,t:p.t,level:p.level,text:{...p.text}})),h=v_.find(p=>t>=p.t0&&t<p.t1),f=n?"Active":"Stable";return{t,duration:Ti,phase:w_(t),trackerIndex:a,trackerDone:c,units:r,pipes:o,parcel:E_(t),selected:s,alerts:d,camera:am(t,e?.plant),cursor:M_(t),plantState:f,caption:h?{...h.text}:null,logistics:D0(t),lighting:l}}var TT=gc.map(i=>i.id);var Nc=4,Bc=4,T_=.07,fm=new x;function S_(i,e,t){let n=[],r=0;for(let o=1;o<i.length;o++){let a=i[o].distanceTo(i[o-1]);n.push(a),r+=a}if(r<1e-6)return t.copy(i[0]);let s=un(e)*r;for(let o=0;o<n.length;o++){if(s<=n[o]||o===n.length-1)return t.copy(i[o]).lerp(i[o+1],n[o]>0?Math.min(1,s/n[o]):1);s-=n[o]}return t.copy(i[i.length-1])}function hh(i,e,t,n){let r=i.pipes[e];return r?n.copy(r.pointAt(un(t))):n.set(0,-100,0)}function Fc(i,e,t,n=new x){let r=Uc(e);if(!r)return null;let{seg:s,index:o,k:a}=r,c=s.ids.length;if(t>=c)return null;if(s.kind==="pipe")return hh(i,s.ids[t],a,n);let l=i.units[s.ids[t]],u=Pn[o-1],d=Pn[o+1],h=new x,f=new x;u?hh(i,u.ids[Math.min(t,u.ids.length-1)],1,h):h.copy(l.anchors.core),d?hh(i,d.ids[Math.min(t,d.ids.length-1)],0,f):f.copy(l.anchors.core);let p=l.anchors.core??l.anchors.focus;return S_([h,p,f],w0(a),n)}var pm=new Ie(14263361),R_=new Ie(6271912);function A_(i,e=new Ie){return e.copy(pm).lerp(R_,dm(i))}var zc=class{constructor(){this.root=new we;this.slots=[];this.trailMats=[];this.root.name="hero-parcel";let e=l=>new In({color:pm,transparent:!0,opacity:l,depthTest:!1,depthWrite:!1});this.coreMat=e(.96),this.haloMat=e(.42),this.discMat=e(.11);for(let l=0;l<Bc;l++)this.trailMats.push(e(.5*(1-(l+1)/(Bc+1))));let t=new rt(.2,20,14),n=new wo(.32,.37,40),r=new Mn(.5,40),s=new rt(.1,10,8),o=new wo(.2,.25,40),a=new In({color:726040,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1});this.rimMat=a;let c=new yt().setFromUnitVectors(new x(0,0,1),new x(...ni.dir));for(let l=0;l<Nc;l++){let u=new we,d=new oe(t,this.coreMat),h=new oe(n,this.haloMat);h.quaternion.copy(c);let f=new oe(r,this.discMat);f.quaternion.copy(c);let p=new oe(o,a);p.quaternion.copy(c),d.renderOrder=1002,h.renderOrder=1001,f.renderOrder=1e3,p.renderOrder=1001,u.add(f,p,h,d);let y=[];for(let g=0;g<Bc;g++){let m=new oe(s,this.trailMats[g]);m.renderOrder=999,y.push(m),this.root.add(m)}this.root.add(u),this.slots.push({group:u,core:d,halo:h,disc:f,trail:y})}}update(e,t,n){let r=A_(t);for(let u of[this.coreMat,this.haloMat,this.discMat,...this.trailMats])u.color.copy(r);let s=un(n/45,.55,1.7),o=1+.08*Math.sin(t*4.2),a=Pn[0].t0,c=Pn[Pn.length-1].t1,l=Xt(t,a,a+.35)*(1-Xt(t,c-.35,c));this.coreMat.opacity=.96*l,this.haloMat.opacity=.42*l,this.discMat.opacity=.11*l,this.rimMat.opacity=.55*l;for(let u=0;u<Nc;u++){let d=this.slots[u],h=Fc(e,t,u,fm);d.group.visible=!!h,h&&(d.group.position.copy(h),d.group.scale.setScalar(s),d.halo.scale.setScalar(o));for(let f=0;f<Bc;f++){let p=t-(f+1)*T_,y=Fc(e,p,u,fm),g=d.trail[f];g.visible=!!y&&!!h&&l>.05,y&&(g.position.copy(y),g.scale.setScalar(s*(1-f*.16)))}}}};var C_=24,I_=32;function mm(){let i=new vn(30,Dc,.5,600),e=new x(...ni.dir);i.up.set(0,1,0),i.position.copy(e),i.lookAt(0,0,0);let t=i.quaternion.clone(),n={camera:i,shot:{target:[0,0,0],distance:40,fov:30},apply(r){n.shot={target:[...r.target],distance:r.distance,fov:r.fov};let s=Math.min(I_,Math.max(C_,r.fov));i.position.set(r.target[0]+e.x*r.distance,r.target[1]+e.y*r.distance,r.target[2]+e.z*r.distance),i.quaternion.copy(t),i.fov!==s&&(i.fov=s,i.updateProjectionMatrix()),i.updateMatrixWorld(!0)},panPixels(r,s,o){let a=n.shot,c=2*a.distance*Math.tan(a.fov*Math.PI/360)/o,l=ni.right,u=new x(ni.fwd[0],0,ni.fwd[2]).normalize(),d=c,h=d/Math.max(.3,Math.sin(Math.asin(ni.dir[1])));n.apply({target:[a.target[0]-l[0]*r*d+u.x*s*h,a.target[1],a.target[2]-l[2]*r*d+u.z*s*h],distance:a.distance,fov:a.fov})},dolly(r){let s=n.shot;n.apply({target:s.target,distance:Math.min(140,Math.max(6,s.distance*r)),fov:s.fov})},setAspect(r){i.aspect=r,i.updateProjectionMatrix()}};return n.apply(n.shot),n}var Fo="PTL Buenaventura \xB7 Agua Recuperada",P_={origin:{es:"Simulaci\xF3n din\xE1mica did\xE1ctica \xB7 todo es supuesto (B brief \xB7 S supuesto \xB7 C c\xE1lculo)",en:"Didactic dynamic simulation \xB7 everything is assumed (B brief \xB7 S assumption \xB7 C calculation)"},cls_B:{es:"brief",en:"brief"},cls_S:{es:"supuesto",en:"assumption"},cls_C:{es:"c\xE1lculo",en:"calculation"},cls_legend:{es:"B brief \xB7 S supuesto \xB7 C c\xE1lculo \u2014 nada proviene de documentos oficiales",en:"B brief \xB7 S assumption \xB7 C calculation \u2014 nothing comes from official documents"},not_applicable:{es:"no aplica",en:"n/a"},flow_poly:{es:"Pol\xEDmero",en:"Polymer"},d_facts:{es:"Supuestos y c\xE1lculos",en:"Assumptions and calculations"},mode:{es:"Modo",en:"Mode"},mode_narrative:{es:"Narrativa",en:"Narrative"},mode_overview:{es:"Vista general",en:"Overview"},mode_free:{es:"Libre",en:"Free"},mode_film:{es:"Pel\xEDcula",en:"Film"},clock:{es:"Tiempo de simulaci\xF3n",en:"Simulation time"},compressed:{es:"tiempo narrativo comprimido",en:"compressed narrative time"},plant_state:{es:"Estado de planta",en:"Plant state"},st_Stable:{es:"Estable",en:"Stable"},st_Active:{es:"Activa",en:"Active"},st_Alert:{es:"Alerta",en:"Alert"},phase:{es:"Fase",en:"Phase"},kpi_flow:{es:"Caudal",en:"Flow"},kpi_flow_sub:{es:"caudal de dise\xF1o \xB7 brief",en:"design flow \xB7 brief"},kpi_ops:{es:"Operaci\xF3n",en:"Operation"},kpi_ops_unit:{es:"h/d\xEDa",en:"h/day"},kpi_uasb:{es:"UASB en l\xEDnea",en:"UASB online"},kpi_uasb_sub:{es:"paralelo \xB7 sin recirculaci\xF3n",en:"parallel \xB7 no recirculation"},kpi_eff:{es:"L\xEDnea de efluente",en:"Effluent line"},kpi_sludge:{es:"L\xEDnea de lodos",en:"Sludge line"},kpi_health:{es:"Salud del sistema",en:"System health"},kpi_health_val:{es:"Buena",en:"Good"},kpi_health_sub:{es:"sin alarmas simuladas",en:"no simulated alarms"},on:{es:"Activa",en:"Active"},wait:{es:"Espera",en:"Standby"},eff_sub_on:{es:"descarga DS-501 en servicio",en:"DS-501 discharge in service"},eff_sub_off:{es:"aguardando efluente tratado",en:"awaiting treated effluent"},sludge_sub_on:{es:"CL-101/UASB/CL-201 \u2192 ES-101 \u2192 LS-101",en:"CL-101/UASB/CL-201 \u2192 ES-101 \u2192 LS-101"},kpi_staff:{es:"Log\xEDstica / Personal",en:"Logistics / Staff"},staff_on_site:{es:"Personal en planta",en:"Staff on site"},truck_chem:{es:"Qu\xEDmicos",en:"Chemicals"},truck_sludge:{es:"Lodos",en:"Sludge"},tk_away:{es:"Fuera",en:"Away"},tk_enroute:{es:"En ruta",en:"En route"},tk_bay:{es:"En bah\xEDa",en:"At bay"},tk_unloading:{es:"Descargando",en:"Unloading"},tk_loading:{es:"Cargando",en:"Loading"},tk_leaving:{es:"Salida",en:"Leaving"},lights:{es:"Alumbrado",en:"Lighting"},lights_on:{es:"Encendido",en:"On"},lights_off:{es:"Apagado",en:"Off"},light_day:{es:"D\xEDa",en:"Day"},light_dusk:{es:"Atardecer",en:"Dusk"},light_night:{es:"Noche",en:"Night"},light_story:{es:"D\xEDa \u2192 atardecer",en:"Day \u2192 dusk"},tg_light:{es:"Luz",en:"Light"},lbl_truck_chem:{es:"Cami\xF3n de qu\xEDmicos",en:"Chemical truck"},lbl_truck_sludge:{es:"Cami\xF3n de lodos",en:"Sludge truck"},tg_actors:{es:"Personas/Veh\xEDculos",en:"People/Vehicles"},lk_biogas:{es:"Biog\xE1s",en:"Biogas"},lk_chemical:{es:"Qu\xEDmicos",en:"Chemicals"},lk_return:{es:"Retorno",en:"Return"},lk_worker:{es:"Personal",en:"Staff"},lk_truck:{es:"Cami\xF3n",en:"Truck"},flow_reserve:{es:"En reserva \xB7 sin caudal",en:"On standby \xB7 no flow"},flow_flare:{es:"Biog\xE1s",en:"Biogas"},flow_control:{es:"En servicio \xB7 sin caudal de proceso",en:"In service \xB7 no process flow"},tag_reserve:{es:"En reserva",en:"Standby"},sludge_sub_off:{es:"sin purga",en:"no purge"},detail:{es:"Equipo seleccionado",en:"Selected equipment"},hint_click:{es:"Clic en un equipo para ver su ficha",en:"Click a unit to see its card"},none_selected:{es:"Seleccione un equipo",en:"Select a unit"},d_function:{es:"Funci\xF3n",en:"Function"},d_flow:{es:"Estado de flujo (estimado)",en:"Flow state (estimated)"},d_role:{es:"Rol en el proceso",en:"Process role"},d_volume:{es:"Volumen",en:"Volume"},d_hrt:{es:"TRH = V/Q",en:"HRT = V/Q"},d_stage:{es:"Etapa",en:"Stage"},no_data:{es:"sin dato",en:"no data"},tag_active:{es:"Activo",en:"Active"},tag_standby:{es:"Espera",en:"Standby"},tag_selected:{es:"Seleccionado",en:"Selected"},flow_on:{es:"En flujo",en:"Flowing"},flow_off:{es:"En espera \xB7 sin flujo",en:"Standby \xB7 no flow"},flow_uasb:{es:"reparto equitativo (hip\xF3tesis)",en:"equal split (hypothesis)"},flow_sludge:{es:"Lodos",en:"Sludge"},flow_pump:{es:"Impulsi\xF3n",en:"Delivery"},hrt_note:{es:"c\xE1lculo",en:"calculation"},tracker:{es:"Recorrido del proceso",en:"Process route"},events:{es:"Eventos del sistema",en:"System events"},no_events:{es:"Sin eventos",en:"No events"},split:{es:"Reparto UASB",en:"UASB split"},split_note:{es:"hip\xF3tesis: reparto equitativo",en:"hypothesis: equal split"},legend:{es:"L\xEDneas de proceso",en:"Process lines"},lk_leachate:{es:"Lixiviado",en:"Leachate"},lk_clarified:{es:"Clarificado",en:"Clarified"},lk_pumped:{es:"Impulsi\xF3n",en:"UASB feed"},lk_anaerobic:{es:"Anaerobio",en:"Anaerobic"},lk_treated:{es:"Tratado",en:"Treated"},lk_sludge:{es:"Lodos",en:"Sludge"},lk_parcel:{es:"Parcela",en:"Parcel"},tg_pipes:{es:"Tuber\xEDas",en:"Pipes"},tg_labels:{es:"Etiquetas",en:"Labels"},tg_flow:{es:"Flujo",en:"Flow"},tg_sludge:{es:"Lodos",en:"Sludge"},play:{es:"Reproducir",en:"Play"},pause:{es:"Pausa",en:"Pause"},loop:{es:"Bucle",en:"Loop"},back_story:{es:"Volver a la narrativa",en:"Back to story"}};function xe(i,e){return P_[i][e]}var fh={homog:{es:"Homogenizaci\xF3n",en:"Homogenization"},coag:{es:"Coagulaci\xF3n",en:"Coagulation"},floc:{es:"Floculaci\xF3n",en:"Flocculation"},clar1:{es:"Clarificador 1",en:"Clarifier 1"},uasb:{es:"UASB",en:"UASB"},clar2:{es:"Clarificador 2",en:"Clarifier 2"},mbbr:{es:"MBBR",en:"MBBR"},filtro:{es:"Filtro fitopedol\xF3gico",en:"Phytopedological filter"},discharge:{es:"Descarga",en:"Discharge"}},gm={homog:{es:"Homogenizaci\xF3n",en:"Homogenization"},coag:{es:"Coagulaci\xF3n",en:"Coagulation"},floc:{es:"Floculaci\xF3n",en:"Flocculation"},clar1:{es:"Clarificador 1",en:"Clarifier 1"},sludge:{es:"Lecho de secado",en:"Drying bed"},inter:{es:"Intermedio",en:"Intermediate"},pump:{es:"Bomba",en:"Pump"},uasb1:{es:"UASB 1",en:"UASB 1"},uasb2:{es:"UASB 2",en:"UASB 2"},uasb3:{es:"UASB 3",en:"UASB 3"},uasb4:{es:"UASB 4",en:"UASB 4"},clar2:{es:"Clarificador 2",en:"Clarifier 2"},mbbr:{es:"MBBR",en:"MBBR"},filtro:{es:"Filtro fitopedol\xF3gico",en:"Phyto filter"},discharge:{es:"Descarga",en:"Discharge"},screen:{es:"Rejilla",en:"Screen"},dosC:{es:"Coagulante",en:"Coagulant"},dosF:{es:"Pol\xEDmero",en:"Polymer"},pumpB:{es:"Bomba reserva",en:"Standby pump"},flare:{es:"Antorcha",en:"Flare"},thick:{es:"Espesador",en:"Thickener"},control:{es:"Caseta control",en:"Control bldg."}};var bt={pad:24,top:{x0:24,y0:20,x1:1896,y1:76},left:{x0:24,y0:96,x1:344,y1:936},right:{x0:1576,y0:96,x1:1896,y1:936},caption:{x0:360,y0:852,x1:1560,y1:892},controls:{x0:360,y0:900,x1:1560,y1:940},tracker:{x0:24,y0:952,x1:1896,y1:1056},thumb:{x0:1592,y0:148,x1:1880,y1:310},safe:{x0:Zi.x0,y0:Zi.y0,x1:Zi.x1,y1:Zi.y1}},Oc=i=>`left:${i.x0}px;top:${i.y0}px;width:${i.x1-i.x0}px;height:${i.y1-i.y0}px;`,xm=`
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
.top{${Oc(bt.top)}display:flex;align-items:center;padding:0 18px;gap:18px}
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
.kpis{position:absolute;left:${bt.left.x0}px;top:${bt.left.y0}px;width:${bt.left.x1-bt.left.x0}px;display:flex;flex-direction:column;gap:7px}
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
.legend{left:${bt.left.x0}px;top:651px;width:320px;padding:10px 14px}
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
.impact{left:${bt.left.x0}px;top:651px;width:320px;height:120px;padding:10px 14px 0}
.impact .ihd{display:flex;justify-content:space-between;align-items:center}
.impact .igrid{display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;margin-top:6px}
.impact .k{font-size:10.5px;color:var(--muted);white-space:nowrap}
.impact .vr{display:flex;align-items:baseline;gap:4px;white-space:nowrap}
.impact .v{font-size:17px;font-weight:700;color:var(--green);letter-spacing:-.01em}
.impact .u{font-size:10.5px;color:var(--muted)}
.impact .ib{height:3px;border-radius:2px;background:#e8ecf6;margin-top:2px;overflow:hidden}
.impact .ib i{display:block;height:100%;border-radius:2px;background:linear-gradient(90deg,#15c3b0,#1f9d6b)}

/* Antes \xB7 Despu\xE9s (fase 5) */
.compare{left:${bt.right.x0}px;width:320px;height:148px;padding:10px 14px;background:#fff;z-index:2}
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
.events{left:${bt.left.x0}px;top:779px;width:320px;height:157px;padding:11px 14px}
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
.detail{position:absolute;left:${bt.right.x0}px;top:${bt.right.y0}px;width:320px}
.detail .hdr{height:52px;padding:10px 16px 0;border-radius:14px 14px 0 0;border-bottom:none;box-shadow:none}
.detail .hdr .row{display:flex;justify-content:space-between;align-items:center}
.detail .thumb{position:absolute;left:${bt.thumb.x0-bt.right.x0}px;top:${bt.thumb.y0-bt.right.y0}px;width:${bt.thumb.x1-bt.thumb.x0}px;height:${bt.thumb.y1-bt.thumb.y0}px;border:1px solid var(--line2);border-radius:10px;overflow:hidden}
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
.split{left:${bt.right.x0}px;width:320px;padding:12px 14px}
.split .r{display:grid;grid-template-columns:52px 1fr 44px 60px;align-items:center;gap:8px;height:22px;font-size:12px}
.split .r .l{font-family:var(--mono);color:var(--muted);font-size:11.5px}
.split .bar{height:6px;border-radius:3px;background:#e8ecf6;overflow:hidden}
.split .bar i{display:block;height:100%;background:linear-gradient(90deg,#2f5bea,#5b84ff);border-radius:3px}
.split .p{color:var(--txt);text-align:right;font-weight:600}.split .q{color:var(--muted);text-align:right}
.split .rows{margin-top:8px}

/* Subt\xEDtulo */
.caption{position:absolute;${Oc(bt.caption)}display:flex;align-items:center;justify-content:center}
.caption span{font-size:17px;color:var(--txt);background:rgba(255,255,255,.95);border:1px solid var(--line);border-radius:12px;padding:6px 18px;letter-spacing:.01em;box-shadow:var(--shadow)}
.caption b{font-weight:700;color:#fff;background:var(--cyan);border-radius:6px;padding:2px 7px;margin-right:10px;font-size:11px;letter-spacing:.1em}

/* Controles */
.controls{${Oc(bt.controls)}display:flex;align-items:center;gap:10px;padding:0 12px}
.film .controls{display:none}
.btn{font:inherit;font-size:12px;color:#3d4566;background:#fff;border:1px solid var(--line2);border-radius:8px;height:26px;padding:0 10px;cursor:pointer;white-space:nowrap}
.btn.on{color:#fff;border-color:var(--cyan);background:var(--cyan)}
.btn.hide{display:none}
.controls input[type=range]{flex:1;accent-color:#2f5bea;height:4px}
.controls .tm{font-family:var(--mono);font-size:12px;color:var(--muted);width:150px;text-align:center;white-space:nowrap}
.seg{display:inline-flex}.seg .btn{border-radius:0;margin-left:-1px}.seg .btn:first-child{border-radius:8px 0 0 8px}.seg .btn:last-child{border-radius:0 8px 8px 0}

/* Rastreador */
.tracker{${Oc(bt.tracker)}padding:12px 22px 0}
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
`;function O(i,e="",t,n){let r=document.createElement(i);return e&&(r.className=e),n!=null&&(r.textContent=n),t&&t.appendChild(r),r}function ue(i,e){i.textContent!==e&&(i.textContent=e)}function qt(i,e,t){i.classList.contains(e)!==t&&i.classList.toggle(e,t)}function Yt(i,e,t){let n=i.style;n[e]!==t&&(n[e]=t)}var mt={codIn_mgL:12e3,tssIn_mgL:800,codRemPhysChem:.25,codRemUasb:.7,codRemMbbr:.5,codRemFilter:.3,tssRemOverall:.92,ch4Lhv_kWhm3:9.97,coagDose_mgL:300,coagSolution:.4,coagDensity:1.42,coagDayTank_L:200,polyDose_mgL:2,polyPrepConc:.001,polyTank_L:500,ch4Yield_m3kg:.35,ch4Fraction:.65,flareCapacity_m3h:15,airPerVolume_m3m3h:3,blowerPressure_bar:.35,blowerMotor_kW:2.2,mbbrFill:.5,carrierSsa_m2m3:500,doSet_mgL:2.5,uasbSepAngle_deg:50,pumpHead_m:8,pumpEfficiency:.55,pumpMotor_kW:.75,primarySludge_kgm3:.6,uasbYield_kgSSkgCOD:.05,clar2Sludge_kgd:2,purgeSolids:.02,thickSolids:.05,cakeSolids:.25,truckCapacity_m3:6,clarD_m:2.2,clarCylH_m:1.7,clarConeH_m:.85,thickD_m:2.4,thickH_m:2.6,filterArea_m2:45,filterDepth_m:.9,bedArea_m2:28},zo=nn.flow_Ls*3.6,Xs=zo*nn.hoursPerDay,ph=i=>i/1e3*zo;function $i(i=mt){let e=Math.PI*(i.clarD_m/2)**2,t=e*i.clarCylH_m+e*i.clarConeH_m/3,n=Math.PI*(i.thickD_m/2)**2*i.thickH_m,r=i.codIn_mgL*(1-i.codRemPhysChem),s=ph(r*i.codRemUasb),o=s*i.ch4Yield_m3kg,a=o/i.ch4Fraction,c=ph(i.coagDose_mgL),l=c/i.coagSolution/i.coagDensity,u=ph(i.polyDose_mgL),d=u/i.polyPrepConc,h=i.airPerVolume_m3m3h*20,f=1e3*9.81*(nn.flow_Ls/1e3)*i.pumpHead_m/1e3,p=i.primarySludge_kgm3*Xs,y=s*nn.hoursPerDay*i.uasbYield_kgSSkgCOD,g=p+y+i.clar2Sludge_kgd,m=g/(i.purgeSolids*1e3),v=g/(i.thickSolids*1e3),b=g/i.cakeSolids,_=b/(nn.apparentDensity_tm3*1e3),R=r*(1-i.codRemUasb)*(1-i.codRemMbbr),S=R*(1-i.codRemFilter),L=100*(1-S/i.codIn_mgL),P=Xs*(i.codIn_mgL-S)/1e3,w=o*nn.hoursPerDay,T=w*i.ch4Lhv_kWhm3,H=i.tssIn_mgL*(1-i.tssRemOverall);return{codFinal:S,codRemovalPct:L,codAvoided_kgd:P,ch4_m3d:w,energy_kWhd:T,tssOut:H,Q_m3h:zo,Q_m3d:Xs,clarArea:e,clarVol:t,thickVol:n,codUasbIn:r,codRemovedUasb_kgh:s,ch4_m3h:o,biogas_m3h:a,coag_kgh:c,coagSol_Lh:l,poly_kgh:u,polySol_Lh:d,air_m3h:h,pumpHyd_kW:f,primary_kgd:p,uasbSludge_kgd:y,totalSS_kgd:g,purge_m3d:m,thick_m3d:v,cake_kgd:b,cake_m3d:_,codOut:R,clarSurfaceLoad_mh:zo/e,uasbVup_mh:zo/nn.uasbCount/(Math.PI*1**2),uasbOlr_kgm3d:Xs/nn.uasbCount*r/1e3/10,mbbrArea_m2:20*i.mbbrFill*i.carrierSsa_m2m3,mbbrSalr_gm2d:Xs*r*(1-i.codRemUasb)/(20*i.mbbrFill*i.carrierSsa_m2m3),filterHydLoad_md:Xs/i.filterArea_m2,truckDays:i.truckCapacity_m3/_,coagDayTankDays:i.coagDayTank_L/(l*nn.hoursPerDay)}}var Jt=$i(),Pt=(i,e,t,n,r,s,o,a,c)=>({key:i,label:{es:e,en:t},value:n,unit:r,digits:s,cls:o,basis:{es:a,en:c}}),ym={clar1:Jt.clarVol,clar2:Jt.clarVol,thick:Jt.thickVol,filtro:mt.filterArea_m2*mt.filterDepth_m,dosC:mt.coagDayTank_L/1e3,dosF:mt.polyTank_L/1e3},Oo={homog:[Pt("codIn","DQO afluente","Influent COD",mt.codIn_mgL,"mg/L",0,"S","lixiviado t\xEDpico asumido","assumed typical leachate")],dosC:[Pt("coagDose","Dosis de FeCl\u2083","FeCl\u2083 dose",mt.coagDose_mgL,"mg/L",0,"S","ensayo de jarras no realizado","no jar test"),Pt("coagKg","Consumo","Consumption",Jt.coag_kgh,"kg/h",2,"C","dosis \xD7 Q","dose \xD7 Q"),Pt("coagSol","Soluci\xF3n 40 %","40 % solution",Jt.coagSol_Lh,"L/h",2,"C","consumo / (0,40 \xD7 1,42 kg/L)","consumption / (0.40 \xD7 1.42 kg/L)"),Pt("coagDays","Autonom\xEDa tanque 200 L","200 L tank autonomy",Jt.coagDayTankDays,"d",1,"C","a 8 h/d\xEDa","at 8 h/day")],dosF:[Pt("polyDose","Dosis de pol\xEDmero","Polymer dose",mt.polyDose_mgL,"mg/L",1,"S","ani\xF3nico, t\xEDpico","anionic, typical"),Pt("polySol","Soluci\xF3n 0,1 %","0.1 % solution",Jt.polySol_Lh,"L/h",1,"C","dosis \xD7 Q / 0,1 %","dose \xD7 Q / 0.1 %")],clar1:[Pt("clarSL","Carga superficial","Surface loading",Jt.clarSurfaceLoad_mh,"m/h",2,"C","Q / \xE1rea \xD82,2 m","Q / \xD82.2 m area"),Pt("primSS","Lodo primario","Primary sludge",Jt.primary_kgd,"kg SS/d",1,"C","0,6 kg SS/m\xB3 (S) \xD7 28,8 m\xB3/d","0.6 kg SS/m\xB3 (S) \xD7 28.8 m\xB3/d")],pump:[Pt("head","Altura supuesta","Assumed head",mt.pumpHead_m,"m",0,"S","sin curva de bomba","no pump curve"),Pt("hyd","Potencia hidr\xE1ulica","Hydraulic power",Jt.pumpHyd_kW,"kW",3,"C","\u03C1\xB7g\xB7Q\xB7H","\u03C1\xB7g\xB7Q\xB7H"),Pt("motor","Motor","Motor",mt.pumpMotor_kW,"kW",2,"S","tama\xF1o comercial asumido","assumed commercial size")],pumpB:[Pt("motorB","Motor","Motor",mt.pumpMotor_kW,"kW",2,"S","igual a P-01","same as P-01")],uasb1:[],uasb2:[],uasb3:[],uasb4:[],flare:[Pt("biogas","Biog\xE1s (4 UASB)","Biogas (4 UASB)",Jt.biogas_m3h,"m\xB3/h",1,"C","0,35 m\xB3 CH\u2084/kg DQO rem. \xF7 65 % CH\u2084","0.35 m\xB3 CH\u2084/kg COD rem. \xF7 65 % CH\u2084"),Pt("ch4","Metano","Methane",Jt.ch4_m3h,"m\xB3/h",1,"C","DQO removida \xD7 rendimiento","COD removed \xD7 yield"),Pt("flareCap","Capacidad de antorcha","Flare capacity",mt.flareCapacity_m3h,"m\xB3/h",0,"S","margen sobre el caudal estimado","margin over estimated flow")],clar2:[Pt("c2SS","Lodo secundario","Secondary sludge",mt.clar2Sludge_kgd,"kg SS/d",1,"S","arrastre UASB asumido","assumed UASB carry-over")],mbbr:[Pt("air","Aire de proceso","Process air",Jt.air_m3h,"Nm\xB3/h",0,"C","3 Nm\xB3/(m\xB3\xB7h) (S) \xD7 20 m\xB3","3 Nm\xB3/(m\xB3\xB7h) (S) \xD7 20 m\xB3"),Pt("area","Superficie protegida","Protected surface",Jt.mbbrArea_m2,"m\xB2",0,"C",`20 m\xB3 \xD7 llenado \xD7 ${mt.carrierSsa_m2m3} m\xB2/m\xB3 (S)`,`20 m\xB3 \xD7 fill \xD7 ${mt.carrierSsa_m2m3} m\xB2/m\xB3 (S)`),Pt("salr","Carga superficial DQO","Surface COD load",Jt.mbbrSalr_gm2d,"g/m\xB2\xB7d",1,"C","DQO de entrada \xD7 Q / superficie","inlet COD \xD7 Q / surface"),Pt("codOut","DQO estimada a la salida","Estimated outlet COD",Jt.codOut,"mg/L",0,"C","remociones supuestas en cadena","chained assumed removals")],filtro:[Pt("fhl","Carga hidr\xE1ulica","Hydraulic loading",Jt.filterHydLoad_md,"m/d",2,"C","28,8 m\xB3/d / 45 m\xB2 (S)","28.8 m\xB3/d / 45 m\xB2 (S)")],thick:[Pt("ssTot","S\xF3lidos a espesar","Solids to thicken",Jt.totalSS_kgd,"kg SS/d",1,"C","primario + UASB + CL-201","primary + UASB + CL-201"),Pt("purge","Purga al 2 %","Purge at 2 %",Jt.purge_m3d,"m\xB3/d",2,"C","SS / 20 kg/m\xB3","SS / 20 kg/m\xB3"),Pt("thk","Espesado al 5 %","Thickened at 5 %",Jt.thick_m3d,"m\xB3/d",2,"C","SS / 50 kg/m\xB3","SS / 50 kg/m\xB3")],sludge:[Pt("cake","Torta al 25 %","Cake at 25 %",Jt.cake_kgd,"kg/d",0,"C","SS / 0,25","SS / 0.25"),Pt("cakeV","Volumen de torta","Cake volume",Jt.cake_m3d,"m\xB3/d",3,"C","densidad aparente 0,75 t/m\xB3 (brief)","apparent density 0.75 t/m\xB3 (brief)"),Pt("truck","Retiro con cami\xF3n de 6 m\xB3","6 m\xB3 truck pick-up",Jt.truckDays,"d",0,"C","cada cu\xE1ntos d\xEDas","every N days")]};for(let i of["uasb1","uasb2","uasb3","uasb4"])Oo[i]=[Pt("rem","Remoci\xF3n DQO","COD removal",mt.codRemUasb*100,"%",0,"S","UASB t\xEDpico con lixiviado","typical UASB on leachate"),Pt("vup","Velocidad ascensional","Upflow velocity",Jt.uasbVup_mh,"m/h",2,"C","Q \xF7 4 / \xE1rea \xD8 2,0 m","Q \xF7 4 / \xD8 2.0 m area"),Pt("olr","Carga org\xE1nica (COV)","Organic loading (OLR)",Jt.uasbOlr_kgm3d,"kg DQO/m\xB3\xB7d",1,"C","por d\xEDa de operaci\xF3n de 8 h","per 8 h operating day")];var L_={homog:{es:"Pretratamiento \xB7 ecualizaci\xF3n",en:"Pretreatment \xB7 equalization"},coag:{es:"Fisicoqu\xEDmico \xB7 coagulaci\xF3n",en:"Physicochemical \xB7 coagulation"},floc:{es:"Fisicoqu\xEDmico \xB7 floculaci\xF3n",en:"Physicochemical \xB7 flocculation"},clar1:{es:"Tratamiento primario \xB7 sedimentaci\xF3n",en:"Primary treatment \xB7 settling"},sludge:{es:"L\xEDnea de lodos \xB7 secado",en:"Sludge line \xB7 drying"},inter:{es:"Bombeo \xB7 pulm\xF3n de succi\xF3n",en:"Pumping \xB7 suction buffer"},pump:{es:"Bombeo a tren UASB",en:"Pumping to UASB train"},uasb1:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},uasb2:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},uasb3:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},uasb4:{es:"Secundario anaerobio \xB7 1 de 4 en paralelo",en:"Anaerobic secondary \xB7 1 of 4 parallel"},clar2:{es:"Clarificaci\xF3n secundaria",en:"Secondary clarification"},mbbr:{es:"Pulimento aerobio \xB7 biopel\xEDcula \xB7 aire: soplante B-301",en:"Aerobic polishing \xB7 biofilm \xB7 air: blower B-301"},filtro:{es:"Afinamiento final \xB7 lecho plantado",en:"Final polishing \xB7 planted bed"},discharge:{es:"Salida de efluente tratado",en:"Treated effluent outlet"},screen:{es:"Pretratamiento \xB7 cribado",en:"Pretreatment \xB7 screening"},dosC:{es:"Fisicoqu\xEDmico \xB7 dosificaci\xF3n",en:"Physicochemical \xB7 dosing"},dosF:{es:"Fisicoqu\xEDmico \xB7 dosificaci\xF3n de pol\xEDmero",en:"Physicochemical \xB7 polymer dosing"},pumpB:{es:"Bombeo \xB7 reserva",en:"Pumping \xB7 standby"},flare:{es:"Biog\xE1s \xB7 combusti\xF3n controlada",en:"Biogas \xB7 controlled combustion"},thick:{es:"L\xEDnea de lodos \xB7 espesamiento",en:"Sludge line \xB7 thickening"},control:{es:"Servicios \xB7 control y qu\xEDmicos",en:"Services \xB7 control and chemicals"}},k_=["sludge","thick","dosC","dosF","pumpB","flare","control"],Em=i=>i.startsWith("uasb");function _m(i){return gc.find(e=>e.units.includes(i))?.id??null}function H_(i){return k_.includes(i)?null:Em(i)?ks.perUasb_Ls:nn.flow_Ls}function D_(i,e){return i==null?xe("not_applicable",e):i<1?`${gn(i*60,0,e)} min`:`${gn(i,1,e)} h`}var vm=$i();function U_(i,e,t,n){return`${gn(i,e,n)}${t?" "+t:""}`}function B_(i){let e=Ue[i].volume;if(e!=null)return{v:e,cls:"B"};let t=ym[i];return t!=null?{v:t,cls:"S"}:null}function N_(i,e){return(Oo[i]??[]).map(t=>({key:t.key,label:t.label[e],value:U_(t.value,t.digits,t.unit,e),cls:t.cls,basis:t.basis[e]}))}function Mm(i,e,t){if(!e)return null;let n=Ue[e],s=!!i.units[e]?.active,o=H_(e),a;e==="pumpB"?a=xe("flow_reserve",t):s?e==="sludge"||e==="thick"?a=`${xe("flow_sludge",t)} \xB7 ${gn(vm.totalSS_kgd,1,t)} kg SS/d (${xe("cls_C",t)})`:e==="flare"?a=`${xe("flow_flare",t)} \u2248 ${gn(vm.biogas_m3h,1,t)} m\xB3/h (${xe("cls_C",t)})`:e==="dosC"?a=`FeCl\u2083 ${gn(Oo.dosC?.[0]?.value??0,0,t)} mg/L (${xe("cls_S",t)})`:e==="dosF"?a=`${xe("flow_poly",t)} ${gn(Oo.dosF?.[0]?.value??0,1,t)} mg/L (${xe("cls_S",t)})`:e==="control"?a=xe("flow_control",t):Em(e)?a=`${gn(ks.perUasb_Ls,2,t)} L/s \xB7 ${xe("flow_uasb",t)}`:e==="pump"?a=`${xe("flow_pump",t)} \xB7 ${gn(nn.flow_Ls,1,t)} L/s`:a=`${xe("flow_on",t)} \xB7 ${gn(nn.flow_Ls,1,t)} L/s`:a=xe("flow_off",t);let c=B_(e),l=o==null||!c?null:Mp(c.v,o),u=_m(e),d=u?fh[u][t]:"\u2014";return{id:e,tag:n.tag,name:n.name[t],fn:n.fn[t],role:L_[e][t],stage:d,flowText:a,volumeText:c?`${gn(c.v,c.v<10&&c.cls==="S"?2:0,t)} m\xB3`:xe("not_applicable",t),volumeCls:c?c.cls:null,hrtText:D_(l,t),hrtCls:l==null?null:"C",hrtNote:l==null||!c?"":`${gn(c.v,c.v<10&&c.cls==="S"?2:0,t)} m\xB3 / ${gn((o??0)*3.6,2,t)} m\xB3/h`,facts:N_(e,t),active:s,tags:[{key:s?"active":"standby",text:xe(s?"tag_active":e==="pumpB"?"tag_reserve":"tag_standby",t)},{key:"selected",text:xe("tag_selected",t)},{key:"stage",text:d}]}}var bm={away:"tk_away",enroute:"tk_enroute",bay:"tk_bay",unloading:"tk_unloading",loading:"tk_loading",leaving:"tk_leaving"};function wm(i,e){let t=["uasb1","uasb2","uasb3","uasb4"].filter(o=>i.units[o].active).length,n=i.units.discharge.active,r=i.logistics,s=(i.pipes["p-clar1-thick"]?.front??0)>0;return{flow:`${gn(nn.flow_Ls,1,e)} L/s`,flowSub:`${gn(ks.flow_m3h,1,e)} m\xB3/h \xB7 ${xe("kpi_flow_sub",e)}`,ops:`${nn.hoursPerDay} ${xe("kpi_ops_unit",e)}`,opsSub:`${gn(ks.daily_m3,1,e)} m\xB3/d`,uasb:`${t}/${nn.uasbCount}`,uasbOn:t,uasbSub:xe("kpi_uasb_sub",e),eff:xe(n?"on":"wait",e),effOn:n,effSub:xe(n?"eff_sub_on":"eff_sub_off",e),sludge:xe(s?"on":"wait",e),sludgeOn:s,sludgeSub:xe(s?"sludge_sub_on":"sludge_sub_off",e),health:xe("kpi_health_val",e),healthSub:xe("kpi_health_sub",e),staff:`${xe("staff_on_site",e)}: ${r?.personnel??0}`,staffSub:r?`${xe("truck_chem",e)}: ${xe(bm[r.trucks.chemical],e)} \xB7 ${xe("truck_sludge",e)}: ${xe(bm[r.trucks.sludge],e)}`:"\u2014",trucksOn:!!r&&(r.trucks.chemical!=="away"||r.trucks.sludge!=="away"),lights:`${xe("lights",e)}: ${xe(i.lighting?.fixtures?"lights_on":"lights_off",e)}`,lightsOn:!!i.lighting?.fixtures}}function Tm(i,e){return _r.map((t,n)=>({id:t.id,name:fh[t.id][e],done:i.trackerDone[t.id],active:i.trackerIndex===n,progress:hm(n,i.t)}))}function Sm(i,e){let t=["uasb1","uasb2","uasb3","uasb4"];return{visible:(i.pipes["p-feed-uasb1"]?.front??0)>0,rows:t.map(r=>({id:r,label:Ue[r].tag,pct:`${gn(100/nn.uasbCount,0,e)} %`,q:`${gn(ks.perUasb_Ls,2,e)} L/s`,fill:i.pipes[`p-feed-${r}`]?.front??0}))}}var Vc=class{constructor(e){this.cards=[];this.root=O("div","kpis",e);let t=["kpi_flow","kpi_ops","kpi_uasb","kpi_eff","kpi_sludge","kpi_staff","kpi_health"];for(let n of t){let r=O("div","panel kpi",this.root);r.style.position="relative";let s=O("div","cap",r),o=O("div","row",r),a=O("div","v",o),c=O("div","badge",o),l=O("div","s",r);r.dataset.kpi=n,this.cards.push({root:r,cap:s,v:a,badge:c,s:l,key:n})}}update(e,t){let n=wm(e,t),r=[[n.flow,n.flowSub,"B \xB7 brief",e.plantState==="Active",!1],[n.ops,n.opsSub,t==="es"?"C \xB7 c\xE1lculo":"C \xB7 calc.",!0,!1],[n.uasb,n.uasbSub,n.uasbOn===4?xe("on",t):xe("wait",t),n.uasbOn>0,n.uasbOn===0],[n.eff,n.effSub,"",n.effOn,!n.effOn],[n.sludge,n.sludgeSub,"",n.sludgeOn,!n.sludgeOn],[n.staff,n.staffSub,n.lights,n.trucksOn,!1],[n.health,n.healthSub,"",!0,!1]];this.cards.forEach((s,o)=>{let[a,c,l,u,d]=r[o];ue(s.cap,xe(s.key,t)),ue(s.v,a),ue(s.s,c),ue(s.badge,l),s.badge.style.display=l?"":"none",qt(s.badge,"on",u&&o===2||s.key==="kpi_staff"&&n.lightsOn),s.key==="kpi_staff"&&(s.badge.dataset.role="lights"),qt(s.root,"on",u&&o!==1),qt(s.root,"warm",o===1),qt(s.v,"off",d)})}};var Gc=class{constructor(e){this.rows=[];this.root=O("div","panel events",e);let t=O("div","hd",this.root);this.cap=O("div","cap",t),this.count=O("div","cap mono",t);let n=O("div","evlist",this.root);for(let r=0;r<4;r++){let s=O("div","ev",n),o=O("span","tm",s);O("span","lv",s);let a=O("span","tx",s);this.rows.push({r:s,tm:o,tx:a})}}update(e,t){ue(this.cap,xe("events",t)),ue(this.count,String(e.alerts.length).padStart(2,"0"));let n=e.alerts.slice(-4).reverse();this.rows.forEach((r,s)=>{let o=n[s];r.r.style.visibility=o?"visible":"hidden",o&&(ue(r.tm,Er(o.t)),ue(r.tx,o.text[t]),r.r.className=`ev ${o.level}`,qt(r.r,"fresh",s===0&&e.t-o.t<2.5))})}};var Wc=class{constructor(e){this.steps=[];this.cons=[];this.root=O("div","panel tracker",e);let t=O("div","hd",this.root);this.cap=O("div","cap",t),this.idx=O("div","cap mono",t);let n=O("div","steps",this.root),r=9,s=bt.tracker.x1-bt.tracker.x0-44,o=80,a=s-80,c=Array.from({length:r},(l,u)=>o+(a-o)*u/(r-1));for(let l=0;l<r-1;l++){let u=O("div","cn",n);u.style.left=`${c[l]+17}px`,u.style.width=`${c[l+1]-c[l]-34}px`,O("i","",u),this.cons.push(u)}for(let l=0;l<r;l++){let u=O("div","stp",n);u.style.left=`${c[l]}px`,u.dataset.step=String(l);let d=O("div","nd",u,String(l+1)),h=O("div","lb",u);this.steps.push({r:u,nd:d,lb:h})}}update(e,t){let n=Tm(e,t);ue(this.cap,xe("tracker",t));let r=n.filter(o=>o.done).length,s=e.trackerIndex>=0?e.trackerIndex+1:r;ue(this.idx,`${String(s).padStart(2,"0")} / 09`),n.forEach((o,a)=>{let c=this.steps[a];if(qt(c.r,"done",o.done),qt(c.r,"active",o.active),ue(c.lb,o.name),ue(c.nd,String(a+1)),a<n.length-1){let l=o.done?1:o.active?o.progress:0;Yt(this.cons[a].firstChild,"width",`${(l*100).toFixed(1)}%`)}})}};var Xc=class{constructor(e){this.factsKey="";this.lastKey="";this.shown=null;this.root=O("div","detail",e),this.root.dataset.role="detail";let t=O("div","panel hdr",this.root);t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="320px";let n=O("div","row",t);this.cap=O("div","cap",n),this.stageCap=O("div","cap mono",n),O("div","frameL",this.root),O("div","frameR",this.root);let r=O("div","thumb",this.root);this.ph=O("div","ph",r),this.body=O("div","panel body",this.root),this.empty=O("div","empty",this.body),this.filled=O("div","",this.body),this.nm=O("div","nm",this.filled),this.nm.dataset.role="detail-name";let s=O("div","tagline",this.filled);this.tagid=O("span","tagid",s),this.tagid.dataset.role="detail-tag",this.chips=O("div","chips",this.filled);let o=O("div","kv",this.filled);this.kFn=O("div","k",o),this.fn=O("div","v",o),this.kFlow=O("div","k",o),this.flow=O("div","v big",o),this.kRole=O("div","k",o),this.role=O("div","v",o);let a=O("div","kv2",this.filled),c=O("div","",a),l=O("div","",a);this.kVol=O("div","cap",c);let u=O("div","vrow",c);this.vol=O("span","v",u),this.volB=O("span","cls",u),this.kHrt=O("div","cap",l);let d=O("div","vrow",l);this.hrt=O("span","v",d),this.hrtB=O("span","cls",d),this.note=O("div","note",this.filled),this.factsWrap=O("div","facts",this.filled),this.factsCap=O("div","k",this.factsWrap),this.factsGrid=O("div","fgrid",this.factsWrap),this.foot=O("div","foot",this.body)}update(e,t,n){let r=Mm(e,t,n);if(this.shown=r?r.id:null,ue(this.cap,xe("detail",n)),ue(this.stageCap,r?r.tag:"\u2014"),Yt(this.ph,"display",r?"none":"flex"),ue(this.ph,xe("none_selected",n)),Yt(this.empty,"display",r?"none":"block"),Yt(this.filled,"display",r?"block":"none"),ue(this.empty,xe("hint_click",n)),ue(this.foot,xe("cls_legend",n)),!r)return;this.root.dataset.unit=r.id,ue(this.nm,r.name),ue(this.tagid,r.tag);let s=`${r.id}|${n}|${r.active}`;if(s!==this.lastKey){this.lastKey=s,this.chips.textContent="";for(let a of r.tags)O("span",`chip ${a.key}`,this.chips,a.text)}ue(this.kFn,xe("d_function",n)),ue(this.fn,r.fn),ue(this.kFlow,xe("d_flow",n)),ue(this.flow,r.flowText),ue(this.kRole,xe("d_role",n)),ue(this.role,r.role),ue(this.kVol,xe("d_volume",n)),ue(this.vol,r.volumeText),ue(this.kHrt,xe("d_hrt",n)),ue(this.hrt,r.hrtText),qt(this.vol,"nd",r.volumeCls==null),qt(this.hrt,"nd",r.hrtCls==null),Rm(this.volB,r.volumeCls,n),Rm(this.hrtB,r.hrtCls,n),ue(this.note,""),Yt(this.note,"display","none"),this.hrt.title=r.hrtNote;let o=`${r.id}|${n}`;if(o!==this.factsKey){this.factsKey=o,this.factsGrid.textContent="",qt(this.factsGrid,"two",r.facts.length>=3);for(let a of r.facts){let c=O("div","fr",this.factsGrid);c.dataset.fact=a.key,c.title=`${a.cls} \xB7 ${xe(`cls_${a.cls}`,n)}: ${a.basis}`,O("div","fl",c,a.label);let l=O("div","fv",c);O("span","",l,a.value);let u=O("span",`cls ${a.cls}`,l,a.cls);u.title=a.basis}}Yt(this.factsWrap,"display",r.facts.length?"block":"none"),ue(this.factsCap,xe("d_facts",n))}};function Rm(i,e,t){Yt(i,"display",e?"":"none"),e&&(ue(i,e),i.className=`cls ${e}`,i.title=xe(`cls_${e}`,t))}var qc=class{constructor(e,t){this.rows=[];this.root=O("div","panel split",e),this.root.style.top=`${t}px`,this.cap=O("div","cap",this.root);let n=O("div","rows",this.root);for(let r=0;r<4;r++){let s=O("div","r",n),o=O("span","l",s),a=O("div","bar",s),c=O("i","",a),l=O("span","p",s),u=O("span","q",s);this.rows.push({l:o,bar:c,p:l,q:u})}this.noteEl=O("div","note",this.root)}update(e,t){let n=Sm(e,t);Yt(this.root,"display",n.visible?"block":"none"),n.visible&&(ue(this.cap,xe("split",t)),ue(this.noteEl,`\u03A3 1,00 L/s \xB7 ${xe("split_note",t)}`.replace("1,00",t==="es"?"1,00":"1.00")),n.rows.forEach((r,s)=>{let o=this.rows[s];ue(o.l,r.label),Yt(o.bar,"width",`${(r.fill*25).toFixed(2)}%`),ue(o.p,r.pct),ue(o.q,r.q)}))}};var Vo="http://www.w3.org/2000/svg",Si=26,qs=32,Yc=18;var Am=["uasb1","uasb2","uasb3","uasb4"],Cm={homog:"homog",coag:"coag",floc:"floc",clar1:"clar1",uasb:"uasb-group",clar2:"clar2",mbbr:"mbbr",filtro:"filtro",discharge:"discharge"},gh={"uasb-group":{t:"R-201\u2026R-204",n:{es:"UASB \xD74 en paralelo",en:"UASB \xD74 in parallel"}},landfill:{t:"Origen \xB7 supuesto",n:{es:"Vertedero \xB7 lluvia",en:"Landfill \xB7 rain"}},pond:{t:"Lixiviado",n:{es:"Laguna de lixiviados",en:"Leachate pond"}},wetland:{t:"Agua recuperada",n:{es:"Humedal receptor",en:"Receiving wetland"}}},F_=i=>i in gh,z_=[{id:"landfill",t0:0,t1:1.6},{id:"pond",t0:1.6,t1:_r[0].t0},{id:"wetland",t0:44,t1:1/0}],Ri=$i(),En=(i,e,t)=>i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),O_={"uasb-group":[{unit:"uasb2",key:"tGas",text:i=>i==="es"?`Biog\xE1s \u2192 antorcha \xB7 ${En(Ri.biogas_m3h,1,i)} m\xB3/h \xB7 C`:`Biogas \u2192 flare \xB7 ${En(Ri.biogas_m3h,1,i)} m\xB3/h \xB7 C`},{unit:"uasb2",key:"tGls",text:i=>i==="es"?`Separador trif\xE1sico gas\xB7l\xEDquido\xB7s\xF3lido \xB7 ${mt.uasbSepAngle_deg}\xB0 \xB7 S`:`Three-phase separator \xB7 ${mt.uasbSepAngle_deg}\xB0 \xB7 S`},{unit:"uasb2",key:"tBlanket",text:i=>i==="es"?`Manto de lodo \xB7 ascenso ${En(Ri.uasbVup_mh,2,i)} m/h \xB7 C`:`Sludge blanket \xB7 upflow ${En(Ri.uasbVup_mh,2,i)} m/h \xB7 C`},{unit:"uasb2",key:"tBed",text:i=>i==="es"?`Lecho granular \xB7 COV ${En(Ri.uasbOlr_kgm3d,1,i)} kg DQO/m\xB3\xB7d \xB7 C`:`Granular bed \xB7 OLR ${En(Ri.uasbOlr_kgm3d,1,i)} kg COD/m\xB3\xB7d \xB7 C`}],mbbr:[{unit:"mbbr",key:"tMedia",text:i=>i==="es"?`Soportes PEAD \xB7 llenado ${En(mt.mbbrFill*100,0,i)} % \xB7 ${En(Ri.mbbrArea_m2,0,i)} m\xB2 \xB7 S/C`:`HDPE carriers \xB7 ${En(mt.mbbrFill*100,0,i)} % fill \xB7 ${En(Ri.mbbrArea_m2,0,i)} m\xB2 \xB7 S/C`},{unit:"mbbr",key:"tAir",text:i=>i==="es"?`Difusores de fondo \xB7 ${En(Ri.air_m3h,0,i)} Nm\xB3/h \xB7 C`:`Bottom diffusers \xB7 ${En(Ri.air_m3h,0,i)} Nm\xB3/h \xB7 C`},{unit:"mbbr",key:"tBlower",text:i=>i==="es"?`Soplante B-301 \xB7 ${En(mt.blowerPressure_bar,2,i)} bar \xB7 ${En(mt.blowerMotor_kW,1,i)} kW \xB7 S`:`Blower B-301 \xB7 ${En(mt.blowerPressure_bar,2,i)} bar \xB7 ${En(mt.blowerMotor_kW,1,i)} kW \xB7 S`},{unit:"mbbr",key:"tDo",text:i=>i==="es"?`Sonda OD \xB7 consigna ${En(mt.doSet_mgL,1,i)} mg/L \xB7 S`:`DO probe \xB7 setpoint ${En(mt.doSet_mgL,1,i)} mg/L \xB7 S`},{unit:"mbbr",key:"tScreen",text:i=>i==="es"?"Tamiz de retenci\xF3n de soportes":"Carrier retention screen"}]},mh=18,Zc=class{constructor(e){this.focus=new Map;this.markers=[];this.notes=new Map;this.v=new x;this.visible=!0;this.lastRects=[];this.root=O("div","labels",e),this.svg=document.createElementNS(Vo,"svg"),this.svg.setAttribute("viewBox","0 0 1920 1080"),this.root.appendChild(this.svg),_r.forEach((t,n)=>{let r=Cm[t.id],s=O("div","mk",this.root,String(n+1));s.dataset.unit=r,this.markers.push({id:r,stageIdx:n,div:s})})}focusItem(e){let t=this.focus.get(e);if(t)return t;let n=O("div","lbl",this.root);n.dataset.unit=e;let r=O("div","t",n),s=O("div","n",n),o=document.createElementNS(Vo,"line");o.setAttribute("stroke","rgba(31,45,90,0.55)"),o.setAttribute("stroke-width","1.2");let a=document.createElementNS(Vo,"circle");return a.setAttribute("r","3.2"),a.setAttribute("fill","#2f5bea"),a.setAttribute("stroke","#fff"),a.setAttribute("stroke-width","1.5"),this.svg.append(o,a),t={id:e,div:n,t:r,n:s,stem:o,dot:a,w:0,wLang:null},this.focus.set(e,t),t}anchorOf(e,t){if(t==="uasb-group"){let n=Am.map(r=>e.units[r]?.anchors.label).filter(r=>!!r);return n.length?n.reduce((r,s)=>r.add(s),new x).multiplyScalar(1/n.length).add(new x(0,.4,0)):void 0}return t==="landfill"||t==="pond"?e.landfill?.anchors[t]:t==="wetland"?e.wetland?.anchor:e.units[t]?.anchors.label}project(e,t){return!e||(this.v.copy(e).project(t),!(this.v.z<1&&this.v.z>-1))?null:[(this.v.x*.5+.5)*1920,(-this.v.y*.5+.5)*1080]}focusIds(e,t){let n=[],r=z_.find(s=>e.t>=s.t0&&e.t<s.t1);return r?n.push(r.id):e.trackerIndex>=0&&n.push(Cm[_r[e.trackerIndex].id]),t&&!n.length&&n.push(t),n}update(e,t,n,r,s,o=[],a=[]){if(this.lastRects=[],this.root.style.display=this.visible?"block":"none",!this.visible)return;let c=bt.safe,l=[...o],u=y=>y.x0>=c.x0&&y.x1<=c.x1&&y.y0>=c.y0&&y.y1<=c.y1,d=(y,g)=>u(y)&&!l.some(m=>V_(m,y,g)),h=this.focusIds(n,r);for(let y of this.focus.values())h.includes(y.id)||this.hideFocus(y);let f=new Set;for(let y of h){let g=this.focusItem(y);g.wLang!==s&&(F_(y)?(ue(g.t,gh[y].t),ue(g.n,gh[y].n[s])):(ue(g.t,Ue[y].tag),ue(g.n,gm[y]?.[s]??Ue[y].name[s])),g.div.style.display="block",g.w=Math.ceil(g.div.offsetWidth)||140,g.wLang=s);let m=this.project(this.anchorOf(e,y),t),v=!1,b=0,_=0,R=0,S=0;if(m&&m[0]>=c.x0&&m[0]<=c.x1&&m[1]>=c.y0&&m[1]<=c.y1){let[L,P]=m,w=g.w,T=[[L-w/2,P-Si-qs,L,P-Si],[L-w/2,P-Si*2-qs,L,P-Si*2],[L+14,P-Si-qs+6,L+14,P-Si+6],[L-w-14,P-Si-qs+6,L-14,P-Si+6],[L-w/2,P+Si,L,P+Si]];for(let[H,N,U,F]of T){let I={x0:H,y0:N,x1:H+w,y1:N+qs};if(d(I,6)){b=H,_=N,R=U,S=F,v=!0,l.push(I);break}}v&&(g.div.style.transform=`translate(${b.toFixed(1)}px, ${_.toFixed(1)}px)`,g.stem.setAttribute("x1",L.toFixed(1)),g.stem.setAttribute("y1",P.toFixed(1)),g.stem.setAttribute("x2",R.toFixed(1)),g.stem.setAttribute("y2",S.toFixed(1)),g.dot.setAttribute("cx",L.toFixed(1)),g.dot.setAttribute("cy",P.toFixed(1)),l.push({x0:L-6,y0:P-6,x1:L+6,y1:P+6}),this.lastRects.push({id:y,x0:b,y0:_,x1:b+w,y1:_+qs}),f.add(y))}g.div.style.display=v?"block":"none",g.stem.style.display=v?"":"none",g.dot.style.display=v?"":"none"}let p=new Set;for(let y of f)for(let g of O_[y]??[]){let m=`${g.unit}:${g.key}`,v=this.notes.get(m);if(!v){let P=O("div","note3",this.root),w=document.createElementNS(Vo,"line");w.setAttribute("stroke","rgba(31,45,90,0.45)"),w.setAttribute("stroke-width","1");let T=document.createElementNS(Vo,"circle");T.setAttribute("r","2.4"),T.setAttribute("fill","#fff"),T.setAttribute("stroke","#2f5bea"),T.setAttribute("stroke-width","1.4"),this.svg.append(w,T),v={div:P,stem:w,dot:T,w:0,lang:null},this.notes.set(m,v)}v.lang!==s&&(ue(v.div,g.text(s)),v.div.style.display="block",v.w=Math.ceil(v.div.offsetWidth)||180,v.lang=s);let b=this.project(e.units[g.unit]?.anchors[g.key],t);if(!b)continue;let[_,R]=b,S=v.w,L=[[_+34,R-30],[_-34-S,R-30],[_+34,R+12],[_-34-S,R+12],[_+44,R-9],[_-44-S,R-9]];for(let[P,w]of L){let T={x0:P,y0:w,x1:P+S,y1:w+mh};if(!d(T,4))continue;l.push(T,{x0:_-4,y0:R-4,x1:_+4,y1:R+4}),v.div.style.transform=`translate(${P.toFixed(1)}px, ${w.toFixed(1)}px)`;let H=P>_?P:P+S;v.stem.setAttribute("x1",_.toFixed(1)),v.stem.setAttribute("y1",R.toFixed(1)),v.stem.setAttribute("x2",H.toFixed(1)),v.stem.setAttribute("y2",(w+mh/2).toFixed(1)),v.dot.setAttribute("cx",_.toFixed(1)),v.dot.setAttribute("cy",R.toFixed(1)),this.lastRects.push({id:y,x0:P,y0:w,x1:P+S,y1:w+mh}),p.add(m);break}}for(let[y,g]of this.notes){let m=p.has(y);g.div.style.display=m?"block":"none",g.stem.style.display=m?"":"none",g.dot.style.display=m?"":"none"}for(let y of this.markers){let g=!1;if(!f.has(y.id)&&!(y.id==="uasb-group"&&r&&Am.includes(r)&&f.has(r))){let m=this.project(this.anchorOf(e,y.id),t);if(m){let v={x0:m[0]-Yc/2,y0:m[1]-Yc/2,x1:m[0]+Yc/2,y1:m[1]+Yc/2};if(d(v,3)){g=!0,l.push(v),y.div.style.transform=`translate(${v.x0.toFixed(1)}px, ${v.y0.toFixed(1)}px)`;let b=y.id==="uasb-group"?"uasb1":y.id;qt(y.div,"on",!!n.units[b]?.active)}}}y.div.style.display=g?"block":"none"}}hideFocus(e){e.div.style.display="none",e.stem.style.display="none",e.dot.style.display="none"}};function V_(i,e,t){return i.x0<e.x1+t&&e.x0<i.x1+t&&i.y0<e.y1+t&&e.y0<i.y1+t}var Ki=$i(),Go=(i,e)=>{let t=uh[i];return t==null||!Number.isFinite(t)?0:Xt(e,t,t+1.6)};function Jc(i){let e=Go("clar1",i),t=Go("uasb1",i),n=Go("mbbr",i),r=Go("filtro",i),s=mt.codIn_mgL;s*=1-mt.codRemPhysChem*e,s*=1-mt.codRemUasb*t,s*=1-mt.codRemMbbr*n,s*=1-mt.codRemFilter*r;let o=100*(1-s/mt.codIn_mgL),a=Go("discharge",i),c=mt.tssIn_mgL-(mt.tssIn_mgL-Ki.tssOut)*(.55*e+.2*t+.1*n+.15*r);return{codNow:s,removalPct:o,avoided_kgd:Ki.Q_m3d*(mt.codIn_mgL-s)/1e3,energy_kWhd:Ki.energy_kWhd*t,water_m3d:Ki.Q_m3d*a,tssNow:c,clean:o/Ki.codRemovalPct}}var Ys=(i,e,t)=>{let n=i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return t==="es"?n.replace(/ /g," "):n},$c=class{constructor(e){this.tiles=[];this.root=O("div","panel impact",e);let t=O("div","ihd",this.root);this.cap=O("div","cap",t),O("span","cls C",t,"C");let n=O("div","igrid",this.root),r=[{label:{es:"Agua devuelta",en:"Water returned"},unit:"m\xB3/d",digits:1,max:Ki.Q_m3d,get:s=>s.water_m3d},{label:{es:"DQO removida",en:"COD removed"},unit:"%",digits:0,max:Ki.codRemovalPct,get:s=>s.removalPct},{label:{es:"Carga evitada",en:"Load avoided"},unit:"kg DQO/d",digits:0,max:Ki.codAvoided_kgd,get:s=>s.avoided_kgd},{label:{es:"Energ\xEDa del biog\xE1s",en:"Biogas energy"},unit:"kWh/d",digits:0,max:Ki.energy_kWhd,get:s=>s.energy_kWhd}];for(let s of r){let o=O("div","it",n),a=O("div","k",o),c=O("div","vr",o),l=O("span","v",c),u=O("span","u",c),d=O("div","ib",o),h=O("i","",d);this.tiles.push({k:a,v:l,u,bar:h,spec:s})}}update(e,t){let n=Jc(e.t);ue(this.cap,t==="es"?"Impacto \xB7 por d\xEDa de operaci\xF3n":"Impact \xB7 per operating day");for(let r of this.tiles){let s=r.spec.get(n);ue(r.k,r.spec.label[t]),ue(r.v,s>1e-6?Ys(s,r.spec.digits,t):"\u2014"),ue(r.u,r.spec.unit),Yt(r.bar,"width",`${Math.max(0,Math.min(100,100*s/r.spec.max)).toFixed(1)}%`)}}},Kc=class{constructor(e,t){this.visible=!1;this.root=O("div","panel compare",e),this.root.style.top=`${t}px`;let n=O("div","chd",this.root);this.cap=O("div","cap",n),this.delta=O("div","delta",n);let r=O("div","crow",this.root),s=()=>{let c=O("div","side",r),l=O("div","vial",c),u=O("i","",l),d=O("div","tx",c);return{fill:u,n:O("div","n",d),c:O("div","m",d),s:O("div","m",d)}},o=s();O("div","arrow",r,"\u2192");let a=s();this.fillA=o.fill,this.fillB=a.fill,this.a=o,this.b=a,this.foot=O("div","note",this.root)}update(e,t){let n=e.t;if(this.visible=n>=37.5,Yt(this.root,"display",this.visible?"block":"none"),!this.visible)return;let r=Jc(n);ue(this.cap,t==="es"?"Antes \xB7 Despu\xE9s":"Before \xB7 After"),ue(this.delta,`\u2212${Ys(r.removalPct,0,t)} % DQO`),ue(this.a.n,t==="es"?"Lixiviado crudo":"Raw leachate"),ue(this.a.c,`DQO ${Ys(mt.codIn_mgL,0,t)} mg/L`),ue(this.a.s,`SST ${Ys(mt.tssIn_mgL,0,t)} mg/L`),ue(this.b.n,t==="es"?"Efluente final":"Final effluent"),ue(this.b.c,`DQO ${Ys(r.codNow,0,t)} mg/L`),ue(this.b.s,`SST ${Ys(r.tssNow,0,t)} mg/L`),ue(this.foot,t==="es"?"Entrada: S supuesto \xB7 salida: C c\xE1lculo":"Inlet: S assumed \xB7 outlet: C calculated"),Yt(this.fillA,"background","linear-gradient(180deg,#a8692a,#6e3f15)");let s=Math.max(0,Math.min(1,r.clean)),o=(l,u)=>l.map((d,h)=>Math.round(d+(u[h]-d)*s)),a=o([168,105,42],[150,228,220]),c=o([110,63,21],[60,190,178]);Yt(this.fillB,"background",`linear-gradient(180deg,rgb(${a}),rgb(${c}))`)}};var jc=class{constructor(e,t){this.h=t;this.speeds=[];this.scrubbing=!1;this.root=O("div","panel controls pe",e),this.play=O("button","btn",this.root),this.play.onclick=()=>t.togglePlay(),this.range=O("input","",this.root),this.range.type="range",this.range.min="0",this.range.max="50",this.range.step="0.01",this.range.oninput=()=>{this.scrubbing=!0,t.seek(parseFloat(this.range.value))},this.range.onchange=()=>{this.scrubbing=!1},this.tm=O("span","tm",this.root);let n=O("div","seg",this.root);for(let s of[.5,1,2]){let o=O("button","btn",n,`\xD7${s}`);o.onclick=()=>t.setSpeed(s),o.dataset.speed=String(s),this.speeds.push(o)}this.loopB=O("button","btn",this.root),this.loopB.onclick=()=>t.toggleLoop();let r=O("div","seg",this.root);this.mNar=O("button","btn",r),this.mOv=O("button","btn",r),this.mNar.onclick=()=>t.setMode("narrative"),this.mOv.onclick=()=>t.setMode("overview"),this.back=O("button","btn",this.root),this.back.onclick=()=>t.setMode("narrative"),window.addEventListener("keydown",s=>{s.target?.tagName==="INPUT"&&s.target.type!=="range"||(s.code==="Space"?(s.preventDefault(),t.togglePlay()):s.code==="ArrowLeft"?(s.preventDefault(),t.step(-1)):s.code==="ArrowRight"?(s.preventDefault(),t.step(1)):s.code==="KeyL"?t.toggle("labels"):s.code==="KeyP"?t.toggle("pipes"):s.code==="KeyF"?t.toggle("flow"):s.code==="KeyV"?t.toggle("actors"):s.code==="KeyN"&&t.cycleLight())})}update(e,t){ue(this.play,e.playing?`\u275A\u275A ${xe("pause",t)}`:`\u25B6 ${xe("play",t)}`),this.scrubbing||(this.range.value=e.t.toFixed(2)),ue(this.tm,`${Er(e.t)} / ${Er(e.duration)}`);for(let n of this.speeds)qt(n,"on",parseFloat(n.dataset.speed)===e.speed);ue(this.loopB,`\u27F2 ${xe("loop",t)}`),qt(this.loopB,"on",e.loop),ue(this.mNar,xe("mode_narrative",t)),ue(this.mOv,xe("mode_overview",t)),qt(this.mNar,"on",e.mode==="narrative"),qt(this.mOv,"on",e.mode==="overview"),ue(this.back,`\u21BA ${xe("back_story",t)}`),qt(this.back,"hide",e.mode!=="free")}};var G_=i=>`#${i.toString(16).padStart(6,"0")}`,Qc=class{constructor(e,t,n){this.v=new x;if(!document.getElementById("ptl-css")){let ie=document.createElement("style");ie.id="ptl-css",ie.textContent=xm,document.head.appendChild(ie)}this.root=O("div","ov",e),this.labels=new Zc(this.root);let r=O("div","panel top",this.root);O("div","title",r,Fo);let s=O("div","origin",r);O("div","sp",r);let o=(ie="")=>O("div",`blk ${ie}`,r),a=o(),c=O("div","cap",a),l=O("div","v",a),u=o(),d=O("div","cap",u),h=O("div","v",u),f=o("clock"),p=O("div","cap",f),y=O("div","v",f),g=O("div","n",f),m=o(),v=O("div","cap",m),b=O("div","pill Stable",m);O("i","",b);let _=O("span","",b);b.dataset.role="plant-state",this.top={origin:s,modeK:d,modeV:h,clockK:p,clockV:y,clockN:g,stK:v,pill:b,pillT:_,phK:c,phV:l},this.kpis=new Vc(this.root);let R=O("div","panel legend",this.root),S=O("div","lhd",R),L=O("div","cap",S),P=O("div","lfoot",S);P.dataset.role="lights-foot";let w=O("div","items",R),T=["leachate","clarified","pumped","anaerobic","treated","sludge","biogas","chemical","return"],H=[];for(let ie of T){let ae=O("div","it",w),Me=O("span","sw",ae);Me.style.background=G_(pr[ie].fluid),H.push({key:`lk_${ie}`,t:O("span","",ae)})}let N=O("div","it",w);O("span","dotp",N),H.push({key:"lk_parcel",t:O("span","",N)});let U=O("div","it",w);O("span","wk",U),H.push({key:"lk_worker",t:O("span","",U)});let F=O("div","it",w);O("span","trk",F),H.push({key:"lk_truck",t:O("span","",F)});let I=O("div","toggles pe",r);r.insertBefore(I,r.querySelector(".sp"));let B=[];for(let ie of["pipes","labels","flow","sludge","actors"]){let ae=O("button","tg",I);ae.onclick=()=>n.toggle(ie),B.push({name:ie,b:ae})}let X=O("button","tg",I);X.onclick=()=>n.cycleLight(),B.push({name:"light",b:X});let V=O("button","tg",I);B.push({name:"lang",b:V}),V.onclick=()=>n.setLang(V.dataset.next),this.legend={cap:L,foot:P,items:H,tgs:B},this.alerts=new Gc(this.root),this.detail=new Xc(this.root),this.split=new qc(this.root,788),this.compare=new Kc(this.root,788),this.impact=new $c(this.root);let Q=O("div","caption",this.root),se=O("span","",Q),le=O("b","",se),Ce=O("span","",se);Ce.style.cssText="background:none;border:none;padding:0",this.caption={wrap:Q,b:le,s:Ce},this.controls=t?null:new jc(this.root,n),this.tracker=new Wc(this.root);let Qe=O("div","cursor",this.root),K=O("div","rip",Qe),ne=document.createElementNS("http://www.w3.org/2000/svg","svg");ne.setAttribute("width","22"),ne.setAttribute("height","26"),ne.setAttribute("viewBox","0 0 22 26"),ne.innerHTML='<path d="M2 1.5 L2 20 L7 15.5 L10.5 23.5 L13.8 22 L10.4 14.3 L17 14 Z" fill="#1b2240" stroke="#ffffff" stroke-width="1.3" stroke-linejoin="round"/>',Qe.appendChild(ne),this.cursor={root:Qe,arrow:ne,rip:K}}setScale(e){this.root.style.transform=`scale(${e})`}update(e,t,n,r){let{lang:s}=t;ue(this.top.origin,xe("origin",s)),ue(this.top.phK,xe("phase",s)),ue(this.top.phV,e.phase==="idle"?"\u2014":e.phase),ue(this.top.modeK,xe("mode",s));let o=t.mode==="film"?"mode_film":t.mode==="overview"?"mode_overview":t.mode==="free"?"mode_free":"mode_narrative";ue(this.top.modeV,xe(o,s)),ue(this.top.clockK,xe("clock",s)),ue(this.top.clockV,`${Er(e.t)} / ${Er(e.duration)}`),ue(this.top.clockN,xe("compressed",s)),ue(this.top.stK,xe("plant_state",s)),this.top.pill.className=`pill ${e.plantState}`,ue(this.top.pillT,xe(`st_${e.plantState}`,s)),this.kpis.update(e,s),ue(this.legend.cap,xe("legend",s)),ue(this.legend.foot,"");for(let a of this.legend.items)ue(a.t,xe(a.key,s));for(let a of this.legend.tgs)if(a.name==="lang")ue(a.b,s==="es"?"ES \xB7 en":"EN \xB7 es"),a.b.dataset.next=s==="es"?"en":"es",qt(a.b,"on",!0);else if(a.name==="light"){let c=e.lighting?.mode??"day";ue(a.b,`${xe("tg_light",s)}: ${xe(`light_${c}`,s)}`),qt(a.b,"on",c!=="day")}else ue(a.b,xe(`tg_${a.name}`,s)),qt(a.b,"on",t.toggles[a.name]);this.alerts.update(e,s),this.detail.update(e,t.selected,s),this.split.update(e,s),this.compare.update(e,s),this.compare.visible&&Yt(this.split.root,"display","none"),this.impact.update(e,s),e.caption?(Yt(this.caption.wrap,"display","flex"),ue(this.caption.b,e.phase==="idle"?s==="es"?"INICIO":"START":`${xe("phase",s).toUpperCase()} ${e.phase}`),ue(this.caption.s,e.caption[s])):Yt(this.caption.wrap,"display","none"),this.controls?.update(t.controls,s),this.tracker.update(e,s),this.labels.visible=t.toggles.labels,this.labels.update(n,r,e,t.selected,s,t.obstacles,t.trucks),this.updateCursor(e,t,n,r)}screenOf(e,t,n){let r=e.units[t]?.anchors.focus??e.units[t]?.anchors.label;return r?(this.v.copy(r).project(n),[(this.v.x*.5+.5)*1920,(-this.v.y*.5+.5)*1080]):[1460,760]}updateCursor(e,t,n,r){let s=e.cursor,o=s.visible&&(t.mode==="narrative"||t.mode==="film")&&s.unitId!==null;if(Yt(this.cursor.root,"display",o?"block":"none"),!o||!s.unitId)return;let a=this.screenOf(n,s.unitId,r),c=s.fromUnitId?this.screenOf(n,s.fromUnitId,r):[1470,780],l=s.travel,u=c[0]+(a[0]-c[0])*l,d=c[1]+(a[1]-c[1])*l-Math.sin(Math.PI*l)*40;this.cursor.root.style.transform=`translate(${u.toFixed(1)}px, ${d.toFixed(1)}px)`,this.cursor.arrow.style.transform=`scale(${(1-.12*s.press).toFixed(3)})`;let h=-1;for(let f of Ws)e.t>=f.t&&e.t<f.t+.7&&(h=br(e.t,f.t,f.t+.7));if(h>=0){let f=6+24*h;Yt(this.cursor.rip,"display","block"),this.cursor.rip.style.cssText=`display:block;left:${(-f).toFixed(1)}px;top:${(-f).toFixed(1)}px;width:${(2*f).toFixed(1)}px;height:${(2*f).toFixed(1)}px;opacity:${(1-h).toFixed(3)}`}else Yt(this.cursor.rip,"display","none")}};var xh=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Im(i){let e={duration:i.duration,fps:i.fps,ready:(async()=>{i.renderFrame(0),await xh(),await xh()})(),async renderFrame(t){i.renderFrame(t),await xh()}};return window.__film=e,e}var Ji=[{from:0,to:4.4,kicker:{es:"1 \xB7 Origen",en:"1 \xB7 Source"},title:{es:"La lluvia atraviesa el vertedero y se vuelve lixiviado",en:"Rain seeps through the landfill and becomes leachate"}},{from:10.6,to:14.4,kicker:{es:"2 \xB7 Tratamiento",en:"2 \xB7 Treatment"},title:{es:"La planta lo recibe, lo clarifica y separa los lodos",en:"The plant receives it, clarifies it and removes sludge"}},{from:24.2,to:28.2,kicker:{es:"3 \xB7 Energ\xEDa",en:"3 \xB7 Energy"},title:{es:"Cuatro reactores UASB lo digieren y producen biog\xE1s",en:"Four UASB reactors digest it and produce biogas"}},{from:43.6,to:50,kicker:{es:"4 \xB7 Agua recuperada",en:"4 \xB7 Recovered water"},title:{es:"El agua tratada vuelve a un humedal lleno de vida",en:"Treated water returns to a living wetland"}}],el=Ji.reduce((i,e)=>i+(e.to-e.from),0),yh=el-3.2;function tl(i){let e=0,t=Math.max(0,Math.min(el-1e-6,i));for(let r=0;r<Ji.length;r++){let s=Ji[r],o=s.to-s.from;if(t<e+o)return{t:s.from+(t-e),seg:r,local:t-e};e+=o}let n=Ji[Ji.length-1];return{t:n.to,seg:Ji.length-1,local:n.to-n.from}}var nl=$i(),Pm=(i,e,t)=>i.toLocaleString(t==="es"?"es-CO":"en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),W_=`
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
`,il=class{constructor(e){this.dots=[];this.chips=[];this.endChips=[];let t=document.createElement("style");t.textContent=W_,document.head.appendChild(t),this.root=O("div","soc",e);let n=O("div","brand",this.root);O("div","drop",n);let r=O("div","",n);O("div","bt",r,Fo),this.bs=O("div","bs",r),O("div","shade",this.root),this.step=O("div","step",this.root);let s=O("div","dots",this.root);for(let l=0;l<Ji.length;l++)this.dots.push(O("i","",s));this.head=O("div","head",this.root);let o=O("div","chips",this.root),a=l=>{let u=O("div","chip2",l),d=O("div","k",u),h=O("div","",u),f=O("span","v",h),p=O("span","u",h);return{k:d,v:f,u:p}};for(let l=0;l<3;l++)this.chips.push(a(o));this.note=O("div","note",this.root),this.end=O("div","end",this.root),O("div","ed",this.end),this.et=O("div","et",this.end),this.es=O("div","es",this.end);let c=O("div","eg",this.end);for(let l=0;l<4;l++)this.endChips.push(a(c))}setScale(e){this.root.style.transform=`scale(${e})`}update(e,t){let{t:n,seg:r}=tl(e),s=Ji[r],o=Jc(n);ue(this.bs,t==="es"?"Simulaci\xF3n did\xE1ctica \xB7 todos los valores son supuestos":"Educational simulation \xB7 all values are assumptions"),ue(this.step,s.kicker[t]),this.dots.forEach((l,u)=>l.classList.toggle("on",u<=r)),ue(this.head,s.title[t]),[[t==="es"?"DQO removida":"COD removed",o.removalPct,0,"%"],[t==="es"?"Energ\xEDa biog\xE1s":"Biogas energy",o.energy_kWhd,0,"kWh/d"],[t==="es"?"Agua devuelta":"Water returned",o.water_m3d,1,"m\xB3/d"]].forEach(([l,u,d,h],f)=>{ue(this.chips[f].k,l),ue(this.chips[f].v,u>1e-6?Pm(u,d,t):"\u2014"),ue(this.chips[f].u,h)}),ue(this.note,t==="es"?"Cifras calculadas a partir de supuestos editables (1 L/s, 8 h/d\xEDa) \xB7 no son mediciones":"Figures calculated from editable assumptions (1 L/s, 8 h/day) \xB7 not measurements");let c=Xt(e,yh,yh+.6);Yt(this.end,"opacity",c.toFixed(3)),Yt(this.end,"display",c>.001?"flex":"none"),c>.001&&(ue(this.et,t==="es"?"Del lixiviado al agua recuperada":"From leachate to recovered water"),ue(this.es,Fo),[[t==="es"?"Agua devuelta":"Water returned",nl.Q_m3d,1,"m\xB3/d"],[t==="es"?"DQO removida":"COD removed",nl.codRemovalPct,0,"%"],[t==="es"?"Carga evitada":"Load avoided",nl.codAvoided_kgd,0,"kg/d"],[t==="es"?"Energ\xEDa biog\xE1s":"Biogas energy",nl.energy_kWhd,0,"kWh/d"]].forEach(([u,d,h,f],p)=>{ue(this.endChips[p].k,u),ue(this.endChips[p].v,Pm(d,h,t)),ue(this.endChips[p].u,f)}))}};var pi=new URLSearchParams(location.search),Ai=pi.get("film")==="1",X_=Number(pi.get("fps"))||30,Hm=Number(pi.get("w"))||1920,Dm=Number(pi.get("h"))||1080,Yo=Ai&&pi.get("social")==="1",_h=pi.get("lang")==="en"?"en":"es",Um=pi.has("t")?Number(pi.get("t")):null,Js=Z0(pi.get("light"))??"day",q_=document.getElementById("app")??document.body.appendChild(document.createElement("div")),jr=document.createElement("div");jr.className="stage";q_.appendChild(jr);Ai&&document.documentElement.classList.add("film");var Mh=document.createElement("div");Mh.style.cssText="position:absolute;inset:0";jr.appendChild(Mh);var wh=Lp(Mh),{renderer:qn,scene:Xo}=wh;function Y_(){if(pi.get("stub")==="1")return eh();try{return v0()}catch(i){return console.error("buildPlant() fall\xF3; se usa la planta de respaldo",i),eh()}}var Dt=Y_();!Dt.actors&&pi.get("stubActors")!=="0"&&(Dt.actors=th());Dt.actors&&!Dt.actors.root.parent&&Xo.add(Dt.actors.root);Dt.actors&&z0(Dt.actors.routes);Xo.add(Dt.root);var rl=wh.lighting,vh="";function Z_(i){if(!i||!rl)return;let e=`${i.mode}|${i.daylight.toFixed(3)}|${i.fixturesLevel.toFixed(3)}`;e!==vh&&(vh=e,rl.setDaylight?rl.setDaylight(i.daylight):rl.setMode?.(i.preset))}var On=mm(),Wo=new zc;Xo.add(Wo.root);var Zs=new vn(26,(bt.thumb.x1-bt.thumb.x0)/(bt.thumb.y1-bt.thumb.y0),.3,300),Sn=Um??0,ji=!Ai&&Um==null,Th=1,al=!0,ri=Ai?"film":"narrative",cl,wr={pipes:!0,labels:!0,flow:!0,sludge:!0,actors:!0},Mr=1920,$s=1080,sl=dh(Sn,{plant:Dt,light:Js}),Bm=null,Nm=null,ii=null,qo=new Qc(jr,Ai,{togglePlay(){Sn>=Ti&&!ji&&(Sn=0),ji=!ji},seek(i){Sn=Math.min(Ti,Math.max(0,i))},setSpeed(i){Th=i},toggleLoop(){al=!al},setMode(i){$_(),ri=i,cl=void 0},step(i){ji=!1,Sn=Math.min(Ti,Math.max(0,Math.round(Sn+i)))},toggle(i){wr[i]=!wr[i]},setLang(i){_h=i,document.documentElement.lang=i},cycleLight(){Js=$0(Js)}});function $_(){ii={from:{...On.shot,target:[...On.shot.target]},t0:performance.now()}}var bh=Yo?new il(jr):null;Yo&&(qo.root.style.display="none",em(Hm/Dm,{bx:0,by:.2,hx:.9,hy:.56}));function Fm(){if(Ai)Mr=Hm,$s=Dm;else{let i=window.innerWidth,e=window.innerHeight;Mr=Math.floor(Math.min(i,e*16/9)),$s=Math.floor(Mr*9/16)}jr.style.width=`${Mr}px`,jr.style.height=`${$s}px`,qn.setPixelRatio(Ai?1:Math.min(window.devicePixelRatio||1,2)),wh.resize(Mr,$s),On.setAspect(Yo?Mr/$s:16/9),qo.setScale(Mr/1920),bh?.setScale(Mr/1080)}Fm();window.addEventListener("resize",()=>{Fm(),ji||Ks(Sn)});function K_(i){return cl!==void 0?cl:i.selected}function Ks(i){let e=dh(i,{plant:Dt,light:Js});Z_(e.lighting);let t=K_(e);for(let o of Object.keys(Dt.units)){let a=Dt.units[o],c=e.units[o];c&&(a.setActive(c.active),a.setStatus(c.status),a.setFlowLevel(c.flow),a.setInternalMotion(c.motion),a.setSelected(o===t))}for(let o of bi){let a=Dt.pipes[o.id],c=e.pipes[o.id];!a||!c||(a.setFront(c.front),a.setFlow(wr.flow?c.flow:0),a.setHighlighted(t!==null&&(o.from===t||o.to===t)),a.setVisible(wr.pipes&&(o.kind!=="sludge"||wr.sludge)))}Dt.update(e.t);let n=[];if(Dt.actors){Dt.actors.root.visible=wr.actors;let o=O0(e.t,Dt.actors.routes);if(V0(Dt.actors,o),Bm=o,wr.actors)for(let a of["chemical","sludge"]){let c=o.trucks[a];if(!c.visible)continue;let l=Dt.actors.trucks[a]?.length??7;n.push({kind:a,pos:new x(c.pos[0]+Math.sin(c.heading)*l*.35,c.pos[1]+3.6,c.pos[2]+Math.cos(c.heading)*l*.35)})}}let r;if(ri==="narrative"||ri==="film"?r=e.camera:ri==="overview"?r=om(Dt):r=On.shot,ii&&!Ai){let o=Xt(performance.now(),ii.t0,ii.t0+900);o>=1||ri==="free"?ii=null:r={target:[ti(ii.from.target[0],r.target[0],o),ti(ii.from.target[1],r.target[1],o),ti(ii.from.target[2],r.target[2],o)],distance:ti(ii.from.distance,r.distance,o),fov:ti(ii.from.fov,r.fov,o)}}On.apply(r),Wo.update(Dt,e.t,On.shot.distance);let s=[];for(let o=0;o<Nc;o++){let a=Fc(Dt,e.t,o,ol);if(!a)continue;let[c,l]=Eh(a);s.push({x0:c-20,y0:l-20,x1:c+20,y1:l+20})}return qo.update(e,{mode:ri,lang:_h,selected:t,toggles:wr,obstacles:s,trucks:n,controls:{playing:ji,speed:Th,loop:al,t:e.t,duration:Ti,mode:ri}},Dt,On.camera),J_(Yo?null:t),sl=e,Nm=t,e}function J_(i){let e=qn.getSize(new me);if(qn.setScissorTest(!1),qn.setViewport(0,0,e.x,e.y),qn.render(Xo,On.camera),!i)return;let t=e.x/1920,n=bt.thumb,r=n.x0*t,s=e.y-n.y1*t,o=(n.x1-n.x0)*t,a=(n.y1-n.y0)*t,c=cm(i,Dt);Zs.fov=c.fov,Zs.updateProjectionMatrix();let l=new x(...ni.dir);Zs.position.set(c.target[0]+l.x*c.distance,c.target[1]+l.y*c.distance,c.target[2]+l.z*c.distance),Zs.quaternion.copy(On.camera.quaternion),Zs.updateMatrixWorld(!0);let u=Wo.root.visible;Wo.root.visible=!1,qn.setViewport(r,s,o,a),qn.setScissor(r,s,o,a),qn.setScissorTest(!0),qn.render(Xo,Zs),qn.setScissorTest(!1),qn.setViewport(0,0,e.x,e.y),Wo.root.visible=u}var Lm=new oc,Sh=new Map;for(let i of Object.keys(Dt.units))for(let e of Dt.units[i].pickTargets??[])Sh.set(e,i);var j_=[...Sh.keys()];function km(i,e){let t=qn.domElement.getBoundingClientRect(),n=new me((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1);Lm.setFromCamera(n,On.camera);for(let r of Lm.intersectObjects(j_,!0)){let s=r.object;for(;s;){let o=Sh.get(s);if(o)return o;s=s.parent}}return null}if(!Ai){let i=qn.domElement;i.style.touchAction="none";let e=null;i.addEventListener("pointerdown",t=>{e={x:t.clientX,y:t.clientY,moved:!1},i.setPointerCapture(t.pointerId)}),i.addEventListener("pointermove",t=>{if(!e){i.style.cursor=km(t.clientX,t.clientY)?"pointer":"default";return}let n=t.clientX-e.x,r=t.clientY-e.y;if(!e.moved&&Math.hypot(n,r)<4)return;e.moved||(e.moved=!0,ri!=="free"&&(ii=null,ri="free"));let s=1080/$s;On.panPixels(n*s,r*s,1080),e.x=t.clientX,e.y=t.clientY}),i.addEventListener("pointerup",t=>{e&&!e.moved&&(cl=km(t.clientX,t.clientY)),e=null}),i.addEventListener("wheel",t=>{t.preventDefault(),ri!=="free"&&(ii=null,ri="free"),On.dolly(Math.pow(1.1,t.deltaY/100))},{passive:!1})}var ol=new x;function Eh(i){return ol.copy(i).project(On.camera),[(ol.x*.5+.5)*1920,(-ol.y*.5+.5)*1080]}window.__sim={getState:()=>({t:sl.t,state:sl,selected:Nm,detailUnit:qo.detail.shown,mode:ri,shot:On.shot,labelRects:qo.labels.lastRects,focusUnits:um(sl.t),actors:Bm,lightMode:Js,hasRealActors:!!Dt.actors&&Dt.actors.root.name!=="stub-actors",plantKind:Dt.root.name}),projectPoint:(i,e,t)=>Eh(new x(i,e,t)),setLight:i=>{Js=i,vh=""},projectAnchor:(i,e="focus")=>{let t=Dt.units[i]?.anchors[e];return t?Eh(t):null},seek:i=>{Sn=i,ji=!1,Ks(Sn)},grid:bt,unitInfo:i=>({tag:Ue[i].tag,name:Ue[i].name})};if(Ai){let i=Im({duration:Yo?el:Ti,fps:X_,renderFrame:e=>{if(bh){let t=tl(e);Sn=t.t,Ks(t.t),bh.update(e,_h)}else Sn=e,Ks(e)}})}else{let i=performance.now(),e=t=>{let n=Math.min(.1,Math.max(0,(t-i)/1e3));i=t,ji&&(Sn+=n*Th,Sn>=Ti&&(al?Sn=0:(Sn=Ti,ji=!1))),Ks(Sn),requestAnimationFrame(e)};Ks(Sn),requestAnimationFrame(e)}})();
