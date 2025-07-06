export interface Book {
  title: string;
  isbn: string;
}

export interface BorrowSummaryItem {
  _id: string;
  book: Book;
  totalQuantity: number;
}

export interface BorrowSummaryResponse {
  data: BorrowSummaryItem[];
}
