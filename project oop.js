class Item {
	// class that has common features - it will be inherited
	shape;
	x;
	y;
	constructor(shape, x, y) {
		this.shape = shape;
		this.x = x;
		this.y = y;
		this.shape.style.left = x + "px";
		this.shape.style.top = y + "px";
	}
}

class Food extends Item {
	// Food class inherited all specs from Item class
	constructor(shape, x, y) {
		super(shape, x, y);
	}
	recreat() {
		// methode to regenerate random place for food div
		this.x = getRandom20(window.innerWidth - 20);
		this.y = getRandom20(window.innerHeight - 20);
		this.shape.style.left = this.x + "px";
		this.shape.style.top = this.y + "px";
	}
}
class Player extends Item {
	// Player class inherited all specs from Item class
	constructor(shape, x, y) {
		super(shape, x, y);
	}
	moveUp() {
		this.y -= 20; // to change player div position -20 px everytime you call the function
		this.shape.style.top = this.y + "px";
	}
	moveDown() {
		this.y += 20;
		this.shape.style.top = this.y + "px";
	}
	moveLeft() {
		this.x -= 20;
		this.shape.style.left = this.x + "px";
	}
	moveRight() {
		this.x += 20;
		this.shape.style.left = this.x + "px";
	}
}
function getRandom20(end) {
	// return integer values to make it easy to handle position of div in the browser page
	let value = Math.round(Math.random() * end);
	return value - (value % 20);
}
let food = new Food(
	document.getElementById("food"), //  assign food div to shape variable
	getRandom20(window.innerWidth - 20), // assign browser width to x variable
	getRandom20(window.innerHeight - 20) // assign browser height to y variable
);
let player = new Player(
	document.getElementById("player"), //  assign player div to shape variable
	getRandom20(window.innerWidth - 20), // assign browser width to x variable
	getRandom20(window.innerHeight - 20) // assign browser height to y variable
);
window.addEventListener("keydown", (e) => {
	switch (e.keyCode) {
		case 37: {
			//keycode in keyboard
			if (player.x > 0) player.moveLeft();
			break;
		}
		case 38: {
			if (player.y > 0) player.moveUp();
			break;
		}
		case 39: {
			if (player.x < window.innerWidth - 30) player.moveRight();
			break;
		}
		case 40: {
			if (player.y < window.innerHeight - 20) player.moveDown();
			break;
		}
	}
	if (player.x === food.x && player.y === food.y) {
		food.recreat();
	}
});
console.log(food);
