

import { create } from 'zustand';
import { Book, User } from '../services/api';

interface LibraryState {
  user: User | null;
  setUser: (user: User | null) => void;
  librarian: string;
  borrowedBooks: Book[];
  setLibrarian: (name: string) => void;
  borrowBook: (book: Book) => void;
  returnBook: (bookId: number) => void;
}

export const useLibraryStore = create<LibraryState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  librarian: '管理员',
  borrowedBooks: [],
  setLibrarian: (name) => set({ librarian: name }),
  borrowBook: (book) =>
    set((state) => ({
      borrowedBooks: [...state.borrowedBooks, book],
    })),
  returnBook: (bookId) =>
    set((state) => ({
      borrowedBooks: state.borrowedBooks.filter((b) => b.id !== bookId),
    })),
}));