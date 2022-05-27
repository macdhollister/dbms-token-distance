// TODO: clean this up


function getOtherTokens(token) {
    return canvas.tokens.objects.children.filter(tok => tok.id != token.id)
}

function calculateTokenDistance(token1, token2) {
    let first = {
        x: token1.x,
        y: token1.y
    }

    let second = {
        x: token2.x,
        y: token2.y
    }

    let distance = canvas.grid.measureDistance(first, second, {"gridSpaces": true})
    let roundedDistance = Math.round(distance * 100) / 100

    return roundedDistance
}

Hooks.on("hoverToken", (hoveredToken, isHovered) => {
    let state = isHovered ? "hovered" : "unhovered";

    if(state == "hovered") getOtherTokens(hoveredToken).forEach(other => {
        let roundedDistance = calculateTokenDistance(hoveredToken, other)
        canvas.hud.bubbles.say(other, roundedDistance)
    })
});
