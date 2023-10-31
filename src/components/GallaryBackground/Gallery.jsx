import React from 'react'

import backgroundImage1 from 'img/1.jpg';
import backgroundImage2 from 'img/10.jpg';
import backgroundImage3 from 'img/16.jpg';
import backgroundImage4 from 'img/22.jpg';
import backgroundImage5 from 'img/1625928437_22-kartinkin-com-p-tekstura-khrushchevki-krasivo-31.jpg';
import backgroundImage6 from 'img/1626124597_52-kartinkin-com-p-teksturi-s-kartami-normalei-krasivo-58.jpg';
import backgroundImage7 from 'img/1626164237_4-kartinkin-com-p-tekstura-dereva-dlya-blendera-krasivo-4.jpg';
import backgroundImage8 from 'img/20.jpg';
import backgroundImage9 from 'img/34.jpg';
import backgroundImage10 from 'img/35.jpg';
import backgroundImage11 from 'img/46.jpg';
import backgroundImage12 from 'img/60.jpg';
import backgroundImage13 from 'img/63.jpg';
import { GalleryWrapper } from './GalleryStyle';
import { useDispatch, useSelector } from 'react-redux';
import { bodySelector } from 'redux/Contacts/selector';
import { setBody } from 'redux/Contacts/contactsReduser';



export const Gallery = () => {

	const dispatch = useDispatch;

	const onHandleClick = (img) => {
		dispatch(setBody(img));
	}

	return (
		<GalleryWrapper className='wrapper'>
			<div className='items'>
				<div onClick={onHandleClick(`url(${backgroundImage2})`)} className="item" style={{ backgroundImage: `url(${backgroundImage2})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage1})`)} className="item" style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage3})`)} className="item" style={{ backgroundImage: `url(${backgroundImage3})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage4})`)} className="item" style={{ backgroundImage: `url(${backgroundImage4})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage5})`)} className="item" style={{ backgroundImage: `url(${backgroundImage5})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage6})`)} className="item" style={{ backgroundImage: `url(${backgroundImage6})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage7})`)} className="item" style={{ backgroundImage: `url(${backgroundImage7})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage8})`)} className="item" style={{ backgroundImage: `url(${backgroundImage8})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage9})`)} className="item" style={{ backgroundImage: `url(${backgroundImage9})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage10})`)} className="item" style={{ backgroundImage: `url(${backgroundImage10})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage11})`)} className="item" style={{ backgroundImage: `url(${backgroundImage11})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage12})`)} className="item" style={{ backgroundImage: `url(${backgroundImage12})` }}></div>
				<div onClick={onHandleClick(`url(${backgroundImage13})`)} className="item" style={{ backgroundImage: `url(${backgroundImage13})` }}></div>
			</div>
		</GalleryWrapper>
	)
}