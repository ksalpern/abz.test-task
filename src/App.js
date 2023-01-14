import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import './variables.scss'
import axios from "axios";
import Form from "./components/Form/Form";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
      .then((res) => {
        console.log(res.data.users);
        setUsers([...users, ...res.data.users]);
      })

    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(() => setFetching(false));
    // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
    //   .then(function (response) {
    //     return response.json();
    //   }).then(function (data) {
    //     console.log(data);
    //     if (data.success) {
    //       // process success response 
    //     } else {
    //       // proccess server errors 
    //     }
    //   })
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner />
      <Users users={users} />
      <Form />
    </div>
  );
}

export default App;
