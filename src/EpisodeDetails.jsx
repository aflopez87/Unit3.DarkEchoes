export default function EpisodeDetails({episode}){
    if(!episode){
        return <div className="details default">Please select an episode for more details!</div>
    }
    return (
        <div className="details">
            <h2>
                Episode {episode.id}: {episode.title}
            </h2>
            <p>{episode.description}</p>
        </div>
    );
}