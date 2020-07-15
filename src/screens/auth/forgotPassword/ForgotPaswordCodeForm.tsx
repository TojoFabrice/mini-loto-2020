import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'native-base';

import FieldChild from '../../../components/form/field/fieldChild';

const ForgotPasswordCodeForm = () =>{
    return(
        <Form style={{ width: 260 }}>
            <Field 
                name="code"
                label="Entrez votre code"
                autoCapitalize={'none'}
                textContentType={'postalCode'}
                component={FieldChild}
            />
        </Form>
    );
}

const codeReduxForm = reduxForm({ form: 'forgotPasswordCodeForm' })(ForgotPasswordCodeForm);

const stateToProps = (state) => {
    return {};
};
  
const actionToProps = {};

export default connect(stateToProps, actionToProps)(codeReduxForm);