import { useEffect, useState } from "react";
import User from "./components/User";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setUsers(data[page]);
    // eslint-disable-next-line
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <section className="users">
          <h1 className="header">Pagination</h1>
          <div className="container">
            {users.map((user) => {
              return (
                <User
                  key={user.id}
                  avatar_url={user.avatar_url}
                  html_url={user.html_url}
                  login={user.login}
                />
              );
            })}
          </div>

          {!loading && (
            <div className="btn-container">
              <button className="btn" onClick={prevPage}>
                prev
              </button>

              {data.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={`btn ${index === page ? "active-btn" : null}`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}

              <button className="btn" onClick={nextPage}>
                next
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
