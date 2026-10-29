const menuButton=document.querySelector('#menu-toggle');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));document.querySelector('#menu').hidden=open;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('#menu').hidden){document.querySelector('#menu').hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.focus();}});
const search=document.querySelector('#studio-search');
if(search)search.addEventListener('input',()=>{let count=0;document.querySelectorAll('.location-row').forEach(row=>{row.hidden=!row.dataset.name.includes(search.value.trim().toLowerCase());if(!row.hidden)count++;});document.querySelector('#no-results').hidden=count>0;});
const mapButton=document.querySelector('#load-map');
if(mapButton)mapButton.addEventListener('click',()=>{const map=document.querySelector('#street-map');map.src='https://www.google.com/maps?q=23962+Alicia+Pkwy+Unit+H-28+Mission+Viejo+CA+92691&output=embed';map.hidden=false;document.querySelector('#map-placeholder').hidden=true;map.focus();});

// Local demonstration UI. No Xplor markup, styles or scripts are loaded.
const mount=document.querySelector('#mt-schedule-mount');
if(mount){
 mount.hidden=false;
 document.querySelector('#load-schedule')?.remove();
 document.querySelector('.schedule-help')?.remove();
 mount.removeAttribute('data-mariana-integrations');
 const data={"date": "Wednesday, October 28, 2026", "classes": [{"time": "6:30 AM", "duration": "45 min.", "name": "Fortè Sculpt (Heated)", "instructor": "Faith", "room": "Mat Room・MV", "studio": "Mission Viejo", "type": "Sculpt", "availability": null}, {"time": "7:30 AM", "duration": "45 min.", "name": "Fortè Power (Heated)", "instructor": "Faith", "room": "Mat Room・MV", "studio": "Mission Viejo", "type": "Power", "availability": null}, {"time": "9:30 AM", "duration": "45 min.", "name": "Fortè Power (Heated)", "instructor": "Desirae", "room": "Mat Room・MV", "studio": "Mission Viejo", "type": "Power", "availability": null}, {"time": "11:30 AM", "duration": "50 min.", "name": "Free Mat Class", "instructor": "Pilates Instructor", "room": "Mat Room・MV", "studio": "Mission Viejo", "type": "Mat", "availability": null}, {"time": "5:30 PM", "duration": "45 min.", "name": "Fortè Sculpt (Heated)", "instructor": "Kalyssa", "room": "Mat Room・MV", "studio": "Mission Viejo", "type": "Sculpt", "availability": "8/28 Open"}, {"time": "6:30 PM", "duration": "45 min.", "name": "Fortè Power (Heated)", "instructor": "Kalyssa", "room": "Mat Room・MV", "studio": "Mission Viejo", "type": "Power", "availability": "14/28 Open"}]};
 mount.innerHTML=`<div class="class-day"><h3>${data.date}</h3><p>Fortè mat · Mission Viejo</p></div><div class="class-filters" role="group" aria-label="Filter classes"><button type="button" aria-pressed="true" data-kind="All">All classes</button><button type="button" aria-pressed="false" data-kind="Sculpt">Sculpt</button><button type="button" aria-pressed="false" data-kind="Power">Power</button></div><p class="capture-note">Demo schedule captured October 28. Check live booking for current times and availability.</p><div id="class-list"></div><p id="class-count" role="status" class="class-count"></p>`;
 const list=mount.querySelector('#class-list');
 function render(kind){
 const shown=data.classes.filter(c=>kind==='All'||c.type===kind);
 list.innerHTML=shown.map(c=>`<article class="class-card"><div class="class-time"><time>${c.time}</time><span>${c.duration}</span></div><div class="class-info"><h4>${c.name}</h4><p class="instructor">With ${c.instructor}</p><p class="class-room">Mat Room · Mission Viejo</p><a class="class-book" href="https://coeurpilatesoc.com/booking?studio=mission-viejo">View live booking <span aria-hidden="true">↗</span></a></div></article>`).join('');
 mount.querySelector('#class-count').textContent=shown.length+' classes shown';
 }
 mount.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{mount.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.kind);}));
 render('All');
}
