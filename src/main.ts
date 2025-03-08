import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
  
    if (!cursor) return;
  
    // Update cursor position on mousemove
    document.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
  
    // Apply hover effects for interactive elements (e.g., buttons, links, inputs)
    document.querySelectorAll('button, a, input, textarea, select').forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('interactable-hover');
        cursor.classList.remove('text-hover');
      });
      element.addEventListener('mouseout', () => {
        cursor.classList.remove('interactable-hover');
      });
    });
  
    // Apply hover effects for text areas (e.g., paragraphs, headers)
    document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6').forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('text-hover');
        cursor.classList.remove('interactable-hover');
      });
      element.addEventListener('mouseout', () => {
        cursor.classList.remove('text-hover');
      });
    });
  });
  
  