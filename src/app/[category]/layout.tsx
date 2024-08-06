import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Breadcrumb />
      {children}
      <Footer />
    </div>
  );
}
