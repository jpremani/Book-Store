import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);
  console.log(id);

  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Romantic",
    "Drama",
    "Education",
    "Programming",
    "Science",
    "Horrer",
    "Fantacy",
    "Biblography",
    "AutoBiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Book",
    "Travell",
    "Religion",
    "Art & Culture",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategory[0]
  );
  const handleChangeSelectedValue = (event) => {
    // console.log(e.target.value);
    setSelectedBookCategory(e.target.value);
  };
  // Book Submission
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.bookCategory.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObject = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };
    // update Book Data
    fetch(`http://localhost:8000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObject),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Update Succefully !!!");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Update the book data</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleUpdate}
      >
        {/* First Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="bookTitle" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="book Title"
              name="bookTitle"
              required
              defaultValue={book.bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="authorName" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="authorName"
              name="authorName"
              required
              defaultValue={book.authorName}
            />
          </div>
        </div>
        {/* Secound Row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book_Image" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              placeholder="Book Image"
              name="imageUrl"
              required
              defaultValue={book.imageUrl}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book category" />
              <div>
                <Select
                  id="inputState"
                  name="bookCategory"
                  className="w-full rounded"
                  // value={selectedBookCategory}
                  onChange={handleChangeSelectedValue}
                >
                  {bookCategory.map((book) => (
                    <option key={book} value={book}>
                      {book}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        {/* Book Description  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="BookDescription" />
            </div>
            <Textarea
              id="bookDescription"
              placeholder="Write Your BookDescription"
              required
              rows={5}
              name="bookDescription"
              className="w-full"
              defaultValue={book.bookDescription}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
            </div>
            <TextInput
              id="bookPdfUrl"
              type="text"
              placeholder="Book Pdf Url"
              required
              name="bookPdfUrl"
              defaultValue={book.bookPdfUrl}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Update book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
