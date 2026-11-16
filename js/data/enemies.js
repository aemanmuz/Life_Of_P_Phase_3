/** Lightweight original enemy types for the Phase 2 combat sandbox. */
export const ENEMY_ARCHETYPES=Object.freeze({
  'ash-wanderer':{id:'ash-wanderer',name:'Ash Wanderer',maxHealth:48,damage:10,speed:64,reach:43,windup:.63,attackCooldown:1.4,aggro:210,posture:42,coinMin:8,coinMax:19,color:'#8f7772'},
  'hollow-stalker':{id:'hollow-stalker',name:'Hollow Stalker',maxHealth:68,damage:14,speed:92,reach:45,windup:.49,attackCooldown:1.22,aggro:245,posture:58,coinMin:13,coinMax:27,color:'#6f9490'},
  'ash-warden':{id:'ash-warden',name:'Ashen Warden',maxHealth:265,damage:23,speed:65,reach:66,windup:.85,attackCooldown:1.7,aggro:310,posture:125,coinMin:175,coinMax:210,color:'#b09a75',elite:true},
});
export const ENEMY_SPAWNS=[
  {kind:'ash-wanderer',tx:51,ty:45},{kind:'ash-wanderer',tx:47,ty:48},
  {kind:'hollow-stalker',tx:55,ty:52},{kind:'ash-wanderer',tx:62,ty:39},
  {kind:'hollow-stalker',tx:68,ty:36},{kind:'ash-wanderer',tx:42,ty:27},
  {kind:'hollow-stalker',tx:35,ty:30},{kind:'ash-wanderer',tx:49,ty:61},
  {kind:'ash-wanderer',tx:70,ty:25},{kind:'ash-warden',tx:77,ty:24},
];
