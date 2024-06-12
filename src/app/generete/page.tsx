"use client"

import { useState, useMemo, useEffect } from "react"
import axios from "axios"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Generate() {
  const [projectType, setProjectType] = useState("gradle")
  const [language, setLanguage] = useState("java")
  const [packaging, setPackaging] = useState("jar")
  const [javaVersion, setJavaVersion] = useState("17")
  const [pattern, setPattern] = useState("layered")
  const [springBootVersion, setSpringBootVersion] = useState("3.3.0")
  const [projectGroup, setProjectGroup] = useState("com.example")
  const [projectArtifact, setProjectArtifact] = useState("name")
  const [projectName, setProjectName] = useState("name")
  const [projectPackageName, setProjectPackageName] = useState(`${projectGroup}.${projectArtifact}`)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDependencies, setSelectedDependencies] = useState([])
  const springDependencies = [
    {
      category: "Core",
      dependencies: [
        { id: 1, name: "Lombok" },
        { id: 2, name: "Spring Configuration Processor" },
        { id: 3, name: "Spring Boot DevTools" },
        { id: 4, name: "Docker Compose Support" },
        { id: 5, name: "H2 Database" },
        { id: 6, name: "IBM DB2" },
        { id: 7, name: "Microsoft SQL Server" },
        { id: 8, name: "MySQL Connector J" },
        { id: 9, name: "Oracle Database JDBC" },
        { id: 10, name: "Oracle Database R2DBC" },
        { id: 11, name: "R2DBC MySQL" }
      ]
    },
    {
      category: "Web",
      dependencies: [
        { id: 12, name: "Spring Boot Starter Web" },
        { id: 13, name: "Spring Boot Starter Web Services" },
        { id: 14, name: "Spring Boot Starter Webflux" },
        { id: 15, name: "Spring Boot Starter Websocket" },
        { id: 16, name: "Spring Boot Starter Actuator" }
      ]
    },
    {
      category: "Data",
      dependencies: [
        { id: 17, name: "Spring Boot Starter Data Jpa" },
        { id: 18, name: "Spring Boot Starter Data Cassandra" },
        { id: 19, name: "Spring Boot Starter Data Cassandra Reactive" },
        { id: 20, name: "Spring Boot Starter Data Couchbase" },
        { id: 21, name: "Spring Boot Starter Data Couchbase Reactive" },
        { id: 22, name: "Spring Boot Starter Data Elasticsearch" },
        { id: 23, name: "Spring Boot Starter Data Jdbc" },
        { id: 24, name: "Spring Boot Starter Data Ldap" },
        { id: 25, name: "Spring Boot Starter Data Mongodb" },
        { id: 26, name: "Spring Boot Starter Data Mongodb Reactive" },
        { id: 27, name: "Spring Boot Starter Data Neo4j" },
        { id: 28, name: "Spring Boot Starter Data R2dbc" },
        { id: 29, name: "Spring Boot Starter Data Redis" },
        { id: 30, name: "Spring Boot Starter Data Redis Reactive" },
        { id: 31, name: "Spring Boot Starter Data Rest" },
        { id: 32, name: "Spring Data Rest HAL Explorer" }
      ]
    },
    {
      category: "Security",
      dependencies: [
        { id: 33, name: "Spring Boot Starter Security" },
        { id: 34, name: "Spring Security Messaging" },
        { id: 35, name: "Spring Security Rsocket" },
        { id: 36, name: "Thymeleaf Extras Spring Security6" }
      ]
    },
    {
      category: "Messaging",
      dependencies: [
        { id: 37, name: "Spring Boot Starter Activemq" },
        { id: 38, name: "Spring Boot Starter Amqp" },
        { id: 39, name: "Spring Boot Starter Artemis" },
        { id: 40, name: "Spring Kafka" },
        { id: 41, name: "Spring Rabbit Stream" },
        { id: 42, name: "Spring Integration Amqp" },
        { id: 43, name: "Spring Integration Http" },
        { id: 44, name: "Spring Integration Jdbc" },
        { id: 45, name: "Spring Integration Jms" },
        { id: 46, name: "Spring Integration Jpa" },
        { id: 47, name: "Spring Integration Kafka" },
        { id: 48, name: "Spring Integration Mail" },
        { id: 49, name: "Spring Integration Mongodb" },
        { id: 50, name: "Spring Integration R2dbc" },
        { id: 51, name: "Spring Integration Redis" },
        { id: 52, name: "Spring Integration Rsocket" },
        { id: 53, name: "Spring Integration Security" },
        { id: 54, name: "Spring Integration Stomp" },
        { id: 55, name: "Spring Integration Webflux" },
        { id: 56, name: "Spring Integration Websocket" },
        { id: 57, name: "Spring Integration Ws" }
      ]
    },
    {
      category: "Cloud",
      dependencies: [
        { id: 58, name: "Spring Cloud Starter" },
        { id: 59, name: "Spring Cloud Azure Starter" },
        { id: 60, name: "Spring Cloud Azure Starter Active Directory" },
        { id: 61, name: "Spring Cloud Azure Starter Actuator" },
        { id: 62, name: "Spring Cloud Azure Starter Data Cosmos" },
        { id: 63, name: "Spring Cloud Azure Starter Integration Storage Queue" },
        { id: 64, name: "Spring Cloud Azure Starter Jdbc Mysql" },
        { id: 65, name: "Spring Cloud Azure Starter Jdbc Postgresql" },
        { id: 66, name: "Spring Cloud Azure Starter Keyvault" },
        { id: 67, name: "Spring Cloud Azure Starter Storage" },
        { id: 68, name: "Spring Cloud Bus" },
        { id: 69, name: "Spring Cloud Config Server" },
        { id: 70, name: "Spring Cloud Function Web" },
        { id: 71, name: "Spring Cloud Circuitbreaker Resilience4j" },
        { id: 72, name: "Spring Cloud Config" },
        { id: 73, name: "Spring Cloud Consul Config" },
        { id: 74, name: "Spring Cloud Consul Discovery" },
        { id: 75, name: "Spring Cloud Gateway" },
        { id: 76, name: "Spring Cloud Gateway Mvc" },
        { id: 77, name: "Spring Cloud Loadbalancer" },
        { id: 78, name: "Spring Cloud Netflix Eureka Client" },
        { id: 79, name: "Spring Cloud Netflix Eureka Server" },
        { id: 80, name: "Spring Cloud Openfeign" },
        { id: 81, name: "Spring Cloud Task" },
        { id: 82, name: "Spring Cloud Vault Config" },
        { id: 83, name: "Spring Cloud Zookeeper Config" },
        { id: 84, name: "Spring Cloud Zookeeper Discovery" },
        { id: 85, name: "Spring Cloud Stream" },
        { id: 86, name: "Spring Cloud Stream Binder Kafka" },
        { id: 87, name: "Spring Cloud Stream Binder Kafka Streams" },
        { id: 88, name: "Spring Cloud Stream Binder Pulsar" },
        { id: 89, name: "Spring Cloud Stream Binder Rabbit" }
      ]
    },
    {
      category: "Batch",
      dependencies: [
        { id: 90, name: "Spring Boot Starter Batch" }
      ]
    },
    {
      category: "GraphQL",
      dependencies: [
        { id: 91, name: "Spring Boot Starter Graphql" },
        { id: 92, name: "GraphQL DGS Code Generation" }
      ]
    },
    {
      category: "Monitoring",
      dependencies: [
        { id: 93, name: "Micrometer Wavefront" },
        { id: 94, name: "Micrometer Brave" },
        { id: 95, name: "Zipkin Reporter Brave" },
        { id: 96, name: "Micrometer Datadog" },
        { id: 97, name: "Micrometer Dynatrace" },
        { id: 98, name: "Micrometer Graphite" },
        { id: 99, name: "Micrometer Influx" },
        { id: 100, name: "Micrometer New Relic" },
        { id: 101, name: "Micrometer Prometheus" }
      ]
    },
    {
      category: "AI",
      dependencies: [
        { id: 102, name: "Spring AI Azure Openai" },
        { id: 103, name: "Spring AI Azure Store" },
        { id: 104, name: "Spring AI Bedrock AI" },
        { id: 105, name: "Spring AI Chroma Store" },
        { id: 106, name: "Spring AI Milvus Store" },
        { id: 107, name: "Spring AI Mistral AI" },
        { id: 108, name: "Spring AI Neo4j Store" },
        { id: 109, name: "Spring AI Ollama" },
        { id: 110, name: "Spring AI Openai" },
        { id: 111, name: "Spring AI Pgvector Store" },
        { id: 112, name: "Spring AI Pinecone Store" },
        { id: 113, name: "Spring AI PostgresML" },
        { id: 114, name: "Spring AI Qdrant Store" },
        { id: 115, name: "Spring AI Redis Store" },
        { id: 116, name: "Spring AI Stability AI" },
        { id: 117, name: "Spring AI Transformers" },
        { id: 118, name: "Spring AI Vertex AI Gemini" },
        { id: 119, name: "Spring AI Vertex AI Palm2" },
        { id: 120, name: "Spring AI Weaviate Store" }
      ]
    },
    {
      category: "Shell",
      dependencies: [
        { id: 121, name: "Spring Shell Starter" }
      ]
    },
    {
      category: "Modulith",
      dependencies: [
        { id: 122, name: "Spring Modulith Core" },
        { id: 123, name: "Spring Modulith Jdbc" },
        { id: 124, name: "Spring Modulith Jpa" },
        { id: 125, name: "Spring Modulith Mongodb" }
      ]
    }
  ];
  
  const filteredDependencies = useMemo(() => {
    return springDependencies
      .map(category => ({
        ...category,
        dependencies: category.dependencies.filter(dep =>
          dep.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(category => category.dependencies.length > 0);
  }, [searchTerm, springDependencies]);

  useEffect(() => {
    setProjectPackageName(`${projectGroup}.${projectArtifact}`)
  }, [projectGroup, projectArtifact])

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
  const handlePatternChange = (value) => {
    setPattern(value)
  }
  const handleSpringBootVersionChange = (value) => {
    setSpringBootVersion(value)
  }
  const handleProjectGroupChange = (e) => {
    setProjectGroup(e.target.value)
  }
  const handleProjectArtifactChange = (e) => {
    setProjectArtifact(e.target.value)
  }
  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value)
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
  const handleGenerateProject = async (e) => {
    e.preventDefault();
    const projectData = {
      projectType,
      language,
      packaging,
      javaVersion,
      springBootVersion,
      pattern,
      projectGroup,
      projectArtifact,
      projectName,
      projectPackageName,
      selectedDependencies
    };

    try {
      const response = await axios.post("http://localhost:8080/projects/generate", projectData, {
        responseType: 'blob', // important
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${projectName}.zip`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('There was an error generating the project!', error);
    }
  };

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
            <Label htmlFor="pattern">Pattern</Label>
            <Select id="pattern" value={pattern} onValueChange={handlePatternChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select pattern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="layered" >layered</SelectItem>
                <SelectItem value="DDD" disabled>DDD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="packaging">Packaging</Label>
            <Select id="packaging" value={packaging} onValueChange={handlePackagingChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select packaging" />
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
                <SelectValue placeholder="Select Java version" />
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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="projectGroup">Group</Label>
            <Input id="projectGroup" value={projectGroup} onChange={handleProjectGroupChange}/>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="projectArtifact">Artifact</Label>
            <Input id="projectArtifact" value={projectArtifact} onChange={handleProjectArtifactChange}/>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="projectName">Name</Label>
            <Input id="projectName" value={projectName} onChange={handleProjectNameChange}/>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="projectPackageName">Package Name</Label>
            <Input disabled id="projectPackageName" value={projectPackageName}/>
          </div>
        </div>
        <div className="col-span-2 border-l border-gray-600 pl-4 h-full">
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
          <ScrollArea className="h-96 w-full rounded-md border">
            <div className="border rounded-lg p-4 h-auto overflow-y-auto">
              {filteredDependencies.map((category) => (
                <div key={category.category}>
                  <h3 className="font-bold">{category.category}</h3>
                  {category.dependencies.map((dependency) => (
                    <div key={dependency.id} className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`dep-${dependency.id}`}
                          checked={selectedDependencies.some((dep) => dep.id === dependency.id)}
                          onClick={() => handleDependencyToggle(dependency)}
                        />
                        <Label
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
              ))}
            </div>
          </ScrollArea>
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

export default Generate;

