import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'native-base';

import { ResetPasswordValidation } from '../../../services/ValidationForm';
import FieldChild from '../../../components/form/field/fieldChild';

const validate = (values: any) => {
    return ResetPasswordValidation(values);
};

const ResetPasswordForm = () =>{
    return(
        <Form style={{ width: 260 }}>
            <Field 
                name="newpassword"
                label="Nouveau mot de passe"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize={'none'}
                textContentType='password'
                component={FieldChild}
            />
            <Field 
                name="confirmpassword"
                label="Confirmer mot de passe"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                textContentType="password"
                component={FieldChild}
            />
        </Form>
    );
}

const ResetReduxForm = reduxForm({ form: 'resetpasswordForm', validate })(ResetPasswordForm);

const mapStateToProps = (state) => {
    return {};
};
  
const actionProps = {};

export default connect(mapStateToProps, actionProps)(ResetReduxForm);