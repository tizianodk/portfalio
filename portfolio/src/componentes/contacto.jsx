import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpblgre");
  if (state.succeeded) {
      return alert('Gracias por Tu mensaje');
  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
        </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              placeholder="tu@email.com"
              required
            />

        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo
        </label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                placeholder="Tu nombre"
                required
            />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Asunto
            </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="¿En qué puedo ayudarte?"
                    required
                />


        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje
            </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                />
        <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        disabled={state.submitting}>
        Enviar Mensaje
      </button>
    </form>
  );
}

export default ContactForm;