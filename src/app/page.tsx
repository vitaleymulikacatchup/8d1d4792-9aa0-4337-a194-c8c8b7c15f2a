"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { HelpCircle, MessageCircle, Sparkles, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury & Comfort"
          description="Indulge in exceptional hospitality at Grand Vista Hotel, where every detail is crafted for your perfect stay"
          tag="5-Star Hotel"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "View Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel luxury lobby"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Welcome to Grand Vista Hotel, where timeless elegance meets modern luxury. Our commitment to exceptional service and attention to detail ensures every guest experiences the finest in hospitality."
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Contact Us",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="Premium Amenities"
          description="Discover world-class facilities designed to enhance your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Suites",
              description: "Spacious accommodations with premium furnishings, marble bathrooms, and stunning city views",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel suite"
            },
            {
              title: "Infinity Pool",
              description: "Relax by our rooftop infinity pool with panoramic views and premium poolside service",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel infinity pool"
            },
            {
              title: "Fine Dining",
              description: "Award-winning restaurants featuring world-class cuisine and extensive wine selection",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel fine dining restaurant"
            },
            {
              title: "Spa & Wellness",
              description: "Full-service spa offering rejuvenating treatments and state-of-the-art fitness center",
              imageSrc: "https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel spa and wellness center"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Team"
          description="Meet the dedicated professionals committed to making your stay exceptional"
          tag="Staff"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexandra Mitchell",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alexandra Mitchell - General Manager"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Head Concierge",
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Rodriguez - Head Concierge"
            },
            {
              id: "3",
              name: "Sophie Chen",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/6474586/pexels-photo-6474586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sophie Chen - Executive Chef"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="Guest Reviews"
          description="Hear what our valued guests say about their experience"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Maria Thompson",
              role: "Business Executive",
              testimonial: "Absolutely exceptional service and accommodations. The attention to detail and staff professionalism exceeded all expectations. Will definitely return.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Thompson"
            },
            {
              id: "2",
              name: "David Chang",
              role: "Travel Blogger",
              testimonial: "One of the finest hotels I've experienced. The luxury amenities, exquisite dining, and impeccable service make this a truly memorable stay.",
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chang"
            },
            {
              id: "3",
              name: "Emma Wilson",
              role: "Event Planner",
              testimonial: "Perfect for both business and leisure. The facilities are world-class and the staff goes above and beyond to ensure every need is met.",
              imageSrc: "https://images.pexels.com/photos/6474586/pexels-photo-6474586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Wilson"
            },
            {
              id: "4",
              name: "Robert Martinez",
              role: "Corporate Client",
              testimonial: "Outstanding hospitality and elegant accommodations. The hotel's attention to guest satisfaction is truly remarkable and sets them apart.",
              imageSrc: "https://images.pexels.com/photos/6325981/pexels-photo-6325981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Martinez"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              role: "Vacation Traveler",
              testimonial: "A luxurious escape that delivered on every promise. From the stunning views to the exceptional spa services, everything was perfect.",
              imageSrc: "https://images.pexels.com/photos/7235797/pexels-photo-7235797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Anderson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport shuttle service. Please contact our concierge team 24 hours in advance to arrange transportation."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three restaurants: our signature fine dining restaurant, casual bistro, and rooftop bar. Room service is available 24/7."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer valet parking service for all guests. Self-parking is also available in our secure garage."
            },
            {
              id: "5",
              title: "What amenities are included?",
              content: "All rooms include complimentary Wi-Fi, premium bedding, marble bathrooms, and access to our fitness center, pool, and spa facilities."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Contact Grand Vista Hotel"
          description="Get in touch with our team for reservations, inquiries, or special requests. We're here to make your stay exceptional."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "How can we assist you with your stay?",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Event Planning", href: "events" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "services" },
                { label: "Location", href: "location" },
                { label: "Careers", href: "careers" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Vista Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}