var ca=Object.defineProperty;var ia=n=>{throw TypeError(n)};var ua=(n,e,t)=>e in n?ca(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Re=(n,e,t)=>ua(n,typeof e!="symbol"?e+"":e,t),fa=(n,e,t)=>e.has(n)||ia("Cannot "+t);var Yt=(n,e,t)=>(fa(n,e,"read from private field"),t?t.call(n):e.get(n)),ji=(n,e,t)=>e.has(n)?ia("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);import{f as from_html,a as append,c as comment}from"./BulsPGjr.js";import{D as set_hydrate_node,h as hydrating,a8 as get_first_child,ah as create_text,z as hydrate_next,b as block,q as get,P as derived_safe_equal,A as read_hydration_instruction,B as HYDRATION_START_ELSE,C as remove_nodes,F as set_hydrating,c as hydrate_node,ab as HYDRATION_END,G as resume_effect,a as branch,I as pause_effect,af as array_from,a6 as is_array,W as mutable_source,at as source,au as INERT,a3 as active_effect,av as EACH_INDEX_REACTIVE,aw as internal_set,ax as pause_children,ae as clear_text_content,ay as run_out_transitions,d as destroy_effect,az as EACH_ITEM_REACTIVE,aA as EACH_ITEM_IMMUTABLE,a9 as get_next_sibling,aB as EACH_IS_CONTROLLED,L as queue_micro_task,aC as EACH_IS_ANIMATED,aD as LOADING_ATTR_SYMBOL,aE as NAMESPACE_HTML,aF as get_prototype_of,aG as get_descriptors,am as state,V as set,p as push,u as user_effect,r as reset,g as pop,x as first_child,i as child,j as sibling,y as template_effect,ao as user_derived}from"./CqYQfX-R.js";import{e as event,s as set_text,d as delegate}from"./DY34Nxtc.js";import{p as prop,i as if_block,b as bind_this}from"./CmY8PgX-.js";import{w as writable}from"./muIqNf0q.js";import{s as snippet}from"./D989A6Cq.js";function index(n,e){return e}function pause_effects(n,e,t,a){for(var r=[],o=e.length,l=0;l<o;l++)pause_children(e[l].e,r,!0);var c=o>0&&r.length===0&&t!==null;if(c){var s=t.parentNode;clear_text_content(s),s.append(t),a.clear(),link(n,e[0].prev,e[o-1].next)}run_out_transitions(r,()=>{for(var d=0;d<o;d++){var f=e[d];c||(a.delete(f.k),link(n,f.prev,f.next)),destroy_effect(f.e,!c)}})}function each(n,e,t,a,r,o=null){var l=n,c={flags:e,items:new Map,first:null},s=(e&EACH_IS_CONTROLLED)!==0;if(s){var d=n;l=hydrating?set_hydrate_node(get_first_child(d)):d.appendChild(create_text())}hydrating&&hydrate_next();var f=null,v=!1,g=derived_safe_equal(()=>{var M=t();return is_array(M)?M:M==null?[]:array_from(M)});block(()=>{var M=get(g),h=M.length;if(v&&h===0)return;v=h===0;let A=!1;if(hydrating){var x=read_hydration_instruction(l)===HYDRATION_START_ELSE;x!==(h===0)&&(l=remove_nodes(),set_hydrate_node(l),set_hydrating(!1),A=!0)}if(hydrating){for(var m=null,U,T=0;T<h;T++){if(hydrate_node.nodeType===8&&hydrate_node.data===HYDRATION_END){l=hydrate_node,A=!0,set_hydrating(!1);break}var P=M[T],H=a(P,T);U=create_item(hydrate_node,c,m,null,P,H,T,r,e,t),c.items.set(H,U),m=U}h>0&&set_hydrate_node(remove_nodes())}hydrating||reconcile(M,c,l,r,e,a,t),o!==null&&(h===0?f?resume_effect(f):f=branch(()=>o(l)):f!==null&&pause_effect(f,()=>{f=null})),A&&set_hydrating(!0),get(g)}),hydrating&&(l=hydrate_node)}function reconcile(n,e,t,a,r,o,l){var re,ce,fe,Ee;var c=(r&EACH_IS_ANIMATED)!==0,s=(r&(EACH_ITEM_REACTIVE|EACH_INDEX_REACTIVE))!==0,d=n.length,f=e.items,v=e.first,g=v,M,h=null,A,x=[],m=[],U,T,P,H;if(c)for(H=0;H<d;H+=1)U=n[H],T=o(U,H),P=f.get(T),P!==void 0&&((re=P.a)==null||re.measure(),(A??(A=new Set)).add(P));for(H=0;H<d;H+=1){if(U=n[H],T=o(U,H),P=f.get(T),P===void 0){var G=g?g.e.nodes_start:t;h=create_item(G,e,h,h===null?e.first:h.next,U,T,H,a,r,l),f.set(T,h),x=[],m=[],g=h.next;continue}if(s&&update_item(P,U,H,r),P.e.f&INERT&&(resume_effect(P.e),c&&((ce=P.a)==null||ce.unfix(),(A??(A=new Set)).delete(P))),P!==g){if(M!==void 0&&M.has(P)){if(x.length<m.length){var W=m[0],Z;h=W.prev;var N=x[0],L=x[x.length-1];for(Z=0;Z<x.length;Z+=1)move(x[Z],W,t);for(Z=0;Z<m.length;Z+=1)M.delete(m[Z]);link(e,N.prev,L.next),link(e,h,N),link(e,L,W),g=W,h=L,H-=1,x=[],m=[]}else M.delete(P),move(P,g,t),link(e,P.prev,P.next),link(e,P,h===null?e.first:h.next),link(e,h,P),h=P;continue}for(x=[],m=[];g!==null&&g.k!==T;)g.e.f&INERT||(M??(M=new Set)).add(g),m.push(g),g=g.next;if(g===null)continue;P=g}x.push(P),h=P,g=P.next}if(g!==null||M!==void 0){for(var q=M===void 0?[]:array_from(M);g!==null;)g.e.f&INERT||q.push(g),g=g.next;var se=q.length;if(se>0){var ee=r&EACH_IS_CONTROLLED&&d===0?t:null;if(c){for(H=0;H<se;H+=1)(fe=q[H].a)==null||fe.measure();for(H=0;H<se;H+=1)(Ee=q[H].a)==null||Ee.fix()}pause_effects(e,q,ee,f)}}c&&queue_micro_task(()=>{var ue;if(A!==void 0)for(P of A)(ue=P.a)==null||ue.apply()}),active_effect.first=e.first&&e.first.e,active_effect.last=h&&h.e}function update_item(n,e,t,a){a&EACH_ITEM_REACTIVE&&internal_set(n.v,e),a&EACH_INDEX_REACTIVE?internal_set(n.i,t):n.i=t}function create_item(n,e,t,a,r,o,l,c,s,d){var f=(s&EACH_ITEM_REACTIVE)!==0,v=(s&EACH_ITEM_IMMUTABLE)===0,g=f?v?mutable_source(r):source(r):r,M=s&EACH_INDEX_REACTIVE?source(l):l,h={i:M,v:g,k:o,a:null,e:null,prev:t,next:a};try{return h.e=branch(()=>c(n,g,M,d),hydrating),h.e.prev=t&&t.e,h.e.next=a&&a.e,t===null?e.first=h:(t.next=h,t.e.next=h.e),a!==null&&(a.prev=h,a.e.prev=h.e),h}finally{}}function move(n,e,t){for(var a=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,o=n.e.nodes_start;o!==a;){var l=get_next_sibling(o);r.before(o),o=l}}function link(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}const whitespace=[...` 	
\r\f \v\uFEFF`];function to_class(n,e,t){var a=n==null?"":""+n;if(t){for(var r in t)if(t[r])a=a?a+" "+r:r;else if(a.length)for(var o=r.length,l=0;(l=a.indexOf(r,l))>=0;){var c=l+o;(l===0||whitespace.includes(a[l-1]))&&(c===a.length||whitespace.includes(a[c]))?a=(l===0?"":a.substring(0,l))+a.substring(c+1):l=c}}return a===""?null:a}function set_class(n,e,t,a,r,o){var l=n.__className;if(hydrating||l!==t||l===void 0){var c=to_class(t,a,o);(!hydrating||c!==n.getAttribute("class"))&&(c==null?n.removeAttribute("class"):e?n.className=c:n.setAttribute("class",c)),n.__className=t}else if(o&&r!==o)for(var s in o){var d=!!o[s];(r==null||d!==!!r[s])&&n.classList.toggle(s,d)}return o}const IS_CUSTOM_ELEMENT=Symbol("is custom element"),IS_HTML=Symbol("is html");function set_attribute(n,e,t,a){var r=get_attributes(n);hydrating&&(r[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="loading"&&(n[LOADING_ATTR_SYMBOL]=t),t==null?n.removeAttribute(e):typeof t!="string"&&get_setters(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function get_attributes(n){return n.__attributes??(n.__attributes={[IS_CUSTOM_ELEMENT]:n.nodeName.includes("-"),[IS_HTML]:n.namespaceURI===NAMESPACE_HTML})}var setters_cache=new Map;function get_setters(n){var e=setters_cache.get(n.nodeName);if(e)return e;setters_cache.set(n.nodeName,e=[]);for(var t,a=n,r=Element.prototype;r!==a;){t=get_descriptors(a);for(var o in t)t[o].set&&e.push(o);a=get_prototype_of(a)}return e}var VFormats;(function(n){n[n.RGBA8888=0]="RGBA8888",n[n.ABGR8888=1]="ABGR8888",n[n.RGB888=2]="RGB888",n[n.BGR888=3]="BGR888",n[n.RGB565=4]="RGB565",n[n.I8=5]="I8",n[n.IA88=6]="IA88",n[n.P8=7]="P8",n[n.A8=8]="A8",n[n.RGB888_BLUESCREEN=9]="RGB888_BLUESCREEN",n[n.BGR888_BLUESCREEN=10]="BGR888_BLUESCREEN",n[n.ARGB8888=11]="ARGB8888",n[n.BGRA8888=12]="BGRA8888",n[n.DXT1=13]="DXT1",n[n.DXT3=14]="DXT3",n[n.DXT5=15]="DXT5",n[n.BGRX8888=16]="BGRX8888",n[n.BGR565=17]="BGR565",n[n.BGRX5551=18]="BGRX5551",n[n.BGRA4444=19]="BGRA4444",n[n.DXT1_ONEBITALPHA=20]="DXT1_ONEBITALPHA",n[n.BGRA5551=21]="BGRA5551",n[n.UV88=22]="UV88",n[n.UVWQ8888=23]="UVWQ8888",n[n.RGBA16161616F=24]="RGBA16161616F",n[n.RGBA16161616=25]="RGBA16161616",n[n.UVLX8888=26]="UVLX8888",n[n.R32F=27]="R32F",n[n.RGB323232F=28]="RGB323232F",n[n.RGBA32323232F=29]="RGBA32323232F",n[n.NV_NULL=33]="NV_NULL",n[n.ATI2N=34]="ATI2N",n[n.ATI1N=35]="ATI1N",n[n.IMAGE_FORMAT_BC7=70]="IMAGE_FORMAT_BC7"})(VFormats||(VFormats={}));var VFlags;(function(n){n[n.PointSample=1]="PointSample",n[n.Trilinear=2]="Trilinear",n[n.ClampS=4]="ClampS",n[n.ClampT=8]="ClampT",n[n.Anistrophic=16]="Anistrophic",n[n.HintDXT5=32]="HintDXT5",n[n.SRGB=64]="SRGB",n[n.DEPRECATED_NoCompress=64]="DEPRECATED_NoCompress",n[n.Normal=128]="Normal",n[n.NoMip=256]="NoMip",n[n.NoLOD=512]="NoLOD",n[n.MinMip=1024]="MinMip",n[n.Procedural=2048]="Procedural",n[n.OneBitAlpha=4096]="OneBitAlpha",n[n.EightBitAlpha=8192]="EightBitAlpha",n[n.Envmap=16384]="Envmap",n[n.RenderTarget=32768]="RenderTarget",n[n.DepthRenderTarget=65536]="DepthRenderTarget",n[n.NoDebugOverride=131072]="NoDebugOverride",n[n.SingleCopy=262144]="SingleCopy",n[n.UNUSED0=524288]="UNUSED0",n[n.DEPRECATED_OneOverMipLevelInAlpha=524288]="DEPRECATED_OneOverMipLevelInAlpha",n[n.UNUSED1=1048576]="UNUSED1",n[n.DEPRECATED_PreMultColorByOneOverMipLevel=1048576]="DEPRECATED_PreMultColorByOneOverMipLevel",n[n.UNUSED2=2097152]="UNUSED2",n[n.DEPRECATED_NormalToDuDv=2097152]="DEPRECATED_NormalToDuDv",n[n.UNUSED3=4194304]="UNUSED3",n[n.DEPRECATED_AlphaTestMipGeneration=4194304]="DEPRECATED_AlphaTestMipGeneration",n[n.NoDepthBuffer=8388608]="NoDepthBuffer",n[n.UNUSED4=16777216]="UNUSED4",n[n.DEPRECATED_NiceFiltered=16777216]="DEPRECATED_NiceFiltered",n[n.ClampU=33554432]="ClampU",n[n.VertexTexture=67108864]="VertexTexture",n[n.SSBump=134217728]="SSBump",n[n.UNUSED5=268435456]="UNUSED5",n[n.DEPRECATED_Unfilterable_OK=268435456]="DEPRECATED_Unfilterable_OK",n[n.BORDER=536870912]="BORDER",n[n.DEPRECATED_SpecVar_Red=1073741824]="DEPRECATED_SpecVar_Red",n[n.DEPRECATED_SpecVar_Alpha=2147483648]="DEPRECATED_SpecVar_Alpha"})(VFlags||(VFlags={}));var VCompressionMethods;(function(n){n[n.Deflate=8]="Deflate",n[n.ZSTD=93]="ZSTD"})(VCompressionMethods||(VCompressionMethods={}));function getMipSize(n,e,t){const a=2**n;return[Math.ceil(e/a),Math.ceil(t/a)]}function getHeaderLength(n,e=0){return n<2?63:n<3?65:80+e*8}function getFaceCount(n){const e=n.flags&VFlags.Envmap;return n.version<5&&n.first_frame===-1?e?7:1:e?6:1}function getThumbMip(n,e,t=16){const a=Math.max(n,e);return Math.ceil(Math.log2(a))-Math.log2(t)}function clamp$1(n,e,t){return n<=e?e:n>=t?t:n}function setCompressionMethod(n,e){compress$1=n,decompress$2=e}let compress$1=async(n,e,t)=>{if(t!==-1)throw Error("vtf-js: Default compression backend only supports compression level `-1`. Import a `vtf-js/addons/compress/*` module or call `setCompressionMethod` to better support encoding Strata-compressed Vtfs!");if(e!==VCompressionMethods.Deflate)throw Error("vtf-js: Default compression backend only supports Deflate compression!");const a=new Blob([n]).stream(),r=new CompressionStream("deflate"),o=a.pipeThrough(r),l=new Response(o);return new Uint8Array(await l.arrayBuffer())},decompress$2=async(n,e,t)=>{if(e!==VCompressionMethods.Deflate)throw Error("vtf-js: Default decompression backend only supports Deflate decompression!");const a=new Blob([n]).stream(),r=new DecompressionStream("deflate"),o=a.pipeThrough(r),l=new Response(o);return new Uint8Array(await l.arrayBuffer())};class Vtf{constructor(e,t){Re(this,"data");Re(this,"version");Re(this,"format");Re(this,"flags");Re(this,"meta");Re(this,"reflectivity");Re(this,"first_frame");Re(this,"bump_scale");Re(this,"compression_level");Re(this,"compression_method");if(this.data=e,this.version=(t==null?void 0:t.version)??4,this.format=(t==null?void 0:t.format)??VFormats.RGBA8888,this.flags=(t==null?void 0:t.flags)??0,this.meta=(t==null?void 0:t.meta)??[],t!=null&&t.reflectivity)this.reflectivity=t.reflectivity;else{const a=getThumbMip(...this.data.getSize(0,0,0,0),1);if(a<this.data.mipmapCount()){const r=this.data.getImage(a,0,0,0).convert(Float32Array);this.reflectivity=r.data.slice(0,3)}else this.reflectivity=new Float32Array(3).fill(0)}this.first_frame=(t==null?void 0:t.first_frame)??0,this.bump_scale=(t==null?void 0:t.bump_scale)??1,this.compression_level=(t==null?void 0:t.compression_level)??0,this.compression_method=(t==null?void 0:t.compression_method)??VCompressionMethods.Deflate}encode(){throw Error("Vtf.encode: Implementation override not present!")}static decode(e,t=!1,a=!1){throw Error("Vtf.decode: Implementation override not present!")}}class VFileHeader{constructor(){Re(this,"version");Re(this,"width");Re(this,"height");Re(this,"flags");Re(this,"frames");Re(this,"first_frame");Re(this,"reflectivity");Re(this,"bump_scale");Re(this,"format");Re(this,"mipmaps");Re(this,"thumb_format");Re(this,"thumb_width");Re(this,"thumb_height");Re(this,"slices");Re(this,"compression_method");Re(this,"compression_level");Re(this,"compressed_lengths")}static fromVtf(e){const t=new VFileHeader;return t.version=e.version,[t.width,t.height]=e.data.getSize(),t.flags=e.flags,t.frames=e.data.frameCount(),t.first_frame=e.first_frame,t.reflectivity=e.reflectivity,t.bump_scale=e.bump_scale,t.format=e.format,t.mipmaps=e.data.mipmapCount(),t.slices=e.data.sliceCount(),t.compression_method=e.compression_method,t.compression_level=e.compression_level,t}}const TE=new TextEncoder,TD=new TextDecoder;class DataBuffer extends Uint8Array{constructor(t,a,r){typeof t=="object"&&"buffer"in t&&(t=t.buffer);super(t,a,r);Re(this,"pointer",0);Re(this,"view");Re(this,"little",!1);this.view=new DataView(this.buffer,this.byteOffset,this.byteLength)}set_endian(t){this.little=t}ref(t=0,a=this.length-t){const r=new DataBuffer(this.buffer,t+this.byteOffset,a);return r.set_endian(this.little),r}seek(t){this.pointer=t}pad(t){this.pointer+=t}align(t,a){this.pointer=(a??0)+this.pointer+(t-this.pointer%t)%t}read_u8(t){const a=this.pointer;return t===void 0?(this.pointer++,this.view.getUint8(a)):(this.pointer+=t,new Uint8Array(this.slice(a,this.pointer)))}write_u8(t){const a=this.pointer;if(typeof t=="number")return this.pointer++,this.view.setUint8(a,t);this.pointer+=t.length,this.set(t,a)}read_u16(t,a=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=2,this.view.getUint16(r,a);this.pointer+=t*2;const o=new Uint16Array(t);for(let l=0;l<t;l++)o[l]=this.view.getUint16(r+l*2,a);return o}write_u16(t,a=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=2,this.view.setUint16(r,t,a);this.pointer+=t.length*2;for(let o=0;o<t.length;o++)this.view.setUint16(r+o*2,t[o],a)}read_u32(t,a=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=4,this.view.getUint32(r,a);this.pointer+=t*4;const o=new Uint32Array(t);for(let l=0;l<t;l++)o[l]=this.view.getUint32(r+l*4,a);return o}write_u32(t,a=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=4,this.view.setUint32(r,t,a);this.pointer+=t.length*4;for(let o=0;o<t.length;o++)this.view.setUint32(r+o*4,t[o],a)}read_i8(t){const a=this.pointer;return t===void 0?(this.pointer++,this.view.getInt8(a)):(this.pointer+=t,new Int8Array(this.slice(a,this.pointer)))}write_i8(t){const a=this.pointer;if(typeof t=="number")return this.pointer++,this.view.setInt8(a,t);this.pointer+=t.length,this.set(t,a)}read_i16(t,a=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=2,this.view.getInt16(r,a);this.pointer+=t*2;const o=new Int16Array(t);for(let l=0;l<t;l++)o[l]=this.view.getInt16(r+l*2,a);return o}write_i16(t,a=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=2,this.view.setInt16(r,t,a);this.pointer+=t.length*2;for(let o=0;o<t.length;o++)this.view.setInt16(r+o*2,t[o],a)}read_i32(t,a=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=4,this.view.getInt32(r,a);this.pointer+=t*4;const o=new Int32Array(t);for(let l=0;l<t;l++)o[l]=this.view.getInt32(r+l*4,a);return o}write_i32(t,a=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=4,this.view.setInt32(r,t,a);this.pointer+=t.length*4;for(let o=0;o<t.length;o++)this.view.setInt32(r+o*4,t[o],a)}read_f32(t,a=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=4,this.view.getFloat32(r,a);this.pointer+=t*4;const o=new Float32Array(t);for(let l=0;l<t;l++)o[l]=this.view.getFloat32(r+l*4,a);return o}write_f32(t,a=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=4,this.view.setFloat32(r,t,a);this.pointer+=t.length*4;for(let o=0;o<t.length;o++)this.view.setFloat32(r+o*4,t[o],a)}read_f64(t,a=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=8,this.view.getFloat64(r,a);this.pointer+=t*8;const o=new Float64Array(t);for(let l=0;l<t;l++)o[l]=this.view.getFloat64(r+l*8,a);return o}write_f64(t,a=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=8,this.view.setFloat64(r,t,a);this.pointer+=t.length*8;for(let o=0;o<t.length;o++)this.view.setFloat64(r+o*8,t[o],a)}read_str(t){const a=this.pointer;let r=a+t;if(t===void 0){for(r=a;r<this.length&&this.view.getUint8(r)!=0;r++);this.pointer++}return this.pointer+=r-a,TD.decode(this.slice(a,r))}write_str(t,a){const r=this.pointer;if(this.pointer+=t.length,this.set(TE.encode(t),r),a===void 0)this.view.setUint8(this.pointer,0),this.pointer++;else if(t.length!==a)throw RangeError("String of length "+t.length+" does not match write length of "+a+"!")}}const VFilters={Triangle:{radius:1,kernel:n=>Math.max(0,1-n)}};class VImageScaler{constructor(e,t,a,r,o){Re(this,"src_width");Re(this,"src_height");Re(this,"dest_width");Re(this,"dest_height");Re(this,"filter");Re(this,"coeffs_w");Re(this,"coeffs_h");this.src_width=e,this.src_height=t,this.dest_width=a,this.dest_height=r,this.filter=o;const l={};this.coeffs_w=this.calc_coeffs(e,a,this.filter,l),e===t&&a===r?this.coeffs_h=this.coeffs_w:this.coeffs_h=this.calc_coeffs(t,r,this.filter,l)}calc_coeffs(e,t,a,r){const o=e/t,l=Math.max(1,o),c=l*a.radius,s=a.kernel,d=new Array(t);for(let f=0;f<t;f++){const v=(f+.5)*o,g=Math.max(0,Math.floor(v-c)),h=Math.max(g+1,Math.min(e,Math.ceil(v+c)))-g;if(h<=0)throw`Got length of ${h} with filter of radius ${a.radius} at position ${v}`;const A=v-g,x=l+","+h.toString(36)+","+A;if(x in r){d[f]={start:g,coeffs:r[x]};continue}const m=new Float32Array(h);r[x]=m,d[f]={start:g,coeffs:m};let U=0;for(let T=0;T<h;T++){const P=Math.abs(T-A),H=s(P/l);m[T]=H,U+=H}for(let T=0;T<h;T++)m[T]/=U}return d}resize(e,t){if(e.width!==this.src_width||e.height!==this.src_height)throw Error(`VImageScaler.resize input does not match expected dimensions! (expected ${this.src_width}x${this.src_height} but got ${e.width}x${e.height})`);if(t.width!==this.dest_width||t.height!==this.dest_height)throw Error(`VImageScaler.resize output does not match expected dimensions! (expected ${this.dest_width}x${this.dest_height} but got ${t.width}x${t.height})`);if(t.data.length!==this.dest_width*this.dest_height*4)throw Error(`VImageScaler.resize output data length should be ${this.dest_width*this.dest_height*4}, got ${t.data.length} instead!`);let a=0,r=0,o=0,l=0;const c=e.data,s=new(e.getDataConstructor())(this.dest_width*this.dest_height*4);for(let f=0;f<this.src_height;f++)for(let v=0;v<this.dest_width;v++){const g=(f*this.dest_width+v)*4;a=0,r=0,o=0,l=0;const{coeffs:M,start:h}=this.coeffs_w[v];for(let A=0;A<M.length;A++){const x=(f*this.src_width+(h+A))*4,m=M[A];a+=c[x]*m,r+=c[x+1]*m,o+=c[x+2]*m,l+=c[x+3]*m}s[g]=a,s[g+1]=r,s[g+2]=o,s[g+3]=l}const d=t.data;for(let f=0;f<this.dest_height;f++)for(let v=0;v<this.dest_width;v++){const g=(f*this.dest_width+v)*4;a=0,r=0,o=0,l=0;const{coeffs:M,start:h}=this.coeffs_h[f];for(let A=0;A<M.length;A++){const x=((h+A)*this.dest_width+v)*4,m=M[A];a+=s[x]*m,r+=s[x+1]*m,o+=s[x+2]*m,l+=s[x+3]*m}d[g]=a,d[g+1]=r,d[g+2]=o,d[g+3]=l}return t}}const HAS_FLOAT16=typeof Float16Array<"u",VCodecs={};function registerCodec(n,e){VCodecs[n]=e}function getCodec(n,e=!0){const t=VCodecs[n];if(!t&&e)throw Error(`getCodec: Could not get codec for format ${VFormats[n]}!`);return t}class VImageData{constructor(e,t,a){Re(this,"isEncoded",!1);Re(this,"width");Re(this,"height");Re(this,"data");this.data=e,this.width=t,this.height=a}convert(e,t=!0){if(this.data instanceof e)return this;const a=new e(this.data.length),r=!(this.data instanceof Float32Array||this.data instanceof Float64Array||HAS_FLOAT16&&this.data instanceof Float16Array),o=!(a instanceof Float32Array||a instanceof Float64Array||HAS_FLOAT16&&a instanceof Float16Array),l=r?2**(this.data.BYTES_PER_ELEMENT*8)-1:1,c=o?2**(a.BYTES_PER_ELEMENT*8)-1:1,s=c/l,d=0;if(t)for(let f=0;f<this.data.length;f++)a[f]=clamp$1(this.data[f]*s+d,0,c);else for(let f=0;f<this.data.length;f++)a[f]=this.data[f]*s+d;return new VImageData(a,this.width,this.height)}encode(e){const t=getCodec(e),a=t.length(this.width,this.height),r=t.encode(this);if(r.data.length!==a)throw Error(`VImageData.encode: Encoded ${VFormats[e]} image failed length validation! (expected ${a} but got ${r.data.length})`);return r}resize(e,t,a){a??(a={}),a.filter??(a.filter=VFilters.Triangle);const r=new VImageScaler(this.width,this.height,e,t,a.filter),o=new this.data.constructor(e*t*4),l=new VImageData(o,e,t);return r.resize(this,l)}getDataConstructor(){return this.data.constructor}}class VEncodedImageData{constructor(e,t,a,r){Re(this,"isEncoded",!0);Re(this,"width");Re(this,"height");Re(this,"format");Re(this,"data");this.data=e,this.width=t,this.height=a,this.format=r}decode(){return getCodec(this.format).decode(this)}}class VDataCollection{constructor(e){Re(this,"__mipmaps");this.__mipmaps=e}getImage(e,t,a,r,o=!1){if(e>=this.__mipmaps.length)throw Error(`Mipmap ${e} does not exist in VDataCollection!`);if(t>=this.__mipmaps[e].length)throw Error(`Frame ${t} does not exist in VDataCollection!`);if(a>=this.__mipmaps[e][t].length)throw Error(`Face ${a} does not exist in VDataCollection!`);if(r>=this.__mipmaps[e][t][a].length)throw Error(`Slice ${r} does not exist in VDataCollection!`);let l=this.__mipmaps[e][t][a][r];const c=l instanceof VEncodedImageData,s=l instanceof VImageData;if(c&&!o&&(l=this.__mipmaps[e][t][a][r]=l.decode()),!c&&!s)throw TypeError(`Expected VImageData or VEncodedImageData in VDataProvider, but found ${l.constructor.name} instead!`);return l}getSize(e=0,t=0,a=0,r=0){if(e>=this.__mipmaps.length)throw Error(`Mipmap ${e} does not exist in VDataCollection!`);if(t>=this.__mipmaps[e].length)throw Error(`Frame ${t} does not exist in VDataCollection!`);if(a>=this.__mipmaps[e][t].length)throw Error(`Face ${a} does not exist in VDataCollection!`);if(r>=this.__mipmaps[e][t][a].length)throw Error(`Slice ${r} does not exist in VDataCollection!`);const o=this.__mipmaps[e][t][a][r];return[o.width,o.height]}mipmapCount(){return this.__mipmaps.length}frameCount(){var e;return((e=this.__mipmaps[0])==null?void 0:e.length)??0}faceCount(){var e,t;return((t=(e=this.__mipmaps[0])==null?void 0:e[0])==null?void 0:t.length)??0}sliceCount(){var e,t,a;return((a=(t=(e=this.__mipmaps[0])==null?void 0:e[0])==null?void 0:t[0])==null?void 0:a.length)??0}}class VMipmapProvider{constructor(e,t){Re(this,"__frames");Re(this,"__mipmap_count");Re(this,"__filter");Re(this,"__scalers");this.__frames=e;const[a,r]=this.getSize(0,0,0,0);this.__mipmap_count=(t==null?void 0:t.mipmaps)??getThumbMip(a,r,1)+1,this.__filter=(t==null?void 0:t.filter)??VFilters.Triangle,this.__scalers=new Array(this.__mipmap_count)}getImage(e,t,a,r,o=!1){var M;if(e>=this.__mipmap_count)throw new Error(`Mipmap ${e} does not exist in VMipmapProvider!`);if(t>=this.__frames.length)throw new Error(`Frame ${t} does not exist in VMipmapProvider!`);if(a>=this.__frames[t].length)throw new Error(`Face ${a} does not exist in VMipmapProvider!`);if(r>=this.__frames[t][a].length)throw new Error(`Slice ${r} does not exist in VMipmapProvider!`);let l=this.__frames[t][a][r];const[c,s]=this.getSize(e,t,a,r),d=c===l.width&&s===l.height;if(d&&o)return l;if(l instanceof VEncodedImageData)l=this.__frames[t][a][r]=l.decode();else if(!(l instanceof VImageData))throw TypeError(`Expected VImageData or VEncodedImageData in VDataProvider, but found ${l.constructor.name} instead!`);if(d)return l;const f=(M=this.__scalers)[e]??(M[e]=new VImageScaler(l.width,l.height,c,s,this.__filter)),v=new(l.getDataConstructor())(c*s*4),g=new VImageData(v,c,s);return f.resize(l,g)}getSize(e=0,t=0,a=0,r=0){if(e>=this.__mipmap_count)throw new Error(`Mipmap ${e} does not exist in VMipmapProvider!`);if(t>=this.__frames.length)throw new Error(`Frame ${t} does not exist in VMipmapProvider!`);if(a>=this.__frames[t].length)throw new Error(`Face ${a} does not exist in VMipmapProvider!`);if(r>=this.__frames[t][a].length)throw new Error(`Slice ${r} does not exist in VMipmapProvider!`);const o=this.__frames[t][a][r];return getMipSize(e,o.width,o.height)}mipmapCount(){return this.__mipmap_count}frameCount(){return this.__mipmap_count?this.__frames.length??0:0}faceCount(){var e;return this.__mipmap_count?((e=this.__frames[0])==null?void 0:e.length)??0:0}sliceCount(){var e,t;return this.__mipmap_count?((t=(e=this.__frames[0])==null?void 0:e[0])==null?void 0:t.length)??0:0}}class VFrameCollection extends VMipmapProvider{constructor(e,t){const a=e.map(r=>[[r]]);super(a,t)}}const VResourceTypes={};function registerResourceType(n){if(!n.tag)throw"registerResourceDecoder: Cannot register generic resource! (Must have static tag attribute.)";VResourceTypes[n.tag]=n}var VHeaderTags;(function(n){n.TAG_BODY="0\0\0",n.TAG_THUMB="\0\0",n.TAG_SHEET="\0\0",n.TAG_AXC="AXC"})(VHeaderTags||(VHeaderTags={}));class VHeader{constructor(e,t,a){Re(this,"tag");Re(this,"flags");Re(this,"start");Re(this,"end");this.tag=e,this.flags=t,this.start=a}hasData(){return!(this.flags&2)}}class VBaseResource{constructor(e,t,a){Re(this,"tag");Re(this,"flags");Re(this,"data");this.tag=e,this.flags=t,this.data=a}static decode(e,t,a){return new VBaseResource(e.tag,e.flags,t)}encode(e){return this.data?this.data.buffer:new ArrayBuffer(0)}}class VBodyResource extends VBaseResource{constructor(t,a){super(VHeaderTags.TAG_BODY,t);Re(this,"images");this.images=a}static async decode(t,a,r,o=!1){const l=getFaceCount(r),c=getCodec(r.format),s=new Array(r.mipmaps);for(let f=r.mipmaps-1;f>=0;f--){const v=s[f]=new Array(r.frames);for(let g=0;g<r.frames;g++){const M=v[g]=new Array(l);for(let h=0;h<l;h++){const[A,x]=getMipSize(f,r.width,r.height),m=c.length(A,x);let U;if(r.compression_level!==0){const P=r.compressed_lengths[f][g][h],H=a.read_u8(P);U=new DataBuffer(await decompress$2(H,r.compression_method,r.compression_level))}else U=a.ref(a.pointer,m*r.slices),a.pointer+=U.length;const T=M[h]=new Array(r.slices);for(let P=0;P<r.slices;P++){const H=U.read_u8(m),G=new VEncodedImageData(H,A,x,r.format);o?T[P]=G:T[P]=c.decode(G)}}}}const d=new VDataCollection(s);return new VBodyResource(t.flags,d)}async encode(t){const a=getFaceCount(t),r=getCodec(t.format),o=[];let l=0;const c=t.compressed_lengths=new Array(t.mipmaps);for(let d=t.mipmaps-1;d>=0;d--){const f=c[d]=new Array(t.frames);for(let v=0;v<t.frames;v++){const g=f[v]=new Array(a);for(let M=0;M<a;M++){const[h,A]=getMipSize(d,t.width,t.height),x=r.length(h,A),m=new DataBuffer(x*t.slices);for(let T=0;T<t.slices;T++){const P=this.images.getImage(d,v,M,T).encode(t.format).data;m.write_u8(P)}let U=m;t.compression_level!==0&&(U=await compress$1(U,t.compression_method,t.compression_level)),g[M]=U.length,o.push(U),l+=U.length}}}const s=new DataBuffer(l);for(let d=0;d<o.length;d++)s.write_u8(o[d]);return s.buffer}}class VThumbResource extends VBaseResource{constructor(t,a){super(VHeaderTags.TAG_THUMB,t);Re(this,"image");this.image=a}static decode(t,a,r){const o=getCodec(r.thumb_format),l=a.read_u8(o.length(r.thumb_width,r.thumb_height)),c=o.decode(new VEncodedImageData(l,r.thumb_width,r.thumb_height,r.thumb_format));return new VThumbResource(0,c)}encode(t){return this.image.width===0||this.image.height===0?new ArrayBuffer(0):this.image.encode(VFormats.DXT1).data.buffer}}const Ar=class Ar extends VBaseResource{constructor(t,a){super(VHeaderTags.TAG_SHEET,t);Re(this,"sequences");this.sequences=a}static decode(t,a,r){const o=r.version===0?1:4,l=a.read_u32(),c=new Array(l);for(let s=0;s<l;s++){a.read_u32();const d=!!a.read_u32(),f=a.read_u32(),v=a.read_f32(),g=new Array(f);for(let M=0;M<f;M++){const h=a.read_f32(),A=new Array(o);for(let x=0;x<o;x++)A[x]=a.read_f32(4);g[M]={duration:h,coords:A}}c[s]={clamp:d,duration:v,frames:g}}return new Ar(t.flags,c)}encode(t){const a=t.version===0?1:4;let r=4;for(let l=0;l<this.sequences.length;l++)r+=16+this.sequences[l].frames.length*(4+4*4*a);const o=new DataBuffer(r);for(let l=0;l<this.sequences.length;l++){const c=this.sequences[l];o.write_u32(l),o.write_u32(c.clamp?255:0),o.write_u32(c.frames.length),o.write_f32(c.duration);for(let s=0;s<c.frames.length;s++){const d=c.frames[s];if(o.write_f32(d.duration),a!==d.coords.length)throw Error(`Expected ${a} coordinate sets, but got ${d.coords.length}!`);for(let f=0;f<a;f++){if(d.coords[f].length!==4)throw Error("SheetFrame coords must be of length 4!");o.write_f32(d.coords[f])}}}return o.buffer}};Re(Ar,"tag",VHeaderTags.TAG_SHEET),registerResourceType(Ar);let VSheetResource=Ar;function write_format(n){if(VFormats[n]==null)throw Error(`write_format: Encountered invalid format (id=${n}) in header!`);return n}function write_header(n,e,t){n.write_str(e.tag,3),n.write_u8(e.flags),n.write_u32(t)}function write_chunks(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let a=0;for(const r of n)t.set(new Uint8Array(r),a),a+=r.byteLength;return t.buffer}function write_axc(n){if(n.compressed_lengths==null)throw Error("write_axc: Compression header is not present. If this error is thrown, something has gone very very wrong!");if(n.version<6)throw Error("write_axc: Compression requires VTF version 6+");const e=getFaceCount(n),t=8+n.frames*n.mipmaps*n.slices*e*4,a=new DataBuffer(t);a.set_endian(!0),a.write_u32(t),a.write_i16(n.compression_level),a.write_i16(n.compression_method);const r=n.compressed_lengths;for(let o=n.mipmaps-1;o>=0;o--){const l=r[o];for(let c=0;c<n.frames;c++){const s=l[c];for(let d=0;d<e;d++)a.write_u32(s[d])}}return a.buffer}Vtf.prototype.encode=async function(){const n=[],e=VFileHeader.fromVtf(this);let t=this.meta.length+2;e.compression_level!==0&&(t+=1);const a=getHeaderLength(this.version,t),r=new DataBuffer(a);n.push(r.buffer),r.set_endian(!0),r.write_str("VTF\0",4),r.write_u32(7),r.write_u32(this.version),r.write_u32(a);const[o,l]=this.data.getSize();r.write_u16(o),r.write_u16(l),r.write_u32(e.flags),r.write_u16(e.frames),r.write_u16(e.first_frame),r.pad(4),r.write_f32(e.reflectivity),r.pad(4),r.write_f32(e.bump_scale),r.write_u32(write_format(e.format)),r.write_u8(e.mipmaps),r.write_u32(write_format(VFormats.DXT1));const c=getThumbMip(o,l),s=c<e.mipmaps?this.data.getImage(c,0,0,0):new VImageData(new Uint8Array(0),0,0);r.write_u8(s.width),r.write_u8(s.height);const d=new VThumbResource(0,s),f=new VBodyResource(0,this.data),v=d.encode(e),g=await f.encode(e);if(n.push(v),n.push(g),this.version>1&&r.write_u16(this.data.sliceCount()),this.version<3)return write_chunks(n);r.pad(3),r.write_u32(t),r.pad(8);let M=r.length;if(write_header(r,d,M),M+=v.byteLength,write_header(r,f,M),M+=g.byteLength,e.compression_level!==0){const h=write_axc(e);write_header(r,new VBaseResource(VHeaderTags.TAG_AXC,0),M),M+=h.byteLength,n.push(h)}for(const h of this.meta){write_header(r,h,M);const A=await h.encode(e);M+=A.byteLength,n.push(A)}return write_chunks(n)};const NO_DATA=2;function read_format(n){if(VFormats[n]==null)throw Error(`read_format: Encountered invalid format (id=${n}) in header!`);return n}function decode_axc(n,e,t){const a=getFaceCount(t);if(n.flags&NO_DATA){if(n.start!==0)throw Error(`decode_axc: Expected inline compression value of 0. Got ${n.start} instead!`);return t.compression_level=0,!1}const r=e.ref(n.start);r.pad(4),t.compression_level=r.read_i16(),t.compression_method=r.read_i16(),t.compression_method||(t.compression_method=VCompressionMethods.Deflate);const o=t.compressed_lengths=new Array(t.mipmaps);for(let l=0;l<t.mipmaps;l++){const c=o[l]=new Array(t.frames);for(let s=0;s<t.frames;s++){const d=c[s]=new Array(a);for(let f=0;f<a;f++)d[f]=r.read_u32()}}return!0}Vtf.decode=async function(n,e=!1,t=!1){const a=new VFileHeader;a.compression_level=0;const r=new DataBuffer(n);r.set_endian(!0);const o=r.read_str(4);if(o==="VTFX")throw Error("Vtf.decode: Console vtfs are not supported!");if(o!=="VTF\0")throw Error(`Vtf.decode: Encountered invalid file signature! ("${o}")`);const l=r.read_u32();if(a.version=r.read_u32(),l!==7||a.version<0||a.version>6)throw Error(`Vtf.decode: Encountered invalid format version! (${l}.${a.version})`);const c=getHeaderLength(a.version),s=r.read_u32();if(s<c)throw Error(`Vtf.decode: Encountered invalid header length! (${s})`);if(a.width=r.read_u16(),a.height=r.read_u16(),a.flags=r.read_u32(),a.frames=r.read_u16(),a.first_frame=r.read_u16(),r.pad(4),a.reflectivity=r.read_f32(3),r.pad(4),a.bump_scale=r.read_f32(),a.format=read_format(r.read_u32()),a.mipmaps=r.read_u8(),r.pointer+=4,a.thumb_format=VFormats.DXT1,a.thumb_width=r.read_u8(),a.thumb_height=r.read_u8(),a.slices=a.version>1?r.read_u16():1,e)return a;let d;const f=[],v=[];let g=0;if(a.version>=3)r.pad(3),g=r.read_u32(),r.pad(8);else{const h=s+getCodec(a.thumb_format).length(a.thumb_width,a.thumb_height),A=r.ref(h);d=await VBodyResource.decode(new VHeader(VHeaderTags.TAG_BODY,0,h),A,a,t)}let M=null;for(let h=0;h<g;h++){const A=new VHeader(r.read_str(3),r.read_u8(),r.read_u32());if(A.tag===VHeaderTags.TAG_AXC){const x=decode_axc(A,r,a);M!==null&&x&&(f[M].end=A.start),M=null;continue}f.push(A),A.hasData()&&(M!==null&&(f[M].end=A.start),M=f.length-1)}M!==null&&(f[M].end=r.length);for(let h=0;h<f.length;h++){const A=f[h];let x;if(A.flags&NO_DATA||(x=r.ref(A.start,A.end-A.start)),A.tag===VHeaderTags.TAG_BODY){if(!x)throw Error("Vtf.decode: Body resource has no data! (0x2 flag set)");d=await VBodyResource.decode(A,x,a,t);continue}if(A.tag===VHeaderTags.TAG_THUMB)continue;const m=VResourceTypes[A.tag]??VBaseResource;v.push(await m.decode(A,x,a))}if(!d)throw Error("Vtf.decode: Vtf does not contain a body resource!");return new Vtf(d.images,a)};const PixelDataTypes={Uint8:1,Uint16:2,Uint32:4,Float16:2,Float32:4},PixelArrayTypes={Uint8:Uint8Array,Uint16:Uint16Array,Uint32:Uint32Array,Float16:HAS_FLOAT16?Float16Array:null,Float32:Float32Array},PixelFloatTypes={Float16:!0,Float32:!0};function createGenericRGBA(n,e,t,a,r,o,l=!1,c=!1){const s="set"+e,d="get"+e,f=PixelArrayTypes[e],v=e in PixelFloatTypes?1:2**(f.BYTES_PER_ELEMENT*8)-1,g=+(t!=null)+ +(a!=null)+ +(r!=null)+ +(o!=null),M=PixelDataTypes[e]*g;return{length(h,A){return h*A*M},encode(h){const A=h.convert(f),x=A.width*A.height,m=new Uint8Array(x*M),U=new DataView(m.buffer);for(let T=0;T<x;T++){const P=T*4,H=T*M;t!=null&&U[s](H+t,A.data[P],!0),a!=null&&U[s](H+a,A.data[P+1],!0),r!=null&&U[s](H+r,A.data[P+2],!0),o!=null&&U[s](H+o,A.data[P+3],!0)}return new VEncodedImageData(m,A.width,A.height,n)},decode(h){const A=new DataView(h.data.buffer),x=h.width*h.height,m=new f(x*4);for(let U=0;U<x;U++){const T=U*M,P=U*4;if(l){m[P]=m[P+1]=m[P+2]=A[d](T,!0),m[P+3]=v;continue}t!=null&&(m[P]=A[d](T+t,!0)),a!=null&&(m[P+1]=A[d](T+a,!0)),r!=null&&(m[P+2]=A[d](T+r,!0)),o!=null?m[P+3]=A[d](T+o,!0):m[P+3]=v}return new VImageData(m,h.width,h.height)}}}registerCodec(VFormats.RGBA8888,createGenericRGBA(VFormats.RGBA8888,"Uint8",0,1,2,3));registerCodec(VFormats.BGRA8888,createGenericRGBA(VFormats.BGRA8888,"Uint8",2,1,0,3));registerCodec(VFormats.BGRX8888,createGenericRGBA(VFormats.BGRX8888,"Uint8",2,1,0,3));registerCodec(VFormats.ABGR8888,createGenericRGBA(VFormats.ABGR8888,"Uint8",3,2,1,0));registerCodec(VFormats.ARGB8888,createGenericRGBA(VFormats.ARGB8888,"Uint8",1,2,3,0));registerCodec(VFormats.RGB888,createGenericRGBA(VFormats.RGB888,"Uint8",0,1,2,null));registerCodec(VFormats.BGR888,createGenericRGBA(VFormats.BGR888,"Uint8",2,1,0,null));registerCodec(VFormats.UV88,createGenericRGBA(VFormats.UV88,"Uint8",0,1,null,null));registerCodec(VFormats.A8,createGenericRGBA(VFormats.A8,"Uint8",null,null,null,0));registerCodec(VFormats.I8,createGenericRGBA(VFormats.I8,"Uint8",0,null,null,null,!0));registerCodec(VFormats.P8,createGenericRGBA(VFormats.P8,"Uint8",0,null,null,null,!0));registerCodec(VFormats.R32F,createGenericRGBA(VFormats.R32F,"Float32",0,null,null,null));registerCodec(VFormats.RGB323232F,createGenericRGBA(VFormats.RGB323232F,"Float32",0,4,8,null));registerCodec(VFormats.RGBA16161616,createGenericRGBA(VFormats.RGBA16161616,"Uint16",0,2,4,6));registerCodec(VFormats.RGBA32323232F,createGenericRGBA(VFormats.RGBA32323232F,"Float32",0,4,8,12));HAS_FLOAT16?registerCodec(VFormats.RGBA16161616F,createGenericRGBA(VFormats.RGBA16161616F,"Float16",0,2,4,6)):console.warn("vtf-js: Your environment does not support Float16Array. RGBA16161616F codec has not been registered!");function encode565(n,e=0,t=0,a=1,r=2){return Math.round(n[e+t]/255*31)<<11&63488|Math.round(n[e+a]/255*63)<<5&2016|Math.round(n[e+r]/255*31)<<0&31}function decode565(n,e,t=0,a=0,r=1,o=2){return n[t+a]=((e&63488)>>11)/31,n[t+r]=((e&2016)>>5)/63,n[t+o]=((e&31)>>0)/31,n}registerCodec(VFormats.RGB565,{length(n,e){return n*e*2},encode(n){const e=n.convert(Uint8Array).data,t=n.width*n.height,a=new Uint8Array(t*2),r=new DataView(a.buffer);for(let o=0;o<t;o++)r.setUint16(o*2,encode565(e,o*4),!0);return new VEncodedImageData(a,n.width,n.height,VFormats.RGB565)},decode(n){const e=n.data,t=n.width*n.height,a=new Float32Array(t*4),r=new DataView(e.buffer);for(let o=0;o<t;o++){const l=o*4;decode565(a,r.getUint16(o*2,!0),l),a[l+3]=1}return new VImageData(a,n.width,n.height).convert(Uint8Array)}});registerCodec(VFormats.BGR565,{length(n,e){return n*e*2},encode(n){const e=n.convert(Uint8Array).data,t=n.width*n.height,a=new Uint8Array(t*2),r=new DataView(a.buffer);for(let o=0;o<t;o++)r.setUint16(o*2,encode565(e,o*4,2,1,0),!0);return new VEncodedImageData(a,n.width,n.height,VFormats.RGB565)},decode(n){const e=n.data,t=n.width*n.height,a=new Float32Array(t*4),r=new DataView(e.buffer);for(let o=0;o<t;o++){const l=o*4;decode565(a,r.getUint16(o*2,!0),l,2,1,0),a[l+3]=1}return new VImageData(a,n.width,n.height).convert(Uint8Array)}});registerCodec(VFormats.IA88,{length(n,e){return n*e*2},encode(n){const e=n.width*n.height,t=new Uint8Array(e*2),a=n.convert(Uint8Array).data;for(let r=0;r<e;r++){const o=r*4,l=r*2;t[l]=a[o],t[l+1]=a[o+3]}return new VEncodedImageData(t,n.width,n.height,VFormats.IA88)},decode(n){const e=n.width*n.height,t=new Uint8Array(e*4),a=n.data;for(let r=0;r<e;r++){const o=r*2,l=r*4;t[l]=t[l+1]=t[l+2]=a[o],t[l+3]=a[o+1]}return new VImageData(t,n.width,n.height)}});function getAugmentedNamespace(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function a(){return this instanceof a?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(a){var r=Object.getOwnPropertyDescriptor(n,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return n[a]}})}),t}function commonjsRequire(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var squish={exports:{}};const __viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$1=getAugmentedNamespace(__viteBrowserExternal$1);squish.exports;(function(module){var Module;Module||(Module=(typeof Module<"u"?Module:null)||{});var moduleOverrides={};for(var key in Module)Module.hasOwnProperty(key)&&(moduleOverrides[key]=Module[key]);var ENVIRONMENT_IS_WEB=!1,ENVIRONMENT_IS_WORKER=!1,ENVIRONMENT_IS_NODE=!1,ENVIRONMENT_IS_SHELL=!1;if(Module.ENVIRONMENT)if(Module.ENVIRONMENT==="WEB")ENVIRONMENT_IS_WEB=!0;else if(Module.ENVIRONMENT==="WORKER")ENVIRONMENT_IS_WORKER=!0;else if(Module.ENVIRONMENT==="NODE")ENVIRONMENT_IS_NODE=!0;else if(Module.ENVIRONMENT==="SHELL")ENVIRONMENT_IS_SHELL=!0;else throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");else ENVIRONMENT_IS_WEB=typeof window=="object",ENVIRONMENT_IS_WORKER=typeof importScripts=="function",ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof commonjsRequire=="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER,ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;if(ENVIRONMENT_IS_NODE){Module.print||(Module.print=console.log),Module.printErr||(Module.printErr=console.warn);var nodeFS,nodePath;Module.read=function(e,t){nodeFS||(nodeFS=require$$1),nodePath||(nodePath=require$$1),e=nodePath.normalize(e);var a=nodeFS.readFileSync(e);return t?a:a.toString()},Module.readBinary=function(e){var t=Module.read(e,!0);return t.buffer||(t=new Uint8Array(t)),assert(t.buffer),t},Module.load=function(e){globalEval(read(e))},Module.thisProgram||(process.argv.length>1?Module.thisProgram=process.argv[1].replace(/\\/g,"/"):Module.thisProgram="unknown-program"),Module.arguments=process.argv.slice(2),module.exports=Module,process.on("uncaughtException",function(n){if(!(n instanceof ExitStatus))throw n}),Module.inspect=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL)Module.print||(Module.print=print),typeof printErr<"u"&&(Module.printErr=printErr),typeof read<"u"?Module.read=read:Module.read=function(){throw"no read() available"},Module.readBinary=function(e){if(typeof readbuffer=="function")return new Uint8Array(readbuffer(e));var t=read(e,"binary");return assert(typeof t=="object"),t},typeof scriptArgs<"u"?Module.arguments=scriptArgs:typeof arguments<"u"&&(Module.arguments=arguments),typeof quit=="function"&&(Module.quit=function(n,e){quit(n)});else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(Module.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},ENVIRONMENT_IS_WORKER&&(Module.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),Module.readAsync=function(e,t,a){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){r.status==200||r.status==0&&r.response?t(r.response):a()},r.onerror=a,r.send(null)},typeof arguments<"u"&&(Module.arguments=arguments),typeof console<"u")Module.print||(Module.print=function(e){console.log(e)}),Module.printErr||(Module.printErr=function(e){console.warn(e)});else{var TRY_USE_DUMP=!1;Module.print||(Module.print=TRY_USE_DUMP&&typeof dump<"u"?function(n){dump(n)}:function(n){})}ENVIRONMENT_IS_WORKER&&(Module.load=importScripts),typeof Module.setWindowTitle>"u"&&(Module.setWindowTitle=function(n){document.title=n})}else throw"Unknown runtime environment. Where are we?";function globalEval(n){eval.call(null,n)}!Module.load&&Module.read&&(Module.load=function(e){globalEval(Module.read(e))}),Module.print||(Module.print=function(){}),Module.printErr||(Module.printErr=Module.print),Module.arguments||(Module.arguments=[]),Module.thisProgram||(Module.thisProgram="./this.program"),Module.quit||(Module.quit=function(n,e){throw e}),Module.print=Module.print,Module.printErr=Module.printErr,Module.preRun=[],Module.postRun=[];for(var key in moduleOverrides)moduleOverrides.hasOwnProperty(key)&&(Module[key]=moduleOverrides[key]);moduleOverrides=void 0;var Runtime={setTempRet0:function(n){return tempRet0=n,n},getTempRet0:function(){return tempRet0},stackSave:function(){return STACKTOP},stackRestore:function(n){STACKTOP=n},getNativeTypeSize:function(n){switch(n){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(n[n.length-1]==="*")return Runtime.QUANTUM_SIZE;if(n[0]==="i"){var e=parseInt(n.substr(1));return assert(e%8===0),e/8}else return 0}}},getNativeFieldSize:function(n){return Math.max(Runtime.getNativeTypeSize(n),Runtime.QUANTUM_SIZE)},STACK_ALIGN:16,prepVararg:function(n,e){return e==="double"||e==="i64"?n&7&&(assert((n&7)===4),n+=4):assert((n&3)===0),n},getAlignSize:function(n,e,t){return!t&&(n=="i64"||n=="double")?8:n?Math.min(e||(n?Runtime.getNativeFieldSize(n):0),Runtime.QUANTUM_SIZE):Math.min(e,8)},dynCall:function(n,e,t){return t&&t.length?Module["dynCall_"+n].apply(null,[e].concat(t)):Module["dynCall_"+n].call(null,e)},functionPointers:[],addFunction:function(n){for(var e=0;e<Runtime.functionPointers.length;e++)if(!Runtime.functionPointers[e])return Runtime.functionPointers[e]=n,2*(1+e);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."},removeFunction:function(n){Runtime.functionPointers[(n-2)/2]=null},warnOnce:function(n){Runtime.warnOnce.shown||(Runtime.warnOnce.shown={}),Runtime.warnOnce.shown[n]||(Runtime.warnOnce.shown[n]=1,Module.printErr(n))},funcWrappers:{},getFuncWrapper:function(n,e){if(n){assert(e),Runtime.funcWrappers[e]||(Runtime.funcWrappers[e]={});var t=Runtime.funcWrappers[e];return t[n]||(e.length===1?t[n]=function(){return Runtime.dynCall(e,n)}:e.length===2?t[n]=function(r){return Runtime.dynCall(e,n,[r])}:t[n]=function(){return Runtime.dynCall(e,n,Array.prototype.slice.call(arguments))}),t[n]}},getCompilerSetting:function(n){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"},stackAlloc:function(n){var e=STACKTOP;return STACKTOP=STACKTOP+n|0,STACKTOP=STACKTOP+15&-16,e},staticAlloc:function(n){var e=STATICTOP;return STATICTOP=STATICTOP+n|0,STATICTOP=STATICTOP+15&-16,e},dynamicAlloc:function(n){var e=HEAP32[DYNAMICTOP_PTR>>2],t=(e+n+15|0)&-16;if(HEAP32[DYNAMICTOP_PTR>>2]=t,t>=TOTAL_MEMORY){var a=enlargeMemory();if(!a)return HEAP32[DYNAMICTOP_PTR>>2]=e,0}return e},alignMemory:function(n,e){var t=n=Math.ceil(n/(e||16))*(e||16);return t},makeBigInt:function(n,e,t){var a=t?+(n>>>0)+ +(e>>>0)*4294967296:+(n>>>0)+ +(e|0)*4294967296;return a},GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module.Runtime=Runtime;var ABORT=0;function assert(n,e){n||abort("Assertion failed: "+e)}function getCFunc(ident){var func=Module["_"+ident];if(!func)try{func=eval("_"+ident)}catch(n){}return assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)"),func}var cwrap,ccall;(function(){var JSfuncs={stackSave:function(){Runtime.stackSave()},stackRestore:function(){Runtime.stackRestore()},arrayToC:function(n){var e=Runtime.stackAlloc(n.length);return writeArrayToMemory(n,e),e},stringToC:function(n){var e=0;if(n!=null&&n!==0){var t=(n.length<<2)+1;e=Runtime.stackAlloc(t),stringToUTF8(n,e,t)}return e}},toC={string:JSfuncs.stringToC,array:JSfuncs.arrayToC};ccall=function(e,t,a,r,o){var l=getCFunc(e),c=[],s=0;if(r)for(var d=0;d<r.length;d++){var f=toC[a[d]];f?(s===0&&(s=Runtime.stackSave()),c[d]=f(r[d])):c[d]=r[d]}var v=l.apply(null,c);if(t==="string"&&(v=Pointer_stringify(v)),s!==0){if(o&&o.async){EmterpreterAsync.asyncFinalizers.push(function(){Runtime.stackRestore(s)});return}Runtime.stackRestore(s)}return v};var sourceRegex=/^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(n){var e=n.toString().match(sourceRegex).slice(1);return{arguments:e[0],body:e[1],returnValue:e[2]}}var JSsource=null;function ensureJSsource(){if(!JSsource){JSsource={};for(var n in JSfuncs)JSfuncs.hasOwnProperty(n)&&(JSsource[n]=parseJSFunc(JSfuncs[n]))}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident),numericArgs=argTypes.every(function(n){return n==="number"}),numericRet=returnType!=="string";if(numericRet&&numericArgs)return cfunc;var argNames=argTypes.map(function(n,e){return"$"+e}),funcstr="(function("+argNames.join(",")+") {",nargs=argTypes.length;if(!numericArgs){ensureJSsource(),funcstr+="var stack = "+JSsource.stackSave.body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type!=="number"){var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";",funcstr+=convertCode.body+";",funcstr+=arg+"=("+convertCode.returnValue+");"}}}var cfuncname=parseJSFunc(function(){return cfunc}).returnValue;if(funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");",!numericRet){var strgfy=parseJSFunc(function(){return Pointer_stringify}).returnValue;funcstr+="ret = "+strgfy+"(ret);"}return numericArgs||(ensureJSsource(),funcstr+=JSsource.stackRestore.body.replace("()","(stack)")+";"),funcstr+="return ret})",eval(funcstr)}})(),Module.ccall=ccall,Module.cwrap=cwrap;function setValue(n,e,t,a){switch(t=t||"i8",t.charAt(t.length-1)==="*"&&(t="i32"),t){case"i1":HEAP8[n>>0]=e;break;case"i8":HEAP8[n>>0]=e;break;case"i16":HEAP16[n>>1]=e;break;case"i32":HEAP32[n>>2]=e;break;case"i64":tempI64=[e>>>0,(tempDouble=e,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[n>>2]=tempI64[0],HEAP32[n+4>>2]=tempI64[1];break;case"float":HEAPF32[n>>2]=e;break;case"double":HEAPF64[n>>3]=e;break;default:abort("invalid type for setValue: "+t)}}Module.setValue=setValue;function getValue(n,e,t){switch(e=e||"i8",e.charAt(e.length-1)==="*"&&(e="i32"),e){case"i1":return HEAP8[n>>0];case"i8":return HEAP8[n>>0];case"i16":return HEAP16[n>>1];case"i32":return HEAP32[n>>2];case"i64":return HEAP32[n>>2];case"float":return HEAPF32[n>>2];case"double":return HEAPF64[n>>3];default:abort("invalid type for setValue: "+e)}return null}Module.getValue=getValue;var ALLOC_NORMAL=0,ALLOC_STACK=1,ALLOC_STATIC=2,ALLOC_DYNAMIC=3,ALLOC_NONE=4;Module.ALLOC_NORMAL=ALLOC_NORMAL,Module.ALLOC_STACK=ALLOC_STACK,Module.ALLOC_STATIC=ALLOC_STATIC,Module.ALLOC_DYNAMIC=ALLOC_DYNAMIC,Module.ALLOC_NONE=ALLOC_NONE;function allocate(n,e,t,a){var r,o;typeof n=="number"?(r=!0,o=n):(r=!1,o=n.length);var l=typeof e=="string"?e:null,c;if(t==ALLOC_NONE?c=a:c=[typeof _malloc=="function"?_malloc:Runtime.staticAlloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][t===void 0?ALLOC_STATIC:t](Math.max(o,l?1:e.length)),r){var a=c,s;for(assert((c&3)==0),s=c+(o&-4);a<s;a+=4)HEAP32[a>>2]=0;for(s=c+o;a<s;)HEAP8[a++>>0]=0;return c}if(l==="i8")return n.subarray||n.slice?HEAPU8.set(n,c):HEAPU8.set(new Uint8Array(n),c),c;for(var d=0,f,v,g;d<o;){var M=n[d];if(typeof M=="function"&&(M=Runtime.getFunctionIndex(M)),f=l||e[d],f===0){d++;continue}f=="i64"&&(f="i32"),setValue(c+d,M,f),g!==f&&(v=Runtime.getNativeTypeSize(f),g=f),d+=v}return c}Module.allocate=allocate;function getMemory(n){return staticSealed?runtimeInitialized?_malloc(n):Runtime.dynamicAlloc(n):Runtime.staticAlloc(n)}Module.getMemory=getMemory;function Pointer_stringify(n,e){if(e===0||!n)return"";for(var t=0,a,r=0;a=HEAPU8[n+r>>0],t|=a,!(a==0&&!e||(r++,e&&r==e)););e||(e=r);var o="";if(t<128){for(var l=1024,c;e>0;)c=String.fromCharCode.apply(String,HEAPU8.subarray(n,n+Math.min(e,l))),o=o?o+c:c,n+=l,e-=l;return o}return Module.UTF8ToString(n)}Module.Pointer_stringify=Pointer_stringify;function AsciiToString(n){for(var e="";;){var t=HEAP8[n++>>0];if(!t)return e;e+=String.fromCharCode(t)}}Module.AsciiToString=AsciiToString;function stringToAscii(n,e){return writeAsciiToMemory(n,e,!1)}Module.stringToAscii=stringToAscii;var UTF8Decoder=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function UTF8ArrayToString(n,e){for(var t=e;n[t];)++t;if(t-e>16&&n.subarray&&UTF8Decoder)return UTF8Decoder.decode(n.subarray(e,t));for(var a,r,o,l,c,s,d="";;){if(a=n[e++],!a)return d;if(!(a&128)){d+=String.fromCharCode(a);continue}if(r=n[e++]&63,(a&224)==192){d+=String.fromCharCode((a&31)<<6|r);continue}if(o=n[e++]&63,(a&240)==224?a=(a&15)<<12|r<<6|o:(l=n[e++]&63,(a&248)==240?a=(a&7)<<18|r<<12|o<<6|l:(c=n[e++]&63,(a&252)==248?a=(a&3)<<24|r<<18|o<<12|l<<6|c:(s=n[e++]&63,a=(a&1)<<30|r<<24|o<<18|l<<12|c<<6|s))),a<65536)d+=String.fromCharCode(a);else{var f=a-65536;d+=String.fromCharCode(55296|f>>10,56320|f&1023)}}}Module.UTF8ArrayToString=UTF8ArrayToString;function UTF8ToString(n){return UTF8ArrayToString(HEAPU8,n)}Module.UTF8ToString=UTF8ToString;function stringToUTF8Array(n,e,t,a){if(!(a>0))return 0;for(var r=t,o=t+a-1,l=0;l<n.length;++l){var c=n.charCodeAt(l);if(c>=55296&&c<=57343&&(c=65536+((c&1023)<<10)|n.charCodeAt(++l)&1023),c<=127){if(t>=o)break;e[t++]=c}else if(c<=2047){if(t+1>=o)break;e[t++]=192|c>>6,e[t++]=128|c&63}else if(c<=65535){if(t+2>=o)break;e[t++]=224|c>>12,e[t++]=128|c>>6&63,e[t++]=128|c&63}else if(c<=2097151){if(t+3>=o)break;e[t++]=240|c>>18,e[t++]=128|c>>12&63,e[t++]=128|c>>6&63,e[t++]=128|c&63}else if(c<=67108863){if(t+4>=o)break;e[t++]=248|c>>24,e[t++]=128|c>>18&63,e[t++]=128|c>>12&63,e[t++]=128|c>>6&63,e[t++]=128|c&63}else{if(t+5>=o)break;e[t++]=252|c>>30,e[t++]=128|c>>24&63,e[t++]=128|c>>18&63,e[t++]=128|c>>12&63,e[t++]=128|c>>6&63,e[t++]=128|c&63}}return e[t]=0,t-r}Module.stringToUTF8Array=stringToUTF8Array;function stringToUTF8(n,e,t){return stringToUTF8Array(n,HEAPU8,e,t)}Module.stringToUTF8=stringToUTF8;function lengthBytesUTF8(n){for(var e=0,t=0;t<n.length;++t){var a=n.charCodeAt(t);a>=55296&&a<=57343&&(a=65536+((a&1023)<<10)|n.charCodeAt(++t)&1023),a<=127?++e:a<=2047?e+=2:a<=65535?e+=3:a<=2097151?e+=4:a<=67108863?e+=5:e+=6}return e}Module.lengthBytesUTF8=lengthBytesUTF8,typeof TextDecoder<"u"&&new TextDecoder("utf-16le");function demangle(n){var e=Module.___cxa_demangle||Module.__cxa_demangle;if(e){try{var t=n.substr(1),a=lengthBytesUTF8(t)+1,r=_malloc(a);stringToUTF8(t,r,a);var o=_malloc(4),l=e(r,0,0,o);if(getValue(o,"i32")===0&&l)return Pointer_stringify(l)}catch{}finally{r&&_free(r),o&&_free(o),l&&_free(l)}return n}return Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),n}function demangleAll(n){var e=/__Z[\w\d_]+/g;return n.replace(e,function(t){var a=demangle(t);return t===a?t:t+" ["+a+"]"})}function jsStackTrace(){var n=new Error;if(!n.stack){try{throw new Error(0)}catch(e){n=e}if(!n.stack)return"(no stack trace available)"}return n.stack.toString()}function stackTrace(){var n=jsStackTrace();return Module.extraStackTrace&&(n+=`
`+Module.extraStackTrace()),demangleAll(n)}Module.stackTrace=stackTrace;var WASM_PAGE_SIZE=65536,ASMJS_PAGE_SIZE=16777216,MIN_TOTAL_MEMORY=16777216;function alignUp(n,e){return n%e>0&&(n+=e-n%e),n}var HEAP,buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBuffer(n){Module.buffer=buffer=n}function updateGlobalBufferViews(){Module.HEAP8=HEAP8=new Int8Array(buffer),Module.HEAP16=HEAP16=new Int16Array(buffer),Module.HEAP32=HEAP32=new Int32Array(buffer),Module.HEAPU8=HEAPU8=new Uint8Array(buffer),Module.HEAPU16=HEAPU16=new Uint16Array(buffer),Module.HEAPU32=HEAPU32=new Uint32Array(buffer),Module.HEAPF32=HEAPF32=new Float32Array(buffer),Module.HEAPF64=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed,STACK_BASE,STACKTOP,STACK_MAX,DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0,staticSealed=!1;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}Module.reallocBuffer||(Module.reallocBuffer=function(n){var e;try{if(ArrayBuffer.transfer)e=ArrayBuffer.transfer(buffer,n);else{var t=HEAP8;e=new ArrayBuffer(n);var a=new Int8Array(e);a.set(t)}}catch{return!1}var r=_emscripten_replace_memory(e);return r?e:!1});function enlargeMemory(){var n=Module.usingWasm?WASM_PAGE_SIZE:ASMJS_PAGE_SIZE,e=2147483648-n;if(HEAP32[DYNAMICTOP_PTR>>2]>e)return!1;var t=TOTAL_MEMORY;for(TOTAL_MEMORY=Math.max(TOTAL_MEMORY,MIN_TOTAL_MEMORY);TOTAL_MEMORY<HEAP32[DYNAMICTOP_PTR>>2];)TOTAL_MEMORY<=536870912?TOTAL_MEMORY=alignUp(2*TOTAL_MEMORY,n):TOTAL_MEMORY=Math.min(alignUp((3*TOTAL_MEMORY+2147483648)/4,n),e);var a=Module.reallocBuffer(TOTAL_MEMORY);return!a||a.byteLength!=TOTAL_MEMORY?(TOTAL_MEMORY=t,!1):(updateGlobalBuffer(a),updateGlobalBufferViews(),!0)}var byteLength;try{byteLength=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get),byteLength(new ArrayBuffer(4))}catch(n){byteLength=function(e){return e.byteLength}}var TOTAL_STACK=Module.TOTAL_STACK||5242880,TOTAL_MEMORY=Module.TOTAL_MEMORY||16777216;TOTAL_MEMORY<TOTAL_STACK&&Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")"),Module.buffer?buffer=Module.buffer:buffer=new ArrayBuffer(TOTAL_MEMORY),updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}if(HEAP32[0]=1668509029,HEAP16[1]=25459,HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";Module.HEAP=HEAP,Module.buffer=buffer,Module.HEAP8=HEAP8,Module.HEAP16=HEAP16,Module.HEAP32=HEAP32,Module.HEAPU8=HEAPU8,Module.HEAPU16=HEAPU16,Module.HEAPU32=HEAPU32,Module.HEAPF32=HEAPF32,Module.HEAPF64=HEAPF64;function callRuntimeCallbacks(n){for(;n.length>0;){var e=n.shift();if(typeof e=="function"){e();continue}var t=e.func;typeof t=="number"?e.arg===void 0?Module.dynCall_v(t):Module.dynCall_vi(t,e.arg):t(e.arg===void 0?null:e.arg)}}var __ATPRERUN__=[],__ATINIT__=[],__ATMAIN__=[],__ATEXIT__=[],__ATPOSTRUN__=[],runtimeInitialized=!1;function preRun(){if(Module.preRun)for(typeof Module.preRun=="function"&&(Module.preRun=[Module.preRun]);Module.preRun.length;)addOnPreRun(Module.preRun.shift());callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){runtimeInitialized||(runtimeInitialized=!0,callRuntimeCallbacks(__ATINIT__))}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__)}function postRun(){if(Module.postRun)for(typeof Module.postRun=="function"&&(Module.postRun=[Module.postRun]);Module.postRun.length;)addOnPostRun(Module.postRun.shift());callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(n){__ATPRERUN__.unshift(n)}Module.addOnPreRun=addOnPreRun;function addOnInit(n){__ATINIT__.unshift(n)}Module.addOnInit=addOnInit;function addOnPreMain(n){__ATMAIN__.unshift(n)}Module.addOnPreMain=addOnPreMain;function addOnExit(n){__ATEXIT__.unshift(n)}Module.addOnExit=addOnExit;function addOnPostRun(n){__ATPOSTRUN__.unshift(n)}Module.addOnPostRun=addOnPostRun;function intArrayFromString(n,e,t){var a=t>0?t:lengthBytesUTF8(n)+1,r=new Array(a),o=stringToUTF8Array(n,r,0,r.length);return e&&(r.length=o),r}Module.intArrayFromString=intArrayFromString;function intArrayToString(n){for(var e=[],t=0;t<n.length;t++){var a=n[t];a>255&&(a&=255),e.push(String.fromCharCode(a))}return e.join("")}Module.intArrayToString=intArrayToString;function writeStringToMemory(n,e,t){Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var a,r;t&&(r=e+lengthBytesUTF8(n),a=HEAP8[r]),stringToUTF8(n,e,1/0),t&&(HEAP8[r]=a)}Module.writeStringToMemory=writeStringToMemory;function writeArrayToMemory(n,e){HEAP8.set(n,e)}Module.writeArrayToMemory=writeArrayToMemory;function writeAsciiToMemory(n,e,t){for(var a=0;a<n.length;++a)HEAP8[e++>>0]=n.charCodeAt(a);t||(HEAP8[e>>0]=0)}Module.writeAsciiToMemory=writeAsciiToMemory,(!Math.imul||Math.imul(4294967295,5)!==-5)&&(Math.imul=function n(e,t){var a=e>>>16,r=e&65535,o=t>>>16,l=t&65535;return r*l+(a*l+r*o<<16)|0}),Math.imul=Math.imul,Math.clz32||(Math.clz32=function(n){n=n>>>0;for(var e=0;e<32;e++)if(n&1<<31-e)return e;return 32}),Math.clz32=Math.clz32,Math.trunc||(Math.trunc=function(n){return n<0?Math.ceil(n):Math.floor(n)}),Math.trunc=Math.trunc;var Math_abs=Math.abs,Math_ceil=Math.ceil,Math_floor=Math.floor,Math_pow=Math.pow,Math_min=Math.min,runDependencies=0,dependenciesFulfilled=null;function addRunDependency(n){runDependencies++,Module.monitorRunDependencies&&Module.monitorRunDependencies(runDependencies)}Module.addRunDependency=addRunDependency;function removeRunDependency(n){if(runDependencies--,Module.monitorRunDependencies&&Module.monitorRunDependencies(runDependencies),runDependencies==0&&dependenciesFulfilled){var e=dependenciesFulfilled;dependenciesFulfilled=null,e()}}Module.removeRunDependency=removeRunDependency,Module.preloadedImages={},Module.preloadedAudios={},STATIC_BASE=Runtime.GLOBAL_BASE,STATICTOP=STATIC_BASE+8624,__ATINIT__.push(),allocate([116,2,0,0,148,2,0,0,24,0,0,0,0,0,0,0,76,2,0,0,170,2,0,0,116,2,0,0,190,2,0,0,24,0,0,0,0,0,0,0,116,2,0,0,209,26,0,0,24,0,0,0,0,0,0,0,116,2,0,0,63,27,0,0,80,0,0,0,0,0,0,0,116,2,0,0,236,26,0,0,96,0,0,0,0,0,0,0,76,2,0,0,13,27,0,0,116,2,0,0,26,27,0,0,64,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,24,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,32,0,0,0,3,0,0,0,4,0,0,0,0,0,0,0,48,0,0,0,5,0,0,0,6,0,0,0,209,2,0,0,209,8,0,0,209,2,0,0,209,14,0,0,209,20,0,0,209,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,172,29,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,196,1,0,0,0,0,0,0,64,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,104,0,0,0,1,0,0,0,5,0,0,0,3,0,0,0,4,0,0,0,3,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,78,54,115,113,117,105,115,104,49,48,67,108,117,115,116,101,114,70,105,116,69,0,78,54,115,113,117,105,115,104,57,67,111,108,111,117,114,70,105,116,69,0,78,54,115,113,117,105,115,104,56,82,97,110,103,101,70,105,116,69,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,2,0,1,0,0,0,3,0,1,1,0,0,4,0,2,1,1,0,3,0,2,0,1,0,2,0,2,1,1,0,1,0,3,1,1,0,0,0,3,0,1,0,1,1,2,1,1,0,2,1,2,0,1,0,3,0,4,0,1,0,4,0,5,1,2,0,3,0,5,0,2,0,2,0,5,1,2,0,1,0,6,1,2,0,0,0,6,0,2,0,1,2,3,1,2,0,2,2,3,0,2,0,3,0,7,0,2,0,4,1,6,1,3,0,3,1,6,0,3,0,2,0,8,0,3,0,1,0,9,1,3,0,0,0,9,0,3,0,1,0,9,1,3,0,2,0,10,1,3,0,3,0,10,0,3,0,4,2,7,1,4,0,4,2,7,0,4,0,3,0,11,0,4,0,2,1,10,1,4,0,1,1,10,0,4,0,0,0,12,0,4,0,1,0,13,1,4,0,2,0,13,0,4,0,3,0,13,1,4,0,4,0,14,1,5,0,3,0,14,0,5,0,2,2,11,1,5,0,1,2,11,0,5,0,0,0,15,0,5,0,1,1,14,1,5,0,2,1,14,0,5,0,3,0,16,0,5,0,4,0,17,1,6,0,3,0,17,0,6,0,2,0,17,1,6,0,1,0,18,1,6,0,0,0,18,0,6,0,1,2,15,1,6,0,2,2,15,0,6,0,3,0,19,0,6,0,4,1,18,1,7,0,3,1,18,0,7,0,2,0,20,0,7,0,1,0,21,1,7,0,0,0,21,0,7,0,1,0,21,1,7,0,2,0,22,1,7,0,3,0,22,0,7,0,4,2,19,1,8,0,4,2,19,0,8,0,3,0,23,0,8,0,2,1,22,1,8,0,1,1,22,0,8,0,0,0,24,0,8,0,1,0,25,1,8,0,2,0,25,0,8,0,3,0,25,1,8,0,4,0,26,1,9,0,3,0,26,0,9,0,2,2,23,1,9,0,1,2,23,0,9,0,0,0,27,0,9,0,1,1,26,1,9,0,2,1,26,0,9,0,3,0,28,0,9,0,4,0,29,1,10,0,3,0,29,0,10,0,2,0,29,1,10,0,1,0,30,1,10,0,0,0,30,0,10,0,1,2,27,1,10,0,2,2,27,0,10,0,3,0,31,0,10,0,4,1,30,1,11,0,3,1,30,0,11,0,2,4,24,0,11,0,1,1,31,1,11,0,0,1,31,0,11,0,1,1,31,1,11,0,2,2,30,1,11,0,3,2,30,0,11,0,4,2,31,1,12,0,4,2,31,0,12,0,3,4,27,0,12,0,2,3,30,1,12,0,1,3,30,0,12,0,0,4,28,0,12,0,1,3,31,1,12,0,2,3,31,0,12,0,3,3,31,1,12,0,4,4,30,1,13,0,3,4,30,0,13,0,2,6,27,1,13,0,1,6,27,0,13,0,0,4,31,0,13,0,1,5,30,1,13,0,2,5,30,0,13,0,3,8,24,0,13,0,4,5,31,1,14,0,3,5,31,0,14,0,2,5,31,1,14,0,1,6,30,1,14,0,0,6,30,0,14,0,1,6,31,1,14,0,2,6,31,0,14,0,3,8,27,0,14,0,4,7,30,1,15,0,3,7,30,0,15,0,2,8,28,0,15,0,1,7,31,1,15,0,0,7,31,0,15,0,1,7,31,1,15,0,2,8,30,1,15,0,3,8,30,0,15,0,4,10,27,1,16,0,4,10,27,0,16,0,3,8,31,0,16,0,2,9,30,1,16,0,1,9,30,0,16,0,0,12,24,0,16,0,1,9,31,1,16,0,2,9,31,0,16,0,3,9,31,1,16,0,4,10,30,1,17,0,3,10,30,0,17,0,2,10,31,1,17,0,1,10,31,0,17,0,0,12,27,0,17,0,1,11,30,1,17,0,2,11,30,0,17,0,3,12,28,0,17,0,4,11,31,1,18,0,3,11,31,0,18,0,2,11,31,1,18,0,1,12,30,1,18,0,0,12,30,0,18,0,1,14,27,1,18,0,2,14,27,0,18,0,3,12,31,0,18,0,4,13,30,1,19,0,3,13,30,0,19,0,2,16,24,0,19,0,1,13,31,1,19,0,0,13,31,0,19,0,1,13,31,1,19,0,2,14,30,1,19,0,3,14,30,0,19,0,4,14,31,1,20,0,4,14,31,0,20,0,3,16,27,0,20,0,2,15,30,1,20,0,1,15,30,0,20,0,0,16,28,0,20,0,1,15,31,1,20,0,2,15,31,0,20,0,3,15,31,1,20,0,4,16,30,1,21,0,3,16,30,0,21,0,2,18,27,1,21,0,1,18,27,0,21,0,0,16,31,0,21,0,1,17,30,1,21,0,2,17,30,0,21,0,3,20,24,0,21,0,4,17,31,1,22,0,3,17,31,0,22,0,2,17,31,1,22,0,1,18,30,1,22,0,0,18,30,0,22,0,1,18,31,1,22,0,2,18,31,0,22,0,3,20,27,0,22,0,4,19,30,1,23,0,3,19,30,0,23,0,2,20,28,0,23,0,1,19,31,1,23,0,0,19,31,0,23,0,1,19,31,1,23,0,2,20,30,1,23,0,3,20,30,0,23,0,4,22,27,1,24,0,4,22,27,0,24,0,3,20,31,0,24,0,2,21,30,1,24,0,1,21,30,0,24,0,0,24,24,0,24,0,1,21,31,1,24,0,2,21,31,0,24,0,3,21,31,1,24,0,4,22,30,1,25,0,3,22,30,0,25,0,2,22,31,1,25,0,1,22,31,0,25,0,0,24,27,0,25,0,1,23,30,1,25,0,2,23,30,0,25,0,3,24,28,0,25,0,4,23,31,1,26,0,3,23,31,0,26,0,2,23,31,1,26,0,1,24,30,1,26,0,0,24,30,0,26,0,1,26,27,1,26,0,2,26,27,0,26,0,3,24,31,0,26,0,4,25,30,1,27,0,3,25,30,0,27,0,2,28,24,0,27,0,1,25,31,1,27,0,0,25,31,0,27,0,1,25,31,1,27,0,2,26,30,1,27,0,3,26,30,0,27,0,4,26,31,1,28,0,4,26,31,0,28,0,3,28,27,0,28,0,2,27,30,1,28,0,1,27,30,0,28,0,0,28,28,0,28,0,1,27,31,1,28,0,2,27,31,0,28,0,3,27,31,1,28,0,4,28,30,1,29,0,3,28,30,0,29,0,2,30,27,1,29,0,1,30,27,0,29,0,0,28,31,0,29,0,1,29,30,1,29,0,2,29,30,0,29,0,3,29,30,1,29,0,4,29,31,1,30,0,3,29,31,0,30,0,2,29,31,1,30,0,1,30,30,1,30,0,0,30,30,0,30,0,1,30,31,1,30,0,2,30,31,0,30,0,3,30,31,1,30,0,4,31,30,1,31,0,3,31,30,0,31,0,2,31,30,1,31,0,1,31,31,1,31,0,0,31,31,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,2,0,2,0,1,0,1,0,3,1,1,0,0,0,3,0,1,0,1,0,4,0,1,0,2,0,5,0,2,0,1,0,6,1,2,0,0,0,6,0,2,0,1,0,7,0,2,0,2,0,8,0,3,0,1,0,9,1,3,0,0,0,9,0,3,0,1,0,10,0,3,0,2,0,11,0,4,0,1,0,12,1,4,0,0,0,12,0,4,0,1,0,13,0,4,0,2,0,14,0,5,0,1,0,15,1,5,0,0,0,15,0,5,0,1,0,16,0,5,0,2,1,15,0,6,0,1,0,17,0,6,0,0,0,18,0,6,0,1,0,19,0,6,0,2,3,14,0,7,0,1,0,20,0,7,0,0,0,21,0,7,0,1,0,22,0,7,0,2,4,15,0,8,0,1,0,23,0,8,0,0,0,24,0,8,0,1,0,25,0,8,0,2,6,14,0,9,0,1,0,26,0,9,0,0,0,27,0,9,0,1,0,28,0,9,0,2,7,15,0,10,0,1,0,29,0,10,0,0,0,30,0,10,0,1,0,31,0,10,0,2,9,14,0,11,0,1,0,32,0,11,0,0,0,33,0,11,0,1,2,30,0,11,0,2,0,34,0,12,0,1,0,35,0,12,0,0,0,36,0,12,0,1,3,31,0,12,0,2,0,37,0,13,0,1,0,38,0,13,0,0,0,39,0,13,0,1,5,30,0,13,0,2,0,40,0,14,0,1,0,41,0,14,0,0,0,42,0,14,0,1,6,31,0,14,0,2,0,43,0,15,0,1,0,44,0,15,0,0,0,45,0,15,0,1,8,30,0,15,0,2,0,46,0,16,0,2,0,47,0,16,0,1,1,46,0,16,0,0,0,48,0,16,0,1,0,49,0,16,0,2,0,50,0,17,0,1,2,47,0,17,0,0,0,51,0,17,0,1,0,52,0,17,0,2,0,53,0,18,0,1,4,46,0,18,0,0,0,54,0,18,0,1,0,55,0,18,0,2,0,56,0,19,0,1,5,47,0,19,0,0,0,57,0,19,0,1,0,58,0,19,0,2,0,59,0,20,0,1,7,46,0,20,0,0,0,60,0,20,0,1,0,61,0,20,0,2,0,62,0,21,0,1,8,47,0,21,0,0,0,63,0,21,0,1,1,62,0,21,0,2,1,63,0,22,0,1,10,46,0,22,0,0,2,62,0,22,0,1,2,63,0,22,0,2,3,62,0,23,0,1,11,47,0,23,0,0,3,63,0,23,0,1,4,62,0,23,0,2,4,63,0,24,0,1,13,46,0,24,0,0,5,62,0,24,0,1,5,63,0,24,0,2,6,62,0,25,0,1,14,47,0,25,0,0,6,63,0,25,0,1,7,62,0,25,0,2,7,63,0,26,0,1,16,45,0,26,0,0,8,62,0,26,0,1,8,63,0,26,0,2,9,62,0,27,0,1,16,48,0,27,0,0,9,63,0,27,0,1,10,62,0,27,0,2,10,63,0,28,0,1,16,51,0,28,0,0,11,62,0,28,0,1,11,63,0,28,0,2,12,62,0,29,0,1,16,54,0,29,0,0,12,63,0,29,0,1,13,62,0,29,0,2,13,63,0,30,0,1,16,57,0,30,0,0,14,62,0,30,0,1,14,63,0,30,0,2,15,62,0,31,0,1,16,60,0,31,0,0,15,63,0,31,0,1,24,46,0,31,0,2,16,62,0,32,0,2,16,63,0,32,0,1,17,62,0,32,0,0,25,47,0,32,0,1,17,63,0,32,0,2,18,62,0,33,0,1,18,63,0,33,0,0,27,46,0,33,0,1,19,62,0,33,0,2,19,63,0,34,0,1,20,62,0,34,0,0,28,47,0,34,0,1,20,63,0,34,0,2,21,62,0,35,0,1,21,63,0,35,0,0,30,46,0,35,0,1,22,62,0,35,0,2,22,63,0,36,0,1,23,62,0,36,0,0,31,47,0,36,0,1,23,63,0,36,0,2,24,62,0,37,0,1,24,63,0,37,0,0,32,47,0,37,0,1,25,62,0,37,0,2,25,63,0,38,0,1,26,62,0,38,0,0,32,50,0,38,0,1,26,63,0,38,0,2,27,62,0,39,0,1,27,63,0,39,0,0,32,53,0,39,0,1,28,62,0,39,0,2,28,63,0,40,0,1,29,62,0,40,0,0,32,56,0,40,0,1,29,63,0,40,0,2,30,62,0,41,0,1,30,63,0,41,0,0,32,59,0,41,0,1,31,62,0,41,0,2,31,63,0,42,0,1,32,61,0,42,0,0,32,62,0,42,0,1,32,63,0,42,0,2,41,46,0,43,0,1,33,62,0,43,0,0,33,63,0,43,0,1,34,62,0,43,0,2,42,47,0,44,0,1,34,63,0,44,0,0,35,62,0,44,0,1,35,63,0,44,0,2,44,46,0,45,0,1,36,62,0,45,0,0,36,63,0,45,0,1,37,62,0,45,0,2,45,47,0,46,0,1,37,63,0,46,0,0,38,62,0,46,0,1,38,63,0,46,0,2,47,46,0,47,0,1,39,62,0,47,0,0,39,63,0,47,0,1,40,62,0,47,0,2,48,46,0,48,0,2,40,63,0,48,0,1,41,62,0,48,0,0,41,63,0,48,0,1,48,49,0,48,0,2,42,62,0,49,0,1,42,63,0,49,0,0,43,62,0,49,0,1,48,52,0,49,0,2,43,63,0,50,0,1,44,62,0,50,0,0,44,63,0,50,0,1,48,55,0,50,0,2,45,62,0,51,0,1,45,63,0,51,0,0,46,62,0,51,0,1,48,58,0,51,0,2,46,63,0,52,0,1,47,62,0,52,0,0,47,63,0,52,0,1,48,61,0,52,0,2,48,62,0,53,0,1,56,47,0,53,0,0,48,63,0,53,0,1,49,62,0,53,0,2,49,63,0,54,0,1,58,46,0,54,0,0,50,62,0,54,0,1,50,63,0,54,0,2,51,62,0,55,0,1,59,47,0,55,0,0,51,63,0,55,0,1,52,62,0,55,0,2,52,63,0,56,0,1,61,46,0,56,0,0,53,62,0,56,0,1,53,63,0,56,0,2,54,62,0,57,0,1,62,47,0,57,0,0,54,63,0,57,0,1,55,62,0,57,0,2,55,63,0,58,0,1,56,62,1,58,0,0,56,62,0,58,0,1,56,63,0,58,0,2,57,62,0,59,0,1,57,63,1,59,0,0,57,63,0,59,0,1,58,62,0,59,0,2,58,63,0,60,0,1,59,62,1,60,0,0,59,62,0,60,0,1,59,63,0,60,0,2,60,62,0,61,0,1,60,63,1,61,0,0,60,63,0,61,0,1,61,62,0,61,0,2,61,63,0,62,0,1,62,62,1,62,0,0,62,62,0,62,0,1,62,63,0,62,0,2,63,62,0,63,0,1,63,63,1,63,0,0,63,63,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,2,0,0,2,0,0,3,0,1,1,0,0,4,0,1,0,1,0,3,0,1,1,1,0,2,0,1,2,1,0,1,0,2,1,1,0,0,0,2,0,1,0,1,0,2,1,1,0,2,0,2,2,1,0,3,0,3,1,1,0,4,0,3,0,2,0,3,0,3,1,2,0,2,0,3,2,2,0,1,0,4,1,2,0,0,0,4,0,2,0,1,0,4,1,2,0,2,0,4,2,2,0,3,0,5,1,2,0,4,0,5,0,3,0,3,0,5,1,3,0,2,0,5,2,3,0,1,0,6,1,3,0,0,0,6,0,3,0,1,0,6,1,3,0,2,0,6,2,3,0,3,0,7,1,3,0,4,0,7,0,4,0,4,0,7,1,4,0,3,0,7,2,4,0,2,1,7,1,4,0,1,1,7,0,4,0,0,0,8,0,4,0,1,0,8,1,4,0,2,2,7,1,4,0,3,2,7,0,4,0,4,0,9,0,5,0,3,0,9,1,5,0,2,3,7,1,5,0,1,3,7,0,5,0,0,0,10,0,5,0,1,0,10,1,5,0,2,0,10,2,5,0,3,0,11,1,5,0,4,0,11,0,6,0,3,0,11,1,6,0,2,0,11,2,6,0,1,0,12,1,6,0,0,0,12,0,6,0,1,0,12,1,6,0,2,0,12,2,6,0,3,0,13,1,6,0,4,0,13,0,7,0,3,0,13,1,7,0,2,0,13,2,7,0,1,0,14,1,7,0,0,0,14,0,7,0,1,0,14,1,7,0,2,0,14,2,7,0,3,0,15,1,7,0,4,0,15,0,8,0,4,0,15,1,8,0,3,0,15,2,8,0,2,1,15,1,8,0,1,1,15,0,8,0,0,0,16,0,8,0,1,0,16,1,8,0,2,2,15,1,8,0,3,2,15,0,8,0,4,0,17,0,9,0,3,0,17,1,9,0,2,3,15,1,9,0,1,3,15,0,9,0,0,0,18,0,9,0,1,0,18,1,9,0,2,0,18,2,9,0,3,0,19,1,9,0,4,0,19,0,10,0,3,0,19,1,10,0,2,0,19,2,10,0,1,0,20,1,10,0,0,0,20,0,10,0,1,0,20,1,10,0,2,0,20,2,10,0,3,0,21,1,10,0,4,0,21,0,11,0,3,0,21,1,11,0,2,0,21,2,11,0,1,0,22,1,11,0,0,0,22,0,11,0,1,0,22,1,11,0,2,0,22,2,11,0,3,0,23,1,11,0,4,0,23,0,12,0,4,0,23,1,12,0,3,0,23,2,12,0,2,1,23,1,12,0,1,1,23,0,12,0,0,0,24,0,12,0,1,0,24,1,12,0,2,2,23,1,12,0,3,2,23,0,12,0,4,0,25,0,13,0,3,0,25,1,13,0,2,3,23,1,13,0,1,3,23,0,13,0,0,0,26,0,13,0,1,0,26,1,13,0,2,0,26,2,13,0,3,0,27,1,13,0,4,0,27,0,14,0,3,0,27,1,14,0,2,0,27,2,14,0,1,0,28,1,14,0,0,0,28,0,14,0,1,0,28,1,14,0,2,0,28,2,14,0,3,0,29,1,14,0,4,0,29,0,15,0,3,0,29,1,15,0,2,0,29,2,15,0,1,0,30,1,15,0,0,0,30,0,15,0,1,0,30,1,15,0,2,0,30,2,15,0,3,0,31,1,15,0,4,0,31,0,16,0,4,0,31,1,16,0,3,0,31,2,16,0,2,1,31,1,16,0,1,1,31,0,16,0,0,4,28,0,16,0,1,4,28,1,16,0,2,2,31,1,16,0,3,2,31,0,16,0,4,4,29,0,17,0,3,4,29,1,17,0,2,3,31,1,17,0,1,3,31,0,17,0,0,4,30,0,17,0,1,4,30,1,17,0,2,4,30,2,17,0,3,4,31,1,17,0,4,4,31,0,18,0,3,4,31,1,18,0,2,4,31,2,18,0,1,5,31,1,18,0,0,5,31,0,18,0,1,5,31,1,18,0,2,5,31,2,18,0,3,6,31,1,18,0,4,6,31,0,19,0,3,6,31,1,19,0,2,6,31,2,19,0,1,7,31,1,19,0,0,7,31,0,19,0,1,7,31,1,19,0,2,7,31,2,19,0,3,8,31,1,19,0,4,8,31,0,20,0,4,8,31,1,20,0,3,8,31,2,20,0,2,9,31,1,20,0,1,9,31,0,20,0,0,12,28,0,20,0,1,12,28,1,20,0,2,10,31,1,20,0,3,10,31,0,20,0,4,12,29,0,21,0,3,12,29,1,21,0,2,11,31,1,21,0,1,11,31,0,21,0,0,12,30,0,21,0,1,12,30,1,21,0,2,12,30,2,21,0,3,12,31,1,21,0,4,12,31,0,22,0,3,12,31,1,22,0,2,12,31,2,22,0,1,13,31,1,22,0,0,13,31,0,22,0,1,13,31,1,22,0,2,13,31,2,22,0,3,14,31,1,22,0,4,14,31,0,23,0,3,14,31,1,23,0,2,14,31,2,23,0,1,15,31,1,23,0,0,15,31,0,23,0,1,15,31,1,23,0,2,15,31,2,23,0,3,16,31,1,23,0,4,16,31,0,24,0,4,16,31,1,24,0,3,16,31,2,24,0,2,17,31,1,24,0,1,17,31,0,24,0,0,20,28,0,24,0,1,20,28,1,24,0,2,18,31,1,24,0,3,18,31,0,24,0,4,20,29,0,25,0,3,20,29,1,25,0,2,19,31,1,25,0,1,19,31,0,25,0,0,20,30,0,25,0,1,20,30,1,25,0,2,20,30,2,25,0,3,20,31,1,25,0,4,20,31,0,26,0,3,20,31,1,26,0,2,20,31,2,26,0,1,21,31,1,26,0,0,21,31,0,26,0,1,21,31,1,26,0,2,21,31,2,26,0,3,22,31,1,26,0,4,22,31,0,27,0,3,22,31,1,27,0,2,22,31,2,27,0,1,23,31,1,27,0,0,23,31,0,27,0,1,23,31,1,27,0,2,23,31,2,27,0,3,24,31,1,27,0,4,24,31,0,28,0,4,24,31,1,28,0,3,24,31,2,28,0,2,25,31,1,28,0,1,25,31,0,28,0,0,28,28,0,28,0,1,28,28,1,28,0,2,26,31,1,28,0,3,26,31,0,28,0,4,28,29,0,29,0,3,28,29,1,29,0,2,27,31,1,29,0,1,27,31,0,29,0,0,28,30,0,29,0,1,28,30,1,29,0,2,28,30,2,29,0,3,28,31,1,29,0,4,28,31,0,30,0,3,28,31,1,30,0,2,28,31,2,30,0,1,29,31,1,30,0,0,29,31,0,30,0,1,29,31,1,30,0,2,29,31,2,30,0,3,30,31,1,30,0,4,30,31,0,31,0,3,30,31,1,31,0,2,30,31,2,31,0,1,31,31,1,31,0,0,31,31,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,2,0,1,0,1,0,1,0,2,1,1,0,0,0,2,0,1,0,1,0,3,1,1,0,2,0,3,0,2,0,1,0,4,1,2,0,0,0,4,0,2,0,1,0,5,1,2,0,2,0,5,0,3,0,1,0,6,1,3,0,0,0,6,0,3,0,1,0,7,1,3,0,2,0,7,0,4,0,1,0,8,1,4,0,0,0,8,0,4,0,1,0,9,1,4,0,2,0,9,0,5,0,1,0,10,1,5,0,0,0,10,0,5,0,1,0,11,1,5,0,2,0,11,0,6,0,1,0,12,1,6,0,0,0,12,0,6,0,1,0,13,1,6,0,2,0,13,0,7,0,1,0,14,1,7,0,0,0,14,0,7,0,1,0,15,1,7,0,2,0,15,0,8,0,1,0,16,1,8,0,0,0,16,0,8,0,1,0,17,1,8,0,2,0,17,0,9,0,1,0,18,1,9,0,0,0,18,0,9,0,1,0,19,1,9,0,2,0,19,0,10,0,1,0,20,1,10,0,0,0,20,0,10,0,1,0,21,1,10,0,2,0,21,0,11,0,1,0,22,1,11,0,0,0,22,0,11,0,1,0,23,1,11,0,2,0,23,0,12,0,1,0,24,1,12,0,0,0,24,0,12,0,1,0,25,1,12,0,2,0,25,0,13,0,1,0,26,1,13,0,0,0,26,0,13,0,1,0,27,1,13,0,2,0,27,0,14,0,1,0,28,1,14,0,0,0,28,0,14,0,1,0,29,1,14,0,2,0,29,0,15,0,1,0,30,1,15,0,0,0,30,0,15,0,1,0,31,1,15,0,2,0,31,0,16,0,2,1,31,1,16,0,1,1,31,0,16,0,0,0,32,0,16,0,1,2,31,0,16,0,2,0,33,0,17,0,1,3,31,0,17,0,0,0,34,0,17,0,1,4,31,0,17,0,2,0,35,0,18,0,1,5,31,0,18,0,0,0,36,0,18,0,1,6,31,0,18,0,2,0,37,0,19,0,1,7,31,0,19,0,0,0,38,0,19,0,1,8,31,0,19,0,2,0,39,0,20,0,1,9,31,0,20,0,0,0,40,0,20,0,1,10,31,0,20,0,2,0,41,0,21,0,1,11,31,0,21,0,0,0,42,0,21,0,1,12,31,0,21,0,2,0,43,0,22,0,1,13,31,0,22,0,0,0,44,0,22,0,1,14,31,0,22,0,2,0,45,0,23,0,1,15,31,0,23,0,0,0,46,0,23,0,1,0,47,1,23,0,2,0,47,0,24,0,1,0,48,1,24,0,0,0,48,0,24,0,1,0,49,1,24,0,2,0,49,0,25,0,1,0,50,1,25,0,0,0,50,0,25,0,1,0,51,1,25,0,2,0,51,0,26,0,1,0,52,1,26,0,0,0,52,0,26,0,1,0,53,1,26,0,2,0,53,0,27,0,1,0,54,1,27,0,0,0,54,0,27,0,1,0,55,1,27,0,2,0,55,0,28,0,1,0,56,1,28,0,0,0,56,0,28,0,1,0,57,1,28,0,2,0,57,0,29,0,1,0,58,1,29,0,0,0,58,0,29,0,1,0,59,1,29,0,2,0,59,0,30,0,1,0,60,1,30,0,0,0,60,0,30,0,1,0,61,1,30,0,2,0,61,0,31,0,1,0,62,1,31,0,0,0,62,0,31,0,1,0,63,1,31,0,2,0,63,0,32,0,2,1,63,1,32,0,1,1,63,0,32,0,0,16,48,0,32,0,1,2,63,0,32,0,2,16,49,0,33,0,1,3,63,0,33,0,0,16,50,0,33,0,1,4,63,0,33,0,2,16,51,0,34,0,1,5,63,0,34,0,0,16,52,0,34,0,1,6,63,0,34,0,2,16,53,0,35,0,1,7,63,0,35,0,0,16,54,0,35,0,1,8,63,0,35,0,2,16,55,0,36,0,1,9,63,0,36,0,0,16,56,0,36,0,1,10,63,0,36,0,2,16,57,0,37,0,1,11,63,0,37,0,0,16,58,0,37,0,1,12,63,0,37,0,2,16,59,0,38,0,1,13,63,0,38,0,0,16,60,0,38,0,1,14,63,0,38,0,2,16,61,0,39,0,1,15,63,0,39,0,0,16,62,0,39,0,1,16,63,1,39,0,2,16,63,0,40,0,1,17,63,1,40,0,0,17,63,0,40,0,1,18,63,1,40,0,2,18,63,0,41,0,1,19,63,1,41,0,0,19,63,0,41,0,1,20,63,1,41,0,2,20,63,0,42,0,1,21,63,1,42,0,0,21,63,0,42,0,1,22,63,1,42,0,2,22,63,0,43,0,1,23,63,1,43,0,0,23,63,0,43,0,1,24,63,1,43,0,2,24,63,0,44,0,1,25,63,1,44,0,0,25,63,0,44,0,1,26,63,1,44,0,2,26,63,0,45,0,1,27,63,1,45,0,0,27,63,0,45,0,1,28,63,1,45,0,2,28,63,0,46,0,1,29,63,1,46,0,0,29,63,0,46,0,1,30,63,1,46,0,2,30,63,0,47,0,1,31,63,1,47,0,0,31,63,0,47,0,1,32,63,1,47,0,2,32,63,0,48,0,2,33,63,1,48,0,1,33,63,0,48,0,0,48,48,0,48,0,1,34,63,0,48,0,2,48,49,0,49,0,1,35,63,0,49,0,0,48,50,0,49,0,1,36,63,0,49,0,2,48,51,0,50,0,1,37,63,0,50,0,0,48,52,0,50,0,1,38,63,0,50,0,2,48,53,0,51,0,1,39,63,0,51,0,0,48,54,0,51,0,1,40,63,0,51,0,2,48,55,0,52,0,1,41,63,0,52,0,0,48,56,0,52,0,1,42,63,0,52,0,2,48,57,0,53,0,1,43,63,0,53,0,0,48,58,0,53,0,1,44,63,0,53,0,2,48,59,0,54,0,1,45,63,0,54,0,0,48,60,0,54,0,1,46,63,0,54,0,2,48,61,0,55,0,1,47,63,0,55,0,0,48,62,0,55,0,1,48,63,1,55,0,2,48,63,0,56,0,1,49,63,1,56,0,0,49,63,0,56,0,1,50,63,1,56,0,2,50,63,0,57,0,1,51,63,1,57,0,0,51,63,0,57,0,1,52,63,1,57,0,2,52,63,0,58,0,1,53,63,1,58,0,0,53,63,0,58,0,1,54,63,1,58,0,2,54,63,0,59,0,1,55,63,1,59,0,0,55,63,0,59,0,1,56,63,1,59,0,2,56,63,0,60,0,1,57,63,1,60,0,0,57,63,0,60,0,1,58,63,1,60,0,2,58,63,0,61,0,1,59,63,1,61,0,0,59,63,0,61,0,1,60,63,1,61,0,2,60,63,0,62,0,1,61,63,1,62,0,0,61,63,0,62,0,1,62,63,1,62,0,2,62,63,0,63,0,1,63,63,1,63,0,0,63,63,0,78,54,115,113,117,105,115,104,49,53,83,105,110,103,108,101,67,111,108,111,117,114,70,105,116,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,83,116,57,116,121,112,101,95,105,110,102,111,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);var tempDoublePtr=STATICTOP;STATICTOP+=16;function ___cxa_pure_virtual(){throw ABORT=!0,"Pure virtual function called!"}function ___setErrNo(n){return Module.___errno_location&&(HEAP32[Module.___errno_location()>>2]=n),n}function __ZSt18uncaught_exceptionv(){return!!__ZSt18uncaught_exceptionv.uncaught_exception}var EXCEPTIONS={last:0,infos:{}};function ___resumeException(n){throw EXCEPTIONS.last||(EXCEPTIONS.last=n),n+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function ___cxa_find_matching_catch(){var n=EXCEPTIONS.last;if(!n)return Runtime.setTempRet0(0),0|0;var e=EXCEPTIONS.infos[n],t=e.type;if(!t)return Runtime.setTempRet0(0),n|0;var a=Array.prototype.slice.call(arguments);Module.___cxa_is_pointer_type(t),___cxa_find_matching_catch.buffer||(___cxa_find_matching_catch.buffer=_malloc(4)),HEAP32[___cxa_find_matching_catch.buffer>>2]=n,n=___cxa_find_matching_catch.buffer;for(var r=0;r<a.length;r++)if(a[r]&&Module.___cxa_can_catch(a[r],t,n))return n=HEAP32[n>>2],e.adjusted=n,Runtime.setTempRet0(a[r]),n|0;return n=HEAP32[n>>2],Runtime.setTempRet0(t),n|0}function ___gxx_personality_v0(){}function ___lock(){}var _llvm_pow_f32=Math_pow;function _emscripten_memcpy_big(n,e,t){return HEAPU8.set(HEAPU8.subarray(e,e+t),n),n}var SYSCALLS={varargs:0,get:function(n){SYSCALLS.varargs+=4;var e=HEAP32[SYSCALLS.varargs-4>>2];return e},getStr:function(){var n=Pointer_stringify(SYSCALLS.get());return n},get64:function(){var n=SYSCALLS.get(),e=SYSCALLS.get();return n>=0?assert(e===0):assert(e===-1),n},getZero:function(){assert(SYSCALLS.get()===0)}};function ___syscall140(n,e){SYSCALLS.varargs=e;try{var t=SYSCALLS.getStreamFromFD(),a=SYSCALLS.get(),r=SYSCALLS.get(),o=SYSCALLS.get(),l=SYSCALLS.get(),c=r;return FS.llseek(t,c,l),HEAP32[o>>2]=t.position,t.getdents&&c===0&&l===0&&(t.getdents=null),0}catch(s){return(typeof FS>"u"||!(s instanceof FS.ErrnoError))&&abort(s),-s.errno}}function ___syscall146(n,e){SYSCALLS.varargs=e;try{var t=SYSCALLS.get(),a=SYSCALLS.get(),r=SYSCALLS.get(),o=0;___syscall146.buffer||(___syscall146.buffers=[null,[],[]],___syscall146.printChar=function(f,v){var g=___syscall146.buffers[f];assert(g),v===0||v===10?((f===1?Module.print:Module.printErr)(UTF8ArrayToString(g,0)),g.length=0):g.push(v)});for(var l=0;l<r;l++){for(var c=HEAP32[a+l*8>>2],s=HEAP32[a+(l*8+4)>>2],d=0;d<s;d++)___syscall146.printChar(t,HEAPU8[c+d]);o+=s}return o}catch(f){return(typeof FS>"u"||!(f instanceof FS.ErrnoError))&&abort(f),-f.errno}}function ___syscall54(n,e){SYSCALLS.varargs=e;try{return 0}catch(t){return(typeof FS>"u"||!(t instanceof FS.ErrnoError))&&abort(t),-t.errno}}function ___unlock(){}function ___syscall6(n,e){SYSCALLS.varargs=e;try{var t=SYSCALLS.getStreamFromFD();return FS.close(t),0}catch(a){return(typeof FS>"u"||!(a instanceof FS.ErrnoError))&&abort(a),-a.errno}}__ATEXIT__.push(function(){var n=Module._fflush;n&&n(0);var e=___syscall146.printChar;if(e){var t=___syscall146.buffers;t[1].length&&e(1,10),t[2].length&&e(2,10)}}),DYNAMICTOP_PTR=allocate(1,"i32",ALLOC_STATIC),STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP),STACK_MAX=STACK_BASE+TOTAL_STACK,DYNAMIC_BASE=Runtime.alignMemory(STACK_MAX),HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE,staticSealed=!0;function invoke_iiii(n,e,t,a){try{return Module.dynCall_iiii(n,e,t,a)}catch(r){if(typeof r!="number"&&r!=="longjmp")throw r;Module.setThrew(1,0)}}function invoke_viiiii(n,e,t,a,r,o){try{Module.dynCall_viiiii(n,e,t,a,r,o)}catch(l){if(typeof l!="number"&&l!=="longjmp")throw l;Module.setThrew(1,0)}}function invoke_vi(n,e){try{Module.dynCall_vi(n,e)}catch(t){if(typeof t!="number"&&t!=="longjmp")throw t;Module.setThrew(1,0)}}function invoke_vii(n,e,t){try{Module.dynCall_vii(n,e,t)}catch(a){if(typeof a!="number"&&a!=="longjmp")throw a;Module.setThrew(1,0)}}function invoke_ii(n,e){try{return Module.dynCall_ii(n,e)}catch(t){if(typeof t!="number"&&t!=="longjmp")throw t;Module.setThrew(1,0)}}function invoke_v(n){try{Module.dynCall_v(n)}catch(e){if(typeof e!="number"&&e!=="longjmp")throw e;Module.setThrew(1,0)}}function invoke_viiiiii(n,e,t,a,r,o,l){try{Module.dynCall_viiiiii(n,e,t,a,r,o,l)}catch(c){if(typeof c!="number"&&c!=="longjmp")throw c;Module.setThrew(1,0)}}function invoke_viiii(n,e,t,a,r){try{Module.dynCall_viiii(n,e,t,a,r)}catch(o){if(typeof o!="number"&&o!=="longjmp")throw o;Module.setThrew(1,0)}}Module.asmGlobalArg={Math,Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array,Uint32Array,Float32Array,Float64Array,NaN:NaN,Infinity:1/0,byteLength},Module.asmLibraryArg={abort,assert,enlargeMemory,getTotalMemory,abortOnCannotGrowMemory,invoke_iiii,invoke_viiiii,invoke_vi,invoke_vii,invoke_ii,invoke_v,invoke_viiiiii,invoke_viiii,___lock,___syscall6,___setErrNo,___syscall140,_llvm_pow_f32,___gxx_personality_v0,_emscripten_memcpy_big,___syscall54,___unlock,___resumeException,__ZSt18uncaught_exceptionv,___cxa_pure_virtual,___syscall146,___cxa_find_matching_catch,DYNAMICTOP_PTR,tempDoublePtr,ABORT,STACKTOP,STACK_MAX};var asm=function(n,e,t){"almost asm";var a=n.Int8Array,r=new a(t),o=n.Int16Array,l=new o(t),c=n.Int32Array,s=new c(t),d=n.Uint8Array,f=new d(t),v=n.Uint16Array;new v(t);var g=n.Uint32Array;new g(t);var M=n.Float32Array,h=new M(t),A=n.Float64Array;new A(t);var x=n.byteLength,m=e.DYNAMICTOP_PTR|0,U=e.tempDoublePtr|0;e.ABORT|0;var T=e.STACKTOP|0;e.STACK_MAX|0,n.NaN,n.Infinity;var P=0,H=n.Math.floor,G=n.Math.abs,W=n.Math.sqrt,Z=n.Math.pow,N=n.Math.cos,L=n.Math.sin;n.Math.tan,n.Math.acos,n.Math.asin,n.Math.atan;var q=n.Math.atan2;n.Math.exp,n.Math.log;var se=n.Math.ceil,ee=n.Math.imul;n.Math.min,n.Math.max,n.Math.clz32;var re=e.abort;e.assert;var ce=e.enlargeMemory,fe=e.getTotalMemory,Ee=e.abortOnCannotGrowMemory;e.invoke_iiii,e.invoke_viiiii,e.invoke_vi,e.invoke_vii,e.invoke_ii,e.invoke_v,e.invoke_viiiiii,e.invoke_viiii;var ue=e.___lock,Le=e.___syscall6,Oe=e.___setErrNo,Ze=e.___syscall140;e._llvm_pow_f32,e.___gxx_personality_v0;var vt=e._emscripten_memcpy_big,Ft=e.___syscall54,pe=e.___unlock;e.___resumeException,e.__ZSt18uncaught_exceptionv;var we=e.___cxa_pure_virtual,ke=e.___syscall146;e.___cxa_find_matching_catch;function Pe(u){return x(u)&16777215||x(u)<=16777215||x(u)>2147483648?!1:(r=new a(u),l=new o(u),s=new c(u),f=new d(u),new v(u),new g(u),h=new M(u),new A(u),t=u,!0)}function Qe(u){u=u|0;var _=0;return _=T,T=T+u|0,T=T+15&-16,_|0}function At(){return T|0}function st(u){u=u|0,T=u}function qt(u,_){u=u|0,T=u}function Wt(u,_){}function Rt(u){u=u|0,P=u}function $(){return P|0}function On(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0;S=0;do E=S<<3,b=~~(+(f[u+(E|3)>>0]|0)*.05882352963089943+.5),y=~~(+(f[u+(E|7)>>0]|0)*.05882352963089943+.5),E=S<<1,r[p+S>>0]=((1<<(E|1)&_|0)==0|(y|0)<0?0:((y|0)<15?y:15)<<4)|((1<<E&_|0)==0|(b|0)<0?0:(b|0)<15?b:15),S=S+1|0;while((S|0)!=8)}function Lt(u,_){u=u|0,_=_|0;var p=0;p=f[_>>0]|0,r[u+3>>0]=p&15|p<<4,r[u+7>>0]=p&240|p>>>4,p=f[_+1>>0]|0,r[u+11>>0]=p&15|p<<4,r[u+15>>0]=p&240|p>>>4,p=f[_+2>>0]|0,r[u+19>>0]=p&15|p<<4,r[u+23>>0]=p&240|p>>>4,p=f[_+3>>0]|0,r[u+27>>0]=p&15|p<<4,r[u+31>>0]=p&240|p>>>4,p=f[_+4>>0]|0,r[u+35>>0]=p&15|p<<4,r[u+39>>0]=p&240|p>>>4,p=f[_+5>>0]|0,r[u+43>>0]=p&15|p<<4,r[u+47>>0]=p&240|p>>>4,p=f[_+6>>0]|0,r[u+51>>0]=p&15|p<<4,r[u+55>>0]=p&240|p>>>4,p=f[_+7>>0]|0,r[u+59>>0]=p&15|p<<4,r[u+63>>0]=p&240|p>>>4}function Ct(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0;for(S=T,T=T+64|0,E=S+48|0,b=S+40|0,y=S+32|0,w=S+16|0,I=S,k=0,F=255,X=0,R=0,B=255;1<<X&_?(te=r[u+(X<<2|3)>>0]|0,ne=te&255,z=te<<24>>24!=-1&(ne|0)>(k|0)?ne:k,ie=(ne|0)>(R|0)?ne:R,Y=te<<24>>24!=0&(ne|0)<(F|0)?ne:F,V=(ne|0)<(B|0)?ne:B):(z=k,ie=R,Y=F,V=B),X=X+1|0,(X|0)!=16;)k=z,F=Y,R=ie,B=V;if(B=(Y|0)>(z|0)?z:Y,Y=(V|0)>(ie|0)?ie:V,V=B+5|0,R=(z-B|0)<5?(V|0)<255?V:255:z,z=R+-5|0,V=(R-B|0)<5?(z|0)>0?z:0:B,B=Y+7|0,z=(ie-Y|0)<7?(B|0)<255?B:255:ie,ie=z+-7|0,B=V&255,r[b>>0]=B,F=R&255,r[b+1>>0]=F,r[b+2>>0]=((V<<2)+R|0)/5|0,r[b+3>>0]=((V*3|0)+(R<<1)|0)/5|0,r[b+4>>0]=((V<<1)+(R*3|0)|0)/5|0,r[b+5>>0]=(V+(R<<2)|0)/5|0,k=(z-Y|0)<7?(ie|0)>0?ie:0:Y,r[b+6>>0]=0,r[b+7>>0]=-1,Y=k&255,r[y>>0]=Y,ie=z&255,r[y+1>>0]=ie,r[y+2>>0]=((k*6|0)+z|0)/7|0,r[y+3>>0]=((k*5|0)+(z<<1)|0)/7|0,r[y+4>>0]=((k<<2)+(z*3|0)|0)/7|0,r[y+5>>0]=((k*3|0)+(z<<2)|0)/7|0,r[y+6>>0]=((k<<1)+(z*5|0)|0)/7|0,r[y+7>>0]=(k+(z*6|0)|0)/7|0,X=tt(u,_,b,w)|0,(X|0)<=(tt(u,_,y,I)|0)){if((V|0)<=(R|0)){r[p>>0]=B,r[p+1>>0]=F,R=(f[w+1>>0]|0)<<3|(f[w>>0]|0)|(f[w+2>>0]|0)<<6,V=(f[w+3>>0]|0)<<9|R|(f[w+4>>0]|0)<<12|(f[w+5>>0]|0)<<15,y=(f[w+6>>0]|0)<<18|V|(f[w+7>>0]|0)<<21,r[p+2>>0]=R,r[p+3>>0]=V>>>8,r[p+4>>0]=y>>>16,y=(f[w+9>>0]|0)<<3|(f[w+8>>0]|0)|(f[w+10>>0]|0)<<6,V=(f[w+11>>0]|0)<<9|y|(f[w+12>>0]|0)<<12|(f[w+13>>0]|0)<<15,R=(f[w+14>>0]|0)<<18|V|(f[w+15>>0]|0)<<21,r[p+5>>0]=y,r[p+6>>0]=V>>>8,r[p+7>>0]=R>>>16,T=S;return}R=0;do{switch(V=r[w+R>>0]|0,V<<24>>24){case 0:{Q=1;break}case 1:{Q=0;break}default:(V&255)<6?Q=7-(V&255)&255:Q=V}r[E+R>>0]=Q,R=R+1|0}while((R|0)!=16);r[p>>0]=F,r[p+1>>0]=B,B=(f[E+1>>0]|0)<<3|(f[E>>0]|0)|(f[E+2>>0]|0)<<6,F=(f[E+3>>0]|0)<<9|B|(f[E+4>>0]|0)<<12|(f[E+5>>0]|0)<<15,R=(f[E+6>>0]|0)<<18|F|(f[E+7>>0]|0)<<21,r[p+2>>0]=B,r[p+3>>0]=F>>>8,r[p+4>>0]=R>>>16,R=(f[E+9>>0]|0)<<3|(f[E+8>>0]|0)|(f[E+10>>0]|0)<<6,F=(f[E+11>>0]|0)<<9|R|(f[E+12>>0]|0)<<12|(f[E+13>>0]|0)<<15,B=(f[E+14>>0]|0)<<18|F|(f[E+15>>0]|0)<<21,r[p+5>>0]=R,r[p+6>>0]=F>>>8,r[p+7>>0]=B>>>16,T=S;return}if((k|0)<(z|0)){switch(z=r[I>>0]|0,z<<24>>24){case 0:{Se=1;break}case 1:{Se=0;break}default:Se=9-(z&255)&255}switch(z=r[I+1>>0]|0,z<<24>>24){case 0:{Ue=8;break}case 1:{Ue=0;break}default:Ue=9-(z&255)<<3&2040}switch(z=r[I+2>>0]|0,z<<24>>24){case 0:{ve=64;break}case 1:{ve=0;break}default:ve=9-(z&255)<<6&16320}switch(z=r[I+3>>0]|0,z<<24>>24){case 0:{Te=512;break}case 1:{Te=0;break}default:Te=9-(z&255)<<9&130560}switch(z=r[I+4>>0]|0,z<<24>>24){case 0:{de=4096;break}case 1:{de=0;break}default:de=9-(z&255)<<12&1044480}switch(z=r[I+5>>0]|0,z<<24>>24){case 0:{He=32768;break}case 1:{He=0;break}default:He=9-(z&255)<<15&8355840}switch(z=r[I+6>>0]|0,z<<24>>24){case 0:{Ce=262144;break}case 1:{Ce=0;break}default:Ce=9-(z&255)<<18&66846720}switch(z=r[I+7>>0]|0,z<<24>>24){case 0:{De=2097152;break}case 1:{De=0;break}default:De=9-(z&255)<<21&534773760}switch(z=r[I+8>>0]|0,z<<24>>24){case 0:{et=1;break}case 1:{et=0;break}default:et=9-(z&255)&255}switch(z=r[I+9>>0]|0,z<<24>>24){case 0:{je=8;break}case 1:{je=0;break}default:je=9-(z&255)<<3&2040}switch(z=r[I+10>>0]|0,z<<24>>24){case 0:{be=64;break}case 1:{be=0;break}default:be=9-(z&255)<<6&16320}switch(z=r[I+11>>0]|0,z<<24>>24){case 0:{ht=512;break}case 1:{ht=0;break}default:ht=9-(z&255)<<9&130560}switch(z=r[I+12>>0]|0,z<<24>>24){case 0:{it=4096;break}case 1:{it=0;break}default:it=9-(z&255)<<12&1044480}switch(z=r[I+13>>0]|0,z<<24>>24){case 0:{bt=32768;break}case 1:{bt=0;break}default:bt=9-(z&255)<<15&8355840}switch(z=r[I+14>>0]|0,z<<24>>24){case 0:{wt=262144;break}case 1:{wt=0;break}default:wt=9-(z&255)<<18&66846720}switch(z=r[I+15>>0]|0,z<<24>>24){case 0:{Tt=2097152;break}case 1:{Tt=0;break}default:Tt=9-(z&255)<<21&534773760}r[p>>0]=ie,r[p+1>>0]=Y,z=Ue|Se|ve,ve=Te|z|de|He,r[p+2>>0]=z,r[p+3>>0]=ve>>>8,r[p+4>>0]=(Ce|ve|De)>>>16,De=je|et|be,be=ht|De|it|bt,It=wt|be|Tt,$t=be,kt=De}else r[p>>0]=Y,r[p+1>>0]=ie,ie=(f[I+1>>0]|0)<<3|(f[I>>0]|0)|(f[I+2>>0]|0)<<6,Y=(f[I+3>>0]|0)<<9|ie|(f[I+4>>0]|0)<<12|(f[I+5>>0]|0)<<15,De=(f[I+6>>0]|0)<<18|Y|(f[I+7>>0]|0)<<21,r[p+2>>0]=ie,r[p+3>>0]=Y>>>8,r[p+4>>0]=De>>>16,De=(f[I+9>>0]|0)<<3|(f[I+8>>0]|0)|(f[I+10>>0]|0)<<6,Y=(f[I+11>>0]|0)<<9|De|(f[I+12>>0]|0)<<12|(f[I+13>>0]|0)<<15,It=(f[I+14>>0]|0)<<18|Y|(f[I+15>>0]|0)<<21,$t=Y,kt=De;r[p+5>>0]=kt,r[p+6>>0]=$t>>>8,r[p+7>>0]=It>>>16,T=S}function tt(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0;for(E=p+1|0,b=p+2|0,y=p+3|0,w=p+4|0,I=p+5|0,k=p+6|0,F=p+7|0,X=0,R=0;1<<R&_?(z=f[u+(R<<2|3)>>0]|0,ie=z-(f[p>>0]|0)|0,Y=ee(ie,ie)|0,ie=z-(f[E>>0]|0)|0,V=ee(ie,ie)|0,ie=V>>>0<Y>>>0,te=ie?V:Y,Y=z-(f[b>>0]|0)|0,V=ee(Y,Y)|0,Y=(V|0)<(te|0),ne=Y?V:te,te=z-(f[y>>0]|0)|0,V=ee(te,te)|0,te=(V|0)<(ne|0),Q=te?V:ne,ne=z-(f[w>>0]|0)|0,V=ee(ne,ne)|0,ne=(V|0)<(Q|0),Se=ne?V:Q,Q=z-(f[I>>0]|0)|0,V=ee(Q,Q)|0,Q=(V|0)<(Se|0),Ue=Q?V:Se,Se=z-(f[k>>0]|0)|0,V=ee(Se,Se)|0,Se=(V|0)<(Ue|0),ve=Se?V:Ue,Ue=z-(f[F>>0]|0)|0,z=ee(Ue,Ue)|0,Ue=(z|0)<(ve|0),r[S+R>>0]=Ue?7:Se?6:Q?5:ne?4:te?3:Y?2:ie&1,B=(Ue?z:ve)+X|0):(r[S+R>>0]=0,B=X),R=R+1|0,(R|0)!=16;)X=B;return B|0}function Zt(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0;p=T,T=T+32|0,S=p+16|0,E=p,b=r[_>>0]|0,y=b&255,w=r[_+1>>0]|0,I=w&255,r[S>>0]=b,r[S+1>>0]=w,(b&255)>(w&255)?(r[S+2>>0]=(((y*6|0)+I|0)>>>0)/7|0,r[S+3>>0]=(((y*5|0)+(I<<1)|0)>>>0)/7|0,r[S+4>>0]=(((y<<2)+(I*3|0)|0)>>>0)/7|0,r[S+5>>0]=(((y*3|0)+(I<<2)|0)>>>0)/7|0,r[S+6>>0]=(((y<<1)+(I*5|0)|0)>>>0)/7|0,k=(((y+(I*6|0)|0)>>>0)/7|0)&255):(r[S+2>>0]=(((y<<2)+I|0)>>>0)/5|0,r[S+3>>0]=(((y*3|0)+(I<<1)|0)>>>0)/5|0,r[S+4>>0]=(((y<<1)+(I*3|0)|0)>>>0)/5|0,r[S+5>>0]=((y+(I<<2)|0)>>>0)/5|0,r[S+6>>0]=0,k=-1),r[S+7>>0]=k,k=f[_+2>>0]|0,I=f[_+3>>0]|0,y=I<<8,w=r[_+4>>0]|0,b=w&255,r[E>>0]=k&7,r[E+1>>0]=k>>>3&7,r[E+2>>0]=(y|k)>>>6&7,r[E+3>>0]=I>>>1&7,r[E+4>>0]=I>>>4&7,r[E+5>>0]=(b<<16|y)>>>15&7,r[E+6>>0]=b>>>2&7,r[E+7>>0]=(w&255)>>>5,w=f[_+5>>0]|0,b=f[_+6>>0]|0,y=b<<8,I=r[_+7>>0]|0,_=I&255,r[E+8>>0]=w&7,r[E+9>>0]=w>>>3&7,r[E+10>>0]=(y|w)>>>6&7,r[E+11>>0]=b>>>1&7,r[E+12>>0]=b>>>4&7,r[E+13>>0]=(_<<16|y)>>>15&7,r[E+14>>0]=_>>>2&7,r[E+15>>0]=(I&255)>>>5,r[u+3>>0]=r[S+(f[E>>0]|0)>>0]|0,r[u+7>>0]=r[S+(f[E+1>>0]|0)>>0]|0,r[u+11>>0]=r[S+(f[E+2>>0]|0)>>0]|0,r[u+15>>0]=r[S+(f[E+3>>0]|0)>>0]|0,r[u+19>>0]=r[S+(f[E+4>>0]|0)>>0]|0,r[u+23>>0]=r[S+(f[E+5>>0]|0)>>0]|0,r[u+27>>0]=r[S+(f[E+6>>0]|0)>>0]|0,r[u+31>>0]=r[S+(f[E+7>>0]|0)>>0]|0,r[u+35>>0]=r[S+(f[E+8>>0]|0)>>0]|0,r[u+39>>0]=r[S+(f[E+9>>0]|0)>>0]|0,r[u+43>>0]=r[S+(f[E+10>>0]|0)>>0]|0,r[u+47>>0]=r[S+(f[E+11>>0]|0)>>0]|0,r[u+51>>0]=r[S+(f[E+12>>0]|0)>>0]|0,r[u+55>>0]=r[S+(f[E+13>>0]|0)>>0]|0,r[u+59>>0]=r[S+(f[E+14>>0]|0)>>0]|0,r[u+63>>0]=r[S+(f[E+15>>0]|0)>>0]|0,T=p}function nt(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0,xe=0,ft=0,Dt=0,An=0,Dn=0,lt=0,Ge=0,Mt=0,dt=0,Bt=0,pt=0,We=0,Xe=0,Vt=0,Nt=0,St=0,yt=0,Fe=0,Hn=0,Wn=0,ti=0,_n=0,Nn=0,Xn=0,ni=0,on=0,qn=0,Mn=0,Ln=0,ii=0,bn=0,Yn=0,Vn=0,Rn=0,Kn=0,Ei=0,ri=0,jn=0,Ti=0,Zn=0,Pi=0,Bi=0,Vi=0,Gi=0,ki=0,zi=0,hi=0,ai=0,si=0,Fn=0,wn=0,Hi=0,Wi=0,Xi=0,oi=0,$i=0,nn=0,fn=0,hn=0,tn=0,gn=0,xn=0,Sn=0,di=0,Di=0,pi=0,Li=0,Ui=0,mi=0,$n=0,_i=0,yi=0,Ai=0,li=0,ci=0,ui=0,fi=0,gi=0,vi=0,Mi=0,Gn=0,xi=0,bi=0,Jn=0,Un=0,Cn=0,jt=0,an=0,sn=0,cn=0,un=0,dn=0,pn=0,Ri=0,wi=0,Ii=0;for(p=T,T=T+64|0,S=p+40|0,E=p+24|0,b=p+12|0,y=p,w=u+4|0,I=s[s[w>>2]>>2]|0,C(u,u+16|0,0)|0,k=u+444|0,F=u+448|0,X=u+452|0,R=u+456|0,B=(I|0)>0,z=u+12|0,ie=E+4|0,Y=E+8|0,V=u+156|0,te=u+160|0,ne=u+164|0,Q=u+168|0,Se=u+412|0,Ue=u+416|0,ve=u+420|0,Te=u+424|0,de=u+428|0,He=u+432|0,Ce=u+436|0,De=0,et=0,je=0,be=0,ht=+h[k>>2],it=+h[X>>2],bt=+h[R>>2],wt=+h[F>>2],Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0;;){if(B)for(xe=+h[Se>>2],ft=+h[Ue>>2],Dt=+h[ve>>2],An=+h[Te>>2],Dn=+h[de>>2],lt=+h[He>>2],Ge=+h[Ce>>2],Mt=0,dt=De,Bt=et,pt=be,We=0,Xe=ht,Vt=it,Nt=0,St=bt,yt=0,Fe=0,Hn=wt,Wn=Qt,ti=Jt,_n=kt,Nn=$t,Xn=It,ni=Tt;;){for(on=(Mt|0)==0,on?(qn=+h[V>>2],Mn=+h[te>>2],Ln=+h[ne>>2],ii=+h[Q>>2]):(qn=0,Mn=0,Ln=0,ii=0),bn=on?1:Mt,on=dt,Yn=Bt,Vn=pt,Rn=qn,Kn=Xe,Ei=Mn,ri=Vt,jn=St,Ti=Ln,Zn=ii,Pi=Hn,Bi=ni,Vi=Xn,Gi=Nn,ki=_n,zi=ti,hi=Wn;ai=Rn*.5,si=Ei*.5,Fn=Ti*.5,wn=Zn*.25,Hi=We+ai,Wi=Fe+si,Xi=Nt+Fn,oi=yt+wn,$i=ai+(xe-Rn-We),ai=si+(ft-Ei-Fe),si=Fn+(Dt-Ti-Nt),Fn=wn+(An-Zn-yt),nn=1/(oi*Fn-wn*wn),fn=(Hi*Fn-wn*$i)*nn,hn=(Wi*Fn-wn*ai)*nn,tn=(Xi*Fn-wn*si)*nn,gn=(oi*$i-Hi*wn)*nn,xn=(oi*ai-Wi*wn)*nn,Sn=(oi*si-Xi*wn)*nn,nn=fn>0?fn:0,fn=hn>0?hn:0,hn=tn>0?tn:0,tn=gn>0?gn:0,gn=xn>0?xn:0,xn=Sn>0?Sn:0,Sn=(nn<1?nn:1)*31+.5,nn=(fn<1?fn:1)*63+.5,fn=(hn<1?hn:1)*31+.5,Sn>0?di=+H(+Sn):di=+se(+Sn),nn>0?Di=+H(+nn):Di=+se(+nn),fn>0?pi=+H(+fn):pi=+se(+fn),fn=di*.032258063554763794,nn=Di*.01587301678955555,Sn=pi*.032258063554763794,hn=(tn<1?tn:1)*31+.5,tn=(gn<1?gn:1)*63+.5,gn=(xn<1?xn:1)*31+.5,hn>0?Li=+H(+hn):Li=+se(+hn),tn>0?Ui=+H(+tn):Ui=+se(+tn),gn>0?mi=+H(+gn):mi=+se(+gn),gn=Li*.032258063554763794,tn=Ui*.01587301678955555,hn=mi*.032258063554763794,xn=Dn*(oi*(fn*fn)+Fn*(gn*gn)+(wn*(fn*gn)-Hi*fn-$i*gn)*2)+lt*(oi*(nn*nn)+Fn*(tn*tn)+(wn*(nn*tn)-Wi*nn-ai*tn)*2)+Ge*(oi*(Sn*Sn)+Fn*(hn*hn)+(wn*(Sn*hn)-Xi*Sn-si*hn)*2),!(xn<Kn|xn<Pi)&&!(xn<ri|xn<jn)?($n=on,_i=Yn,yi=Vn,Ai=Kn,li=ri,ci=jn,ui=Pi,fi=Bi,gi=Vi,vi=Gi,Mi=ki,Gn=zi,xi=hi):($n=je,_i=Mt,yi=bn,Ai=xn,li=xn,ci=xn,ui=xn,fi=gn,gi=tn,vi=hn,Mi=fn,Gn=nn,xi=Sn),(bn|0)!=(I|0);)Sn=Rn+ +h[u+156+(bn<<4)>>2],nn=Ei+ +h[u+156+(bn<<4)+4>>2],fn=Ti+ +h[u+156+(bn<<4)+8>>2],hn=Zn+ +h[u+156+(bn<<4)+12>>2],bn=bn+1|0,on=$n,Yn=_i,Vn=yi,Rn=Sn,Kn=Ai,Ei=nn,ri=li,jn=ci,Ti=fn,Zn=hn,Pi=ui,Bi=fi,Vi=gi,Gi=vi,ki=Mi,zi=Gn,hi=xi;if(We=We+ +h[u+156+(Mt<<4)>>2],Fe=Fe+ +h[u+156+(Mt<<4)+4>>2],Nt=Nt+ +h[u+156+(Mt<<4)+8>>2],yt=yt+ +h[u+156+(Mt<<4)+12>>2],Mt=Mt+1|0,(Mt|0)==(I|0)){bi=$n,Jn=_i,Un=yi,Cn=xi,jt=Gn,an=Mi,sn=vi,cn=gi,un=fi,dn=Ai,pn=li,Ri=ci,wi=ui;break}else dt=$n,Bt=_i,pt=yi,Xe=Ai,Vt=li,St=ci,Hn=ui,Wn=xi,ti=Gn,_n=Mi,Nn=vi,Xn=gi,ni=fi}else bi=De,Jn=et,Un=be,Cn=Qt,jt=Jt,an=kt,sn=$t,cn=It,un=Tt,dn=ht,pn=it,Ri=bt,wi=wt;if((bi|0)!=(je|0)){Ii=bi;break}if(pt=je+1|0,(pt|0)==(s[z>>2]|0)){Ii=je;break}if(h[E>>2]=un-an,h[ie>>2]=cn-jt,h[Y>>2]=sn-Cn,C(u,E,pt)|0)Bt=je,et=Jn,je=pt,be=Un,ht=dn,it=pn,bt=Ri,wt=wi,Tt=un,It=cn,$t=sn,kt=an,Jt=jt,Qt=Cn,De=Bt;else{Ii=je;break}}if(!(dn<+h[k>>2])&&!(wi<+h[F>>2])&&!(pn<+h[X>>2])&&!(Ri<+h[R>>2])){T=p;return}if(je=(Ii<<4)+(u+28)|0,(Jn|0)>0){u=0;do r[E+(f[je+u>>0]|0)>>0]=0,u=u+1|0;while((u|0)!=(Jn|0))}if((Jn|0)<(Un|0)){u=Jn;do r[E+(f[je+u>>0]|0)>>0]=2,u=u+1|0;while((u|0)!=(Un|0))}if((Un|0)<(I|0)){u=Un;do r[E+(f[je+u>>0]|0)>>0]=1,u=u+1|0;while((u|0)!=(I|0))}rt(s[w>>2]|0,E,S),h[b>>2]=an,h[b+4>>2]=jt,h[b+8>>2]=Cn,h[y>>2]=un,h[y+4>>2]=cn,h[y+8>>2]=sn,_e(b,y,S,_),h[k>>2]=dn,h[F>>2]=wi,h[X>>2]=pn,h[R>>2]=Ri,T=p}function O(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0,xe=0,ft=0,Dt=0,An=0,Dn=0,lt=0,Ge=0,Mt=0,dt=0,Bt=0,pt=0,We=0,Xe=0,Vt=0,Nt=0,St=0,yt=0,Fe=0,Hn=0,Wn=0,ti=0,_n=0,Nn=0,Xn=0,ni=0,on=0,qn=0,Mn=0,Ln=0,ii=0,bn=0,Yn=0,Vn=0,Rn=0,Kn=0,Ei=0,ri=0,jn=0,Ti=0,Zn=0,Pi=0,Bi=0,Vi=0,Gi=0,ki=0,zi=0,hi=0,ai=0,si=0,Fn=0,wn=0,Hi=0,Wi=0,Xi=0,oi=0,$i=0,nn=0,fn=0,hn=0,tn=0,gn=0,xn=0,Sn=0,di=0,Di=0,pi=0,Li=0,Ui=0,mi=0,$n=0,_i=0,yi=0,Ai=0,li=0,ci=0,ui=0,fi=0,gi=0,vi=0,Mi=0,Gn=0,xi=0,bi=0,Jn=0,Un=0,Cn=0,jt=0,an=0,sn=0,cn=0,un=0,dn=0,pn=0,Ri=0,wi=0,Ii=0,Jr=0,Qr=0,ea=0,Qi=0,er=0,tr=0,nr=0,ir=0,rr=0,ar=0,sr=0,or=0,lr=0,cr=0,ur=0,fr=0,hr=0,Gr=0,qi=0,Yi=0,Ki=0,mr=0,_r=0,gr=0,vr=0,Mr=0,xr=0,Sr=0,Er=0,Tr=0,yr=0,kr=0;for(p=T,T=T+64|0,S=p+40|0,E=p+24|0,b=p+12|0,y=p,w=u+4|0,I=s[s[w>>2]>>2]|0,C(u,u+16|0,0)|0,k=u+444|0,F=u+448|0,X=u+452|0,R=u+456|0,B=(I|0)>0,z=u+12|0,ie=E+4|0,Y=E+8|0,V=u+156|0,te=u+160|0,ne=u+164|0,Q=u+168|0,Se=u+412|0,Ue=u+416|0,ve=u+420|0,Te=u+424|0,de=u+428|0,He=u+432|0,Ce=u+436|0,De=0,et=0,je=0,be=0,ht=0,it=+h[k>>2],bt=+h[X>>2],wt=+h[R>>2],Tt=+h[F>>2],It=0,$t=0,kt=0,Jt=0,Qt=0,xe=0;;){if(B)for(ft=+h[Se>>2],Dt=+h[Ue>>2],An=+h[ve>>2],Dn=+h[Te>>2],lt=+h[de>>2],Ge=+h[He>>2],Mt=+h[Ce>>2],dt=0,Bt=et,pt=je,We=be,Xe=ht,Vt=0,Nt=it,St=bt,yt=0,Fe=wt,Hn=0,Wn=0,ti=Tt,_n=xe,Nn=Qt,Xn=Jt,ni=kt,on=$t,qn=It;;){for(Mn=dt,Ln=We,ii=Bt,bn=pt,Yn=Xe,Vn=0,Rn=Nt,Kn=St,Ei=Fe,ri=0,jn=0,Ti=ti,Zn=0,Pi=qn,Bi=on,Vi=ni,Gi=Xn,ki=Nn,zi=_n;;){for(hi=(Mn|0)==0,hi?(ai=+h[V>>2],si=+h[te>>2],Fn=+h[ne>>2],wn=+h[Q>>2]):(ai=0,si=0,Fn=0,wn=0),Hi=Vt+Vn*.6666666865348816,Wi=Wn+Zn*.6666666865348816,Xi=yt+ri*.6666666865348816,oi=Hn+jn*.4444444477558136,$i=Vn*.3333333432674408,nn=Zn*.3333333432674408,fn=ri*.3333333432674408,hn=jn*.1111111119389534,tn=hi?1:Mn,hi=Ln,gn=ii,xn=bn,Sn=Yn,di=ai,Di=Rn,pi=si,Li=Kn,Ui=Ei,mi=Fn,$n=wn,_i=Ti,yi=Pi,Ai=Bi,li=Vi,ci=Gi,ui=ki,fi=zi;gi=Hi+di*.3333333432674408,vi=Wi+pi*.3333333432674408,Mi=Xi+mi*.3333333432674408,Gn=oi+$n*.1111111119389534,xi=$i+(di*.6666666865348816+(ft-di-Vn-Vt)),bi=nn+(pi*.6666666865348816+(Dt-pi-Zn-Wn)),Jn=fn+(mi*.6666666865348816+(An-mi-ri-yt)),Un=hn+($n*.4444444477558136+(Dn-$n-jn-Hn)),Cn=(jn+$n)*.2222222238779068,jt=1/(Gn*Un-Cn*Cn),an=(gi*Un-Cn*xi)*jt,sn=(vi*Un-Cn*bi)*jt,cn=(Mi*Un-Cn*Jn)*jt,un=(Gn*xi-gi*Cn)*jt,dn=(Gn*bi-vi*Cn)*jt,pn=(Gn*Jn-Mi*Cn)*jt,jt=an>0?an:0,an=sn>0?sn:0,sn=cn>0?cn:0,cn=un>0?un:0,un=dn>0?dn:0,dn=pn>0?pn:0,pn=(jt<1?jt:1)*31+.5,jt=(an<1?an:1)*63+.5,an=(sn<1?sn:1)*31+.5,pn>0?Ri=+H(+pn):Ri=+se(+pn),jt>0?wi=+H(+jt):wi=+se(+jt),an>0?Ii=+H(+an):Ii=+se(+an),an=Ri*.032258063554763794,jt=wi*.01587301678955555,pn=Ii*.032258063554763794,sn=(cn<1?cn:1)*31+.5,cn=(un<1?un:1)*63+.5,un=(dn<1?dn:1)*31+.5,sn>0?Jr=+H(+sn):Jr=+se(+sn),cn>0?Qr=+H(+cn):Qr=+se(+cn),un>0?ea=+H(+un):ea=+se(+un),un=Jr*.032258063554763794,cn=Qr*.01587301678955555,sn=ea*.032258063554763794,dn=lt*(Gn*(an*an)+Un*(un*un)+(Cn*(an*un)-gi*an-xi*un)*2)+Ge*(Gn*(jt*jt)+Un*(cn*cn)+(Cn*(jt*cn)-vi*jt-bi*cn)*2)+Mt*(Gn*(pn*pn)+Un*(sn*sn)+(Cn*(pn*sn)-Mi*pn-Jn*sn)*2),!(dn<Di|dn<_i)&&!(dn<Li|dn<Ui)?(Qi=hi,er=gn,tr=xn,nr=Sn,ir=Di,rr=Li,ar=Ui,sr=_i,or=yi,lr=Ai,cr=li,ur=ci,fr=ui,hr=fi):(Qi=De,er=tn,tr=Mn,nr=dt,ir=dn,rr=dn,ar=dn,sr=dn,or=un,lr=cn,cr=sn,ur=an,fr=jt,hr=pn),(tn|0)!=(I|0);)pn=di+ +h[u+156+(tn<<4)>>2],jt=pi+ +h[u+156+(tn<<4)+4>>2],an=mi+ +h[u+156+(tn<<4)+8>>2],sn=$n+ +h[u+156+(tn<<4)+12>>2],tn=tn+1|0,hi=Qi,gn=er,xn=tr,Sn=nr,di=pn,Di=ir,pi=jt,Li=rr,Ui=ar,mi=an,$n=sn,_i=sr,yi=or,Ai=lr,li=cr,ci=ur,ui=fr,fi=hr;if((Mn|0)==(I|0))break;fi=Vn+ +h[u+156+(Mn<<4)>>2],ui=Zn+ +h[u+156+(Mn<<4)+4>>2],ci=ri+ +h[u+156+(Mn<<4)+8>>2],li=jn+ +h[u+156+(Mn<<4)+12>>2],Mn=Mn+1|0,Ln=Qi,ii=er,bn=tr,Yn=nr,Vn=fi,Rn=ir,Kn=rr,Ei=ar,ri=ci,jn=li,Ti=sr,Zn=ui,Pi=or,Bi=lr,Vi=cr,Gi=ur,ki=fr,zi=hr}if(Vt=Vt+ +h[u+156+(dt<<4)>>2],Wn=Wn+ +h[u+156+(dt<<4)+4>>2],yt=yt+ +h[u+156+(dt<<4)+8>>2],Hn=Hn+ +h[u+156+(dt<<4)+12>>2],dt=dt+1|0,(dt|0)==(I|0)){Gr=Qi,qi=er,Yi=tr,Ki=nr,mr=hr,_r=fr,gr=ur,vr=cr,Mr=lr,xr=or,Sr=ir,Er=rr,Tr=ar,yr=sr;break}else Bt=er,pt=tr,We=Qi,Xe=nr,Nt=ir,St=rr,Fe=ar,ti=sr,_n=hr,Nn=fr,Xn=ur,ni=cr,on=lr,qn=or}else Gr=be,qi=et,Yi=je,Ki=ht,mr=xe,_r=Qt,gr=Jt,vr=kt,Mr=$t,xr=It,Sr=it,Er=bt,Tr=wt,yr=Tt;if((Gr|0)!=(De|0)){kr=Gr;break}if(Xe=De+1|0,(Xe|0)==(s[z>>2]|0)){kr=De;break}if(h[E>>2]=xr-gr,h[ie>>2]=Mr-_r,h[Y>>2]=vr-mr,C(u,E,Xe)|0)We=De,De=Xe,et=qi,je=Yi,ht=Ki,it=Sr,bt=Er,wt=Tr,Tt=yr,It=xr,$t=Mr,kt=vr,Jt=gr,Qt=_r,xe=mr,be=We;else{kr=De;break}}if(!(Sr<+h[k>>2])&&!(yr<+h[F>>2])&&!(Er<+h[X>>2])&&!(Tr<+h[R>>2])){T=p;return}if(De=(kr<<4)+(u+28)|0,(Ki|0)>0){u=0;do r[E+(f[De+u>>0]|0)>>0]=0,u=u+1|0;while((u|0)!=(Ki|0))}if((Ki|0)<(Yi|0)){u=Ki;do r[E+(f[De+u>>0]|0)>>0]=2,u=u+1|0;while((u|0)!=(Yi|0))}if((Yi|0)<(qi|0)){u=Yi;do r[E+(f[De+u>>0]|0)>>0]=3,u=u+1|0;while((u|0)!=(qi|0))}if((qi|0)<(I|0)){u=qi;do r[E+(f[De+u>>0]|0)>>0]=1,u=u+1|0;while((u|0)!=(I|0))}rt(s[w>>2]|0,E,S),h[b>>2]=gr,h[b+4>>2]=_r,h[b+8>>2]=mr,h[y>>2]=xr,h[y+4>>2]=Mr,h[y+8>>2]=vr,Me(b,y,S,_),h[k>>2]=Sr,h[F>>2]=yr,h[X>>2]=Er,h[R>>2]=Tr,T=p}function C(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0;if(S=T,T=T+64|0,E=S,b=u+4|0,y=s[b>>2]|0,w=s[y>>2]|0,I=(p<<4)+(u+28)|0,k=(w|0)>0,k){F=_+4|0,X=_+8|0,R=0;do h[E+(R<<2)>>2]=+h[y+4+(R*12|0)>>2]*+h[_>>2]+ +h[y+4+(R*12|0)+4>>2]*+h[F>>2]+ +h[y+4+(R*12|0)+8>>2]*+h[X>>2],r[I+R>>0]=R,R=R+1|0;while((R|0)!=(w|0));if(k){R=0;do{e:do if((R|0)>0)for(X=R,B=+h[E+(R<<2)>>2];;){if(y=X,X=X+-1|0,F=E+(X<<2)|0,z=+h[F>>2],!(B<z))break e;if(_=E+(y<<2)|0,ie=s[_>>2]|0,h[_>>2]=z,s[F>>2]=ie,F=I+y|0,_=I+X|0,Y=r[F>>0]|0,r[F>>0]=r[_>>0]|0,r[_>>0]=Y,(y|0)<=1)break;B=(s[U>>2]=ie,+h[U>>2])}while(!1);R=R+1|0}while((R|0)!=(w|0))}}e:do if((p|0)>0){if(k)V=0;else return te=0,T=S,te|0;t:for(;;){for(R=(V<<4)+(u+28)|0,E=0;(r[I+E>>0]|0)==(r[R+E>>0]|0);)if(E=E+1|0,(E|0)>=(w|0)){te=0;break t}if(V=V+1|0,(V|0)>=(p|0))break e}return T=S,te|0}while(!1);if(p=s[b>>2]|0,b=u+412|0,V=u+416|0,E=u+420|0,R=u+424|0,s[b>>2]=0,s[b+4>>2]=0,s[b+8>>2]=0,s[b+12>>2]=0,k)ne=0;else return te=1,T=S,te|0;do k=f[I+ne>>0]|0,B=+h[p+196+(k<<2)>>2],z=+h[p+4+(k*12|0)>>2]*B,Q=+h[p+4+(k*12|0)+4>>2]*B,Se=+h[p+4+(k*12|0)+8>>2]*B,h[u+156+(ne<<4)>>2]=z,h[u+156+(ne<<4)+4>>2]=Q,h[u+156+(ne<<4)+8>>2]=Se,h[u+156+(ne<<4)+12>>2]=B,h[b>>2]=z+ +h[b>>2],h[V>>2]=Q+ +h[V>>2],h[E>>2]=Se+ +h[E>>2],h[R>>2]=B+ +h[R>>2],ne=ne+1|0;while((ne|0)!=(w|0));return te=1,T=S,te|0}function ae(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0;S=T,T=T+48|0,E=S+16|0,b=S,Je(u,_,p),s[u>>2]=128,p=u+16|0,_=s[u+8>>2]|0,s[u+12>>2]=_&256|0?8:1,h[u+444>>2]=34028234663852886e22,h[u+448>>2]=34028234663852886e22,h[u+452>>2]=34028234663852886e22,h[u+456>>2]=34028234663852886e22,y=(_&32|0)==0,h[u+428>>2]=y?1:.2125999927520752,h[u+432>>2]=y?1:.7152000069618225,h[u+436>>2]=y?1:.0722000002861023,h[u+440>>2]=y?1:0,y=s[u+4>>2]|0,ye(E,s[y>>2]|0,y+4|0,y+196|0),qe(b,E),s[p>>2]=s[b>>2],s[p+4>>2]=s[b+4>>2],s[p+8>>2]=s[b+8>>2],T=S}function _e(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0,xe=0;if(E=T,T=T+16|0,b=E,y=~~(+h[u>>2]*31+.5),w=~~(+h[u+4>>2]*63+.5),I=~~(+h[u+8>>2]*31+.5),u=((w|0)<0?0:((w|0)<63?w:63)<<5)|((y|0)<0?0:((y|0)<31?y:31)<<11)|((I|0)<0?0:(I|0)<31?I:31),I=~~(+h[_>>2]*31+.5),y=~~(+h[_+4>>2]*63+.5),w=~~(+h[_+8>>2]*31+.5),_=((y|0)<0?0:((y|0)<63?y:63)<<5)|((I|0)<0?0:((I|0)<31?I:31)<<11)|((w|0)<0?0:(w|0)<31?w:31),(u|0)>(_|0)){switch(w=r[p>>0]|0,w<<24>>24){case 0:{k=1;break}case 1:{k=0;break}default:k=w}switch(r[b>>0]=k,w=r[p+1>>0]|0,w<<24>>24){case 0:{F=1;break}case 1:{F=0;break}default:F=w}switch(r[b+1>>0]=F,w=r[p+2>>0]|0,w<<24>>24){case 0:{X=1;break}case 1:{X=0;break}default:X=w}switch(r[b+2>>0]=X,w=r[p+3>>0]|0,w<<24>>24){case 0:{R=1;break}case 1:{R=0;break}default:R=w}switch(r[b+3>>0]=R,w=r[p+4>>0]|0,w<<24>>24){case 0:{B=1;break}case 1:{B=0;break}default:B=w}switch(r[b+4>>0]=B,w=r[p+5>>0]|0,w<<24>>24){case 0:{z=1;break}case 1:{z=0;break}default:z=w}switch(r[b+5>>0]=z,w=r[p+6>>0]|0,w<<24>>24){case 0:{ie=1;break}case 1:{ie=0;break}default:ie=w}switch(r[b+6>>0]=ie,w=r[p+7>>0]|0,w<<24>>24){case 0:{Y=1;break}case 1:{Y=0;break}default:Y=w}switch(r[b+7>>0]=Y,w=r[p+8>>0]|0,w<<24>>24){case 0:{V=1;break}case 1:{V=0;break}default:V=w}switch(r[b+8>>0]=V,w=r[p+9>>0]|0,w<<24>>24){case 0:{te=1;break}case 1:{te=0;break}default:te=w}switch(r[b+9>>0]=te,w=r[p+10>>0]|0,w<<24>>24){case 0:{ne=1;break}case 1:{ne=0;break}default:ne=w}switch(r[b+10>>0]=ne,w=r[p+11>>0]|0,w<<24>>24){case 0:{Q=1;break}case 1:{Q=0;break}default:Q=w}switch(r[b+11>>0]=Q,w=r[p+12>>0]|0,w<<24>>24){case 0:{Se=1;break}case 1:{Se=0;break}default:Se=w}switch(r[b+12>>0]=Se,w=r[p+13>>0]|0,w<<24>>24){case 0:{Ue=1;break}case 1:{Ue=0;break}default:Ue=w}switch(r[b+13>>0]=Ue,w=r[p+14>>0]|0,w<<24>>24){case 0:{ve=1;break}case 1:{ve=0;break}default:ve=w}switch(r[b+14>>0]=ve,w=r[p+15>>0]|0,w<<24>>24){case 0:{Te=1;break}case 1:{Te=0;break}default:Te=w}r[b+15>>0]=Te,de=u,He=_,Ce=Se,De=Ue,et=ve,je=Te,be=k,ht=F,it=X,bt=R,wt=B,Tt=z,It=ie,$t=Y,kt=V,Jt=te,Qt=ne,xe=Q}else{Q=b,ne=p,p=Q+16|0;do r[Q>>0]=r[ne>>0]|0,Q=Q+1|0,ne=ne+1|0;while((Q|0)<(p|0));de=_,He=u,Ce=r[b+12>>0]|0,De=r[b+13>>0]|0,et=r[b+14>>0]|0,je=r[b+15>>0]|0,be=r[b>>0]|0,ht=r[b+1>>0]|0,it=r[b+2>>0]|0,bt=r[b+3>>0]|0,wt=r[b+4>>0]|0,Tt=r[b+5>>0]|0,It=r[b+6>>0]|0,$t=r[b+7>>0]|0,kt=r[b+8>>0]|0,Jt=r[b+9>>0]|0,Qt=r[b+10>>0]|0,xe=r[b+11>>0]|0}r[S>>0]=He,r[S+1>>0]=He>>>8,r[S+2>>0]=de,r[S+3>>0]=de>>>8,r[S+4>>0]=(ht&255)<<2|be&255|(it&255)<<4|(bt&255)<<6,r[S+5>>0]=(Tt&255)<<2|wt&255|(It&255)<<4|($t&255)<<6,r[S+6>>0]=(Jt&255)<<2|kt&255|(Qt&255)<<4|(xe&255)<<6,r[S+7>>0]=(De&255)<<2|Ce&255|(et&255)<<4|(je&255)<<6,T=E}function Me(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0;E=T,T=T+16|0,b=E,y=~~(+h[u>>2]*31+.5),w=~~(+h[u+4>>2]*63+.5),I=~~(+h[u+8>>2]*31+.5),u=((w|0)<0?0:((w|0)<63?w:63)<<5)|((y|0)<0?0:((y|0)<31?y:31)<<11)|((I|0)<0?0:(I|0)<31?I:31),I=~~(+h[_>>2]*31+.5),y=~~(+h[_+4>>2]*63+.5),w=~~(+h[_+8>>2]*31+.5),_=((y|0)<0?0:((y|0)<63?y:63)<<5)|((I|0)<0?0:((I|0)<31?I:31)<<11)|((w|0)<0?0:(w|0)<31?w:31);do if((u|0)>=(_|0))if((u|0)==(_|0)){k=b,F=k+16|0;do r[k>>0]=0,k=k+1|0;while((k|0)<(F|0));X=u,R=u,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0;break}else{k=b,w=p,F=k+16|0;do r[k>>0]=r[w>>0]|0,k=k+1|0,w=w+1|0;while((k|0)<(F|0));X=_,R=u,B=r[b>>0]|0,z=r[b+1>>0]|0,ie=r[b+2>>0]|0,Y=r[b+3>>0]|0,V=r[b+4>>0]|0,te=r[b+5>>0]|0,ne=r[b+6>>0]|0,Q=r[b+7>>0]|0,Se=r[b+8>>0]|0,Ue=r[b+9>>0]|0,ve=r[b+10>>0]|0,Te=r[b+11>>0]|0,de=r[b+12>>0]|0,He=r[b+13>>0]|0,Ce=r[b+14>>0]|0,De=r[b+15>>0]|0;break}else w=r[p>>0]&3^1,r[b>>0]=w,I=r[p+1>>0]&3^1,r[b+1>>0]=I,y=r[p+2>>0]&3^1,r[b+2>>0]=y,et=r[p+3>>0]&3^1,r[b+3>>0]=et,je=r[p+4>>0]&3^1,r[b+4>>0]=je,be=r[p+5>>0]&3^1,r[b+5>>0]=be,ht=r[p+6>>0]&3^1,r[b+6>>0]=ht,it=r[p+7>>0]&3^1,r[b+7>>0]=it,bt=r[p+8>>0]&3^1,r[b+8>>0]=bt,wt=r[p+9>>0]&3^1,r[b+9>>0]=wt,Tt=r[p+10>>0]&3^1,r[b+10>>0]=Tt,It=r[p+11>>0]&3^1,r[b+11>>0]=It,$t=r[p+12>>0]&3^1,r[b+12>>0]=$t,kt=r[p+13>>0]&3^1,r[b+13>>0]=kt,Jt=r[p+14>>0]&3^1,r[b+14>>0]=Jt,Qt=r[p+15>>0]&3^1,r[b+15>>0]=Qt,X=u,R=_,B=w,z=I,ie=y,Y=et,V=je,te=be,ne=ht,Q=it,Se=bt,Ue=wt,ve=Tt,Te=It,de=$t,He=kt,Ce=Jt,De=Qt;while(!1);r[S>>0]=R,r[S+1>>0]=R>>>8,r[S+2>>0]=X,r[S+3>>0]=X>>>8,r[S+4>>0]=(z&255)<<2|B&255|(ie&255)<<4|(Y&255)<<6,r[S+5>>0]=(te&255)<<2|V&255|(ne&255)<<4|(Q&255)<<6,r[S+6>>0]=(Ue&255)<<2|Se&255|(ve&255)<<4|(Te&255)<<6,r[S+7>>0]=(He&255)<<2|de&255|(Ce&255)<<4|(De&255)<<6,T=E}function me(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0;S=T,T=T+32|0,E=S+16|0,b=S,y=r[_+1>>0]|0,w=f[_>>0]|0,I=y&255,k=I<<8|w,F=(y&255)>>>3,y=F<<3&255|(F&255)>>>2,r[E>>0]=y,F=k>>>5<<2|I>>>1&3,r[E+1>>0]=F,I=w>>>2&7|w<<3,r[E+2>>0]=I,r[E+3>>0]=-1,w=r[_+3>>0]|0,X=f[_+2>>0]|0,R=w&255,B=R<<8|X,z=(w&255)>>>3,w=z<<3&255|(z&255)>>>2,r[E+4>>0]=w,z=B>>>5<<2|R>>>1&3,r[E+5>>0]=z,R=X>>>2&7|X<<3,r[E+6>>0]=R,r[E+7>>0]=-1,X=k>>>0>B>>>0|p^1,X?(r[E+8>>0]=(((y<<1)+w|0)>>>0)/3|0,r[E+12>>0]=(((w<<1)+y|0)>>>0)/3|0,p=F&255,B=z&255,r[E+9>>0]=(((p<<1)+B|0)>>>0)/3|0,r[E+13>>0]=(((B<<1)+p|0)>>>0)/3|0,p=I&255,B=R&255,r[E+10>>0]=(((p<<1)+B|0)>>>0)/3|0,ie=((((B<<1)+p|0)>>>0)/3|0)&255):(r[E+8>>0]=(w+y|0)>>>1,r[E+12>>0]=0,r[E+9>>0]=((z&255)+(F&255)|0)>>>1,r[E+13>>0]=0,r[E+10>>0]=((R&255)+(I&255)|0)>>>1,ie=0),r[E+14>>0]=ie,r[E+11>>0]=-1,r[E+15>>0]=X<<31>>31,X=r[_+4>>0]|0,ie=X&255,I=ie&3,r[b>>0]=I,R=ie>>>2&3,r[b+1>>0]=R,F=ie>>>4&3,r[b+2>>0]=F,ie=(X&255)>>>6,r[b+3>>0]=ie,X=r[_+5>>0]|0,z=X&255,y=z&3,r[b+4>>0]=y,w=z>>>2&3,r[b+5>>0]=w,p=z>>>4&3,r[b+6>>0]=p,z=(X&255)>>>6,r[b+7>>0]=z,X=r[_+6>>0]|0,B=X&255,k=B&3,r[b+8>>0]=k,Y=B>>>2&3,r[b+9>>0]=Y,V=B>>>4&3,r[b+10>>0]=V,B=(X&255)>>>6,r[b+11>>0]=B,X=r[_+7>>0]|0,_=X&255,te=_&3,r[b+12>>0]=te,ne=_>>>2&3,r[b+13>>0]=ne,Q=_>>>4&3,r[b+14>>0]=Q,r[b+15>>0]=(X&255)>>>6,X=E+(I<<2)|0,I=f[X>>0]|f[X+1>>0]<<8|f[X+2>>0]<<16|f[X+3>>0]<<24,r[u>>0]=I,r[u+1>>0]=I>>8,r[u+2>>0]=I>>16,r[u+3>>0]=I>>24,I=u+4|0,X=E+(R<<2)|0,R=f[X>>0]|f[X+1>>0]<<8|f[X+2>>0]<<16|f[X+3>>0]<<24,r[I>>0]=R,r[I+1>>0]=R>>8,r[I+2>>0]=R>>16,r[I+3>>0]=R>>24,R=u+8|0,I=E+(F<<2)|0,F=f[I>>0]|f[I+1>>0]<<8|f[I+2>>0]<<16|f[I+3>>0]<<24,r[R>>0]=F,r[R+1>>0]=F>>8,r[R+2>>0]=F>>16,r[R+3>>0]=F>>24,F=u+12|0,R=E+(ie<<2&255)|0,ie=f[R>>0]|f[R+1>>0]<<8|f[R+2>>0]<<16|f[R+3>>0]<<24,r[F>>0]=ie,r[F+1>>0]=ie>>8,r[F+2>>0]=ie>>16,r[F+3>>0]=ie>>24,ie=u+16|0,F=E+(y<<2)|0,y=f[F>>0]|f[F+1>>0]<<8|f[F+2>>0]<<16|f[F+3>>0]<<24,r[ie>>0]=y,r[ie+1>>0]=y>>8,r[ie+2>>0]=y>>16,r[ie+3>>0]=y>>24,y=u+20|0,ie=E+(w<<2)|0,w=f[ie>>0]|f[ie+1>>0]<<8|f[ie+2>>0]<<16|f[ie+3>>0]<<24,r[y>>0]=w,r[y+1>>0]=w>>8,r[y+2>>0]=w>>16,r[y+3>>0]=w>>24,w=u+24|0,y=E+(p<<2)|0,p=f[y>>0]|f[y+1>>0]<<8|f[y+2>>0]<<16|f[y+3>>0]<<24,r[w>>0]=p,r[w+1>>0]=p>>8,r[w+2>>0]=p>>16,r[w+3>>0]=p>>24,p=u+28|0,w=E+(z<<2&255)|0,z=f[w>>0]|f[w+1>>0]<<8|f[w+2>>0]<<16|f[w+3>>0]<<24,r[p>>0]=z,r[p+1>>0]=z>>8,r[p+2>>0]=z>>16,r[p+3>>0]=z>>24,z=u+32|0,p=E+(k<<2)|0,k=f[p>>0]|f[p+1>>0]<<8|f[p+2>>0]<<16|f[p+3>>0]<<24,r[z>>0]=k,r[z+1>>0]=k>>8,r[z+2>>0]=k>>16,r[z+3>>0]=k>>24,k=u+36|0,z=E+(Y<<2)|0,Y=f[z>>0]|f[z+1>>0]<<8|f[z+2>>0]<<16|f[z+3>>0]<<24,r[k>>0]=Y,r[k+1>>0]=Y>>8,r[k+2>>0]=Y>>16,r[k+3>>0]=Y>>24,Y=u+40|0,k=E+(V<<2)|0,V=f[k>>0]|f[k+1>>0]<<8|f[k+2>>0]<<16|f[k+3>>0]<<24,r[Y>>0]=V,r[Y+1>>0]=V>>8,r[Y+2>>0]=V>>16,r[Y+3>>0]=V>>24,V=u+44|0,Y=E+(B<<2&255)|0,B=f[Y>>0]|f[Y+1>>0]<<8|f[Y+2>>0]<<16|f[Y+3>>0]<<24,r[V>>0]=B,r[V+1>>0]=B>>8,r[V+2>>0]=B>>16,r[V+3>>0]=B>>24,B=u+48|0,V=E+(te<<2)|0,te=f[V>>0]|f[V+1>>0]<<8|f[V+2>>0]<<16|f[V+3>>0]<<24,r[B>>0]=te,r[B+1>>0]=te>>8,r[B+2>>0]=te>>16,r[B+3>>0]=te>>24,te=u+52|0,B=E+(ne<<2)|0,ne=f[B>>0]|f[B+1>>0]<<8|f[B+2>>0]<<16|f[B+3>>0]<<24,r[te>>0]=ne,r[te+1>>0]=ne>>8,r[te+2>>0]=ne>>16,r[te+3>>0]=ne>>24,ne=u+56|0,te=E+(Q<<2)|0,Q=f[te>>0]|f[te+1>>0]<<8|f[te+2>>0]<<16|f[te+3>>0]<<24,r[ne>>0]=Q,r[ne+1>>0]=Q>>8,r[ne+2>>0]=Q>>16,r[ne+3>>0]=Q>>24,Q=u+60|0,u=E+((f[b+15>>0]|0)<<2&252)|0,b=f[u>>0]|f[u+1>>0]<<8|f[u+2>>0]<<16|f[u+3>>0]<<24,r[Q>>0]=b,r[Q+1>>0]=b>>8,r[Q+2>>0]=b>>16,r[Q+3>>0]=b>>24,T=S}function Je(u,_,p){u=u|0,_=_|0,p=p|0,s[u>>2]=144,s[u+4>>2]=_,s[u+8>>2]=p}function Ie(u,_){u=u|0,_=_|0;var p=0;if(p=s[u>>2]|0,!(s[u+8>>2]&1)){Br[s[p+4>>2]&7](u,_);return}Br[s[p>>2]&7](u,_),!(r[(s[u+4>>2]|0)+324>>0]|0)&&Br[s[(s[u>>2]|0)+4>>2]&7](u,_)}function ct(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0;s[u>>2]=0,E=u+324|0,r[E>>0]=0,b=(S&1|0)!=0,y=(S&128|0)!=0,S=0;do{e:do if(!(1<<S&p))s[u+260+(S<<2)>>2]=-1;else{if(b&&(r[_+(S<<2|3)>>0]|0)>-1){s[u+260+(S<<2)>>2]=-1,r[E>>0]=1;break}w=S<<2,I=_+w|0,k=_+(w|1)|0,F=_+(w|2)|0;t:do if(!S)X=0;else{n:do if(b)for(R=0;;){if(1<<R&p|0&&(B=R<<2,(r[I>>0]|0)==(r[_+B>>0]|0))&&(r[k>>0]|0)==(r[_+(B|1)>>0]|0)&&(r[F>>0]|0)==(r[_+(B|2)>>0]|0)&&(r[_+(B|3)>>0]|0)<0){z=R;break n}if(R=R+1|0,(R|0)==(S|0)){X=w;break t}}else for(R=0;;){if(1<<R&p|0&&(B=R<<2,(r[I>>0]|0)==(r[_+B>>0]|0))&&(r[k>>0]|0)==(r[_+(B|1)>>0]|0)&&(r[F>>0]|0)==(r[_+(B|2)>>0]|0)){z=R;break n}if(R=R+1|0,(R|0)==(S|0)){X=w;break t}}while(!1);R=s[u+260+(z<<2)>>2]|0,B=u+196+(R<<2)|0,h[B>>2]=+h[B>>2]+(y?+((f[_+(w|3)>>0]|0)+1|0)*.00390625:1),s[u+260+(S<<2)>>2]=R;break e}while(!1);ie=+(f[k>>0]|0)/255,Y=+(f[F>>0]|0)/255,V=+((f[_+(X|3)>>0]|0)+1|0)*.00390625,w=s[u>>2]|0,h[u+4+(w*12|0)>>2]=+(f[I>>0]|0)/255,h[u+4+(w*12|0)+4>>2]=ie,h[u+4+(w*12|0)+8>>2]=Y,h[u+196+(s[u>>2]<<2)>>2]=y?V:1,s[u+260+(S<<2)>>2]=s[u>>2],s[u>>2]=(s[u>>2]|0)+1}while(!1);S=S+1|0}while((S|0)!=16);if((s[u>>2]|0)>0)te=0;else return;do S=u+196+(te<<2)|0,V=+W(+ +h[S>>2]),h[S>>2]=V,te=te+1|0;while((te|0)<(s[u>>2]|0))}function rt(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0;if(S=s[u+260>>2]|0,(S|0)==-1?E=3:E=r[_+S>>0]|0,r[p>>0]=E,E=s[u+264>>2]|0,(E|0)==-1?b=3:b=r[_+E>>0]|0,r[p+1>>0]=b,b=s[u+268>>2]|0,(b|0)==-1?y=3:y=r[_+b>>0]|0,r[p+2>>0]=y,y=s[u+272>>2]|0,(y|0)==-1?w=3:w=r[_+y>>0]|0,r[p+3>>0]=w,w=s[u+276>>2]|0,(w|0)==-1?I=3:I=r[_+w>>0]|0,r[p+4>>0]=I,I=s[u+280>>2]|0,(I|0)==-1?k=3:k=r[_+I>>0]|0,r[p+5>>0]=k,k=s[u+284>>2]|0,(k|0)==-1?F=3:F=r[_+k>>0]|0,r[p+6>>0]=F,F=s[u+288>>2]|0,(F|0)==-1?X=3:X=r[_+F>>0]|0,r[p+7>>0]=X,X=s[u+292>>2]|0,(X|0)==-1?R=3:R=r[_+X>>0]|0,r[p+8>>0]=R,R=s[u+296>>2]|0,(R|0)==-1?B=3:B=r[_+R>>0]|0,r[p+9>>0]=B,B=s[u+300>>2]|0,(B|0)==-1?z=3:z=r[_+B>>0]|0,r[p+10>>0]=z,z=s[u+304>>2]|0,(z|0)==-1?ie=3:ie=r[_+z>>0]|0,r[p+11>>0]=ie,ie=s[u+308>>2]|0,(ie|0)==-1?Y=3:Y=r[_+ie>>0]|0,r[p+12>>0]=Y,Y=s[u+312>>2]|0,(Y|0)==-1?V=3:V=r[_+Y>>0]|0,r[p+13>>0]=V,V=s[u+316>>2]|0,(V|0)==-1?te=3:te=r[_+V>>0]|0,r[p+14>>0]=te,te=s[u+320>>2]|0,(te|0)==-1){ne=3,Q=p+15|0,r[Q>>0]=ne;return}ne=r[_+te>>0]|0,Q=p+15|0,r[Q>>0]=ne}function ye(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0;if(E=(_|0)>0,E)for(b=0,y=0,w=0,I=0,k=0;;)if(F=+h[S+(b<<2)>>2],X=y+F,R=w+F*+h[p+(b*12|0)>>2],B=k+F*+h[p+(b*12|0)+4>>2],z=I+F*+h[p+(b*12|0)+8>>2],b=b+1|0,(b|0)==(_|0)){ie=X,Y=R,V=z,te=B;break}else y=X,w=R,I=z,k=B;else ie=0,Y=0,V=0,te=0;if(k=1/ie,ie=Y*k,Y=te*k,te=V*k,b=u+4|0,ne=u+8|0,Q=u+12|0,Se=u+16|0,Ue=u+20|0,s[u>>2]=0,s[u+4>>2]=0,s[u+8>>2]=0,s[u+12>>2]=0,s[u+16>>2]=0,s[u+20>>2]=0,E)ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0;else return;do k=+h[p+(ve*12|0)>>2]-ie,V=+h[p+(ve*12|0)+4>>2]-Y,I=+h[p+(ve*12|0)+8>>2]-te,w=+h[S+(ve<<2)>>2],y=V*w,B=I*w,Te=Te+k*(k*w),de=k*y+de,He=k*B+He,Ce=V*y+Ce,De=V*B+De,et=I*B+et,ve=ve+1|0;while((ve|0)!=(_|0));h[u>>2]=Te,h[b>>2]=de,h[ne>>2]=He,h[Q>>2]=Ce,h[Se>>2]=De,h[Ue>>2]=et}function qe(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0;if(p=+h[_>>2],S=+h[_+12>>2],E=p*S,b=+h[_+20>>2],y=+h[_+4>>2],w=+h[_+8>>2],I=+h[_+16>>2],k=S*b+(E+p*b)-y*y-w*w-I*I,F=p+S+b,X=F*.3333333432674408,R=k-F*X,B=F*(F*(F*-.07407407462596893))+F*(k*.3333333432674408)-(E*b+y*2*w*I-I*(p*I)-w*(S*w)-y*(b*y)),E=B*(B*.25),k=R*(R*(R*.03703703731298447))+E,k>11920928955078125e-23){h[u>>2]=1,h[u+4>>2]=1,h[u+8>>2]=1;return}if(k<-11920928955078125e-23){R=+Z(+ +W(+(E-k)),.3333333432674408),E=+q(+ +W(+-k),+(B*-.5))/3,k=+N(+E),F=X+R*2*k,z=+L(+E)*1.7320507764816284,E=X-R*(k+z),ie=X-R*(k-z),Y=+G(+E)>+G(+F),z=Y?E:F,Y=+G(+ie)>+G(+z),ut(u,_,Y?ie:z);return}if(B<0?V=-+Z(+(B*-.5),.3333333432674408):V=+Z(+(B*.5),.3333333432674408),B=X+V,z=X-V*2,!(+G(+B)>+G(+z))){ut(u,_,z);return}switch(z=p-B,p=S-B,S=b-B,B=+G(+z),b=+G(+y),_=b>B,V=_?b:B,B=+G(+w),Y=B>V,b=Y?B:V,V=+G(+p),te=V>b,B=te?V:b,b=+G(+I),ne=b>B,Q=+G(+S)>(ne?b:B),(Q?5:ne?4:te?3:Y?2:_&1)&7){case 1:case 0:{Se=0,Ue=z,ve=-y;break}case 2:{Se=-z,Ue=0,ve=w;break}case 4:case 3:{Se=p,Ue=-I,ve=0;break}default:Se=I,Ue=-S,ve=0}h[u>>2]=ve,h[u+4>>2]=Ue,h[u+8>>2]=Se}function ut(u,_,p){u=u|0,_=_|0,p=+p;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0;switch(S=T,T=T+32|0,E=S,b=+h[_>>2]-p,y=+h[_+4>>2],w=+h[_+8>>2],I=+h[_+12>>2]-p,k=+h[_+16>>2],F=+h[_+20>>2]-p,p=I*F-k*k,h[E>>2]=p,X=w*k-y*F,_=E+4|0,h[_>>2]=X,R=y*k-w*I,B=E+8|0,h[B>>2]=R,z=b*F-w*w,ie=E+12|0,h[ie>>2]=z,F=y*w-b*k,Y=E+16|0,h[Y>>2]=F,k=b*I-y*y,V=E+20|0,h[V>>2]=k,y=+G(+p),p=+G(+X),te=p>y,X=te?p:y,y=+G(+R),ne=y>X,R=ne?y:X,X=+G(+z),Q=X>R,z=Q?X:R,R=+G(+F),Se=R>z,Ue=+G(+k)>(Se?R:z),(Ue?5:Se?4:Q?3:ne?2:te&1)&7){case 0:{ve=_,Te=B,de=E;break}case 3:case 1:{ve=ie,Te=Y,de=_;break}default:ve=Y,Te=V,de=B}B=s[ve>>2]|0,ve=s[Te>>2]|0,s[u>>2]=s[de>>2],s[u+4>>2]=B,s[u+8>>2]=ve,T=S}function _t(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0;if(p=T,T=T+80|0,S=p,E=p+56|0,b=p+40|0,y=s[u+4>>2]|0,w=s[y>>2]|0,I=u+24|0,s[S>>2]=s[I>>2],s[S+4>>2]=s[I+4>>2],s[S+8>>2]=s[I+8>>2],k=u+36|0,F=S+12|0,s[F>>2]=s[k>>2],s[F+4>>2]=s[k+4>>2],s[F+8>>2]=s[k+8>>2],X=+h[I>>2]*.5+ +h[k>>2]*.5,R=+h[u+28>>2]*.5+ +h[u+40>>2]*.5,B=+h[u+32>>2]*.5+ +h[u+44>>2]*.5,h[S+24>>2]=X,h[S+28>>2]=R,h[S+32>>2]=B,(w|0)>0)for(z=+h[u+12>>2],ie=+h[u+16>>2],Y=+h[u+20>>2],V=+h[S>>2],te=+h[S+4>>2],ne=+h[S+8>>2],Q=+h[S+12>>2],Se=+h[S+16>>2],Ue=+h[S+20>>2],ve=0,S=0;;)if(Te=+h[y+4+(S*12|0)>>2],de=+h[y+4+(S*12|0)+4>>2],He=+h[y+4+(S*12|0)+8>>2],Ce=(Te-V)*z,De=(de-te)*ie,et=(He-ne)*Y,je=Ce*Ce+De*De+et*et,et=je<34028234663852886e22?je:34028234663852886e22,je=(Te-Q)*z,De=(de-Se)*ie,Ce=(He-Ue)*Y,be=je*je+De*De+Ce*Ce,F=be<et,Ce=F?be:et,et=(Te-X)*z,Te=(de-R)*ie,de=(He-B)*Y,He=et*et+Te*Te+de*de,ht=He<Ce,r[E+S>>0]=ht?2:F&1,de=ve+(ht?He:Ce),S=S+1|0,(S|0)==(w|0)){it=de;break}else ve=de;else it=0;if(w=u+48|0,!(it<+h[w>>2])){T=p;return}rt(y,E,b),_e(I,k,b,_),h[w>>2]=it,T=p}function Ye(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0;if(p=T,T=T+80|0,S=p,E=p+64|0,b=p+48|0,y=s[u+4>>2]|0,w=s[y>>2]|0,I=u+24|0,s[S>>2]=s[I>>2],s[S+4>>2]=s[I+4>>2],s[S+8>>2]=s[I+8>>2],k=u+36|0,F=S+12|0,s[F>>2]=s[k>>2],s[F+4>>2]=s[k+4>>2],s[F+8>>2]=s[k+8>>2],X=+h[I>>2],R=+h[u+28>>2],B=+h[u+32>>2],z=+h[k>>2],ie=+h[u+40>>2],Y=+h[u+44>>2],V=X*.6666666865348816+z*.3333333432674408,te=R*.6666666865348816+ie*.3333333432674408,ne=B*.6666666865348816+Y*.3333333432674408,h[S+24>>2]=V,h[S+28>>2]=te,h[S+32>>2]=ne,Q=X*.3333333432674408+z*.6666666865348816,z=R*.3333333432674408+ie*.6666666865348816,ie=B*.3333333432674408+Y*.6666666865348816,h[S+36>>2]=Q,h[S+40>>2]=z,h[S+44>>2]=ie,(w|0)>0)for(Y=+h[u+12>>2],B=+h[u+16>>2],R=+h[u+20>>2],X=+h[S>>2],Se=+h[S+4>>2],Ue=+h[S+8>>2],ve=+h[S+12>>2],Te=+h[S+16>>2],de=+h[S+20>>2],He=0,S=0;;)if(Ce=+h[y+4+(S*12|0)>>2],De=+h[y+4+(S*12|0)+4>>2],et=+h[y+4+(S*12|0)+8>>2],je=(Ce-X)*Y,be=(De-Se)*B,ht=(et-Ue)*R,it=je*je+be*be+ht*ht,ht=it<34028234663852886e22?it:34028234663852886e22,it=(Ce-ve)*Y,be=(De-Te)*B,je=(et-de)*R,bt=it*it+be*be+je*je,F=bt<ht,je=F?bt:ht,ht=(Ce-V)*Y,bt=(De-te)*B,be=(et-ne)*R,it=ht*ht+bt*bt+be*be,wt=it<je,be=wt?it:je,je=(Ce-Q)*Y,Ce=(De-z)*B,De=(et-ie)*R,et=je*je+Ce*Ce+De*De,Tt=et<be,r[E+S>>0]=Tt?3:wt?2:F&1,De=He+(Tt?et:be),S=S+1|0,(S|0)==(w|0)){It=De;break}else He=De;else It=0;if(w=u+48|0,!(It<+h[w>>2])){T=p;return}rt(y,E,b),Me(I,k,b,_),h[w>>2]=It,T=p}function Pt(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0,xe=0,ft=0,Dt=0,An=0,Dn=0,lt=0,Ge=0;if(S=T,T=T+48|0,E=S+16|0,b=S,Je(u,_,p),s[u>>2]=160,p=(s[u+8>>2]&32|0)==0,h[u+12>>2]=p?1:.2125999927520752,h[u+16>>2]=p?1:.7152000069618225,h[u+20>>2]=p?1:.0722000002861023,h[u+48>>2]=34028234663852886e22,p=s[u+4>>2]|0,_=s[p>>2]|0,ye(E,_,p+4|0,p+196|0),qe(b,E),(_|0)>0)if(E=s[p+4>>2]|0,y=s[p+8>>2]|0,w=s[p+12>>2]|0,I=(s[U>>2]=E,+h[U>>2]),k=+h[b>>2],F=(s[U>>2]=y,+h[U>>2]),X=+h[b+4>>2],R=(s[U>>2]=w,+h[U>>2]),B=+h[b+8>>2],z=I*k+F*X+R*B,(_|0)==1)ie=I,Y=I,V=F,te=R,ne=R,Q=F;else{for(F=z,b=1,R=z,Se=E,Ue=E,E=y,ve=w,Te=w,w=y;z=+h[p+4+(b*12|0)>>2],I=+h[p+4+(b*12|0)+4>>2],de=+h[p+4+(b*12|0)+8>>2],He=z*k+I*X+de*B,y=(h[U>>2]=z,s[U>>2]|0),Ce=(h[U>>2]=I,s[U>>2]|0),De=(h[U>>2]=de,s[U>>2]|0),He<F?(et=He,je=R,be=Se,ht=y,it=E,bt=ve,wt=De,Tt=Ce):He>R?(et=F,je=He,be=y,ht=Ue,it=Ce,bt=De,wt=Te,Tt=w):(et=F,je=R,be=Se,ht=Ue,it=E,bt=ve,wt=Te,Tt=w),b=b+1|0,!((b|0)>=(_|0));)F=et,R=je,Se=be,Ue=ht,E=it,ve=bt,Te=wt,w=Tt;je=(s[U>>2]=ht,+h[U>>2]),R=(s[U>>2]=Tt,+h[U>>2]),et=(s[U>>2]=wt,+h[U>>2]),F=(s[U>>2]=be,+h[U>>2]),B=(s[U>>2]=it,+h[U>>2]),ie=F,Y=je,V=B,te=(s[U>>2]=bt,+h[U>>2]),ne=et,Q=R}else ie=0,Y=0,V=0,te=0,ne=0,Q=0;if(R=Y>0?Y:0,Y=Q>0?Q:0,Q=ne>0?ne:0,ne=ie>0?ie:0,ie=V>0?V:0,V=te>0?te:0,te=(R<1?R:1)*31+.5,R=(Y<1?Y:1)*63+.5,Y=(Q<1?Q:1)*31+.5,te>0?It=+H(+te):It=+se(+te),R>0?$t=+H(+R):$t=+se(+R),Y>0?kt=+H(+Y):kt=+se(+Y),h[u+24>>2]=It*.032258063554763794,h[u+28>>2]=$t*.01587301678955555,h[u+32>>2]=kt*.032258063554763794,kt=(ne<1?ne:1)*31+.5,ne=(ie<1?ie:1)*63+.5,ie=(V<1?V:1)*31+.5,kt>0?Jt=+H(+kt):Jt=+se(+kt),ne>0?Qt=+H(+ne):Qt=+se(+ne),ie>0){xe=+H(+ie),ft=Jt*.032258063554763794,Dt=Qt*.01587301678955555,An=xe*.032258063554763794,Dn=u+36|0,h[Dn>>2]=ft,lt=u+40|0,h[lt>>2]=Dt,Ge=u+44|0,h[Ge>>2]=An,T=S;return}else{xe=+se(+ie),ft=Jt*.032258063554763794,Dt=Qt*.01587301678955555,An=xe*.032258063554763794,Dn=u+36|0,h[Dn>>2]=ft,lt=u+40|0,h[lt>>2]=Dt,Ge=u+44|0,h[Ge>>2]=An,T=S;return}}function Et(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0;if(p=T,T=T+16|0,S=p,K(u,196),E=u+44|0,b=u+48|0,(s[E>>2]|0)>=(s[b>>2]|0)){T=p;return}rt(s[u+4>>2]|0,u+40|0,S),_e(u+16|0,u+28|0,S,_),s[b>>2]=s[E>>2],T=p}function Kt(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0;if(p=T,T=T+16|0,S=p,K(u,184),E=u+44|0,b=u+48|0,(s[E>>2]|0)>=(s[b>>2]|0)){T=p;return}rt(s[u+4>>2]|0,u+40|0,S),Me(u+16|0,u+28|0,S,_),s[b>>2]=s[E>>2],T=p}function K(u,_){u=u|0,_=_|0;var p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0;p=u+44|0,s[p>>2]=2147483647,S=u+16|0,E=u+20|0,b=u+24|0,y=u+28|0,w=u+32|0,I=u+36|0,k=u+40|0,F=f[u+12>>0]|0,X=_+4|0,R=f[u+13>>0]|0,B=_+8|0,z=f[u+14>>0]|0,u=s[_>>2]|0,ie=f[u+(F*6|0)+2>>0]|0,Y=ee(ie,ie)|0,ie=s[X>>2]|0,V=f[ie+(R*6|0)+2>>0]|0,te=(ee(V,V)|0)+Y|0,Y=s[B>>2]|0,V=f[Y+(z*6|0)+2>>0]|0,ne=(ee(V,V)|0)+te|0,Q=+(f[ie+(R*6|0)>>0]|0)/63,Se=+(f[Y+(z*6|0)>>0]|0)/31,h[S>>2]=+(f[u+(F*6|0)>>0]|0)/31,h[E>>2]=Q,h[b>>2]=Se,Se=+(f[ie+(R*6|0)+1>>0]|0)/63,Q=+(f[Y+(z*6|0)+1>>0]|0)/31,h[y>>2]=+(f[u+(F*6|0)+1>>0]|0)/31,h[w>>2]=Se,h[I>>2]=Q,r[k>>0]=0,s[p>>2]=ne,u=s[_>>2]|0,_=f[u+(F*6|0)+5>>0]|0,Y=ee(_,_)|0,_=s[X>>2]|0,X=f[_+(R*6|0)+5>>0]|0,ie=(ee(X,X)|0)+Y|0,Y=s[B>>2]|0,B=f[Y+(z*6|0)+5>>0]|0,X=(ee(B,B)|0)+ie|0,!((X|0)>=(ne|0))&&(Q=+(f[_+(R*6|0)+3>>0]|0)/63,Se=+(f[Y+(z*6|0)+3>>0]|0)/31,h[S>>2]=+(f[u+(F*6|0)+3>>0]|0)/31,h[E>>2]=Q,h[b>>2]=Se,Se=+(f[_+(R*6|0)+4>>0]|0)/63,Q=+(f[Y+(z*6|0)+4>>0]|0)/31,h[y>>2]=+(f[u+(F*6|0)+4>>0]|0)/31,h[w>>2]=Se,h[I>>2]=Q,r[k>>0]=2,s[p>>2]=X)}function Be(u,_,p){u=u|0,_=_|0,p=p|0,Je(u,_,p),s[u>>2]=176,p=s[u+4>>2]|0,_=~~(+h[p+4>>2]*255+.5),r[u+12>>0]=(_|0)<0?0:((_|0)<255?_:255)&255,_=~~(+h[p+8>>2]*255+.5),r[u+13>>0]=(_|0)<0?0:((_|0)<255?_:255)&255,_=~~(+h[p+12>>2]*255+.5),r[u+14>>0]=(_|0)<0?0:((_|0)<255?_:255)&255,s[u+48>>2]=2147483647}function he(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0;E=T,T=T+800|0,b=E+464|0,y=E,w=S&7,I=(w|0)==4?4:(w|0)==2?2:1,w=(S&280|0)==16?16:8,k=w|S&128|((S&96|0)==64?64:32)|I,S=I&6|0?p+8|0:p,ct(b,u,_,k),F=s[b>>2]|0;do if((F|0)!=1)if((w&16|0)!=0|(F|0)==0){Pt(y,b,k),Ie(y,S);break}else{ae(y,b,k),Ie(y,S);break}else Be(y,b,k),Ie(y,S);while(!1);if(I&2|0){On(u,_,p),T=E;return}if(!(I&4)){T=E;return}Ct(u,_,p),T=E}function ge(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0;var b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0;if(b=T,T=T+64|0,y=b,w=E&7,I=(w|0)==4?4:(w|0)==2?2:1,w=((E&280|0)==16?16:8)|E&128|((E&96|0)==64?64:32)|I,E=(I<<3&8^8)+8|0,(p|0)<=0){T=b;return}if((_|0)>0)k=S,F=0;else{T=b;return}for(;;){S=0,I=k;do{for(X=S|1,R=(X|0)<(_|0),B=S|2,z=(B|0)<(_|0),ie=S|3,Y=(ie|0)<(_|0),V=0,te=0,ne=y;Q=V+F|0,Se=ee(Q,_)|0,Ue=V<<2,(Q|0)<(p|0)?(Q=u+(S+Se<<2)|0,ve=Q+1|0,r[ne>>0]=r[Q>>0]|0,Q=ve+1|0,r[ne+1>>0]=r[ve>>0]|0,r[ne+2>>0]=r[Q>>0]|0,r[ne+3>>0]=r[Q+1>>0]|0,Q=1<<Ue|te,R?(ve=u+(X+Se<<2)|0,Te=ve+1|0,r[ne+4>>0]=r[ve>>0]|0,ve=Te+1|0,r[ne+5>>0]=r[Te>>0]|0,r[ne+6>>0]=r[ve>>0]|0,r[ne+7>>0]=r[ve+1>>0]|0,de=1<<(Ue|1)|Q):de=Q,z?(Q=u+(B+Se<<2)|0,ve=Q+1|0,r[ne+8>>0]=r[Q>>0]|0,Q=ve+1|0,r[ne+9>>0]=r[ve>>0]|0,r[ne+10>>0]=r[Q>>0]|0,r[ne+11>>0]=r[Q+1>>0]|0,He=1<<(Ue|2)|de):He=de,Y?(Q=u+(ie+Se<<2)|0,Se=Q+1|0,r[ne+12>>0]=r[Q>>0]|0,Q=Se+1|0,r[ne+13>>0]=r[Se>>0]|0,r[ne+14>>0]=r[Q>>0]|0,r[ne+15>>0]=r[Q+1>>0]|0,Ce=1<<(Ue|3)|He):Ce=He):Ce=te,V=V+1|0,(V|0)!=4;)te=Ce,ne=ne+16|0;he(y,Ce,I,w),I=I+E|0,S=S+4|0}while((S|0)<(_|0));if(F=F+4|0,(F|0)>=(p|0))break;k=I}T=b}function ze(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0;var b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0;if(b=T,T=T+64|0,y=b,w=E&7,E=(w|0)==4,I=E?4:(w|0)==2?2:1,w=(I<<3&8^8)+8|0,(p|0)<=0){T=b;return}for(k=(_|0)>0,F=E?4:(I|0)==2?2:1,I=(F&6|0)==0,E=(F&1|0)!=0,X=(F&2|0)==0,R=(F&4|0)==0,F=S,S=0;;){e:do if(k){if(X)B=0,z=F;else for(ie=0,Y=F;;){for(me(y,I?Y:Y+8|0,E),Lt(y,Y),V=ie|1,te=(V|0)<(_|0),ne=ie|2,Q=(ne|0)<(_|0),Se=ie|3,Ue=(Se|0)<(_|0),ve=0,Te=y;de=ve+S|0,He=ee(de,_)|0,(de|0)<(p|0)&&(de=u+(ie+He<<2)|0,Ce=de+1|0,r[de>>0]=r[Te>>0]|0,de=Ce+1|0,r[Ce>>0]=r[Te+1>>0]|0,r[de>>0]=r[Te+2>>0]|0,r[de+1>>0]=r[Te+3>>0]|0,te&&(de=u+(V+He<<2)|0,Ce=de+1|0,r[de>>0]=r[Te+4>>0]|0,de=Ce+1|0,r[Ce>>0]=r[Te+5>>0]|0,r[de>>0]=r[Te+6>>0]|0,r[de+1>>0]=r[Te+7>>0]|0),Q&&(de=u+(ne+He<<2)|0,Ce=de+1|0,r[de>>0]=r[Te+8>>0]|0,de=Ce+1|0,r[Ce>>0]=r[Te+9>>0]|0,r[de>>0]=r[Te+10>>0]|0,r[de+1>>0]=r[Te+11>>0]|0),Ue&&(de=u+(Se+He<<2)|0,He=de+1|0,r[de>>0]=r[Te+12>>0]|0,de=He+1|0,r[He>>0]=r[Te+13>>0]|0,r[de>>0]=r[Te+14>>0]|0,r[de+1>>0]=r[Te+15>>0]|0)),ve=ve+1|0,(ve|0)!=4;)Te=Te+16|0;if(Te=Y+w|0,ie=ie+4|0,(ie|0)>=(_|0)){De=Te;break e}else Y=Te}for(;;){for(me(y,I?z:z+8|0,E),R||Zt(y,z),Y=B|1,ie=(Y|0)<(_|0),Te=B|2,ve=(Te|0)<(_|0),Se=B|3,Ue=(Se|0)<(_|0),ne=0,Q=y;V=ne+S|0,te=ee(V,_)|0,(V|0)<(p|0)&&(V=u+(B+te<<2)|0,de=V+1|0,r[V>>0]=r[Q>>0]|0,V=de+1|0,r[de>>0]=r[Q+1>>0]|0,r[V>>0]=r[Q+2>>0]|0,r[V+1>>0]=r[Q+3>>0]|0,ie&&(V=u+(Y+te<<2)|0,de=V+1|0,r[V>>0]=r[Q+4>>0]|0,V=de+1|0,r[de>>0]=r[Q+5>>0]|0,r[V>>0]=r[Q+6>>0]|0,r[V+1>>0]=r[Q+7>>0]|0),ve&&(V=u+(Te+te<<2)|0,de=V+1|0,r[V>>0]=r[Q+8>>0]|0,V=de+1|0,r[de>>0]=r[Q+9>>0]|0,r[V>>0]=r[Q+10>>0]|0,r[V+1>>0]=r[Q+11>>0]|0),Ue&&(V=u+(Se+te<<2)|0,te=V+1|0,r[V>>0]=r[Q+12>>0]|0,V=te+1|0,r[te>>0]=r[Q+13>>0]|0,r[V>>0]=r[Q+14>>0]|0,r[V+1>>0]=r[Q+15>>0]|0)),ne=ne+1|0,(ne|0)!=4;)Q=Q+16|0;if(Q=z+w|0,B=B+4|0,(B|0)>=(_|0)){De=Q;break}else z=Q}}else De=F;while(!1);if(S=S+4|0,(S|0)>=(p|0))break;F=De}T=b}function Ve(u,_,p){u=u|0,_=_|0,p=p|0;var S=0;return S=p&7,ee(ee((_+3|0)/4|0,(u+3|0)/4|0)|0,(((S|0)!=2&(S|0)!=4&1)<<3^8)+8|0)|0}function xt(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,ge(u,_,p,S,E)}function rn(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,ze(u,_,p,S,E)}function En(u){u=u|0;var _=0,p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0,et=0,je=0,be=0,ht=0,it=0,bt=0,wt=0,Tt=0,It=0,$t=0,kt=0,Jt=0,Qt=0,xe=0,ft=0,Dt=0,An=0,Dn=0,lt=0,Ge=0,Mt=0,dt=0,Bt=0,pt=0,We=0,Xe=0,Vt=0,Nt=0,St=0,yt=0,Fe=0,Hn=0,Wn=0,ti=0,_n=0,Nn=0,Xn=0,ni=0,on=0,qn=0,Mn=0,Ln=0,ii=0,bn=0,Yn=0,Vn=0,Rn=0,Kn=0;_=T,T=T+16|0,p=_;do if(u>>>0<245){if(S=u>>>0<11?16:u+11&-8,E=S>>>3,b=s[1754]|0,y=b>>>E,y&3|0)return w=(y&1^1)+E|0,I=7056+(w<<1<<2)|0,k=I+8|0,F=s[k>>2]|0,X=F+8|0,R=s[X>>2]|0,(I|0)==(R|0)?s[1754]=b&~(1<<w):(s[R+12>>2]=I,s[k>>2]=R),R=w<<3,s[F+4>>2]=R|3,w=F+R+4|0,s[w>>2]=s[w>>2]|1,B=X,T=_,B|0;if(X=s[1756]|0,S>>>0>X>>>0){if(y|0)return w=2<<E,R=y<<E&(w|0-w),w=(R&0-R)+-1|0,R=w>>>12&16,E=w>>>R,w=E>>>5&8,y=E>>>w,E=y>>>2&4,F=y>>>E,y=F>>>1&2,k=F>>>y,F=k>>>1&1,I=(w|R|E|y|F)+(k>>>F)|0,F=7056+(I<<1<<2)|0,k=F+8|0,y=s[k>>2]|0,E=y+8|0,R=s[E>>2]|0,(F|0)==(R|0)?(w=b&~(1<<I),s[1754]=w,z=w):(s[R+12>>2]=F,s[k>>2]=R,z=b),R=(I<<3)-S|0,s[y+4>>2]=S|3,I=y+S|0,s[I+4>>2]=R|1,s[I+R>>2]=R,X|0&&(y=s[1759]|0,k=X>>>3,F=7056+(k<<1<<2)|0,w=1<<k,z&w?(w=F+8|0,ie=s[w>>2]|0,Y=w):(s[1754]=z|w,ie=F,Y=F+8|0),s[Y>>2]=y,s[ie+12>>2]=y,s[y+8>>2]=ie,s[y+12>>2]=F),s[1756]=R,s[1759]=I,B=E,T=_,B|0;if(E=s[1755]|0,E){if(I=(E&0-E)+-1|0,R=I>>>12&16,F=I>>>R,I=F>>>5&8,y=F>>>I,F=y>>>2&4,w=y>>>F,y=w>>>1&2,k=w>>>y,w=k>>>1&1,V=s[7320+((I|R|F|y|w)+(k>>>w)<<2)>>2]|0,w=(s[V+4>>2]&-8)-S|0,k=s[V+16+(((s[V+16>>2]|0)==0&1)<<2)>>2]|0,!k)te=V,ne=w;else for(y=V,V=w,w=k;;)if(k=(s[w+4>>2]&-8)-S|0,F=k>>>0<V>>>0,R=F?k:V,k=F?w:y,w=s[w+16+(((s[w+16>>2]|0)==0&1)<<2)>>2]|0,w)y=k,V=R;else{te=k,ne=R;break}if(V=te+S|0,te>>>0<V>>>0){y=s[te+24>>2]|0,w=s[te+12>>2]|0;do if((w|0)==(te|0)){if(R=te+20|0,k=s[R>>2]|0,k)Se=k,Ue=R;else if(F=te+16|0,I=s[F>>2]|0,I)Se=I,Ue=F;else{Q=0;break}for(;;){if(R=Se+20|0,k=s[R>>2]|0,k|0){Se=k,Ue=R;continue}if(R=Se+16|0,k=s[R>>2]|0,k)Se=k,Ue=R;else break}s[Ue>>2]=0,Q=Se}else R=s[te+8>>2]|0,s[R+12>>2]=w,s[w+8>>2]=R,Q=w;while(!1);do if(y|0){if(w=s[te+28>>2]|0,R=7320+(w<<2)|0,(te|0)==(s[R>>2]|0)){if(s[R>>2]=Q,!Q){s[1755]=E&~(1<<w);break}}else if(s[y+16+(((s[y+16>>2]|0)!=(te|0)&1)<<2)>>2]=Q,!Q)break;s[Q+24>>2]=y,w=s[te+16>>2]|0,w|0&&(s[Q+16>>2]=w,s[w+24>>2]=Q),w=s[te+20>>2]|0,w|0&&(s[Q+20>>2]=w,s[w+24>>2]=Q)}while(!1);return ne>>>0<16?(y=ne+S|0,s[te+4>>2]=y|3,E=te+y+4|0,s[E>>2]=s[E>>2]|1):(s[te+4>>2]=S|3,s[V+4>>2]=ne|1,s[V+ne>>2]=ne,X|0&&(E=s[1759]|0,y=X>>>3,w=7056+(y<<1<<2)|0,R=1<<y,b&R?(R=w+8|0,ve=s[R>>2]|0,Te=R):(s[1754]=b|R,ve=w,Te=w+8|0),s[Te>>2]=E,s[ve+12>>2]=E,s[E+8>>2]=ve,s[E+12>>2]=w),s[1756]=ne,s[1759]=V),B=te+8|0,T=_,B|0}else de=S}else de=S}else de=S}else if(u>>>0<=4294967231)if(w=u+11|0,E=w&-8,R=s[1755]|0,R){y=0-E|0,k=w>>>8,k?E>>>0>16777215?He=31:(w=(k+1048320|0)>>>16&8,F=k<<w,k=(F+520192|0)>>>16&4,I=F<<k,F=(I+245760|0)>>>16&2,Ce=14-(k|w|F)+(I<<F>>>15)|0,He=E>>>(Ce+7|0)&1|Ce<<1):He=0,Ce=s[7320+(He<<2)>>2]|0;e:do if(!Ce)De=0,et=0,je=y,be=57;else for(F=0,I=y,w=Ce,k=E<<((He|0)==31?0:25-(He>>>1)|0),ht=0;;){if(it=(s[w+4>>2]&-8)-E|0,it>>>0<I>>>0)if(it)It=w,$t=it;else{bt=w,wt=0,Tt=w,be=61;break e}else It=F,$t=I;if(it=s[w+20>>2]|0,w=s[w+16+(k>>>31<<2)>>2]|0,kt=(it|0)==0|(it|0)==(w|0)?ht:it,it=(w|0)==0,it){De=kt,et=It,je=$t,be=57;break}else F=It,I=$t,k=k<<((it^1)&1),ht=kt}while(!1);if((be|0)==57){if((De|0)==0&(et|0)==0){if(Ce=2<<He,y=R&(Ce|0-Ce),!y){de=E;break}Ce=(y&0-y)+-1|0,y=Ce>>>12&16,S=Ce>>>y,Ce=S>>>5&8,V=S>>>Ce,S=V>>>2&4,b=V>>>S,V=b>>>1&2,X=b>>>V,b=X>>>1&1,Jt=0,Qt=s[7320+((Ce|y|S|V|b)+(X>>>b)<<2)>>2]|0}else Jt=et,Qt=De;Qt?(bt=Jt,wt=je,Tt=Qt,be=61):(xe=Jt,ft=je)}if((be|0)==61)for(;;)if(be=0,b=(s[Tt+4>>2]&-8)-E|0,X=b>>>0<wt>>>0,V=X?b:wt,b=X?Tt:bt,Tt=s[Tt+16+(((s[Tt+16>>2]|0)==0&1)<<2)>>2]|0,Tt)bt=b,wt=V,be=61;else{xe=b,ft=V;break}if(xe|0&&ft>>>0<((s[1756]|0)-E|0)>>>0){if(V=xe+E|0,xe>>>0>=V>>>0)return B=0,T=_,B|0;b=s[xe+24>>2]|0,X=s[xe+12>>2]|0;do if((X|0)==(xe|0)){if(S=xe+20|0,y=s[S>>2]|0,y)An=y,Dn=S;else if(Ce=xe+16|0,ht=s[Ce>>2]|0,ht)An=ht,Dn=Ce;else{Dt=0;break}for(;;){if(S=An+20|0,y=s[S>>2]|0,y|0){An=y,Dn=S;continue}if(S=An+16|0,y=s[S>>2]|0,y)An=y,Dn=S;else break}s[Dn>>2]=0,Dt=An}else S=s[xe+8>>2]|0,s[S+12>>2]=X,s[X+8>>2]=S,Dt=X;while(!1);do if(b){if(X=s[xe+28>>2]|0,S=7320+(X<<2)|0,(xe|0)==(s[S>>2]|0)){if(s[S>>2]=Dt,!Dt){S=R&~(1<<X),s[1755]=S,lt=S;break}}else if(s[b+16+(((s[b+16>>2]|0)!=(xe|0)&1)<<2)>>2]=Dt,!Dt){lt=R;break}s[Dt+24>>2]=b,S=s[xe+16>>2]|0,S|0&&(s[Dt+16>>2]=S,s[S+24>>2]=Dt),S=s[xe+20>>2]|0,S&&(s[Dt+20>>2]=S,s[S+24>>2]=Dt),lt=R}else lt=R;while(!1);do if(ft>>>0>=16){if(s[xe+4>>2]=E|3,s[V+4>>2]=ft|1,s[V+ft>>2]=ft,R=ft>>>3,ft>>>0<256){b=7056+(R<<1<<2)|0,S=s[1754]|0,X=1<<R,S&X?(X=b+8|0,Ge=s[X>>2]|0,Mt=X):(s[1754]=S|X,Ge=b,Mt=b+8|0),s[Mt>>2]=V,s[Ge+12>>2]=V,s[V+8>>2]=Ge,s[V+12>>2]=b;break}if(b=ft>>>8,b?ft>>>0>16777215?dt=31:(X=(b+1048320|0)>>>16&8,S=b<<X,b=(S+520192|0)>>>16&4,R=S<<b,S=(R+245760|0)>>>16&2,y=14-(b|X|S)+(R<<S>>>15)|0,dt=ft>>>(y+7|0)&1|y<<1):dt=0,y=7320+(dt<<2)|0,s[V+28>>2]=dt,S=V+16|0,s[S+4>>2]=0,s[S>>2]=0,S=1<<dt,!(lt&S)){s[1755]=lt|S,s[y>>2]=V,s[V+24>>2]=y,s[V+12>>2]=V,s[V+8>>2]=V;break}for(S=ft<<((dt|0)==31?0:25-(dt>>>1)|0),R=s[y>>2]|0;;){if((s[R+4>>2]&-8|0)==(ft|0)){be=97;break}if(Bt=R+16+(S>>>31<<2)|0,y=s[Bt>>2]|0,y)S=S<<1,R=y;else{be=96;break}}if((be|0)==96){s[Bt>>2]=V,s[V+24>>2]=R,s[V+12>>2]=V,s[V+8>>2]=V;break}else if((be|0)==97){S=R+8|0,y=s[S>>2]|0,s[y+12>>2]=V,s[S>>2]=V,s[V+8>>2]=y,s[V+12>>2]=R,s[V+24>>2]=0;break}}else y=ft+E|0,s[xe+4>>2]=y|3,S=xe+y+4|0,s[S>>2]=s[S>>2]|1;while(!1);return B=xe+8|0,T=_,B|0}else de=E}else de=E;else de=-1;while(!1);if(xe=s[1756]|0,xe>>>0>=de>>>0)return ft=xe-de|0,Bt=s[1759]|0,ft>>>0>15?(dt=Bt+de|0,s[1759]=dt,s[1756]=ft,s[dt+4>>2]=ft|1,s[dt+ft>>2]=ft,s[Bt+4>>2]=de|3):(s[1756]=0,s[1759]=0,s[Bt+4>>2]=xe|3,ft=Bt+xe+4|0,s[ft>>2]=s[ft>>2]|1),B=Bt+8|0,T=_,B|0;if(Bt=s[1757]|0,Bt>>>0>de>>>0)return ft=Bt-de|0,s[1757]=ft,xe=s[1760]|0,dt=xe+de|0,s[1760]=dt,s[dt+4>>2]=ft|1,s[xe+4>>2]=de|3,B=xe+8|0,T=_,B|0;if(s[1872]|0?pt=s[1874]|0:(s[1874]=4096,s[1873]=4096,s[1875]=-1,s[1876]=-1,s[1877]=0,s[1865]=0,xe=p&-16^1431655768,s[p>>2]=xe,s[1872]=xe,pt=4096),xe=de+48|0,p=de+47|0,ft=pt+p|0,dt=0-pt|0,pt=ft&dt,pt>>>0<=de>>>0||(lt=s[1864]|0,lt|0&&(Ge=s[1862]|0,Mt=Ge+pt|0,Mt>>>0<=Ge>>>0|Mt>>>0>lt>>>0)))return B=0,T=_,B|0;e:do if(s[1865]&4)Fe=0,be=133;else{lt=s[1760]|0;t:do if(lt){for(Mt=7464;Ge=s[Mt>>2]|0,!(Ge>>>0<=lt>>>0&&(We=Mt+4|0,(Ge+(s[We>>2]|0)|0)>>>0>lt>>>0));)if(Ge=s[Mt+8>>2]|0,Ge)Mt=Ge;else{be=118;break t}if(R=ft-Bt&dt,R>>>0<2147483647)if(Ge=Xt(R|0)|0,(Ge|0)==((s[Mt>>2]|0)+(s[We>>2]|0)|0))if((Ge|0)==-1)Xe=R;else{Vt=R,Nt=Ge,be=135;break e}else St=Ge,yt=R,be=126;else Xe=0}else be=118;while(!1);do if((be|0)==118)if(lt=Xt(0)|0,(lt|0)!=-1&&(E=lt,R=s[1873]|0,Ge=R+-1|0,Dt=(Ge&E|0?(Ge+E&0-R)-E|0:0)+pt|0,E=s[1862]|0,R=Dt+E|0,Dt>>>0>de>>>0&Dt>>>0<2147483647)){if(Ge=s[1864]|0,Ge|0&&R>>>0<=E>>>0|R>>>0>Ge>>>0){Xe=0;break}if(Ge=Xt(Dt|0)|0,(Ge|0)==(lt|0)){Vt=Dt,Nt=lt,be=135;break e}else St=Ge,yt=Dt,be=126}else Xe=0;while(!1);do if((be|0)==126){if(Dt=0-yt|0,!(xe>>>0>yt>>>0&(yt>>>0<2147483647&(St|0)!=-1)))if((St|0)==-1){Xe=0;break}else{Vt=yt,Nt=St,be=135;break e}if(Ge=s[1874]|0,lt=p-yt+Ge&0-Ge,lt>>>0>=2147483647){Vt=yt,Nt=St,be=135;break e}if((Xt(lt|0)|0)==-1){Xt(Dt|0)|0,Xe=0;break}else{Vt=lt+yt|0,Nt=St,be=135;break e}}while(!1);s[1865]=s[1865]|4,Fe=Xe,be=133}while(!1);if((be|0)==133&&pt>>>0<2147483647&&(Xe=Xt(pt|0)|0,pt=Xt(0)|0,St=pt-Xe|0,yt=St>>>0>(de+40|0)>>>0,!((Xe|0)==-1|yt^1|Xe>>>0<pt>>>0&((Xe|0)!=-1&(pt|0)!=-1)^1))&&(Vt=yt?St:Fe,Nt=Xe,be=135),(be|0)==135){Xe=(s[1862]|0)+Vt|0,s[1862]=Xe,Xe>>>0>(s[1863]|0)>>>0&&(s[1863]=Xe),Xe=s[1760]|0;do if(Xe){for(Fe=7464;;){if(Hn=s[Fe>>2]|0,Wn=Fe+4|0,ti=s[Wn>>2]|0,(Nt|0)==(Hn+ti|0)){be=145;break}if(St=s[Fe+8>>2]|0,St)Fe=St;else break}if((be|0)==145&&!(s[Fe+12>>2]&8|0)&&Xe>>>0<Nt>>>0&Xe>>>0>=Hn>>>0){s[Wn>>2]=ti+Vt,St=Xe+8|0,yt=St&7|0?0-St&7:0,St=Xe+yt|0,pt=(s[1757]|0)+(Vt-yt)|0,s[1760]=St,s[1757]=pt,s[St+4>>2]=pt|1,s[St+pt+4>>2]=40,s[1761]=s[1876];break}for(Nt>>>0<(s[1758]|0)>>>0&&(s[1758]=Nt),pt=Nt+Vt|0,St=7464;;){if((s[St>>2]|0)==(pt|0)){be=153;break}if(yt=s[St+8>>2]|0,yt)St=yt;else break}if((be|0)==153&&!(s[St+12>>2]&8|0)){s[St>>2]=Nt,Fe=St+4|0,s[Fe>>2]=(s[Fe>>2]|0)+Vt,Fe=Nt+8|0,yt=Nt+(Fe&7|0?0-Fe&7:0)|0,Fe=pt+8|0,p=pt+(Fe&7|0?0-Fe&7:0)|0,Fe=yt+de|0,xe=p-yt-de|0,s[yt+4>>2]=de|3;do if((p|0)!=(Xe|0)){if((p|0)==(s[1759]|0)){We=(s[1756]|0)+xe|0,s[1756]=We,s[1759]=Fe,s[Fe+4>>2]=We|1,s[Fe+We>>2]=We;break}if(We=s[p+4>>2]|0,(We&3|0)==1){dt=We&-8,Bt=We>>>3;e:do if(We>>>0<256)if(ft=s[p+8>>2]|0,lt=s[p+12>>2]|0,(lt|0)==(ft|0)){s[1754]=s[1754]&~(1<<Bt);break}else{s[ft+12>>2]=lt,s[lt+8>>2]=ft;break}else{ft=s[p+24>>2]|0,lt=s[p+12>>2]|0;do if((lt|0)==(p|0)){if(Dt=p+16|0,Ge=Dt+4|0,R=s[Ge>>2]|0,R)Nn=R,Xn=Ge;else if(E=s[Dt>>2]|0,E)Nn=E,Xn=Dt;else{_n=0;break}for(;;){if(Ge=Nn+20|0,R=s[Ge>>2]|0,R|0){Nn=R,Xn=Ge;continue}if(Ge=Nn+16|0,R=s[Ge>>2]|0,R)Nn=R,Xn=Ge;else break}s[Xn>>2]=0,_n=Nn}else Ge=s[p+8>>2]|0,s[Ge+12>>2]=lt,s[lt+8>>2]=Ge,_n=lt;while(!1);if(!ft)break;lt=s[p+28>>2]|0,Ge=7320+(lt<<2)|0;do if((p|0)!=(s[Ge>>2]|0)){if(s[ft+16+(((s[ft+16>>2]|0)!=(p|0)&1)<<2)>>2]=_n,!_n)break e}else{if(s[Ge>>2]=_n,_n|0)break;s[1755]=s[1755]&~(1<<lt);break e}while(!1);if(s[_n+24>>2]=ft,lt=p+16|0,Ge=s[lt>>2]|0,Ge|0&&(s[_n+16>>2]=Ge,s[Ge+24>>2]=_n),Ge=s[lt+4>>2]|0,!Ge)break;s[_n+20>>2]=Ge,s[Ge+24>>2]=_n}while(!1);ni=p+dt|0,on=dt+xe|0}else ni=p,on=xe;if(Bt=ni+4|0,s[Bt>>2]=s[Bt>>2]&-2,s[Fe+4>>2]=on|1,s[Fe+on>>2]=on,Bt=on>>>3,on>>>0<256){We=7056+(Bt<<1<<2)|0,Mt=s[1754]|0,Ge=1<<Bt,Mt&Ge?(Ge=We+8|0,qn=s[Ge>>2]|0,Mn=Ge):(s[1754]=Mt|Ge,qn=We,Mn=We+8|0),s[Mn>>2]=Fe,s[qn+12>>2]=Fe,s[Fe+8>>2]=qn,s[Fe+12>>2]=We;break}We=on>>>8;do if(!We)Ln=0;else{if(on>>>0>16777215){Ln=31;break}Ge=(We+1048320|0)>>>16&8,Mt=We<<Ge,Bt=(Mt+520192|0)>>>16&4,lt=Mt<<Bt,Mt=(lt+245760|0)>>>16&2,R=14-(Bt|Ge|Mt)+(lt<<Mt>>>15)|0,Ln=on>>>(R+7|0)&1|R<<1}while(!1);if(We=7320+(Ln<<2)|0,s[Fe+28>>2]=Ln,dt=Fe+16|0,s[dt+4>>2]=0,s[dt>>2]=0,dt=s[1755]|0,R=1<<Ln,!(dt&R)){s[1755]=dt|R,s[We>>2]=Fe,s[Fe+24>>2]=We,s[Fe+12>>2]=Fe,s[Fe+8>>2]=Fe;break}for(R=on<<((Ln|0)==31?0:25-(Ln>>>1)|0),dt=s[We>>2]|0;;){if((s[dt+4>>2]&-8|0)==(on|0)){be=194;break}if(ii=dt+16+(R>>>31<<2)|0,We=s[ii>>2]|0,We)R=R<<1,dt=We;else{be=193;break}}if((be|0)==193){s[ii>>2]=Fe,s[Fe+24>>2]=dt,s[Fe+12>>2]=Fe,s[Fe+8>>2]=Fe;break}else if((be|0)==194){R=dt+8|0,We=s[R>>2]|0,s[We+12>>2]=Fe,s[R>>2]=Fe,s[Fe+8>>2]=We,s[Fe+12>>2]=dt,s[Fe+24>>2]=0;break}}else We=(s[1757]|0)+xe|0,s[1757]=We,s[1760]=Fe,s[Fe+4>>2]=We|1;while(!1);return B=yt+8|0,T=_,B|0}for(Fe=7464;xe=s[Fe>>2]|0,!(xe>>>0<=Xe>>>0&&(bn=xe+(s[Fe+4>>2]|0)|0,bn>>>0>Xe>>>0));)Fe=s[Fe+8>>2]|0;Fe=bn+-47|0,yt=Fe+8|0,xe=Fe+(yt&7|0?0-yt&7:0)|0,yt=Xe+16|0,Fe=xe>>>0<yt>>>0?Xe:xe,xe=Fe+8|0,p=Nt+8|0,pt=p&7|0?0-p&7:0,p=Nt+pt|0,St=Vt+-40-pt|0,s[1760]=p,s[1757]=St,s[p+4>>2]=St|1,s[p+St+4>>2]=40,s[1761]=s[1876],St=Fe+4|0,s[St>>2]=27,s[xe>>2]=s[1866],s[xe+4>>2]=s[1867],s[xe+8>>2]=s[1868],s[xe+12>>2]=s[1869],s[1866]=Nt,s[1867]=Vt,s[1869]=0,s[1868]=xe,xe=Fe+24|0;do p=xe,xe=xe+4|0,s[xe>>2]=7;while((p+8|0)>>>0<bn>>>0);if((Fe|0)!=(Xe|0)){if(xe=Fe-Xe|0,s[St>>2]=s[St>>2]&-2,s[Xe+4>>2]=xe|1,s[Fe>>2]=xe,p=xe>>>3,xe>>>0<256){pt=7056+(p<<1<<2)|0,We=s[1754]|0,R=1<<p,We&R?(R=pt+8|0,Yn=s[R>>2]|0,Vn=R):(s[1754]=We|R,Yn=pt,Vn=pt+8|0),s[Vn>>2]=Xe,s[Yn+12>>2]=Xe,s[Xe+8>>2]=Yn,s[Xe+12>>2]=pt;break}if(pt=xe>>>8,pt?xe>>>0>16777215?Rn=31:(R=(pt+1048320|0)>>>16&8,We=pt<<R,pt=(We+520192|0)>>>16&4,p=We<<pt,We=(p+245760|0)>>>16&2,Mt=14-(pt|R|We)+(p<<We>>>15)|0,Rn=xe>>>(Mt+7|0)&1|Mt<<1):Rn=0,Mt=7320+(Rn<<2)|0,s[Xe+28>>2]=Rn,s[Xe+20>>2]=0,s[yt>>2]=0,We=s[1755]|0,p=1<<Rn,!(We&p)){s[1755]=We|p,s[Mt>>2]=Xe,s[Xe+24>>2]=Mt,s[Xe+12>>2]=Xe,s[Xe+8>>2]=Xe;break}for(p=xe<<((Rn|0)==31?0:25-(Rn>>>1)|0),We=s[Mt>>2]|0;;){if((s[We+4>>2]&-8|0)==(xe|0)){be=216;break}if(Kn=We+16+(p>>>31<<2)|0,Mt=s[Kn>>2]|0,Mt)p=p<<1,We=Mt;else{be=215;break}}if((be|0)==215){s[Kn>>2]=Xe,s[Xe+24>>2]=We,s[Xe+12>>2]=Xe,s[Xe+8>>2]=Xe;break}else if((be|0)==216){p=We+8|0,xe=s[p>>2]|0,s[xe+12>>2]=Xe,s[p>>2]=Xe,s[Xe+8>>2]=xe,s[Xe+12>>2]=We,s[Xe+24>>2]=0;break}}}else{xe=s[1758]|0,(xe|0)==0|Nt>>>0<xe>>>0&&(s[1758]=Nt),s[1866]=Nt,s[1867]=Vt,s[1869]=0,s[1763]=s[1872],s[1762]=-1,xe=0;do p=7056+(xe<<1<<2)|0,s[p+12>>2]=p,s[p+8>>2]=p,xe=xe+1|0;while((xe|0)!=32);xe=Nt+8|0,We=xe&7|0?0-xe&7:0,xe=Nt+We|0,p=Vt+-40-We|0,s[1760]=xe,s[1757]=p,s[xe+4>>2]=p|1,s[xe+p+4>>2]=40,s[1761]=s[1876]}while(!1);if(Vt=s[1757]|0,Vt>>>0>de>>>0)return Nt=Vt-de|0,s[1757]=Nt,Vt=s[1760]|0,Xe=Vt+de|0,s[1760]=Xe,s[Xe+4>>2]=Nt|1,s[Vt+4>>2]=de|3,B=Vt+8|0,T=_,B|0}return Vt=ei()|0,s[Vt>>2]=12,B=0,T=_,B|0}function zt(u){u=u|0;var _=0,p=0,S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0,Se=0,Ue=0,ve=0,Te=0,de=0,He=0,Ce=0,De=0;if(u){_=u+-8|0,p=s[1758]|0,S=s[u+-4>>2]|0,u=S&-8,E=_+u|0;do if(S&1)F=_,X=u,R=_;else{if(b=s[_>>2]|0,!(S&3)||(y=_+(0-b)|0,w=b+u|0,y>>>0<p>>>0))return;if((y|0)==(s[1759]|0)){if(I=E+4|0,k=s[I>>2]|0,(k&3|0)!=3){F=y,X=w,R=y;break}s[1756]=w,s[I>>2]=k&-2,s[y+4>>2]=w|1,s[y+w>>2]=w;return}if(k=b>>>3,b>>>0<256)if(b=s[y+8>>2]|0,I=s[y+12>>2]|0,(I|0)==(b|0)){s[1754]=s[1754]&~(1<<k),F=y,X=w,R=y;break}else{s[b+12>>2]=I,s[I+8>>2]=b,F=y,X=w,R=y;break}b=s[y+24>>2]|0,I=s[y+12>>2]|0;do if((I|0)==(y|0)){if(k=y+16|0,B=k+4|0,z=s[B>>2]|0,z)V=z,te=B;else if(ie=s[k>>2]|0,ie)V=ie,te=k;else{Y=0;break}for(;;){if(B=V+20|0,z=s[B>>2]|0,z|0){V=z,te=B;continue}if(B=V+16|0,z=s[B>>2]|0,z)V=z,te=B;else break}s[te>>2]=0,Y=V}else B=s[y+8>>2]|0,s[B+12>>2]=I,s[I+8>>2]=B,Y=I;while(!1);if(b){if(I=s[y+28>>2]|0,B=7320+(I<<2)|0,(y|0)==(s[B>>2]|0)){if(s[B>>2]=Y,!Y){s[1755]=s[1755]&~(1<<I),F=y,X=w,R=y;break}}else if(s[b+16+(((s[b+16>>2]|0)!=(y|0)&1)<<2)>>2]=Y,!Y){F=y,X=w,R=y;break}s[Y+24>>2]=b,I=y+16|0,B=s[I>>2]|0,B|0&&(s[Y+16>>2]=B,s[B+24>>2]=Y),B=s[I+4>>2]|0,B?(s[Y+20>>2]=B,s[B+24>>2]=Y,F=y,X=w,R=y):(F=y,X=w,R=y)}else F=y,X=w,R=y}while(!1);if(!(R>>>0>=E>>>0)&&(_=E+4|0,u=s[_>>2]|0,!!(u&1))){if(u&2)s[_>>2]=u&-2,s[F+4>>2]=X|1,s[R+X>>2]=X,Ue=X;else{if(Y=s[1759]|0,(E|0)==(s[1760]|0)){if(V=(s[1757]|0)+X|0,s[1757]=V,s[1760]=F,s[F+4>>2]=V|1,(F|0)!=(Y|0))return;s[1759]=0,s[1756]=0;return}if((E|0)==(Y|0)){Y=(s[1756]|0)+X|0,s[1756]=Y,s[1759]=R,s[F+4>>2]=Y|1,s[R+Y>>2]=Y;return}Y=(u&-8)+X|0,V=u>>>3;do if(u>>>0<256)if(te=s[E+8>>2]|0,p=s[E+12>>2]|0,(p|0)==(te|0)){s[1754]=s[1754]&~(1<<V);break}else{s[te+12>>2]=p,s[p+8>>2]=te;break}else{te=s[E+24>>2]|0,p=s[E+12>>2]|0;do if((p|0)==(E|0)){if(S=E+16|0,B=S+4|0,I=s[B>>2]|0,I)Q=I,Se=B;else if(z=s[S>>2]|0,z)Q=z,Se=S;else{ne=0;break}for(;;){if(B=Q+20|0,I=s[B>>2]|0,I|0){Q=I,Se=B;continue}if(B=Q+16|0,I=s[B>>2]|0,I)Q=I,Se=B;else break}s[Se>>2]=0,ne=Q}else B=s[E+8>>2]|0,s[B+12>>2]=p,s[p+8>>2]=B,ne=p;while(!1);if(te|0){if(p=s[E+28>>2]|0,y=7320+(p<<2)|0,(E|0)==(s[y>>2]|0)){if(s[y>>2]=ne,!ne){s[1755]=s[1755]&~(1<<p);break}}else if(s[te+16+(((s[te+16>>2]|0)!=(E|0)&1)<<2)>>2]=ne,!ne)break;s[ne+24>>2]=te,p=E+16|0,y=s[p>>2]|0,y|0&&(s[ne+16>>2]=y,s[y+24>>2]=ne),y=s[p+4>>2]|0,y|0&&(s[ne+20>>2]=y,s[y+24>>2]=ne)}}while(!1);if(s[F+4>>2]=Y|1,s[R+Y>>2]=Y,(F|0)==(s[1759]|0)){s[1756]=Y;return}else Ue=Y}if(X=Ue>>>3,Ue>>>0<256){R=7056+(X<<1<<2)|0,u=s[1754]|0,_=1<<X,u&_?(_=R+8|0,ve=s[_>>2]|0,Te=_):(s[1754]=u|_,ve=R,Te=R+8|0),s[Te>>2]=F,s[ve+12>>2]=F,s[F+8>>2]=ve,s[F+12>>2]=R;return}R=Ue>>>8,R?Ue>>>0>16777215?de=31:(ve=(R+1048320|0)>>>16&8,Te=R<<ve,R=(Te+520192|0)>>>16&4,_=Te<<R,Te=(_+245760|0)>>>16&2,u=14-(R|ve|Te)+(_<<Te>>>15)|0,de=Ue>>>(u+7|0)&1|u<<1):de=0,u=7320+(de<<2)|0,s[F+28>>2]=de,s[F+20>>2]=0,s[F+16>>2]=0,Te=s[1755]|0,_=1<<de;do if(Te&_){for(ve=Ue<<((de|0)==31?0:25-(de>>>1)|0),R=s[u>>2]|0;;){if((s[R+4>>2]&-8|0)==(Ue|0)){He=73;break}if(Ce=R+16+(ve>>>31<<2)|0,X=s[Ce>>2]|0,X)ve=ve<<1,R=X;else{He=72;break}}if((He|0)==72){s[Ce>>2]=F,s[F+24>>2]=R,s[F+12>>2]=F,s[F+8>>2]=F;break}else if((He|0)==73){ve=R+8|0,te=s[ve>>2]|0,s[te+12>>2]=F,s[ve>>2]=F,s[F+8>>2]=te,s[F+12>>2]=R,s[F+24>>2]=0;break}}else s[1755]=Te|_,s[u>>2]=F,s[F+24>>2]=u,s[F+12>>2]=F,s[F+8>>2]=F;while(!1);if(F=(s[1762]|0)+-1|0,s[1762]=F,!F)De=7472;else return;for(;F=s[De>>2]|0,F;)De=F+8|0;s[1762]=-1}}}function kn(){return 7512}function Qn(u){u=u|0;var _=0,p=0,S=0;return _=T,T=T+16|0,p=_,S=Ur(s[u+60>>2]|0)|0,s[p>>2]=S,S=Ni(Le(6,p|0)|0)|0,T=_,S|0}function Dr(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0;return S=T,T=T+32|0,E=S,b=S+20|0,s[E>>2]=s[u+60>>2],s[E+4>>2]=0,s[E+8>>2]=_,s[E+12>>2]=b,s[E+16>>2]=p,(Ni(Ze(140,E|0)|0)|0)<0?(s[b>>2]=-1,y=-1):y=s[b>>2]|0,T=S,y|0}function Ni(u){u=u|0;var _=0,p=0;return u>>>0>4294963200?(_=ei()|0,s[_>>2]=0-u,p=-1):p=u,p|0}function ei(){return(dr()|0)+64|0}function dr(){return Lr()|0}function Lr(){return 208}function Ur(u){return u=u|0,u|0}function Fi(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0,ie=0,Y=0,V=0,te=0,ne=0,Q=0;S=T,T=T+48|0,E=S+16|0,b=S,y=S+32|0,w=u+28|0,I=s[w>>2]|0,s[y>>2]=I,k=u+20|0,F=(s[k>>2]|0)-I|0,s[y+4>>2]=F,s[y+8>>2]=_,s[y+12>>2]=p,_=F+p|0,F=u+60|0,s[b>>2]=s[F>>2],s[b+4>>2]=y,s[b+8>>2]=2,I=Ni(ke(146,b|0)|0)|0;e:do if((_|0)!=(I|0)){for(b=2,X=_,R=y,B=I;!((B|0)<0);)if(X=X-B|0,z=s[R+4>>2]|0,ie=B>>>0>z>>>0,Y=ie?R+8|0:R,V=(ie<<31>>31)+b|0,te=B-(ie?z:0)|0,s[Y>>2]=(s[Y>>2]|0)+te,z=Y+4|0,s[z>>2]=(s[z>>2]|0)-te,s[E>>2]=s[F>>2],s[E+4>>2]=Y,s[E+8>>2]=V,B=Ni(ke(146,E|0)|0)|0,(X|0)==(B|0)){ne=3;break e}else b=V,R=Y;s[u+16>>2]=0,s[w>>2]=0,s[k>>2]=0,s[u>>2]=s[u>>2]|32,(b|0)==2?Q=0:Q=p-(s[R+4>>2]|0)|0}else ne=3;while(!1);return(ne|0)==3&&(ne=s[u+44>>2]|0,s[u+16>>2]=ne+(s[u+48>>2]|0),s[w>>2]=ne,s[k>>2]=ne,Q=p),T=S,Q|0}function Ir(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0;return S=T,T=T+32|0,E=S,s[u+36>>2]=4,!(s[u>>2]&64|0)&&(s[E>>2]=s[u+60>>2],s[E+4>>2]=21523,s[E+8>>2]=S+16,Ft(54,E|0)|0)&&(r[u+75>>0]=-1),E=Fi(u,_,p)|0,T=S,E|0}function Zi(u){return 0}function Nr(){return ue(7576),7584}function Fr(){pe(7576)}function Or(u){u=u|0;var _=0,p=0,S=0,E=0,b=0,y=0;do if(u){if((s[u+76>>2]|0)<=-1){_=pr(u)|0;break}p=(Zi()|0)==0,S=pr(u)|0,_=S}else{if(s[144]|0?E=Or(s[144]|0)|0:E=0,S=Nr()|0,p=s[S>>2]|0,!p)b=E;else for(S=p,p=E;;)if((s[S+76>>2]|0)>-1,(s[S+20>>2]|0)>>>0>(s[S+28>>2]|0)>>>0?y=pr(S)|0|p:y=p,S=s[S+56>>2]|0,S)p=y;else{b=y;break}Fr(),_=b}while(!1);return _|0}function pr(u){u=u|0;var _=0,p=0,S=0,E=0,b=0,y=0,w=0;return _=u+20|0,p=u+28|0,(s[_>>2]|0)>>>0>(s[p>>2]|0)>>>0&&(Kr[s[u+36>>2]&7](u,0,0)|0,(s[_>>2]|0)==0)?S=-1:(E=u+4|0,b=s[E>>2]|0,y=u+8|0,w=s[y>>2]|0,b>>>0<w>>>0&&Kr[s[u+40>>2]&7](u,b-w|0,1)|0,s[u+16>>2]=0,s[p>>2]=0,s[_>>2]=0,s[y>>2]=0,s[E>>2]=0,S=0),S|0}function Xr(u){}function $r(u){u=u|0,Gt(u)}function qr(u){}function Yr(u){}function D(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0,w=0,I=0;if(S=T,T=T+64|0,E=S,j(u,_)|0)I=1;else if(_|0&&(b=Ke(_,80,64,0)|0,(b|0)!=0)){_=E+4|0,y=_+52|0;do s[_>>2]=0,_=_+4|0;while((_|0)<(y|0));s[E>>2]=b,s[E+8>>2]=u,s[E+12>>2]=-1,s[E+48>>2]=1,Zr[s[(s[b>>2]|0)+28>>2]&3](b,E,s[p>>2]|0,1),(s[E+24>>2]|0)==1?(s[p>>2]=s[E+16>>2],w=1):w=0,I=w}else I=0;return T=S,I|0}function J(u,_,p,S,E,b){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,j(u,s[_+8>>2]|0)|0&&$e(0,_,p,S,E)}function oe(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0;var b=0,y=0;do if(j(u,s[_+8>>2]|0)|0)Ne(0,_,p,S);else if(j(u,s[_>>2]|0)|0){if(b=_+32|0,(s[_+16>>2]|0)!=(p|0)&&(y=_+20|0,(s[y>>2]|0)!=(p|0))){s[b>>2]=S,s[y>>2]=p,y=_+40|0,s[y>>2]=(s[y>>2]|0)+1,(s[_+36>>2]|0)==1&&(s[_+24>>2]|0)==2&&(r[_+54>>0]=1),s[_+44>>2]=4;break}(S|0)==1&&(s[b>>2]=1)}while(!1)}function le(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0,j(u,s[_+8>>2]|0)|0&&Ae(0,_,p,S)}function j(u,_,p){return u=u|0,_=_|0,(u|0)==(_|0)|0}function Ae(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0;u=_+16|0,E=s[u>>2]|0,b=_+36|0,y=_+24|0;do if(E){if((E|0)!=(p|0)){s[b>>2]=(s[b>>2]|0)+1,s[y>>2]=2,r[_+54>>0]=1;break}(s[y>>2]|0)==2&&(s[y>>2]=S)}else s[u>>2]=p,s[y>>2]=S,s[b>>2]=1;while(!1)}function Ne(u,_,p,S){_=_|0,p=p|0,S=S|0,(s[_+4>>2]|0)==(p|0)&&(p=_+28|0,(s[p>>2]|0)!=1)&&(s[p>>2]=S)}function $e(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0;var b=0,y=0,w=0,I=0,k=0,F=0;r[_+53>>0]=1;do if((s[_+4>>2]|0)==(S|0)){if(r[_+52>>0]=1,u=_+16|0,b=s[u>>2]|0,y=_+54|0,w=_+48|0,I=_+24|0,k=_+36|0,!b){if(s[u>>2]=p,s[I>>2]=E,s[k>>2]=1,!((s[w>>2]|0)==1&(E|0)==1))break;r[y>>0]=1;break}if((b|0)!=(p|0)){s[k>>2]=(s[k>>2]|0)+1,r[y>>0]=1;break}k=s[I>>2]|0,(k|0)==2?(s[I>>2]=E,F=E):F=k,(s[w>>2]|0)==1&(F|0)==1&&(r[y>>0]=1)}while(!1)}function Ke(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0,b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0;E=T,T=T+64|0,b=E,y=s[u>>2]|0,w=u+(s[y+-8>>2]|0)|0,I=s[y+-4>>2]|0,s[b>>2]=p,s[b+4>>2]=u,s[b+8>>2]=_,s[b+12>>2]=S,S=b+16|0,_=b+20|0,u=b+24|0,y=b+28|0,k=b+32|0,F=b+40|0,X=S,R=X+36|0;do s[X>>2]=0,X=X+4|0;while((X|0)<(R|0));l[S+36>>1]=0,r[S+38>>0]=0;e:do if(j(I,p)|0)s[b+48>>2]=1,Vr[s[(s[I>>2]|0)+20>>2]&3](I,b,w,w,1,0),B=(s[u>>2]|0)==1?w:0;else{switch(jr[s[(s[I>>2]|0)+24>>2]&3](I,b,w,1,0),s[b+36>>2]|0){case 0:{B=(s[F>>2]|0)==1&(s[y>>2]|0)==1&(s[k>>2]|0)==1?s[_>>2]|0:0;break e}case 1:break;default:{B=0;break e}}if((s[u>>2]|0)!=1&&!((s[F>>2]|0)==0&(s[y>>2]|0)==1&(s[k>>2]|0)==1)){B=0;break}B=s[S>>2]|0}while(!1);return T=E,B|0}function gt(u){u=u|0,Gt(u)}function mt(u,_,p,S,E,b){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,b=b|0;var y=0;j(u,s[_+8>>2]|0)|0?$e(0,_,p,S,E):(y=s[u+8>>2]|0,Vr[s[(s[y>>2]|0)+20>>2]&3](y,_,p,S,E,b))}function at(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0;var b=0,y=0,w=0,I=0,k=0,F=0,X=0,R=0,B=0,z=0;do if(j(u,s[_+8>>2]|0)|0)Ne(0,_,p,S);else{if(b=u+8|0,!(j(u,s[_>>2]|0)|0)){y=s[b>>2]|0,jr[s[(s[y>>2]|0)+24>>2]&3](y,_,p,S,E);break}if(y=_+32|0,(s[_+16>>2]|0)!=(p|0)&&(w=_+20|0,(s[w>>2]|0)!=(p|0))){if(s[y>>2]=S,I=_+44|0,(s[I>>2]|0)==4)break;k=_+52|0,r[k>>0]=0,F=_+53|0,r[F>>0]=0,X=s[b>>2]|0,Vr[s[(s[X>>2]|0)+20>>2]&3](X,_,p,p,1,E),r[F>>0]|0?r[k>>0]|0?z=3:(R=3,B=11):(R=4,B=11),(B|0)==11&&(s[w>>2]=p,w=_+40|0,s[w>>2]=(s[w>>2]|0)+1,(s[_+36>>2]|0)==1&&(s[_+24>>2]|0)==2&&(r[_+54>>0]=1),z=R),s[I>>2]=z;break}(S|0)==1&&(s[y>>2]=1)}while(!1)}function Ut(u,_,p,S){u=u|0,_=_|0,p=p|0,S=S|0;var E=0;j(u,s[_+8>>2]|0)|0?Ae(0,_,p,S):(E=s[u+8>>2]|0,Zr[s[(s[E>>2]|0)+28>>2]&3](E,_,p,S))}function Gt(u){u=u|0,zt(u)}function ln(){}function Xt(u){u=u|0;var _=0,p=0;return u=u+15&-16|0,_=s[m>>2]|0,p=_+u|0,(u|0)>0&(p|0)<(_|0)|(p|0)<0?(Ee()|0,Oe(12),-1):(s[m>>2]=p,(p|0)>(fe()|0)&&!(ce()|0)?(s[m>>2]=_,Oe(12),-1):_|0)}function Ot(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0,y=0;if(S=u+p|0,_=_&255,(p|0)>=67){for(;u&3;)r[u>>0]=_,u=u+1|0;for(E=S&-4|0,b=E-64|0,y=_|_<<8|_<<16|_<<24;(u|0)<=(b|0);)s[u>>2]=y,s[u+4>>2]=y,s[u+8>>2]=y,s[u+12>>2]=y,s[u+16>>2]=y,s[u+20>>2]=y,s[u+24>>2]=y,s[u+28>>2]=y,s[u+32>>2]=y,s[u+36>>2]=y,s[u+40>>2]=y,s[u+44>>2]=y,s[u+48>>2]=y,s[u+52>>2]=y,s[u+56>>2]=y,s[u+60>>2]=y,u=u+64|0;for(;(u|0)<(E|0);)s[u>>2]=y,u=u+4|0}for(;(u|0)<(S|0);)r[u>>0]=_,u=u+1|0;return S-p|0}function ot(u,_,p){u=u|0,_=_|0,p=p|0;var S=0,E=0,b=0;if((p|0)>=8192)return vt(u|0,_|0,p|0)|0;if(S=u|0,E=u+p|0,(u&3)==(_&3)){for(;u&3;){if(!p)return S|0;r[u>>0]=r[_>>0]|0,u=u+1|0,_=_+1|0,p=p-1|0}for(b=E&-4|0,p=b-64|0;(u|0)<=(p|0);)s[u>>2]=s[_>>2],s[u+4>>2]=s[_+4>>2],s[u+8>>2]=s[_+8>>2],s[u+12>>2]=s[_+12>>2],s[u+16>>2]=s[_+16>>2],s[u+20>>2]=s[_+20>>2],s[u+24>>2]=s[_+24>>2],s[u+28>>2]=s[_+28>>2],s[u+32>>2]=s[_+32>>2],s[u+36>>2]=s[_+36>>2],s[u+40>>2]=s[_+40>>2],s[u+44>>2]=s[_+44>>2],s[u+48>>2]=s[_+48>>2],s[u+52>>2]=s[_+52>>2],s[u+56>>2]=s[_+56>>2],s[u+60>>2]=s[_+60>>2],u=u+64|0,_=_+64|0;for(;(u|0)<(b|0);)s[u>>2]=s[_>>2],u=u+4|0,_=_+4|0}else for(b=E-4|0;(u|0)<(b|0);)r[u>>0]=r[_>>0]|0,r[u+1>>0]=r[_+1>>0]|0,r[u+2>>0]=r[_+2>>0]|0,r[u+3>>0]=r[_+3>>0]|0,u=u+4|0,_=_+4|0;for(;(u|0)<(E|0);)r[u>>0]=r[_>>0]|0,u=u+1|0,_=_+1|0;return S|0}function vn(u,_,p,S){return u=u|0,_=_|0,p=p|0,S=S|0,Kr[u&7](_|0,p|0,S|0)|0}function Ht(u,_,p,S,E,b){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,b=b|0,jr[u&3](_|0,p|0,S|0,E|0,b|0)}function zn(u,_){u=u|0,_=_|0,sa[u&7](_|0)}function Ci(u,_,p){u=u|0,_=_|0,p=p|0,Br[u&7](_|0,p|0)}function In(u,_){return u=u|0,_=_|0,oa[u&1](_|0)|0}function Oi(u){u=u|0,la[u&1]()}function en(u,_,p,S,E,b,y){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,b=b|0,y=y|0,Vr[u&3](_|0,p|0,S|0,E|0,b|0,y|0)}function Bn(u,_,p,S,E){u=u|0,_=_|0,p=p|0,S=S|0,E=E|0,Zr[u&3](_|0,p|0,S|0,E|0)}function Pn(u,_,p){return re(0),0}function Tn(u,_,p,S,E){re(1)}function yn(u){re(2)}function Ji(u,_){re(3)}function Si(u){return re(4),0}function ra(){re(5)}function aa(){we()}function ta(u,_,p,S,E,b){re(6)}function na(u,_,p,S){re(7)}var Kr=[Pn,Ir,Dr,D,Fi,Pn,Pn,Pn],jr=[Tn,oe,at,Tn],sa=[yn,Xr,$r,qr,Yr,gt,yn,yn],Br=[Ji,nt,O,_t,Ye,Et,Kt,Ji],oa=[Si,Qn],la=[ra,aa],Vr=[ta,J,mt,ta],Zr=[na,le,Ut,na];return{stackSave:At,setThrew:Wt,dynCall_vii:Ci,_fflush:Or,_DecompressImage:rn,_memset:Ot,_sbrk:Xt,_memcpy:ot,stackAlloc:Qe,dynCall_vi:zn,getTempRet0:$,setTempRet0:Rt,dynCall_iiii:vn,stackRestore:st,dynCall_ii:In,dynCall_viiii:Bn,___errno_location:ei,runPostSets:ln,_CompressImage:xt,dynCall_v:Oi,_free:zt,dynCall_viiiii:Ht,dynCall_viiiiii:en,establishStackSpace:qt,_emscripten_get_global_libc:kn,_malloc:En,_emscripten_replace_memory:Pe,_GetStorageRequirements:Ve}}(Module.asmGlobalArg,Module.asmLibraryArg,buffer);Module._CompressImage=asm._CompressImage;var _malloc=Module._malloc=asm._malloc;Module.getTempRet0=asm.getTempRet0;var _free=Module._free=asm._free;Module._DecompressImage=asm._DecompressImage,Module.setTempRet0=asm.setTempRet0,Module.establishStackSpace=asm.establishStackSpace,Module.stackRestore=asm.stackRestore,Module.stackSave=asm.stackSave,Module._memset=asm._memset,Module._sbrk=asm._sbrk,Module._emscripten_get_global_libc=asm._emscripten_get_global_libc,Module._memcpy=asm._memcpy;var _emscripten_replace_memory=Module._emscripten_replace_memory=asm._emscripten_replace_memory;Module.stackAlloc=asm.stackAlloc,Module.setThrew=asm.setThrew,Module._fflush=asm._fflush,Module._GetStorageRequirements=asm._GetStorageRequirements,Module.___errno_location=asm.___errno_location,Module.runPostSets=asm.runPostSets,Module.dynCall_iiii=asm.dynCall_iiii,Module.dynCall_viiiii=asm.dynCall_viiiii,Module.dynCall_vi=asm.dynCall_vi,Module.dynCall_vii=asm.dynCall_vii,Module.dynCall_ii=asm.dynCall_ii,Module.dynCall_v=asm.dynCall_v,Module.dynCall_viiiiii=asm.dynCall_viiiiii,Module.dynCall_viiii=asm.dynCall_viiii,Runtime.stackAlloc=Module.stackAlloc,Runtime.stackSave=Module.stackSave,Runtime.stackRestore=Module.stackRestore,Runtime.establishStackSpace=Module.establishStackSpace,Runtime.setTempRet0=Module.setTempRet0,Runtime.getTempRet0=Module.getTempRet0,Module.asm=asm;function ExitStatus(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}ExitStatus.prototype=new Error,ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;dependenciesFulfilled=function n(){Module.calledRun||run(),Module.calledRun||(dependenciesFulfilled=n)},Module.callMain=Module.callMain=function n(e){e=e||[],ensureInitRuntime();var t=e.length+1;function a(){for(var s=0;s<3;s++)r.push(0)}var r=[allocate(intArrayFromString(Module.thisProgram),"i8",ALLOC_NORMAL)];a();for(var o=0;o<t-1;o=o+1)r.push(allocate(intArrayFromString(e[o]),"i8",ALLOC_NORMAL)),a();r.push(0),r=allocate(r,"i32",ALLOC_NORMAL);try{var l=Module._main(t,r,0);exit(l,!0)}catch(s){if(s instanceof ExitStatus)return;if(s=="SimulateInfiniteLoop"){Module.noExitRuntime=!0;return}else{var c=s;s&&typeof s=="object"&&s.stack&&(c=[s,s.stack]),Module.printErr("exception thrown: "+c),Module.quit(1,s)}}finally{}};function run(n){if(n=n||Module.arguments,runDependencies>0||(preRun(),runDependencies>0)||Module.calledRun)return;function e(){Module.calledRun||(Module.calledRun=!0,!ABORT&&(ensureInitRuntime(),preMain(),Module.onRuntimeInitialized&&Module.onRuntimeInitialized(),Module._main&&shouldRunNow&&Module.callMain(n),postRun()))}Module.setStatus?(Module.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Module.setStatus("")},1),e()},1)):e()}Module.run=Module.run=run;function exit(n,e){e&&Module.noExitRuntime||(Module.noExitRuntime||(ABORT=!0,STACKTOP=initialStackTop,exitRuntime(),Module.onExit&&Module.onExit(n)),ENVIRONMENT_IS_NODE&&process.exit(n),Module.quit(n,new ExitStatus(n)))}Module.exit=Module.exit=exit;var abortDecorators=[];function abort(n){Module.onAbort&&Module.onAbort(n),n!==void 0?(Module.print(n),Module.printErr(n),n=JSON.stringify(n)):n="",ABORT=!0;var e=`
If this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.`,t="abort("+n+") at "+stackTrace()+e;throw abortDecorators&&abortDecorators.forEach(function(a){t=a(t,n)}),t}if(Module.abort=Module.abort=abort,Module.preInit)for(typeof Module.preInit=="function"&&(Module.preInit=[Module.preInit]);Module.preInit.length>0;)Module.preInit.pop()();var shouldRunNow=!0;Module.noInitialRun&&(shouldRunNow=!1),run(),module.exports=Module})(squish);var squishExports=squish.exports,libSquish=squishExports,GetStorageRequirements=libSquish.cwrap("GetStorageRequirements","number",["number","number","number"]),CompressImage=libSquish.cwrap("CompressImage","void",["number","number","number","number","number"]),DecompressImage=libSquish.cwrap("DecompressImage","void",["number","number","number","number","number"]);function pointerFromData(n){var e=libSquish._malloc(n.length*4);return libSquish.HEAPU8.set(n,e),e}function getDataFromPointer(n,e){return new Uint8Array(libSquish.HEAPU8.buffer,n,e)}var compress=function(n,e,t,a){var r=pointerFromData(n),o=GetStorageRequirements(e,t,a),l=libSquish._malloc(o);CompressImage(r,e,t,l,a);var c=getDataFromPointer(l,o);return libSquish._free(r),libSquish._free(l),c},decompress$1=function(n,e,t,a){var r=pointerFromData(n),o=e*t*4,l=libSquish._malloc(o);DecompressImage(l,e,t,r,a);var c=getDataFromPointer(l,e*t*4);return libSquish._free(r),libSquish._free(l),c};function ceil4(n){return Math.ceil(n/4)*4}function padImage(n){const e=Math.ceil(n.width/4)*4,t=Math.ceil(n.height/4)*4;if(n.width===e&&n.height===t)return n;const a=new VImageData(new Uint8Array(e*t*4),e,t);for(let r=0;r<t;r++)for(let o=0;o<e;o++){const l=4*((r>=n.height?n.height-1:r)*n.width+(o>=n.width?n.width-1:o)),c=4*(r*e+o);a.data[c]=n.data[l],a.data[c+1]=n.data[l+1],a.data[c+2]=n.data[l+2],a.data[c+3]=n.data[l+3]}return a}function cropImage(n){const e=Math.ceil(n.width/4)*4,t=Math.ceil(n.height/4)*4;if(n.width===e&&n.height===t)return n;const a=new VImageData(new Uint8Array(n.width*n.height*4),n.width,n.height);for(let r=0;r<n.height;r++)for(let o=0;o<n.width;o++){const l=4*(r*n.width+o),c=4*(r*e+o);a.data[l]=n.data[c],a.data[l+1]=n.data[c+1],a.data[l+2]=n.data[c+2],a.data[l+3]=n.data[c+3]}return a}registerCodec(VFormats.DXT1,{length(n,e){return ceil4(n)*ceil4(e)*.5},encode(n){const e=padImage(n.convert(Uint8Array)),t=compress(e.data,e.width,e.height,9);return new VEncodedImageData(t,n.width,n.height,VFormats.DXT1)},decode(n){const e=decompress$1(n.data,ceil4(n.width),ceil4(n.height),1);return cropImage(new VImageData(e,n.width,n.height))}});registerCodec(VFormats.DXT1_ONEBITALPHA,getCodec(VFormats.DXT1));registerCodec(VFormats.DXT3,{length(n,e){return ceil4(n)*ceil4(e)*1},encode(n){const e=padImage(n.convert(Uint8Array)),t=compress(e.data,e.width,e.height,10);return new VEncodedImageData(t,n.width,n.height,VFormats.DXT3)},decode(n){const e=decompress$1(n.data,ceil4(n.width),ceil4(n.height),2);return cropImage(new VImageData(e,n.width,n.height))}});registerCodec(VFormats.DXT5,{length(n,e){return ceil4(n)*ceil4(e)*1},encode(n){const e=padImage(n.convert(Uint8Array)),t=compress(e.data,e.width,e.height,12);return new VEncodedImageData(t,n.width,n.height,VFormats.DXT5)},decode(n){const e=decompress$1(n.data,ceil4(n.width),ceil4(n.height),4);return cropImage(new VImageData(e,n.width,n.height))}});var dist={},parse$2={},core={},types={};Object.defineProperty(types,"__esModule",{value:!0});types.KeyV=types.KeyVRoot=types.KeyVSet=types.ParseError=void 0;class ParseError extends Error{constructor(){super(...arguments);Re(this,"name","ParseError")}}types.ParseError=ParseError;const MAX_CONCAT_SIZE=64e3,DumpFormatDefaults={indent:"	",quote:"always",escapes:!1};function needs_quotes(n,e,t){return!!(!n.length||n.includes(" ")||!e&&n.startsWith("[")&&n.endsWith("]")||t&&e&&(!isNaN(+n)||n==="true"||n==="false"))}function escape(n,e,t){if(typeof n!="string")return n.toString();const a=e.quote==="always"||needs_quotes(n,t,e.quote==="auto-typed");return e.escapes?a?'"'+n.replaceAll("\\","\\\\").replaceAll('"','\\"')+'"':n.replaceAll("\\","\\\\").replaceAll('"','\\"').replaceAll("{","\\{").replaceAll("}","\\}"):a?'"'+n+'"':n}var mn;class KeyVSetCommon{constructor(){ji(this,mn,[]);Re(this,"parent",null)}any(e,t){e=e.toLowerCase();for(let a=Yt(this,mn).length-1;a>-1;a--){const r=Yt(this,mn)[a];if(r.key.toLowerCase()===e)return r}if(t===void 0)throw new Error(`Child with key "${e}" does not exist in set!`);return t}all(e){if(e==null)return Yt(this,mn);e=e.toLowerCase();const t=[];for(const a of Yt(this,mn))a.key.toLowerCase()===e&&t.push(a);return t}dir(e,t){e=e.toLowerCase();for(let a=Yt(this,mn).length-1;a>-1;a--){const r=Yt(this,mn)[a];if(r instanceof KeyVSet&&r.key.toLowerCase()===e)return r}if(t===void 0)throw new Error(`Subset with key "${e}" does not exist in set!`);return t}dirs(e){e&&(e=e.toLowerCase());const t=[];for(const a of Yt(this,mn))a instanceof KeyVSet&&(e==null||a.key.toLowerCase()===e)&&t.push(a);return t}pair(e,t){e=e.toLowerCase();for(let a=Yt(this,mn).length-1;a>-1;a--){const r=Yt(this,mn)[a];if(r instanceof KeyV&&r.key.toLowerCase()===e)return r}if(t===void 0)throw new Error(`Pair with key "${e}" does not exist in set!`);return t}pairs(e){e&&(e=e.toLowerCase());const t=[];for(const a of Yt(this,mn))a instanceof KeyV&&(e==null||a.key.toLowerCase()===e)&&t.push(a);return t}value(e,t){const a=this.pair(e,t===void 0?void 0:null);return a===null?t:a.value}delete(e,t=!1){const a=Yt(this,mn).indexOf(e);return a===-1?!1:t?(Yt(this,mn)[a]=Yt(this,mn)[Yt(this,mn).length-1],Yt(this,mn).pop(),!0):(Yt(this,mn).splice(a,1),!0)}add(e){return e.parent=this,Yt(this,mn).push(e),this}factory(){return new KeyVFactory(this)}dump(e=DumpFormatDefaults){e=Object.assign({},DumpFormatDefaults,e);const t=new Array(MAX_CONCAT_SIZE);let a="",r=0;return this.__dump__(e,"",o=>{t[r]=o,r=(r+1)%MAX_CONCAT_SIZE,r===0&&(a=String.prototype.concat.apply(a,t))}),r&&(a=String.prototype.concat.apply(a,t.slice(0,r))),a}__dump__(e,t,a){for(const r of Yt(this,mn))r.__dump__(e,t,a)}}mn=new WeakMap;class KeyVSet extends KeyVSetCommon{constructor(t){super();Re(this,"key");this.key=t}__dump__(t,a,r){r(a+escape(this.key,t,!1)+`
`+a+`{
`),super.__dump__(t,a+t.indent,r),r(a+`}
`)}}types.KeyVSet=KeyVSet;class KeyVRoot extends KeyVSetCommon{}types.KeyVRoot=KeyVRoot;class KeyV{constructor(e,t,a=null){Re(this,"key");Re(this,"value");Re(this,"query");Re(this,"parent");this.key=e,this.value=t,this.query=a,this.parent=null}__dump__(e,t,a){a(t+escape(this.key,e,!1)+" "+escape(this.value,e,!0)+(this.query===null?`
`:" ["+this.query+`]
`))}float(e){const t=parseFloat(this.value);if(isNaN(t)){if(e!==void 0)return e;throw new TypeError(`Could not coerce value "${this.value}" to float!`)}return t}int(e){const t=parseInt(this.value);if(isNaN(t)){if(e!==void 0)return e;throw new TypeError(`Could not coerce value "${this.value}" to int!`)}return t}string(){return this.value.toString()}bool(){return!(!this.value||this.value==="off"||this.value==="false"||this.value==="0")}vector(e,t="[",a="]"){e:if(typeof this.value=="string"){if(!this.value.startsWith(t)||!this.value.endsWith(a))break e;const r=this.value.slice(t.length,-a.length||void 0).trim().split(" "),o=new Float64Array(r.length);for(let l=0;l<o.length;l++){const c=o[l]=parseFloat(r[l]);if(isNaN(c))break e}return o}if(e!==void 0)return e;throw new TypeError(`Could not parse value "${this.value}" as vector!`)}}types.KeyV=KeyV;class KeyVFactory{constructor(e){Re(this,"source");this.source=e}dir(e){const t=new KeyVSet(e);return this.source.add(t),this.source=t,this}pair(e,t,a=null){return this.source.add(new KeyV(e,t,a)),this}back(e=1){for(let t=0;t<e;t++){if(this.source.parent===null)throw new Error("Attempted to navigate backwards past root set!");this.source=this.source.parent}return this}exit(){return this.source}}Object.defineProperty(core,"__esModule",{value:!0});core.parse=parse$1;const types_js_1$1=types,C_QUOTE=34,S_QUOTE='"',S_STAR="*",C_SLASH=47,C_BOPEN=123,C_BCLOSE=125,C_ESCAPE=92,C_LN=10,S_LN=`
`;function is_plain(n){return n>32&&n<92||n>92&&n<125}function parse_value(n){if(n==="true")return!0;if(n==="false")return!1;const e=+n;return isNaN(e)?n:e}function is_term(n){return n==32||n==9||n==13||n==C_LN||n==C_BOPEN||n==C_BCLOSE}function parse$1(n,e){const t=!e.escapes,a=n.length;let r=null,o=null;for(let l=0;l<a;l++){const c=n.charCodeAt(l),s=!t&&n.charCodeAt(l-1)===C_ESCAPE;if(!(c===32||c===9||c===13||c===C_LN)){if(c===C_BOPEN&&!s){if(r===null)throw new types_js_1$1.ParseError(`Attempted to enter block without key at ${l}!`);e.on_enter(r),r=null;continue}if(c===C_BCLOSE&&!s){if(r!==null&&o===null)throw new types_js_1$1.ParseError(`Encountered unpaired key before ending bracket at ${l}!`);o!==null&&e.on_key(r,o),r=o=null,e.on_exit();continue}if(c===C_QUOTE&&!s){const d=l+1;for(;;){if(l=n.indexOf(S_QUOTE,l+1),l===-1)throw new types_js_1$1.ParseError(`Encountered unterminated quote starting at ${d-1}!`);if(t||n.charCodeAt(l-1)!==C_ESCAPE)break}const f=n.slice(d,l);r===null?r=f:o===null?o=f:(e.on_key(r,o),o=null,r=f);continue}if(c===47&&n.charCodeAt(l+1)===47){if(l=n.indexOf(S_LN,l+1),l===-1)break;continue}if(e.multilines&&c===47&&n.charCodeAt(l+1)===42){const d=l;for(;;){if(l=n.indexOf(S_STAR,l+1),l===-1)throw new types_js_1$1.ParseError(`Encountered unterminated multiline comment starting at ${d}!`);if(n.charCodeAt(l+1)===C_SLASH)break}l++;continue}if(is_plain(c)){const d=l;for(;l<a&&(l++,!(is_term(n.charCodeAt(l))&&(t||n.charCodeAt(l-1)!==C_ESCAPE))););const f=n.slice(d,l);r===null?r=f:o===null?o=e.types?parse_value(f):f:(n.charCodeAt(d)===91&&n.charCodeAt(l-1)===93?(e.on_key(r,o,n.slice(d+1,l-1)),r=null):(e.on_key(r,o),r=f),o=null)}}}if(r!==null&&o===null)throw new types_js_1$1.ParseError("Encountered unpaired key!");o!==null&&e.on_key(r,o)}Object.defineProperty(parse$2,"__esModule",{value:!0});parse$2.parse=parse;parse$2.json=json;const core_js_1=core,types_js_1=types,PARENT=Symbol("parent");function parse(n,e){let t=new types_js_1.KeyVRoot;return(0,core_js_1.parse)(n,{on_enter(a){t.add(t=new types_js_1.KeyVSet(a))},on_exit(){if(!t.parent)throw new types_js_1.ParseError("Attempted to exit past root keyvalue!");t=t.parent},on_key(a,r,o){t.add(new types_js_1.KeyV(a,r,o))},escapes:(e==null?void 0:e.escapes)??!0,multilines:(e==null?void 0:e.multilines)??!1,types:(e==null?void 0:e.types)??!1}),t}function json(n,e={},t){let a={[PARENT]:null};return(0,core_js_1.parse)(n,{on_enter(r){a=a[r]={[PARENT]:a}},on_exit(){const r=a;if(!a[PARENT])throw new types_js_1.ParseError("Attempted to exit past root keyvalue!");a=a[PARENT],delete r[PARENT]},on_key(r,o,l){l&&l in e&&!e[l]||(a[r]=o)},escapes:(t==null?void 0:t.escapes)??!0,multilines:(t==null?void 0:t.multilines)??!0,types:(t==null?void 0:t.types)??!0}),delete a[PARENT],a}(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.ParseError=n.KeyVRoot=n.KeyVSet=n.KeyV=n.json=n.parse=n.core=n.vdf=void 0,n.vdf=parse$2,n.core=core;var e=parse$2;Object.defineProperty(n,"parse",{enumerable:!0,get:function(){return e.parse}}),Object.defineProperty(n,"json",{enumerable:!0,get:function(){return e.json}});var t=types;Object.defineProperty(n,"KeyV",{enumerable:!0,get:function(){return t.KeyV}}),Object.defineProperty(n,"KeyVSet",{enumerable:!0,get:function(){return t.KeyVSet}}),Object.defineProperty(n,"KeyVRoot",{enumerable:!0,get:function(){return t.KeyVRoot}}),Object.defineProperty(n,"ParseError",{enumerable:!0,get:function(){return t.ParseError}})})(dist);const zr=class zr extends VBaseResource{constructor(t){super("KVD",0);Re(this,"kvs");this.kvs=t}static decode(t,a,r){const o=a.read_str(a.length);let l;try{l=dist.parse(o)}catch(c){console.error(c)}return new zr(l)}encode(t){throw"whoops"}ok(){return!!this.kvs}enumerate(){return this.kvs?this.kvs.all().map(t=>t instanceof dist.KeyVSet?[t.key,"...",!0]:[t.key,t.value,!1]):[["Error","Error",!1]]}};Re(zr,"tag","KVD");let VKeyValuesResource=zr;function remap(n,e,t,a,r){return(n-e)/(t-e)*(r-a)+a}function as_bytelength(n){return n<1e3?n+" B":n<1e6?Math.round(n/10)/100+" KB":n<1e9?Math.round(n/1e4)/100+" MB":Math.round(n/1e7)/100+" GB"}function hex(n){return(n&255).toString(16).padStart(2,"0")}function hex_le32(n){return[hex(n>>0),hex(n>>8),hex(n>>16),hex(n>>24)].join(" ")}function hex_tag(n){return[hex(n.charCodeAt(0)),hex(n.charCodeAt(1)),hex(n.charCodeAt(2))].join(" ")}const Hr=class Hr extends VBaseResource{constructor(e){super("CRC",2),this.crc=e}static decode(e,t,a){return new Hr(e.start)}encode(e){throw"whoops"}toString(){return hex_le32(this.crc)}};Re(Hr,"tag","CRC");let VCrcResource=Hr;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="176",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD$1=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[a&255]+_lut[a>>8&255]+_lut[a>>16&255]+_lut[a>>24&255]).toLowerCase()}function clamp(n,e,t){return Math.max(e,Math.min(t,n))}function euclideanModulo(n,e){return(n%e+e)%e}function lerp(n,e,t){return(1-t)*n+t*e}function denormalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function normalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,r=e.elements;return this.x=r[0]*t+r[3]*a+r[6],this.y=r[1]*t+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(clamp(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(clamp(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*a-l*r+e.x,this.y=o*r+l*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,a,r,o,l,c,s,d){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,r,o,l,c,s,d)}set(e,t,a,r,o,l,c,s,d){const f=this.elements;return f[0]=e,f[1]=r,f[2]=c,f[3]=t,f[4]=o,f[5]=s,f[6]=a,f[7]=l,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,r=t.elements,o=this.elements,l=a[0],c=a[3],s=a[6],d=a[1],f=a[4],v=a[7],g=a[2],M=a[5],h=a[8],A=r[0],x=r[3],m=r[6],U=r[1],T=r[4],P=r[7],H=r[2],G=r[5],W=r[8];return o[0]=l*A+c*U+s*H,o[3]=l*x+c*T+s*G,o[6]=l*m+c*P+s*W,o[1]=d*A+f*U+v*H,o[4]=d*x+f*T+v*G,o[7]=d*m+f*P+v*W,o[2]=g*A+M*U+h*H,o[5]=g*x+M*T+h*G,o[8]=g*m+M*P+h*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],r=e[2],o=e[3],l=e[4],c=e[5],s=e[6],d=e[7],f=e[8];return t*l*f-t*c*d-a*o*f+a*c*s+r*o*d-r*l*s}invert(){const e=this.elements,t=e[0],a=e[1],r=e[2],o=e[3],l=e[4],c=e[5],s=e[6],d=e[7],f=e[8],v=f*l-c*d,g=c*s-f*o,M=d*o-l*s,h=t*v+a*g+r*M;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/h;return e[0]=v*A,e[1]=(r*d-f*a)*A,e[2]=(c*a-r*l)*A,e[3]=g*A,e[4]=(f*t-r*s)*A,e[5]=(r*o-c*t)*A,e[6]=M*A,e[7]=(a*s-d*t)*A,e[8]=(l*t-a*o)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,r,o,l,c){const s=Math.cos(o),d=Math.sin(o);return this.set(a*s,a*d,-a*(s*l+d*c)+l+e,-r*d,r*s,-r*(-d*l+s*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let r=0;r<9;r++)if(t[r]!==a[r])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function createElementNS(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function createCanvasElement(){const n=createElementNS("canvas");return n.style.display="block",n}const _cache={};function warnOnce(n){n in _cache||(_cache[n]=!0,console.warn(n))}function probeAsync(n,e,t){return new Promise(function(a,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:a()}}setTimeout(o,t)})}function toNormalizedProjectionMatrix(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function toReversedProjectionMatrix(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const LINEAR_REC709_TO_XYZ=new Matrix3().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=new Matrix3().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){const n={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===SRGBTransfer&&(r.r=SRGBToLinear(r.r),r.g=SRGBToLinear(r.g),r.b=SRGBToLinear(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===SRGBTransfer&&(r.r=LinearToSRGB(r.r),r.g=LinearToSRGB(r.g),r.b=LinearToSRGB(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===NoColorSpace?LinearTransfer:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return n.define({[LinearSRGBColorSpace]:{primaries:e,whitePoint:a,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:e,whitePoint:a,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}}),n}const ColorManagement=createColorManagement();function SRGBToLinear(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function LinearToSRGB(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const r=_canvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=_canvas}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=SRGBToLinear(o[l]/255)*255;return a.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(SRGBToLinear(t[a]/255)*255):t[a]=SRGBToLinear(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(serializeImage(r[l].image)):o.push(serializeImage(r[l]))}else o=serializeImage(r);a.url=o}return t||(e.images[this.uuid]=a),a}}function serializeImage(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ImageUtils.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,a=ClampToEdgeWrapping,r=ClampToEdgeWrapping,o=LinearFilter,l=LinearMipmapLinearFilter,c=RGBAFormat,s=UnsignedByteType,d=Texture.DEFAULT_ANISOTROPY,f=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=s,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,a=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,r){return this.x=e,this.y=t,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*a+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*a+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*a+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,r,o;const s=e.elements,d=s[0],f=s[4],v=s[8],g=s[1],M=s[5],h=s[9],A=s[2],x=s[6],m=s[10];if(Math.abs(f-g)<.01&&Math.abs(v-A)<.01&&Math.abs(h-x)<.01){if(Math.abs(f+g)<.1&&Math.abs(v+A)<.1&&Math.abs(h+x)<.1&&Math.abs(d+M+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,P=(M+1)/2,H=(m+1)/2,G=(f+g)/4,W=(v+A)/4,Z=(h+x)/4;return T>P&&T>H?T<.01?(a=0,r=.707106781,o=.707106781):(a=Math.sqrt(T),r=G/a,o=W/a):P>H?P<.01?(a=.707106781,r=0,o=.707106781):(r=Math.sqrt(P),a=G/r,o=Z/r):H<.01?(a=.707106781,r=.707106781,o=0):(o=Math.sqrt(H),a=W/o,r=Z/o),this.set(a,r,o,t),this}let U=Math.sqrt((x-h)*(x-h)+(v-A)*(v-A)+(g-f)*(g-f));return Math.abs(U)<.001&&(U=1),this.x=(x-h)/U,this.y=(v-A)/U,this.z=(g-f)/U,this.w=Math.acos((d+M+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this.w=clamp(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this.w=clamp(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(clamp(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth?a.depth:1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const r={width:e,height:t,depth:this.depth};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},a);const o=new Texture(r,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);o.flipY=!1,o.generateMipmaps=a.generateMipmaps,o.internalFormat=a.internalFormat,this.textures=[];const l=a.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=a;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Source(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,t=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=r}static slerpFlat(e,t,a,r,o,l,c){let s=a[r+0],d=a[r+1],f=a[r+2],v=a[r+3];const g=o[l+0],M=o[l+1],h=o[l+2],A=o[l+3];if(c===0){e[t+0]=s,e[t+1]=d,e[t+2]=f,e[t+3]=v;return}if(c===1){e[t+0]=g,e[t+1]=M,e[t+2]=h,e[t+3]=A;return}if(v!==A||s!==g||d!==M||f!==h){let x=1-c;const m=s*g+d*M+f*h+v*A,U=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const H=Math.sqrt(T),G=Math.atan2(H,m*U);x=Math.sin(x*G)/H,c=Math.sin(c*G)/H}const P=c*U;if(s=s*x+g*P,d=d*x+M*P,f=f*x+h*P,v=v*x+A*P,x===1-c){const H=1/Math.sqrt(s*s+d*d+f*f+v*v);s*=H,d*=H,f*=H,v*=H}}e[t]=s,e[t+1]=d,e[t+2]=f,e[t+3]=v}static multiplyQuaternionsFlat(e,t,a,r,o,l){const c=a[r],s=a[r+1],d=a[r+2],f=a[r+3],v=o[l],g=o[l+1],M=o[l+2],h=o[l+3];return e[t]=c*h+f*v+s*M-d*g,e[t+1]=s*h+f*g+d*v-c*M,e[t+2]=d*h+f*M+c*g-s*v,e[t+3]=f*h-c*v-s*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,r){return this._x=e,this._y=t,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,r=e._y,o=e._z,l=e._order,c=Math.cos,s=Math.sin,d=c(a/2),f=c(r/2),v=c(o/2),g=s(a/2),M=s(r/2),h=s(o/2);switch(l){case"XYZ":this._x=g*f*v+d*M*h,this._y=d*M*v-g*f*h,this._z=d*f*h+g*M*v,this._w=d*f*v-g*M*h;break;case"YXZ":this._x=g*f*v+d*M*h,this._y=d*M*v-g*f*h,this._z=d*f*h-g*M*v,this._w=d*f*v+g*M*h;break;case"ZXY":this._x=g*f*v-d*M*h,this._y=d*M*v+g*f*h,this._z=d*f*h+g*M*v,this._w=d*f*v-g*M*h;break;case"ZYX":this._x=g*f*v-d*M*h,this._y=d*M*v+g*f*h,this._z=d*f*h-g*M*v,this._w=d*f*v+g*M*h;break;case"YZX":this._x=g*f*v+d*M*h,this._y=d*M*v+g*f*h,this._z=d*f*h-g*M*v,this._w=d*f*v-g*M*h;break;case"XZY":this._x=g*f*v-d*M*h,this._y=d*M*v-g*f*h,this._z=d*f*h+g*M*v,this._w=d*f*v+g*M*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],r=t[4],o=t[8],l=t[1],c=t[5],s=t[9],d=t[2],f=t[6],v=t[10],g=a+c+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(f-s)*M,this._y=(o-d)*M,this._z=(l-r)*M}else if(a>c&&a>v){const M=2*Math.sqrt(1+a-c-v);this._w=(f-s)/M,this._x=.25*M,this._y=(r+l)/M,this._z=(o+d)/M}else if(c>v){const M=2*Math.sqrt(1+c-a-v);this._w=(o-d)/M,this._x=(r+l)/M,this._y=.25*M,this._z=(s+f)/M}else{const M=2*Math.sqrt(1+v-a-c);this._w=(l-r)/M,this._x=(o+d)/M,this._y=(s+f)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,t/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,r=e._y,o=e._z,l=e._w,c=t._x,s=t._y,d=t._z,f=t._w;return this._x=a*f+l*c+r*d-o*s,this._y=r*f+l*s+o*c-a*d,this._z=o*f+l*d+a*s-r*c,this._w=l*f-a*c-r*s-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,r=this._y,o=this._z,l=this._w;let c=l*e._w+a*e._x+r*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=a,this._y=r,this._z=o,this;const s=1-c*c;if(s<=Number.EPSILON){const M=1-t;return this._w=M*l+t*this._w,this._x=M*a+t*this._x,this._y=M*r+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const d=Math.sqrt(s),f=Math.atan2(d,c),v=Math.sin((1-t)*f)/d,g=Math.sin(t*f)/d;return this._w=l*v+this._w*g,this._x=a*v+this._x*g,this._y=r*v+this._y*g,this._z=o*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),o=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,a=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*a+o[6]*r,this.y=o[1]*t+o[4]*a+o[7]*r,this.z=o[2]*t+o[5]*a+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*a+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*a+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*a+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*a+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,a=this.y,r=this.z,o=e.x,l=e.y,c=e.z,s=e.w,d=2*(l*r-c*a),f=2*(c*t-o*r),v=2*(o*a-l*t);return this.x=t+s*d+l*v-c*f,this.y=a+s*f+c*d-o*v,this.z=r+s*v+o*f-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*a+o[8]*r,this.y=o[1]*t+o[5]*a+o[9]*r,this.z=o[2]*t+o[6]*a+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(clamp(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,r=e.y,o=e.z,l=t.x,c=t.y,s=t.z;return this.x=r*s-o*c,this.y=o*l-a*s,this.z=a*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(clamp(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return t*t+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const r=Math.sin(t)*e;return this.x=r*Math.sin(a),this.y=Math.cos(t)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const o=a.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,_vector$b):_vector$b.fromBufferAttribute(o,l),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),_box$4.copy(a.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(n,e,t,a,r){for(let o=0,l=n.length-3;o<=l;o+=3){_testAxis.fromArray(n,o);const c=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),s=e.dot(_testAxis),d=t.dot(_testAxis),f=a.dot(_testAxis);if(Math.max(-Math.max(s,d,f),Math.min(s,d,f))>c)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):_box$3.setFromPoints(e).getCenter(a);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,a.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),r=(a-this.radius)*.5;this.center.addScaledVector(_v1$6,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,a,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const o=e.distanceTo(t)*.5,l=-this.direction.dot(_segDir),c=_diff.dot(this.direction),s=-_diff.dot(_segDir),d=_diff.lengthSq(),f=Math.abs(1-l*l);let v,g,M,h;if(f>0)if(v=l*s-c,g=l*c-s,h=o*f,v>=0)if(g>=-h)if(g<=h){const A=1/f;v*=A,g*=A,M=v*(v+l*g+2*c)+g*(l*v+g+2*s)+d}else g=o,v=Math.max(0,-(l*g+c)),M=-v*v+g*(g+2*s)+d;else g=-o,v=Math.max(0,-(l*g+c)),M=-v*v+g*(g+2*s)+d;else g<=-h?(v=Math.max(0,-(-l*o+c)),g=v>0?-o:Math.min(Math.max(-o,-s),o),M=-v*v+g*(g+2*s)+d):g<=h?(v=0,g=Math.min(Math.max(-o,-s),o),M=g*(g+2*s)+d):(v=Math.max(0,-(l*o+c)),g=v>0?o:Math.min(Math.max(-o,-s),o),M=-v*v+g*(g+2*s)+d);else g=l>0?-o:o,v=Math.max(0,-(l*g+c)),M=-v*v+g*(g+2*s)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(_segCenter).addScaledVector(_segDir,g),M}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const a=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-a*a,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),c=a-l,s=a+l;return s<0?null:c<0?this.at(s,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,r,o,l,c,s;const d=1/this.direction.x,f=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(a=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),f>=0?(o=(e.min.y-g.y)*f,l=(e.max.y-g.y)*f):(o=(e.max.y-g.y)*f,l=(e.min.y-g.y)*f),a>l||o>r||((o>a||isNaN(a))&&(a=o),(l<r||isNaN(r))&&(r=l),v>=0?(c=(e.min.z-g.z)*v,s=(e.max.z-g.z)*v):(c=(e.max.z-g.z)*v,s=(e.min.z-g.z)*v),a>s||c>r)||((c>a||a!==a)&&(a=c),(s<r||r!==r)&&(r=s),r<0)?null:this.at(a>=0?a:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,a,r,o){_edge1.subVectors(t,e),_edge2.subVectors(a,e),_normal$1.crossVectors(_edge1,_edge2);let l=this.direction.dot(_normal$1),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;_diff.subVectors(this.origin,e);const s=c*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(s<0)return null;const d=c*this.direction.dot(_edge1.cross(_diff));if(d<0||s+d>l)return null;const f=-c*_diff.dot(_normal$1);return f<0?null:this.at(f/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,a,r,o,l,c,s,d,f,v,g,M,h,A,x){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,r,o,l,c,s,d,f,v,g,M,h,A,x)}set(e,t,a,r,o,l,c,s,d,f,v,g,M,h,A,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=a,m[12]=r,m[1]=o,m[5]=l,m[9]=c,m[13]=s,m[2]=d,m[6]=f,m[10]=v,m[14]=g,m[3]=M,m[7]=h,m[11]=A,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),o=1/_v1$5.setFromMatrixColumn(e,1).length(),l=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=0,t[4]=a[4]*o,t[5]=a[5]*o,t[6]=a[6]*o,t[7]=0,t[8]=a[8]*l,t[9]=a[9]*l,t[10]=a[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,r=e.y,o=e.z,l=Math.cos(a),c=Math.sin(a),s=Math.cos(r),d=Math.sin(r),f=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const g=l*f,M=l*v,h=c*f,A=c*v;t[0]=s*f,t[4]=-s*v,t[8]=d,t[1]=M+h*d,t[5]=g-A*d,t[9]=-c*s,t[2]=A-g*d,t[6]=h+M*d,t[10]=l*s}else if(e.order==="YXZ"){const g=s*f,M=s*v,h=d*f,A=d*v;t[0]=g+A*c,t[4]=h*c-M,t[8]=l*d,t[1]=l*v,t[5]=l*f,t[9]=-c,t[2]=M*c-h,t[6]=A+g*c,t[10]=l*s}else if(e.order==="ZXY"){const g=s*f,M=s*v,h=d*f,A=d*v;t[0]=g-A*c,t[4]=-l*v,t[8]=h+M*c,t[1]=M+h*c,t[5]=l*f,t[9]=A-g*c,t[2]=-l*d,t[6]=c,t[10]=l*s}else if(e.order==="ZYX"){const g=l*f,M=l*v,h=c*f,A=c*v;t[0]=s*f,t[4]=h*d-M,t[8]=g*d+A,t[1]=s*v,t[5]=A*d+g,t[9]=M*d-h,t[2]=-d,t[6]=c*s,t[10]=l*s}else if(e.order==="YZX"){const g=l*s,M=l*d,h=c*s,A=c*d;t[0]=s*f,t[4]=A-g*v,t[8]=h*v+M,t[1]=v,t[5]=l*f,t[9]=-c*f,t[2]=-d*f,t[6]=M*v+h,t[10]=g-A*v}else if(e.order==="XZY"){const g=l*s,M=l*d,h=c*s,A=c*d;t[0]=s*f,t[4]=-v,t[8]=d*f,t[1]=g*v+A,t[5]=l*f,t[9]=M*v-h,t[2]=h*v-M,t[6]=c*f,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,a){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(a,_z),_x.lengthSq()===0&&(Math.abs(a.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(a,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,r=t.elements,o=this.elements,l=a[0],c=a[4],s=a[8],d=a[12],f=a[1],v=a[5],g=a[9],M=a[13],h=a[2],A=a[6],x=a[10],m=a[14],U=a[3],T=a[7],P=a[11],H=a[15],G=r[0],W=r[4],Z=r[8],N=r[12],L=r[1],q=r[5],se=r[9],ee=r[13],re=r[2],ce=r[6],fe=r[10],Ee=r[14],ue=r[3],Le=r[7],Oe=r[11],Ze=r[15];return o[0]=l*G+c*L+s*re+d*ue,o[4]=l*W+c*q+s*ce+d*Le,o[8]=l*Z+c*se+s*fe+d*Oe,o[12]=l*N+c*ee+s*Ee+d*Ze,o[1]=f*G+v*L+g*re+M*ue,o[5]=f*W+v*q+g*ce+M*Le,o[9]=f*Z+v*se+g*fe+M*Oe,o[13]=f*N+v*ee+g*Ee+M*Ze,o[2]=h*G+A*L+x*re+m*ue,o[6]=h*W+A*q+x*ce+m*Le,o[10]=h*Z+A*se+x*fe+m*Oe,o[14]=h*N+A*ee+x*Ee+m*Ze,o[3]=U*G+T*L+P*re+H*ue,o[7]=U*W+T*q+P*ce+H*Le,o[11]=U*Z+T*se+P*fe+H*Oe,o[15]=U*N+T*ee+P*Ee+H*Ze,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],r=e[8],o=e[12],l=e[1],c=e[5],s=e[9],d=e[13],f=e[2],v=e[6],g=e[10],M=e[14],h=e[3],A=e[7],x=e[11],m=e[15];return h*(+o*s*v-r*d*v-o*c*g+a*d*g+r*c*M-a*s*M)+A*(+t*s*M-t*d*g+o*l*g-r*l*M+r*d*f-o*s*f)+x*(+t*d*v-t*c*M-o*l*v+a*l*M+o*c*f-a*d*f)+m*(-r*c*f-t*s*v+t*c*g+r*l*v-a*l*g+a*s*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],r=e[2],o=e[3],l=e[4],c=e[5],s=e[6],d=e[7],f=e[8],v=e[9],g=e[10],M=e[11],h=e[12],A=e[13],x=e[14],m=e[15],U=v*x*d-A*g*d+A*s*M-c*x*M-v*s*m+c*g*m,T=h*g*d-f*x*d-h*s*M+l*x*M+f*s*m-l*g*m,P=f*A*d-h*v*d+h*c*M-l*A*M-f*c*m+l*v*m,H=h*v*s-f*A*s-h*c*g+l*A*g+f*c*x-l*v*x,G=t*U+a*T+r*P+o*H;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/G;return e[0]=U*W,e[1]=(A*g*o-v*x*o-A*r*M+a*x*M+v*r*m-a*g*m)*W,e[2]=(c*x*o-A*s*o+A*r*d-a*x*d-c*r*m+a*s*m)*W,e[3]=(v*s*o-c*g*o-v*r*d+a*g*d+c*r*M-a*s*M)*W,e[4]=T*W,e[5]=(f*x*o-h*g*o+h*r*M-t*x*M-f*r*m+t*g*m)*W,e[6]=(h*s*o-l*x*o-h*r*d+t*x*d+l*r*m-t*s*m)*W,e[7]=(l*g*o-f*s*o+f*r*d-t*g*d-l*r*M+t*s*M)*W,e[8]=P*W,e[9]=(h*v*o-f*A*o-h*a*M+t*A*M+f*a*m-t*v*m)*W,e[10]=(l*A*o-h*c*o+h*a*d-t*A*d-l*a*m+t*c*m)*W,e[11]=(f*c*o-l*v*o-f*a*d+t*v*d+l*a*M-t*c*M)*W,e[12]=H*W,e[13]=(f*A*r-h*v*r+h*a*g-t*A*g-f*a*x+t*v*x)*W,e[14]=(h*c*r-l*A*r-h*a*s+t*A*s+l*a*x-t*c*x)*W,e[15]=(l*v*r-f*c*r+f*a*s-t*v*s-l*a*g+t*c*g)*W,this}scale(e){const t=this.elements,a=e.x,r=e.y,o=e.z;return t[0]*=a,t[4]*=r,t[8]*=o,t[1]*=a,t[5]*=r,t[9]*=o,t[2]*=a,t[6]*=r,t[10]*=o,t[3]*=a,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,r))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),r=Math.sin(t),o=1-a,l=e.x,c=e.y,s=e.z,d=o*l,f=o*c;return this.set(d*l+a,d*c-r*s,d*s+r*c,0,d*c+r*s,f*c+a,f*s-r*l,0,d*s-r*c,f*s+r*l,o*s*s+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,r,o,l){return this.set(1,a,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,a){const r=this.elements,o=t._x,l=t._y,c=t._z,s=t._w,d=o+o,f=l+l,v=c+c,g=o*d,M=o*f,h=o*v,A=l*f,x=l*v,m=c*v,U=s*d,T=s*f,P=s*v,H=a.x,G=a.y,W=a.z;return r[0]=(1-(A+m))*H,r[1]=(M+P)*H,r[2]=(h-T)*H,r[3]=0,r[4]=(M-P)*G,r[5]=(1-(g+m))*G,r[6]=(x+U)*G,r[7]=0,r[8]=(h+T)*W,r[9]=(x-U)*W,r[10]=(1-(g+A))*W,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,a){const r=this.elements;let o=_v1$5.set(r[0],r[1],r[2]).length();const l=_v1$5.set(r[4],r[5],r[6]).length(),c=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_m1$2.copy(this);const d=1/o,f=1/l,v=1/c;return _m1$2.elements[0]*=d,_m1$2.elements[1]*=d,_m1$2.elements[2]*=d,_m1$2.elements[4]*=f,_m1$2.elements[5]*=f,_m1$2.elements[6]*=f,_m1$2.elements[8]*=v,_m1$2.elements[9]*=v,_m1$2.elements[10]*=v,t.setFromRotationMatrix(_m1$2),a.x=o,a.y=l,a.z=c,this}makePerspective(e,t,a,r,o,l,c=WebGLCoordinateSystem){const s=this.elements,d=2*o/(t-e),f=2*o/(a-r),v=(t+e)/(t-e),g=(a+r)/(a-r);let M,h;if(c===WebGLCoordinateSystem)M=-(l+o)/(l-o),h=-2*l*o/(l-o);else if(c===WebGPUCoordinateSystem)M=-l/(l-o),h=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return s[0]=d,s[4]=0,s[8]=v,s[12]=0,s[1]=0,s[5]=f,s[9]=g,s[13]=0,s[2]=0,s[6]=0,s[10]=M,s[14]=h,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,a,r,o,l,c=WebGLCoordinateSystem){const s=this.elements,d=1/(t-e),f=1/(a-r),v=1/(l-o),g=(t+e)*d,M=(a+r)*f;let h,A;if(c===WebGLCoordinateSystem)h=(l+o)*v,A=-2*v;else if(c===WebGPUCoordinateSystem)h=o*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return s[0]=2*d,s[4]=0,s[8]=0,s[12]=-g,s[1]=0,s[5]=2*f,s[9]=0,s[13]=-M,s[2]=0,s[6]=0,s[10]=A,s[14]=-h,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let r=0;r<16;r++)if(t[r]!==a[r])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,a=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,r=this._order){return this._x=e,this._y=t,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const r=e.elements,o=r[0],l=r[4],c=r[8],s=r[1],d=r[5],f=r[9],v=r[2],g=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,M),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(s,d)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(s,o));break;case"ZYX":this._y=Math.asin(-clamp(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(s,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(clamp(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,a=new Quaternion,r=new Vector3(1,1,1);function o(){a.setFromEuler(t,!1)}function l(){t.setFromQuaternion(a,void 0,!1)}t._onChange(o),a._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?_target.copy(e):_target.set(e,t,a);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1$1.lookAt(_position$3,_target,this.up):_m1$1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1$1),r&&(_m1$1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1$1),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,r=this.children.length;a<r;a++){const l=this.children[a].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,s){return c[s.uuid]===void 0&&(c[s.uuid]=s.toJSON(e)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const s=c.shapes;if(Array.isArray(s))for(let d=0,f=s.length;d<f;d++){const v=s[d];o(e.shapes,v)}else o(e.shapes,s)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let s=0,d=this.material.length;s<d;s++)c.push(o(e.materials,this.material[s]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const s=this.animations[c];r.animations.push(o(e.animations,s))}}if(t){const c=l(e.geometries),s=l(e.materials),d=l(e.textures),f=l(e.images),v=l(e.shapes),g=l(e.skeletons),M=l(e.animations),h=l(e.nodes);c.length>0&&(a.geometries=c),s.length>0&&(a.materials=s),d.length>0&&(a.textures=d),f.length>0&&(a.images=f),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),M.length>0&&(a.animations=M),h.length>0&&(a.nodes=h)}return a.object=r,a;function l(c){const s=[];for(const d in c){const f=c[d];delete f.metadata,s.push(f)}return s}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(e=new Vector3,t=new Vector3,a=new Vector3){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,r){r.subVectors(a,t),_v0$1.subVectors(e,t),r.cross(_v0$1);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,a,r,o){_v0$1.subVectors(r,t),_v1$3.subVectors(a,t),_v2$2.subVectors(e,t);const l=_v0$1.dot(_v0$1),c=_v0$1.dot(_v1$3),s=_v0$1.dot(_v2$2),d=_v1$3.dot(_v1$3),f=_v1$3.dot(_v2$2),v=l*d-c*c;if(v===0)return o.set(0,0,0),null;const g=1/v,M=(d*s-c*f)*g,h=(l*f-c*s)*g;return o.set(1-M-h,h,M)}static containsPoint(e,t,a,r){return this.getBarycoord(e,t,a,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,a,r,o,l,c,s){return this.getBarycoord(e,t,a,r,_v3$2)===null?(s.x=0,s.y=0,"z"in s&&(s.z=0),"w"in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(o,_v3$2.x),s.addScaledVector(l,_v3$2.y),s.addScaledVector(c,_v3$2.z),s)}static getInterpolatedAttribute(e,t,a,r,o,l){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(e,t),_v41.fromBufferAttribute(e,a),_v42.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(_v40,o.x),l.addScaledVector(_v41,o.y),l.addScaledVector(_v42,o.z),l}static isFrontFacing(e,t,a,r){return _v0$1.subVectors(a,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(r)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,r){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,a,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,r,o){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,a,r,o)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,r=this.b,o=this.c;let l,c;_vab.subVectors(r,a),_vac.subVectors(o,a),_vap.subVectors(e,a);const s=_vab.dot(_vap),d=_vac.dot(_vap);if(s<=0&&d<=0)return t.copy(a);_vbp.subVectors(e,r);const f=_vab.dot(_vbp),v=_vac.dot(_vbp);if(f>=0&&v<=f)return t.copy(r);const g=s*v-f*d;if(g<=0&&s>=0&&f<=0)return l=s/(s-f),t.copy(a).addScaledVector(_vab,l);_vcp.subVectors(e,o);const M=_vab.dot(_vcp),h=_vac.dot(_vcp);if(h>=0&&M<=h)return t.copy(o);const A=M*d-s*h;if(A<=0&&d>=0&&h<=0)return c=d/(d-h),t.copy(a).addScaledVector(_vac,c);const x=f*h-M*v;if(x<=0&&v-f>=0&&M-h>=0)return _vbc.subVectors(o,r),c=(v-f)/(v-f+(M-h)),t.copy(r).addScaledVector(_vbc,c);const m=1/(x+A+g);return l=A*m,c=g*m,t.copy(a).addScaledVector(_vab,l).addScaledVector(_vac,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Color{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,a,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=a,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(e,t,a,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),a=clamp(a,0,1),t===0)this.r=this.g=this.b=a;else{const o=a<=.5?a*(1+t):a+t-a*t,l=2*a-o;this.r=hue2rgb(l,o,e+1/3),this.g=hue2rgb(l,o,e),this.b=hue2rgb(l,o,e-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(e,t=SRGBColorSpace){function a(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const a=_colorKeywords[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const a=_color.r,r=_color.g,o=_color.b,l=Math.max(a,r,o),c=Math.min(a,r,o);let s,d;const f=(c+l)/2;if(c===l)s=0,d=0;else{const v=l-c;switch(d=f<=.5?v/(l+c):v/(2-l-c),l){case a:s=(r-o)/v+(r<o?6:0);break;case r:s=(o-a)/v+2;break;case o:s=(a-r)/v+4;break}s/=6}return e.h=s,e.s=d,e.l=f,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,a=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,t,a){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const a=lerp(_hslA.h,_hslB.h,t),r=lerp(_hslA.s,_hslB.s,t),o=lerp(_hslA.l,_hslB.l,t);return this.setHSL(a,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*a+o[6]*r,this.g=o[1]*t+o[4]*a+o[7]*r,this.b=o[2]*t+o[5]*a+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(a.blending=this.blending),this.side!==FrontSide&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(a.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(a.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(a.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(o){const l=[];for(const c in o){const s=o[c];delete s.metadata,l.push(s)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(a.textures=o),l.length>0&&(a.images=l)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const r=t.length;a=new Array(r);for(let o=0;o!==r;++o)a[o]=t[o].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;let _id$2=0;class BufferAttribute{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=denormalize(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=normalize(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),a=normalize(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),a=normalize(a,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,t,a,r,o){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),a=normalize(a,this.array),r=normalize(r,this.array),o=normalize(o,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,a){super(new Float32Array(e),t,a)}}let _id$1=0;const _m1$3=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const o=new Matrix3().getNormalMatrix(e);a.applyNormalMatrix(o),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$3.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$3),this}rotateX(e){return _m1$3.makeRotationX(e),this.applyMatrix4(_m1$3),this}rotateY(e){return _m1$3.makeRotationY(e),this.applyMatrix4(_m1$3),this}rotateZ(e){return _m1$3.makeRotationZ(e),this.applyMatrix4(_m1$3),this}translate(e,t,a){return _m1$3.makeTranslation(e,t,a),this.applyMatrix4(_m1$3),this}scale(e,t,a){return _m1$3.makeScale(e,t,a),this.applyMatrix4(_m1$3),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];a.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Float32BufferAttribute(a,3))}else{const a=Math.min(e.length,t.count);for(let r=0;r<a;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];_box$2.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const a=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];_boxMorphTargets.setFromBufferAttribute(c),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(a);let r=0;for(let o=0,l=e.count;o<l;o++)_vector$8.fromBufferAttribute(e,o),r=Math.max(r,a.distanceToSquared(_vector$8));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],s=this.morphTargetsRelative;for(let d=0,f=c.count;d<f;d++)_vector$8.fromBufferAttribute(c,d),s&&(_offset.fromBufferAttribute(e,d),_vector$8.add(_offset)),r=Math.max(r,a.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*a.count),4));const l=this.getAttribute("tangent"),c=[],s=[];for(let Z=0;Z<a.count;Z++)c[Z]=new Vector3,s[Z]=new Vector3;const d=new Vector3,f=new Vector3,v=new Vector3,g=new Vector2,M=new Vector2,h=new Vector2,A=new Vector3,x=new Vector3;function m(Z,N,L){d.fromBufferAttribute(a,Z),f.fromBufferAttribute(a,N),v.fromBufferAttribute(a,L),g.fromBufferAttribute(o,Z),M.fromBufferAttribute(o,N),h.fromBufferAttribute(o,L),f.sub(d),v.sub(d),M.sub(g),h.sub(g);const q=1/(M.x*h.y-h.x*M.y);isFinite(q)&&(A.copy(f).multiplyScalar(h.y).addScaledVector(v,-M.y).multiplyScalar(q),x.copy(v).multiplyScalar(M.x).addScaledVector(f,-h.x).multiplyScalar(q),c[Z].add(A),c[N].add(A),c[L].add(A),s[Z].add(x),s[N].add(x),s[L].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Z=0,N=U.length;Z<N;++Z){const L=U[Z],q=L.start,se=L.count;for(let ee=q,re=q+se;ee<re;ee+=3)m(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const T=new Vector3,P=new Vector3,H=new Vector3,G=new Vector3;function W(Z){H.fromBufferAttribute(r,Z),G.copy(H);const N=c[Z];T.copy(N),T.sub(H.multiplyScalar(H.dot(N))).normalize(),P.crossVectors(G,N);const q=P.dot(s[Z])<0?-1:1;l.setXYZW(Z,T.x,T.y,T.z,q)}for(let Z=0,N=U.length;Z<N;++Z){const L=U[Z],q=L.start,se=L.count;for(let ee=q,re=q+se;ee<re;ee+=3)W(e.getX(ee+0)),W(e.getX(ee+1)),W(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let g=0,M=a.count;g<M;g++)a.setXYZ(g,0,0,0);const r=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,s=new Vector3,d=new Vector3,f=new Vector3,v=new Vector3;if(e)for(let g=0,M=e.count;g<M;g+=3){const h=e.getX(g+0),A=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,h),o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,x),f.subVectors(l,o),v.subVectors(r,o),f.cross(v),c.fromBufferAttribute(a,h),s.fromBufferAttribute(a,A),d.fromBufferAttribute(a,x),c.add(f),s.add(f),d.add(f),a.setXYZ(h,c.x,c.y,c.z),a.setXYZ(A,s.x,s.y,s.z),a.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,M=t.count;g<M;g+=3)r.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),f.subVectors(l,o),v.subVectors(r,o),f.cross(v),a.setXYZ(g+0,f.x,f.y,f.z),a.setXYZ(g+1,f.x,f.y,f.z),a.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(c,s){const d=c.array,f=c.itemSize,v=c.normalized,g=new d.constructor(s.length*f);let M=0,h=0;for(let A=0,x=s.length;A<x;A++){c.isInterleavedBufferAttribute?M=s[A]*c.data.stride+c.offset:M=s[A]*f;for(let m=0;m<f;m++)g[h++]=d[M++]}return new BufferAttribute(g,f,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,a=this.index.array,r=this.attributes;for(const c in r){const s=r[c],d=e(s,a);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const s=[],d=o[c];for(let f=0,v=d.length;f<v;f++){const g=d[f],M=e(g,a);s.push(M)}t.morphAttributes[c]=s}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,s=l.length;c<s;c++){const d=l[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const s=this.parameters;for(const d in s)s[d]!==void 0&&(e[d]=s[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const s in a){const d=a[s];e.data.attributes[s]=d.toJSON(e.data)}const r={};let o=!1;for(const s in this.morphAttributes){const d=this.morphAttributes[s],f=[];for(let v=0,g=d.length;v<g;v++){const M=d[v];f.push(M.toJSON(e.data))}f.length>0&&(r[s]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const f=r[d];this.setAttribute(d,f.clone(t))}const o=e.morphAttributes;for(const d in o){const f=[],v=o[d];for(let g=0,M=v.length;g<M;g++)f.push(v[g].clone(t));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,f=l.length;d<f;d++){const v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const a=this.geometry,r=a.attributes.position,o=a.morphAttributes.position,l=a.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(o&&c){_morphA.set(0,0,0);for(let s=0,d=o.length;s<d;s++){const f=c[s],v=o[s];f!==0&&(_tempA.fromBufferAttribute(v,e),l?_morphA.addScaledVector(_tempA,f):_morphA.addScaledVector(_tempA.sub(t),f))}t.add(_morphA)}return t}raycast(e,t){const a=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),_sphere$6.copy(a.boundingSphere),_sphere$6.applyMatrix4(o),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(o).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(a.boundingBox!==null&&_ray$3.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,a){let r;const o=this.geometry,l=this.material,c=o.index,s=o.attributes.position,d=o.attributes.uv,f=o.attributes.uv1,v=o.attributes.normal,g=o.groups,M=o.drawRange;if(c!==null)if(Array.isArray(l))for(let h=0,A=g.length;h<A;h++){const x=g[h],m=l[x.materialIndex],U=Math.max(x.start,M.start),T=Math.min(c.count,Math.min(x.start+x.count,M.start+M.count));for(let P=U,H=T;P<H;P+=3){const G=c.getX(P),W=c.getX(P+1),Z=c.getX(P+2);r=checkGeometryIntersection(this,m,e,a,d,f,v,G,W,Z),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const h=Math.max(0,M.start),A=Math.min(c.count,M.start+M.count);for(let x=h,m=A;x<m;x+=3){const U=c.getX(x),T=c.getX(x+1),P=c.getX(x+2);r=checkGeometryIntersection(this,l,e,a,d,f,v,U,T,P),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(l))for(let h=0,A=g.length;h<A;h++){const x=g[h],m=l[x.materialIndex],U=Math.max(x.start,M.start),T=Math.min(s.count,Math.min(x.start+x.count,M.start+M.count));for(let P=U,H=T;P<H;P+=3){const G=P,W=P+1,Z=P+2;r=checkGeometryIntersection(this,m,e,a,d,f,v,G,W,Z),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const h=Math.max(0,M.start),A=Math.min(s.count,M.start+M.count);for(let x=h,m=A;x<m;x+=3){const U=x,T=x+1,P=x+2;r=checkGeometryIntersection(this,l,e,a,d,f,v,U,T,P),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function checkIntersection$1(n,e,t,a,r,o,l,c){let s;if(e.side===BackSide?s=a.intersectTriangle(l,o,r,!0,c):s=a.intersectTriangle(r,o,l,e.side===FrontSide,c),s===null)return null;_intersectionPointWorld.copy(c),_intersectionPointWorld.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(_intersectionPointWorld);return d<t.near||d>t.far?null:{distance:d,point:_intersectionPointWorld.clone(),object:n}}function checkGeometryIntersection(n,e,t,a,r,o,l,c,s,d){n.getVertexPosition(c,_vA$1),n.getVertexPosition(s,_vB$1),n.getVertexPosition(d,_vC$1);const f=checkIntersection$1(n,e,t,a,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(f){const v=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA$1,_vB$1,_vC$1,v),r&&(f.uv=Triangle.getInterpolatedAttribute(r,c,s,d,v,new Vector2)),o&&(f.uv1=Triangle.getInterpolatedAttribute(o,c,s,d,v,new Vector2)),l&&(f.normal=Triangle.getInterpolatedAttribute(l,c,s,d,v,new Vector3),f.normal.dot(a.direction)>0&&f.normal.multiplyScalar(-1));const g={a:c,b:s,c:d,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,g.normal),f.face=g,f.barycoord=v}return f}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,a=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:r,heightSegments:o,depthSegments:l};const c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const s=[],d=[],f=[],v=[];let g=0,M=0;h("z","y","x",-1,-1,a,t,e,l,o,0),h("z","y","x",1,-1,a,t,-e,l,o,1),h("x","z","y",1,1,e,a,t,r,l,2),h("x","z","y",1,-1,e,a,-t,r,l,3),h("x","y","z",1,-1,e,t,a,r,o,4),h("x","y","z",-1,-1,e,t,-a,r,o,5),this.setIndex(s),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(f,3)),this.setAttribute("uv",new Float32BufferAttribute(v,2));function h(A,x,m,U,T,P,H,G,W,Z,N){const L=P/W,q=H/Z,se=P/2,ee=H/2,re=G/2,ce=W+1,fe=Z+1;let Ee=0,ue=0;const Le=new Vector3;for(let Oe=0;Oe<fe;Oe++){const Ze=Oe*q-ee;for(let vt=0;vt<ce;vt++){const Ft=vt*L-se;Le[A]=Ft*U,Le[x]=Ze*T,Le[m]=re,d.push(Le.x,Le.y,Le.z),Le[A]=0,Le[x]=0,Le[m]=G>0?1:-1,f.push(Le.x,Le.y,Le.z),v.push(vt/W),v.push(1-Oe/Z),Ee+=1}}for(let Oe=0;Oe<Z;Oe++)for(let Ze=0;Ze<W;Ze++){const vt=g+Ze+ce*Oe,Ft=g+Ze+ce*(Oe+1),pe=g+(Ze+1)+ce*(Oe+1),we=g+(Ze+1)+ce*Oe;s.push(vt,Ft,we),s.push(Ft,pe,we),ue+=6}c.addGroup(M,ue,N),M+=ue,g+=Ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(n){const e={};for(const t in n){e[t]={};for(const a in n[t]){const r=n[t][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=r.clone():Array.isArray(r)?e[t][a]=r.slice():e[t][a]=r}}return e}function mergeUniforms(n){const e={};for(let t=0;t<n.length;t++){const a=cloneUniforms(n[t]);for(const r in a)e[r]=a[r]}return e}function cloneUniformsGroups(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function getUnlitUniformColorSpace(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD$1*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD$1*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,a,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD$1*.5*this.fov)/this.zoom,a=2*t,r=this.aspect*a,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const s=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/s,t-=l.offsetY*a/d,r*=l.width/s,a*=l.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,this.add(r);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const d=new PerspectiveCamera(fov,aspect,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,r,o,l,c,s]=t;for(const d of t)this.remove(d);if(e===WebGLCoordinateSystem)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,s,d,f]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(t,o),e.setRenderTarget(a,1,r),e.render(t,l),e.setRenderTarget(a,2,r),e.render(t,c),e.setRenderTarget(a,3,r),e.render(t,s),e.setRenderTarget(a,4,r),e.render(t,d),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,r),e.render(t,f),e.setRenderTarget(v,g,M),e.xr.enabled=h,a.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e=[],t=CubeReflectionMapping,a,r,o,l,c,s,d,f){super(e,t,a,r,o,l,c,s,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new CubeTexture(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new BoxGeometry(5,5,5),o=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:BackSide,blending:NoBlending});o.uniforms.tEquirect.value=t;const l=new Mesh(r,o),c=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,a=!0,r=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,a,r);e.setRenderTarget(o)}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let r=null,o=null,l=null;const c=this._targetRay,s=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,a),m=this._getHandJoint(d,A);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const f=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=f.position.distanceTo(v.position),M=.02,h=.005;d.inputState.pinching&&g>M+h?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-h&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,a),o!==null&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,o.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(o.linearVelocity)):s.hasLinearVelocity=!1,o.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(o.angularVelocity)):s.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,a),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return c!==null&&(c.visible=r!==null),s!==null&&(s.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Group;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class DataTexture extends Texture{constructor(e=null,t=1,a=1,r,o,l,c,s,d=NearestFilter,f=NearestFilter,v,g){super(null,l,c,s,d,f,r,o,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,r){return this.normal.set(e,t,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const r=_vector1.subVectors(a,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(_vector1),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(a,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),o=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$3=new Sphere,_vector$6=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,a=new Plane,r=new Plane,o=new Plane,l=new Plane){this.planes=[e,t,a,r,o,l]}set(e,t,a,r,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(a),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const a=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],s=r[3],d=r[4],f=r[5],v=r[6],g=r[7],M=r[8],h=r[9],A=r[10],x=r[11],m=r[12],U=r[13],T=r[14],P=r[15];if(a[0].setComponents(s-o,g-d,x-M,P-m).normalize(),a[1].setComponents(s+o,g+d,x+M,P+m).normalize(),a[2].setComponents(s+l,g+f,x+h,P+U).normalize(),a[3].setComponents(s-l,g-f,x-h,P-U).normalize(),a[4].setComponents(s-c,g-v,x-A,P-T).normalize(),t===WebGLCoordinateSystem)a[5].setComponents(s+c,g+v,x+A,P+T).normalize();else if(t===WebGPUCoordinateSystem)a[5].setComponents(c,v,A,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(e){return _sphere$3.center.set(0,0,0),_sphere$3.radius=.7071067811865476,_sphere$3.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(e){const t=this.planes,a=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const r=t[a];if(_vector$6.x=r.normal.x>0?e.max.x:e.min.x,_vector$6.y=r.normal.y>0?e.max.y:e.min.y,_vector$6.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CompressedTexture extends Texture{constructor(e,t,a,r,o,l,c,s,d,f,v,g){super(null,l,c,s,d,f,r,o,v,g),this.isCompressedTexture=!0,this.image={width:t,height:a},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class DepthTexture extends Texture{constructor(e,t,a=UnsignedIntType,r,o,l,c=NearestFilter,s=NearestFilter,d,f=DepthFormat){if(f!==DepthFormat&&f!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,o,l,c,s,f,a,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Source(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:r};const o=e/2,l=t/2,c=Math.floor(a),s=Math.floor(r),d=c+1,f=s+1,v=e/c,g=t/s,M=[],h=[],A=[],x=[];for(let m=0;m<f;m++){const U=m*g-l;for(let T=0;T<d;T++){const P=T*v-o;h.push(P,-U,0),A.push(0,0,1),x.push(T/c),x.push(1-m/s)}}for(let m=0;m<s;m++)for(let U=0;U<c;U++){const T=U+d*m,P=U+d*(m+1),H=U+1+d*(m+1),G=U+1+d*m;M.push(T,P,G),M.push(P,H,G)}this.setIndex(M),this.setAttribute("position",new Float32BufferAttribute(h,3)),this.setAttribute("normal",new Float32BufferAttribute(A,3)),this.setAttribute("uv",new Float32BufferAttribute(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,a=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=a-e,l=a+e,c=r+t,s=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,c-=f*this.view.offsetY,s=c-f*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function getByteLength(n,e,t,a){const r=getTextureTypeByteLength(a);switch(t){case AlphaFormat:return n*e;case RedFormat:return n*e/r.components*r.byteLength;case RedIntegerFormat:return n*e/r.components*r.byteLength;case RGFormat:return n*e*2/r.components*r.byteLength;case RGIntegerFormat:return n*e*2/r.components*r.byteLength;case RGBFormat:return n*e*3/r.components*r.byteLength;case RGBAFormat:return n*e*4/r.components*r.byteLength;case RGBAIntegerFormat:return n*e*4/r.components*r.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(n,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(n,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(n/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(n/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function getTextureTypeByteLength(n){switch(n){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function WebGLAnimation(){let n=null,e=!1,t=null,a=null;function r(o,l){t(o,l),a=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(a=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function WebGLAttributes(n){const e=new WeakMap;function t(c,s){const d=c.array,f=c.usage,v=d.byteLength,g=n.createBuffer();n.bindBuffer(s,g),n.bufferData(s,d,f),c.onUploadCallback();let M;if(d instanceof Float32Array)M=n.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?M=n.HALF_FLOAT:M=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=n.SHORT;else if(d instanceof Uint32Array)M=n.UNSIGNED_INT;else if(d instanceof Int32Array)M=n.INT;else if(d instanceof Int8Array)M=n.BYTE;else if(d instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:v}}function a(c,s,d){const f=s.array,v=s.updateRanges;if(n.bindBuffer(d,c),v.length===0)n.bufferSubData(d,0,f);else{v.sort((M,h)=>M.start-h.start);let g=0;for(let M=1;M<v.length;M++){const h=v[g],A=v[M];A.start<=h.start+h.count+1?h.count=Math.max(h.count,A.start+A.count-h.start):(++g,v[g]=A)}v.length=g+1;for(let M=0,h=v.length;M<h;M++){const A=v[M];n.bufferSubData(d,A.start*f.BYTES_PER_ELEMENT,f,A.start,A.count)}s.clearUpdateRanges()}s.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const s=e.get(c);s&&(n.deleteBuffer(s.buffer),e.delete(c))}function l(c,s){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,s));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,s),d.version=c.version}}return{get:r,remove:o,update:l}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
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
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,common=`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
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
}`,lights_fragment_begin=`
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
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
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
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
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
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
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
}`,vertex$1=`uniform float rotation;
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(n,e,t,a,r,o,l){const c=new Color(0);let s=o===!0?0:1,d,f,v=null,g=0,M=null;function h(T){let P=T.isScene===!0?T.background:null;return P&&P.isTexture&&(P=(T.backgroundBlurriness>0?t:e).get(P)),P}function A(T){let P=!1;const H=h(T);H===null?m(c,s):H&&H.isColor&&(m(H,1),P=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?a.buffers.color.setClear(0,0,0,1,l):G==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,l),(n.autoClear||P)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,P){const H=h(P);H&&(H.isCubeTexture||H.mapping===CubeUVReflectionMapping)?(f===void 0&&(f=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(G,W,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),_e1$1.copy(P.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),f.material.uniforms.envMap.value=H,f.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),f.material.toneMapped=ColorManagement.getTransfer(H.colorSpace)!==SRGBTransfer,(v!==H||g!==H.version||M!==n.toneMapping)&&(f.material.needsUpdate=!0,v=H,g=H.version,M=n.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):H&&H.isTexture&&(d===void 0&&(d=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=H,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=ColorManagement.getTransfer(H.colorSpace)!==SRGBTransfer,H.matrixAutoUpdate===!0&&H.updateMatrix(),d.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||g!==H.version||M!==n.toneMapping)&&(d.material.needsUpdate=!0,v=H,g=H.version,M=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function m(T,P){T.getRGB(_rgb,getUnlitUniformColorSpace(n)),a.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,P,l)}function U(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,P=1){c.set(T),s=P,m(c,s)},getClearAlpha:function(){return s},setClearAlpha:function(T){s=T,m(c,s)},render:A,addToRenderList:x,dispose:U}}function WebGLBindingStates(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),a={},r=g(null);let o=r,l=!1;function c(L,q,se,ee,re){let ce=!1;const fe=v(ee,se,q);o!==fe&&(o=fe,d(o.object)),ce=M(L,ee,se,re),ce&&h(L,ee,se,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(ce||l)&&(l=!1,P(L,q,se,ee),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function s(){return n.createVertexArray()}function d(L){return n.bindVertexArray(L)}function f(L){return n.deleteVertexArray(L)}function v(L,q,se){const ee=se.wireframe===!0;let re=a[L.id];re===void 0&&(re={},a[L.id]=re);let ce=re[q.id];ce===void 0&&(ce={},re[q.id]=ce);let fe=ce[ee];return fe===void 0&&(fe=g(s()),ce[ee]=fe),fe}function g(L){const q=[],se=[],ee=[];for(let re=0;re<t;re++)q[re]=0,se[re]=0,ee[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:se,attributeDivisors:ee,object:L,attributes:{},index:null}}function M(L,q,se,ee){const re=o.attributes,ce=q.attributes;let fe=0;const Ee=se.getAttributes();for(const ue in Ee)if(Ee[ue].location>=0){const Oe=re[ue];let Ze=ce[ue];if(Ze===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(Ze=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(Ze=L.instanceColor)),Oe===void 0||Oe.attribute!==Ze||Ze&&Oe.data!==Ze.data)return!0;fe++}return o.attributesNum!==fe||o.index!==ee}function h(L,q,se,ee){const re={},ce=q.attributes;let fe=0;const Ee=se.getAttributes();for(const ue in Ee)if(Ee[ue].location>=0){let Oe=ce[ue];Oe===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(Oe=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(Oe=L.instanceColor));const Ze={};Ze.attribute=Oe,Oe&&Oe.data&&(Ze.data=Oe.data),re[ue]=Ze,fe++}o.attributes=re,o.attributesNum=fe,o.index=ee}function A(){const L=o.newAttributes;for(let q=0,se=L.length;q<se;q++)L[q]=0}function x(L){m(L,0)}function m(L,q){const se=o.newAttributes,ee=o.enabledAttributes,re=o.attributeDivisors;se[L]=1,ee[L]===0&&(n.enableVertexAttribArray(L),ee[L]=1),re[L]!==q&&(n.vertexAttribDivisor(L,q),re[L]=q)}function U(){const L=o.newAttributes,q=o.enabledAttributes;for(let se=0,ee=q.length;se<ee;se++)q[se]!==L[se]&&(n.disableVertexAttribArray(se),q[se]=0)}function T(L,q,se,ee,re,ce,fe){fe===!0?n.vertexAttribIPointer(L,q,se,re,ce):n.vertexAttribPointer(L,q,se,ee,re,ce)}function P(L,q,se,ee){A();const re=ee.attributes,ce=se.getAttributes(),fe=q.defaultAttributeValues;for(const Ee in ce){const ue=ce[Ee];if(ue.location>=0){let Le=re[Ee];if(Le===void 0&&(Ee==="instanceMatrix"&&L.instanceMatrix&&(Le=L.instanceMatrix),Ee==="instanceColor"&&L.instanceColor&&(Le=L.instanceColor)),Le!==void 0){const Oe=Le.normalized,Ze=Le.itemSize,vt=e.get(Le);if(vt===void 0)continue;const Ft=vt.buffer,pe=vt.type,we=vt.bytesPerElement,ke=pe===n.INT||pe===n.UNSIGNED_INT||Le.gpuType===IntType;if(Le.isInterleavedBufferAttribute){const Pe=Le.data,Qe=Pe.stride,At=Le.offset;if(Pe.isInstancedInterleavedBuffer){for(let st=0;st<ue.locationSize;st++)m(ue.location+st,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let st=0;st<ue.locationSize;st++)x(ue.location+st);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let st=0;st<ue.locationSize;st++)T(ue.location+st,Ze/ue.locationSize,pe,Oe,Qe*we,(At+Ze/ue.locationSize*st)*we,ke)}else{if(Le.isInstancedBufferAttribute){for(let Pe=0;Pe<ue.locationSize;Pe++)m(ue.location+Pe,Le.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Pe=0;Pe<ue.locationSize;Pe++)x(ue.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let Pe=0;Pe<ue.locationSize;Pe++)T(ue.location+Pe,Ze/ue.locationSize,pe,Oe,Ze*we,Ze/ue.locationSize*Pe*we,ke)}}else if(fe!==void 0){const Oe=fe[Ee];if(Oe!==void 0)switch(Oe.length){case 2:n.vertexAttrib2fv(ue.location,Oe);break;case 3:n.vertexAttrib3fv(ue.location,Oe);break;case 4:n.vertexAttrib4fv(ue.location,Oe);break;default:n.vertexAttrib1fv(ue.location,Oe)}}}}U()}function H(){Z();for(const L in a){const q=a[L];for(const se in q){const ee=q[se];for(const re in ee)f(ee[re].object),delete ee[re];delete q[se]}delete a[L]}}function G(L){if(a[L.id]===void 0)return;const q=a[L.id];for(const se in q){const ee=q[se];for(const re in ee)f(ee[re].object),delete ee[re];delete q[se]}delete a[L.id]}function W(L){for(const q in a){const se=a[q];if(se[L.id]===void 0)continue;const ee=se[L.id];for(const re in ee)f(ee[re].object),delete ee[re];delete se[L.id]}}function Z(){N(),l=!0,o!==r&&(o=r,d(o.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:Z,resetDefaultState:N,dispose:H,releaseStatesOfGeometry:G,releaseStatesOfProgram:W,initAttributes:A,enableAttribute:x,disableUnusedAttributes:U}}function WebGLBufferRenderer(n,e,t){let a;function r(d){a=d}function o(d,f){n.drawArrays(a,d,f),t.update(f,a,1)}function l(d,f,v){v!==0&&(n.drawArraysInstanced(a,d,f,v),t.update(f,a,v))}function c(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,f,0,v);let M=0;for(let h=0;h<v;h++)M+=f[h];t.update(M,a,1)}function s(d,f,v,g){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let h=0;h<d.length;h++)l(d[h],f[h],g[h]);else{M.multiDrawArraysInstancedWEBGL(a,d,0,f,0,g,0,v);let h=0;for(let A=0;A<v;A++)h+=f[A]*g[A];t.update(h,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=s}function WebGLCapabilities(n,e,t,a){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(W){return!(W!==RGBAFormat&&a.convert(W)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(W){const Z=W===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==UnsignedByteType&&a.convert(W)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==FloatType&&!Z)}function s(W){if(W==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const f=s(d);f!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",f,"instead."),d=f);const v=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=h>0,G=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:s,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:g,maxTextures:M,maxVertexTextures:h,maxTextureSize:A,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:U,maxVaryings:T,maxFragmentUniforms:P,vertexTextures:H,maxSamples:G}}function WebGLClipping(n){const e=this;let t=null,a=0,r=!1,o=!1;const l=new Plane,c=new Matrix3,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||a!==0||r;return r=g,a=v.length,M},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,g){t=f(v,g,0)},this.setState=function(v,g,M){const h=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,m=n.get(v);if(!r||h===null||h.length===0||o&&!x)o?f(null):d();else{const U=o?0:a,T=U*4;let P=m.clippingState||null;s.value=P,P=f(h,g,T,M);for(let H=0;H!==T;++H)P[H]=t[H];m.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function d(){s.value!==t&&(s.value=t,s.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function f(v,g,M,h){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=s.value,h!==!0||x===null){const m=M+A*4,U=g.matrixWorldInverse;c.getNormalMatrix(U),(x===null||x.length<m)&&(x=new Float32Array(m));for(let T=0,P=M;T!==A;++T,P+=4)l.copy(v[T]).applyMatrix4(U,c),l.normal.toArray(x,P),x[P+3]=l.constant}s.value=x,s.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function WebGLCubeMaps(n){let e=new WeakMap;function t(l,c){return c===EquirectangularReflectionMapping?l.mapping=CubeReflectionMapping:c===EquirectangularRefractionMapping&&(l.mapping=CubeRefractionMapping),l}function a(l){if(l&&l.isTexture){const c=l.mapping;if(c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping)if(e.has(l)){const s=e.get(l).texture;return t(s,l.mapping)}else{const s=l.image;if(s&&s.height>0){const d=new WebGLCubeRenderTarget(s.height);return d.fromEquirectangularTexture(n,l),e.set(l,d),l.addEventListener("dispose",r),t(d.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const s=e.get(c);s!==void 0&&(e.delete(c),s.dispose())}function o(){e=new WeakMap}return{get:a,dispose:o}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)],_origin=new Vector3;class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,r=100,o={}){const{size:l=256,position:c=_origin}=o;_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,a,r,s,c),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,a);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(o)),this._blurMaterial=_getBlurShader(o,e,t)}return r}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,a,r,o){const s=new PerspectiveCamera(90,1,t,a),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(_clearColor),v.toneMapping=NoToneMapping,v.autoClear=!1;const h=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),A=new Mesh(new BoxGeometry,h);let x=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,x=!0):(h.color.copy(_clearColor),x=!0);for(let U=0;U<6;U++){const T=U%3;T===0?(s.up.set(0,d[U],0),s.position.set(o.x,o.y,o.z),s.lookAt(o.x+f[U],o.y,o.z)):T===1?(s.up.set(0,0,d[U]),s.position.set(o.x,o.y,o.z),s.lookAt(o.x,o.y+f[U],o.z)):(s.up.set(0,d[U],0),s.position.set(o.x,o.y,o.z),s.lookAt(o.x,o.y,o.z+f[U]));const P=this._cubeSize;_setViewport(r,T*P,U>2?P:0,P,P),v.setRenderTarget(r),x&&v.render(A,s),v.render(e,s)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=M,v.autoClear=g,e.background=m}_textureToCubeUV(e,t){const a=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Mesh(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const s=this._cubeSize;_setViewport(t,0,0,3*s,2*s),a.setRenderTarget(t),a.render(l,_flatCamera)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=_axisDirections[(r-o-1)%_axisDirections.length];this._blur(e,o-1,o,l,c)}t.autoClear=a}_blur(e,t,a,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,a,r,"latitudinal",o),this._halfBlur(l,e,a,a,r,"longitudinal",o)}_halfBlur(e,t,a,r,o,l,c){const s=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,v=new Mesh(this._lodPlanes[r],d),g=d.uniforms,M=this._sizeLods[a]-1,h=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*MAX_SAMPLES-1),A=o/h,x=isFinite(o)?1+Math.floor(f*A):MAX_SAMPLES;x>MAX_SAMPLES&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${MAX_SAMPLES}`);const m=[];let U=0;for(let W=0;W<MAX_SAMPLES;++W){const Z=W/A,N=Math.exp(-Z*Z/2);m.push(N),W===0?U+=N:W<x&&(U+=2*N)}for(let W=0;W<m.length;W++)m[W]=m[W]/U;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=m,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:T}=this;g.dTheta.value=h,g.mipInt.value=T-a;const P=this._sizeLods[r],H=3*P*(r>T-LOD_MIN?r-T+LOD_MIN:0),G=4*(this._cubeSize-P);_setViewport(t,H,G,3*P,2*P),s.setRenderTarget(t),s.render(v,_flatCamera)}}function _createPlanes(n){const e=[],t=[],a=[];let r=n;const o=n-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let l=0;l<o;l++){const c=Math.pow(2,r);t.push(c);let s=1/c;l>n-LOD_MIN?s=EXTRA_LOD_SIGMA[l-n+LOD_MIN-1]:l===0&&(s=0),a.push(s);const d=1/(c-2),f=-d,v=1+d,g=[f,f,v,f,v,v,f,f,v,v,f,v],M=6,h=6,A=3,x=2,m=1,U=new Float32Array(A*h*M),T=new Float32Array(x*h*M),P=new Float32Array(m*h*M);for(let G=0;G<M;G++){const W=G%3*2/3-1,Z=G>2?0:-1,N=[W,Z,0,W+2/3,Z,0,W+2/3,Z+1,0,W,Z,0,W+2/3,Z+1,0,W,Z+1,0];U.set(N,A*h*G),T.set(g,x*h*G);const L=[G,G,G,G,G,G];P.set(L,m*h*G)}const H=new BufferGeometry;H.setAttribute("position",new BufferAttribute(U,A)),H.setAttribute("uv",new BufferAttribute(T,x)),H.setAttribute("faceIndex",new BufferAttribute(P,m)),e.push(H),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function _createRenderTarget(n,e,t){const a=new WebGLRenderTarget(n,e,t);return a.texture.mapping=CubeUVReflectionMapping,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function _setViewport(n,e,t,a,r){n.viewport.set(e,t,a,r),n.scissor.set(e,t,a,r)}function _getBlurShader(n,e,t){const a=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(n){let e=new WeakMap,t=null;function a(c){if(c&&c.isTexture){const s=c.mapping,d=s===EquirectangularReflectionMapping||s===EquirectangularRefractionMapping,f=s===CubeReflectionMapping||s===CubeRefractionMapping;if(d||f){let v=e.get(c);const g=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new PMREMGenerator(n)),v=d?t.fromEquirectangular(c,v):t.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),v.texture;if(v!==void 0)return v.texture;{const M=c.image;return d&&M&&M.height>0||f&&M&&r(M)?(t===null&&(t=new PMREMGenerator(n)),v=d?t.fromEquirectangular(c):t.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),c.addEventListener("dispose",o),v.texture):null}}}return c}function r(c){let s=0;const d=6;for(let f=0;f<d;f++)c[f]!==void 0&&s++;return s===d}function o(c){const s=c.target;s.removeEventListener("dispose",o);const d=e.get(s);d!==void 0&&(e.delete(s),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:l}}function WebGLExtensions(n){const e={};function t(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(a)}return e[a]=r,r}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const r=t(a);return r===null&&warnOnce("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function WebGLGeometries(n,e,t,a){const r={},o=new WeakMap;function l(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const h in g.attributes)e.remove(g.attributes[h]);g.removeEventListener("dispose",l),delete r[g.id];const M=o.get(g);M&&(e.remove(M),o.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(v,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,t.memory.geometries++),g}function s(v){const g=v.attributes;for(const M in g)e.update(g[M],n.ARRAY_BUFFER)}function d(v){const g=[],M=v.index,h=v.attributes.position;let A=0;if(M!==null){const U=M.array;A=M.version;for(let T=0,P=U.length;T<P;T+=3){const H=U[T+0],G=U[T+1],W=U[T+2];g.push(H,G,G,W,W,H)}}else if(h!==void 0){const U=h.array;A=h.version;for(let T=0,P=U.length/3-1;T<P;T+=3){const H=T+0,G=T+1,W=T+2;g.push(H,G,G,W,W,H)}}else return;const x=new(arrayNeedsUint32(g)?Uint32BufferAttribute:Uint16BufferAttribute)(g,1);x.version=A;const m=o.get(v);m&&e.remove(m),o.set(v,x)}function f(v){const g=o.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&d(v)}else d(v);return o.get(v)}return{get:c,update:s,getWireframeAttribute:f}}function WebGLIndexedBufferRenderer(n,e,t){let a;function r(g){a=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function s(g,M){n.drawElements(a,M,o,g*l),t.update(M,a,1)}function d(g,M,h){h!==0&&(n.drawElementsInstanced(a,M,o,g*l,h),t.update(M,a,h))}function f(g,M,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,o,g,0,h);let x=0;for(let m=0;m<h;m++)x+=M[m];t.update(x,a,1)}function v(g,M,h,A){if(h===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g.length;m++)d(g[m]/l,M[m],A[m]);else{x.multiDrawElementsInstancedWEBGL(a,M,0,o,g,0,A,0,h);let m=0;for(let U=0;U<h;U++)m+=M[U]*A[U];t.update(m,a,1)}}this.setMode=r,this.setIndex=c,this.render=s,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=v}function WebGLInfo(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(o,l,c){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=c*(o/3);break;case n.LINES:t.lines+=c*(o/2);break;case n.LINE_STRIP:t.lines+=c*(o-1);break;case n.LINE_LOOP:t.lines+=c*o;break;case n.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:a}}function WebGLMorphtargets(n,e,t){const a=new WeakMap,r=new Vector4;function o(l,c,s){const d=l.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=f!==void 0?f.length:0;let g=a.get(c);if(g===void 0||g.count!==v){let N=function(){W.dispose(),a.delete(c),c.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const M=c.morphAttributes.position!==void 0,h=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let T=0;M===!0&&(T=1),h===!0&&(T=2),A===!0&&(T=3);let P=c.attributes.position.count*T,H=1;P>e.maxTextureSize&&(H=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const G=new Float32Array(P*H*4*v),W=new DataArrayTexture(G,P,H,v);W.type=FloatType,W.needsUpdate=!0;const Z=T*4;for(let L=0;L<v;L++){const q=x[L],se=m[L],ee=U[L],re=P*H*4*L;for(let ce=0;ce<q.count;ce++){const fe=ce*Z;M===!0&&(r.fromBufferAttribute(q,ce),G[re+fe+0]=r.x,G[re+fe+1]=r.y,G[re+fe+2]=r.z,G[re+fe+3]=0),h===!0&&(r.fromBufferAttribute(se,ce),G[re+fe+4]=r.x,G[re+fe+5]=r.y,G[re+fe+6]=r.z,G[re+fe+7]=0),A===!0&&(r.fromBufferAttribute(ee,ce),G[re+fe+8]=r.x,G[re+fe+9]=r.y,G[re+fe+10]=r.z,G[re+fe+11]=ee.itemSize===4?r.w:1)}}g={count:v,texture:W,size:new Vector2(P,H)},a.set(c,g),c.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)s.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let M=0;for(let A=0;A<d.length;A++)M+=d[A];const h=c.morphTargetsRelative?1:1-M;s.getUniforms().setValue(n,"morphTargetBaseInfluence",h),s.getUniforms().setValue(n,"morphTargetInfluences",d)}s.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),s.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function WebGLObjects(n,e,t,a){let r=new WeakMap;function o(s){const d=a.render.frame,f=s.geometry,v=e.get(s,f);if(r.get(v)!==d&&(e.update(v),r.set(v,d)),s.isInstancedMesh&&(s.hasEventListener("dispose",c)===!1&&s.addEventListener("dispose",c),r.get(s)!==d&&(t.update(s.instanceMatrix,n.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,n.ARRAY_BUFFER),r.set(s,d))),s.isSkinnedMesh){const g=s.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return v}function l(){r=new WeakMap}function c(s){const d=s.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:l}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(n,e,t){const a=n[0];if(a<=0||a>0)return n;const r=e*t;let o=arrayCacheF32[r];if(o===void 0&&(o=new Float32Array(r),arrayCacheF32[r]=o),e!==0){a.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,n[l].toArray(o,c)}return o}function arraysEqual(n,e){if(n.length!==e.length)return!1;for(let t=0,a=n.length;t<a;t++)if(n[t]!==e[t])return!1;return!0}function copyArray(n,e){for(let t=0,a=e.length;t<a;t++)n[t]=e[t]}function allocTexUnits(n,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let a=0;a!==e;++a)t[a]=n.allocateTextureUnit();return t}function setValueV1f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;n.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(arraysEqual(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,a))return;mat2array.set(a),n.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,a)}}function setValueM3(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(arraysEqual(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,a))return;mat3array.set(a),n.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,a)}}function setValueM4(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(arraysEqual(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,a))return;mat4array.set(a),n.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,a)}}function setValueV1i(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(n,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(n.uniform1i(this.addr,r),a[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,o=emptyShadowTexture):o=emptyTexture,t.setTexture2D(e||o,r)}function setValueT3D1(n,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(n.uniform1i(this.addr,r),a[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(n,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(n.uniform1i(this.addr,r),a[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(n,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(n.uniform1i(this.addr,r),a[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(n){switch(n){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(n,e){n.uniform1fv(this.addr,e)}function setValueV2fArray(n,e){const t=flatten(e,this.size,2);n.uniform2fv(this.addr,t)}function setValueV3fArray(n,e){const t=flatten(e,this.size,3);n.uniform3fv(this.addr,t)}function setValueV4fArray(n,e){const t=flatten(e,this.size,4);n.uniform4fv(this.addr,t)}function setValueM2Array(n,e){const t=flatten(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(n,e){const t=flatten(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(n,e){const t=flatten(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(n,e){n.uniform1iv(this.addr,e)}function setValueV2iArray(n,e){n.uniform2iv(this.addr,e)}function setValueV3iArray(n,e){n.uniform3iv(this.addr,e)}function setValueV4iArray(n,e){n.uniform4iv(this.addr,e)}function setValueV1uiArray(n,e){n.uniform1uiv(this.addr,e)}function setValueV2uiArray(n,e){n.uniform2uiv(this.addr,e)}function setValueV3uiArray(n,e){n.uniform3uiv(this.addr,e)}function setValueV4uiArray(n,e){n.uniform4uiv(this.addr,e)}function setValueT1Array(n,e,t){const a=this.cache,r=e.length,o=allocTexUnits(t,r);arraysEqual(a,o)||(n.uniform1iv(this.addr,o),copyArray(a,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||emptyTexture,o[l])}function setValueT3DArray(n,e,t){const a=this.cache,r=e.length,o=allocTexUnits(t,r);arraysEqual(a,o)||(n.uniform1iv(this.addr,o),copyArray(a,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||empty3dTexture,o[l])}function setValueT6Array(n,e,t){const a=this.cache,r=e.length,o=allocTexUnits(t,r);arraysEqual(a,o)||(n.uniform1iv(this.addr,o),copyArray(a,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||emptyCubeTexture,o[l])}function setValueT2DArrayArray(n,e,t){const a=this.cache,r=e.length,o=allocTexUnits(t,r);arraysEqual(a,o)||(n.uniform1iv(this.addr,o),copyArray(a,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||emptyArrayTexture,o[l])}function getPureArraySetter(n){switch(n){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const c=r[o];c.setValue(e,t[c.id],a)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(n,e){n.seq.push(e),n.map[e.id]=e}function parseUniform(n,e,t){const a=n.name,r=a.length;for(RePathPart.lastIndex=0;;){const o=RePathPart.exec(a),l=RePathPart.lastIndex;let c=o[1];const s=o[2]==="]",d=o[3];if(s&&(c=c|0),d===void 0||d==="["&&l+2===r){addUniform(t,d===void 0?new SingleUniform(c,n,e):new PureArrayUniform(c,n,e));break}else{let v=t.map[c];v===void 0&&(v=new StructuredUniform(c),addUniform(t,v)),t=v}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);parseUniform(o,l,this)}}setValue(e,t,a,r){const o=this.map[t];o!==void 0&&o.setValue(e,a,r)}setOptional(e,t,a){const r=t[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,t,a,r){for(let o=0,l=t.length;o!==l;++o){const c=t[o],s=a[c.id];s.needsUpdate!==!1&&c.setValue(e,s.value,r)}}static seqWithValue(e,t){const a=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&a.push(l)}return a}}function WebGLShader(n,e,t){const a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),a}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(n,e){const t=n.split(`
`),a=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const c=l+1;a.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return a.join(`
`)}const _m0=new Matrix3;function getEncodingComponents(n){ColorManagement._getMatrix(_m0,ColorManagement.workingColorSpace,n);const e=`mat3( ${_m0.elements.map(t=>t.toFixed(4))} )`;switch(ColorManagement.getTransfer(n)){case LinearTransfer:return[e,"LinearTransferOETF"];case SRGBTransfer:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function getShaderErrors(n,e,t){const a=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(a&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+handleSource(n.getShaderSource(e),l)}else return r}function getTexelEncodingFunction(n,e){const t=getEncodingComponents(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function getToneMappingFunction(n,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="Cineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case AgXToneMapping:t="AgX";break;case NeutralToneMapping:t="Neutral";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _v0=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0);const n=_v0.x.toFixed(4),e=_v0.y.toFixed(4),t=_v0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(n){const e=[];for(const t in n){const a=n[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function fetchAttributeLocations(n,e){const t={},a=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const o=n.getActiveAttrib(e,r),l=o.name;let c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:c}}return t}function filterEmptyLine(n){return n!==""}function replaceLightNums(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(n){return n.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(n,e){let t=ShaderChunk[e];if(t===void 0){const a=shaderChunkMap.get(e);if(a!==void 0)t=ShaderChunk[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(n){return n.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(n,e,t,a){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function generatePrecision(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:a,maxMip:t}}function WebGLProgram(n,e,t,a){const r=n.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const s=generateShadowMapTypeDefine(t),d=generateEnvMapTypeDefine(t),f=generateEnvMapModeDefine(t),v=generateEnvMapBlendingDefine(t),g=generateCubeUVSize(t),M=generateVertexExtensions(t),h=generateDefines(o),A=r.createProgram();let x,m,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(filterEmptyLine).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(filterEmptyLine).join(`
`),m.length>0&&(m+=`
`)):(x=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+s:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),m=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+s:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),getLuminanceFunction(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),l=resolveIncludes(l),l=replaceLightNums(l,t),l=replaceClippingPlaneNums(l,t),c=resolveIncludes(c),c=replaceLightNums(c,t),c=replaceClippingPlaneNums(c,t),l=unrollLoops(l),c=unrollLoops(c),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=U+x+l,P=U+m+c,H=WebGLShader(r,r.VERTEX_SHADER,T),G=WebGLShader(r,r.FRAGMENT_SHADER,P);r.attachShader(A,H),r.attachShader(A,G),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function W(q){if(n.debug.checkShaderErrors){const se=r.getProgramInfoLog(A).trim(),ee=r.getShaderInfoLog(H).trim(),re=r.getShaderInfoLog(G).trim();let ce=!0,fe=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,A,H,G);else{const Ee=getShaderErrors(r,H,"vertex"),ue=getShaderErrors(r,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+se+`
`+Ee+`
`+ue)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ee===""||re==="")&&(fe=!1);fe&&(q.diagnostics={runnable:ce,programLog:se,vertexShader:{log:ee,prefix:x},fragmentShader:{log:re,prefix:m}})}r.deleteShader(H),r.deleteShader(G),Z=new WebGLUniforms(r,A),N=fetchAttributeLocations(r,A)}let Z;this.getUniforms=function(){return Z===void 0&&W(this),Z};let N;this.getAttributes=function(){return N===void 0&&W(this),N};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(A,COMPLETION_STATUS_KHR)),L},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=G,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(a),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new WebGLShaderStage(e),t.set(e,a)),a}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(n,e,t,a,r,o,l){const c=new Layers,s=new WebGLShaderCache,d=new Set,f=[],v=r.logarithmicDepthBuffer,g=r.vertexTextures;let M=r.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return d.add(N),N===0?"uv":`uv${N}`}function x(N,L,q,se,ee){const re=se.fog,ce=ee.geometry,fe=N.isMeshStandardMaterial?se.environment:null,Ee=(N.isMeshStandardMaterial?t:e).get(N.envMap||fe),ue=Ee&&Ee.mapping===CubeUVReflectionMapping?Ee.image.height:null,Le=h[N.type];N.precision!==null&&(M=r.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const Oe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ze=Oe!==void 0?Oe.length:0;let vt=0;ce.morphAttributes.position!==void 0&&(vt=1),ce.morphAttributes.normal!==void 0&&(vt=2),ce.morphAttributes.color!==void 0&&(vt=3);let Ft,pe,we,ke;if(Le){const zt=ShaderLib[Le];Ft=zt.vertexShader,pe=zt.fragmentShader}else Ft=N.vertexShader,pe=N.fragmentShader,s.update(N),we=s.getVertexShaderID(N),ke=s.getFragmentShaderID(N);const Pe=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),At=ee.isInstancedMesh===!0,st=ee.isBatchedMesh===!0,qt=!!N.map,Wt=!!N.matcap,Rt=!!Ee,$=!!N.aoMap,On=!!N.lightMap,Lt=!!N.bumpMap,Ct=!!N.normalMap,tt=!!N.displacementMap,Zt=!!N.emissiveMap,nt=!!N.metalnessMap,O=!!N.roughnessMap,C=N.anisotropy>0,ae=N.clearcoat>0,_e=N.dispersion>0,Me=N.iridescence>0,me=N.sheen>0,Je=N.transmission>0,Ie=C&&!!N.anisotropyMap,ct=ae&&!!N.clearcoatMap,rt=ae&&!!N.clearcoatNormalMap,ye=ae&&!!N.clearcoatRoughnessMap,qe=Me&&!!N.iridescenceMap,ut=Me&&!!N.iridescenceThicknessMap,_t=me&&!!N.sheenColorMap,Ye=me&&!!N.sheenRoughnessMap,Pt=!!N.specularMap,Et=!!N.specularColorMap,Kt=!!N.specularIntensityMap,K=Je&&!!N.transmissionMap,Be=Je&&!!N.thicknessMap,he=!!N.gradientMap,ge=!!N.alphaMap,ze=N.alphaTest>0,Ve=!!N.alphaHash,xt=!!N.extensions;let rn=NoToneMapping;N.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(rn=n.toneMapping);const En={shaderID:Le,shaderType:N.type,shaderName:N.name,vertexShader:Ft,fragmentShader:pe,defines:N.defines,customVertexShaderID:we,customFragmentShaderID:ke,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:st,batchingColor:st&&ee._colorsTexture!==null,instancing:At,instancingColor:At&&ee.instanceColor!==null,instancingMorph:At&&ee.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!N.alphaToCoverage,map:qt,matcap:Wt,envMap:Rt,envMapMode:Rt&&Ee.mapping,envMapCubeUVHeight:ue,aoMap:$,lightMap:On,bumpMap:Lt,normalMap:Ct,displacementMap:g&&tt,emissiveMap:Zt,normalMapObjectSpace:Ct&&N.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Ct&&N.normalMapType===TangentSpaceNormalMap,metalnessMap:nt,roughnessMap:O,anisotropy:C,anisotropyMap:Ie,clearcoat:ae,clearcoatMap:ct,clearcoatNormalMap:rt,clearcoatRoughnessMap:ye,dispersion:_e,iridescence:Me,iridescenceMap:qe,iridescenceThicknessMap:ut,sheen:me,sheenColorMap:_t,sheenRoughnessMap:Ye,specularMap:Pt,specularColorMap:Et,specularIntensityMap:Kt,transmission:Je,transmissionMap:K,thicknessMap:Be,gradientMap:he,opaque:N.transparent===!1&&N.blending===NormalBlending&&N.alphaToCoverage===!1,alphaMap:ge,alphaTest:ze,alphaHash:Ve,combine:N.combine,mapUv:qt&&A(N.map.channel),aoMapUv:$&&A(N.aoMap.channel),lightMapUv:On&&A(N.lightMap.channel),bumpMapUv:Lt&&A(N.bumpMap.channel),normalMapUv:Ct&&A(N.normalMap.channel),displacementMapUv:tt&&A(N.displacementMap.channel),emissiveMapUv:Zt&&A(N.emissiveMap.channel),metalnessMapUv:nt&&A(N.metalnessMap.channel),roughnessMapUv:O&&A(N.roughnessMap.channel),anisotropyMapUv:Ie&&A(N.anisotropyMap.channel),clearcoatMapUv:ct&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:rt&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&A(N.sheenRoughnessMap.channel),specularMapUv:Pt&&A(N.specularMap.channel),specularColorMapUv:Et&&A(N.specularColorMap.channel),specularIntensityMapUv:Kt&&A(N.specularIntensityMap.channel),transmissionMapUv:K&&A(N.transmissionMap.channel),thicknessMapUv:Be&&A(N.thicknessMap.channel),alphaMapUv:ge&&A(N.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ct||C),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(qt||ge),fog:!!re,useFog:N.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Qe,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:vt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:N.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:rn,decodeVideoTexture:qt&&N.map.isVideoTexture===!0&&ColorManagement.getTransfer(N.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:Zt&&N.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(N.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===DoubleSide,flipSided:N.side===BackSide,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:xt&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&N.extensions.multiDraw===!0||st)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return En.vertexUv1s=d.has(1),En.vertexUv2s=d.has(2),En.vertexUv3s=d.has(3),d.clear(),En}function m(N){const L=[];if(N.shaderID?L.push(N.shaderID):(L.push(N.customVertexShaderID),L.push(N.customFragmentShaderID)),N.defines!==void 0)for(const q in N.defines)L.push(q),L.push(N.defines[q]);return N.isRawShaderMaterial===!1&&(U(L,N),T(L,N),L.push(n.outputColorSpace)),L.push(N.customProgramCacheKey),L.join()}function U(N,L){N.push(L.precision),N.push(L.outputColorSpace),N.push(L.envMapMode),N.push(L.envMapCubeUVHeight),N.push(L.mapUv),N.push(L.alphaMapUv),N.push(L.lightMapUv),N.push(L.aoMapUv),N.push(L.bumpMapUv),N.push(L.normalMapUv),N.push(L.displacementMapUv),N.push(L.emissiveMapUv),N.push(L.metalnessMapUv),N.push(L.roughnessMapUv),N.push(L.anisotropyMapUv),N.push(L.clearcoatMapUv),N.push(L.clearcoatNormalMapUv),N.push(L.clearcoatRoughnessMapUv),N.push(L.iridescenceMapUv),N.push(L.iridescenceThicknessMapUv),N.push(L.sheenColorMapUv),N.push(L.sheenRoughnessMapUv),N.push(L.specularMapUv),N.push(L.specularColorMapUv),N.push(L.specularIntensityMapUv),N.push(L.transmissionMapUv),N.push(L.thicknessMapUv),N.push(L.combine),N.push(L.fogExp2),N.push(L.sizeAttenuation),N.push(L.morphTargetsCount),N.push(L.morphAttributeCount),N.push(L.numDirLights),N.push(L.numPointLights),N.push(L.numSpotLights),N.push(L.numSpotLightMaps),N.push(L.numHemiLights),N.push(L.numRectAreaLights),N.push(L.numDirLightShadows),N.push(L.numPointLightShadows),N.push(L.numSpotLightShadows),N.push(L.numSpotLightShadowsWithMaps),N.push(L.numLightProbes),N.push(L.shadowMapType),N.push(L.toneMapping),N.push(L.numClippingPlanes),N.push(L.numClipIntersection),N.push(L.depthPacking)}function T(N,L){c.disableAll(),L.supportsVertexTextures&&c.enable(0),L.instancing&&c.enable(1),L.instancingColor&&c.enable(2),L.instancingMorph&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),L.dispersion&&c.enable(20),L.batchingColor&&c.enable(21),N.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reverseDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),N.push(c.mask)}function P(N){const L=h[N.type];let q;if(L){const se=ShaderLib[L];q=UniformsUtils.clone(se.uniforms)}else q=N.uniforms;return q}function H(N,L){let q;for(let se=0,ee=f.length;se<ee;se++){const re=f[se];if(re.cacheKey===L){q=re,++q.usedTimes;break}}return q===void 0&&(q=new WebGLProgram(n,L,N,o),f.push(q)),q}function G(N){if(--N.usedTimes===0){const L=f.indexOf(N);f[L]=f[f.length-1],f.pop(),N.destroy()}}function W(N){s.remove(N)}function Z(){s.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:P,acquireProgram:H,releaseProgram:G,releaseShaderCache:W,programs:f,dispose:Z}}function WebGLProperties(){let n=new WeakMap;function e(l){return n.has(l)}function t(l){let c=n.get(l);return c===void 0&&(c={},n.set(l,c)),c}function a(l){n.delete(l)}function r(l,c,s){n.get(l)[c]=s}function o(){n=new WeakMap}return{has:e,get:t,remove:a,update:r,dispose:o}}function painterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function reversePainterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function WebGLRenderList(){const n=[];let e=0;const t=[],a=[],r=[];function o(){e=0,t.length=0,a.length=0,r.length=0}function l(v,g,M,h,A,x){let m=n[e];return m===void 0?(m={id:v.id,object:v,geometry:g,material:M,groupOrder:h,renderOrder:v.renderOrder,z:A,group:x},n[e]=m):(m.id=v.id,m.object=v,m.geometry=g,m.material=M,m.groupOrder=h,m.renderOrder=v.renderOrder,m.z=A,m.group=x),e++,m}function c(v,g,M,h,A,x){const m=l(v,g,M,h,A,x);M.transmission>0?a.push(m):M.transparent===!0?r.push(m):t.push(m)}function s(v,g,M,h,A,x){const m=l(v,g,M,h,A,x);M.transmission>0?a.unshift(m):M.transparent===!0?r.unshift(m):t.unshift(m)}function d(v,g){t.length>1&&t.sort(v||painterSortStable),a.length>1&&a.sort(g||reversePainterSortStable),r.length>1&&r.sort(g||reversePainterSortStable)}function f(){for(let v=e,g=n.length;v<g;v++){const M=n[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:a,transparent:r,init:o,push:c,unshift:s,finish:f,sort:d}}function WebGLRenderLists(){let n=new WeakMap;function e(a,r){const o=n.get(a);let l;return o===void 0?(l=new WebGLRenderList,n.set(a,[l])):r>=o.length?(l=new WebGLRenderList,o.push(l)):l=o[r],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return n[e.id]=t,t}}}function ShadowUniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WebGLLights(n){const e=new UniformsCache,t=ShadowUniformsCache(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Vector3);const r=new Vector3,o=new Matrix4,l=new Matrix4;function c(d){let f=0,v=0,g=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let M=0,h=0,A=0,x=0,m=0,U=0,T=0,P=0,H=0,G=0,W=0;d.sort(shadowCastingAndTexturingLightsFirst);for(let N=0,L=d.length;N<L;N++){const q=d[N],se=q.color,ee=q.intensity,re=q.distance,ce=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)f+=se.r*ee,v+=se.g*ee,g+=se.b*ee;else if(q.isLightProbe){for(let fe=0;fe<9;fe++)a.probe[fe].addScaledVector(q.sh.coefficients[fe],ee);W++}else if(q.isDirectionalLight){const fe=e.get(q);if(fe.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const Ee=q.shadow,ue=t.get(q);ue.shadowIntensity=Ee.intensity,ue.shadowBias=Ee.bias,ue.shadowNormalBias=Ee.normalBias,ue.shadowRadius=Ee.radius,ue.shadowMapSize=Ee.mapSize,a.directionalShadow[M]=ue,a.directionalShadowMap[M]=ce,a.directionalShadowMatrix[M]=q.shadow.matrix,U++}a.directional[M]=fe,M++}else if(q.isSpotLight){const fe=e.get(q);fe.position.setFromMatrixPosition(q.matrixWorld),fe.color.copy(se).multiplyScalar(ee),fe.distance=re,fe.coneCos=Math.cos(q.angle),fe.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),fe.decay=q.decay,a.spot[A]=fe;const Ee=q.shadow;if(q.map&&(a.spotLightMap[H]=q.map,H++,Ee.updateMatrices(q),q.castShadow&&G++),a.spotLightMatrix[A]=Ee.matrix,q.castShadow){const ue=t.get(q);ue.shadowIntensity=Ee.intensity,ue.shadowBias=Ee.bias,ue.shadowNormalBias=Ee.normalBias,ue.shadowRadius=Ee.radius,ue.shadowMapSize=Ee.mapSize,a.spotShadow[A]=ue,a.spotShadowMap[A]=ce,P++}A++}else if(q.isRectAreaLight){const fe=e.get(q);fe.color.copy(se).multiplyScalar(ee),fe.halfWidth.set(q.width*.5,0,0),fe.halfHeight.set(0,q.height*.5,0),a.rectArea[x]=fe,x++}else if(q.isPointLight){const fe=e.get(q);if(fe.color.copy(q.color).multiplyScalar(q.intensity),fe.distance=q.distance,fe.decay=q.decay,q.castShadow){const Ee=q.shadow,ue=t.get(q);ue.shadowIntensity=Ee.intensity,ue.shadowBias=Ee.bias,ue.shadowNormalBias=Ee.normalBias,ue.shadowRadius=Ee.radius,ue.shadowMapSize=Ee.mapSize,ue.shadowCameraNear=Ee.camera.near,ue.shadowCameraFar=Ee.camera.far,a.pointShadow[h]=ue,a.pointShadowMap[h]=ce,a.pointShadowMatrix[h]=q.shadow.matrix,T++}a.point[h]=fe,h++}else if(q.isHemisphereLight){const fe=e.get(q);fe.skyColor.copy(q.color).multiplyScalar(ee),fe.groundColor.copy(q.groundColor).multiplyScalar(ee),a.hemi[m]=fe,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,a.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(a.rectAreaLTC1=UniformsLib.LTC_HALF_1,a.rectAreaLTC2=UniformsLib.LTC_HALF_2)),a.ambient[0]=f,a.ambient[1]=v,a.ambient[2]=g;const Z=a.hash;(Z.directionalLength!==M||Z.pointLength!==h||Z.spotLength!==A||Z.rectAreaLength!==x||Z.hemiLength!==m||Z.numDirectionalShadows!==U||Z.numPointShadows!==T||Z.numSpotShadows!==P||Z.numSpotMaps!==H||Z.numLightProbes!==W)&&(a.directional.length=M,a.spot.length=A,a.rectArea.length=x,a.point.length=h,a.hemi.length=m,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=T,a.pointShadowMap.length=T,a.spotShadow.length=P,a.spotShadowMap.length=P,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=T,a.spotLightMatrix.length=P+H-G,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=G,a.numLightProbes=W,Z.directionalLength=M,Z.pointLength=h,Z.spotLength=A,Z.rectAreaLength=x,Z.hemiLength=m,Z.numDirectionalShadows=U,Z.numPointShadows=T,Z.numSpotShadows=P,Z.numSpotMaps=H,Z.numLightProbes=W,a.version=nextVersion++)}function s(d,f){let v=0,g=0,M=0,h=0,A=0;const x=f.matrixWorldInverse;for(let m=0,U=d.length;m<U;m++){const T=d[m];if(T.isDirectionalLight){const P=a.directional[v];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(x),v++}else if(T.isSpotLight){const P=a.spot[M];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(x),M++}else if(T.isRectAreaLight){const P=a.rectArea[h];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),l.identity(),o.copy(T.matrixWorld),o.premultiply(x),l.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),h++}else if(T.isPointLight){const P=a.point[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),g++}else if(T.isHemisphereLight){const P=a.hemi[A];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(x),A++}}}return{setup:c,setupView:s,state:a}}function WebGLRenderState(n){const e=new WebGLLights(n),t=[],a=[];function r(f){d.camera=f,t.length=0,a.length=0}function o(f){t.push(f)}function l(f){a.push(f)}function c(){e.setup(t)}function s(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:c,setupLightsView:s,pushLight:o,pushShadow:l}}function WebGLRenderStates(n){let e=new WeakMap;function t(r,o=0){const l=e.get(r);let c;return l===void 0?(c=new WebGLRenderState(n),e.set(r,[c])):o>=l.length?(c=new WebGLRenderState(n),l.push(c)):c=l[o],c}function a(){e=new WeakMap}return{get:t,dispose:a}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`;function WebGLShadowMap(n,e,t){let a=new Frustum;const r=new Vector2,o=new Vector2,l=new Vector4,c=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),s=new MeshDistanceMaterial,d={},f=t.maxTextureSize,v={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},g=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const h=new BufferGeometry;h.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mesh(h,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let m=this.type;this.render=function(G,W,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||G.length===0)return;const N=n.getRenderTarget(),L=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),se=n.state;se.setBlending(NoBlending),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ee=m!==VSMShadowMap&&this.type===VSMShadowMap,re=m===VSMShadowMap&&this.type!==VSMShadowMap;for(let ce=0,fe=G.length;ce<fe;ce++){const Ee=G[ce],ue=Ee.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",Ee,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;r.copy(ue.mapSize);const Le=ue.getFrameExtents();if(r.multiply(Le),o.copy(ue.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/Le.x),r.x=o.x*Le.x,ue.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/Le.y),r.y=o.y*Le.y,ue.mapSize.y=o.y)),ue.map===null||ee===!0||re===!0){const Ze=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};ue.map!==null&&ue.map.dispose(),ue.map=new WebGLRenderTarget(r.x,r.y,Ze),ue.map.texture.name=Ee.name+".shadowMap",ue.camera.updateProjectionMatrix()}n.setRenderTarget(ue.map),n.clear();const Oe=ue.getViewportCount();for(let Ze=0;Ze<Oe;Ze++){const vt=ue.getViewport(Ze);l.set(o.x*vt.x,o.y*vt.y,o.x*vt.z,o.y*vt.w),se.viewport(l),ue.updateMatrices(Ee,Ze),a=ue.getFrustum(),P(W,Z,ue.camera,Ee,this.type)}ue.isPointLightShadow!==!0&&this.type===VSMShadowMap&&U(ue,Z),ue.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(N,L,q)};function U(G,W){const Z=e.update(A);g.defines.VSM_SAMPLES!==G.blurSamples&&(g.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new WebGLRenderTarget(r.x,r.y)),g.uniforms.shadow_pass.value=G.map.texture,g.uniforms.resolution.value=G.mapSize,g.uniforms.radius.value=G.radius,n.setRenderTarget(G.mapPass),n.clear(),n.renderBufferDirect(W,null,Z,g,A,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,n.setRenderTarget(G.map),n.clear(),n.renderBufferDirect(W,null,Z,M,A,null)}function T(G,W,Z,N){let L=null;const q=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(q!==void 0)L=q;else if(L=Z.isPointLight===!0?s:c,n.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){const se=L.uuid,ee=W.uuid;let re=d[se];re===void 0&&(re={},d[se]=re);let ce=re[ee];ce===void 0&&(ce=L.clone(),re[ee]=ce,W.addEventListener("dispose",H)),L=ce}if(L.visible=W.visible,L.wireframe=W.wireframe,N===VSMShadowMap?L.side=W.shadowSide!==null?W.shadowSide:W.side:L.side=W.shadowSide!==null?W.shadowSide:v[W.side],L.alphaMap=W.alphaMap,L.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,L.map=W.map,L.clipShadows=W.clipShadows,L.clippingPlanes=W.clippingPlanes,L.clipIntersection=W.clipIntersection,L.displacementMap=W.displacementMap,L.displacementScale=W.displacementScale,L.displacementBias=W.displacementBias,L.wireframeLinewidth=W.wireframeLinewidth,L.linewidth=W.linewidth,Z.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const se=n.properties.get(L);se.light=Z}return L}function P(G,W,Z,N,L){if(G.visible===!1)return;if(G.layers.test(W.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&L===VSMShadowMap)&&(!G.frustumCulled||a.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const ee=e.update(G),re=G.material;if(Array.isArray(re)){const ce=ee.groups;for(let fe=0,Ee=ce.length;fe<Ee;fe++){const ue=ce[fe],Le=re[ue.materialIndex];if(Le&&Le.visible){const Oe=T(G,Le,N,L);G.onBeforeShadow(n,G,W,Z,ee,Oe,ue),n.renderBufferDirect(Z,null,ee,Oe,G,ue),G.onAfterShadow(n,G,W,Z,ee,Oe,ue)}}}else if(re.visible){const ce=T(G,re,N,L);G.onBeforeShadow(n,G,W,Z,ee,ce,null),n.renderBufferDirect(Z,null,ee,ce,G,null),G.onAfterShadow(n,G,W,Z,ee,ce,null)}}const se=G.children;for(let ee=0,re=se.length;ee<re;ee++)P(se[ee],W,Z,N,L)}function H(G){G.target.removeEventListener("dispose",H);for(const Z in d){const N=d[Z],L=G.target.uuid;L in N&&(N[L].dispose(),delete N[L])}}}const reversedFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};function WebGLState(n,e){function t(){let K=!1;const Be=new Vector4;let he=null;const ge=new Vector4(0,0,0,0);return{setMask:function(ze){he!==ze&&!K&&(n.colorMask(ze,ze,ze,ze),he=ze)},setLocked:function(ze){K=ze},setClear:function(ze,Ve,xt,rn,En){En===!0&&(ze*=rn,Ve*=rn,xt*=rn),Be.set(ze,Ve,xt,rn),ge.equals(Be)===!1&&(n.clearColor(ze,Ve,xt,rn),ge.copy(Be))},reset:function(){K=!1,he=null,ge.set(-1,0,0,0)}}}function a(){let K=!1,Be=!1,he=null,ge=null,ze=null;return{setReversed:function(Ve){if(Be!==Ve){const xt=e.get("EXT_clip_control");Ve?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),Be=Ve;const rn=ze;ze=null,this.setClear(rn)}},getReversed:function(){return Be},setTest:function(Ve){Ve?Pe(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(Ve){he!==Ve&&!K&&(n.depthMask(Ve),he=Ve)},setFunc:function(Ve){if(Be&&(Ve=reversedFuncs[Ve]),ge!==Ve){switch(Ve){case NeverDepth:n.depthFunc(n.NEVER);break;case AlwaysDepth:n.depthFunc(n.ALWAYS);break;case LessDepth:n.depthFunc(n.LESS);break;case LessEqualDepth:n.depthFunc(n.LEQUAL);break;case EqualDepth:n.depthFunc(n.EQUAL);break;case GreaterEqualDepth:n.depthFunc(n.GEQUAL);break;case GreaterDepth:n.depthFunc(n.GREATER);break;case NotEqualDepth:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Ve}},setLocked:function(Ve){K=Ve},setClear:function(Ve){ze!==Ve&&(Be&&(Ve=1-Ve),n.clearDepth(Ve),ze=Ve)},reset:function(){K=!1,he=null,ge=null,ze=null,Be=!1}}}function r(){let K=!1,Be=null,he=null,ge=null,ze=null,Ve=null,xt=null,rn=null,En=null;return{setTest:function(zt){K||(zt?Pe(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(zt){Be!==zt&&!K&&(n.stencilMask(zt),Be=zt)},setFunc:function(zt,kn,Qn){(he!==zt||ge!==kn||ze!==Qn)&&(n.stencilFunc(zt,kn,Qn),he=zt,ge=kn,ze=Qn)},setOp:function(zt,kn,Qn){(Ve!==zt||xt!==kn||rn!==Qn)&&(n.stencilOp(zt,kn,Qn),Ve=zt,xt=kn,rn=Qn)},setLocked:function(zt){K=zt},setClear:function(zt){En!==zt&&(n.clearStencil(zt),En=zt)},reset:function(){K=!1,Be=null,he=null,ge=null,ze=null,Ve=null,xt=null,rn=null,En=null}}}const o=new t,l=new a,c=new r,s=new WeakMap,d=new WeakMap;let f={},v={},g=new WeakMap,M=[],h=null,A=!1,x=null,m=null,U=null,T=null,P=null,H=null,G=null,W=new Color(0,0,0),Z=0,N=!1,L=null,q=null,se=null,ee=null,re=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,Ee=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(ue)[1]),fe=Ee>=1):ue.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),fe=Ee>=2);let Le=null,Oe={};const Ze=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),Ft=new Vector4().fromArray(Ze),pe=new Vector4().fromArray(vt);function we(K,Be,he,ge){const ze=new Uint8Array(4),Ve=n.createTexture();n.bindTexture(K,Ve),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<he;xt++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Be+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return Ve}const ke={};ke[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),ke[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ke[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),l.setFunc(LessEqualDepth),Lt(!1),Ct(CullFaceBack),Pe(n.CULL_FACE),$(NoBlending);function Pe(K){f[K]!==!0&&(n.enable(K),f[K]=!0)}function Qe(K){f[K]!==!1&&(n.disable(K),f[K]=!1)}function At(K,Be){return v[K]!==Be?(n.bindFramebuffer(K,Be),v[K]=Be,K===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Be),K===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function st(K,Be){let he=M,ge=!1;if(K){he=g.get(Be),he===void 0&&(he=[],g.set(Be,he));const ze=K.textures;if(he.length!==ze.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Ve=0,xt=ze.length;Ve<xt;Ve++)he[Ve]=n.COLOR_ATTACHMENT0+Ve;he.length=ze.length,ge=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,ge=!0);ge&&n.drawBuffers(he)}function qt(K){return h!==K?(n.useProgram(K),h=K,!0):!1}const Wt={[AddEquation]:n.FUNC_ADD,[SubtractEquation]:n.FUNC_SUBTRACT,[ReverseSubtractEquation]:n.FUNC_REVERSE_SUBTRACT};Wt[MinEquation]=n.MIN,Wt[MaxEquation]=n.MAX;const Rt={[ZeroFactor]:n.ZERO,[OneFactor]:n.ONE,[SrcColorFactor]:n.SRC_COLOR,[SrcAlphaFactor]:n.SRC_ALPHA,[SrcAlphaSaturateFactor]:n.SRC_ALPHA_SATURATE,[DstColorFactor]:n.DST_COLOR,[DstAlphaFactor]:n.DST_ALPHA,[OneMinusSrcColorFactor]:n.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:n.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:n.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:n.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:n.CONSTANT_COLOR,[OneMinusConstantColorFactor]:n.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:n.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:n.ONE_MINUS_CONSTANT_ALPHA};function $(K,Be,he,ge,ze,Ve,xt,rn,En,zt){if(K===NoBlending){A===!0&&(Qe(n.BLEND),A=!1);return}if(A===!1&&(Pe(n.BLEND),A=!0),K!==CustomBlending){if(K!==x||zt!==N){if((m!==AddEquation||P!==AddEquation)&&(n.blendEquation(n.FUNC_ADD),m=AddEquation,P=AddEquation),zt)switch(K){case NormalBlending:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:n.blendFunc(n.ONE,n.ONE);break;case SubtractiveBlending:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case MultiplyBlending:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case NormalBlending:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case SubtractiveBlending:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case MultiplyBlending:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}U=null,T=null,H=null,G=null,W.set(0,0,0),Z=0,x=K,N=zt}return}ze=ze||Be,Ve=Ve||he,xt=xt||ge,(Be!==m||ze!==P)&&(n.blendEquationSeparate(Wt[Be],Wt[ze]),m=Be,P=ze),(he!==U||ge!==T||Ve!==H||xt!==G)&&(n.blendFuncSeparate(Rt[he],Rt[ge],Rt[Ve],Rt[xt]),U=he,T=ge,H=Ve,G=xt),(rn.equals(W)===!1||En!==Z)&&(n.blendColor(rn.r,rn.g,rn.b,En),W.copy(rn),Z=En),x=K,N=!1}function On(K,Be){K.side===DoubleSide?Qe(n.CULL_FACE):Pe(n.CULL_FACE);let he=K.side===BackSide;Be&&(he=!he),Lt(he),K.blending===NormalBlending&&K.transparent===!1?$(NoBlending):$(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),l.setFunc(K.depthFunc),l.setTest(K.depthTest),l.setMask(K.depthWrite),o.setMask(K.colorWrite);const ge=K.stencilWrite;c.setTest(ge),ge&&(c.setMask(K.stencilWriteMask),c.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),c.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Zt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(K){L!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),L=K)}function Ct(K){K!==CullFaceNone?(Pe(n.CULL_FACE),K!==q&&(K===CullFaceBack?n.cullFace(n.BACK):K===CullFaceFront?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),q=K}function tt(K){K!==se&&(fe&&n.lineWidth(K),se=K)}function Zt(K,Be,he){K?(Pe(n.POLYGON_OFFSET_FILL),(ee!==Be||re!==he)&&(n.polygonOffset(Be,he),ee=Be,re=he)):Qe(n.POLYGON_OFFSET_FILL)}function nt(K){K?Pe(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function O(K){K===void 0&&(K=n.TEXTURE0+ce-1),Le!==K&&(n.activeTexture(K),Le=K)}function C(K,Be,he){he===void 0&&(Le===null?he=n.TEXTURE0+ce-1:he=Le);let ge=Oe[he];ge===void 0&&(ge={type:void 0,texture:void 0},Oe[he]=ge),(ge.type!==K||ge.texture!==Be)&&(Le!==he&&(n.activeTexture(he),Le=he),n.bindTexture(K,Be||ke[K]),ge.type=K,ge.texture=Be)}function ae(){const K=Oe[Le];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Me(){try{n.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{n.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Je(){try{n.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ie(){try{n.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ct(){try{n.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function rt(){try{n.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{n.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function qe(){try{n.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ut(){try{n.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _t(K){Ft.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),Ft.copy(K))}function Ye(K){pe.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),pe.copy(K))}function Pt(K,Be){let he=d.get(Be);he===void 0&&(he=new WeakMap,d.set(Be,he));let ge=he.get(K);ge===void 0&&(ge=n.getUniformBlockIndex(Be,K.name),he.set(K,ge))}function Et(K,Be){const ge=d.get(Be).get(K);s.get(Be)!==ge&&(n.uniformBlockBinding(Be,ge,K.__bindingPointIndex),s.set(Be,ge))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Le=null,Oe={},v={},g=new WeakMap,M=[],h=null,A=!1,x=null,m=null,U=null,T=null,P=null,H=null,G=null,W=new Color(0,0,0),Z=0,N=!1,L=null,q=null,se=null,ee=null,re=null,Ft.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Qe,bindFramebuffer:At,drawBuffers:st,useProgram:qt,setBlending:$,setMaterial:On,setFlipSided:Lt,setCullFace:Ct,setLineWidth:tt,setPolygonOffset:Zt,setScissorTest:nt,activeTexture:O,bindTexture:C,unbindTexture:ae,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:qe,texImage3D:ut,updateUBOMapping:Pt,uniformBlockBinding:Et,texStorage2D:rt,texStorage3D:ye,texSubImage2D:me,texSubImage3D:Je,compressedTexSubImage2D:Ie,compressedTexSubImage3D:ct,scissor:_t,viewport:Ye,reset:Kt}}function WebGLTextures(n,e,t,a,r,o,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Vector2,f=new WeakMap;let v;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(O,C){return M?new OffscreenCanvas(O,C):createElementNS("canvas")}function A(O,C,ae){let _e=1;const Me=nt(O);if((Me.width>ae||Me.height>ae)&&(_e=ae/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const me=Math.floor(_e*Me.width),Je=Math.floor(_e*Me.height);v===void 0&&(v=h(me,Je));const Ie=C?h(me,Je):v;return Ie.width=me,Ie.height=Je,Ie.getContext("2d").drawImage(O,0,0,me,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+me+"x"+Je+")."),Ie}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),O;return O}function x(O){return O.generateMipmaps}function m(O){n.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(O,C,ae,_e,Me=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let me=C;if(C===n.RED&&(ae===n.FLOAT&&(me=n.R32F),ae===n.HALF_FLOAT&&(me=n.R16F),ae===n.UNSIGNED_BYTE&&(me=n.R8)),C===n.RED_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.R8UI),ae===n.UNSIGNED_SHORT&&(me=n.R16UI),ae===n.UNSIGNED_INT&&(me=n.R32UI),ae===n.BYTE&&(me=n.R8I),ae===n.SHORT&&(me=n.R16I),ae===n.INT&&(me=n.R32I)),C===n.RG&&(ae===n.FLOAT&&(me=n.RG32F),ae===n.HALF_FLOAT&&(me=n.RG16F),ae===n.UNSIGNED_BYTE&&(me=n.RG8)),C===n.RG_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.RG8UI),ae===n.UNSIGNED_SHORT&&(me=n.RG16UI),ae===n.UNSIGNED_INT&&(me=n.RG32UI),ae===n.BYTE&&(me=n.RG8I),ae===n.SHORT&&(me=n.RG16I),ae===n.INT&&(me=n.RG32I)),C===n.RGB_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.RGB8UI),ae===n.UNSIGNED_SHORT&&(me=n.RGB16UI),ae===n.UNSIGNED_INT&&(me=n.RGB32UI),ae===n.BYTE&&(me=n.RGB8I),ae===n.SHORT&&(me=n.RGB16I),ae===n.INT&&(me=n.RGB32I)),C===n.RGBA_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),ae===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),ae===n.UNSIGNED_INT&&(me=n.RGBA32UI),ae===n.BYTE&&(me=n.RGBA8I),ae===n.SHORT&&(me=n.RGBA16I),ae===n.INT&&(me=n.RGBA32I)),C===n.RGB&&ae===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),C===n.RGBA){const Je=Me?LinearTransfer:ColorManagement.getTransfer(_e);ae===n.FLOAT&&(me=n.RGBA32F),ae===n.HALF_FLOAT&&(me=n.RGBA16F),ae===n.UNSIGNED_BYTE&&(me=Je===SRGBTransfer?n.SRGB8_ALPHA8:n.RGBA8),ae===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ae===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(O,C){let ae;return O?C===null||C===UnsignedIntType||C===UnsignedInt248Type?ae=n.DEPTH24_STENCIL8:C===FloatType?ae=n.DEPTH32F_STENCIL8:C===UnsignedShortType&&(ae=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===UnsignedIntType||C===UnsignedInt248Type?ae=n.DEPTH_COMPONENT24:C===FloatType?ae=n.DEPTH_COMPONENT32F:C===UnsignedShortType&&(ae=n.DEPTH_COMPONENT16),ae}function H(O,C){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==NearestFilter&&O.minFilter!==LinearFilter?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function G(O){const C=O.target;C.removeEventListener("dispose",G),Z(C),C.isVideoTexture&&f.delete(C)}function W(O){const C=O.target;C.removeEventListener("dispose",W),L(C)}function Z(O){const C=a.get(O);if(C.__webglInit===void 0)return;const ae=O.source,_e=g.get(ae);if(_e){const Me=_e[C.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&N(O),Object.keys(_e).length===0&&g.delete(ae)}a.remove(O)}function N(O){const C=a.get(O);n.deleteTexture(C.__webglTexture);const ae=O.source,_e=g.get(ae);delete _e[C.__cacheKey],l.memory.textures--}function L(O){const C=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(C.__webglFramebuffer[_e]))for(let Me=0;Me<C.__webglFramebuffer[_e].length;Me++)n.deleteFramebuffer(C.__webglFramebuffer[_e][Me]);else n.deleteFramebuffer(C.__webglFramebuffer[_e]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[_e])}else{if(Array.isArray(C.__webglFramebuffer))for(let _e=0;_e<C.__webglFramebuffer.length;_e++)n.deleteFramebuffer(C.__webglFramebuffer[_e]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let _e=0;_e<C.__webglColorRenderbuffer.length;_e++)C.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[_e]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ae=O.textures;for(let _e=0,Me=ae.length;_e<Me;_e++){const me=a.get(ae[_e]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),l.memory.textures--),a.remove(ae[_e])}a.remove(O)}let q=0;function se(){q=0}function ee(){const O=q;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),q+=1,O}function re(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function ce(O,C){const ae=a.get(O);if(O.isVideoTexture&&tt(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ae,O,C);return}}t.bindTexture(n.TEXTURE_2D,ae.__webglTexture,n.TEXTURE0+C)}function fe(O,C){const ae=a.get(O);if(O.version>0&&ae.__version!==O.version){pe(ae,O,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ae.__webglTexture,n.TEXTURE0+C)}function Ee(O,C){const ae=a.get(O);if(O.version>0&&ae.__version!==O.version){pe(ae,O,C);return}t.bindTexture(n.TEXTURE_3D,ae.__webglTexture,n.TEXTURE0+C)}function ue(O,C){const ae=a.get(O);if(O.version>0&&ae.__version!==O.version){we(ae,O,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture,n.TEXTURE0+C)}const Le={[RepeatWrapping]:n.REPEAT,[ClampToEdgeWrapping]:n.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:n.MIRRORED_REPEAT},Oe={[NearestFilter]:n.NEAREST,[NearestMipmapNearestFilter]:n.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:n.NEAREST_MIPMAP_LINEAR,[LinearFilter]:n.LINEAR,[LinearMipmapNearestFilter]:n.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:n.LINEAR_MIPMAP_LINEAR},Ze={[NeverCompare]:n.NEVER,[AlwaysCompare]:n.ALWAYS,[LessCompare]:n.LESS,[LessEqualCompare]:n.LEQUAL,[EqualCompare]:n.EQUAL,[GreaterEqualCompare]:n.GEQUAL,[GreaterCompare]:n.GREATER,[NotEqualCompare]:n.NOTEQUAL};function vt(O,C){if(C.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===LinearFilter||C.magFilter===LinearMipmapNearestFilter||C.magFilter===NearestMipmapLinearFilter||C.magFilter===LinearMipmapLinearFilter||C.minFilter===LinearFilter||C.minFilter===LinearMipmapNearestFilter||C.minFilter===NearestMipmapLinearFilter||C.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Le[C.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Le[C.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Le[C.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Oe[C.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Oe[C.minFilter]),C.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Ze[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===NearestFilter||C.minFilter!==NearestMipmapLinearFilter&&C.minFilter!==LinearMipmapLinearFilter||C.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||a.get(C).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy}}}function Ft(O,C){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",G));const _e=C.source;let Me=g.get(_e);Me===void 0&&(Me={},g.set(_e,Me));const me=re(C);if(me!==O.__cacheKey){Me[me]===void 0&&(Me[me]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),Me[me].usedTimes++;const Je=Me[O.__cacheKey];Je!==void 0&&(Me[O.__cacheKey].usedTimes--,Je.usedTimes===0&&N(C)),O.__cacheKey=me,O.__webglTexture=Me[me].texture}return ae}function pe(O,C,ae){let _e=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(_e=n.TEXTURE_3D);const Me=Ft(O,C),me=C.source;t.bindTexture(_e,O.__webglTexture,n.TEXTURE0+ae);const Je=a.get(me);if(me.version!==Je.__version||Me===!0){t.activeTexture(n.TEXTURE0+ae);const Ie=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ct=C.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(C.colorSpace),rt=C.colorSpace===NoColorSpace||Ie===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ye=A(C.image,!1,r.maxTextureSize);ye=Zt(C,ye);const qe=o.convert(C.format,C.colorSpace),ut=o.convert(C.type);let _t=T(C.internalFormat,qe,ut,C.colorSpace,C.isVideoTexture);vt(_e,C);let Ye;const Pt=C.mipmaps,Et=C.isVideoTexture!==!0,Kt=Je.__version===void 0||Me===!0,K=me.dataReady,Be=H(C,ye);if(C.isDepthTexture)_t=P(C.format===DepthStencilFormat,C.type),Kt&&(Et?t.texStorage2D(n.TEXTURE_2D,1,_t,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,_t,ye.width,ye.height,0,qe,ut,null));else if(C.isDataTexture)if(Pt.length>0){Et&&Kt&&t.texStorage2D(n.TEXTURE_2D,Be,_t,Pt[0].width,Pt[0].height);for(let he=0,ge=Pt.length;he<ge;he++)Ye=Pt[he],Et?K&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ye.width,Ye.height,qe,ut,Ye.data):t.texImage2D(n.TEXTURE_2D,he,_t,Ye.width,Ye.height,0,qe,ut,Ye.data);C.generateMipmaps=!1}else Et?(Kt&&t.texStorage2D(n.TEXTURE_2D,Be,_t,ye.width,ye.height),K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,qe,ut,ye.data)):t.texImage2D(n.TEXTURE_2D,0,_t,ye.width,ye.height,0,qe,ut,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Et&&Kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,_t,Pt[0].width,Pt[0].height,ye.depth);for(let he=0,ge=Pt.length;he<ge;he++)if(Ye=Pt[he],C.format!==RGBAFormat)if(qe!==null)if(Et){if(K)if(C.layerUpdates.size>0){const ze=getByteLength(Ye.width,Ye.height,C.format,C.type);for(const Ve of C.layerUpdates){const xt=Ye.data.subarray(Ve*ze/Ye.data.BYTES_PER_ELEMENT,(Ve+1)*ze/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ve,Ye.width,Ye.height,1,qe,xt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ye.width,Ye.height,ye.depth,qe,Ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,_t,Ye.width,Ye.height,ye.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?K&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ye.width,Ye.height,ye.depth,qe,ut,Ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,_t,Ye.width,Ye.height,ye.depth,0,qe,ut,Ye.data)}else{Et&&Kt&&t.texStorage2D(n.TEXTURE_2D,Be,_t,Pt[0].width,Pt[0].height);for(let he=0,ge=Pt.length;he<ge;he++)Ye=Pt[he],C.format!==RGBAFormat?qe!==null?Et?K&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ye.width,Ye.height,qe,Ye.data):t.compressedTexImage2D(n.TEXTURE_2D,he,_t,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?K&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ye.width,Ye.height,qe,ut,Ye.data):t.texImage2D(n.TEXTURE_2D,he,_t,Ye.width,Ye.height,0,qe,ut,Ye.data)}else if(C.isDataArrayTexture)if(Et){if(Kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,_t,ye.width,ye.height,ye.depth),K)if(C.layerUpdates.size>0){const he=getByteLength(ye.width,ye.height,C.format,C.type);for(const ge of C.layerUpdates){const ze=ye.data.subarray(ge*he/ye.data.BYTES_PER_ELEMENT,(ge+1)*he/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,qe,ut,ze)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,qe,ut,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,ye.width,ye.height,ye.depth,0,qe,ut,ye.data);else if(C.isData3DTexture)Et?(Kt&&t.texStorage3D(n.TEXTURE_3D,Be,_t,ye.width,ye.height,ye.depth),K&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,qe,ut,ye.data)):t.texImage3D(n.TEXTURE_3D,0,_t,ye.width,ye.height,ye.depth,0,qe,ut,ye.data);else if(C.isFramebufferTexture){if(Kt)if(Et)t.texStorage2D(n.TEXTURE_2D,Be,_t,ye.width,ye.height);else{let he=ye.width,ge=ye.height;for(let ze=0;ze<Be;ze++)t.texImage2D(n.TEXTURE_2D,ze,_t,he,ge,0,qe,ut,null),he>>=1,ge>>=1}}else if(Pt.length>0){if(Et&&Kt){const he=nt(Pt[0]);t.texStorage2D(n.TEXTURE_2D,Be,_t,he.width,he.height)}for(let he=0,ge=Pt.length;he<ge;he++)Ye=Pt[he],Et?K&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,qe,ut,Ye):t.texImage2D(n.TEXTURE_2D,he,_t,qe,ut,Ye);C.generateMipmaps=!1}else if(Et){if(Kt){const he=nt(ye);t.texStorage2D(n.TEXTURE_2D,Be,_t,he.width,he.height)}K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,ut,ye)}else t.texImage2D(n.TEXTURE_2D,0,_t,qe,ut,ye);x(C)&&m(_e),Je.__version=me.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function we(O,C,ae){if(C.image.length!==6)return;const _e=Ft(O,C),Me=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+ae);const me=a.get(Me);if(Me.version!==me.__version||_e===!0){t.activeTexture(n.TEXTURE0+ae);const Je=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Ie=C.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(C.colorSpace),ct=C.colorSpace===NoColorSpace||Je===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const rt=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,qe=[];for(let ge=0;ge<6;ge++)!rt&&!ye?qe[ge]=A(C.image[ge],!0,r.maxCubemapSize):qe[ge]=ye?C.image[ge].image:C.image[ge],qe[ge]=Zt(C,qe[ge]);const ut=qe[0],_t=o.convert(C.format,C.colorSpace),Ye=o.convert(C.type),Pt=T(C.internalFormat,_t,Ye,C.colorSpace),Et=C.isVideoTexture!==!0,Kt=me.__version===void 0||_e===!0,K=Me.dataReady;let Be=H(C,ut);vt(n.TEXTURE_CUBE_MAP,C);let he;if(rt){Et&&Kt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,Pt,ut.width,ut.height);for(let ge=0;ge<6;ge++){he=qe[ge].mipmaps;for(let ze=0;ze<he.length;ze++){const Ve=he[ze];C.format!==RGBAFormat?_t!==null?Et?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Ve.width,Ve.height,_t,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,Pt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Ve.width,Ve.height,_t,Ye,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,Pt,Ve.width,Ve.height,0,_t,Ye,Ve.data)}}}else{if(he=C.mipmaps,Et&&Kt){he.length>0&&Be++;const ge=nt(qe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,Pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){Et?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe[ge].width,qe[ge].height,_t,Ye,qe[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Pt,qe[ge].width,qe[ge].height,0,_t,Ye,qe[ge].data);for(let ze=0;ze<he.length;ze++){const xt=he[ze].image[ge].image;Et?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,xt.width,xt.height,_t,Ye,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,Pt,xt.width,xt.height,0,_t,Ye,xt.data)}}else{Et?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,_t,Ye,qe[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Pt,_t,Ye,qe[ge]);for(let ze=0;ze<he.length;ze++){const Ve=he[ze];Et?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,_t,Ye,Ve.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,Pt,_t,Ye,Ve.image[ge])}}}x(C)&&m(n.TEXTURE_CUBE_MAP),me.__version=Me.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ke(O,C,ae,_e,Me,me){const Je=o.convert(ae.format,ae.colorSpace),Ie=o.convert(ae.type),ct=T(ae.internalFormat,Je,Ie,ae.colorSpace),rt=a.get(C),ye=a.get(ae);if(ye.__renderTarget=C,!rt.__hasExternalTextures){const qe=Math.max(1,C.width>>me),ut=Math.max(1,C.height>>me);Me===n.TEXTURE_3D||Me===n.TEXTURE_2D_ARRAY?t.texImage3D(Me,me,ct,qe,ut,C.depth,0,Je,Ie,null):t.texImage2D(Me,me,ct,qe,ut,0,Je,Ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Ct(C)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,Me,ye.__webglTexture,0,Lt(C)):(Me===n.TEXTURE_2D||Me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,Me,ye.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(O,C,ae){if(n.bindRenderbuffer(n.RENDERBUFFER,O),C.depthBuffer){const _e=C.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,me=P(C.stencilBuffer,Me),Je=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=Lt(C);Ct(C)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,me,C.width,C.height):ae?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,me,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Je,n.RENDERBUFFER,O)}else{const _e=C.textures;for(let Me=0;Me<_e.length;Me++){const me=_e[Me],Je=o.convert(me.format,me.colorSpace),Ie=o.convert(me.type),ct=T(me.internalFormat,Je,Ie,me.colorSpace),rt=Lt(C);ae&&Ct(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,ct,C.width,C.height):Ct(C)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,ct,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ct,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qe(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=a.get(C.depthTexture);_e.__renderTarget=C,(!_e.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ce(C.depthTexture,0);const Me=_e.__webglTexture,me=Lt(C);if(C.depthTexture.format===DepthFormat)Ct(C)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Me,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Me,0);else if(C.depthTexture.format===DepthStencilFormat)Ct(C)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Me,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function At(O){const C=a.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const _e=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),_e){const Me=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),C.__depthDisposeCallback=Me}C.__boundDepthTexture=_e}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");const _e=O.texture.mipmaps;_e&&_e.length>0?Qe(C.__webglFramebuffer[0],O):Qe(C.__webglFramebuffer,O)}else if(ae){C.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[_e]),C.__webglDepthbuffer[_e]===void 0)C.__webglDepthbuffer[_e]=n.createRenderbuffer(),Pe(C.__webglDepthbuffer[_e],O,!1);else{const Me=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,me)}}else{const _e=O.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),Pe(C.__webglDepthbuffer,O,!1);else{const Me=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(O,C,ae){const _e=a.get(O);C!==void 0&&ke(_e.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ae!==void 0&&At(O)}function qt(O){const C=O.texture,ae=a.get(O),_e=a.get(C);O.addEventListener("dispose",W);const Me=O.textures,me=O.isWebGLCubeRenderTarget===!0,Je=Me.length>1;if(Je||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=C.version,l.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer[Ie]=[];for(let ct=0;ct<C.mipmaps.length;ct++)ae.__webglFramebuffer[Ie][ct]=n.createFramebuffer()}else ae.__webglFramebuffer[Ie]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ie=0;Ie<C.mipmaps.length;Ie++)ae.__webglFramebuffer[Ie]=n.createFramebuffer()}else ae.__webglFramebuffer=n.createFramebuffer();if(Je)for(let Ie=0,ct=Me.length;Ie<ct;Ie++){const rt=a.get(Me[Ie]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),l.memory.textures++)}if(O.samples>0&&Ct(O)===!1){ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Me.length;Ie++){const ct=Me[Ie];ae.__webglColorRenderbuffer[Ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const rt=o.convert(ct.format,ct.colorSpace),ye=o.convert(ct.type),qe=T(ct.internalFormat,rt,ye,ct.colorSpace,O.isXRRenderTarget===!0),ut=Lt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,qe,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(ae.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),vt(n.TEXTURE_CUBE_MAP,C);for(let Ie=0;Ie<6;Ie++)if(C.mipmaps&&C.mipmaps.length>0)for(let ct=0;ct<C.mipmaps.length;ct++)ke(ae.__webglFramebuffer[Ie][ct],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ct);else ke(ae.__webglFramebuffer[Ie],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);x(C)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Ie=0,ct=Me.length;Ie<ct;Ie++){const rt=Me[Ie],ye=a.get(rt);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),vt(n.TEXTURE_2D,rt),ke(ae.__webglFramebuffer,O,rt,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,0),x(rt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Ie=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,_e.__webglTexture),vt(Ie,C),C.mipmaps&&C.mipmaps.length>0)for(let ct=0;ct<C.mipmaps.length;ct++)ke(ae.__webglFramebuffer[ct],O,C,n.COLOR_ATTACHMENT0,Ie,ct);else ke(ae.__webglFramebuffer,O,C,n.COLOR_ATTACHMENT0,Ie,0);x(C)&&m(Ie),t.unbindTexture()}O.depthBuffer&&At(O)}function Wt(O){const C=O.textures;for(let ae=0,_e=C.length;ae<_e;ae++){const Me=C[ae];if(x(Me)){const me=U(O),Je=a.get(Me).__webglTexture;t.bindTexture(me,Je),m(me),t.unbindTexture()}}}const Rt=[],$=[];function On(O){if(O.samples>0){if(Ct(O)===!1){const C=O.textures,ae=O.width,_e=O.height;let Me=n.COLOR_BUFFER_BIT;const me=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Je=a.get(O),Ie=C.length>1;if(Ie)for(let rt=0;rt<C.length;rt++)t.bindFramebuffer(n.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const ct=O.texture.mipmaps;ct&&ct.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let rt=0;rt<C.length;rt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Me|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Me|=n.STENCIL_BUFFER_BIT)),Ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Je.__webglColorRenderbuffer[rt]);const ye=a.get(C[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,ae,_e,0,0,ae,_e,Me,n.NEAREST),s===!0&&(Rt.length=0,$.length=0,Rt.push(n.COLOR_ATTACHMENT0+rt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Rt.push(me),$.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ie)for(let rt=0;rt<C.length;rt++){t.bindFramebuffer(n.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,Je.__webglColorRenderbuffer[rt]);const ye=a.get(C[rt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&s){const C=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Lt(O){return Math.min(r.maxSamples,O.samples)}function Ct(O){const C=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function tt(O){const C=l.render.frame;f.get(O)!==C&&(f.set(O,C),O.update())}function Zt(O,C){const ae=O.colorSpace,_e=O.format,Me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==LinearSRGBColorSpace&&ae!==NoColorSpace&&(ColorManagement.getTransfer(ae)===SRGBTransfer?(_e!==RGBAFormat||Me!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),C}function nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=fe,this.setTexture3D=Ee,this.setTextureCube=ue,this.rebindTextures=st,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ct}function WebGLUtils(n,e){function t(a,r=NoColorSpace){let o;const l=ColorManagement.getTransfer(r);if(a===UnsignedByteType)return n.UNSIGNED_BYTE;if(a===UnsignedShort4444Type)return n.UNSIGNED_SHORT_4_4_4_4;if(a===UnsignedShort5551Type)return n.UNSIGNED_SHORT_5_5_5_1;if(a===UnsignedInt5999Type)return n.UNSIGNED_INT_5_9_9_9_REV;if(a===ByteType)return n.BYTE;if(a===ShortType)return n.SHORT;if(a===UnsignedShortType)return n.UNSIGNED_SHORT;if(a===IntType)return n.INT;if(a===UnsignedIntType)return n.UNSIGNED_INT;if(a===FloatType)return n.FLOAT;if(a===HalfFloatType)return n.HALF_FLOAT;if(a===AlphaFormat)return n.ALPHA;if(a===RGBFormat)return n.RGB;if(a===RGBAFormat)return n.RGBA;if(a===DepthFormat)return n.DEPTH_COMPONENT;if(a===DepthStencilFormat)return n.DEPTH_STENCIL;if(a===RedFormat)return n.RED;if(a===RedIntegerFormat)return n.RED_INTEGER;if(a===RGFormat)return n.RG;if(a===RGIntegerFormat)return n.RG_INTEGER;if(a===RGBAIntegerFormat)return n.RGBA_INTEGER;if(a===RGB_S3TC_DXT1_Format||a===RGBA_S3TC_DXT1_Format||a===RGBA_S3TC_DXT3_Format||a===RGBA_S3TC_DXT5_Format)if(l===SRGBTransfer)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===RGB_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===RGB_S3TC_DXT1_Format)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===RGB_PVRTC_4BPPV1_Format||a===RGB_PVRTC_2BPPV1_Format||a===RGBA_PVRTC_4BPPV1_Format||a===RGBA_PVRTC_2BPPV1_Format)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===RGB_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===RGB_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===RGBA_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===RGBA_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===RGB_ETC1_Format||a===RGB_ETC2_Format||a===RGBA_ETC2_EAC_Format)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===RGB_ETC1_Format||a===RGB_ETC2_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===RGBA_ETC2_EAC_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===RGBA_ASTC_4x4_Format||a===RGBA_ASTC_5x4_Format||a===RGBA_ASTC_5x5_Format||a===RGBA_ASTC_6x5_Format||a===RGBA_ASTC_6x6_Format||a===RGBA_ASTC_8x5_Format||a===RGBA_ASTC_8x6_Format||a===RGBA_ASTC_8x8_Format||a===RGBA_ASTC_10x5_Format||a===RGBA_ASTC_10x6_Format||a===RGBA_ASTC_10x8_Format||a===RGBA_ASTC_10x10_Format||a===RGBA_ASTC_12x10_Format||a===RGBA_ASTC_12x12_Format)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===RGBA_ASTC_4x4_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===RGBA_ASTC_5x4_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===RGBA_ASTC_5x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===RGBA_ASTC_6x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===RGBA_ASTC_6x6_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===RGBA_ASTC_8x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===RGBA_ASTC_8x6_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===RGBA_ASTC_8x8_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===RGBA_ASTC_10x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===RGBA_ASTC_10x6_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===RGBA_ASTC_10x8_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===RGBA_ASTC_10x10_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===RGBA_ASTC_12x10_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===RGBA_ASTC_12x12_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===RGBA_BPTC_Format||a===RGB_BPTC_SIGNED_Format||a===RGB_BPTC_UNSIGNED_Format)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===RGBA_BPTC_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===RGB_BPTC_SIGNED_Format)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===RGB_BPTC_UNSIGNED_Format)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===RED_RGTC1_Format||a===SIGNED_RED_RGTC1_Format||a===RED_GREEN_RGTC2_Format||a===SIGNED_RED_GREEN_RGTC2_Format)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===RGBA_BPTC_Format)return o.COMPRESSED_RED_RGTC1_EXT;if(a===SIGNED_RED_RGTC1_Format)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===RED_GREEN_RGTC2_Format)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===SIGNED_RED_GREEN_RGTC2_Format)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===UnsignedInt248Type?n.UNSIGNED_INT_24_8:n[a]!==void 0?n[a]:null}return{convert:t}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,a){if(this.texture===null){const r=new Texture,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==a.depthNear||t.depthFar!==a.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const a=this;let r=null,o=1,l=null,c="local-floor",s=1,d=null,f=null,v=null,g=null,M=null,h=null;const A=new WebXRDepthSensing,x=t.getContextAttributes();let m=null,U=null;const T=[],P=[],H=new Vector2;let G=null;const W=new PerspectiveCamera;W.viewport=new Vector4;const Z=new PerspectiveCamera;Z.viewport=new Vector4;const N=[W,Z],L=new ArrayCamera;let q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let we=T[pe];return we===void 0&&(we=new WebXRController,T[pe]=we),we.getTargetRaySpace()},this.getControllerGrip=function(pe){let we=T[pe];return we===void 0&&(we=new WebXRController,T[pe]=we),we.getGripSpace()},this.getHand=function(pe){let we=T[pe];return we===void 0&&(we=new WebXRController,T[pe]=we),we.getHandSpace()};function ee(pe){const we=P.indexOf(pe.inputSource);if(we===-1)return;const ke=T[we];ke!==void 0&&(ke.update(pe.inputSource,pe.frame,d||l),ke.dispatchEvent({type:pe.type,data:pe.inputSource}))}function re(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",ce);for(let pe=0;pe<T.length;pe++){const we=P[pe];we!==null&&(P[pe]=null,T[pe].disconnect(we))}q=null,se=null,A.reset(),e.setRenderTarget(m),M=null,g=null,v=null,r=null,U=null,Ft.stop(),a.isPresenting=!1,e.setPixelRatio(G),e.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){o=pe,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){c=pe,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(pe){d=pe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",re),r.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,Pe=null,Qe=null;x.depth&&(Qe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=x.stencil?DepthStencilFormat:DepthFormat,Pe=x.stencil?UnsignedInt248Type:UnsignedIntType);const At={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:o};v=new XRWebGLBinding(r,t),g=v.createProjectionLayer(At),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new WebGLRenderTarget(g.textureWidth,g.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ke={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(r,t,ke),r.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new WebGLRenderTarget(M.framebufferWidth,M.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(s),d=null,l=await r.requestReferenceSpace(c),Ft.setContext(r),Ft.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ce(pe){for(let we=0;we<pe.removed.length;we++){const ke=pe.removed[we],Pe=P.indexOf(ke);Pe>=0&&(P[Pe]=null,T[Pe].disconnect(ke))}for(let we=0;we<pe.added.length;we++){const ke=pe.added[we];let Pe=P.indexOf(ke);if(Pe===-1){for(let At=0;At<T.length;At++)if(At>=P.length){P.push(ke),Pe=At;break}else if(P[At]===null){P[At]=ke,Pe=At;break}if(Pe===-1)break}const Qe=T[Pe];Qe&&Qe.connect(ke)}}const fe=new Vector3,Ee=new Vector3;function ue(pe,we,ke){fe.setFromMatrixPosition(we.matrixWorld),Ee.setFromMatrixPosition(ke.matrixWorld);const Pe=fe.distanceTo(Ee),Qe=we.projectionMatrix.elements,At=ke.projectionMatrix.elements,st=Qe[14]/(Qe[10]-1),qt=Qe[14]/(Qe[10]+1),Wt=(Qe[9]+1)/Qe[5],Rt=(Qe[9]-1)/Qe[5],$=(Qe[8]-1)/Qe[0],On=(At[8]+1)/At[0],Lt=st*$,Ct=st*On,tt=Pe/(-$+On),Zt=tt*-$;if(we.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Zt),pe.translateZ(tt),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),Qe[10]===-1)pe.projectionMatrix.copy(we.projectionMatrix),pe.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const nt=st+tt,O=qt+tt,C=Lt-Zt,ae=Ct+(Pe-Zt),_e=Wt*qt/O*nt,Me=Rt*qt/O*nt;pe.projectionMatrix.makePerspective(C,ae,_e,Me,nt,O),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function Le(pe,we){we===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(we.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let we=pe.near,ke=pe.far;A.texture!==null&&(A.depthNear>0&&(we=A.depthNear),A.depthFar>0&&(ke=A.depthFar)),L.near=Z.near=W.near=we,L.far=Z.far=W.far=ke,(q!==L.near||se!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),q=L.near,se=L.far),W.layers.mask=pe.layers.mask|2,Z.layers.mask=pe.layers.mask|4,L.layers.mask=W.layers.mask|Z.layers.mask;const Pe=pe.parent,Qe=L.cameras;Le(L,Pe);for(let At=0;At<Qe.length;At++)Le(Qe[At],Pe);Qe.length===2?ue(L,W,Z):L.projectionMatrix.copy(W.projectionMatrix),Oe(pe,L,Pe)};function Oe(pe,we,ke){ke===null?pe.matrix.copy(we.matrixWorld):(pe.matrix.copy(ke.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(we.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(we.projectionMatrix),pe.projectionMatrixInverse.copy(we.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=RAD2DEG*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(g===null&&M===null))return s},this.setFoveation=function(pe){s=pe,g!==null&&(g.fixedFoveation=pe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=pe)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(L)};let Ze=null;function vt(pe,we){if(f=we.getViewerPose(d||l),h=we,f!==null){const ke=f.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Pe=!1;ke.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let st=0;st<ke.length;st++){const qt=ke[st];let Wt=null;if(M!==null)Wt=M.getViewport(qt);else{const $=v.getViewSubImage(g,qt);Wt=$.viewport,st===0&&(e.setRenderTargetTextures(U,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(U))}let Rt=N[st];Rt===void 0&&(Rt=new PerspectiveCamera,Rt.layers.enable(st),Rt.viewport=new Vector4,N[st]=Rt),Rt.matrix.fromArray(qt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(qt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),st===0&&(L.matrix.copy(Rt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(Rt)}const Qe=r.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){const st=v.getDepthInformation(ke[0]);st&&st.isValid&&st.texture&&A.init(e,st,r.renderState)}}for(let ke=0;ke<T.length;ke++){const Pe=P[ke],Qe=T[ke];Pe!==null&&Qe!==void 0&&Qe.update(Pe,we,d||l)}Ze&&Ze(pe,we),we.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:we}),h=null}const Ft=new WebGLAnimation;Ft.setAnimationLoop(vt),this.setAnimationLoop=function(pe){Ze=pe},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(n,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function a(x,m){m.color.getRGB(x.fogColor.value,getUnlitUniformColorSpace(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function r(x,m,U,T,P){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(x,m):m.isMeshToonMaterial?(o(x,m),v(x,m)):m.isMeshPhongMaterial?(o(x,m),f(x,m)):m.isMeshStandardMaterial?(o(x,m),g(x,m),m.isMeshPhysicalMaterial&&M(x,m,P)):m.isMeshMatcapMaterial?(o(x,m),h(x,m)):m.isMeshDepthMaterial?o(x,m):m.isMeshDistanceMaterial?(o(x,m),A(x,m)):m.isMeshNormalMaterial?o(x,m):m.isLineBasicMaterial?(l(x,m),m.isLineDashedMaterial&&c(x,m)):m.isPointsMaterial?s(x,m,U,T):m.isSpriteMaterial?d(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===BackSide&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===BackSide&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const U=e.get(m),T=U.envMap,P=U.envMapRotation;T&&(x.envMap.value=T,_e1.copy(P),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),x.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function c(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function s(x,m,U,T){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*U,x.scale.value=T*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function f(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function g(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function M(x,m,U){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===BackSide&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function h(x,m){m.matcap&&(x.matcap.value=m.matcap)}function A(x,m){const U=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function WebGLUniformsGroups(n,e,t,a){let r={},o={},l=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function s(U,T){const P=T.program;a.uniformBlockBinding(U,P)}function d(U,T){let P=r[U.id];P===void 0&&(h(U),P=f(U),r[U.id]=P,U.addEventListener("dispose",x));const H=T.program;a.updateUBOMapping(U,H);const G=e.render.frame;o[U.id]!==G&&(g(U),o[U.id]=G)}function f(U){const T=v();U.__bindingPointIndex=T;const P=n.createBuffer(),H=U.__size,G=U.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,H,G),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,P),P}function v(){for(let U=0;U<c;U++)if(l.indexOf(U)===-1)return l.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(U){const T=r[U.id],P=U.uniforms,H=U.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let G=0,W=P.length;G<W;G++){const Z=Array.isArray(P[G])?P[G]:[P[G]];for(let N=0,L=Z.length;N<L;N++){const q=Z[N];if(M(q,G,N,H)===!0){const se=q.__offset,ee=Array.isArray(q.value)?q.value:[q.value];let re=0;for(let ce=0;ce<ee.length;ce++){const fe=ee[ce],Ee=A(fe);typeof fe=="number"||typeof fe=="boolean"?(q.__data[0]=fe,n.bufferSubData(n.UNIFORM_BUFFER,se+re,q.__data)):fe.isMatrix3?(q.__data[0]=fe.elements[0],q.__data[1]=fe.elements[1],q.__data[2]=fe.elements[2],q.__data[3]=0,q.__data[4]=fe.elements[3],q.__data[5]=fe.elements[4],q.__data[6]=fe.elements[5],q.__data[7]=0,q.__data[8]=fe.elements[6],q.__data[9]=fe.elements[7],q.__data[10]=fe.elements[8],q.__data[11]=0):(fe.toArray(q.__data,re),re+=Ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,se,q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function M(U,T,P,H){const G=U.value,W=T+"_"+P;if(H[W]===void 0)return typeof G=="number"||typeof G=="boolean"?H[W]=G:H[W]=G.clone(),!0;{const Z=H[W];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return H[W]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function h(U){const T=U.uniforms;let P=0;const H=16;for(let W=0,Z=T.length;W<Z;W++){const N=Array.isArray(T[W])?T[W]:[T[W]];for(let L=0,q=N.length;L<q;L++){const se=N[L],ee=Array.isArray(se.value)?se.value:[se.value];for(let re=0,ce=ee.length;re<ce;re++){const fe=ee[re],Ee=A(fe),ue=P%H,Le=ue%Ee.boundary,Oe=ue+Le;P+=Le,Oe!==0&&H-Oe<Ee.storage&&(P+=H-Oe),se.__data=new Float32Array(Ee.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=P,P+=Ee.storage}}}const G=P%H;return G>0&&(P+=H-G),U.__size=P,U.__cache={},this}function A(U){const T={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(T.boundary=4,T.storage=4):U.isVector2?(T.boundary=8,T.storage=8):U.isVector3||U.isColor?(T.boundary=16,T.storage=12):U.isVector4?(T.boundary=16,T.storage=16):U.isMatrix3?(T.boundary=48,T.storage=48):U.isMatrix4?(T.boundary=64,T.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),T}function x(U){const T=U.target;T.removeEventListener("dispose",x);const P=l.indexOf(T.__bindingPointIndex);l.splice(P,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete o[T.id]}function m(){for(const U in r)n.deleteBuffer(r[U]);l=[],r={},o={}}return{bind:s,update:d,dispose:m}}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:a=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=l;const h=new Uint32Array(4),A=new Int32Array(4);let x=null,m=null;const U=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let H=!1;this._outputColorSpace=SRGBColorSpace;let G=0,W=0,Z=null,N=-1,L=null;const q=new Vector4,se=new Vector4;let ee=null;const re=new Color(0);let ce=0,fe=t.width,Ee=t.height,ue=1,Le=null,Oe=null;const Ze=new Vector4(0,0,fe,Ee),vt=new Vector4(0,0,fe,Ee);let Ft=!1;const pe=new Frustum;let we=!1,ke=!1;const Pe=new Matrix4,Qe=new Matrix4,At=new Vector3,st=new Vector4,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Rt(){return Z===null?ue:1}let $=a;function On(D,J){return t.getContext(D,J)}try{const D={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:s,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),$===null){const J="webgl2";if($=On(J,D),$===null)throw On(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Lt,Ct,tt,Zt,nt,O,C,ae,_e,Me,me,Je,Ie,ct,rt,ye,qe,ut,_t,Ye,Pt,Et,Kt,K;function Be(){Lt=new WebGLExtensions($),Lt.init(),Et=new WebGLUtils($,Lt),Ct=new WebGLCapabilities($,Lt,e,Et),tt=new WebGLState($,Lt),Ct.reverseDepthBuffer&&g&&tt.buffers.depth.setReversed(!0),Zt=new WebGLInfo($),nt=new WebGLProperties,O=new WebGLTextures($,Lt,tt,nt,Ct,Et,Zt),C=new WebGLCubeMaps(P),ae=new WebGLCubeUVMaps(P),_e=new WebGLAttributes($),Kt=new WebGLBindingStates($,_e),Me=new WebGLGeometries($,_e,Zt,Kt),me=new WebGLObjects($,Me,_e,Zt),_t=new WebGLMorphtargets($,Ct,O),ye=new WebGLClipping(nt),Je=new WebGLPrograms(P,C,ae,Lt,Ct,Kt,ye),Ie=new WebGLMaterials(P,nt),ct=new WebGLRenderLists,rt=new WebGLRenderStates(Lt),ut=new WebGLBackground(P,C,ae,tt,me,M,s),qe=new WebGLShadowMap(P,me,Ct),K=new WebGLUniformsGroups($,Zt,Ct,tt),Ye=new WebGLBufferRenderer($,Lt,Zt),Pt=new WebGLIndexedBufferRenderer($,Lt,Zt),Zt.programs=Je.programs,P.capabilities=Ct,P.extensions=Lt,P.properties=nt,P.renderLists=ct,P.shadowMap=qe,P.state=tt,P.info=Zt}Be();const he=new WebXRManager(P,$);this.xr=he,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const D=Lt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Lt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(D){D!==void 0&&(ue=D,this.setSize(fe,Ee,!1))},this.getSize=function(D){return D.set(fe,Ee)},this.setSize=function(D,J,oe=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=D,Ee=J,t.width=Math.floor(D*ue),t.height=Math.floor(J*ue),oe===!0&&(t.style.width=D+"px",t.style.height=J+"px"),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(fe*ue,Ee*ue).floor()},this.setDrawingBufferSize=function(D,J,oe){fe=D,Ee=J,ue=oe,t.width=Math.floor(D*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,D,J)},this.getCurrentViewport=function(D){return D.copy(q)},this.getViewport=function(D){return D.copy(Ze)},this.setViewport=function(D,J,oe,le){D.isVector4?Ze.set(D.x,D.y,D.z,D.w):Ze.set(D,J,oe,le),tt.viewport(q.copy(Ze).multiplyScalar(ue).round())},this.getScissor=function(D){return D.copy(vt)},this.setScissor=function(D,J,oe,le){D.isVector4?vt.set(D.x,D.y,D.z,D.w):vt.set(D,J,oe,le),tt.scissor(se.copy(vt).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(D){tt.setScissorTest(Ft=D)},this.setOpaqueSort=function(D){Le=D},this.setTransparentSort=function(D){Oe=D},this.getClearColor=function(D){return D.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(D=!0,J=!0,oe=!0){let le=0;if(D){let j=!1;if(Z!==null){const Ae=Z.texture.format;j=Ae===RGBAIntegerFormat||Ae===RGIntegerFormat||Ae===RedIntegerFormat}if(j){const Ae=Z.texture.type,Ne=Ae===UnsignedByteType||Ae===UnsignedIntType||Ae===UnsignedShortType||Ae===UnsignedInt248Type||Ae===UnsignedShort4444Type||Ae===UnsignedShort5551Type,$e=ut.getClearColor(),Ke=ut.getClearAlpha(),gt=$e.r,mt=$e.g,at=$e.b;Ne?(h[0]=gt,h[1]=mt,h[2]=at,h[3]=Ke,$.clearBufferuiv($.COLOR,0,h)):(A[0]=gt,A[1]=mt,A[2]=at,A[3]=Ke,$.clearBufferiv($.COLOR,0,A))}else le|=$.COLOR_BUFFER_BIT}J&&(le|=$.DEPTH_BUFFER_BIT),oe&&(le|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),ut.dispose(),ct.dispose(),rt.dispose(),nt.dispose(),C.dispose(),ae.dispose(),me.dispose(),Kt.dispose(),K.dispose(),Je.dispose(),he.dispose(),he.removeEventListener("sessionstart",Dr),he.removeEventListener("sessionend",Ni),ei.stop()};function ge(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const D=Zt.autoReset,J=qe.enabled,oe=qe.autoUpdate,le=qe.needsUpdate,j=qe.type;Be(),Zt.autoReset=D,qe.enabled=J,qe.autoUpdate=oe,qe.needsUpdate=le,qe.type=j}function Ve(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function xt(D){const J=D.target;J.removeEventListener("dispose",xt),rn(J)}function rn(D){En(D),nt.remove(D)}function En(D){const J=nt.get(D).programs;J!==void 0&&(J.forEach(function(oe){Je.releaseProgram(oe)}),D.isShaderMaterial&&Je.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,oe,le,j,Ae){J===null&&(J=qt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,$e=Or(D,J,oe,le,j);tt.setMaterial(le,Ne);let Ke=oe.index,gt=1;if(le.wireframe===!0){if(Ke=Me.getWireframeAttribute(oe),Ke===void 0)return;gt=2}const mt=oe.drawRange,at=oe.attributes.position;let Ut=mt.start*gt,Gt=(mt.start+mt.count)*gt;Ae!==null&&(Ut=Math.max(Ut,Ae.start*gt),Gt=Math.min(Gt,(Ae.start+Ae.count)*gt)),Ke!==null?(Ut=Math.max(Ut,0),Gt=Math.min(Gt,Ke.count)):at!=null&&(Ut=Math.max(Ut,0),Gt=Math.min(Gt,at.count));const ln=Gt-Ut;if(ln<0||ln===1/0)return;Kt.setup(j,le,$e,oe,Ke);let Xt,Ot=Ye;if(Ke!==null&&(Xt=_e.get(Ke),Ot=Pt,Ot.setIndex(Xt)),j.isMesh)le.wireframe===!0?(tt.setLineWidth(le.wireframeLinewidth*Rt()),Ot.setMode($.LINES)):Ot.setMode($.TRIANGLES);else if(j.isLine){let ot=le.linewidth;ot===void 0&&(ot=1),tt.setLineWidth(ot*Rt()),j.isLineSegments?Ot.setMode($.LINES):j.isLineLoop?Ot.setMode($.LINE_LOOP):Ot.setMode($.LINE_STRIP)}else j.isPoints?Ot.setMode($.POINTS):j.isSprite&&Ot.setMode($.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)warnOnce("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ot=j._multiDrawStarts,vn=j._multiDrawCounts,Ht=j._multiDrawCount,zn=Ke?_e.get(Ke).bytesPerElement:1,Ci=nt.get(le).currentProgram.getUniforms();for(let In=0;In<Ht;In++)Ci.setValue($,"_gl_DrawID",In),Ot.render(ot[In]/zn,vn[In])}else if(j.isInstancedMesh)Ot.renderInstances(Ut,ln,j.count);else if(oe.isInstancedBufferGeometry){const ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,vn=Math.min(oe.instanceCount,ot);Ot.renderInstances(Ut,ln,vn)}else Ot.render(Ut,ln)};function zt(D,J,oe){D.transparent===!0&&D.side===DoubleSide&&D.forceSinglePass===!1?(D.side=BackSide,D.needsUpdate=!0,Zi(D,J,oe),D.side=FrontSide,D.needsUpdate=!0,Zi(D,J,oe),D.side=DoubleSide):Zi(D,J,oe)}this.compile=function(D,J,oe=null){oe===null&&(oe=D),m=rt.get(oe),m.init(J),T.push(m),oe.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),D!==oe&&D.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const le=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const $e=Ae[Ne];zt($e,oe,j),le.add($e)}else zt(Ae,oe,j),le.add(Ae)}),m=T.pop(),le},this.compileAsync=function(D,J,oe=null){const le=this.compile(D,J,oe);return new Promise(j=>{function Ae(){if(le.forEach(function(Ne){nt.get(Ne).currentProgram.isReady()&&le.delete(Ne)}),le.size===0){j(D);return}setTimeout(Ae,10)}Lt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let kn=null;function Qn(D){kn&&kn(D)}function Dr(){ei.stop()}function Ni(){ei.start()}const ei=new WebGLAnimation;ei.setAnimationLoop(Qn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(D){kn=D,he.setAnimationLoop(D),D===null?ei.stop():ei.start()},he.addEventListener("sessionstart",Dr),he.addEventListener("sessionend",Ni),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(J),J=he.getCamera()),D.isScene===!0&&D.onBeforeRender(P,D,J,Z),m=rt.get(D,T.length),m.init(J),T.push(m),Qe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),pe.setFromProjectionMatrix(Qe),ke=this.localClippingEnabled,we=ye.init(this.clippingPlanes,ke),x=ct.get(D,U.length),x.init(),U.push(x),he.enabled===!0&&he.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&dr(Ae,J,-1/0,P.sortObjects)}dr(D,J,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(Le,Oe),Wt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Wt&&ut.addToRenderList(x,D),this.info.render.frame++,we===!0&&ye.beginShadows();const oe=m.state.shadowsArray;qe.render(oe,D,J),we===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=x.opaque,j=x.transmissive;if(m.setupLights(),J.isArrayCamera){const Ae=J.cameras;if(j.length>0)for(let Ne=0,$e=Ae.length;Ne<$e;Ne++){const Ke=Ae[Ne];Ur(le,j,D,Ke)}Wt&&ut.render(D);for(let Ne=0,$e=Ae.length;Ne<$e;Ne++){const Ke=Ae[Ne];Lr(x,D,Ke,Ke.viewport)}}else j.length>0&&Ur(le,j,D,J),Wt&&ut.render(D),Lr(x,D,J);Z!==null&&W===0&&(O.updateMultisampleRenderTarget(Z),O.updateRenderTargetMipmap(Z)),D.isScene===!0&&D.onAfterRender(P,D,J),Kt.resetDefaultState(),N=-1,L=null,T.pop(),T.length>0?(m=T[T.length-1],we===!0&&ye.setGlobalState(P.clippingPlanes,m.state.camera)):m=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function dr(D,J,oe,le){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||pe.intersectsSprite(D)){le&&st.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Qe);const Ne=me.update(D),$e=D.material;$e.visible&&x.push(D,Ne,$e,oe,st.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||pe.intersectsObject(D))){const Ne=me.update(D),$e=D.material;if(le&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),st.copy(D.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),st.copy(Ne.boundingSphere.center)),st.applyMatrix4(D.matrixWorld).applyMatrix4(Qe)),Array.isArray($e)){const Ke=Ne.groups;for(let gt=0,mt=Ke.length;gt<mt;gt++){const at=Ke[gt],Ut=$e[at.materialIndex];Ut&&Ut.visible&&x.push(D,Ne,Ut,oe,st.z,at)}}else $e.visible&&x.push(D,Ne,$e,oe,st.z,null)}}const Ae=D.children;for(let Ne=0,$e=Ae.length;Ne<$e;Ne++)dr(Ae[Ne],J,oe,le)}function Lr(D,J,oe,le){const j=D.opaque,Ae=D.transmissive,Ne=D.transparent;m.setupLightsView(oe),we===!0&&ye.setGlobalState(P.clippingPlanes,oe),le&&tt.viewport(q.copy(le)),j.length>0&&Fi(j,J,oe),Ae.length>0&&Fi(Ae,J,oe),Ne.length>0&&Fi(Ne,J,oe),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Ur(D,J,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[le.id]===void 0&&(m.state.transmissionRenderTarget[le.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const Ae=m.state.transmissionRenderTarget[le.id],Ne=le.viewport||q;Ae.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const $e=P.getRenderTarget();P.setRenderTarget(Ae),P.getClearColor(re),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),Wt&&ut.render(oe);const Ke=P.toneMapping;P.toneMapping=NoToneMapping;const gt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),m.setupLightsView(le),we===!0&&ye.setGlobalState(P.clippingPlanes,le),Fi(D,oe,le),O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let at=0,Ut=J.length;at<Ut;at++){const Gt=J[at],ln=Gt.object,Xt=Gt.geometry,Ot=Gt.material,ot=Gt.group;if(Ot.side===DoubleSide&&ln.layers.test(le.layers)){const vn=Ot.side;Ot.side=BackSide,Ot.needsUpdate=!0,Ir(ln,oe,le,Xt,Ot,ot),Ot.side=vn,Ot.needsUpdate=!0,mt=!0}}mt===!0&&(O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae))}P.setRenderTarget($e),P.setClearColor(re,ce),gt!==void 0&&(le.viewport=gt),P.toneMapping=Ke}function Fi(D,J,oe){const le=J.isScene===!0?J.overrideMaterial:null;for(let j=0,Ae=D.length;j<Ae;j++){const Ne=D[j],$e=Ne.object,Ke=Ne.geometry,gt=Ne.group;let mt=Ne.material;mt.allowOverride===!0&&le!==null&&(mt=le),$e.layers.test(oe.layers)&&Ir($e,J,oe,Ke,mt,gt)}}function Ir(D,J,oe,le,j,Ae){D.onBeforeRender(P,J,oe,le,j,Ae),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(P,J,oe,le,D,Ae),j.transparent===!0&&j.side===DoubleSide&&j.forceSinglePass===!1?(j.side=BackSide,j.needsUpdate=!0,P.renderBufferDirect(oe,J,le,j,D,Ae),j.side=FrontSide,j.needsUpdate=!0,P.renderBufferDirect(oe,J,le,j,D,Ae),j.side=DoubleSide):P.renderBufferDirect(oe,J,le,j,D,Ae),D.onAfterRender(P,J,oe,le,j,Ae)}function Zi(D,J,oe){J.isScene!==!0&&(J=qt);const le=nt.get(D),j=m.state.lights,Ae=m.state.shadowsArray,Ne=j.state.version,$e=Je.getParameters(D,j.state,Ae,J,oe),Ke=Je.getProgramCacheKey($e);let gt=le.programs;le.environment=D.isMeshStandardMaterial?J.environment:null,le.fog=J.fog,le.envMap=(D.isMeshStandardMaterial?ae:C).get(D.envMap||le.environment),le.envMapRotation=le.environment!==null&&D.envMap===null?J.environmentRotation:D.envMapRotation,gt===void 0&&(D.addEventListener("dispose",xt),gt=new Map,le.programs=gt);let mt=gt.get(Ke);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===Ne)return Fr(D,$e),mt}else $e.uniforms=Je.getUniforms(D),D.onBeforeCompile($e,P),mt=Je.acquireProgram($e,Ke),gt.set(Ke,mt),le.uniforms=$e.uniforms;const at=le.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(at.clippingPlanes=ye.uniform),Fr(D,$e),le.needsLights=Xr(D),le.lightsStateVersion=Ne,le.needsLights&&(at.ambientLightColor.value=j.state.ambient,at.lightProbe.value=j.state.probe,at.directionalLights.value=j.state.directional,at.directionalLightShadows.value=j.state.directionalShadow,at.spotLights.value=j.state.spot,at.spotLightShadows.value=j.state.spotShadow,at.rectAreaLights.value=j.state.rectArea,at.ltc_1.value=j.state.rectAreaLTC1,at.ltc_2.value=j.state.rectAreaLTC2,at.pointLights.value=j.state.point,at.pointLightShadows.value=j.state.pointShadow,at.hemisphereLights.value=j.state.hemi,at.directionalShadowMap.value=j.state.directionalShadowMap,at.directionalShadowMatrix.value=j.state.directionalShadowMatrix,at.spotShadowMap.value=j.state.spotShadowMap,at.spotLightMatrix.value=j.state.spotLightMatrix,at.spotLightMap.value=j.state.spotLightMap,at.pointShadowMap.value=j.state.pointShadowMap,at.pointShadowMatrix.value=j.state.pointShadowMatrix),le.currentProgram=mt,le.uniformsList=null,mt}function Nr(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=WebGLUniforms.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function Fr(D,J){const oe=nt.get(D);oe.outputColorSpace=J.outputColorSpace,oe.batching=J.batching,oe.batchingColor=J.batchingColor,oe.instancing=J.instancing,oe.instancingColor=J.instancingColor,oe.instancingMorph=J.instancingMorph,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Or(D,J,oe,le,j){J.isScene!==!0&&(J=qt),O.resetTextureUnits();const Ae=J.fog,Ne=le.isMeshStandardMaterial?J.environment:null,$e=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:LinearSRGBColorSpace,Ke=(le.isMeshStandardMaterial?ae:C).get(le.envMap||Ne),gt=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,mt=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),at=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,Gt=!!oe.morphAttributes.color;let ln=NoToneMapping;le.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ln=P.toneMapping);const Xt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Xt!==void 0?Xt.length:0,ot=nt.get(le),vn=m.state.lights;if(we===!0&&(ke===!0||D!==L)){const Tn=D===L&&le.id===N;ye.setState(le,D,Tn)}let Ht=!1;le.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==vn.state.version||ot.outputColorSpace!==$e||j.isBatchedMesh&&ot.batching===!1||!j.isBatchedMesh&&ot.batching===!0||j.isBatchedMesh&&ot.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ot.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ot.instancing===!1||!j.isInstancedMesh&&ot.instancing===!0||j.isSkinnedMesh&&ot.skinning===!1||!j.isSkinnedMesh&&ot.skinning===!0||j.isInstancedMesh&&ot.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ot.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ot.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ot.instancingMorph===!1&&j.morphTexture!==null||ot.envMap!==Ke||le.fog===!0&&ot.fog!==Ae||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==ye.numPlanes||ot.numIntersection!==ye.numIntersection)||ot.vertexAlphas!==gt||ot.vertexTangents!==mt||ot.morphTargets!==at||ot.morphNormals!==Ut||ot.morphColors!==Gt||ot.toneMapping!==ln||ot.morphTargetsCount!==Ot)&&(Ht=!0):(Ht=!0,ot.__version=le.version);let zn=ot.currentProgram;Ht===!0&&(zn=Zi(le,J,j));let Ci=!1,In=!1,Oi=!1;const en=zn.getUniforms(),Bn=ot.uniforms;if(tt.useProgram(zn.program)&&(Ci=!0,In=!0,Oi=!0),le.id!==N&&(N=le.id,In=!0),Ci||L!==D){tt.buffers.depth.getReversed()?(Pe.copy(D.projectionMatrix),toNormalizedProjectionMatrix(Pe),toReversedProjectionMatrix(Pe),en.setValue($,"projectionMatrix",Pe)):en.setValue($,"projectionMatrix",D.projectionMatrix),en.setValue($,"viewMatrix",D.matrixWorldInverse);const yn=en.map.cameraPosition;yn!==void 0&&yn.setValue($,At.setFromMatrixPosition(D.matrixWorld)),Ct.logarithmicDepthBuffer&&en.setValue($,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&en.setValue($,"isOrthographic",D.isOrthographicCamera===!0),L!==D&&(L=D,In=!0,Oi=!0)}if(j.isSkinnedMesh){en.setOptional($,j,"bindMatrix"),en.setOptional($,j,"bindMatrixInverse");const Tn=j.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),en.setValue($,"boneTexture",Tn.boneTexture,O))}j.isBatchedMesh&&(en.setOptional($,j,"batchingTexture"),en.setValue($,"batchingTexture",j._matricesTexture,O),en.setOptional($,j,"batchingIdTexture"),en.setValue($,"batchingIdTexture",j._indirectTexture,O),en.setOptional($,j,"batchingColorTexture"),j._colorsTexture!==null&&en.setValue($,"batchingColorTexture",j._colorsTexture,O));const Pn=oe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&_t.update(j,oe,zn),(In||ot.receiveShadow!==j.receiveShadow)&&(ot.receiveShadow=j.receiveShadow,en.setValue($,"receiveShadow",j.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Bn.envMap.value=Ke,Bn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&J.environment!==null&&(Bn.envMapIntensity.value=J.environmentIntensity),In&&(en.setValue($,"toneMappingExposure",P.toneMappingExposure),ot.needsLights&&pr(Bn,Oi),Ae&&le.fog===!0&&Ie.refreshFogUniforms(Bn,Ae),Ie.refreshMaterialUniforms(Bn,le,ue,Ee,m.state.transmissionRenderTarget[D.id]),WebGLUniforms.upload($,Nr(ot),Bn,O)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(WebGLUniforms.upload($,Nr(ot),Bn,O),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&en.setValue($,"center",j.center),en.setValue($,"modelViewMatrix",j.modelViewMatrix),en.setValue($,"normalMatrix",j.normalMatrix),en.setValue($,"modelMatrix",j.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Tn=le.uniformsGroups;for(let yn=0,Ji=Tn.length;yn<Ji;yn++){const Si=Tn[yn];K.update(Si,zn),K.bind(Si,zn)}}return zn}function pr(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function Xr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(D,J,oe){const le=nt.get(D);le.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),nt.get(D.texture).__webglTexture=J,nt.get(D.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,J){const oe=nt.get(D);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0};const $r=$.createFramebuffer();this.setRenderTarget=function(D,J=0,oe=0){Z=D,G=J,W=oe;let le=!0,j=null,Ae=!1,Ne=!1;if(D){const Ke=nt.get(D);if(Ke.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer($.FRAMEBUFFER,null),le=!1;else if(Ke.__webglFramebuffer===void 0)O.setupRenderTarget(D);else if(Ke.__hasExternalTextures)O.rebindTextures(D,nt.get(D.texture).__webglTexture,nt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const at=D.depthTexture;if(Ke.__boundDepthTexture!==at){if(at!==null&&nt.has(at)&&(D.width!==at.image.width||D.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(D)}}const gt=D.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Ne=!0);const mt=nt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(mt[J])?j=mt[J][oe]:j=mt[J],Ae=!0):D.samples>0&&O.useMultisampledRTT(D)===!1?j=nt.get(D).__webglMultisampledFramebuffer:Array.isArray(mt)?j=mt[oe]:j=mt,q.copy(D.viewport),se.copy(D.scissor),ee=D.scissorTest}else q.copy(Ze).multiplyScalar(ue).floor(),se.copy(vt).multiplyScalar(ue).floor(),ee=Ft;if(oe!==0&&(j=$r),tt.bindFramebuffer($.FRAMEBUFFER,j)&&le&&tt.drawBuffers(D,j),tt.viewport(q),tt.scissor(se),tt.setScissorTest(ee),Ae){const Ke=nt.get(D.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ke.__webglTexture,oe)}else if(Ne){const Ke=nt.get(D.texture),gt=J;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ke.__webglTexture,oe,gt)}else if(D!==null&&oe!==0){const Ke=nt.get(D.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ke.__webglTexture,oe)}N=-1},this.readRenderTargetPixels=function(D,J,oe,le,j,Ae,Ne){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&($e=$e[Ne]),$e){tt.bindFramebuffer($.FRAMEBUFFER,$e);try{const Ke=D.texture,gt=Ke.format,mt=Ke.type;if(!Ct.textureFormatReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-le&&oe>=0&&oe<=D.height-j&&$.readPixels(J,oe,le,j,Et.convert(gt),Et.convert(mt),Ae)}finally{const Ke=Z!==null?nt.get(Z).__webglFramebuffer:null;tt.bindFramebuffer($.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(D,J,oe,le,j,Ae,Ne){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&($e=$e[Ne]),$e)if(J>=0&&J<=D.width-le&&oe>=0&&oe<=D.height-j){tt.bindFramebuffer($.FRAMEBUFFER,$e);const Ke=D.texture,gt=Ke.format,mt=Ke.type;if(!Ct.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,at),$.bufferData($.PIXEL_PACK_BUFFER,Ae.byteLength,$.STREAM_READ),$.readPixels(J,oe,le,j,Et.convert(gt),Et.convert(mt),0);const Ut=Z!==null?nt.get(Z).__webglFramebuffer:null;tt.bindFramebuffer($.FRAMEBUFFER,Ut);const Gt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await probeAsync($,Gt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,at),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ae),$.deleteBuffer(at),$.deleteSync(Gt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,J=null,oe=0){const le=Math.pow(2,-oe),j=Math.floor(D.image.width*le),Ae=Math.floor(D.image.height*le),Ne=J!==null?J.x:0,$e=J!==null?J.y:0;O.setTexture2D(D,0),$.copyTexSubImage2D($.TEXTURE_2D,oe,0,0,Ne,$e,j,Ae),tt.unbindTexture()};const qr=$.createFramebuffer(),Yr=$.createFramebuffer();this.copyTextureToTexture=function(D,J,oe=null,le=null,j=0,Ae=null){Ae===null&&(j!==0?(warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=j,j=0):Ae=0);let Ne,$e,Ke,gt,mt,at,Ut,Gt,ln;const Xt=D.isCompressedTexture?D.mipmaps[Ae]:D.image;if(oe!==null)Ne=oe.max.x-oe.min.x,$e=oe.max.y-oe.min.y,Ke=oe.isBox3?oe.max.z-oe.min.z:1,gt=oe.min.x,mt=oe.min.y,at=oe.isBox3?oe.min.z:0;else{const Pn=Math.pow(2,-j);Ne=Math.floor(Xt.width*Pn),$e=Math.floor(Xt.height*Pn),D.isDataArrayTexture?Ke=Xt.depth:D.isData3DTexture?Ke=Math.floor(Xt.depth*Pn):Ke=1,gt=0,mt=0,at=0}le!==null?(Ut=le.x,Gt=le.y,ln=le.z):(Ut=0,Gt=0,ln=0);const Ot=Et.convert(J.format),ot=Et.convert(J.type);let vn;J.isData3DTexture?(O.setTexture3D(J,0),vn=$.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(O.setTexture2DArray(J,0),vn=$.TEXTURE_2D_ARRAY):(O.setTexture2D(J,0),vn=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const Ht=$.getParameter($.UNPACK_ROW_LENGTH),zn=$.getParameter($.UNPACK_IMAGE_HEIGHT),Ci=$.getParameter($.UNPACK_SKIP_PIXELS),In=$.getParameter($.UNPACK_SKIP_ROWS),Oi=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,Xt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Xt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,gt),$.pixelStorei($.UNPACK_SKIP_ROWS,mt),$.pixelStorei($.UNPACK_SKIP_IMAGES,at);const en=D.isDataArrayTexture||D.isData3DTexture,Bn=J.isDataArrayTexture||J.isData3DTexture;if(D.isDepthTexture){const Pn=nt.get(D),Tn=nt.get(J),yn=nt.get(Pn.__renderTarget),Ji=nt.get(Tn.__renderTarget);tt.bindFramebuffer($.READ_FRAMEBUFFER,yn.__webglFramebuffer),tt.bindFramebuffer($.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Si=0;Si<Ke;Si++)en&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nt.get(D).__webglTexture,j,at+Si),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nt.get(J).__webglTexture,Ae,ln+Si)),$.blitFramebuffer(gt,mt,Ne,$e,Ut,Gt,Ne,$e,$.DEPTH_BUFFER_BIT,$.NEAREST);tt.bindFramebuffer($.READ_FRAMEBUFFER,null),tt.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(j!==0||D.isRenderTargetTexture||nt.has(D)){const Pn=nt.get(D),Tn=nt.get(J);tt.bindFramebuffer($.READ_FRAMEBUFFER,qr),tt.bindFramebuffer($.DRAW_FRAMEBUFFER,Yr);for(let yn=0;yn<Ke;yn++)en?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Pn.__webglTexture,j,at+yn):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Pn.__webglTexture,j),Bn?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Tn.__webglTexture,Ae,ln+yn):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Tn.__webglTexture,Ae),j!==0?$.blitFramebuffer(gt,mt,Ne,$e,Ut,Gt,Ne,$e,$.COLOR_BUFFER_BIT,$.NEAREST):Bn?$.copyTexSubImage3D(vn,Ae,Ut,Gt,ln+yn,gt,mt,Ne,$e):$.copyTexSubImage2D(vn,Ae,Ut,Gt,gt,mt,Ne,$e);tt.bindFramebuffer($.READ_FRAMEBUFFER,null),tt.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Bn?D.isDataTexture||D.isData3DTexture?$.texSubImage3D(vn,Ae,Ut,Gt,ln,Ne,$e,Ke,Ot,ot,Xt.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(vn,Ae,Ut,Gt,ln,Ne,$e,Ke,Ot,Xt.data):$.texSubImage3D(vn,Ae,Ut,Gt,ln,Ne,$e,Ke,Ot,ot,Xt):D.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ae,Ut,Gt,Ne,$e,Ot,ot,Xt.data):D.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ae,Ut,Gt,Xt.width,Xt.height,Ot,Xt.data):$.texSubImage2D($.TEXTURE_2D,Ae,Ut,Gt,Ne,$e,Ot,ot,Xt);$.pixelStorei($.UNPACK_ROW_LENGTH,Ht),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,zn),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ci),$.pixelStorei($.UNPACK_SKIP_ROWS,In),$.pixelStorei($.UNPACK_SKIP_IMAGES,Oi),Ae===0&&J.generateMipmaps&&$.generateMipmap(vn),tt.unbindTexture()},this.copyTextureToTexture3D=function(D,J,oe=null,le=null,j=0){return warnOnce('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,J,oe,le,j)},this.initRenderTarget=function(D){nt.get(D).__webglFramebuffer===void 0&&O.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?O.setTextureCube(D,0):D.isData3DTexture?O.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?O.setTexture2DArray(D,0):O.setTexture2D(D,0),tt.unbindTexture()},this.resetState=function(){G=0,W=0,Z=null,tt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(e),t.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}const DEG2RAD=Math.PI/180,TIME_PADDING=.1;function quartic_in_out(n){return n>=1?1:n<=0?0:n<=.5?2*n**2:-1-(2*n**2-4*n)}function quartic_out(n){return n<=0?0:n>=1?1:n*2-n**2}function quintic_in_out(n){return n<.5?16*n**5:1-Math.pow(-2*n+2,5)/2}function quintic_out(n){return 1-(1-n)**5}class AnimRunner{constructor(){Re(this,"tracks",[]);Re(this,"running",!1);Re(this,"startTime",0);Re(this,"maxTime",0)}quint_out(e,t,a,r,o,l){return this.key(e,t,a,r,o,l,quintic_out)}quint_in_out(e,t,a,r,o,l){return this.key(e,t,a,r,o,l,quintic_in_out)}quart_out(e,t,a,r,o,l){return this.key(e,t,a,r,o,l,quartic_out)}quart_in_out(e,t,a,r,o,l){return this.key(e,t,a,r,o,l,quartic_in_out)}clear(e=!0){if(e)for(const t of this.tracks)t.object[t.property]=t.endValue;this.running=!1,this.tracks.length=0}key(e,t,a,r,o,l,c=quartic_out){return this._key({object:e,property:t,startTime:a,endTime:r,startValue:o,endValue:l,func:c})}_key(e){return this.tracks.push(e),this.maxTime=Math.max(this.maxTime,e.endTime+TIME_PADDING),this}start(){this.startTime=Date.now(),this.running=!0}stop(){this.running=!1}frame(){if(!this.running)return;const e=(Date.now()-this.startTime)/1e3;if(e>this.maxTime){this.running=!1;return}for(let t=0;t<this.tracks.length;t++){const a=this.tracks[t];if(e<a.startTime||e>a.endTime)continue;const r=(e-a.startTime)/(a.endTime-a.startTime),o=a.func(r)*(a.endValue-a.startValue)+a.startValue;a.object[a.property]=o}}}var ViewportModes=(n=>(n[n.None=0]="None",n[n.Single=1]="Single",n[n.ArrayFrames=2]="ArrayFrames",n))(ViewportModes||{});const gViewportMode=writable(0),Wr=class Wr{constructor(e){Re(this,"mode",0);Re(this,"vtf");Re(this,"animator",new AnimRunner);Re(this,"slicePlanes",[]);Re(this,"element");Re(this,"cameraOrbit");Re(this,"camera");Re(this,"scene",new Scene);Re(this,"renderer");Re(this,"rendering",0);gViewportMode.subscribe(o=>{this.animateInto(o)}),Wr.currentViewport=this,this.element=e,this.renderer=new WebGLRenderer({antialias:!0,canvas:e}),this.camera=new OrthographicCamera,this.cameraOrbit=new Object3D,this.camera.position.set(0,0,4),this.cameraOrbit.add(this.camera);const t=30*DEG2RAD,a=-20*DEG2RAD;this.cameraOrbit.rotation.order="YXZ",this.cameraOrbit.rotation.set(a,t,0),this.scene.add(this.cameraOrbit),this.camera.updateProjectionMatrix(),this.onResized(),this.scene.background=new Color(1381653);let r;window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>this.onResized(),10)}),this.render()}render(){if(this.rendering)return console.error("VIEWPORT HAS >1 RENDERING THREADS!!!! WTF!!!!!");this.rendering++,this.animator.frame(),this.renderer.render(this.scene,this.camera),this.rendering--,requestAnimationFrame(()=>this.render())}onResized(){const e=this.element.clientWidth,t=this.element.clientHeight,a=e/t,r=1.2;this.camera.left=-1.2*a,this.camera.right=r*a,this.camera.top=r,this.camera.bottom=-1.2,this.camera.updateProjectionMatrix(),this.renderer.setSize(e*devicePixelRatio,t*devicePixelRatio,!1)}makeSlicePlane(e,t,a){const r=new PlaneGeometry(1,-1/t),o=new Mesh(r,a);return o.position.z=e,o}makeSliceMaterial(e,t,a){const r=this.convertTexture(e,t);return r?new MeshBasicMaterial({map:r,transparent:!0,opacity:0,side:BackSide}):new MeshBasicMaterial({color:new Color(a,a,a),transparent:!0,opacity:0,side:BackSide})}convertTexture(e,t){if(!e||!e.data.length)return;const a=l=>(t&VFlags.PointSample&&(l.minFilter=l.magFilter=NearestFilter),l.wrapT=t&VFlags.ClampT?ClampToEdgeWrapping:RepeatWrapping,l.wrapS=t&VFlags.ClampS?ClampToEdgeWrapping:RepeatWrapping,l.colorSpace=SRGBColorSpace,l.needsUpdate=!0,l);if(!e.isEncoded){let l=UnsignedByteType;return e.data instanceof Uint8Array||(e.data instanceof Uint16Array?l=UnsignedShortType:e.data instanceof Uint32Array?l=UnsignedIntType:e.data instanceof Float32Array&&(l=FloatType)),a(new DataTexture(e.data,e.width,e.height,RGBAFormat,l))}if(e.format===VFormats.DXT5)return a(new CompressedTexture([{data:e.data,width:e.width,height:e.height}],e.width,e.height,RGBA_S3TC_DXT5_Format));if(e.format===VFormats.DXT3)return a(new CompressedTexture([{data:e.data,width:e.width,height:e.height}],e.width,e.height,RGBA_S3TC_DXT3_Format));if(e.format===VFormats.DXT1||e.format===VFormats.DXT1_ONEBITALPHA){const l=t&VFlags.OneBitAlpha?RGBA_S3TC_DXT1_Format:RGB_S3TC_DXT1_Format;return a(new CompressedTexture([{data:e.data,width:e.width,height:e.height}],e.width,e.height,l))}let r,o;switch(e.format){case VFormats.RGBA8888:{r=RGBAFormat,o=UnsignedByteType;break}case VFormats.RGB888:{r=RGBFormat,o=UnsignedByteType;break}case VFormats.I8:{r=void 0,o=UnsignedByteType;break}case VFormats.IA88:{r=void 0,o=UnsignedByteType;break}case VFormats.RGBA16161616:{r=RGBAFormat,o=UnsignedShortType;break}case VFormats.RGBA16161616F:{r=RGBAFormat,o=HalfFloatType;break}case VFormats.R32F:{r=RedFormat,o=FloatType;break}}if(r)return a(new DataTexture(e.data,e.width,e.height,r,o));try{const l=e.decode();let c=l.data;return o=UnsignedByteType,l.data instanceof Uint8Array||(l.data instanceof Uint16Array?o=UnsignedShortType:l.data instanceof Uint32Array?o=UnsignedIntType:l.data instanceof Float32Array?o=FloatType:c=l.convert(Uint8Array).data),a(new DataTexture(c,l.width,l.height,RGBAFormat,o))}catch{console.error(`Failed to decode image with size ${e.width}x${e.height} and format ${VFormats[e.format]??"UNKNOWN (id="+e.format+")"}`)}}makeSlices(e,t,a){var c;if(this.slicePlanes.length){this.scene.remove(...this.slicePlanes);for(const s of this.slicePlanes){const d=s.material;d.isMeshBasicMaterial&&((c=d.map)==null||c.dispose()),d.dispose(),s.geometry.dispose()}this.slicePlanes.length=0}const r=e.length,o=Math.min(.15,1.5/r),l=(r-1)/2*o;for(let s=0;s<r;s++){const d=remap(s,0,r,.15,.4)**2.2,f=this.makeSliceMaterial(e[s],a,d),v=this.makeSlicePlane(l+s*-o,t,f);this.slicePlanes.push(v)}this.scene.add(...this.slicePlanes)}getDefaultMode(){return this.slicePlanes.length>1?2:1}animateInto(e){if(console.log("Requesting animate from",this.mode,"to",e),this.mode!==e){if(this.animator.clear(),this.mode===0&&e===2){for(let t=0;t<this.slicePlanes.length;t++){const a=this.slicePlanes[t],r=t/this.slicePlanes.length*.4;this.animator.quart_out(a.position,"y",r,r+.5,-.1,0),this.animator.quart_out(a.material,"opacity",r,r+.5,0,1)}this.animator.quint_out(this.cameraOrbit.rotation,"x",0,.5,-20*DEG2RAD,-20*DEG2RAD),this.animator.quint_out(this.cameraOrbit.rotation,"y",0,.5,40*DEG2RAD,30*DEG2RAD)}else if(this.mode===0&&e===1)this.slicePlanes.length&&this.animator.quart_out(this.slicePlanes[0].material,"opacity",0,.4,0,1),this.animator.quint_out(this.cameraOrbit.rotation,"x",0,.4,0,0),this.animator.quint_out(this.cameraOrbit.rotation,"y",0,.4,0,0);else if(this.mode===2&&e===1){for(let t=1;t<this.slicePlanes.length;t++){const a=this.slicePlanes[t],r=0;this.animator.quart_out(a.material,"opacity",r,r+.4,1,0)}this.animator.quint_out(this.cameraOrbit.rotation,"x",0,.4,-20*DEG2RAD,0),this.animator.quint_out(this.cameraOrbit.rotation,"y",0,.4,40*DEG2RAD,0)}else if(this.mode===1&&e===2){for(let t=1;t<this.slicePlanes.length;t++){const a=this.slicePlanes[t],r=0;this.animator.quart_out(a.material,"opacity",r,r+.4,0,1)}this.animator.quint_out(this.cameraOrbit.rotation,"x",0,.4,0,-20*DEG2RAD),this.animator.quint_out(this.cameraOrbit.rotation,"y",0,.4,0,40*DEG2RAD)}this.mode=e,this.animator.start()}}setupFile(e){if(this.vtf)throw Error("Viewport cannot setup new file without running teardownFile!");this.vtf=e;const t=this.vtf.data.frameCount(),a=new Array(t);for(let l=0;l<t;l++)a[l]=this.vtf.data.getImage(0,l,0,0,!0);const r=this.vtf.data.getSize(0,0,0,0),o=r[0]/r[1];this.makeSlices(a,o,this.vtf.flags),this.mode=0,this.slicePlanes.length>1?gViewportMode.set(2):gViewportMode.set(1),this.animator.start()}teardownFile(){this.animator.stop(),this.mode=0,gViewportMode.set(0),this.vtf=void 0}};Re(Wr,"currentViewport");let Viewport=Wr;class VFakeData{constructor(e,t,a,r,o,l){this._width=e,this._height=t,this._mipCount=a,this._frameCount=r,this._faceCount=o,this._sliceCount=l}getImage(e,t,a,r,o){const l=getMipSize(e,this._width,this._height);return new VImageData(new Uint8Array,l[0],l[1])}getSize(e=0,t,a,r){return getMipSize(e,this._width,this._height)}mipmapCount(){return this._mipCount}frameCount(){return this._frameCount}faceCount(){return this._faceCount}sliceCount(){return this._sliceCount}}var ab=ArrayBuffer,u8=Uint8Array,u16=Uint16Array,i16=Int16Array,i32=Int32Array,slc=function(n,e,t){if(u8.prototype.slice)return u8.prototype.slice.call(n,e,t);(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var a=new u8(t-e);return a.set(n.subarray(e,t)),a},fill=function(n,e,t,a){if(u8.prototype.fill)return u8.prototype.fill.call(n,e,t,a);for((t==null||t<0)&&(t=0),(a==null||a>n.length)&&(a=n.length);t<a;++t)n[t]=e;return n},cpw=function(n,e,t,a){if(u8.prototype.copyWithin)return u8.prototype.copyWithin.call(n,e,t,a);for((t==null||t<0)&&(t=0),(a==null||a>n.length)&&(a=n.length);t<a;)n[e++]=n[t++]},ec=["invalid zstd data","window size too large (>2046MB)","invalid block type","FSE accuracy too high","match distance too far back","unexpected EOF"],err=function(n,e,t){var a=new Error(e||ec[n]);if(a.code=n,Error.captureStackTrace&&Error.captureStackTrace(a,err),!t)throw a;return a},rb=function(n,e,t){for(var a=0,r=0;a<t;++a)r|=n[e++]<<(a<<3);return r},b4=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},rzfh=function(n,e){var t=n[0]|n[1]<<8|n[2]<<16;if(t==3126568&&n[3]==253){var a=n[4],r=a>>5&1,o=a>>2&1,l=a&3,c=a>>6;a&8&&err(0);var s=6-r,d=l==3?4:l,f=rb(n,s,d);s+=d;var v=c?1<<c:r,g=rb(n,s,v)+(c==1&&256),M=g;if(!r){var h=1<<10+(n[5]>>3);M=h+(h>>3)*(n[5]&7)}M>2145386496&&err(1);var A=new u8((e==1?g||M:e?0:M)+12);return A[0]=1,A[4]=4,A[8]=8,{b:s+v,y:0,l:0,d:f,w:e&&e!=1?e:A.subarray(12),e:M,o:new i32(A.buffer,0,3),u:g,c:o,m:Math.min(131072,M)}}else if((t>>4|n[3]<<20)==25481893)return b4(n,4)+8;err(0)},msb=function(n){for(var e=0;1<<e<=n;++e);return e-1},rfse=function(n,e,t){var a=(e<<3)+4,r=(n[e]&15)+5;r>t&&err(3);for(var o=1<<r,l=o,c=-1,s=-1,d=-1,f=o,v=new ab(512+(o<<2)),g=new i16(v,0,256),M=new u16(v,0,256),h=new u16(v,512,o),A=512+(o<<1),x=new u8(v,A,o),m=new u8(v,A+o);c<255&&l>0;){var U=msb(l+1),T=a>>3,P=(1<<U+1)-1,H=(n[T]|n[T+1]<<8|n[T+2]<<16)>>(a&7)&P,G=(1<<U)-1,W=P-l-1,Z=H&G;if(Z<W?(a+=U,H=Z):(a+=U+1,H>G&&(H-=W)),g[++c]=--H,H==-1?(l+=H,x[--f]=c):l-=H,!H)do{var N=a>>3;s=(n[N]|n[N+1]<<8)>>(a&7)&3,a+=2,c+=s}while(s==3)}(c>255||l)&&err(0);for(var L=0,q=(o>>1)+(o>>3)+3,se=o-1,ee=0;ee<=c;++ee){var re=g[ee];if(re<1){M[ee]=-re;continue}for(d=0;d<re;++d){x[L]=ee;do L=L+q&se;while(L>=f)}}for(L&&err(0),d=0;d<o;++d){var ce=M[x[d]]++,fe=m[d]=r-msb(ce);h[d]=(ce<<fe)-o}return[a+7>>3,{b:r,s:x,n:m,t:h}]},rhu=function(n,e){var t=0,a=-1,r=new u8(292),o=n[e],l=r.subarray(0,256),c=r.subarray(256,268),s=new u16(r.buffer,268);if(o<128){var d=rfse(n,e+1,6),f=d[0],v=d[1];e+=o;var g=f<<3,M=n[e];M||err(0);for(var h=0,A=0,x=v.b,m=x,U=(++e<<3)-8+msb(M);U-=x,!(U<g);){var T=U>>3;if(h+=(n[T]|n[T+1]<<8)>>(U&7)&(1<<x)-1,l[++a]=v.s[h],U-=m,U<g)break;T=U>>3,A+=(n[T]|n[T+1]<<8)>>(U&7)&(1<<m)-1,l[++a]=v.s[A],x=v.n[h],h=v.t[h],m=v.n[A],A=v.t[A]}++a>255&&err(0)}else{for(a=o-127;t<a;t+=2){var P=n[++e];l[t]=P>>4,l[t+1]=P&15}++e}var H=0;for(t=0;t<a;++t){var G=l[t];G>11&&err(0),H+=G&&1<<G-1}var W=msb(H)+1,Z=1<<W,N=Z-H;for(N&N-1&&err(0),l[a++]=msb(N)+1,t=0;t<a;++t){var G=l[t];++c[l[t]=G&&W+1-G]}var L=new u8(Z<<1),q=L.subarray(0,Z),se=L.subarray(Z);for(s[W]=0,t=W;t>0;--t){var ee=s[t];fill(se,t,ee,s[t-1]=ee+c[t]*(1<<W-t))}for(s[0]!=Z&&err(0),t=0;t<a;++t){var re=l[t];if(re){var ce=s[re];fill(q,t,ce,s[re]=ce+(1<<W-re))}}return[e,{n:se,b:W,s:q}]},dllt=rfse(new u8([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],dmlt=rfse(new u8([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],doct=rfse(new u8([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],b2bl=function(n,e){for(var t=n.length,a=new i32(t),r=0;r<t;++r)a[r]=e,e+=1<<n[r];return a},llb=new u8(new i32([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),llbl=b2bl(llb,0),mlb=new u8(new i32([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),mlbl=b2bl(mlb,3),dhu=function(n,e,t){var a=n.length,r=e.length,o=n[a-1],l=(1<<t.b)-1,c=-t.b;o||err(0);for(var s=0,d=t.b,f=(a<<3)-8+msb(o)-d,v=-1;f>c&&v<r;){var g=f>>3,M=(n[g]|n[g+1]<<8|n[g+2]<<16)>>(f&7);s=(s<<d|M)&l,e[++v]=t.s[s],f-=d=t.n[s]}(f!=c||v+1!=r)&&err(0)},dhu4=function(n,e,t){var a=6,r=e.length,o=r+3>>2,l=o<<1,c=o+l;dhu(n.subarray(a,a+=n[0]|n[1]<<8),e.subarray(0,o),t),dhu(n.subarray(a,a+=n[2]|n[3]<<8),e.subarray(o,l),t),dhu(n.subarray(a,a+=n[4]|n[5]<<8),e.subarray(l,c),t),dhu(n.subarray(a),e.subarray(c),t)},rzb=function(n,e,t){var a,r=e.b,o=n[r],l=o>>1&3;e.l=o&1;var c=o>>3|n[r+1]<<5|n[r+2]<<13,s=(r+=3)+c;if(l==1)return r>=n.length?void 0:(e.b=r+1,t?(fill(t,n[r],e.y,e.y+=c),t):fill(new u8(c),n[r]));if(!(s>n.length)){if(l==0)return e.b=s,t?(t.set(n.subarray(r,s),e.y),e.y+=c,t):slc(n,r,s);if(l==2){var d=n[r],f=d&3,v=d>>2&3,g=d>>4,M=0,h=0;f<2?v&1?g|=n[++r]<<4|(v&2&&n[++r]<<12):g=d>>3:(h=v,v<2?(g|=(n[++r]&63)<<4,M=n[r]>>6|n[++r]<<2):v==2?(g|=n[++r]<<4|(n[++r]&3)<<12,M=n[r]>>2|n[++r]<<6):(g|=n[++r]<<4|(n[++r]&63)<<12,M=n[r]>>6|n[++r]<<2|n[++r]<<10)),++r;var A=t?t.subarray(e.y,e.y+e.m):new u8(e.m),x=A.length-g;if(f==0)A.set(n.subarray(r,r+=g),x);else if(f==1)fill(A,n[r++],x);else{var m=e.h;if(f==2){var U=rhu(n,r);M+=r-(r=U[0]),e.h=m=U[1]}else m||err(0);(h?dhu4:dhu)(n.subarray(r,r+=M),A.subarray(x),m)}var T=n[r++];if(T){T==255?T=(n[r++]|n[r++]<<8)+32512:T>127&&(T=T-128<<8|n[r++]);var P=n[r++];P&3&&err(0);for(var H=[dmlt,doct,dllt],G=2;G>-1;--G){var W=P>>(G<<1)+2&3;if(W==1){var Z=new u8([0,0,n[r++]]);H[G]={s:Z.subarray(2,3),n:Z.subarray(0,1),t:new u16(Z.buffer,0,1),b:0}}else W==2?(a=rfse(n,r,9-(G&1)),r=a[0],H[G]=a[1]):W==3&&(e.t||err(0),H[G]=e.t[G])}var N=e.t=H,L=N[0],q=N[1],se=N[2],ee=n[s-1];ee||err(0);var re=(s<<3)-8+msb(ee)-se.b,ce=re>>3,fe=0,Ee=(n[ce]|n[ce+1]<<8)>>(re&7)&(1<<se.b)-1;ce=(re-=q.b)>>3;var ue=(n[ce]|n[ce+1]<<8)>>(re&7)&(1<<q.b)-1;ce=(re-=L.b)>>3;var Le=(n[ce]|n[ce+1]<<8)>>(re&7)&(1<<L.b)-1;for(++T;--T;){var Oe=se.s[Ee],Ze=se.n[Ee],vt=L.s[Le],Ft=L.n[Le],pe=q.s[ue],we=q.n[ue];ce=(re-=pe)>>3;var ke=1<<pe,Pe=ke+((n[ce]|n[ce+1]<<8|n[ce+2]<<16|n[ce+3]<<24)>>>(re&7)&ke-1);ce=(re-=mlb[vt])>>3;var Qe=mlbl[vt]+((n[ce]|n[ce+1]<<8|n[ce+2]<<16)>>(re&7)&(1<<mlb[vt])-1);ce=(re-=llb[Oe])>>3;var At=llbl[Oe]+((n[ce]|n[ce+1]<<8|n[ce+2]<<16)>>(re&7)&(1<<llb[Oe])-1);if(ce=(re-=Ze)>>3,Ee=se.t[Ee]+((n[ce]|n[ce+1]<<8)>>(re&7)&(1<<Ze)-1),ce=(re-=Ft)>>3,Le=L.t[Le]+((n[ce]|n[ce+1]<<8)>>(re&7)&(1<<Ft)-1),ce=(re-=we)>>3,ue=q.t[ue]+((n[ce]|n[ce+1]<<8)>>(re&7)&(1<<we)-1),Pe>3)e.o[2]=e.o[1],e.o[1]=e.o[0],e.o[0]=Pe-=3;else{var st=Pe-(At!=0);st?(Pe=st==3?e.o[0]-1:e.o[st],st>1&&(e.o[2]=e.o[1]),e.o[1]=e.o[0],e.o[0]=Pe):Pe=e.o[0]}for(var G=0;G<At;++G)A[fe+G]=A[x+G];fe+=At,x+=At;var qt=fe-Pe;if(qt<0){var Wt=-qt,Rt=e.e+qt;Wt>Qe&&(Wt=Qe);for(var G=0;G<Wt;++G)A[fe+G]=e.w[Rt+G];fe+=Wt,Qe-=Wt,qt=0}for(var G=0;G<Qe;++G)A[fe+G]=A[qt+G];fe+=Qe}if(fe!=x)for(;x<A.length;)A[fe++]=A[x++];else fe=A.length;t?e.y+=fe:A=slc(A,0,fe)}else if(t){if(e.y+=g,x)for(var G=0;G<g;++G)A[G]=A[x+G]}else x&&(A=slc(A,x));return e.b=s,A}err(2)}},cct=function(n,e){if(n.length==1)return n[0];for(var t=new u8(e),a=0,r=0;a<n.length;++a){var o=n[a];t.set(o,r),r+=o.length}return t};function decompress(n,e){for(var t=[],a=+!e,r=0,o=0;n.length;){var l=rzfh(n,a||e);if(typeof l=="object"){for(a?(e=null,l.w.length==l.u&&(t.push(e=l.w),o+=l.u)):(t.push(e),l.e=0);!l.l;){var c=rzb(n,l,e);c||err(5),e?l.e=l.y:(t.push(c),o+=c.length,cpw(l.w,0,c.length),l.w.set(c,l.w.length-c.length))}r=l.b+l.c*4}else r=l;n=n.subarray(r)}return cct(t,o)}const og_decomp=decompress$2;setCompressionMethod(compress$1,async(n,e,t)=>e===VCompressionMethods.ZSTD?decompress(n):og_decomp(n,e,t));registerResourceType(VKeyValuesResource);registerResourceType(VCrcResource);var br,Rr,wr;class App{constructor(){ji(this,br,state());ji(this,Rr,state());ji(this,wr,state())}get vtf(){return get(Yt(this,br))}set vtf(e){set(Yt(this,br),e,!0)}get fileName(){return get(Yt(this,Rr))}set fileName(e){set(Yt(this,Rr),e,!0)}get fileSize(){return get(Yt(this,wr))}set fileSize(e){set(Yt(this,wr),e,!0)}async decodeFile(e){const t=await e.arrayBuffer();try{return await Vtf.decode(t,!1,!0)}catch(a){console.error("Failed to decode vtf! trying just header...",a);const r=await Vtf.decode(t,!0),o=new VFakeData(r.width,r.height,r.mipmaps,r.frames,getFaceCount(r),r.slices);return new Vtf(o,{version:r.version,format:r.format,bump_scale:r.bump_scale,reflectivity:r.reflectivity,flags:r.flags})}}async loadFromFile(e){this.vtf=await this.decodeFile(e),this.fileSize=e.size,this.fileName=e.name;const t=Viewport.currentViewport;t&&(t.teardownFile(),t.setupFile(this.vtf))}async loadTestImage(){const e=await fetch("/indicator_lights_wall.vtf"),t=new File([await e.blob()],"indicator_lights_wall.vtf");await this.loadFromFile(t)}}br=new WeakMap,Rr=new WeakMap,wr=new WeakMap;const app=new App;var Cr,Pr;class HoverManager{constructor(){ji(this,Cr,state());ji(this,Pr,state(!1))}get message(){return get(Yt(this,Cr))}set message(e){set(Yt(this,Cr),e,!0)}get special(){return get(Yt(this,Pr))}set special(e){set(Yt(this,Pr),e,!0)}setHover(e,t=!1){this.message=e,this.special=t}}Cr=new WeakMap,Pr=new WeakMap;const hover=new HoverManager;var root_2$3=from_html('<div class="svelte-1mcj7s"></div>'),root_1$4=from_html("<span> </span> <!>",1),root$2=from_html('<div class="svelte-1mcj7s"></div>');function BitFlags(n,e){push(e,!0);let t=prop(e,"start",3,0),a=state(void 0);user_effect(()=>{hover.setHover(get(a)?e.flags[get(a)]:void 0,get(a)?!!(e.value&get(a)):!1)});const r=new Array(e.size);for(let l=0;l<e.size;l++)r[l]=2**(l+t());var o=root$2();each(o,21,()=>r.entries(),index,(l,c)=>{let s=()=>get(c)[0],d=()=>get(c)[1];var f=root_1$4();const v=user_derived(()=>+!!(e.value&d()));var g=first_child(f);let M;var h=child(g,!0);reset(g);var A=sibling(g,2);{var x=m=>{var U=root_2$3();append(m,U)};if_block(A,m=>{s()%8===7&&s()!==e.size-1&&m(x)})}template_effect(m=>{M=set_class(g,1,"svelte-1mcj7s",null,M,m),set_text(h,get(v))},[()=>({one:get(v)})]),event("mouseenter",g,()=>set(a,d(),!0)),append(l,f)}),reset(o),event("mouseleave",o,()=>set(a,void 0)),append(n,o),pop()}var on_click=(n,e)=>e(!e()),root$1=from_html('<button class="svelte-ul93ty"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15"></rect><g><line x1="-3" x2="19" y1="8" y2="8"></line><line x1="-3" x2="19" y1="8" y2="8"></line></g></svg></button>');function BtnCollapse(n,e){push(e,!0);let t=prop(e,"checked",15,!1);const r=prop(e,"dark",3,!1)()?"#e0e0e0":"#151515";var o=root$1();o.__click=[on_click,t];var l=child(o),c=child(l);set_attribute(c,"stroke",r);var s=sibling(c),d=child(s);set_attribute(d,"stroke",r);let f;var v=sibling(d);set_attribute(v,"stroke",r);let g;reset(s),reset(l),reset(o),template_effect((M,h)=>{set_attribute(o,"aria-label",t()?"collapse":"expand"),f=set_class(d,0,"rotate svelte-ul93ty",null,f,M),g=set_class(v,0,"rotate inv svelte-ul93ty",null,g,h)},[()=>({active:t()}),()=>({active:t()})]),append(n,o),pop()}delegate(["click"]);var root=from_html('<div><div class="header svelte-120tgt3"><h3 class="svelte-120tgt3"> </h3> <!></div> <div class="body svelte-120tgt3"><!></div></div>');function Panel(n,e){let t=state(!0),a;var r=root();let o;var l=child(r);l.__click=M=>{M.target===a&&set(t,!get(t))};var c=child(l),s=child(c,!0);reset(c);var d=sibling(c,2);BtnCollapse(d,{get checked(){return get(t)},set checked(M){set(t,M,!0)}}),reset(l),bind_this(l,M=>a=M,()=>a);var f=sibling(l,2),v=child(f);{var g=M=>{var h=comment(),A=first_child(h);snippet(A,()=>e.children),append(M,h)};if_block(v,M=>{e.children&&M(g)})}reset(f),reset(r),template_effect(M=>{o=set_class(r,1,"container svelte-120tgt3",null,o,M),set_text(s,e.title)},[()=>({active:get(t)})]),append(n,r)}delegate(["click"]);var root_2$2=from_html("&cross; <span> </span>",1),root_1$3=from_html('<h5>Info</h5> <div class="pgrid"><div class="pgrid-row"><span>version</span> <span> </span></div> <div class="pgrid-row"><span>size</span> <span> </span></div> <div class="pgrid-row"><span>format</span> <span> </span></div> <div class="pgrid-row"><span>dimensions</span> <span><span> </span> &cross; <span> </span> <!></span></div> <div class="pgrid-row"><span>frames</span> <span> </span></div> <div class="pgrid-row"><span>faces</span> <span> </span></div> <div class="pgrid-row"><span>mipmaps</span> <span> </span></div></div> <h5>Flags</h5> <!> <!>',1);function HeaderPanel(n,e){push(e,!0);let t=user_derived(()=>e.vtf.data.getSize()),a=user_derived(()=>{let[f,v]=get(t);return f}),r=user_derived(()=>{let[f,v]=get(t);return v}),o=user_derived(()=>e.vtf.data.frameCount()),l=user_derived(()=>e.vtf.data.faceCount()),c=user_derived(()=>e.vtf.data.sliceCount()),s=user_derived(()=>e.vtf.data.mipmapCount());const d={1:"PointSample: Use point sampling when rendering the texture in-engine. This results in pixelated textures!",2:"Trilinear: Use trilinear sampling when rendering the texture in-engine.",4:"ClampS: Clamp the image coordinates instead of wrapping them vertically.",8:"ClampT: Clamp the image coordinates instead of wrapping them horizontally.",16:"Anistrophic: TODO WRITE THIS",32:"HintDXT5: Used internally by VTEX.",64:"sRGB: Marks this image as being sRGB rather than linear RGB.",128:"Normal: Marks this image as a bumpmap. This has no effect in-engine.",256:"NoMip: Tells the engine to ignore any mipmaps present in this texture.",512:"NoLOD: TODO WRITE THIS",1024:"MinMip: Tells the engine to use the smallest mipmap in this texture.",2048:"Procedural: TODO WRITE THIS",4096:"OneBitAlpha: Used by DXT1 when encoding with alpha.",8192:"EightBitAlpha: Used by DXT5 and all other formats with alpha.",16384:"Envmap: Marks this texture as being an environment map.",32768:"RenderTarget: TODO WRITE THIS",65536:"DepthRenderTarget: TODO WRITE THIS",131072:"NoDebugOverride: TODO WRITE THIS",262144:"SingleCopy: TODO WRITE THIS",524288:"DEPRECATED_OneOverMipLevelInAlpha: TODO WRITE THIS",1048576:"DEPRECATED_PreMultColorByOneOverMipLevel: TODO WRITE THIS",2097152:"DEPRECATED_NormalToDuDv: TODO WRITE THIS",4194304:"DEPRECATED_AlphaTestMipGeneration: TODO WRITE THIS",8388608:"NoDepthBuffer: TODO WRITE THIS",16777216:"DEPRECATED_NICEFiltered: TODO WRITE THIS",33554432:"ClampU: TODO WRITE THIS",67108864:"VertexTexture: TODO WRITE THIS",134217728:"SSBump: TODO WRITE THIS",268435456:"DEPRECATED_UnfilterableOK: TODO WRITE THIS",536870912:"Border: TODO WRITE THIS",1073741824:"DEPRECATED_SpecVar_Red: TODO WRITE THIS","2147483648":"DEPRECATED_SpecVar_Alpha: TODO WRITE THIS"};Panel(n,{title:"vtf → info",children:(f,v)=>{var g=root_1$3(),M=sibling(first_child(g),2),h=child(M),A=sibling(child(h),2),x=child(A);reset(A),reset(h);var m=sibling(h,2),U=sibling(child(m),2),T=child(U,!0);reset(U),reset(m);var P=sibling(m,2),H=sibling(child(P),2),G=child(H,!0);reset(H),reset(P);var W=sibling(P,2),Z=sibling(child(W),2),N=child(Z),L=child(N,!0);reset(N);var q=sibling(N,2),se=child(q,!0);reset(q);var ee=sibling(q,2);{var re=ke=>{var Pe=root_2$2(),Qe=sibling(first_child(Pe)),At=child(Qe,!0);reset(Qe),template_effect(()=>set_text(At,get(c))),append(ke,Pe)};if_block(ee,ke=>{get(c)>1&&ke(re)})}reset(Z),reset(W);var ce=sibling(W,2),fe=sibling(child(ce),2),Ee=child(fe,!0);reset(fe),reset(ce);var ue=sibling(ce,2),Le=sibling(child(ue),2),Oe=child(Le,!0);reset(Le),reset(ue);var Ze=sibling(ue,2),vt=sibling(child(Ze),2),Ft=child(vt,!0);reset(vt),reset(Ze),reset(M);var pe=sibling(M,4);BitFlags(pe,{flags:d,get value(){return e.vtf.flags},size:16});var we=sibling(pe,2);BitFlags(we,{flags:d,get value(){return e.vtf.flags},size:16,start:16}),template_effect(ke=>{set_text(x,`7.${e.vtf.version??""}`),set_text(T,ke),set_text(G,VFormats[e.vtf.format]??"Unknown"),set_text(L,get(a)),set_text(se,get(r)),set_text(Ee,get(o)),set_text(Oe,get(l)),set_text(Ft,get(s))},[()=>as_bytelength(e.fileSize)]),append(f,g)}}),pop()}var root_1$2=from_html('<div class="crc svelte-yh96ve"><code class="hex svelte-yh96ve"><span class="svelte-yh96ve">0x</span> </code> <span class="value svelte-yh96ve"> </span></div>');function CrcPanel(n,e){push(e,!0),Panel(n,{title:"vtf → crc",children:(t,a)=>{var r=root_1$2(),o=child(r),l=sibling(child(o));reset(o);var c=sibling(o,2),s=child(c,!0);reset(c),reset(r),template_effect(d=>{set_text(l,` ${d??""}`),set_text(s,e.chunk.crc)},[()=>e.chunk.toString()]),append(t,r)}}),pop()}var root_2$1=from_html("<span> </span>"),root_3$1=from_html("<span>none</span>"),root_1$1=from_html('<div class="pgrid"><div class="pgrid-row"><span>tag</span> <code><span>0x</span> <span> </span></code></div> <div class="pgrid-row"><span>data</span> <!></div></div> <h5>Flags</h5> <!>',1);function UnknownPanel(n,e){push(e,!0);const t={1:"0x1: Unknown",2:"0x2: No Data",4:"0x4: Unknown",8:"0x8: Unknown",16:"0x10: Unknown",32:"0x20: Unknown",64:"0x40: Unknown",128:"0x80: Unknown",256:"0x100: Unknown"};Panel(n,{title:"vtf → unknown",children:(a,r)=>{var o=root_1$1(),l=first_child(o),c=child(l),s=sibling(child(c),2),d=sibling(child(s)),f=sibling(d),v=child(f);reset(f),reset(s),reset(c);var g=sibling(c,2),M=sibling(child(g),2);{var h=m=>{var U=root_2$1(),T=child(U,!0);reset(U),template_effect(P=>set_text(T,P),[()=>as_bytelength(e.chunk.data.length)]),append(m,U)},A=m=>{var U=root_3$1();append(m,U)};if_block(M,m=>{e.chunk.flags&2?m(A,!1):m(h)})}reset(g),reset(l);var x=sibling(l,4);BitFlags(x,{flags:t,get value(){return e.chunk.flags},size:8}),template_effect(m=>{set_text(d,` ${m??""} `),set_text(v,`"${e.chunk.tag??""}"`)},[()=>hex_tag(e.chunk.tag)]),append(a,o)}}),pop()}var root_3=from_html("<i> </i>"),root_4=from_html("<span> </span>"),root_2=from_html('<div class="pgrid-row"><span> </span> <!></div>'),root_1=from_html('<div class="pgrid"></div>');function KeyValuesPanel(n,e){push(e,!0),Panel(n,{title:"vtf → keyvalues",children:(t,a)=>{var r=root_1();each(r,21,()=>e.chunk.enumerate(),index,(o,l)=>{let c=()=>get(l)[0],s=()=>get(l)[1],d=()=>get(l)[2];var f=root_2(),v=child(f),g=child(v,!0);reset(v);var M=sibling(v,2);{var h=x=>{var m=root_3(),U=child(m,!0);reset(m),template_effect(()=>set_text(U,s())),append(x,m)},A=x=>{var m=root_4(),U=child(m,!0);reset(m),template_effect(()=>set_text(U,s())),append(x,m)};if_block(M,x=>{d()?x(h):x(A,!1)})}reset(f),template_effect(()=>set_text(g,c())),append(o,f)}),reset(r),append(t,r)}}),pop()}export{CrcPanel as C,HeaderPanel as H,KeyValuesPanel as K,Panel as P,UnknownPanel as U,Vtf as V,VFrameCollection as a,VImageData as b,VFormats as c,VFlags as d,VKeyValuesResource as e,dist as f,VCrcResource as g,hover as h,VCompressionMethods as i,app as j,each as k,index as l,Viewport as m,ViewportModes as n,gViewportMode as o,set_class as s};
