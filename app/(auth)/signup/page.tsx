import { Metadata } from "next"
import { redirect } from "next/navigation"
import { UserSignupForm } from "@/components/modules/auth/UserSignupForm"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { getCurrentSession } from "@/lib/session"
import { cookies } from "next/headers"
import { Heading3 } from "@/components/ui/typography"

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup a new account",
}

export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })
  const session = await getCurrentSession(supabase)

  if (session) {
    redirect(`/apps/chat`)
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <Heading3>AI Fusion Kit</Heading3>
        <p className="text-sm text-muted-foreground">
          Empowering Your Imagination with AI Services
        </p>
      </div>
      <UserSignupForm />
    </>
  )
}