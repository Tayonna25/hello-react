
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ozjvlqhcfakmzbsrucuu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96anZscWhjZmFrbXpic3J1Y3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxODk2NTgsImV4cCI6MTk5Nzc2NTY1OH0.tH8M5cojf1zLpB_5I9ekz2k91V3W3fV6n2639OtaAfI'
export const supabase = createClient(supabaseUrl, supabaseKey)