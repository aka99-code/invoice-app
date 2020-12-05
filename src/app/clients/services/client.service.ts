import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client";
import { environment } from "../../../environments/environment";

const BASE_URL = environment.api_url;

export class ClientService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${BASE_URL}/clients`);
  }

  createClient(body: Client) {
    return this.http.post<Client>(`${BASE_URL}/clients`, body);
  }

  getClient(id: string): Observable<Client> {
    return this.http.get<Client>(`${BASE_URL}/clients/${id}`);
  }

  deleteClient(id: string): Observable<Client> {
    return this.http.delete<Client>(`${BASE_URL}/clients/${id}`);
  }
}
