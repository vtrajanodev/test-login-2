import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string
}

interface User extends LoginFormValues {
  token: string;
}


export const Login = () => {
  const [users, setUsers] = useState<User[]>([])

  const navigate = useNavigate()

  const LoginFormValidationSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é um obrigatório'),
    password: yup.string().required('Senha é um campo obrigatório')
  })

  const initialLoginFormValues: LoginFormValues = {
    email: '',
    password: ''
  }

  const getUsersData = async () => {
    const { data } = await api.get<User[]>("/users")
    setUsers(data)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  const handleLogin = (loginData: LoginFormValues) => {
    const { email, password } = loginData
    const user = users.find((user) => user.email === email && user.password === password)
    if (user) {
      localStorage.setItem('token', user.token)
      navigate("/")
    } else {
      console.error('Usuário ou senha incorreto')
    }
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
