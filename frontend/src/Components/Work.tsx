"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const MotionDiv = dynamic(() => import("./MotionDiv"), { ssr: false });

export default function WorkPage() {
  return (
    <section id="work" className="min-h-screen bg-[#f5f5f5] dark:bg-[#0f172a] text-gray-800 dark:text-white px-6 md:px-12 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A collection of my recent projects blending creativity and
          technology.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <MotionDiv key={project.id}>
            <div
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/project/${project.id}`}
                  className="inline-block bg-[#fca311] text-white px-5 py-2 rounded-full hover:bg-[#e59400] transition-all"
                >
                  Read More
                </Link>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}