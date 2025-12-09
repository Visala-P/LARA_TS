import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, GraduationCap, FlaskConical, Briefcase, Image, Mail, Home, ArrowRight } from "lucide-react";
import laraLogo from "@/assets/lara-logo-v2.png";

const ResearchGroup = () => {
  const navigate = useNavigate();

  const newsItems = [
    "LARA therapy system pilot program launched at special education centers across Tamil Nadu.",
    "Research paper on 'AI-Assisted Therapy for Children with Down Syndrome' accepted at IEEE ICRA 2024.",
    "Collaboration established with National Institute for Empowerment of Persons with Intellectual Disabilities.",
    "LARA robot prototype successfully completed Phase 2 clinical trials with 95% positive outcomes.",
    "Team member Dr. Priya Sharma awarded Best Researcher in Assistive Robotics 2024.",
    "New grant received from DST-SERB for expanding LARA's emotion recognition capabilities.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Header Section with Background */}
      <div 
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.7)), url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920')",
          minHeight: "400px"
        }}
      >
        {/* Logo and Title */}
        <div className="text-center pt-8 pb-4">
          <img 
            src={laraLogo} 
            alt="LARA Logo" 
            className="h-24 mx-auto mb-4 drop-shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 tracking-wide">
            Learning Assistance with Robotic Aid
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-100">
            (LARA)
          </h2>
          <p className="text-xl text-amber-50 mt-4 font-medium">
            IIT Mandi Research Initiative
          </p>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-center pb-6 px-4">
          <nav className="bg-amber-900/90 rounded-lg shadow-lg flex flex-wrap justify-center gap-1 p-2">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-amber-50 hover:bg-amber-800 hover:text-white"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-amber-50 hover:bg-amber-800 hover:text-white">
                  <Users className="w-4 h-4 mr-1" />
                  People
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-amber-900 border-amber-800 text-amber-50 z-50">
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Faculty</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Research Scholars</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Interns</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Project Staff</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-amber-50 hover:bg-amber-800 hover:text-white">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Academics
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-amber-900 border-amber-800 text-amber-50 z-50">
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Courses</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Prospective Students</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Admissions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-amber-50 hover:bg-amber-800 hover:text-white">
                  <FlaskConical className="w-4 h-4 mr-1" />
                  Research
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-amber-900 border-amber-800 text-amber-50 z-50">
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Labs</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Publications</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Projects</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Activities</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-amber-50 hover:bg-amber-800 hover:text-white">
                  <Briefcase className="w-4 h-4 mr-1" />
                  Vacancies
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-amber-900 border-amber-800 text-amber-50 z-50">
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Internships</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-800 focus:bg-amber-800 cursor-pointer">Project Positions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-amber-50 hover:bg-amber-800 hover:text-white">
              <Image className="w-4 h-4 mr-1" />
              Gallery
            </Button>

            <Button variant="ghost" className="text-amber-50 hover:bg-amber-800 hover:text-white">
              <Mail className="w-4 h-4 mr-1" />
              Contact Us
            </Button>
          </nav>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <p className="text-amber-100 text-lg leading-relaxed">
            The <strong className="text-orange-300">LARA</strong> (Learning Assistance with Robotic Aid) research group at IIT Mandi 
            focuses on developing AI-powered robotic systems for therapeutic intervention in children with 
            <strong className="text-orange-300"> Down Syndrome, Learning Disabilities, Intellectual Disabilities, and Autism</strong>. 
            Our interdisciplinary team combines expertise in Robotics, Artificial Intelligence, Child Psychology, 
            and Special Education to create innovative solutions that empower children with special needs.
          </p>
        </div>
      </div>

      {/* News and Recent Events Section */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8 underline decoration-orange-500 decoration-4 underline-offset-8">
            News and Recent Events
          </h2>
          
          <Card className="bg-amber-50/80 border-amber-300 shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {newsItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-amber-900">
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className="inline-block mt-6 text-amber-800 hover:text-orange-600 underline font-medium transition-colors"
              >
                More publications...
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Know More Button Section */}
      <div className="py-12 px-6 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-amber-100 mb-6">
            Interested in learning more about our therapy system?
          </h3>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            To Know More About the Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="bg-amber-900 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-amber-200 text-sm">
          <a href="https://iitmandi.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
            IIT Mandi
          </a>
          <span className="text-amber-600">|</span>
          <a href="#" className="hover:text-orange-400 transition-colors">
            IIT Mandi Webmail
          </a>
          <span className="text-amber-600">|</span>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Moodle
          </a>
          <span className="text-amber-600">|</span>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Central Library
          </a>
          <span className="text-amber-600">|</span>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Follow us on Twitter
          </a>
        </div>
        <p className="text-center text-amber-400 mt-4 text-xs">
          © 2024 LARA Research Group, IIT Mandi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ResearchGroup;
