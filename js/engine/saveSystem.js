/** Phase 3 JSON save; same browser storage key so Phase 1 & 2 progress carry forward. */
const SAVE_KEY='life-of-p-phase1-v1';
export function hasSave(){try{return Boolean(localStorage.getItem(SAVE_KEY));}catch{return false;}}
export function saveGame(game){
  const p=game.player;
  const data={version:3,player:{x:p.x,y:p.y,health:p.health,mana:p.mana,stamina:p.stamina,gold:p.gold,kills:p.kills},
    clock:game.clock.minutes,day:game.clock.day,questStep:game.questStep,
    farm:game.farm||[],social:game.social||null,homeOwned:Boolean(game.homeOwned),herbGatherDay:game.herbGatherDay||0,
    inventory:game.inventory,equipment:game.equipment,dropCounter:game.dropCounter,drops:game.drops,
    enemies:game.enemies?.map(e=>({id:e.id,x:e.x,y:e.y,health:e.health,alive:e.alive,respawnTimer:e.respawnTimer}))||[],
    savedAt:new Date().toISOString()};
  try{localStorage.setItem(SAVE_KEY,JSON.stringify(data));return true;}catch{return false;}
}
export function loadGame(){
  try{const raw=localStorage.getItem(SAVE_KEY);if(!raw)return null;const data=JSON.parse(raw);
    if(![1,2,3].includes(data.version)||!Number.isFinite(data.player?.x)||!Number.isFinite(data.player?.y)||!Number.isFinite(data.clock)||!Number.isFinite(data.questStep))return null;
    return data;
  }catch{return null;}
}
