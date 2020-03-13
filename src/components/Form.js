import React from "react";
import { Field } from "redux-form";

const Form = props => {

    const renderError = error => {
        if (error) {
            return (
                <div className="ui negative message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    const renderInput = ({ input, label }) => (
        <div className="field">
            <label htmlFor={input.name}>{label}</label>
            <input {...input} id={input.name} autoComplete="off" />
        </div>
    );

    return (
        <form onSubmit={props.onSubmit} className="ui form">
            <Field
                label="Email"
                name="email"
                type="email"
                component={renderInput}
            />
            <Field
                label="Password"
                name="password"
                type="password"
                component={renderInput}
            />
            <button className="ui button primary" >
                {props.buttonText}
            </button>
            {renderError(props.errorMessage)}
        </form >
    );
}

export default Form;