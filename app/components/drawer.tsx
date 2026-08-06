import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '@/lib/data'
import { useActiveSectionContext } from './context/active-section-context'
//import { useDrawerContext } from './context/drawer-context'
import Link from 'next/link'
import clsx from 'clsx'

export default function Drawer({ isDrawerOpen, closeDrawer }: { isDrawerOpen: boolean; closeDrawer: () => void }) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
       <AnimatePresence>
        {isDrawerOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-40 bg-black/40 sm:hidden"
              aria-label="Close navigation menu"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed right-0 top-0 z-50 h-full w-64 bg-white/95 p-6 pt-20 shadow-xl sm:hidden dark:bg-gray-950/95"
            >
              <ul className="flex flex-col gap-3 text-lg font-medium text-gray-700 dark:text-gray-200">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        closeDrawer();
                      }}
                      className={clsx(
                        "block rounded-lg px-3 py-2 transition hover:bg-gray-100 hover:text-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-300",
                        {
                          "text-gray-950 dark:text-gray-300": activeSection === link.name,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
  )
}
