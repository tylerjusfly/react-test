import { useEffect, useState } from "react"


 type SkillsProps = {
    skills: string[]
  }

export const Skills = ({skills}:SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
          setIsLoggedIn(true)
        }, 500)
      }, [])


  return (
    <>
    <ul>
        {
            skills.map(skill => (
                <li key={skill}>{skill}</li>
            ))
        }

    </ul>

    {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
