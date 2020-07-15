import React from 'react';
import { View, Text } from 'react-native';
import { FieldWrapperStyle } from './FieldWrapperStyle';

const FieldWrapper = ({
    children,
    meta: { touched, error, warning }
}: any) => {

    return(
        <View
            style={[
                FieldWrapperStyle.inputContainer,
                touched && error ? FieldWrapperStyle.inputContainerInvalid : {},
            ]}
        >
            {children}
            {touched && error && <Text style={FieldWrapperStyle.error}>{error}</Text>}

            {warning && <Text style={FieldWrapperStyle.warning}>{warning}</Text>}
        </View>
    );
}

export default FieldWrapper;