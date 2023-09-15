class CollectableCoin extends MovableObject {

	height = 50;
	width = 50;
	offsetX = 0;
	offsetY = 0;
	offsetWidth = 0;
	offsetHeight = 0;


	IMAGES_COLLECTABLE_COIN = [
		'./img/4. Marcadores/1. Coins/1.png',
		'./img/4. Marcadores/1. Coins/2.png',
		'./img/4. Marcadores/1. Coins/3.png',
		'./img/4. Marcadores/1. Coins/4.png',
	];


	constructor(x, y) {
		super(x, y);
		this.x = x;
		this.y = y;
		this.loadImage(this.IMAGES_COLLECTABLE_COIN[0]);
		this.loadImages(this.IMAGES_COLLECTABLE_COIN);
		this.animate();
	};


	animate() {
		setInterval(() => {
			this.playAnimation(this.IMAGES_COLLECTABLE_COIN);
		}, 250);
	};
}



