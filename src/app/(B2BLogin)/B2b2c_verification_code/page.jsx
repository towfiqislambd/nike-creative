"use client";
import React from "react";

export default function B2B2CVerificationCodePage() {
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
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
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

  const handlePaste = (e) => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      console.log("Verification code submitted:", code);
      await new Promise((r) => setTimeout(r, 800));
      alert("Code submitted: " + code);
    } finally {
      setSubmitting(false);
    }
  };

  const resend = () => {
    if (seconds > 0) return;
    console.log("Resending code...");
    setSeconds(25);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/fYVRrMc6/B2b2c-Login.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Center Card */}
      <div className="relative z-10 w-full max-w-xl bg-white/90 backdrop-blur-sm p-5 rounded-3xl shadow-lg text-center">
        <h2 className="text-center text-[#333] not-italic font-normal leading-[150%] text-[24px] sm:text-[26px] mb-2">
          Verification Code
        </h2>
        <p className="text-sm text-gray-500">
          Enter verification code sent to your email address
        </p>
        <a href="#" className="text-[#21BBA2] text-sm underline block mb-6">
          abcdef@gmail.com
        </a>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="lavelStyle">Code</label>
            <div className="flex justify-center gap-3" onPaste={handlePaste}>
              {values.map((val, i) => (
                <input
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-12 h-12 rounded-lg border border-[#CFCFCF] text-center text-lg tracking-widest focus:border-[#21BBA2] focus:ring-2 focus:ring-[#21BBA2]/20"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={code.length !== LENGTH || submitting}
              className="px-16 py-[12px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer hover:bg-[#1aa58e] transition disabled:opacity-70"
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
    </main>
  );
}
