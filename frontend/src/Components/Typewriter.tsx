"use client"
import Typewriter from "typewriter-effect"

export default function TypewriterComponent() {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack AI Developer | Nextjs & React Specialist"],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
