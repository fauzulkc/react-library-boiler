import React from "react";
import TextField from "@material-ui/core/TextField";

function textField(props) {
    return (
        <div>
            <TextField
                required={props.required}
                id={props.id}
                variant={props.variant}
                label={props.label}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                multiline={props.multiline}
                rows={props.rows}
                type={props.type}
                error={props.error}
                value={props.value}
                onChange={props.onChange}
                style={style.textfield}
            />
        </div>
    );
}

const style = {
    textfield: {
        height: 66,
        width: 370,
        margin: 8,
        border: "#707070"
    }
};

export default textField;
