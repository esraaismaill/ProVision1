import { useState, useEffect } from 'react';
import firebase from '../config/firebase'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

 /* firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    console.log(user,"User")
    firebase.firestore().collection("users").doc(user.uid).set({
      uid:user.uid,
      name:values.username,
      email:values.email,
      createdAt: new Date()
    })
    .then((e)=>{
      callback();
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error,"Error")
  });*/
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
