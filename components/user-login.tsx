"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface UserLoginProps {
  onLogin: () => void
  onBack: () => void
}

export default function UserLogin({ onLogin, onBack }: UserLoginProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600">Welcome to your recovery journey</p>
        </div>

        <div className="space-y-6">
          <Button className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 text-white font-medium" onClick={onLogin}>
            Continue
          </Button>

          <div className="text-center">
            <Button variant="link" className="text-indigo-500 hover:text-indigo-600">
              New user? Sign up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
