import {} from 'react'
import ImageThumb from '../ImageThumb/ImageThumb'

export default function MyAnalises() {
  return (

    <section className="flex items-center justify-center min-h-[600px] w-full">
      <article
        role='grid'
        className='overflow-hidden rounded-lg bg-background shadow flex flex-wrap'

      >
        <ImageThumb className='' src="https://images.unsplash.com/photo-1719567225847-ddd4fde6102a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random image from unsplash" altText={''} />
        <ImageThumb src="https://images.unsplash.com/photo-1718461360235-6a1174661fa4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random image from unsplash" altText={''} />
        <ImageThumb src="https://images.unsplash.com/photo-1718585708744-573c54a2c38c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random image from unsplash" altText={''} />
      </article>
    </section>
  )
}
