import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '~/components/Container'

export default function IndexPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-2">
          <Link href="/prosjektskisse.pdf">
          <div className="p-5 bg-gray-300 w-[250px]">
            <Image src="/docs.png" height={125} width={90} alt="" />
            <p className="mt-2">Prosjektskisse →</p>
          </div>
          </Link>
          <Link href="/prosjektbeskrivelse.pdf">
          <div className="p-5 bg-gray-300 w-[250px]">
            <Image src="/docs.png" height={125} width={90} alt="" />
            <p className="mt-2">Prosjektbeskrivelse →</p>
          </div>
          </Link>
        </div>

        <div className="flex gap-2">
          <Link href="/presentasjon1.pdf">
          <div className="p-5 bg-gray-300 w-[250px]">
            <Image src="/slides.png" height={125} width={90} alt="" />
            <p className="mt-2">Milepæl 1 Presentasjon →</p>
          </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}
