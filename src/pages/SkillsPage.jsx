import React, { useState } from 'react';

export default function SkillsPage() {
    const [certIndex, setCertIndex] = useState(0);
    const certCount = 11;
    
 
    const skillGroups = [
        {
          title: "Data & Analytics",
          skills: [
            { icon: "/python.svg", name: "Python" },
            { icon: "/sql.svg", name: "SQL" },
            { icon: "/excel.svg", name: "Excel" },
            { icon: "/anaconda.svg", name: "Anaconda" },
            { icon: "/jupyter.svg", name: "Jupyter" },
          ],
        },
        {
          title: "Front-End Development",
          skills: [
            { icon: "/html.svg", name: "HTML" },
            { icon: "/css.svg", name: "CSS" },
            { icon: "/javascript.svg", name: "JavaScript" },
            { icon: "/react.svg", name: "React" },
          ],
        },
        {
          title: "Back-End & DevOps",
          skills: [
            { icon: "/nodejs.svg", name: "Node.js" },
            { icon: "/expressjs.svg", name: "Express.js" },
            { icon: "/docker.svg", name: "Docker" },
            { icon: "/kubernetes.svg", name: "Kubernetes" },
          ],
        },
        {
          title: "Cloud & Tools",
          skills: [
            { icon: "/aws.svg", name: "AWS" },
            { icon: "/azure.svg", name: "Azure" },
            { icon: "/git.svg", name: "Git" },
            { icon: "/github.svg", name: "GitHub" },
            { icon: "/visualstudiocode.svg", name: "VS Code" },
            { icon: "/figma.svg", name: "Figma" },
          ],
        },
        {
          title: "Data Visualization & ML",
          skills: [
            { icon: "/streamlit.svg", name: "Streamlit" },
            { icon: "/powerbi.svg", name: "Power BI" },
            { icon: "/genai.svg", name: "GenAI" },
          ],
        },
      ];          
    // --------------------------------

    const nextCert = () => setCertIndex((prev) => (prev + 1) % certCount);
    const prevCert = () => setCertIndex((prev) => (prev - 1 + certCount) % certCount);

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-blue-500 mb-12">Skills & Certificates</h2>



                {/* Tech Stack */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-blue-600 mb-8">Tech Stack</h3>

                    {skillGroups.map((group) => (
                        <div key={group.title} className="mb-12">
                            <h4 className="text-xl font-semibold text-blue-500 mb-4 border-b border-blue-200 pb-1">
                            {group.title}
                            </h4>

                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {group.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="bg-white bg-opacity-60 backdrop-blur p-6 rounded-lg border border-blue-200 hover:border-blue-300 transition text-center hover:scale-110 transform"
                                    >
                            
                                        {/* ICON */}
                                        <div className="mb-2 h-10 flex items-center justify-center">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>

                                        {/* LABEL */}
                                        <p className="text-blue-600 font-semibold text-sm">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>



                {/* Certificates */}
                <div className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200">
                    <h3 className="text-2xl font-bold text-blue-600 mb-8">Certificates</h3>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-6 border-2 border-blue-300">
                            
                            {/* Cert carousel */}
                            <div className="w-full max-w-md h-96 rounded-lg overflow-hidden border-2 border-blue-300 bg-white">
                                <img
                                    src={`/cert${certIndex + 1}.jpg`}
                                    alt={`Certificate ${certIndex + 1}`}
                                    className="w-full h-full object-contain"
                                />
                                
                            </div>
                        </div>

                        <div className="flex gap-4 items-center justify-center w-full">
                            <button
                                onClick={prevCert}
                                className="bg-blue-300 hover:bg-blue-400 text-white px-6 py-2 rounded-full font-semibold transition"
                            >
                                ← Previous
                            </button>

                            <span className="text-blue-600 font-semibold">
                                {certIndex + 1} / {certCount}
                            </span>

                            <button
                                onClick={nextCert}
                                className="bg-blue-300 hover:bg-blue-400 text-white px-6 py-2 rounded-full font-semibold transition"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}