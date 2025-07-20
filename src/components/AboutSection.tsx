import React from 'react'
import { motion } from 'framer-motion'
import { TypewriterText } from './TypewriterText'

const cards = [
  {
    title: 'Why We Exist',
    copy: [
      'Traditional think tanks operate within existing power structures, often dependent on the very institutions they claim to study. We operate independently, funded by individual donors and committed to following evidence wherever it leads.',
      'As young people, we have nothing to lose and everything to gain from honest, unflinching analysis of how power really operates in America.',
    ],
  },
  {
    title: 'What We Do',
    copy: [
      'Motion to Indict conducts rigorous investigations into institutional failures, corporate capture, and systemic corruption. We use FOIA requests, data analysis, fieldwork, and direct engagement to expose the mechanisms that allow powerful actors to escape accountability.',
      'Our research directly informs policy advocacy, legal action, and public campaigns designed to create meaningful institutional change.',
    ],
  },
]

export const AboutSection = () => (
  <div className="bg-black text-white">
    <div className="container mx-auto px-12 md:px-24 py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="heading-xl mb-4">
          <span className="red-accent">About Motion to </span>Indict
        </h1>
        <p className="font-oldnews italic body-lg text-gray-400">
          <TypewriterText text="Researchers. Journalists. Advocates. Radicals." />
        </p>
      </div>

      {/* Cards + Divider */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gray-600" />
        {cards.map((c, i) => (
          <motion.section
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            className="
              bg-gray-800
              border-l-4 border-red-600
              rounded-lg p-10 shadow-2xl
              transform transition-all
            "
          >
            <h3 className="heading-sm font-semibold text-red-500 mb-4">
              {c.title}
            </h3>
            {c.copy.map((p, j) => (
              <p
                key={j}
                className={`${
                  j === c.copy.length - 1 ? 'text-gray-400' : 'text-gray-300'
                } mb-4 leading-relaxed`}
              >
                {p}
              </p>
            ))}
          </motion.section>
        ))}
      </div>

      {/* CTA */}
      <div className="sticky bottom-8 flex justify-center">
        <a
          href="/get-involved"
          className="
            inline-block px-10 py-4 bg-red-600 hover:bg-red-700
            text-white font-semibold rounded-full shadow-xl
            transform transition hover:-translate-y-1 hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-red-500/50
          "
        >
          Interested? Apply For Our Team →
        </a>
      </div>
    </div>
  </div>
)
