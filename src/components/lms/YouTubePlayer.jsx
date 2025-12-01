import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward } from 'lucide-react';

const YouTubePlayer = ({ video, courseId, moduleId, onProgress, onComplete }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [player, setPlayer] = useState(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    const videoId = getYouTubeVideoId(video.url);
    if (!videoId) return;

    const newPlayer = new window.YT.Player(playerRef.current, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        fs: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    setPlayer(newPlayer);
  };

  const onPlayerReady = (event) => {
    setDuration(event.target.getDuration());
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      updateTime();
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      onComplete && onComplete(video.id);
    }
  };

  const updateTime = () => {
    if (player) {
      setCurrentTime(player.getCurrentTime());
      const progress = (player.getCurrentTime() / player.getDuration()) * 100;
      onProgress && onProgress(video.id, progress, progress >= 95);
    }
  };

  const togglePlay = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const handleProgress = (e) => {
    if (!player) return;

    const newTime = (e.target.value / 100) * duration;
    player.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (player) {
      player.setVolume(newVolume * 100);
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (!player) return;

    if (isMuted) {
      player.unMute();
      player.setVolume(volume * 100);
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const container = playerRef.current?.parentElement;
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const skip = (seconds) => {
    if (!player) return;

    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    player.seekTo(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative bg-black rounded-lg overflow-hidden group">
      <div ref={playerRef} className="w-full h-64"></div>

      {/* Controls Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max="100"
            value={progressPercent}
            onChange={handleProgress}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>

            {/* Skip Back */}
            <button
              onClick={() => skip(-10)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <SkipBack className="h-5 w-5" />
            </button>

            {/* Skip Forward */}
            <button
              onClick={() => skip(10)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <SkipForward className="h-5 w-5" />
            </button>

            {/* Volume */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume * 100}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Time */}
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Settings */}
            <button className="text-white hover:text-blue-400 transition-colors">
              <Settings className="h-5 w-5" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="bg-black/50 text-white rounded-full p-4 hover:bg-black/70 transition-colors"
          >
            <Play className="h-12 w-12 ml-1" />
          </button>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default YouTubePlayer;
