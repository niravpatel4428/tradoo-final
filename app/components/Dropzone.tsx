"use client";

import React, { useState, DragEvent, ChangeEvent } from "react";

export default function Dropzone() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const maxSize = 5 * 1024 * 1024; // 5MB

  const validateFile = (file: File) => {
    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF, DOC and DOCX formats are allowed.");
      return false;
    }
    if (file.size > maxSize) {
      setError("File size must be under 5MB.");
      return false;
    }
    return true;
  };

  const handleFile = (file: File) => {
    setError(null);

    if (!validateFile(file)) return;

    setFileName(file.name);

    console.log("Uploaded file:", file);
  };

  // Drag + Drop Handlers
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: DragEvent) => {
    handleDrag(e);
    setIsDragOver(true);
  };

  const handleDragOut = (e: DragEvent) => {
    handleDrag(e);
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    handleDrag(e);
    setIsDragOver(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  // File Select (click)
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFile(selectedFile);
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base leading-5.5 font-medium text-gray800 capitalize">Resume / CV</h3>

      {/* Upload area */}
      <div
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`w-full flex flex-col items-center justify-center rounded-xl p-10 text-center transition-all
          border-2 border-dashed cursor-pointer
          ${
            isDragOver
              ? "border-[#0D9488] bg-white"
              : "border-gray400 bg-white"
          }
        `}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {/* Hidden File Input */}
        <input
          id="fileInput"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleSelect}
        />

        {!fileName ? (
          <>
            <p className="text-gray800 text-base leading-5.5">
              Drag and drop file here or{" "}
              <span
                className="text-[#0D9488] text-base leading-[1.4] cursor-pointer hover:underline hover:underline-offset-2"
              >
                Select
              </span>{" "}
              to upload
            </p>

            <p className="text-gray500 text-base leading-5.5 mt-2">
              PDF, DOC or DOCX format, max 5MB
            </p>
          </>
        ) : (
          <p className="text-gray800 font-medium text-base">
            Uploaded: <span className="text-[#0D9488]">{fileName}</span>
          </p>
        )}

        {error && (
          <p className="text-red-500 text-sm mt-3">{error}</p>
        )}
      </div>
    </div>
  );
}
