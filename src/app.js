const root = document.querySelector("main");

function App() {
  return (
    <>
      <section className="content">
        <div className="activity-contain">
          <input
            type="text"
            id="activity"
            name="activity"
            placeholder="Input your Activity here"
          />
          <input type="date" id="date_act" name="date_act" placeholder="Date" />
          <button type="button" className="add-btn">
            Add Activity
          </button>
        </div>
      </section>
    </>
  );
}

ReactDOM.render(<App />, root);
