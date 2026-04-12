'use client'

import { motion } from 'framer-motion'
import { profile, skillCategories } from '@/data/profile'
import DownloadCV from './DownloadCV'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dynamic Senior Business Development and Sales professional with extensive global experience across North America, Europe, Africa, GCC, Australia, and APAC. Passionate about leveraging data analysis and AI tools to drive strategic growth, identify high-potential opportunities, and build strong client relationships. Proven track record in exceeding sales targets, executing effective go-to-market strategies, and orchestrating AI-powered workflows to maximize efficiency and results.
            </p>
            <div className="flex gap-4">
              <DownloadCV />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-6">Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h4 className="font-medium text-emerald-500 mb-2">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                        className="px-3 py-1.5 text-sm bg-secondary rounded-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}