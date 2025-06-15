export default function EpisodeList({ episodes, selectedEpisode, episodeId }) {
    return (
        <div className="episodeList">
            {episodes.map((episode) => (
                <div
                    key={episode.id} 
                    className={`episode${episodeId === episode.id ? " selected" : ""}`}
                    onClick={() => selectedEpisode(episode)}
                    >
                        {episode.title}
                </div>
            ))}
        </div>
    );
}
