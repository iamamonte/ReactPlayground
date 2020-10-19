
import React  from 'react';
import { Formik, Form as FForm, Field } from 'formik';
import * as Yup from 'yup';
import { FormControl, Form, Button, Alert } from 'react-bootstrap';

const SignupForm = () => {
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={values => {
        console.log("Hmmm");
        alert(JSON.stringify(values, null, 2));
        
      }}
    >
      {({ errors, touched, isValidating }) => (
        <FForm>
          <Form.Row>
            <Form.Group>
              <Form.Label>
                First Name
          </Form.Label>
              <Field as={FormControl} name="firstName" placeholder="Jimmy" data-testid="firstName" />
              {errors.firstName && touched.firstName && <Alert variant="danger" data-testid="firstNameError">{errors.firstName}</Alert>}
            </Form.Group>
          </Form.Row>
          <Form.Row>

            <Form.Group>
              <Form.Label>
                Last Name
              </Form.Label>
              <Field as={FormControl} name="lastName" data-testid="lastName" />
              {errors.lastName && touched.lastName && <Alert variant="danger" data-testid="lastNameError">{errors.lastName}</Alert>}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>
                Email
              </Form.Label>
              <Field as={FormControl} placeholder="bob@domain.com" name="email" type="email" data-testid="email" />
              {errors.email && touched.email && <Alert variant="danger" data-testid="emailError">{errors.email}</Alert>}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Button type="submit" data-testid="submit">Submit</Button>
            </Form.Group>
          </Form.Row>


        </FForm>
      )}
    </Formik>
  );
};

export default SignupForm;