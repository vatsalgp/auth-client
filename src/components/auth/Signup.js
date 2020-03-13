import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signup } from "../../actions";
import Form from "../Form";

class Signup extends React.Component {

    onSubmit = formProps => {
        this.props.signup(formProps, () => {
            this.props.history.push("/feature");
        });
    }

    render() {
        return <Form
            buttonText="Sign Up"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            errorMessage={this.props.errorMessage}
        />;
    }
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.errorMessage };
};

const SignForm = reduxForm({ form: "signup" })(Signup);
export default connect(mapStateToProps, { signup })(SignForm);
