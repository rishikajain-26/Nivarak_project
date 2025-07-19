"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Shield, Phone, Mic, User, Eye, Save, LogOut } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface SettingsProps {
  setCurrentScreen: (screen: string) => void
}

export default function Settings({ setCurrentScreen }: SettingsProps) {
  const [pushNotifications, setPushNotifications] = useState(true)
  const [voiceCommands, setVoiceCommands] = useState(true)
  const [emergencyContact, setEmergencyContact] = useState("+91-9876543210")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pb-20">
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-4">
        <h1 className="text-xl font-bold text-center">Settings</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Security & Privacy */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="font-semibold text-gray-900">Security & Privacy</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-blue-600">Biometric Lock</div>
                    <div className="text-sm text-gray-600">
                      Use fingerprint or face recognition to protect sensitive information
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-blue-600">Push Notifications</div>
                    <div className="text-sm text-gray-600">Receive reminders and encouragement messages</div>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 text-red-500 mr-2" />
              <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="emergency" className="text-sm font-medium text-gray-700">
                  Primary Emergency Contact
                </Label>
                <Input
                  id="emergency"
                  type="tel"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  className="mt-1 bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This contact will be called during voice command emergencies
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voice Commands */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <Mic className="w-5 h-5 text-green-500 mr-2" />
              <h3 className="font-semibold text-gray-900">Voice Commands</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Enable Voice Commands</div>
                  <div className="text-sm text-gray-600">Use voice to check scores and call emergency</div>
                </div>
                <Switch checked={voiceCommands} onCheckedChange={setVoiceCommands} />
              </div>

              {voiceCommands && (
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
                  <div className="font-medium text-yellow-800 mb-2">Available Commands:</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• "What's my resilience score?"</li>
                    <li>• "How much are my reward points?"</li>
                    <li>• "Call emergency"</li>
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Account */}
        <Card className="bg-white/90">
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="font-semibold text-gray-900">Account</h3>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Eye className="w-4 h-4 mr-2" />
                View Profile Information
              </Button>

              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </Button>

              <Button variant="destructive" className="w-full">
                <LogOut className="w-4 h-4 mr-2" />
                Logout from Nivārak
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card className="bg-white/90">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Nivārak Recovery</h3>
            <p className="text-sm text-gray-600 mb-1">Version 1.0.0</p>
            <p className="text-xs text-gray-500 mb-1">DPDPA 2023 Compliant • Privacy-First Recovery Platform</p>
            <p className="text-xs text-gray-500">National Helpline: 14416</p>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation currentScreen="settings" setCurrentScreen={setCurrentScreen} />
    </div>
  )
}
