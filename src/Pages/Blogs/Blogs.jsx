

const Blogs = () => {
    return (
        <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-2">blog title</h2>
            <p className="text-gray-500 text-sm mb-4">
              By semon | date
            </p>
            <p className="text-gray-700">content </p>
          </div>
    
      </div>
    </div>
    );
};

export default Blogs;