"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id;
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0f172a] text-gray-800 dark:text-white px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/#work" className="inline-block bg-[#fca311] text-white px-5 py-2 rounded-full hover:bg-[#e59400] transition-all mb-8">
          &larr; Back to Work
        </Link>
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-md overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fca311] text-white px-6 py-3 rounded-full hover:bg-[#e59400] transition-all"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
