import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px'>
          <Image />
        </div>
      </section>
    </div>
  )
}
