import React from 'react'
import { render } from 'react-dom'
//import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import {DropdownButton, Dropdown, Col, Row, Container, Button, Form as FormSelection} from 'react-bootstrap'
import "../layout/EvaluateCar.css"


export default function EvaluateCar() {

const onSubmit = async values => {
    console.log(values);
    var price = values.price;
    if (values.mileage>180000){
        price= price-(price/100*20);
    }else if (values.purchase>5){
        price = price -(price/100*10)
    }else if (values.purchase>=10){
        price = price -(price/100*50)
    }
    

    var priceResults = document.getElementById('priceResults');
            priceResults.style.display = 'block';
            priceResults.innerHTML = '';
            var results = document.createElement('div');
            results.innerHTML = '<h1 style="text-align:center">Estimated Price is:<br/></h1>' + '<h3 style="text-align:center">€' + price + '</h3>';
      
            priceResults.append(results);
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const Nice = () =>(
  
    <Form 
      onSubmit={onSubmit}
      initialValues={{ mileage: 0, motortype: 'gasoline' }}
      validate={values => {
        const errors = {}
        if (!values.brandName) {
          errors.brandName = 'Required'
        }
        if (!values.motortype) {
          errors.motortype = 'Required'
        }
        if (values.motortype === 'gasoline') {
          if (!values.mileage) {
            errors.mileage = 'Required'
          }
        } else if (values.motortype === 'electric') {
          if (!values.electricTime) {
            errors.electricTime = 'Required'
          }
        }
        return errors
      }}
    >
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form class="form" onSubmit={handleSubmit}>
          <Container class="background">
            <Row>
                <Col>
          <div>
            <label>Brand Name</label>
            <Field
              name="brandName"
              component="input"
              type="text"
              placeholder="Brand Name"
            />
            <Error name="brandName" />
          </div>
          <Condition when="brandName" is="Mercedes"> Type
          <FormSelection.Select aria-label="type" name="type" id="type">
              <option value="Class a" selected>Class A</option>
              <option value="Gle">Gle</option>
              <option value="Black series">Black Series</option>
            </FormSelection.Select>
          </Condition>
          <div>
            <label>Motor</label>
            <div>
              <label>
                <Field
                  name="motortype"
                  component="input"
                  type="radio"
                  value="gasoline"
                />{' '}
                Gasoline
              </label>
              <label>
                <Field
                  name="motortype"
                  component="input"
                  type="radio"
                  value="electric"
                />{' '}
                Electric
              </label>
            </div>
            <Error name="motortype" />
          </div>
          <Condition when="motortype" is="gasoline">
            <div>
              <label>Mileage</label>
              <Field
                name="mileage"
                component="input"
                type="text"
                placeholder="Mileage (/km) "
              />
              <Error name="mileage" />
            </div>
          </Condition>
          <Condition when="motortype" is="electric">
          <div>
              <label>Mileage</label>
              <Field
                name="mileage"
                component="input"
                type="text"
                placeholder="Mileage "
              />
              <Error name="mileage" />
            </div>
          </Condition>
          <div>
              <label>Purchase Date </label>
              <Field
                name="purchase"
                component="input"
                type="text"
                placeholder="years ago"
              />
              <Error name="purchase" />
            </div>
            <div>
              <label>Price</label>
              <Field
                name="price"
                component="input"
                type="text"
                placeholder="Price (€) "
              />
              <Error name="Price" />
            </div>
          <div className="Buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="Button" onClick={form.reset} disabled={submitting}>
              Reset
            </button>
          </div>
          <pre><div id="priceResults"></div></pre>
                    </Col>
                </Row>
            </Container>
        </form>
      )}
    </Form>
    
)
return(Nice())
}
