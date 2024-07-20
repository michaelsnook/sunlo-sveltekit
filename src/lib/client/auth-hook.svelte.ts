// modified from
// https://code.build/p/svelte-5-todo-app-with-firebase-X1Tr3J

import { useSharedStore } from './use-shared-store.svelte'
import { onDestroy } from 'svelte'
import { rune } from './rune.svelte'
import { supabase } from '$lib'
import type { AuthSession } from '@supabase/supabase-js'

export const logout = () => supabase.auth.signOut()

const emptySessionHook = {
	isLoading: true,
	data: null,
	error: null,
	isAuth: false,
	uid: '',
}

const _useSession = () => {
	const session = rune<{
		isLoading: boolean
		data: AuthSession | null
		error: Error | null
		isAuth: boolean
		uid: string
	}>(emptySessionHook)

	// console.log(`Running this hook listener setup for u`)

	const { data: listener } = supabase.auth.onAuthStateChange((event, newSession) => {
		console.log(`Firing the auth state changed callback: ${event}`, newSession)
		if (event !== 'SIGNED_OUT') {
			session.value = {
				isLoading: false,
				data: newSession,
				isAuth: newSession?.user.role === 'authenticated',
				uid: newSession?.user.id || '',
				error: null,
			}
			// console.log(`flushed sink`, session, session.value, session.value.data)

			if (newSession?.user.id !== session.value.data?.user.id) {
				// clear local cache maybe?
			}
		} else {
			session.value = { ...emptySessionHook, isLoading: false }
			// console.log(`cleared context and flushed`, session.value)
		}
	})

	onDestroy(listener.subscription.unsubscribe)

	return session
}

export const useSession = (defaultSession: AuthSession | null = null) =>
	useSharedStore('session', _useSession, defaultSession)
