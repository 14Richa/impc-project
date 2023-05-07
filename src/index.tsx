import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import { ChakraProvider, extendTheme as chakraExtendTheme} from '@chakra-ui/react';
import {
	ThemeProvider as MaterialThemeProvider,
	createTheme as muiCreateTheme,
	THEME_ID,
  } from '@mui/material/styles';

import theme from './theme/theme';

const materialTheme = muiCreateTheme();

ReactDOM.render(
	<ChakraProvider theme={theme} resetCSS>
		<MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
		<React.StrictMode>
			<HashRouter>
				<Switch>
					<Route path={`/admin`} component={AdminLayout} />
					<Redirect from='/' to='/admin' />
				</Switch>
			</HashRouter>
		</React.StrictMode>
		</MaterialThemeProvider>

	</ChakraProvider>,
	document.getElementById('root')
);
