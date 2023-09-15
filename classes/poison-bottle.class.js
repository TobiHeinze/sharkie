class PoisonBottle extends MovableObject {

	height = 80;
	width = 60;
	offsetX = 0;
	offsetY = 0;
	offsetWidth = 0;
	offsetHeight = 0;

	IMAGES_POISONBOTTLE = [
		'./img/4. Marcadores/Posión/Animada/1.png',
		'./img/4. Marcadores/Posión/Animada/2.png',
		'./img/4. Marcadores/Posión/Animada/3.png',
		'./img/4. Marcadores/Posión/Animada/4.png',
		'./img/4. Marcadores/Posión/Animada/5.png',
		'./img/4. Marcadores/Posión/Animada/6.png',
		'./img/4. Marcadores/Posión/Animada/7.png',
		'./img/4. Marcadores/Posión/Animada/8.png',
	
	];


	constructor(x, y) {
		super(x, y);
		this.x = x;
		this.y = y;
		this.loadImage(this.IMAGES_POISONBOTTLE[0]);
		this.loadImages(this.IMAGES_POISONBOTTLE);
		this.animate();
	};


	animate() {
		setInterval(() => {
			this.playAnimation(this.IMAGES_POISONBOTTLE);
		}, 200);
	};
}



