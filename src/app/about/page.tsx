'use client'
// import Image from 'next/image'
import React, { useEffect } from 'react'
import { about } from '../services/about'
import { MainTemplate } from '../modules/template'
import Image from 'next/image'
import { actData, fetchCharacters } from '../services'
export default function About() {
  actData().then((data) => console.log('data:', data))
  const list = (arr: string[]) => {
    return arr?.map((item, index) => <span key={index}>{item},</span>)
  }
  return (
    <MainTemplate>
      <div className="hero min-h-screen bg-base-200">
        loaded
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/me.jpg"
            width="500"
            height="500"
            alt="Picture of the darryn lee-warden"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-9/12 bg-gray-200 p-12 rounded shadow">
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6 w-9/12 text-lg font-semibold ">
              My technical skills encompass an array of tools and frameworks, including:
            </p>
            <ul>
              {about.technical.map((item, index) => (
                <li key={index} className="p-2">
                  <strong>{item.title}: </strong>
                  {item.skills && list(item.skills)}
                  {/* {item.skills?.map(skill => <span>{skill},<span/>)} */}
                </li>
              ))}
            </ul>
            <button className="mt-6 btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
