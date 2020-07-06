import React from "react";
import { Box } from "@material-ui/core";
import Content from "./content";

const FullHeightContent = (props) => {
    return (
        <Box style={{
            flexGrow: 1,
            flexShrink: 1
        }}>
            <Content {...props}>
                {props.children}
            </Content>
        </Box>
    );
};

export default FullHeightContent;