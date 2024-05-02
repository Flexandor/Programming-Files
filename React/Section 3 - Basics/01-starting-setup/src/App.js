import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2023, 2, 28) },
    { id: "e2", title: "Toilet Paper", amount: 28.21, date: new Date(2023, 3, 10) },
    { id: "e3", title: "Food", amount: 75.63, date: new Date(2023, 3, 15) },
    { id: "e4", title: "Holiday", amount: 175.81, date: new Date(2023, 2, 12) },
  ];

  return (
    <div>
      <h2>Let's get physical!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
