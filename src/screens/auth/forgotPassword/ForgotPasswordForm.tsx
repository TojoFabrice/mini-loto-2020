import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'native-base';

import FieldChild from '../../../components/form/field/fieldChild';
import { ForgotPasswordValidation } from '../../../services/ValidationForm';

const validate = (values: string) => {
    return ForgotPasswordValidation(values);
}

const ForgotPasswordForm = () =>{
    return(
        <Form style={{ width: 260 }}>
            <Field 
                name="email"
                label="Email"
                autoCapitalize={'none'}
                textContentType={'emailAddress'}
                keyboardType="email-address"
                component={FieldChild}
            />
        </Form>
    );
}

const forgotReduxForm = reduxForm({ form: 'forgotForm', validate })(ForgotPasswordForm);

const stateToProps = (state) => {
    return {};
};
  
const actionToProps = {};

export default connect(stateToProps, actionToProps)(forgotReduxForm);