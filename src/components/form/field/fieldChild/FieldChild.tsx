import React from 'react';
import { Input, Item } from 'native-base';
import FieldWrapper from '../fieldWrapper';
import { Colors } from '../../../../styles';

const FieldChild = (props: any) => {

    const {
        input: { value, onChange, ...inputProps },
        meta: { touched, error },
        label,
        ...TextInputProps
    } = props;

    return(
        <FieldWrapper {...props}>
            <Item error={touched && error ? true : false } >
            <Input
                {...inputProps}
                {...TextInputProps}
                placeholder={label}
                value={value}
                onChangeText={(value: any) => onChange(value)}
                placeholderTextColor={Colors.primary}
                />
            </Item>
        </FieldWrapper>
    );
}

export default FieldChild;