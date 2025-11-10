"use client";

import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import { Button } from "./Drawer";
import Link from "next/link";

interface ModalProjectProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  linkTo?: string;
}

const ModalProject: React.FC<ModalProjectProps> = ({
  isOpen,
  onClose,
  title = "Project Modal",
  text,
  imageSrc,
  imageAlt = "Modal Image",
  children,
  linkTo,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      animation="fade"
      size="md"
    >
      <Link href={linkTo || ""} target="_blank">
        <div className="space-y-4">
          {/* Imagen opcional */}
          {imageSrc && (
            <div className="w-full flex justify-center mb-4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={400}
                className="rounded-lg object-cover"
                unoptimized
                priority
              />
            </div>
          )}

          {/* Texto opcional */}
          {text && (
            <p className="text-gray-300 text-center">
              {text}
            </p>
          )}

          {/* Contenido personalizado */}
          {children}

          {/* Botón de cierre */}
          <div className="flex justify-end">
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </div>
      </Link>
    </Modal>
  );
};

export default ModalProject;
