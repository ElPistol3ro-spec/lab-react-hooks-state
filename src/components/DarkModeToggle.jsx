import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
