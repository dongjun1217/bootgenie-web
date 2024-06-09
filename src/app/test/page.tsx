"use client";

import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Component() {
  const [projectType, setProjectType] = useState("");
  const [language, setLanguage] = useState("");
  const [springBootVersion, setSpringBootVersion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDependencies, setSelectedDependencies] = useState([]);
  const springDependencies = [
    { id: 1, name: "Spring Web" },
    { id: 2, name: "Spring Data JPA" },
    { id: 3, name: "Spring Security" },
    { id: 4, name: "Spring Actuator" },
    { id: 5, name: "Spring Batch" },
    { id: 6, name: "Spring Cloud" },
    { id: 7, name: "Spring Integration" },
    { id: 8, name: "Spring HATEOAS" },
    { id: 9, name: "Spring for Apache Kafka" },
    { id: 10, name: "Spring for RabbitMQ" },
  ];

  const filteredDependencies = useMemo(() => {
    return springDependencies.filter((dep) => dep.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const handleDependencyToggle = (dependency) => {
    if (selectedDependencies.some((dep) => dep.id === dependency.id)) {
      handleDependencyRemove(dependency);
    } else {
      handleDependencySelect(dependency);
    }
  };

  const handleDependencySelect = (dependency) => {
    setSelectedDependencies([...selectedDependencies, dependency]);
  };

  const handleDependencyRemove = (dependency) => {
    setSelectedDependencies(selectedDependencies.filter((dep) => dep.id !== dependency.id));
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenerateProject = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Generating project with the following details:");
    console.log("Project Type:", projectType);
    console.log("Language:", language);
    console.log("Spring Boot Version:", springBootVersion);
    console.log("Selected Dependencies:", selectedDependencies);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Spring Project Initializer</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleGenerateProject}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="project-type">Project Type</Label>
              <Select id="projectType" defaultValue="maven-project">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maven-project">Maven Project</SelectItem>
                  <SelectItem value="gradle-project">Gradle Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="language">Language</Label>
              <Select id="language" defaultValue="java">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="kotlin">Kotlin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="spring-boot-version">Spring Boot Version</Label>
              <Select id="springBootVersion" defaultValue="2.7.5">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Spring Boot version" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2.7.5">2.7.5</SelectItem>
                  <SelectItem value="2.7.4">2.7.4</SelectItem>
                  <SelectItem value="2.7.3">2.7.3</SelectItem>
                  <SelectItem value="2.7.2">2.7.2</SelectItem>
                  <SelectItem value="2.7.1">2.7.1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="dependencies">Dependencies</Label>
              <Input
                id="dependencies"
                type="text"
                placeholder="Search for dependencies"
                value={searchTerm}
                onChange={handleSearchTermChange}
                className="pr-10"
              />
            </div>
            <div className="border rounded-lg p-4 max-h-48 overflow-y-auto">
              {filteredDependencies.map((dependency) => (
                <div key={dependency.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`dep-${dependency.id}`}
                      checked={selectedDependencies.some((dep) => dep.id === dependency.id)}
                      onChange={() => handleDependencyToggle(dependency)}
                    />
                    <Label
                      htmlFor={`dep-${dependency.id}`}
                      className="font-medium cursor-pointer"
                      onClick={() => handleDependencyToggle(dependency)}
                    >
                      {dependency.name}
                    </Label>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDependencyToggle(dependency)}
                  >
                    {selectedDependencies.some((dep) => dep.id === dependency.id) ? (
                      <MinusIcon className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="flex justify-end mt-6 space-x-4">
          <Button variant="outline" onClick={() => setSelectedDependencies([])}>
            Reset
          </Button>
          <Button type="submit">Generate Project</Button>
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}
