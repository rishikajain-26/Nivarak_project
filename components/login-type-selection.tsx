"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, Shield } from "lucide-react"

interface LoginTypeSelectionProps {
  onLoginTypeSelect: (type: "user" | "worker") => void
  onBack: () => void
}

export default function LoginTypeSelection({ onLoginTypeSelect, onBack }: LoginTypeSelectionProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Nivārak</h1>
          <p className="text-gray-600">Choose your login type</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-auto p-6 justify-start bg-white hover:bg-gray-50"
            onClick={() => onLoginTypeSelect("user")}
          >
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">User Login</div>
              <div className="text-sm text-gray-600">For individuals in recovery</div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full h-auto p-6 justify-start bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white border-0"
            onClick={() => onLoginTypeSelect("worker")}
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold">CBR Worker Login</div>
              <div className="text-sm opacity-90">For community workers</div>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  )
}
