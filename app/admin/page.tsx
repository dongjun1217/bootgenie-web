/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b6QkrUI7WiX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a href="http://110.15.58.113:8082/" className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" target="_blank">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <img width="24" height="24" alt="Jenkins logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/128px-Jenkins_logo.svg.png?20120629215426"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jenkins</h3>
              <p className="text-muted-foreground text-sm">Continuous Integration and Continuous Deployment</p>
            </div>
          </div>
        </a>
        <a href="http://110.15.58.113:9999/" className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" target="_blank">
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                <img width="24" height="24" alt="prometheus logo" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Prometheus</h3>
              <p className="text-muted-foreground text-sm">Monitor your infrastructure and applications</p>
            </div>
          </div>
        </a>
        <a href="http://110.15.58.113:8888/" className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" target="_blank">
          <div className="flex items-center gap-4">
            <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                <img width="24" height="24" alt="grafana logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Grafana</h3>
              <p className="text-muted-foreground text-sm">Visualize your monitoring data</p>
              <p className="text-muted-foreground text-sm">ID : guest , PW : guest</p>
            </div>
          </div>
        </a>
        <a href="http://110.15.58.113:7777/" className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" target="_blank">
          <div className="flex items-center gap-4">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                <img width="24" height="24" alt="cadvisor logo" src=".\cadvisor.png"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Cadvisor</h3>
              <p className="text-muted-foreground text-sm">Monitor your containers</p>
            </div>
          </div>
        </a>
        <a href="http://110.15.58.113:9100/" className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" target="_blank">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <img width="24" height="24" alt="prometheus logo" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Node-Exporter</h3>
              <p className="text-muted-foreground text-sm">Monitor your nodes</p>
            </div>
          </div>
        </a>
        <a href="https://hub.docker.com/r/donghyeonshin/boot-genie-app/tags" className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" target="_blank">
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                <img width="24" height="24" alt="cadvisor logo" src=".\docker-svgrepo-com.svg"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Docker Hub</h3>
              <p className="text-muted-foreground text-sm">Manage your container images</p>
            </div>
          </div>
        </a>
      </form>
    )
}