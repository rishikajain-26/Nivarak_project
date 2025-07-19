"use client"

import { useState } from "react"
import LanguageSelection from "@/components/language-selection"
import LoginTypeSelection from "@/components/login-type-selection"
import UserLogin from "@/components/user-login"
import WorkerLogin from "@/components/worker-login"
import Dashboard from "@/components/dashboard"
import Goals from "@/components/goals"
import Rewards from "@/components/rewards"
import Settings from "@/components/settings"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("language")
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<"user" | "worker" | null>(null)

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setCurrentScreen("loginType")
  }

  const handleLoginTypeSelect = (type: "user" | "worker") => {
    setUserType(type)
    setCurrentScreen(type === "user" ? "userLogin" : "workerLogin")
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentScreen("dashboard")
  }

  const handleBack = () => {
    if (currentScreen === "loginType") {
      setCurrentScreen("language")
    } else if (currentScreen === "userLogin" || currentScreen === "workerLogin") {
      setCurrentScreen("loginType")
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        {currentScreen === "language" && (
          <LanguageSelection selectedLanguage={selectedLanguage} onLanguageSelect={handleLanguageSelect} />
        )}
        {currentScreen === "loginType" && (
          <LoginTypeSelection onLoginTypeSelect={handleLoginTypeSelect} onBack={handleBack} />
        )}
        {currentScreen === "userLogin" && <UserLogin onLogin={handleLogin} onBack={handleBack} />}
        {currentScreen === "workerLogin" && <WorkerLogin onLogin={handleLogin} onBack={handleBack} />}
      </div>
    )
  }

  return <MainApp currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} userType={userType} />
}

function MainApp({
  currentScreen,
  setCurrentScreen,
  userType,
}: {
  currentScreen: string
  setCurrentScreen: (screen: string) => void
  userType: "user" | "worker" | null
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {currentScreen === "dashboard" && <Dashboard setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "goals" && <Goals setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "rewards" && <Rewards setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "settings" && <Settings setCurrentScreen={setCurrentScreen} />}
    </div>
  )
}
