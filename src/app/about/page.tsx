// import Image from 'next/image'
import React from 'react'
import { about } from '../services/about'
import { MainTemplate } from '../modules/template'

export default function About() {
    const list = (arr: string[]) => {
        return arr?.map((item) => <span>{item},</span>)
    }
    return (
        <MainTemplate>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/me.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="w-9/12 bg-gray-200 p-12 rounded shadow">
                        <h1 className="text-5xl font-bold">About</h1>
                        <p className="py-6 w-9/12 text-lg font-semibold ">My technical skills encompass an array of tools and frameworks, including:</p>
                        <ul>
                            {
                                about.technical.map(item =>
                                (
                                    <li className="p-2">
                                        <strong>{item.title}: </strong>
                                        {item.skills && list(item.skills)}
                                        {/* {item.skills?.map(skill => <span>{skill},<span/>)} */}
                                    </li>

                                )
                                )
                            }

                        </ul>
                        <button className="mt-6 btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </MainTemplate>

    )
}


