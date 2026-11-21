(()=>{
 const url=new URL(location.href),mode=url.searchParams.get('testphone'),key='vs:no-ad-requests';let off=false;
 try{if(mode==='on')localStorage.setItem(key,'1');if(mode==='off')localStorage.removeItem(key);off=localStorage.getItem(key)==='1';}catch{if(mode==='on'){alert('Storage is unavailable. Ads are off for this page only.');return;}}
 if(off){const badge=document.createElement('small');badge.textContent='Test browser · ads off';badge.style.cssText='display:block;text-align:center;padding:6px;font:12px system-ui;color:#555';document.body.prepend(badge);return;}
 const c=window.vitalAds;if(!c)return;
 const demo=new URLSearchParams(location.search).get('adpreview')==='1';if(!demo&&location.hostname!==c.host)return;
 const el=t=>document.createElement(t),q=s=>document.querySelector(s),asset=new URL('.',document.currentScript.src);
 function mark(slot){slot.hidden=false;slot.className='vs-placement';slot.style.cssText='background:white;border:0;border-top:1px solid #ddd;padding:7px 0;text-align:center;box-sizing:border-box';const tag=el('small');tag.textContent=demo?'Sponsored · Preview':'Sponsored';slot.append(tag);}
 function script(url){const e=el('script');e.async=true;e.setAttribute('data-cfasync','false');e.src=url;return e;}
 function banner(s,w){mark(s);if(s.clientWidth<w){s.hidden=true;return}const h=w===320?50:250;if(demo){s.append(` Sample ${w} × ${h}`);return}const f=el('iframe');f.title='Sponsored banner';f.width=w;f.height=h;f.style.cssText=`width:${w}px;height:${h}px;border:0;margin:auto;display:block`;f.src=new URL(`banner-${w}.html`,asset).href;s.append(f);}
 const home=q('[data-placement="banner"]'),native=q('[data-placement="native"]');if(home){home.hidden=false;banner(home,matchMedia('(max-width:767px)').matches&&home.clientWidth>=320?320:300)}
 if(native){const fig=q('main figure'),rec=q('main section.rec');if(fig){const top=el('aside');fig.before(top);banner(top,320)}if(rec){const mid=el('aside');rec.after(mid);banner(mid,300)}mark(native);if(demo)native.append(' Sample native article ad');else{const box=el('div');box.id='container-'+c.nativeId;native.append(box);native.insertBefore(script('https://bauval.org/21/'+c.nativeId),box)}}
 if(c.socialBar&&(home||native)){if(demo){const note=el('small');note.textContent='Preview: Social Bar enabled (network controls delivery).';(home||native).after(note)}else document.body.append(script(c.socialSrc))}
})();
