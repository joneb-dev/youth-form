import React, {useState} from "react";
import { Formik, Form, Field } from "formik";
import "../../util/custom_fields";
import { postData } from "../../util/http_helper";
import {
  Typography,
  Button,
  Container,
  TextField,
  makeStyles,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

// TODO: Export this out into its own file
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px grey",
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
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  p: {
    margin: theme.spacing(4),
  },
  submit: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: "grey",
  },
}));

export default function ChildrensRegistration() {
  let history = useHistory();
  const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          person: {
            first_name: null,
            last_name: null,
            birthday: null,
            street: null,
            city: null,
            state: null,
            zip: null,
            cell: null,
            email: null,
            grade: null,
            school: null,
            children_how_you_heard: null,
            health: null,
          },
        }}
        onSubmit={async (values) => {
          setSubmitting(true)
          await postData(`${process.env.REACT_APP_URL}/children`, values);
          console.log("sucess");
          history.push("/sucess");
        }}
      >
        <Container component="main" maxWidth="md">
          <div className={classes.paper}>
            <Form className={classes.form}>
              <Typography component="h1" variant="h3">
                LCF Kids Church Registration
              </Typography>
              <p>
                Welcome to LCF Kids! We hope your child has a great
                time. Please fill out this form so we can get your child
                registered for children's church.
              </p>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                      required={true}
                      variant="outlined"
                      fullWidth
                      as={TextField}
                      label="First Name"
                      name="person.first_name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    required={true}
                    variant="outlined"
                    fullWidth
                    as={TextField}
                    label="Last Name"
                    name="person.last_name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required={true}
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Street Address"
                    name="person.street"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required={true}
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="City"
                    name="person.city"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required={true}
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Zipcode"
                    name="person.zip"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="person.parent_name"
                    label="Parent's Name"
                    variant="outlined"
                    fullWidth
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="person.cell"
                    label="Parent's Phone Number"
                    variant="outlined"
                    fullWidth
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="person.email"
                    variant="outlined"
                    fullWidth
                    label="Parent's Email"
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="person.children_school"
                    variant="outlined"
                    fullWidth
                    label="School Child Attends"
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="how-you-heard">
                    How did you hear about LCF Children's church?
                  </InputLabel>
                  <Field
                    name="person.children_how_you_heard"
                    variant="outlined"
                    fullWidth
                    as={Select}
                    labelId="how-you-heard"
                  >
                    <MenuItem value={"Friend"} name="person.how_you_heard">
                      Friend
                    </MenuItem>
                    <MenuItem value={"Church"} name="person.how_you_heard">
                      Church
                    </MenuItem>
                    <MenuItem value={"Online"} name="person.how_you_heard">
                      Online
                    </MenuItem>
                    <MenuItem value={"Parent"} name="person.how_you_heard">
                      Other
                    </MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="person.children_health"
                    variant="outlined"
                    fullWidth
                    label="Any health conditions/allergies we need to know about?"
                    as={TextField}
                  />
                </Grid>
              </Grid>
              <Button 
                type="submit"
                disabled={submitting}
              >Submit</Button>
            </Form>
          </div>
        </Container>
      </Formik>
    </>
  );
}
