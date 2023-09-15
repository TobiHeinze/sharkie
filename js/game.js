let canvas;
let world;
let keyboard = new Keyboard();
fullScreenStatus = false;

function startGame() {
	document.getElementById('startScreen').classList.add('d-none');
	document.getElementById('btnHelpSpound').classList.remove('d-none');
	initLevel();
	init();
};


function init() {
	canvas = document.getElementById('canvas');
	world = new World(canvas, keyboard);
	mobileButtonTouchEvents();
	
};


function closeHowTo() {
	document.getElementById('howToSection').classList.add('d-none');
};


function openHowTo() {
	document.getElementById('howToSection').classList.remove('d-none');
};


function closeGameWon() {
	document.getElementById('gameWon').classList.add('d-none');
	document.getElementById('startScreen').classList.remove('d-none');
	document.getElementById('btnHelpSpound').classList.add('d-none');
};


function closeGameLost() {
	document.getElementById('gameLost').classList.add('d-none');
	document.getElementById('startScreen').classList.remove('d-none');
	document.getElementById('btnHelpSpound').classList.add('d-none');
};


document.addEventListener("keydown", (e) => {
	if (e.keyCode == 39) {
		keyboard.RIGHT = true;
	}

	if (e.keyCode == 37) {
		keyboard.LEFT = true;
	}

	if (e.keyCode == 38) {
		keyboard.UP = true;
	}

	if (e.keyCode == 40) {
		keyboard.DOWN = true;
	}

	if (e.keyCode == 32) {
		keyboard.SPACE = true;
	}

	if (e.keyCode == 68) {
		keyboard.D = true;
	}
});


document.addEventListener("keyup", (e) => {
	if (e.keyCode == 39) {
		keyboard.RIGHT = false;
	}

	if (e.keyCode == 37) {
		keyboard.LEFT = false;
	}

	if (e.keyCode == 38) {
		keyboard.UP = false;
	}

	if (e.keyCode == 40) {
		keyboard.DOWN = false;
	}

	if (e.keyCode == 32) {
		keyboard.SPACE = false;
	}

	if (e.keyCode == 68) {
		keyboard.D = false;
	}
});


function mobileButtonTouchEvents() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

	document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
	});

    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
	
    document.getElementById('btnDown').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });

    document.getElementById('btnDown').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });

    document.getElementById('btnBubbleAttack').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById('btnBubbleAttack').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
	
    document.getElementById('btnFinSlap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnFinSlap').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
};


function changeScreenModus() {
	let fullscreen = document.getElementById('fullScreen');
	let canvasFullscreen = document.getElementById('canvas');
	if (!fullScreenStatus) {
		enterFullscreen(fullscreen);
		canvasFullscreen.style.width = '100vw';
		canvasFullscreen.style.height = '100vh';
		fullScreenStatus = true;
	} else {
		exitFullscreen(fullscreen);
		canvasFullscreen.style.width = '720px';
		canvasFullscreen.style.height = '480px';
		fullScreenStatus = false;
	}
};


function enterFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
		element.msRequestFullscreen();
	} else if (element.webkitRequestFullscreen) {  // iOS Safari
		element.webkitRequestFullscreen();
	}
};


function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
};


// function triggerFunctionBasedOnHeight() {
// 	if (window.innerHeight < 480) {
// 		fullScreenStatus = false;
// 		changeScreenModus();
// 		fullScreenStatus = true;
// 	} else {
// 		fullScreenStatus = true;
// 		changeScreenModus();
// 		fullScreenStatus = false;
// 	} 
	
// };


// window.addEventListener("resize", triggerFunctionBasedOnHeight);

