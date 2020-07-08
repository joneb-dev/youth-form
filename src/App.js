import React from 'react';
import { Formik, Form, Field } from 'formik';
import logo from './logo.svg';
import './App.css';
import './util/custom_fields'
import {Typography, Button, Container, TextField, makeStyles, Grid, Box} from '@material-ui/core'
import {postData} from './util/http_helper' 

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))


function App() {
  const classes = useStyles();

  return (
    <>
    <Formik 
      initialValues = {{
          person: {
            first_name: null,
            last_name: null,
            birthday: null,
            street: null,
            city: null,
            state: null,
            zip: null,
            cell:null,
            email: null,
            grade: null,
            school: null,
            invited_by: null,
            go_to_church: null,
            church_i_attend: null,
            hobbies: null,
            how_you_heard: null,
            parents_name: null,
            parents_email: null,
            instagram: null,
            twitter: null,
            snap: null,
            tiktok: null,
            facebook: null,
            todays_date: null,
            prayer_requests: null
          },
        }}
        onSubmit={values => {
          console.log(values);
          postData(`${process.env.REACT_APP_URL}/api/youth`, 'POST', values)
        }}
      >
    <Container component = "main" maxWidth = "xs">
    <div className={classes.paper}>

    <Typography component="h1" variant="h5">
        Youth Registration
    </Typography>

    <Form className = {classes.form}>
      <Grid container spacing = {2}>
        <Grid item xs = {12} sm = {6}> 
          <Field 
            required = {true}
            variant="outlined"
            fullWidth
            as = {TextField}
            autofocus
            label =  "First Name"
            name = "person.first_name"  /> 
          </Grid>
          <Grid item xs = {12} sm = {6}>  
          <Field 
            required = {true}
            variant="outlined"
            fullWidth
            as = {TextField}
            autofocus
            label =  "Last name"
            name = "person.last_name"  />
            </Grid> 
        <Grid item xs = {12}>
        <Field 
          name = "person.birthday"
          autofocus
          variant="outlined"
          fullWidth
          label =  "Birthday"          
          as = {TextField} />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          variant="outlined"
          fullWidth
          autofocus
          label =  "Street Address"
          name="person.address" />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          autofocus
          variant="outlined"
          fullWidth
          label =  "City"
          name="person.city" />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          variant="outlined"
          fullWidth
          autofocus
          label =  "State"
          name="person.state" />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          variant="outlined"
          fullWidth
          autofocus
          label =  "Zipcode"
          name="person.zip" /> 
        </Grid>
        
        <Grid item xs = {12}>
        <Field 
          name="person.cell"
          autofocus
          label =  "Cellphone Number"
          variant="outlined"
          fullWidth
          as = {TextField} /> 
        </Grid>        
        <Grid item xs = {12}>
        <Field 
          name="person.email"
          autofocus
          variant="outlined"
          fullWidth
          label =  "Personal Email"
          as = {TextField} />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          variant="outlined"
          fullWidth
          autofocus
          label =  "Grade"
          name="person.grade" /> 
        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.school"
          variant="outlined"
          fullWidth
          autofocus
          label =  "School"
          as = {TextField}
          /> 
        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.invited_by"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Invited by"
          as = {TextField} /> 
        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.go_to_church"
          variant="outlined"
          fullWidth
          autofocus
          label =  "What Church do you attend"
          as = {TextField} />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.church_i_attend"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Other Church" 
          as = {TextField} /> 
        </Grid>
      <Grid item xs = {12}>
      <Field 
        name="person.how_you_heard"
        variant="outlined"
        fullWidth
        autofocus
        label =  "How did you hear about Elevate Youth Family"
        as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
      <Field 
          name="person.hobbies"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Hobbies"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
      <Field 
          name="person.parents_name"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Parent's Name"
          as = {TextField}
        /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.parents_email"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Parent's Email"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          autofocus
          variant="outlined"
          fullWidth
          label =  "Instagram Username"
          name="person.instagram"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.twitter"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Twitter Username"
          as = {TextField} />
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.snapchat"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Snapchat Username"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.tiktok"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Tiktok Username"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.facebook"
          variant="outlined"
          fullWidth
          autofocus
          label =  "Facebook"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          autofocus
          variant="outlined"
          fullWidth
          label =  "Today's Date"
          name="person.todays_date"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field
          autofocus
          variant="outlined"
          fullWidth
          label =  "Prayer Requests?" 
          name="person.prayer_requests"
          as = {TextField} /> 
        </Grid>
        <Button type="submit">Submit</Button>
    </Grid>
    </Form>
    </div>
    </Container>
    </Formik>
    </>    
  );
}

export default App;
