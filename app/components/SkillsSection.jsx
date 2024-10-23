import React from 'react'
import { FaJs, FaNode, FaNpm, FaReact, FaDatabase,FaAws,FaGitAlt,} from 'react-icons/fa'
import { SiTypescript,SiTailwindcss, SiNextdotjs, SiMongodb, SiSupabase } from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: FaNode, color: '#339933' },
  { name: 'npm', icon: FaNpm, color: '#CB3837' }, // Official npm red
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }, // Tailwind's teal
  { name: 'React', icon: FaReact, color: '#61DAFB' }, // React's light blue
  { name: 'Next.js', icon: SiNextdotjs, }, // Next.js black
  { name: 'SQL', icon: FaDatabase, color: '#4479A1' }, // MySQL blue
  { name: 'Git', icon: FaGitAlt, color:'#F05032'}, // Git's orange
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }, // MongoDB green
  { name: 'AWS', icon: FaAws, color: '#FF9900' }, // AWS orange
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' } // Supabase green    
]

export default function SkillsSection() {
  return (
    <section className="bg-gradient-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="text-6xl mb-2" style={{ color: skill.color }} />
              <div className="text-xl font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

