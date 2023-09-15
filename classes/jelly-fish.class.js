class JellyFish extends MovableObject {

	height = 70;
	width = 60;
	offsetX = 0;
	offsetY = 0;
	offsetWidth = 0;
	offsetHeight = 0;
	energy = 1;

	IMAGES_SWIMMING = this.IMAGES_SWIMMING;
	IMAGES_DEAD = this.IMAGES_DEAD;


	constructor(y) {
		super();
		this.y = y;
		this.speed = 0.15 + Math.random() * 0.25;
		this.x = 350 + Math.random() * 1500;
		this.animate();
	};


	animate() {
		setInterval(() => {
			this.moveUp();
		}, 1000 / 60);

		setInterval(() => {
			this.playAnimation(this.IMAGES_SWIMMING);
		}, 200);

		setInterval(() => {
			if (this.energy == 0) {
				setTimeout(() => {
					this.playAnimation(this.IMAGES_DEAD);
					this.x += 5;
					this.y -= 5;
				}, 1200);
			}
		}, 30);
	};
}