const Content = () => {
    return (
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What is SQL?</h2>
        <p className="mb-4 text-gray-700">
          SQL (Structured Query Language) is a standard language for managing and manipulating databases. 
          It is widely used to query, insert, update, and delete data in relational database systems.
        </p>
        <h3 className="text-xl font-semibold mb-2">Common SQL Commands</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>SELECT:</strong> Retrieve data from a database.</li>
          <li><strong>INSERT:</strong> Add new records to a database.</li>
          <li><strong>UPDATE:</strong> Modify existing data.</li>
          <li><strong>DELETE:</strong> Remove data from a database.</li>
        </ul>
      </main>
    );
  };
  
  export default Content;
  