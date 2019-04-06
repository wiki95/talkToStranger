import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
	appbar: {
		backgroundColor: "rgba(0,0,0,0.6)"
	},
	logo: {
		fontWeight: "bolder",
		fontVariantCaps: "small-caps",
		cursor: "pointer"
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between"
	}
};

class Appbar extends React.Component {
	render() {
		return (
			<AppBar position="fixed" style={styles.appbar}>
				<Toolbar style={styles.toolbar}>
					<Typography style={styles.logo} variant="h6" color="inherit">
						Talk To Random
					</Typography>
					{this.props.history.location.pathname === "/landing" && (
						<Button color="inherit">Logout</Button>
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

Appbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Appbar);
