import React from "react";
import {Alert} from "@mui/material";

function ConditionalSwitch({status}){
    switch(status){
        case "success":
            return <Alert severity="success">upload succes!</Alert>;
        case "error":
            return <Alert severity="error">resolve error</Alert>;
        case "warning":
            return <Alert severity="warning">warnings while upload</Alert>;
        case "info":
            return<Alert severity="info">your application filled</Alert>;
        default:
            return<p>loading..</p>;

    }

}
export default ConditionalSwitch;