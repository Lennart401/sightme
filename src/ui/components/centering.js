import React from "react";
import Box from "@material-ui/core/Box";

const Centering = (props) => {
    return (
        <Box {...props} style={{textAlign: "center"}}>
            {props.children}
        </Box>
    );
};

export default Centering;