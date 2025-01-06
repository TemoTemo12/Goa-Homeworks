import React from 'react';

function TestimonialsPage() {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-4">მომხმარებლის მოსაზრებები</h2>
      <div className="space-y-4">
        <div>
          <p className="italic">"ძალიან დამეხმარნენ, ჩემი ბიზნესი გაიზარდა!"</p>
          <p className="font-bold">მარიამი, მარკეტინგის სპეციალისტი</p>
        </div>
        <div>
          <p className="italic">"მარტივი და ეფექტური მარკეტინგული კამპანია."</p>
          <p className="font-bold">გიორგი, ბიზნესმენია</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;
