// TODO: clean this up
let selected = canvas.tokens.controlled[0]
canvas.tokens.objects.children.filter(tok => tok.id != selected.id).forEach(other => {

	let first = {
		x: selected.x,
		y: selected.y
	}

	let second = {
		x: other.x,
		y: other.y
	}

	let distance = canvas.grid.measureDistance(first,second, {"gridSpaces": true})
	let roundedDistance = Math.round(distance * 100) / 100

	canvas.hud.bubbles.say(other, roundedDistance)
})