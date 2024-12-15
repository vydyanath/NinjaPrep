import ReactPlayer from "react-player";

function VideoPlayer({
  url
}) {
  return (
    <ReactPlayer
        className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out "
        width="30%"
        height= "30%"
        url={url}
        controls = {true}
      />
  );
}

export default VideoPlayer;