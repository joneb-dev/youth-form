import React from 'react';
import { Formik, Form, Field} from 'formik';
import '../../util/custom_fields'
import {postData} from '../../util/http_helper' 
import {Typography, 
  Button,
  Container, 
  TextField, 
  makeStyles, 
  Grid, 
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // maxWidth: "75%"
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px grey'
  },
  header: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '75%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  p: {
    margin: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))

export default function YouthRegistration(){
  let history = useHistory();
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
            go_to_church: '',
            church_i_attend: '',
            hobbies: null,
            how_you_heard: '',
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
          // postData(`${process.env.REACT_APP_URL}/youth`, values)
          console.log('sucess')
          alert('welcome to youth!')
          history.push('/sucess')
        }}
      >
    <Container component = "main" maxWidth = "md">
    <div className={classes.paper}>

    <Form className = {classes.form}>
      <Typography component="h1" variant="h3">
          Youth Registration
      </Typography>
      <p>
        Hey, Thanks for coming out to Elevate Youth! 
        We're excited to have you. 
        Please fill out this form so we can get you signed in, 
        and you'll get a voucher for a free snack afterward. 
        We hope you have an awesome time.
      </p>
      <Grid container spacing = {2}>
        <Grid item xs = {12} sm = {6}> 
          <Field 
            required = {true}
            variant="outlined"
            fullWidth
            as = {TextField}
            autoFocus
            label =  "First Name"
            name = "person.first_name"  /> 
        </Grid>
          <Grid item xs = {12} sm = {6}>  
          <Field 
            required = {true}
            variant="outlined"
            fullWidth
            as = {TextField}
            label =  "Last Name"
            name = "person.last_name"  />
          </Grid> 
        <Grid item xs = {12}>
        <Field 
          name = "person.birthday"
          variant="outlined"
          type="date"
          fullWidth
          label =  "Birthday"   
          InputLabelProps={{
            shrink: true,
          }}             
          as = {TextField} />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          variant="outlined"
          fullWidth
          label =  "Street Address"
          name="person.street" />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
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
          label =  "State"
          name="person.state" />
        </Grid>
        <Grid item xs = {12}>
        <Field 
          required = {true}
          as = {TextField}
          variant="outlined"
          fullWidth
          label =  "Zipcode"
          name="person.zip" /> 
        </Grid>
        
        <Grid item xs = {12}>
        <Field 
          name="person.cell"
          label =  "Cellphone Number"
          variant="outlined"
          fullWidth
          as = {TextField} /> 
        </Grid>        
        <Grid item xs = {12}>
        <Field 
          name="person.email"
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
          label =  "Grade"
          name="person.grade" /> 
        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.school"
          variant="outlined"
          fullWidth
          label =  "School"
          as = {TextField}
          /> 
        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.invited_by"
          variant="outlined"
          fullWidth
          label =  "Invited by"
          as = {TextField} /> 
        </Grid>
        <Grid item xs = {12}>
        <InputLabel htmlFor="grouped-native-select">
          What Church do you attend?
        </InputLabel>
        <Field 
          name="person.go_to_church"
          variant="outlined"
          fullWidth
          as = {Select}
          labelId =  "What Church do you attend?"
        >
          <MenuItem value = {'Lighthouse Christian Fellowship'}  name="person.go_to_church">Lighthouse Christian Fellowship</MenuItem>
          <MenuItem as = {MenuItem} value = {"Don't attend chuch"}  name="person.go_to_church">Don't attend chuch</MenuItem>
          <MenuItem as = {MenuItem} value = {"Other"} name="person.go_to_church">Other</MenuItem>
        </Field>

        </Grid>
        <Grid item xs = {12}>
        <Field 
          name="person.church_i_attend"
          variant="outlined"
          fullWidth
          label =  "If you attend another church, what is that church?" 
          as = {TextField} /> 
        </Grid>
      <Grid item xs = {12}>
      <InputLabel id = "how-you-heard">How did you hear about Elevate Youth Family?</InputLabel>
      <Field
        name="person.how_you_heard"
        variant="outlined"
        fullWidth
        as = {Select}
        labelId =  "how-you-heard"
      >
          <MenuItem value = {'Friend'} name="person.how_you_heard">Friend</MenuItem>
          <MenuItem value = {"Parent"} name="person.how_you_heard">Parent</MenuItem>
          <MenuItem value = {"Church"} name="person.how_you_heard">Church</MenuItem>
          <MenuItem value = {"Online"} name="person.how_you_heard">Online</MenuItem>
      </Field>  
      </Grid>
      <Grid item xs = {12}>
      <Field 
          name="person.hobbies"
          variant="outlined"
          fullWidth
          label =  "Hobbies"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
      <Field 
          name="person.parents_name"
          variant="outlined"
          fullWidth
          label =  "Parent's Name"
          as = {TextField}
        /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.parents_email"
          variant="outlined"
          fullWidth
          label =  "Parent's Email"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
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
          label =  "Twitter Username"
          as = {TextField} />
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.snapchat"
          variant="outlined"
          fullWidth
          label =  "Snapchat Username"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.tiktok"
          variant="outlined"
          fullWidth
          label =  "Tiktok Username"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          name="person.facebook"
          variant="outlined"
          fullWidth
          label =  "Facebook Username"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field 
          variant="outlined"
          fullWidth
          required
          label =  "Today's Date"
          type = "date"
          InputLabelProps={{
            shrink: true,
          }}      
          name="person.todays_date"
          as = {TextField} /> 
      </Grid>
      <Grid item xs = {12}>
        <Field
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
  )  
}