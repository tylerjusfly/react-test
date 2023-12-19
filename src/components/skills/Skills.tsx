

 type SkillsProps = {
    skills: string[]
  }

export const Skills = ({skills}:SkillsProps) => {
  return (
    <>
    <ul>
        {
            skills.map(skill => (
                <li key={skill}>{skill}</li>
            ))
        }

    </ul>
    </>
  )
}