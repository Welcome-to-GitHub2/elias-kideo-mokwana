/**
 * ============================================
 * ELIAS "KIDEO" MOKWANA - OFFICIAL WEBSITE
 * Main Landing Page Component
 * ============================================
 * 
 * This is the main page featuring:
 * - Hero section with image carousel
 * - Stats display
 * - Biography section
 * - Career timeline
 * - Partnership/sponsorship contact form
 * - Footer with contact information
 */


'use client'


/**
 * ============================================
 * ELIAS "KIDEO" MOKWANA - OFFICIAL WEBSITE
 * Enhanced Main Landing Page with Navigation
 * ============================================
 */

/**
 * ============================================
 * ELIAS "KIDO" MOKWANA - OFFICIAL WEBSITE
 * Enhanced Main Landing Page with Navigation
 * ============================================
 */

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

// Shadcn UI components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'  // ← this will work after adding
import { 
  Card, 
  CardContent,
  CardHeader,     // Add if you use it
  CardTitle       // Add if you use it
} from '@/components/ui/card'

// Icons + Next.js
import { 
  Trophy, Target, Star, ChevronDown, Mail, Phone, Send, 
  Menu, X, Instagram, Twitter, Facebook, Youtube, 
  Award, TrendingUp, Zap 
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'


// Hero images array...

/**UI COMPONENTS 
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
*/

// Hero images array

/**UI COMPONENTS 
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
*/

// Hero images - first 8 (best action/celebration/portrait shots - pick your favorites)
const heroImages = [
  '/images/mokwana-1.jpg',
  '/images/mokwana-17.jpg',
  '/images/mokwana-13.jpg',
  '/images/mokwana-5.jpg',
  '/images/mokwana-20.jpg',
  '/images/mokwana-18.jpg',
  '/images/mokwana-7.jpg',
  '/images/mokwana-15.jpg',
];

// Gallery images - next 8 (for grid/carousel lower down)
const galleryImages = [
  '/images/mokwana-9.jpg',
  '/images/mokwana-10.jpg',
  '/images/mokwana-11.jpg',
  '/images/mokwana-2.jpg',
  '/images/mokwana-3.jpg',
  '/images/mokwana-4.jpg',
  '/images/mokwana-6.jpg',
  '/images/mokwana-14.jpg',
];

// Career timeline data
const careerTimeline = [
  {
    year: '2017-2020',
    club: 'Platinum City Rovers',
    description: 'Started his professional journey in the lower divisions, honing his skills and speed',
    achievement: 'Foundation years'
  },
  {
    year: '2022-2024',
    club: 'Sekhukhune United',
    description: 'Breakthrough in DStv Premiership with crucial goals and assists',
    achievement: 'PSL Rising Star'
  },
  {
    year: 'Aug 2024',
    club: 'Espérance de Tunis',
    description: 'Historic move to Tunisian giants on 3-year deal worth ~R7 million',
    achievement: 'International Move'
  },
  {
    year: '2025',
    club: 'Al-Hazem (Loan)',
    description: 'Saudi Pro League loan under coach Jalel Kadri, regaining top form',
    achievement: 'Saudi Success'
  },
  {
    year: '2025',
    club: 'Bafana Bafana',
    description: 'Recalled to national team for AFCON qualifiers after stellar performances',
    achievement: 'National Pride'
  }
]

// Stats configuration
const stats = [
  { icon: Trophy, label: 'Market Value', value: '€700k - €1.5M' },
  { icon: Target, label: 'Position', value: 'Right Winger' },
  { icon: Star, label: 'Known For', value: 'Speed & Dribbling' }
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    opportunityType: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          opportunityType: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      
      {/* ================================================
          NAVIGATION BAR - Sticky header with menu
          ================================================ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo/Brand */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-white">KIDEO</span>
              <span className="text-[#FFD700]">.</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('highlights')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                Career Highlights
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#FFD700] to-[#8B1538] hover:opacity-90 text-gray-950 font-bold"
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('highlights')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium text-left">
                  Career Highlights
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium text-left">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium text-left">
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-[#FFD700] to-[#8B1538] hover:opacity-90 text-gray-950 font-bold w-full"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ================================================
          HERO SECTION - Full-screen carousel
          ================================================ */}
      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="h-full w-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    alt={`Elias Mokwana in action ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-white">ELIAS</span>{' '}
              <span className="bg-gradient-to-r from-[#FFD700] via-[#8B1538] to-[#007A4D] bg-clip-text text-transparent">
                "KIDEO"
              </span>{' '}
              <span className="text-white">MOKWANA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              South African Football Star • Right Winger • Speed Merchant
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base">
              <span className="px-4 py-2 bg-[#8B1538] text-white rounded-full font-semibold">Al-Hazem FC</span>
              <span className="px-4 py-2 bg-[#007A4D] text-white rounded-full font-semibold">Bafana Bafana</span>
              <span className="px-4 py-2 bg-[#FFD700] text-gray-950 rounded-full font-semibold">Mthandazeli</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4 justify-center pt-4">
              <a href="https://instagram.com/kideomokwana" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-[#FFD700] flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-[#FFD700] flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-[#FFD700] flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-[#FFD700] flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-12 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-[#FFD700]" />
          </button>
        </div>
      </section>

      {/* ================================================
          STATS SECTION
          ================================================ */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-800/50 border-[#FFD700]/20 hover:border-[#FFD700] transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#FFD700]/20">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <stat.icon className="h-12 w-12 text-[#FFD700] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          ABOUT SECTION
          ================================================ */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-[#FFD700]">The Story</span> <span className="text-white">of a Champion</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Born on <span className="text-[#FFD700] font-semibold">8 September 1999</span> in the heart of South Africa, 
              Elias Sepho "Kideo" Mokwana has become one of the nation's most exciting football talents. Known for his 
              <span className="text-[#8B1538] font-semibold"> blistering pace</span>, exceptional dribbling skills, and an 
              unwavering determination to succeed, Mokwana represents the new generation of South African football.
            </p>
            <p>
              From his humble beginnings in the Mpumalanga region, KwaMhlanga 1022, Elias dreamed of playing at the highest level. 
              His journey through Platinum City Rovers taught him resilience and discipline, laying the foundation for what 
              would become a remarkable career trajectory.
            </p>
            <p>
              The breakthrough came at <span className="text-[#007A4D] font-semibold">Sekhukhune United</span> in the 
              DStv Premiership, where his dynamic performances on the right wing caught the attention of scouts across the 
              continent. His ability to take on defenders, deliver pinpoint crosses, and score crucial goals made him one 
              of the most sought-after players in South African football.
            </p>
            <p>
              In August 2024, Mokwana made history by signing with <span className="text-[#8B1538] font-semibold">Espérance 
              de Tunis</span>, one of Africa's most prestigious clubs, on a three-year deal worth approximately R7 million. 
              This move represented not just personal achievement, but a milestone for South African football.
            </p>
            <p>
              Currently on loan at <span className="text-[#FFD700] font-semibold">Al-Hazem FC</span> in the Saudi Pro League 
              under coach Jalel Kadri, Mokwana has rediscovered his best form, contributing crucial assists and goals. His 
              performances have earned him a recall to the <span className="text-[#007A4D] font-semibold">Bafana Bafana</span> squad 
              for AFCON qualifiers, where he continues to represent his nation with pride.
            </p>
            <p className="text-center pt-6 text-xl font-semibold text-[#FFD700]">
              "Speed, Skill, and South African Pride - That's Kideo."
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          CAREER HIGHLIGHTS SECTION - NEW!
          ================================================ */}
      <section id="highlights" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Career</span> <span className="text-[#FFD700]">Highlights</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">Key achievements and milestones</p>

          {/* Highlight Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-[#FFD700]/10 to-transparent border-[#FFD700]/30 hover:border-[#FFD700] transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-[#FFD700] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white mb-1">R7M</h3>
                <p className="text-gray-400 text-sm">Transfer Value</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#8B1538]/10 to-transparent border-[#8B1538]/30 hover:border-[#8B1538] transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 text-[#8B1538] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white mb-1">€1.5M</h3>
                <p className="text-gray-400 text-sm">Peak Market Value</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#007A4D]/10 to-transparent border-[#007A4D]/30 hover:border-[#007A4D] transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Zap className="h-10 w-10 text-[#007A4D] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                <p className="text-gray-400 text-sm">Goals & Assists (2024)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#FFD700]/10 to-transparent border-[#FFD700]/30 hover:border-[#FFD700] transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Trophy className="h-10 w-10 text-[#FFD700] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white mb-1">5</h3>
                <p className="text-gray-400 text-sm">Clubs in Career</p>
              </CardContent>
            </Card>
          </div>

          {/* Career Timeline */}
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Career</span> <span className="text-[#8B1538]">Journey</span>
          </h3>
          <div className="space-y-8">
            {careerTimeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l-4 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#FFD700] border-4 border-gray-950 animate-pulse" />
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all transform hover:translate-x-2">
                  <div className="flex flex-wrap items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#FFD700]">{item.club}</h3>
                    <span className="text-gray-400 font-semibold">{item.year}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-[#8B1538] text-white text-sm rounded-full">
                    {item.achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Video/Highlights Placeholder */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#FFD700]">Match</span> <span className="text-white">Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center border-2 border-[#FFD700]/20 hover:border-[#FFD700] transition-all group">
                <div className="text-center">
                  <Youtube className="h-16 w-16 text-[#FFD700] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-400">Al-Hazem Highlights</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center border-2 border-[#007A4D]/20 hover:border-[#007A4D] transition-all group">
                <div className="text-center">
                  <Youtube className="h-16 w-16 text-[#007A4D] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-400">Bafana Bafana Goals</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          GALLERY SECTION - NEW!
          ================================================ */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Photo</span> <span className="text-[#FFD700]">Gallery</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">Moments that define a champion</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          CONTACT/SPONSORSHIP FORM SECTION
          ================================================ */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#FFD700]">Partnership</span> <span className="text-white">Opportunities</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Interested in sponsorship or collaboration? Let's build something great together.
            </p>
          </div>

          <Card className="bg-gray-800/50 border-[#FFD700]/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-900 border-gray-700 text-white focus:border-[#FFD700]"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-900 border-gray-700 text-white focus:border-[#FFD700]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-200">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-gray-900 border-gray-700 text-white focus:border-[#FFD700]"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-200">Sponsorship Budget</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-[#FFD700]">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        <SelectItem value="under50k">Under R50,000</SelectItem>
                        <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                        <SelectItem value="100k-500k">R100,000 - R500,000</SelectItem>
                        <SelectItem value="500k-1m">R500,000 - R1,000,000</SelectItem>
                        <SelectItem value="over1m">Over R1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="opportunityType" className="text-gray-200">Opportunity Type</Label>
                  <Select
                    value={formData.opportunityType}
                    onValueChange={(value) => setFormData({ ...formData, opportunityType: value })}
                  >
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-[#FFD700]">
                      <SelectValue placeholder="Select opportunity" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="endorsement">Brand Endorsement</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="media">Media & Appearances</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-200">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-900 border-gray-700 text-white focus:border-[#FFD700] resize-none"
                    placeholder="Tell us about your proposal..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#8B1538] hover:opacity-90 text-gray-950 font-bold py-6 text-lg"
                >
                  {submitting ? 'Sending...' : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Proposal
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-center text-[#007A4D] font-semibold">✓ Message sent successfully! We'll be in touch soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-center text-[#8B1538] font-semibold">✗ Something went wrong. Please try again.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================================================
          FOOTER SECTION
          ================================================ */}
      <footer className="bg-gray-950 border-t border-[#FFD700]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Column 1 - Player info */}
            <div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Elias "Kideo" Mokwana</h3>
              <p className="text-gray-400 mb-4">
                Born in 1022, KwaMhlanga. Built for the world stage.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-[#007A4D] text-white text-sm rounded">🇿🇦 Proudly South African</span>
              </div>
            </div>
            
            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-3 text-gray-400">
                <button onClick={() => scrollToSection('about')} className="block hover:text-[#FFD700] transition-colors">About Kideo</button>
                <button onClick={() => scrollToSection('highlights')} className="block hover:text-[#FFD700] transition-colors">Career Highlights</button>
                <button onClick={() => scrollToSection('gallery')} className="block hover:text-[#FFD700] transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('contact')} className="block hover:text-[#FFD700] transition-colors">Contact</button>
              </div>
            </div>
            
            {/* Column 3 - Contact management */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Management</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FFD700]" />
                  <a href="tel:+23058115977" className="hover:text-[#FFD700] transition-colors">+230 5811 5977</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#FFD700]" />
                  <a href="mailto:ntashkills@gmail.com" className="hover:text-[#FFD700] transition-colors">ntashkills@gmail.com</a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-3 mt-6">
                <a href="https://instagram.com/kideomokwana" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <Youtube className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom copyright section */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Elias Mokwana. All Rights Reserved.
            </p>
            <p className="text-gray-600 mt-2">
              Securely built by <span className="text-[#FFD700] font-semibold">Thabo is Innocent</span> – A Proud Fan
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}