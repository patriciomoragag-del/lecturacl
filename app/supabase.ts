import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pcfrezymophbunibqmmk.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_wCq5RHh680zalPe28DB0KA_RmTzwX2c'

export const supabase = createClient(supabaseUrl, supabaseKey)