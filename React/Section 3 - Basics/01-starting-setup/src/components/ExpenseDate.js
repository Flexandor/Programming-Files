import "./ExpenseDate.css";

function ExpenseDate(props) {
  //Could do this with object destructuring e.g. function ExpenseItem({title, amount, date})

  const month = props.date.toLocaleString("en-UK", { month: "long" });
  const day = props.date.toLocaleString("en-UK", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
