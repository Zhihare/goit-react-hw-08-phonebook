
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { LuSave } from 'react-icons/lu';
import { MdOutlineCancel } from 'react-icons/md';
import { ContactListEditForm, ContactListEditInput, ContactListEditLabel, ContactsListButton, ContactsListContainer, ContactsListName } from './ContactsListStyle';
import { useDispatch, useSelector } from "react-redux";
import { setEditId, setEditName, setEditNumber, setModalDelete, setModalDeleteData, setOnEdit } from 'redux/Contacts/contactsReduser';
import { contactsSelector, filterSelector, idEditSelector, isErrorSelector, isLoadingSelector, nameEditSelector, numberEditSelector, onEditSelector } from 'redux/Contacts/selector';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/error/Error';
import { emojis } from 'constants/Emojis';
import { addContact, deleteContact } from 'redux/Contacts/operations';

export const ContactsList = () => {
	const error = useSelector(isErrorSelector);
	const isLoader = useSelector(isLoadingSelector);
	const contacts = useSelector(contactsSelector);
	const filter = useSelector(filterSelector);
	const onEditActive = useSelector(onEditSelector);
	const editName = useSelector(nameEditSelector);
	const editNumber = useSelector(numberEditSelector);
	const editId = useSelector(idEditSelector);

	const dispatch = useDispatch();

	const onOpenModalDelete = (modalDataDelete) => {
		dispatch(setModalDelete(true));
		dispatch(setModalDeleteData(modalDataDelete));
	}


	const handleAddContact = (name, number) => {

		// if (contacts.some(contact => contact.name === editName)) {
		// 	toast.error(` A contact has already been created for this name: ${editName}`, {
		// 		position: "top-left",
		// 		autoClose: 3000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 		theme: "dark",
		// 	});
		// 	return;
		// }
		// if (contacts.some(contact => contact.number === editNumber)) {
		// 	toast.error(` A contact has already been created for this number: ${editNumber}`, {
		// 		position: "top-left",
		// 		autoClose: 3000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 		theme: "dark",
		// 	});
		// 	return;
		// }

		const newContact = {
			name,
			number,
		};
		dispatch(addContact(newContact));
	};


	const onHandleClickSubmit = () => {
		dispatch(deleteContact(editId));
		handleAddContact(editName, editNumber);
		dispatch(setOnEdit(false));
		dispatch(setEditName(''))
		dispatch(setEditNumber(''));
		dispatch(setEditId(''));

	};

	const handleNameChenge = event => {
		dispatch(setEditName(event.target.value));
	}

	const handleNumberChenge = event => {
		dispatch(setEditNumber(event.target.value));
	}

	const onClickEdit = (id, name, number) => {
		dispatch(setOnEdit(true));
		dispatch(setEditName(name))
		dispatch(setEditNumber(number));
		dispatch(setEditId(id));
	}

	const CloseEdit = () => {
		dispatch(setOnEdit(false));
		dispatch(setEditName(''))
		dispatch(setEditNumber(''));
		dispatch(setEditId(''));
	}


	const getContacts = () => {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};

	const getRandomEmoji = (searchName) => {
		const index = contacts.findIndex(el => el.name === searchName);
		return emojis[Math.floor((index + 1) * searchName.length + 50)];
	};

	const filterContacts = getContacts();

	return (
		<ContactsListContainer>
			{isLoader && <Loader />}
			{error && <ErrorMessage message={error} />}
			{filterContacts.map(({ name, number, id, }) => {
				return (
					<ContactsListName key={id}>
						{onEditActive && id === editId ?
							<ContactListEditForm onSubmit={onHandleClickSubmit}>
								<ContactListEditLabel>
									<ContactListEditInput onChange={handleNameChenge} value={editName} type="text" name="name" required maxLength={11} />
								</ContactListEditLabel>
								<ContactListEditLabel>
									<ContactListEditInput onChange={handleNumberChenge} value={editNumber} type="tel" name="number" required maxLength={11} />
								</ContactListEditLabel>
								<div>
									<ContactsListButton type="submit"><LuSave size={18} /> </ContactsListButton>
									<ContactsListButton onClick={CloseEdit}><MdOutlineCancel size={18} /> </ContactsListButton>
								</div>
							</ContactListEditForm> :
							<>
								<p><span>{getRandomEmoji(name)}</span>{name}: {number}</p>
								<div>
									<a href={"tel:" + number}><ContactsListButton><FiPhoneOutgoing /></ContactsListButton></a>
									<ContactsListButton onClick={() => onClickEdit(id, name, number)}><FiEdit /></ContactsListButton>
									<ContactsListButton onClick={() => onOpenModalDelete(id)}><RiDeleteBin6Line /> </ContactsListButton>
								</div>
							</>
						}
					</ContactsListName>
				);
			})
			}
		</ContactsListContainer>
	);
};