
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import "../AddFriend/AddFriend.css"
import * as Yup from 'yup';

interface AddFriendProps{

}

function AddFriend() {

  const AddFriendSchema = Yup.object().shape({

    NameAndTag: Yup.string().required('Required'),
});


    return (
      <div className="add_friend">
        <div className="add_friend_content">

          <div className="add_friend_title">
              <div className="add_friend_title_title">
             ADD FRIEND
              </div>
              <div>
             You can add a friend by Discord Tag. Enter with LAYOUT INCLUDED!
              </div>
          </div>
          
          <Formik
              initialValues={{
              NameAndTag: ''
            }}
              validateOnChange={false}
              validateOnBlur={false}
              validationSchema={AddFriendSchema}
              onSubmit={async (values, actions) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => ( 

          <Form className="add_friend_form">
            <Field className="add_friend_form_input" name="NameAndTag" placeholder="Enter username#0000"/>
          </Form >

        )}
        </Formik>

        </div>
      </div>
    );
  }
  
  export default AddFriend;