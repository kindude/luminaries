import { Book } from "./Book";
import { User } from "./User";

export interface Review {
    id: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    bookId:number;
    book: Book;
    user: User
  }
  