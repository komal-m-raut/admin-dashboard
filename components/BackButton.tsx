import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="flex items-center text-gray-500 hover:text-gray-700 gap-1 font-bold mb-5"
    >
      <ArrowLeftCircle size={18} /> {text}
    </Link>
  );
};

export default BackButton;
