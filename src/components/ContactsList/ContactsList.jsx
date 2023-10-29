import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { ContactsListButton, ContactsListContainer, ContactsListName } from './ContactsListStyle';
import { useDispatch, useSelector } from "react-redux";
import { setModalDelete, setModalDeleteData } from 'redux/Contacts/contactsReduser';
import { contactsSelector, filterSelector, isErrorSelector, isLoadingSelector } from 'redux/Contacts/selector';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/error/Error';
import { emojis } from 'constants/Emojis';

export const ContactsList = () => {
	const error = useSelector(isErrorSelector);
	const isLoader = useSelector(isLoadingSelector);
	const contacts = useSelector(contactsSelector);
	const filter = useSelector(filterSelector);

	const dispatch = useDispatch();


	const onOpenModalDelete = (modalDataDelete) => {
		dispatch(setModalDelete(true));
		dispatch(setModalDeleteData(modalDataDelete));
	}

	const getContacts = () => {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};

	const getRandomEmoji = () => {
		return emojis[Math.floor(Math.random() * emojis.length)];
	};
	const filterContacts = getContacts();

	return (
		<ContactsListContainer>
			{isLoader && <Loader />}
			{error && <ErrorMessage message={error} />}
			{filterContacts.map(({ name, number, id, }) => {
				return (
					<ContactsListName key={id}>
						<p><span>{getRandomEmoji()}</span>{name}: {number}</p>
						<div>
							<a href={"tel:" + number}><ContactsListButton><FiPhoneOutgoing /></ContactsListButton></a>
							<ContactsListButton><FiEdit /></ContactsListButton>
							<ContactsListButton onClick={() => onOpenModalDelete(id)}><RiDeleteBin6Line /> </ContactsListButton>
						</div>
					</ContactsListName>
				);
			})
			}
		</ContactsListContainer>
	);
};