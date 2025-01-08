import Header from './components/Header'
import Hero from './components/Hero'
import CalculatorSection from './components/CalculatorSection'
import ToolsLibSection from './components/ToolsLibSection'
import LearnMoreSection from './components/LearnMoreSection'
import { useState } from 'react'

function App() {
  const [tab, setTab] = useState('hero')

  return (
    <div>
      <Header activeTab={tab} onTabChange={(current) => setTab(current)} />
      <main>
        {tab === 'hero' && <Hero active={tab} onChange={(newTab) => setTab(newTab)} />}
        {tab === 'calculator' && <CalculatorSection />}
        {tab === 'toollibrary' && <ToolsLibSection />}
        {tab === 'learnmore' && <LearnMoreSection />}
      </main>
    </div>
  )
}

export default App
