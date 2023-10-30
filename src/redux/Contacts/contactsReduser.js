
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";

const { LightTheme } = require("constants/DarkMode");


const INITIAL_STATE = {
	contacts: {
		items: [],
		isLoading: false,
		error: null,
	},
	filter: '',
	modal: false,
	modalData: null,
	modalDelete: false,
	modalDeleteData: null,
	themes: LightTheme,
	onEdit: false,

}


const handlePending = state => {
	state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
	state.contacts.isLoading = false;
	state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: INITIAL_STATE,

	reducers: {
		setFilter(state, action) {
			state.filter = action.payload;
		},
		setModal(state, action) {
			state.modal = action.payload;
		},
		setModalData(state, action) {
			state.modalData = action.payload;
		},
		setModalDelete(state, action) {
			state.modalDelete = action.payload;
		},
		setModalDeleteData(state, action) {
			state.modalDeleteData = action.payload;
		},
		setTheme(state, action) {
			state.themes = action.payload;
		},
		setOnEdit(state, action) {
			state.onEdit = action.payload
		}
	},

	extraReducers: {
		[fetchContacts.pending]: handlePending,
		[fetchContacts.fulfilled](state, action) {
			state.contacts.isLoading = false;
			state.contacts.error = null;
			state.contacts.items = action.payload;
		},
		[fetchContacts.rejected]: handleRejected,
		[addContact.pending]: handlePending,
		[addContact.fulfilled](state, action) {
			state.contacts.isLoading = false;
			state.contacts.error = null;
			state.contacts.items.push(action.payload);
		},
		[addContact.rejected]: handleRejected,
		[deleteContact.pending]: handlePending,
		[deleteContact.fulfilled](state, action) {
			state.contacts.isLoading = false;
			state.contacts.error = null;
			const index = state.contacts.items.findIndex(item => item.id === action.payload.id);
			state.contacts.items.splice(index, 1);

		},
		[updateContact.rejected]: handleRejected,
		[updateContact.pending]: handlePending,
		[updateContact.fulfilled](state, action) {
			state.contacts.isLoading = false;
			state.contacts.error = null;
			const index = state.contacts.items.findIndex(item => item.id === action.payload.id);
			state.contacts.items.splice(index, 1);

		},
		[updateContact.rejected]: handleRejected,
	}
})
export const { setContacts, setDeleteContacts, setFilter, setModal, setModalData, setModalDelete, setModalDeleteData, setTheme, setOnEdit } =
	contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;



