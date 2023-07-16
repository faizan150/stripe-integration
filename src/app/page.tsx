import Image from 'next/image'
import StripeCheckOutButton from '@/components/checkOut'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Stripe Integration 
        <StripeCheckOutButton />
      </div>
    </main>
  )
}
