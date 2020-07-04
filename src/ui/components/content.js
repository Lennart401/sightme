import React from "react";
import Box from "@material-ui/core/Box";

const Content = ({children}) => {
    return (
        <Box style={{marginLeft: "16px", marginRight: "16px"}}>
            {children}
        </Box>
    );
};

export default Content;