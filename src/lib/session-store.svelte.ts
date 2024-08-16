import type { User } from '@supabase/supabase-js'
import { supabase } from '$lib'
import type { QueryClient } from '@tanstack/svelte-query'

export function useAuth(queryClient?: QueryClient) {
	let user: User = $state(null)
	let isPending: boolean = $state(true)

	$effect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			console.log(`Auth state changed: ${event}`, session)
			user = session?.user ?? null
			isPending = false
		})
	})

	return {
		get isAuth() {
			return user?.role === 'authenticated'
		},
		get id() {
			return user?.id ?? ''
		},
		get email() {
			return user?.email ?? ''
		},
		get isPending() {
			return isPending
		},
	}
}
