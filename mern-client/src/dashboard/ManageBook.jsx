import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  //delete books
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/book/{id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book id Deleted Succefully!! ");
        // setAllBooks(data);
      });
  };
  return (
    <div className="px-4 my-12">
      <div>
        <h2 className="mb-8 text-3xl font-bold"> Manage Your Books</h2>
        <div>
          <Table className="lg:w-[1000px]">
            <Table.Head>
              <Table.HeadCell>No.</Table.HeadCell>
              <Table.HeadCell>Book Title</Table.HeadCell>
              <Table.HeadCell>Author name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Prices</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit or Manage</span>
              </Table.HeadCell>
            </Table.Head>
            {allBooks.map((book, index) => (
              <Table.Body className="divide-y" key={index}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>💲1000</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/admin/dashboard/edit-books/${book._id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageBook;
