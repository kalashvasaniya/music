'use client'

import { useState, useRef, useEffect } from 'react'
import { NextSeo } from 'next-seo'

interface Song {
  title: string
  src: string
  cover: string
}

const songs: Song[] = [
  { title: 'Rinkiya ke papa', src: '/music/Rinkiya ke papa.mp3', cover: '/img/uv.jpg' },
  { title: 'Hulle Hullare', src: '/music/Hulle Hullare.mp3', cover: '/img/uv.jpg' },
  { title: 'Dishu ki Ahh', src: '/music/Dishu ki Ahh.mp3', cover: '/img/uv.jpg' }
]

export default function Home() {
  const [currentSongIndex, setCurrentSongIndex] = useState(2)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressContainerRef = useRef<HTMLDivElement>(null)

  const currentSong = songs[currentSongIndex]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.src
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentSongIndex, currentSong.src])

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handlePrevSong = () => {
    setCurrentSongIndex(prev => prev === 0 ? songs.length - 1 : prev - 1)
    setIsPlaying(true)
  }

  const handleNextSong = () => {
    setCurrentSongIndex(prev => prev === songs.length - 1 ? 0 : prev + 1)
    setIsPlaying(true)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime: time, duration: dur } = audioRef.current
      const progressPercent = (time / dur) * 100
      setProgress(progressPercent)
      setCurrentTime(formatTime(time))
      setDuration(formatTime(dur))
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressContainerRef.current) {
      const width = progressContainerRef.current.clientWidth
      const clickX = e.nativeEvent.offsetX
      const duration = audioRef.current.duration
      audioRef.current.currentTime = (clickX / width) * duration
    }
  }

  const handleEnded = () => {
    handleNextSong()
  }

  return (
    <>
      <NextSeo
        title="Kalash Vasaniya | Mojo Player"
        description="Listen to the latest tracks from Kalash Vasaniya. Enjoy high-quality music streaming with our modern music player."
        openGraph={{
          title: 'Kalash Vasaniya | Mojo Player',
          description: 'Listen to the latest tracks from Kalash Vasaniya. Enjoy high-quality music streaming with our modern music player.',
          images: [
            {
              url: '/img/uv.jpg',
              width: 1200,
              height: 630,
              alt: 'Mojo Player Cover',
            },
          ],
        }}
        twitter={{
          handle: '@kalashvasaniya',
          site: '@kalashvasaniya',
          cardType: 'summary_large_image',
        }}
      />

      <div className={`music-container ${isPlaying ? 'play' : ''}`}>
        <div className="music-info">
          <h4>{currentSong.title}</h4>
          <div 
            className="progress-container" 
            ref={progressContainerRef}
            onClick={handleProgressClick}
          >
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onLoadedMetadata={handleTimeUpdate}
        />

        <div className="img-container">
          <img src={currentSong.cover} alt="music-cover" />
        </div>

        <div className="navigation">
          <button className="action-btn" onClick={handlePrevSong}>
            <i className="fas fa-backward"></i>
          </button>
          <button className="action-btn action-btn-big" onClick={handlePlayPause}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          <button className="action-btn" onClick={handleNextSong}>
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>

      <div className="text-message">
        Rotate your phone
      </div>
    </>
  )
} 