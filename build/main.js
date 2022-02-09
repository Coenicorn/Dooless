(()=>{"use strict";class t{x;y;zoom;constructor(t,e){this.x=t,this.y=e,this.zoom=1}follow(t){}}class e{position;direction;sprite;constructor(t){this.position=t,this.direction=0,this.sprite="player_idle"}getSprite(){return"player_idle_"+(this.direction?"left":"right")}}const s={goodTiles:["walk","start","end","checkpoint"],badTiles:["nowalk","spikes","cracked"]};class i{width;height;canvas;context;layout;game;theme;constructor(t,e,s,i="water"){this.theme=i,this.game=s,this.width=t,this.height=e,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=64*this.width,this.canvas.height=64*this.height,this.layout=this.generateLayout()}generateLayout(){let t=[];for(let e=0;e<this.width;e++){let i=[];for(let t=0;t<this.height;t++){let a=s.badTiles[Math.floor(Math.random()*s.badTiles.length)];i.push({x:e,y:t,state:a,sprite:a})}t.push(i)}for(let e=0;e<t.length;e++)for(let s=0;s<t[e].length;s++){let i=t[e][s];"nowalk"!=i.state&&this.context.drawImage(this.game.Pic(this.game.theme),64*i.x,64*i.y),this.context.drawImage(this.game.Pic(i.sprite),64*i.x,64*i.y)}return t}}const a=new class extends class extends class{assetsLoading;assets;constructor(){this.assets=[]}async loadAssets(t,e){this.assetsLoading=e.length;for(let s=0,i=this.assetsLoading;s<i;s++){let i=e[s],a=await new Promise((e=>{let s=new Image;s.src=`${t}/${i}.png`,s.onload=()=>e(s),s.onerror=()=>{throw new Error(`Image ${i}.png does not exist`)}}));this.assets[i]=a}}Pic(t){if(this.assets[t])return this.assets[t];throw new Error(`Assets array does not contain ${t}.png`)}}{width;height;center;tileSize;canvas;context;constructor(t=null){super(),t?this.canvas=document.getElementById(t):(this.canvas=document.createElement("canvas"),document.body.appendChild(this.canvas)),this.context=this.canvas.getContext("2d"),this.tileSize=64,this.resize()}resize(){this.width=innerWidth,this.height=innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.center={x:this.width/2,y:this.height/2}}}{fps;running;currentInstruction;player;camera;level;theme;constructor(){super(),this.theme="water",this.running=!1}async init(){await this.loadAssets("../img",["bridge_horizontal","bridge_vertical","broken_death","broken","checkpoint","cracked","end","enter","loading","nowalk","piranha","play","player_idle_left","player_idle_right","player_water","player_won","spikes_death","spikes","start","walk1","walk2","walk3","water_death","water"]),this.camera=new t(0,0),this.running=!0,this.player=new e({x:0,y:0}),this.level=new i(10,10,this,this.theme),this.loop()}loop(){let t=Date.now(),e=0,s=0;this.fps=1e3/60,requestAnimationFrame(function i(){for(e=Date.now(),s=e-t,t=e;s>0;)this.update(),s-=this.fps;this.render(this.context),this.running&&requestAnimationFrame(i.bind(this))}.bind(this))}update(){}render(t){t.clearRect(0,0,this.width,this.height),t.imageSmoothingEnabled=!1,t.drawImage(this.level.canvas,this.camera.x,this.camera.y),t.drawImage(this.Pic(this.player.getSprite()),this.center.x-this.tileSize/2,this.center.y-this.tileSize/2)}};addEventListener("resize",a.resize),onload=async()=>{await a.init()}})();