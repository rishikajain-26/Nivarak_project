"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Check } from "lucide-react"

interface LanguageSelectionProps {
  selectedLanguage: string
  onLanguageSelect: (language: string) => void
}

export default function LanguageSelection({ selectedLanguage, onLanguageSelect }: LanguageSelectionProps) {
  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "hi", name: "Hindi", nativeName: "हिंदी" },
    { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Nivārak</h1>
          <p className="text-gray-600 mb-2">Choose your preferred language</p>
          <p className="text-sm text-gray-500 mb-1">अपनी भाषा चुनें</p>
          <p className="text-sm text-gray-500">మీ భాషను ఎంచుకోండి</p>
        </div>

        <div className="space-y-3 mb-6">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={selectedLanguage === language.name ? "default" : "outline"}
              className={`w-full h-auto p-4 justify-between ${
                selectedLanguage === language.name
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => onLanguageSelect(language.name)}
            >
              <div className="text-left">
                <div className="font-medium">{language.nativeName}</div>
                <div className="text-sm opacity-75">{language.name}</div>
              </div>
              {selectedLanguage === language.name && <Check className="w-5 h-5" />}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500">Supporting recovery in your language</p>
      </Card>
    </div>
  )
}
