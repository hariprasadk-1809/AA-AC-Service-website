import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ── Types matching your Supabase tables ──

export interface Review {
  id:           string
  review_token: string
  customer_name:string
  rating:       number
  comment:      string
  is_published: boolean
  job_id?:      string
  created_at:   string
}

export interface Enquiry {
  id?:        string
  name:       string
  phone:      string
  company?:   string
  service?:   string
  message?:   string
  status?:    string
  created_at?:string
}

export interface Job {
  id:          string
  customer_name:string
  phone:       string
  address:     string
  service_type:string
  status:      string
  created_at:  string
}
