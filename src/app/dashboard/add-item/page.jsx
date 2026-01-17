"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { FaPlusCircle, FaCloudUploadAlt, FaStar, FaLink, FaImage, FaCheckCircle, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function AddItemPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("url");
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); 
  const { register, handleSubmit, reset, watch, setValue } = useForm();

  const imgbb_api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const imageFile = watch("imageFile"); 
  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      setPreviewImage(URL.createObjectURL(file));
    }
  }, [imageFile]);

  const clearImage = () => {
    setPreviewImage(null);
    setValue("imageFile", null);
  };

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Adding your grocery item...");

    try {
      let finalImageUrl = data.image;

      if (activeTab === "upload" && data.imageFile[0]) {
        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", data.imageFile[0]);

        const imgResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`,
          formData
        );
        finalImageUrl = imgResponse.data.data.display_url;
      }

      const groceryData = {
        ...data,
        image: finalImageUrl,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        rating: parseFloat(data.rating) || 5.0,
        email: session?.user?.email || "mdnirob30k@gmail.com",
      };

      delete groceryData.imageFile;

      const response = await axiosInstance.post("/grocery", groceryData);

      if (response.status === 201) {
        toast.success("Grocery item added successfully!", { id: loadingToast });
        reset();
        setPreviewImage(null);
        setActiveTab("url");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add item.", { id: loadingToast });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-base-100 rounded-[3rem] p-8 lg:p-12 shadow-xl border border-base-300">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-primary/10 p-4 rounded-2xl text-primary text-3xl">
          <FaPlusCircle />
        </div>
        <div>
          <h1 className="text-3xl font-black text-base-content uppercase">Add Grocery</h1>
          <p className="text-gray-400 font-medium">List a new product with ease</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Product Name</label>
            <input {...register("name", { required: true })} type="text" placeholder="Organic Tomato" className="input input-bordered rounded-2xl h-14 focus:outline-primary bg-base-200/50 w-full" />
          </div>

          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Category</label>
            <select {...register("category", { required: true })} className="select select-bordered rounded-2xl h-14 focus:outline-primary bg-base-200/50 font-bold w-full">
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="Grains">Grains</option>
            </select>
          </div>
        </div>

        {/* Image Tab System with Preview */}
        <div className="form-control w-full">
          <label className="block text-sm font-black text-gray-600 uppercase mb-3">Product Image</label>
          <div className="tabs tabs-boxed bg-base-200 rounded-2xl p-1 mb-4 w-fit">
            <button type="button" onClick={() => setActiveTab("url")} className={`tab rounded-xl font-bold transition-all ${activeTab === "url" ? "tab-active bg-primary text-white" : ""}`}>
              <FaLink className="mr-2" /> Image URL
            </button>
            <button type="button" onClick={() => setActiveTab("upload")} className={`tab rounded-xl font-bold transition-all ${activeTab === "upload" ? "tab-active bg-primary text-white" : ""}`}>
              <FaImage className="mr-2" /> Upload File
            </button>
          </div>

          {activeTab === "url" ? (
            <div className="relative">
              <input {...register("image")} type="text" placeholder="https://unsplash.com/photo..." className="input input-bordered w-full rounded-2xl h-14 focus:outline-primary pl-14 bg-base-200/50" />
              <FaLink className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {!previewImage ? (
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-primary/30 rounded-3xl cursor-pointer bg-base-200/30 hover:bg-base-200/50 transition-all border-spacing-4">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaCloudUploadAlt className="text-5xl text-primary mb-2 animate-bounce" />
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Click to upload image</p>
                    </div>
                    <input {...register("imageFile")} type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              ) : (
                <div className="relative w-full h-48 rounded-3xl overflow-hidden border-2 border-primary shadow-lg group">
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white text-success p-2 rounded-full flex items-center gap-2 font-bold px-4">
                       <FaCheckCircle /> Selected
                    </div>
                    <button onClick={clearImage} type="button" className="bg-white text-error p-2 rounded-full hover:bg-error hover:text-white transition-colors">
                       <FaTimes />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Price ($)</label>
            <input {...register("price", { required: true })} type="number" step="0.01" className="input input-bordered rounded-2xl h-14 focus:outline-primary bg-base-200/50 w-full" />
          </div>
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Stock</label>
            <input {...register("stock", { required: true })} type="number" className="input input-bordered rounded-2xl h-14 focus:outline-primary bg-base-200/50 w-full " />
          </div>
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Rating</label>
            <input {...register("rating", { required: true })} type="number" step="0.1" className="input input-bordered rounded-2xl h-14 focus:outline-primary bg-base-200/50" placeholder="Max 5 ⭐" />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="block text-sm font-black text-gray-600 uppercase mb-3">Description</label>
          <textarea {...register("description", { required: true })} className="textarea textarea-bordered rounded-[2rem] h-42 focus:outline-primary p-6 bg-base-200/50 leading-relaxed w-full"></textarea>
        </div>

        <button disabled={isUploading} type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 text-white font-black uppercase tracking-widest border-none h-16 transition-all active:scale-95">
          {isUploading ? (
            <span className="flex items-center gap-2"><span className="loading loading-spinner"></span> Processing...</span>
          ) : "Publish Item Now"}
        </button>
      </form>
    </div>
  );
}