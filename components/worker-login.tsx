"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Shield } from "lucide-react"

interface WorkerLoginProps {
  onLogin: () => void
  onBack: () => void
}

export default function WorkerLogin({ onLogin, onBack }: WorkerLoginProps) {
  const [workerId, setWorkerId] = useState("CBR001")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">CBR Worker Login</h1>
          <p className="text-gray-600">Access your worker dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="workerId" className="text-sm font-medium text-gray-700">
              Worker ID
            </Label>
            <Input
              id="workerId"
              type="text"
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
              className="mt-1 bg-gray-50"
              placeholder="CBR001"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 bg-gray-50"
              placeholder="Enter password"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium"
          >
            Access Dashboard
          </Button>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-center">
            <p className="text-sm text-yellow-800">Demo credentials: CBR001 / demo123</p>
          </div>
        </form>
      </Card>
    </div>
  )
}
