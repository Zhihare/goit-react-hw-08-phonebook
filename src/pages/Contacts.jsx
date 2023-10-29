
import { GoSun } from 'react-icons/go';
import { HiMoon } from 'react-icons/hi';
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { ConteinerApp, ContentApp, TitleApp, ToogleDarkMode } from "../components/AppStyle";

import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "constants/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "redux/Contacts/contactsReduser";
import { modalDeleteSelector, modalSelector, themesSelector } from 'redux/Contacts/selector';
import { fetchContacts } from 'redux/Contacts/operations';
import { useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ModalDelete } from 'components/ModalDelete/ModalDelete';


export default function Contacts() {

	const modal = useSelector(modalSelector);
	const modalDelete = useSelector(modalDeleteSelector);
	const themes = useSelector(themesSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	// const changeTheme = () => {
	// 	if (themes === LightTheme) {
	// 		dispatch(setTheme(DarkTheme));
	// 		return;
	// 	}
	// 	if (themes !== LightTheme) {
	// 		dispatch(setTheme(LightTheme));
	// 		return;
	// 	}
	// };

	// const icon = themes === LightTheme ?
	// 	<HiMoon size={30} /> :
	// 	<GoSun size={30} />;

	return (
		// <ThemeProvider theme={{ themes }} >
		<ConteinerApp>
			<ContentApp>
				<TitleApp title="Phonebook">Phonebook</TitleApp>
				<ContactsForm />
				<TitleApp>Contacts</TitleApp>
				<Filter />
				<ContactsList />


				{modal && <Modal />}
				{modalDelete && <ModalDelete />}
			</ContentApp>
		</ConteinerApp>
		// </ThemeProvider >
	);

};
