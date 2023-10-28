
import { GoSun } from 'react-icons/go';
import { HiMoon } from 'react-icons/hi';
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { ConteinerApp, ContentApp, TitleApp, ToogleDarkMode } from "./AppStyle";
import { Modal } from "./Modal/Modal";
import { ModalDelete } from "./ModalDelete/ModalDelete";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "constants/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "redux/Contacts/contactsReduser";
import { modalDeleteSelector, modalSelector, themesSelector } from 'redux/Contacts/selector';
import { fetchContacts } from 'redux/Contacts/operations';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Loyout/Loyout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Registr'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {

  // const modal = useSelector(modalSelector);
  // const modalDelete = useSelector(modalDeleteSelector);
  //const themes = useSelector(themesSelector);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const changeTheme = () => {
  //   if (themes === LightTheme) {
  //     dispatch(setTheme(DarkTheme));
  //     return;
  //   }
  //   if (themes !== LightTheme) {
  //     dispatch(setTheme(LightTheme));
  //     return;
  //   }
  // };

  // const icon = themes === LightTheme ?
  //   <HiMoon size={30} /> :
  //   <GoSun size={30} />;

  return (
    // <ThemeProvider theme={{ themes }} >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
    /* <ConteinerApp>
      <ContentApp>
        <TitleApp title="Phonebook">Phonebook</TitleApp>
        <ContactsForm />
        <TitleApp>Contacts</TitleApp>
        <Filter />
        <ContactsList />
        <ToogleDarkMode onClick={changeTheme}>{icon}</ToogleDarkMode>

        {modal && <Modal />}

        {modalDelete && <ModalDelete />}
      </ContentApp>
    </ConteinerApp> */
    // </ThemeProvider>
  );

};
