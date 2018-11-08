import React, { Component } from "react";


class PassWord  extends Component {
    render() {
        var testV = 1;
        var pass1 = document.getElementById()
        while (testV < 3) {
            if (!pass1)
                window.history.go(-1);
            if (pass1.toLowerCase() === "letmein") {

                window.location.assign('/waiting');
                break;
            }
            testV += 1;
            pass1 =
                prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
        }
        if (pass1.toLowerCase() !== "password" && testV === 3)
            window.history.go(-1);
        return " ";
    }
}
export default PassWord;