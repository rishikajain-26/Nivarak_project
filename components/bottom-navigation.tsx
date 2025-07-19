"use client"

import { Button } from "@/components/ui/button"
import { Home, Target, Gift, Settings } from "lucide-react"

interface BottomNavigationProps {
  currentScreen: string
  setCurrentScreen: (screen: string) => void
}

export default function BottomNavigation({ currentScreen, setCurrentScreen }: BottomNavigationProps) {
  const navItems = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "goals", label: "Goals", icon: Target },
    { id: "rewards", label: "Rewards", icon: Gift },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id

          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-2 ${
                isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setCurrentScreen(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
