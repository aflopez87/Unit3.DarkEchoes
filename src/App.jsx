// import statements
import {useState} from "react";
import { episodeList } from "./data";
import EpisodeList from "./EpisodeListJsx";
import EpisodeDetails from "./EpisodeDetails";


export default function App() {
  // variables and javascript logic
  // return (JSX and Javascript)
  const [selectedEpisode, setSelectedEpisode] = useState();
  // TODO

  return (
    <>
      <header><h1>Dark Echoes</h1></header>
      <main>
        <div className="listContainer">
          <h2>Episodes</h2>
          <EpisodeList
            episodes={episodeList}
            selectedEpisode={setSelectedEpisode}
            episodeId={selectedEpisode?.id}
          />
        </div>
        <div className="episodeDetails">
          <EpisodeDetails episode={selectedEpisode} />
        </div>
      </main>
    </>
  )
    
  // render data on the page

// call list of episode names
// save list of episode names
// create unique key for each item
  

// === extra practice ===
  // save updated state when clicked
  // encouragement message if no episode selected
  // show details of selected episode
}
console.log(episodeList)