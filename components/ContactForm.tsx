'use client';

import React, { useState } from 'react';
import Botpoison from '@botpoison/browser';

const botpoison = new Botpoison({
  publicKey: 'pk_5d595036-399b-469c-ab80-7b3b7e24c4c4'
});

interface ContactFormProps {
  idPrefix: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ idPrefix }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    unternehmen: '',
    nachricht: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { solution } = await botpoison.challenge();

      const response = await fetch('https://submit-form.com/2YAIRMgEy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _botpoison: solution
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', telefon: '', unternehmen: '', nachricht: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h4 className="text-xl font-semibold text-slate-900 mb-2">Vielen Dank!</h4>
        <p className="text-slate-600">Ihre Nachricht wurde gesendet. Ich melde mich in Kürze.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-slate-700 mb-1">
          Voller Name *
        </label>
        <input
          type="text"
          id={`${idPrefix}-name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          placeholder="Max Mustermann"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-slate-700 mb-1">
          E-Mail-Adresse *
        </label>
        <input
          type="email"
          id={`${idPrefix}-email`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          placeholder="max@beispiel.de"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-telefon`} className="block text-sm font-medium text-slate-700 mb-1">
          Telefonnummer *
        </label>
        <input
          type="tel"
          id={`${idPrefix}-telefon`}
          name="telefon"
          value={formData.telefon}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          placeholder="+49 123 456789"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-unternehmen`} className="block text-sm font-medium text-slate-700 mb-1">
          Unternehmensname
        </label>
        <input
          type="text"
          id={`${idPrefix}-unternehmen`}
          name="unternehmen"
          value={formData.unternehmen}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          placeholder="Musterfirma GmbH"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-nachricht`} className="block text-sm font-medium text-slate-700 mb-1">
          Nachricht
        </label>
        <textarea
          id={`${idPrefix}-nachricht`}
          name="nachricht"
          value={formData.nachricht}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-none"
          placeholder="Wie kann ich Ihnen helfen?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Absenden'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Fehler beim Senden. Bitte versuchen Sie es erneut.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
