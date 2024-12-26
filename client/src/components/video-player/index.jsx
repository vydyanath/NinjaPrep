import ReactPlayer from "react-player";

function VideoPlayer({
  url,width,height
}) {
  return (
    <ReactPlayer
        className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out "
        width={width}
        height= {height}
        url={url}
        controls = {true}
      />
  );
}

export default VideoPlayer;