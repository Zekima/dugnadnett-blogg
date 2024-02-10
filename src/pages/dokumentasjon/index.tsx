import Image from 'next/image'
import React from 'react'

import Container from '~/components/Container'

export default function IndexPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-2">
          <div className="p-5 bg-gray-300 w-1/5">
            <Image src="/docs.png" height={125} width={90} alt="" />
            <p className="mt-2">Prosjektskisse →</p>
          </div>
          <div className="p-5 bg-gray-300 w-1/5">
            <Image src="/docs.png" height={125} width={90} alt="" />
            <p className="mt-2">Prosjektbeskrivelse →</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="p-5 bg-gray-300 w-1/5">
            <Image src="/slides.png" height={125} width={90} alt="" />
            <p className="mt-2">Milepæl 1 Presentasjon →</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
