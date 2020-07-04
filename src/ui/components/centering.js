import React from "react";
import Box from "@material-ui/core/Box";

const Centering = ({children}) => {
    return (
        <Box style={{textAlign: "center"}}>
            {children}
        </Box>
    );
};

export default Centering;