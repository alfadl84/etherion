"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-md"
      >
        <div className="stat-number text-8xl font-bold mb-4">404</div>
        <h1 className="text-white text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-white/60 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/en" className="btn-gold">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline-gold">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
