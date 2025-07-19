"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Moon, Activity, Brain, Play, CheckCircle } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface DashboardProps {
  setCurrentScreen: (screen: string) => void
}

export default function Dashboard({ setCurrentScreen }: DashboardProps) {
  const [resilienceScore, setResilienceScore] = useState(78)
  const [exerciseStarted, setExerciseStarted] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)

  const handleExercise = () => {
    setExerciseStarted(true)
    setTimeout(() => {
      setExerciseStarted(false)
      setResilienceScore((prev) => Math.min(100, prev + 2))
    }, 3000)
  }

  const handleCheckIn = () => {
    setCheckedIn(true)
    setResilienceScore((prev) => Math.min(100, prev + 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pb-20">
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-4">
        <h1 className="text-xl font-bold text-center">Welcome to Nivārak</h1>
        <p className="text-center text-amber-100 text-sm">Track your recovery journey</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Resilience Score */}
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-lg font-medium mb-2">Resilience Score</h2>
              <div className="text-4xl font-bold text-green-300 mb-2">{resilienceScore}</div>
              <Progress value={resilienceScore} className="mb-2 bg-white/20" />
              <p className="text-sm text-indigo-100">+5 points from yesterday</p>
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Heart className="w-5 h-5 text-red-500" />
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900">42</div>
              <div className="text-sm text-gray-600">Heart Rate Variability</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Moon className="w-5 h-5 text-indigo-500" />
                <div className="text-lg">—</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">7.2</div>
              <div className="text-sm text-gray-600">Sleep Quality</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900">8,542</div>
              <div className="text-sm text-gray-600">Daily Steps</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900">3.2</div>
              <div className="text-sm text-gray-600">Stress Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Nudge */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">{"Today's Nudge"}</h3>
            <div className="space-y-3">
              <Button
                className={`w-full h-12 ${
                  exerciseStarted ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"
                } text-white`}
                onClick={handleExercise}
                disabled={exerciseStarted}
              >
                <Play className="w-4 h-4 mr-2" />
                {exerciseStarted ? "Exercise Started..." : "Start Exercise"}
              </Button>

              <Button
                variant="outline"
                className={`w-full h-12 ${
                  checkedIn ? "bg-green-50 border-green-300 text-green-700" : "bg-white hover:bg-gray-50"
                }`}
                onClick={handleCheckIn}
                disabled={checkedIn}
              >
                {checkedIn ? (
                  <CheckCircle className="w-4 h-4 mr-2" />
                ) : (
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2" />
                )}
                {checkedIn ? "Checked In!" : "Daily Check-in"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Insights */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Weekly Insights</h3>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                <span className="text-lg">👍</span> Great progress this week! Your consistency in daily check-ins is
                building strong habits. Keep focusing on your breathing exercises.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation currentScreen="dashboard" setCurrentScreen={setCurrentScreen} />
    </div>
  )
}
