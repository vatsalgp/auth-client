import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signup } from "../../actions";

class Signup extends React.Component {

    onSubmit = formProps => {
        this.props.signup(formProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                <div className="error">
                    {this.props.errorMessage}
                </div>
                <button>Sign up</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.errorMessage };
};

const Form = reduxForm({ form: "signup" })(Signup);
export default connect(mapStateToProps, { signup })(Form);
