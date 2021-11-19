import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/components/Header';
import routes from './config/routes';
import protectedRoutes from './config/protectedRoutes';
import ProtectedRoute from './common/components/ProtectedRoute';

const App: React.FunctionComponent<{}> = (props) => {
	return (
		<Router>
			<Header />
			<Routes>
				{routes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<route.component props={route.props} />}
						/>
					);
				})}
				{protectedRoutes.map((route, index) => {
					return (
						<ProtectedRoute
							key={index}
							path={route.path}
							element={<route.component props={route.props} />}
						/>
					);
				})}
			</Routes>
		</Router>
	);
};

export default App;
