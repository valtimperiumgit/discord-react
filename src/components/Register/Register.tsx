import { Field, Form, Formik, FormikProps, useFormik } from "formik";
import { Link } from "react-router-dom";
import "../Register/Register.css";

function Register() {

    return (
      <div className="register">
        <div className="register__window">
          <div className="register__window__title">
            <p>Create an account</p>
          </div>
            <Formik
              initialValues={{
              email: '',
              password: '',
              name: '',
              year: 2000,
              month: 10,
              day: 2,
              isAcceptNewsletters: true }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props: FormikProps<any>) => ( 
                <Form className="register__form">

                  <div className="register__input_container">
                  <label className="register__label" htmlFor="email">E-MAIL</label>
                  <Field className="register__input" type="email" name="email" />
                  </div>

                  <div className="register__input_container">
                  <label className="register__label" htmlFor="name">NAME</label>
                  <Field className="register__input" type="text" name="name" />
                  </div>

                  <div className="register__input_container">
                  <label className="register__label" htmlFor="password">PASSWORD</label>
                  <Field className="register__input" type="password" name="password" />
                  </div>

                  <div className="register__birthday_container">
                    <label className="register__label">BIRTHDAY</label>
                    <div className="register__birthday_container_selects">
                      <Field className="register__select_date" as="select" name="year">
                        <option value="2000">2000</option>
                        <option value="2001" selected>2001</option>
                        <option value="2002">2002</option>
                      </Field>

                      <Field className="register__select_date" as="select" name="month">
                        <option value="1">January </option>
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

                      <Field className="register__select_date" as="select" name="day">
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                      </Field>
                    </div>
                </div>
          
                <div className="register__checkbox_container">
                  <Field className="register__checkbox" type="checkbox" name="isAcceptNewsletters" />
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
  