'use client'
// import Image from 'next/image'
import React, { useEffect } from 'react'

export default function ServicesPage() {
  return (
    <div className="text-base py-[18px] px-3 md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
      <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <div className="group/conversation-turn relative flex w-full min-w-0 flex-col agent-turn">
          <div className="flex-col gap-1 md:gap-3">
            <div className="flex max-w-full flex-col flex-grow">
              <div className="min-h-[20px] text-message flex w-full flex-col items-end gap-2 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                <div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                  <div className="markdown prose w-full break-words dark:prose-invert light">
                    <h3>Web Solutions Architecture Services</h3>
                    <ul>
                      <li>
                        <p>
                          <strong>Web Application Development</strong>
                        </p>
                        <ul>
                          <li>Custom Web Application Design (because one size never fits all)</li>
                          <li>
                            Single Page Application (SPA) Development (like a spa day for your
                            website)
                          </li>
                          <li>
                            Progressive Web App (PWA) Development (because your app should age like
                            fine wine)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>E-commerce Solutions</strong>
                        </p>
                        <ul>
                          <li>
                            E-commerce Platform Development (shopping carts that won’t get stuck)
                          </li>
                          <li>
                            Payment Gateway Integration (smooth transactions, minus the hidden fees)
                          </li>
                          <li>Custom Shopping Cart Solutions (no squeaky wheels, promise)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Cloud Services</strong>
                        </p>
                        <ul>
                          <li>
                            Cloud Architecture Design (no more guessing if it’s going to rain)
                          </li>
                          <li>
                            Cloud Migration Services (because your data deserves a first-class seat)
                          </li>
                          <li>
                            Cloud-Based Application Development (like building castles in the sky)
                          </li>
                          <li>Serverless Computing (because who needs servers, anyway?)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>DevOps and Automation</strong>
                        </p>
                        <ul>
                          <li>
                            Continuous Integration and Continuous Deployment (CI/CD) (automate all
                            the things!)
                          </li>
                          <li>
                            Infrastructure as Code (IaC) (building your infrastructure like a boss)
                          </li>
                          <li>
                            Automated Testing and Monitoring (robots doing the boring stuff for you)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Content Management Systems (CMS)</strong>
                        </p>
                        <ul>
                          <li>Custom CMS Development (contentment for your content)</li>
                          <li>CMS Integration and Migration (no content left behind)</li>
                          <li>Headless CMS Solutions (because sometimes, less is more)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>API Development and Integration</strong>
                        </p>
                        <ul>
                          <li>Custom API Development (connecting the dots, one API at a time)</li>
                          <li>Third-Party API Integration (playing nicely with others)</li>
                          <li>API Management and Security (keeping the bad guys out)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Mobile Application Development</strong>
                        </p>
                        <ul>
                          <li>
                            Cross-Platform Mobile Apps (because everyone deserves an app, regardless
                            of their phone)
                          </li>
                          <li>
                            Native Mobile Application Development (going native, no headdresses
                            required)
                          </li>
                          <li>
                            Mobile Backend as a Service (MBaaS) (backends that don’t backfire)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>User Experience (UX) and User Interface (UI) Design</strong>
                        </p>
                        <ul>
                          <li>UX Research and Strategy (because guessing is so last century)</li>
                          <li>UI/UX Design Services (making users happy, one click at a time)</li>
                          <li>Prototyping and Wireframing (blueprints for the digital age)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Security and Compliance</strong>
                        </p>
                        <ul>
                          <li>
                            Web Application Security Audits (think of us as your digital bodyguards)
                          </li>
                          <li>Data Privacy and Compliance (GDPR, HIPAA, OMG-WTF compliant)</li>
                          <li>Penetration Testing (no, it’s not what you’re thinking)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Performance Optimization</strong>
                        </p>
                        <ul>
                          <li>Website Performance Audits (faster than a speeding bullet)</li>
                          <li>
                            Load Balancing and Caching Solutions (keeping the traffic jams at bay)
                          </li>
                          <li>Front-End and Back-End Optimization (speed demons, unite!)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Search Engine Optimization (SEO)</strong>
                        </p>
                        <ul>
                          <li>Technical SEO Audits (because Google loves a well-organized site)</li>
                          <li>
                            On-Page and Off-Page SEO (taking your website from “meh” to marvelous)
                          </li>
                          <li>
                            SEO Strategy and Implementation (climbing the search engine ladder)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Data Analytics and Reporting</strong>
                        </p>
                        <ul>
                          <li>Web Analytics Integration (because numbers don’t lie)</li>
                          <li>Custom Reporting Dashboards (data served on a silver platter)</li>
                          <li>
                            Business Intelligence Solutions (making you look smarter than you
                            already are)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Support and Maintenance</strong>
                        </p>
                        <ul>
                          <li>
                            Ongoing Website Maintenance (like a personal trainer for your site)
                          </li>
                          <li>Technical Support Services (no more pulling your hair out)</li>
                          <li>Managed Hosting Solutions (your website’s new home, sweet home)</li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          <strong>Consulting and Strategy</strong>
                        </p>
                        <ul>
                          <li>Digital Transformation Strategy (because analog is so 1999)</li>
                          <li>Technology Roadmapping (giving you a GPS for your tech journey)</li>
                          <li>
                            IT Infrastructure Consulting (making sure your foundation doesn’t
                            crumble)
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>
                      These services, sprinkled with humor, can help potential clients understand
                      the expertise and friendly approach of the web solutions architect, making
                      them an approachable and valuable partner for their web and technology needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 flex gap-3 empty:hidden -ml-2">
              <div className="items-center justify-start rounded-xl p-1 flex">
                <div className="flex items-center">
                  <span className="" data-state="closed">
                    <button className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary">
                      <span className="flex h-[30px] w-[30px] items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="icon-md-heavy"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M11 4.91a.5.5 0 0 0-.838-.369L6.676 7.737A1 1 0 0 1 6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 1 .676.263l3.486 3.196A.5.5 0 0 0 11 19.09zM8.81 3.067C10.415 1.597 13 2.735 13 4.91v14.18c0 2.175-2.586 3.313-4.19 1.843L5.612 18H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.611zm11.507 3.29a1 1 0 0 1 1.355.401A10.96 10.96 0 0 1 23 12c0 1.85-.458 3.597-1.268 5.13a1 1 0 1 1-1.768-.934A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.085-4.287 1 1 0 0 1 .402-1.356M15.799 7.9a1 1 0 0 1 1.4.2 6.48 6.48 0 0 1 1.3 3.9c0 1.313-.39 2.537-1.06 3.56a1 1 0 0 1-1.673-1.096A4.47 4.47 0 0 0 16.5 12a4.47 4.47 0 0 0-.9-2.7 1 1 0 0 1 .2-1.4"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <span className="" data-state="closed">
                    <button className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary">
                      <span className="flex h-[30px] w-[30px] items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="icon-md-heavy"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <span className="" data-state="closed">
                    <button className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary">
                      <span className="flex h-[30px] w-[30px] items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="icon-md-heavy"
                        >
                          <path
                            fill="currentColor"
                            d="M3.07 10.876C3.623 6.436 7.41 3 12 3a9.15 9.15 0 0 1 6.012 2.254V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.957A7.15 7.15 0 0 0 12 5a7 7 0 0 0-6.946 6.124 1 1 0 1 1-1.984-.248m16.992 1.132a1 1 0 0 1 .868 1.116C20.377 17.564 16.59 21 12 21a9.15 9.15 0 0 1-6-2.244V20a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.043A7.15 7.15 0 0 0 12 19a7 7 0 0 0 6.946-6.124 1 1 0 0 1 1.116-.868"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <div className="flex">
                    <span className="" data-state="closed">
                      <button className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary">
                        <span className="flex h-[30px] w-[30px] items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-md-heavy"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M11.873 21.496a1 1 0 0 1-.992.496l-.454-.056A4 4 0 0 1 7.1 16.79L7.65 15h-.718c-2.637 0-4.553-2.508-3.859-5.052l1.364-5A4 4 0 0 1 8.296 2h9.709a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2c-.26 0-.5.14-.628.364zM14.005 4h-5.71a2 2 0 0 0-1.929 1.474l-1.363 5A2 2 0 0 0 6.933 13h2.072a1 1 0 0 1 .955 1.294l-.949 3.084a2 2 0 0 0 1.462 2.537l3.167-5.543a2.72 2.72 0 0 1 1.364-1.182V5a1 1 0 0 0-1-1m3 9V5c0-.35-.06-.687-.171-1h1.17a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </span>
                  </div>
                  <span className="" data-state="closed">
                    <button
                      type="button"
                      id="radix-:r2r:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                      className="cursor-pointer h-[30px] rounded-md px-1 text-token-text-secondary hover:bg-token-main-surface-secondary"
                    >
                      <div className="flex items-center pb-0">
                        <div className="[&amp;_svg]:h-full [&amp;_svg]:w-full icon-md h-4 w-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.898.855a.4.4 0 0 0-.795 0c-.123 1.064-.44 1.802-.943 2.305-.503.503-1.241.82-2.306.943a.4.4 0 0 0 .001.794c1.047.119 1.801.436 2.317.942.512.504.836 1.241.93 2.296a.4.4 0 0 0 .796 0c.09-1.038.413-1.792.93-2.308.515-.516 1.269-.839 2.306-.928a.4.4 0 0 0 .001-.797c-1.055-.094-1.792-.418-2.296-.93-.506-.516-.823-1.27-.941-2.317Z"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M12.001 1.5a1 1 0 0 1 .993.887c.313 2.77 1.153 4.775 2.5 6.146 1.34 1.366 3.3 2.223 6.095 2.47a1 1 0 0 1-.003 1.993c-2.747.238-4.75 1.094-6.123 2.467-1.373 1.374-2.229 3.376-2.467 6.123a1 1 0 0 1-1.992.003c-.248-2.795-1.105-4.754-2.47-6.095-1.372-1.347-3.376-2.187-6.147-2.5a1 1 0 0 1-.002-1.987c2.818-.325 4.779-1.165 6.118-2.504 1.339-1.34 2.179-3.3 2.504-6.118A1 1 0 0 1 12 1.5ZM6.725 11.998c1.234.503 2.309 1.184 3.21 2.069.877.861 1.56 1.888 2.063 3.076.5-1.187 1.18-2.223 2.051-3.094.871-.87 1.907-1.55 3.094-2.05-1.188-.503-2.215-1.187-3.076-2.064-.885-.901-1.566-1.976-2.069-3.21-.505 1.235-1.19 2.3-2.081 3.192-.891.89-1.957 1.576-3.192 2.082Z"
                            ></path>
                          </svg>
                        </div>
                        <span
                          className="overflow-hidden text-clip whitespace-nowrap text-sm"
                          style={{ opacity: 0, paddingLeft: '0px', width: '0px' }}
                        >
                          4o
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="icon-sm text-token-text-quaternary"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="pr-2 lg:pr-0"></div>
            <div className="mt-3 w-full empty:hidden">
              <div className="text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
