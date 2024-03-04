import { useEffect } from "react";
import "./App.css";
import HomeSection from "./features/HomeSection/HomeSection";
import ProjectSection from "./features/ProjectSection/ProjectHeader/ProjectSection";
import {
  gestureControlProjectInfo,
  toDoAppProjectInfo,
} from "./projects/projectInfos";

function App() {
  useEffect(() => {
    console.log(window.innerHeight, innerHeight);
  }, []);

  return (
    <>
      <HomeSection />
      <ProjectSection projectInfo={gestureControlProjectInfo} />
      <ProjectSection projectInfo={toDoAppProjectInfo} />
    </>
  );
}

export default App;
