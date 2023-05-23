const Blogs = () => {
  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-2">
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </h2>
        <p className="text-gray-500 text-sm mb-4">By semon</p>
        <p className="text-gray-700">
          Access tokens are short-lived tokens that are used to access protected resources. Refresh tokens are long-lived tokens that can be used to obtain new access tokens without having to re-authenticate with the authorization server. Here are some best practices for storing access tokens and refresh tokens on the client side: Use a secure storage mechanism, such as a browser's local storage or a secure cookie. Encrypt access tokens and refresh tokens before storing them.
        </p>
      </div>
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-2">
          Compare SQL and NoSQL databases?
        </h2>
        <p className="text-gray-500 text-sm mb-4">By semon</p>
        <p className="text-gray-700">
          SQL and NoSQL databases are two different types of databases. SQL databases are relational databases, while NoSQL databases are non-relational databases. Relational databases store data in tables, which are made up of rows and columns. Each row represents a single record, and each column represents a single piece of data about that record. Relational databases use Structured Query Language (SQL) to access and manipulate data. NoSQL databases store data in a variety of ways, including key-value pairs, documents, and graphs. Key-value pairs store data as a key and a value, where the key is a unique identifier for the data and the value is the data itself. Documents store data as a JSON object, which is a collection of key-value pairs. Graphs store data as a network of nodes and edges, where nodes represent entities and edges represent relationships between entities. SQL databases are more structured than NoSQL databases. This makes SQL databases better for storing data that has a fixed schema, such as customer information or product inventory. NoSQL databases are less structured than SQL databases, which makes them better for storing data that does not have a fixed schema, such as social media data or sensor data. SQL databases are typically faster than NoSQL databases for performing queries on structured data. However, NoSQL databases can be faster for performing queries on unstructured data.
        </p>
      </div>
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-2">
          What is express js? What is Nest JS?
        </h2>
        <p className="text-gray-500 text-sm mb-4">By semon</p>
        <p className="text-gray-700">
          Express.js and Nest.js are both web application frameworks for Node.js. Express.js is a minimalist framework that provides a routing layer and a few other basic features. Nest.js is a more opinionated framework that provides a number of features, including dependency injection, routing, and templating. Express.js is a popular choice for building simple web applications. It is easy to learn and use, and there are a large number of resources available to help developers get started. Nest.js is a good choice for building more complex web applications. It provides a number of features that can help developers write more maintainable code.
        </p>
      </div>
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-2">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-gray-500 text-sm mb-4">By semon</p>
        <p className="text-gray-700">
          MongoDB aggregate is a feature that allows you to perform complex operations on data in a MongoDB collection. Aggregate operations are performed using a pipeline, which is a sequence of stages that are applied to the data. Each stage performs an operation on the data, and the output of one stage is passed to the next stage. The stages in a pipeline can be used to filter, group, sort, and transform data.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Blogs;
