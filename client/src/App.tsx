import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import RequireAuth from './common/components/RequireAuth';

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Routes>
				{routes.map((route, index) => {
					if (route.protected) {
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<RequireAuth>
										<route.component props={route.props} />
									</RequireAuth>
								}
							/>
						);
					} else {
						return (
							<Route
								key={index}
								path={route.path}
								element={<route.component props={route.props} />}
							/>
						);
					}
				})}
			</Routes>
		</Router>
	);
};

export default App;
