"use client"

import { useState, useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";

export function Component() {
  const [projectType, setProjectType] = useState("gradle")
  const [language, setLanguage] = useState("java")
  const [packaging, setPackaging] = useState("jar")
  const [javaVersion, setJavaVersion] = useState("17")
  const [springBootVersion, setSpringBootVersion] = useState("3.3.0")
  const [dependencyManager, setDependencyManager] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDependencies, setSelectedDependencies] = useState([])
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
  ]
  const filteredDependencies = useMemo(() => {
    return springDependencies.filter((dep) => dep.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm])
  const handleProjectTypeChange = (value) => {
    setProjectType(value)
  }
  const handleLanguageChange = (value) => {
    setLanguage(value)
  }
  const handlePackagingChange = (value) => {
    setPackaging(value)
  }
  const handleJavaVersionChange = (value) => {
    setJavaVersion(value)
  }
  const handleSpringBootVersionChange = (value) => {
    setSpringBootVersion(value)
  }
  const handleDependencyManagerChange = (e) => {
    setDependencyManager(e.target.value)
  }
  const handleDependencyToggle = (dependency) => {
    if (selectedDependencies.some((dep) => dep.id === dependency.id)) {
      handleDependencyRemove(dependency);
    } else {
      handleDependencySelect(dependency);
    }
  }
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleDependencySelect = (dependency) => {
    if (!selectedDependencies.some((dep) => dep.id === dependency.id)) {
      setSelectedDependencies([...selectedDependencies, dependency])
    }
  }
  const handleDependencyRemove = (dependency) => {
    setSelectedDependencies(selectedDependencies.filter((dep) => dep.id !== dependency.id))
  }
  const handleGenerateProject = () => {
    console.log("Generating project with the following details:")
    console.log("Project Type:", projectType)
    console.log("Language:", language)
    console.log("Packaging:", packaging)
    console.log("JavaVersion:", javaVersion)
    console.log("Spring Boot Version:", springBootVersion)
    console.log("Dependency Manager:", dependencyManager)
    console.log("Selected Dependencies:", selectedDependencies)
  }
  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Spring Project Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="project-type">Project Type</Label>
            <Select id="project-type" value={projectType} onValueChange={handleProjectTypeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gradle">Gradle Project</SelectItem>
                <SelectItem value="maven" disabled>Maven Project</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="language">Language</Label>
            <Select id="language" value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="kotlin" disabled>Kotlin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="packaging">Packaging</Label>
            <Select id="packaging" value={packaging} onValueChange={handlePackagingChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jar">Jar</SelectItem>
                <SelectItem value="war">War</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="java-version">Java Version</Label>
            <Select id="java-version" value={javaVersion} onValueChange={handleJavaVersionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="22">22</SelectItem>
                <SelectItem value="21">21</SelectItem>
                <SelectItem value="17">17</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="spring-boot-version">Spring Boot Version</Label>
            <Select id="spring-boot-version" value={springBootVersion} onValueChange={handleSpringBootVersionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Spring Boot version" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3.3.1-SNAPSHOT">3.3.1 (SNAPSHOT)</SelectItem>
                <SelectItem value="3.3.0">3.3.0</SelectItem>
                <SelectItem value="3.2.7-SNAPSHOT">3.2.7 (SNAPSHOT)</SelectItem>
                <SelectItem value="3.2.6">3.2.6</SelectItem>
                <SelectItem value="3.2.5">3.2.5</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="col-span-2 border-l border-gray-600 pl-4">
          <div className="mb-4">
            <label htmlFor="searchDependencies" className="block font-medium mb-2">
              Search Dependencies
            </label>
            <Input
              id="searchDependencies"
              type="text"
              placeholder="Search dependencies..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="w-full"
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
        <div className="lg:col-span-1 border-l border-gray-600 pl-4">
          <h2 className="text-2xl font-bold mb-4">Selected Dependencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {selectedDependencies.map((dependency) => (
              <Card key={dependency.id} className="border border-gray-200">
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{dependency.name}</div>
                    <Button
                      size="sm"
                      onClick={() => handleDependencyRemove(dependency)}
                      className="bg-red-500 text-white hover:bg-red-600"
                    >
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button onClick={handleGenerateProject} className="bg-blue-500 text-white hover:bg-blue-600">
          Generate Project
        </Button>
      </div>
    </div>
  )
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

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Component;
