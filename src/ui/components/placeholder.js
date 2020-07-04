import React from "react";

const Placeholder = ({factor = 1}) => {
    const size = 2 * factor;
    return <p style={{marginTop: size + "em"}}/>;
};

export default Placeholder;