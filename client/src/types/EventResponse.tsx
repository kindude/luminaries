import { Lecturer } from "./Lecturer";

  
export interface EventResponse {
    id: number;
    name: string;
    description: string;
    date: string; 
    venue: string;
    createdAt: Date; 
    updatedAt: Date; 
    userId: number;
    lecturer: Lecturer;
}