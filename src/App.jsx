import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    htmlElement.classList.remove("light", "dark")
    htmlElement.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    
      <div className="flex flex-wrap min-h-screen items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full px-4">
          
        
          <div className="w-full max-w-lg mx-auto flex justify-end mb-6">
            <ThemeBtn />
          </div>

       
          <div className="w-full max-w-lg mx-auto">
            <Card />
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
