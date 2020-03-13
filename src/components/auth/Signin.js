import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signin } from "../../actions";
import Form from "../Form";

class Signin extends React.Component {

    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push("/feature");
        });
    }

    render() {
        return <Form
            buttonText="Sign In"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            errorMessage={this.props.errorMessage}
        />;
    }
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.errorMessage };
};

const SignForm = reduxForm({ form: "signin" })(Signin);
export default connect(mapStateToProps, { signin })(SignForm);
