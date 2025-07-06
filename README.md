🚀 Frontend Requirements

 the frontend is to build a functional, clean, and responsive client-side application using React, Redux Toolkit Query (RTK Query), TypeScript, and Tailwind CSS (or plain CSS). The app will interact with a RESTful API backend, showcasing proper state management.
✨ Features
1️⃣ Public Routes

    All pages are publicly accessible; no login or authentication is required.

    Focus solely on book management and borrowing features.

2️⃣ Book Management

    Book List Table

        Display all books in a table/grid layout.

        Columns: Title, Author, Genre, ISBN, Copies, Availability, Actions.

    Actions

        Edit Book: Open a form pre-filled with book data; submit updates to API and reflect instantly in UI.

            📌 Business rule: If copies = 0, mark book as unavailable.

        Delete Book: Open confirmation dialog before deleting a book.

        Borrow Book: Open a form to borrow selected book.

    Add New Book

        Button to open create form.

        Fields: Title, Author, Genre, ISBN, Description, Copies, Available (optional, default true).

        After creation: redirect to book list and update UI.

3️⃣ Borrow Book

    Access via Borrow button in the book list.

    Fields: Quantity (number), Due Date (date).

    Business logic:

        Quantity must not exceed available copies.

        If copies reaches 0, mark book as unavailable.

    Submit via API; show success message.

    Redirect to Borrow Summary.

4️⃣ Borrow Summary

    Show a list of borrowed books aggregated by book.

    Columns: Book Title, ISBN, Total Quantity Borrowed.

    Data retrieved via API aggregation.

    ###Project setup
    1. npm i from git clone
    2. npm run dev
    

