import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-foreground mb-4">404</h1>
            <p className="text-secondary text-xl mb-8">
              The page you're looking for doesn't exist.
            </p>
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
