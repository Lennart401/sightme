import React from "react";
import Box from "@material-ui/core/Box";

const Content = (props) => {
    return (
        <Box {...props} style={{marginLeft: "24px", marginRight: "24px"}}>
            {props.children}
        </Box>
    );
};

export default Content;