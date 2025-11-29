"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Set initial scroll position
    setIsScrolled(window.scrollY > 20)
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#products", label: "Gift Collections" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Client Stories" },

  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/logo.png" 
              alt="ST" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Logo failed to load')
                e.currentTarget.style.display = 'none'
                const fallback = document.createElement('div')
                fallback.style.width = '100%'
                fallback.style.height = '100%'
                fallback.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)'
                fallback.style.display = 'flex'
                fallback.style.alignItems = 'center'
                fallback.style.justifyContent = 'center'
                fallback.style.color = 'white'
                fallback.style.fontWeight = 'bold'
                fallback.style.fontSize = '20px'
                fallback.textContent = 'ST'
                e.currentTarget.parentNode?.appendChild(fallback)
              }}
              onLoad={() => {
                console.log('Logo loaded successfully')
              }}
            />
          </div>
          <span className="text-lg sm:text-xl font-serif font-semibold">Surya Traders</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+91-9131379151"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden xl:block"
          >
            +91-9131379151
          </a>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 sm:px-6 text-sm">
            <Link href="#quote">Request Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col p-4 sm:p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Call: +1 (234) 567-890
          </a>
          <div className="pt-4 border-t border-border">
            <Button asChild className="w-full bg-primary text-primary-foreground rounded-full">
              <Link href="#quote" onClick={() => setIsMobileMenuOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
