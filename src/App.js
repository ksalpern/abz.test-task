import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import './variables.scss'
import axios from "axios";
import Form from "./components/Form/Form";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const addOncklickUsers = (e) => {
    // e.preventDefault()
    const newPage = currentPage + 1
    setCurrentPage(newPage)
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${newPage}&count=6`
      )
      .then((res) => {
        console.log(res.data.users);
        setUsers(prev =>
          [...prev, ...res.data.users]);
      })
  };

  useEffect(() => {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=6`
      )
      .then((res) => {
        console.log(res.data.users);
        console.log(res.data);
        setUsers([...users, ...res.data.users]);

      })

      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner />
      <Users users={users} addOncklickUsers={addOncklickUsers} />
      <Form />
    </div>
  );
}

export default App;
