import "./App.css";
import useDarkMode from "use-dark-mode";
import Main from "./Main";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Azkar from "./Azkar";

import React, { useEffect, useState } from "react";
import { getAllAzkar } from "./azkarJson/azkar";
import { useHistory } from "react-router-dom";
import Done from "./components/Done";
import { getAzkarGroupList } from "./azkarJson/azkargroup";

function App() {
  const { value, enable, disable } = useDarkMode();
  // const [AllData, setAllData] = useState([])
  const [categories, setCategories] = useState([]);
  const [allAzkar, setAllAzkar] = useState([]);
  const [seletedAzkar, setSeletedAzkar] = useState([]);
  const [seletedCategory, setSelectedCategory] = useState("");

  const history = useHistory();

  useEffect(() => {
    const cloneAzkar = getAllAzkar();
    const cloneCategory = getAzkarGroupList();

    // const cloneAzkar = cloneCategory.filter(a => a.category.startsWith("أذكار"))
    // cloneCategory.map(c => (cloneCategory.includes(c.category)) ? "in already": cloneCategory.push(c.category))
    setCategories(cloneCategory);
    setAllAzkar(cloneAzkar);
  }, []);

  const handleClick = (e) => {
    history.push("/azkars/" + e.groupAzkarEn);
    const cloneAzkar = allAzkar.filter((a) => a.groupId === e.id);
    setSeletedAzkar(cloneAzkar);
    setSelectedCategory(e);
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/azkars/:azkar">
          <Azkar
            allAzkar={seletedAzkar}
            enableDarkMode={enable}
            disableDarkMode={disable}
            isDarkMode={value}
            history={history}
            seletedCategory={seletedCategory}
          />
        </Route>
        <Route path="/not-found" component={NotFound} />
        <Route path="/done" component={Done} />
        <Route path="/" exact>
          <Main onClick={handleClick} categories={categories} />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
