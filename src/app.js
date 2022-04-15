const root = document.querySelector("main");

function App() {
  const [activity, setActivity] = React.useState("");
  const [activity2, setActivity2] = React.useState("");
  const [activity3, setActivity3] = React.useState("");
  const [activity4, setActivity4] = React.useState("");
  const [activity5, setActivity5] = React.useState("");

  const [date, setDate] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  function deleteData(index) {
    const dataAfterFilter = todo.filter((data, i) => {
      return i != index;
    });
    setTodo(dataAfterFilter);
  }

  function sortByDate() {
    const sortedData = [...todo].sort((a, b) => {
      return a.date_added - b.date_added;
    });

    setTodo(sortedData);
  }

  function addData(event) {
    event.preventDefault();

    let data = {
      date_added: Date.parse(date),
      activity,
      activity2,
      activity3,
      activity4,
      activity5,
      date,
    };

    setTodo([...todo, data]);
    setActivity("");
    setActivity2("");
    setActivity3("");
    setActivity4("");
    setActivity5("");
  }
  React.useEffect(() => console.log(todo), [todo]);

  return (
    <>
      <section className="content">
        <h1>To Do List</h1>
        <form className="activity-contain" onSubmit={addData}>
          <div className="inputActivity-contain">
            <input
              type="text"
              id="activity"
              name="activity"
              placeholder="Input your Activity here"
              onChange={(ev) => setActivity(ev.target.value)}
              value={activity}
              required
            />
            <input
              type="text"
              id="activity"
              name="activity"
              placeholder="Input your Activity here"
              onChange={(ev) => setActivity2(ev.target.value)}
              value={activity2}
            />
            <input
              type="text"
              id="activity"
              name="activity"
              placeholder="Input your Activity here"
              onChange={(ev) => setActivity3(ev.target.value)}
              value={activity3}
            />
            <input
              type="text"
              id="activity"
              name="activity"
              placeholder="Input your Activity here"
              onChange={(ev) => setActivity4(ev.target.value)}
              value={activity4}
            />
            <input
              type="text"
              id="activity"
              name="activity"
              placeholder="Input your Activity here"
              onChange={(ev) => setActivity5(ev.target.value)}
              value={activity5}
            />
          </div>

          <p>Date Activity : </p>
          <input
            type="date"
            id="date_act"
            name="date_act"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
            required
          />
          <button type="submit" className="add-btn">
            Add Activity
          </button>
        </form>
        <div className="sortContainer">
          <button type="button" className="recentlySort" onClick={sortByDate}>
            Sort By Date
          </button>
        </div>
        <ul>
          {todo.map((data, i) => (
            <li key={i}>
              <p className="date_act">{data.date}</p>
              <p className="activity">{data.activity}</p>
              <p className="activity">{data.activity2}</p>
              <p className="activity">{data.activity3}</p>
              <p className="activity">{data.activity4}</p>
              <p className="activity">{data.activity5}</p>
              <button
                className="delete"
                onClick={() => {
                  deleteData(i);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

ReactDOM.render(<App />, root);
