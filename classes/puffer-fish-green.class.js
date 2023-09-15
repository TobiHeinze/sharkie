class PufferFishGreen extends PufferFish {

	IMAGES_SWIMMING = [
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
	];

	IMAGES_DEAD = [
		'./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
	];


	constructor(x) {
		super(x);
		this.x = x;
		this.loadImage(this.IMAGES_SWIMMING[0]);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
	};
}