import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/appBar';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
	return (
		<div>
			<AppBar />
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	);
};