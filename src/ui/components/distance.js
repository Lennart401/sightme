const Distance = ({game, distance}) => {
    if (game.assist?.nodist) {
        return "";
    }

    return "Distanz " + (distance < 50
        ? "< 50 m"
        : (
            distance < 500
                ? "< 500 m"
                : "~ " + (Math.round(distance * 0.002) * 0.5) + " km"
        )
    ) + " ";
};

export default Distance;