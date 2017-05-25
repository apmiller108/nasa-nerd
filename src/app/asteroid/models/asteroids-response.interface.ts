import { Asteroid } from './asteroid.interface';

interface Page {
  size: number;
  total_elements: number;
  total_pages: number;
  number: number;
}

export interface AsteroidsResponse {
  page: Page;
  near_earth_objects: Asteroid[];
}