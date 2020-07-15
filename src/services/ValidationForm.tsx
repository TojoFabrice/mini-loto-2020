const LoginValidation = (values: any) => {
    const errors = {
        username: '',
        password: '',
      };
      // --- check username validation
      if (
        !values.username ||
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
      ) {
        errors.username = 'Email non valide';
      }
      // --- check password validation
      if (!values.password || values.password.length < 6) {
        errors.password = 'Mot de passe au moins 6 caractères.';
      }
      return errors;
}

const RegisterValidation = (values: any) => {
  const errors = {
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    confirmPassword:''
  };
  
  // --- check firstname validation
  if (!values.firstName || values.firstName.length < 4) {
    errors.firstName = 'Votre nom est trop court.';
  }

  // --- check lastname validation
  if (!values.lastName || values.lastName.length < 4) {
    errors.lastName = 'Votre prénom est trop court.';
  }

  // --- check email validation
  if (
    !values.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Email non valide';
  }
  
  // --- check password validation
  if (!values.password || values.password.length < 6) {
    errors.password = 'Mot de passe au moins 6 caractères.';
  }
  
  // --- check confirmPassword validation
  if (!values.confirmPassword || values.confirmPassword.length < 6) {
    errors.confirmPassword = 'Confirmation de mot de passe au moins 6 caractères.';
  }

  if (values.password && (values.password !== values.confirmPassword)) {
    errors.confirmPassword = 'Les passewords non identique';
  }
  
  return errors;
}

const ForgotPasswordValidation = (values: string) => {
  const errors = {
    email: ''
  };
  // --- check email validation
  if (
    !values.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Email non valide';
  }

}

const ResetPasswordValidation = (values: any) => {
  const errors = {
    newpassword: '',
    confirmpassword: ''
  };
  // --- check password validation
  if (!values.newpassword || values.newpassword.length < 6) {
    errors.newpassword = 'Mot de passe au moins 6 caractères.';
  }

  if (!values.confirmpassword || values.confirmpassword.length < 6) {
    errors.confirmpassword = 'Mot de passe au moins 6 caractères.';
  }

  if (values.newpassword !== values.confirmpassword) {
    errors.confirmpassword = 'Mot de passe incorrect';
  }
  return errors;
}

export { 
    LoginValidation, 
    RegisterValidation, 
    ForgotPasswordValidation, 
    ResetPasswordValidation 
};