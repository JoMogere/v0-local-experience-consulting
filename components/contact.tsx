"use client"

import Link from "next/link"

export function Contact() {
  return (
    <section className="py-24 bg-off-white text-navy-deep" id="contact">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[48px] font-bold mb-5 tracking-[-0.02em] text-balance">
              Ready to grow?
            </h2>
            <p className="text-lg mb-10 text-navy-deep/70">
              Book a complimentary 30-minute growth framework assessment of your property.
            </p>
            <Link
              href="https://calendly.com/mogerejulius41/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4.5 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] uppercase tracking-[2px] text-[13px] border-none cursor-pointer no-underline mb-10"
            >
              Schedule Your Call
            </Link>
            <div className="mt-6">
              <Link 
                href="https://wa.me/+254799022671" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-bold hover:underline"
              >
                +254 799 022 671
              </Link>
            </div>
          </div>
          <div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.082341453194!2d37.00633587496525!3d-1.1005262988889037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f471b70d9ca47%3A0x4a7d443900adb5ba!2slocal%20experience%20consulting!5e0!3m2!1sen!2ske!4v1777568771023!5m2!1sen!2ske" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Local Experience Consulting Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
