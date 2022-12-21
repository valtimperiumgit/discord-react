import { Field, Form, Formik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Login/Login.css"
import * as Yup from 'yup';
import { ILoginRequest } from "../../models/requests/ILoginRequest";
import { login } from "../../store/redusers/slices/AuthorizationSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";

function Login() {

  let dispatch = useAppDispatch();
  const error = useAppSelector(state => state.AuthorizationReducer.error);
  const isAuthorized = useAppSelector(state => state.AuthorizationReducer.isAuthorized);
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    Password: Yup.string()
    .min(6, 'Password length must be at least 6 characters!')
    .max(15, 'Password length must be less than 15 characters!')
    .required('Required'),

    Email: Yup.string().email('Invalid email format').required('Required'),
});

    return (
      <div className="login">
        <div className="login__window">
          <div className="login__window__greetings">
            <h1>Welcome back!</h1>
            <p>We are so happy to see you again</p>
          </div>
          <Formik
              initialValues={{
              Email: '',
              Password: '' }}
              validateOnChange={false}
              validateOnBlur={false}
              validationSchema={LoginSchema}
              onSubmit={async (values, actions) => {
                const request : ILoginRequest = {...values}
                dispatch(login(request))
                .then(() => navigate('/'));
              }}
            >
              {({ errors, touched }) => ( 
                <Form>

                  <div className="login__input_container">
                  <label className="login__label" htmlFor="email">E-MAIL {error === null ? 
                  ((errors.Email && touched.Email) ?
                    (<span>{errors.Email}</span>) : null) :
                    <span>Invalid login or password.</span> }
                  </label> 

                  <Field className="login__input" type="email" name="Email" />
                  </div>

                  <div className="login__input_container">
                  <label className="login__label" htmlFor="password">PASSWORD {(errors.Password && touched.Password) ? (
                  <span>{errors.Password}</span>
                  ) : null}</label>
                  <Field className="login__input" type="password" name="Password" />
                  </div>
                  <div className="login__link_container">
                    <Link className="login__link" to={"/register"}>
                    Forget password?
                    </Link>
                  </div>

                <button className="login__button" type="submit">Continue</button>
                <div className="login__link_container">
                  <span> Need an account? </span>  <Link className="login__link_reg" to={"/register"}>
                    Register?
                    </Link>
                  </div>
                </Form>
                )}
            </Formik>
          
        </div>
      </div>
    );
  }
  
  export default Login;
  