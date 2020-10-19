import React, {useState} from 'react';
import { useFormik  //, validateYupSchema 
 } from 'formik';
import {Form, FormControl, Button, Alert} from 'react-bootstrap';
import * as Yup from 'yup';

const BootstrapFormikExample = ()=>{
    const [_firstName,setFirstName] = useState('Bob');
    const [_lastName,setLastName] = useState('');
    const [_email,setEmail] = useState('');

    const ExampleSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });


    const formik = useFormik({
        initialValues: {
          firstName: _firstName,
          lastName:_lastName,
          email:_email
        },
        onSubmit: values => {
            // console.log(validateYupSchema(values,ExampleSchema,true)); //could be called 
            console.log(formik);
            console.log("From formik");
          alert(JSON.stringify(values, null, 2));
        }
        // ,onChange:values => {console.log("formik onChange",values);}
       ,validationSchema:ExampleSchema
      });
    return (
        <Form onSubmit={formik.handleSubmit} >
            <Form.Row>
            <Form.Group>
                <Form.Label>
                    First Name
                </Form.Label>
                <FormControl name="firstName" value={formik.values.firstName} onKeyPress={formik.handleBlur} onChange={formik.handleChange} type="text"></FormControl>
                {formik.touched.firstName && formik.errors.firstName && <Alert variant="danger"> {formik.errors.firstName}</Alert>}
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group>
                <Form.Label>
                    Last Name
                </Form.Label>
                <FormControl name="lastName" value={formik.values.lastName} onKeyPress={formik.handleBlur} onChange={formik.handleChange} type="text"></FormControl>
                {formik.touched.lastName && formik.errors.lastName && <Alert variant="danger"> {formik.errors.lastName}</Alert>}
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group>
                <Form.Label>
                    Email
                </Form.Label>
                <FormControl name="email"  onChange={formik.handleChange} onKeyPress={formik.handleBlur} value={formik.values.email} type="text"></FormControl>
                {formik.touched.email && formik.errors.email && <Alert variant="danger"> {formik.errors.email}</Alert>}
            </Form.Group>
            </Form.Row>
            <Form.Row >
            <Button style={{width:"60%"}} size="lg" type="submit" >Submit</Button>
        
      </Form.Row>
        </Form>

    );
};

export default BootstrapFormikExample;