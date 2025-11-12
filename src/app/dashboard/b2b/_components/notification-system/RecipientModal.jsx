"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Modal from "../../../../../Components/Common/Modal";

const RecipientModal = ({ isOpen, onClose, onSave, initialData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || {
      email: "",
      name: "",
      invoices: [],
    },
  });

  useEffect(() => {
    reset(initialData || { email: "", name: "", invoices: [] });
  }, [initialData, reset]);

  const onSubmit = (data) => {
    onSave(data);
    reset();
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={"max-w-[730px]"}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[16px] px-3 py-2"
      >
        <h2 className="card_title">
          {initialData ? "Edit Recipient" : "Add Recipient"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="card_label">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="card_input"
              />
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="card_label">Name / Label (Optional)</label>
              <input type="text" {...register("name")} className="card_input" />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2 md:mb-5 text-xl">
              Notification Preferences
            </h3>
            <div className="space-y-2">
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("invoices")} className=""/>
                <div>
                  <p>New Invoices</p>
                  <p>Receive an email when a new invoice is generated after placing an order.</p>
                </div>
              </label>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("invoices")} value={'new-invoices'} />
                <div>
                  <p>New Invoices</p>
                  <p>Receive an email when a new invoice is generated after placing an order.</p>
                </div>
              </label>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("invoices")} value={'new-invoices'} />
                <div>
                  <p>New Invoices</p>
                  <p>Receive an email when a new invoice is generated after placing an order.</p>
                </div>
              </label>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("invoices")} value={'new-invoices'} />
                <div>
                  <p>New Invoices</p>
                  <p>Receive an email when a new invoice is generated after placing an order.</p>
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="card_btn_outline"
            >
              Cancel
            </button>
            <button type="submit" className="card_btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RecipientModal;
