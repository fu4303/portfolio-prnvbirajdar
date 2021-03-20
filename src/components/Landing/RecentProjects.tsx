/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <section>
      <div className="text-left mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Recent Projects</h2>
      </div>
      <div className="mb-5 flex flex-col border border-gray-600 hover:border-gray-400 transition rounded-lg md:mt-5">
        <div className=" p-4 ">
          <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex">
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-normal text-gray-100 ">Lift Workout App</h3>
              <p className="text-sm md:text-base font-normal text-gray-300">
                A simple, accessible workout app that allows a user to create, track, and update their daily workout
                routines.
              </p>
              <ul className="flex md:justify-end text-xs mt-3 font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>Next.js</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Firebase</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Tailwind CSS</i>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col border border-gray-600 hover:border-gray-400 transition rounded-lg md:mt-5">
        <div className=" p-4">
          <a href="https://covid19ca.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex">
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-normal text-gray-100">
                COVID-19 Dashboard for Canada
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-300">
                A dashboard providing up-to-date information on the COVID-19 outbreak and the vaccination efforts in
                Canada.
                {/* Users can also add, update or delete any previous logged workouts. */}
              </p>
              <ul className="flex md:justify-end text-xs mt-3 font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>React</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Chart.js</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>COVID-19 API</i>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <Link href="/projects">
        <div className="text-center text-sm p-3 cursor-pointer">More Projects</div>
      </Link>
    </section>
  )
}

export default RecentProjects
