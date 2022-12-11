import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Layout from "../components/Layout";

export default function Add() {
  interface Input {
    title: string;
    description: string;
    price: string;
    image: File;
  }
  const [input, setInput] = useState<Input>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input!["title"]);
    formData.append("description", input!["description"]);
    formData.append("price", input!["price"]);
    formData.append("image", input!["image"]);
    setIsLoading(true);
    axios
      .post("/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        if (data) {
          setIsLoading(false);
        }
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input!,
      [name]: value,
    });
  };
  return (
    <Layout title="Add Product">
      <div className="container mx-auto flex justify-center mt-5">
        <form onSubmit={handleSubmit} encType="">
          <Input
            type="text"
            label="Title"
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />

          <Input
            type="number"
            label="Price"
            onChange={handleChange}
            name="price"
            placeholder="Price"
          />

          <Input
            type="text"
            label="Description"
            onChange={handleChange}
            name="description"
            placeholder="Description"
          />
          <Input
            type="file"
            label="Image"
            onChange={(event) => {
              const file = event.target.files && event.target.files[0];
              setInput({ ...input!, image: file! });
            }}
            name="title"
            placeholder="Image"
          />
          {isLoading ? (
            <button
              className="bg-blue-900 px-5 py-2 rounded-md text-white w-full"
              type="submit"
              disabled
            >
              Loading...
            </button>
          ) : (
            <button
              className="bg-blue-500 px-5 py-2 rounded-md text-white w-full"
              type="submit"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </Layout>
  );
}
