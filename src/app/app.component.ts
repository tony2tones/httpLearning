import { Component, OnInit } from "@angular/core";
import { ServerService } from "./server.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  servers: any[];
  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService
      .getServer()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        error => console.log(error)
      );
  }

  // onGet() {
  //   this.serverService
  //     .getServer()
  //     .subscribe(
  //       (servers: any[]) => this.servers = servers,
  //       error => console.log(error)
  //     );
  // }

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
