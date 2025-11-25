
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Mail, User, FileText, MessageSquare, Send, CheckCircle2 } from 'lucide-react';



// Form data type

type ContactFormData = {

  name: string;

  email: string;

  subject: string;

  message: string;

};



export const Contact = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);



  const {

    register,

    handleSubmit,

    formState: { errors },

    reset,

  } = useForm<ContactFormData>();



  



  const onSubmit = async (data: ContactFormData) => {

    setIsSubmitting(true);

    

    // Simulate API call (replace with your actual API endpoint)

    await new Promise(resolve => setTimeout(resolve, 1500));

    

    console.log('Form submitted:', data);

    

    setIsSubmitting(false);

    setIsSubmitted(true);

    reset();



    // Hide success message after 5 seconds

    setTimeout(() => {

      setIsSubmitted(false);

    }, 5000);

  };



  



  return (

        <section

          id="contact"

          className="relative py-20 md:py-32 bg-white"

        >

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

                        <div

                          className="text-center mb-12"

                        >

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">

            Get In Touch

          </h2>

          <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mb-6"></div>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">

                      Have a project in mind or want to collaborate? I&apos;d love to hear from you.

                      Fill out the form below and I&apos;ll get back to you as soon as possible.

                    </p>

        </div>



        {/* Success Alert */}

        {isSubmitted && (

          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">

            <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />

            <div>

              <h3 className="font-semibold text-green-900 mb-1">Message sent successfully!</h3>

              <p className="text-sm text-green-700">

                Thank you for reaching out. I&apos;ll get back to you within 24 hours.

              </p>

            </div>

          </div>

        )}



        {/* Contact Form */}

                        <form

                          onSubmit={handleSubmit(onSubmit)}

                          className="space-y-6"

                        // action="https://formsubmit.co/abrarrizvi1999@gmail.com" method="POST"

                        >

          {/* Name Field */}

          <div className="space-y-2">

            <label htmlFor="name" className="block text-sm font-semibold text-slate-700">

              Name <span className="text-red-500">*</span>

            </label>

            <div className="relative">

              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">

                <User size={20} />

              </div>

                            <input

                              id="name"

                              type="text"

                              placeholder="John Doe"

                              suppressHydrationWarning

                              className={`w-full pl-11 pr-4 py-3 border rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${

                  errors.name ? 'border-red-500' : 'border-slate-300'

                }`}

                {...register('name', {

                  required: 'Name is required',

                  minLength: {

                    value: 2,

                    message: 'Name must be at least 2 characters',

                  },

                })}

              />

            </div>

            {errors.name && (

              <p className="text-sm text-red-600 flex items-center gap-1">

                <span className="text-red-500">⚠</span> {errors.name.message}

              </p>

            )}

          </div>



                    {/* Email Field */}



                    <div className="space-y-2">



                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700">



                        Email <span className="text-red-500">*</span>



                      </label>



                      <div className="relative">



                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">



                          <Mail size={20} />



                        </div>



                        <input



                          id="email"



                          type="email"



                          placeholder="john@example.com"



                          suppressHydrationWarning



                          className={`w-full pl-11 pr-4 py-3 border rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${

                  errors.email ? 'border-red-500' : 'border-slate-300'

                }`}

                {...register('email', {

                  required: 'Email is required',

                  pattern: {

                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                    message: 'Please enter a valid email address',

                  },

                })}

              />

            </div>

            {errors.email && (

              <p className="text-sm text-red-600 flex items-center gap-1">

                <span className="text-red-500">⚠</span> {errors.email.message}

              </p>

            )}

          </div>



                    {/* Subject Field */}



                    <div className="space-y-2">



                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">



                        Subject <span className="text-red-500">*</span>



                      </label>



                      <div className="relative">



                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">



                          <FileText size={20} />



                        </div>



                        <input



                          id="subject"



                          type="text"



                          placeholder="Project Inquiry"



                          suppressHydrationWarning



                          className={`w-full pl-11 pr-4 py-3 border rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${

                  errors.subject ? 'border-red-500' : 'border-slate-300'

                }`}

                {...register('subject', {

                  required: 'Subject is required',

                  minLength: {

                    value: 3,

                    message: 'Subject must be at least 3 characters',

                  },

                })}

              />

            </div>

            {errors.subject && (

              <p className="text-sm text-red-600 flex items-center gap-1">

                <span className="text-red-500">⚠</span> {errors.subject.message}

              </p>

            )}

          </div>



                    {/* Message Field */}



                    <div className="space-y-2">



                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700">



                        Message <span className="text-red-500">*</span>



                      </label>



                      <div className="relative">



                        <div className="absolute left-3 top-3 text-slate-400">



                          <MessageSquare size={20} />



                        </div>



                        <textarea



                          id="message"



                          rows={6}



                          placeholder="Tell me about your project or how I can help..."



                          suppressHydrationWarning



                          className={`w-full pl-11 pr-4 py-3 border rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none ${

                  errors.message ? 'border-red-500' : 'border-slate-300'

                }`}

                {...register('message', {

                  required: 'Message is required',

                  minLength: {

                    value: 10,

                    message: 'Message must be at least 10 characters',

                  },

                  maxLength: {

                    value: 1000,

                    message: 'Message must not exceed 1000 characters',

                  },

                })}

              />

            </div>

            {errors.message && (

              <p className="text-sm text-red-600 flex items-center gap-1">

                <span className="text-red-500">⚠</span> {errors.message.message}

              </p>

            )}

          </div>



          {/* Submit Button */}

          <div className="pt-4">

                        <button

                          type="submit"

                          disabled={isSubmitting}

                          suppressHydrationWarning

                          className="w-full md:w-auto px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg"

            >

              {isSubmitting ? (

                <>

                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  Sending...

                </>

              ) : (

                <>

                  <Send size={20} />

                  Send Message

                </>

              )}

            </button>

          </div>

        </form>



        {/* Additional Contact Info (Optional) */}

                        <div

                          className="mt-16 pt-12 border-t border-slate-200"

                        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                        <div className="p-6 bg-slate-50 rounded-lg">

                          <Mail className="mx-auto mb-3 text-indigo-500" size={32} />

              <h3 className="font-semibold text-slate-800 mb-2">Email</h3>

              <p className="text-slate-600">abrarrizvi1999@gmail.com</p>

            </div>

                        <div className="p-6 bg-slate-50 rounded-lg">

                          <MessageSquare className="mx-auto mb-3 text-indigo-500" size={32} />

              <h3 className="font-semibold text-slate-800 mb-2">Response Time</h3>

              <p className="text-slate-600">Within 24 hours</p>

            </div>

                        <div className="p-6 bg-slate-50 rounded-lg">

                          <CheckCircle2 className="mx-auto mb-3 text-indigo-500" size={32} />

              <h3 className="font-semibold text-slate-800 mb-2">Availability</h3>

              <p className="text-slate-600">Open for projects</p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
