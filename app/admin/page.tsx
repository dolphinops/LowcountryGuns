'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Shield, Save, LogOut, CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { broadcastMotdUpdated } from '@/lib/motd-broadcast';

const SESSION_FLAG = 'lcguns_admin_session';
const BEARER_KEY = 'lcguns_motd_bearer';

function getStoredBearer(): string {
  if (typeof window === 'undefined') return '';
  return sessionStorage.getItem(BEARER_KEY) ?? '';
}

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [charLimit] = useState(100);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_FLAG);
    const bearer = getStoredBearer();
    if (session === 'true' && bearer) {
      setIsAdmin(true);
      fetchCurrentMOTD();
    } else if (session === 'true' && !bearer) {
      localStorage.removeItem(SESSION_FLAG);
    }
  }, []);

  const fetchCurrentMOTD = async () => {
    try {
      const res = await fetch('/api/motd', { cache: 'no-store' });
      const data = await res.json();
      setMessage(data.message || '');
    } catch (err) {
      console.error('Failed to fetch MOTD:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/motd/verify', {
        method: 'POST',
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.status === 503) {
        setError(
          'Admin login is not configured on the server. Set MOTD_ADMIN_SECRET in the deployment environment (or .env.local locally), then restart the app.',
        );
        return;
      }
      if (res.status === 401) {
        setError('Invalid password. Please try again.');
        return;
      }
      if (!res.ok) {
        setError(`Login failed (HTTP ${res.status}). Try again or contact support.`);
        return;
      }
      sessionStorage.setItem(BEARER_KEY, password);
      localStorage.setItem(SESSION_FLAG, 'true');
      setPassword('');
      setIsAdmin(true);
      fetchCurrentMOTD();
    } catch {
      setError('Could not reach server. Try again.');
    }
  };

  const handleSave = async () => {
    if (message.length > charLimit) {
      setError(`Message exceeds ${charLimit} characters.`);
      return;
    }

    setStatus('loading');
    setError('');

    const bearer = getStoredBearer();
    if (!bearer) {
      setStatus('error');
      setError('Session expired. Please log out and sign in again.');
      return;
    }

    try {
      const res = await fetch('/api/motd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearer}`,
        },
        body: JSON.stringify({ message }),
      });

      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      const apiError = data?.error;

      if (res.ok) {
        broadcastMotdUpdated();
        fetchCurrentMOTD();
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
      } else if (res.status === 401) {
        setStatus('error');
        setError('Session expired. Please log out and sign in again.');
      } else if (res.status === 503) {
        setStatus('error');
        setError(
          'Server is missing MOTD_ADMIN_SECRET. Add it to the environment and restart before saving.',
        );
      } else if (res.status === 400) {
        setStatus('error');
        setError(
          'Message could not be saved (invalid input). Keep text at or under 100 characters.',
        );
      } else if (res.status === 502) {
        setStatus('error');
        setError(
          apiError ||
            'Redis rejected the update. Confirm the REST token in Vercel has write access.',
        );
      } else if (res.status === 500 && apiError === 'KV Store not configured on Vercel') {
        setStatus('error');
        setError(
          'Redis is not configured. In Vercel, add Upstash Redis (Marketplace) or legacy KV env vars, then pull env locally. Need KV_REST_* or UPSTASH_REDIS_REST_* URL + token.',
        );
      } else if (res.status === 500) {
        setStatus('error');
        setError('Could not save the banner. Try again later.');
      } else {
        setStatus('error');
        setError(`Save failed (HTTP ${res.status}). Try again.`);
      }
    } catch {
      setStatus('error');
      setError('System Error: Could not update banner at this time.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem(SESSION_FLAG);
    sessionStorage.removeItem(BEARER_KEY);
    setPassword('');
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[var(--color-surface)] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full max-w-md bg-white border border-[var(--color-card-border)] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
          <Image 
            src="/images/legacy/Logo-2.webp" 
            alt="Logo" 
            width={180} 
            height={60} 
            className="mx-auto mb-8 h-12 w-auto" 
          />
          <h1 className="text-2xl font-black text-[var(--color-foreground)] mb-2 tracking-tight">Admin Login</h1>
          <p className="text-[var(--color-muted-fg)] text-sm mb-8">Access the Message of the Day control panel.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-left space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] ml-2">Access Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-14 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-base)]/50 transition-all"
                autoFocus
                required
              />
            </div>
            
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold animate-shake">
                <AlertTriangle className="w-4 h-4" /> {error}
              </div>
            )}
            
            <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-black group">
              Sign In <Shield className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </form>
        </div>
        <p className="mt-8 text-[var(--color-muted-fg-light)] text-xs font-medium">© 2026 Lowcountry Guns & Range</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex flex-col items-center justify-start py-12 px-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-12">
          <Image src="/images/legacy/Logo-2.webp" alt="Logo" width={140} height={46} className="h-10 w-auto" />
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-card-border)] rounded-xl text-xs font-bold text-zinc-500 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm"
          >
            Logout <LogOut className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white border border-[var(--color-card-border)] rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-[var(--color-card-border)] bg-zinc-50/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[var(--color-primary-base)] text-white rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[var(--color-foreground)]">Message of the Day</h2>
            </div>
            <p className="text-[var(--color-muted-fg)] text-sm ml-11">This banner appears at the very top of the website for all visitors.</p>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)]">Banner text</label>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${message.length > charLimit ? 'text-red-500' : 'text-[var(--color-muted-fg-light)]'}`}>
                  {message.length} / {charLimit} Characters
                </span>
              </div>
              
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter alert or announcement (e.g. 'Opening early this Sunday at 8 AM!')"
                className={`w-full p-6 bg-[var(--color-surface)] border rounded-2xl font-semibold focus:outline-none transition-all resize-none h-32 ${
                  message.length > charLimit ? 'border-red-400 focus:ring-red-200' : 'border-[var(--color-card-border)] focus:ring-[var(--color-primary-base)]/30 focus:ring-2'
                }`}
                maxLength={charLimit + 20}
              />
              <p className="text-[10px] text-[var(--color-muted-fg-light)] px-2 font-medium italic">NOTE: Clear the text and save to hide the banner completely.</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[var(--color-card-border)]">
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-700 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                  <CheckCircle className="w-5 h-5" /> All settings saved. Site is updating now!
                </div>
              )}

              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm font-bold animate-shake">
                  <AlertTriangle className="w-5 h-5" /> {error}
                </div>
              )}

              <Button 
                onClick={handleSave} 
                disabled={status === 'loading' || message.length > charLimit}
                className="w-full h-16 rounded-2xl text-lg font-black group relative overflow-hidden"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">Updating...</span>
                ) : (
                  <span className="flex items-center gap-2">Save Changes <Save className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" /></span>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-4">
          <div className="p-2 bg-amber-200 rounded-lg shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-900 mb-1">Production Sync</h4>
            <p className="text-xs text-amber-800/80 leading-relaxed font-medium transition-all">
              Changes reflect instantly. You need <span className="font-mono text-[10px]">MOTD_ADMIN_SECRET</span> set on the server and Vercel KV connected for the banner to persist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
