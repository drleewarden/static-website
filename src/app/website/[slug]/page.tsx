"use client"
import React from 'react'
import { COMPANIES } from '../../services/allPlacesWorked'

import { websiteStore } from '@/app/store/websites.store'
import { hyphenateAndLowercase } from '@/app/utils'
import { IRecords } from '@/app/'
import Link from 'next/link'

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//    return COMPANIES.map(site => {
//    const arr = {slug: hyphenateAndLowercase({
//         text: site.name !== null ? site.name : '',
//         hyphenate: true,
//         lowercase: true,
//         punctuation: true,
//       })}
//       console.log(arr)
//       return arr
//     })
    
//   }
 
const Websites = ({ params }: { params: { slug: string } }) => {

    const { selectedWebsite } = websiteStore((state) => ({
        selectedWebsite: state.selectedWebsite,
    }))
    let contentModel: IRecords = selectedWebsite
    if (contentModel?.name === null) {
        hyphenateAndLowercase({ text: params.slug, hyphenate: true, lowercase: true })
        const model: IRecords = COMPANIES.filter(item => hyphenateAndLowercase({ text: item.name ?? '', hyphenate: true, lowercase: true }) === params.slug)[0]
        contentModel = model
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-left">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{contentModel.name}</h1>
                        {contentModel.website && <p className="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">{contentModel.website}</p>}
                        <p className="py-6"> {contentModel.description} </p>
                        {
                            contentModel?.technical &&
                            contentModel.technical.map(item => (<><div className="badge badge-outline m-1">{item}</div></>))
                        }
                        <br />
                        <br />
                        <Link href="/"><button className="btn btn-primary">Return home</button></Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites
