import React from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends React.Component {
    render() {
        return (
            <form>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                    />
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({ form: "signup" })(Signup);