import React from 'react'

import { GalleryWrapper } from './GalleryStyle';
import { useDispatch } from 'react-redux';
import { linkImg } from './linkImg';
import { setBody } from 'redux/Contacts/contactsReduser';






export const Gallery = () => {

	const dispatch = useDispatch();

	const onHandleClick = (img) => {
		dispatch(setBody(img));
		console.log(img);
	};

	return (
		<GalleryWrapper className='wrapper'>
			<div className='items'>
				{linkImg.map(({ name, link }) => {
					return (
						<div key={name} onClick={() => onHandleClick(name)} className="item" style={{ backgroundImage: `url(${name})` }}></div>
					)
				})}
			</div>
		</GalleryWrapper>
	)
}