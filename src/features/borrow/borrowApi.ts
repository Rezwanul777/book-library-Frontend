import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Borrow {
  _id: string;
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({
    borrowBook: builder.mutation<
      void,
      { book: string; quantity: number; dueDate: string }
    >({
      query: ({ book, quantity, dueDate }) => ({
        url: `borrow`,
        method: "POST",
        body: { book, quantity, dueDate },
        invalidatesTags: ["Borrow"],
      }),
    }),
    getBorrowSummary: builder.query<{ data: Borrow[] }, void>({
  query: () => "borrow",
  providesTags: ["Borrow"],
}),

    // getBorrowSummary: builder.query<Borrow[], void>({
    //   query: () => "borrow",
    //   providesTags: ["Borrow"],
    // }),
//     getBorrowSummary: builder.query<Borrow[], void>({
//   query: () => "borrow",
//   providesTags: (result) =>
//     result
//       ? [...result.map(({ _id }) => ({ type: "Borrow" as const, id: _id })), { type: "Borrow", id: "LIST" }]
//       : [{ type: "Borrow", id: "LIST" }],
// }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;