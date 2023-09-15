class PufferFish extends MovableObject {

	height = 50;
	width = 60;
	offsetX = 0;
	offsetY = 0;
	offsetWidth = 0;
	offsetHeight = 0;
	energy = 1;

	IMAGES_SWIMMING = this.IMAGES_SWIMMING;
	IMAGES_DEAD = this.IMAGES_DEAD;

	constructor(x) {
		super();
		this.x = x;
		this.speed = 0.15 + Math.random() * 0.25;
		this.y = 75 + Math.random() * 305;
		this.animate();
	};
	

	animate() {
		setInterval(() => {
			this.moveLeft();
		}, 1000 / 60);

		setInterval(() => {
			this.playAnimation(this.IMAGES_SWIMMING);
		}, 150);

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