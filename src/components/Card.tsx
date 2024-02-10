import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Post } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

export default function Card({ post }: { post: Post }) {
  return (
    <div className="card">
      {post.mainImage ? (
        <Image
          className="card__cover"
          src={urlForImage(post.mainImage).width(466).height(266).url()}
          height={266}
          width={466}
          alt=""
        />
      ) : (
        <div className="card__cover--none" />
      )}
      <div className="card__container">
        <h3 className="text-2xl font-bold mt-3">
          <a className="card__link" href={`/innlegg/${post.slug.current}`}>
            {post.title}
          </a>
        </h3>
        <p className="text-md">{post.excerpt}</p>
        <p className="font-bold text-xs absolute right-2">{formatDate(post._createdAt)}</p>
      </div>
    </div>
  )
}
