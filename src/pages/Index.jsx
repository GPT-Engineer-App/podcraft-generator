import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">PODCASTER</h1>
        <p className="text-xl text-gray-300 mb-8">Create and listen to AI-generated podcasts!</p>
        <Link to="/podcast">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Go to Podcast Platform
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
