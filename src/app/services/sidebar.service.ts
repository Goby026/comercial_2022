import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Menús',
      icono: 'fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Main', path: '/' },
        { titulo: 'Progressbar', path: '/dashboard/progress' },
        { titulo: 'Graphics', path: '/dashboard/grafica1' },
        { titulo: 'Promises', path: '/dashboard/promises' },
      ],
    },
  ];

  constructor() {}
}
