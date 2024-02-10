import React from 'react'
import Card from './Card'

export default function BlogContainer({ posts }) {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold my-3 ml-1.5 xl:ml-0">Blogg</h1>
      <div className="p-5 bg-gray-300">
        <section className='grid grid-cols-1  gap-4 lg:grid-cols-2 xl:grid-cols-3'>
          {posts.length ? (
            posts.map((post) => <Card key={post._id} post={post} />)
          ) : (
            <p>Ingen innlegg.</p>
          )}
        </section>
      </div>
    </div>
  )
}
