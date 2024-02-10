import Link from 'next/link'
import React from 'react'

export default function Welcome() {
  return (
    <div className="flex space-between">
      <div className="bg-green-400 w-[40%] md:w-1/3 h-[330px] p-[20px] lg:p-[75px] text-sm sm:text-base">
        <p>
          Velkommen til vår prosjektwebside! Her finner du alt fra dokumentasjon
          og kode til nyttige linker. I tillegg inneholder prosjektet en blogg
          hvor vi deler oppdateringer om fremdriften fortløpende.
        </p>
      </div>
      <div className="flex flex-col text-xl sm:text-2xl w-2/3 ml-3 sm:ml-5 justify-between ">
        <div className="bg-gray-300 p-8  underline">
          <a href="https://github.com/Zekima/dugnadnett"><p className=''>Repository → </p></a>
        </div>
        <div className="bg-gray-300 p-8 underline">
         <Link href="/dokumentasjon"> <p className=''>Dokumentasjon → </p></Link>
        </div>
        <div className="bg-gray-300 p-8 underline">
          <a href="https://dugnadnett.no/"><p className=''>Gå til dugnadnett.no → </p></a>
        </div>
      </div>
    </div>
  )
}
