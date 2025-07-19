"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Anchor, Shield, Zap, Clock, Crown, Star, Gift, BadgePlusIcon as Boost } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface RewardsProps {
  setCurrentScreen: (screen: string) => void
}

export default function Rewards({ setCurrentScreen }: RewardsProps) {
  const [activeTab, setActiveTab] = useState("All")
  const [resolvePoints, setResolvePoints] = useState(2847)

  const tabs = [
    { name: "All", icon: null },
    { name: "Therapy", icon: null },
    { name: "Content", icon: Star },
    { name: "Gift", icon: Gift },
    { name: "Boost", icon: Boost },
  ]

  const handleRedeem = (points: number) => {
    if (resolvePoints >= points) {
      setResolvePoints((prev) => prev - points)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pb-20">
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-4">
        <h1 className="text-xl font-bold text-center">Rewards</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Resolve Points */}
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-lg font-medium mb-2">Resolve Points</h2>
              <div className="text-4xl font-bold mb-2">{resolvePoints.toLocaleString()}</div>
              <p className="text-sm text-indigo-100">+120 points earned this week</p>
            </div>
          </CardContent>
        </Card>

        {/* Mastery Symbols */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Mastery Symbols</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Anchor className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">1 Clean Day</span>
                </div>
                <Badge className="bg-green-500 hover:bg-green-600 text-white">Earned</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">7-Day Streak</span>
                </div>
                <Badge className="bg-green-500 hover:bg-green-600 text-white">Earned</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Overcoming a craving</span>
                </div>
                <Badge className="bg-green-500 hover:bg-green-600 text-white">Earned</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">30-day milestone</div>
                      <div className="text-sm text-gray-600">30-day streak</div>
                    </div>
                  </div>
                </div>
                <Progress value={73} className="ml-13" />
                <div className="text-sm text-gray-600 ml-13">73% complete</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <Crown className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">90-day streak + mentoring</div>
                      <div className="text-sm text-gray-600">90 days + mentor</div>
                    </div>
                  </div>
                </div>
                <Progress value={24} className="ml-13" />
                <div className="text-sm text-gray-600 ml-13">24% complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              variant={activeTab === tab.name ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap ${
                activeTab === tab.name ? "bg-indigo-500 hover:bg-indigo-600 text-white" : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon && <tab.icon className="w-4 h-4 mr-1" />}
              {tab.name}
            </Button>
          ))}
        </div>

        {/* Rewards List */}
        <div className="space-y-3">
          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Therapy Session (20% off)</div>
                    <div className="text-sm text-blue-600">500 points</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleRedeem(500)}
                    disabled={resolvePoints < 500}
                  >
                    Redeem →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Premium Meditation Pack</div>
                    <div className="text-sm text-blue-600">300 points</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleRedeem(300)}
                    disabled={resolvePoints < 300}
                  >
                    Redeem →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation currentScreen="rewards" setCurrentScreen={setCurrentScreen} />
    </div>
  )
}
