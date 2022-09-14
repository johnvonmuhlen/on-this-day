import Body from "./components/Body";
import Data from "./components/Data";
import Footer from "./components/Footer";

var objToday = new Date(),
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()];

var today = `${curMonth} ${dayOfMonth}`;

const App = () => {
  return (
    <div>
      <div className="main">
        <Body today={today} />
      </div>
      <div>
        <Data today={today} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
