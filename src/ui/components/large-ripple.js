import React from "react";
import { Box } from "@material-ui/core";

const LargeRipple = ({enable, frequency, handleIteration}) => {
    return (
        <Box style={{
            width: "100%",
            paddingTop: "100%",
            position: "relative",
        }}>
            <Box style={{
                position: "absolute",
                top: 0, left: 0, bottom: 0, right: 0,
                animation: enable ? `ripple ${(1 / frequency)}s ease-out infinite` : "none"
            }}
                 className="ripple"
                 onAnimationIteration={handleIteration}/>
        </Box>
    );
}

export default LargeRipple;