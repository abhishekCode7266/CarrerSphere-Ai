import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github, Youtube, CheckCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have questions about our AI tools, subscriptions, or partnerships? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          
          <div className="space-y-8 flex-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/30 rounded-xl shrink-0">
                <Mail className="w-6 h-6 text-indigo-100" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                <p><a href="mailto:support@careersphere.ai" className="text-indigo-100 hover:text-white transition-colors">support@careersphere.ai</a></p>
                <p><a href="mailto:partnerships@careersphere.ai" className="text-indigo-100 hover:text-white transition-colors">partnerships@careersphere.ai</a></p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/30 rounded-xl shrink-0">
                <Phone className="w-6 h-6 text-indigo-100" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                <p><a href="tel:+919876543210" className="text-indigo-100 hover:text-white transition-colors">+91 98765 43210</a></p>
                <p className="text-indigo-100">Mon-Fri, 9:00 AM - 6:00 PM (IST)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/30 rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-indigo-100" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                <p className="text-indigo-100">
                  CareerSphere AI Technologies<br />
                  Level 5, Tech Park, Sector 62<br />
                  Noida, UP 201309, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-indigo-500/30">
            <h3 className="font-semibold mb-4 text-indigo-100">Connect with us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center hover:bg-indigo-500 transition-colors"><Twitter className="w-5 h-5 text-white" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center hover:bg-indigo-500 transition-colors"><Linkedin className="w-5 h-5 text-white" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center hover:bg-indigo-500 transition-colors"><Github className="w-5 h-5 text-white" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center hover:bg-indigo-500 transition-colors"><Youtube className="w-5 h-5 text-white" /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                <p className="text-slate-600">Thank you for reaching out to CareerSphere AI. Our support team will get back to you within 24 hours via email.</p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Subscription Support</option>
                    <option>Partnership/Business</option>
                    <option>Bug Report</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition flex justify-center items-center gap-2 shadow-sm">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
