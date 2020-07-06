import React from "react";
import { Box } from "@material-ui/core";

const FullHeightWrapper = (props) => {
    return (
        <Box {...props} style={{
            display: "flex",
            flexDirection: "column",
            height: "100%"
        }}>
            {props.children}
        </Box>
    );
};

export default FullHeightWrapper;