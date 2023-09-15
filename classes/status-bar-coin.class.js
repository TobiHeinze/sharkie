class StatusBarCoin extends DrawableObject {

	x = 243;
	y = 35;
	height = 50;
	width = 50;
	collectedCoins = 0; 

	IMAGES_COIN = [
		'./img/4. Marcadores/green/100_ copia 6.png',
	];


	constructor() {
		super().loadImage(this.IMAGES_COIN[0])
		this.loadImages(this.IMAGES_COIN);
	};


	increaseStatusBarCoin() {
		this.collectedCoins += 1;
	};


	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.fillText([this.collectedCoins], 290, 72);
		ctx.font = '36px luckiest-guy';
		ctx.fillStyle = "white";
	};
}