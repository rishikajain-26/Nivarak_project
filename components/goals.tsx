"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Calendar, Target } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface GoalsProps {
  setCurrentScreen: (screen: string) => void
}

export default function Goals({ setCurrentScreen }: GoalsProps) {
  const [activeTab, setActiveTab] = useState("All Goals")
  const [dailyProgress, setDailyProgress] = useState(6)
  const [breathingProgress, setBreatheingProgress] = useState(1)

  const tabs = ["All Goals", "Daily", "Weekly", "Monthly"]

  const handleMarkProgress = (type: "daily" | "breathing") => {
    if (type === "daily" && dailyProgress < 7) {
      setDailyProgress((prev) => prev + 1)
    } else if (type === "breathing" && breathingProgress < 1) {
      setBreatheingProgress(1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pb-20">
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-4">
        <h1 className="text-xl font-bold text-center">Goals</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Weekly Progress */}
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-lg font-medium mb-2">Weekly Progress</h2>
              <div className="text-4xl font-bold mb-2">20%</div>
              <Progress value={20} className="mb-2 bg-white/20" />
              <p className="text-sm text-indigo-100">1 of 5 goals completed</p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap ${
                activeTab === tab ? "bg-indigo-500 hover:bg-indigo-600 text-white" : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Daily" && <Clock className="w-4 h-4 mr-1" />}
              {tab === "Weekly" && <Calendar className="w-4 h-4 mr-1" />}
              {tab === "Monthly" && <Target className="w-4 h-4 mr-1" />}
              {tab}
            </Button>
          ))}
        </div>

        {/* Goals List */}
        <div className="space-y-4">
          {/* Daily Check-ins */}
          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Daily Check-ins</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">weekly • This week</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Complete your daily mood and wellness check-in</p>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{dailyProgress}/7 days</span>
              </div>
              <Progress value={(dailyProgress / 7) * 100} className="mb-3" />

              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => handleMarkProgress("daily")}
                disabled={dailyProgress >= 7}
              >
                {dailyProgress >= 7 ? "Completed!" : "Mark Progress"}
              </Button>
            </CardContent>
          </Card>

          {/* Mindful Breathing */}
          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <h3 className="font-semibold text-gray-900">Mindful Breathing</h3>
                  <div className="w-4 h-4 bg-gray-300 rounded-full ml-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">daily • Today</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Practice Anulom-Vilom breathing exercise</p>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{breathingProgress}/1 session</span>
              </div>
              <Progress value={breathingProgress * 100} className="mb-3" />
            </CardContent>
          </Card>

          {/* Green Zone Days */}
          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Green Zone Days</h3>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">monthly • This month</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Maintain stable emotional state</p>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">18/30 days</span>
              </div>
              <Progress value={(18 / 30) * 100} className="mb-3" />

              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Mark Progress</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation currentScreen="goals" setCurrentScreen={setCurrentScreen} />
    </div>
  )
}
