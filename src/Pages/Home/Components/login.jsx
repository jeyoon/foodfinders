import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 3) {
        if (!pass1)
            window.history.go(-1);
        if (pass1.toLowerCase() === "letmein") {
            alert('You Got it Right!');
            window.location.assign('/waiting');
            break;
        }
        testV+=1;
        pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!=="password" && testV ===3)
        window.history.go(-1);
    return " ";
}