import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import '../../util/custom_fields';
import { postData } from '../../util/http_helper';
import {
	Typography,
	Button,
	Container,
	TextField,
	makeStyles,
	Grid,
	InputLabel,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// TODO: Export this out into its own file
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'white',
		boxShadow: '1px 1px 5px grey',
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
		marginBottom: theme.spacing(4),
	},
	p: {
		margin: theme.spacing(4),
	},
	submit: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
}));

export default function ChurchRegistration() {
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
						street: null,
						city: null,
						state: null,
						zip: null,
						cell: null,
						email: null,
						how_you_heard: null,
						prayer_requests: null,
						like_to_know_about: null,
						todays_date: null,
					},
				}}
				onSubmit={async (values) => {
					setSubmitting(true);
					await postData(`${process.env.REACT_APP_URL}/church`, values);
					console.log('sucess');
					history.push('/sucess');
				}}
			>
				<Container component="main" maxWidth="md">
					<div className={classes.paper}>
						<Form className={classes.form}>
							<Typography className="header" component="h1" variant="h3">
								Church Registration
							</Typography>
							<p>
								{/* using backticks for unescaped entities bc of apostrophe */}
								{`Thank you so much for joining us at Lighthouse Christian
								Fellowship! To enable us to thank you for coming and to connect
								with you better, please fill out as much of this form as you are
								comfortable with. We hope that you hear Jesus calling you as we
								gather today. God bless!`}
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
										name="person.cell"
										label="Cellphone Number"
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
										label="Email"
										as={TextField}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										variant="outlined"
										fullWidth
										required
										label="Today's Date"
										type="date"
										InputLabelProps={{
											shrink: true,
										}}
										name="person.todays_date"
										as={TextField}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										variant="outlined"
										fullWidth
										label="Prayer Requests?"
										name="person.prayer_requests"
										as={TextField}
									/>
								</Grid>
								<Grid item xs={12}>
									<div> What are you interested in? </div>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="The Christian Faith"
										/>
										The Christian Faith
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Being Baptized"
										/>
										Being Baptized
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Becoming a Member"
										/>
										Becoming a Member
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Sunday School Classes"
										/>
										Sunday School Classes
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Small Groups"
										/>
										Small Groups
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Youth"
										/>
										Youth
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Boys Clubs"
										/>
										Boys Clubs
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Girls Clubs"
										/>
										Girls Clubs
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Women's and Men's Groups"
										/>
										{/* using backticks for unescaped entities bc of apostrophe */}
										{`Women's and Men's Groups`}
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Sound Room"
										/>
										Sound Room
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Children's Church"
										/>
										{/* using backticks for unescaped entities bc of apostrophe */}
										{`Children's Church`}
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Hospitality (Greeters)"
										/>
										Hospitality (Greeters)
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Food Pantry"
										/>
										Food Pantry
									</InputLabel>
									<InputLabel>
										<Field
											type="checkbox"
											name="person.like_to_know_about"
											value="Young Adults"
										/>
										Young Adults
									</InputLabel>
								</Grid>
							</Grid>
							<Button type="submit" disabled={submitting}>
								Submit
							</Button>
						</Form>
					</div>
				</Container>
			</Formik>
		</>
	);
}
