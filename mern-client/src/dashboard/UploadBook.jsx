import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
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
  const handleBookSumbmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.bookCategory.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObject = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };
    console.log(bookObject);
    //send data to db
    fetch("http://localhost:8000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObject),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Uploaded Succefully!!!");
        form.reset();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Upload a book </h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleBookSumbmit}
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
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Upload book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
