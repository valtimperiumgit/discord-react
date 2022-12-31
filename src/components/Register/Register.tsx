import { Field, Form, Formik, FormikProps, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "../Register/Register.css";
import * as Yup from 'yup';
import { registration } from "../../api/AuthorizationService";
import { IRegistrationRequest } from "../../models/requests/IRegistrationRequest";
import { useAppDispatch } from "../../hooks/redux";
import { ILoginRequest } from "../../models/requests/ILoginRequest";
import { login } from "../../store/redusers/slices/AuthorizationSlice";

function Register() {

  let dispatch = useAppDispatch();
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
      Password: Yup.string()
      .min(6, 'Password length must be at least 6 characters!')
      .max(15, 'Password length must be less than 15 characters!')
      .required('Required'),

      Name: Yup.string()
      .min(3, 'Name length must be at least 3 characters!')
      .max(15, 'Name length must be less than 15 characters!')
      .required('Required'),

      Email: Yup.string().email('Invalid email format').required('Required'),
  });

    return (
      <div className="register">
        <div className="register__window">
          <div className="register__window__title">
            <p>Create an account</p>
          </div>
            <Formik
              initialValues={{
              Email: '',
              Password: '',
              Name: '',
              Year: 2000,
              Month: 10,
              Day: 2,
              IsAcceptNewsletters: true }}
              validationSchema={RegisterSchema}
              validateOnChange={false}
              validateOnBlur={false}
        
              onSubmit={async (values, actions) => {
                const request : IRegistrationRequest = {...values};
                const loginRequest : ILoginRequest = {Email: values.Email, Password: values.Password};
                await registration(values)
                .then(() => dispatch(login(request)))
                .then(() => navigate('/'))
              }}
            >
              {({ errors, touched }) => ( 
                <Form className="register__form">

                  <div className="register__input_container">
                  <label className="register__label" htmlFor="email">E-MAIL {(errors.Email && touched.Email) ? (
                  <span>{errors.Email}</span>
                  ) : null}</label> 
                  <Field className="register__input" type="email" name="Email" />
                  </div>

                  <div className="register__input_container">
                  <label className="register__label" htmlFor="name">NAME {(errors.Name && touched.Name) ? (
                  <span>{errors.Name}</span>
                  ) : null}</label>
                  <Field className="register__input" type="text" name="Name" />
                  </div>

                  <div className="register__input_container">
                  <label className="register__label" htmlFor="password">PASSWORD {(errors.Password && touched.Password) ? (
                  <span>{errors.Password}</span>
                  ) : null}</label>
                  <Field className="register__input" type="password" name="Password" />
                  </div>

                  <div className="register__birthday_container">
                    <label className="register__label">BIRTHDAY</label>
                    <div className="register__birthday_container_selects">
                      <Field className="register__select_date" as="select" name="Year">
                        <option value="2000" selected>2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                      </Field>

                      <Field className="register__select_date" as="select" name="Month">
                        <option value="1" selected>January </option>
                        <option value="2">February </option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </Field>

                      <Field className="register__select_date" as="select" name="Day">
                        <option value="1" selected>1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                      </Field>
                    </div>
                </div>
          
                <div className="register__checkbox_container">
                  <Field className="register__checkbox" type="checkbox" name="IsAcceptNewsletters" />
                  <div className="register__checkbox_description">
                  (Optional) I don't mind receiving emails with Discord news, tips and special offers. You can unsubscribe at any time.
                  </div>
                </div>

                <button className="register__button" type="submit">Continue</button>
                </Form>
                )}
            </Formik>
            <div>

              <div className="register__link_container">
                <Link className="register__link" to={"/login"}>
                Already registered?
                </Link>
              </div>
          
            </div>
        </div>
      </div>
    );
  }
  
  export default Register;
  