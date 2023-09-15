class MovableObject extends DrawableObject {

	speed = 0.15;
	otherDirection = false;
	lastHit = 0; 


	isColliding(mo) {
		return this.x + this.offsetX + this.width + this.offsetWidth >= mo.x &&
			this.x + this.offsetX <= mo.x + mo.width &&
			this.y + this.offsetY + this.height + this.offsetHeight >= mo.y &&
			this.y + this.offsetY <= mo.y + mo.height 
	};


	isApproaching(mo) {
		return this.x + this.offsetX + this.width + this.offsetWidth >= mo.x - 50 &&
			this.x + this.offsetX <= mo.x - 50 + mo.width + 90 &&
			this.y + this.offsetY + this.height + this.offsetHeight >= mo.y &&
			this.y + this.offsetY <= mo.y + mo.height
	};


	hit() {
		this.energy -= 1;
		if(this.energy < 0) {
			this.energy = 0;
		} else {
			this.lastHit = new Date().getTime();
		}
	};


	isHurt() {
		let timePassed = new Date().getTime() - this.lastHit;
		timePassed = timePassed / 1000;
		return timePassed < 1;
	};


	isDead() {
		return this.energy == 0;
	};


	playAnimation(images) {
		let i = this.currentImage % images.length;
		let path = images[i];
		this.img = this.imageCache[path];
		this.currentImage++;
	};


	moveRight() {
		this.x += this.speed;
	};


	moveLeft() {
		this.x -= this.speed;
	};


	moveUp() {
		this.y -= this.speed;
	};
	

	moveDown() {
		this.y += this.speed;
	};
}