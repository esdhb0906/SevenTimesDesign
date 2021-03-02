import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../assets/7TD-logo.png'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logoIcon: {
		flexGrow: 1,
		justifyContent: 'start',
	},
	logo: {
		width: '100px',
		height: 'auto',
	},
	menuButton: {
		color: '#ccdbe5'
	}
}));

function Header() {
	const classes = useStyles();

	return (
		<header className={classes.root}>
			<AppBar color="transparent">
				<Toolbar>
					<IconButton edge="start" className={classes.logoIcon}>
						<img src={logo} alt="Seven Times Design" className={classes.logo} />
					</IconButton>
					<IconButton edge="end" className={classes.menuButton} aria-label="Navigation Menu">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</header>
	)
}

export default Header


