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
      date
    };
    setTodo([...todo, data]);
    setActivity("");
    setActivity2("");
    setActivity3("");
    setActivity4("");
    setActivity5("");
  }

  React.useEffect(() => console.log(todo), [todo]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h1", null, "To Do List"), /*#__PURE__*/React.createElement("form", {
    className: "activity-contain",
    onSubmit: addData
  }, /*#__PURE__*/React.createElement("div", {
    className: "inputActivity-contain"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "activity",
    name: "activity",
    placeholder: "Input your Activity here",
    onChange: ev => setActivity(ev.target.value),
    value: activity,
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "activity",
    name: "activity",
    placeholder: "Input your Activity here",
    onChange: ev => setActivity2(ev.target.value),
    value: activity2
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "activity",
    name: "activity",
    placeholder: "Input your Activity here",
    onChange: ev => setActivity3(ev.target.value),
    value: activity3
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "activity",
    name: "activity",
    placeholder: "Input your Activity here",
    onChange: ev => setActivity4(ev.target.value),
    value: activity4
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "activity",
    name: "activity",
    placeholder: "Input your Activity here",
    onChange: ev => setActivity5(ev.target.value),
    value: activity5
  })), /*#__PURE__*/React.createElement("p", null, "Date Activity : "), /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "date_act",
    name: "date_act",
    value: date,
    onChange: ev => setDate(ev.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "add-btn"
  }, "Add Activity")), /*#__PURE__*/React.createElement("div", {
    className: "sortContainer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "recentlySort",
    onClick: sortByDate
  }, "Sort By Date")), /*#__PURE__*/React.createElement("ul", null, todo.map((data, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("p", {
    className: "date_act"
  }, data.date), /*#__PURE__*/React.createElement("p", {
    className: "activity"
  }, data.activity), /*#__PURE__*/React.createElement("p", {
    className: "activity"
  }, data.activity2), /*#__PURE__*/React.createElement("p", {
    className: "activity"
  }, data.activity3), /*#__PURE__*/React.createElement("p", {
    className: "activity"
  }, data.activity4), /*#__PURE__*/React.createElement("p", {
    className: "activity"
  }, data.activity5), /*#__PURE__*/React.createElement("button", {
    className: "delete",
    onClick: () => {
      deleteData(i);
    }
  }, "Delete"))))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);