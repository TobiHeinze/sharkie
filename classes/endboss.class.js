class Endboss extends MovableObject {

	world;
	height = 500;
	width = 500;
	y = -1000;
	offsetX = 50;
	offsetY = 180;
	offsetWidth = -100;
	offsetHeight = -270;
	energy = 3;
	speed = 17;
	hadFirstContact = false;

	endboss_intro_sound = new Audio('./audio/endboss-intro.mp3');
	you_win_sound = new Audio('./audio/you-win.mp3');
	endboss_hit_sound = new Audio('./audio/endboss-hit.mp3');


	IMAGES_INTRO_ENDBOSS = [
		'./img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
		'./img/2.Enemy/3 Final Enemy/1.Introduce/10.png',

	];

	IMAGES_SWIMMING = [
		'./img/2.Enemy/3 Final Enemy/2.floating/1.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/2.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/3.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/4.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/5.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/6.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/7.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/8.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/9.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/10.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/11.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/12.png',
		'./img/2.Enemy/3 Final Enemy/2.floating/13.png'
	];

	IMAGES_HURT = [
		'./img/2.Enemy/3 Final Enemy/Hurt/1.png',
		'./img/2.Enemy/3 Final Enemy/Hurt/2.png',
		'./img/2.Enemy/3 Final Enemy/Hurt/3.png',
		'./img/2.Enemy/3 Final Enemy/Hurt/4.png',
	];

	IMAGES_DEAD = [
		'./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
		'./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
		'./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
		'./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
		'./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
	];

	IMAGES_ATTACK = [
		'./img/2.Enemy/3 Final Enemy/Attack/1.png',
		'./img/2.Enemy/3 Final Enemy/Attack/2.png',
		'./img/2.Enemy/3 Final Enemy/Attack/3.png',
		'./img/2.Enemy/3 Final Enemy/Attack/4.png',
		'./img/2.Enemy/3 Final Enemy/Attack/5.png',
		'./img/2.Enemy/3 Final Enemy/Attack/6.png',
	];


	constructor() {
		super();
		this.loadImage(this.IMAGES_INTRO_ENDBOSS[0]);
		this.loadImages(this.IMAGES_INTRO_ENDBOSS);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_HURT);
		this.loadImages(this.IMAGES_DEAD);
		this.loadImages(this.IMAGES_ATTACK);
		this.x = 2300;
		this.animate();
	};


	animate() {
		let i = 20;
		setInterval(() => {
			if (i < 10) {
				this.playAnimation(this.IMAGES_INTRO_ENDBOSS);
				this.y = -40;
				if (this.world.allSoundOn) {
					this.endboss_intro_sound.play();
				}
			} else if (this.isHurt()) {
				this.playAnimation(this.IMAGES_HURT);
				if (this.world.allSoundOn) {
					this.endboss_hit_sound.play();
				}
				if(this.energy > 0) {
				setTimeout(() => {
					this.playAnimation(this.IMAGES_ATTACK);
					this.moveLeft();
				 }, 900);
				}
			} else if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD);
			 setTimeout(() => {
				for (let i = 1; i < 9999; i++)
					window.clearInterval(i);
					document.getElementById('gameWon').classList.remove('d-none');
					if (this.world.allSoundOn) {
						this.world.character.swimming_sound.pause();
						this.world.allSoundOn = true;
						this.you_win_sound.play();
						this.world.changeSoundStatus();
					}	
			 }, 900);
			} else {
					this.playAnimation(this.IMAGES_SWIMMING);
	
			}
	
			i++;

			if(this.world != undefined) {
				if (this.world.character.x > 1900 && !this.hadFirstContact) {
					i = 0;
					this.currentImage = 0;
					this.hadFirstContact = true;
				}
			}
		}, 150);
	};
}

