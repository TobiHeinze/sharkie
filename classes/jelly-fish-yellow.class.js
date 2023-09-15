class JellyFishYellow extends JellyFish {

	IMAGES_SWIMMING = [
		'./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
		'./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
		'./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
		'./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',

	];

	IMAGES_DEAD = [
		'./img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
		'./img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
		'./img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
		'./img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
	
	];


	constructor(y) {
		super(y);
		this.y = y;
		this.loadImage(this.IMAGES_DEAD[0]);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
	};
}