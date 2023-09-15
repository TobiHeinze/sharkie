class Character extends MovableObject {

	world;
	height = 200;
	width = 200;
	x = 0;
	y = 130;
	offsetX = 25;
	offsetY = 90;
	offsetWidth = -50;
	offsetHeight = -132;
	lastMovement = 0;
	i = 30;
	speed = 15;

	swimming_sound = new Audio('./audio/swimming.mp3');
	fin_slap_sound = new Audio('./audio/fin-slap.mp3');
	you_loose_sound = new Audio('./audio/you-loose.mp3');
	snoring_sound = new Audio('./audio/snoring.mp3');


	IMAGES_IDLE = [
		'./img/1.Sharkie/1.IDLE/1.png',
		'./img/1.Sharkie/1.IDLE/2.png',
		'./img/1.Sharkie/1.IDLE/3.png',
		'./img/1.Sharkie/1.IDLE/4.png',
		'./img/1.Sharkie/1.IDLE/5.png',
		'./img/1.Sharkie/1.IDLE/6.png',
		'./img/1.Sharkie/1.IDLE/7.png',
		'./img/1.Sharkie/1.IDLE/8.png',
		'./img/1.Sharkie/1.IDLE/9.png',
		'./img/1.Sharkie/1.IDLE/10.png',
		'./img/1.Sharkie/1.IDLE/11.png',
		'./img/1.Sharkie/1.IDLE/12.png',
		'./img/1.Sharkie/1.IDLE/13.png',
		'./img/1.Sharkie/1.IDLE/14.png',
		'./img/1.Sharkie/1.IDLE/15.png',
		'./img/1.Sharkie/1.IDLE/16.png',
		'./img/1.Sharkie/1.IDLE/17.png',
		'./img/1.Sharkie/1.IDLE/18.png'
	];

	IMAGES_LONG_IDLE = [
		'./img/1.Sharkie/2.Long_IDLE/I1.png',
		'./img/1.Sharkie/2.Long_IDLE/I2.png',
		'./img/1.Sharkie/2.Long_IDLE/I3.png',
		'./img/1.Sharkie/2.Long_IDLE/I4.png',
		'./img/1.Sharkie/2.Long_IDLE/I5.png',
		'./img/1.Sharkie/2.Long_IDLE/I6.png',
		'./img/1.Sharkie/2.Long_IDLE/I7.png',
		'./img/1.Sharkie/2.Long_IDLE/I8.png',
		'./img/1.Sharkie/2.Long_IDLE/I9.png',
		'./img/1.Sharkie/2.Long_IDLE/I10.png',
		'./img/1.Sharkie/2.Long_IDLE/I11.png',
		'./img/1.Sharkie/2.Long_IDLE/I12.png',
		'./img/1.Sharkie/2.Long_IDLE/I13.png',
		'./img/1.Sharkie/2.Long_IDLE/I14.png',
	];

	IMAGES_SWIMMING = [
		'./img/1.Sharkie/3.Swim/1.png',
		'./img/1.Sharkie/3.Swim/2.png',
		'./img/1.Sharkie/3.Swim/3.png',
		'./img/1.Sharkie/3.Swim/4.png',
		'./img/1.Sharkie/3.Swim/5.png',
		'./img/1.Sharkie/3.Swim/6.png',
	];

	IMAGES_HURT = [
		'./img/1.Sharkie/5.Hurt/2.Electric_shock/o1.png',
		'./img/1.Sharkie/5.Hurt/2.Electric_shock/o2.png'
	];

	IMAGES_DEAD = [
		'./img/1.Sharkie/6.dead/2.Electro_shock/1.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/2.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/3.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/4.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/5.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/6.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/7.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/8.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/9.png',
		'./img/1.Sharkie/6.dead/2.Electro_shock/10.png',
	];

	IMAGES_BUBBLE_TRAP_WHALE = [
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
		'./img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
	]

	IMAGES_FIN_SLAP = [
		'./img/1.Sharkie/4.Attack/Fin slap/1.png',
		'./img/1.Sharkie/4.Attack/Fin slap/2.png',
		'./img/1.Sharkie/4.Attack/Fin slap/3.png',
		'./img/1.Sharkie/4.Attack/Fin slap/4.png',
		'./img/1.Sharkie/4.Attack/Fin slap/5.png',
		'./img/1.Sharkie/4.Attack/Fin slap/6.png',
		'./img/1.Sharkie/4.Attack/Fin slap/7.png',
		'./img/1.Sharkie/4.Attack/Fin slap/8.png',
	];


	constructor() {
		super().loadImage(this.IMAGES_IDLE[0])
		this.loadImages(this.IMAGES_IDLE);
		this.loadImages(this.IMAGES_LONG_IDLE);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_HURT);
		this.loadImages(this.IMAGES_DEAD);
		this.loadImages(this.IMAGES_BUBBLE_TRAP_WHALE);
		this.loadImages(this.IMAGES_FIN_SLAP);
		this.animate();
	};


	animate() {
		setInterval(() => {
			this.swimming_sound.pause();
			if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
				this.moveRight();
				this.otherDirection = false;
				this.lastMovement = new Date().getTime();
				if (this.world.allSoundOn) {
					this.swimming_sound.play();
				}
			}
			if (this.world.keyboard.LEFT && this.x > 0) {
				this.moveLeft();
				this.otherDirection = true;
				this.lastMovement = new Date().getTime();
				if (this.world.allSoundOn) {
					this.swimming_sound.play();
				}
			}
			if (this.world.keyboard.UP && this.y > 5) {
				this.moveUp();
				this.lastMovement = new Date().getTime();
				if (this.world.allSoundOn) {
					this.swimming_sound.play();
				}
			}
			if (this.world.keyboard.DOWN && this.y < 310) {
				this.moveDown();
				this.lastMovement = new Date().getTime();
				if (this.world.allSoundOn) {
					this.swimming_sound.play();
				}
			}
			this.world.camera_x = -this.x + 100;
		}, 50);

		setInterval(() => {
			if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD);
				setTimeout(() => {
					for (let i = 1; i < 9999; i++)
						window.clearInterval(i);
				}, 1200);
				document.getElementById('gameLost').classList.remove('d-none');
				if (this.world.allSoundOn) {
					this.you_loose_sound.play();
					this.world.changeSoundStatus();
				}
			} else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
				this.playAnimation(this.IMAGES_SWIMMING);
			} else if (this.isHurt()) {
				this.playAnimation(this.IMAGES_HURT);
				this.lastMovement = new Date().getTime();
			} else if (this.i < 8) {
				this.playAnimation(this.IMAGES_BUBBLE_TRAP_WHALE);
				this.lastMovement = new Date().getTime();
				this.i++;
			} else if (this.i > 9 && this.i < 17) {
				this.playAnimation(this.IMAGES_FIN_SLAP);
				this.lastMovement = new Date().getTime();
				this.i++;
				if (this.world.allSoundOn) {
					this.fin_slap_sound.play();
				}
			} else if (this.world.keyboard.SPACE) {
				this.lastMovement = new Date().getTime();
				this.currentImage = 10;
				this.i = 10;
			} else if (new Date().getTime() - this.lastMovement > 5000) {
				this.playAnimation(this.IMAGES_LONG_IDLE);
				if (this.world.allSoundOn) {
					this.snoring_sound.play();
				}
			} else {
				this.snoring_sound.pause();
				this.playAnimation(this.IMAGES_IDLE);
			}
		}, 150);
	};
}
