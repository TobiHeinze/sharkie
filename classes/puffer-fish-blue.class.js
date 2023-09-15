class PufferFishBlue extends PufferFish {

	IMAGES_SWIMMING = [
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png'
	];

	IMAGES_DEAD = [
		'./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
	];


	constructor(x) {
		super(x);
		this.x = x;
		this.loadImage(this.IMAGES_SWIMMING[0]);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
	};
}