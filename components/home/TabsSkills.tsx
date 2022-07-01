import { useState, SyntheticEvent } from "react";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import SwipeableViews from "react-swipeable-views";

const languages = ["TypeScript", "JavaScript", "Css", "Sass", "Html", "Git"];
const frameworks = ["NextJs", "ReactJs", "Vue", "NuxtJs", "TailwindCss", "Bootstrap"];
const librariesComponents = ["Material UI", "React Bootstrap", "PrimeReact", "PrimeReact", "Buefy"];
const librariesUtilities = ["RecoilJs", "React Spring", "Strapi"];

const tabsLabels = ["Lenguajes", "Frameworks", "UI Librerías", "Utilidades"];
const tabContent = [languages, frameworks, librariesComponents, librariesUtilities];

const TabsSkills = () => {
  const [tabActive, setTabActive] = useState<number>(0);
  const theme = useTheme();
  const handleChangeTab = (newValue: number) => {
    setTabActive(newValue);
  };
  return (
    <div className="w-full">
      <Tabs
        value={tabActive}
        onChange={(e, v) => handleChangeTab(v)}
        variant="fullWidth"
        className="shadow-lg"
      >
        {tabsLabels.map((label, index) => (
          <Tab key={`tabs-labels${index}`} label={label} className="text-sm whitespace-nowrap" />
        ))}
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tabActive}
        onChangeIndex={handleChangeTab}
        as="div"
      >
        {tabContent.map((list, index) => (
          <List key={`tab-content${index}`}>
            {list.map((item, i) => (
              <ListItem key={`skill${index}-${i}`}>
                <ListItemText primary={item} className="text-center" />
              </ListItem>
            ))}
          </List>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default TabsSkills;
