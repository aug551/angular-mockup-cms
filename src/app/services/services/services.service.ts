import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import servicesdata from '../../data/services.json'

export interface ServiceCategory {
  id: number,
  name: string,
  description: string
}

export interface Service {
  id: number,
  name: string,
  category: number[],
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // categories: ServiceCategory[] = servicesdata.categories;
  // services: Service[] = servicesdata.services;
  categories: BehaviorSubject<ServiceCategory[]> = new BehaviorSubject<ServiceCategory[]>(servicesdata.categories);
  services: BehaviorSubject<Service[]> = new BehaviorSubject<Service[]>(servicesdata.services);

  constructor() { }

  getCategories(): Observable<ServiceCategory[]> {
    return this.categories.asObservable();
  }

  getServices(): Observable<Service[]> {
    return this.services.asObservable();
  }

  getServiceById(serviceId: number): Service {
    return servicesdata.services.find(service => service.id = serviceId) as Service;
  }
}
