import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
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
			{/* <Toaster position="top-right" reverseOrder={false} /> */}
		</div>
	);
};