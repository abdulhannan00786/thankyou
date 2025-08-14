"use client"

import { useState, useRef, useEffect } from "react"

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0.5)
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
            // Auto-play when component mounts
            audioRef.current.play().then(() => {
                setIsPlaying(true)
            }).catch((error) => {
                console.log("Auto-play prevented by browser:", error)
            })
        }
    }, [volume])



    return (
        <div className="hidden">
            {/* Hidden audio element - auto-plays background music */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                className="hidden"
            >
                <source src="/music/background-music.mp3" type="audio/mpeg" />
                <source src="/music/background-music.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
} 