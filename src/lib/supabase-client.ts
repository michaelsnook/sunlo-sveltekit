import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '$lib/types/supabase'

const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)

export default supabase
