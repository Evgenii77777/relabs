import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header";
import { PaginatedItems } from "../../components/pagination";
import { getUsers } from "../../redux/thunk/async/get-users";
import { deleteUser } from "../../redux/thunk/reducers/get-users";
import { EventsTable } from "../../components/table/events-table";
import { Loader } from "../../components/loader";

import styles from "./main-page.module.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.loading);
  const [messages, setMessages] = useState([]);
  const ws = new WebSocket("wss://test.relabs.ru/event");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    ws.addEventListener("message", (e) => {
      setMessages((prevMessages) => [...prevMessages, JSON.parse(e.data)]);
    });
  }, [ws]);

  const onDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (isLoading) return <Loader />;

  return (
    <section>
      <Header />
      <main className={styles.main}>
        <PaginatedItems itemsPerPage={5} users={users} onDelete={onDelete} />
        <EventsTable messages={messages} />
      </main>
    </section>
  );
};
