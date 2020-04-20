import { ActionType } from "./ActionType"
import {
  AuthContextModule,
  AuthIntent,
  AuthModalType,
  AuthTrigger,
  AuthService,
} from "./Authentication"

/**
 * Schemas for individual events by ActionType
 */

/**
 * A user viewed an authentication form
 *
 * This schema describes events sent to Segment from [[authImpression]]
 *
 *  @example
 *  ```
 *  {
 *    action: "authImpression"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    modal_copy: "Sign up to follow artists"
 *    onboarding: true
 *    trigger: "timed"
 *    trigger_seconds: 4
 *    type: "signup"
 *  }
 * ```
 */
export interface AuthImpression {
  action: ActionType.authImpression
  context_module: AuthContextModule
  intent: AuthIntent
  modal_copy?: string
  onboarding: boolean
  trigger: AuthTrigger
  trigger_seconds?: number
  type: AuthModalType
}

/**
 * A user created an account
 *
 * This schema describes events sent to Segment from [[createdAccount]]
 *
 *  @example
 *  ```
 *  {
 *    action: "createdAccount"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    trigger: "timed"
 *    auth_redirect: "https://artsy.net/artist/andy-warhol"
 *    service: "email"
 *  }
 * ```
 */
export interface CreatedAccount {
  action: ActionType.createdAccount
  context_module: AuthContextModule
  intent: AuthIntent
  trigger: AuthTrigger
  auth_redirect: string
  service: AuthService
}

/**
 * A user successfully logged in to their existing account
 *
 * This schema describes events sent to Segment from [[successfullyLoggedIn]]
 *
 *  @example
 *  ```
 *  {
 *    action: "successfullyLoggedIn"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    trigger: "timed"
 *    auth_redirect: "https://artsy.net/artist/andy-warhol"
 *    service: "email"
 *  }
 * ```
 */
export interface SuccessfullyLoggedIn {
  action: ActionType.successfullyLoggedIn
  context_module: AuthContextModule
  intent: AuthIntent
  trigger: AuthTrigger
  auth_redirect: string
  service: AuthService
}
