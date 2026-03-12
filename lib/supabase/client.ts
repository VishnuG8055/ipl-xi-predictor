// lib/supabase/client.ts — Creates a Supabase client for use in browser/client components
// Returns null if Supabase is not configured yet

import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If Supabase is not configured, return null
  if (
    !url ||
    !key ||
    url.includes('placeholder') ||
    url.includes('your_supabase') ||
    key.includes('placeholder') ||
    key.includes('your_supabase')
  ) {
    return null;
  }

  return createBrowserClient(url, key);
}
