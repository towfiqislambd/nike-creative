"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Eye, Trash2 } from "lucide-react";
import { CrossCircle } from "../../../Components/Svg/SvgContainer";
import { Danger } from "../../../Components/Svg/SvgContainer2";
import SuccessfulModal from "./SuccessfulModal";
import Link from "next/link";

const ServiceRequest = ({ data }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: data || {
      note: "",
      address: "",
    },
  });
  const [images, setImages] = useState(data?.image || []);
  const [error, setError] = useState("");
  const [viewImage, setViewImage] = useState(null);
  const [successfulOpen, setSuccessfulOpen] = useState(false);

  // image upload image
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 6) {
      setError("You can only upload up to 6 photos");
      return;
    }
    setError("");
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleViewImage = (url) => {
    setViewImage(url);
  };

  //   form summit
  const onSubmit = (data) => {
    const formData = {
      ...data,
      images,
    };
    console.log("Service Request Data:", formData);
    setSuccessfulOpen(true);
  };

  return (
    <>
      {!successfulOpen && (
        <div className="bg-white custom-shadow-xl max-w-[645px] w-full p-5 rounded-lg md:rounded-[20px]">
          <div className="relative w-full text-[#333]">
            <div className="flex items-center justify-between mb-2.5">
              <h2 className="text-xl md:text-[26px]">
                Submit Your Service Request:
              </h2>
              <div>
                <Link href={'/'} ><CrossCircle /></Link>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row gap-2.5">
                {/* Main Product image */}
                <div className="max-w-[208px] min-h-[179px] h-fit w-full p-2.5 flex flex-col items-start text-primary-text rounded-[20px] overflow-hidden border border-[#F5F4F4] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] relative">
                  <div className="text-lg">Product</div>
                  {images[0] ? (
                    <div className="w-[182px] shrink-0 rounded-[20px] overflow-hidden">
                      <Image
                        src={images[0].url}
                        alt="Main Product"
                        width={300}
                        height={300}
                        className="object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => handleViewImage(images[0].url)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-black/40 p-1 rounded-full"
                      >
                        <Eye />
                      </button>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm mx-auto my-auto">
                      No image added
                    </p>
                  )}
                </div>

                {/* right side images*/}
                <div className="flex-1">
                  <div className="bg-white border border-[#F5F4F4] rounded-[20px] p-2.5 shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]">
                    <div>
                      <p className="mb-2">Product</p>
                      {images.length !== 0 ? (
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          {images.map((img, index) => (
                            <div key={index} className="relative group">
                              <Image
                                src={img.url}
                                alt={`upload-${index}`}
                                width={100}
                                height={100}
                                className="w-full h-24 object-cover rounded-md border"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                              >
                                <Trash2 size={14} />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleViewImage(img.url)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 p-1 rounded-full"
                              >
                                <Eye />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm mx-auto my-auto">
                          No image added
                        </p>
                      )}
                      <div className="flex justify-end">
                        <label className="inline-block bg-[#C8FFEC] px-4 py-2 rounded-md cursor-pointer text-sm hover:bg-[#C8FFEC]/80 transition">
                          Add Photo
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {error && (
                        <div className="text-xs md:text-sm text-primary-text inline-flex py-1 px-2 mt-2 rounded items-center gap-2 bg-[#FF4C4C1A]">
                          <Danger />
                          <p>{error}</p>
                        </div>
                      )}
                    </div>
                    <div className="my-3 xl:my-5">
                      <p className="mb-2">Note</p>
                      <textarea
                        {...register("note")}
                        rows={3}
                        placeholder="I need a design like this photo"
                        className="w-full rounded-[10px] p-2 text-sm focus:ring-2 focus:ring-[#C8FFEC] bg-[#EFEFEF] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] focus:outline-0"
                      />
                    </div>
                    <div>
                      <p className="mb-2">Job site Address</p>
                      <input
                        type="text"
                        {...register("address")}
                        placeholder="Dhaka, Bangladesh"
                        className="w-full rounded-[10px] p-2 text-sm focus:ring-2 focus:ring-[#C8FFEC] bg-[#EFEFEF] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] focus:outline-0"
                      />
                    </div>
                  </div>
                  <div className="w-full space-x-2.5 text-end mt-6">
                    <button
                      type="submit"
                      className="bg-[#21BBA2] text-white w-full px-6 py-3 rounded-md font-medium hover:bg-[#21BBA2]/80 transition"
                    >
                      Submit Service Request
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* successful modal */}
      {successfulOpen && <SuccessfulModal />}

      {/* view full image Modal */}
      {viewImage && (
        <div
          className="fixed inset-0 bg-black/70 flex px-5 items-center justify-center z-[99999]"
          onClick={() => setViewImage(null)}
        >
          <div className="relative">
            <Image
              src={viewImage}
              alt="Full Preview"
              width={500}
              height={500}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setViewImage(null)}
              className="absolute -top-3 -right-3 bg-white text-gray-700 rounded-full p-1"
            >
              <CrossCircle />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceRequest;
