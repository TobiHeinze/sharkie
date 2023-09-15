class World {

	character = new Character();
	level = level1;
	canvas;
	ctx;
	keyboard;
	camera_x = 0;
	statusBarPoison = new StatusBarPoison();
	statusBarHealth = new StatusBarHealth();
	statusBarCoin = new StatusBarCoin();
	statusBarHealthEndboss = new StatusBarHealthEndboss();
	throwableObjects = [];
	isCooldown = false;
	allSoundOn = false;

	bubble_sound = new Audio('./audio/bubble.mp3');
	coin_sound = new Audio('./audio/coin.mp3');
	poison_bottle_sound = new Audio('./audio/poison-bottle.mp3');
	endboss_hurt_sound = new Audio('./audio/endboss-hurt.mp3');
	background_sound = new Audio('./audio/background.mp3');


	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
		this.move();
		this.checkCollisionsWithPoisonBottles();
		this.checkCollisionsWithCoins();
		this.attackWithBubbleTrap();
		this.attackWithFinSlap();
		this.changeSoundStatus();
	};


	changeSoundStatus() {
		if (this.allSoundOn) {
			document.getElementById('btnSound').src = './img/buttons/sound-off.svg';
			this.character.snoring_sound.pause();
			this.background_sound.pause();
			this.background_sound.loop = false;
			this.allSoundOn = false;
		} else {
			document.getElementById('btnSound').src = './img/buttons/sound-on.svg';
			// this.allSoundOn = true;
			this.background_sound.play();
			this.background_sound.loop = true;
			this.allSoundOn = true;
		}
	};


	move() {
		setInterval(() => {
			this.checkCollisionsWithEnemies();
			this.checkCollisionsWithEndboss();
		}, 500);
	};


	attackWithFinSlap() {
		setInterval(() => {
			if (this.keyboard.SPACE) {
				this.level.enemies.forEach((enemy) => {
					if (this.character.isApproaching(enemy)) {
						enemy.energy = 0;
					}
				});
			}
		}, 10);
	};


	attackWithBubbleTrap() {
		setInterval(() => {
			if (this.keyboard.D) {
				this.character.snoring_sound.pause();
				if (!this.isCooldown) {
					this.character.currentImage = 0;
					this.character.i = 0;
					if (this.statusBarPoison.collectedPoisonBottles > 0) {
						if (this.allSoundOn) {
							this.bubble_sound.play();
						}
						setTimeout(() => {
							let bubble = new ThrowableObject(this.character.x, this.character.y + 110, this.character.otherDirection);
							this.throwableObjects.push(bubble);
							this.statusBarPoison.decreaseStatusBarPoison();
						}, 1200);

						this.isCooldown = true;
						setTimeout(() => {
							this.isCooldown = false;
						}, 1200);
					}
				}
			}
		}, 10);
	}



	checkCollisionsWithEndboss() {
		this.throwableObjects.forEach((bubble) => {
			if (this.level.enemies[0].isColliding(bubble)) {
				this.level.enemies[0].hit();
				this.removeThrowableObject(bubble);
				this.statusBarHealthEndboss.decreaseHealth(this.level.enemies[0].energy);
				if (this.allSoundOn) {
					if (this.level.enemies[0].energy > 0) {
						setTimeout(() => {
							this.endboss_hurt_sound.play();
						}, 700);
					}
				}
			}
		});
	};


	removeThrowableObject(bubble) {
		let throwableObjectIndex = this.throwableObjects.indexOf(bubble);
		if (throwableObjectIndex !== -1) {
			this.throwableObjects.splice(throwableObjectIndex, 1);
		}
	};


	checkCollisionsWithPoisonBottles() {
		setInterval(() => {
			this.level.poisonBottles.forEach((poisonBottle) => {
				if (this.character.isColliding(poisonBottle)) {
					this.removePoisonBottle(poisonBottle);
					this.statusBarPoison.increaseStatusBarPoison();
					if (this.allSoundOn) {
						this.poison_bottle_sound.play();
					}
				}
			});
		}, 50);
	};


	removePoisonBottle(poisonBottle) {
		let poisonBottleIndex = this.level.poisonBottles.indexOf(poisonBottle);
		if (poisonBottleIndex !== -1) {
			this.level.poisonBottles.splice(poisonBottleIndex, 1);
		}
	};


	checkCollisionsWithCoins() {
		setInterval(() => {
			this.level.collectableCoins.forEach((collectableCoin) => {
				if (this.character.isColliding(collectableCoin)) {
					this.removeCollectableCoin(collectableCoin);
					this.statusBarCoin.increaseStatusBarCoin();
					if (this.allSoundOn) {
						this.coin_sound.play();
					}
				}
			});
		}, 50);
	};


	removeCollectableCoin(collectableCoin) {
		let collectableCoinIndex = this.level.collectableCoins.indexOf(collectableCoin);
		if (collectableCoinIndex !== -1) {
			this.level.collectableCoins.splice(collectableCoinIndex, 1);
		}
	};


	checkCollisionsWithEnemies() {
		this.level.enemies.forEach((enemy) => {
			if (this.character.isColliding(enemy)) {
				this.character.hit();
				this.statusBarHealth.decreaseHealth(this.character.energy);
			}
		});
	};


	setWorld() {
		this.character.world = this;
		this.level.enemies[0].world = this;
	};


	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.translate(this.camera_x, 0);

		this.addObjectsToMap(this.level.backgroundObjects);
		this.addObjectsToMap(this.level.poisonBottles);
		this.addObjectsToMap(this.level.collectableCoins);
		this.addObjectsToMap(this.throwableObjects);

		this.ctx.translate(-this.camera_x, 0);

		//------------Space for fixed objects----------
		this.addToMap(this.statusBarPoison);
		this.addToMap(this.statusBarHealth);
		this.addToMap(this.statusBarCoin);
		this.addToMap(this.statusBarHealthEndboss);

		this.ctx.translate(this.camera_x, 0);

		this.addToMap(this.character);
		this.addObjectsToMap(this.level.enemies);

		this.ctx.translate(-this.camera_x, 0);

		self = this;
		requestAnimationFrame(function () {
			self.draw();
		});
	};


	addObjectsToMap(objects) {
		objects.forEach(o => {
			this.addToMap(o);
		});
	};


	addToMap(mo) {
		if (mo.otherDirection) {
			this.flipImage(mo);
		}

		mo.draw(this.ctx);
		mo.drawFrame(this.ctx);

		if (mo.otherDirection) {
			this.flipImageBack(mo);
		}
	};


	flipImage(mo) {
		this.ctx.save();
		this.ctx.translate(mo.width, 0);
		this.ctx.scale(-1, 1);
		mo.x = mo.x * -1;
	};


	flipImageBack(mo) {
		mo.x = mo.x * -1;
		this.ctx.restore();
	};

}