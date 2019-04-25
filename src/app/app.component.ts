import { Component } from "@angular/core";
import { ServerService } from "./server.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  servers = [
    {
      name: "Testserver",
      capacity: 10,
      id: this.generateId()
    },
    {
      name: "Liveserver",
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}

  onGet() {
    this.serverService.getServer()
      .subscribe(
        response => {
          const data = response.json();
          console.log(data);
          this.onAddServer(data);
          // this.servers.push({
          //   name: response.name,
          //   capacity: response.capacity,
          //   id: response.id
          // });
        },
        error => console.log(error)
      );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService
      .storeServer(this.servers)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
