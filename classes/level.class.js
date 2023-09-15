class Level {
	
	enemies;
	backgroundObjects;
	poisonBottles;
	collectableCoins;
	level_end_x = 2160;


	constructor(enemies, backgroundObjects, poisonBottles, collectableCoins) {
		this.enemies = enemies;
		this.backgroundObjects = backgroundObjects;
		this.poisonBottles = poisonBottles;
		this.collectableCoins = collectableCoins;
	};
}