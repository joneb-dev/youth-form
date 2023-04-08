import React from 'react';
import PropTypes from 'prop-types';

import {
	Typography,
	Card,
	CardActionArea,
	withStyles,
} from '@material-ui/core';
import './index.css';

// from https://stackoverflow.com/questions/53104528/make-card-or-paper-not-take-up-full-width-material-ui

const styles = {
	cardAction: {
		marginTop: 20,
		marginBottom: 20,
		minHeight: 150,
	},
	card: {
		minHeight: 150,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginTop: 20,
		textAlign: 'center',
	},
};

function BasicCard(props) {
	const { classes } = props;

	return (
		<CardActionArea className={classes.cardAction}>
			<Card className={classes.card}>
				<Typography variant="h5" component="h2" className={classes.pos}>
					{props.name}
				</Typography>
			</Card>
		</CardActionArea>
	);
}

BasicCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicCard);
