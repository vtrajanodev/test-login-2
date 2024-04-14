import { Field, Formik } from 'formik';
import { Form } from 'react-router-dom';
import * as yup from 'yup';

interface LoginFormValues {
  email: string;
  password: string
}

interface UserLoginData extends LoginFormValues {
  token: string;
}

export const Login = () => {

  const LoginFormValidationSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é um obrigatório'),
    password: yup.string().required('Senha é um campo obrigatório')
  })

  const initialLoginFormValues: LoginFormValues = {
    email: '',
    password: ''
  }

  const handleLogin = (loginData: LoginFormValues) => {
    console.log(loginData)
  }

  return (
    <Formik
      initialValues={initialLoginFormValues}
      validationSchema={LoginFormValidationSchema}
      onSubmit={(values, actions) => {
        handleLogin(values)
      }}
      isInitialValid={false}

    >
      {({ dirty, touched, errors, isValid }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Seu email cadastrado" />
            {(touched.email && errors.email) && <span>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <Field id="password" name="password" placeholder="Digite sua senha" />
            {(touched.password && errors.password) && <span>{errors.password}</span>}
          </div>

          <button type='submit' disabled={!isValid || !dirty}>Login</button>
        </Form>
      )}
    </Formik>
  )
}
