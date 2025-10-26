"use client";
import React from "react";

export default function VerificationCodePage() {
  const LENGTH = 6;
  const [values, setValues] = React.useState(Array(LENGTH).fill(""));
  const inputsRef = React.useRef([]);
  const [seconds, setSeconds] = React.useState(25);
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  React.useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const handleChange = (idx, char) => {
    const v = char.replace(/\s/g, "").slice(-1);
    const next = [...values];
    next[idx] = v;
    setValues(next);
    if (v && idx < LENGTH - 1) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const text = (e.clipboardData.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, LENGTH);
    const next = Array(LENGTH).fill("");
    for (let i = 0; i < text.length; i++) next[i] = text[i];
    setValues(next);
    const focusIdx = Math.min(text.length, LENGTH - 1);
    inputsRef.current[focusIdx]?.focus();
  };

  const code = values.join("");

  const onSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      console.log("verify code:", code);
      await new Promise(r => setTimeout(r, 800));
      alert("Code submitted: " + code);
    } finally {
      setSubmitting(false);
    }
  };

  const resend = () => {
    if (seconds > 0) return;
    console.log("resend code");
    setSeconds(25);
  };

  return (
    <main>
      {/* <Container> */}
      <div className="py-10 container">
        <div className="grid lg:grid-cols-2 xl:gap-38 items-center">
          <div className="xl:p-0 p-5">
            <div className="mb-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <img
                  src="https://i.ibb.co.com/fYWCxw2Y/logo.png"
                  alt="logo"
                  className="h-10 w-auto"
                />
                <h4 className="section_title">Verification Code</h4>
                <p className="text-sm text-gray-500">
                  Enter verification code sent to your email address
                </p>
                <a className="text-[#21BBA2] text-sm underline" href="#">
                  abcdef@gmail.com
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="">
                <label className="lavelStyle text-left mb-6 ml-47">Code</label>
                <div
                  className="flex justify-center items-center  gap-3"
                  onPaste={handlePaste}
                >
                  {values.map((val, i) => (
                    <input
                      key={i}
                      ref={el => (inputsRef.current[i] = el)}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={val}
                      onChange={e => handleChange(i, e.target.value)}
                      onKeyDown={e => handleKeyDown(i, e)}
                      className="w-12 h-12 rounded-lg border border-[#CFCFCF] text-center text-lg tracking-widest focus:border-[#21BBA2] focus:ring-2 focus:ring-[#21BBA2]/20"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={code.length !== LENGTH || submitting}
                  className="w-full py-[15px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer disabled:opacity-70"
                >
                  {submitting ? "Verifying..." : "Verify Now"}
                </button>
              </div>

              <p className="text-center text-sm text-primary-text">
                Didn’t receive the code?{" "}
                {seconds > 0 ? (
                  <span>Resend in {seconds} seconds</span>
                ) : (
                  <button
                    type="button"
                    onClick={resend}
                    className="text-[#21BBA2] underline"
                  >
                    Resend
                  </button>
                )}
              </p>
            </form>
          </div>

          <div className="p-5 lg:p-0">
            <img
              src="https://i.ibb.co.com/Z1p9cLXP/19245710-6101095-1.png"
              alt="Verification illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </main>
  );
}
