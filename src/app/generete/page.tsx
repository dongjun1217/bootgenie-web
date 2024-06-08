/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wj92QUZMoud
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Component() {
  const [projectType, setProjectType] = useState("")
  const [language, setLanguage] = useState("")
  const [springBootVersion, setSpringBootVersion] = useState("")
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
  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value)
  }
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }
  const handleSpringBootVersionChange = (e) => {
    setSpringBootVersion(e.target.value)
  }
  const handleDependencyManagerChange = (e) => {
    setDependencyManager(e.target.value)
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
    console.log("Spring Boot Version:", springBootVersion)
    console.log("Dependency Manager:", dependencyManager)
    console.log("Selected Dependencies:", selectedDependencies)
  }
  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Spring Project Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="space-y-4">
            <div>
              <Label htmlFor="project-type">Project Type</Label>
              <Select id="project-type" defaultValue="maven-project">
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
              <Select id="spring-boot-version" defaultValue="2.7.5">
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
        <div className="col-span-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredDependencies.map((dependency) => (
              <Card
                key={dependency.id}
                className={`${
                  selectedDependencies.some((dep) => dep.id === dependency.id) ? "border-blue-500" : "border-gray-200"
                } border`}
              >
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{dependency.name}</div>
                    <Button
                      size="sm"
                      onClick={() => handleDependencySelect(dependency)}
                      className={`${
                        selectedDependencies.some((dep) => dep.id === dependency.id)
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {selectedDependencies.some((dep) => dep.id === dependency.id) ? "Remove" : "Add"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Selected Dependencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      <div className="mt-8 flex justify-end">
        <Button onClick={handleGenerateProject} className="bg-blue-500 text-white hover:bg-blue-600">
          Generate Project
        </Button>
      </div>
    </div>
  )
};

export default Component;