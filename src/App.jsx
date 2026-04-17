import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import Section from './components/Section'
function App() {
  return (
    <>
    <Header />
    <HeroSection />
    
    <Section title="Macaron Shell Recipe Directions">
      <Card
        step="Step 0"
        title="Ingredient Measurements"
        description="Egg whites are your base weight. Use equal sugar weight to egg whites for the meringue. For dry ingredients (almond flour + powdered sugar), multiply egg white weight by 1.2 for each."
      />

      <Card
        step="Step 1"
        title="Whip Egg Whites (Meringue)"
        description="Optional: gently warm egg whites over simmering water while dissolving sugar until homogeneous. Then whip in a mixer: start at speed 6 for ~10 minutes, increase to speed 7 for ~5 minutes, then speed 8 until stiff peaks form. Monitor consistency closely instead of relying only on time. Add food coloring and vanilla once the meringue begins to form."
      />

      <Card
        step="Step 2"
        title="Add Dry Ingredients & Macaronage"
        description="Sift dry ingredients in two parts. Fold gently to combine, then begin macaronage by deflating batter until it flows like lava (~15 seconds to settle). Transfer to piping bag."
      />

      <Card
        step="Step 3"
        title="Piping"
        description="Pipe onto silicone mats or traced circles. Tap tray to release air bubbles and pop any remaining with a toothpick. Let rest for 1 hour until a dry skin forms."
      />

      <Card
        step="Step 4"
        title="Baking"
        description="Bake at 280°F for 16–18 minutes (adjust based on oven and size). Let cool completely, then fill with your preferred filling."
      />
    </Section>
    <Section title="Personal tips and reccommendations">
      <Card
        step="Tip"
        title="Set Up"
        description="Have all ingredients measured and ready before you start. Prepare your baking mats and tools ahead of time to avoid rushing during the process."
      />

      <Card
        step="Tip"
        title="Macaronage"
        description="Don’t deflate the batter too quickly. Fold gradually and check consistency often to avoid overmixing."
      />

      <Card
        step="Tip"
        title="Piping"
        description="Use a rubber band to secure the piping bag for better control. Choose a properly sized piping tip and make sure the bag is tightly sealed."
      />

    </Section>
    
    </>
  )
}

export default App
