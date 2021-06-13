import Paper from "@material-ui/core/Paper";
import "./Main.css";

function Main({ categories, onClick }) {
  return (
    <div className="main">
      {categories.map((m) => (
        <Paper key={m.id} className="main__card" onClick={() => onClick(m)}>
          <h2 className="main__card--textAr">{m.groupAzkarAr}</h2>
          <h4 className="main__card--textEn">{m.groupAzkarEn}</h4>
        </Paper>
      ))}
    </div>
  );
}

export default Main;
