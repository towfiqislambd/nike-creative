"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { CrossCircle } from "../Svg/SvgContainer";

// svg
const Eye = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Danger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.7574 4.97638L3.77081 17.0767C3.6446 17.2952 3.57815 17.5431 3.57813 17.7954C3.5781 18.0478 3.64451 18.2957 3.77067 18.5142C3.89683 18.7327 4.07831 18.9142 4.29684 19.0404C4.51538 19.1666 4.76328 19.233 5.01562 19.2329H18.9877C19.2401 19.233 19.488 19.1666 19.7065 19.0404C19.9251 18.9142 20.1065 18.7327 20.2327 18.5142C20.3589 18.2957 20.4253 18.0478 20.4252 17.7954C20.4252 17.5431 20.3588 17.2952 20.2326 17.0767L13.2467 4.97638C13.1205 4.75791 12.9391 4.57649 12.7206 4.45035C12.5022 4.32422 12.2543 4.25781 12.0021 4.25781C11.7498 4.25781 11.502 4.32422 11.2835 4.45035C11.065 4.57649 10.8836 4.75791 10.7574 4.97638Z"
        fill="#EE404C"
      />
      <path
        d="M12.0884 8.70801H11.9062C11.4575 8.70801 11.0938 9.07175 11.0938 9.52045V13.4038C11.0938 13.8525 11.4575 14.2162 11.9062 14.2162H12.0884C12.5371 14.2162 12.9009 13.8525 12.9009 13.4038V9.52045C12.9009 9.07175 12.5371 8.70801 12.0884 8.70801Z"
        fill="#FFF7ED"
      />
      <path
        d="M11.9973 17.2964C12.4963 17.2964 12.9009 16.8918 12.9009 16.3928C12.9009 15.8938 12.4963 15.4893 11.9973 15.4893C11.4983 15.4893 11.0938 15.8938 11.0938 16.3928C11.0938 16.8918 11.4983 17.2964 11.9973 17.2964Z"
        fill="#FFF7ED"
      />
    </svg>
  );
};

const ServiceRequestModal = ({ onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [viewImage, setViewImage] = useState(null);
  const [thankYou, setThankYou] = useState(false);

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
    reset();
    setImages([]);
    setThankYou(true);
  };

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-black/20 flex items-center justify-center z-50 p-4">
        <div className="max-w-[645px]  relative w-full rounded-[20px] bg-white px-3 md:px-5 py-4 md:py-8 text-[#333] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="text-xl md:text-[26px]">
              Submit Your Service Request:
            </h2>
            <button onClick={onClose}>
              <CrossCircle />
            </button>
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

              {/* right side */}
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
                      rows={2}
                      placeholder="I need a design like this photo"
                      className="w-full rounded-[10px] p-2 text-sm focus:ring-2 focus:ring-[#C8FFEC] bg-[#EFEFEF] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] focus:outline-0"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Jobsite Address</p>
                    <input
                      type="text"
                      {...register("address")}
                      placeholder="Dhaka, Bangladesh"
                      className="w-full rounded-[10px] p-2 text-sm focus:ring-2 focus:ring-[#C8FFEC] bg-[#EFEFEF] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] focus:outline-0"
                    />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <button
                    type="submit"
                    className="bg-[#C8FFEC] w-full px-6 py-3 rounded-md font-medium hover:bg-[#C8FFEC]/80 transition"
                  >
                    Submit Service Request
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* all modals */}

      {/* view full image Modal */}
      {viewImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]"
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

      {/* request submit Modal */}
      {thankYou && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[70]">
          <div className="max-w-[600px]  relative w-full rounded-[20px] bg-white px-3 md:px-5 py-4 md:py-8 text-[#333] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
            <div className="flex items-center justify-between mb-2.5">
              <h2 className="text-xl md:text-[26px]">
                Thank you for your Service Request
              </h2>
              <button
                onClick={() => {
                  setThankYou(false);
                  onClose();
                }}
              >
                <CrossCircle />
              </button>
            </div>
            <p className="text-sub-text">
              Here is your service request number: s45656
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceRequestModal;
