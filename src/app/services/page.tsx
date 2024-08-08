'use client'
// import Image from 'next/image'
import React, { useEffect } from 'react'
import { MainTemplate } from '../modules/template'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

export default function ServicesPage() {
  return (
    <MainTemplate>
      <div className="w-full font-mono bg-gray-200 p-12 rounded shadow">
        <div className=" w-3/4 markdown prose w-full break-words dark:prose-invert light">
          <div className="markdown prose w-full break-words dark:prose-invert light">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components&apos;
                  aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h3>Web Solutions Architecture Services</h3>
            <Accordion type="single" collapsible className="w-full">
              <ol>
                <li>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <p>
                        <strong>Web Application Development</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Custom Web Application Design</strong>: Crafting web experiences
                          as unique as your brand. Because your business deserves nothing less than
                          a tailor-made digital solution.
                        </li>
                        <li>
                          <strong>Single Page Application (SPA) Development</strong>: Creating
                          lightning-fast SPAs that give your users everything they need, all in one
                          place—because nobody likes waiting.
                        </li>
                        <li>
                          <strong>Progressive Web App (PWA) Development</strong>: Building PWAs that
                          work like a dream, online or offline. Your app should age gracefully, just
                          like a fine wine.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <p>
                        <strong>E-commerce Solutions</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>E-commerce Platform Development</strong>: Building online stores
                          that are as smooth as silk. Let’s turn casual browsers into loyal
                          customers, effortlessly.
                        </li>
                        <li>
                          <strong>Payment Gateway Integration</strong>: Ensuring your transactions
                          are seamless, secure, and stress-free. Because your customers deserve a
                          checkout that just <em>works</em>.
                        </li>
                        <li>
                          <strong>Custom Shopping Cart Solutions</strong>: Designing shopping carts
                          that are smooth, reliable, and tailored to your unique needs—no squeaky
                          wheels, guaranteed.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <p>
                        <strong>Cloud Services</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Cloud Architecture Design</strong>: Designing cloud solutions that
                          are as solid as they are scalable. With us, your data is in the best
                          possible hands—no stormy weather here.
                        </li>
                        <li>
                          <strong>Cloud Migration Services</strong>: Guiding your business to the
                          cloud with the grace of a first-class upgrade. Say goodbye to the old and
                          hello to a brighter, cloud-powered future.
                        </li>
                        <li>
                          <strong>Cloud-Based Application Development</strong>: Developing cloud
                          apps that are as reliable as they are innovative. We’re building castles
                          in the sky that you can actually count on.
                        </li>
                        <li>
                          <strong>Serverless Computing</strong>: Creating serverless solutions that
                          free you from the shackles of traditional infrastructure. Who needs
                          servers when you have the cloud?
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      <p>
                        <strong>DevOps and Automation</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Continuous Integration and Continuous Deployment (CI/CD)</strong>:
                          Automating your development process so you can focus on what you do
                          best—innovating. Let us handle the rest, effortlessly.
                        </li>
                        <li>
                          <strong>Infrastructure as Code (IaC)</strong>: Designing infrastructure
                          that’s not just code—it’s art. We’ll build it right, from the ground up,
                          every time.
                        </li>
                        <li>
                          <strong>Automated Testing and Monitoring</strong>: Keeping your systems
                          running smoothly, 24/7, with the power of automation. Our robots have your
                          back, day and night.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      <p>
                        <strong>Content Management Systems (CMS)</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Custom CMS Development</strong>: Creating content management
                          systems that are as intuitive as they are powerful. Because managing your
                          content should be a joy, not a chore.
                        </li>
                        <li>
                          <strong>CMS Integration and Migration</strong>: Seamlessly integrating or
                          migrating your content to a new platform without missing a beat. No
                          content left behind, ever.
                        </li>
                        <li>
                          <strong>Headless CMS Solutions</strong>: Building headless CMS solutions
                          that give you ultimate flexibility. Because sometimes, less is more, and
                          your content deserves freedom.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      <p>
                        <strong>API Development and Integration</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Custom API Development</strong>: Crafting APIs that connect your
                          systems like magic. Your data should flow effortlessly—no barriers, just
                          results.
                        </li>
                        <li>
                          <strong>Third-Party API Integration</strong>: Integrating third-party APIs
                          with precision and care. We’ll make sure everything plays nicely together,
                          no matter the complexity.
                        </li>
                        <li>
                          <strong>API Management and Security</strong>: Safeguarding your APIs with
                          the latest in security practices. We’re the guardians of your data—no
                          one’s getting through on our watch.
                        </li>
                      </ul>{' '}
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      {' '}
                      <p>
                        <strong>Mobile Application Development</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Cross-Platform Mobile Apps</strong>: Developing mobile apps that
                          work flawlessly on any device. Because your users deserve a seamless
                          experience, whether they’re on iOS, Android, or somewhere in between.
                        </li>
                        <li>
                          <strong>Native Mobile Application Development</strong>: Building native
                          apps that are fast, beautiful, and perfectly tailored to each platform.
                          We’re talking about apps that feel like home.
                        </li>
                        <li>
                          <strong>Mobile Backend as a Service (MBaaS)</strong>: Powering your mobile
                          apps with a robust backend that scales with your success. Because your
                          app’s backbone should be as strong as your vision.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>
                      <p>
                        <strong>User Experience (UX) and User Interface (UI) Design</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>UX Research and Strategy</strong>: Diving deep into user behavior
                          to create experiences that delight. We’re not just designing for
                          today—we’re building for tomorrow.
                        </li>
                        <li>
                          <strong>UI/UX Design Services</strong>: Crafting interfaces that are as
                          beautiful as they are intuitive. Every pixel, every interaction, designed
                          with passion and precision.
                        </li>
                        <li>
                          <strong>Prototyping and Wireframing</strong>: Bringing your ideas to life
                          with detailed prototypes and wireframes. We’re turning your vision into
                          reality, step by step.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <p>
                        <strong>Security and Compliance</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Web Application Security Audits</strong>: Conducting rigorous
                          security audits to keep your web applications safe and sound. Think of us
                          as your digital bodyguards—no one messes with our clients.
                        </li>
                        <li>
                          <strong>Data Privacy and Compliance</strong>: Ensuring your systems are
                          compliant with GDPR, HIPAA, and all the other acronyms that matter. We
                          take your privacy as seriously as you do.
                        </li>
                        <li>
                          <strong>Penetration Testing</strong>: Putting your systems to the test
                          with ethical hacking that identifies vulnerabilities before the bad guys
                          do. We’re on your side, and we take security seriously.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-10">
                    <AccordionTrigger>
                      <p>
                        <strong>Performance Optimization</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Website Performance Audits</strong>: Analyzing every aspect of
                          your site to make it faster, leaner, and meaner. Because speed isn’t just
                          a feature—it’s a necessity.
                        </li>
                        <li>
                          <strong>Load Balancing and Caching Solutions</strong>: Implementing
                          solutions that keep your site running smoothly, no matter the traffic.
                          We’re here to keep the traffic jams at bay.
                        </li>
                        <li>
                          <strong>Front-End and Back-End Optimization</strong>: Fine-tuning every
                          line of code for maximum performance. We’re not just speeding things
                          up—we’re creating a seamless experience.
                        </li>
                      </ul>{' '}
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-11">
                    <AccordionTrigger>
                      <p>
                        <strong>Search Engine Optimization (SEO)</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Technical SEO Audits</strong>: Delving into the technical aspects
                          of SEO to boost your search rankings. Google will love your site, and so
                          will your customers.
                        </li>
                        <li>
                          <strong>On-Page and Off-Page SEO</strong>: Crafting an SEO strategy that
                          elevates your online presence. From content to backlinks, we’ve got you
                          covered.
                        </li>
                        <li>
                          <strong>SEO Strategy and Implementation</strong>: Building an SEO strategy
                          that gets results, not just rankings. Let’s climb the search engine
                          ladder, one step at a time.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-12">
                    <AccordionTrigger>
                      <p>
                        <strong>Data Analytics and Reporting</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Web Analytics Integration</strong>: Integrating analytics tools
                          that give you deep insights into your users. Because understanding your
                          data is the key to growth.
                        </li>
                        <li>
                          <strong>Custom Reporting Dashboards</strong>: Creating dashboards that
                          turn complex data into actionable insights. We make data look good—really
                          good.
                        </li>
                        <li>
                          <strong>Business Intelligence Solutions</strong>: Developing BI solutions
                          that empower your decision-making. Let’s turn data into wisdom and wisdom
                          into action.
                        </li>
                      </ul>{' '}
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-13">
                    <AccordionTrigger>
                      <p>
                        <strong>Support and Maintenance</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Ongoing Website Maintenance</strong>: Providing continuous support
                          to keep your website in peak condition. We’re like the personal trainer
                          your website didn’t know it needed.
                        </li>
                        <li>
                          <strong>Technical Support Services</strong>: Offering tech support that’s
                          always there when you need it. No more headaches, just solutions.
                        </li>
                        <li>
                          <strong>Managed Hosting Solutions</strong>: Hosting your website in a
                          safe, secure environment where it can thrive. Think of it as your
                          website’s new home, sweet home.
                        </li>
                      </ul>{' '}
                    </AccordionContent>
                  </AccordionItem>
                </li>
                <li>
                  <AccordionItem value="item-14">
                    <AccordionTrigger>
                      <p>
                        <strong>Consulting and Strategy</strong>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <strong>Digital Transformation Strategy</strong>: Guiding your business
                          through the digital transformation process with expertise and care.
                          Because staying ahead of the curve is not just an option—it’s a necessity.
                        </li>
                        <li>
                          <strong>Technology Roadmapping</strong>: Crafting a technology roadmap
                          that aligns with your business goals. We’re your GPS on the journey to
                          digital success.
                        </li>
                        <li>
                          <strong>IT Infrastructure Consulting</strong>: Designing IT infrastructure
                          that’s not just functional, but future-proof. We’re laying the foundation
                          for your business’s growth.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </li>
              </ol>
            </Accordion>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
