class PufferFishRed extends PufferFish {

	IMAGES_SWIMMING = [
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
		'./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
	];
	
	IMAGES_DEAD = [
		'./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png',
	];

	
	constructor(x) {
		super(x);
		this.x = x;
		this.loadImage(this.IMAGES_SWIMMING[0]);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
	};
}