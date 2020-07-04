import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const useCheckedTextfield = (props, maxLength) => {
    const [text, setText] = useState("");
    const [helperText, setHelperText] = useState("");

    const handleChange = (event) => {
        const newText = event.target.value;
        if (newText.length > maxLength) setHelperText("Eingabe ist zu lang!");
        else setHelperText("");
        setText(newText);
    };

    const isContentValid = () => {
        if (text.length === 0) setHelperText("Eingabe darf nicht leer sein!");
        return text.length > 0 && text.length <= maxLength;
    };

    return {
        validate: isContentValid,
        text: text,
        component: <TextField {...props}
                              value={text}
                              error={helperText.length > 0}
                              helperText={helperText}
                              onChange={handleChange}/>,
    };
};

export default useCheckedTextfield;