
import { Field, Formik, Form } from "formik";
import "../AddFriend/AddFriend.css"
import * as Yup from 'yup';
import { IAddFriendRequest } from "../../../models/requests/IAddFriendRequest";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addFriend } from "../../../store/redusers/slices/FriendsSlice";
import { error } from "console";

function AddFriend() {
  
  let apiError = useAppSelector(state => state.FriendsReducer.error);

  let dispatch = useAppDispatch();
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
              <div>
            You can add a friend by Discord Tag. Enter with LAYOUT INCLUDED!"
        </div> 
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
               
               let splitedValue = values.NameAndTag.split("#")
               const request : IAddFriendRequest = {Name: splitedValue[0], Tag: splitedValue[1]};
               dispatch(addFriend(request)).
               then(() => {  console.log(apiError);})
             
              }}
            >
              {({values}) => ( 

          <Form className="add_friend_form">
            <div>
              <Field className="add_friend_form_input" name="NameAndTag" placeholder="Enter username#0000"/>

              <button className={"add_friend_form__button " +  (values.NameAndTag === "" ? "lock_button" : "")} 
              style={ {position: "relative"} }
              type="submit">
                Send friend request
              </button>
  
            </div>
          </Form >

        )}
        </Formik>

        <div className="add_friend_error">
        {apiError != null ? apiError.message : ""}
        </div>
        </div>
      </div>
    );
  }
  
  export default AddFriend;