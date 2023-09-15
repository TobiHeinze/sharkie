class ThrowableObject extends MovableObject {

	otherDirection;

	constructor(x, y, otherDirection) {
		super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
		this.x = x;
		this.y = y;
		this.height = 25;
		this.width = 25;
		this.offsetXRight = 150;
		this.offsetXLeft = 20;
		this.otherDirection = otherDirection;
		this.throw();
	};
	

	throw() {
		if (this.otherDirection === false) {
			this.x = this.x + this.offsetXRight;
		}
		else {
			this.x = this.x + this.offsetXLeft;
		}

		setInterval(() => {
			if (this.otherDirection === false) {
				this.x += 3;
				this.y -= 0.2;
			}
			else {
				this.x -= 3;
				this.y -= 0.2;
			}
		}, 25);
	};
}